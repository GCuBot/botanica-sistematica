import { CladoNode, Especie } from "@/types";

function species(id: string, scientificName: string, commonName: string, characteristics: string, distribution: string): Especie {
  return {
    id,
    nombreCientifico: scientificName,
    nombreVulgar: commonName,
    familia: "CXXIV. Apocynaceae",
    descripcion: characteristics.split(";", 1)[0] + ".",
    caracteristicas: characteristics,
    distribucion: distribution,
  };
}

export const secondEditionApocynaceaeSpecies: Record<string, Especie> = {
  ed2_vinca_major: species("ed2_vinca_major", "Vinca major", "Vinca", "Hierba perenne rizomatosa, glabra; tallos ascendentes de 20-50 cm; hojas algo carnosas, cortamente pecioladas, ovadas y enteras; flores axilares solitarias, grandes, vistosas y azules; fruto de dos foliculos pauciseminados", "Europa. Cultivada como ornamental y subespontanea en lugares sombreados."),
};

export const secondEditionApocynaceaeKeyData: Record<string, CladoNode> = {
  ed2_family_apocynaceae: {
    id: "ed2_family_apocynaceae",
    milestone: "CXXIV. Apocynaceae",
    manualPage: 486,
    descripcion: "Apocynaceae: unica especie tratada para la region.",
    opcionA: { label: "Identificar como Vinca major", keyStep: "1", especieId: "ed2_vinca_major" },
    opcionA_prima: { label: "Identificar como Vinca major", keyStep: "1", especieId: "ed2_vinca_major" },
  },
};
