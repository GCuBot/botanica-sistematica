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

export const secondEditionDicotGroupC3Families: Record<string, Especie> = {
  ed2_amaranthaceae: family("ed2_amaranthaceae", "LVI", "Amaranthaceae", 247),
  ed2_portulacaceae: family("ed2_portulacaceae", "LX", "Portulacaceae", 262),
  ed2_basellaceae: family("ed2_basellaceae", "LXI", "Basellaceae", 264),
  ed2_cruciferae: family("ed2_cruciferae", "LXX", "Cruciferae", 290),
  ed2_oxalidaceae: family("ed2_oxalidaceae", "LXXVI", "Oxalidaceae", 356),
  ed2_geraniaceae: family("ed2_geraniaceae", "LXXVII", "Geraniaceae", 359),
  ed2_linaceae: family("ed2_linaceae", "LXXIX", "Linaceae", 364),
  ed2_malpighiaceae: family("ed2_malpighiaceae", "LXXXII", "Malpighiaceae", 369),
  ed2_vitaceae: family("ed2_vitaceae", "XCI", "Vitaceae", 401),
  ed2_guttiferae: family("ed2_guttiferae", "XCV", "Guttiferae", 419),
  ed2_elatinaceae: family("ed2_elatinaceae", "XCVI", "Elatinaceae", 420),
  ed2_frankeniaceae: family("ed2_frankeniaceae", "XCVII", "Frankeniaceae", 421),
  ed2_cistaceae: family("ed2_cistaceae", "XCVIII", "Cistaceae", 423),
  ed2_turneraceae: family("ed2_turneraceae", "C", "Turneraceae", 426),
  ed2_passifloraceae: family("ed2_passifloraceae", "CI", "Passifloraceae", 428),
  ed2_lythraceae: family("ed2_lythraceae", "CVI", "Lythraceae", 440),
};

function terminal(nodeId: string, familyId: string, page: number): CladoNode {
  const especie = secondEditionDicotGroupC3Families[familyId];
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

const secondEditionDicotGroupC3BranchSpecs: Record<string, BranchSpec> = {
  ed2_dicot_group_c_c_lower: {
    page: 16,
    description: "En hierbas, sufrútices o volubles, ¿hay perigonio corolino o cáliz y corola?",
    optionA: ["c", "Flores con perigonio corolino", "ed2_dicot_group_c_d_lower"],
    optionAPrime: ["c'", "Flores con cáliz y corola", "ed2_dicot_group_c_g_lower"],
  },
  ed2_dicot_group_c_d_lower: {
    page: 16,
    description: "Con perigonio corolino, ¿las hojas poseen ócrea?",
    optionA: ["d", "Hojas con ócrea", "ed2_family_polygonaceae"],
    optionAPrime: ["d'", "Hojas sin ócrea", "ed2_dicot_group_c_e_lower"],
  },
  ed2_dicot_group_c_e_lower: {
    page: 16,
    description: "Sin ócrea, ¿el fruto es baya o cápsula o utrículo?",
    optionA: ["e", "Baya; hojas alternas; flores en racimo", "ed2_family_phytolaccaceae"],
    optionAPrime: ["e'", "Cápsula o utrículo; hojas generalmente opuestas", "ed2_dicot_group_c_f_lower"],
  },
  ed2_dicot_group_c_f_lower: {
    page: 16,
    description: "¿Las flores son grandes y solitarias o pequeñas y agrupadas?",
    optionA: ["f", "Solitarias o subsolitarias, grandes; plantas carnosas", "ed2_family_aizoaceae"],
    optionAPrime: ["f'", "Pequeñas en inflorescencias densas; tépalos escariosos; plantas no carnosas", "ed2_family_amaranthaceae"],
  },
  ed2_dicot_group_c_g_lower: {
    page: 16,
    description: "Con cáliz y corola, ¿la planta es voluble?",
    optionA: ["g", "Voluble, leñosa o herbácea", "ed2_dicot_group_c_h_lower"],
    optionAPrime: ["g'", "No voluble", "ed2_dicot_group_c_l_lower"],
  },
  ed2_dicot_group_c_h_lower: {
    page: 16,
    description: "En plantas volubles, ¿las hojas son enteras o profundamente partidas o compuestas?",
    optionA: ["h", "Hojas enteras", "ed2_dicot_group_c_i_lower"],
    optionAPrime: ["h'", "Hojas profundamente partidas o compuestas", "ed2_dicot_group_c_j_lower"],
  },
  ed2_dicot_group_c_i_lower: {
    page: 16,
    description: "Con hojas enteras, ¿son opuestas o alternas?",
    optionA: ["i", "Opuestas", "ed2_family_malpighiaceae"],
    optionAPrime: ["i'", "Alternas", "ed2_family_basellaceae"],
  },
  ed2_dicot_group_c_j_lower: {
    page: 16,
    description: "Con hojas partidas o compuestas, ¿las flores son grandes y poseen corona?",
    optionA: ["j", "Grandes; pétalos con apéndices filamentosos formando una corona", "ed2_family_passifloraceae"],
    optionAPrime: ["j'", "Pequeñas y sin apéndices filamentosos en la base de los pétalos", "ed2_dicot_group_c_k_lower"],
  },
  ed2_dicot_group_c_k_lower: {
    page: 16,
    description: "En flores pequeñas, ¿hay ocho o cuatro a cinco estambres?",
    optionA: ["k", "Ocho estambres; gineceo tricarpelar; hojas trifolioladas o bipinnadas", "ed2_family_sapindaceae"],
    optionAPrime: ["k'", "Cuatro a cinco estambres; gineceo bicarpelar; hojas palmaticompuestas", "ed2_family_vitaceae"],
  },
  ed2_dicot_group_c_l_lower: {
    page: 16,
    description: "En plantas no volubles, ¿los estambres son tetradínamos?",
    optionA: ["l", "Cuatro largos y dos cortos; cuatro pétalos; fruto silicua o silícula", "ed2_family_cruciferae"],
    optionAPrime: ["l'", "Estambres no tetradínamos; fruto no silicua ni silícula", "ed2_dicot_group_c_ll_lower"],
  },
  ed2_dicot_group_c_ll_lower: {
    page: 16,
    description: "¿El cáliz tiene dos a tres o cuatro a cinco sépalos?",
    optionA: ["ll", "Dos a tres sépalos", "ed2_dicot_group_c_m_lower"],
    optionAPrime: ["ll'", "Cuatro a cinco sépalos", "ed2_dicot_group_c_enye_lower"],
  },
  ed2_dicot_group_c_m_lower: {
    page: 16,
    description: "Con dos a tres sépalos, ¿cómo abre la cápsula?",
    optionA: ["m", "Dehiscencia poricida o longitudinal", "ed2_dicot_group_c_n_lower"],
    optionAPrime: ["m'", "Dehiscencia transversal; plantas sin látex", "ed2_family_portulacaceae"],
  },
  ed2_dicot_group_c_n_lower: {
    page: 16,
    description: "Con dehiscencia poricida o longitudinal, ¿la planta tiene látex?",
    optionA: ["n", "Con látex y robusta", "ed2_family_papaveraceae"],
    optionAPrime: ["n'", "Sin látex y pigmea", "ed2_family_elatinaceae"],
  },
  ed2_dicot_group_c_enye_lower: {
    page: 16,
    description: "Con cuatro a cinco sépalos, ¿hay más de doce estambres?",
    optionA: ["ñ", "Más de doce estambres", "ed2_dicot_group_c_o_lower"],
    optionAPrime: ["ñ'", "Menos de once estambres", "ed2_dicot_group_c_p_lower"],
  },
  ed2_dicot_group_c_o_lower: {
    page: 16,
    description: "Con más de doce estambres, ¿las hojas son alternas u opuestas o verticiladas?",
    optionA: ["o", "Hojas alternas", "ed2_family_cistaceae"],
    optionAPrime: ["o'", "Hojas opuestas o verticiladas", "ed2_dicot_group_c_x_receptacle"],
  },
  ed2_dicot_group_c_x_receptacle: {
    page: 16,
    description: "¿El receptáculo está reducido o es acampanado?",
    optionA: ["x", "Receptáculo reducido y tres a cinco estilos", "ed2_family_guttiferae"],
    optionAPrime: ["x'", "Receptáculo acampanado y un estilo", "ed2_family_lythraceae"],
  },
  ed2_dicot_group_c_p_lower: {
    page: 16,
    description: "Con menos de once estambres, ¿el ovario es unilocular?",
    optionA: ["p", "Ovario unilocular", "ed2_dicot_group_c_q_lower"],
    optionAPrime: ["p'", "Ovario con dos a numerosos lóculos", "ed2_dicot_group_c_t_lower"],
  },
  ed2_dicot_group_c_q_lower: {
    page: 17,
    description: "Con ovario unilocular, ¿la placentación es central o basilar, o parietal?",
    optionA: ["q", "Central o basilar; hojas opuestas; inflorescencias dicotómicas", "ed2_family_caryophyllaceae"],
    optionAPrime: ["q'", "Parietal, con óvulos insertos en la pared del ovario", "ed2_dicot_group_c_r_lower"],
  },
  ed2_dicot_group_c_r_lower: {
    page: 17,
    description: "Con placentación parietal, ¿las hojas son compuestas y tienen estípulas espiniformes?",
    optionA: ["r", "Hojas trifolioladas a pentafolioladas con estípulas espiniformes", "ed2_family_capparidaceae"],
    optionAPrime: ["r'", "Hojas simples", "ed2_dicot_group_c_s_lower"],
  },
  ed2_dicot_group_c_s_lower: {
    page: 17,
    description: "Con hojas simples, ¿son opuestas o alternas?",
    optionA: ["s", "Opuestas", "ed2_family_frankeniaceae"],
    optionAPrime: ["s'", "Alternas", "ed2_family_turneraceae"],
  },
  ed2_dicot_group_c_t_lower: {
    page: 17,
    description: "Con ovario plurilocular, ¿el receptáculo es tubuloso?",
    optionA: ["t", "Tubuloso, verde o coloreado, con pétalos insertos en el borde", "ed2_family_lythraceae"],
    optionAPrime: ["t'", "A veces convexo, pero no tubuloso", "ed2_dicot_group_c_u_lower"],
  },
  ed2_dicot_group_c_u_lower: {
    page: 17,
    description: "¿Las hojas son trifolioladas con folíolos acorazonados?",
    optionA: ["u", "Sí; diez estambres, ovario pentalocular y cinco estilos", "ed2_family_oxalidaceae"],
    optionAPrime: ["u'", "No; hojas simples o compuestas, pero no trifolioladas", "ed2_dicot_group_c_v_lower"],
  },
  ed2_dicot_group_c_v_lower: {
    page: 17,
    description: "¿Las flores son unisexuales o hermafroditas?",
    optionA: ["v", "Unisexuales y diclinas", "ed2_family_euphorbiaceae"],
    optionAPrime: ["v'", "Hermafroditas", "ed2_dicot_group_c_w_lower"],
  },
  ed2_dicot_group_c_w_lower: {
    page: 17,
    description: "En flores hermafroditas, ¿las hojas son lineares y enteras?",
    optionA: ["w", "Lineares y enteras", "ed2_dicot_group_c_x_lower"],
    optionAPrime: ["w'", "No lineares, aserradas o partidas", "ed2_dicot_group_c_y_lower"],
  },
  ed2_dicot_group_c_x_lower: {
    page: 17,
    description: "Con hojas lineares, ¿son alternas u opuestas?",
    optionA: ["x", "Alternas", "ed2_family_linaceae"],
    optionAPrime: ["x'", "Opuestas; plantas pigmeas", "ed2_family_elatinaceae"],
  },
  ed2_dicot_group_c_y_lower: {
    page: 17,
    description: "¿Las flores son azules o violáceas, o amarillas?",
    optionA: ["y", "Azules o violáceas; plantas no fétidas", "ed2_family_geraniaceae"],
    optionAPrime: ["y'", "Amarillas", "ed2_dicot_group_c_z_lower"],
  },
  ed2_dicot_group_c_z_lower: {
    page: 17,
    description: "Con flores amarillas, ¿la planta es erecta o rastrera?",
    optionA: ["z", "Erecta, fétida y con fruto no espinoso", "ed2_family_rutaceae"],
    optionAPrime: ["z'", "Rastrera, no fétida y con fruto espinoso", "ed2_family_zygophyllaceae"],
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

export const secondEditionDicotGroupC3KeyData: Record<string, CladoNode> = {
  ...Object.fromEntries(
    Object.entries(secondEditionDicotGroupC3BranchSpecs).map(([id, spec]) => [id, buildNode(id, spec)])
  ),
  ed2_family_cruciferae: terminal("ed2_family_cruciferae", "ed2_cruciferae", 290),
  ed2_family_oxalidaceae: terminal("ed2_family_oxalidaceae", "ed2_oxalidaceae", 356),
  ed2_family_geraniaceae: terminal("ed2_family_geraniaceae", "ed2_geraniaceae", 359),
  ed2_family_linaceae: terminal("ed2_family_linaceae", "ed2_linaceae", 364),
  ed2_family_malpighiaceae: terminal("ed2_family_malpighiaceae", "ed2_malpighiaceae", 369),
  ed2_family_vitaceae: terminal("ed2_family_vitaceae", "ed2_vitaceae", 401),
  ed2_family_guttiferae: terminal("ed2_family_guttiferae", "ed2_guttiferae", 419),
  ed2_family_elatinaceae: terminal("ed2_family_elatinaceae", "ed2_elatinaceae", 420),
  ed2_family_frankeniaceae: terminal("ed2_family_frankeniaceae", "ed2_frankeniaceae", 421),
  ed2_family_cistaceae: terminal("ed2_family_cistaceae", "ed2_cistaceae", 423),
  ed2_family_turneraceae: terminal("ed2_family_turneraceae", "ed2_turneraceae", 426),
  ed2_family_passifloraceae: terminal("ed2_family_passifloraceae", "ed2_passifloraceae", 428),
  ed2_family_lythraceae: terminal("ed2_family_lythraceae", "ed2_lythraceae", 440),
};
