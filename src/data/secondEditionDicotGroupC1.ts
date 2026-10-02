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

export const secondEditionDicotGroupC1Families: Record<string, Especie> = {
  ed2_nymphaeaceae: family("ed2_nymphaeaceae", "LXIII", "Nymphaeaceae", 276),
  ed2_ranunculaceae: family("ed2_ranunculaceae", "LXV", "Ranunculaceae", 278),
  ed2_papaveraceae: family("ed2_papaveraceae", "LXVIII", "Papaveraceae", 286),
  ed2_capparidaceae: family("ed2_capparidaceae", "LXIX", "Capparidaceae", 289),
  ed2_resedaceae: family("ed2_resedaceae", "LXXI", "Resedaceae", 306),
  ed2_crassulaceae: family("ed2_crassulaceae", "LXXII", "Crassulaceae", 307),
  ed2_leguminosae: family("ed2_leguminosae", "LXXV", "Leguminosae", 315),
  ed2_tropaeolaceae: family("ed2_tropaeolaceae", "LXXVIII", "Tropaeolaceae", 362),
  ed2_rutaceae: family("ed2_rutaceae", "LXXXI", "Rutaceae", 367),
  ed2_polygalaceae: family("ed2_polygalaceae", "LXXXIII", "Polygalaceae", 372),
  ed2_violaceae: family("ed2_violaceae", "XCIX", "Violaceae", 424),
};

function terminal(nodeId: string, familyId: string, page: number): CladoNode {
  const especie = secondEditionDicotGroupC1Families[familyId];
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

const secondEditionDicotGroupC1BranchSpecs: Record<string, BranchSpec> = {
  ed2_dicot_group_c_a: {
    page: 14,
    description: "Grupo C: ¿el gineceo está formado por varios pistilos separados?",
    optionA: ["A", "Gineceo dialicarpelar, con dos o más pistilos separados", "ed2_dicot_group_c_b"],
    optionAPrime: ["A'", "Un solo pistilo formado por uno o más carpelos soldados", "ed2_dicot_group_c_f"],
  },
  ed2_dicot_group_c_b: {
    page: 14,
    description: "Con gineceo dialicarpelar, ¿las hojas tienen estípulas?",
    optionA: ["B", "Hojas con estípulas", "ed2_family_rosaceae"],
    optionAPrime: ["B'", "Hojas sin estípulas", "ed2_dicot_group_c_c"],
  },
  ed2_dicot_group_c_c: {
    page: 14,
    description: "Sin estípulas, ¿los estambres son indefinidos o son cinco a seis?",
    optionA: ["C", "Estambres indefinidos", "ed2_family_ranunculaceae"],
    optionAPrime: ["C'", "Cinco a seis estambres", "ed2_dicot_group_c_d"],
  },
  ed2_dicot_group_c_d: {
    page: 14,
    description: "Con cinco a seis estambres, ¿es árbol o hierba?",
    optionA: ["D", "Árbol", "ed2_family_rutaceae"],
    optionAPrime: ["D'", "Hierba", "ed2_dicot_group_c_e"],
  },
  ed2_dicot_group_c_e: {
    page: 14,
    description: "En hierbas, ¿es acuática con hojas peltadas o pigmea de suelo húmedo?",
    optionA: ["E", "Acuática, con hojas flotantes peltadas y hojas sumergidas laciniadas", "ed2_family_nymphaeaceae"],
    optionAPrime: ["E'", "Pigmea de suelo húmedo, con hojas lineares enteras", "ed2_family_crassulaceae"],
  },
  ed2_dicot_group_c_f: {
    page: 14,
    description: "Con un solo pistilo, ¿las flores son zigomorfas o actinomorfas?",
    optionA: ["F", "Zigomorfas o irregulares", "ed2_dicot_group_c_g"],
    optionAPrime: ["F'", "Actinomorfas", "ed2_dicot_group_c_m"],
  },
  ed2_dicot_group_c_g: {
    page: 14,
    description: "En flores zigomorfas, ¿el cáliz tiene dos sépalos?",
    optionA: ["G", "Dos sépalos, cuatro pétalos y seis estambres", "ed2_family_papaveraceae"],
    optionAPrime: ["G'", "Cuatro a cinco sépalos, dos a cinco pétalos y cinco a veinte estambres", "ed2_dicot_group_c_h"],
  },
  ed2_dicot_group_c_h: {
    page: 14,
    description: "¿Hay alrededor de veinte estambres o solamente cinco a diez?",
    optionA: ["H", "Alrededor de veinte estambres", "ed2_family_resedaceae"],
    optionAPrime: ["H'", "Cinco a diez estambres", "ed2_dicot_group_c_i"],
  },
  ed2_dicot_group_c_i: {
    page: 14,
    description: "¿El ovario es unicarpelar y el fruto es una legumbre?",
    optionA: ["I", "Diez estambres; ovario unicarpelar unilocular; fruto legumbre", "ed2_family_leguminosae"],
    optionAPrime: ["I'", "Cinco a ocho estambres; ovario bi- o tricarpelar; fruto no legumbre", "ed2_dicot_group_c_j"],
  },
  ed2_dicot_group_c_j: {
    page: 14,
    description: "¿Las hojas tienen estípulas?",
    optionA: ["J", "Cinco a seis estambres y hojas con estípulas", "ed2_dicot_group_c_k"],
    optionAPrime: ["J'", "Ocho estambres y hojas sin estípulas", "ed2_dicot_group_c_l"],
  },
  ed2_dicot_group_c_k: {
    page: 14,
    description: "Con hojas estipuladas, ¿hay cinco o seis estambres?",
    optionA: ["K", "Cinco estambres y estípulas herbáceas", "ed2_family_violaceae"],
    optionAPrime: ["K'", "Seis estambres y estípulas espiniformes", "ed2_family_capparidaceae"],
  },
  ed2_dicot_group_c_l: {
    page: 14,
    description: "Con ocho estambres y sin estípulas, ¿los estambres están unidos?",
    optionA: ["L", "Estambres monadelfos; fruto bilocular; cáliz no espolonado; hierba", "ed2_family_polygalaceae"],
    optionAPrime: ["L'", "Estambres libres; fruto trilocular; cáliz espolonado; enredadera", "ed2_family_tropaeolaceae"],
  },
};

function buildNode(id: string, spec: BranchSpec): CladoNode {
  const [keyA, labelA, nextA] = spec.optionA;
  const [keyB, labelB, nextB] = spec.optionAPrime;
  return {
    id,
    milestone: id === "ed2_dicot_group_c_a" ? "Grupo C" : undefined,
    manualPage: spec.page,
    descripcion: spec.description,
    opcionA: { label: labelA, keyStep: keyA, nextNodeId: nextA },
    opcionA_prima: { label: labelB, keyStep: keyB, nextNodeId: nextB },
  };
}

export const secondEditionDicotGroupC1KeyData: Record<string, CladoNode> = {
  ...Object.fromEntries(
    Object.entries(secondEditionDicotGroupC1BranchSpecs).map(([id, spec]) => [id, buildNode(id, spec)])
  ),
  ed2_family_leguminosae: {
    id: "ed2_family_leguminosae",
    milestone: "LXXV. Leguminosae",
    manualPage: 315,
    descripcion: "Las flores son actinomorfas y densamente agrupadas, o zigomorfas?",
    opcionA: { label: "Actinomorfas, en espigas o capitulos densos", keyStep: "A", nextNodeId: "ed2_leguminosae_mimosoideae" },
    opcionA_prima: { label: "Zigomorfas, con corola imbricada", keyStep: "A'", nextNodeId: "ed2_leguminosae_zigomorphic" },
  },
  ed2_leguminosae_zigomorphic: {
    id: "ed2_leguminosae_zigomorphic",
    milestone: "Leguminosae: flores zigomorfas",
    manualPage: 315,
    descripcion: "El estandarte queda interno o externo respecto de los otros petalos?",
    opcionA: { label: "Interno; sepalos libres y estambres usualmente libres", keyStep: "B", nextNodeId: "ed2_leguminosae_caesalpinioideae" },
    opcionA_prima: { label: "Externo; corola amariposada y sepalos soldados", keyStep: "B'", nextNodeId: "ed2_leguminosae_papilionoideae" },
  },
  ed2_family_rutaceae: terminal("ed2_family_rutaceae", "ed2_rutaceae", 367),
  ed2_family_polygalaceae: terminal("ed2_family_polygalaceae", "ed2_polygalaceae", 372),
  ed2_family_violaceae: terminal("ed2_family_violaceae", "ed2_violaceae", 424),
};
