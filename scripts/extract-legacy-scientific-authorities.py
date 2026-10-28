from __future__ import annotations

import importlib.util
import json
import re
from collections import Counter
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parents[1]
FIRST_EDITION_TEXT = ROOT / "manual-text" / "manual-completo.txt"
SECOND_EDITION_AUDIT = ROOT / "src" / "data" / "scientificNameAuthorities.audit.json"
OUTPUT_PATH = ROOT / "src" / "data" / "legacyScientificNameAuthorities.ts"
REVIEW_PATH = ROOT / "src" / "data" / "legacyScientificNameAuthorities.review.json"

NON_SPECIES_PLACEHOLDER_IDS = {
    "oryzeae",
    "hordeae",
    "chlorideae",
    "aveneae",
    "agrostideae",
    "phalarideae",
    "paspalum",
    "paniceae",
    "andropogoneae",
    "pappophorum",
    "phragmites",
    "distichlis",
    "briza",
    "puccinellia",
    "scleropoa",
    "festuca",
    "cyperus",
    "carex",
    "cyperaceae",
}
VERIFIED_FIRST_EDITION_AUTHORITIES = {
    # Abbreviated initials also match unrelated genera on other manual pages.
    "cleome_spinosa": "L.",  # p. 221
    "amaranthus_gracilis": "Desf.",  # p. 190
    "hypericum_brasiliense": "Choisy",  # p. 313
    "aster_montevidensis": "(Spreng.) Griseb.",  # p. 479
    # Entries recovered from headings, figures, and nomenclatural notes.
    "adiantum_cuneatum": "Langsd. et Fisch.",
    "ficus_monckii_sanmartinianus": "L. R. Parodi",
    "oldenlandia_thesiifolia": "(St. Hil.) K. Schum.",
    "humulus_lupulus": "L.",
    "salicornia_ambigua": "Mich.",
    "clematis_hilarii": "Spreng.",
    "lupinus_multiflorus": "Desr.",
    "viola_japonica": "Langsd. ex DC.",
    "abutilon_molle": "(Ort.) Sweet",
    "anoda_cristata": "(L.) Schlecht.",
    "pfaffia_stenophylla": "(Spreng.) Stuchl.",
    "pfaffia_lanata": "(Poir.) Gibert",
    "boussingaultia_gracilis_pseudobaselloides": "Hauman",
    "passiflora_caerulea": "L.",
    "roripa_nasturtium_aquaticum": "(L.) Hayek",
    "oxalis_mallobolba": "Cav.",
    "oxalis_martiana": "Zucc.",
    "oxalis_commersonii": "Pers.",
    "bowlesia_tenera": "Spreng.",
    "jussiaea_uruguayensis": "Cambess.",
    "jussiaea_repens_montevidensis": "(Spreng.) Munz",
    "jussiaea_elegans_intermedia": "Hassl.",
    "veronica_serpyllifolia": "L.",
    "stemodia_humilis": "(Soland.) Dawson",
    "hygrophila_atricheta": "Bridarolli",
    "verbena_brasiliensis": "Vell.",
    "boerhavia_paniculata_leiocarpa": "Heimerl",
    "plantago_macrostachys_var_platensis": "(Pilg.) Pilg.",
    "cuscuta_indecora_longisepala": "Yuncker",
    "convolvulus_laciniatus_hirsutus": "Desr.",
    "cestrum_sellowianum": "Sendt.",
    "vernonia_rubricaulis_var_australis": "Hieron.",
    "gymnocoronis_spilanthoides_var_subcordata": "(DC.) Bak.",
    "conyza_sordescens": "Cabr.",
    "baccharis_sessiliflora_var_stuckertii": "(Heer.) Cabr.",
    "spilanthes_stolonifera_var_pusilla": "(Hook. et Arn.) Bak.",
    "senecio_pinnatus_var_simplicifolius": "Cabr.",
    "senecio_grisebachii_var_anomalus": "Cabr.",
    "senecio_grisebachii_var_schyzotus": "Cabr.",
    "senecio_grisebachii_var_leptotus": "Cabr.",
    "centaurea_dubia_subsp_vochinensis": "(Bernh. ex Rchb.) Hayek ex Hegi",
    "panicum_gouini": "Fourn.",
    "eragrostis_neesii": "Trin.",
    "bromus_japonicus": "Thunb.",
    "festuca_dertonensis": "(All.) Asch. et Graeb.",
    "avena_byzantina": "C. Koch",
    "piptochaetium_stipoides": "(Trin. et Rupr.) Hackel",
    "piptochaetium_stipoides_verruculosum": "(Mez) Parodi",
    "agrostis_verticillata": "Vill.",
    "chloris_retusa": "Lag.",
    "chloris_ciliata": "Sw.",
    "willkommia_texana_stolonifera": "Parodi",
    "cyperus_megapotamicus": "(Boeck.) Kükenth. ex Barros",
    "cyperus_luzulae": "(Boeck.) Barros",
    "cyperus_incomptus": "Kunth",
    "heleocharis_radicans": "(Poir.) Kunth",
    "herreria_bonplandii": "Lecomte",
    "juncus_microcephalus": "(H. B. K.) Kunth",
    "echinodorus_grandiflorus": "(Cham. et Schlecht.) Micheli",
    "echinodorus_aschersonianus": "Graebn.",
    "habranthus_robustus": "Herb. ex Sweet",
    "rhodophiala_bifida": "(Herb.) Cabr.",
    # New combinations authored by Cabrera in the first edition.
    "roripa_pamparum": "(Speg.) Cabr.",
    "roripa_hilariana": "(Walp.) Cabr.",
    "glandularia_tenera": "(Spreng.) Cabr.",
    "conyza_bonariensis_var_angustifolia": "(Cabr.) Cabr.",
    "conyza_bonariensis_var_microcephala": "(Cabr.) Cabr.",
    "trichocline_sinuata": "(Don) Cabr.",
}
CORRECTED_FIRST_EDITION_AUTHORITIES = {
    # Clear OCR substitutions, checked against the citation printed in the manual.
    "dryopteris_submarginalis": "(Lang. et Fisch.) C. Christ.",
    "dryopteris_riograndensis": "(Lindm.) C. Christ.",
    "asplenium_argentinum": "Hieron.",
    "capsella_gracilis": "Grenier",
    "vaccaria_segetalis": "(Neck.) Garcke",
    "halimium_brasiliense": "(Lam.) Gross.",
    "rhipsalis_leucorhaphis": "Schumann",
    "myriophyllum_brasiliense": "Camb.",
    "eupatorium_hirsutum": "Hook. et Arn.",
    "eupatorium_lanigerum": "Hook. et Arn.",
    "baccharis_melastomaefolia": "Hook. et Arn.",
    "chrysanthemum_vulgare": "(L.) Bernh.",
    "hypochoeris_tweediei": "(Hook. et Arn.) Cabr.",
    "leontodon_nudicaulis": "(L.) Banks ex Lowe",
    "axonopus_compressus": "(Sw.) Beauv.",
    "echinodorus_palaefolius": "(Nees et Mart.) Macbr.",
    "carduus_nutans_var_macrocephalus": "(Desf.) Fiori et Beguin.",
    "potamogeton_striatus": "Ruiz et Pav.",
    "heleocharis_obtusa": "(Willd.) Schult.",
    "heleocharis_bonariensis": "Nees",
    "habranthus_andersonii": "Herb.",
}
SUSPICIOUS_AUTHORITY_WORDS = re.compile(
    r"\b(?:Amer|Anal|Deutsch|Fl|Journ|Mem|Mus|Notizbl|Pl|Prodr|Soco|Spec|Syst|Trait)\.?(?:\s|$)",
    re.IGNORECASE,
)
LEGACY_CITATION_START = re.compile(
    r"\s+(?:Act|Agrost|Anal|Ann|Bot|Bull|Comp|Darwiniana|Encycl|Enum|Fl|"
    r"Hedwigia|Icon|Ind|Journ|Lilloa|Linnaea|Mem|Monatsschr|Notizbl|Nov|"
    r"Prodr|Rev|Sp|Spec|Syst|Trans)\.?\s",
    re.IGNORECASE,
)


def load_extractor():
    path = ROOT / "scripts" / "extract-scientific-authorities.py"
    spec = importlib.util.spec_from_file_location("extract_scientific_authorities", path)
    if spec is None or spec.loader is None:
        raise RuntimeError("No se pudo cargar extract-scientific-authorities.py")
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


def split_embedded_authority(value: str) -> tuple[str, str | None]:
    match = re.match(
        r"^(?P<name>[A-Z][A-Za-z-]+\s+(?:[a-z][a-z-]+|sp\.)(?:\s+"
        r"(?:var\.|subsp\.|ssp\.|f\.)\s+[a-z][a-z-]+)?)"
        r"(?:\s+(?P<authority>.+))?$",
        value,
    )
    if not match:
        return value, None
    authority = match.group("authority")
    return match.group("name"), authority.strip() if authority else None


def load_legacy_species() -> dict[str, dict[str, str | None]]:
    manual_text = (ROOT / "src" / "data" / "manualKey.ts").read_text(encoding="utf-8")
    monocot_text = (ROOT / "src" / "data" / "monocotyledoneae.ts").read_text(
        encoding="utf-8"
    )
    species: dict[str, dict[str, str | None]] = {}
    manual_pattern = re.compile(
        r'^\s*[a-zA-Z0-9_]+:\s*species\(\s*"([^"]+)",\s*"([^"]+)"',
        re.MULTILINE,
    )
    monocot_pattern = re.compile(
        r'^\s*[a-zA-Z0-9_]+:\s*\{\s*id:\s*"([^"]+)",'
        r'\s*nombreCientifico:\s*"([^"]+)"',
        re.MULTILINE,
    )
    for pattern, text in ((manual_pattern, manual_text), (monocot_pattern, monocot_text)):
        for match in pattern.finditer(text):
            species_id, scientific_name = match.groups()
            if species_id in NON_SPECIES_PLACEHOLDER_IDS:
                continue
            clean_name, embedded_authority = split_embedded_authority(scientific_name)
            item = {
                "scientificName": clean_name,
                "originalScientificName": scientific_name,
                "embeddedAuthority": embedded_authority,
            }
            if species_id in species and species[species_id] != item:
                raise ValueError(f"ID histórico duplicado: {species_id}")
            species[species_id] = item
    return species


def load_first_edition_pages(extractor) -> dict[int, str]:
    text = FIRST_EDITION_TEXT.read_text(encoding="utf-8")
    markers = list(
        re.finditer(r"^PDF_PAGE=\d+ MANUAL_PAGE=(\d+|front-matter)\s*$", text, re.MULTILINE)
    )
    pages: dict[int, str] = {}
    for index, marker in enumerate(markers):
        if marker.group(1) == "front-matter":
            continue
        page = int(marker.group(1))
        if page > 547:
            continue
        start = marker.end()
        end = markers[index + 1].start() if index + 1 < len(markers) else len(text)
        pages[page] = extractor.clean_pdf_text(text[start:end])
    return pages


def load_second_edition_by_name(extractor) -> dict[str, set[str]]:
    audit = json.loads(SECOND_EDITION_AUDIT.read_text(encoding="utf-8"))
    by_name: dict[str, set[str]] = {}
    for item in audit["review"]:
        authority = item.get("authority")
        if not authority or item.get("issues"):
            continue
        key = extractor.normalize(item["scientificName"])
        by_name.setdefault(key, set()).add(authority)
    return by_name


def find_legacy_heading_authority(
    extractor, scientific_name: str, page_texts: dict[int, str]
) -> dict[str, Any]:
    matches: list[dict[str, Any]] = []
    for book_page, text in page_texts.items():
        searchable = " " + text
        for pattern in extractor.entry_patterns(scientific_name):
            for match in extractor.overlapping_matches(pattern, searchable):
                tail = extractor.clean_pdf_text(match.group("tail"))
                citation = LEGACY_CITATION_START.search(tail)
                if not citation:
                    continue
                candidate = tail[: citation.start()].strip(" ,:;-\u2014")
                candidate = re.sub(r"\s+", " ", candidate)
                if authority_issues(candidate):
                    continue
                matches.append(
                    {
                        "authority": candidate,
                        "bookPage": book_page,
                        "raw": match.group(0).strip(),
                        "genusContext": True,
                    }
                )
    unique = sorted({match["authority"] for match in matches})
    if len(unique) == 1:
        return {"status": "assigned", "authority": unique[0], "matches": matches[:5]}
    if len(unique) > 1:
        return {"status": "ambiguous", "authorities": unique, "matches": matches[:8]}
    return {"status": "not_found", "matches": []}


def clean_first_edition_authority(species_id: str, authority: str | None) -> str | None:
    if not authority:
        return None
    if species_id in CORRECTED_FIRST_EDITION_AUTHORITIES:
        return CORRECTED_FIRST_EDITION_AUTHORITIES[species_id]
    authority = authority.split(",", 1)[0].strip()
    authority = re.sub(r"\s+", " ", authority)
    authority = re.sub(r"\s+\.$", ".", authority)
    return authority or None


def authority_issues(authority: str | None) -> list[str]:
    if not authority:
        return ["missing_authority"]
    issues: list[str] = []
    if authority.count("(") != authority.count(")"):
        issues.append("unbalanced_parentheses")
    if re.search(r"[0-9~!/?;:\\\\]", authority):
        issues.append("unexpected_character")
    if len(authority) > 80 or len(authority.split()) > 8:
        issues.append("unexpected_length")
    if re.search(r"\.{2,}", authority):
        issues.append("repeated_period")
    if SUSPICIOUS_AUTHORITY_WORDS.search(authority):
        issues.append("possible_publication_text")
    if authority in {"A.", "Anal. Mus. Nac. Bs. Aires"}:
        issues.append("not_an_authority")
    return issues


def write_typescript(
    assignments: dict[str, str], scientific_name_overrides: dict[str, str]
) -> None:
    lines = ["export const legacyScientificNameAuthorities: Record<string, string> = {"]
    for species_id in sorted(assignments):
        lines.append(
            f"  {json.dumps(species_id)}: "
            f"{json.dumps(assignments[species_id], ensure_ascii=False)},"
        )
    lines.extend(["};", "", "export const legacyScientificNames: Record<string, string> = {"])
    for species_id in sorted(scientific_name_overrides):
        lines.append(
            f"  {json.dumps(species_id)}: "
            f"{json.dumps(scientific_name_overrides[species_id], ensure_ascii=False)},"
        )
    lines.extend(["};", ""])
    OUTPUT_PATH.write_text("\n".join(lines), encoding="utf-8")


def main() -> None:
    extractor = load_extractor()
    species = load_legacy_species()
    page_texts = load_first_edition_pages(extractor)
    second_by_name = load_second_edition_by_name(extractor)
    assignments: dict[str, str] = {}
    scientific_name_overrides: dict[str, str] = {}
    review: list[dict[str, Any]] = []

    for species_id, species_item in species.items():
        scientific_name = str(species_item["scientificName"])
        original_scientific_name = str(species_item["originalScientificName"])
        embedded_authority = species_item["embeddedAuthority"]
        if original_scientific_name != scientific_name:
            scientific_name_overrides[species_id] = scientific_name
        if scientific_name.startswith("Tribu ") or scientific_name.endswith(" sp."):
            review.append(
                {
                    "speciesId": species_id,
                    "scientificName": scientific_name,
                    "originalScientificName": original_scientific_name,
                    "authority": None,
                    "status": "not_applicable",
                    "issues": [],
                    "firstEditionMatches": [],
                    "embeddedAuthority": embedded_authority,
                    "secondEditionAuthorities": [],
                }
            )
            continue
        first_result = extractor.find_authority(scientific_name, page_texts)
        if (
            first_result["status"] == "not_found"
            and species_id not in VERIFIED_FIRST_EDITION_AUTHORITIES
        ):
            first_result = find_legacy_heading_authority(
                extractor, scientific_name, page_texts
            )
        second_authorities = sorted(
            second_by_name.get(extractor.normalize(scientific_name), set())
        )
        first_authority = clean_first_edition_authority(
            species_id, first_result.get("authority")
        )
        embedded_authority = clean_first_edition_authority(
            species_id, str(embedded_authority) if embedded_authority else None
        )
        status = "needs_review"
        authority = None
        issues: list[str] = []

        if species_id in VERIFIED_FIRST_EDITION_AUTHORITIES:
            authority = VERIFIED_FIRST_EDITION_AUTHORITIES[species_id]
            status = "confirmed_manually_in_first_edition"
        elif len(second_authorities) == 1:
            authority = second_authorities[0]
            if first_result["status"] == "assigned" and (
                extractor.normalize(first_authority)
                == extractor.normalize(second_authorities[0])
            ):
                status = "confirmed_in_both_editions"
            else:
                status = "confirmed_by_second_edition_exact_name"
                if first_result["status"] == "assigned":
                    issues.append("first_edition_ocr_or_nomenclature_difference")
        elif embedded_authority and not authority_issues(embedded_authority):
            authority = embedded_authority
            status = "confirmed_in_legacy_scientific_name"
        elif first_result["status"] == "assigned" and not authority_issues(first_authority):
            authority = first_authority
            status = (
                "corrected_first_edition_ocr"
                if species_id in CORRECTED_FIRST_EDITION_AUTHORITIES
                else "confirmed_in_first_edition"
            )
        else:
            issues.extend(authority_issues(embedded_authority or first_authority))
            if first_result["status"] != "assigned":
                issues.append(first_result["status"])

        if authority:
            assignments[species_id] = authority
        review.append(
            {
                "speciesId": species_id,
                "scientificName": scientific_name,
                "originalScientificName": original_scientific_name,
                "authority": authority,
                "status": status,
                "issues": issues,
                "firstEditionMatches": first_result.get("matches", []),
                "embeddedAuthority": embedded_authority,
                "secondEditionAuthorities": second_authorities,
            }
        )

    write_typescript(assignments, scientific_name_overrides)
    summary = dict(Counter(item["status"] for item in review))
    REVIEW_PATH.write_text(
        json.dumps(
            {
                "sources": {
                    "primary": FIRST_EDITION_TEXT.name,
                    "crossCheck": SECOND_EDITION_AUDIT.name,
                },
                "summary": summary,
                "review": review,
            },
            ensure_ascii=False,
            indent=2,
        )
        + "\n",
        encoding="utf-8",
    )
    print(f"Legacy species reviewed: {len(review)}")
    print(f"Authorities assigned: {len(assignments)}")
    for status, count in sorted(summary.items()):
        print(f"{status}: {count}")
    print(f"Assignments: {OUTPUT_PATH}")
    print(f"Review: {REVIEW_PATH}")


if __name__ == "__main__":
    main()
