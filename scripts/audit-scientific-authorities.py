from __future__ import annotations

import importlib.util
import json
import re
import unicodedata
from collections import Counter
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parents[1]
ASSIGNMENTS_PATH = ROOT / "src" / "data" / "scientificNameAuthorities.ts"
EXTRACTION_REVIEW_PATH = ROOT / "src" / "data" / "scientificNameAuthorities.review.json"
OUTPUT_PATH = ROOT / "src" / "data" / "scientificNameAuthorities.audit.json"


def load_extractor():
    path = ROOT / "scripts" / "extract-scientific-authorities.py"
    spec = importlib.util.spec_from_file_location("extract_scientific_authorities", path)
    if spec is None or spec.loader is None:
        raise RuntimeError("No se pudo cargar extract-scientific-authorities.py")
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


def load_assignments() -> dict[str, str]:
    assignments: dict[str, str] = {}
    pattern = re.compile(r'^\s*"([^"]+)":\s*("(?:[^"\\]|\\.)*")')
    for line in ASSIGNMENTS_PATH.read_text(encoding="utf-8").splitlines():
        match = pattern.match(line)
        if match:
            assignments[match.group(1)] = json.loads(match.group(2))
    return assignments


def normalize(value: str) -> str:
    value = unicodedata.normalize("NFD", value)
    value = "".join(char for char in value if unicodedata.category(char) != "Mn")
    return re.sub(r"[^a-z0-9]+", " ", value.lower()).strip()


def syntax_issues(authority: str) -> list[str]:
    issues: list[str] = []
    if authority.count("(") != authority.count(")"):
        issues.append("unbalanced_parentheses")
    if re.search(r"[0-9�~!/?;:\\]", authority):
        issues.append("unexpected_character")
    if len(authority) > 80 or len(authority.split()) > 8:
        issues.append("unexpected_length")
    if re.search(r"\.{2,}", authority):
        issues.append("repeated_period")
    return issues


def main() -> None:
    extractor = load_extractor()
    species = extractor.load_second_edition()
    assignments = load_assignments()
    extraction_review = json.loads(EXTRACTION_REVIEW_PATH.read_text(encoding="utf-8"))
    real_species = [
        (species_id, item)
        for species_id, item in species.items()
        if item.get("nombreCientifico")
        and " " in item["nombreCientifico"]
        and not item["nombreCientifico"].startswith(("Grupo ", "Clase ", "Subclase "))
    ]
    if len(real_species) != 1732:
        raise ValueError(f"Se esperaban 1732 especies y se encontraron {len(real_species)}")

    source_status = {
        "transcript": "confirmed_in_transcript",
        "second-edition-pages": "confirmed_in_page_ocr",
        "verified-transcript": "confirmed_manually",
    }
    review: list[dict[str, Any]] = []

    for number, (species_id, item) in enumerate(real_species, start=1):
        authority = assignments.get(species_id)
        extraction = extraction_review.get(species_id)
        issues: list[str] = []

        if not authority:
            issues.append("missing_assignment")
        if not extraction:
            issues.append("missing_extraction_review")
        elif authority and normalize(extraction.get("authority", "")) != normalize(authority):
            issues.append("assignment_differs_from_extraction")

        if authority:
            issues.extend(syntax_issues(authority))

        source = extraction.get("source") if extraction else None
        status = source_status.get(source, "needs_review")
        if source in {"transcript", "second-edition-pages"}:
            matches = extraction.get("matches", [])
            if not matches:
                issues.append("missing_source_match")
            elif authority and not any(
                normalize(match.get("authority", "")) == normalize(authority)
                for match in matches
            ):
                issues.append("source_match_differs_from_assignment")
        elif source == "verified-transcript":
            verified = extractor.VERIFIED_AUTHORITIES.get(species_id)
            if not verified or not authority or normalize(verified) != normalize(authority):
                issues.append("manual_verification_differs_from_assignment")

        if issues:
            status = "needs_review"

        review.append(
            {
                "number": number,
                "speciesId": species_id,
                "scientificName": item["nombreCientifico"],
                "authority": authority,
                "status": status,
                "source": source,
                "issues": issues,
                "evidence": (extraction or {}).get("matches", []),
            }
        )

    reviewed_ids = {item["speciesId"] for item in review}
    extra_assignments = sorted(set(assignments) - reviewed_ids)
    summary = dict(Counter(item["status"] for item in review))
    OUTPUT_PATH.write_text(
        json.dumps(
            {
                "sources": {
                    "primary": "Manual_Flora_Buenos_Aires_Transcrito.md",
                    "fallback": "manual-text/second-edition/pages",
                },
                "summary": summary,
                "extraAssignments": extra_assignments,
                "review": review,
            },
            ensure_ascii=False,
            indent=2,
        )
        + "\n",
        encoding="utf-8",
    )

    print(f"Species reviewed: {len(review)}")
    for status, count in sorted(summary.items()):
        print(f"{status}: {count}")
    print(f"Extra assignments: {len(extra_assignments)}")
    print(f"Review file: {OUTPUT_PATH}")


if __name__ == "__main__":
    main()
