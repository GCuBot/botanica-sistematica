from __future__ import annotations

import argparse
import json
import re
import shutil
import subprocess
import tempfile
import unicodedata
from pathlib import Path

import pdfplumber
from PIL import ImageFilter, ImageOps


ROOT = Path(__file__).resolve().parents[1]
PDF_PATH = ROOT / "source-pdfs" / "cabrera-1978-segunda-edicion.pdf"
TESSDATA_PATH = ROOT / ".local-tools" / "tessdata"
OUTPUT_PATH = ROOT / "src" / "data" / "keyGlossary.ts"
SOURCE = "Manual Cabrera 2a ed., glosario"


TERM_FIXES = {
    "Aclamiidea": "Aclamidea",
    "Amplexicawe": "Amplexicaule",
    "Cistalito": "Cistolito",
    "Hermajrodita": "Hermafrodita",
    "Racemijorme": "Racemiforme",
    "Raje": "Rafe",
    "Rejlexo": "Reflexo",
    "Scudo": "Pseudo",
    "Scudo-": "Pseudo",
    "Tnerme": "Inerme",
    "Cigomorfo": "Zigomorfo",
    "Ginastegio": "Ginostegio",
}

DROP_TERMS = {
    "compuesta",
    "dando",
    "dedos de una",
    "derivado de un ovario",
    "de un solo tipo",
    "duras de las hojas",
    "floral que soporta al",
    "haploilde",
    "involucro de las",
    "mando una especie de boca",
    "mente",
    "mentos en",
    "noideas",
    "tan los frutos de ciertas legumi",
    "tan sus flores con estilos de dite",
    "tas",
    "y la raquilla de algunas Gram",
}

MANUAL_DEFINITIONS = {
    "Anastomosado": "ultimas ramificaciones de las nervaduras de las hojas unidas unas con otras formando un reticulo",
    "Herbaceo": "de consistencia de hierba, es decir, sin tejidos lenosos secundarios; de color de hierba, verde",
    "Hermafrodita": "flor que lleva organos de reproduccion de los dos sexos",
    "Hetero": "prefijo que implica heterogeneidad, que es diferente de otra cosa",
    "Personada": "corola gamopetala bilabiada, con uno de los labios hinchado cerrando la garganta y formando una especie de boca",
    "Pseudobulbos": "tallos gruesos y cortos de las Orquideas epifitas",
    "Racemiforme": "en forma de racimo",
    "Unisexual": "se aplica a la flor que solo lleva un sexo",
    "Verticilado": "organos insertos alrededor de un eje al mismo nivel y en numero mayor de dos",
    "Versatil": "antera dorsifija unida al filamento por un punto delgado que oscila facilmente",
    "Zarcillo": "organo filamentoso que se enrosca y permite trepar",
    "Zigomorfo": "se dice de un organo que tiene un solo plano de simetria, es decir, simetria bilateral",
}

ADDITIONS = [
    ("Aclamidea", "flor desnuda, que carece de perianto", 375),
    ("Aerenquima", "parenquima con grandes espacios intercelulares aeriferos", 375),
    ("Aguijon", "tricoma rigido y punzante", 375),
    ("Bractea", "organo foliaceo situado en la proximidad de las flores, distinto de las hojas normales", 376),
    ("Capitulo", "inflorescencia racimosa formada por flores sesiles sobre un receptaculo comun", 376),
    ("Capsula", "fruto seco dehiscente derivado de un gineceo gamocarpelar", 376),
    ("Flosculo", "cada una de las flores tubulosas de los capitulos de Compuestas", 378),
    ("Foliaceo", "con aspecto o naturaleza de hoja", 378),
    ("Foliculo", "fruto unilocular, unicarpelar, dehiscente por la sutura ventral o por la vena media", 378),
    ("Foliolo", "cada una de las divisiones de una hoja compuesta", 378),
    ("Ginomonoica", "plantas que llevan flores hermafroditas y femeninas en el mismo pie", 378),
    ("Hermafrodita", "flor que lleva organos de reproduccion de los dos sexos", 379),
    ("Pinnatifido", "partido en forma pinnada con divisiones que llegan a lo sumo hasta la mitad del limbo", 381),
    ("Raquis", "eje del que nacen los foliolos de una hoja compuesta; eje comun de una inflorescencia", 381),
    ("Receptaculo", "dilatacion del pedunculo de la flor donde se insertan las piezas florales", 381),
    ("Sesil", "organo que carece de pie o soporte", 381),
    ("Tepalo", "cada una de las piezas del perigonio", 382),
    ("Tetramero", "verticilo compuesto de cuatro piezas", 382),
    ("Trifido", "dividido en tres partes o lobulos", 382),
    ("Tuberculo", "tallo subterraneo engrosado, rico en sustancias de reserva", 382),
    ("Una", "parte inferior mas estrecha de algunos petalos", 382),
    ("Utriculo", "aquenio con pericarpio membranoso", 382),
    ("Xerofilo", "planta que vive en ambientes secos", 382),
]


def find_tesseract() -> Path:
    command = shutil.which("tesseract")
    candidates = [Path(command) if command else None, Path(r"C:\Program Files\Tesseract-OCR\tesseract.exe")]
    for candidate in candidates:
        if candidate and candidate.exists():
            return candidate
    raise FileNotFoundError("No se encontro Tesseract OCR.")


def normalize_key(value: str) -> str:
    decomposed = unicodedata.normalize("NFD", value)
    without_accents = "".join(char for char in decomposed if unicodedata.category(char) != "Mn")
    return re.sub(r"[^a-z0-9]+", "", without_accents.lower())


def strip_accents(value: str) -> str:
    decomposed = unicodedata.normalize("NFD", value)
    return "".join(char for char in decomposed if unicodedata.category(char) != "Mn")


def clean_text(value: str) -> str:
    value = strip_accents(value)
    replacements = {
        "fo liar": "foliar",
        "ta llo": "tallo",
        "ta llos": "tallos",
        "orga nos": "organos",
        "pe ciolo": "peciolo",
        "semi lla": "semilla",
        "pericar pio": "pericarpio",
        "lem. ma": "lemma",
        "Gramí neas": "Gramineas",
        "reproduccion de los dos : sexos": "reproduccion de los dos sexos",
        "helo rogeneidad": "heterogeneidad",
        "verrugun": "verrugas",
        "brganos": "organos",
        "alrededur ue": "alrededor de",
        "nuumero": "numero",
        "dorsllijas": "dorsifijas",
        "taclimonin": "facilmente",
        "transVerso": "transverso",
        "poTOS": "poros",
        "don cortos": "dos cortos",
    }
    for bad, good in replacements.items():
        value = value.replace(bad, good)
    value = re.sub(r"-\s+", "", value)
    value = re.sub(r"\s+", " ", value)
    return value.strip(" .,-;:*")


def crop_column_ocr(pdf: pdfplumber.PDF, page_number: int, side: str, column: int, resolution: int) -> str:
    page = pdf.pages[page_number - 1]
    half_width = page.width / 2
    side_x0 = 0 if side == "left" else half_width
    side_x1 = half_width if side == "left" else page.width
    column_width = (side_x1 - side_x0) / 2
    x0 = side_x0 + column * column_width
    x1 = x0 + column_width
    crop = page.crop((x0, 0, x1, page.height))

    tesseract = find_tesseract()
    with tempfile.TemporaryDirectory(prefix="glossary-ocr-") as temp_dir:
        image_path = Path(temp_dir) / "column.png"
        image = crop.to_image(resolution=resolution, antialias=True).original.convert("L")
        image = ImageOps.autocontrast(image, cutoff=1).filter(ImageFilter.SHARPEN)
        image.save(image_path, optimize=True)
        result = subprocess.run(
            [
                str(tesseract),
                str(image_path),
                "stdout",
                "-l",
                "spa",
                "--tessdata-dir",
                str(TESSDATA_PATH),
                "--psm",
                "6",
            ],
            check=True,
            capture_output=True,
        )
    return result.stdout.decode("utf-8", errors="replace")


def extract_entries(text: str, source_page: int) -> list[dict[str, str | int]]:
    entries: list[dict[str, str | int]] = []
    current: dict[str, str | int] | None = None
    for raw_line in text.splitlines():
        line = clean_text(raw_line)
        if not line or line.upper().startswith("GLOSA") or line.upper().startswith("RIO"):
            continue
        match = re.match(r"^([A-Z][A-Za-z -]{1,35}):\s*(.*)$", line)
        if match:
            if current and current["definition"]:
                entries.append(current)
            term = TERM_FIXES.get(match.group(1).strip(), match.group(1).strip())
            current = {"term": term, "definition": match.group(2).strip(), "sourcePage": source_page}
        elif current:
            current["definition"] = f"{current['definition']} {line}".strip()
    if current and current["definition"]:
        entries.append(current)
    return entries


def build_glossary(start: int, end: int, resolution: int) -> list[dict[str, str | int]]:
    if not PDF_PATH.exists():
        raise FileNotFoundError(f"No se encontro el PDF: {PDF_PATH}")
    if not (TESSDATA_PATH / "spa.traineddata").exists():
        raise FileNotFoundError("Falta el modelo spa.traineddata.")

    entries: list[dict[str, str | int]] = []
    with pdfplumber.open(PDF_PATH) as pdf:
        for page_number in range(start, end + 1):
            for side in ("left", "right"):
                for column in (0, 1):
                    text = crop_column_ocr(pdf, page_number, side, column, resolution)
                    entries.extend(extract_entries(text, page_number))
            print(f"OCR glosario pagina PDF {page_number}/{end}")

    for term, definition, page in ADDITIONS:
        entries.append({"term": term, "definition": definition, "sourcePage": page})

    cleaned: dict[str, dict[str, str | int]] = {}
    for entry in entries:
        term = str(entry["term"])
        if term in DROP_TERMS:
            continue
        definition = MANUAL_DEFINITIONS.get(term, clean_text(str(entry["definition"])))
        if not definition or "GLOMARIO" in definition or "FLACIEEAL" in definition:
            continue
        key = normalize_key(term)
        cleaned[key] = {
            "term": term,
            "definition": definition,
            "source": SOURCE,
            "sourcePage": int(entry["sourcePage"]),
        }

    return sorted(cleaned.values(), key=lambda item: normalize_key(str(item["term"])))


def write_typescript(entries: list[dict[str, str | int]]) -> None:
    lines = [
        "export type KeyGlossaryEntry = {",
        "  term: string;",
        "  definition: string;",
        "  source: string;",
        "  sourcePage?: number;",
        "};",
        "",
        "export const keyGlossary: KeyGlossaryEntry[] = [",
    ]
    for entry in entries:
        lines.append(f"  {json.dumps(entry, ensure_ascii=False)},")
    lines.append("];")
    lines.append("")
    OUTPUT_PATH.write_text("\n".join(lines), encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser(description="Extrae el glosario del manual por OCR por columnas.")
    parser.add_argument("--start", type=int, default=375)
    parser.add_argument("--end", type=int, default=382)
    parser.add_argument("--resolution", type=int, default=450)
    args = parser.parse_args()

    entries = build_glossary(args.start, args.end, args.resolution)
    write_typescript(entries)
    print(f"Glosario escrito en {OUTPUT_PATH}: {len(entries)} entradas")


if __name__ == "__main__":
    main()
