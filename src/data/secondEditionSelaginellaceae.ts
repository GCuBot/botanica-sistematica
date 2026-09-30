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
    familia: "I. Selaginellaceae",
    descripcion: description,
    caracteristicas: characteristics,
    distribucion: distribution,
  };
}

export const secondEditionSelaginellaceaeSpecies: Record<string, Especie> = {
  ed2_selaginella_peruviana: species(
    "ed2_selaginella_peruviana",
    "Selaginella peruviana",
    "Planta pequeña, rastrera y muy ramificada, con numerosos rizóforos.",
    "Hojas iguales entre sí, apretadas, espiraladas y linear-lanceoladas, de sólo 3-4 mm.",
    "Perú, Bolivia y norte y centro de la Argentina; rara en Buenos Aires, citada para las sierras de Azul."
  ),
  ed2_selaginella_muscosa: species(
    "ed2_selaginella_muscosa",
    "Selaginella muscosa",
    "Hierba perenne, pequeña y aplicada contra el suelo.",
    "Hojas dimorfas en cuatro hileras, no auriculadas y con margen denticulado; tallos no articulados y rizóforos ventrales.",
    "Sur del Brasil, Paraguay y nordeste de la Argentina, hasta el Delta y la ribera del Plata; Punta Lara."
  ),
  ed2_selaginella_marginata: species(
    "ed2_selaginella_marginata",
    "Selaginella marginata",
    "Hierba pequeña y rastrera.",
    "Hojas dimorfas en cuatro hileras, auriculadas y con margen blanco; tallo articulado y rizóforos dorsales extraaxilares.",
    "América cálida, hasta el Delta y la ribera del Plata."
  ),
};

export const secondEditionSelaginellaceaeKeyData: Record<string, CladoNode> = {
  ed2_family_selaginellaceae: {
    id: "ed2_family_selaginellaceae",
    milestone: "Selaginellaceae",
    manualPage: 22,
    descripcion: "Selaginellaceae: ¿las hojas son iguales o dimorfas?",
    opcionA: {
      label: "Iguales, apretadas, espiraladas y linear-lanceoladas, de 3-4 mm",
      keyStep: "A",
      especieId: "ed2_selaginella_peruviana",
    },
    opcionA_prima: {
      label: "Dimorfas y ordenadas en cuatro hileras: dos dorsales y dos laterales",
      keyStep: "A'",
      nextNodeId: "ed2_selaginellaceae_b",
    },
  },
  ed2_selaginellaceae_b: {
    id: "ed2_selaginellaceae_b",
    milestone: "Selaginella",
    manualPage: 22,
    descripcion: "¿Las hojas son auriculadas y el tallo es articulado?",
    opcionA: {
      label: "Hojas no auriculadas, con margen denticulado; tallo no articulado; rizóforos ventrales",
      keyStep: "B",
      especieId: "ed2_selaginella_muscosa",
    },
    opcionA_prima: {
      label: "Hojas auriculadas, con margen blanco; tallo articulado; rizóforos dorsales extraaxilares",
      keyStep: "B'",
      especieId: "ed2_selaginella_marginata",
    },
  },
};
