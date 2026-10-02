import { CladoNode, Especie } from "@/types";

function species(id: string, scientificName: string, commonName: string, family: string, characteristics: string, distribution: string): Especie {
  return {
    id,
    nombreCientifico: scientificName,
    nombreVulgar: commonName,
    familia: family,
    descripcion: characteristics.split(";", 1)[0] + ".",
    caracteristicas: characteristics,
    distribucion: distribution,
  };
}

function single(id: string, milestone: string, manualPage: number, speciesId: string, label: string): CladoNode {
  return {
    id,
    milestone,
    manualPage,
    descripcion: label,
    opcionA: { label, keyStep: "1", especieId: speciesId },
    opcionA_prima: { label, keyStep: "1", especieId: speciesId },
  };
}

export const secondEditionMyrtaceaeMelastomataceaeSpecies: Record<string, Especie> = {
  ed2_blepharocalyx_tweediei: species("ed2_blepharocalyx_tweediei", "Blepharocalyx tweediei", "Arrayan", "CVIII. Myrtaceae", "Arbol de 5-12 m con tronco de hasta 40 cm de diametro; hojas opuestas, cortamente pecioladas, lanceoladas, enteras, glabras, de 4-8 cm; flores blancas en cimas dicotomicas, con petalos fimbriados; bayas globosas rojas", "Sur de Brasil, Uruguay y nordeste de Argentina. Frecuente en la ribera platense y el Delta; florece a fines de primavera."),
  ed2_psidium_luridum: species("ed2_psidium_luridum", "Psidium luridum", "Araza", "CVIII. Myrtaceae", "Arbusto rastrero, glabro, rizomatoso, de 15-50 cm; hojas sesiles, coriaceas, lustrosas, elipticas o eliptico-lanceoladas; flores blancas solitarias axilares; bayas esfericas de 1 cm con caliz persistente", "Sur de Brasil, Uruguay y nordeste de Argentina. Hallada en las sierras de Balcarce."),
  ed2_myrceugenia_glaucescens: species("ed2_myrceugenia_glaucescens", "Myrceugenia glaucescens", "Murta", "CVIII. Myrtaceae", "Arbolito o arbusto de 3-6 m; hojas opuestas, oblanceoladas, enteras, discolores, glabras, de 5-8 cm; flores blancas y fragantes, 2-3 en las axilas de las hojas; bayas elipsoides de unos 12 mm", "Sur de Brasil, Uruguay y nordeste de Argentina. Frecuente en matorrales del Delta y la ribera del Plata."),
  ed2_eugenia_uruguayensis: species("ed2_eugenia_uruguayensis", "Eugenia uruguayensis", "Guayabo blanco", "CVIII. Myrtaceae", "Arbusto o arbolito con ramitas pubescentes o casi glabras; hojas ovado-oblongas, generalmente subobtusas, de unos 7 cm; flores blancas en pequenos racimos o corimbos subumbeliformes, rara vez solitarias; petalos fimbriados; bayas ovoides", "Sur de Brasil, Uruguay y nordeste de Argentina hasta el Delta."),
  ed2_tibouchina_nitida: species("ed2_tibouchina_nitida", "Tibouchina nitida", "Tibouchina nitida", "CIX. Melastomataceae", "Hierba perenne estolonifera; tallos erectos, tetragonos; hojas opuestas, cortamente pecioladas, lanceoladas, serruladas y con cinco nervaduras, de 4-8 cm; flores tetrameras en cimas 3-floras; petalos rosado-lilacinos; anteras falcadas", "Sur de Brasil, Uruguay y nordeste de Argentina. En matorrales del Delta y ribera platense; florece en verano."),
};

export const secondEditionMyrtaceaeMelastomataceaeKeyData: Record<string, CladoNode> = {
  ed2_family_myrtaceae: {
    id: "ed2_family_myrtaceae",
    milestone: "CVIII. Myrtaceae",
    manualPage: 444,
    descripcion: "Como se disponen las flores?",
    opcionA: { label: "Flores en cimas dicotomicas; semillas con cotiledones diminutos y radicula grande enroscada", keyStep: "A", especieId: "ed2_blepharocalyx_tweediei" },
    opcionA_prima: { label: "Flores solitarias, en fasciculos, racimos o corimbos", keyStep: "A'", nextNodeId: "ed2_myrtaceae_habit" },
  },
  ed2_myrtaceae_habit: {
    id: "ed2_myrtaceae_habit",
    milestone: "Myrtaceae",
    manualPage: 444,
    descripcion: "La planta es arbusto rastrero serrano o arbol de ribera?",
    opcionA: { label: "Arbusto rastrero de la region serrana; semillas con cotiledones muy reducidos", keyStep: "B", especieId: "ed2_psidium_luridum" },
    opcionA_prima: { label: "Arboles del Delta y ribera platense; cotiledones grandes", keyStep: "B'", nextNodeId: "ed2_myrtaceae_leaf_color" },
  },
  ed2_myrtaceae_leaf_color: {
    id: "ed2_myrtaceae_leaf_color",
    milestone: "Myrtaceae",
    manualPage: 444,
    descripcion: "Las hojas son discolores o concolores?",
    opcionA: { label: "Hojas discolores, agudas; flores 1-3 en axilas; cotiledones delgados y plegados", keyStep: "C", especieId: "ed2_myrceugenia_glaucescens" },
    opcionA_prima: { label: "Hojas concolores, subobtusas; flores en pequenos racimos o corimbos; cotiledones carnosos", keyStep: "C'", especieId: "ed2_eugenia_uruguayensis" },
  },
  ed2_family_melastomataceae: single("ed2_family_melastomataceae", "CIX. Melastomataceae", 447, "ed2_tibouchina_nitida", "Identificar como Tibouchina nitida"),
};
