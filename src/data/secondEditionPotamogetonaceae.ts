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
    familia: "XXII. Potamogetonaceae",
    descripcion: description,
    caracteristicas: characteristics,
    distribucion: distribution,
  };
}

export const secondEditionPotamogetonaceaeSpecies: Record<string, Especie> = {
  ed2_potamogeton_spirilliformis: species(
    "ed2_potamogeton_spirilliformis", "Potamogeton spirilliformis",
    "Planta acuática sumergida con hojas flotantes.",
    "Hojas flotantes obovadas, redondeadas y pecioladas, con siete a diez nervaduras; espigas de cuatro a seis flores; frutos con tres crestas.",
    "Aguas dulces del sur del Brasil, Uruguay y nordeste argentino; rara en la región."
  ),
  ed2_potamogeton_illinoensis_ventanicolus: species(
    "ed2_potamogeton_illinoensis_ventanicolus", "Potamogeton illinoensis var. ventanicolus",
    "Planta sumergida con hojas anchas y semejantes entre sí.",
    "Hojas casi sésiles, lanceoladas, de 7-10 cm por 1-2 cm y nueve nervaduras; espigas plurifloras; frutos globosos.",
    "Arroyos de Sierra de la Ventana y lagunas de las dunas de General Madariaga."
  ),
  ed2_potamogeton_ferrugineus: species(
    "ed2_potamogeton_ferrugineus", "Potamogeton ferrugineus",
    "Hierba acuática con tallos sumergidos y hojas flotantes.",
    "Hojas superiores pecioladas, elípticas y plurinervadas, de hasta 25 cm; espigas densas y plurifloras; frutos de 3 mm.",
    "Centro de la Argentina y Uruguay; común en arroyos y lagunas."
  ),
  ed2_potamogeton_pectinatus_striatus: species(
    "ed2_potamogeton_pectinatus_striatus", "Potamogeton pectinatus var. striatus",
    "Planta acuática sumergida de un metro o más.",
    "Hojas lineares de 7-14 cm con tres a nueve nervaduras; lígula semiamplexicaule y adnata; espigas de ocho a diez flores; fruto globoso.",
    "América del Sur; común en toda la provincia de Buenos Aires."
  ),
  ed2_potamogeton_berteroanus: species(
    "ed2_potamogeton_berteroanus", "Potamogeton berteroanus",
    "Planta sumergida y delgada, con tallos filiformes.",
    "Lígula libre; hojas lineares de hasta 5,5 cm por 1-2 mm, con seis a siete nervaduras; espigas de dos a cuatro flores.",
    "América del Sur; común en arroyos de la provincia de Buenos Aires."
  ),
  ed2_potamogeton_uruguayensis: species(
    "ed2_potamogeton_uruguayensis", "Potamogeton uruguayensis",
    "Planta acuática sumergida y grácil.",
    "Lígula libre; hojas lineares de hasta 4,5 cm por 2-3 mm, con tres a cinco nervaduras; espigas de tres flores.",
    "Uruguay y norte de Buenos Aires."
  ),
  ed2_potamogeton_gayii: species(
    "ed2_potamogeton_gayii", "Potamogeton gayii",
    "Planta sumergida con tallos comprimidos.",
    "Hojas lineares de 6-9 cm; estigma sobre un estilo corto; flores generalmente seis; fruto globoso y apiculado.",
    "Sur del Brasil, Uruguay y nordeste argentino."
  ),
  ed2_potamogeton_burkartii: species(
    "ed2_potamogeton_burkartii", "Potamogeton burkartii",
    "Planta sumergida con tallos comprimidos.",
    "Hojas lineares de hasta 10 cm; estigma sésil; flores generalmente diez; frutos globosos con crestas onduladas notables.",
    "Delta del Paraná."
  ),
};

export const secondEditionPotamogetonaceaeKeyData: Record<string, CladoNode> = {
  ed2_family_potamogetonaceae: {
    id: "ed2_family_potamogetonaceae", milestone: "Potamogetonaceae", manualPage: 50,
    descripcion: "¿Las hojas superiores son elípticas y anchas o todas las hojas son lineares?",
    opcionA: { label: "Al menos las superiores elípticas y anchas", keyStep: "A", nextNodeId: "ed2_potamogeton_broad" },
    opcionA_prima: { label: "Todas lineares", keyStep: "A'", nextNodeId: "ed2_potamogeton_linear" },
  },
  ed2_potamogeton_broad: {
    id: "ed2_potamogeton_broad", milestone: "Potamogeton: hojas anchas", manualPage: 50,
    descripcion: "¿Las hojas flotantes son pequeñas, obovadas y distintas de las sumergidas?",
    opcionA: { label: "Flotantes obovadas, redondeadas, de 20-25 mm; sumergidas lineares", keyStep: "B", especieId: "ed2_potamogeton_spirilliformis" },
    opcionA_prima: { label: "Todas semejantes y de más de 70 mm", keyStep: "B'", nextNodeId: "ed2_potamogeton_broad_large" },
  },
  ed2_potamogeton_broad_large: {
    id: "ed2_potamogeton_broad_large", milestone: "Potamogeton: hojas anchas grandes", manualPage: 50,
    descripcion: "¿Las hojas son casi sésiles o las superiores son pecioladas?",
    opcionA: { label: "Casi sésiles, lanceoladas, con nueve nervaduras", keyStep: "C", especieId: "ed2_potamogeton_illinoensis_ventanicolus" },
    opcionA_prima: { label: "Superiores pecioladas, elípticas, plurinervadas; espigas densas", keyStep: "C'", especieId: "ed2_potamogeton_ferrugineus" },
  },
  ed2_potamogeton_linear: {
    id: "ed2_potamogeton_linear", milestone: "Potamogeton: hojas lineares", manualPage: 52,
    descripcion: "¿La lígula es semiamplexicaule y está unida a la hoja?",
    opcionA: { label: "Semiamplexicaule y adnata; hojas de 7-14 cm", keyStep: "D", especieId: "ed2_potamogeton_pectinatus_striatus" },
    opcionA_prima: { label: "Lígula libre", keyStep: "D'", nextNodeId: "ed2_potamogeton_free_ligule" },
  },
  ed2_potamogeton_free_ligule: {
    id: "ed2_potamogeton_free_ligule", milestone: "Potamogeton: lígula libre", manualPage: 52,
    descripcion: "¿Las hojas miden cerca de 4,5-5,5 cm o entre 6 y 10 cm?",
    opcionA: { label: "De 4,5-5,5 cm", keyStep: "E", nextNodeId: "ed2_potamogeton_short_leaves" },
    opcionA_prima: { label: "De 6-10 cm", keyStep: "E'", nextNodeId: "ed2_potamogeton_long_leaves" },
  },
  ed2_potamogeton_short_leaves: {
    id: "ed2_potamogeton_short_leaves", milestone: "Potamogeton: hojas cortas", manualPage: 53,
    descripcion: "¿Qué ancho y cuántas nervaduras tienen las hojas?",
    opcionA: { label: "Hasta 5,5 cm por 1-2 mm, con seis a siete nervaduras", keyStep: "F", especieId: "ed2_potamogeton_berteroanus" },
    opcionA_prima: { label: "Hasta 4,5 cm por 2-3 mm, con tres a cinco nervaduras", keyStep: "F'", especieId: "ed2_potamogeton_uruguayensis" },
  },
  ed2_potamogeton_long_leaves: {
    id: "ed2_potamogeton_long_leaves", milestone: "Potamogeton: hojas largas", manualPage: 53,
    descripcion: "¿El estigma se apoya sobre un estilo corto o es sésil?",
    opcionA: { label: "Sobre un estilo corto; generalmente seis flores; hojas de 6-9 cm", keyStep: "G", especieId: "ed2_potamogeton_gayii" },
    opcionA_prima: { label: "Sésil; generalmente diez flores; hojas de hasta 10 cm", keyStep: "G'", especieId: "ed2_potamogeton_burkartii" },
  },
};
