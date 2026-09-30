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
  ed2_cortaderia_selloana: species(
    "ed2_cortaderia_selloana",
    "Cortaderia selloana",
    "Gramínea perenne y cespitosa, con cañas floríferas robustas de 2-3 m.",
    "Hojas muy largas amontonadas en la base; panojas plateadas o violáceas; raquilla y lemma de las espiguillas femeninas velludas.",
    "Suelos arenosos húmedos de América austral; cultivada como ornamental.",
    "Cortadera"
  ),
  ed2_arundo_donax: species(
    "ed2_arundo_donax",
    "Arundo donax",
    "Gramínea perenne y rizomatosa, con cañas huecas de 2-6 m.",
    "Hojas distribuidas uniformemente por el tallo; panoja amplia; lemma velluda y raquilla glabra.",
    "Originaria del Viejo Mundo; adventicia y cultivada en América.",
    "Caña de Castilla"
  ),
  ed2_phragmites_australis: species(
    "ed2_phragmites_australis",
    "Phragmites australis",
    "Gramínea perenne y rizomatosa, robusta, de 2-4 m.",
    "Hojas distribuidas uniformemente; panoja terminal amplia; lemma glabra y raquilla largamente velluda.",
    "Regiones cálidas; rara en terrenos inundables del Delta y de la ribera del Plata.",
    "Carrizo"
  ),
  ed2_ehrharta_villosa: species(
    "ed2_ehrharta_villosa",
    "Ehrharta villosa",
    "Gramínea perenne y rizomatosa, de alrededor de 1 m.",
    "Hojas muy estrechas y subconvolutas; panoja casi unilateral; espiguillas trifloras con dos lemmas estériles mayores que el antecio fértil.",
    "Originaria de África del Sur; naturalizada en las dunas de Villa Gesell.",
    "Ehrharta villosa"
  ),
  ed2_danthonia_montevidensis: species(
    "ed2_danthonia_montevidensis",
    "Danthonia montevidensis",
    "Gramínea perenne y cespitosa, de 30-60 cm.",
    "Lóbulos apicales de la lemma iguales o más cortos que su parte indivisa; innovaciones extravaginales; espiguillas con seis a diez antecios.",
    "Frecuente en las estepas clímax del Uruguay y norte bonaerense.",
    "Danthonia montevidensis"
  ),
  ed2_danthonia_cirrata: species(
    "ed2_danthonia_cirrata",
    "Danthonia cirrata",
    "Gramínea perenne semejante a Danthonia montevidensis, de 20-70 cm.",
    "Lóbulos apicales de la lemma más largos que su parte indivisa; innovaciones intravaginales.",
    "Sur del Brasil, Uruguay y centro argentino; frecuente en las sierras bonaerenses.",
    "Danthonia cirrata"
  ),
  ed2_lolium_temulentum: species(
    "ed2_lolium_temulentum", "Lolium temulentum",
    "Gramínea anual de 0,5-1 m, con cañas erectas y hojas planas.",
    "Gluma igual o más larga que la espiguilla; espiga laxa; lemmas generalmente aristadas.",
    "Originaria de Europa; maleza de cultivos de lino y cereales en los alrededores de Buenos Aires.",
    "Triollo"
  ),
  ed2_lolium_perenne: species(
    "ed2_lolium_perenne", "Lolium perenne",
    "Gramínea perenne de 30-70 cm, cultivada como forrajera y césped.",
    "Gluma más corta que la espiguilla; hojas de prefoliación conduplicada; cañas cilíndricas; lemmas casi siempre múticas.",
    "Originaria de Europa; cultivada y a veces espontánea.",
    "Ray grass inglés"
  ),
  ed2_lolium_multiflorum: species(
    "ed2_lolium_multiflorum", "Lolium multiflorum",
    "Gramínea anual de 40-100 cm, cultivada como forrajera.",
    "Gluma más corta que la espiguilla; hojas de prefoliación convoluta; cañas algo comprimidas; lemmas aristadas o múticas.",
    "Originaria del sur de Europa; cultivada y adventicia en Buenos Aires.",
    "Ray grass"
  ),
  ed2_cynosurus_cristatus: species(
    "ed2_cynosurus_cristatus", "Cynosurus cristatus",
    "Gramínea perenne de 30-80 cm.",
    "Espiguillas fértiles de dos a tres flores; lemmas estériles aristadas; panoja espiciforme linear; aristas inconspicuas.",
    "Originaria de Europa; hallada ocasionalmente en la provincia de Buenos Aires.",
    "Cynosurus cristatus"
  ),
  ed2_cynosurus_echinatus: species(
    "ed2_cynosurus_echinatus", "Cynosurus echinatus",
    "Gramínea anual, con cañas simples o ramificadas en la base.",
    "Espiguillas fértiles de dos a tres flores; lemmas estériles aristadas; panoja ovoide o subglobosa; aristas conspicuas.",
    "Originaria de Europa; accidental en la provincia de Buenos Aires.",
    "Cynosurus echinatus"
  ),
  ed2_lamarckia_aurea: species(
    "ed2_lamarckia_aurea", "Lamarckia aurea",
    "Gramínea anual de 10-40 cm, con panoja contraída unilateral.",
    "Espiguillas fértiles unifloras; lemmas de las espiguillas estériles múticas; fascículos nutantes.",
    "Originaria del Mediterráneo y Abisinia; cultivada y adventicia en La Plata.",
    "Lamarckia aurea"
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
  ed2_gramineae_group_2: {
    id: "ed2_gramineae_group_2", milestone: "Gramineae: grupo 2", manualPage: 66,
    descripcion: "¿Cuántas flores poseen las espiguillas fértiles y cómo son las lemmas estériles?",
    opcionA: { label: "Fértiles de dos a tres flores; lemmas estériles aristadas", keyStep: "A", nextNodeId: "ed2_cynosurus" },
    opcionA_prima: { label: "Fértiles unifloras; lemmas estériles múticas", keyStep: "A'", especieId: "ed2_lamarckia_aurea" },
  },
  ed2_cynosurus: {
    id: "ed2_cynosurus", milestone: "Cynosurus", manualPage: 79,
    descripcion: "¿La planta es perenne con panoja linear o anual con panoja ovoide?",
    opcionA: { label: "Perenne; lígula de cerca de 1 mm; panoja linear; aristas inconspicuas", keyStep: "A", especieId: "ed2_cynosurus_cristatus" },
    opcionA_prima: { label: "Anual; lígula de 3-5 mm; panoja ovoide o subglobosa; aristas conspicuas", keyStep: "A'", especieId: "ed2_cynosurus_echinatus" },
  },
  ed2_gramineae_group_3: continuationNode(3, 66),
  ed2_gramineae_group_4: {
    id: "ed2_gramineae_group_4", milestone: "Gramineae: grupo 4", manualPage: 66,
    descripcion: "¿La lemma termina en numerosas aristas o en tres aristas?",
    opcionA: { label: "Dividida en la parte superior en numerosas aristas desiguales", keyStep: "A", nextNodeId: "ed2_gramineae_group_4_many_awns_pending" },
    opcionA_prima: { label: "Terminada en tres aristas largas o en una arista trífida", keyStep: "A'", nextNodeId: "ed2_gramineae_group_4_inflorescence" },
  },
  ed2_gramineae_group_4_many_awns_pending: {
    id: "ed2_gramineae_group_4_many_awns_pending", milestone: "Gramineae: grupo 4, aristas numerosas", manualPage: 66,
    descripcion: "Continuar con los géneros de lemmas terminadas en numerosas aristas.",
    opcionA: { label: "Continuar desarrollando el grupo 4", keyStep: "A", especieId: "ed2_gramineae" },
    opcionA_prima: { label: "Continuar desarrollando el grupo 4", keyStep: "A", especieId: "ed2_gramineae" },
  },
  ed2_gramineae_group_4_inflorescence: {
    id: "ed2_gramineae_group_4_inflorescence", milestone: "Gramineae: grupo 4, arista trífida", manualPage: 66,
    descripcion: "¿Las espiguillas forman una panoja espiciforme corta o una inflorescencia laxa o alargada?",
    opcionA: { label: "Panoja espiciforme corta, ovoide o globosa", keyStep: "B", nextNodeId: "ed2_gramineae_group_4_lagurus_pending" },
    opcionA_prima: { label: "Panojas laxas o espigas alargadas", keyStep: "B'", nextNodeId: "ed2_gramineae_group_4_attachment" },
  },
  ed2_gramineae_group_4_lagurus_pending: {
    id: "ed2_gramineae_group_4_lagurus_pending", milestone: "Gramineae: grupo 4, panoja corta", manualPage: 66,
    descripcion: "Continuar con el género de panoja espiciforme corta.",
    opcionA: { label: "Continuar desarrollando el grupo 4", keyStep: "B", especieId: "ed2_gramineae" },
    opcionA_prima: { label: "Continuar desarrollando el grupo 4", keyStep: "B", especieId: "ed2_gramineae" },
  },
  ed2_gramineae_group_4_attachment: {
    id: "ed2_gramineae_group_4_attachment", milestone: "Gramineae: grupo 4, espiguillas alargadas", manualPage: 66,
    descripcion: "¿Las espiguillas son sésiles o pediceladas?",
    opcionA: { label: "Sésiles o casi sésiles, dispuestas en espigas alargadas", keyStep: "C", nextNodeId: "ed2_gramineae_group_4_sessile_pending" },
    opcionA_prima: { label: "Pediceladas, dispuestas en panojas", keyStep: "C'", nextNodeId: "ed2_gramineae_group_4_florets" },
  },
  ed2_gramineae_group_4_sessile_pending: {
    id: "ed2_gramineae_group_4_sessile_pending", milestone: "Gramineae: grupo 4, espiguillas sésiles", manualPage: 66,
    descripcion: "Continuar con los géneros de espiguillas sésiles del grupo 4.",
    opcionA: { label: "Continuar desarrollando el grupo 4", keyStep: "C", especieId: "ed2_gramineae" },
    opcionA_prima: { label: "Continuar desarrollando el grupo 4", keyStep: "C", especieId: "ed2_gramineae" },
  },
  ed2_gramineae_group_4_florets: {
    id: "ed2_gramineae_group_4_florets", milestone: "Gramineae: grupo 4, espiguillas pediceladas", manualPage: 66,
    descripcion: "¿Las espiguillas son unifloras o poseen tres o más flores?",
    opcionA: { label: "Unifloras; lemma terminada en una arista trífida", keyStep: "E", nextNodeId: "ed2_gramineae_group_4_aristida_pending" },
    opcionA_prima: { label: "Con tres o más flores; lemma bífida con aristas laterales y una central retorcida", keyStep: "E'", nextNodeId: "ed2_danthonia" },
  },
  ed2_gramineae_group_4_aristida_pending: {
    id: "ed2_gramineae_group_4_aristida_pending", milestone: "Gramineae: grupo 4, unifloras", manualPage: 66,
    descripcion: "Continuar con el género de espiguillas unifloras del grupo 4.",
    opcionA: { label: "Continuar desarrollando el grupo 4", keyStep: "E", especieId: "ed2_gramineae" },
    opcionA_prima: { label: "Continuar desarrollando el grupo 4", keyStep: "E", especieId: "ed2_gramineae" },
  },
  ed2_danthonia: {
    id: "ed2_danthonia", milestone: "Danthonia", manualPage: 78,
    descripcion: "¿Los lóbulos de la lemma son iguales o más cortos que su parte indivisa?",
    opcionA: { label: "Iguales o más cortos; innovaciones extravaginales", keyStep: "A", especieId: "ed2_danthonia_montevidensis" },
    opcionA_prima: { label: "Más largos; innovaciones intravaginales", keyStep: "A'", especieId: "ed2_danthonia_cirrata" },
  },
  ed2_ehrharta: {
    id: "ed2_ehrharta", milestone: "Ehrharta", manualPage: 77,
    descripcion: "Ehrharteae: única especie tratada para la región.",
    opcionA: { label: "Identificar como Ehrharta villosa", keyStep: "1", especieId: "ed2_ehrharta_villosa" },
    opcionA_prima: { label: "Identificar como Ehrharta villosa", keyStep: "1", especieId: "ed2_ehrharta_villosa" },
  },
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
  ed2_gramineae_group_7: {
    id: "ed2_gramineae_group_7", milestone: "Gramineae: grupo 7", manualPage: 67,
    descripcion: "¿La espiguilla tiene una sola flor fértil o varias?",
    opcionA: { label: "Una sola flor fértil, a veces con antecios estériles", keyStep: "A", nextNodeId: "ed2_gramineae_group_7_uniflorous_pending" },
    opcionA_prima: { label: "Dos o más flores fértiles", keyStep: "A'", nextNodeId: "ed2_gramineae_group_7_multiflorous" },
  },
  ed2_gramineae_group_7_uniflorous_pending: {
    id: "ed2_gramineae_group_7_uniflorous_pending", milestone: "Gramineae: grupo 7, unifloras", manualPage: 67,
    descripcion: "Continuar con los géneros de espiguillas unifloras del grupo 7.",
    opcionA: { label: "Continuar desarrollando el grupo 7", keyStep: "A", especieId: "ed2_gramineae" },
    opcionA_prima: { label: "Continuar desarrollando el grupo 7", keyStep: "A", especieId: "ed2_gramineae" },
  },
  ed2_gramineae_group_7_multiflorous: {
    id: "ed2_gramineae_group_7_multiflorous", milestone: "Gramineae: grupo 7, plurifloras", manualPage: 68,
    descripcion: "¿Las espiguillas son sésiles y forman una espiga dística?",
    opcionA: { label: "Sésiles o casi sésiles, en una espiga dística", keyStep: "Q", nextNodeId: "ed2_gramineae_group_7_distichous_pending" },
    opcionA_prima: { label: "En espigas fasciculadas o panojas laxas o contraídas", keyStep: "Q'", nextNodeId: "ed2_gramineae_group_7_inflorescence" },
  },
  ed2_gramineae_group_7_distichous_pending: {
    id: "ed2_gramineae_group_7_distichous_pending", milestone: "Gramineae: grupo 7, espiga dística", manualPage: 68,
    descripcion: "¿La arista de la lemma es dorsal o apical?",
    opcionA: { label: "Arista dorsal", keyStep: "R", nextNodeId: "ed2_gramineae_group_7_gaudinia_pending" },
    opcionA_prima: { label: "Arista apical", keyStep: "R'", nextNodeId: "ed2_gramineae_group_7_distichous_orientation" },
  },
  ed2_gramineae_group_7_gaudinia_pending: {
    id: "ed2_gramineae_group_7_gaudinia_pending", milestone: "Gramineae: grupo 7, arista dorsal", manualPage: 68,
    descripcion: "Continuar con el género de espiga dística y arista dorsal.",
    opcionA: { label: "Continuar desarrollando el grupo 7", keyStep: "R", especieId: "ed2_gramineae" },
    opcionA_prima: { label: "Continuar desarrollando el grupo 7", keyStep: "R", especieId: "ed2_gramineae" },
  },
  ed2_gramineae_group_7_distichous_orientation: {
    id: "ed2_gramineae_group_7_distichous_orientation", milestone: "Gramineae: orientación de las espiguillas", manualPage: 68,
    descripcion: "¿Las espiguillas muestran el costado o las caras hacia el raquis?",
    opcionA: { label: "En un solo plano, con el costado hacia el raquis; laterales con una sola gluma", keyStep: "S", nextNodeId: "ed2_lolium" },
    opcionA_prima: { label: "Con sus caras hacia el raquis; todas con dos glumas", keyStep: "S'", nextNodeId: "ed2_gramineae_group_7_cereals_pending" },
  },
  ed2_gramineae_group_7_cereals_pending: {
    id: "ed2_gramineae_group_7_cereals_pending", milestone: "Gramineae: grupo 7, dos glumas", manualPage: 68,
    descripcion: "Continuar con los géneros de espiga dística y dos glumas.",
    opcionA: { label: "Continuar desarrollando el grupo 7", keyStep: "S'", especieId: "ed2_gramineae" },
    opcionA_prima: { label: "Continuar desarrollando el grupo 7", keyStep: "S'", especieId: "ed2_gramineae" },
  },
  ed2_lolium: {
    id: "ed2_lolium", milestone: "Lolium", manualPage: 78,
    descripcion: "¿La gluma iguala o supera a la espiguilla?",
    opcionA: { label: "Tan larga o más larga que la espiguilla", keyStep: "A", especieId: "ed2_lolium_temulentum" },
    opcionA_prima: { label: "Más corta que la espiguilla", keyStep: "A'", nextNodeId: "ed2_lolium_habit" },
  },
  ed2_lolium_habit: {
    id: "ed2_lolium_habit", milestone: "Lolium: hábito y prefoliación", manualPage: 78,
    descripcion: "¿La planta es perenne, con hojas conduplicadas y cañas cilíndricas?",
    opcionA: { label: "Perenne; prefoliación conduplicada; cañas cilíndricas; lemmas casi siempre múticas", keyStep: "B", especieId: "ed2_lolium_perenne" },
    opcionA_prima: { label: "Anual a trienal; prefoliación convoluta; cañas comprimidas; lemmas aristadas o múticas", keyStep: "B'", especieId: "ed2_lolium_multiflorum" },
  },
  ed2_gramineae_group_7_inflorescence: {
    id: "ed2_gramineae_group_7_inflorescence", milestone: "Gramineae: grupo 7, panojas o espigas fasciculadas", manualPage: 69,
    descripcion: "¿La lemma es mútica o aristada?",
    opcionA: { label: "Mútica o muy cortamente mucronada", keyStep: "V", nextNodeId: "ed2_gramineae_group_7_mutic_pending" },
    opcionA_prima: { label: "Aristada", keyStep: "V'", nextNodeId: "ed2_gramineae_group_7_awn_position" },
  },
  ed2_gramineae_group_7_mutic_pending: {
    id: "ed2_gramineae_group_7_mutic_pending", milestone: "Gramineae: grupo 7, lemmas múticas", manualPage: 69,
    descripcion: "Continuar con los géneros de lemmas múticas del grupo 7.",
    opcionA: { label: "Continuar desarrollando el grupo 7", keyStep: "V", especieId: "ed2_gramineae" },
    opcionA_prima: { label: "Continuar desarrollando el grupo 7", keyStep: "V", especieId: "ed2_gramineae" },
  },
  ed2_gramineae_group_7_awn_position: {
    id: "ed2_gramineae_group_7_awn_position", milestone: "Gramineae: grupo 7, lemmas aristadas", manualPage: 69,
    descripcion: "¿La arista es terminal o dorsal?",
    opcionA: { label: "Terminal o nacida entre dos dientes muy cortos", keyStep: "i", nextNodeId: "ed2_gramineae_group_7_terminal_awn" },
    opcionA_prima: { label: "Dorsal", keyStep: "i'", nextNodeId: "ed2_gramineae_group_7_dorsal_pending" },
  },
  ed2_gramineae_group_7_dorsal_pending: {
    id: "ed2_gramineae_group_7_dorsal_pending", milestone: "Gramineae: grupo 7, arista dorsal", manualPage: 70,
    descripcion: "Continuar con los géneros de arista dorsal del grupo 7.",
    opcionA: { label: "Continuar desarrollando el grupo 7", keyStep: "i'", especieId: "ed2_gramineae" },
    opcionA_prima: { label: "Continuar desarrollando el grupo 7", keyStep: "i'", especieId: "ed2_gramineae" },
  },
  ed2_gramineae_group_7_terminal_awn: {
    id: "ed2_gramineae_group_7_terminal_awn", milestone: "Gramineae: grupo 7, arista terminal", manualPage: 69,
    descripcion: "¿La planta es muy robusta, supera 1,5 m y posee largos pelos plateados?",
    opcionA: { label: "Sí; panoja densa de más de 25 cm; lemmas o raquillas con pelos plateados", keyStep: "j", nextNodeId: "ed2_arundineae" },
    opcionA_prima: { label: "Planta grácil, generalmente menor de 1,5 m; sin largos pelos plateados", keyStep: "j'", nextNodeId: "ed2_gramineae_group_7_gracile_pending" },
  },
  ed2_gramineae_group_7_gracile_pending: {
    id: "ed2_gramineae_group_7_gracile_pending", milestone: "Gramineae: grupo 7, plantas gráciles", manualPage: 69,
    descripcion: "Continuar con los géneros gráciles de arista terminal del grupo 7.",
    opcionA: { label: "Continuar desarrollando el grupo 7", keyStep: "j'", especieId: "ed2_gramineae" },
    opcionA_prima: { label: "Continuar desarrollando el grupo 7", keyStep: "j'", especieId: "ed2_gramineae" },
  },
  ed2_arundineae: {
    id: "ed2_arundineae", milestone: "Arundineae", manualPage: 69,
    descripcion: "¿Las hojas se amontonan en la base de las cañas o se distribuyen por todo el tallo?",
    opcionA: { label: "Muy largas y amontonadas en la base; raquilla y lemma femeninas velludas", keyStep: "k", especieId: "ed2_cortaderia_selloana" },
    opcionA_prima: { label: "Distribuidas uniformemente por el tallo", keyStep: "k'", nextNodeId: "ed2_arundineae_uniform" },
  },
  ed2_arundineae_uniform: {
    id: "ed2_arundineae_uniform", milestone: "Arundineae: hojas caulinares", manualPage: 69,
    descripcion: "¿La lemma o la raquilla es velluda?",
    opcionA: { label: "Lemma velluda; raquilla glabra", keyStep: "l", especieId: "ed2_arundo_donax" },
    opcionA_prima: { label: "Lemma glabra; raquilla velluda", keyStep: "l'", especieId: "ed2_phragmites_australis" },
  },
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
