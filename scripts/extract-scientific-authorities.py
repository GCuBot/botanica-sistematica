from __future__ import annotations

import argparse
import json
import re
import shutil
import subprocess
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parents[1]
TMP_DIR = ROOT / ".tmp-second-edition-authorities"
OUTPUT_PATH = ROOT / "src" / "data" / "scientificNameAuthorities.ts"
REVIEW_PATH = ROOT / "src" / "data" / "scientificNameAuthorities.review.json"
DEFAULT_TRANSCRIPT_PATH = Path.home() / "Downloads" / "Manual_Flora_Buenos_Aires_Transcrito.md"
SECOND_EDITION_PAGES_DIR = ROOT / "manual-text" / "second-edition" / "pages"

LAST_TAXONOMIC_TRANSCRIPT_PAGE = 386

VERIFIED_AUTHORITIES = {
    # Confirmed by the species entries and the final scientific-name index.
    "ed2_egeria_najas": "Planch.",
    "ed2_agrostis_jirgensii": "Hackel.",
    # The complete name appears in the figure caption on transcript page 319.
    "ed2_cayaponia_bonariensis": "(Mill.) Martínez Crovetto",
    # A figure interrupts the extracted reading order after the genus heading.
    "ed2_atriplex_montevidensis": "Spreng.",
    # Verified against pages whose OCR drops or corrupts part of the entry.
    "ed2_piptochaetium_stipoides": "(Trin. et Rupr.) Hackel.",  # p. 103
    "ed2_eleocharis_filiculmis": "Kunth.",  # p. 166
    "ed2_eleocharis_dunensis": "Kükenth.",  # p. 166
    "ed2_arjona_tuberosa_tandilensis": "(O.K.) Dawson.",  # p. 230
    "ed2_tetragonia_tetragonoides": "(Pall.) O. Kuntze.",  # p. 259
    "ed2_cleome_hassleriana": "Chod.",  # p. 290
    "ed2_wigginsia_tephracantha": "(Link et Otto) D. M. Porter.",  # p. 438
    "ed2_ludwigia_uruguayensis": "(Camb.) Hara.",  # p. 450
    "ed2_ludwigia_peploides": "(H.B.K.) Raven.",  # p. 451
    "ed2_ludwigia_longifolia": "(DC.) Hara.",  # p. 452
    "ed2_ludwigia_elegans": "(Camb.) Hara.",  # p. 452
    "ed2_oenothera_centaurifolia": "(Spach) Steud.",  # p. 453
    "ed2_oenothera_longiflora": "L.",  # p. 453
    "ed2_verbena_litoralis": "H.B.K.",  # p. 524
    "ed2_solanum_eleagnifolium_leprosum": "(Ort.) Dunal.",  # p. 543
    "ed2_solanum_palitanum": "Morton.",  # printed as S. palitans, p. 545
    "ed2_valeriana_falcifolia": "Vahl.",  # printed as V. salicariifolia, p. 593
    "ed2_baccharis_caprariifolia": "DC.",  # p. 640
    "ed2_senecio_madagascariensis": "Poir.",  # p. 680
    "ed2_schlechteranthus_luzulaefolius": "Less.",  # Schlechtendalia, p. 692
    # These entries are legible in the 1978 page images, but their names or
    # authorities are damaged, abbreviated, or split in both OCR sources.
    "ed2_stipa_clarazii": "Ball.",  # p. 107
    "ed2_sagittaria_montevidensis": "Cham. et Schlecht.",  # p. 58
    "ed2_carex_uruguensis": "Böck.",  # p. 154
    "ed2_sisyrinchium_pachyrhizum": "Baker.",  # p. 200
    "ed2_peperomia_comarapana": "C. DC.",  # p. 219
    "ed2_jodina_rhombifolia": "Hook. et Arn.",  # p. 231, figure caption
    "ed2_polygonum_stelligerum": "Cham.",  # p. 240
    "ed2_rivina_humilis": "L.",  # p. 259
    "ed2_ranunculus_repens": "L.",  # p. 282
    "ed2_cleome_trachycarpa": "Klotz.",  # p. 290
    "ed2_cleome_titubans": "Speg.",  # p. 290
    "ed2_reseda_luteola": "L.",  # p. 307
    "ed2_brassica_nigra": "(L.) Koch.",  # p. 306
    "ed2_daphnopsis_racemosa": "Griseb.",  # p. 439
    "ed2_heimia_salicifolia": "Link.",  # p. 441
    "ed2_cuphea_glutinosa": "Cham. et Schlecht.",  # p. 441
    "ed2_terminalia_australis": "Camb.",  # p. 443, figure caption
    "ed2_ludwigia_peruviana": "(L.) Hara.",  # p. 452
    "ed2_oenothera_rosea": "Ait.",  # p. 453
    "ed2_oenothera_affinis": "Camb.",  # p. 453
    "ed2_oenothera_parodiana": "Munz.",  # p. 453
    "ed2_cynanchum_bonariense": "(Dec.) Meyer.",  # p. 493
    "ed2_ipomoea_cairica": "(L.) Sweet.",  # p. 504
    "ed2_heliotropium_nicotianaefolium": "Poir.",  # p. 512
    "ed2_wahlenbergia_linarioides": "(Lam.) DC.",  # p. 604
    "ed2_picris_echioides": "L.",  # p. 706
    "ed2_lilaeopsis_minor": "(Hill) Pérez-Moreau.",  # p. 464
}

# Printed pages in the 1978 second edition where each manual override can be
# checked in the species entry or, where noted above, in a figure caption.
VERIFIED_AUTHORITY_PAGES = {
    "ed2_egeria_najas": 63,
    "ed2_agrostis_jirgensii": 100,
    "ed2_cayaponia_bonariensis": 599,
    "ed2_atriplex_montevidensis": 243,
    "ed2_piptochaetium_stipoides": 103,
    "ed2_eleocharis_filiculmis": 166,
    "ed2_eleocharis_dunensis": 166,
    "ed2_arjona_tuberosa_tandilensis": 230,
    "ed2_tetragonia_tetragonoides": 259,
    "ed2_cleome_hassleriana": 290,
    "ed2_wigginsia_tephracantha": 438,
    "ed2_ludwigia_uruguayensis": 450,
    "ed2_ludwigia_peploides": 451,
    "ed2_ludwigia_longifolia": 452,
    "ed2_ludwigia_elegans": 452,
    "ed2_oenothera_centaurifolia": 453,
    "ed2_oenothera_longiflora": 453,
    "ed2_verbena_litoralis": 524,
    "ed2_solanum_eleagnifolium_leprosum": 543,
    "ed2_solanum_palitanum": 545,
    "ed2_valeriana_falcifolia": 593,
    "ed2_baccharis_caprariifolia": 640,
    "ed2_senecio_madagascariensis": 680,
    "ed2_schlechteranthus_luzulaefolius": 692,
    "ed2_stipa_clarazii": 107,
    "ed2_sagittaria_montevidensis": 58,
    "ed2_carex_uruguensis": 154,
    "ed2_sisyrinchium_pachyrhizum": 200,
    "ed2_peperomia_comarapana": 219,
    "ed2_jodina_rhombifolia": 231,
    "ed2_polygonum_stelligerum": 240,
    "ed2_rivina_humilis": 259,
    "ed2_ranunculus_repens": 282,
    "ed2_cleome_trachycarpa": 290,
    "ed2_cleome_titubans": 290,
    "ed2_reseda_luteola": 307,
    "ed2_brassica_nigra": 306,
    "ed2_daphnopsis_racemosa": 439,
    "ed2_heimia_salicifolia": 441,
    "ed2_cuphea_glutinosa": 441,
    "ed2_terminalia_australis": 443,
    "ed2_ludwigia_peruviana": 452,
    "ed2_oenothera_rosea": 453,
    "ed2_oenothera_affinis": 453,
    "ed2_oenothera_parodiana": 453,
    "ed2_cynanchum_bonariense": 493,
    "ed2_ipomoea_cairica": 504,
    "ed2_heliotropium_nicotianaefolium": 512,
    "ed2_wahlenbergia_linarioides": 604,
    "ed2_picris_echioides": 706,
    "ed2_lilaeopsis_minor": 464,
}


def normalize(value: str) -> str:
    value = value.lower()
    value = value.replace("á", "a").replace("é", "e").replace("í", "i")
    value = value.replace("ó", "o").replace("ú", "u").replace("ñ", "n")
    value = re.sub(r"[^a-z0-9]+", " ", value)
    return re.sub(r"\s+", " ", value).strip()


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


def load_second_edition() -> dict[str, Any]:
    compile_second_edition()
    script = (
        "const m=require('./.tmp-second-edition-authorities/src/data/secondEdition.js');"
        "console.log(JSON.stringify(m.secondEditionSpeciesData));"
    )
    result = subprocess.run(
        ["node", "-e", script],
        cwd=ROOT,
        check=True,
        capture_output=True,
        encoding="utf-8",
        text=True,
    )
    return json.loads(result.stdout)


def clean_pdf_text(value: str) -> str:
    replacements = {
        "�": "",
        " ct ": " et ",
        " et ThelJung": " et Thellung",
        "Thcllung": "Thellung",
        "Schlc.cht": "Schlecht",
        "Schlcchter": "Schlechter",
        "SchJcchter": "Schlechter",
        "Gríseb.": "Griseb.",
        "(DO.)": "(DC.)",
        "Parodi ct": "Parodi et",
        "PerR.": "Pers.",
        "Kunth) Pilger": "Kunth) Pilger",
        "LindI.": "Lindl.",
        "Bail!": "Baill.",
        "Baill..": "Baill.",
        "BaH": "Ball.",
        "c1arazii": "clarazii",
        "eampd.": "Campd.",
        "cmend.": "emend.",
        "De.": "DC.",
        "Dcsr.": "Desr.",
        "Fermld": "Fernald",
        "Gil!.": "Gill.",
        "IVilld.": "Willd.",
        "Jusa.": "Juss.",
        "AH.": "All.",
        "MueH.": "Muell.",
        "Mil!.": "Mill.",
        "N annf.": "Nannf.",
        "N ees": "Nees",
        "n€esiana": "neesiana",
        "Plan chan": "Planchon",
        "Rack.": "Hack.",
        "Rerrmann": "Herrmann",
        "SchJcchter": "Schlechter",
        "Solms.-Laub.": "Solms-Laub.",
        "Sto Hil.": "St. Hil.",
        "StandJey": "Standley",
        "Swartz": "Sw.",
        "Vernonia nitidula Léss.": "Vernonia nitidula Less.",
        "\\Yalt.": "Walt.",
        ":mnua": "annua",
        "bonarien8": "bonariens",
        "bonariensi!>": "bonariensis",
        "Boe:;k.": "Boeck.",
        "byzantina": "bizantina",
        "erag,rostis": "eragrostis",
        "incomptus": "incomtus",
        "ivaefoliuni": "ivaefolium",
        "jaeg~ii": "jaeggii",
        "Ba rros": "Barros",
        "peruv;ana": "peruviana",
        "praten8": "pratens",
        "stecilis": "sterilis",
        "varo": "var.",
        "PI.": "Pl.",
        "B.\\GCHARIS": "BACCHARIS",
        "8picata": "spicata",
        "coridlfolia": "coridifolia",
        "artemis1:oides": "artemisioides",
        "8ubopposita": "subopposita",
        "medulIosa": "medullosa",
        "microphyIla": "microphylla",
        "usitatiss;mum": "usitatissimum",
        "SI&YRINCHITJM": "SISYRINCHIUM",
        "Sisyrinchiurn": "Sisyrinchium",
        "GAJLLARDIA": "GAILLARDIA",
        "CmDnnNE": "CARDAMINE",
        "(Hook. et Am.) Bak.)": "(Hook. et Arn.) Bak.",
        "(Vell,)": "(Vell.)",
        "Linnaeá": "Linnaea",
        "chlorophyllaphilla": "chlorophylla",
        "chlorophyllya": "chlorophylla",
        "jürgensii": "jirgensii",
        "lasianthus": "lasianthum",
        "lelantha": "leiantha",
        " naias ": " najas ",
        "rosengurtii": "rosengurttii",
        "Ratzien": "Rantzien",
        " ssp. ": " subsp. ",
        "Schlechter..—": "Schlechter. —",
        "(Mart. 'et Eichl.)": "(Mart. et Eichl.)",
        "H. ·B. K.": "H. B. K.",
        "Bąk.": "Bak.",
        "·Gaertn.": "Gaertn.",
        "Gree1 e.": "Greene.",
        "Greet e.": "Greene.",
        "PrèsI.": "Presl.",
        "(Retz.) Köl.": "(Retz.) Koel.",
        "Rohr b.": "Rohrb.",
        "Dese., O'Don. et Lourt.": "Desc., O'Don. et Lourt.",
        "Rosen., Arrill. et Izag.": "Roseng., Arrill. et Izag.",
        "(L. )": "(L.)",
        "(Ill.) Cogn.": "(Gill.) Cogn.",
        "determinrum": "deterrimum",
        "myrosuros": "myosuros",
        "1.381. 1. lutea": "1.381. I. lutea",
    }
    for bad, good in replacements.items():
        value = value.replace(bad, good)
    value = value.replace("\\times", "x").replace("×", "x")
    value = re.sub(r"\.{2,}(?=\s*[–—-])", ".", value)
    value = re.sub(r"(?<=[A-Za-z])8(?=[A-Za-z])", "s", value)
    value = re.sub(r"(?<=[A-Za-z])\.(?=[a-z])", "", value)
    value = re.sub(r"(?<=[a-z])1(?=[a-z])", "l", value)
    value = re.sub(r"(?<=[a-z])J(?=[a-z])", "l", value)
    value = re.sub(r"\s+", " ", value)
    value = value.replace("CmDnnNE", "CARDAMINE")
    return value.strip()


def flexible_literal(value: str) -> str:
    variants = {
        "a": "aáàâäã",
        "e": "eéèêë",
        "i": "iíìîï",
        "o": "oóòôöõ",
        "u": "uúùûü",
        "n": "nñ",
    }
    pieces: list[str] = []
    for char in value:
        if char.isalpha():
            choices = variants.get(char.lower(), char)
            pieces.append(f"(?:[{re.escape(choices)}]|�)")
        elif char.isspace():
            pieces.append(r"\s+")
        else:
            pieces.append(re.escape(char))
    return "".join(pieces)


def flexible_literal(value: str) -> str:
    variants = {
        "a": "a\u00e1\u00e0\u00e2\u00e4\u00e3",
        "e": "e\u00e9\u00e8\u00ea\u00eb",
        "i": "i\u00ed\u00ec\u00ee\u00ef",
        "o": "o\u00f3\u00f2\u00f4\u00f6\u00f5",
        "u": "u\u00fa\u00f9\u00fb\u00fc",
        "n": "n\u00f1",
    }
    pieces: list[str] = []
    for char in value:
        if char.isalpha():
            choices = variants.get(char.lower(), char)
            pieces.append(f"(?:[{re.escape(choices)}]|\ufffd)")
        elif char.isspace():
            pieces.append(r"\s+")
        else:
            pieces.append(re.escape(char))
    return "".join(pieces)


def name_parts(scientific_name: str) -> tuple[str, str, str]:
    scientific_name = re.sub(r"\bssp\.", "subsp.", scientific_name)
    parts = scientific_name.split()
    if len(parts) < 2:
        return scientific_name, "", ""
    genus = parts[0]
    epithet_and_rank = " ".join(parts[1:])
    escaped = flexible_literal(epithet_and_rank)
    escaped = escaped.replace(r"var\.", r"(?:var\.|var|varo)")
    escaped = escaped.replace(r"subsp\.", r"(?:subsp\.|subsp)")
    return genus, parts[1], escaped


def entry_patterns(scientific_name: str) -> list[re.Pattern[str]]:
    scientific_name = re.sub(r"\bssp\.", "subsp.", scientific_name)
    genus, epithet, epithet_pattern = name_parts(scientific_name)
    if not epithet_pattern:
        return []
    has_infraspecific_rank = bool(re.search(r"(?:^|\s)(?:var\.|subsp\.|f\.)", scientific_name))
    rank_guard = "" if has_infraspecific_rank else r"(?!\s+(?:var\.|var|varo|subsp\.|subsp))"
    full_genus = re.escape(genus)
    abbreviated_genera = [genus[:length] for length in range(1, min(3, len(genus)) + 1)]
    if has_infraspecific_rank:
        rank_match = re.search(r"(?:^|\s)((?:var\.|subsp\.|f\.)\s+\S+)", scientific_name)
        rank_text = rank_match.group(1) if rank_match else ""
        rank_pattern = flexible_literal(rank_text).replace(r"var\.", r"(?:var\.|var|varo)")
        rank_pattern = rank_pattern.replace(r"subsp\.", r"(?:subsp\.|subsp)")
        base_epithet_pattern = flexible_literal(epithet)
        epithet_pattern = rf"{base_epithet_pattern}(?:\s+[^\n|]{{1,80}})?\s+{rank_pattern}"
    entry_prefix = r"(?:^|\s)[\]\[]?(?:\d{1,4}(?:\.\d{3})?|[lIn])[a-z]?[\.,]*\s+"
    name_prefixes = [
        rf"{full_genus}\s+{epithet_pattern}{rank_guard}",
        *[
            rf"{re.escape(abbreviation)}\.+\s+{epithet_pattern}{rank_guard}"
            for abbreviation in abbreviated_genera
        ],
    ]
    return [
        re.compile(
            rf"{entry_prefix}(?P<name>{name_prefix})[\.,]*\s+(?P<tail>[^\n|]{{1,120}}?(?:,|[–—]|-)[^\n|]{{0,120}})",
            flags=re.IGNORECASE,
        )
        for name_prefix in name_prefixes
    ]


def synonym_patterns(scientific_name: str) -> list[re.Pattern[str]]:
    scientific_name = re.sub(r"\bssp\.", "subsp.", scientific_name)
    genus, _epithet, epithet_pattern = name_parts(scientific_name)
    if not epithet_pattern:
        return []
    has_infraspecific_rank = bool(re.search(r"(?:^|\s)(?:var\.|subsp\.|f\.)", scientific_name))
    rank_guard = "" if has_infraspecific_rank else r"(?!\s+(?:var\.|var|varo|subsp\.|subsp))"
    full_genus = re.escape(genus)
    abbreviated_genera = [genus[:length] for length in range(1, min(3, len(genus)) + 1)]
    name_prefixes = [
        rf"{full_genus}\s+{epithet_pattern}{rank_guard}",
        *[
            rf"{re.escape(abbreviation)}\.+\s+{epithet_pattern}{rank_guard}"
            for abbreviation in abbreviated_genera
        ],
    ]
    return [
        re.compile(
            rf"(?:^|[\s.;])(?P<name>{name_prefix})[\.,]*\s+(?P<tail>[^\n|]{{1,120}}?(?:,|[–—]|-)[^\n|]{{0,120}})",
            flags=re.IGNORECASE,
        )
        for name_prefix in name_prefixes
    ]


def type_species_patterns(scientific_name: str) -> list[re.Pattern[str]]:
    genus, _epithet, epithet_pattern = name_parts(scientific_name)
    if not epithet_pattern:
        return []
    full_genus = re.escape(genus)
    abbreviated_genera = [genus[:length] for length in range(1, min(3, len(genus)) + 1)]
    name_prefixes = [
        rf"{full_genus}\s+{epithet_pattern}",
        *[rf"{re.escape(abbreviation)}\.+\s+{epithet_pattern}" for abbreviation in abbreviated_genera],
    ]
    return [
        re.compile(
            rf"Es\W*pecie\s+tipo:\s+(?P<name>{name_prefix})\s+(?P<tail>[^.;,]{{1,80}}\.)",
            flags=re.IGNORECASE,
        )
        for name_prefix in name_prefixes
    ]


def infraspecific_lower_words(scientific_name: str) -> set[str]:
    scientific_name = re.sub(r"\bssp\.", "subsp.", scientific_name)
    match = re.search(r"(?:^|\s)(var\.|subsp\.|f\.)\s+([a-z-]+)", scientific_name, flags=re.IGNORECASE)
    if not match:
        return set()
    rank = match.group(1).rstrip(".").lower()
    epithet = match.group(2).lower()
    return {rank, epithet}


def parse_authority(tail: str, scientific_name: str = "") -> str | None:
    rank_words = infraspecific_lower_words(scientific_name)
    tail = clean_pdf_text(tail)
    tail = re.split(r"\b(?:Perenne|Anual|Arbusto|Arbol|Hierba|Subarbusto|Planta|Rizoma|Tallos?)\b", tail, maxsplit=1)[0]
    tail = tail.strip(" .,:;")
    if not tail:
        return None

    if "," not in tail and "–" not in tail and "—" not in tail and "-" not in tail:
        return None
    citation_starts = (
        "Act.",
        "Agrost.",
        "Anal.",
        "Ann.",
        "Abh.",
        "Bol.",
        "Bot.",
        "Bull.",
        "Brittonia",
        "Com.",
        "Como",
        "Contrib.",
        "Darwiniana",
        "Enum.",
        "Fl.",
        "Hedwigia",
        "Journ.",
        "Lilloa",
        "Linnaea",
        "Mem.",
        "Meded",
        "Not.",
        "Physis",
        "Prodr.",
        "Rep.",
        "Rev.",
        "Sp.",
        "Spec.",
        "Syn.",
        "Torreya",
    )
    separator_match = re.search(r"\s*[–—]+\s*|\s+-\s*", tail)
    if separator_match:
        candidate = tail[: separator_match.start()]
        continuation_parts: list[str] = []
    else:
        parts = tail.split(",")
        candidate = parts[0]
        continuation_parts = parts[1:]
    for part in continuation_parts:
        stripped = part.strip()
        if not stripped or stripped.startswith(citation_starts) or re.search(r"\d", stripped):
            break
        if re.search(r"\b[A-ZÁÉÍÓÚÑ]{3,}\b", stripped):
            break
        single_word = stripped.rstrip(".")
        if len(single_word) >= 4 and re.fullmatch(r"[A-Za-zÁÉÍÓÚÑáéíóúñ-]+", single_word):
            break
        if re.search(r"\b[a-z]{2,}\b", stripped.replace(" et ", " ").replace(" ex ", " ")):
            break
        candidate = f"{candidate}, {stripped}"

    candidate = re.split(r"\s+(?:en|in)\s+[A-Z][A-Za-z]", candidate, maxsplit=1)[0]
    candidate = re.split(r"\s+\((?:[A-Z][a-z]{2,}\s|[A-Z]\.\s)", candidate, maxsplit=1)[0]
    if not rank_words:
        candidate = re.split(r"\s+(?:f\.|var\.?|subsp\.?)\s+[a-z]", candidate, maxsplit=1)[0]
    candidate = re.split(
        r"\s+(?:Act\.|Agrost\.|Anal\.|Ann\.|Bol\.|Bull\.|Contrib\.|Darwiniana|Enum\.|Fl\.|"
        r"Hedwigia|Journ\.|Lilloa|Linnaea|Mem\.|Prodr\.|Rev\.|Sp\.|Spec\.|Syn\.)",
        candidate,
        maxsplit=1,
    )[0]
    candidate = candidate.strip(" ,:;—-")
    candidate = clean_pdf_text(candidate)
    candidate = re.sub(r"\s+", " ", candidate)
    candidate = re.sub(r"\s+\.(?=[A-Z])", " ", candidate)

    if not candidate or len(candidate) > 80:
        return None
    if candidate.islower():
        return None
    if re.match(r"^[A-Z]['’]\.?\s+", candidate):
        return None
    if re.match(r"^[lI1]\.?\s+[A-Z][a-z]?\.", candidate):
        return None
    allowed_lower_words = {
        "af",
        "ap",
        "de",
        "di",
        "emend",
        "et",
        "ex",
        "in",
        "la",
        "van",
        "von",
        *rank_words,
    }
    if any(word not in allowed_lower_words for word in re.findall(r"\b[a-z]{2,}\b", candidate)):
        return None
    if re.search(r"\b(?:nov|combo?|comb|loc|cit)\b", candidate, flags=re.IGNORECASE):
        return None
    if re.search(r"\d|:|;|\"|~|!|/|\.{2,}", candidate):
        return None
    if re.search(
        r"\b(?:frondas|hojas|plantas|flores|borde|glumas|lemmas|panojas|pedicelos|espigas|rizomas|valvas)\b",
        candidate,
        flags=re.IGNORECASE,
    ):
        return None
    if re.search(r"(?:^|\s)[A-Z]$", candidate):
        return None
    if len(candidate.split()) > 8:
        return None
    return candidate


def parse_type_authority(tail: str) -> str | None:
    candidate = clean_pdf_text(tail).strip(" ,:;—-")
    candidate = re.sub(r"\s+", " ", candidate)
    if not candidate or len(candidate) > 80:
        return None
    if candidate.count("(") != candidate.count(")"):
        return None
    if re.search(r"\d|:|;|'|\"|~|!|/", candidate):
        return None
    if len(candidate.split()) > 8:
        return None
    return candidate


def has_recent_genus_context(text: str, match_start: int, genus: str) -> bool:
    if not genus:
        return False
    context = text[max(0, match_start - 20000) : match_start]
    genus_pattern = flexible_literal(genus)
    heading_pattern = re.compile(
        rf"(?:^|\s)(?:\d{{1,3}}|[lI])[a-z]?\.\s+{genus_pattern}\b",
        flags=re.IGNORECASE,
    )
    target_headings = list(heading_pattern.finditer(context))
    if not target_headings:
        return False

    later_context = context[target_headings[-1].end() :]
    any_genus_heading = re.compile(
        r"(?:^|\s)(?:\d{1,3}|[lI])[a-z]?\.\s+[A-ZÁÉÍÓÚÑ][A-ZÁÉÍÓÚÑ-]{2,}\b"
    )
    return not any_genus_heading.search(later_context)


def match_has_target_genus(
    match: re.Match[str], searchable: str, genus: str, match_offset: int = 0
) -> bool:
    matched_name = normalize(match.group("name"))
    normalized_genus = normalize(genus)
    if matched_name.startswith(f"{normalized_genus} "):
        return True
    return has_recent_genus_context(searchable, match.start() + match_offset, genus)


def overlapping_matches(pattern: re.Pattern[str], text: str):
    start = 0
    while match := pattern.search(text, start):
        yield match
        start = match.start() + 1


def extract_transcript_page_texts(path: Path) -> dict[int, str]:
    text = path.read_text(encoding="utf-8")
    marker = re.compile(r"<!--\s*PÁGINA\s+(\d+)\s*-->", flags=re.IGNORECASE)
    matches = list(marker.finditer(text))
    page_texts: dict[int, str] = {}

    for index, match in enumerate(matches):
        page = int(match.group(1))
        if page > LAST_TAXONOMIC_TRANSCRIPT_PAGE:
            break
        start = match.end()
        end = matches[index + 1].start() if index + 1 < len(matches) else len(text)
        page_text = re.sub(r"\\text\{([^{}]*)\}", r"\1", text[start:end])
        page_text = re.sub(r"[*_#`$]", "", page_text)
        page_texts[page] = clean_pdf_text(page_text)

    if not page_texts:
        raise ValueError(f"No se encontraron marcadores de página en {path}")
    return page_texts


def extract_second_edition_page_texts(path: Path) -> dict[int, str]:
    page_texts: dict[int, str] = {}
    for page_path in sorted(path.glob("spread-*-*.txt")):
        match = re.match(r"spread-(\d+)-(?:left|right)\.txt", page_path.name)
        if not match:
            continue
        page = int(match.group(1))
        if page > LAST_TAXONOMIC_TRANSCRIPT_PAGE:
            continue
        text = page_path.read_text(encoding="utf-8")
        page_texts[page] = f"{page_texts.get(page, '')} {clean_pdf_text(text)}".strip()
    return page_texts


def find_authority(scientific_name: str, page_texts: dict[int, str]) -> dict[str, Any]:
    patterns = entry_patterns(scientific_name)
    secondary_patterns = synonym_patterns(scientific_name)
    type_patterns = type_species_patterns(scientific_name)
    primary_matches: list[dict[str, Any]] = []
    secondary_matches: list[dict[str, Any]] = []
    genus, epithet, _epithet_pattern = name_parts(scientific_name)
    genus_marker = genus.lower()
    abbreviated_markers = [
        f"{genus[:length].lower()}. {epithet.lower()}"
        for length in range(1, min(3, len(genus)) + 1)
    ] if genus and epithet else []

    for book_page, text in page_texts.items():
        lower_text = text.lower()
        nearby_text = " ".join(
            page_texts.get(page, "").lower() for page in range(max(1, book_page - 2), book_page + 1)
        )
        if genus_marker not in nearby_text and not any(
            marker in lower_text for marker in abbreviated_markers
        ):
            continue
        context_prefix = " ".join(
            page_texts.get(page, "") for page in range(max(1, book_page - 5), book_page)
        )
        searchable = " " + text
        context_searchable = f"{context_prefix} {searchable}"
        context_offset = len(context_prefix) + 1
        for pattern in patterns:
            for match in overlapping_matches(pattern, searchable):
                authority = parse_authority(match.group("tail"), scientific_name)
                if not authority:
                    continue
                if not re.search(r"(?:^|\s)(?:var\.|subsp\.|f\.)", scientific_name) and re.search(
                    r"(?:^|\s)(?:var\.|subsp\.)", authority
                ):
                    continue
                primary_matches.append(
                    {
                        "authority": authority,
                        "bookPage": book_page,
                        "raw": match.group(0).strip(),
                        "genusContext": match_has_target_genus(
                            match, context_searchable, genus, context_offset
                        ),
                    }
                )
        for pattern in secondary_patterns:
            for match in overlapping_matches(pattern, searchable):
                authority = parse_authority(match.group("tail"), scientific_name)
                if not authority:
                    continue
                if not re.search(r"(?:^|\s)(?:var\.|subsp\.|f\.)", scientific_name) and re.search(
                    r"(?:^|\s)(?:var\.|subsp\.)", authority
                ):
                    continue
                secondary_matches.append(
                    {
                        "authority": authority,
                        "bookPage": book_page,
                        "raw": match.group(0).strip(),
                        "genusContext": match_has_target_genus(
                            match, context_searchable, genus, context_offset
                        ),
                    }
                )
        for pattern in type_patterns:
            for match in overlapping_matches(pattern, searchable):
                authority = parse_type_authority(match.group("tail"))
                if not authority:
                    continue
                secondary_matches.append(
                    {
                        "authority": authority,
                        "bookPage": book_page,
                        "raw": match.group(0).strip(),
                        "genusContext": match_has_target_genus(
                            match, context_searchable, genus, context_offset
                        ),
                    }
                )

    matches = primary_matches or secondary_matches
    contextual_matches = [match for match in matches if match.get("genusContext")]
    if contextual_matches and len({match["authority"] for match in contextual_matches}) == 1:
        return {
            "status": "assigned",
            "authority": contextual_matches[0]["authority"],
            "matches": contextual_matches[:5],
        }
    unique = sorted({match["authority"] for match in matches})
    if len(unique) == 1:
        return {"status": "assigned", "authority": unique[0], "matches": matches[:5]}
    if len(unique) > 1:
        return {"status": "ambiguous", "authorities": unique, "matches": matches[:8]}
    return {"status": "not_found", "matches": []}


def choose_result(
    primary: dict[str, Any], secondary: dict[str, Any], secondary_source: str
) -> dict[str, Any]:
    if secondary["status"] == "assigned":
        matches = secondary.get("matches", [])
        if any(match.get("genusContext") for match in matches):
            return {**secondary, "source": secondary_source}
    if primary["status"] == "assigned":
        return {**primary, "source": primary.get("source", "second-edition-pages")}
    if secondary["status"] == "assigned":
        return {**secondary, "source": secondary_source}
    if primary["status"] == "ambiguous" or secondary["status"] == "ambiguous":
        matches = [*primary.get("matches", []), *secondary.get("matches", [])]
        authorities = sorted({match["authority"] for match in matches})
        return {"status": "ambiguous", "authorities": authorities, "matches": matches[:8]}
    return {"status": "not_found", "matches": []}


def write_typescript(assignments: dict[str, str]) -> None:
    lines = ["export const scientificNameAuthorities: Record<string, string> = {"]
    for species_id in sorted(assignments):
        lines.append(
            f"  {json.dumps(species_id)}: {json.dumps(assignments[species_id], ensure_ascii=False)},"
        )
    lines.append("};")
    lines.append("")
    OUTPUT_PATH.write_text("\n".join(lines), encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--transcript",
        type=Path,
        default=DEFAULT_TRANSCRIPT_PATH if DEFAULT_TRANSCRIPT_PATH.exists() else None,
        help="Transcripción Markdown OCR de la segunda edición.",
    )
    args = parser.parse_args()

    species = load_second_edition()
    transcript_page_texts = (
        extract_transcript_page_texts(args.transcript) if args.transcript else None
    )
    second_edition_page_texts = extract_second_edition_page_texts(SECOND_EDITION_PAGES_DIR)
    assignments: dict[str, str] = {}
    review: dict[str, Any] = {}

    for species_id, item in species.items():
        scientific_name = item.get("nombreCientifico", "")
        if not scientific_name or scientific_name.startswith(("Grupo ", "Clase ", "Subclase ")):
            continue
        if species_id in VERIFIED_AUTHORITIES:
            authority = VERIFIED_AUTHORITIES[species_id]
            result = {
                "status": "assigned",
                "authority": authority,
                "matches": [
                    {
                        "authority": authority,
                        "manualPage": VERIFIED_AUTHORITY_PAGES[species_id],
                        "source": "1978 second-edition page image",
                    }
                ],
                "source": "verified-manual-page",
            }
            assignments[species_id] = result["authority"]
            review[species_id] = {"scientificName": scientific_name, **result}
            continue
        result = {
            **find_authority(scientific_name, second_edition_page_texts),
            "source": "second-edition-pages",
        }
        if transcript_page_texts:
            transcript_result = find_authority(scientific_name, transcript_page_texts)
            result = choose_result(result, transcript_result, "transcript")
        if result["status"] == "assigned":
            assignments[species_id] = result["authority"]
        if result["status"] != "not_found":
            review[species_id] = {
                "scientificName": scientific_name,
                **result,
            }

    write_typescript(assignments)
    REVIEW_PATH.write_text(json.dumps(review, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Species scanned: {len(species)}")
    print(f"Authorities assigned: {len(assignments)}")
    print(f"Review entries: {len(review)}")
    print(f"Transcript: {args.transcript or 'not used'}")
    print(f"TypeScript file: {OUTPUT_PATH}")
    print(f"Review file: {REVIEW_PATH}")


if __name__ == "__main__":
    main()
