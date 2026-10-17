from __future__ import annotations

import argparse
import json
import re
import shutil
import subprocess
from collections import defaultdict
from pathlib import Path
from typing import Any

import pdfplumber


ROOT = Path(__file__).resolve().parents[1]
PDF_PATH = ROOT / "public" / "pdfcoffee.com_manual-de-la-flora-de-los-alrededores-de-buenos-aires-9-pdf-free.pdf"
TMP_DIR = ROOT / ".tmp-second-edition-common-names"
OUTPUT_PATH = ROOT / "src" / "data" / "secondEditionCommonNames.ts"
REVIEW_PATH = ROOT / "src" / "data" / "secondEditionCommonNames.review.json"


NAME_FIXES = {
    "Abrepuno": "Abrepuño",
    "Abrepuno amanllo": "Abrepuño amarillo",
    "Abrepuno": "Abrepuño",
    "Abrepuno amanllo": "Abrepuño amarillo",
    "Achi I coria": "Achicoria",
    "Amo r seco": "Amor seco",
    "Arve- jilla peluda": "Arvejilla peluda",
    "BaZlico": "Ballico",
    "Camamb": "Camambu",
    "Camalole": "Camalote",
    "Camara": "Camara",
    "Caneln": "Canelon",
    "Card6n": "Cardon",
    "Caa": "Caña",
    "Caa": "Caña",
    "Co riandro": "Coriandro",
    "CoTa de zorro": "Cola de zorro",
    "Caraguata": "Caraguata",
    "Coro nillo": "Coronillo",
    "Eama de noche": "Dama de noche",
    "Dt,tma del monte": "Dama del monte",
    "Helio tropo": "Heliotropo",
    "Isip6": "Isipo",
    "Isip6 colorado": "Isipo colorado",
    "Lenteja de agua '": "Lenteja de agua",
    "Ligu8tro": "Ligustro",
    "Pensa miento salvaje": "Pensamiento salvaje",
    "Romerillo do rado": "Romerillo dorado",
    "Siete sangrias": "Siete sangrias",
    "Tn:gollo": "Trigollo",
    "'pasto ilusí6n": "Pasto ilusion",
    "'pasto ilusi6n": "Pasto ilusion",
    "Pasto ilusíon": "Pasto ilusión",
    "<lcacia negra": "Acacia negra",
}


def clean_name(value: str) -> str:
    value = value.replace("�", "")
    value = value.replace("~", "ñ")
    value = value.replace("cd�a", "caña")
    value = value.replace("man'posa", "mariposa")
    value = value.replace("6", "o")
    value = value.replace("8", "s")
    value = re.sub(r"[.·]+", " ", value)
    value = re.sub(r"\bo\b(?:\s+o\b)+", " ", value)
    value = re.sub(r"\s+", " ", value).strip(" .,;:'\"")
    for bad, good in NAME_FIXES.items():
        value = value.replace(bad, good)
    value = NAME_FIXES.get(value, value)
    return value[:1].upper() + value[1:]


def normalize(value: str) -> str:
    replacements = {
        "�": "",
        "á": "a",
        "é": "e",
        "í": "i",
        "ó": "o",
        "ú": "u",
        "Á": "a",
        "É": "e",
        "Í": "i",
        "Ó": "o",
        "Ú": "u",
        "ñ": "n",
        "Ñ": "n",
    }
    for bad, good in replacements.items():
        value = value.replace(bad, good)
    return re.sub(r"[^a-z0-9]+", " ", value.lower()).strip()


def clean_page_token(value: str) -> str:
    return re.sub(r"[^0-9,]", "", value)


def split_columns(words: list[dict[str, Any]]) -> list[list[dict[str, Any]]]:
    content = [word for word in words if word["top"] > 165]
    if not content:
        return []
    xs = sorted(word["x0"] for word in content)
    candidates: list[tuple[float, float]] = []
    for left, right in zip(xs, xs[1:]):
        midpoint = (left + right) / 2
        gap = right - left
        if 245 <= midpoint <= 335 and gap > 10:
            candidates.append((gap, midpoint))
    split = max(candidates)[1] if candidates else 297.5
    return [
        [word for word in content if word["x0"] < split],
        [word for word in content if word["x0"] >= split],
    ]


def group_lines(words: list[dict[str, Any]]) -> list[list[dict[str, Any]]]:
    lines: list[list[dict[str, Any]]] = []
    for word in sorted(words, key=lambda item: (item["top"], item["x0"])):
        if not lines or abs(lines[-1][0]["top"] - word["top"]) > 3:
            lines.append([word])
        else:
            lines[-1].append(word)
    return [sorted(line, key=lambda item: item["x0"]) for line in lines]


def parse_line(line: list[dict[str, Any]], pdf_page: int) -> dict[str, Any] | None:
    name_tokens: list[str] = []
    page_tokens: list[str] = []
    seen_page = False

    for word in line:
        text = word["text"].strip()
        pageish = clean_page_token(text)
        if pageish and re.search(r"\d", text):
            seen_page = True
            page_tokens.append(pageish)
            continue
        if seen_page:
            continue
        if re.fullmatch(r"[.\-,'\"`]+", text):
            continue
        name_tokens.append(text)

    name = clean_name(" ".join(name_tokens))
    pages = [int(page) for page in re.findall(r"\d+", ",".join(page_tokens))]
    if not name or not pages or name.lower().startswith("pag"):
        return None
    return {"commonName": name, "pages": pages, "sourcePdfPage": pdf_page}


def extract_common_name_index(start: int, end: int) -> list[dict[str, Any]]:
    entries: list[dict[str, Any]] = []
    with pdfplumber.open(PDF_PATH) as pdf:
        for pdf_page in range(start, end + 1):
            words = pdf.pages[pdf_page - 1].extract_words(
                x_tolerance=2, y_tolerance=3, keep_blank_chars=False
            )
            for column in split_columns(words):
                for line in group_lines(column):
                    entry = parse_line(line, pdf_page)
                    if entry:
                        entries.append(entry)
    return entries


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
        "console.log(JSON.stringify({species:m.secondEditionSpeciesData, tree:m.secondEditionTree}));"
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


def species_by_manual_page(tree: dict[str, Any]) -> dict[int, set[str]]:
    pages: dict[int, set[str]] = defaultdict(set)
    for node in tree.values():
        page = node.get("manualPage")
        if not isinstance(page, int):
            continue
        for option_key in ("opcionA", "opcionA_prima"):
            species_id = (node.get(option_key) or {}).get("especieId")
            if species_id:
                pages[page].add(species_id)
    return pages


def is_placeholder_common_name(species: dict[str, Any]) -> bool:
    return species.get("nombreVulgar") == species.get("nombreCientifico")


def parse_common_names(raw_value: str) -> list[str]:
    raw_value = re.split(r"\bExsicc\b|\bObs\b", raw_value, maxsplit=1)[0]
    raw_value = re.split(r"\.\s*(?:[A-Z0-9]|\(|$)", raw_value, maxsplit=1)[0]
    names = []
    for chunk in re.split(r",|;|\sy\s", raw_value):
        name = clean_name(chunk)
        if name and not re.fullmatch(r"[0-9]+", name):
            names.append(name)
    return names


def find_nv_segments(pages: list[int]) -> list[dict[str, Any]]:
    segments: list[dict[str, Any]] = []
    with pdfplumber.open(PDF_PATH) as pdf:
        for book_page in pages:
            pdf_page = book_page + 7
            if pdf_page < 1 or pdf_page > len(pdf.pages):
                continue
            text = pdf.pages[pdf_page - 1].extract_text(x_tolerance=2, y_tolerance=3) or ""
            for match in re.finditer(r"N\.\s*v\.?\s*:\s*", text, flags=re.IGNORECASE):
                tail = text[match.end() : match.end() + 260]
                names = parse_common_names(tail.replace("\n", " "))
                if not names:
                    continue
                segments.append(
                    {
                        "pdfPage": pdf_page,
                        "bookPage": pdf_page - 7,
                        "names": names,
                        "before": text[max(0, match.start() - 2200) : match.start()],
                        "raw": tail.replace("\n", " "),
                    }
                )
    return segments


def score_species_for_segment(species: dict[str, Any], segment: dict[str, Any]) -> int:
    scientific_name = species["nombreCientifico"]
    parts = scientific_name.split()
    if len(parts) < 2:
        return 0

    genus = normalize(parts[0])
    epithet = normalize(parts[1])
    full_name = normalize(" ".join(parts[:2]))
    before = normalize(segment["before"])
    near = before[-900:]
    context = before[-2600:]

    if genus not in context and epithet not in near:
        return 0

    positions: list[tuple[int, int]] = []
    full_position = before.rfind(full_name)
    if full_position >= 0:
        positions.append((full_position, 5))

    abbreviation_match = re.search(
        rf"\b{re.escape(parts[0][0].lower())}\s+{re.escape(epithet)}\b",
        near,
    )
    if abbreviation_match and genus in context:
        positions.append((len(before) - len(near) + abbreviation_match.start(), 4))

    epithet_position = near.rfind(epithet)
    if epithet_position >= 0 and genus in context:
        positions.append((len(before) - len(near) + epithet_position, 3))

    if not positions:
        return 0
    position, confidence = max(positions)
    return position * 10 + confidence


def extract_names_from_species_pages(
    species: dict[str, Any],
    book_pages: list[int],
) -> tuple[dict[str, list[str]], list[dict[str, Any]]]:
    assignments: dict[str, set[str]] = defaultdict(set)
    review: list[dict[str, Any]] = []
    segments = find_nv_segments(book_pages)

    for segment in segments:
        scored = [
            (species_id, score_species_for_segment(species_item, segment))
            for species_id, species_item in species.items()
        ]
        scored = [(species_id, score) for species_id, score in scored if score > 0]
        scored.sort(key=lambda item: item[1], reverse=True)
        top_score = scored[0][1] if scored else 0
        top = [species_id for species_id, score in scored if score == top_score]

        if len(top) == 1 and top_score >= 3:
            for name in segment["names"]:
                assignments[top[0]].add(name)
            status = "assigned_from_species_text"
        else:
            status = "ambiguous_species_text" if top else "unmatched_species_text"

        review.append(
            {
                "commonNames": segment["names"],
                "bookPage": segment["bookPage"],
                "pdfPage": segment["pdfPage"],
                "raw": segment["raw"],
                "status": status,
                "candidateSpecies": [
                    {
                        "id": species_id,
                        "score": score,
                        "scientificName": species[species_id]["nombreCientifico"],
                        "currentCommonName": species[species_id]["nombreVulgar"],
                    }
                    for species_id, score in scored[:8]
                ],
            }
        )

    return {key: sorted(values) for key, values in assignments.items()}, review


def build_assignments(
    index_entries: list[dict[str, Any]],
    species: dict[str, Any],
    page_species: dict[int, set[str]],
) -> tuple[dict[str, list[str]], list[dict[str, Any]]]:
    assigned: dict[str, set[str]] = defaultdict(set)
    review: list[dict[str, Any]] = []

    for entry in index_entries:
        candidates = sorted(
            {
                species_id
                for page in entry["pages"]
                for species_id in page_species.get(page, set())
                if species_id in species
            }
        )
        if len(candidates) == 1:
            assigned[candidates[0]].add(entry["commonName"])
            status = "assigned_unique_page"
        else:
            status = "ambiguous" if candidates else "no_species_for_page"

        review.append(
            {
                **entry,
                "candidateSpecies": [
                    {
                        "id": species_id,
                        "scientificName": species[species_id]["nombreCientifico"],
                        "currentCommonName": species[species_id]["nombreVulgar"],
                    }
                    for species_id in candidates
                ],
                "status": status,
            }
        )

    return {key: sorted(values) for key, values in assigned.items()}, review


def write_typescript(assignments: dict[str, list[str]]) -> None:
    lines = [
        "export const secondEditionCommonNames: Record<string, string> = {",
    ]
    for species_id in sorted(assignments):
        common_name = ", ".join(sorted({clean_name(name) for name in assignments[species_id]}))
        lines.append(f"  {json.dumps(species_id)}: {json.dumps(common_name, ensure_ascii=False)},")
    lines.append("};")
    lines.append("")
    OUTPUT_PATH.write_text("\n".join(lines), encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser(description="Extract second edition common names from the vulgar-name index.")
    parser.add_argument("--start", type=int, default=594)
    parser.add_argument("--end", type=int, default=596)
    args = parser.parse_args()

    species, tree = load_second_edition()
    index_entries = extract_common_name_index(args.start, args.end)
    index_pages = sorted({page for entry in index_entries for page in entry["pages"]})
    text_assignments, text_review = extract_names_from_species_pages(species, index_pages)
    page_assignments, page_review = build_assignments(index_entries, species, species_by_manual_page(tree))
    assignments = text_assignments

    write_typescript(assignments)
    REVIEW_PATH.write_text(
        json.dumps(
            {
                "speciesTextReview": text_review,
                "indexReview": page_review,
            },
            ensure_ascii=False,
            indent=2,
        )
        + "\n",
        encoding="utf-8",
    )

    print(f"Index entries: {len(index_entries)}")
    print(f"N. v. segments: {len(text_review)}")
    print(f"Assigned from species text: {len(text_assignments)}")
    print(f"Review-only unique index pages: {len(page_assignments)}")
    print(f"Assigned species: {len(assignments)}")
    print(f"Review file: {REVIEW_PATH}")
    print(f"TypeScript file: {OUTPUT_PATH}")


if __name__ == "__main__":
    main()
