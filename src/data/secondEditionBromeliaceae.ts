import { CladoNode, Especie } from "@/types";

function species(
  id: string,
  scientificName: string,
  commonName: string,
  description: string,
  characteristics: string,
  distribution: string
): Especie {
  return {
    id,
    nombreCientifico: scientificName,
    nombreVulgar: commonName,
    familia: "XXXIII. Bromeliaceae",
    descripcion: description,
    caracteristicas: characteristics,
    distribucion: distribution,
  };
}

export const secondEditionBromeliaceaeSpecies: Record<string, Especie> = {
  ed2_tillandsia_usneoides: species(
    "ed2_tillandsia_usneoides", "Tillandsia usneoides", "Barba del monte",
    "Epifita sin raices, de tallos largos, filiformes y colgantes.",
    "Hojas dispersas de hasta 2 cm; flores solitarias con sepalos de 7 mm y petalos amarillentos.",
    "America calida; bosques del Delta."
  ),
  ed2_tillandsia_aeranthos: species(
    "ed2_tillandsia_aeranthos", "Tillandsia aeranthos", "Clavel del aire",
    "Epifita arraigada, con hojas densas y arrosetadas de unos 6 cm.",
    "Espiga multiflora; bracteas y sepalos rojos, petalos azul oscuro de 28 mm y anteras de 4 mm.",
    "Sur de Brasil, Paraguay, Uruguay y nordeste argentino; selvas ribereñas y talares."
  ),
  ed2_tillandsia_bergeri: species(
    "ed2_tillandsia_bergeri", "Tillandsia bergeri", "Tillandsia bergeri",
    "Saxicola arraigada, con vainas anchas y laminas ensiformes acanaladas de hasta 8 cm.",
    "Espiga con seis a diez flores; bracteas y sepalos verdoso rosados y petalos azul claro de 22-30 mm.",
    "Rocas de las sierras de Tandil, Balcarce y Mar del Plata."
  ),
  ed2_tillandsia_bandensis: species(
    "ed2_tillandsia_bandensis", "Tillandsia bandensis", "Clavel del aire",
    "Epifita arraigada, con hojas subuladas de unos 5 cm.",
    "Escapo delgado con una a tres flores; petalos azules o violaceos de 15-16 mm y capsula de unos 30 mm.",
    "America calida; bosques del Delta."
  ),
  ed2_tillandsia_recurvata: species(
    "ed2_tillandsia_recurvata", "Tillandsia recurvata", "Clavel del aire",
    "Epifita arraigada, con hojas disticas y subuladas de 3,5-5 cm.",
    "Escapo con una o dos flores; petalos liguliformes blancos o azules de unos 7 mm y capsula de 20-25 mm.",
    "America calida; frecuente en bosques del Delta y la ribera y en arboles urbanos."
  ),
};

export const secondEditionBromeliaceaeKeyData: Record<string, CladoNode> = {
  ed2_family_bromeliaceae: {
    id: "ed2_family_bromeliaceae", milestone: "Bromeliaceae: Tillandsia", manualPage: 175,
    descripcion: "¿La planta carece de raices y posee tallos largos y colgantes?",
    opcionA: { label: "Si; sin raices, tallos filiformes y flores solitarias", keyStep: "A", especieId: "ed2_tillandsia_usneoides" },
    opcionA_prima: { label: "No; con raices y hojas densas arrosetadas", keyStep: "A'", nextNodeId: "ed2_tillandsia_flower_count" },
  },
  ed2_tillandsia_flower_count: {
    id: "ed2_tillandsia_flower_count", milestone: "Tillandsia: numero de flores", manualPage: 175,
    descripcion: "¿Las espigas poseen numerosas flores o solamente una a tres?",
    opcionA: { label: "Numerosas flores", keyStep: "B", nextNodeId: "ed2_tillandsia_many_color" },
    opcionA_prima: { label: "Una a tres flores", keyStep: "B'", nextNodeId: "ed2_tillandsia_few_petals" },
  },
  ed2_tillandsia_many_color: {
    id: "ed2_tillandsia_many_color", milestone: "Tillandsia: espigas multifloras", manualPage: 176,
    descripcion: "¿Las bracteas y sepalos son rojos o verdoso rosados?",
    opcionA: { label: "Rojos; petalos azul oscuro de 28 mm", keyStep: "C", especieId: "ed2_tillandsia_aeranthos" },
    opcionA_prima: { label: "Verdoso rosados; petalos azul claro de 22-30 mm", keyStep: "C'", especieId: "ed2_tillandsia_bergeri" },
  },
  ed2_tillandsia_few_petals: {
    id: "ed2_tillandsia_few_petals", milestone: "Tillandsia: espigas paucifloras", manualPage: 176,
    descripcion: "¿Los petalos miden 15-16 mm o cerca de 7 mm?",
    opcionA: { label: "15-16 mm, con limbo eliptico azul o violaceo", keyStep: "D", especieId: "ed2_tillandsia_bandensis" },
    opcionA_prima: { label: "Cerca de 7 mm, liguliformes, blancos o azules", keyStep: "D'", especieId: "ed2_tillandsia_recurvata" },
  },
};
