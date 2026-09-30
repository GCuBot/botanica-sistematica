import { CladoNode, Especie } from "@/types";

type OptionSpec = readonly [keyStep: string, label: string, next: string];
interface BranchSpec {
  page: number;
  description: string;
  optionA: OptionSpec;
  optionAPrime: OptionSpec;
}

function family(id: string, number: string, name: string, page: number): Especie {
  return {
    id,
    nombreCientifico: name,
    nombreVulgar: name,
    familia: `${number}. ${name}`,
    descripcion: "Familia alcanzada mediante la clave general de la segunda edición.",
    caracteristicas: "Continuará en la clave propia de la familia hasta género y especie.",
    distribucion: `Manual de Cabrera y Zardini, segunda edición, página ${page}.`,
  };
}

export const secondEditionDicotGroupDFamilies: Record<string, Especie> = {
  ed2_loranthaceae: family("ed2_loranthaceae", "LII", "Loranthaceae", 231),
  ed2_saxifragaceae: family("ed2_saxifragaceae", "LXXIII", "Saxifragaceae", 308),
  ed2_loasaceae: family("ed2_loasaceae", "CII", "Loasaceae", 430),
  ed2_begoniaceae: family("ed2_begoniaceae", "CIII", "Begoniaceae", 432),
  ed2_cactaceae: family("ed2_cactaceae", "CIV", "Cactaceae", 433),
  ed2_combretaceae: family("ed2_combretaceae", "CVII", "Combretaceae", 443),
  ed2_myrtaceae: family("ed2_myrtaceae", "CVIII", "Myrtaceae", 444),
  ed2_melastomataceae: family("ed2_melastomataceae", "CIX", "Melastomataceae", 447),
  ed2_onagraceae: family("ed2_onagraceae", "CX", "Onagraceae", 449),
  ed2_haloragaceae: family("ed2_haloragaceae", "CXI", "Haloragaceae", 453),
  ed2_araliaceae: family("ed2_araliaceae", "CXII", "Araliaceae", 454),
  ed2_umbelliferae: family("ed2_umbelliferae", "CXIII", "Umbelliferae", 455),
};

function terminal(nodeId: string, familyId: string, page: number): CladoNode {
  const especie = secondEditionDicotGroupDFamilies[familyId];
  return {
    id: nodeId,
    milestone: especie.nombreCientifico,
    manualPage: page,
    descripcion: `${especie.nombreCientifico}: continuar con la clave propia de la familia.`,
    opcionA: { label: `Continuar en ${especie.nombreCientifico}`, keyStep: "Familia", especieId: familyId },
    opcionA_prima: { label: `Continuar en ${especie.nombreCientifico}`, keyStep: "Familia", especieId: familyId },
    especie,
  };
}

const secondEditionDicotGroupDBranchSpecs: Record<string, BranchSpec> = {
  ed2_dicot_group_d_a: {
    page: 17,
    description: "Grupo D: ¿la planta posee pelos urticantes?",
    optionA: ["A", "Con pelos urticantes", "ed2_family_loasaceae"],
    optionAPrime: ["A'", "Sin pelos urticantes", "ed2_dicot_group_d_b"],
  },
  ed2_dicot_group_d_b: {
    page: 17,
    description: "Sin pelos urticantes, ¿hay más o menos de doce estambres?",
    optionA: ["B", "Más de doce estambres", "ed2_dicot_group_d_c"],
    optionAPrime: ["B'", "Menos de doce estambres", "ed2_dicot_group_d_e"],
  },
  ed2_dicot_group_d_c: {
    page: 17,
    description: "Con más de doce estambres, ¿la planta es crasa, sin hojas y espinosa?",
    optionA: ["C", "Crasa, sin hojas, generalmente espinosa; flores espiraladas", "ed2_family_cactaceae"],
    optionAPrime: ["C'", "Con hojas y sin espinas", "ed2_dicot_group_d_d"],
  },
  ed2_dicot_group_d_d: {
    page: 17,
    description: "Con hojas y sin espinas, ¿es hierba o árbol?",
    optionA: ["D", "Hierba monoica con flores unisexuales", "ed2_family_begoniaceae"],
    optionAPrime: ["D'", "Árbol con flores hermafroditas", "ed2_family_myrtaceae"],
  },
  ed2_dicot_group_d_e: {
    page: 17,
    description: "Con menos de doce estambres, ¿el ovario es unilocular o plurilocular?",
    optionA: ["E", "Ovario unilocular", "ed2_dicot_group_d_f"],
    optionAPrime: ["E'", "Ovario con dos a numerosos lóculos", "ed2_dicot_group_d_g"],
  },
  ed2_dicot_group_d_f: {
    page: 17,
    description: "Con ovario unilocular, ¿la planta es parásita y tiene flores grandes?",
    optionA: ["F", "Parásita, con flores grandes y vivamente coloreadas", "ed2_family_loranthaceae"],
    optionAPrime: ["F'", "No parásita, con flores pequeñas y verdosas", "ed2_family_combretaceae"],
  },
  ed2_dicot_group_d_g: {
    page: 17,
    description: "¿Las flores pequeñas forman umbelas o capítulos muy densos?",
    optionA: ["G", "Sí; umbelas simples o compuestas, o capítulos globosos o alargados", "ed2_dicot_group_d_h"],
    optionAPrime: ["G'", "No; flores pequeñas o grandes dispuestas de otra forma", "ed2_dicot_group_d_i"],
  },
  ed2_dicot_group_d_h: {
    page: 17,
    description: "En umbelas o capítulos, ¿el ovario tiene cinco o dos carpelos?",
    optionA: ["H", "Ovario pentalocular y fruto baya", "ed2_family_araliaceae"],
    optionAPrime: ["H'", "Ovario bicarpelar y fruto esquizocarpo", "ed2_family_umbelliferae"],
  },
  ed2_dicot_group_d_i: {
    page: 18,
    description: "¿Es acuática semisumergida con hojas verticiladas y pinnatisectas?",
    optionA: ["I", "Sí; segmentos foliares lineares", "ed2_family_haloragaceae"],
    optionAPrime: ["I'", "No; terrestre, rara vez acuática y entonces con hojas enteras flotantes", "ed2_dicot_group_d_j"],
  },
  ed2_dicot_group_d_j: {
    page: 18,
    description: "¿Las anteras abren longitudinalmente o por poros apicales?",
    optionA: ["J", "Dehiscencia longitudinal", "ed2_dicot_group_d_k"],
    optionAPrime: ["J'", "Dehiscencia por poros apicales", "ed2_family_melastomataceae"],
  },
  ed2_dicot_group_d_k: {
    page: 18,
    description: "Con dehiscencia longitudinal, ¿cómo está unido el ovario al receptáculo?",
    optionA: ["K", "Ovario bi- o trilocular, unido en su mitad inferior; flores pentámeras; arbusto", "ed2_family_saxifragaceae"],
    optionAPrime: ["K'", "Ovario con cuatro a seis lóculos, totalmente unido; flores generalmente tetrámeras", "ed2_family_onagraceae"],
  },
};

function buildNode(id: string, spec: BranchSpec): CladoNode {
  const [keyA, labelA, nextA] = spec.optionA;
  const [keyB, labelB, nextB] = spec.optionAPrime;
  return {
    id,
    milestone: id === "ed2_dicot_group_d_a" ? "Grupo D" : undefined,
    manualPage: spec.page,
    descripcion: spec.description,
    opcionA: { label: labelA, keyStep: keyA, nextNodeId: nextA },
    opcionA_prima: { label: labelB, keyStep: keyB, nextNodeId: nextB },
  };
}

export const secondEditionDicotGroupDKeyData: Record<string, CladoNode> = {
  ...Object.fromEntries(
    Object.entries(secondEditionDicotGroupDBranchSpecs).map(([id, spec]) => [id, buildNode(id, spec)])
  ),
  ed2_family_loranthaceae: terminal("ed2_family_loranthaceae", "ed2_loranthaceae", 231),
  ed2_family_saxifragaceae: terminal("ed2_family_saxifragaceae", "ed2_saxifragaceae", 308),
  ed2_family_loasaceae: terminal("ed2_family_loasaceae", "ed2_loasaceae", 430),
  ed2_family_begoniaceae: terminal("ed2_family_begoniaceae", "ed2_begoniaceae", 432),
  ed2_family_cactaceae: terminal("ed2_family_cactaceae", "ed2_cactaceae", 433),
  ed2_family_combretaceae: terminal("ed2_family_combretaceae", "ed2_combretaceae", 443),
  ed2_family_myrtaceae: terminal("ed2_family_myrtaceae", "ed2_myrtaceae", 444),
  ed2_family_melastomataceae: terminal("ed2_family_melastomataceae", "ed2_melastomataceae", 447),
  ed2_family_onagraceae: terminal("ed2_family_onagraceae", "ed2_onagraceae", 449),
  ed2_family_haloragaceae: terminal("ed2_family_haloragaceae", "ed2_haloragaceae", 453),
  ed2_family_araliaceae: terminal("ed2_family_araliaceae", "ed2_araliaceae", 454),
  ed2_family_umbelliferae: terminal("ed2_family_umbelliferae", "ed2_umbelliferae", 455),
};
