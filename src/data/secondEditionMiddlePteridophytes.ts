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

export const secondEditionMiddlePteridophyteSpecies: Record<string, Especie> = {
  ed2_asplenium_sellowianum: species(
    "ed2_asplenium_sellowianum", "Asplenium sellowianum", "XII. Aspleniaceae",
    "Helecho de rizoma cilíndrico, con pocas escamas y frondes arrosetadas.",
    "Frondes pinnadas de 25-60 cm; 30-45 pares de pinnas oblongas, asimétricas y aserrado-dentadas.",
    "Sur del Brasil hasta los bosques húmedos de la ribera del Plata."
  ),
  ed2_asplenium_ulbrichtii: species(
    "ed2_asplenium_ulbrichtii", "Asplenium ulbrichtii", "XII. Aspleniaceae",
    "Helecho de rizoma escamoso y frondes arrosetadas.",
    "Frondes pinnadas de 15-30 cm; 30-40 pares de pinnas rómbico-trapezoidales, asimétricas y profundamente aserradas.",
    "Brasil, Uruguay y nordeste argentino, hasta el Delta y la ribera del Plata."
  ),
  ed2_woodsia_montevidensis: species(
    "ed2_woodsia_montevidensis", "Woodsia montevidensis", "XIII. Athyriaceae",
    "Helecho saxícola pequeño, con rizoma oblicuo y frondes arrosetadas de 15-30 cm.",
    "Frondes bipinnadas y pilosas; pínnulas ovadas crenadas, con pelos glandulares; soros circulares con indusio en forma de copa.",
    "Perú, Bolivia, sur del Brasil, Uruguay y norte argentino, hasta las sierras bonaerenses."
  ),
  ed2_athyrium_decurtatum_platense: species(
    "ed2_athyrium_decurtatum_platense", "Athyrium decurtatum var. platense", "XIII. Athyriaceae",
    "Helecho terrestre con rizoma cilíndrico erecto y frondes de 50-100 cm.",
    "Lámina ovada y bipinnatipartida; pinnas oblongo-lanceoladas; soros alargados o reniformes con indusio persistente.",
    "Variedad endémica de las selvas marginales del Delta y la ribera del Plata."
  ),
  ed2_goniopteris_burkartii: species(
    "ed2_goniopteris_burkartii", "Goniopteris burkartii", "XIV. Thelypteridaceae",
    "Helecho con frondes subarrosetadas de hasta 70 cm.",
    "Siete a nueve pares de pinnas separados 2-3 cm, glabras, oblongo-lanceoladas y aserrado-lobadas; soros sin indusio.",
    "Endémico del Delta y la ribera del Plata."
  ),
  ed2_goniopteris_riograndensis: species(
    "ed2_goniopteris_riograndensis", "Goniopteris riograndensis", "XIV. Thelypteridaceae",
    "Helecho de rizoma corto y frondes fasciculadas de hasta 50 cm.",
    "Nueve a dieciséis pares de pinnas separados 1-1,5 cm; raquis con pelos ramificados; soros circulares sin indusio.",
    "Sur del Brasil, Paraguay, Uruguay y nordeste argentino, hasta el Delta, la ribera del Plata y Martín García."
  ),
  ed2_thelypteris_cabrerae: species(
    "ed2_thelypteris_cabrerae", "Thelypteris cabrerae", "XIV. Thelypteridaceae",
    "Helecho palustre de rizoma rastrero delgado y laxamente escamoso.",
    "Hasta quince pares de pinnas; soros uniseriados a mitad de distancia entre la vena media y el margen.",
    "Endémico de General Madariaga; crece en pantanos ácidos."
  ),
  ed2_thelypteris_argentina: species(
    "ed2_thelypteris_argentina", "Thelypteris argentina", "XIV. Thelypteridaceae",
    "Helecho de rizoma erecto u oblicuo y frondes de hasta 60 cm.",
    "Veinte a treinta pares de pinnas oblongo-lanceoladas de hasta 12 mm de ancho; soros próximos al margen.",
    "Norte y centro de la Argentina, hasta el Delta."
  ),
  ed2_thelypteris_rivularioides_arechavaletae: species(
    "ed2_thelypteris_rivularioides_arechavaletae", "Thelypteris rivularioides var. arechavaletae", "XIV. Thelypteridaceae",
    "Helecho palustre de rizoma rastrero delgado y frondes de hasta 70 cm.",
    "Veinte a treinta pares de pinnas deltoideo-lanceoladas de hasta 2 cm de ancho; soros próximos al margen.",
    "Sur del Brasil, Uruguay y nordeste argentino, hasta el Delta."
  ),
  ed2_cyclosorus_gongylodes: species(
    "ed2_cyclosorus_gongylodes", "Cyclosorus gongylodes", "XIV. Thelypteridaceae",
    "Helecho de rizoma rastrero con frondes de hasta 1,20 m.",
    "Frondes pinnadas y glabras; pinnas lanceoladas pinnatífidas; soros con indusio pardo-rojizo persistente.",
    "Regiones cálidas; frecuente en el Delta."
  ),
  ed2_elaphoglossum_gayanum: species(
    "ed2_elaphoglossum_gayanum", "Elaphoglossum gayanum", "XV. Lomariopsidaceae",
    "Helecho saxícola de rizoma largo, ramificado y escamoso.",
    "Frondes simples y dimorfas: estériles oval-lanceoladas y fértiles más largas y linear-lanceoladas; esporangios cubren todo el envés.",
    "América del Sur; frecuente en grietas húmedas de las sierras bonaerenses."
  ),
};

function singleSpeciesNode(nodeId: string, familyName: string, manualPage: number, speciesId: string): CladoNode {
  const especie = secondEditionMiddlePteridophyteSpecies[speciesId];
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

export const secondEditionMiddlePteridophyteKeyData: Record<string, CladoNode> = {
  ed2_family_aspleniaceae: {
    id: "ed2_family_aspleniaceae", milestone: "Aspleniaceae", manualPage: 39,
    descripcion: "¿Cuál es el tamaño de la fronde y la forma de las pinnas?",
    opcionA: { label: "Frondes de 25-60 cm; pinnas oblongas de 1,5-3,5 cm", keyStep: "A", especieId: "ed2_asplenium_sellowianum" },
    opcionA_prima: { label: "Frondes de 15-30 cm; pinnas rómbico-trapezoidales de unos 0,5 cm", keyStep: "A'", especieId: "ed2_asplenium_ulbrichtii" },
  },
  ed2_family_athyriaceae: {
    id: "ed2_family_athyriaceae", milestone: "Athyriaceae", manualPage: 39,
    descripcion: "¿Los soros son circulares o alargados?",
    opcionA: { label: "Circulares, con indusio basal en forma de copa", keyStep: "A", especieId: "ed2_woodsia_montevidensis" },
    opcionA_prima: { label: "Oblongos o reniformes", keyStep: "A'", especieId: "ed2_athyrium_decurtatum_platense" },
  },
  ed2_family_thelypteridaceae: {
    id: "ed2_family_thelypteridaceae", milestone: "Thelypteridaceae", manualPage: 40,
    descripcion: "¿Los soros carecen de indusio o poseen indusio piloso?",
    opcionA: { label: "Circulares, sin indusio; frondes unipinnadas o bipinnatífidas", keyStep: "A", nextNodeId: "ed2_goniopteris" },
    opcionA_prima: { label: "Con indusio reniforme o semilunar de margen piloso", keyStep: "A'", nextNodeId: "ed2_thelypteridaceae_indusiate" },
  },
  ed2_thelypteridaceae_indusiate: {
    id: "ed2_thelypteridaceae_indusiate", milestone: "Thelypteridaceae: soros con indusio", manualPage: 40,
    descripcion: "¿Las frondes son bipinnatífidas y pilosas o bipinnadas y glabras?",
    opcionA: { label: "Bipinnatífidas y pilosas", keyStep: "B", nextNodeId: "ed2_thelypteris" },
    opcionA_prima: { label: "Bipinnadas y glabras", keyStep: "B'", especieId: "ed2_cyclosorus_gongylodes" },
  },
  ed2_goniopteris: {
    id: "ed2_goniopteris", milestone: "Goniopteris", manualPage: 41,
    descripcion: "¿Cuántos pares de pinnas tiene la fronde y qué separación presentan?",
    opcionA: { label: "Siete a nueve pares, separados 2-3 cm", keyStep: "A", especieId: "ed2_goniopteris_burkartii" },
    opcionA_prima: { label: "Nueve a dieciséis pares, separados 1-1,5 cm", keyStep: "A'", especieId: "ed2_goniopteris_riograndensis" },
  },
  ed2_thelypteris: {
    id: "ed2_thelypteris", milestone: "Thelypteris", manualPage: 41,
    descripcion: "¿Dónde se ubican los soros y cuántos pares de pinnas posee la fronde?",
    opcionA: { label: "A mitad de distancia entre vena media y margen; hasta quince pares de pinnas", keyStep: "A", especieId: "ed2_thelypteris_cabrerae" },
    opcionA_prima: { label: "Próximos al margen; veinte a treinta pares de pinnas", keyStep: "A'", nextNodeId: "ed2_thelypteris_pinnae" },
  },
  ed2_thelypteris_pinnae: {
    id: "ed2_thelypteris_pinnae", milestone: "Thelypteris: forma de las pinnas", manualPage: 41,
    descripcion: "¿Las pinnas son oblongo-lanceoladas o deltoideo-lanceoladas?",
    opcionA: { label: "Oblongo-lanceoladas, de hasta 12 mm de ancho", keyStep: "B", especieId: "ed2_thelypteris_argentina" },
    opcionA_prima: { label: "Deltoideo-lanceoladas, de hasta 2 cm de ancho", keyStep: "B'", especieId: "ed2_thelypteris_rivularioides_arechavaletae" },
  },
  ed2_family_lomariopsidaceae: singleSpeciesNode("ed2_family_lomariopsidaceae", "Lomariopsidaceae", 42, "ed2_elaphoglossum_gayanum"),
};
