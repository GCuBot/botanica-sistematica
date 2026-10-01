import { CladoNode, Especie } from "@/types";

function species(
  id: string,
  scientificName: string,
  commonName: string,
  family: string,
  characteristics: string,
  distribution: string
): Especie {
  return {
    id,
    nombreCientifico: scientificName,
    nombreVulgar: commonName,
    familia: family,
    descripcion: characteristics.split(";", 1)[0] + ".",
    caracteristicas: characteristics,
    distribucion: distribution,
  };
}

export const secondEditionZingiberaceaeCannaceaeMarantaceaeSpecies: Record<string, Especie> = {
  ed2_hedychium_coronarium: species(
    "ed2_hedychium_coronarium",
    "Hedychium coronarium",
    "Sultana; cana de ambar; mariposa de ambar",
    "XLI. Zingiberaceae",
    "Hierba perenne rizomatosa de 1 m o mas; hojas sesiles lanceoladas; espigas elipsoidales densas con grandes flores blancas",
    "Asia; cultivada y naturalizada en America calida; pajonales del Delta y de la ribera del Plata."
  ),
  ed2_canna_glauca: species(
    "ed2_canna_glauca",
    "Canna glauca",
    "Achira amarilla",
    "XLII. Cannaceae",
    "Perenne de rizomas largos y tallos de hasta 2 m; hojas lanceoladas glaucas; tres estaminodios externos iguales, labelo bifido y flores amarillas",
    "America calida; cultivada como ornamental y frecuente en los bosques del Delta y de la ribera."
  ),
  ed2_canna_coccinea: species(
    "ed2_canna_coccinea",
    "Canna coccinea",
    "Canna coccinea",
    "XLII. Cannaceae",
    "Perenne de rizomas gruesos y tallos de hasta 1,5 m; hojas elipticas verdes; dos estaminodios externos y labelo entero",
    "America tropical; cultivada como ornamental; Delta y ribera del Plata."
  ),
  ed2_thalia_geniculata: species(
    "ed2_thalia_geniculata",
    "Thalia geniculata",
    "Thalia geniculata",
    "XLIII. Marantaceae",
    "Hierba palustre de hasta 2 m; hojas largamente pecioladas; panojas laxas con internodios mayores de 1 cm y flores azules",
    "America calida; rara en la region, en zanjas."
  ),
  ed2_thalia_multiflora: species(
    "ed2_thalia_multiflora",
    "Thalia multiflora",
    "Thalia multiflora",
    "XLIII. Marantaceae",
    "Hierba palustre de hasta 1,5 m; hojas ovado-lanceoladas; panojas espiciformes contraidas y flores violaceas",
    "Brasil, Uruguay y norte de Argentina; comun en zanjas junto a las vias ferreas al norte de la Capital Federal."
  ),
};

export const secondEditionZingiberaceaeCannaceaeMarantaceaeKeyData: Record<string, CladoNode> = {
  ed2_family_zingiberaceae: {
    id: "ed2_family_zingiberaceae",
    milestone: "Zingiberaceae",
    manualPage: 204,
    descripcion: "Zingiberaceae: unica especie tratada para la region.",
    opcionA: {
      label: "Identificar como Hedychium coronarium",
      keyStep: "1",
      especieId: "ed2_hedychium_coronarium",
    },
    opcionA_prima: {
      label: "Identificar como Hedychium coronarium",
      keyStep: "1",
      especieId: "ed2_hedychium_coronarium",
    },
  },
  ed2_family_cannaceae: {
    id: "ed2_family_cannaceae",
    milestone: "Cannaceae: Canna",
    manualPage: 206,
    descripcion: "¿Las hojas son lanceoladas y glaucas o elipticas y verdes?",
    opcionA: {
      label: "Lanceoladas y glaucas; tres estaminodios externos iguales, labelo bifido y flores amarillas",
      keyStep: "A",
      especieId: "ed2_canna_glauca",
    },
    opcionA_prima: {
      label: "Elipticas y verdes; dos estaminodios externos y labelo entero",
      keyStep: "A'",
      especieId: "ed2_canna_coccinea",
    },
  },
  ed2_family_marantaceae: {
    id: "ed2_family_marantaceae",
    milestone: "Marantaceae: Thalia",
    manualPage: 207,
    descripcion: "¿Las panojas son laxas o espiciformes y contraidas?",
    opcionA: {
      label: "Laxas, con internodios mayores de 1 cm; planta de hasta 2 m y hojas largamente pecioladas",
      keyStep: "A",
      especieId: "ed2_thalia_geniculata",
    },
    opcionA_prima: {
      label: "Espiciformes y contraidas; planta de hasta 1,5 m y hojas ovado-lanceoladas",
      keyStep: "A'",
      especieId: "ed2_thalia_multiflora",
    },
  },
};
