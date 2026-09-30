import { CladoNode, Especie } from "@/types";

function species(
  id: string,
  scientificName: string,
  description: string,
  characteristics: string,
  distribution: string,
  commonName: string
): Especie {
  return {
    id,
    nombreCientifico: scientificName,
    nombreVulgar: commonName,
    familia: "XXVIII. Gramineae",
    descripcion: description,
    caracteristicas: characteristics,
    distribucion: distribution,
  };
}

export const secondEditionGramineaeSpecies: Record<string, Especie> = {
  ed2_phyllostachys_aurea: species(
    "ed2_phyllostachys_aurea",
    "Phyllostachys aurea",
    "Bambú de cañas erectas de 2-4 m y rizomas alargados.",
    "Tres estambres; entrenudos acanalados del lado donde nacen las ramas; hojas cortamente pecioladas de 5-15 cm.",
    "Originario de China; cultivado como ornamental y a veces espontáneo.",
    "Bambú amarillo"
  ),
  ed2_guadua_trinii: species(
    "ed2_guadua_trinii",
    "Guadua trinii",
    "Bambú robusto de rizomas gruesos y cortos, con cañas huecas de 6-10 m.",
    "Seis estambres; entrenudos cilíndricos; nudos con espinas rígidas y curvas; espiguillas de cinco a ocho flores.",
    "Sur del Brasil y nordeste argentino hasta el Río de la Plata; Punta Lara.",
    "Tacuaruzú, tacuara brava"
  ),
  ed2_rhynchoryza_subulata: species(
    "ed2_rhynchoryza_subulata",
    "Rhynchoryza subulata",
    "Gramínea palustre perenne y robusta, con cañas de 2-3 m.",
    "Espiguillas fusiformes unifloras, terminadas en una punta alargada; glumas rudimentarias; seis estambres.",
    "Sur del Brasil, Paraguay, Uruguay y nordeste argentino; accidental en la Capital Federal.",
    "Rhynchoryza subulata"
  ),
  ed2_leersia_hexandra: species(
    "ed2_leersia_hexandra",
    "Leersia hexandra",
    "Gramínea palustre perenne y rizomatosa, con cañas comprimidas de 20-50 cm.",
    "Espiguillas ovadas unifloras, muy comprimidas lateralmente y sin glumas; hojas lanceoladas; seis estambres.",
    "Pantropical; frecuente en el Delta, la ribera platense y pantanos del interior.",
    "Leersia hexandra"
  ),
  ed2_luziola_peruviana: species(
    "ed2_luziola_peruviana",
    "Luziola peruviana",
    "Gramínea palustre perenne y delicada, con cañas ascendentes de 10-40 cm.",
    "Espiguillas sin glumas y con lemma mútica; flores masculinas y femeninas en panojas separadas.",
    "América cálida; común en lugares pantanosos.",
    "Luziola peruviana"
  ),
  ed2_zizaniopsis_bonariensis: species(
    "ed2_zizaniopsis_bonariensis",
    "Zizaniopsis bonariensis",
    "Gramínea acuática o palustre perenne y robusta, de hasta 2 m.",
    "Espiguillas unisexuales sin glumas; flores de ambos sexos en la misma panoja; lemma femenina largamente aristada.",
    "Pajonales del Delta, de la provincia de Buenos Aires y del Uruguay.",
    "Espadaña"
  ),
};

function continuationNode(group: number, manualPage: number): CladoNode {
  return {
    id: `ed2_gramineae_group_${group}`,
    milestone: `Gramineae: grupo ${group}`,
    manualPage,
    descripcion: `Grupo ${group}: continuar con la clave de géneros y especies.`,
    opcionA: { label: `Continuar desarrollando el grupo ${group}`, keyStep: `Grupo ${group}`, especieId: "ed2_gramineae" },
    opcionA_prima: { label: `Continuar desarrollando el grupo ${group}`, keyStep: `Grupo ${group}`, especieId: "ed2_gramineae" },
  };
}

export const secondEditionGramineaeKeyData: Record<string, CladoNode> = {
  ed2_family_gramineae: {
    id: "ed2_family_gramineae", milestone: "Gramineae", manualPage: 65,
    descripcion: "¿Las cañas son leñosas y las hojas poseen un pecíolo corto entre lámina y vaina?",
    opcionA: { label: "Cañas leñosas y ramificadas; lámina lanceolada articulada con la vaina; floración espaciada", keyStep: "A", nextNodeId: "ed2_gramineae_group_1" },
    opcionA_prima: { label: "Cañas herbáceas, rara vez subleñosas; hojas sin pecíolo; floración anual", keyStep: "A'", nextNodeId: "ed2_gramineae_b" },
  },
  ed2_gramineae_b: {
    id: "ed2_gramineae_b", milestone: "Gramineae: tipo de espiguillas", manualPage: 65,
    descripcion: "¿Hay dos tipos de espiguillas en la misma inflorescencia?",
    opcionA: { label: "Dos tipos: unas con varias lemmas estériles y otras con uno a cinco antecios fértiles", keyStep: "B", nextNodeId: "ed2_gramineae_group_2" },
    opcionA_prima: { label: "Todas las espiguillas iguales en la misma inflorescencia", keyStep: "B'", nextNodeId: "ed2_gramineae_c" },
  },
  ed2_gramineae_c: {
    id: "ed2_gramineae_c", milestone: "Gramineae: pelos de las glumas", manualPage: 65,
    descripcion: "¿Las glumas están cubiertas por pelos ganchudos?",
    opcionA: { label: "Sí, con pelos ganchudos", keyStep: "C", nextNodeId: "ed2_gramineae_group_3" },
    opcionA_prima: { label: "Pubescentes o glabras, pero sin pelos ganchudos", keyStep: "C'", nextNodeId: "ed2_gramineae_d" },
  },
  ed2_gramineae_d: {
    id: "ed2_gramineae_d", milestone: "Gramineae: aristas múltiples", manualPage: 65,
    descripcion: "¿Las glumas o glumelas terminan en una arista trífida o en varias aristas?",
    opcionA: { label: "Arista trífida o varias aristas", keyStep: "D", nextNodeId: "ed2_gramineae_group_4" },
    opcionA_prima: { label: "Múticas o con una arista simple", keyStep: "D'", nextNodeId: "ed2_gramineae_e" },
  },
  ed2_gramineae_e: {
    id: "ed2_gramineae_e", milestone: "Gramineae: involucro", manualPage: 65,
    descripcion: "¿Las espiguillas están rodeadas por cerdas involucrales o por un involucro espinoso?",
    opcionA: { label: "Con cerdas involucrales o involucro espinoso", keyStep: "E", nextNodeId: "ed2_gramineae_group_5" },
    opcionA_prima: { label: "Sin cerdas involucrales ni involucro espinoso", keyStep: "E'", nextNodeId: "ed2_gramineae_f" },
  },
  ed2_gramineae_f: {
    id: "ed2_gramineae_f", milestone: "Gramineae: compresión de la espiguilla", manualPage: 65,
    descripcion: "¿Las espiguillas están muy comprimidas lateralmente?",
    opcionA: { label: "Muy comprimidas lateralmente", keyStep: "F", nextNodeId: "ed2_gramineae_g" },
    opcionA_prima: { label: "Globosas o comprimidas dorsiventralmente", keyStep: "F'", nextNodeId: "ed2_gramineae_h" },
  },
  ed2_gramineae_g: {
    id: "ed2_gramineae_g", milestone: "Gramineae: espiguillas comprimidas", manualPage: 65,
    descripcion: "¿Las glumas caen junto con los antecios?",
    opcionA: { label: "Caducas con los antecios; espiguillas unifloras, rara vez bifloras", keyStep: "G", nextNodeId: "ed2_gramineae_group_6" },
    opcionA_prima: { label: "Persisten en la inflorescencia después de caer los antecios", keyStep: "G'", nextNodeId: "ed2_gramineae_group_7" },
  },
  ed2_gramineae_h: {
    id: "ed2_gramineae_h", milestone: "Gramineae: espiguillas dorsiventrales", manualPage: 65,
    descripcion: "¿Las glumas permanecen en la inflorescencia después de caer los antecios?",
    opcionA: { label: "Persistentes", keyStep: "H", nextNodeId: "ed2_gramineae_group_8" },
    opcionA_prima: { label: "Caducas con los antecios", keyStep: "H'", nextNodeId: "ed2_gramineae_i" },
  },
  ed2_gramineae_i: {
    id: "ed2_gramineae_i", milestone: "Gramineae: disposición por pares", manualPage: 66,
    descripcion: "¿Las espiguillas se disponen por pares en cada nudo del raquis?",
    opcionA: { label: "Por pares: una sésil o subsésil y otra pedicelada; glumas más consistentes que las lemmas", keyStep: "I", nextNodeId: "ed2_gramineae_group_9" },
    opcionA_prima: { label: "No dispuestas por pares; glumas ausentes o herbáceas y lemmas más rígidas", keyStep: "I'", nextNodeId: "ed2_gramineae_group_10" },
  },
  ed2_gramineae_group_1: {
    id: "ed2_gramineae_group_1",
    milestone: "Gramineae: grupo 1, Bambuseae",
    manualPage: 66,
    descripcion: "¿Las flores poseen tres o seis estambres?",
    opcionA: {
      label: "Tres estambres; rizomas viajeros; entrenudos acanalados o aplanados junto a las ramas",
      keyStep: "A",
      especieId: "ed2_phyllostachys_aurea",
    },
    opcionA_prima: {
      label: "Seis estambres; rizomas cortos; entrenudos cilíndricos",
      keyStep: "A'",
      especieId: "ed2_guadua_trinii",
    },
  },
  ed2_gramineae_group_2: continuationNode(2, 66),
  ed2_gramineae_group_3: continuationNode(3, 66),
  ed2_gramineae_group_4: continuationNode(4, 66),
  ed2_gramineae_group_5: continuationNode(5, 67),
  ed2_gramineae_group_6: {
    id: "ed2_gramineae_group_6",
    milestone: "Gramineae: grupo 6",
    manualPage: 67,
    descripcion: "¿Las flores poseen seis estambres y las glumas están ausentes o son rudimentarias?",
    opcionA: { label: "Seis estambres; glumas ausentes o rudimentarias", keyStep: "A", nextNodeId: "ed2_oryzeae_lateral" },
    opcionA_prima: { label: "Tres estambres; glumas presentes", keyStep: "A'", nextNodeId: "ed2_gramineae_group_6_pending" },
  },
  ed2_oryzeae_lateral: {
    id: "ed2_oryzeae_lateral",
    milestone: "Oryzeae: espiguillas comprimidas lateralmente",
    manualPage: 67,
    descripcion: "¿Las espiguillas son fusiformes y la planta es robusta?",
    opcionA: { label: "Fusiformes, con punta alargada; planta robusta de 2-3 m", keyStep: "B", especieId: "ed2_rhynchoryza_subulata" },
    opcionA_prima: { label: "Ovadas, sin punta alargada; planta débil y baja", keyStep: "B'", especieId: "ed2_leersia_hexandra" },
  },
  ed2_gramineae_group_6_pending: {
    id: "ed2_gramineae_group_6_pending", milestone: "Gramineae: grupo 6, tres estambres", manualPage: 67,
    descripcion: "Continuar con los géneros de tres estambres del grupo 6.",
    opcionA: { label: "Continuar desarrollando el grupo 6", keyStep: "A'", especieId: "ed2_gramineae" },
    opcionA_prima: { label: "Continuar desarrollando el grupo 6", keyStep: "A'", especieId: "ed2_gramineae" },
  },
  ed2_gramineae_group_7: continuationNode(7, 67),
  ed2_gramineae_group_8: continuationNode(8, 70),
  ed2_gramineae_group_9: continuationNode(9, 71),
  ed2_gramineae_group_10: {
    id: "ed2_gramineae_group_10",
    milestone: "Gramineae: grupo 10",
    manualPage: 72,
    descripcion: "¿Las espiguillas carecen de glumas?",
    opcionA: { label: "Sin glumas; flores envueltas sólo por lemma y pálea", keyStep: "A", nextNodeId: "ed2_oryzeae_dorsiventral" },
    opcionA_prima: { label: "Con dos o tres estructuras semejantes a glumas", keyStep: "A'", nextNodeId: "ed2_gramineae_group_10_pending" },
  },
  ed2_oryzeae_dorsiventral: {
    id: "ed2_oryzeae_dorsiventral",
    milestone: "Oryzeae: espiguillas sin glumas",
    manualPage: 72,
    descripcion: "¿La lemma es mútica y las flores de cada sexo están en inflorescencias separadas?",
    opcionA: { label: "Lemma mútica; flores masculinas y femeninas en inflorescencias separadas", keyStep: "B", especieId: "ed2_luziola_peruviana" },
    opcionA_prima: { label: "Lemma aristada; flores masculinas y femeninas en la misma inflorescencia", keyStep: "B'", especieId: "ed2_zizaniopsis_bonariensis" },
  },
  ed2_gramineae_group_10_pending: {
    id: "ed2_gramineae_group_10_pending", milestone: "Gramineae: grupo 10, con glumas", manualPage: 72,
    descripcion: "Continuar con los géneros provistos de glumas del grupo 10.",
    opcionA: { label: "Continuar desarrollando el grupo 10", keyStep: "A'", especieId: "ed2_gramineae" },
    opcionA_prima: { label: "Continuar desarrollando el grupo 10", keyStep: "A'", especieId: "ed2_gramineae" },
  },
};
