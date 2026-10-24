from __future__ import annotations

import importlib.util
import json
import math
import re
import unicodedata
from collections import Counter
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parents[1]
TRANSCRIPT_PATH = Path.home() / "Downloads" / "Manual_Flora_Buenos_Aires_Transcrito.md"
OCR_PAGES = ROOT / "manual-text" / "second-edition" / "pages"
ROUTES_AUDITOR = ROOT / "scripts" / "audit-key-routes.py"
OUTPUT_PATH = ROOT / "src" / "data" / "manualPages.audit.json"
OPTION_KEYS = ("opcionA", "opcionA_prima")
STOPWORDS = {
    "ademas", "algunas", "algunos", "ambas", "ambos", "como", "con", "cual",
    "cuando", "desde", "donde", "entre", "esta", "estas", "este", "estos", "hasta",
    "las", "los", "mas", "menos", "para", "pero", "por", "que", "sin", "sobre",
    "son", "sus", "tiene", "tienen", "toda", "todas", "todo", "todos", "una", "unas",
    "uno", "unos", "del", "muy", "hay", "no", "si",
}

# These nodes were checked against the printed page image. Keeping the result
# here prevents OCR page-number errors from resurfacing as false positives.
MANUALLY_CONFIRMED_PAGES = {
    "ed2_root": 8,
    "ed2_pteridophyta_a": 8,
    "ed2_pteridophyta_b": 8,
    "ed2_pteridophyta_c": 8,
    "ed2_pteridophyta_d": 8,
    "ed2_pteridophyta_e": 8,
    "ed2_pteridophyta_f": 8,
    "ed2_hordeum_immature_spike": 93,
    "ed2_hordeum_unciliated": 93,
    "ed2_hordeum_central_glumes": 93,
    "ed2_hordeum_lateral_glumes": 93,
    "ed2_hordeum_spike_shape": 93,
    "ed2_hordeum_awn_length": 93,
    "ed2_hordeum_lemma_surface": 93,
    "ed2_arundineae_uniform": 76,
    "ed2_gramineae_group_8_florets": 70,
    "ed2_diplachne": 126,
    "ed2_diplachne_anthers": 126,
    "ed2_diplachne_lemma_apex": 126,
    "ed2_setaria": 127,
    "ed2_setaria_bristle_hairs": 127,
    "ed2_setaria_annual_spikelet": 127,
    "ed2_family_cyperaceae": 152,
    "ed2_cyperus_solitary_fertile_flowers": 156,
    "ed2_ammi_leaves": 468,
    "ed2_apium_segment_shape": 470,
    "ed2_verbena_leaf_size": 523,
    "ed2_labiatae_capuchon_leaves": 528,
    "ed2_compositae_conyza_baccharidastrum": 616,
    "ed2_compositae_pluchea_tessaria": 616,
    "ed2_compositae_hypochaeris_urospermum": 702,
    "ed2_compositae_sonchus_hieracium": 708,
    "ed2_compositae_group_g_no_pappus_other_pending": 613,
}


def normalize(value: str) -> str:
    value = unicodedata.normalize("NFD", value)
    value = "".join(char for char in value if unicodedata.category(char) != "Mn")
    return re.sub(r"[^a-z0-9]+", " ", value.lower()).strip()


def tokens(value: str) -> set[str]:
    return {
        token
        for token in normalize(value).split()
        if len(token) >= 4 and token not in STOPWORDS
    }


def load_tree() -> dict[str, Any]:
    spec = importlib.util.spec_from_file_location("audit_key_routes", ROUTES_AUDITOR)
    if spec is None or spec.loader is None:
        raise RuntimeError("No se pudo cargar audit-key-routes.py")
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    _species, tree, _root = module.load_second_edition()
    return tree


def transcript_anchors(text: str) -> dict[int, int]:
    marker = re.compile(r"<!--\s*P[ÁA]GINA\s+(\d+)\s*-->", re.IGNORECASE)
    matches = list(marker.finditer(text))
    anchors: dict[int, int] = {}
    for index, match in enumerate(matches):
        end = matches[index + 1].start() if index + 1 < len(matches) else len(text)
        opening = [line.strip() for line in text[match.end() : end].splitlines() if line.strip()][:8]
        header_numbers = [
            int(value)
            for line in opening
            if "flora de buenos aires" in normalize(line)
            for value in re.findall(r"\b\d{1,3}\b", line)
            if 8 <= int(value) <= 725
        ]
        standalone = [int(line) for line in opening if line.isdigit() and 8 <= int(line) <= 725]
        printed_page = max(header_numbers, default=None)
        if printed_page is None and standalone:
            printed_page = standalone[0]
        if printed_page is not None:
            anchors[int(match.group(1))] = printed_page
    return anchors


def scientific_index_pages(text: str) -> dict[str, int]:
    return {
        match.group(1): int(match.group(2))
        for match in re.finditer(
            r"(?m)^([A-ZÁÉÍÓÚÜÑ][A-Za-zÁÉÍÓÚÜÑáéíóúüñ-]+),\s*(\d{1,3})\s*$",
            text,
        )
    }


def infer_spread_pages(anchors: dict[int, int], spread_numbers: list[int]) -> dict[int, int]:
    # Left pages are even and right pages are odd. Normalize every observed
    # header to the right-hand page of its spread.
    normalized = {
        spread: printed_page if printed_page % 2 else printed_page + 1
        for spread, printed_page in anchors.items()
    }
    ordered = sorted(normalized)
    lengths = [1] * len(ordered)
    previous = [-1] * len(ordered)
    for index in range(len(ordered)):
        for candidate in range(index):
            if (
                normalized[ordered[candidate]] < normalized[ordered[index]]
                and lengths[candidate] + 1 > lengths[index]
            ):
                lengths[index] = lengths[candidate] + 1
                previous[index] = candidate
    valid_indexes: set[int] = set()
    if ordered:
        cursor = max(range(len(ordered)), key=lengths.__getitem__)
        while cursor >= 0:
            valid_indexes.add(cursor)
            cursor = previous[cursor]
    result = {
        ordered[index]: normalized[ordered[index]]
        for index in sorted(valid_indexes)
    }
    anchor_numbers = sorted(result)
    for spread in spread_numbers:
        if spread in result:
            continue
        previous = max((number for number in anchor_numbers if number < spread), default=None)
        following = min((number for number in anchor_numbers if number > spread), default=None)
        previous_guess = result[previous] + 2 * (spread - previous) if previous else None
        following_guess = result[following] - 2 * (following - spread) if following else None
        if previous_guess is not None and previous_guess == following_guess:
            result[spread] = previous_guess
    return result


def load_printed_pages(anchors: dict[int, int]) -> dict[int, str]:
    spread_numbers = sorted(
        {
            int(match.group(1))
            for path in OCR_PAGES.glob("spread-*-*.txt")
            if (match := re.match(r"spread-(\d+)-(?:left|right)\.txt", path.name))
        }
    )
    spread_pages = infer_spread_pages(anchors, spread_numbers)
    pages: dict[int, str] = {}
    for spread, right_page in spread_pages.items():
        for side, printed_page in (("left", right_page - 1), ("right", right_page)):
            path = OCR_PAGES / f"spread-{spread:03d}-{side}.txt"
            if path.exists():
                pages[printed_page] = path.read_text(encoding="utf-8")
    return pages


def node_evidence(node: dict[str, Any]) -> set[str]:
    parts = [str(node.get("milestone", "")), str(node.get("descripcion", ""))]
    for option_key in OPTION_KEYS:
        parts.append(str((node.get(option_key) or {}).get("label", "")))
    return tokens(" ".join(parts))


def main() -> None:
    if not TRANSCRIPT_PATH.exists():
        raise FileNotFoundError(f"No se encontró la transcripción: {TRANSCRIPT_PATH}")

    tree = load_tree()
    transcript = TRANSCRIPT_PATH.read_text(encoding="utf-8")
    anchors = transcript_anchors(transcript)
    index_pages = scientific_index_pages(transcript)
    pages = load_printed_pages(anchors)
    page_tokens = {page: tokens(text) for page, text in pages.items()}
    document_frequency = Counter(
        token for token_set in page_tokens.values() for token in token_set
    )
    page_count = max(len(page_tokens), 1)

    def score(evidence: set[str], page: int) -> float:
        source = page_tokens.get(page, set())
        if not evidence or not source:
            return 0.0
        weights = {
            token: 1.0 + math.log((page_count + 1) / (document_frequency[token] + 1))
            for token in evidence
        }
        matched = sum(weight for token, weight in weights.items() if token in source)
        return matched / sum(weights.values())

    review: list[dict[str, Any]] = []
    for node_id, node in tree.items():
        current_page = node.get("manualPage")
        evidence = node_evidence(node)
        milestone = str(node.get("milestone", "")).split(":", 1)[0].strip()
        index_page = index_pages.get(milestone)

        def node_score(page: int) -> float:
            base = score(evidence, page)
            if (
                milestone
                and " " not in milestone
                and len(milestone) >= 5
                and re.search(rf"\b{re.escape(milestone.upper())}\b", pages.get(page, ""))
            ):
                return base + 0.25
            return base

        candidate_pages = [
            page
            for page in page_tokens
            if not isinstance(current_page, int) or abs(page - current_page) <= 30
        ]
        ranked = sorted(
            ((node_score(page), page) for page in candidate_pages),
            reverse=True,
        )
        best_score, best_page = ranked[0] if ranked else (0.0, None)
        current_score = (
            max(node_score(page) for page in (current_page - 1, current_page, current_page + 1))
            if isinstance(current_page, int)
            else 0.0
        )
        status = "confirmed"
        if isinstance(current_page, int) and not any(
            page in page_tokens for page in (current_page - 1, current_page, current_page + 1)
        ):
            status = "page_source_missing"
        has_strong_text_candidate = (
            isinstance(current_page, int)
            and current_page >= 20
            and best_page is not None
            and 1 < abs(best_page - current_page) <= 20
            and len(evidence) >= 6
            and best_score >= 0.65
            and best_score - current_score >= 0.30
        )
        if has_strong_text_candidate:
            status = "needs_manual_review"
            if (
                index_page is not None
                and abs(best_page - index_page) < abs(current_page - index_page)
                and abs(best_page - index_page) <= 5
            ):
                status = "correction_candidate"
        manually_confirmed_page = MANUALLY_CONFIRMED_PAGES.get(node_id)
        if manually_confirmed_page is not None:
            status = (
                "confirmed_manually"
                if current_page == manually_confirmed_page
                else "manual_confirmation_mismatch"
            )
        review.append(
            {
                "nodeId": node_id,
                "milestone": node.get("milestone"),
                "manualPage": current_page,
                "currentScore": round(current_score, 3),
                "bestPage": best_page,
                "bestScore": round(best_score, 3),
                "indexPage": index_page,
                "manuallyConfirmedPage": manually_confirmed_page,
                "status": status,
            }
        )

    summary = dict(Counter(item["status"] for item in review))
    OUTPUT_PATH.write_text(
        json.dumps(
            {
                "source": TRANSCRIPT_PATH.name,
                "mappedPrintedPages": len(pages),
                "summary": summary,
                "review": review,
            },
            ensure_ascii=False,
            indent=2,
        )
        + "\n",
        encoding="utf-8",
    )
    print(f"Nodes reviewed: {len(review)}")
    print(f"Printed pages mapped: {len(pages)}")
    for status, count in sorted(summary.items()):
        print(f"{status}: {count}")
    print(f"Report: {OUTPUT_PATH}")


if __name__ == "__main__":
    main()
