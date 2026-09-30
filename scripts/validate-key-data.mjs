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
    externalNodes: [],
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
    externalNodes: ["ed2_pteridophyta_a", "ed2_dicotyledoneae_a"],
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
  const species = new Set(collectMatches(dataText, config.dataPattern));
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

const ok = files.every(validateFile);
process.exit(ok ? 0 : 1);
