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

export function isMissingCommonName(
  commonName: string | null | undefined,
  scientificName: string
) {
  const normalizedCommonName = normalizeName(commonName || "");
  return (
    !normalizedCommonName ||
    normalizedCommonName === normalizeName(scientificName)
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
