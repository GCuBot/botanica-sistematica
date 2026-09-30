import { CladoNode, Especie } from "@/types";

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

export const secondEditionPteridophytaFamilies: Record<string, Especie> = {
  ed2_selaginellaceae: family("ed2_selaginellaceae", "I", "Selaginellaceae", 21),
  ed2_isoetaceae: family("ed2_isoetaceae", "II", "Isoetaceae", 22),
  ed2_equisetaceae: family("ed2_equisetaceae", "III", "Equisetaceae", 23),
  ed2_ophioglossaceae: family("ed2_ophioglossaceae", "IV", "Ophioglossaceae", 23),
  ed2_osmundaceae: family("ed2_osmundaceae", "V", "Osmundaceae", 25),
  ed2_schizaeaceae: family("ed2_schizaeaceae", "VI", "Schizaeaceae", 27),
  ed2_dennstaedtiaceae: family("ed2_dennstaedtiaceae", "VII", "Dennstaedtiaceae", 27),
  ed2_adiantaceae: family("ed2_adiantaceae", "VIII", "Adiantaceae", 29),
  ed2_davalliaceae: family("ed2_davalliaceae", "IX", "Davalliaceae", 34),
  ed2_polypodiaceae: family("ed2_polypodiaceae", "X", "Polypodiaceae", 34),
  ed2_aspidiaceae: family("ed2_aspidiaceae", "XI", "Aspidiaceae", 37),
  ed2_aspleniaceae: family("ed2_aspleniaceae", "XII", "Aspleniaceae", 38),
  ed2_athyriaceae: family("ed2_athyriaceae", "XIII", "Athyriaceae", 39),
  ed2_thelypteridaceae: family("ed2_thelypteridaceae", "XIV", "Thelypteridaceae", 40),
  ed2_lomariopsidaceae: family("ed2_lomariopsidaceae", "XV", "Lomariopsidaceae", 42),
  ed2_blechnaceae: family("ed2_blechnaceae", "XVI", "Blechnaceae", 43),
  ed2_marsileaceae: family("ed2_marsileaceae", "XVII", "Marsileaceae", 44),
  ed2_salviniaceae: family("ed2_salviniaceae", "XVIII", "Salviniaceae", 45),
  ed2_azollaceae: family("ed2_azollaceae", "XIX", "Azollaceae", 46),
};

function familyTerminal(nodeId: string, familyId: string, manualPage: number): CladoNode {
  const especie = secondEditionPteridophytaFamilies[familyId];
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

export const secondEditionPteridophytaKeyData: Record<string, CladoNode> = {
  ed2_pteridophyta_a: {
    id: "ed2_pteridophyta_a",
    milestone: "Pteridophyta",
    manualPage: 8,
    descripcion: "¿Los esporangios están encerrados en esporocarpos?",
    opcionA: {
      label: "Sí; planta acuática, flotante o arraigada, o de lugares pantanosos",
      keyStep: "A",
      nextNodeId: "ed2_pteridophyta_b",
    },
    opcionA_prima: {
      label: "No; esporangios dispuestos de otra forma y planta terrestre",
      keyStep: "A'",
      nextNodeId: "ed2_pteridophyta_e",
    },
  },
  ed2_pteridophyta_b: {
    id: "ed2_pteridophyta_b",
    manualPage: 8,
    descripcion: "¿La planta flota libremente o está arraigada?",
    opcionA: {
      label: "Planta flotante y libre",
      keyStep: "B",
      nextNodeId: "ed2_pteridophyta_c",
    },
    opcionA_prima: {
      label: "Planta arraigada al fondo o en suelo pantanoso",
      keyStep: "B'",
      nextNodeId: "ed2_pteridophyta_d",
    },
  },
  ed2_pteridophyta_c: {
    id: "ed2_pteridophyta_c",
    manualPage: 8,
    descripcion: "En plantas flotantes libres, ¿qué tamaño tienen las hojas?",
    opcionA: {
      label: "Hojas escamosas de unos 2 mm; esporocarpos aislados y sésiles sobre el rizoma",
      keyStep: "C",
      nextNodeId: "ed2_family_azollaceae",
    },
    opcionA_prima: {
      label: "Hojas de más de 5 mm; esporocarpos sobre ramificaciones laterales sumergidas",
      keyStep: "C'",
      nextNodeId: "ed2_family_salviniaceae",
    },
  },
  ed2_pteridophyta_d: {
    id: "ed2_pteridophyta_d",
    manualPage: 8,
    descripcion: "En plantas arraigadas, ¿dónde se encuentran los esporangios?",
    opcionA: {
      label: "En esporocarpos sobre rizomas o pecíolos; hojas 4-folioladas o lineares",
      keyStep: "D",
      nextNodeId: "ed2_family_marsileaceae",
    },
    opcionA_prima: {
      label: "En cavidades cerca de la base de hojas subuladas dispuestas en roseta",
      keyStep: "D'",
      nextNodeId: "ed2_family_isoetaceae",
    },
  },
  ed2_pteridophyta_e: {
    id: "ed2_pteridophyta_e",
    manualPage: 8,
    descripcion: "¿Las hojas son pequeñas y escuamiformes o son frondes desarrolladas?",
    opcionA: {
      label: "Pequeñas, escuamiformes o reducidas a vainas; esporófilos formando estróbilos",
      keyStep: "E",
      nextNodeId: "ed2_pteridophyta_f",
    },
    opcionA_prima: {
      label: "Grandes, generalmente partidas o compuestas; esporangios sobre las frondes",
      keyStep: "E'",
      nextNodeId: "ed2_pteridophyta_g",
    },
  },
  ed2_pteridophyta_f: {
    id: "ed2_pteridophyta_f",
    manualPage: 8,
    descripcion: "Con hojas reducidas, ¿cómo son el tallo y la ramificación?",
    opcionA: {
      label: "Ramificación verticilada; tallos ásperos con sílice y hojas reducidas a vainas",
      keyStep: "F",
      nextNodeId: "ed2_family_equisetaceae",
    },
    opcionA_prima: {
      label: "Ramificación dicotómica; hojas pequeñas en espiral o en cuatro hileras",
      keyStep: "F'",
      nextNodeId: "ed2_family_selaginellaceae",
    },
  },
  ed2_pteridophyta_g: {
    id: "ed2_pteridophyta_g",
    manualPage: 9,
    descripcion: "En plantas con frondes, ¿dónde se disponen los esporangios?",
    opcionA: {
      label: "Sobre pinnas reducidas a la nervadura, formando espigas o panojas",
      keyStep: "G",
      nextNodeId: "ed2_pteridophyta_h",
    },
    opcionA_prima: {
      label: "Sobre el envés de las frondes, cubiertos o no por indusio o margen replegado",
      keyStep: "G'",
      nextNodeId: "ed2_pteridophyta_k",
    },
  },
  ed2_pteridophyta_h: {
    id: "ed2_pteridophyta_h",
    manualPage: 9,
    descripcion: "¿Las pinnas fértiles son superiores o inferiores?",
    opcionA: {
      label: "Pinnas superiores; los esporangios forman espigas",
      keyStep: "H",
      nextNodeId: "ed2_family_osmundaceae",
    },
    opcionA_prima: {
      label: "Una o más pinnas inferiores se alargan y forman espigas o panojas",
      keyStep: "H'",
      nextNodeId: "ed2_pteridophyta_j",
    },
  },
  ed2_pteridophyta_j: {
    id: "ed2_pteridophyta_j",
    manualPage: 9,
    descripcion: "¿Cómo es la porción estéril de la fronde?",
    opcionA: {
      label: "Entera y ovada; esporangios dehiscentes por una ranura transversal",
      keyStep: "J",
      nextNodeId: "ed2_family_ophioglossaceae",
    },
    opcionA_prima: {
      label: "Compuesta; esporangios con anillo apical y dehiscencia longitudinal",
      keyStep: "J'",
      nextNodeId: "ed2_family_schizaeaceae",
    },
  },
  ed2_pteridophyta_k: {
    id: "ed2_pteridophyta_k",
    manualPage: 9,
    descripcion: "¿Los soros están cubiertos por indusio o por el margen de la fronde?",
    opcionA: {
      label: "No; carecen de indusio y no están cubiertos por el margen",
      keyStep: "K",
      nextNodeId: "ed2_pteridophyta_l",
    },
    opcionA_prima: {
      label: "Sí; están cubiertos por indusio o por el margen revoluto",
      keyStep: "K'",
      nextNodeId: "ed2_pteridophyta_p",
    },
  },
  ed2_pteridophyta_l: {
    id: "ed2_pteridophyta_l",
    manualPage: 9,
    descripcion: "Sin indusio, ¿cómo se distribuyen los soros?",
    opcionA: {
      label: "Circulares y uniseriados, paralelos a la nervadura media; fronde entera o pinada",
      keyStep: "L",
      nextNodeId: "ed2_family_polypodiaceae",
    },
    opcionA_prima: {
      label: "Cubren parcial o totalmente el envés, pero nunca están dispuestos en una sola serie",
      keyStep: "L'",
      nextNodeId: "ed2_pteridophyta_m",
    },
  },
  ed2_pteridophyta_m: {
    id: "ed2_pteridophyta_m",
    manualPage: 9,
    descripcion: "¿Los soros cubren parcial o totalmente el envés?",
    opcionA: {
      label: "Cubren parcialmente el envés de la fronde",
      keyStep: "M",
      nextNodeId: "ed2_pteridophyta_n",
    },
    opcionA_prima: {
      label: "Cubren totalmente el envés; esporangios acrosticoides",
      keyStep: "M'",
      nextNodeId: "ed2_pteridophyta_o",
    },
  },
  ed2_pteridophyta_n: {
    id: "ed2_pteridophyta_n",
    manualPage: 9,
    descripcion: "Con soros parciales, ¿cómo son la fronde y el raquis?",
    opcionA: {
      label: "Fronde bipinnada y raquis con escamas",
      keyStep: "N",
      nextNodeId: "ed2_family_aspidiaceae",
    },
    opcionA_prima: {
      label: "Fronde unipinnada, pinnas lobado-serradas y raquis con pelos estrellados",
      keyStep: "N'",
      nextNodeId: "ed2_family_thelypteridaceae",
    },
  },
  ed2_pteridophyta_o: {
    id: "ed2_pteridophyta_o",
    manualPage: 9,
    descripcion: "Con esporangios acrosticoides, ¿las frondes son enteras o compuestas?",
    opcionA: {
      label: "Enteras y dimorfas; fértiles linear-lanceoladas y con pecíolo más largo",
      keyStep: "O",
      nextNodeId: "ed2_family_lomariopsidaceae",
    },
    opcionA_prima: {
      label: "Compuestas y bipinnadas",
      keyStep: "O'",
      nextNodeId: "ed2_family_adiantaceae",
    },
  },
  ed2_pteridophyta_p: {
    id: "ed2_pteridophyta_p",
    manualPage: 9,
    descripcion: "¿Los soros están cubiertos por el margen revoluto o por un indusio?",
    opcionA: {
      label: "Por el margen revoluto de la lámina",
      keyStep: "P",
      nextNodeId: "ed2_pteridophyta_q",
    },
    opcionA_prima: {
      label: "Por un indusio, no por el margen revoluto",
      keyStep: "P'",
      nextNodeId: "ed2_pteridophyta_r",
    },
  },
  ed2_pteridophyta_q: {
    id: "ed2_pteridophyta_q",
    manualPage: 9,
    descripcion: "Con margen revoluto, ¿existe además una membrana submarginal?",
    opcionA: {
      label: "Sí; margen revoluto y membrana submarginal",
      keyStep: "Q",
      nextNodeId: "ed2_family_dennstaedtiaceae",
    },
    opcionA_prima: {
      label: "No; solamente el margen revoluto de la lámina",
      keyStep: "Q'",
      nextNodeId: "ed2_family_adiantaceae",
    },
  },
  ed2_pteridophyta_r: {
    id: "ed2_pteridophyta_r",
    manualPage: 9,
    descripcion: "¿El indusio es oblongo o lineal, o tiene otra forma?",
    opcionA: {
      label: "Oblongo a lineal y alargado",
      keyStep: "R",
      nextNodeId: "ed2_pteridophyta_s",
    },
    opcionA_prima: {
      label: "Circular, semicircular, reniforme, deltoide, curvado o en forma de copa",
      keyStep: "R'",
      nextNodeId: "ed2_pteridophyta_t",
    },
  },
  ed2_pteridophyta_s: {
    id: "ed2_pteridophyta_s",
    manualPage: 9,
    descripcion: "Con indusio alargado, ¿dónde se encuentran los soros?",
    opcionA: {
      label: "Paralelos a ambos lados de la nervadura central",
      keyStep: "S",
      nextNodeId: "ed2_family_blechnaceae",
    },
    opcionA_prima: {
      label: "Sobre las nervaduras secundarias",
      keyStep: "S'",
      nextNodeId: "ed2_family_aspleniaceae",
    },
  },
  ed2_pteridophyta_t: {
    id: "ed2_pteridophyta_t",
    manualPage: 10,
    descripcion: "¿El indusio es circular o semicircular y peltado?",
    opcionA: {
      label: "Sí; circular o semicircular, peltado y caduco",
      keyStep: "T",
      nextNodeId: "ed2_family_aspidiaceae",
    },
    opcionA_prima: {
      label: "No; reniforme, deltoide, alargado, curvado en j o en forma de copa",
      keyStep: "T'",
      nextNodeId: "ed2_pteridophyta_u",
    },
  },
  ed2_pteridophyta_u: {
    id: "ed2_pteridophyta_u",
    manualPage: 10,
    descripcion: "¿Los soros están en extremos de nervaduras que no llegan al borde?",
    opcionA: {
      label: "Sí; en extremos de nervaduras secundarias e indusio reniforme",
      keyStep: "U",
      nextNodeId: "ed2_family_davalliaceae",
    },
    opcionA_prima: {
      label: "No; se ubican sobre las nervaduras secundarias",
      keyStep: "U'",
      nextNodeId: "ed2_pteridophyta_v",
    },
  },
  ed2_pteridophyta_v: {
    id: "ed2_pteridophyta_v",
    manualPage: 10,
    descripcion: "¿Cómo es el indusio y su margen?",
    opcionA: {
      label: "Reniforme o semilunar, con pelos en el margen",
      keyStep: "V",
      nextNodeId: "ed2_family_thelypteridaceae",
    },
    opcionA_prima: {
      label: "En forma de copa, alargado o deltoide; margen laciniado o entero",
      keyStep: "V'",
      nextNodeId: "ed2_family_athyriaceae",
    },
  },
  ed2_family_blechnaceae: familyTerminal("ed2_family_blechnaceae", "ed2_blechnaceae", 43),
  ed2_family_marsileaceae: familyTerminal("ed2_family_marsileaceae", "ed2_marsileaceae", 44),
  ed2_family_salviniaceae: familyTerminal("ed2_family_salviniaceae", "ed2_salviniaceae", 45),
  ed2_family_azollaceae: familyTerminal("ed2_family_azollaceae", "ed2_azollaceae", 46),
};
