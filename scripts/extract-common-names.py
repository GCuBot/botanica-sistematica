from __future__ import annotations

import argparse
import difflib
import json
import re
import shutil
import subprocess
import unicodedata
from collections import defaultdict
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parents[1]
DEFAULT_TRANSCRIPT = Path.home() / "Downloads" / "Manual_Flora_Buenos_Aires_Transcrito.md"
FALLBACK_TRANSCRIPT = ROOT / "manual-text" / "second-edition" / "manual-completo.txt"
TMP_DIR = ROOT / ".tmp-second-edition-common-names"
OUTPUT_PATH = ROOT / "src" / "data" / "secondEditionCommonNames.ts"
REVIEW_PATH = ROOT / "src" / "data" / "secondEditionCommonNames.review.json"
INDEX_OCR_CORRECTIONS = {
    "toio": "Tojo",
}

# Names confirmed by the vulgar-name index but missed in the species-entry OCR.
VERIFIED_COMMON_NAMES = {
    "ed2_pteridium_aquilinum_arachnoideum": ["Helecho común"],
    "ed2_spirodela_intermedia": ["Lenteja de agua"],
    "ed2_urtica_dioica": ["Ortiga"],
    "ed2_jodina_rhombifolia": ["Sombra de toro", "Quebracho flojo"],
    "ed2_rivina_humilis": ["Sangre de toro"],
    "ed2_sarothamnus_scoparius": ["Retama"],
    "ed2_oxalis_pes_caprae": ["Vinagrillo"],
    "ed2_heimia_salicifolia": ["Quiebra-arado"],
    "ed2_oenothera_affinis": ["Flor de la oración"],
    "ed2_mentha_x_rotundifolia": ["Menta"],
    "ed2_artemisia_absinthium": ["Ajenjo"],
    "ed2_artemisia_verlotorum": ["Yuyo de San Vicente"],
    "ed2_carduus_thoermeri": ["Cardo"],
    "ed2_carduus_acanthoides": ["Cardo negro", "Cardo"],
    "ed2_sonchus_oleraceus": ["Cerraja"],
    "ed2_lactuca_sativa": ["Lechuga"],
}

SPECIES_LINE = re.compile(
    r"(?m)^\s*(?:\*\*)?(?P<number>\d{1,3}(?:\.\d{3})?)\.\s+(?P<header>[^\n]+)"
)
FALLBACK_SPECIES_LINE = re.compile(
    r"(?m)^[^A-Za-z0-9\n]{0,12}(?P<number>\d{1,3}(?:\.\d{3})?)\.\s+(?P<header>[^\n]+)"
)


def normalize(value: str) -> str:
    value = unicodedata.normalize("NFD", value)
    value = "".join(char for char in value if unicodedata.category(char) != "Mn")
    return re.sub(r"[^a-z0-9]+", " ", value.lower()).strip()


def clean_markup(value: str) -> str:
    value = re.sub(r"<!--.*?-->", " ", value, flags=re.DOTALL)
    value = re.sub(r"[*_`$]+", "", value)
    value = re.sub(r"([A-Za-zÁÉÍÓÚÜÑáéíóúüñ])-\s+([A-Za-zÁÉÍÓÚÜÑáéíóúüñ])", r"\1\2", value)
    return re.sub(r"\s+", " ", value).strip()


def clean_common_name(value: str) -> str:
    value = clean_markup(value).strip(" .,:;—-")
    value = re.sub(r"\s+", " ", value)
    return value[:1].upper() + value[1:].lower()


def compile_second_edition() -> None:
    if TMP_DIR.exists():
        shutil.rmtree(TMP_DIR)
    subprocess.run(
        [
            "npx.cmd",
            "tsc",
            "-p",
            "tsconfig.json",
            "--noEmit",
            "false",
            "--outDir",
            str(TMP_DIR),
            "--module",
            "commonjs",
            "--moduleResolution",
            "node",
            "--target",
            "es2020",
        ],
        cwd=ROOT,
        check=True,
    )


def load_second_edition() -> tuple[dict[str, Any], dict[str, Any]]:
    compile_second_edition()
    script = (
        "const m=require('./.tmp-second-edition-common-names/src/data/secondEdition.js');"
        "console.log(JSON.stringify({species:m.secondEditionSpeciesData,tree:m.secondEditionTree}));"
    )
    result = subprocess.run(
        ["node", "-e", script],
        cwd=ROOT,
        check=True,
        capture_output=True,
        encoding="utf-8",
        text=True,
    )
    payload = json.loads(result.stdout)
    return payload["species"], payload["tree"]


def ordered_species(species: dict[str, Any]) -> list[tuple[str, dict[str, Any]]]:
    return [
        (species_id, item)
        for species_id, item in species.items()
        if " " in item["nombreCientifico"]
    ]


def species_pages(tree: dict[str, Any]) -> dict[str, set[int]]:
    pages: dict[str, set[int]] = defaultdict(set)
    for node in tree.values():
        page = node.get("manualPage")
        if not isinstance(page, int):
            continue
        for option_key in ("opcionA", "opcionA_prima"):
            species_id = (node.get(option_key) or {}).get("especieId")
            if species_id:
                pages[species_id].add(page)
    return pages


def parse_index(text: str) -> list[dict[str, Any]]:
    match = re.search(r"\nINDICE DE NOMBRES VULGARES\n", text)
    if not match:
        raise ValueError("No se encontró el índice de nombres vulgares.")

    entries: list[dict[str, Any]] = []
    for raw_line in text[match.end() :].splitlines():
        line = clean_markup(raw_line)
        if not line or "NOMBRES VULGARES" in line or "FLORA DE BUENOS AIRES" in line:
            continue
        parsed = re.match(r"^(.+?),\s*(\d+(?:\s*,\s*\d+)*)$", line)
        if not parsed:
            continue
        raw_name, raw_pages = parsed.groups()
        common_name = clean_common_name(raw_name)
        common_name = INDEX_OCR_CORRECTIONS.get(normalize(common_name), common_name)
        entries.append(
            {
                "commonName": common_name,
                "pages": [int(page) for page in re.findall(r"\d+", raw_pages)],
            }
        )
    return entries


def is_uppercase_name(value: str) -> bool:
    letters = [character for character in value if character.isalpha()]
    uppercase = sum(character.isupper() for character in letters)
    return len(letters) >= 3 and len(value) <= 120 and uppercase / len(letters) >= 0.45


def split_common_names(value: str) -> list[str]:
    names = []
    for part in re.split(r"\s*[,;]\s*", value):
        cleaned = clean_common_name(part)
        if cleaned:
            names.append(cleaned)
    return names


def expected_epithets(scientific_name: str) -> list[str]:
    ignored = {"var", "f", "subsp", "ssp", "x"}
    words = normalize(scientific_name).split()
    return [word for word in words[1:] if word not in ignored and len(word) > 2]


def candidate_score(header: str, scientific_name: str) -> int:
    normalized_header = normalize(clean_markup(header))
    epithets = expected_epithets(scientific_name)
    if not epithets:
        return 0
    header_words = normalized_header.split()
    header_candidates = header_words + [
        header_words[index] + header_words[index + 1]
        for index in range(len(header_words) - 1)
    ]
    first_epithet_score = max(
        (
            difflib.SequenceMatcher(None, epithets[0], word).ratio()
            for word in header_candidates
        ),
        default=0,
    )
    if first_epithet_score < 0.78:
        return 0
    score = 10
    score += round(first_epithet_score * 5)
    score += sum(2 for epithet in epithets[1:] if epithet in normalized_header)
    genus = normalize(scientific_name).split()[0]
    if genus in normalized_header:
        score += 5
    elif re.search(rf"\b{re.escape(genus[0])}\b", normalized_header):
        score += 1
    if "—" in header:
        score += 4
    return score


def extract_uppercase_names(snippet: str) -> list[str]:
    opening_delimiter = r"(?:—|–|(?<!\w)-{1,3})"
    closing_delimiter = r"(?:—|–|(?<=\.)\s*-{1,3}|-{1,3}(?!\w))"
    match = re.search(
        rf"{opening_delimiter}\s*(.*?)\s*{closing_delimiter}",
        snippet,
        flags=re.DOTALL,
    )
    if not match:
        return []

    cleaned = clean_markup(match.group(1)).strip(" .")
    normalized = normalize(cleaned)
    if re.search(r"\d|\bfig\b|aceae\b|\bflora de\b|\bclase\b", normalized):
        return []
    if is_uppercase_name(cleaned):
        return [
            name
            for name in split_common_names(cleaned)
            if not normalize(name).startswith(("pagina ", "pdf page "))
        ]
    return []


def canonicalize_common_name(
    name: str,
    index_entries: list[dict[str, Any]],
    expected_pages: set[int] | None = None,
) -> tuple[str, str]:
    normalized_name = normalize(name)
    nearby_entries = [
        entry
        for entry in index_entries
        if expected_pages
        and any(
            abs(page - expected_page) <= 2
            for page in entry["pages"]
            for expected_page in expected_pages
        )
    ]
    exact_entries = [
        entry
        for entry in index_entries
        if normalize(entry["commonName"]) == normalized_name
    ]
    exact = [entry["commonName"] for entry in exact_entries]
    if exact:
        exact_is_nearby = any(entry in nearby_entries for entry in exact_entries)
        if nearby_entries and not exact_is_nearby:
            nearby_scored = sorted(
                (
                    difflib.SequenceMatcher(
                        None, normalized_name, normalize(entry["commonName"])
                    ).ratio(),
                    entry["commonName"],
                )
                for entry in nearby_entries
            )
            nearby_score, nearby_name = nearby_scored[-1]
            if nearby_score >= 0.85:
                return nearby_name, "corrected_from_index"
        return exact[0], "exact_index_match"

    scored = sorted(
        (
            difflib.SequenceMatcher(None, normalized_name, normalize(entry["commonName"])).ratio(),
            entry["commonName"],
        )
        for entry in index_entries
    )
    best_score, best_name = scored[-1]
    second_score = scored[-2][0] if len(scored) > 1 else 0
    if best_score >= 0.82 and best_score - second_score >= 0.025:
        return best_name, "corrected_from_index"

    if not nearby_entries:
        return name, "species_entry_only"

    scored = sorted(
        (
            difflib.SequenceMatcher(None, normalized_name, normalize(entry["commonName"])).ratio(),
            entry["commonName"],
        )
        for entry in nearby_entries
    )
    best_score, best_name = scored[-1]
    second_score = scored[-2][0] if len(scored) > 1 else 0
    if best_score >= 0.72 and best_score - second_score >= 0.025:
        return best_name, "corrected_from_index"
    return name, "species_entry_only"


def extract_species_names(
    text: str,
    fallback_text: str,
    species: dict[str, Any],
    tree: dict[str, Any],
    index_entries: list[dict[str, Any]],
) -> tuple[dict[str, list[str]], list[dict[str, Any]]]:
    ordered = ordered_species(species)
    if len(ordered) != 1732:
        raise ValueError(f"Se esperaban 1732 especies y se encontraron {len(ordered)}.")

    def index_source(source_text: str, pattern: re.Pattern[str]):
        by_number: dict[int, list[re.Match[str]]] = defaultdict(list)
        matches = list(pattern.finditer(source_text))
        following = {
            match.start(): matches[index + 1].start() if index + 1 < len(matches) else len(source_text)
            for index, match in enumerate(matches)
        }
        for match in matches:
            number = int(match.group("number").replace(".", ""))
            if 1 <= number <= len(ordered):
                by_number[number].append(match)
        return by_number, following

    lines_by_number, next_match_start = index_source(text, SPECIES_LINE)
    fallback_lines_by_number, fallback_next_match_start = index_source(
        fallback_text, FALLBACK_SPECIES_LINE
    )

    index_by_name: dict[str, set[int]] = defaultdict(set)
    for entry in index_entries:
        index_by_name[normalize(entry["commonName"])].update(entry["pages"])
    pages_by_species = species_pages(tree)

    assignments: dict[str, list[str]] = {}
    review: list[dict[str, Any]] = []
    for number, (species_id, item) in enumerate(ordered, start=1):
        scientific_name = item["nombreCientifico"]
        def candidates_from_source(source_text, source_lines, source_next):
            scored_matches = sorted(
                (
                    (candidate_score(match.group("header"), scientific_name), match)
                    for match in source_lines.get(number, [])
                ),
                key=lambda result: result[0],
                reverse=True,
            )
            viable_matches = [match for score, match in scored_matches if score > 0]
            named = []
            for match in viable_matches:
                snippet = source_text[
                    match.start() : min(match.start() + 900, source_next[match.start()])
                ]
                names = extract_uppercase_names(snippet)
                if names:
                    named.append((match, names, snippet))
            return scored_matches, viable_matches, named

        scored, viable, named_candidates = candidates_from_source(
            text, lines_by_number, next_match_start
        )
        source_kind = "clean_transcript"
        if not named_candidates:
            fallback_scored, fallback_viable, fallback_named = candidates_from_source(
                fallback_text, fallback_lines_by_number, fallback_next_match_start
            )
            if fallback_named:
                scored, viable, named_candidates = fallback_scored, fallback_viable, fallback_named
                source_kind = "second_edition_page_ocr"

        if not named_candidates:
            if not viable:
                review.append(
                    {
                        "number": number,
                        "speciesId": species_id,
                        "scientificName": scientific_name,
                        "status": "species_line_not_found",
                        "manualPages": sorted(pages_by_species.get(species_id, set())),
                        "candidateHeaders": [clean_markup(match.group("header")) for _, match in scored[:5]],
                    }
                )
            continue

        status_priority = {
            "exact_index_match": 3,
            "corrected_from_index": 2,
            "species_entry_only": 1,
        }

        def named_candidate_score(candidate):
            match, names, _ = candidate
            canonicalized = [
                canonicalize_common_name(
                    name, index_entries, pages_by_species.get(species_id, set())
                )
                for name in names
            ]
            return (
                sum(status_priority[status] for _, status in canonicalized),
                sum(status == "exact_index_match" for _, status in canonicalized),
                candidate_score(match.group("header"), scientific_name),
            )

        named_candidates.sort(key=named_candidate_score, reverse=True)
        match, raw_names, snippet = named_candidates[0]
        canonicalized = [
            canonicalize_common_name(
                name, index_entries, pages_by_species.get(species_id, set())
            )
            for name in raw_names
        ]
        names = [name for name, _ in canonicalized]

        assignments[species_id] = names
        species_manual_pages = pages_by_species.get(species_id, set())
        checks = []
        for name in names:
            index_pages = index_by_name.get(normalize(name), set())
            checks.append(
                {
                    "commonName": name,
                    "indexPages": sorted(index_pages),
                    "pageMatchesIndex": bool(species_manual_pages & index_pages),
                }
            )
        review.append(
            {
                "number": number,
                "speciesId": species_id,
                "scientificName": scientific_name,
                "commonNames": names,
                "manualPages": sorted(species_manual_pages),
                "status": "assigned_from_species_entry",
                "sourceKind": source_kind,
                "nameChecks": [
                    {"raw": raw, "stored": stored, "status": status}
                    for raw, (stored, status) in zip(raw_names, canonicalized)
                ],
                "indexChecks": checks,
                "source": clean_markup(snippet[:350]),
            }
        )
    review_by_id = {item["speciesId"]: item for item in review}
    species_number = {
        species_id: number
        for number, (species_id, _item) in enumerate(ordered, start=1)
    }
    for species_id, names in VERIFIED_COMMON_NAMES.items():
        assignments[species_id] = names
        item = species[species_id]
        verified_review = {
            "number": species_number[species_id],
            "speciesId": species_id,
            "scientificName": item["nombreCientifico"],
            "commonNames": names,
            "status": "assigned_from_verified_index",
            "sourceKind": "vulgar_name_index",
            "indexChecks": [
                {
                    "commonName": name,
                    "indexPages": sorted(index_by_name[normalize(name)]),
                    "pageMatchesIndex": bool(
                        pages_by_species.get(species_id, set())
                        & index_by_name[normalize(name)]
                    ),
                }
                for name in names
            ],
        }
        if species_id in review_by_id:
            review[review.index(review_by_id[species_id])] = verified_review
        else:
            review.append(verified_review)

    review.sort(key=lambda item: item["number"])
    return assignments, review


def write_typescript(assignments: dict[str, list[str]]) -> None:
    lines = ["export const secondEditionCommonNames: Record<string, string> = {"]
    for species_id in sorted(assignments):
        value = ", ".join(dict.fromkeys(assignments[species_id]))
        lines.append(f"  {json.dumps(species_id)}: {json.dumps(value, ensure_ascii=False)},")
    lines.extend(["};", ""])
    OUTPUT_PATH.write_text("\n".join(lines), encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Extract species-specific common names from the second-edition transcript."
    )
    parser.add_argument("--transcript", type=Path, default=DEFAULT_TRANSCRIPT)
    args = parser.parse_args()
    if not args.transcript.exists():
        raise FileNotFoundError(f"Transcript not found: {args.transcript}")

    text = args.transcript.read_text(encoding="utf-8")
    fallback_text = FALLBACK_TRANSCRIPT.read_text(encoding="utf-8")
    species, tree = load_second_edition()
    index_entries = parse_index(text)
    assignments, review = extract_species_names(
        text, fallback_text, species, tree, index_entries
    )
    assigned_names = {
        normalize(name) for names in assignments.values() for name in names
    }
    unmatched_index_entries = [
        entry
        for entry in index_entries
        if normalize(entry["commonName"]) not in assigned_names
    ]
    write_typescript(assignments)
    REVIEW_PATH.write_text(
        json.dumps(
            {
                "source": args.transcript.name,
                "method": "species entry uppercase name, checked against vulgar-name index",
                "indexEntryCount": len(index_entries),
                "assignmentCount": len(assignments),
                "unmatchedIndexEntries": unmatched_index_entries,
                "review": review,
            },
            ensure_ascii=False,
            indent=2,
        )
        + "\n",
        encoding="utf-8",
    )

    assigned_statuses = {
        "assigned_from_species_entry",
        "assigned_from_verified_index",
    }
    unresolved = sum(item["status"] not in assigned_statuses for item in review)
    index_confirmed = sum(
        all(check["pageMatchesIndex"] for check in item.get("indexChecks", []))
        for item in review
        if item["status"] in assigned_statuses
    )
    print(f"Index entries: {len(index_entries)}")
    print(f"Species with common names: {len(assignments)}")
    print(f"All names and pages confirmed by index: {index_confirmed}")
    print(f"Index entries not represented by a species entry: {len(unmatched_index_entries)}")
    print(f"Species lines needing review: {unresolved}")


if __name__ == "__main__":
    main()
