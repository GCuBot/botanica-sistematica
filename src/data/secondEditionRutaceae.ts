import { CladoNode, Especie } from "@/types";

function species(
  id: string,
  scientificName: string,
  commonName: string,
  characteristics: string,
  distribution: string
): Especie {
  return {
    id,
    nombreCientifico: scientificName,
    nombreVulgar: commonName,
    familia: "LXXXI. Rutaceae",
    descripcion: characteristics.split(";", 1)[0] + ".",
    caracteristicas: characteristics,
    distribucion: distribution,
  };
}

export const secondEditionRutaceaeSpecies: Record<string, Especie> = {
  ed2_ruta_chalepensis: species(
    "ed2_ruta_chalepensis",
    "Ruta chalepensis",
    "Ruda",
    "Sufrutice fetido de 50-150 cm; hojas bipinatipartidas con segmentos oblongos; flores amarillo-verdosas pequenas en cimas corimbiformes; petalos de borde laciniado",
    "Viejo Mundo; adventicia en America. Frecuente en suelos modificados."
  ),
  ed2_ruta_graveolens: species(
    "ed2_ruta_graveolens",
    "Ruta graveolens",
    "Ruda",
    "Sufrutice fetido de hasta 50 cm; hojas bipinatisectas con lobulos oblongos; flores amarillo-verdosas pequenas; petalos de borde entero o apenas dentado",
    "Originada del Mediterraneo; cultivada y a veces subespontanea."
  ),
  ed2_fagara_hyemalis: species(
    "ed2_fagara_hyemalis",
    "Fagara hyemalis",
    "Tembetari",
    "Arbolito con aguijones curvos en las ramas; hojas imparipinadas con raquis inerme y 6-8 pares de foliolos eliptico-lanceolados, crenados, glabros, de 15-25 mm; flores amarillentas en panojas cortas; gineceo con 1-2 carpelos; foliculos globosos con semillas negras",
    "Sur de Brasil, Paraguay, Uruguay y norte de Argentina. Bosques de la Isla Martin Garcia, del Delta y del partido de General Madariaga."
  ),
  ed2_fagara_rhoifolia: species(
    "ed2_fagara_rhoifolia",
    "Fagara rhoifolia",
    "Tembetari",
    "Arbol con aguijones rectos en las ramas; hojas imparipinadas con raquis provisto de largos aguijones rectos y generalmente 4-5 pares de foliolos ovado-lanceolados, crenado-aserrados, glabros, de 25-40 mm; flores pequenas en panojas cortas; gineceo con 1-3 carpelos",
    "Sur de Brasil, Uruguay y nordeste de Argentina hasta las barrancas del Parana al norte de Buenos Aires."
  ),
};

export const secondEditionRutaceaeKeyData: Record<string, CladoNode> = {
  ed2_family_rutaceae: {
    id: "ed2_family_rutaceae",
    milestone: "LXXXI. Rutaceae",
    manualPage: 367,
    descripcion: "La planta es hierba con estambres diplostemonos o arbol con estambres isostemonos?",
    opcionA: {
      label: "Hierbas; estambres diplostemonos",
      keyStep: "A",
      nextNodeId: "ed2_ruta_petals",
    },
    opcionA_prima: {
      label: "Arboles; estambres isostemonos",
      keyStep: "A'",
      nextNodeId: "ed2_fagara_raquis",
    },
  },
  ed2_ruta_petals: {
    id: "ed2_ruta_petals",
    milestone: "Ruta",
    manualPage: 368,
    descripcion: "El borde de los petalos es laciniado o entero a apenas dentado?",
    opcionA: {
      label: "Borde de los petalos laciniado",
      keyStep: "A",
      especieId: "ed2_ruta_chalepensis",
    },
    opcionA_prima: {
      label: "Borde de los petalos entero o apenas dentado",
      keyStep: "A'",
      especieId: "ed2_ruta_graveolens",
    },
  },
  ed2_fagara_raquis: {
    id: "ed2_fagara_raquis",
    milestone: "Fagara",
    manualPage: 368,
    descripcion: "El raquis de las hojas es inerme o provisto de largos aguijones rectos?",
    opcionA: {
      label: "Raquis inerme; 6-8 pares de foliolos; flores masculinas con 4 estambres",
      keyStep: "A",
      especieId: "ed2_fagara_hyemalis",
    },
    opcionA_prima: {
      label: "Raquis con largos aguijones rectos; 4-5 pares de foliolos; flores masculinas con 5 estambres",
      keyStep: "A'",
      especieId: "ed2_fagara_rhoifolia",
    },
  },
};
