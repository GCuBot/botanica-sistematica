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

export const secondEditionDicotGroupC2Families: Record<string, Especie> = {
  ed2_berberidaceae: family("ed2_berberidaceae", "LXVI", "Berberidaceae", 282),
  ed2_lauraceae: family("ed2_lauraceae", "LXVII", "Lauraceae", 284),
  ed2_zygophyllaceae: family("ed2_zygophyllaceae", "LXXX", "Zygophyllaceae", 365),
  ed2_anacardiaceae: family("ed2_anacardiaceae", "LXXXVI", "Anacardiaceae", 390),
  ed2_celastraceae: family("ed2_celastraceae", "LXXXVII", "Celastraceae", 391),
  ed2_aceraceae: family("ed2_aceraceae", "LXXXVIII", "Aceraceae", 393),
  ed2_sapindaceae: family("ed2_sapindaceae", "LXXXIX", "Sapindaceae", 394),
  ed2_rhamnaceae: family("ed2_rhamnaceae", "XC", "Rhamnaceae", 398),
  ed2_tiliaceae: family("ed2_tiliaceae", "XCII", "Tiliaceae", 403),
  ed2_malvaceae: family("ed2_malvaceae", "XCIII", "Malvaceae", 404),
  ed2_sterculiaceae: family("ed2_sterculiaceae", "XCIV", "Sterculiaceae", 417),
};

function terminal(nodeId: string, familyId: string, page: number): CladoNode {
  const especie = secondEditionDicotGroupC2Families[familyId];
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

const secondEditionDicotGroupC2BranchSpecs: Record<string, BranchSpec> = {
  ed2_dicot_group_c_m: {
    page: 15,
    description: "En flores actinomorfas, ¿los estambres forman un tubo atravesado por el estilo?",
    optionA: ["M", "Estambres numerosos y monadelfos, unidos por los filamentos", "ed2_family_malvaceae"],
    optionAPrime: ["M'", "Estambres libres, unidos sólo en la base o reunidos en grupos", "ed2_dicot_group_c_n"],
  },
  ed2_dicot_group_c_n: {
    page: 15,
    description: "¿La planta es leñosa elevada o es hierba, sufrútice o voluble?",
    optionA: ["N", "Árbol o arbusto más o menos elevado", "ed2_dicot_group_c_o"],
    optionAPrime: ["N'", "Hierba, sufrútice o planta voluble", "ed2_dicot_group_c_c_lower"],
  },
  ed2_dicot_group_c_o: {
    page: 15,
    description: "En árboles o arbustos, ¿las hojas son compuestas o simples?",
    optionA: ["O", "Hojas compuestas", "ed2_dicot_group_c_p"],
    optionAPrime: ["O'", "Hojas simples", "ed2_dicot_group_c_t"],
  },
  ed2_dicot_group_c_p: {
    page: 15,
    description: "Con hojas compuestas, ¿el fruto es una disámara?",
    optionA: ["P", "Fruto disámara", "ed2_family_aceraceae"],
    optionAPrime: ["P'", "Fruto de otro tipo", "ed2_dicot_group_c_q"],
  },
  ed2_dicot_group_c_q: {
    page: 15,
    description: "Con fruto no disámara, ¿hay cuatro a cinco estambres u ocho a numerosos?",
    optionA: ["Q", "Cuatro a cinco estambres", "ed2_family_rutaceae"],
    optionAPrime: ["Q'", "Ocho a numerosos estambres", "ed2_dicot_group_c_r"],
  },
  ed2_dicot_group_c_r: {
    page: 15,
    description: "¿El ovario es unilocular o tiene dos a cinco lóculos?",
    optionA: ["R", "Ovario unilocular; 10 a numerosos estambres; fruto legumbre", "ed2_family_leguminosae"],
    optionAPrime: ["R'", "Ovario con dos a cinco lóculos", "ed2_dicot_group_c_s"],
  },
  ed2_dicot_group_c_s: {
    page: 15,
    description: "Con ovario plurilocular, ¿cómo son los folíolos?",
    optionA: ["S", "Oblongo-lineares y menores de un centímetro", "ed2_family_zygophyllaceae"],
    optionAPrime: ["S'", "Grandes, ovados u ovado-lanceolados", "ed2_family_sapindaceae"],
  },
  ed2_dicot_group_c_t: {
    page: 15,
    description: "Con hojas simples, ¿el ovario es plurilocular o unilocular?",
    optionA: ["T", "Ovario con dos a cinco lóculos", "ed2_dicot_group_c_u"],
    optionAPrime: ["T'", "Ovario unilocular", "ed2_dicot_group_c_z"],
  },
  ed2_dicot_group_c_u: {
    page: 15,
    description: "¿El ovario es pentalocular y los estambres son monadelfos?",
    optionA: ["U", "Ovario pentalocular y estambres monadelfos", "ed2_family_sterculiaceae"],
    optionAPrime: ["U'", "Ovario con dos a cuatro lóculos", "ed2_dicot_group_c_v"],
  },
  ed2_dicot_group_c_v: {
    page: 15,
    description: "¿Las flores son unisexuales o hermafroditas?",
    optionA: ["V", "Flores unisexuales", "ed2_dicot_group_c_w"],
    optionAPrime: ["V'", "Flores hermafroditas", "ed2_dicot_group_c_x"],
  },
  ed2_dicot_group_c_w: {
    page: 15,
    description: "En flores unisexuales, ¿cuántos estambres hay y la planta es monoica o dioica?",
    optionA: ["W", "Ocho a numerosos estambres; planta generalmente monoica", "ed2_family_euphorbiaceae"],
    optionAPrime: ["W'", "Cuatro a cinco estambres; planta generalmente dioica", "ed2_family_celastraceae"],
  },
  ed2_dicot_group_c_x: {
    page: 15,
    description: "En flores hermafroditas, ¿los estambres son numerosos?",
    optionA: ["X", "Estambres muy numerosos", "ed2_family_tiliaceae"],
    optionAPrime: ["X'", "Cuatro a diez estambres", "ed2_dicot_group_c_y"],
  },
  ed2_dicot_group_c_y: {
    page: 15,
    description: "¿La planta es espinosa y el receptáculo floral es muy cóncavo?",
    optionA: ["Y", "Espinosa; receptáculo cóncavo a urceolado; fruto no alado", "ed2_family_rhamnaceae"],
    optionAPrime: ["Y'", "No espinosa; receptáculo casi plano; fruto trialado", "ed2_family_sapindaceae"],
  },
  ed2_dicot_group_c_z: {
    page: 15,
    description: "Con ovario unilocular, ¿hay cuatro a seis o nueve a diez estambres?",
    optionA: ["Z", "Cuatro a seis estambres", "ed2_dicot_group_c_a_lower"],
    optionAPrime: ["Z'", "Nueve a diez estambres", "ed2_dicot_group_c_b_lower"],
  },
  ed2_dicot_group_c_a_lower: {
    page: 15,
    description: "¿Hay cuatro o seis estambres?",
    optionA: ["a", "Cuatro estambres", "ed2_family_celastraceae"],
    optionAPrime: ["a'", "Seis estambres", "ed2_family_berberidaceae"],
  },
  ed2_dicot_group_c_b_lower: {
    page: 15,
    description: "Con nueve a diez estambres, ¿hay perigonio corolino o cáliz y corola?",
    optionA: ["b", "Perigonio corolino; nueve estambres; anteras con dehiscencia valvar", "ed2_family_lauraceae"],
    optionAPrime: ["b'", "Cáliz y corola diferenciados; diez estambres; dehiscencia longitudinal", "ed2_family_anacardiaceae"],
  },
};

function buildNode(id: string, spec: BranchSpec): CladoNode {
  const [keyA, labelA, nextA] = spec.optionA;
  const [keyB, labelB, nextB] = spec.optionAPrime;
  return {
    id,
    manualPage: spec.page,
    descripcion: spec.description,
    opcionA: { label: labelA, keyStep: keyA, nextNodeId: nextA },
    opcionA_prima: { label: labelB, keyStep: keyB, nextNodeId: nextB },
  };
}

export const secondEditionDicotGroupC2KeyData: Record<string, CladoNode> = {
  ...Object.fromEntries(
    Object.entries(secondEditionDicotGroupC2BranchSpecs).map(([id, spec]) => [id, buildNode(id, spec)])
  ),
  ed2_family_berberidaceae: terminal("ed2_family_berberidaceae", "ed2_berberidaceae", 282),
  ed2_family_lauraceae: terminal("ed2_family_lauraceae", "ed2_lauraceae", 284),
  ed2_family_zygophyllaceae: terminal("ed2_family_zygophyllaceae", "ed2_zygophyllaceae", 365),
  ed2_family_anacardiaceae: terminal("ed2_family_anacardiaceae", "ed2_anacardiaceae", 390),
  ed2_family_celastraceae: terminal("ed2_family_celastraceae", "ed2_celastraceae", 391),
  ed2_family_aceraceae: terminal("ed2_family_aceraceae", "ed2_aceraceae", 393),
  ed2_family_sapindaceae: terminal("ed2_family_sapindaceae", "ed2_sapindaceae", 394),
  ed2_family_rhamnaceae: terminal("ed2_family_rhamnaceae", "ed2_rhamnaceae", 398),
  ed2_family_tiliaceae: terminal("ed2_family_tiliaceae", "ed2_tiliaceae", 403),
  ed2_family_malvaceae: terminal("ed2_family_malvaceae", "ed2_malvaceae", 404),
  ed2_family_sterculiaceae: terminal("ed2_family_sterculiaceae", "ed2_sterculiaceae", 417),
};
