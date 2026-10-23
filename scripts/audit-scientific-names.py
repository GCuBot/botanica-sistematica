from __future__ import annotations

import difflib
import importlib.util
import json
import re
import unicodedata
from collections import defaultdict
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parents[1]
TRANSCRIPT_PATH = Path.home() / "Downloads" / "Manual_Flora_Buenos_Aires_Transcrito.md"
FALLBACK_PATH = ROOT / "manual-text" / "second-edition" / "manual-completo.txt"
OUTPUT_PATH = ROOT / "src" / "data" / "scientificNames.review.json"

STRICT_ENTRY = re.compile(
    r"(?m)^\s*(?:\*\*)?(?P<number>\d{1,3}(?:\.\d{3})?)\.\s+(?P<header>[^\n]+)"
)
OCR_ENTRY = re.compile(
    r"(?m)^[^A-Za-z0-9\n]{0,12}(?P<number>\d{1,3}(?:\.\d{3})?)\.\s+(?P<header>[^\n]+)"
)
WORD = re.compile(r"[A-Za-zÀ-ÖØ-öø-ÿ]+(?:-[A-Za-zÀ-ÖØ-öø-ÿ]+)?\.?")
RANKS = {"var": "var.", "subsp": "subsp.", "ssp": "subsp.", "f": "f."}

# These entries are damaged or split in both OCR sources. Their current spelling was
# checked directly against the key, species description, figure caption, or index.
MANUALLY_CONFIRMED = {
    "ed2_polygonum_meissnerianum": "Polygonum meissnerianum var. beyrichianum",
    "ed2_solanum_palitanum": "Solanum palitans",
    "ed2_solanum_angustifidum": "Solanum angustifidum",
    "ed2_solanum_deterrimum": "Solanum deterrimum",
}


def load_common_name_extractor():
    path = ROOT / "scripts" / "extract-common-names.py"
    spec = importlib.util.spec_from_file_location("extract_common_names", path)
    if spec is None or spec.loader is None:
        raise RuntimeError("No se pudo cargar extract-common-names.py")
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


def normalize(value: str) -> str:
    value = value.replace(r"\times", " x ").replace("×", " x ")
    value = re.sub(r"\b(?:ssp|subsp)\.?\b", "subsp", value, flags=re.IGNORECASE)
    value = unicodedata.normalize("NFD", value)
    value = "".join(char for char in value if unicodedata.category(char) != "Mn")
    return re.sub(r"[^a-z0-9]+", "", value.lower())


def entry_number(raw_number: str) -> int:
    return int(raw_number.replace(".", ""))


def index_entries(text: str, pattern: re.Pattern[str]) -> dict[int, list[str]]:
    entries: dict[int, list[str]] = defaultdict(list)
    for match in pattern.finditer(text):
        number = entry_number(match.group("number"))
        if 1 <= number <= 1732:
            entries[number].append(match.group("header").strip())
    return entries


def parse_scientific_index(text: str) -> dict[str, list[str]]:
    start_match = re.search(r"ÍNDICE DE LOS NOMBRES CIENT[IÍ]FICOS", text)
    end_match = re.search(r"\nINDICE DE NOMBRES VULGARES\n", text)
    if not start_match or not end_match:
        raise ValueError("No se encontraron los límites del índice científico.")

    entries: dict[str, list[str]] = defaultdict(list)
    current_genus = ""
    last_epithet = ""
    for raw_line in text[start_match.end() : end_match.start()].splitlines():
        line = re.sub(r"[*_`$]+", "", raw_line).strip()
        parsed = re.match(r"^(.+?),\s*\d+(?:\s*,\s*\d+)*$", line)
        if not parsed:
            continue
        name = re.sub(r"\s+", " ", parsed.group(1)).strip()
        if name.upper() == name and len(name) > 3:
            continue

        full_name = re.match(r"^([A-Z][A-Za-zÀ-ÖØ-öø-ÿ-]+)\s+(.+)$", name)
        if full_name:
            current_genus = full_name.group(1)
            tail = full_name.group(2)
            entries[normalize(current_genus)].append(tail)
            last_epithet = tail.split()[0]
            continue

        if re.match(r"^[A-Z][A-Za-zÀ-ÖØ-öø-ÿ-]+$", name):
            current_genus = name
            last_epithet = ""
            continue
        if not current_genus:
            continue

        if re.match(r"^(?:var\.|subsp\.|ssp\.|f\.)\s+", name, flags=re.IGNORECASE):
            if last_epithet:
                entries[normalize(current_genus)].append(f"{last_epithet} {name}")
            continue

        entries[normalize(current_genus)].append(name)
        last_epithet = name.split()[0]

    return entries


def expected_index_tail(expected: dict[str, Any]) -> str:
    parts = ["x"] if expected["hybrid"] else []
    parts.append(expected["epithet"])
    for rank, value in expected["ranks"]:
        parts.extend([rank, value])
    return " ".join(parts)


def compare_index(scientific_name: str, scientific_index: dict[str, list[str]]) -> dict[str, Any]:
    expected = expected_parts(scientific_name)
    expected_tail = expected_index_tail(expected)
    candidates = scientific_index.get(normalize(expected["genus"]), [])
    exact = next(
        (candidate for candidate in candidates if normalize(candidate) == normalize(expected_tail)),
        None,
    )
    if exact:
        return {"status": "matched", "candidate": exact, "score": 1.0}
    if not candidates:
        return {"status": "genus_not_found", "candidate": None, "score": 0.0}

    scored = sorted(
        (
            difflib.SequenceMatcher(
                None, normalize(expected_tail), normalize(candidate)
            ).ratio(),
            candidate,
        )
        for candidate in candidates
    )
    score, candidate = scored[-1]
    return {
        "status": "different" if score >= 0.72 else "not_found",
        "candidate": candidate,
        "score": round(score, 3),
    }


def scientific_prefix(header: str) -> str | None:
    cleaned = re.sub(r"[*_`$]+", "", header)
    delimiter = re.search(r"(?:\s+[—–]\s*|\s+-{1,3}\s*)", cleaned)
    if not delimiter:
        return None
    prefix = cleaned[: delimiter.start()].strip(" .,:;")
    return prefix or None


def tokens(value: str) -> list[str]:
    value = value.replace(r"\times", " x ").replace("×", " x ")
    return WORD.findall(value)


def review_status(item: dict[str, Any]) -> str:
    if normalize(MANUALLY_CONFIRMED.get(item["speciesId"], "")) == normalize(
        item["scientificName"]
    ):
        return "confirmed_manually"
    if item["status"] == "matched":
        return "confirmed_in_entry"
    if item["indexCheck"]["status"] == "matched":
        return "confirmed_in_index"
    return "needs_review"


def expected_parts(scientific_name: str) -> dict[str, Any]:
    name_tokens = tokens(scientific_name)
    genus = name_tokens[0] if name_tokens else ""
    index = 1
    hybrid = False
    if index < len(name_tokens) and normalize(name_tokens[index]) == "x":
        hybrid = True
        index += 1
    epithet = name_tokens[index] if index < len(name_tokens) else ""
    ranks: list[tuple[str, str]] = []
    for token_index, token in enumerate(name_tokens[:-1]):
        rank = RANKS.get(normalize(token))
        if rank:
            ranks.append((rank, name_tokens[token_index + 1]))
    return {"genus": genus, "epithet": epithet, "hybrid": hybrid, "ranks": ranks}


def source_parts(prefix: str, expected: dict[str, Any]) -> dict[str, Any] | None:
    source_tokens = tokens(prefix)
    if len(source_tokens) < 2:
        return None

    genus = source_tokens[0]
    index = 1
    hybrid = False
    if index < len(source_tokens) and normalize(source_tokens[index]) == "x":
        hybrid = True
        index += 1
    if index >= len(source_tokens):
        return None

    epithet = source_tokens[index]
    ranks: list[tuple[str, str]] = []
    expected_ranks = {rank for rank, _ in expected["ranks"]}
    for token_index, token in enumerate(source_tokens[:-1]):
        rank = RANKS.get(normalize(token))
        if rank and rank in expected_ranks:
            ranks.append((rank, source_tokens[token_index + 1]))

    return {
        "genus": genus,
        "epithet": epithet,
        "hybrid": hybrid,
        "ranks": ranks,
        "tokens": source_tokens,
    }


def candidate_score(prefix: str, expected: dict[str, Any]) -> float:
    parsed = source_parts(prefix, expected)
    if not parsed:
        return -1
    source_epithet = normalize(parsed["epithet"])
    expected_epithet = normalize(expected["epithet"])
    score = difflib.SequenceMatcher(None, source_epithet, expected_epithet).ratio() * 100
    source_genus = normalize(parsed["genus"])
    expected_genus = normalize(expected["genus"])
    if source_genus == expected_genus:
        score += 30
    elif len(source_genus) <= 3 and expected_genus.startswith(source_genus):
        score += 20
    if parsed["hybrid"] == expected["hybrid"]:
        score += 5
    score += 8 * sum(
        normalize(source_value) == normalize(expected_value)
        for rank, expected_value in expected["ranks"]
        for source_rank, source_value in parsed["ranks"]
        if rank == source_rank
    )
    return score


def best_entry(
    headers: list[str], scientific_name: str
) -> tuple[str, dict[str, Any], float] | None:
    expected = expected_parts(scientific_name)
    candidates: list[tuple[float, str, dict[str, Any]]] = []
    for header in headers:
        prefix = scientific_prefix(header)
        if not prefix:
            continue
        parsed = source_parts(prefix, expected)
        if not parsed:
            continue
        candidates.append((candidate_score(prefix, expected), prefix, parsed))
    if not candidates:
        return None
    score, prefix, parsed = max(candidates, key=lambda candidate: candidate[0])
    return prefix, parsed, score


def compare_entry(
    number: int,
    species_id: str,
    scientific_name: str,
    clean_headers: list[str],
    fallback_headers: list[str],
    scientific_index: dict[str, list[str]],
) -> dict[str, Any]:
    expected = expected_parts(scientific_name)
    index_check = compare_index(scientific_name, scientific_index)
    selected = best_entry(clean_headers, scientific_name)
    source = "clean_transcript"
    if not selected:
        selected = best_entry(fallback_headers, scientific_name)
        source = "second_edition_page_ocr"
    if not selected:
        return {
            "number": number,
            "speciesId": species_id,
            "scientificName": scientific_name,
            "status": "entry_not_found",
            "indexCheck": index_check,
        }

    prefix, parsed, score = selected
    differences: list[dict[str, str]] = []
    source_genus = normalize(parsed["genus"])
    expected_genus = normalize(expected["genus"])
    if len(source_genus) > 3 and source_genus != expected_genus:
        differences.append(
            {"part": "genus", "app": expected["genus"], "manual": parsed["genus"]}
        )
    if normalize(parsed["epithet"]) != normalize(expected["epithet"]):
        differences.append(
            {"part": "epithet", "app": expected["epithet"], "manual": parsed["epithet"]}
        )
    if parsed["hybrid"] != expected["hybrid"]:
        differences.append(
            {
                "part": "hybrid",
                "app": "x" if expected["hybrid"] else "",
                "manual": "x" if parsed["hybrid"] else "",
            }
        )

    source_ranks = {rank: value for rank, value in parsed["ranks"]}
    for rank, expected_value in expected["ranks"]:
        source_value = source_ranks.get(rank)
        if source_value is None:
            differences.append({"part": rank, "app": expected_value, "manual": "not found"})
        elif normalize(source_value) != normalize(expected_value):
            differences.append(
                {"part": rank, "app": expected_value, "manual": source_value}
            )

    return {
        "number": number,
        "speciesId": species_id,
        "scientificName": scientific_name,
        "status": "different" if differences else "matched",
        "source": source,
        "manualHeader": prefix,
        "score": round(score, 2),
        "differences": differences,
        "indexCheck": index_check,
    }


def main() -> None:
    if not TRANSCRIPT_PATH.exists():
        raise FileNotFoundError(f"No se encontró la transcripción: {TRANSCRIPT_PATH}")

    extractor = load_common_name_extractor()
    species, _tree = extractor.load_second_edition()
    ordered = extractor.ordered_species(species)
    if len(ordered) != 1732:
        raise ValueError(f"Se esperaban 1732 especies y se encontraron {len(ordered)}")

    clean_text = TRANSCRIPT_PATH.read_text(encoding="utf-8")
    fallback_text = FALLBACK_PATH.read_text(encoding="utf-8")
    clean_entries = index_entries(clean_text, STRICT_ENTRY)
    fallback_entries = index_entries(fallback_text, OCR_ENTRY)
    scientific_index = parse_scientific_index(clean_text)

    review = [
        compare_entry(
            number,
            species_id,
            item["nombreCientifico"],
            clean_entries.get(number, []),
            fallback_entries.get(number, []),
            scientific_index,
        )
        for number, (species_id, item) in enumerate(ordered, start=1)
    ]
    for item in review:
        item["reviewStatus"] = review_status(item)

    summary = {
        status: sum(item["reviewStatus"] == status for item in review)
        for status in (
            "confirmed_in_entry",
            "confirmed_in_index",
            "confirmed_manually",
            "needs_review",
        )
    }
    OUTPUT_PATH.write_text(
        json.dumps(
            {
                "source": TRANSCRIPT_PATH.name,
                "fallbackSource": str(FALLBACK_PATH.relative_to(ROOT)),
                "summary": summary,
                "review": review,
            },
            ensure_ascii=False,
            indent=2,
        )
        + "\n",
        encoding="utf-8",
    )

    print(f"Species reviewed: {len(review)}")
    for status, count in summary.items():
        print(f"{status}: {count}")
    print(f"Review file: {OUTPUT_PATH}")


if __name__ == "__main__":
    main()
