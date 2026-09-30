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

export const secondEditionDavalliaceaePolypodiaceaeSpecies: Record<string, Especie> = {
  ed2_nephrolepis_cordifolia: species(
    "ed2_nephrolepis_cordifolia",
    "Nephrolepis cordifolia",
    "IX. Davalliaceae",
    "Helecho rizomatoso con tubérculos elipsoideos y frondes de 50-80 cm.",
    "Frondes pinnadas; pinnas oblongas, perpendiculares al raquis, auriculadas en la base y aserradas; soros reniformes.",
    "Regiones tropicales; cultivado y subespontáneo en lugares húmedos y sombríos.",
    "Helecho serrucho"
  ),
  ed2_polypodium_gilliesii: species(
    "ed2_polypodium_gilliesii",
    "Polypodium gilliesii",
    "X. Polypodiaceae",
    "Helecho saxícola con frondes delgadas, pinnadas, de hasta 25 cm.",
    "Lámina glabra o con pelos o glándulas; escamas sólo en pecíolo y raquis; segmentos linear-oblongos enteros.",
    "Perú hasta el centro argentino; entre rocas en las sierras bonaerenses."
  ),
  ed2_polypodium_squalidum: species(
    "ed2_polypodium_squalidum",
    "Polypodium squalidum",
    "X. Polypodiaceae",
    "Helecho pequeño con frondes pinnadas de hasta 12 cm.",
    "Frondes gruesas divididas hasta el raquis; segmentos linear-oblongos densamente escamosos en el envés; soros con escamas modificadas.",
    "Sur del Brasil, Bolivia, Paraguay, Uruguay y norte argentino, hasta el Delta del Paraná."
  ),
  ed2_polypodium_argentinum: species(
    "ed2_polypodium_argentinum",
    "Polypodium argentinum",
    "X. Polypodiaceae",
    "Helecho saxícola con frondes pinnatisectas de hasta 15 cm.",
    "Frondes gruesas divididas casi hasta el raquis; segmentos oblongos con escamas ovadas en el envés; soros sin escamas modificadas.",
    "Norte y centro argentino; entre rocas en las sierras bonaerenses."
  ),
  ed2_microgramma_mortoniana: species(
    "ed2_microgramma_mortoniana",
    "Microgramma mortoniana",
    "X. Polypodiaceae",
    "Helecho epífito; el manual aclara el uso anterior del nombre Microgramma vacciniifolia.",
    "Frondes enteras y heteromorfas: estériles elíptico-lanceoladas a orbiculares y fértiles linear-oblongas, con una hilera de soros a cada lado de la vena media.",
    "Sur del Brasil, Paraguay, Uruguay y nordeste argentino, hasta el Delta y la ribera del Plata."
  ),
  ed2_pleopeltis_lanceolata: species(
    "ed2_pleopeltis_lanceolata",
    "Pleopeltis lanceolata",
    "X. Polypodiaceae",
    "Helecho epífito de rizoma rastrero y escamoso.",
    "Frondes enteras, lanceoladas e isomorfas, cubiertas en ambas caras por dos tipos de escamas; pecíolo alado y soros con paráfisis escamoso-peltadas.",
    "Pantropical; frecuente en el norte argentino hasta la ribera del Plata."
  ),
};

function singleSpeciesNode(
  nodeId: string,
  familyName: string,
  manualPage: number,
  speciesId: string
): CladoNode {
  const especie = secondEditionDavalliaceaePolypodiaceaeSpecies[speciesId];
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

export const secondEditionDavalliaceaePolypodiaceaeKeyData: Record<string, CladoNode> = {
  ed2_family_davalliaceae: singleSpeciesNode(
    "ed2_family_davalliaceae",
    "Davalliaceae",
    34,
    "ed2_nephrolepis_cordifolia"
  ),
  ed2_family_polypodiaceae: {
    id: "ed2_family_polypodiaceae",
    milestone: "Polypodiaceae",
    manualPage: 35,
    descripcion: "¿Las frondes son divididas o enteras?",
    opcionA: {
      label: "Pinnatipartidas o pinnatisectas; venas libres o con aréolas costales fértiles",
      keyStep: "A",
      nextNodeId: "ed2_polypodium",
    },
    opcionA_prima: {
      label: "Enteras, lanceoladas u ovado-lanceoladas; venas anastomosadas sin aréolas costales fértiles",
      keyStep: "A'",
      nextNodeId: "ed2_polypodiaceae_entire",
    },
  },
  ed2_polypodiaceae_entire: {
    id: "ed2_polypodiaceae_entire",
    milestone: "Polypodiaceae: frondes enteras",
    manualPage: 35,
    descripcion: "¿Qué revestimiento poseen las frondes y qué tipo de paráfisis acompaña los soros?",
    opcionA: {
      label: "Glabras o con pequeños pelos y escamas; paráfisis filamentosas; pecíolo corto",
      keyStep: "B",
      especieId: "ed2_microgramma_mortoniana",
    },
    opcionA_prima: {
      label: "Ambas caras con dos tipos de escamas; paráfisis escamoso-peltadas; pecíolo con dos alas",
      keyStep: "B'",
      especieId: "ed2_pleopeltis_lanceolata",
    },
  },
  ed2_polypodium: {
    id: "ed2_polypodium",
    milestone: "Polypodium",
    manualPage: 35,
    descripcion: "¿Las frondes son delgadas o gruesas y escamosas?",
    opcionA: {
      label: "Delgadas, glabras o con pelos o glándulas; escamas sólo en pecíolo y raquis",
      keyStep: "A",
      especieId: "ed2_polypodium_gilliesii",
    },
    opcionA_prima: {
      label: "Gruesas y provistas de escamas",
      keyStep: "A'",
      nextNodeId: "ed2_polypodium_scaled",
    },
  },
  ed2_polypodium_scaled: {
    id: "ed2_polypodium_scaled",
    milestone: "Polypodium: frondes escamosas",
    manualPage: 35,
    descripcion: "¿La lámina llega hasta el raquis y los soros poseen escamas modificadas?",
    opcionA: {
      label: "Dividida hasta el raquis; soros con escamas modificadas",
      keyStep: "B",
      especieId: "ed2_polypodium_squalidum",
    },
    opcionA_prima: {
      label: "Dividida hasta cerca del raquis; soros sin escamas modificadas",
      keyStep: "B'",
      especieId: "ed2_polypodium_argentinum",
    },
  },
};
