import { CladoNode, Especie } from "@/types";

function species(
  id: string,
  scientificName: string,
  familyName: string,
  description: string,
  characteristics: string,
  distribution: string
): Especie {
  return {
    id,
    nombreCientifico: scientificName,
    nombreVulgar: scientificName,
    familia: familyName,
    descripcion: description,
    caracteristicas: characteristics,
    distribucion: distribution,
  };
}

export const secondEditionZannichelliaceaeJuncaginaceaeSpecies: Record<string, Especie> = {
  ed2_zannichellia_palustris: species(
    "ed2_zannichellia_palustris", "Zannichellia palustris", "XXIII. Zannichelliaceae",
    "Hierba acuática sumergida, de tallo filiforme, con flores unisexuales axilares.",
    "Hojas lineares con estípulas intrafoliares; carpelos casi sésiles, comprimidos y con borde externo crenado-dentado.",
    "Cosmopolita; vive en charcas."
  ),
  ed2_triglochin_palustris: species(
    "ed2_triglochin_palustris", "Triglochin palustris", "XXIV. Juncaginaceae",
    "Hierba palustre perenne con rizoma corto y escapos de 15-40 cm.",
    "Flores con perigonio; hojas con lígula corta auriculada; carpelos y frutos lineares de 7-8 mm.",
    "Suelos pantanosos de regiones templadas y frías; rara cerca de Buenos Aires."
  ),
  ed2_triglochin_striata: species(
    "ed2_triglochin_striata", "Triglochin striata", "XXIV. Juncaginaceae",
    "Hierba palustre perenne con rizoma horizontal delgado y escapos de 5-35 cm.",
    "Flores con perigonio; hojas con lígula entera; carpelos semicirculares y fruto globoso.",
    "Cosmopolita; frecuente en orillas de lagunas y céspedes de la ribera del Plata."
  ),
  ed2_lilaea_scilloides: species(
    "ed2_lilaea_scilloides", "Lilaea scilloides", "XXIV. Juncaginaceae",
    "Hierba anual junciforme, con hojas arrosetadas de 15-45 cm.",
    "Flores desnudas y polígamas: femeninas basales y flores femeninas, hermafroditas o masculinas reunidas en espigas densas.",
    "Frecuente en lagunas y arroyos de la provincia de Buenos Aires."
  ),
};

function singleSpeciesNode(nodeId: string, familyName: string, manualPage: number, speciesId: string): CladoNode {
  const especie = secondEditionZannichelliaceaeJuncaginaceaeSpecies[speciesId];
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

export const secondEditionZannichelliaceaeJuncaginaceaeKeyData: Record<string, CladoNode> = {
  ed2_family_zannichelliaceae: singleSpeciesNode(
    "ed2_family_zannichelliaceae", "Zannichelliaceae", 54, "ed2_zannichellia_palustris"
  ),
  ed2_family_juncaginaceae: {
    id: "ed2_family_juncaginaceae", milestone: "Juncaginaceae", manualPage: 54,
    descripcion: "¿Las flores poseen perigonio y son hermafroditas?",
    opcionA: { label: "Con perigonio, hermafroditas, en espigas o racimos laxos", keyStep: "A", nextNodeId: "ed2_triglochin" },
    opcionA_prima: { label: "Desnudas, polígamas, reunidas en espigas densas", keyStep: "A'", especieId: "ed2_lilaea_scilloides" },
  },
  ed2_triglochin: {
    id: "ed2_triglochin", milestone: "Triglochin", manualPage: 54,
    descripcion: "¿Los carpelos son lineares o semicirculares?",
    opcionA: { label: "Lineares", keyStep: "A", especieId: "ed2_triglochin_palustris" },
    opcionA_prima: { label: "Semicirculares", keyStep: "A'", especieId: "ed2_triglochin_striata" },
  },
};
