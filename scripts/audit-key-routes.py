from __future__ import annotations

import argparse
import json
import re
import shutil
import subprocess
import tempfile
import unicodedata
from collections import Counter, defaultdict
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_PATH = ROOT / "src" / "data" / "keyRoutes.audit.json"
DEFAULT_TRANSCRIPT_PATH = Path.home() / "Downloads" / "Manual_Flora_Buenos_Aires_Transcrito.md"
FALLBACK_TRANSCRIPT_PATH = ROOT / "manual-text" / "second-edition" / "manual-completo.txt"
ROOT_NODE_ID = "ed2_root"
OPTION_KEYS = ("opcionA", "opcionA_prima")
MANUALLY_VERIFIED_NODES = {
    # Compared against the second-edition transcript. These are phrasing/OCR
    # mismatches, not unsupported key choices.
    "ed2_dicot_group_c_h",
    "ed2_dicot_group_c_a_lower",
    "ed2_echinodorus_robust",
    "ed2_paspalum_tall_habit",
    "ed2_family_cyperaceae",
    "ed2_cyperaceae_glume_arrangement",
    "ed2_carex_unisexual_indument",
    "ed2_cyperus_many_flower_count",
    "ed2_scirpus_many_bracts",
    "ed2_family_aizoaceae",
    "ed2_caryophyllaceae_styles",
    "ed2_caryophyllaceae_free_styles",
    "ed2_draba",
    "ed2_malcomia",
    "ed2_erysimum",
    "ed2_halimolobus",
    "ed2_cakile",
    "ed2_eruca",
    "ed2_rorippa_habit",
    "ed2_sinapis",
    "ed2_hirschfeldia",
    "ed2_family_resedaceae",
    "ed2_phleum",
    "ed2_oryzopsis_pending",
    "ed2_pseudechinolaena_pending",
    "ed2_family_thymelaeaceae",
    "ed2_family_melastomataceae",
    "ed2_rosaceae_tubular_sepals",
    "ed2_euphorbiaceae_many_stamens",
    "ed2_primulaceae_capsule_dehiscence",
    "ed2_lathyrus_glabrous_flower_size",
    "ed2_convolvulus_sepal_length",
    "ed2_solanum_anther_size",
    "ed2_nicotiana_corolla_length",
    "ed2_galium_sex",
    "ed2_noticastrum_short_ligules",
    "ed2_conyza_perennial_root",
    "ed2_baccharis_wing_count",
    "ed2_micropsis",
    "ed2_senecio_glandular",
    "ed2_carex_long_bracts",
    "ed2_carex_smooth_utricles",
}
MANUALLY_VERIFIED_GENUS_PAGE_NODES = {
    # Higher taxa are resolved by the artificial key, not by a genus entry.
    "ed2_spermatophyta_a",
    "ed2_angiospermae_a",
    "ed2_monocotyledoneae_a",
    "ed2_dicotyledoneae_a",
    "ed2_pteridophyta_a",
    # Directly checked against the page transcription; the OCR index is wrong.
    "ed2_erysimum",
    "ed2_hemarthria",
}
MANUALLY_VERIFIED_GENUS_PAGE_PREFIXES = (
    # The OCR scientific index assigns Cyperus to page 184 instead of 156.
    "ed2_cyperus",
    # The Solanum key starts on 540 and legitimately continues through 544.
    "ed2_solanum_",
)
MANUALLY_VERIFIED_MULTI_TERMINAL_SPECIES = {
    # The printed key intentionally reaches these polymorphic or repeated taxa
    # from more than one terminal couplet.
    "ed2_cyperus_reflexus",
    "ed2_dactylis_glomerata",
    "ed2_eragrostis_neesii",
    "ed2_festuca_arundinacea",
    "ed2_koeleria_permollis",
    "ed2_senecio_grisebachii",
    "ed2_senecio_pinnatus",
    "ed2_solanum_bonariense",
}
MANUALLY_VERIFIED_TRANSCRIPT_PAGES = {
    # Visually checked against the second-edition PDF because the Markdown
    # transcript does not expose a reliable printed-page anchor for them.
    8, 96, 97, 98, 119, 176, 177, 251, 263, 295, 297, 304, 305, 357,
    403, 404, 440, 441, 449, 450, 451, 453, 490, 491, 511, 523, 536,
    537, 555, 567, 568, 569, 570, 593, 633, 634, 635, 643, 644, 646,
    647, 655, 656, 658, 659, 660, 661, 679, 680, 695, 696, 710,
}
STOPWORDS = {
    "ademas", "alguna", "algunas", "algunos", "ambas", "ambos", "ante", "aquel",
    "aquella", "aqui", "cada", "como", "con", "contra", "cual", "cuando", "cuya",
    "cuyo", "del", "desde", "donde", "dos", "el", "ella", "ellas", "ellos", "entre",
    "esta", "estas", "este", "estos", "hasta", "hay", "las", "los", "mas", "menos",
    "muy", "no", "para", "pero", "por", "porque", "que", "sin", "sobre", "son",
    "sus", "tiene", "tienen", "toda", "todas", "todo", "todos", "una", "unas", "uno",
    "unos", "y", "o", "si",
}


def normalize(value: str) -> str:
    value = unicodedata.normalize("NFD", value)
    value = "".join(char for char in value if unicodedata.category(char) != "Mn")
    return re.sub(r"[^a-z0-9]+", " ", value.lower()).strip()


def significant_tokens(value: str) -> set[str]:
    return {
        token
        for token in normalize(value).split()
        if len(token) >= 4 and token not in STOPWORDS
    }


def parse_transcript_pages(text: str, requested_pages: set[int]) -> dict[int, str]:
    marker = re.compile(r"<!--\s*P[ÁA]GINA\s+(\d+)\s*-->", re.IGNORECASE)
    matches = list(marker.finditer(text))
    blocks: list[tuple[int, str, set[int]]] = []
    for index, match in enumerate(matches):
        end = matches[index + 1].start() if index + 1 < len(matches) else len(text)
        block_text = text[match.end() : end]
        printed_numbers = {
            int(value)
            for value in re.findall(r"(?m)^\s*(\d{1,3})\s*$", block_text)
            if 8 <= int(value) <= 750
        }
        blocks.append((int(match.group(1)), block_text, printed_numbers))

    pages: dict[int, str] = {}
    for requested_page in requested_pages:
        anchor_indexes = {
            index
            for index, (_scan_page, _block_text, printed_numbers) in enumerate(blocks)
            if any(abs(number - requested_page) <= 2 for number in printed_numbers)
        }
        selected_indexes = {
            nearby
            for index in anchor_indexes
            for nearby in (index - 1, index, index + 1)
            if 0 <= nearby < len(blocks)
        }
        if selected_indexes:
            pages[requested_page] = "\n".join(
                blocks[index][1] for index in sorted(selected_indexes)
            )
    return pages


def token_is_present(token: str, page_tokens: set[str], page_prefixes: set[str]) -> bool:
    if token in page_tokens:
        return True
    if len(token) < 6:
        return False
    return token[:6] in page_prefixes


def parse_genus_index_pages(text: str) -> dict[str, int]:
    start = re.search(r"[ÍI]NDICE DE LOS NOMBRES CIENT[IÍ]FICOS", text, re.IGNORECASE)
    end = re.search(r"[ÍI]NDICE DE NOMBRES VULGARES", text, re.IGNORECASE)
    if not start or not end or end.start() <= start.end():
        return {}

    genus_pages: dict[str, int] = {}
    pattern = re.compile(
        r"(?m)^([A-ZÁÉÍÓÚÜÑ][A-Za-zÁÉÍÓÚÜÑáéíóúüñëïöäæ-]+),\s*(\d{1,3}(?:\s*,\s*\d{1,3})*)\s*$"
    )
    for name, page_list in pattern.findall(text[start.end() : end.start()]):
        if name.isupper():
            continue
        page = max(int(value) for value in re.findall(r"\d{1,3}", page_list))
        normalized_name = normalize(name)
        genus_pages[normalized_name] = max(genus_pages.get(normalized_name, 0), page)
    return genus_pages


def load_second_edition() -> tuple[dict[str, Any], dict[str, Any], str]:
    with tempfile.TemporaryDirectory(prefix=".tmp-key-routes-", dir=ROOT) as tmp:
        tmp_path = Path(tmp)
        subprocess.run(
            [
                "npx.cmd",
                "tsc",
                "-p",
                "tsconfig.json",
                "--noEmit",
                "false",
                "--incremental",
                "false",
                "--outDir",
                str(tmp_path),
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
        relative_module = tmp_path.relative_to(ROOT) / "src" / "data" / "secondEdition.js"
        script = (
            f"const m=require('./{relative_module.as_posix()}');"
            "console.log(JSON.stringify({"
            "species:m.secondEditionSpeciesData,tree:m.secondEditionTree,"
            "root:m.SECOND_EDITION_ROOT_NODE_ID}));"
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
    return payload["species"], payload["tree"], payload["root"]


def is_real_species(item: dict[str, Any]) -> bool:
    name = item.get("nombreCientifico", "")
    return bool(
        " " in name
        and not name.startswith(("Grupo ", "Clase ", "Subclase "))
    )


def option_summary(node_id: str, option_key: str, option: dict[str, Any]) -> dict[str, Any]:
    return {
        "nodeId": node_id,
        "option": option_key,
        "label": option.get("label"),
        "keyStep": option.get("keyStep"),
        "nextNodeId": option.get("nextNodeId"),
        "speciesId": option.get("especieId"),
    }


def audit(
    species: dict[str, Any],
    tree: dict[str, Any],
    root_id: str,
    transcript_pages: dict[int, str],
    genus_index_pages: dict[str, int],
) -> dict[str, Any]:
    real_species = {
        species_id: item
        for species_id, item in species.items()
        if is_real_species(item)
    }
    malformed_nodes: list[dict[str, Any]] = []
    malformed_options: list[dict[str, Any]] = []
    dangling_nodes: list[dict[str, Any]] = []
    dangling_species: list[dict[str, Any]] = []
    duplicate_labels: list[dict[str, Any]] = []
    duplicate_targets: list[dict[str, Any]] = []
    single_action_nodes: list[dict[str, Any]] = []
    low_text_evidence: list[dict[str, Any]] = []
    manually_verified_low_evidence = 0
    manually_verified_genus_pages = 0
    missing_transcript_pages: set[int] = set()
    manually_verified_transcript_pages: set[int] = set()
    genus_page_mismatches: list[dict[str, Any]] = []
    incoming: dict[str, list[dict[str, str]]] = defaultdict(list)
    page_token_cache: dict[int, tuple[set[str], set[str]]] = {}

    for node_key, node in tree.items():
        issues: list[str] = []
        if node.get("id") != node_key:
            issues.append("id_differs_from_object_key")
        if not str(node.get("descripcion", "")).strip():
            issues.append("missing_description")
        page = node.get("manualPage")
        if not isinstance(page, int) or page <= 0:
            issues.append("invalid_manual_page")
        if issues:
            malformed_nodes.append({"nodeId": node_key, "issues": issues})

        milestone = str(node.get("milestone", ""))
        genus_label = milestone.split(":", 1)[0].strip()
        genus_page = genus_index_pages.get(normalize(genus_label))
        if (
            genus_page
            and isinstance(page, int)
            and abs(page - genus_page) > 3
        ):
            is_verified = (
                node_key in MANUALLY_VERIFIED_GENUS_PAGE_NODES
                or node_key.startswith(MANUALLY_VERIFIED_GENUS_PAGE_PREFIXES)
            )
            if is_verified:
                manually_verified_genus_pages += 1
            else:
                genus_page_mismatches.append(
                    {
                        "nodeId": node_key,
                        "milestone": milestone,
                        "manualPage": page,
                        "indexPage": genus_page,
                        "difference": page - genus_page,
                    }
                )

        options = [node.get(option_key) or {} for option_key in OPTION_KEYS]
        for option_key, option in zip(OPTION_KEYS, options):
            option_issues: list[str] = []
            if not str(option.get("label", "")).strip():
                option_issues.append("missing_label")
            if not str(option.get("keyStep", "")).strip():
                option_issues.append("missing_key_step")
            targets = [
                target
                for target in (option.get("nextNodeId"), option.get("especieId"))
                if target
            ]
            if len(targets) != 1:
                option_issues.append("expected_exactly_one_target")
            if option_issues:
                malformed_options.append(
                    {**option_summary(node_key, option_key, option), "issues": option_issues}
                )

            next_node_id = option.get("nextNodeId")
            species_id = option.get("especieId")
            if next_node_id:
                incoming[next_node_id].append({"nodeId": node_key, "option": option_key})
                if next_node_id not in tree:
                    dangling_nodes.append(option_summary(node_key, option_key, option))
            if species_id and species_id not in species:
                dangling_species.append(option_summary(node_key, option_key, option))

            if isinstance(page, int) and page > 0:
                page_text = transcript_pages.get(page)
                if page_text is None:
                    if page in MANUALLY_VERIFIED_TRANSCRIPT_PAGES:
                        manually_verified_transcript_pages.add(page)
                    else:
                        missing_transcript_pages.add(page)
                else:
                    evidence_tokens = significant_tokens(
                        f"{node.get('descripcion', '')} {option.get('label', '')}"
                    )
                    if page not in page_token_cache:
                        page_tokens = significant_tokens(page_text)
                        page_token_cache[page] = (
                            page_tokens,
                            {token[:6] for token in page_tokens if len(token) >= 6},
                        )
                    page_tokens, page_prefixes = page_token_cache[page]
                    matched = sorted(
                        token
                        for token in evidence_tokens
                        if token_is_present(token, page_tokens, page_prefixes)
                    )
                    missing = sorted(evidence_tokens - set(matched))
                    score = len(matched) / len(evidence_tokens) if evidence_tokens else 1.0
                    if len(evidence_tokens) >= 3 and score < 0.34:
                        if node_key in MANUALLY_VERIFIED_NODES:
                            manually_verified_low_evidence += 1
                        else:
                            low_text_evidence.append(
                                {
                                    **option_summary(node_key, option_key, option),
                                    "manualPage": page,
                                    "description": node.get("descripcion"),
                                    "score": round(score, 3),
                                    "matchedTokens": matched,
                                    "missingTokens": missing,
                                }
                            )

        first, second = options
        exact_duplicate = all(
            first.get(field) == second.get(field)
            for field in ("label", "keyStep", "nextNodeId", "especieId")
        )
        if exact_duplicate:
            single_action_nodes.append(
                {
                    "nodeId": node_key,
                    "label": first.get("label"),
                    "target": first.get("nextNodeId") or first.get("especieId"),
                }
            )
        elif normalize(str(first.get("label", ""))) == normalize(str(second.get("label", ""))):
            duplicate_labels.append(
                {
                    "nodeId": node_key,
                    "label": first.get("label"),
                    "targets": [
                        first.get("nextNodeId") or first.get("especieId"),
                        second.get("nextNodeId") or second.get("especieId"),
                    ],
                }
            )
        first_target = first.get("nextNodeId") or first.get("especieId")
        second_target = second.get("nextNodeId") or second.get("especieId")
        if not exact_duplicate and first_target and first_target == second_target:
            duplicate_targets.append(
                {
                    "nodeId": node_key,
                    "target": first_target,
                    "labels": [first.get("label"), second.get("label")],
                }
            )

    reachable_nodes: set[str] = set()
    species_routes: dict[str, list[list[dict[str, Any]]]] = defaultdict(list)
    cycles: list[list[str]] = []
    dead_ends: list[dict[str, Any]] = []

    def walk(node_id: str, route: list[dict[str, Any]], stack: tuple[str, ...]) -> None:
        if node_id in stack:
            cycles.append([*stack[stack.index(node_id) :], node_id])
            return
        node = tree.get(node_id)
        if not node:
            return
        reachable_nodes.add(node_id)
        progressed = False
        traversed_targets: set[tuple[str, str]] = set()
        for option_key in OPTION_KEYS:
            option = node.get(option_key) or {}
            step = {
                "nodeId": node_id,
                "manualPage": node.get("manualPage"),
                "keyStep": option.get("keyStep"),
                "choice": option.get("label"),
            }
            if option.get("nextNodeId"):
                target = ("node", option["nextNodeId"])
                if target in traversed_targets:
                    continue
                traversed_targets.add(target)
                progressed = True
                walk(option["nextNodeId"], [*route, step], (*stack, node_id))
            if option.get("especieId"):
                target = ("species", option["especieId"])
                if target in traversed_targets:
                    continue
                traversed_targets.add(target)
                progressed = True
                species_routes[option["especieId"]].append([*route, step])
        if not progressed:
            dead_ends.append({"nodeId": node_id, "route": route})

    if root_id in tree:
        walk(root_id, [], ())

    missing_species = [
        {
            "speciesId": species_id,
            "scientificName": item["nombreCientifico"],
            "family": item.get("familia"),
        }
        for species_id, item in real_species.items()
        if species_id not in species_routes
    ]
    multiple_routes = []
    convergent_routes = []
    manually_verified_multiple_terminals = []
    unverified_multiple_terminals = []
    for species_id, routes in species_routes.items():
        if species_id in real_species and len(routes) > 1:
            lengths = [len(route) for route in routes]
            terminal_nodes = sorted({route[-1]["nodeId"] for route in routes})
            item = {
                "speciesId": species_id,
                "scientificName": real_species[species_id]["nombreCientifico"],
                "routeCount": len(routes),
                "minimumRouteLength": min(lengths),
                "maximumRouteLength": max(lengths),
                "terminalNodeIds": terminal_nodes,
            }
            multiple_routes.append(item)
            if len(terminal_nodes) == 1:
                convergent_routes.append(item)
            elif species_id in MANUALLY_VERIFIED_MULTI_TERMINAL_SPECIES:
                manually_verified_multiple_terminals.append(item)
            else:
                unverified_multiple_terminals.append(item)

    route_lengths = [
        len(route)
        for species_id, routes in species_routes.items()
        if species_id in real_species
        for route in routes
    ]
    unreachable_nodes = sorted(set(tree) - reachable_nodes)
    orphan_nodes = sorted(node_id for node_id in tree if node_id != root_id and not incoming[node_id])
    multiple_incoming = []
    for node_id, referrers in sorted(incoming.items()):
        distinct_parents = {referrer["nodeId"] for referrer in referrers}
        if len(distinct_parents) > 1:
            multiple_incoming.append({"nodeId": node_id, "incoming": referrers})
    unexpected_terminals = sorted(set(species_routes) - set(real_species))
    blockers = {
        "missingRoot": int(root_id not in tree),
        "cycles": len(cycles),
        "danglingNodeReferences": len(dangling_nodes),
        "danglingSpeciesReferences": len(dangling_species),
        "malformedOptions": len(malformed_options),
        "deadEnds": len(dead_ends),
        "unreachableNodes": len(unreachable_nodes),
        "speciesWithoutRoute": len(missing_species),
    }

    return {
        "summary": {
            "rootNodeId": root_id,
            "totalNodes": len(tree),
            "reachableNodes": len(reachable_nodes),
            "realSpecies": len(real_species),
            "speciesWithRoute": sum(species_id in species_routes for species_id in real_species),
            "terminalRoutes": len(route_lengths),
            "minimumRouteLength": min(route_lengths, default=0),
            "maximumRouteLength": max(route_lengths, default=0),
            "averageRouteLength": round(sum(route_lengths) / len(route_lengths), 2)
            if route_lengths
            else 0,
            "routeLengthDistribution": dict(sorted(Counter(route_lengths).items())),
            "blockers": blockers,
            "review": {
                "unverifiedMultipleTerminalSpecies": len(unverified_multiple_terminals),
                "duplicateOptionLabels": len(duplicate_labels),
                "duplicateOptionTargets": len(duplicate_targets),
                "malformedNodes": len(malformed_nodes),
                "orphanNodes": len(orphan_nodes),
                "unexpectedTerminalTaxa": len(unexpected_terminals),
                "lowTextEvidenceOptions": len(low_text_evidence),
                "missingTranscriptPages": len(missing_transcript_pages),
                "genusPageMismatches": len(genus_page_mismatches),
            },
            "verified": {
                "nodesWithMultipleIncomingRoutes": len(multiple_incoming),
                "speciesWithMultipleRoutes": len(multiple_routes),
                "speciesWithConvergentRoutes": len(convergent_routes),
                "manuallyVerifiedMultipleTerminalSpecies": len(
                    manually_verified_multiple_terminals
                ),
                "singleActionNodes": len(single_action_nodes),
                "manuallyVerifiedLowEvidenceOptions": manually_verified_low_evidence,
                "manuallyVerifiedTranscriptPages": len(manually_verified_transcript_pages),
                "manuallyVerifiedGenusPageMismatches": manually_verified_genus_pages,
            },
        },
        "issues": {
            "cycles": cycles,
            "danglingNodeReferences": dangling_nodes,
            "danglingSpeciesReferences": dangling_species,
            "malformedNodes": malformed_nodes,
            "malformedOptions": malformed_options,
            "deadEnds": dead_ends,
            "unreachableNodes": unreachable_nodes,
            "orphanNodes": orphan_nodes,
            "nodesWithMultipleIncomingRoutes": multiple_incoming,
            "speciesWithoutRoute": missing_species,
            "speciesWithMultipleRoutes": multiple_routes,
            "unverifiedMultipleTerminalSpecies": unverified_multiple_terminals,
            "manuallyVerifiedMultipleTerminalSpecies": manually_verified_multiple_terminals,
            "singleActionNodes": single_action_nodes,
            "duplicateOptionLabels": duplicate_labels,
            "duplicateOptionTargets": duplicate_targets,
            "unexpectedTerminalTaxa": unexpected_terminals,
            "lowTextEvidenceOptions": sorted(
                low_text_evidence, key=lambda item: (item["score"], item["manualPage"], item["nodeId"])
            ),
            "missingTranscriptPages": sorted(missing_transcript_pages),
            "manuallyVerifiedTranscriptPages": sorted(manually_verified_transcript_pages),
            "genusPageMismatches": sorted(
                genus_page_mismatches,
                key=lambda item: (-abs(item["difference"]), item["nodeId"]),
            ),
        },
    }


def main() -> None:
    parser = argparse.ArgumentParser(description="Audita recorridos de la clave de segunda edición.")
    parser.add_argument(
        "--check",
        action="store_true",
        help="Devuelve un código de error si encuentra bloqueos estructurales.",
    )
    parser.add_argument(
        "--transcript",
        type=Path,
        help="Transcripción Markdown de la segunda edición.",
    )
    args = parser.parse_args()
    transcript_path = args.transcript or (
        DEFAULT_TRANSCRIPT_PATH if DEFAULT_TRANSCRIPT_PATH.exists() else FALLBACK_TRANSCRIPT_PATH
    )
    species, tree, exported_root = load_second_edition()
    requested_pages = {
        node["manualPage"]
        for node in tree.values()
        if isinstance(node.get("manualPage"), int) and node["manualPage"] > 0
    }
    transcript_text = transcript_path.read_text(encoding="utf-8")
    transcript_pages = parse_transcript_pages(transcript_text, requested_pages)
    genus_index_pages = parse_genus_index_pages(transcript_text)
    report = audit(
        species,
        tree,
        exported_root or ROOT_NODE_ID,
        transcript_pages,
        genus_index_pages,
    )
    report["source"] = {
        "transcript": transcript_path.name,
        "transcriptPages": len(transcript_pages),
    }
    OUTPUT_PATH.write_text(
        json.dumps(report, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )

    summary = report["summary"]
    print(f"Nodes: {summary['reachableNodes']}/{summary['totalNodes']} reachable")
    print(f"Species: {summary['speciesWithRoute']}/{summary['realSpecies']} with route")
    print(f"Terminal routes: {summary['terminalRoutes']}")
    print(
        "Route length: "
        f"{summary['minimumRouteLength']}-{summary['maximumRouteLength']} "
        f"(average {summary['averageRouteLength']})"
    )
    print("Blockers:")
    for issue, count in summary["blockers"].items():
        print(f"  {issue}: {count}")
    print("Review candidates:")
    for issue, count in summary["review"].items():
        print(f"  {issue}: {count}")
    print("Verified patterns:")
    for issue, count in summary["verified"].items():
        print(f"  {issue}: {count}")
    print(f"Audit file: {OUTPUT_PATH}")

    if args.check and any(summary["blockers"].values()):
        raise SystemExit(1)


if __name__ == "__main__":
    main()
