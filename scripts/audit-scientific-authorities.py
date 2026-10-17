from __future__ import annotations

import collections
import importlib.util
import argparse
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def load_extractor():
    path = ROOT / "scripts" / "extract-scientific-authorities.py"
    spec = importlib.util.spec_from_file_location("extract_scientific_authorities", path)
    if spec is None or spec.loader is None:
        raise RuntimeError("Could not load extract-scientific-authorities.py")
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


def load_assigned_ids() -> set[str]:
    assigned: set[str] = set()
    path = ROOT / "src" / "data" / "scientificNameAuthorities.ts"
    for line in path.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if line.startswith('"'):
            assigned.add(line.split('"', 2)[1])
    return assigned


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--family", default="")
    parser.add_argument("--limit", type=int, default=40)
    args = parser.parse_args()

    extractor = load_extractor()
    species = extractor.load_second_edition()
    assigned = load_assigned_ids()
    real_species = {
        species_id: item
        for species_id, item in species.items()
        if item.get("nombreCientifico")
        and " " in item["nombreCientifico"]
        and not item["nombreCientifico"].startswith(("Grupo ", "Clase ", "Subclase "))
    }
    missing = {species_id: item for species_id, item in real_species.items() if species_id not in assigned}
    by_family = collections.Counter(item.get("familia", "") for item in missing.values())

    print(f"Real species: {len(real_species)}")
    print(f"Assigned authorities: {len(assigned)}")
    print(f"Missing authorities: {len(missing)}")
    print("")
    for family, count in by_family.most_common(args.limit):
        print(f"{count}\t{family}")

    if args.family:
        print("")
        for species_id, item in missing.items():
            if args.family.lower() in item.get("familia", "").lower():
                print(f"{species_id}\t{item['nombreCientifico']}")


if __name__ == "__main__":
    main()
