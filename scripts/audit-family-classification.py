from __future__ import annotations

import importlib.util
import json
import re
import shutil
import unicodedata
from collections import Counter, defaultdict
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parents[1]
TRANSCRIPT_PATH = Path.home() / "Downloads" / "Manual_Flora_Buenos_Aires_Transcrito.md"
OUTPUT_PATH = ROOT / "src" / "data" / "familyClassification.audit.json"
SCIENTIFIC_NAMES_REVIEW_PATH = ROOT / "src" / "data" / "scientificNames.review.json"
ROOT_NODE_ID = "ed2_root"
OPTION_KEYS = ("opcionA", "opcionA_prima")
FAMILY_ID_PREFIX = "ed2_family_"
FAMILY_NAME_ALIASES = {
    "martyniaceae": "martiniaceae",
}


def load_extractor():
    path = ROOT / "scripts" / "extract-common-names.py"
    spec = importlib.util.spec_from_file_location("extract_common_names", path)
    if spec is None or spec.loader is None:
        raise RuntimeError("No se pudo cargar extract-common-names.py")
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


def normalize(value: str) -> str:
    value = unicodedata.normalize("NFD", value)
    value = "".join(char for char in value if unicodedata.category(char) != "Mn")
    return re.sub(r"[^a-z0-9]+", " ", value.lower()).strip()


def normalize_family_name(value: str) -> str:
    normalized = normalize(value).replace(" ", "")
    return FAMILY_NAME_ALIASES.get(normalized, normalized)


def roman_to_int(value: str) -> int:
    values = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}
    total = 0
    previous = 0
    for char in reversed(value):
        current = values[char]
        total += -current if current < previous else current
        previous = max(previous, current)
    return total


def split_family_label(label: str) -> tuple[str, str, str | None]:
    match = re.match(r"^([IVXLCDM]+)\.\s+([^\-]+?)(?:\s+-\s+(.+))?$", label.strip())
    if not match:
        raise ValueError(f"Etiqueta de familia invalida: {label}")
    return match.group(1), match.group(2).strip(), match.group(3)


def is_real_species(item: dict[str, Any]) -> bool:
    name = item.get("nombreCientifico", "")
    return bool(" " in name and not name.startswith(("Grupo ", "Clase ", "Subclase ")))


def source_family_pairs(text: str) -> set[tuple[str, str]]:
    pairs: set[tuple[str, str]] = set()
    pattern = re.compile(
        r"\b([IVXLCDM]+)\.\s*(?:\*+)?([A-Za-zÀ-ÖØ-öø-ÿ]+(?:aceae|ae))(?:\*+)?\b",
        re.IGNORECASE,
    )
    for roman, name in pattern.findall(text):
        pairs.add((roman.upper(), normalize_family_name(name)))
    return pairs


def scientific_index_section(text: str) -> str:
    start = re.search(r"(?m)^.*NDICE DE LOS NOMBRES CIENT.*$", text)
    if not start:
        raise ValueError("No se encontro el indice de nombres cientificos.")
    end = re.search(r"(?m)^\s*INDICE DE NOMBRES VULGARES\s*$", text[start.end() :])
    if not end:
        raise ValueError("No se encontro el indice de nombres vulgares.")
    return text[start.end() : start.end() + end.start()]


def family_index_pages(index_text: str) -> dict[str, int]:
    pages: dict[str, int] = {}
    pattern = re.compile(
        r"(?m)^\s*([A-ZÀ-ÖØ-Þ-]+(?:ACEAE|AE)),\s*(\d{1,3})(?:\s*,.*)?$"
    )
    for name, page in pattern.findall(index_text):
        pages[normalize_family_name(name)] = int(page)
    return pages


def scientific_index_pages(index_text: str) -> dict[str, set[int]]:
    pages: dict[str, set[int]] = defaultdict(set)
    current_genus = ""
    last_epithet = ""
    for raw_line in index_text.splitlines():
        line = re.sub(r"[*_`$]+", "", raw_line).strip()
        parsed = re.match(r"^(.+?),\s*(\d{1,3}(?:\s*,\s*\d{1,3})*)$", line)
        if not parsed:
            continue
        name = re.sub(r"\s+", " ", parsed.group(1)).strip()
        page_values = {int(value) for value in re.findall(r"\d{1,3}", parsed.group(2))}
        if name.upper() == name and len(name) > 3:
            continue

        full_name = re.match(r"^([A-Z][A-Za-zÀ-ÖØ-öø-ÿ-]+)\s+(.+)$", name)
        if full_name:
            current_genus = full_name.group(1)
            tail = full_name.group(2)
            pages[normalize(f"{current_genus} {tail}")].update(page_values)
            last_epithet = tail.split()[0]
            continue
        if re.match(r"^[A-Z][A-Za-zÀ-ÖØ-öø-ÿ-]+$", name):
            current_genus = name
            last_epithet = ""
            continue
        if not current_genus:
            continue
        if re.match(r"^(?:var\.|subsp\.|ssp\.|f\.)\s+", name, re.IGNORECASE):
            if last_epithet:
                pages[normalize(f"{current_genus} {last_epithet} {name}")].update(page_values)
            continue
        pages[normalize(f"{current_genus} {name}")].update(page_values)
        last_epithet = name.split()[0]
    return pages


def expected_groups(text: str) -> dict[str, set[str]]:
    start = text.find("\nGRUPO A\n")
    family_section = re.search(
        r"(?m)^\s*(?:\*+)?I\.\s*(?:\*+)?SELAGINELLACEAE(?:\*+)?\s*$",
        text[start:] if start >= 0 else "",
    )
    if start < 0 or not family_section:
        raise ValueError("No se pudieron aislar los grupos A-E de la clave general.")
    end = start + family_section.start()
    section = text[start:end]
    headings = list(re.finditer(r"(?m)^GRUPO ([A-E])\s*$", section))
    result: dict[str, set[str]] = defaultdict(set)
    reference = re.compile(
        r"(?:\*+)?([A-ZÀ-ÖØ-Þ][A-Za-zÀ-ÖØ-öø-ÿ]+(?:aceae|ae))(?:\*+)?\s*\(p(?:ag|ág)?\.\s*\d+\)",
        re.IGNORECASE,
    )
    for index, heading in enumerate(headings):
        block_end = headings[index + 1].start() if index + 1 < len(headings) else len(section)
        for family_name in reference.findall(section[heading.end() : block_end]):
            result[normalize_family_name(family_name)].add(heading.group(1))
    return result


def actual_family_groups(tree: dict[str, Any]) -> dict[str, set[str]]:
    groups: dict[str, set[str]] = defaultdict(set)
    stack: list[tuple[str, str | None]] = [(ROOT_NODE_ID, None)]
    seen: set[tuple[str, str | None]] = set()
    while stack:
        node_id, group = stack.pop()
        state = (node_id, group)
        if state in seen:
            continue
        seen.add(state)
        node = tree.get(node_id)
        if not node:
            continue
        milestone = re.fullmatch(r"Grupo ([A-E])", node.get("milestone", ""))
        if milestone:
            group = milestone.group(1)
        if node_id.startswith(FAMILY_ID_PREFIX):
            if group:
                groups[normalize_family_name(node_id.removeprefix(FAMILY_ID_PREFIX))].add(group)
            continue
        for option_key in OPTION_KEYS:
            next_node_id = node.get(option_key, {}).get("nextNodeId")
            if next_node_id:
                stack.append((next_node_id, group))
    return groups


def family_subtree(
    root_id: str, tree: dict[str, Any]
) -> tuple[set[str], set[str], list[int]]:
    species_ids: set[str] = set()
    foreign_family_roots: set[str] = set()
    pages: list[int] = []
    stack = [root_id]
    seen: set[str] = set()
    while stack:
        node_id = stack.pop()
        if node_id in seen:
            continue
        seen.add(node_id)
        if node_id != root_id and node_id.startswith(FAMILY_ID_PREFIX):
            foreign_family_roots.add(node_id)
            continue
        node = tree.get(node_id)
        if not node:
            continue
        if isinstance(node.get("manualPage"), int):
            pages.append(node["manualPage"])
        if node.get("especie", {}).get("id"):
            species_ids.add(node["especie"]["id"])
        for option_key in OPTION_KEYS:
            option = node.get(option_key, {})
            if option.get("especieId"):
                species_ids.add(option["especieId"])
            if option.get("nextNodeId"):
                stack.append(option["nextNodeId"])
    return species_ids, foreign_family_roots, pages


def metadata_page(item: dict[str, Any]) -> int | None:
    match = re.search(r"(?:pagina|página)\s+(\d{1,3})", item.get("distribucion", ""))
    return int(match.group(1)) if match else None


def main() -> None:
    if not TRANSCRIPT_PATH.exists():
        raise FileNotFoundError(f"No se encontro la transcripcion: {TRANSCRIPT_PATH}")

    extractor = load_extractor()
    try:
        species, tree = extractor.load_second_edition()
    finally:
        temporary_directory = getattr(extractor, "TMP_DIR", None)
        if temporary_directory and Path(temporary_directory).exists():
            shutil.rmtree(temporary_directory)
    transcript = TRANSCRIPT_PATH.read_text(encoding="utf-8")
    index_text = scientific_index_section(transcript)
    index_family_pages = family_index_pages(index_text)
    index_species_pages = scientific_index_pages(index_text)
    source_pairs = source_family_pairs(transcript)
    source_groups = expected_groups(transcript)
    route_groups = actual_family_groups(tree)
    scientific_name_review = json.loads(
        SCIENTIFIC_NAMES_REVIEW_PATH.read_text(encoding="utf-8")
    )
    scientific_review_by_id = {
        item["speciesId"]: item for item in scientific_name_review["review"]
    }

    real_species = {key: item for key, item in species.items() if is_real_species(item)}
    family_metadata = {
        normalize_family_name(item["nombreCientifico"]): (key, item)
        for key, item in species.items()
        if not is_real_species(item)
    }
    if len(real_species) != 1732 or len(family_metadata) != 145:
        raise ValueError(
            f"Se esperaban 1732 especies y 145 familias; se encontraron "
            f"{len(real_species)} y {len(family_metadata)}."
        )

    family_rows: list[dict[str, Any]] = []
    species_by_family: dict[str, set[str]] = defaultdict(set)
    malformed_species_families: list[dict[str, str]] = []
    for species_id, item in real_species.items():
        try:
            _roman, family_name, _subfamily = split_family_label(item["familia"])
        except ValueError:
            malformed_species_families.append(
                {"speciesId": species_id, "family": item.get("familia", "")}
            )
            continue
        species_by_family[normalize_family_name(family_name)].add(species_id)

    ordered_families: list[tuple[int, str, str, str, dict[str, Any]]] = []
    for normalized_name, (metadata_id, item) in family_metadata.items():
        roman, family_name, _subfamily = split_family_label(item["familia"])
        ordered_families.append(
            (roman_to_int(roman), normalized_name, roman, family_name, item)
        )
    ordered_families.sort()

    issues: dict[str, list[dict[str, Any]]] = defaultdict(list)
    warnings: dict[str, list[dict[str, Any]]] = defaultdict(list)
    seen_species: dict[str, set[str]] = defaultdict(set)
    source_page_verified = 0
    source_page_unavailable = 0
    numbered_entry_or_manual_verified = 0

    for position, (number, normalized_name, roman, family_name, item) in enumerate(
        ordered_families
    ):
        metadata_start = metadata_page(item)
        index_start = index_family_pages.get(normalized_name)
        start_page = index_start or metadata_start
        next_item = ordered_families[position + 1][4] if position + 1 < len(ordered_families) else None
        next_name = ordered_families[position + 1][1] if position + 1 < len(ordered_families) else None
        end_page = (
            index_family_pages.get(next_name or "")
            or (metadata_page(next_item) if next_item else 715)
            or 715
        )
        root_id = f"{FAMILY_ID_PREFIX}{normalized_name}"
        root = tree.get(root_id)
        subtree_species, foreign_roots, subtree_pages = family_subtree(root_id, tree)
        declared_species = species_by_family.get(normalized_name, set())

        row_issues: list[str] = []
        if number != position + 1:
            row_issues.append("non_sequential_roman")
        if (roman, normalized_name) not in source_pairs:
            row_issues.append("roman_family_pair_not_found_in_manual")
        if index_start is not None and metadata_start != index_start:
            row_issues.append("family_start_page_differs_from_index")
        if not root:
            row_issues.append("missing_family_root")
        elif normalize_family_name(root.get("milestone", "")) != normalized_name and normalized_name not in normalize_family_name(root.get("milestone", "")):
            row_issues.append("family_root_milestone_mismatch")
        if foreign_roots:
            row_issues.append("family_subtree_enters_another_family")
        if subtree_species != declared_species:
            row_issues.append("family_subtree_species_mismatch")
        if start_page is not None and any(
            page < start_page - 1 or page > end_page + 1 for page in subtree_pages
        ):
            row_issues.append("node_page_outside_family_range")
        if source_groups.get(normalized_name, set()) != route_groups.get(normalized_name, set()):
            row_issues.append("general_key_group_mismatch")

        for species_id in subtree_species:
            seen_species[species_id].add(normalized_name)
        for species_id in declared_species:
            scientific_name = real_species[species_id]["nombreCientifico"]
            pages = index_species_pages.get(normalize(scientific_name))
            if not pages:
                source_page_unavailable += 1
                review = scientific_review_by_id.get(species_id, {})
                if str(review.get("reviewStatus", "")).startswith("confirmed_"):
                    numbered_entry_or_manual_verified += 1
                else:
                    issues["speciesWithoutManualEvidence"].append(
                        {
                            "speciesId": species_id,
                            "scientificName": scientific_name,
                            "family": family_name,
                        }
                    )
                continue
            source_page_verified += 1
            if start_page is not None and not any(
                start_page <= page <= end_page + 1 for page in pages
            ):
                warnings["scientificIndexPageAnomalies"].append(
                    {
                        "speciesId": species_id,
                        "scientificName": scientific_name,
                        "family": family_name,
                        "indexPages": sorted(pages),
                        "familyPageRange": [start_page, end_page],
                        "manualEntryStatus": scientific_review_by_id.get(
                            species_id, {}
                        ).get("reviewStatus"),
                        "manualEntry": scientific_review_by_id.get(species_id, {}).get(
                            "manualHeader"
                        ),
                    }
                )

        if row_issues:
            issues["familyIssues"].append(
                {
                    "family": f"{roman}. {family_name}",
                    "issues": row_issues,
                    "foreignFamilyRoots": sorted(foreign_roots),
                    "declaredSpecies": len(declared_species),
                    "subtreeSpecies": len(subtree_species),
                }
            )

        family_rows.append(
            {
                "number": number,
                "roman": roman,
                "family": family_name,
                "manualStartPage": metadata_start,
                "indexStartPage": index_start,
                "nodePageRange": [min(subtree_pages), max(subtree_pages)] if subtree_pages else None,
                "expectedGroups": sorted(source_groups.get(normalized_name, set())),
                "routeGroups": sorted(route_groups.get(normalized_name, set())),
                "speciesCount": len(declared_species),
                "status": "needs_review" if row_issues else "confirmed",
            }
        )

    multiply_classified = [
        {
            "speciesId": species_id,
            "scientificName": real_species[species_id]["nombreCientifico"],
            "familyRoots": sorted(families),
        }
        for species_id, families in seen_species.items()
        if len(families) != 1
    ]
    missing_from_family_roots = [
        {
            "speciesId": species_id,
            "scientificName": item["nombreCientifico"],
            "family": item["familia"],
        }
        for species_id, item in real_species.items()
        if species_id not in seen_species
    ]
    if malformed_species_families:
        issues["malformedSpeciesFamilies"] = malformed_species_families
    if multiply_classified:
        issues["speciesReachedFromMultipleFamilies"] = multiply_classified
    if missing_from_family_roots:
        issues["speciesMissingFromFamilyRoots"] = missing_from_family_roots

    issue_counts = {key: len(value) for key, value in issues.items()}
    warning_counts = {key: len(value) for key, value in warnings.items()}
    report = {
        "sources": {
            "manualTranscript": str(TRANSCRIPT_PATH),
            "familyPages": "Indice de los nombres cientificos",
            "romanNumbersAndGroups": "Clave para familias y encabezados del manual",
        },
        "summary": {
            "familiesReviewed": len(family_rows),
            "familiesConfirmed": sum(row["status"] == "confirmed" for row in family_rows),
            "speciesReviewed": len(real_species),
            "speciesInExactlyOneFamilyTree": sum(
                len(families) == 1 for families in seen_species.values()
            ),
            "speciesWithScientificIndexPageEvidence": source_page_verified,
            "speciesWithoutExactScientificIndexPageMatch": source_page_unavailable,
            "speciesVerifiedByNumberedEntryOrManualReview": numbered_entry_or_manual_verified,
            "familiesWithGeneralKeyGroups": len(source_groups),
            "issueCounts": issue_counts,
            "warningCounts": warning_counts,
            "blockingIssues": sum(issue_counts.values()),
            "reviewWarnings": sum(warning_counts.values()),
        },
        "issues": dict(issues),
        "warnings": dict(warnings),
        "families": family_rows,
    }
    OUTPUT_PATH.write_text(
        json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )

    print(f"Families reviewed: {len(family_rows)}")
    print(f"Families confirmed: {report['summary']['familiesConfirmed']}")
    print(f"Species reviewed: {len(real_species)}")
    print(
        "Species in exactly one family tree: "
        f"{report['summary']['speciesInExactlyOneFamilyTree']}"
    )
    print(f"Species with index page evidence: {source_page_verified}")
    print(f"Species without exact index page match: {source_page_unavailable}")
    print(f"Blocking issues: {report['summary']['blockingIssues']}")
    print(f"Review warnings: {report['summary']['reviewWarnings']}")
    for issue_name, count in sorted(issue_counts.items()):
        print(f"{issue_name}: {count}")
    for warning_name, count in sorted(warning_counts.items()):
        print(f"{warning_name}: {count}")
    print(f"Report: {OUTPUT_PATH}")


if __name__ == "__main__":
    main()
