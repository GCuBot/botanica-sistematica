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
  ed2_briza_brizoides: species(
    "ed2_briza_brizoides", "Briza brizoides",
    "Gramínea perenne y cespitosa, de 20-50 cm.",
    "Espiguillas violáceas comprimidas lateralmente; lemma triangular de perfil, con margen muy dilatado y arista de 4-8 mm.",
    "Sur del Brasil, Chile, Uruguay y nordeste argentino; campos graminosos y sierras bonaerenses.",
    "Briza brizoides"
  ),
  ed2_briza_subaristata: species(
    "ed2_briza_subaristata", "Briza subaristata",
    "Gramínea perenne y cespitosa, de 30-80 cm.",
    "Espiguillas globosas de seis a doce flores; lemmas agudas, bidentadas y con arista corta; panoja contraída.",
    "Desde México al centro argentino; frecuente en la estepa graminosa y las sierras.",
    "Briza subaristata"
  ),
  ed2_briza_uniolae: species(
    "ed2_briza_uniolae", "Briza uniolae",
    "Gramínea perenne y rizomatosa, de 60-100 cm.",
    "Panoja densa casi espiciforme; lemma blanquecino-verdosa, obtusa y brevemente mucronada.",
    "América austral; lugares húmedos y sierras de la provincia de Buenos Aires.",
    "Briza uniolae"
  ),
  ed2_briza_rufa: species(
    "ed2_briza_rufa", "Briza rufa",
    "Gramínea perenne de 30-120 cm.",
    "Panoja densa casi espiciforme; lemma castaño-rojiza, obtusa y mútica.",
    "América austral; frecuente en las sierras y en la ribera platense.",
    "Briza rufa"
  ),
  ed2_briza_minor: species(
    "ed2_briza_minor", "Briza minor",
    "Gramínea anual de 10-50 cm.",
    "Panoja laxa y delicada; espiguillas globosas nutantes, de cuatro a seis flores, con glumas y glumelas redondeadas.",
    "Originaria de Europa, naturalizada en América austral; común en praderas naturales.",
    "Briza"
  ),
  ed2_briza_maxima: species(
    "ed2_briza_maxima", "Briza maxima",
    "Gramínea anual de 30-60 cm.",
    "Panoja laxa y nutante; espiguillas ovoides grandes, con doce a veinte flores y glumas y glumelas ovadas y obtusas.",
    "Originaria de Europa; cultivada y adventicia en América.",
    "Briza maxima"
  ),
  ed2_puccinellia_glaucescens_osteniana: species(
    "ed2_puccinellia_glaucescens_osteniana", "Puccinellia glaucescens var. osteniana",
    "Gramínea perenne y cespitosa de suelos salobres, de 20-60 cm.",
    "Espiguillas casi cilíndricas de cinco a diez flores; estilos cortos y caducos; lemmas con nervaduras tenues; cariopse no hendido.",
    "Uruguay y estepa pampeana argentina.",
    "Puccinellia glaucescens var. osteniana"
  ),
  ed2_bromus_brevis: species(
    "ed2_bromus_brevis", "Bromus brevis",
    "Gramínea bienal o perenne, de 20-70 cm.",
    "Espiguillas lanceoladas y comprimidas de 15-18 mm; lemmas con arista diminuta de cerca de 0,5 mm.",
    "Centro argentino; especie forrajera.",
    "Cebadilla pampeana"
  ),
  ed2_bromus_unioloides: species(
    "ed2_bromus_unioloides", "Bromus unioloides",
    "Gramínea perenne y cespitosa, de cerca de 1 m.",
    "Espiguillas muy comprimidas; lemmas carenadas, con arista mayor de 1 mm; panoja laxa.",
    "Sudamérica; forrajera muy frecuente en la provincia.",
    "Cebadilla criolla, cebadilla australiana"
  ),
  ed2_bromus_brachyanthera: species(
    "ed2_bromus_brachyanthera", "Bromus brachyanthera",
    "Gramínea perenne y cespitosa, de 40-90 cm.",
    "Espiguillas poco comprimidas; arista tan larga como la lemma; panoja laxa e inclinada.",
    "América austral; la variedad uruguayensis es frecuente en bosques húmedos de la ribera.",
    "Bromus brachyanthera"
  ),
  ed2_bromus_auleticus: species(
    "ed2_bromus_auleticus", "Bromus auleticus",
    "Gramínea perenne y cespitosa, de 40-120 cm.",
    "Espiguillas poco comprimidas, de siete a diez flores; arista de la mitad de la longitud de la lemma; panoja laxa.",
    "América austral; frecuente en campos naturales.",
    "Cebadilla chaqueña"
  ),
  ed2_bromus_rigidus: species(
    "ed2_bromus_rigidus", "Bromus rigidus",
    "Gramínea anual de hasta 70 cm.",
    "Glumas acuminadas o subuladas; lemmas linear-lanceoladas con aristas muy largas de 30-50 mm; panoja laxa.",
    "Europa y norte de África; adventicia en Patagonia y accidental en Buenos Aires.",
    "Bromus rigidus"
  ),
  ed2_bromus_mollis: species(
    "ed2_bromus_mollis", "Bromus mollis",
    "Gramínea anual de 10-80 cm, con vainas velludas.",
    "Glumas y lemmas pubescentes; panoja contraída y densa; espiguillas lanceoladas y gruesas.",
    "Originaria de Europa, naturalizada en Argentina; frecuente en campos graminosos.",
    "Bromus mollis"
  ),
  ed2_bromus_racemosus: species(
    "ed2_bromus_racemosus", "Bromus racemosus",
    "Gramínea anual pubescente, de 30-70 cm.",
    "Glumas y lemmas glabras; panoja densa casi espiciforme; lemmas de 8-9 mm.",
    "Originaria de Europa; adventicia en Argentina.",
    "Bromus racemosus"
  ),
  ed2_bromus_commutatus: species(
    "ed2_bromus_commutatus", "Bromus commutatus",
    "Gramínea anual de 30-100 cm.",
    "Glumas y lemmas glabras; panoja laxa; espiguillas de 14-23 mm y aristas de 10-13 mm.",
    "Originaria de Europa; naturalizada en la provincia de Buenos Aires.",
    "Bromus commutatus"
  ),
  ed2_dactylis_glomerata: species(
    "ed2_dactylis_glomerata", "Dactylis glomerata",
    "Gramínea perenne y cespitosa, de 50-120 cm.",
    "Espiguillas de tres a ocho flores, reunidas en glomérulos compactos; lemmas carenadas, ciliadas y cortamente aristadas.",
    "Originaria del Viejo Mundo; cultivada como forrajera y adventicia en Argentina.",
    "Pasto ovillo"
  ),
  ed2_poa_annua: species(
    "ed2_poa_annua", "Poa annua", "Gramínea anual pequeña, de 5-25 cm.",
    "Flores hermafroditas; panoja abierta y laxa; espiguillas de tres a ocho flores con lemmas pubescentes sobre las nervaduras.",
    "Originaria de Europa, adventicia en América; ubicua.", "Poa annua"
  ),
  ed2_poa_trivialis: species(
    "ed2_poa_trivialis", "Poa trivialis", "Gramínea perenne sin rizomas, de 30-90 cm.",
    "Flores hermafroditas; hojas escabrosas; panoja amplia; lemmas con algunos pelos lanosos en la base.",
    "Originaria de Europa, adventicia en América; suelos arenosos de la ribera.", "Poa trivialis"
  ),
  ed2_poa_pratensis: species(
    "ed2_poa_pratensis", "Poa pratensis", "Gramínea perenne con rizomas horizontales y tallos redondeados.",
    "Flores hermafroditas; panoja piramidal abierta; lemmas con largos pelos lanosos en la base.",
    "Originaria de Europa, adventicia en América; común en suelos modificados.", "Poa pratensis"
  ),
  ed2_poa_compressa: species(
    "ed2_poa_compressa", "Poa compressa", "Gramínea perenne rizomatosa, con tallos muy comprimidos de 15-20 cm.",
    "Flores hermafroditas; panoja angosta; espiguillas amontonadas y casi sésiles.",
    "Originaria de Europa, adventicia en América; rara cerca de Buenos Aires.", "Poa compressa"
  ),
  ed2_poa_bonariensis: species(
    "ed2_poa_bonariensis", "Poa bonariensis", "Gramínea dioica y rizomatosa, forrajera.",
    "Lígulas de 1-2,5 mm; panoja contraída y densa; espiguillas femeninas lanosas.",
    "Uruguay y nordeste argentino; campos naturales.", "Poa bonariensis"
  ),
  ed2_poa_barrosiana: species(
    "ed2_poa_barrosiana", "Poa barrosiana", "Gramínea dioica y rizomatosa, con cañas ascendentes de 50-80 cm.",
    "Lígulas mayores de 4 mm; lemmas y callo femeninos glabros; panojas densas y espiguillas grandes.",
    "Dunas costeras de Buenos Aires.", "Poa barrosiana"
  ),
  ed2_poa_boecheri: species(
    "ed2_poa_boecheri", "Poa boecheri", "Gramínea dioica y rizomatosa, con cañas erectas de 30-40 cm.",
    "Lemmas femeninas ciliadas; callo con pelos menores que la mitad de la lemma; panoja contraída y densa.",
    "Mendoza y norte de Neuquén; hallada en las dunas de Pinamar.", "Poa boecheri"
  ),
  ed2_poa_lanuginosa: species(
    "ed2_poa_lanuginosa", "Poa lanuginosa", "Gramínea dioica y rizomatosa, con cañas de 30-60 cm.",
    "Pelos del callo iguales o mayores que la lemma; lígulas de innovaciones de 5-25 mm; panoja densa y oblonga.",
    "Sur del Brasil, Uruguay y nordeste argentino; frecuente en dunas costeras bonaerenses.", "Poa lanuginosa"
  ),
  ed2_poa_montevidensis: species(
    "ed2_poa_montevidensis", "Poa montevidensis", "Gramínea dioica y rizomatosa, con cañas comprimidas de 50-80 cm.",
    "Pelos del callo iguales o mayores que la lemma; lígulas superiores de 4-6 mm e innovaciones de 1 mm; panoja de 15-30 cm.",
    "Suelos húmedos de Uruguay y Buenos Aires, especialmente sierras de Tandil y Balcarce.", "Poa montevidensis"
  ),
  ed2_poa_iridifolia: species(
    "ed2_poa_iridifolia", "Poa iridifolia", "Gramínea dioica, cespitosa y robusta, de cerca de 1 m.",
    "Sin rizomas; vainas muy comprimidas y retrorso-escabrosas; láminas de 3-5 mm; panoja densa.",
    "Endémica de las sierras de la provincia de Buenos Aires.", "Poa iridifolia"
  ),
  ed2_poa_resinulosa: species(
    "ed2_poa_resinulosa", "Poa resinulosa", "Gramínea dioica y cespitosa, de cañas bajas y uninodales.",
    "Innovaciones filiformes y convolutas; lígula corta y truncada; panoja contraída.",
    "Centro argentino hasta las sierras bonaerenses.", "Poa resinulosa"
  ),
  ed2_poa_ligularis: species(
    "ed2_poa_ligularis", "Poa ligularis", "Gramínea dioica y cespitosa, de 15-45 cm.",
    "Innovaciones convolutas; lígula larga y acuminada; cañas con tres o cuatro nudos; panoja contraída.",
    "Centro y sur argentino; estepa clímax y sierras.", "Poa ligularis"
  ),
  ed2_poa_pilcomayensis: species(
    "ed2_poa_pilcomayensis", "Poa pilcomayensis", "Gramínea dioica y cespitosa, de 30-60 cm.",
    "Innovaciones planas o plegadas; cañas con un nudo; hojas escabrosas en la cara superior; panoja algo laxa.",
    "Paraguay, Uruguay y nordeste argentino; islas del Delta y suelos húmedos bonaerenses.", "Poa pilcomayensis"
  ),
  ed2_poa_lanigera: species(
    "ed2_poa_lanigera", "Poa lanigera", "Gramínea dioica y cespitosa, de 20-70 cm.",
    "Innovaciones planas, plegadas o subconvolutas; cañas con dos a cuatro nudos; hojas lisas; panoja densa y contraída.",
    "Sur del Brasil, Uruguay y centro argentino; estepa clímax.", "Poa lanigera"
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
    descripcion: "¿Las espiguillas forman espigas fasciculadas en el ápice de la caña?",
    opcionA: { label: "Sésiles o muy brevemente pediceladas, en espigas fasciculadas apicales", keyStep: "W", nextNodeId: "ed2_gramineae_group_7_fascicled_pending" },
    opcionA_prima: { label: "No dispuestas de esa manera", keyStep: "W'", nextNodeId: "ed2_gramineae_group_7_mutic_size" },
  },
  ed2_gramineae_group_7_fascicled_pending: {
    id: "ed2_gramineae_group_7_fascicled_pending", milestone: "Gramineae: grupo 7, espigas fasciculadas", manualPage: 69,
    descripcion: "Continuar con los géneros de espigas fasciculadas y lemmas múticas.",
    opcionA: { label: "Continuar desarrollando el grupo 7", keyStep: "W", especieId: "ed2_gramineae" },
    opcionA_prima: { label: "Continuar desarrollando el grupo 7", keyStep: "W", especieId: "ed2_gramineae" },
  },
  ed2_gramineae_group_7_mutic_size: {
    id: "ed2_gramineae_group_7_mutic_size", milestone: "Gramineae: grupo 7, tamaño de la espiguilla", manualPage: 69,
    descripcion: "¿Las espiguillas superan los 15 mm y el ovario es pubescente en el ápice?",
    opcionA: { label: "Sí; espiguillas grandes de más de 15 mm", keyStep: "Y", nextNodeId: "ed2_bromus" },
    opcionA_prima: { label: "Menores de 15 mm; ovario generalmente glabro en el ápice", keyStep: "Y'", nextNodeId: "ed2_gramineae_group_7_mutic_nerves" },
  },
  ed2_gramineae_group_7_mutic_nerves: {
    id: "ed2_gramineae_group_7_mutic_nerves", milestone: "Gramineae: grupo 7, nervaduras", manualPage: 69,
    descripcion: "¿Las lemmas poseen tres nervaduras o cinco o más?",
    opcionA: { label: "Tres nervaduras", keyStep: "Z", nextNodeId: "ed2_gramineae_group_7_three_nerves_pending" },
    opcionA_prima: { label: "Cinco o más nervaduras", keyStep: "Z'", nextNodeId: "ed2_gramineae_group_7_many_nerves" },
  },
  ed2_gramineae_group_7_three_nerves_pending: {
    id: "ed2_gramineae_group_7_three_nerves_pending", milestone: "Gramineae: grupo 7, tres nervaduras", manualPage: 69,
    descripcion: "Continuar con los géneros de lemmas trinervadas.",
    opcionA: { label: "Continuar desarrollando el grupo 7", keyStep: "Z", especieId: "ed2_gramineae" },
    opcionA_prima: { label: "Continuar desarrollando el grupo 7", keyStep: "Z", especieId: "ed2_gramineae" },
  },
  ed2_gramineae_group_7_many_nerves: {
    id: "ed2_gramineae_group_7_many_nerves", milestone: "Gramineae: grupo 7, cinco o más nervaduras", manualPage: 69,
    descripcion: "¿Las lemmas poseen cinco nervaduras o más de cinco?",
    opcionA: { label: "Cinco nervaduras", keyStep: "d", nextNodeId: "ed2_gramineae_group_7_five_nerves" },
    opcionA_prima: { label: "Más de cinco nervaduras", keyStep: "d'", nextNodeId: "ed2_gramineae_group_7_over_five_pending" },
  },
  ed2_gramineae_group_7_over_five_pending: {
    id: "ed2_gramineae_group_7_over_five_pending", milestone: "Gramineae: grupo 7, más de cinco nervaduras", manualPage: 69,
    descripcion: "Continuar con los géneros de lemmas con más de cinco nervaduras.",
    opcionA: { label: "Continuar desarrollando el grupo 7", keyStep: "d'", especieId: "ed2_gramineae" },
    opcionA_prima: { label: "Continuar desarrollando el grupo 7", keyStep: "d'", especieId: "ed2_gramineae" },
  },
  ed2_gramineae_group_7_five_nerves: {
    id: "ed2_gramineae_group_7_five_nerves", milestone: "Gramineae: grupo 7, cinco nervaduras", manualPage: 69,
    descripcion: "¿Las espiguillas forman glomérulos compactos en los extremos de las ramas?",
    opcionA: { label: "Sí; lemmas cortamente aristadas", keyStep: "e", especieId: "ed2_dactylis_glomerata" },
    opcionA_prima: { label: "Panoja laxa o contraída, pero sin glomérulos compactos", keyStep: "e'", nextNodeId: "ed2_gramineae_group_7_five_nerves_pending" },
  },
  ed2_gramineae_group_7_five_nerves_pending: {
    id: "ed2_gramineae_group_7_five_nerves_pending", milestone: "Gramineae: grupo 7, panoja sin glomérulos", manualPage: 69,
    descripcion: "¿La lemma es carenada o redondeada en el dorso?",
    opcionA: { label: "Conspicuamente carenada", keyStep: "f", nextNodeId: "ed2_gramineae_group_7_carinate" },
    opcionA_prima: { label: "Redondeada, no carenada", keyStep: "f'", nextNodeId: "ed2_gramineae_group_7_rounded_pending" },
  },
  ed2_gramineae_group_7_carinate: {
    id: "ed2_gramineae_group_7_carinate", milestone: "Gramineae: grupo 7, lemma carenada", manualPage: 69,
    descripcion: "¿La lemma es aguda o bidentada?",
    opcionA: { label: "Aguda", keyStep: "g", nextNodeId: "ed2_poa" },
    opcionA_prima: { label: "Bidentada", keyStep: "g'", nextNodeId: "ed2_gramineae_group_7_koeleria_pending" },
  },
  ed2_gramineae_group_7_koeleria_pending: {
    id: "ed2_gramineae_group_7_koeleria_pending", milestone: "Gramineae: grupo 7, lemma bidentada", manualPage: 69,
    descripcion: "Continuar con el género de lemma carenada y bidentada.",
    opcionA: { label: "Continuar desarrollando el grupo 7", keyStep: "g'", especieId: "ed2_gramineae" },
    opcionA_prima: { label: "Continuar desarrollando el grupo 7", keyStep: "g'", especieId: "ed2_gramineae" },
  },
  ed2_gramineae_group_7_rounded_pending: {
    id: "ed2_gramineae_group_7_rounded_pending", milestone: "Gramineae: grupo 7, lemma redondeada", manualPage: 69,
    descripcion: "Continuar con los géneros de lemma redondeada en el dorso.",
    opcionA: { label: "Continuar desarrollando el grupo 7", keyStep: "f'", especieId: "ed2_gramineae" },
    opcionA_prima: { label: "Continuar desarrollando el grupo 7", keyStep: "f'", especieId: "ed2_gramineae" },
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
    descripcion: "¿Las espiguillas miden entre 15 y 35 mm?",
    opcionA: { label: "Grandes, de 15-35 mm", keyStep: "m", nextNodeId: "ed2_bromus" },
    opcionA_prima: { label: "Menores de 15 mm, sin contar las aristas", keyStep: "m'", nextNodeId: "ed2_gramineae_group_7_small_awned_pending" },
  },
  ed2_gramineae_group_7_small_awned_pending: {
    id: "ed2_gramineae_group_7_small_awned_pending", milestone: "Gramineae: grupo 7, espiguillas pequeñas", manualPage: 69,
    descripcion: "Continuar con los géneros aristados de espiguillas menores de 15 mm.",
    opcionA: { label: "Continuar desarrollando el grupo 7", keyStep: "m'", especieId: "ed2_gramineae" },
    opcionA_prima: { label: "Continuar desarrollando el grupo 7", keyStep: "m'", especieId: "ed2_gramineae" },
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
  ed2_gramineae_group_8: {
    id: "ed2_gramineae_group_8", milestone: "Gramineae: grupo 8", manualPage: 70,
    descripcion: "¿Las espiguillas unifloras se alojan en excavaciones alternas del raquis?",
    opcionA: { label: "Sí; forman una espiga cilíndrica", keyStep: "A", nextNodeId: "ed2_gramineae_group_8_excavated_pending" },
    opcionA_prima: { label: "No; inflorescencias de otros tipos", keyStep: "A'", nextNodeId: "ed2_gramineae_group_8_awn" },
  },
  ed2_gramineae_group_8_excavated_pending: {
    id: "ed2_gramineae_group_8_excavated_pending", milestone: "Gramineae: grupo 8, espiguillas excavadas", manualPage: 70,
    descripcion: "Continuar con los géneros de espiguillas alojadas en el raquis.",
    opcionA: { label: "Continuar desarrollando el grupo 8", keyStep: "A", especieId: "ed2_gramineae" },
    opcionA_prima: { label: "Continuar desarrollando el grupo 8", keyStep: "A", especieId: "ed2_gramineae" },
  },
  ed2_gramineae_group_8_awn: {
    id: "ed2_gramineae_group_8_awn", milestone: "Gramineae: grupo 8, posición de la arista", manualPage: 70,
    descripcion: "¿La lemma lleva una arista dorsal geniculada?",
    opcionA: { label: "Sí, arista dorsal geniculada", keyStep: "C", nextNodeId: "ed2_gramineae_group_8_avena_pending" },
    opcionA_prima: { label: "Mútica o con arista apical", keyStep: "C'", nextNodeId: "ed2_gramineae_group_8_florets" },
  },
  ed2_gramineae_group_8_avena_pending: {
    id: "ed2_gramineae_group_8_avena_pending", milestone: "Gramineae: grupo 8, arista dorsal", manualPage: 70,
    descripcion: "Continuar con el género de arista dorsal geniculada.",
    opcionA: { label: "Continuar desarrollando el grupo 8", keyStep: "C", especieId: "ed2_gramineae" },
    opcionA_prima: { label: "Continuar desarrollando el grupo 8", keyStep: "C", especieId: "ed2_gramineae" },
  },
  ed2_gramineae_group_8_florets: {
    id: "ed2_gramineae_group_8_florets", milestone: "Gramineae: grupo 8, número de flores", manualPage: 70,
    descripcion: "¿Las espiguillas son unifloras o plurifloras?",
    opcionA: { label: "Unifloras", keyStep: "D", nextNodeId: "ed2_gramineae_group_8_uniflorous_pending" },
    opcionA_prima: { label: "Plurifloras", keyStep: "D'", nextNodeId: "ed2_gramineae_group_8_glumes" },
  },
  ed2_gramineae_group_8_uniflorous_pending: {
    id: "ed2_gramineae_group_8_uniflorous_pending", milestone: "Gramineae: grupo 8, unifloras", manualPage: 70,
    descripcion: "Continuar con los géneros unifloros del grupo 8.",
    opcionA: { label: "Continuar desarrollando el grupo 8", keyStep: "D", especieId: "ed2_gramineae" },
    opcionA_prima: { label: "Continuar desarrollando el grupo 8", keyStep: "D", especieId: "ed2_gramineae" },
  },
  ed2_gramineae_group_8_glumes: {
    id: "ed2_gramineae_group_8_glumes", milestone: "Gramineae: grupo 8, plurifloras", manualPage: 70,
    descripcion: "¿Las glumas son anchas, membranosas e igualan o superan a la espiguilla?",
    opcionA: { label: "Sí; lemmas múticas", keyStep: "G", nextNodeId: "ed2_gramineae_group_8_melica_pending" },
    opcionA_prima: { label: "Lanceoladas y menores que la espiguilla", keyStep: "G'", nextNodeId: "ed2_gramineae_group_8_shape" },
  },
  ed2_gramineae_group_8_melica_pending: {
    id: "ed2_gramineae_group_8_melica_pending", milestone: "Gramineae: grupo 8, glumas anchas", manualPage: 70,
    descripcion: "Continuar con el género de glumas anchas y lemmas múticas.",
    opcionA: { label: "Continuar desarrollando el grupo 8", keyStep: "G", especieId: "ed2_gramineae" },
    opcionA_prima: { label: "Continuar desarrollando el grupo 8", keyStep: "G", especieId: "ed2_gramineae" },
  },
  ed2_gramineae_group_8_shape: {
    id: "ed2_gramineae_group_8_shape", milestone: "Gramineae: grupo 8, forma de la espiguilla", manualPage: 70,
    descripcion: "¿Las espiguillas son casi tan anchas como largas?",
    opcionA: { label: "Globosas, casi tan anchas como largas; lemmas con margen membranoso", keyStep: "H", nextNodeId: "ed2_briza" },
    opcionA_prima: { label: "Lineares o lanceoladas, más largas que anchas", keyStep: "H'", nextNodeId: "ed2_gramineae_group_8_linear" },
  },
  ed2_gramineae_group_8_linear: {
    id: "ed2_gramineae_group_8_linear", milestone: "Gramineae: grupo 8, espiguillas alargadas", manualPage: 70,
    descripcion: "¿Las espiguillas son lineares, casi cilíndricas, y las lemmas tienen nervaduras paralelas?",
    opcionA: { label: "Sí; lemmas obtusas y múticas", keyStep: "I", nextNodeId: "ed2_gramineae_group_8_styles" },
    opcionA_prima: { label: "Lanceoladas; nervaduras de la lemma convergentes hacia el ápice", keyStep: "I'", nextNodeId: "ed2_gramineae_group_8_lanceolate_pending" },
  },
  ed2_gramineae_group_8_lanceolate_pending: {
    id: "ed2_gramineae_group_8_lanceolate_pending", milestone: "Gramineae: grupo 8, espiguillas lanceoladas", manualPage: 71,
    descripcion: "Continuar con los géneros de espiguillas lanceoladas del grupo 8.",
    opcionA: { label: "Continuar desarrollando el grupo 8", keyStep: "I'", especieId: "ed2_gramineae" },
    opcionA_prima: { label: "Continuar desarrollando el grupo 8", keyStep: "I'", especieId: "ed2_gramineae" },
  },
  ed2_gramineae_group_8_styles: {
    id: "ed2_gramineae_group_8_styles", milestone: "Gramineae: grupo 8, estilos", manualPage: 71,
    descripcion: "¿Los estilos son alargados y persistentes?",
    opcionA: { label: "Alargados y persistentes; cariopse con hendidura longitudinal", keyStep: "J", nextNodeId: "ed2_gramineae_group_8_glyceria_pending" },
    opcionA_prima: { label: "Cortos y caducos; cariopse no hendido", keyStep: "J'", especieId: "ed2_puccinellia_glaucescens_osteniana" },
  },
  ed2_gramineae_group_8_glyceria_pending: {
    id: "ed2_gramineae_group_8_glyceria_pending", milestone: "Gramineae: grupo 8, estilos persistentes", manualPage: 71,
    descripcion: "Continuar con el género de estilos alargados y persistentes.",
    opcionA: { label: "Continuar desarrollando el grupo 8", keyStep: "J", especieId: "ed2_gramineae" },
    opcionA_prima: { label: "Continuar desarrollando el grupo 8", keyStep: "J", especieId: "ed2_gramineae" },
  },
  ed2_briza: {
    id: "ed2_briza", milestone: "Briza", manualPage: 80,
    descripcion: "¿Las espiguillas están comprimidas lateralmente o son globosas?",
    opcionA: { label: "Comprimidas lateralmente y violáceas; lemma triangular con margen muy dilatado", keyStep: "A", especieId: "ed2_briza_brizoides" },
    opcionA_prima: { label: "Más o menos globosas; lemma cortamente aristada o mútica", keyStep: "A'", nextNodeId: "ed2_briza_lemma" },
  },
  ed2_briza_lemma: {
    id: "ed2_briza_lemma", milestone: "Briza: lemma", manualPage: 80,
    descripcion: "¿La lemma es aguda, bidentada y aristada?",
    opcionA: { label: "Aguda, bidentada, con arista de 0,5-1 mm", keyStep: "B", especieId: "ed2_briza_subaristata" },
    opcionA_prima: { label: "Obtusa, mútica o apenas mucronada", keyStep: "B'", nextNodeId: "ed2_briza_habit" },
  },
  ed2_briza_habit: {
    id: "ed2_briza_habit", milestone: "Briza: hábito", manualPage: 80,
    descripcion: "¿La planta es perenne y rizomatosa o anual?",
    opcionA: { label: "Perenne y rizomatosa; panoja densa, casi espiciforme", keyStep: "C", nextNodeId: "ed2_briza_perennial" },
    opcionA_prima: { label: "Anual; panoja laxa", keyStep: "C'", nextNodeId: "ed2_briza_annual" },
  },
  ed2_briza_perennial: {
    id: "ed2_briza_perennial", milestone: "Briza: perennes", manualPage: 80,
    descripcion: "¿Qué color y terminación tiene la lemma?",
    opcionA: { label: "Blanquecino-verdosa y brevemente mucronada", keyStep: "D", especieId: "ed2_briza_uniolae" },
    opcionA_prima: { label: "Castaño-rojiza y mútica", keyStep: "D'", especieId: "ed2_briza_rufa" },
  },
  ed2_briza_annual: {
    id: "ed2_briza_annual", milestone: "Briza: anuales", manualPage: 80,
    descripcion: "¿Las espiguillas son pequeñas y globosas o grandes y ovoides?",
    opcionA: { label: "De 2-4 mm, globosas, con cuatro a seis flores", keyStep: "E", especieId: "ed2_briza_minor" },
    opcionA_prima: { label: "De 15-20 mm, ovoides, con doce a veinte flores", keyStep: "E'", especieId: "ed2_briza_maxima" },
  },
  ed2_bromus: {
    id: "ed2_bromus", milestone: "Bromus", manualPage: 81,
    descripcion: "¿La arista de la lemma mide cerca de 0,5 mm o supera 1 mm?",
    opcionA: { label: "Cerca de 0,5 mm; espiguillas lanceoladas comprimidas de 15-18 mm", keyStep: "A", especieId: "ed2_bromus_brevis" },
    opcionA_prima: { label: "Más de 1 mm", keyStep: "A'", nextNodeId: "ed2_bromus_compression" },
  },
  ed2_bromus_compression: {
    id: "ed2_bromus_compression", milestone: "Bromus: compresión", manualPage: 81,
    descripcion: "¿Las espiguillas están muy comprimidas y las lemmas son carenadas?",
    opcionA: { label: "Sí, muy comprimidas y carenadas", keyStep: "B", especieId: "ed2_bromus_unioloides" },
    opcionA_prima: { label: "Poco comprimidas; lemmas redondeadas en el dorso", keyStep: "B'", nextNodeId: "ed2_bromus_habit" },
  },
  ed2_bromus_habit: {
    id: "ed2_bromus_habit", milestone: "Bromus: hábito", manualPage: 81,
    descripcion: "¿La planta es perenne o anual?",
    opcionA: { label: "Perenne", keyStep: "C", nextNodeId: "ed2_bromus_perennial" },
    opcionA_prima: { label: "Anual", keyStep: "C'", nextNodeId: "ed2_bromus_annual" },
  },
  ed2_bromus_perennial: {
    id: "ed2_bromus_perennial", milestone: "Bromus: perennes", manualPage: 81,
    descripcion: "¿La arista iguala a la lemma o mide aproximadamente la mitad?",
    opcionA: { label: "De la misma longitud que la lemma; espiguillas de 15-20 mm", keyStep: "D", especieId: "ed2_bromus_brachyanthera" },
    opcionA_prima: { label: "De la mitad de la lemma; espiguillas de 25-30 mm, con siete a diez flores", keyStep: "D'", especieId: "ed2_bromus_auleticus" },
  },
  ed2_bromus_annual: {
    id: "ed2_bromus_annual", milestone: "Bromus: anuales", manualPage: 82,
    descripcion: "¿Las glumas son acuminadas o subuladas y la arista mide 30-50 mm?",
    opcionA: { label: "Sí; lemmas linear-lanceoladas y aristas de 30-50 mm", keyStep: "E", especieId: "ed2_bromus_rigidus" },
    opcionA_prima: { label: "Glumas agudas; aristas de 5-15 mm", keyStep: "E'", nextNodeId: "ed2_bromus_indument" },
  },
  ed2_bromus_indument: {
    id: "ed2_bromus_indument", milestone: "Bromus: indumento", manualPage: 82,
    descripcion: "¿Las glumas y lemmas son pubescentes?",
    opcionA: { label: "Pubescentes; panoja contraída y densa", keyStep: "F", especieId: "ed2_bromus_mollis" },
    opcionA_prima: { label: "Glabras", keyStep: "F'", nextNodeId: "ed2_bromus_panicle" },
  },
  ed2_bromus_panicle: {
    id: "ed2_bromus_panicle", milestone: "Bromus: panoja", manualPage: 82,
    descripcion: "¿La panoja es densa y casi espiciforme o laxa?",
    opcionA: { label: "Densa, casi espiciforme; lemmas de 8-9 mm", keyStep: "G", especieId: "ed2_bromus_racemosus" },
    opcionA_prima: { label: "Laxa; lemmas de unos 8 mm", keyStep: "G'", especieId: "ed2_bromus_commutatus" },
  },
  ed2_poa: {
    id: "ed2_poa", milestone: "Poa", manualPage: 83,
    descripcion: "¿Las flores son hermafroditas o unisexuales en plantas dioicas?",
    opcionA: { label: "Hermafroditas", keyStep: "A", nextNodeId: "ed2_poa_hermaphrodite" },
    opcionA_prima: { label: "Unisexuales; plantas dioicas", keyStep: "A'", nextNodeId: "ed2_poa_dioecious" },
  },
  ed2_poa_hermaphrodite: {
    id: "ed2_poa_hermaphrodite", milestone: "Poa: flores hermafroditas", manualPage: 83,
    descripcion: "¿La planta es anual y mide hasta 25 cm?",
    opcionA: { label: "Anual, de 5-25 cm; panoja abierta y laxa", keyStep: "B", especieId: "ed2_poa_annua" },
    opcionA_prima: { label: "Perenne, de 20-90 cm", keyStep: "B'", nextNodeId: "ed2_poa_perennial" },
  },
  ed2_poa_perennial: {
    id: "ed2_poa_perennial", milestone: "Poa: perennes hermafroditas", manualPage: 83,
    descripcion: "¿La planta posee rizomas horizontales?",
    opcionA: { label: "Sin rizomas; hojas escabrosas y panoja amplia", keyStep: "C", especieId: "ed2_poa_trivialis" },
    opcionA_prima: { label: "Con rizomas horizontales", keyStep: "C'", nextNodeId: "ed2_poa_stem_shape" },
  },
  ed2_poa_stem_shape: {
    id: "ed2_poa_stem_shape", milestone: "Poa: tallos rizomatosos", manualPage: 83,
    descripcion: "¿Los tallos son redondeados o muy comprimidos?",
    opcionA: { label: "Redondeados; panoja piramidal abierta", keyStep: "D", especieId: "ed2_poa_pratensis" },
    opcionA_prima: { label: "Muy comprimidos; panoja angosta con espiguillas amontonadas", keyStep: "D'", especieId: "ed2_poa_compressa" },
  },
  ed2_poa_dioecious: {
    id: "ed2_poa_dioecious", milestone: "Poa: plantas dioicas", manualPage: 83,
    descripcion: "¿La planta posee rizomas horizontales?",
    opcionA: { label: "Con rizomas horizontales", keyStep: "E", nextNodeId: "ed2_poa_dioecious_rhizomes" },
    opcionA_prima: { label: "Cespitosa, sin rizomas horizontales", keyStep: "E'", nextNodeId: "ed2_poa_tufted" },
  },
  ed2_poa_dioecious_rhizomes: {
    id: "ed2_poa_dioecious_rhizomes", milestone: "Poa: dioicas rizomatosas", manualPage: 83,
    descripcion: "¿Las lígulas miden hasta 2,5 mm o superan 4 mm?",
    opcionA: { label: "De 1-2,5 mm; panoja contraída; espiguillas femeninas lanosas", keyStep: "F", especieId: "ed2_poa_bonariensis" },
    opcionA_prima: { label: "Más de 4 mm", keyStep: "F'", nextNodeId: "ed2_poa_female_indument" },
  },
  ed2_poa_female_indument: {
    id: "ed2_poa_female_indument", milestone: "Poa: indumento femenino", manualPage: 83,
    descripcion: "¿Las lemmas y el callo de las espiguillas femeninas son glabros?",
    opcionA: { label: "Glabros; espiguillas grandes de cinco a ocho flores", keyStep: "G", especieId: "ed2_poa_barrosiana" },
    opcionA_prima: { label: "Lemmas ciliadas y callo cubierto de pelos lanosos", keyStep: "G'", nextNodeId: "ed2_poa_callus_hairs" },
  },
  ed2_poa_callus_hairs: {
    id: "ed2_poa_callus_hairs", milestone: "Poa: pelos del callo", manualPage: 83,
    descripcion: "¿Los pelos del callo son menores que la mitad de la lemma?",
    opcionA: { label: "Sí, cortos; panoja linear-oblonga y densa", keyStep: "H", especieId: "ed2_poa_boecheri" },
    opcionA_prima: { label: "Iguales o mayores que la lemma", keyStep: "H'", nextNodeId: "ed2_poa_ligules" },
  },
  ed2_poa_ligules: {
    id: "ed2_poa_ligules", milestone: "Poa: longitud de las lígulas", manualPage: 83,
    descripcion: "¿Cómo son las lígulas de las innovaciones?",
    opcionA: { label: "De 5-25 mm; panoja densa oblonga de 10-12 cm", keyStep: "J", especieId: "ed2_poa_lanuginosa" },
    opcionA_prima: { label: "De 1 mm; lígulas superiores de 4-6 mm; panoja de 15-30 cm", keyStep: "J'", especieId: "ed2_poa_montevidensis" },
  },
  ed2_poa_tufted: {
    id: "ed2_poa_tufted", milestone: "Poa: dioicas cespitosas", manualPage: 84,
    descripcion: "¿La planta es robusta, de hasta 1 m, con vainas muy comprimidas?",
    opcionA: { label: "Sí; láminas de 3-5 mm", keyStep: "K", especieId: "ed2_poa_iridifolia" },
    opcionA_prima: { label: "Generalmente menor; vainas dilatadas en la base", keyStep: "K'", nextNodeId: "ed2_poa_innovation_blades" },
  },
  ed2_poa_innovation_blades: {
    id: "ed2_poa_innovation_blades", milestone: "Poa: láminas de las innovaciones", manualPage: 84,
    descripcion: "¿Las láminas de las innovaciones son convolutas y miden hasta 1,5 mm?",
    opcionA: { label: "Convolutas o subconvolutas, de 0,5-1,5 mm", keyStep: "L", nextNodeId: "ed2_poa_convolute" },
    opcionA_prima: { label: "Planas, plegadas o subconvolutas, de más de 1,5 mm", keyStep: "L'", nextNodeId: "ed2_poa_flat" },
  },
  ed2_poa_convolute: {
    id: "ed2_poa_convolute", milestone: "Poa: innovaciones convolutas", manualPage: 84,
    descripcion: "¿La lígula es corta y truncada o larga y acuminada?",
    opcionA: { label: "Corta, truncada, de 1-3 mm; cañas uninodales", keyStep: "M", especieId: "ed2_poa_resinulosa" },
    opcionA_prima: { label: "Larga, acuminada, de 5-10 mm; cañas con tres o cuatro nudos", keyStep: "M'", especieId: "ed2_poa_ligularis" },
  },
  ed2_poa_flat: {
    id: "ed2_poa_flat", milestone: "Poa: innovaciones planas", manualPage: 84,
    descripcion: "¿Las cañas poseen uno o varios nudos?",
    opcionA: { label: "Un nudo; hojas escabrosas arriba; panoja algo laxa", keyStep: "N", especieId: "ed2_poa_pilcomayensis" },
    opcionA_prima: { label: "Dos a cuatro nudos; hojas lisas; panoja contraída y densa", keyStep: "N'", especieId: "ed2_poa_lanigera" },
  },
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
