from __future__ import annotations

import importlib.util
import json
import re
import unicodedata
from collections import Counter, defaultdict
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parents[1]
TRANSCRIPT_PATH = Path.home() / "Downloads" / "Manual_Flora_Buenos_Aires_Transcrito.md"
GLOSSARY_PATH = ROOT / "src" / "data" / "keyGlossary.ts"
REVIEW_PATH = ROOT / "src" / "data" / "keyGlossary.review.json"
OUTPUT_PATH = ROOT / "src" / "data" / "keyGlossary.audit.json"
EXPECTED_FIRST_PAGE = 711
EXPECTED_LAST_PAGE = 725
VISUALLY_CONFIRMED = {
    "Janas": "The unusual spelling is printed this way in the manual; it refers to Gloquidio.",
    "Obacorazonado": "Confirmed on printed page 720.",
    "Umbela": "Confirmed in the singular on printed page 724.",
}


def load_extractor():
    path = ROOT / "scripts" / "extract-key-glossary.py"
    spec = importlib.util.spec_from_file_location("extract_key_glossary", path)
    if spec is None or spec.loader is None:
        raise RuntimeError("No se pudo cargar extract-key-glossary.py")
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


def normalize(value: str) -> str:
    value = unicodedata.normalize("NFD", value)
    value = "".join(char for char in value if unicodedata.category(char) != "Mn")
    return re.sub(r"[^a-z0-9]+", "", value.lower())


def load_typescript_entries() -> list[dict[str, Any]]:
    entries: list[dict[str, Any]] = []
    pattern = re.compile(r"^\s+(\{.*\}),$")
    for line in GLOSSARY_PATH.read_text(encoding="utf-8").splitlines():
        match = pattern.match(line)
        if match:
            entries.append(json.loads(match.group(1)))
    return entries


def cross_reference_target(definition: str) -> str | None:
    lowered = definition.lower()
    for prefix in ("ver ", "v. "):
        if lowered.startswith(prefix):
            return definition[len(prefix) :].rstrip(" .")
    return None


def main() -> None:
    if not TRANSCRIPT_PATH.exists():
        raise FileNotFoundError(f"No se encontro la transcripcion: {TRANSCRIPT_PATH}")

    extractor = load_extractor()
    expected = extractor.extract_entries(TRANSCRIPT_PATH)
    review = json.loads(REVIEW_PATH.read_text(encoding="utf-8"))
    typescript_entries = load_typescript_entries()
    issues: dict[str, list[dict[str, Any]]] = defaultdict(list)

    expected_by_term = {normalize(str(item["term"])): item for item in expected}
    review_by_term = {normalize(str(item["term"])): item for item in review}
    typescript_by_term = {
        normalize(str(item["term"])): item for item in typescript_entries
    }

    normalized_terms: dict[str, list[str]] = defaultdict(list)
    for item in review:
        normalized_terms[normalize(item["term"])].append(item["term"])
    for key, terms in normalized_terms.items():
        if len(terms) > 1:
            issues["duplicateTerms"].append({"normalized": key, "terms": terms})

    if expected_by_term != {
        key: {field: value for field, value in item.items() if field != "flags"}
        for key, item in review_by_term.items()
    }:
        issues["reviewDiffersFromExtractor"].append(
            {
                "onlyInExtractor": sorted(set(expected_by_term) - set(review_by_term)),
                "onlyInReview": sorted(set(review_by_term) - set(expected_by_term)),
            }
        )
    if expected_by_term != typescript_by_term:
        issues["typescriptDiffersFromExtractor"].append(
            {
                "onlyInExtractor": sorted(set(expected_by_term) - set(typescript_by_term)),
                "onlyInTypescript": sorted(set(typescript_by_term) - set(expected_by_term)),
            }
        )

    term_aliases: set[str] = set(review_by_term)
    for item in review:
        term_aliases.update(
            normalize(part)
            for part in re.split(r",|\bor\b|\bo\b", item["term"], flags=re.IGNORECASE)
            if part.strip()
        )

    previous_sort_key = ""
    previous_page = EXPECTED_FIRST_PAGE
    for item in review:
        term = str(item.get("term", ""))
        definition = str(item.get("definition", ""))
        source = str(item.get("source", ""))
        page = item.get("sourcePage")
        combined = f"{term} {definition} {source}"
        sort_key = normalize(term)

        if not term or not definition:
            issues["emptyEntries"].append({"term": term})
        if len(definition) < 5:
            issues["shortDefinitions"].append(
                {"term": term, "definition": definition}
            )
        if definition and definition[-1] not in ".!?":
            issues["missingFinalPunctuation"].append({"term": term})
        if any(marker in combined for marker in ("\ufffd", "Ã", "Â", "ï¿½")):
            issues["encodingArtifacts"].append({"term": term})
        if item.get("flags"):
            issues["extractorFlags"].append(
                {"term": term, "flags": item["flags"]}
            )
        if not isinstance(page, int) or not EXPECTED_FIRST_PAGE <= page <= EXPECTED_LAST_PAGE:
            issues["pageOutsideGlossary"].append({"term": term, "page": page})
        if isinstance(page, int) and page < previous_page:
            issues["nonMonotonicPages"].append(
                {"term": term, "page": page, "previousPage": previous_page}
            )
        if sort_key < previous_sort_key:
            issues["nonAlphabeticalTerms"].append({"term": term})

        target = cross_reference_target(definition)
        if target and normalize(target) not in term_aliases:
            issues["missingCrossReferenceTargets"].append(
                {"term": term, "target": target}
            )
        previous_sort_key = sort_key
        if isinstance(page, int):
            previous_page = page

    pages = Counter(item.get("sourcePage") for item in review)
    missing_pages = [
        page
        for page in range(EXPECTED_FIRST_PAGE, EXPECTED_LAST_PAGE + 1)
        if not pages[page]
    ]
    if missing_pages:
        issues["missingGlossaryPages"].append({"pages": missing_pages})

    missing_visual_confirmations = sorted(set(VISUALLY_CONFIRMED) - {item["term"] for item in review})
    if missing_visual_confirmations:
        issues["missingVisuallyConfirmedTerms"].append(
            {"terms": missing_visual_confirmations}
        )

    issue_counts = {key: len(value) for key, value in issues.items()}
    report = {
        "sources": {
            "transcript": str(TRANSCRIPT_PATH),
            "manualPdf": "source-pdfs/cabrera-1978-segunda-edicion.pdf",
            "printedPages": [EXPECTED_FIRST_PAGE, EXPECTED_LAST_PAGE],
        },
        "summary": {
            "entriesReviewed": len(review),
            "typescriptEntries": len(typescript_entries),
            "extractorEntries": len(expected),
            "pagesCovered": len(pages),
            "duplicateTerms": len(review) - len(review_by_term),
            "crossReferences": sum(
                cross_reference_target(item["definition"]) is not None for item in review
            ),
            "blockingIssues": sum(issue_counts.values()),
            "issueCounts": issue_counts,
        },
        "visuallyConfirmed": VISUALLY_CONFIRMED,
        "pageDistribution": dict(sorted(pages.items())),
        "issues": dict(issues),
    }
    OUTPUT_PATH.write_text(
        json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )

    print(f"Entries reviewed: {len(review)}")
    print(f"Printed pages: {EXPECTED_FIRST_PAGE}-{EXPECTED_LAST_PAGE}")
    print(f"Duplicate terms: {report['summary']['duplicateTerms']}")
    print(f"Cross-references checked: {report['summary']['crossReferences']}")
    print(f"Blocking issues: {report['summary']['blockingIssues']}")
    for issue_name, count in sorted(issue_counts.items()):
        print(f"{issue_name}: {count}")
    print(f"Report: {OUTPUT_PATH}")


if __name__ == "__main__":
    main()
