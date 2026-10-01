import { CladoNode, Especie } from "@/types";

export const secondEditionDioscoreaceaeSpecies: Record<string, Especie> = {
  ed2_dioscorea_sinuata: {
    id: "ed2_dioscorea_sinuata",
    nombreCientifico: "Dioscorea sinuata",
    nombreVulgar: "Carape",
    familia: "XXXIX. Dioscoreaceae",
    descripcion: "Enredadera perenne herbacea y tuberosa, con tallos volubles de 2-4 m.",
    caracteristicas: "Hojas alternas ovado-acorazonadas, trilobadas o sinuadas; flores unisexuales en racimos; capsula trialada y semillas aladas.",
    distribucion: "Sur de Brasil, Paraguay, Uruguay y nordeste argentino; frecuente en bosques del Delta y la ribera platense; tuberculos comestibles.",
  },
};

export const secondEditionDioscoreaceaeKeyData: Record<string, CladoNode> = {
  ed2_family_dioscoreaceae: {
    id: "ed2_family_dioscoreaceae", milestone: "Dioscoreaceae", manualPage: 198,
    descripcion: "Dioscoreaceae: unica especie tratada para la region.",
    opcionA: { label: "Identificar como Dioscorea sinuata", keyStep: "1", especieId: "ed2_dioscorea_sinuata" },
    opcionA_prima: { label: "Identificar como Dioscorea sinuata", keyStep: "1", especieId: "ed2_dioscorea_sinuata" },
  },
};
