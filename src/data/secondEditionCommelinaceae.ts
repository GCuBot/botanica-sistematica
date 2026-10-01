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
    familia: "XXXIV. Commelinaceae",
    descripcion: description,
    caracteristicas: characteristics,
    distribucion: distribution,
  };
}

export const secondEditionCommelinaceaeSpecies: Record<string, Especie> = {
  ed2_commelina_diffusa: species(
    "ed2_commelina_diffusa", "Commelina diffusa", "Flor de Santa Lucia",
    "Hierba perenne ascendente y casi glabra, con hojas lanceoladas de 5-12 cm.",
    "Ovario con loculos ventrales biovulados; capsula de cinco semillas; espata plegada con bordes libres y flores azules grandes.",
    "Cosmopolita; Delta y ribera del Plata."
  ),
  ed2_commelina_erecta: species(
    "ed2_commelina_erecta", "Commelina erecta", "Flor de Santa Lucia",
    "Hierba perenne ascendente, glabra o laxamente puberula, con hojas de 3-10 cm.",
    "Todos los loculos unioovulados; capsula de tres semillas; espata cuculada con bordes parcialmente soldados y flores azules.",
    "America; norte de la provincia de Buenos Aires."
  ),
  ed2_tradescantia_fluminensis: species(
    "ed2_tradescantia_fluminensis", "Tradescantia fluminensis", "Tradescantia fluminensis",
    "Hierba perenne ascendente, glabra o algo pubescente, con hojas ovadas.",
    "Sepalos de 5-6,5 mm, pubescentes sobre la nervadura y con pelos capitados basales; petalos blancos de 4-6,5 mm.",
    "Sur de Brasil, Paraguay, Uruguay y norte argentino hasta Buenos Aires; lugares humedos y sombrios."
  ),
  ed2_tradescantia_anagallidea: species(
    "ed2_tradescantia_anagallidea", "Tradescantia anagallidea", "Tradescantia anagallidea",
    "Hierba perenne erecta, glabra, de 10-25 cm, con hojas ovadas.",
    "Sepalos de 3-4 mm con pelos capitados solamente; petalos blancos de 3,5-4 mm.",
    "Sur de Brasil, Paraguay, Uruguay y nordeste argentino; isla Martin Garcia."
  ),
  ed2_tripogandra_radiata: species(
    "ed2_tripogandra_radiata", "Tripogandra radiata", "Tripogandra radiata",
    "Hierba perenne rastrera, con tallos floriferos erguidos y hojas ovadas semiamplexicaules.",
    "Estambres episepalos barbados y epipetalos glabros; petalos blancos o rosados de 3,5-6 mm; pedicelos y sepalos con pelos capitados.",
    "Sudamerica; arenales de la isla Martin Garcia."
  ),
  ed2_tripogandra_elongata: species(
    "ed2_tripogandra_elongata", "Tripogandra elongata", "Tripogandra elongata",
    "Hierba perenne decumbente, glabra o apenas pubescente, con hojas elipticas de 2-9 cm.",
    "Todos los estambres barbados; petalos rosa intenso de 10-11 mm; pedunculos, pedicelos y sepalos casi glabros.",
    "America calida; frecuente en bosques del Delta y la ribera."
  ),
};

export const secondEditionCommelinaceaeKeyData: Record<string, CladoNode> = {
  ed2_family_commelinaceae: {
    id: "ed2_family_commelinaceae", milestone: "Commelinaceae", manualPage: 177,
    descripcion: "¿Las flores son zigomorfas o actinomorfas?",
    opcionA: { label: "Zigomorfas; tres estambres fertiles y tres estaminodios", keyStep: "A", nextNodeId: "ed2_commelina" },
    opcionA_prima: { label: "Actinomorfas; seis estambres fertiles", keyStep: "A'", nextNodeId: "ed2_commelinaceae_stamen_length" },
  },
  ed2_commelinaceae_stamen_length: {
    id: "ed2_commelinaceae_stamen_length", milestone: "Commelinaceae: estambres", manualPage: 177,
    descripcion: "¿Los seis estambres poseen igual longitud?",
    opcionA: { label: "Si; todos de igual longitud", keyStep: "B", nextNodeId: "ed2_tradescantia" },
    opcionA_prima: { label: "No; tres largos y tres cortos", keyStep: "B'", nextNodeId: "ed2_tripogandra" },
  },
  ed2_commelina: {
    id: "ed2_commelina", milestone: "Commelina", manualPage: 178,
    descripcion: "¿Los loculos ventrales del ovario poseen dos ovulos o todos los loculos uno?",
    opcionA: { label: "Loculos ventrales biovulados; capsula con cinco semillas y espata de bordes libres", keyStep: "A", especieId: "ed2_commelina_diffusa" },
    opcionA_prima: { label: "Todos unioovulados; capsula con tres semillas y espata de bordes soldados", keyStep: "A'", especieId: "ed2_commelina_erecta" },
  },
  ed2_tradescantia: {
    id: "ed2_tradescantia", milestone: "Tradescantia", manualPage: 179,
    descripcion: "¿Los sepalos miden 5-6,5 mm o 3-4 mm?",
    opcionA: { label: "5-6,5 mm; pubescencia sobre la nervadura y pelos capitados basales", keyStep: "A", especieId: "ed2_tradescantia_fluminensis" },
    opcionA_prima: { label: "3-4 mm; solamente pelos capitados", keyStep: "A'", especieId: "ed2_tradescantia_anagallidea" },
  },
  ed2_tripogandra: {
    id: "ed2_tripogandra", milestone: "Tripogandra", manualPage: 180,
    descripcion: "¿Solamente los estambres episepalos son barbados o lo son todos?",
    opcionA: { label: "Solo los episepalos; petalos blancos o rosados de 3,5-6 mm", keyStep: "A", especieId: "ed2_tripogandra_radiata" },
    opcionA_prima: { label: "Todos barbados; petalos rosa intenso de 10-11 mm", keyStep: "A'", especieId: "ed2_tripogandra_elongata" },
  },
};
