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
    familia: "LXXX. Zygophyllaceae",
    descripcion: characteristics.split(";", 1)[0] + ".",
    caracteristicas: characteristics,
    distribucion: distribution,
  };
}

export const secondEditionZygophyllaceaeSpecies: Record<string, Especie> = {
  ed2_tribulus_terrestris: species(
    "ed2_tribulus_terrestris",
    "Tribulus terrestris",
    "Tribulus terrestris",
    "Hierba anual rastrera, sedoso-pubescente; hojas de 2-6 cm con 5-7 pares de foliolos oblongos enteros; flores amarillas; fruto formado por 5 mericarpios con dos espinas largas y varias espinitas cortas",
    "Europa; adventicia en America. En suelos arenosos y secos; rara en la region."
  ),
  ed2_porlieria_microphylla: species(
    "ed2_porlieria_microphylla",
    "Porlieria microphylla",
    "Chucupi",
    "Arbusto intrincadamente ramoso de 1-3 m; hojas pubescentes paripinadas con 5-20 pares de foliolos oblongos, enteros y muy apretados; flores amarillas tetrameras; cocos negros o pardos",
    "Bolivia y norte y centro de Argentina; barrancas del Parana."
  ),
};

export const secondEditionZygophyllaceaeKeyData: Record<string, CladoNode> = {
  ed2_family_zygophyllaceae: {
    id: "ed2_family_zygophyllaceae",
    milestone: "LXXX. Zygophyllaceae",
    manualPage: 365,
    descripcion: "La planta es hierba rastrera o arbusto?",
    opcionA: {
      label: "Hierba rastrera; estambres sin escama en la base",
      keyStep: "A",
      especieId: "ed2_tribulus_terrestris",
    },
    opcionA_prima: {
      label: "Arbusto; estambres con escama en la base",
      keyStep: "A'",
      especieId: "ed2_porlieria_microphylla",
    },
  },
};
