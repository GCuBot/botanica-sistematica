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

export const secondEditionDicotGroupE2Families: Record<string, Especie> = {
  ed2_aristolochiaceae: family("ed2_aristolochiaceae", "LIII", "Aristolochiaceae", 233),
  ed2_caprifoliaceae: family("ed2_caprifoliaceae", "CXXXIX", "Caprifoliaceae", 590),
  ed2_valerianaceae: family("ed2_valerianaceae", "CXL", "Valerianaceae", 592),
  ed2_dipsacaceae: family("ed2_dipsacaceae", "CXLI", "Dipsacaceae", 593),
  ed2_cucurbitaceae: family("ed2_cucurbitaceae", "CXLII", "Cucurbitaceae", 595),
  ed2_campanulaceae: family("ed2_campanulaceae", "CXLIII", "Campanulaceae", 603),
  ed2_calyceraceae: family("ed2_calyceraceae", "CXLIV", "Calyceraceae", 605),
  ed2_compositae: family("ed2_compositae", "CXLV", "Compositae", 608),
};

function terminal(nodeId: string, familyId: string, page: number): CladoNode {
  const especie = secondEditionDicotGroupE2Families[familyId];
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

const secondEditionDicotGroupE2BranchSpecs: Record<string, BranchSpec> = {
  ed2_dicot_group_e_d_lower: {
    page: 20,
    description: "Con ovario ínfero, ¿las flores tienen perigonio corolino tubuloso?",
    optionA: ["d", "Perigonio corolino tubuloso", "ed2_dicot_group_e_e_lower"],
    optionAPrime: ["d'", "Cáliz y corola, o sólo corola y entonces flores reunidas en capítulos", "ed2_dicot_group_e_f_lower"],
  },
  ed2_dicot_group_e_e_lower: {
    page: 20,
    description: "Con perigonio tubuloso, ¿la flor es zigomorfa o actinomorfa?",
    optionA: ["e", "Zigomorfa; androceo y gineceo unidos formando un ginostemio", "ed2_family_aristolochiaceae"],
    optionAPrime: ["e'", "Actinomorfa; estambres y gineceo separados", "ed2_family_santalaceae"],
  },
  ed2_dicot_group_e_f_lower: {
    page: 20,
    description: "¿Las flores están dispuestas en capítulos?",
    optionA: ["f", "Sí; reunidas en capítulos", "ed2_dicot_group_e_g_lower"],
    optionAPrime: ["f'", "No; dispuestas de otra forma", "ed2_dicot_group_e_j_lower"],
  },
  ed2_dicot_group_e_g_lower: {
    page: 20,
    description: "En capítulos, ¿el ovario es unilocular y uniovulado con anteras unidas?",
    optionA: ["g", "Sí; anteras formando un tubo, filamentos libres y estilo generalmente bífido", "ed2_family_compositae"],
    optionAPrime: ["g'", "Ovario de uno a numerosos lóculos; anteras generalmente libres", "ed2_dicot_group_e_h_lower"],
  },
  ed2_dicot_group_e_h_lower: {
    page: 20,
    description: "Con anteras libres, ¿el ovario es uni- o plurilocular?",
    optionA: ["h", "Unilocular", "ed2_dicot_group_e_i_lower"],
    optionAPrime: ["h'", "Con dos a numerosos lóculos", "ed2_family_rubiaceae"],
  },
  ed2_dicot_group_e_i_lower: {
    page: 20,
    description: "Con ovario unilocular, ¿las flores son actinomorfas o zigomorfas?",
    optionA: ["i", "Actinomorfas", "ed2_family_calyceraceae"],
    optionAPrime: ["i'", "Zigomorfas", "ed2_family_dipsacaceae"],
  },
  ed2_dicot_group_e_j_lower: {
    page: 20,
    description: "Fuera de capítulos, ¿la planta es dioica y posee zarcillos?",
    optionA: ["j", "Dioica y con zarcillos", "ed2_family_cucurbitaceae"],
    optionAPrime: ["j'", "Planta con flores por lo común hermafroditas", "ed2_dicot_group_e_k_lower"],
  },
  ed2_dicot_group_e_k_lower: {
    page: 20,
    description: "¿Hay más de diez estambres o solamente tres a cinco?",
    optionA: ["k", "Más de diez estambres", "ed2_family_symplocaceae"],
    optionAPrime: ["k'", "Tres a cinco estambres", "ed2_dicot_group_e_l_lower"],
  },
  ed2_dicot_group_e_l_lower: {
    page: 20,
    description: "¿El cáliz tiene forma de papus plumoso?",
    optionA: ["l", "Papus plumoso, a veces ausente; tres estambres", "ed2_family_valerianaceae"],
    optionAPrime: ["l'", "Cáliz herbáceo, a veces reducido; cuatro a cinco estambres", "ed2_dicot_group_e_m_lower"],
  },
  ed2_dicot_group_e_m_lower: {
    page: 20,
    description: "Con cuatro a cinco estambres, ¿las anteras están unidas formando un tubo?",
    optionA: ["m", "Sí; anteras unidas en tubo", "ed2_family_campanulaceae"],
    optionAPrime: ["m'", "No; anteras separadas", "ed2_dicot_group_e_n_lower"],
  },
  ed2_dicot_group_e_n_lower: {
    page: 20,
    description: "Con anteras separadas, ¿la corola es zigomorfa o actinomorfa?",
    optionA: ["n", "Zigomorfa y grande", "ed2_family_caprifoliaceae"],
    optionAPrime: ["n'", "Actinomorfa", "ed2_dicot_group_e_o_lower"],
  },
  ed2_dicot_group_e_o_lower: {
    page: 20,
    description: "Con corola actinomorfa, ¿las hojas son compuestas o simples?",
    optionA: ["o", "Pinnaticompuestas", "ed2_family_caprifoliaceae"],
    optionAPrime: ["o'", "Simples", "ed2_family_rubiaceae"],
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

export const secondEditionDicotGroupE2KeyData: Record<string, CladoNode> = {
  ...Object.fromEntries(
    Object.entries(secondEditionDicotGroupE2BranchSpecs).map(([id, spec]) => [id, buildNode(id, spec)])
  ),
  ed2_family_aristolochiaceae: terminal("ed2_family_aristolochiaceae", "ed2_aristolochiaceae", 233),
  ed2_family_caprifoliaceae: terminal("ed2_family_caprifoliaceae", "ed2_caprifoliaceae", 590),
  ed2_family_valerianaceae: terminal("ed2_family_valerianaceae", "ed2_valerianaceae", 592),
  ed2_family_dipsacaceae: terminal("ed2_family_dipsacaceae", "ed2_dipsacaceae", 593),
  ed2_family_cucurbitaceae: terminal("ed2_family_cucurbitaceae", "ed2_cucurbitaceae", 595),
  ed2_family_campanulaceae: terminal("ed2_family_campanulaceae", "ed2_campanulaceae", 603),
  ed2_family_calyceraceae: terminal("ed2_family_calyceraceae", "ed2_calyceraceae", 605),
  ed2_family_compositae: terminal("ed2_family_compositae", "ed2_compositae", 608),
};
