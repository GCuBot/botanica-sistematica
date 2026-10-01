import { CladoNode, Especie } from "@/types";

function species(
  id: string,
  scientificName: string,
  description: string,
  characteristics: string,
  distribution: string
): Especie {
  return {
    id,
    nombreCientifico: scientificName,
    nombreVulgar: scientificName.includes("Spirodela") || scientificName.includes("Lemna") ? "Lenteja de agua" : scientificName,
    familia: "XXXII. Lemnaceae",
    descripcion: description,
    caracteristicas: characteristics,
    distribucion: distribution,
  };
}

export const secondEditionLemnaceaeSpecies: Record<string, Especie> = {
  ed2_spirodela_intermedia: species(
    "ed2_spirodela_intermedia", "Spirodela intermedia", "Planta acuatica flotante diminuta, con frondes ovado-circulares.",
    "Frondes de 4-7,5 mm con siete a doce nervaduras poco visibles; numerosas raices fasciculadas y dos bolsas proliferas.",
    "Sudamerica calida hasta Buenos Aires; comun en pantanos, aguas quietas, riachos del Delta y la ribera."
  ),
  ed2_lemna_valdiviana: species(
    "ed2_lemna_valdiviana", "Lemna valdiviana", "Lenteja de agua de frondes delgadas y planas.",
    "Frondes uninervadas, ovado-oblongas, de 1,7-5,3 mm, agrupadas de a cuatro a ocho; una raiz por fronde.",
    "Comun en toda America; aguas tranquilas."
  ),
  ed2_lemna_minima: species(
    "ed2_lemna_minima", "Lemna minima", "Lenteja de agua de frondes delgadas y planas.",
    "Frondes uninervadas, anchamente ovadas, de 0,9-2,2 mm, solitarias o unidas de a dos; una raiz por fronde.",
    "Comun en toda America; aguas tranquilas."
  ),
  ed2_lemna_disperma: species(
    "ed2_lemna_disperma", "Lemna disperma", "Lenteja de agua de frondes gruesas y algo gibosas.",
    "Frondes obovadas de 1,7-2,55 mm, con tres a cinco nervaduras y una papula apical; ovario con uno o dos ovulos.",
    "Australia y Nueva Zelanda; rara en el norte bonaerense, en aguas tranquilas."
  ),
  ed2_lemna_gibba: species(
    "ed2_lemna_gibba", "Lemna gibba", "Lenteja de agua de frondes anchas y muy gibosas.",
    "Frondes obovado-orbiculares de 3,2-8 mm; nervadura media muy visible y nervaduras laterales poco marcadas.",
    "Cosmopolita; muy frecuente en Buenos Aires, donde florece regularmente."
  ),
  ed2_lemna_parodiana: species(
    "ed2_lemna_parodiana", "Lemna parodiana", "Lenteja de agua de frondes gruesas y moderadamente gibosas.",
    "Frondes de 2-3 mm, con tres nervaduras poco visibles y frecuentes manchas de antocianina; ovario generalmente con dos ovulos.",
    "Argentina y Peru; aguas estancadas."
  ),
  ed2_wolffiella_oblonga: species(
    "ed2_wolffiella_oblonga", "Wolffiella oblonga", "Planta flotante sin raices, de frondes delgadas y oblongas.",
    "Fronde de 1,7-4,6 mm, con aerenquima distribuido en casi toda su superficie; una sola bolsa prolifera.",
    "America; aguas tranquilas."
  ),
  ed2_wolffiella_lingulata: species(
    "ed2_wolffiella_lingulata", "Wolffiella lingulata", "Planta flotante sin raices, con frondes planas y asimetricas.",
    "Fronde de unos 4,9 por 1,8 mm, con aerenquima concentrado en un extremo; solitaria o en pares.",
    "America; aguas tranquilas."
  ),
  ed2_wolffia_columbiana: species(
    "ed2_wolffia_columbiana", "Wolffia columbiana", "Planta flotante sin raices, de fronde globular diminuta.",
    "Cara superior convexa y no punteada; fronde de 0,5-0,7 por 0,7-0,9 mm, sin celulas epidermicas pigmentadas.",
    "America; charcas y estanques."
  ),
  ed2_wolffia_papulifera: species(
    "ed2_wolffia_papulifera", "Wolffia papulifera", "Planta flotante sin raices, de fronde globular diminuta.",
    "Cara superior aplanada con una papila central; fronde de 0,8-1,5 por 0,7-1 mm, con celulas pigmentadas.",
    "America calida; hallada en la ribera de Hudson, cerca de Buenos Aires."
  ),
};

export const secondEditionLemnaceaeKeyData: Record<string, CladoNode> = {
  ed2_family_lemnaceae: {
    id: "ed2_family_lemnaceae", milestone: "Lemnaceae", manualPage: 172,
    descripcion: "¿Las frondes poseen raices?",
    opcionA: { label: "Si; con raices y dos bolsas proliferas", keyStep: "A", nextNodeId: "ed2_lemnaceae_roots" },
    opcionA_prima: { label: "No; sin raices y con una sola bolsa prolifera", keyStep: "A'", nextNodeId: "ed2_lemnaceae_rootless" },
  },
  ed2_lemnaceae_roots: {
    id: "ed2_lemnaceae_roots", milestone: "Lemnaceae: frondes con raices", manualPage: 172,
    descripcion: "¿Cada fronde posee varias raices fasciculadas o una sola?",
    opcionA: { label: "Varias raices fasciculadas", keyStep: "B", especieId: "ed2_spirodela_intermedia" },
    opcionA_prima: { label: "Una raiz solitaria", keyStep: "B'", nextNodeId: "ed2_lemna" },
  },
  ed2_lemnaceae_rootless: {
    id: "ed2_lemnaceae_rootless", milestone: "Lemnaceae: frondes sin raices", manualPage: 172,
    descripcion: "¿Las frondes son delgadas y oblongas o gruesas y globulares?",
    opcionA: { label: "Delgadas y oblongas", keyStep: "C", nextNodeId: "ed2_wolffiella" },
    opcionA_prima: { label: "Gruesas y globulares", keyStep: "C'", nextNodeId: "ed2_wolffia" },
  },
  ed2_lemna: {
    id: "ed2_lemna", milestone: "Lemna", manualPage: 172,
    descripcion: "¿Las frondes son delgadas y planas o gruesas y gibosas?",
    opcionA: { label: "Delgadas, uninervadas, planas o apenas convexas", keyStep: "A", nextNodeId: "ed2_lemna_thin_grouping" },
    opcionA_prima: { label: "Gruesas, con tres a cinco nervaduras y cara inferior fuertemente convexa", keyStep: "A'", nextNodeId: "ed2_lemna_thick_shape" },
  },
  ed2_lemna_thin_grouping: {
    id: "ed2_lemna_thin_grouping", milestone: "Lemna: frondes delgadas", manualPage: 172,
    descripcion: "¿Las frondes se agrupan de a cuatro a ocho o aparecen solitarias y en pares?",
    opcionA: { label: "Cuatro a ocho; ovado-oblongas de 1,7-5,3 mm", keyStep: "B", especieId: "ed2_lemna_valdiviana" },
    opcionA_prima: { label: "Solitarias o de a dos; anchamente ovadas de 0,9-2,2 mm", keyStep: "B'", especieId: "ed2_lemna_minima" },
  },
  ed2_lemna_thick_shape: {
    id: "ed2_lemna_thick_shape", milestone: "Lemna: frondes gruesas", manualPage: 172,
    descripcion: "¿Las frondes son obovadas y algo gibosas u obovado-orbiculares y muy gibosas?",
    opcionA: { label: "Obovadas, de 1,7-2,55 mm, algo gibosas y con papula apical", keyStep: "C", especieId: "ed2_lemna_disperma" },
    opcionA_prima: { label: "Obovado-orbiculares, anchas y muy gibosas", keyStep: "C'", nextNodeId: "ed2_lemna_gibbous_size" },
  },
  ed2_lemna_gibbous_size: {
    id: "ed2_lemna_gibbous_size", milestone: "Lemna: frondes muy gibosas", manualPage: 173,
    descripcion: "¿Las frondes miden 3,2-8 mm o solamente 2-3 mm?",
    opcionA: { label: "3,2-8 mm; nervadura media muy conspicua", keyStep: "D", especieId: "ed2_lemna_gibba" },
    opcionA_prima: { label: "2-3 mm; tres nervaduras poco visibles y frecuente antocianina", keyStep: "D'", especieId: "ed2_lemna_parodiana" },
  },
  ed2_wolffiella: {
    id: "ed2_wolffiella", milestone: "Wolffiella", manualPage: 173,
    descripcion: "¿El aerenquima ocupa casi toda la fronde o se concentra en un extremo?",
    opcionA: { label: "En casi toda la fronde; 1,7-4,6 mm de largo", keyStep: "A", especieId: "ed2_wolffiella_oblonga" },
    opcionA_prima: { label: "Concentrado en un extremo; fronde de unos 4,9 mm", keyStep: "A'", especieId: "ed2_wolffiella_lingulata" },
  },
  ed2_wolffia: {
    id: "ed2_wolffia", milestone: "Wolffia", manualPage: 175,
    descripcion: "¿La cara superior de la fronde es convexa o aplanada con una papila central?",
    opcionA: { label: "Convexa y no punteada; sin celulas epidermicas pigmentadas", keyStep: "A", especieId: "ed2_wolffia_columbiana" },
    opcionA_prima: { label: "Aplanada, con papila central y celulas epidermicas pigmentadas", keyStep: "A'", especieId: "ed2_wolffia_papulifera" },
  },
};
