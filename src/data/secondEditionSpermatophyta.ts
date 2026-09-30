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

export const secondEditionSpermatophytaFamilies: Record<string, Especie> = {
  ed2_ephedraceae: family("ed2_ephedraceae", "XX", "Ephedraceae", 48),
  ed2_typhaceae: family("ed2_typhaceae", "XXI", "Typhaceae", 48),
  ed2_potamogetonaceae: family("ed2_potamogetonaceae", "XXII", "Potamogetonaceae", 51),
  ed2_zannichelliaceae: family("ed2_zannichelliaceae", "XXIII", "Zannichelliaceae", 53),
  ed2_juncaginaceae: family("ed2_juncaginaceae", "XXIV", "Juncaginaceae", 54),
  ed2_alismataceae: family("ed2_alismataceae", "XXV", "Alismataceae", 56),
  ed2_butomaceae: family("ed2_butomaceae", "XXVI", "Butomaceae", 59),
  ed2_hydrocharitaceae: family("ed2_hydrocharitaceae", "XXVII", "Hydrocharitaceae", 60),
  ed2_gramineae: family("ed2_gramineae", "XXVIII", "Gramineae", 63),
  ed2_cyperaceae: family("ed2_cyperaceae", "XXIX", "Cyperaceae", 151),
  ed2_palmae: family("ed2_palmae", "XXX", "Palmae", 169),
  ed2_araceae: family("ed2_araceae", "XXXI", "Araceae", 170),
  ed2_lemnaceae: family("ed2_lemnaceae", "XXXII", "Lemnaceae", 171),
  ed2_bromeliaceae: family("ed2_bromeliaceae", "XXXIII", "Bromeliaceae", 175),
  ed2_commelinaceae: family("ed2_commelinaceae", "XXXIV", "Commelinaceae", 177),
  ed2_pontederiaceae: family("ed2_pontederiaceae", "XXXV", "Pontederiaceae", 179),
  ed2_juncaceae: family("ed2_juncaceae", "XXXVI", "Juncaceae", 183),
  ed2_liliaceae: family("ed2_liliaceae", "XXXVII", "Liliaceae", 187),
  ed2_amaryllidaceae: family("ed2_amaryllidaceae", "XXXVIII", "Amaryllidaceae", 193),
  ed2_dioscoreaceae: family("ed2_dioscoreaceae", "XXXIX", "Dioscoreaceae", 198),
  ed2_iridaceae: family("ed2_iridaceae", "XL", "Iridaceae", 199),
  ed2_zingiberaceae: family("ed2_zingiberaceae", "XLI", "Zingiberaceae", 204),
  ed2_cannaceae: family("ed2_cannaceae", "XLII", "Cannaceae", 206),
  ed2_marantaceae: family("ed2_marantaceae", "XLIII", "Marantaceae", 207),
  ed2_orchidaceae: family("ed2_orchidaceae", "XLIV", "Orchidaceae", 208),
};

function familyTerminal(nodeId: string, familyId: string, manualPage: number): CladoNode {
  const especie = secondEditionSpermatophytaFamilies[familyId];
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

const secondEditionSpermatophytaBranchSpecs: Record<string, BranchSpec> = {
  ed2_root: {
    descripcion: "¿La planta produce flores y semillas?",
    manualPage: 8,
    opcionA: {
      label: "No; se reproduce por esporos (Pteridophyta)",
      keyStep: "I",
      next: "ed2_pteridophyta_a",
    },
    opcionAPrima: {
      label: "Sí; se reproduce por flores y semillas (Spermatophyta)",
      keyStep: "II",
      next: "ed2_spermatophyta_a",
    },
  },
  ed2_spermatophyta_a: {
    descripcion: "¿Los óvulos están desnudos o encerrados en un ovario?",
    manualPage: 10,
    milestone: "Spermatophyta",
    opcionA: {
      label: "Óvulos desnudos (Gymnospermae)",
      keyStep: "1",
      next: "ed2_family_ephedraceae",
    },
    opcionAPrima: {
      label: "Óvulos encerrados en un ovario (Angiospermae)",
      keyStep: "2",
      next: "ed2_angiospermae_a",
    },
  },
  ed2_angiospermae_a: {
    descripcion: "¿El embrión tiene uno o dos cotiledones?",
    manualPage: 10,
    milestone: "Angiospermae",
    opcionA: {
      label: "Un cotiledón; hojas generalmente paralelinervadas y flores trímeras",
      keyStep: "Clase 1",
      next: "ed2_monocotyledoneae_a",
    },
    opcionAPrima: {
      label: "Dos cotiledones; hojas retinervadas y flores tetrámeras o pentámeras",
      keyStep: "Clase 2",
      next: "ed2_dicotyledoneae_a",
    },
  },
  ed2_monocotyledoneae_a: {
    descripcion: "¿La planta es arborescente y posee un estípite terminado en una sola yema?",
    manualPage: 10,
    milestone: "Monocotyledoneae",
    opcionA: {
      label: "Sí; hojas pinnaticompuestas o palmatisectas y panojas protegidas por espata leñosa",
      keyStep: "A",
      next: "ed2_family_palmae",
    },
    opcionAPrima: {
      label: "No; planta herbácea con otros caracteres",
      keyStep: "A'",
      next: "ed2_monocotyledoneae_b",
    },
  },
  ed2_monocotyledoneae_b: {
    descripcion: "¿Es una planta acuática reducida a un cuerpo taliforme?",
    manualPage: 10,
    opcionA: {
      label: "Sí; no diferenciada en tallos y hojas, con flores diminutas desnudas",
      keyStep: "B",
      next: "ed2_family_lemnaceae",
    },
    opcionAPrima: {
      label: "No; posee tallos y hojas bien diferenciados",
      keyStep: "B'",
      next: "ed2_monocotyledoneae_c",
    },
  },
  ed2_monocotyledoneae_c: {
    descripcion: "¿Las flores carecen de corola y son desnudas o tienen perigonio verdoso?",
    manualPage: 10,
    opcionA: {
      label: "Sí; flores desnudas o con perigonio verdoso poco llamativo",
      keyStep: "C",
      next: "ed2_monocotyledoneae_d",
    },
    opcionAPrima: {
      label: "No; cáliz y corola diferenciados o perigonio coralino vistoso",
      keyStep: "C'",
      next: "ed2_monocotyledoneae_ll",
    },
  },
  ed2_monocotyledoneae_d: {
    descripcion: "¿Las flores desnudas están protegidas por brácteas especializadas y reunidas en espiguillas?",
    manualPage: 11,
    opcionA: {
      label: "Sí; brácteas herbáceas, papiráceas o coriáceas y flores en espiguillas",
      keyStep: "D",
      next: "ed2_monocotyledoneae_e",
    },
    opcionAPrima: {
      label: "No; flores desnudas o con perigonio verdoso, pero no reunidas de esa forma",
      keyStep: "D'",
      next: "ed2_monocotyledoneae_f",
    },
  },
  ed2_monocotyledoneae_e: {
    descripcion: "¿Cómo son los tallos, las vainas y el fruto?",
    manualPage: 11,
    opcionA: {
      label: "Tallos generalmente huecos y redondeados, con nudos marcados; vainas abiertas; cariopse",
      keyStep: "E",
      next: "ed2_family_gramineae",
    },
    opcionAPrima: {
      label: "Tallos generalmente macizos y triangulares; vainas cerradas; aquenio",
      keyStep: "E'",
      next: "ed2_family_cyperaceae",
    },
  },
  ed2_monocotyledoneae_f: {
    descripcion: "¿El perigonio verdoso está formado por seis piezas?",
    manualPage: 11,
    opcionA: {
      label: "Sí; seis piezas verdosas",
      keyStep: "F",
      next: "ed2_monocotyledoneae_g",
    },
    opcionAPrima: {
      label: "No; menos de seis piezas o flores completamente desnudas",
      keyStep: "F'",
      next: "ed2_monocotyledoneae_j",
    },
  },
  ed2_monocotyledoneae_g: {
    descripcion: "¿La planta es trepadora?",
    manualPage: 11,
    opcionA: {
      label: "Sí; arbusto o hierba trepadora",
      keyStep: "G",
      next: "ed2_monocotyledoneae_h",
    },
    opcionAPrima: {
      label: "No; planta no trepadora",
      keyStep: "G'",
      next: "ed2_monocotyledoneae_i",
    },
  },
  ed2_monocotyledoneae_h: {
    descripcion: "En trepadoras, ¿el ovario es ínfero o súpero?",
    manualPage: 11,
    opcionA: {
      label: "Ínfero; hojas retinervadas",
      keyStep: "H",
      next: "ed2_family_dioscoreaceae",
    },
    opcionAPrima: {
      label: "Súpero; hojas paralelinervadas",
      keyStep: "H'",
      next: "ed2_family_liliaceae",
    },
  },
  ed2_monocotyledoneae_i: {
    descripcion: "En plantas no trepadoras, ¿el gineceo es dialicarpelar?",
    manualPage: 11,
    opcionA: {
      label: "Sí; formado por tres a seis carpelos libres",
      keyStep: "I",
      next: "ed2_family_juncaginaceae",
    },
    opcionAPrima: {
      label: "No; gineceo gamocarpelar",
      keyStep: "I'",
      next: "ed2_family_juncaceae",
    },
  },
  ed2_monocotyledoneae_j: {
    descripcion: "¿Es una planta robusta con hojas ensiformes y flores unisexuales en espigas densas?",
    manualPage: 11,
    opcionA: {
      label: "Sí; planta erecta de terrenos pantanosos",
      keyStep: "J",
      next: "ed2_family_typhaceae",
    },
    opcionAPrima: {
      label: "No; planta acuática flotante o sumergida",
      keyStep: "J'",
      next: "ed2_monocotyledoneae_k",
    },
  },
  ed2_monocotyledoneae_k: {
    descripcion: "En acuáticas, ¿las hojas son anchas, crasas y forman una roseta flotante?",
    manualPage: 11,
    opcionA: {
      label: "Sí; sin tallos, pero con estolones",
      keyStep: "K",
      next: "ed2_family_araceae",
    },
    opcionAPrima: {
      label: "No; hojas herbáceas o membranáceas sobre tallos alargados",
      keyStep: "K'",
      next: "ed2_monocotyledoneae_l",
    },
  },
  ed2_monocotyledoneae_l: {
    descripcion: "¿Las flores acuáticas son hermafroditas o unisexuales?",
    manualPage: 11,
    opcionA: {
      label: "Hermafroditas y dispuestas en espigas",
      keyStep: "L",
      next: "ed2_family_potamogetonaceae",
    },
    opcionAPrima: {
      label: "Unisexuales y axilares",
      keyStep: "L'",
      next: "ed2_family_zannichelliaceae",
    },
  },
  ed2_monocotyledoneae_ll: {
    descripcion: "¿La flor tiene uno o dos estambres fértiles?",
    manualPage: 11,
    opcionA: {
      label: "Sí; uno, muy rara vez dos",
      keyStep: "LL",
      next: "ed2_monocotyledoneae_m",
    },
    opcionAPrima: {
      label: "No; más de dos estambres",
      keyStep: "LL'",
      next: "ed2_monocotyledoneae_p",
    },
  },
  ed2_monocotyledoneae_m: {
    descripcion: "¿El estambre está soldado al pistilo formando un ginostemio y el polen está en polinias?",
    manualPage: 11,
    opcionA: {
      label: "Sí; ginostemio y polinias",
      keyStep: "M",
      next: "ed2_family_orchidaceae",
    },
    opcionAPrima: {
      label: "No; estambre separado del pistilo y polen no agrupado en polinias",
      keyStep: "M'",
      next: "ed2_monocotyledoneae_n",
    },
  },
  ed2_monocotyledoneae_n: {
    descripcion: "¿La antera es bilocular o unilocular?",
    manualPage: 11,
    opcionA: {
      label: "Bilocular",
      keyStep: "N",
      next: "ed2_family_zingiberaceae",
    },
    opcionAPrima: {
      label: "Unilocular",
      keyStep: "N'",
      next: "ed2_monocotyledoneae_o",
    },
  },
  ed2_monocotyledoneae_o: {
    descripcion: "¿Cuántos óvulos contiene cada cavidad del ovario?",
    manualPage: 11,
    opcionA: {
      label: "Muchos óvulos",
      keyStep: "O",
      next: "ed2_family_cannaceae",
    },
    opcionAPrima: {
      label: "Un solo óvulo",
      keyStep: "O'",
      next: "ed2_family_marantaceae",
    },
  },
  ed2_monocotyledoneae_p: {
    descripcion: "Con más de dos estambres, ¿la planta es acuática?",
    manualPage: 11,
    opcionA: {
      label: "Sí; flotante o sumergida",
      keyStep: "P",
      next: "ed2_monocotyledoneae_q",
    },
    opcionAPrima: {
      label: "No; terrestre o de lugares pantanosos",
      keyStep: "P'",
      next: "ed2_monocotyledoneae_s",
    },
  },
  ed2_monocotyledoneae_q: {
    descripcion: "En acuáticas, ¿las flores son zigomorfas o actinomorfas?",
    manualPage: 11,
    opcionA: {
      label: "Zigomorfas, azules o rosadas; ovario súpero trilocular",
      keyStep: "Q",
      next: "ed2_family_pontederiaceae",
    },
    opcionAPrima: {
      label: "Actinomorfas, blancas o amarillas",
      keyStep: "Q'",
      next: "ed2_monocotyledoneae_r",
    },
  },
  ed2_monocotyledoneae_r: {
    descripcion: "En flores acuáticas actinomorfas, ¿el ovario es súpero o ínfero?",
    manualPage: 11,
    opcionA: {
      label: "Súpero",
      keyStep: "R",
      next: "ed2_family_butomaceae",
    },
    opcionAPrima: {
      label: "Ínfero",
      keyStep: "R'",
      next: "ed2_family_hydrocharitaceae",
    },
  },
  ed2_monocotyledoneae_s: {
    descripcion: "En terrestres o palustres, ¿el gineceo es dialicarpelar?",
    manualPage: 12,
    opcionA: {
      label: "Sí; hojas largamente pecioladas, ovadas o sagitadas",
      keyStep: "S",
      next: "ed2_family_alismataceae",
    },
    opcionAPrima: {
      label: "No; gineceo gamocarpelar",
      keyStep: "S'",
      next: "ed2_monocotyledoneae_t",
    },
  },
  ed2_monocotyledoneae_t: {
    descripcion: "¿Es palustre o inundable, con hojas elípticas pecioladas y flores zigomorfas?",
    manualPage: 12,
    opcionA: {
      label: "Sí; flores azules o violáceas",
      keyStep: "T",
      next: "ed2_family_pontederiaceae",
    },
    opcionAPrima: {
      label: "No; terrestre o epífita",
      keyStep: "T'",
      next: "ed2_monocotyledoneae_u",
    },
  },
  ed2_monocotyledoneae_u: {
    descripcion: "¿Es epífita, con hojas subuladas en roseta?",
    manualPage: 12,
    opcionA: {
      label: "Sí; cáliz y corola bien diferenciados",
      keyStep: "U",
      next: "ed2_family_bromeliaceae",
    },
    opcionAPrima: {
      label: "No; planta terrícola",
      keyStep: "U'",
      next: "ed2_monocotyledoneae_v",
    },
  },
  ed2_monocotyledoneae_v: {
    descripcion: "En terrícolas, ¿el ovario es ínfero o súpero?",
    manualPage: 12,
    opcionA: {
      label: "Ínfero",
      keyStep: "V",
      next: "ed2_monocotyledoneae_w",
    },
    opcionAPrima: {
      label: "Súpero",
      keyStep: "V'",
      next: "ed2_monocotyledoneae_x",
    },
  },
  ed2_monocotyledoneae_w: {
    descripcion: "Con ovario ínfero, ¿posee tres o seis estambres?",
    manualPage: 12,
    opcionA: {
      label: "Tres estambres",
      keyStep: "W",
      next: "ed2_family_iridaceae",
    },
    opcionAPrima: {
      label: "Seis estambres",
      keyStep: "W'",
      next: "ed2_family_amaryllidaceae",
    },
  },
  ed2_monocotyledoneae_x: {
    descripcion: "Con ovario súpero, ¿hay cáliz y corola diferenciados?",
    manualPage: 12,
    opcionA: {
      label: "Sí; cáliz y corola bien diferenciados",
      keyStep: "X",
      next: "ed2_family_commelinaceae",
    },
    opcionAPrima: {
      label: "No; cáliz y corola iguales, formando un perigonio coralino",
      keyStep: "X'",
      next: "ed2_family_liliaceae",
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

export const secondEditionSpermatophytaKeyData: Record<string, CladoNode> = {
  ...Object.fromEntries(
    Object.entries(secondEditionSpermatophytaBranchSpecs).map(([id, spec]) => [
      id,
      buildBranch(id, spec),
    ])
  ),
  ed2_family_zannichelliaceae: familyTerminal("ed2_family_zannichelliaceae", "ed2_zannichelliaceae", 53),
  ed2_family_juncaginaceae: familyTerminal("ed2_family_juncaginaceae", "ed2_juncaginaceae", 54),
  ed2_family_alismataceae: familyTerminal("ed2_family_alismataceae", "ed2_alismataceae", 56),
  ed2_family_butomaceae: familyTerminal("ed2_family_butomaceae", "ed2_butomaceae", 59),
  ed2_family_hydrocharitaceae: familyTerminal("ed2_family_hydrocharitaceae", "ed2_hydrocharitaceae", 60),
  ed2_family_gramineae: familyTerminal("ed2_family_gramineae", "ed2_gramineae", 63),
  ed2_family_cyperaceae: familyTerminal("ed2_family_cyperaceae", "ed2_cyperaceae", 151),
  ed2_family_palmae: familyTerminal("ed2_family_palmae", "ed2_palmae", 169),
  ed2_family_araceae: familyTerminal("ed2_family_araceae", "ed2_araceae", 170),
  ed2_family_lemnaceae: familyTerminal("ed2_family_lemnaceae", "ed2_lemnaceae", 171),
  ed2_family_bromeliaceae: familyTerminal("ed2_family_bromeliaceae", "ed2_bromeliaceae", 175),
  ed2_family_commelinaceae: familyTerminal("ed2_family_commelinaceae", "ed2_commelinaceae", 177),
  ed2_family_pontederiaceae: familyTerminal("ed2_family_pontederiaceae", "ed2_pontederiaceae", 179),
  ed2_family_juncaceae: familyTerminal("ed2_family_juncaceae", "ed2_juncaceae", 183),
  ed2_family_liliaceae: familyTerminal("ed2_family_liliaceae", "ed2_liliaceae", 187),
  ed2_family_amaryllidaceae: familyTerminal("ed2_family_amaryllidaceae", "ed2_amaryllidaceae", 193),
  ed2_family_dioscoreaceae: familyTerminal("ed2_family_dioscoreaceae", "ed2_dioscoreaceae", 198),
  ed2_family_iridaceae: familyTerminal("ed2_family_iridaceae", "ed2_iridaceae", 199),
  ed2_family_zingiberaceae: familyTerminal("ed2_family_zingiberaceae", "ed2_zingiberaceae", 204),
  ed2_family_cannaceae: familyTerminal("ed2_family_cannaceae", "ed2_cannaceae", 206),
  ed2_family_marantaceae: familyTerminal("ed2_family_marantaceae", "ed2_marantaceae", 207),
  ed2_family_orchidaceae: familyTerminal("ed2_family_orchidaceae", "ed2_orchidaceae", 208),
};
