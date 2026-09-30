import { CladoNode, Especie } from "@/types";

function species(
  id: string,
  scientificName: string,
  description: string,
  characteristics: string,
  distribution: string
): Especie {
  return {
    id,
    nombreCientifico: scientificName,
    nombreVulgar: scientificName,
    familia: "XXVII. Hydrocharitaceae",
    descripcion: description,
    caracteristicas: characteristics,
    distribucion: distribution,
  };
}

export const secondEditionHydrocharitaceaeSpecies: Record<string, Especie> = {
  ed2_limnobium_laevigatum: species(
    "ed2_limnobium_laevigatum", "Limnobium laevigatum",
    "Hierba acuática flotante y estolonífera; el manual cita también Hydromystria stolonifera.",
    "Hojas pecioladas, elípticas o redondeadas, con abundante aerénquima; flores masculinas y femeninas separadas; fruto sumergido.",
    "Regiones cálidas de América hasta el Río de la Plata; frecuente en camalotales del Delta y la ribera."
  ),
  ed2_egeria_densa: species(
    "ed2_egeria_densa", "Egeria densa",
    "Hierba acuática perenne, sumergida, arraigada y dioica.",
    "Hojas en verticilos de tres a cinco, de 1,7-5 mm de ancho; espata femenina de 10-12 mm, entera o apenas partida; pétalos cercanos a 8 mm.",
    "Centro y sur del Brasil, Uruguay y nordeste argentino, hasta el Río de la Plata; cultivada en acuarios."
  ),
  ed2_egeria_najas: species(
    "ed2_egeria_najas", "Egeria najas",
    "Hierba acuática perenne, sumergida, arraigada y dioica.",
    "Hojas lineares en verticilos de dos a ocho, de 0,7-1,3 mm de ancho; espata femenina de 6 mm partida hasta la mitad; pétalos de unos 4 mm.",
    "Brasil, Paraguay, Uruguay y nordeste argentino, hasta el Delta."
  ),
  ed2_elodea_callitrichoides: species(
    "ed2_elodea_callitrichoides", "Elodea callitrichoides",
    "Hierba sumergida y dioica, con tallos dicotómicos densamente hojosos.",
    "Hojas medias y superiores opuestas, rara vez en verticilos de tres; pétalos masculinos linear-espatulados de 5-5,6 mm.",
    "Uruguay y Buenos Aires; vive en arroyos y lagunas."
  ),
  ed2_elodea_ernstae: species(
    "ed2_elodea_ernstae", "Elodea ernstae",
    "Hierba acuática sumergida semejante a Elodea callitrichoides.",
    "Hojas medias y superiores siempre en verticilos de tres; pétalos masculinos espatulados de unos 6,2 mm.",
    "Nordeste argentino hasta Buenos Aires; vive en charcas y arroyos."
  ),
};

export const secondEditionHydrocharitaceaeKeyData: Record<string, CladoNode> = {
  ed2_family_hydrocharitaceae: {
    id: "ed2_family_hydrocharitaceae", milestone: "Hydrocharitaceae", manualPage: 60,
    descripcion: "¿La planta flota libremente o permanece sumergida?",
    opcionA: { label: "Flotante; hojas pecioladas con lámina elíptica o circular", keyStep: "A", especieId: "ed2_limnobium_laevigatum" },
    opcionA_prima: { label: "Sumergida; hojas sésiles, lineares, opuestas o verticiladas", keyStep: "A'", nextNodeId: "ed2_hydrocharitaceae_submerged" },
  },
  ed2_hydrocharitaceae_submerged: {
    id: "ed2_hydrocharitaceae_submerged", milestone: "Hydrocharitaceae: plantas sumergidas", manualPage: 60,
    descripcion: "¿Las espatas masculinas contienen varias flores o una sola?",
    opcionA: { label: "Dos a cuatro flores; pétalos mucho mayores que los sépalos; filamentos glandulares", keyStep: "B", nextNodeId: "ed2_egeria" },
    opcionA_prima: { label: "Una flor; pétalos menores o apenas mayores que los sépalos; filamentos lisos", keyStep: "B'", nextNodeId: "ed2_elodea" },
  },
  ed2_egeria: {
    id: "ed2_egeria", milestone: "Egeria", manualPage: 62,
    descripcion: "¿Qué ancho tienen las hojas y cuánto se divide la espata femenina?",
    opcionA: { label: "Hojas de 1,7-5 mm; espata de 10-12 mm, entera o apenas partida", keyStep: "A", especieId: "ed2_egeria_densa" },
    opcionA_prima: { label: "Hojas de 0,7-1,3 mm; espata de 6 mm, partida hasta la mitad", keyStep: "A'", especieId: "ed2_egeria_najas" },
  },
  ed2_elodea: {
    id: "ed2_elodea", milestone: "Elodea", manualPage: 63,
    descripcion: "¿Las hojas medias y superiores son opuestas o se disponen en verticilos de tres?",
    opcionA: { label: "Opuestas, rara vez en verticilos de tres; pétalos de 5-5,6 mm", keyStep: "A", especieId: "ed2_elodea_callitrichoides" },
    opcionA_prima: { label: "Siempre en verticilos de tres; pétalos de unos 6,2 mm", keyStep: "A'", especieId: "ed2_elodea_ernstae" },
  },
};
