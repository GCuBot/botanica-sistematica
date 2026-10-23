import { Especie } from "@/types";

export const NO_COMMON_NAME = "Sin nombre vulgar";

function normalizeName(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function isScientificNameFallback(commonName: string, scientificName: string) {
  if (commonName === scientificName) return true;

  const commonWords = commonName.split(" ");
  const scientificWords = scientificName.split(" ");
  if (commonWords.length < 2) return false;

  const withoutHybridMarker = scientificWords.filter(
    (word, index) => !(index === 1 && word === "x")
  );
  if (commonWords.join(" ") === withoutHybridMarker.join(" ")) return true;

  const rankIndex = scientificWords.findIndex((word) =>
    ["var", "subsp", "ssp", "f"].includes(word)
  );
  return (
    rankIndex > 1 &&
    commonWords.join(" ") === scientificWords.slice(0, rankIndex).join(" ")
  );
}

export function isMissingCommonName(
  commonName: string | null | undefined,
  scientificName: string
) {
  const normalizedCommonName = normalizeName(commonName || "");
  const normalizedScientificName = normalizeName(scientificName);
  return (
    !normalizedCommonName ||
    isScientificNameFallback(normalizedCommonName, normalizedScientificName)
  );
}

export function formatCommonName(
  commonName: string | null | undefined,
  scientificName: string
) {
  return isMissingCommonName(commonName, scientificName)
    ? NO_COMMON_NAME
    : commonName!.trim();
}

export function getSpeciesCommonName(especie: Especie) {
  return formatCommonName(especie.nombreVulgar, especie.nombreCientifico);
}
