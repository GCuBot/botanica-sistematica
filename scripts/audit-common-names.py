from __future__ import annotations

import importlib.util
import json
import re
from collections import Counter
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parents[1]
TRANSCRIPT_PATH = Path.home() / "Downloads" / "Manual_Flora_Buenos_Aires_Transcrito.md"
FALLBACK_PATH = ROOT / "manual-text" / "second-edition" / "manual-completo.txt"
OUTPUT_PATH = ROOT / "src" / "data" / "commonNames.review.json"

ENTRY_ONLY_CONFIRMED = {
    "ed2_valeriana_scandens": ["Caimbré-mini"],
}

# These names belong to taxa mentioned by the manual but not represented by an
# exact terminal in the key. They must not be promoted to the parent species.
EXCLUDED_INFRASPECIFIC_NAMES = [
    {
        "commonNames": ["Achira roja"],
        "scientificName": "Canna glauca var. rubrolutea",
        "reason": "infraspecific taxon without its own key terminal",
    },
    {
        "commonNames": ["Alverjilla amarilla"],
        "scientificName": "Adesmia incana var. heterotricha",
        "reason": "different variety from the key terminal",
    },
    {
        "commonNames": ["Pata de gallo", "Heliotropo"],
        "scientificName": "Heliotropium curassavicum var. argentinum",
        "reason": "infraspecific taxon without its own key terminal",
    },
]


def load_extractor():
    path = ROOT / "scripts" / "extract-common-names.py"
    spec = importlib.util.spec_from_file_location("extract_common_names", path)
    if spec is None or spec.loader is None:
        raise RuntimeError("No se pudo cargar extract-common-names.py")
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


def split_names(value: str, extractor: Any) -> list[str]:
    return [
        extractor.clean_common_name(part)
        for part in re.split(r"\s*[,;]\s*", value)
        if extractor.normalize(part)
    ]


def is_scientific_fallback(common_name: str, scientific_name: str, extractor: Any) -> bool:
    common = extractor.normalize(common_name)
    scientific = extractor.normalize(scientific_name)
    if not common or common == scientific:
        return True

    scientific_words = scientific.split()
    common_words = common.split()
    if len(common_words) < 2:
        return False

    without_hybrid = [word for word in scientific_words if word != "x"]
    if common_words == without_hybrid:
        return True

    for rank in ("var", "subsp", "ssp", "f"):
        if rank in scientific_words:
            return common_words == scientific_words[: scientific_words.index(rank)]
    return False


def main() -> None:
    if not TRANSCRIPT_PATH.exists():
        raise FileNotFoundError(f"No se encontro la transcripcion: {TRANSCRIPT_PATH}")

    extractor = load_extractor()
    text = TRANSCRIPT_PATH.read_text(encoding="utf-8")
    fallback_text = FALLBACK_PATH.read_text(encoding="utf-8")
    species, tree = extractor.load_second_edition()
    ordered = extractor.ordered_species(species)
    index_entries = extractor.parse_index(text)
    extracted, extraction_review = extractor.extract_species_names(
        text, fallback_text, species, tree, index_entries
    )

    index_by_name: dict[str, list[dict[str, Any]]] = {}
    for entry in index_entries:
        index_by_name.setdefault(extractor.normalize(entry["commonName"]), []).append(entry)

    extraction_by_id = {item["speciesId"]: item for item in extraction_review}
    review: list[dict[str, Any]] = []
    represented_index_names: set[str] = set()

    for number, (species_id, item) in enumerate(ordered, start=1):
        scientific_name = item["nombreCientifico"]
        effective_common_name = item["nombreVulgar"]
        extracted_names = extracted.get(species_id)

        if extracted_names:
            names = list(dict.fromkeys(extracted_names))
            normalized_names = [extractor.normalize(name) for name in names]
            represented_index_names.update(normalized_names)
            all_in_index = all(name in index_by_name for name in normalized_names)
            extraction = extraction_by_id.get(species_id)
            if extraction and extraction["status"] == "assigned_from_verified_index":
                status = "confirmed_in_index"
            elif all_in_index:
                status = "confirmed_in_entry_and_index"
            elif species_id in ENTRY_ONLY_CONFIRMED:
                status = "confirmed_in_entry"
            else:
                status = "needs_review"
        elif is_scientific_fallback(effective_common_name, scientific_name, extractor):
            names = []
            status = "no_common_name"
        else:
            names = split_names(effective_common_name, extractor)
            normalized_names = [extractor.normalize(name) for name in names]
            represented_index_names.update(
                name for name in normalized_names if name in index_by_name
            )
            status = (
                "confirmed_in_index"
                if names and all(name in index_by_name for name in normalized_names)
                else "needs_review"
            )

        review.append(
            {
                "number": number,
                "speciesId": species_id,
                "scientificName": scientific_name,
                "commonNames": names,
                "status": status,
                "indexEntries": [
                    entry
                    for name in names
                    for entry in index_by_name.get(extractor.normalize(name), [])
                ],
                "extraction": extraction_by_id.get(species_id),
            }
        )

    unmatched_index_entries = [
        entry
        for entry in index_entries
        if extractor.normalize(entry["commonName"]) not in represented_index_names
    ]
    summary = dict(Counter(item["status"] for item in review))
    OUTPUT_PATH.write_text(
        json.dumps(
            {
                "source": TRANSCRIPT_PATH.name,
                "fallbackSource": str(FALLBACK_PATH.relative_to(ROOT)),
                "summary": summary,
                "indexEntryCount": len(index_entries),
                "unmatchedIndexEntries": unmatched_index_entries,
                "excludedInfraspecificNames": EXCLUDED_INFRASPECIFIC_NAMES,
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
    print(f"Unmatched index entries: {len(unmatched_index_entries)}")
    print(f"Review file: {OUTPUT_PATH}")


if __name__ == "__main__":
    main()
