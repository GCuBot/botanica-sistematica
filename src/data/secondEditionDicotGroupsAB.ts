import { CladoNode, Especie } from "@/types";

interface BranchOption {
  label: string;
  keyStep: string;
  next: string;
}

interface BranchSpec {
  descripcion: string;
  manualPage: number;
  milestone?: string;
  opcionA: BranchOption;
  opcionAPrima: BranchOption;
}

function family(id: string, number: string, name: string, manualPage: number): Especie {
  return {
    id,
    nombreCientifico: name,
    nombreVulgar: name,
    familia: `${number}. ${name}`,
    descripcion: "Familia alcanzada mediante la clave general de la segunda edición.",
    caracteristicas: "Continuará en la clave propia de la familia hasta género y especie.",
    distribucion: `Manual de Cabrera y Zardini, segunda edición, página ${manualPage}.`,
  };
}

export const secondEditionDicotGroupsABFamilies: Record<string, Especie> = {
  ed2_piperaceae: family("ed2_piperaceae", "XLV", "Piperaceae", 218),
  ed2_salicaceae: family("ed2_salicaceae", "XLVI", "Salicaceae", 219),
  ed2_ulmaceae: family("ed2_ulmaceae", "XLVII", "Ulmaceae", 221),
  ed2_moraceae: family("ed2_moraceae", "XLVIII", "Moraceae", 222),
  ed2_cannabinaceae: family("ed2_cannabinaceae", "XLIX", "Cannabinaceae", 225),
  ed2_urticaceae: family("ed2_urticaceae", "L", "Urticaceae", 225),
  ed2_santalaceae: family("ed2_santalaceae", "LI", "Santalaceae", 228),
  ed2_polygonaceae: family("ed2_polygonaceae", "LIV", "Polygonaceae", 235),
  ed2_chenopodiaceae: family("ed2_chenopodiaceae", "LV", "Chenopodiaceae", 241),
  ed2_phytolaccaceae: family("ed2_phytolaccaceae", "LVIII", "Phytolaccaceae", 256),
  ed2_aizoaceae: family("ed2_aizoaceae", "LIX", "Aizoaceae", 259),
  ed2_caryophyllaceae: family("ed2_caryophyllaceae", "LXII", "Caryophyllaceae", 266),
  ed2_ceratophyllaceae: family("ed2_ceratophyllaceae", "LXIV", "Ceratophyllaceae", 278),
  ed2_rosaceae: family("ed2_rosaceae", "LXXIV", "Rosaceae", 309),
  ed2_euphorbiaceae: family("ed2_euphorbiaceae", "LXXXIV", "Euphorbiaceae", 375),
  ed2_callitrichaceae: family("ed2_callitrichaceae", "LXXXV", "Callitrichaceae", 388),
  ed2_rubiaceae: family("ed2_rubiaceae", "CXXXVIII", "Rubiaceae", 579),
};

function familyTerminal(nodeId: string, familyId: string, manualPage: number): CladoNode {
  const especie = secondEditionDicotGroupsABFamilies[familyId];
  return {
    id: nodeId,
    milestone: especie.nombreCientifico,
    manualPage,
    descripcion: `${especie.nombreCientifico}: continuar con la clave propia de la familia.`,
    opcionA: {
      label: `Continuar en ${especie.nombreCientifico}`,
      keyStep: "Familia",
      especieId: familyId,
    },
    opcionA_prima: {
      label: `Continuar en ${especie.nombreCientifico}`,
      keyStep: "Familia",
      especieId: familyId,
    },
    especie,
  };
}

const secondEditionDicotGroupsABBranchSpecs: Record<string, BranchSpec> = {
  ed2_dicotyledoneae_a: {
    descripcion: "¿Las flores son desnudas o poseen cáliz y corola?",
    manualPage: 12,
    milestone: "Dicotyledoneae",
    opcionA: {
      label: "Desnudas, sin cáliz ni corola; a lo sumo protegidas por una bráctea",
      keyStep: "A",
      next: "ed2_dicot_group_a_a",
    },
    opcionAPrima: {
      label: "Con cáliz o con cáliz y corola",
      keyStep: "A'",
      next: "ed2_dicotyledoneae_b",
    },
  },
  ed2_dicotyledoneae_b: {
    descripcion: "¿Las flores poseen solamente cáliz verdoso o también corola?",
    manualPage: 12,
    opcionA: {
      label: "Únicamente cáliz o perigonio verdoso calicoide",
      keyStep: "B",
      next: "ed2_dicot_group_b_a",
    },
    opcionAPrima: {
      label: "Cáliz y corola, o perigonio corolino",
      keyStep: "B'",
      next: "ed2_dicotyledoneae_c",
    },
  },
  ed2_dicotyledoneae_c: {
    descripcion: "¿Las piezas de la corola o del perigonio son libres o están soldadas?",
    manualPage: 12,
    opcionA: {
      label: "Libres entre sí",
      keyStep: "C",
      next: "ed2_dicotyledoneae_d",
    },
    opcionAPrima: {
      label: "Más o menos soldadas entre sí",
      keyStep: "C'",
      next: "ed2_dicot_group_e_a",
    },
  },
  ed2_dicotyledoneae_d: {
    descripcion: "Con piezas libres, ¿el ovario es súpero o ínfero?",
    manualPage: 12,
    opcionA: {
      label: "Súpero; corola inserta debajo del ovario o en un receptáculo no soldado con él",
      keyStep: "D",
      next: "ed2_dicot_group_c_a",
    },
    opcionAPrima: {
      label: "Ínfero; corola inserta por encima del ovario soldado con el receptáculo",
      keyStep: "D'",
      next: "ed2_dicot_group_d_a",
    },
  },
  ed2_dicot_group_a_a: {
    descripcion: "Grupo A: ¿es una planta sumergida con hojas verticiladas y divididas dicotómicamente?",
    manualPage: 12,
    milestone: "Grupo A",
    opcionA: {
      label: "Sí; hojas verticiladas divididas dicotómicamente",
      keyStep: "A",
      next: "ed2_family_ceratophyllaceae",
    },
    opcionAPrima: {
      label: "No; planta terrestre o acuática con hojas no divididas dicotómicamente",
      keyStep: "A'",
      next: "ed2_dicot_group_a_b",
    },
  },
  ed2_dicot_group_a_b: {
    descripcion: "¿El ovario es tricarpelar y trilocular, generalmente en una planta con látex?",
    manualPage: 13,
    opcionA: {
      label: "Sí; ovario tricarpelar y trilocular",
      keyStep: "B",
      next: "ed2_family_euphorbiaceae",
    },
    opcionAPrima: {
      label: "No; ovario uni-, bi- o tetralocular",
      keyStep: "B'",
      next: "ed2_dicot_group_a_c",
    },
  },
  ed2_dicot_group_a_c: {
    descripcion: "¿Es un árbol con hojas alternas?",
    manualPage: 13,
    opcionA: {
      label: "Sí; árbol con hojas alternas y ovario unilocular",
      keyStep: "C",
      next: "ed2_family_salicaceae",
    },
    opcionAPrima: {
      label: "No; hierba baja con hojas opuestas",
      keyStep: "C'",
      next: "ed2_dicot_group_a_d",
    },
  },
  ed2_dicot_group_a_d: {
    descripcion: "En hierbas bajas, ¿el ovario tiene dos a cuatro lóculos?",
    manualPage: 13,
    opcionA: {
      label: "Sí; ovario bi- a tetralocular y flores axilares",
      keyStep: "D",
      next: "ed2_family_callitrichaceae",
    },
    opcionAPrima: {
      label: "No; ovario unilocular y flores en espigas terminales",
      keyStep: "D'",
      next: "ed2_family_piperaceae",
    },
  },
  ed2_dicot_group_b_a: {
    descripcion: "Grupo B: ¿las flores están encerradas en un receptáculo globoso o piriforme?",
    manualPage: 13,
    milestone: "Grupo B",
    opcionA: {
      label: "Sí; sicono en árboles con látex",
      keyStep: "A",
      next: "ed2_family_moraceae",
    },
    opcionAPrima: {
      label: "No; flores dispuestas en inflorescencias de otros tipos",
      keyStep: "A'",
      next: "ed2_dicot_group_b_b",
    },
  },
  ed2_dicot_group_b_b: {
    descripcion: "¿Las flores están incrustadas en los alvéolos de un receptáculo plano o cóncavo?",
    manualPage: 13,
    opcionA: {
      label: "Sí; perigonio soldado con el receptáculo",
      keyStep: "B",
      next: "ed2_family_moraceae",
    },
    opcionAPrima: {
      label: "No; inflorescencias de otros tipos",
      keyStep: "B'",
      next: "ed2_dicot_group_b_c",
    },
  },
  ed2_dicot_group_b_c: {
    descripcion: "¿El ovario es ínfero o semiínfero, o es súpero?",
    manualPage: 13,
    opcionA: {
      label: "Ínfero o semiínfero",
      keyStep: "C",
      next: "ed2_dicot_group_b_d",
    },
    opcionAPrima: {
      label: "Súpero",
      keyStep: "C'",
      next: "ed2_dicot_group_b_g",
    },
  },
  ed2_dicot_group_b_d: {
    descripcion: "Con ovario ínfero o semiínfero, ¿las hojas son verticiladas?",
    manualPage: 13,
    opcionA: {
      label: "Sí; hojas verticiladas",
      keyStep: "D",
      next: "ed2_family_rubiaceae",
    },
    opcionAPrima: {
      label: "No; hojas opuestas o alternas",
      keyStep: "D'",
      next: "ed2_dicot_group_b_e",
    },
  },
  ed2_dicot_group_b_e: {
    descripcion: "¿La planta es hierba o arbusto, o es árbol?",
    manualPage: 13,
    opcionA: {
      label: "Hierba o arbusto",
      keyStep: "E",
      next: "ed2_dicot_group_b_f",
    },
    opcionAPrima: {
      label: "Árbol con hojas sin estípulas",
      keyStep: "E'",
      next: "ed2_family_santalaceae",
    },
  },
  ed2_dicot_group_b_f: {
    descripcion: "En hierbas o arbustos, ¿las hojas tienen estípulas?",
    manualPage: 13,
    opcionA: {
      label: "Sí; hojas estipuladas",
      keyStep: "F",
      next: "ed2_family_rosaceae",
    },
    opcionAPrima: {
      label: "No; hojas sin estípulas",
      keyStep: "F'",
      next: "ed2_family_aizoaceae",
    },
  },
  ed2_dicot_group_b_g: {
    descripcion: "Con ovario súpero, ¿las hojas poseen ócrea?",
    manualPage: 13,
    opcionA: {
      label: "Sí; dos estípulas intrapeciolares soldadas rodean el tallo",
      keyStep: "G",
      next: "ed2_family_polygonaceae",
    },
    opcionAPrima: {
      label: "No; hojas sin ócrea",
      keyStep: "G'",
      next: "ed2_dicot_group_b_h",
    },
  },
  ed2_dicot_group_b_h: {
    descripcion: "¿La planta es árbol o arbusto, o es hierba o sufrútice?",
    manualPage: 13,
    opcionA: {
      label: "Árbol o arbusto",
      keyStep: "H",
      next: "ed2_dicot_group_b_i",
    },
    opcionAPrima: {
      label: "Hierba o sufrútice",
      keyStep: "H'",
      next: "ed2_dicot_group_b_k",
    },
  },
  ed2_dicot_group_b_i: {
    descripcion: "En árboles o arbustos, ¿hay látex y ovario trilocular?",
    manualPage: 13,
    opcionA: {
      label: "Sí; látex y ovario tricarpelar trilocular",
      keyStep: "I",
      next: "ed2_family_euphorbiaceae",
    },
    opcionAPrima: {
      label: "No; sin látex y ovario no trilocular",
      keyStep: "I'",
      next: "ed2_dicot_group_b_j",
    },
  },
  ed2_dicot_group_b_j: {
    descripcion: "¿Es un árbol espinoso, monoico y con gineceo bicarpelar unilocular?",
    manualPage: 13,
    opcionA: {
      label: "Sí; árbol espinoso y monoico",
      keyStep: "J",
      next: "ed2_family_ulmaceae",
    },
    opcionAPrima: {
      label: "No; árbol o arbusto no espinoso, con gineceo de cinco o más carpelos",
      keyStep: "J'",
      next: "ed2_family_phytolaccaceae",
    },
  },
  ed2_dicot_group_b_k: {
    descripcion: "En hierbas o sufrútices, ¿el ovario tiene tres a cinco lóculos?",
    manualPage: 13,
    opcionA: {
      label: "Sí; ovario tri- a pentalocular",
      keyStep: "K",
      next: "ed2_dicot_group_b_l",
    },
    opcionAPrima: {
      label: "No; ovario unilocular",
      keyStep: "K'",
      next: "ed2_dicot_group_b_n",
    },
  },
  ed2_dicot_group_b_l: {
    descripcion: "Con ovario de tres a cinco lóculos, ¿las hojas son verticiladas?",
    manualPage: 13,
    opcionA: {
      label: "Sí; hojas verticiladas",
      keyStep: "L",
      next: "ed2_family_aizoaceae",
    },
    opcionAPrima: {
      label: "No; hojas no verticiladas",
      keyStep: "L'",
      next: "ed2_dicot_group_b_m",
    },
  },
  ed2_dicot_group_b_m: {
    descripcion: "¿Cómo es la dehiscencia del fruto?",
    manualPage: 13,
    opcionA: {
      label: "Cápsula de dehiscencia longitudinal, o fruto drupáceo o bacciforme",
      keyStep: "M",
      next: "ed2_family_euphorbiaceae",
    },
    opcionAPrima: {
      label: "Cápsula de dehiscencia transversal",
      keyStep: "M'",
      next: "ed2_family_aizoaceae",
    },
  },
  ed2_dicot_group_b_n: {
    descripcion: "Con ovario unilocular, ¿la planta posee pelos urticantes?",
    manualPage: 13,
    opcionA: {
      label: "Sí; pelos urticantes",
      keyStep: "N",
      next: "ed2_family_urticaceae",
    },
    opcionAPrima: {
      label: "No; sin pelos urticantes",
      keyStep: "N'",
      next: "ed2_dicot_group_b_o",
    },
  },
  ed2_dicot_group_b_o: {
    descripcion: "Sin pelos urticantes, ¿las hojas son opuestas?",
    manualPage: 14,
    opcionA: {
      label: "Sí; hojas opuestas",
      keyStep: "O",
      next: "ed2_dicot_group_b_p",
    },
    opcionAPrima: {
      label: "No; hojas alternas o ausentes",
      keyStep: "O'",
      next: "ed2_dicot_group_b_r",
    },
  },
  ed2_dicot_group_b_p: {
    descripcion: "Con hojas opuestas, ¿la planta es dioica o monoica?",
    manualPage: 14,
    opcionA: {
      label: "Dioica y enredadera",
      keyStep: "P",
      next: "ed2_family_cannabinaceae",
    },
    opcionAPrima: {
      label: "Monoica y herbácea",
      keyStep: "P'",
      next: "ed2_dicot_group_b_q",
    },
  },
  ed2_dicot_group_b_q: {
    descripcion: "En hierbas monoicas, ¿las flores son hermafroditas o unisexuales?",
    manualPage: 14,
    opcionA: {
      label: "Hermafroditas",
      keyStep: "Q",
      next: "ed2_family_caryophyllaceae",
    },
    opcionAPrima: {
      label: "Unisexuales",
      keyStep: "Q'",
      next: "ed2_family_urticaceae",
    },
  },
  ed2_dicot_group_b_r: {
    descripcion: "Con hojas alternas o ausentes, ¿las flores son hermafroditas?",
    manualPage: 14,
    opcionA: {
      label: "Sí; flores hermafroditas",
      keyStep: "R",
      next: "ed2_dicot_group_b_s",
    },
    opcionAPrima: {
      label: "No; flores unisexuales, o unisexuales y hermafroditas en la misma planta",
      keyStep: "R'",
      next: "ed2_dicot_group_b_t",
    },
  },
  ed2_dicot_group_b_s: {
    descripcion: "En flores hermafroditas, ¿el fruto es baya o utrículo?",
    manualPage: 14,
    opcionA: {
      label: "Baya carnosa",
      keyStep: "S",
      next: "ed2_family_phytolaccaceae",
    },
    opcionAPrima: {
      label: "Utrículo",
      keyStep: "S'",
      next: "ed2_family_chenopodiaceae",
    },
  },
  ed2_dicot_group_b_t: {
    descripcion: "En flores unisexuales, ¿los estambres son curvos o rectos?",
    manualPage: 14,
    opcionA: {
      label: "Curvos; flores unisexuales y hermafroditas en la misma planta",
      keyStep: "T",
      next: "ed2_family_urticaceae",
    },
    opcionAPrima: {
      label: "Rectos; flores unisexuales",
      keyStep: "T'",
      next: "ed2_family_chenopodiaceae",
    },
  },
};

function buildBranch(id: string, spec: BranchSpec): CladoNode {
  return {
    id,
    descripcion: spec.descripcion,
    milestone: spec.milestone,
    manualPage: spec.manualPage,
    opcionA: {
      label: spec.opcionA.label,
      keyStep: spec.opcionA.keyStep,
      nextNodeId: spec.opcionA.next,
    },
    opcionA_prima: {
      label: spec.opcionAPrima.label,
      keyStep: spec.opcionAPrima.keyStep,
      nextNodeId: spec.opcionAPrima.next,
    },
  };
}

export const secondEditionDicotGroupsABKeyData: Record<string, CladoNode> = {
  ...Object.fromEntries(
    Object.entries(secondEditionDicotGroupsABBranchSpecs).map(([id, spec]) => [
      id,
      buildBranch(id, spec),
    ])
  ),
  ed2_family_ceratophyllaceae: familyTerminal("ed2_family_ceratophyllaceae", "ed2_ceratophyllaceae", 278),
  ed2_family_rosaceae: familyTerminal("ed2_family_rosaceae", "ed2_rosaceae", 309),
  ed2_family_euphorbiaceae: familyTerminal("ed2_family_euphorbiaceae", "ed2_euphorbiaceae", 375),
  ed2_family_callitrichaceae: familyTerminal("ed2_family_callitrichaceae", "ed2_callitrichaceae", 388),
  ed2_family_rubiaceae: familyTerminal("ed2_family_rubiaceae", "ed2_rubiaceae", 579),
};
