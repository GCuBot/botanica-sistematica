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

export const secondEditionLatePteridophyteSpecies: Record<string, Especie> = {
  ed2_blechnum_chilense: species(
    "ed2_blechnum_chilense", "Blechnum chilense", "XVI. Blechnaceae",
    "Helecho robusto con rizoma erecto y leñoso, cubierto por restos de pecíolos y escamas.",
    "Dos tipos de frondes: fértiles más largas y con pinnas lineares; estériles con pinnas oblongas; cenosoros marginales.",
    "América austral; sierras de Tandil y Ventana."
  ),
  ed2_blechnum_brasiliense: species(
    "ed2_blechnum_brasiliense", "Blechnum brasiliense", "XVI. Blechnaceae",
    "Helecho robusto con rizoma ascendente y alargado.",
    "Frondes uniformes de 70-100 cm, pinnatipartidas; 30-50 pares de pinnas oblongas, acuminadas y finamente aserradas.",
    "Brasil, Bolivia, Perú y nordeste argentino, hasta el Delta."
  ),
  ed2_blechnum_laevigatum: species(
    "ed2_blechnum_laevigatum", "Blechnum laevigatum", "XVI. Blechnaceae",
    "Helecho de rizoma ascendente con escamas castañas.",
    "Frondes uniformes de 15-30 cm; pinnas lanceoladas, no auriculadas ni aserradas; indusio piloso.",
    "Sur del Brasil, Uruguay y norte argentino, hasta las sierras bonaerenses."
  ),
  ed2_blechnum_auriculatum: species(
    "ed2_blechnum_auriculatum", "Blechnum auriculatum", "XVI. Blechnaceae",
    "Helecho de rizoma corto y frondes uniformes de 20-40 cm.",
    "Pinnas lanceoladas, enteras o denticuladas, notablemente ensanchadas y auriculadas en la base; indusio glabro.",
    "América del Sur templada; frecuente en el Delta, la ribera del Plata y las sierras bonaerenses."
  ),
  ed2_pilularia_mandonii: species(
    "ed2_pilularia_mandonii", "Pilularia mandonii", "XVII. Marsileaceae",
    "Pequeña planta palustre de rizoma filiforme.",
    "Hojas lineares y sésiles de hasta 6 cm; esporocarpos esféricos, pedicelados, de 3-3,5 mm.",
    "América del Sur; rara en campos inundados al comenzar la primavera."
  ),
  ed2_marsilea_concinna: species(
    "ed2_marsilea_concinna", "Marsilea concinna", "XVII. Marsileaceae",
    "Pequeña planta palustre de rizoma delgado y largos pecíolos.",
    "Hojas con cuatro folíolos flotantes y glabros; esporocarpos ovoides rojizos nacidos en los nudos.",
    "América austral; común en charcos de agua estancada.",
    "Trébol de cuatro hojas"
  ),
  ed2_salvinia_rotundifolia: species(
    "ed2_salvinia_rotundifolia", "Salvinia rotundifolia", "XVIII. Salviniaceae",
    "Helecho acuático flotante, de hojas suborbiculares plegadas o planas.",
    "Papilas foliares terminadas en cuatro pelos que no se unen por sus extremos; esporocarpos en racimos.",
    "América tropical, hasta lagunas y ríos de la provincia de Buenos Aires.",
    "Helechito de agua"
  ),
  ed2_salvinia_herzogii: species(
    "ed2_salvinia_herzogii", "Salvinia herzogii", "XVIII. Salviniaceae",
    "Helecho acuático flotante, con hojas suborbiculares acorazonadas en la base.",
    "Papilas foliares terminadas en cuatro pelos unidos por sus extremos; esporocarpos formando glomérulos.",
    "Sur del Brasil, Uruguay, Paraguay y nordeste argentino, hasta el Río de la Plata.",
    "Helechito de agua"
  ),
  ed2_azolla_caroliniana: species(
    "ed2_azolla_caroliniana", "Azolla caroliniana", "XIX. Azollaceae",
    "Pequeño helecho acuático flotante de cerca de 1 cm.",
    "Papilas epidérmicas independientes; gloquidios septados; macrosporo de aspecto uniformemente granulado.",
    "América; común en lagunas y zanjas.",
    "Helechito de agua"
  ),
  ed2_azolla_filiculoides: species(
    "ed2_azolla_filiculoides", "Azolla filiculoides", "XIX. Azollaceae",
    "Helecho acuático flotante de 1-5 cm, con numerosas raíces simples.",
    "Células epidérmicas alargadas en papilas; gloquidios no septados o con uno o dos septos apicales; protuberancias del macrosporo cortas y separadas.",
    "América; común en lagunas y zanjas.",
    "Helechito de agua"
  ),
};

export const secondEditionLatePteridophyteKeyData: Record<string, CladoNode> = {
  ed2_family_blechnaceae: {
    id: "ed2_family_blechnaceae", milestone: "Blechnaceae", manualPage: 43,
    descripcion: "¿La planta posee frondes fértiles y estériles diferentes?",
    opcionA: { label: "Dos tipos de frondes; las fértiles más largas; cenosoros marginales", keyStep: "A", especieId: "ed2_blechnum_chilense" },
    opcionA_prima: { label: "Frondes más o menos uniformes; cenosoros costales o mediales", keyStep: "A'", nextNodeId: "ed2_blechnum_uniform" },
  },
  ed2_blechnum_uniform: {
    id: "ed2_blechnum_uniform", milestone: "Blechnum: frondes uniformes", manualPage: 43,
    descripcion: "¿La planta es robusta, con frondes largas y pinnas aserradas?",
    opcionA: { label: "Robusta; frondes de 70-100 cm; pinnas con margen aserrado", keyStep: "B", especieId: "ed2_blechnum_brasiliense" },
    opcionA_prima: { label: "Mucho menor; pinnas nunca aserradas", keyStep: "B'", nextNodeId: "ed2_blechnum_small" },
  },
  ed2_blechnum_small: {
    id: "ed2_blechnum_small", milestone: "Blechnum: plantas menores", manualPage: 43,
    descripcion: "¿El indusio es piloso y las pinnas carecen de aurículas?",
    opcionA: { label: "Indusio piloso; pinnas no auriculadas en la base", keyStep: "C", especieId: "ed2_blechnum_laevigatum" },
    opcionA_prima: { label: "Indusio glabro; pinnas notablemente auriculadas en la base", keyStep: "C'", especieId: "ed2_blechnum_auriculatum" },
  },
  ed2_family_marsileaceae: {
    id: "ed2_family_marsileaceae", milestone: "Marsileaceae", manualPage: 44,
    descripcion: "¿Las hojas son lineares o poseen cuatro folíolos?",
    opcionA: { label: "Lineares y sésiles", keyStep: "A", especieId: "ed2_pilularia_mandonii" },
    opcionA_prima: { label: "Tetrafolioladas y pecioladas", keyStep: "A'", especieId: "ed2_marsilea_concinna" },
  },
  ed2_family_salviniaceae: {
    id: "ed2_family_salviniaceae", milestone: "Salviniaceae", manualPage: 45,
    descripcion: "¿Los cuatro pelos de cada papila foliar se unen por sus extremos?",
    opcionA: { label: "No se unen; esporocarpos formando racimos", keyStep: "A", especieId: "ed2_salvinia_rotundifolia" },
    opcionA_prima: { label: "Se unen por sus extremos; esporocarpos formando glomérulos", keyStep: "A'", especieId: "ed2_salvinia_herzogii" },
  },
  ed2_family_azollaceae: {
    id: "ed2_family_azollaceae", milestone: "Azollaceae", manualPage: 47,
    descripcion: "¿Cómo son las papilas epidérmicas y los gloquidios de las másulas?",
    opcionA: { label: "Papilas independientes; gloquidios septados; macrosporo uniformemente granulado", keyStep: "A", especieId: "ed2_azolla_caroliniana" },
    opcionA_prima: { label: "Células alargadas en papilas; gloquidios no septados; protuberancias del macrosporo separadas", keyStep: "A'", especieId: "ed2_azolla_filiculoides" },
  },
};
