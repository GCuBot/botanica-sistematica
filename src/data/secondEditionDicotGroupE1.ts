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

export const secondEditionDicotGroupE1Families: Record<string, Especie> = {
  ed2_nyctaginaceae: family("ed2_nyctaginaceae", "LVII", "Nyctaginaceae", 255),
  ed2_thymelaeaceae: family("ed2_thymelaeaceae", "CV", "Thymelaeaceae", 439),
  ed2_myrsinaceae: family("ed2_myrsinaceae", "CXIV", "Myrsinaceae", 471),
  ed2_primulaceae: family("ed2_primulaceae", "CXV", "Primulaceae", 471),
  ed2_plumbaginaceae: family("ed2_plumbaginaceae", "CXVI", "Plumbaginaceae", 475),
  ed2_sapotaceae: family("ed2_sapotaceae", "CXVII", "Sapotaceae", 476),
  ed2_symplocaceae: family("ed2_symplocaceae", "CXVIII", "Symplocaceae", 478),
  ed2_oleaceae: family("ed2_oleaceae", "CXIX", "Oleaceae", 479),
  ed2_loganiaceae: family("ed2_loganiaceae", "CXX", "Loganiaceae", 480),
  ed2_buddlejaceae: family("ed2_buddlejaceae", "CXXI", "Buddlejaceae", 481),
  ed2_gentianaceae: family("ed2_gentianaceae", "CXXII", "Gentianaceae", 482),
  ed2_menyanthaceae: family("ed2_menyanthaceae", "CXXIII", "Menyanthaceae", 486),
  ed2_apocynaceae: family("ed2_apocynaceae", "CXXIV", "Apocynaceae", 486),
  ed2_asclepiadaceae: family("ed2_asclepiadaceae", "CXXV", "Asclepiadaceae", 489),
  ed2_convolvulaceae: family("ed2_convolvulaceae", "CXXVI", "Convolvulaceae", 498),
  ed2_hydrophyllaceae: family("ed2_hydrophyllaceae", "CXXVII", "Hydrophyllaceae", 507),
  ed2_boraginaceae: family("ed2_boraginaceae", "CXXVIII", "Boraginaceae", 508),
  ed2_verbenaceae: family("ed2_verbenaceae", "CXXIX", "Verbenaceae", 516),
  ed2_labiatae: family("ed2_labiatae", "CXXX", "Labiatae", 526),
  ed2_solanaceae: family("ed2_solanaceae", "CXXXI", "Solanaceae", 539),
  ed2_scrophulariaceae: family("ed2_scrophulariaceae", "CXXXII", "Scrophulariaceae", 555),
  ed2_bignoniaceae: family("ed2_bignoniaceae", "CXXXIII", "Bignoniaceae", 567),
  ed2_martiniaceae: family("ed2_martiniaceae", "CXXXIV", "Martiniaceae", 569),
  ed2_lentibulariaceae: family("ed2_lentibulariaceae", "CXXXV", "Lentibulariaceae", 570),
  ed2_acanthaceae: family("ed2_acanthaceae", "CXXXVI", "Acanthaceae", 571),
  ed2_plantaginaceae: family("ed2_plantaginaceae", "CXXXVII", "Plantaginaceae", 576),
};

const secondEditionDicotGroupE1FamilyPages: Record<string, number> = {
  ed2_nyctaginaceae: 255,
  ed2_thymelaeaceae: 439,
  ed2_myrsinaceae: 471,
  ed2_primulaceae: 471,
  ed2_plumbaginaceae: 475,
  ed2_sapotaceae: 476,
  ed2_symplocaceae: 478,
  ed2_oleaceae: 479,
  ed2_loganiaceae: 480,
  ed2_buddlejaceae: 481,
  ed2_gentianaceae: 482,
  ed2_menyanthaceae: 486,
  ed2_apocynaceae: 486,
  ed2_asclepiadaceae: 489,
  ed2_convolvulaceae: 498,
  ed2_hydrophyllaceae: 507,
  ed2_boraginaceae: 508,
  ed2_verbenaceae: 516,
  ed2_labiatae: 526,
  ed2_solanaceae: 539,
  ed2_scrophulariaceae: 555,
  ed2_bignoniaceae: 567,
  ed2_martiniaceae: 569,
  ed2_lentibulariaceae: 570,
  ed2_acanthaceae: 571,
  ed2_plantaginaceae: 576,
};

const expandedFamilyIds = new Set(["ed2_nyctaginaceae"]);

function terminal(nodeId: string, familyId: string, page: number): CladoNode {
  const especie = secondEditionDicotGroupE1Families[familyId];
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

const secondEditionDicotGroupE1BranchSpecs: Record<string, BranchSpec> = {
  ed2_dicot_group_e_a: {
    page: 18,
    description: "Grupo E: ¿el ovario es súpero o ínfero?",
    optionA: ["A", "Ovario súpero", "ed2_dicot_group_e_b"],
    optionAPrime: ["A'", "Ovario ínfero", "ed2_dicot_group_e_d_lower"],
  },
  ed2_dicot_group_e_b: {
    page: 18,
    description: "Con ovario súpero, ¿las flores son zigomorfas o actinomorfas?",
    optionA: ["B", "Zigomorfas, con un solo plano de simetría", "ed2_dicot_group_e_c"],
    optionAPrime: ["B'", "Actinomorfas, con dos o más planos de simetría", "ed2_dicot_group_e_k"],
  },
  ed2_dicot_group_e_c: {
    page: 18,
    description: "En flores zigomorfas, ¿es una acuática con pequeñas trampas en las hojas?",
    optionA: ["C", "Acuática, con hojas sumergidas provistas de ascidias para capturar artrópodos", "ed2_family_lentibulariaceae"],
    optionAPrime: ["C'", "Terrestre y sin trampas para artrópodos", "ed2_dicot_group_e_d"],
  },
  ed2_dicot_group_e_d: {
    page: 18,
    description: "En terrestres zigomorfas, ¿es una liana con hojas compuestas?",
    optionA: ["D", "Liana con hojas compuestas", "ed2_family_bignoniaceae"],
    optionAPrime: ["D'", "Hierba, arbusto o árbol, rara vez apoyante, con hojas simples", "ed2_dicot_group_e_e"],
  },
  ed2_dicot_group_e_e: {
    page: 18,
    description: "Con hojas simples, ¿son alternas u opuestas?",
    optionA: ["E", "Alternas", "ed2_dicot_group_e_f"],
    optionAPrime: ["E'", "Opuestas", "ed2_dicot_group_e_g"],
  },
  ed2_dicot_group_e_f: {
    page: 18,
    description: "Con hojas alternas, ¿el fruto es drupáceo o es una cápsula con muchas semillas?",
    optionA: ["F", "Drupáceo con cuatro semillas, o dividido en cuatro coquitos", "ed2_family_boraginaceae"],
    optionAPrime: ["F'", "Cápsula multiseminada", "ed2_family_scrophulariaceae"],
  },
  ed2_dicot_group_e_g: {
    page: 18,
    description: "Con hojas opuestas, ¿el fruto es cápsula o es drupáceo o dividido en coquitos?",
    optionA: ["G", "Cápsula", "ed2_dicot_group_e_h"],
    optionAPrime: ["G'", "Drupáceo o dividido en cuatro coquitos", "ed2_dicot_group_e_j"],
  },
  ed2_dicot_group_e_h: {
    page: 18,
    description: "Con fruto cápsula, ¿el ovario es uni- o bilocular?",
    optionA: ["H", "Unilocular; cápsula drupácea y placentación parietal", "ed2_family_martiniaceae"],
    optionAPrime: ["H'", "Bilocular y con placentación axilar", "ed2_dicot_group_e_i"],
  },
  ed2_dicot_group_e_i: {
    page: 18,
    description: "Con ovario bilocular, ¿cada lóculo contiene muchos o pocos óvulos?",
    optionA: ["I", "Muchos óvulos", "ed2_family_scrophulariaceae"],
    optionAPrime: ["I'", "Dos óvulos, raramente hasta diez", "ed2_family_acanthaceae"],
  },
  ed2_dicot_group_e_j: {
    page: 18,
    description: "Con fruto drupáceo o dividido en coquitos, ¿el ovario está profundamente lobulado?",
    optionA: ["J", "Tetralobulado, con estilo entre los lóbulos y corola marcadamente bilabiada", "ed2_family_labiatae"],
    optionAPrime: ["J'", "No tetralobulado, con estilo terminal y flores apenas bilabiadas", "ed2_family_verbenaceae"],
  },
  ed2_dicot_group_e_k: {
    page: 18,
    description: "En flores actinomorfas, ¿hay látex abundante, ginostemio y polinias?",
    optionA: ["K", "Sí; látex abundante, ginostemio y polen en polinias", "ed2_family_asclepiadaceae"],
    optionAPrime: ["K'", "No; sin látex conspicuo, androceo y gineceo separados, sin polinias", "ed2_dicot_group_e_l"],
  },
  ed2_dicot_group_e_l: {
    page: 18,
    description: "¿Los filamentos de los estambres están soldados con la corola?",
    optionA: ["L", "No están soldados con la corola ni con el perigonio corolino", "ed2_dicot_group_e_m"],
    optionAPrime: ["L'", "Están más o menos unidos a la corola", "ed2_dicot_group_e_n"],
  },
  ed2_dicot_group_e_m: {
    page: 19,
    description: "Con filamentos libres de la corola, ¿cómo son las hojas y cuántos estambres hay?",
    optionA: ["M", "Hojas opuestas simples y uno a cinco estambres", "ed2_family_nyctaginaceae"],
    optionAPrime: ["M'", "Hojas alternas compuestas y cinco a numerosos estambres", "ed2_family_leguminosae"],
  },
  ed2_dicot_group_e_n: {
    page: 19,
    description: "Con filamentos unidos a la corola, ¿los estambres son numerosos?",
    optionA: ["N", "Muy numerosos", "ed2_family_symplocaceae"],
    optionAPrime: ["N'", "Dos a doce", "ed2_dicot_group_e_o"],
  },
  ed2_dicot_group_e_o: {
    page: 19,
    description: "¿Los estambres duplican el número de divisiones del perigonio?",
    optionA: ["O", "Sí; número doble", "ed2_family_thymelaeaceae"],
    optionAPrime: ["O'", "No; mismo número que los lóbulos de la corola", "ed2_dicot_group_e_p"],
  },
  ed2_dicot_group_e_p: {
    page: 19,
    description: "¿Los estambres se ubican sobre los lóbulos o alternan con ellos?",
    optionA: ["P", "Sobre los lóbulos de la corola", "ed2_dicot_group_e_q"],
    optionAPrime: ["P'", "Alternos con los lóbulos", "ed2_dicot_group_e_t"],
  },
  ed2_dicot_group_e_q: {
    page: 19,
    description: "Con estambres sobre los lóbulos, ¿es árbol o hierba?",
    optionA: ["Q", "Árbol", "ed2_dicot_group_e_r"],
    optionAPrime: ["Q'", "Hierba", "ed2_dicot_group_e_s"],
  },
  ed2_dicot_group_e_r: {
    page: 19,
    description: "En árboles, ¿el ovario es unilocular o plurilocular?",
    optionA: ["R", "Unilocular", "ed2_family_myrsinaceae"],
    optionAPrime: ["R'", "Con dos a cuatro lóculos", "ed2_family_sapotaceae"],
  },
  ed2_dicot_group_e_s: {
    page: 19,
    description: "En hierbas, ¿hay numerosos óvulos o uno solo?",
    optionA: ["S", "Óvulos numerosos", "ed2_family_primulaceae"],
    optionAPrime: ["S'", "Óvulo solitario", "ed2_family_plumbaginaceae"],
  },
  ed2_dicot_group_e_t: {
    page: 19,
    description: "Con estambres alternos a los lóbulos, ¿hay dos o cuatro a cinco estambres?",
    optionA: ["T", "Dos estambres", "ed2_family_oleaceae"],
    optionAPrime: ["T'", "Cuatro a cinco estambres", "ed2_dicot_group_e_u"],
  },
  ed2_dicot_group_e_u: {
    page: 19,
    description: "¿Es acuática con hojas orbiculares flotantes o es terrestre?",
    optionA: ["U", "Acuática, con hojas orbiculares flotantes largamente pecioladas", "ed2_family_menyanthaceae"],
    optionAPrime: ["U'", "Terrestre", "ed2_dicot_group_e_v"],
  },
  ed2_dicot_group_e_v: {
    page: 19,
    description: "En plantas terrestres, ¿las hojas son opuestas o alternas o arrosetadas?",
    optionA: ["V", "Opuestas", "ed2_dicot_group_e_w"],
    optionAPrime: ["V'", "Alternas o dispuestas en roseta basal", "ed2_dicot_group_e_z"],
  },
  ed2_dicot_group_e_w: {
    page: 19,
    description: "Con hojas opuestas, ¿el gineceo posee dos ovarios separados?",
    optionA: ["W", "Dos ovarios separados, unidos por el estilo", "ed2_family_apocynaceae"],
    optionAPrime: ["W'", "Un solo ovario", "ed2_dicot_group_e_x"],
  },
  ed2_dicot_group_e_x: {
    page: 19,
    description: "Con un solo ovario, ¿es uni- o plurilocular?",
    optionA: ["X", "Unilocular", "ed2_family_gentianaceae"],
    optionAPrime: ["X'", "Con dos a cuatro lóculos", "ed2_dicot_group_e_y"],
  },
  ed2_dicot_group_e_y: {
    page: 19,
    description: "Con ovario plurilocular, ¿las flores son tetrámeras o pentámeras?",
    optionA: ["Y", "Tetrámeras", "ed2_family_buddlejaceae"],
    optionAPrime: ["Y'", "Pentámeras", "ed2_family_loganiaceae"],
  },
  ed2_dicot_group_e_z: {
    page: 19,
    description: "Con hojas alternas o arrosetadas, ¿las flores son tetrámeras y poco llamativas?",
    optionA: ["Z", "Tetrámeras; corola membranosa; hojas en roseta; flores en espigas", "ed2_family_plantaginaceae"],
    optionAPrime: ["Z'", "Pentámeras; corola llamativa; hojas generalmente alternas", "ed2_dicot_group_e_a_lower"],
  },
  ed2_dicot_group_e_a_lower: {
    page: 19,
    description: "¿Las flores forman espigas o racimos unilaterales escorpioides?",
    optionA: ["a", "Sí; espigas o racimos unilaterales escorpioides", "ed2_dicot_group_e_b_lower"],
    optionAPrime: ["a'", "No; solitarias o en cimas, nunca en inflorescencias escorpioides", "ed2_dicot_group_e_c_lower"],
  },
  ed2_dicot_group_e_b_lower: {
    page: 19,
    description: "En inflorescencias escorpioides, ¿el estilo es profundamente bífido?",
    optionA: ["b", "Profundamente bífido", "ed2_family_hydrophyllaceae"],
    optionAPrime: ["b'", "Indiviso o cortamente bilobado", "ed2_family_boraginaceae"],
  },
  ed2_dicot_group_e_c_lower: {
    page: 20,
    description: "En flores solitarias o cimosas, ¿cuántos óvulos hay por carpelo?",
    optionA: ["c", "Generalmente dos, a veces uno a tres, erectos desde la base", "ed2_family_convolvulaceae"],
    optionAPrime: ["c'", "Generalmente más de dos, sobre placentas axilares", "ed2_family_solanaceae"],
  },
};

function buildNode(id: string, spec: BranchSpec): CladoNode {
  const [keyA, labelA, nextA] = spec.optionA;
  const [keyB, labelB, nextB] = spec.optionAPrime;
  return {
    id,
    milestone: id === "ed2_dicot_group_e_a" ? "Grupo E" : undefined,
    manualPage: spec.page,
    descripcion: spec.description,
    opcionA: { label: labelA, keyStep: keyA, nextNodeId: nextA },
    opcionA_prima: { label: labelB, keyStep: keyB, nextNodeId: nextB },
  };
}

export const secondEditionDicotGroupE1KeyData: Record<string, CladoNode> = {
  ...Object.fromEntries(
    Object.entries(secondEditionDicotGroupE1BranchSpecs).map(([id, spec]) => [id, buildNode(id, spec)])
  ),
  ...Object.fromEntries(
    Object.keys(secondEditionDicotGroupE1Families)
      .filter((familyId) => !expandedFamilyIds.has(familyId))
      .map((familyId) => {
      const page = secondEditionDicotGroupE1FamilyPages[familyId];
      return [`ed2_family_${familyId.slice(4)}`, terminal(`ed2_family_${familyId.slice(4)}`, familyId, page)];
      })
  ),
};
