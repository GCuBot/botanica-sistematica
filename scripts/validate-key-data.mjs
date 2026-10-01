import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");

const files = [
  {
    name: "manualKey.ts",
    path: path.join(ROOT, "src", "data", "manualKey.ts"),
    treeExport: "export const manualKeyData",
    dataExport: "export const manualFamilyData",
    dataPattern: /^  ([a-zA-Z0-9_]+): (?:family|species)\(/gm,
    externalNodes: ["angiosperm_1"],
    order: "data-first",
  },
  {
    name: "monocotyledoneae.ts",
    path: path.join(ROOT, "src", "data", "monocotyledoneae.ts"),
    treeExport: "export const monocotiledoneaeData",
    dataExport: "export const monocotEspecies",
    dataPattern: /^  ([a-zA-Z0-9_]+): \{/gm,
    externalNodes: [],
    order: "tree-first",
  },
  {
    name: "secondEditionPteridophyta.ts",
    path: path.join(ROOT, "src", "data", "secondEditionPteridophyta.ts"),
    treeExport: "export const secondEditionPteridophytaKeyData",
    dataExport: "export const secondEditionPteridophytaFamilies",
    dataPattern: /^  ([a-zA-Z0-9_]+): family\(/gm,
    nodePattern: /^  ([a-zA-Z0-9_]+): (?:\{|familyTerminal\()/gm,
    familyRefPattern: /familyTerminal\("[a-zA-Z0-9_]+", "([a-zA-Z0-9_]+)", \d+\)/g,
    externalNodes: [
      "ed2_family_selaginellaceae", "ed2_family_isoetaceae", "ed2_family_equisetaceae",
      "ed2_family_ophioglossaceae", "ed2_family_osmundaceae", "ed2_family_schizaeaceae",
      "ed2_family_dennstaedtiaceae",
      "ed2_family_adiantaceae",
      "ed2_family_davalliaceae", "ed2_family_polypodiaceae",
      "ed2_family_aspidiaceae",
      "ed2_family_aspleniaceae", "ed2_family_athyriaceae",
      "ed2_family_thelypteridaceae", "ed2_family_lomariopsidaceae",
      "ed2_family_blechnaceae", "ed2_family_marsileaceae",
      "ed2_family_salviniaceae", "ed2_family_azollaceae",
    ],
    order: "data-first",
  },
  {
    name: "secondEditionSpermatophyta.ts",
    path: path.join(ROOT, "src", "data", "secondEditionSpermatophyta.ts"),
    treeExport: "const secondEditionSpermatophytaBranchSpecs",
    dataExport: "export const secondEditionSpermatophytaFamilies",
    dataPattern: /^  ([a-zA-Z0-9_]+): family\(/gm,
    nodePattern: /^  ([a-zA-Z0-9_]+): (?:\{|familyTerminal\()/gm,
    nextRefPattern: /next: "([a-zA-Z0-9_]+)"/g,
    familyRefPattern: /familyTerminal\("[a-zA-Z0-9_]+", "([a-zA-Z0-9_]+)", \d+\)/g,
    externalNodes: [
      "ed2_pteridophyta_a", "ed2_dicotyledoneae_a",
      "ed2_family_ephedraceae", "ed2_family_typhaceae",
      "ed2_family_potamogetonaceae",
      "ed2_family_zannichelliaceae", "ed2_family_juncaginaceae",
      "ed2_family_alismataceae", "ed2_family_butomaceae",
      "ed2_family_hydrocharitaceae", "ed2_family_gramineae", "ed2_family_cyperaceae",
      "ed2_family_palmae", "ed2_family_araceae",
      "ed2_family_lemnaceae",
      "ed2_family_bromeliaceae",
      "ed2_family_commelinaceae",
      "ed2_family_pontederiaceae",
      "ed2_family_juncaceae",
      "ed2_family_liliaceae",
      "ed2_family_amaryllidaceae",
      "ed2_family_dioscoreaceae",
      "ed2_family_iridaceae",
      "ed2_family_zingiberaceae", "ed2_family_cannaceae", "ed2_family_marantaceae",
      "ed2_family_orchidaceae",
    ],
    order: "data-first",
  },
  {
    name: "secondEditionDicotGroupsAB.ts",
    path: path.join(ROOT, "src", "data", "secondEditionDicotGroupsAB.ts"),
    treeExport: "const secondEditionDicotGroupsABBranchSpecs",
    dataExport: "export const secondEditionDicotGroupsABFamilies",
    dataPattern: /^  ([a-zA-Z0-9_]+): family\(/gm,
    nodePattern: /^  ([a-zA-Z0-9_]+): (?:\{|familyTerminal\()/gm,
    nextRefPattern: /next: "([a-zA-Z0-9_]+)"/g,
    familyRefPattern: /familyTerminal\("[a-zA-Z0-9_]+", "([a-zA-Z0-9_]+)", \d+\)/g,
    externalNodes: [
      "ed2_dicot_group_c_a", "ed2_dicot_group_d_a", "ed2_dicot_group_e_a",
      "ed2_family_piperaceae", "ed2_family_salicaceae", "ed2_family_ulmaceae",
      "ed2_family_moraceae", "ed2_family_cannabinaceae", "ed2_family_urticaceae",
      "ed2_family_santalaceae",
      "ed2_family_polygonaceae",
      "ed2_family_chenopodiaceae",
    ],
    order: "data-first",
  },
  {
    name: "secondEditionDicotGroupC1.ts",
    path: path.join(ROOT, "src", "data", "secondEditionDicotGroupC1.ts"),
    treeExport: "const secondEditionDicotGroupC1BranchSpecs",
    dataExport: "export const secondEditionDicotGroupC1Families",
    dataPattern: /^  ([a-zA-Z0-9_]+): family\(/gm,
    nodePattern: /^  ([a-zA-Z0-9_]+): (?:\{|terminal\()/gm,
    nextRefPattern: /\["[^\"]+", "[^\"]+", "([a-zA-Z0-9_]+)"\]/g,
    familyRefPattern: /terminal\("[a-zA-Z0-9_]+", "([a-zA-Z0-9_]+)", \d+\)/g,
    externalNodes: ["ed2_family_rosaceae", "ed2_dicot_group_c_m"],
    order: "data-first",
  },
  {
    name: "secondEditionDicotGroupC2.ts",
    path: path.join(ROOT, "src", "data", "secondEditionDicotGroupC2.ts"),
    treeExport: "const secondEditionDicotGroupC2BranchSpecs",
    dataExport: "export const secondEditionDicotGroupC2Families",
    dataPattern: /^  ([a-zA-Z0-9_]+): family\(/gm,
    nodePattern: /^  ([a-zA-Z0-9_]+): (?:\{|terminal\()/gm,
    nextRefPattern: /\["[^\"]+", "[^\"]+", "([a-zA-Z0-9_]+)"\]/g,
    familyRefPattern: /terminal\("[a-zA-Z0-9_]+", "([a-zA-Z0-9_]+)", \d+\)/g,
    externalNodes: [
      "ed2_dicot_group_c_c_lower",
      "ed2_family_rutaceae",
      "ed2_family_leguminosae",
      "ed2_family_euphorbiaceae",
    ],
    order: "data-first",
  },
  {
    name: "secondEditionDicotGroupC3.ts",
    path: path.join(ROOT, "src", "data", "secondEditionDicotGroupC3.ts"),
    treeExport: "const secondEditionDicotGroupC3BranchSpecs",
    dataExport: "export const secondEditionDicotGroupC3Families",
    dataPattern: /^  ([a-zA-Z0-9_]+): family\(/gm,
    nodePattern: /^  ([a-zA-Z0-9_]+): (?:\{|terminal\()/gm,
    nextRefPattern: /\["[^\"]+", "[^\"]+", "([a-zA-Z0-9_]+)"\]/g,
    familyRefPattern: /terminal\("[a-zA-Z0-9_]+", "([a-zA-Z0-9_]+)", \d+\)/g,
    externalNodes: [
      "ed2_family_polygonaceae", "ed2_family_phytolaccaceae", "ed2_family_aizoaceae",
      "ed2_family_sapindaceae", "ed2_family_papaveraceae", "ed2_family_caryophyllaceae",
      "ed2_family_capparidaceae", "ed2_family_euphorbiaceae", "ed2_family_rutaceae",
      "ed2_family_zygophyllaceae",
      "ed2_family_amaranthaceae",
    ],
    order: "data-first",
  },
  {
    name: "secondEditionDicotGroupD.ts",
    path: path.join(ROOT, "src", "data", "secondEditionDicotGroupD.ts"),
    treeExport: "const secondEditionDicotGroupDBranchSpecs",
    dataExport: "export const secondEditionDicotGroupDFamilies",
    dataPattern: /^  ([a-zA-Z0-9_]+): family\(/gm,
    nodePattern: /^  ([a-zA-Z0-9_]+): (?:\{|terminal\()/gm,
    nextRefPattern: /\["[^\"]+", "[^\"]+", "([a-zA-Z0-9_]+)"\]/g,
    familyRefPattern: /terminal\("[a-zA-Z0-9_]+", "([a-zA-Z0-9_]+)", \d+\)/g,
    externalNodes: ["ed2_family_loranthaceae"],
    order: "data-first",
  },
  {
    name: "secondEditionDicotGroupE1.ts",
    path: path.join(ROOT, "src", "data", "secondEditionDicotGroupE1.ts"),
    treeExport: "const secondEditionDicotGroupE1BranchSpecs",
    dataExport: "export const secondEditionDicotGroupE1Families",
    dataPattern: /^  ([a-zA-Z0-9_]+): family\(/gm,
    nodePattern: /^  ([a-zA-Z0-9_]+): \{/gm,
    nextRefPattern: /\["[^\"]+", "[^\"]+", "([a-zA-Z0-9_]+)"\]/g,
    externalNodes: ["ed2_dicot_group_e_d_lower", "ed2_family_leguminosae"],
    generatedFamilyNodes: true,
    order: "data-first",
  },
  {
    name: "secondEditionDicotGroupE2.ts",
    path: path.join(ROOT, "src", "data", "secondEditionDicotGroupE2.ts"),
    treeExport: "const secondEditionDicotGroupE2BranchSpecs",
    dataExport: "export const secondEditionDicotGroupE2Families",
    dataPattern: /^  ([a-zA-Z0-9_]+): family\(/gm,
    nodePattern: /^  ([a-zA-Z0-9_]+): (?:\{|terminal\()/gm,
    nextRefPattern: /\["[^\"]+", "[^\"]+", "([a-zA-Z0-9_]+)"\]/g,
    familyRefPattern: /terminal\("[a-zA-Z0-9_]+", "([a-zA-Z0-9_]+)", \d+\)/g,
    externalNodes: [
      "ed2_family_santalaceae", "ed2_family_rubiaceae", "ed2_family_symplocaceae",
      "ed2_family_aristolochiaceae",
    ],
    order: "data-first",
  },
  {
    name: "secondEditionSelaginellaceae.ts",
    path: path.join(ROOT, "src", "data", "secondEditionSelaginellaceae.ts"),
    treeExport: "export const secondEditionSelaginellaceaeKeyData",
    dataExport: "export const secondEditionSelaginellaceaeSpecies",
    dataPattern: /^  ([a-zA-Z0-9_]+): species\(/gm,
    externalNodes: [],
    speciesKey: true,
    order: "data-first",
  },
  {
    name: "secondEditionEarlyPteridophytes.ts",
    path: path.join(ROOT, "src", "data", "secondEditionEarlyPteridophytes.ts"),
    treeExport: "export const secondEditionEarlyPteridophyteKeyData",
    dataExport: "export const secondEditionEarlyPteridophyteSpecies",
    dataPattern: /^  ([a-zA-Z0-9_]+): species\(/gm,
    nodePattern: /^  ([a-zA-Z0-9_]+): (?:\{|singleSpeciesNode\()/gm,
    familyRefPattern: /singleSpeciesNode\("[a-zA-Z0-9_]+", "[^"]+", \d+, "([a-zA-Z0-9_]+)"\)/g,
    speciesKey: true,
    externalNodes: [],
    order: "data-first",
  },
  {
    name: "secondEditionAdiantaceae.ts",
    path: path.join(ROOT, "src", "data", "secondEditionAdiantaceae.ts"),
    treeExport: "export const secondEditionAdiantaceaeKeyData",
    dataExport: "export const secondEditionAdiantaceaeSpecies",
    dataPattern: /^  ([a-zA-Z0-9_]+): species\(/gm,
    externalNodes: [],
    speciesKey: true,
    order: "data-first",
  },
  {
    name: "secondEditionDavalliaceaePolypodiaceae.ts",
    path: path.join(ROOT, "src", "data", "secondEditionDavalliaceaePolypodiaceae.ts"),
    treeExport: "export const secondEditionDavalliaceaePolypodiaceaeKeyData",
    dataExport: "export const secondEditionDavalliaceaePolypodiaceaeSpecies",
    dataPattern: /^  ([a-zA-Z0-9_]+): species\(/gm,
    nodePattern: /^  ([a-zA-Z0-9_]+): (?:\{|singleSpeciesNode\()/gm,
    familyRefPattern: /singleSpeciesNode\("[a-zA-Z0-9_]+", "[^"]+", \d+, "([a-zA-Z0-9_]+)"\)/g,
    speciesKey: true,
    externalNodes: [],
    order: "data-first",
  },
  {
    name: "secondEditionAspidiaceae.ts",
    path: path.join(ROOT, "src", "data", "secondEditionAspidiaceae.ts"),
    treeExport: "export const secondEditionAspidiaceaeKeyData",
    dataExport: "export const secondEditionAspidiaceaeSpecies",
    dataPattern: /^  ([a-zA-Z0-9_]+): species\(/gm,
    externalNodes: [],
    speciesKey: true,
    order: "data-first",
  },
  {
    name: "secondEditionMiddlePteridophytes.ts",
    path: path.join(ROOT, "src", "data", "secondEditionMiddlePteridophytes.ts"),
    treeExport: "export const secondEditionMiddlePteridophyteKeyData",
    dataExport: "export const secondEditionMiddlePteridophyteSpecies",
    dataPattern: /^  ([a-zA-Z0-9_]+): species\(/gm,
    nodePattern: /^  ([a-zA-Z0-9_]+): (?:\{|singleSpeciesNode\()/gm,
    familyRefPattern: /singleSpeciesNode\("[a-zA-Z0-9_]+", "[^"]+", \d+, "([a-zA-Z0-9_]+)"\)/g,
    speciesKey: true,
    externalNodes: [],
    order: "data-first",
  },
  {
    name: "secondEditionLatePteridophytes.ts",
    path: path.join(ROOT, "src", "data", "secondEditionLatePteridophytes.ts"),
    treeExport: "export const secondEditionLatePteridophyteKeyData",
    dataExport: "export const secondEditionLatePteridophyteSpecies",
    dataPattern: /^  ([a-zA-Z0-9_]+): species\(/gm,
    externalNodes: [],
    speciesKey: true,
    order: "data-first",
  },
  {
    name: "secondEditionEphedraceae.ts",
    path: path.join(ROOT, "src", "data", "secondEditionEphedraceae.ts"),
    treeExport: "export const secondEditionEphedraceaeKeyData",
    dataExport: "export const secondEditionEphedraceaeSpecies",
    dataPattern: /^  ([a-zA-Z0-9_]+): species\(/gm,
    externalNodes: [],
    speciesKey: true,
    order: "data-first",
  },
  {
    name: "secondEditionTyphaceae.ts",
    path: path.join(ROOT, "src", "data", "secondEditionTyphaceae.ts"),
    treeExport: "export const secondEditionTyphaceaeKeyData",
    dataExport: "export const secondEditionTyphaceaeSpecies",
    dataPattern: /^  ([a-zA-Z0-9_]+): species\(/gm,
    externalNodes: [],
    speciesKey: true,
    order: "data-first",
  },
  {
    name: "secondEditionPotamogetonaceae.ts",
    path: path.join(ROOT, "src", "data", "secondEditionPotamogetonaceae.ts"),
    treeExport: "export const secondEditionPotamogetonaceaeKeyData",
    dataExport: "export const secondEditionPotamogetonaceaeSpecies",
    dataPattern: /^  ([a-zA-Z0-9_]+): species\(/gm,
    externalNodes: [],
    speciesKey: true,
    order: "data-first",
  },
  {
    name: "secondEditionZannichelliaceaeJuncaginaceae.ts",
    path: path.join(ROOT, "src", "data", "secondEditionZannichelliaceaeJuncaginaceae.ts"),
    treeExport: "export const secondEditionZannichelliaceaeJuncaginaceaeKeyData",
    dataExport: "export const secondEditionZannichelliaceaeJuncaginaceaeSpecies",
    dataPattern: /^  ([a-zA-Z0-9_]+): species\(/gm,
    nodePattern: /^  ([a-zA-Z0-9_]+): (?:\{|singleSpeciesNode\()/gm,
    familyRefPattern: /singleSpeciesNode\("[a-zA-Z0-9_]+", "[^"]+", \d+, "([a-zA-Z0-9_]+)"\)/g,
    speciesKey: true,
    externalNodes: [],
    order: "data-first",
  },
  {
    name: "secondEditionAlismataceaeButomaceae.ts",
    path: path.join(ROOT, "src", "data", "secondEditionAlismataceaeButomaceae.ts"),
    treeExport: "export const secondEditionAlismataceaeButomaceaeKeyData",
    dataExport: "export const secondEditionAlismataceaeButomaceaeSpecies",
    dataPattern: /^  ([a-zA-Z0-9_]+): species\(/gm,
    nodePattern: /^  ([a-zA-Z0-9_]+): (?:\{|singleSpeciesNode\()/gm,
    familyRefPattern: /singleSpeciesNode\("[a-zA-Z0-9_]+", "[^"]+", \d+, "([a-zA-Z0-9_]+)"\)/g,
    speciesKey: true,
    externalNodes: [],
    order: "data-first",
  },
  {
    name: "secondEditionHydrocharitaceae.ts",
    path: path.join(ROOT, "src", "data", "secondEditionHydrocharitaceae.ts"),
    treeExport: "export const secondEditionHydrocharitaceaeKeyData",
    dataExport: "export const secondEditionHydrocharitaceaeSpecies",
    dataPattern: /^  ([a-zA-Z0-9_]+): species\(/gm,
    externalNodes: [],
    speciesKey: true,
    order: "data-first",
  },
  {
    name: "secondEditionGramineae.ts",
    path: path.join(ROOT, "src", "data", "secondEditionGramineae.ts"),
    treeExport: "export const secondEditionGramineaeKeyData",
    dataExport: "export const secondEditionGramineaeSpecies",
    dataPattern: /^  ([a-zA-Z0-9_]+): species\(/gm,
    nodePattern: /^  ([a-zA-Z0-9_]+): (?:\{|continuationNode\()/gm,
    externalNodes: [],
    speciesKey: true,
    order: "data-first",
  },
  {
    name: "secondEditionCyperaceae.ts",
    path: path.join(ROOT, "src", "data", "secondEditionCyperaceae.ts"),
    treeExport: "export const secondEditionCyperaceaeKeyData",
    dataExport: "export const secondEditionCyperaceaeSpecies",
    dataPattern: /^  ([a-zA-Z0-9_]+): species\(/gm,
    externalNodes: [],
    speciesKey: true,
    order: "data-first",
  },
  {
    name: "secondEditionPalmaeAraceae.ts",
    path: path.join(ROOT, "src", "data", "secondEditionPalmaeAraceae.ts"),
    treeExport: "export const secondEditionPalmaeAraceaeKeyData",
    dataExport: "export const secondEditionPalmaeAraceaeSpecies",
    dataPattern: /^  ([a-zA-Z0-9_]+): species\(/gm,
    nodePattern: /^  ([a-zA-Z0-9_]+): (?:\{|singleSpeciesNode\()/gm,
    familyRefPattern: /singleSpeciesNode\(\s*"[a-zA-Z0-9_]+", "[^"]+", \d+, "([a-zA-Z0-9_]+)"/g,
    externalNodes: [],
    speciesKey: true,
    order: "data-first",
  },
  {
    name: "secondEditionLemnaceae.ts",
    path: path.join(ROOT, "src", "data", "secondEditionLemnaceae.ts"),
    treeExport: "export const secondEditionLemnaceaeKeyData",
    dataExport: "export const secondEditionLemnaceaeSpecies",
    dataPattern: /^  ([a-zA-Z0-9_]+): species\(/gm,
    externalNodes: [],
    speciesKey: true,
    order: "data-first",
  },
  {
    name: "secondEditionBromeliaceae.ts",
    path: path.join(ROOT, "src", "data", "secondEditionBromeliaceae.ts"),
    treeExport: "export const secondEditionBromeliaceaeKeyData",
    dataExport: "export const secondEditionBromeliaceaeSpecies",
    dataPattern: /^  ([a-zA-Z0-9_]+): species\(/gm,
    externalNodes: [],
    speciesKey: true,
    order: "data-first",
  },
  {
    name: "secondEditionCommelinaceae.ts",
    path: path.join(ROOT, "src", "data", "secondEditionCommelinaceae.ts"),
    treeExport: "export const secondEditionCommelinaceaeKeyData",
    dataExport: "export const secondEditionCommelinaceaeSpecies",
    dataPattern: /^  ([a-zA-Z0-9_]+): species\(/gm,
    externalNodes: [],
    speciesKey: true,
    order: "data-first",
  },
  {
    name: "secondEditionPontederiaceae.ts",
    path: path.join(ROOT, "src", "data", "secondEditionPontederiaceae.ts"),
    treeExport: "export const secondEditionPontederiaceaeKeyData",
    dataExport: "export const secondEditionPontederiaceaeSpecies",
    dataPattern: /^  ([a-zA-Z0-9_]+): species\(/gm,
    externalNodes: [],
    speciesKey: true,
    order: "data-first",
  },
  {
    name: "secondEditionJuncaceae.ts",
    path: path.join(ROOT, "src", "data", "secondEditionJuncaceae.ts"),
    treeExport: "export const secondEditionJuncaceaeKeyData",
    dataExport: "export const secondEditionJuncaceaeSpecies",
    dataPattern: /^  ([a-zA-Z0-9_]+): species\(/gm,
    externalNodes: [],
    speciesKey: true,
    order: "data-first",
  },
  {
    name: "secondEditionLiliaceae.ts",
    path: path.join(ROOT, "src", "data", "secondEditionLiliaceae.ts"),
    treeExport: "export const secondEditionLiliaceaeKeyData",
    dataExport: "export const secondEditionLiliaceaeSpecies",
    dataPattern: /^  ([a-zA-Z0-9_]+): species\(/gm,
    externalNodes: [],
    speciesKey: true,
    order: "data-first",
  },
  {
    name: "secondEditionAmaryllidaceae.ts",
    path: path.join(ROOT, "src", "data", "secondEditionAmaryllidaceae.ts"),
    treeExport: "export const secondEditionAmaryllidaceaeKeyData",
    dataExport: "export const secondEditionAmaryllidaceaeSpecies",
    dataPattern: /^  ([a-zA-Z0-9_]+): species\(/gm,
    externalNodes: [],
    speciesKey: true,
    order: "data-first",
  },
  {
    name: "secondEditionDioscoreaceae.ts",
    path: path.join(ROOT, "src", "data", "secondEditionDioscoreaceae.ts"),
    treeExport: "export const secondEditionDioscoreaceaeKeyData",
    dataExport: "export const secondEditionDioscoreaceaeSpecies",
    dataPattern: /^  ([a-zA-Z0-9_]+): \{/gm,
    externalNodes: [],
    speciesKey: true,
    order: "data-first",
  },
  {
    name: "secondEditionIridaceae.ts",
    path: path.join(ROOT, "src", "data", "secondEditionIridaceae.ts"),
    treeExport: "export const secondEditionIridaceaeKeyData",
    dataExport: "export const secondEditionIridaceaeSpecies",
    dataPattern: /^  ([a-zA-Z0-9_]+): species\(/gm,
    externalNodes: [],
    speciesKey: true,
    order: "data-first",
  },
  {
    name: "secondEditionZingiberaceaeCannaceaeMarantaceae.ts",
    path: path.join(ROOT, "src", "data", "secondEditionZingiberaceaeCannaceaeMarantaceae.ts"),
    treeExport: "export const secondEditionZingiberaceaeCannaceaeMarantaceaeKeyData",
    dataExport: "export const secondEditionZingiberaceaeCannaceaeMarantaceaeSpecies",
    dataPattern: /^  ([a-zA-Z0-9_]+): species\(/gm,
    externalNodes: [],
    speciesKey: true,
    order: "data-first",
  },
  {
    name: "secondEditionOrchidaceae.ts",
    path: path.join(ROOT, "src", "data", "secondEditionOrchidaceae.ts"),
    treeExport: "export const secondEditionOrchidaceaeKeyData",
    dataExport: "export const secondEditionOrchidaceaeSpecies",
    dataPattern: /^  ([a-zA-Z0-9_]+): species\(/gm,
    externalNodes: [],
    speciesKey: true,
    order: "data-first",
  },
  {
    name: "secondEditionPiperaceaeSalicaceaeUlmaceae.ts",
    path: path.join(ROOT, "src", "data", "secondEditionPiperaceaeSalicaceaeUlmaceae.ts"),
    treeExport: "export const secondEditionPiperaceaeSalicaceaeUlmaceaeKeyData",
    dataExport: "export const secondEditionPiperaceaeSalicaceaeUlmaceaeSpecies",
    dataPattern: /^  ([a-zA-Z0-9_]+): species\(/gm,
    nodePattern: /^  ([a-zA-Z0-9_]+): (?:\{|singleSpeciesNode\()/gm,
    externalNodes: [],
    speciesKey: true,
    order: "data-first",
  },
  {
    name: "secondEditionMoraceaeCannabinaceaeUrticaceae.ts",
    path: path.join(ROOT, "src", "data", "secondEditionMoraceaeCannabinaceaeUrticaceae.ts"),
    treeExport: "export const secondEditionMoraceaeCannabinaceaeUrticaceaeKeyData",
    dataExport: "export const secondEditionMoraceaeCannabinaceaeUrticaceaeSpecies",
    dataPattern: /^  ([a-zA-Z0-9_]+): species\(/gm,
    nodePattern: /^  ([a-zA-Z0-9_]+): (?:\{|singleSpeciesNode\()/gm,
    externalNodes: [],
    speciesKey: true,
    order: "data-first",
  },
  {
    name: "secondEditionSantalaceaeLoranthaceaeAristolochiaceae.ts",
    path: path.join(ROOT, "src", "data", "secondEditionSantalaceaeLoranthaceaeAristolochiaceae.ts"),
    treeExport: "export const secondEditionSantalaceaeLoranthaceaeAristolochiaceaeKeyData",
    dataExport: "export const secondEditionSantalaceaeLoranthaceaeAristolochiaceaeSpecies",
    dataPattern: /^  ([a-zA-Z0-9_]+): species\(/gm,
    nodePattern: /^  ([a-zA-Z0-9_]+): (?:\{|singleSpeciesNode\()/gm,
    externalNodes: [],
    speciesKey: true,
    order: "data-first",
  },
  {
    name: "secondEditionPolygonaceae.ts",
    path: path.join(ROOT, "src", "data", "secondEditionPolygonaceae.ts"),
    treeExport: "export const secondEditionPolygonaceaeKeyData",
    dataExport: "export const secondEditionPolygonaceaeSpecies",
    dataPattern: /^  ([a-zA-Z0-9_]+): species\(/gm,
    externalNodes: [],
    speciesKey: true,
    order: "data-first",
  },
  {
    name: "secondEditionChenopodiaceae.ts",
    path: path.join(ROOT, "src", "data", "secondEditionChenopodiaceae.ts"),
    treeExport: "export const secondEditionChenopodiaceaeKeyData",
    dataExport: "export const secondEditionChenopodiaceaeSpecies",
    dataPattern: /^  ([a-zA-Z0-9_]+): species\(/gm,
    externalNodes: [],
    speciesKey: true,
    order: "data-first",
  },
  {
    name: "secondEditionAmaranthaceae.ts",
    path: path.join(ROOT, "src", "data", "secondEditionAmaranthaceae.ts"),
    treeExport: "export const secondEditionAmaranthaceaeKeyData",
    dataExport: "export const secondEditionAmaranthaceaeSpecies",
    dataPattern: /^  ([a-zA-Z0-9_]+): species\(/gm,
    externalNodes: [],
    speciesKey: true,
    order: "data-first",
  },
];

function collectMatches(text, pattern, group = 1) {
  return [...text.matchAll(pattern)].map((match) => match[group]);
}

function validateFile(config) {
  const text = fs.readFileSync(config.path, "utf8");
  const treeStart = text.indexOf(config.treeExport);
  const dataStart = text.indexOf(config.dataExport);

  if (treeStart === -1 || dataStart === -1) {
    throw new Error(`${config.name}: no se encontraron exports esperados.`);
  }

  const dataText =
    config.order === "data-first" ? text.slice(dataStart, treeStart) : text.slice(dataStart);
  const treeText =
    config.order === "data-first" ? text.slice(treeStart) : text.slice(treeStart, dataStart);
  const nodes = new Set([
    ...collectMatches(treeText, config.nodePattern || /^  ([a-zA-Z0-9_]+): \{/gm),
    ...(config.externalNodes || []),
  ]);
  const species = new Set([
    ...collectMatches(dataText, config.dataPattern),
    ...(config.externalSpecies || []),
  ]);
  if (config.generatedFamilyNodes) {
    species.forEach((id) => nodes.add(`ed2_family_${id.replace(/^ed2_/, "")}`));
  }
  const nextRefs = collectMatches(
    treeText,
    config.nextRefPattern || /nextNodeId: "([a-zA-Z0-9_]+)"/g
  );
  const speciesRefs = collectMatches(treeText, /especieId: "([a-zA-Z0-9_]+)"/g);
  const manualRefs = collectMatches(treeText, /manualFamilyData\.([a-zA-Z0-9_]+)/g);
  const familyRefs = config.familyRefPattern
    ? collectMatches(treeText, config.familyRefPattern)
    : [];

  const missingNodes = [...new Set(nextRefs.filter((id) => !nodes.has(id)))].sort();
  const missingSpecies = [
    ...new Set([...speciesRefs, ...manualRefs, ...familyRefs].filter((id) => !species.has(id))),
  ].sort();

  if (missingNodes.length || missingSpecies.length) {
    console.error(`\n${config.name}`);
    if (missingNodes.length) console.error(`Missing nodes: ${missingNodes.join(", ")}`);
    if (missingSpecies.length) console.error(`Missing species: ${missingSpecies.join(", ")}`);
    return false;
  }

  console.log(`${config.name}: referencias OK`);
  return true;
}

function collectConfigData(config) {
  const text = fs.readFileSync(config.path, "utf8");
  const treeStart = text.indexOf(config.treeExport);
  const dataStart = text.indexOf(config.dataExport);
  const dataText =
    config.order === "data-first" ? text.slice(dataStart, treeStart) : text.slice(dataStart);
  const treeText =
    config.order === "data-first" ? text.slice(treeStart) : text.slice(treeStart, dataStart);
  const species = collectMatches(dataText, config.dataPattern);
  const nodes = collectMatches(
    treeText,
    config.nodePattern || /^  ([a-zA-Z0-9_]+): \{/gm
  );
  if (config.generatedFamilyNodes) {
    species.forEach((id) => nodes.push(`ed2_family_${id.replace(/^ed2_/, "")}`));
  }
  return {
    nodes,
    species,
    nextRefs: collectMatches(
      treeText,
      config.nextRefPattern || /nextNodeId: "([a-zA-Z0-9_]+)"/g
    ),
    familyRefs: config.familyRefPattern
      ? collectMatches(treeText, config.familyRefPattern)
      : [],
  };
}

function duplicates(values) {
  const seen = new Set();
  return [...new Set(values.filter((value) => (seen.has(value) ? true : !seen.add(value))))];
}

function validateSecondEdition() {
  const configs = files.filter((config) => config.name.startsWith("secondEdition"));
  const data = configs.map(collectConfigData);
  const nodes = data.flatMap((item) => item.nodes);
  const taxa = data.flatMap((item) => item.species);
  const families = data.flatMap((item, index) =>
    configs[index].speciesKey ? [] : item.species
  );
  const nodeSet = new Set(nodes);
  const taxaSet = new Set(taxa);
  const familySet = new Set(families);
  const missingNodes = [...new Set(data.flatMap((item) => item.nextRefs))]
    .filter((id) => !nodeSet.has(id))
    .sort();
  const missingSpecies = [...new Set(data.flatMap((item) => item.familyRefs))]
    .filter((id) => !taxaSet.has(id))
    .sort();
  const duplicateNodes = duplicates(nodes).sort();
  const duplicateSpecies = duplicates(taxa).sort();
  const errors = [];

  if (familySet.size !== 145) errors.push(`familias esperadas: 145; encontradas: ${familySet.size}`);
  if (!nodeSet.has("ed2_root")) errors.push("falta el nodo raíz ed2_root");
  if (missingNodes.length) errors.push(`nodos globales faltantes: ${missingNodes.join(", ")}`);
  if (missingSpecies.length) errors.push(`familias globales faltantes: ${missingSpecies.join(", ")}`);
  if (duplicateNodes.length) errors.push(`nodos duplicados: ${duplicateNodes.join(", ")}`);
  if (duplicateSpecies.length) errors.push(`familias duplicadas: ${duplicateSpecies.join(", ")}`);

  if (errors.length) {
    console.error(`\nSegunda edición: ${errors.join("; ")}`);
    return false;
  }
  console.log(`Segunda edición: ${nodes.length} nodos, ${familySet.size} familias y ${taxaSet.size - familySet.size} especies; referencias globales OK`);
  return true;
}

const ok = files.every(validateFile) && validateSecondEdition();
process.exit(ok ? 0 : 1);
