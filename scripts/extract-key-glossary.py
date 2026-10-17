from __future__ import annotations

import argparse
import json
import re
import unicodedata
from pathlib import Path
from typing import Any

import pdfplumber


ROOT = Path(__file__).resolve().parents[1]
PDF_PATH = ROOT / "public" / "pdfcoffee.com_manual-de-la-flora-de-los-alrededores-de-buenos-aires-9-pdf-free.pdf"
REVIEW_PATH = ROOT / "src" / "data" / "keyGlossary.review.json"
OUTPUT_PATH = ROOT / "src" / "data" / "keyGlossary.ts"
SOURCE = "Manual Cabrera 2a ed., glosario"


TERM_FIXES = {
    "Al1jo-tomentoso": "Albo-tomentoso",
    "Anem7filo": "Anemofilo",
    "Apendiculaio": "Apendiculado",
    "Apiculaio": "Apiculado",
    "Aquillaio": "Aquillado",
    "A rilada": "Arilada",
    "Arasento": "Aranento",
    "Araaento": "Aranento",
    "Arrifionado": "Arrinonado",
    "Biflora": "Bifloro",
    "Cesped": "Cespitoso",
    "C/landuloso-pubescente": "Glanduloso-pubescente",
    "C/lobular": "Globular",
    "Diclamdea": "Diclamidea",
    "Dicot6mico": "Dicotomico",
    "Diandros": "Diandro",
    "Diseminaci6n": "Diseminacion",
    "Entom6fila": "Entomofila",
    "Fi/odio": "Filodio",
    "Gluas": "Glumas",
    "Gamostfalo": "Gamostefalo",
    "Gamoptaio": "Gamopetalo",
    "Hermafroditas": "Hermafrodita",
    "Indupliwdo": "Induplicado",
    "M onadelfo": "Monadelfo",
    "M ultiseminado": "Multiseminado",
    "Membmnoso": "Membranoso",
    "Perianto": "Perianto",
    "Pinnati": "Pinnati-",
    "Pi8tilodio": "Pistilodio",
    "Plumo8o": "Plumoso",
    "Protalo": "Protalo",
    "Pseudobulbo8": "Pseudobulbos",
    "Re/rorso": "Retrorso",
    "Ro.stelo": "Rostelo",
    "Sep/ado": "Septado",
    "Sujrutescente": "Sufrutescente",
    "T1lberculado": "Tuberculado",
    "Pernado": "Ternado",
    "Ter6fita": "Terofita",
    "T riquetro": "Triquetro",
    "Unia": "Una",
    "ZigornO?jo": "Zigomorfo",
}


TEXT_REPLACEMENTS = {
    "Appndice": "Apendice",
    "Cmara": "Camara",
    "Cmaras": "Camaras",
    "Gramineas": "Gramineas",
    "Gramneas": "Gramineas",
    "Gmmneas": "Gramineas",
    "M alvceas": "Malvaceas",
    "acompaan": "acompanan",
    "alre dedor": "alrededor",
    "apice": "apice",
    "apices": "apices",
    "apndice": "apendice",
    "apndices": "apendices",
    "brctea": "bractea",
    "brcteas": "bracteas",
    "cliz": "caliz",
    "cliz.": "caliz.",
    "cpsula": "capsula",
    "cpsulas": "capsulas",
    "de nomina": "denomina",
    "de nomin": "denomin",
    "enrganos": "en organos",
    "estambre frtil": "estambre fertil",
    "frtil": "fertil",
    "gnero": "genero",
    "gneros": "generos",
    "glndula": "glandula",
    "glndulas": "glandulas",
    "legmbre": "legumbre",
    "legmbres": "legumbres",
    "la flor las": "la flor de las",
    "lculo": "loculo",
    "lculos": "loculos",
    "lmina": "lamina",
    "lminas": "laminas",
    "membranceo": "membranaceo",
    "membrancea": "membranacea",
    "nmero": "numero",
    "nmeros": "numeros",
    "nucleo": "nucleo",
    "organo": "organo",
    "organos": "organos",
    "pecolo": "peciolo",
    "pecolos": "peciolos",
    "peri gonio": "perigonio",
    "ptalo": "petalo",
    "ptalos": "petalos",
    "rganos": "organos",
    "rgano": "organo",
    "retculo": "reticulo",
    "redu cido": "reducido",
    "spalo": "sepalo",
    "spalos": "sepalos",
    "tallo aereo": "tallo aereo",
    "vulo": "ovulo",
    "vulos": "ovulos",
}

DEFINITION_STARTERS = {
    "Aparato",
    "Apice",
    "Apendice",
    "Bractea",
    "Capsula",
    "Cima",
    "Con",
    "Corola",
    "Cubierto",
    "De",
    "Desprovisto",
    "Dicese",
    "Dispersion",
    "Dispuesto",
    "En",
    "Flor",
    "Flores",
    "Fruto",
    "Hoja",
    "Inflorescencia",
    "Membrana",
    "Organo",
    "Ovario",
    "Peciolo",
    "Planta",
    "Prefijo",
    "Provisto",
    "Que",
    "Receptaculo",
    "Recortado",
    "Rudimento",
    "Se",
    "Semilla",
    "Tallos",
    "Unidad",
}


SUSPICIOUS_PATTERNS = [
    re.compile(r"\bGLOSARIO\b", re.IGNORECASE),
    re.compile(r"\bFLORA DE BUENOS AIRES\b", re.IGNORECASE),
    re.compile(r"\b[A-Z]{2,}[a-z]{2,}[A-Z]{2,}\b"),
    re.compile(r"\s{2,}"),
]


def strip_accents(value: str) -> str:
    decomposed = unicodedata.normalize("NFD", value)
    return "".join(char for char in decomposed if unicodedata.category(char) != "Mn")


def normalize_key(value: str) -> str:
    return re.sub(r"[^a-z0-9]+", "", strip_accents(value).lower())


def clean_text(value: str) -> str:
    value = value.replace("Â§", "e")
    value = value.replace("�", "")
    value = strip_accents(value)
    value = value.replace("_d ice", "dice")
    value = re.sub(r"-_\s*", "", value)
    value = value.replace("'1", "a")
    value = value.replace("9.", "a")
    value = value.replace("meIs", "mas")
    value = value.replace("mels", "mas")
    value = value.replace("sec'.)", "seco")
    value = value.replace(" .", ".")
    value = value.replace(" ,", ",")
    value = value.replace(" ;", ";")
    value = value.replace(" :", ":")
    value = re.sub(r"(\w)-\s+(\w)", r"\1\2", value)
    value = re.sub(r"\s+", " ", value)
    value = value.strip(" .,-;:")
    for bad, good in TEXT_REPLACEMENTS.items():
        value = re.sub(rf"\b{re.escape(bad)}\b", good, value)
    return value


def clean_term(value: str) -> str:
    value = clean_text(value).strip(" .'")
    if re.fullmatch(r"[A-Z]\s+[A-Za-z]{3,}", value) or re.fullmatch(r"[A-Za-z]{1,4}\s+[A-Za-z]{1,4}", value):
        value = value.replace(" ", "")
    value = TERM_FIXES.get(value, value)
    return value[:1].upper() + value[1:]


def find_column_split(words: list[dict[str, Any]]) -> float:
    xs = sorted(word["x0"] for word in words if word["top"] > 150)
    candidates: list[tuple[float, float]] = []
    for left, right in zip(xs, xs[1:]):
        midpoint = (left + right) / 2
        gap = right - left
        if 245 <= midpoint <= 330 and gap > 6:
            candidates.append((gap, midpoint))
    if not candidates:
        return 297.5
    return max(candidates)[1]


def group_lines(words: list[dict[str, Any]]) -> list[list[dict[str, Any]]]:
    lines: list[list[dict[str, Any]]] = []
    for word in sorted(words, key=lambda item: (item["top"], item["x0"])):
        if word["top"] < 155:
            continue
        if not lines or abs(lines[-1][0]["top"] - word["top"]) > 3:
            lines.append([word])
        else:
            lines[-1].append(word)
    return [sorted(line, key=lambda item: item["x0"]) for line in lines]


def flatten_lines(lines: list[list[dict[str, Any]]]) -> list[dict[str, Any]]:
    tokens: list[dict[str, Any]] = []
    for line_index, line in enumerate(lines):
        for word in line:
            tokens.append({**word, "lineIndex": line_index})
    return tokens


def looks_like_definition_start(word: dict[str, Any] | None) -> bool:
    if not word:
        return False
    cleaned = clean_text(word["text"]).strip(".,;:")
    return cleaned in DEFINITION_STARTERS


def detect_entry_start(
    tokens: list[dict[str, Any]],
    index: int,
    column_left: float,
) -> tuple[str, int] | None:
    if index >= len(tokens):
        return None

    at_margin = tokens[index]["x0"] <= column_left + 18
    term_tokens: list[str] = []
    max_tokens = 4 if at_margin else 1
    for offset, word in enumerate(tokens[index : index + max_tokens]):
        term_tokens.append(word["text"])
        raw_term = " ".join(term_tokens).strip("/ ")
        if not raw_term.endswith("."):
            continue
        raw_term = raw_term[:-1].strip()
        if not re.match(r"^['\"]?[A-ZÁÉÍÓÚÜÑ/][A-Za-zÁÉÍÓÚÜÑáéíóúüñ�/0-9?. -]{0,36}$", raw_term):
            return None
        next_word = tokens[index + offset + 1] if index + offset + 1 < len(tokens) else None
        if at_margin or looks_like_definition_start(next_word):
            return raw_term, offset + 1
    return None


def flag_entry(term: str, definition: str, raw: str) -> list[str]:
    flags: list[str] = []
    if "�" in raw:
        flags.append("had_replacement_chars")
    if len(definition) < 8:
        flags.append("short_definition")
    if len(definition) > 420:
        flags.append("long_definition")
    if any(pattern.search(definition) for pattern in SUSPICIOUS_PATTERNS):
        flags.append("suspicious_text")
    if not re.match(r"^[A-Z][A-Za-z0-9 -]+$", term):
        flags.append("suspicious_term")
    return flags


def extract_column_entries(
    lines: list[list[dict[str, Any]]],
    column_left: float,
    pdf_page: int,
    column: str,
) -> list[dict[str, Any]]:
    entries: list[dict[str, Any]] = []
    current: dict[str, Any] | None = None
    tokens = flatten_lines(lines)
    index = 0

    while index < len(tokens):
        start = detect_entry_start(tokens, index, column_left)
        if start:
            if current and current["definition"]:
                entries.append(current)
            raw_term, term_length = start
            current = {
                "term": clean_term(raw_term),
                "definition": "",
                "source": SOURCE,
                "sourcePage": pdf_page,
                "pdfPage": pdf_page,
                "bookPage": pdf_page - 7,
                "column": column,
                "raw": "",
            }
            index += term_length
            continue

        if current:
            current["definition"] = clean_text(f"{current['definition']} {tokens[index]['text']}")
            current["raw"] = clean_text(f"{current['raw']} {tokens[index]['text']}")
        index += 1

    if current and current["definition"]:
        entries.append(current)
    return entries


def extract_entries(start: int, end: int) -> list[dict[str, Any]]:
    entries: list[dict[str, Any]] = []
    with pdfplumber.open(PDF_PATH) as pdf:
        for pdf_page in range(start, end + 1):
            page = pdf.pages[pdf_page - 1]
            words = page.extract_words(x_tolerance=2, y_tolerance=3, keep_blank_chars=False)
            split = find_column_split(words)
            for column, column_words in (
                ("left", [word for word in words if word["x0"] < split]),
                ("right", [word for word in words if word["x0"] >= split]),
            ):
                content_words = [word for word in column_words if word["top"] > 155]
                if not content_words:
                    continue
                left_edges = sorted(word["x0"] for word in content_words)
                column_left = left_edges[max(0, int(len(left_edges) * 0.05) - 1)]
                entries.extend(
                    extract_column_entries(group_lines(content_words), column_left, pdf_page, column)
                )

    deduped: dict[str, dict[str, Any]] = {}
    for entry in entries:
        key = normalize_key(entry["term"])
        if not key or not entry["definition"]:
            continue
        entry["flags"] = flag_entry(entry["term"], entry["definition"], entry["raw"])
        deduped[key] = entry
    return sorted(deduped.values(), key=lambda item: normalize_key(item["term"]))


def write_review(entries: list[dict[str, Any]]) -> None:
    review_entries = [
        {
            "term": entry["term"],
            "definition": entry["definition"],
            "pdfPage": entry["pdfPage"],
            "bookPage": entry["bookPage"],
            "column": entry["column"],
            "flags": entry["flags"],
            "raw": entry["raw"],
        }
        for entry in entries
    ]
    REVIEW_PATH.write_text(json.dumps(review_entries, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def write_typescript(entries: list[dict[str, Any]]) -> None:
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
        payload = {
            "term": entry["term"],
            "definition": entry["definition"],
            "source": entry["source"],
            "sourcePage": entry["sourcePage"],
        }
        lines.append(f"  {json.dumps(payload, ensure_ascii=False)},")
    lines.append("];")
    lines.append("")
    OUTPUT_PATH.write_text("\n".join(lines), encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser(description="Extract the second edition glossary from the local PDF.")
    parser.add_argument("--start", type=int, default=556)
    parser.add_argument("--end", type=int, default=565)
    args = parser.parse_args()

    if not PDF_PATH.exists():
        raise FileNotFoundError(f"PDF not found: {PDF_PATH}")

    entries = extract_entries(args.start, args.end)
    write_review(entries)
    write_typescript(entries)
    flagged = sum(1 for entry in entries if entry["flags"])
    print(f"Extracted {len(entries)} entries, {flagged} flagged for review.")
    print(f"Review file: {REVIEW_PATH}")
    print(f"TypeScript file: {OUTPUT_PATH}")


if __name__ == "__main__":
    main()
