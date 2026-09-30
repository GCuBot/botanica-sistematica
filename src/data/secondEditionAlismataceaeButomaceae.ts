import { CladoNode, Especie } from "@/types";

function species(
  id: string,
  scientificName: string,
  familyName: string,
  description: string,
  characteristics: string,
  distribution: string,
  commonName = scientificName
): Especie {
  return {
    id,
    nombreCientifico: scientificName,
    nombreVulgar: commonName,
    familia: familyName,
    descripcion: description,
    caracteristicas: characteristics,
    distribucion: distribution,
  };
}

export const secondEditionAlismataceaeButomaceaeSpecies: Record<string, Especie> = {
  ed2_echinodorus_uruguayensis: species(
    "ed2_echinodorus_uruguayensis", "Echinodorus uruguayensis", "XXV. Alismataceae",
    "Hierba perenne de menos de 50 cm, frecuentemente sumergida.",
    "Hojas sumergidas lineares y hojas emergidas elíptico-lanceoladas; escapo con dos a seis verticilos de flores blancas.",
    "Brasil, Uruguay, Argentina y Chile; rara en la región, citada para isla Martín García."
  ),
  ed2_echinodorus_macrophyllus: species(
    "ed2_echinodorus_macrophyllus", "Echinodorus macrophyllus", "XXV. Alismataceae",
    "Hierba palustre perenne y robusta, de alrededor de 1 m.",
    "Hojas grandes, ovadas y acorazonadas, sin puntos ni líneas translúcidas; flores blancas en cinco a nueve verticilos.",
    "América del Sur cálida; muy rara en los alrededores de Buenos Aires.",
    "Cucharero"
  ),
  ed2_echinodorus_longiscapus: species(
    "ed2_echinodorus_longiscapus", "Echinodorus longiscapus", "XXV. Alismataceae",
    "Hierba palustre perenne de 30-70 cm.",
    "Hojas ovadas, acorazonadas en la base y con líneas translúcidas; flores blancas en racimos simples.",
    "Sur del Brasil, Paraguay, Uruguay y nordeste argentino; vive en zanjas y arroyos.",
    "Cucharero"
  ),
  ed2_echinodorus_argentinensis: species(
    "ed2_echinodorus_argentinensis", "Echinodorus argentinensis", "XXV. Alismataceae",
    "Hierba palustre perenne y robusta, de 1-1,5 m.",
    "Hojas anchamente lanceoladas o elípticas, no acorazonadas y con líneas translúcidas; flores blancas en panojas amplias y ramosas.",
    "Brasil, Uruguay y nordeste argentino; frecuente en pajonales del Delta y la ribera platense.",
    "Cucharero"
  ),
  ed2_sagittaria_montevidensis: species(
    "ed2_sagittaria_montevidensis", "Sagittaria montevidensis", "XXV. Alismataceae",
    "Hierba rizomatosa robusta, de 50-150 cm.",
    "Flores unisexuales; hojas sagitadas; verticilos superiores masculinos e inferiores femeninos; pétalos blancos o amarillentos.",
    "América meridional extratropical; muy común en pajonales y orillas de ríos.",
    "Saeta"
  ),
  ed2_hydrocleys_nymphoides: species(
    "ed2_hydrocleys_nymphoides", "Hydrocleys nymphoides", "XXVI. Butomaceae",
    "Hierba acuática perenne y flotante.",
    "Hojas inferiores lineares y sumergidas; superiores flotantes, anchamente ovadas a circulares; flores grandes con pétalos amarillos.",
    "América tropical y subtropical; común en arroyos de agua limpia y poca corriente."
  ),
};

function singleSpeciesNode(nodeId: string, familyName: string, manualPage: number, speciesId: string): CladoNode {
  const especie = secondEditionAlismataceaeButomaceaeSpecies[speciesId];
  return {
    id: nodeId,
    milestone: familyName,
    manualPage,
    descripcion: `${familyName}: única especie tratada para la región.`,
    opcionA: { label: `Identificar como ${especie.nombreCientifico}`, keyStep: "1", especieId: speciesId },
    opcionA_prima: { label: `Identificar como ${especie.nombreCientifico}`, keyStep: "1", especieId: speciesId },
    especie,
  };
}

export const secondEditionAlismataceaeButomaceaeKeyData: Record<string, CladoNode> = {
  ed2_family_alismataceae: {
    id: "ed2_family_alismataceae", milestone: "Alismataceae", manualPage: 56,
    descripcion: "¿Las flores son hermafroditas y las hojas enteras, o las flores son unisexuales y las hojas sagitadas?",
    opcionA: { label: "Flores hermafroditas; hojas lanceoladas, elípticas o cordadas", keyStep: "A", nextNodeId: "ed2_echinodorus" },
    opcionA_prima: { label: "Flores unisexuales; hojas sagitadas", keyStep: "A'", especieId: "ed2_sagittaria_montevidensis" },
  },
  ed2_echinodorus: {
    id: "ed2_echinodorus", milestone: "Echinodorus", manualPage: 58,
    descripcion: "¿La planta mide menos de 50 cm y presenta hojas sumergidas lineares?",
    opcionA: { label: "Menos de 50 cm; hojas emergidas elíptico-lanceoladas y sumergidas lineares", keyStep: "A", especieId: "ed2_echinodorus_uruguayensis" },
    opcionA_prima: { label: "Robusta, de 50-150 cm; hojas grandes ovadas o anchamente elípticas", keyStep: "A'", nextNodeId: "ed2_echinodorus_robust" },
  },
  ed2_echinodorus_robust: {
    id: "ed2_echinodorus_robust", milestone: "Echinodorus: plantas robustas", manualPage: 58,
    descripcion: "¿Las hojas poseen puntos o líneas translúcidas?",
    opcionA: { label: "Acorazonadas, sin puntos ni líneas translúcidas", keyStep: "B", especieId: "ed2_echinodorus_macrophyllus" },
    opcionA_prima: { label: "Con líneas o puntos translúcidos", keyStep: "B'", nextNodeId: "ed2_echinodorus_translucent" },
  },
  ed2_echinodorus_translucent: {
    id: "ed2_echinodorus_translucent", milestone: "Echinodorus: hojas translúcidas", manualPage: 58,
    descripcion: "¿Las hojas son acorazonadas y las flores forman racimos simples?",
    opcionA: { label: "Ovadas y acorazonadas en la base; racimos simples", keyStep: "C", especieId: "ed2_echinodorus_longiscapus" },
    opcionA_prima: { label: "Anchamente lanceoladas o elípticas, base no acorazonada; panojas amplias", keyStep: "C'", especieId: "ed2_echinodorus_argentinensis" },
  },
  ed2_family_butomaceae: singleSpeciesNode(
    "ed2_family_butomaceae", "Butomaceae", 59, "ed2_hydrocleys_nymphoides"
  ),
};
