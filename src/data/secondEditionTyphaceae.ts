import { CladoNode, Especie } from "@/types";

function species(
  id: string,
  scientificName: string,
  description: string,
  characteristics: string,
  distribution: string,
  commonName = "Totora"
): Especie {
  return {
    id,
    nombreCientifico: scientificName,
    nombreVulgar: commonName,
    familia: "XXI. Typhaceae",
    descripcion: description,
    caracteristicas: characteristics,
    distribucion: distribution,
  };
}

export const secondEditionTyphaceaeSpecies: Record<string, Especie> = {
  ed2_typha_latifolia: species(
    "ed2_typha_latifolia",
    "Typha latifolia",
    "Hierba palustre rizomatosa de 1-3 m.",
    "Flores femeninas sin brácteas, estigmas lanceolados y polen en tétradas; hojas de 50-120 cm, torcidas en su parte superior.",
    "Cosmopolita; común en pajonales."
  ),
  ed2_typha_domingensis: species(
    "ed2_typha_domingensis",
    "Typha domingensis",
    "Hierba palustre rizomatosa semejante a Typha latifolia.",
    "Flores femeninas bracteoladas y estigmas lineares; espiga femenina separada de la masculina por un tramo desnudo; conectivo menor de 1 mm.",
    "Frecuente en pantanos de toda América."
  ),
  ed2_typha_subulata: species(
    "ed2_typha_subulata",
    "Typha subulata",
    "Hierba palustre rizomatosa de 1-2 m.",
    "Flores femeninas bracteoladas y estigmas lineares; espiga femenina generalmente contigua a la masculina; conectivo de cerca de 1 mm.",
    "Uruguay y Argentina; vive en pantanos.",
    "Typha subulata"
  ),
};

export const secondEditionTyphaceaeKeyData: Record<string, CladoNode> = {
  ed2_family_typhaceae: {
    id: "ed2_family_typhaceae",
    milestone: "Typhaceae",
    manualPage: 49,
    descripcion: "¿Las flores femeninas poseen bractéolas?",
    opcionA: {
      label: "Sin bractéolas; estigmas lanceolados; polen en tétradas",
      keyStep: "A",
      especieId: "ed2_typha_latifolia",
    },
    opcionA_prima: {
      label: "Con bractéolas; estigmas lineares; polen no reunido en tétradas",
      keyStep: "A'",
      nextNodeId: "ed2_typhaceae_spikes",
    },
  },
  ed2_typhaceae_spikes: {
    id: "ed2_typhaceae_spikes",
    milestone: "Typha: disposición de las espigas",
    manualPage: 50,
    descripcion: "¿La inflorescencia femenina está separada de la masculina?",
    opcionA: {
      label: "Generalmente separada por un segmento de raquis desnudo; conectivo menor de 1 mm",
      keyStep: "B",
      especieId: "ed2_typha_domingensis",
    },
    opcionA_prima: {
      label: "Generalmente contigua; conectivo de cerca de 1 mm",
      keyStep: "B'",
      especieId: "ed2_typha_subulata",
    },
  },
};
