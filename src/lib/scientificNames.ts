import { Especie } from "@/types";

export function formatScientificName(especie?: Especie | null) {
  if (!especie) return "";
  return especie.autoridad
    ? `${especie.nombreCientifico} ${especie.autoridad}`
    : especie.nombreCientifico;
}
