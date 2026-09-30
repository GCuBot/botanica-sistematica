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
  ed2_festuca_arundinacea: species(
    "ed2_festuca_arundinacea", "Festuca arundinacea",
    "Gramínea perenne y rizomatosa, con cañas de 40-150 cm.",
    "Lemmas redondeadas en el dorso, múticas o con arista corta; hojas planas; panoja oblonga, laxa o algo contraída.",
    "Originaria de Europa; cultivada como forrajera y adventicia en Balcarce.", "Festuca arundinacea"
  ),
  ed2_vulpia_megalura: species(
    "ed2_vulpia_megalura", "Vulpia megalura",
    "Gramínea anual de 20-60 cm.",
    "Lemmas linear-lanceoladas, ciliadas en la mitad superior del margen; aristas de 8-10 mm; hojas glabras.",
    "América; frecuente en Patagonia y en la provincia de Buenos Aires.", "Vulpia megalura"
  ),
  ed2_vulpia_myuros: species(
    "ed2_vulpia_myuros", "Vulpia myuros",
    "Gramínea anual de cañas delgadas, de 10-70 cm.",
    "Lemmas no ciliadas; gluma inferior menor que la mitad de la superior; panoja incluida o apenas exerta.",
    "Originaria de Europa, naturalizada en América; frecuente en la estepa bonaerense.", "Vulpia myuros"
  ),
  ed2_vulpia_dertonensis: species(
    "ed2_vulpia_dertonensis", "Vulpia dertonensis",
    "Gramínea anual de 5-60 cm.",
    "Gluma inferior al menos igual a la mitad de la superior; gluma superior de 6-10 mm; panoja bien exerta.",
    "Originaria de Europa, naturalizada en América austral.", "Pasto cedilla"
  ),
  ed2_vulpia_australis: species(
    "ed2_vulpia_australis", "Vulpia australis",
    "Gramínea anual delicada, de 10-25 cm.",
    "Gluma superior menor de 6 mm y bastante más corta que el antecio contiguo; panoja espiciforme unilateral.",
    "América austral; rara en la estepa bonaerense.", "Vulpia australis"
  ),
  ed2_catapodium_rigidum: species(
    "ed2_catapodium_rigidum", "Catapodium rigidum",
    "Gramínea anual pequeña, erecta o ascendente, de 10-30 cm.",
    "Lemmas redondeadas y múticas; panoja estrecha y densa; espiguillas lanceoladas de cuatro a once flores.",
    "Originaria de Europa, adventicia en América; común en suelos modificados.", "Catapodium rigidum"
  ),
  ed2_gaudinia_fragilis: species(
    "ed2_gaudinia_fragilis", "Gaudinia fragilis",
    "Gramínea anual de 25-80 cm, con hojas planas y pubescentes.",
    "Espiguillas plurifloras sésiles en excavaciones del raquis; lemmas con arista dorsal; espiga dística de 10-30 cm.",
    "Originaria del sur de Europa; adventicia en Argentina sobre suelos modificados.", "Gaudinia fragilis"
  ),
  ed2_avena_barbata: species(
    "ed2_avena_barbata", "Avena barbata", "Gramínea anual de hasta 1,5 m.",
    "Espiguillas bifloras; lemma profundamente bífida, con dos lacinias de 4-8 mm; lemmas velludas.",
    "Originaria de Europa, adventicia en América; frecuente en suelos modificados.", "Avena silvestre"
  ),
  ed2_avena_fatua: species(
    "ed2_avena_fatua", "Avena fatua", "Gramínea anual de hasta 1,5 m.",
    "Raquilla articulada; antecios se desprenden por separado; lemmas pilosas y las dos basales aristadas.",
    "Originaria de Europa; adventicia en América, en rastrojos y terraplenes.", "Avena guacha"
  ),
  ed2_avena_sativa: species(
    "ed2_avena_sativa", "Avena sativa", "Gramínea anual de 60-150 cm, cultivada como cereal.",
    "Raquilla articulada; lemmas glabras, la inferior aristada y las restantes múticas; espiguillas de dos a tres flores.",
    "Originaria de Europa; cultivada y asilvestrada en suelos modificados.", "Avena"
  ),
  ed2_avena_sterilis: species(
    "ed2_avena_sterilis", "Avena sterilis", "Gramínea anual robusta, de 1-2 m, con hojas glaucas.",
    "Raquilla continua; antecios caen juntos; espiguillas de tres a cinco flores.",
    "Originaria del Viejo Mundo; adventicia en América.", "Avena"
  ),
  ed2_avena_bizantina: species(
    "ed2_avena_bizantina", "Avena bizantina", "Gramínea anual de alrededor de 1 m.",
    "Raquilla continua; espiguillas generalmente bifloras; lemmas glabras, pilosas sólo en la base.",
    "Cultivada y a veces adventicia.", "Avena amarilla"
  ),
  ed2_avena_ludoviciana: species(
    "ed2_avena_ludoviciana", "Avena ludoviciana", "Gramínea anual de hasta 1,5 m.",
    "Raquilla continua; espiguillas generalmente bifloras; lemmas velludas al menos en la base y junto a la arista.",
    "Originaria de Asia Central; adventicia en América.", "Avena cimarrona"
  ),
  ed2_holcus_lanatus: species(
    "ed2_holcus_lanatus", "Holcus lanatus", "Gramínea perenne de 20-100 cm, con vainas pubescentes.",
    "Espiguillas bifloras: flor inferior hermafrodita y mútica, superior masculina con arista dorsal retorcida; glumas velludas.",
    "Originaria de Europa, adventicia en América; muy rara en la región y utilizada como forrajera.", "Pasto dulce, heno blanco"
  ),
  ed2_arrhenatherum_elatius: species(
    "ed2_arrhenatherum_elatius", "Arrhenatherum elatius", "Gramínea perenne de 1-1,55 m.",
    "Espiguillas bifloras: flor inferior masculina y superior hermafrodita; lemma inferior con arista dorsal retorcida.",
    "Originaria de Europa; cultivada como forrajera y ocasionalmente espontánea.", "Fromental"
  ),
  ed2_aira_caryophyllea: species(
    "ed2_aira_caryophyllea", "Aira caryophyllea", "Gramínea anual tenue, de hasta 35 cm.",
    "Espiguillas bifloras; raquilla muy corta; lemmas biaristuladas con arista dorsal retorcida.",
    "Originaria de Europa; adventicia en las sierras bonaerenses.", "Aira caryophyllea"
  ),
  ed2_helictotrichon_bulbosum: species(
    "ed2_helictotrichon_bulbosum", "Helictotrichon bulbosum", "Gramínea perenne y subbulbosa, de 30-50 cm.",
    "Raquilla prolongada; glumas sobrepasan dos tercios de la espiguilla; lemmas bidentadas con arista dorsal.",
    "Sur de Chile y sierras de Balcarce y Los Padres.", "Helictotrichon bulbosum"
  ),
  ed2_amphibromus_scabrivalvis: species(
    "ed2_amphibromus_scabrivalvis", "Amphibromus scabrivalvis", "Gramínea perenne de 40-100 cm, con base bulbiforme.",
    "Espiguillas de tres a siete flores; glumas apenas alcanzan la mitad de los antecios basales; flores cleistógamas y chasmógamas.",
    "Argentina, Uruguay y Chile; suelos húmedos o pantanosos bonaerenses.", "Amphibromus scabrivalvis"
  ),
  ed2_koeleria_permollis: species(
    "ed2_koeleria_permollis", "Koeleria permollis", "Gramínea perenne y cespitosa, de 30-50 cm.",
    "Espiguillas de dos flores fértiles; lemmas carenadas, bidentadas y múticas; panoja fusiforme.",
    "Sierras de Tandil y Balcarce, hasta el sur bonaerense.", "Koeleria permollis"
  ),
  ed2_lophochloa_phleoides: species(
    "ed2_lophochloa_phleoides", "Lophochloa phleoides", "Gramínea anual de 5-50 cm, con hojas velludas.",
    "Lemma con arista recta subapical o apical; espiguillas de cuatro a seis flores en panoja espiciforme.",
    "Originaria de Europa, adventicia en América; común en campos y suelos modificados.", "Lophochloa phleoides"
  ),
  ed2_secale_cereale: species(
    "ed2_secale_cereale", "Secale cereale", "Gramínea anual cultivada como cereal y forraje.",
    "Espiguillas bifloras en espiga dística; glumas lineares y uninervadas; lemmas con larga arista apical.",
    "Europa y sudoeste de Asia; cultivada y a veces subespontánea.", "Centeno"
  ),
  ed2_agropyron_scabriglume: species(
    "ed2_agropyron_scabriglume", "Agropyron scabriglume", "Gramínea perenne y cespitosa, de hasta 1,2 m.",
    "Raquilla hirsuta; espiguillas geminadas en la parte inferior de la espiga; lemmas brevemente aristadas.",
    "Norte y centro argentino; sierras de Balcarce y Mar del Plata.", "Agropyron scabriglume"
  ),
  ed2_agropyron_scabrifolium: species(
    "ed2_agropyron_scabrifolium", "Agropyron scabrifolium", "Gramínea perenne con rizomas cortos y cañas de hasta 2 m.",
    "Raquilla glabra o escabrosa; espiguillas solitarias de seis a doce flores; espigas de 10-26 cm.",
    "Uruguay y norte y centro argentino; terrenos húmedos del Delta y costa del Río de la Plata.", "Agropyron scabrifolium"
  ),
  ed2_agropyron_repens: species(
    "ed2_agropyron_repens", "Agropyron repens", "Gramínea perenne con rizomas muy largos y cañas de hasta 1,2 m.",
    "Raquilla glabra o escabrosa; espiguillas solitarias de tres a ocho flores; espigas de 5-18 cm.",
    "Eurasia; maleza invasora, rara cerca de Buenos Aires.", "Agropyron repens"
  ),
  ed2_triticum_aestivum: species(
    "ed2_triticum_aestivum", "Triticum aestivum", "Gramínea anual de alrededor de 1 m, cultivada como cereal.",
    "Glumas ventradas o carenadas; espiguillas de tres a siete flores en espigas subcilíndricas densas.",
    "Cultivada para elaborar pan y ocasionalmente escapada de cultivo.", "Trigo"
  ),
  ed2_hordeum_vulgare: species(
    "ed2_hordeum_vulgare", "Hordeum vulgare", "Gramínea anual de cerca de 1 m.",
    "Hojas de más de 1 cm con aurículas largas; raquis tenaz; espigas polimorfas.",
    "Originaria de Asia; cultivada para cerveza y forraje, frecuentemente subespontánea.", "Cebada"
  ),
  ed2_hordeum_murinum: species(
    "ed2_hordeum_murinum", "Hordeum murinum", "Gramínea anual de 15-50 cm.",
    "Raquis frágil; glumas ciliadas; antecio central sésil o casi y mayor que los laterales.",
    "Europa central; frecuente en suelos modificados de Buenos Aires.", "Cola de zorro"
  ),
  ed2_hordeum_glaucum: species(
    "ed2_hordeum_glaucum", "Hordeum glaucum", "Gramínea anual de 20-70 cm.",
    "Antecio central pedicelado; espiga inmadura glauca; raquis largamente ciliado; anteras centrales de hasta 0,5 mm.",
    "Eurasia; adventicia en América, en cultivos y pastizales.", "Cola de zorro"
  ),
  ed2_hordeum_leporinum: species(
    "ed2_hordeum_leporinum", "Hordeum leporinum", "Gramínea anual de 25-70 cm.",
    "Antecio central pedicelado; espiga inmadura verde; raquis brevemente ciliado; anteras centrales mayores de 0,7 mm.",
    "Eurasia; adventicia en América y frecuente en suelos modificados.", "Cola de zorro"
  ),
  ed2_hordeum_compressum: species(
    "ed2_hordeum_compressum", "Hordeum compressum", "Gramínea perenne de 40-60 cm.",
    "Glumas no ciliadas; lemma fértil con siete a nueve nervaduras; prolongación de la raquilla muy breve o nula.",
    "Centro argentino; rara cerca de Buenos Aires.", "Hordeum compressum"
  ),
  ed2_hordeum_bonariense: species(
    "ed2_hordeum_bonariense", "Hordeum bonariense", "Gramínea perenne de 15-60 cm.",
    "Glumas centrales lanceoladas; glumas interiores laterales obtusas y aristadas; raquilla bien desarrollada.",
    "Centro y sur argentino y Uruguay; suelos salobres.", "Hordeum bonariense"
  ),
  ed2_hordeum_euclaston: species(
    "ed2_hordeum_euclaston", "Hordeum euclaston", "Gramínea anual de campos bajos y húmedos.",
    "Glumas centrales lanceoladas; glumas interiores laterales atenuadas y aristadas; raquilla bien desarrollada.",
    "Sur del Brasil hasta el norte patagónico.", "Hordeum euclaston"
  ),
  ed2_hordeum_geniculatum: species(
    "ed2_hordeum_geniculatum", "Hordeum geniculatum", "Gramínea anual de 10-35 cm.",
    "Glumas centrales filiformes o lineares; espiga ovoide a oblonga de hasta 5 cm.",
    "Eurasia, introducida en América; escasa en campos bajos salinos.", "Hordeum geniculatum"
  ),
  ed2_hordeum_jubatum: species(
    "ed2_hordeum_jubatum", "Hordeum jubatum", "Gramínea perenne y cespitosa, de 25-80 cm.",
    "Espiga cilíndrica nutante; glumas y aristas capilares de hasta 8 cm.",
    "Regiones templadas de América y Siberia; campos bajos y húmedos.", "Hordeum jubatum"
  ),
  ed2_hordeum_stenostachys: species(
    "ed2_hordeum_stenostachys", "Hordeum stenostachys", "Gramínea perenne y cespitosa, de 50-80 cm.",
    "Espiga cilíndrica; glumas y aristas de hasta 2,5 cm; lemma fértil pubescente.",
    "Sudamérica templada; frecuente en campos bajos y húmedos.", "Hordeum stenostachys"
  ),
  ed2_hordeum_parodii: species(
    "ed2_hordeum_parodii", "Hordeum parodii", "Gramínea perenne y cespitosa, de hasta 60 cm.",
    "Espiga cilíndrica; glumas y aristas de hasta 2,5 cm; lemma fértil escabrosa.",
    "Norte patagónico, La Pampa y sur bonaerense hasta Balcarce.", "Hordeum parodii"
  ),
  ed2_anthoxanthum_odoratum: species(
    "ed2_anthoxanthum_odoratum", "Anthoxanthum odoratum", "Gramínea perenne fragante, de 30-50 cm.",
    "Antecio fértil acompañado por dos lemmas estériles aristadas; panoja amarillenta y espiciforme.",
    "Originaria de Europa; cultivada para césped y ocasionalmente espontánea en suelos húmedos.", "Grama de olor"
  ),
  ed2_phalaris_paradoxa: species(
    "ed2_phalaris_paradoxa", "Phalaris paradoxa", "Gramínea anual de hasta 1 m.",
    "Espiguillas se desprenden en grupos de seis a nueve, una fértil y las restantes estériles.",
    "Originaria del Mediterráneo; rara adventicia en la región.", "Phalaris paradoxa"
  ),
  ed2_phalaris_aquatica: species(
    "ed2_phalaris_aquatica", "Phalaris aquatica", "Gramínea perenne cespitosa de hasta 1,5 m.",
    "Espiguillas caen por separado; panoja espiciforme; glumas con quilla anchamente alada.",
    "Originaria del Mediterráneo; cultivada como forrajera y frecuentemente adventicia.", "Mata dulce, falaris bulbosa"
  ),
  ed2_phalaris_canariensis: species(
    "ed2_phalaris_canariensis", "Phalaris canariensis", "Gramínea anual de hasta 1 m.",
    "Panoja ovoide corta y gruesa; glumas conspicuamente aladas; antecios estériles iguales.",
    "Sur de Europa e islas Canarias; cultivada para aves y escapada de cultivo.", "Alpiste"
  ),
  ed2_phalaris_minor: species(
    "ed2_phalaris_minor", "Phalaris minor", "Gramínea anual de hasta 1 m.",
    "Panoja ovoide; glumas aladas; antecios estériles desiguales, uno muy reducido.",
    "Cultivada como forrajera y ocasionalmente espontánea.", "Alfarín, pasto romano"
  ),
  ed2_phalaris_angusta: species(
    "ed2_phalaris_angusta", "Phalaris angusta", "Gramínea anual de hasta 1,5 m.",
    "Panoja cilíndrica; antecio fértil agudo y totalmente pubescente; hoja lisa arriba.",
    "América templada y cálida; común en campos húmedos y bosques de la ribera.", "Alpistillo"
  ),
  ed2_phalaris_platensis: species(
    "ed2_phalaris_platensis", "Phalaris platensis", "Gramínea anual con cañas de unos 60 cm.",
    "Panoja cilíndrica; antecio fértil acuminado y glabro arriba; hoja estriada en la cara superior.",
    "Uruguay y nordeste argentino; campos húmedos.", "Alpistillo"
  ),
  ed2_polypogon_semiverticillatus: species(
    "ed2_polypogon_semiverticillatus", "Polypogon semiverticillatus", "Gramínea perenne estolonífera, de 10-60 cm.",
    "Tallos rastreros; panoja densa pero no espiciforme; glumas múticas o apenas mucronadas.",
    "Sur de Europa y norte de África; adventicia en suelos modificados bonaerenses.", "Polypogon semiverticillatus"
  ),
  ed2_polypogon_monspeliensis: species(
    "ed2_polypogon_monspeliensis", "Polypogon monspeliensis", "Gramínea anual erecta, de hasta 80 cm.",
    "Panoja espiciforme; glumas enteras o apenas bilobadas y aristadas; lemma con tres arístulas.",
    "Viejo Mundo; naturalizada en América, común en campos bajos y salados.", "Cola de zorro"
  ),
  ed2_polypogon_maritimus: species(
    "ed2_polypogon_maritimus", "Polypogon maritimus", "Gramínea anual erecta, de 7-30 cm.",
    "Panoja espiciforme; glumas notablemente bilobadas y aristadas; lemma mútica o con arístula diminuta.",
    "Región mediterránea; adventicia en la depresión del Salado.", "Polypogon maritimus"
  ),
  ed2_chaetotropis_chilensis: species(
    "ed2_chaetotropis_chilensis", "Chaetotropis chilensis", "Gramínea anual con cañas de hasta 1,2 m.",
    "Glumas mucronadas, escabrosas y pectinado-espinulosas sobre la carena; panoja de 15-30 cm.",
    "América austral; suelos húmedos.", "Chaetotropis chilensis"
  ),
  ed2_chaetotropis_elongata: species(
    "ed2_chaetotropis_elongata", "Chaetotropis elongata", "Gramínea perenne con macollos estériles basales.",
    "Glumas lanceolado-subuladas y ásperas; lemma aristada; panoja laxa.",
    "La variedad longearistata es frecuente en las orillas del Río de la Plata.", "Chaetotropis elongata"
  ),
  ed2_chaetotropis_imberbis: species(
    "ed2_chaetotropis_imberbis", "Chaetotropis imberbis", "Gramínea perenne de 15-80 cm.",
    "Glumas con protuberancias cortas y gruesas; lemma mútica o aristulada; panoja compacta, lobada y subespiciforme.",
    "Frecuente en la provincia de Buenos Aires.", "Chaetotropis imberbis"
  ),
  ed2_alopecurus_agrestis: species(
    "ed2_alopecurus_agrestis", "Alopecurus agrestis", "Gramínea perenne y cespitosa, de 50-100 cm.",
    "Glumas soldadas hasta la mitad, con carenas ásperas o cortamente ciliadas; panoja delgada de 4-10 cm; espiguillas casi glabras de 5 mm.",
    "Originaria de Europa; adventicia en América, en suelos modificados.", "Alopecurus agrestis"
  ),
  ed2_alopecurus_bonariensis: species(
    "ed2_alopecurus_bonariensis", "Alopecurus bonariensis", "Gramínea anual de 5-30 cm, con vainas algo infladas y láminas lineares.",
    "Glumas unidas sólo en la base, con quillas largamente ciliadas abajo; panoja cilíndrica muy densa de 2-3 cm; espiguillas oblongas de 2,6 mm.",
    "Suelos salados de Entre Ríos, Santa Fe y nordeste de Buenos Aires.", "Alopecurus bonariensis"
  ),
  ed2_lagurus_ovatus: species(
    "ed2_lagurus_ovatus", "Lagurus ovatus", "Gramínea anual de hojas planas y panoja espiciforme muy densa, ovoide o globosa.",
    "Glumas velludas prolongadas en arista plumosa; lemma bífida, con dos aristas tenues y una arista dorsal larga y retorcida.",
    "Originaria del Mediterráneo; cultivada como ornamental y adventicia en Villa Gesell, Mar del Plata y Tandil.", "Lagurus ovatus"
  ),
  ed2_deyeuxia_viridiflavescens: species(
    "ed2_deyeuxia_viridiflavescens", "Deyeuxia viridiflavescens var. montevidensis", "Gramínea perenne de 80-130 cm.",
    "Glumas de 5-6,5 mm; antecios de 3,5-4 mm; lemma con arista de 3-4 mm; panoja fusiforme de 25-35 cm.",
    "Desde Perú y Bolivia hasta el centro y nordeste argentino; frecuente en campos húmedos.", "Deyeuxia viridiflavescens var. montevidensis"
  ),
  ed2_deyeuxia_armata: species(
    "ed2_deyeuxia_armata", "Deyeuxia armata", "Gramínea perenne de 40-80 cm.",
    "Glumas de 7-12 mm; antecios de 4-6 mm; lemma con arista de 4-7 mm; panoja densa de 5-20 cm.",
    "Sur de Brasil, Uruguay y este y centro de Argentina; estepas de General Madariaga y sierras bonaerenses.", "Deyeuxia armata"
  ),
  ed2_phleum_pratense: species(
    "ed2_phleum_pratense", "Phleum pratense", "Gramínea perenne de 50-150 cm, cultivada como forrajera.",
    "Panoja cilíndrica de 5-10 cm; glumas truncadas de 3-5 mm, con arista gruesa de 1 mm y quilla largamente ciliada.",
    "Originaria de Europa; cultivada y a veces espontánea en suelos modificados.", "Timoti, fleo"
  ),
  ed2_agrostis_alba: species(
    "ed2_agrostis_alba", "Agrostis alba", "Gramínea rizomatosa con cañas de hasta 1,2 m.",
    "Lemma mútica; panoja piramidal laxa de 10-30 cm, con ramas verticiladas y abiertas; espiguillas lanceoladas de 2,5 mm.",
    "Originaria de Europa; adventicia en América.", "Agrostis alba"
  ),
  ed2_agrostis_palustris: species(
    "ed2_agrostis_palustris", "Agrostis palustris", "Gramínea estolonífera con cañas erectas de 20-80 cm.",
    "Lemma mútica; panoja fusiforme densa de 4-15 cm, con ramas aplicadas al raquis; espiguillas lanceoladas de 2-2,5 mm.",
    "Originaria de Europa; adventicia frecuente en las orillas del Río de la Plata.", "Pasto quila"
  ),
  ed2_agrostis_platensis: species(
    "ed2_agrostis_platensis", "Agrostis platensis", "Gramínea perenne y estolonífera de 70-150 cm.",
    "Glumas cortamente aristadas; lemma con arista débil de 1-1,5 mm inserta cerca del ápice; panoja fusiforme contraída de 10-25 cm.",
    "Endémica del Delta y de la ribera platense.", "Agrostis platensis"
  ),
  ed2_agrostis_montevidensis: species(
    "ed2_agrostis_montevidensis", "Agrostis montevidensis", "Gramínea perenne, cespitosa y multicaule de 30-40 cm.",
    "Panoja laxa y muy difusa; pedicelos filiformes mucho más largos que las espiguillas; lemma con arista dorsal de unos 2 mm cerca del ápice.",
    "Uruguay y nordeste argentino; frecuente en la estepa clímax.", "Pasto ilusión"
  ),
  ed2_agrostis_avenacea: species(
    "ed2_agrostis_avenacea", "Agrostis avenacea", "Gramínea perenne y cespitosa de 60-70 cm.",
    "Panoja laxa; pedicelos de 1-4 mm, menores o apenas más largos que las espiguillas; arista dorsal de 3-3,5 mm inserta sobre la mitad de la lemma.",
    "Originaria de Australia y Nueva Zelandia; adventicia en la depresión del Salado.", "Agrostis avenacea"
  ),
  ed2_agrostis_tandilensis: species(
    "ed2_agrostis_tandilensis", "Agrostis tandilensis", "Gramínea anual y multicaule de 10-20 cm.",
    "Panoja espiciforme muy densa de 3-7 cm; glumas casi iguales; lemma con dos aristas apicales y una dorsal retorcida.",
    "Uruguay y nordeste de la Argentina.", "Agrostis tandilensis"
  ),
  ed2_agrostis_jirgensii: species(
    "ed2_agrostis_jirgensii", "Agrostis jirgensii", "Gramínea anual de 20-50 cm.",
    "Panoja espiciforme muy densa de 10-20 cm; gluma inferior más larga; lemma con dos aristas apicales cortas y una dorsal fuerte y larga.",
    "Sur de Brasil, Uruguay y nordeste argentino; en campos húmedos.", "Agrostis jirgensii"
  ),
  ed2_oryzopsis_miliacea: species(
    "ed2_oryzopsis_miliacea", "Oryzopsis miliacea", "Gramínea perenne de 60-150 cm, con hojas planas.",
    "Panoja laxa de 15-30 cm; espiguillas cortamente pediceladas de 3 mm; lemma rígida con arista corta y caduca de 4 mm.",
    "Originaria del Mediterráneo; adventicia en la Isla Maciel, Avellaneda.", "Oryzopsis miliacea"
  ),
  ed2_piptochaetium_hackelii: species(
    "ed2_piptochaetium_hackelii", "Piptochaetium hackelii", "Gramínea perenne de 60-100 cm, con hojas convolutas y glabras.",
    "Antecio cilíndrico de 9-14 mm, finamente estriado; glumas violáceas o castañas de 21-30 mm; arista de 8-10 cm.",
    "Estepas graminosas del Uruguay y de la provincia de Buenos Aires.", "Flechilla"
  ),
  ed2_piptochaetium_ruprechtianum: species(
    "ed2_piptochaetium_ruprechtianum", "Piptochaetium ruprechtianum", "Gramínea perenne de 80-150 cm, con hojas lineares convolutas o planas.",
    "Antecio cilíndrico-obovado de 7-8,5 mm, glabro salvo el antopodio velludo; glumas violáceas de 13-15 mm; arista de 5,5-7,5 cm.",
    "Sur de Brasil, Uruguay y nordeste argentino; sierras de Tandil y Balcarce.", "Piptochaetium ruprechtianum"
  ),
  ed2_piptochaetium_bicolor: species(
    "ed2_piptochaetium_bicolor", "Piptochaetium bicolor", "Gramínea perenne de 40-80 cm, con hojas estrechas planas o convolutas.",
    "Antecio obpiriforme de 3,5-6,5 mm, con corona laciniado-ciliada de 0,5-1 mm; glumas de 7,5-10,5 mm; arista de 3-5 cm.",
    "Chile, Uruguay y Argentina; forrajera de la estepa graminosa.", "Piptochaetium bicolor"
  ),
  ed2_piptochaetium_medium: species(
    "ed2_piptochaetium_medium", "Piptochaetium medium", "Gramínea perenne de 40-80 cm.",
    "Antecio obpiriforme de 3,5-6,5 mm, con corona papilosa muy reducida; glumas de 9-11 mm; arista de 3-4,5 cm.",
    "Argentina y Uruguay; presente en las sierras bonaerenses.", "Piptochaetium medium"
  ),
  ed2_piptochaetium_lasianthum: species(
    "ed2_piptochaetium_lasianthum", "Piptochaetium lasianthum", "Gramínea perenne de 30-70 cm, con hojas setáceas.",
    "Antecio obovoide de unos 3 mm cubierto por largos pelos castaños que sobrepasan la corona; arista débil y glabra de 1,5-2 cm.",
    "Uruguay y Argentina; sierras de Tandil y Balcarce.", "Piptochaetium lasianthum"
  ),
  ed2_piptochaetium_stipoides: species(
    "ed2_piptochaetium_stipoides", "Piptochaetium stipoides", "Gramínea perenne de hojas filiformes, plegadas y pilosas o casi glabras.",
    "Antecio glabro con corona ancha y antopodio piloso; el manual distingue las variedades stipoides, chaetophorum, verruculosum y purpurascens.",
    "América austral; frecuente en la estepa graminosa y en el este bonaerense.", "Piptochaetium stipoides"
  ),
  ed2_piptochaetium_grisebachii: species(
    "ed2_piptochaetium_grisebachii", "Piptochaetium grisebachii", "Gramínea perenne con cañas de unos 60 cm y hojas glabras de 2 mm de ancho.",
    "Panoja contraída de 5-15 cm; glumas violáceas de 6,5-8 mm; antecio castaño de 3-4,5 mm con corona ciliada y arista excéntrica de 2 cm.",
    "Estepas de Entre Ríos y Buenos Aires.", "Piptochaetium grisebachii"
  ),
  ed2_piptochaetium_panicoides: species(
    "ed2_piptochaetium_panicoides", "Piptochaetium panicoides", "Gramínea perenne de 15-40 cm, con hojas setáceas.",
    "Antecio liso, estriado, lenticular y comprimido de 1,8-2,5 mm; corona muy reducida; arista caduca de 1 cm; panoja contraída.",
    "América austral; nordeste de Buenos Aires.", "Piptochaetium panicoides"
  ),
  ed2_piptochaetium_uruguense: species(
    "ed2_piptochaetium_uruguense", "Piptochaetium uruguense", "Gramínea perenne de 40-70 cm.",
    "Antecio verrucoso-papiloso, grueso, de 2,5-3 mm; corona muy estrecha o inconspicua; arista casi glabra de 2-2,5 cm.",
    "Argentina y Uruguay; sierra de Balcarce.", "Piptochaetium uruguense"
  ),
  ed2_piptochaetium_montevidense: species(
    "ed2_piptochaetium_montevidense", "Piptochaetium montevidense", "Gramínea perenne de 15-60 cm, con hojas capilares plegadas.",
    "Antecio verrucoso-papiloso y comprimido de 1,5-2 mm; corona muy estrecha; arista finamente pubescente de 5-9 mm.",
    "América austral; sierras de Buenos Aires.", "Piptochaetium montevidense"
  ),
  ed2_stipa_trichotoma: species(
    "ed2_stipa_trichotoma", "Stipa trichotoma", "Gramínea perenne y cespitosa de 20-60 cm, con hojas setáceas y convolutas.",
    "Antecio obovoide algo giboso, de 2 mm, sin corona; antopodio con pelos cortos; arista notablemente excéntrica de 2-3,5 cm.",
    "Uruguay y centro argentino; frecuente en las estepas prístinas bonaerenses.", "Pasto puna"
  ),
  ed2_stipa_papposa: species(
    "ed2_stipa_papposa", "Stipa papposa", "Gramínea perenne y cespitosa de 15-80 cm, con hojas planas o convolutas.",
    "Antecio cilíndrico o fusiforme, velludo y sin corona; pelos apicales de más de 1,5 mm forman una especie de papus.",
    "Sur de Brasil, Uruguay, Argentina y centro de Chile; frecuente en estepas y campos húmedos.", "Stipa papposa"
  ),
  ed2_stipa_bonariensis: species(
    "ed2_stipa_bonariensis", "Stipa bonariensis", "Gramínea cespitosa de 30-60 cm, con hojas plegadas y panoja angosta y laxa.",
    "Antecio rojizo, glabro y brillante de 11-13 mm, con antopodio velludo y ápice papiloso; corona ciliada y arista velluda de 4-5 cm.",
    "Estepa clímax de la provincia de Buenos Aires.", "Stipa bonariensis"
  ),
  ed2_stipa_charruana: species(
    "ed2_stipa_charruana", "Stipa charruana", "Gramínea cespitosa de 50-80 cm, con hojas convolutas y panojas brillantes y nutantes.",
    "Corona acartuchada de hasta 7,5 mm, tan larga o más que el antecio; cuerpo densamente papiloso; arista de 6-9 cm.",
    "Estepas del Uruguay y nordeste argentino; frecuente en la región.", "Flechilla"
  ),
  ed2_stipa_philippii: species(
    "ed2_stipa_philippii", "Stipa philippii", "Gramínea cespitosa de 40-100 cm, con panojas erectas y laxas.",
    "Antecio uniformemente pubescente de 3-4 mm; corona obcónica diferenciada de 0,3 mm; antopodio brevísimo y velludo.",
    "Nordeste argentino y sur de Chile; campos húmedos y bosques de Celtis tala.", "Stipa philippii"
  ),
  ed2_stipa_airoides: species(
    "ed2_stipa_airoides", "Stipa airoides", "Gramínea cespitosa de cerca de 1 m, con panojas laxas y abiertas.",
    "Antecio uniformemente pubescente de 2,5-3,2 mm; corona cilíndrica apenas diferenciada de 0,4-0,5 mm; arista de 17-20 mm.",
    "Sur de Brasil, Uruguay y nordeste argentino; rara en Buenos Aires.", "Stipa airoides"
  ),
  ed2_stipa_clarazii: species(
    "ed2_stipa_clarazii", "Stipa clarazii", "Gramínea cespitosa de 30-80 cm, con hojas rígidas y convolutas.",
    "Antecio de 9-14 mm con nervaduras velludas hasta el ápice; corona cilíndrica largamente ciliada; arista hirsuta de 12-17 cm.",
    "Centro argentino y Uruguay; frecuente en la estepa clímax del este y sur bonaerense.", "Stipa clarazii"
  ),
  ed2_stipa_megapotamia: species(
    "ed2_stipa_megapotamia", "Stipa megapotamia", "Gramínea cespitosa de 50-150 cm, con hojas planas y panojas laxas.",
    "Antecio de 4-5 mm con nervaduras velludas hasta la mitad; corona cilíndrica continua con el cuerpo; arista de 3-5 cm.",
    "Suelos húmedos o pedregosos de Uruguay y nordeste argentino; bosques del Delta y la ribera.", "Stipa megapotamia"
  ),
  ed2_stipa_poeppigiana: species(
    "ed2_stipa_poeppigiana", "Stipa poeppigiana", "Gramínea perenne de 50-100 cm, con hojas planas y panojas erectas y laxas.",
    "Antecio de 6-8 mm con nervaduras velludas hasta la mitad; corona cilíndrica continua; arista pubescente de 5-9 cm.",
    "Centro y sur de Chile y Argentina; sierras de Tandil y Balcarce.", "Stipa poeppigiana"
  ),
  ed2_stipa_formicarum: species(
    "ed2_stipa_formicarum", "Stipa formicarum", "Gramínea cespitosa de 40-80 cm, con hojas lineares planas o convolutas.",
    "Antopodio corto; antecio de 0,7-0,9 mm de diámetro; corona diferenciada de 1-1,3 mm; arista filiforme ciliolada abajo.",
    "Campos bajos y húmedos del nordeste bonaerense.", "Stipa formicarum"
  ),
  ed2_stipa_hyalina: species(
    "ed2_stipa_hyalina", "Stipa hyalina", "Gramínea cespitosa de 50-120 cm, con hojas planas y panojas erectas y alargadas.",
    "Antopodio corto; antecio de 0,4-0,5 mm de diámetro; corona diferenciada de 0,5-0,7 mm; arista capilar, glabra y tenue.",
    "Uruguay y centro argentino; frecuente en Buenos Aires y de valor forrajero.", "Flechilla mansa"
  ),
  ed2_stipa_neesiana: species(
    "ed2_stipa_neesiana", "Stipa neesiana", "Gramínea cespitosa de 30-140 cm, con panoja erecta o nutante y laxa.",
    "Antopodio mucho más largo que el diámetro del antecio; hojas planas o convolutas de 1,5-5 mm; corona cilíndrica corta.",
    "América austral; muy frecuente en la estepa prístina y de valor forrajero.", "Flechilla"
  ),
  ed2_stipa_torquata: species(
    "ed2_stipa_torquata", "Stipa torquata", "Gramínea cespitosa de 20-45 cm, con panojas laxas y paucifloras.",
    "Antopodio mucho más largo que el diámetro del antecio; hojas filiformes plegadas de 0,5-1 mm; corona cilíndrica largamente ciliada.",
    "Uruguay y sierras de la provincia de Buenos Aires.", "Flechilla"
  ),
  ed2_stipa_filifolia: species(
    "ed2_stipa_filifolia", "Stipa filifolia", "Gramínea cespitosa de 40-80 cm, con panojas fusiformes muy densas.",
    "Antecio sin corona, pubescente abajo, de 3-4 mm; ápice sin anillo de pelos; arista de 2,5-3 cm.",
    "Uruguay y sierras de Tandil y Balcarce.", "Stipa filifolia"
  ),
  ed2_stipa_juncoides: species(
    "ed2_stipa_juncoides", "Stipa juncoides", "Gramínea cespitosa de 30-50 cm, con hojas convolutas subuladas.",
    "Antecio sin corona, con anillo de pelos en el ápice; arista de 5-8 cm; pálea mucho más corta que la lemma.",
    "Uruguay y sierras bonaerenses; vegeta entre rocas.", "Stipa juncoides"
  ),
  ed2_stipa_brachychaeta: species(
    "ed2_stipa_brachychaeta", "Stipa brachychaeta", "Gramínea densamente cespitosa de 40-100 cm, con hojas rígidas y convolutas.",
    "Antecio sin corona y totalmente velludo; anillo de pelos apical; arista de 1,5-2,5 cm; cariopse oblongo.",
    "Uruguay y centro argentino; suelos sueltos o modificados.", "Paja vizcachera"
  ),
  ed2_stipa_caudata: species(
    "ed2_stipa_caudata", "Stipa caudata", "Gramínea densamente cespitosa de 100-120 cm, con hojas flexuosas.",
    "Antecio sin corona, velludo sobre la nervadura principal y la zona marginal; anillo de pelos apical; cariopse obovoide.",
    "Centro de Chile y Argentina; barrancas, bosques de Celtis tala y sierras de Tandil y Balcarce.", "Paja vizcachera"
  ),
  ed2_parapholis_incurva: species(
    "ed2_parapholis_incurva", "Parapholis incurva", "Gramínea anual de 5-20 cm, con espigas cilíndricas solitarias.",
    "Espiguillas unifloras con dos glumas, incrustadas en excavaciones del raquis; espigas apicales o axilares de 2,5-8 cm.",
    "Sur de Europa y Asia y norte de África; frecuente en suelos salobres bonaerenses.", "Parapholis incurva"
  ),
  ed2_monerma_cylindrica: species(
    "ed2_monerma_cylindrica", "Monerma cylindrica", "Gramínea anual de hojas planas o convolutas.",
    "Espiguillas unifloras con una sola gluma, incrustadas en el grueso raquis y desprendiéndose con sus fragmentos.",
    "Originaria del Mediterráneo europeo; hallada en campos bajos de Buenos Aires.", "Monerma cylindrica"
  ),
  ed2_melica_sarmentosa: species(
    "ed2_melica_sarmentosa", "Melica sarmentosa var. glabrior", "Gramínea perenne de tallos flojos y apoyantes, de 1,5-3 m.",
    "Glumas casi iguales y agudas; espiguillas fusiformes de 7-8 mm; panoja densa de 7-12 cm; vainas cerradas.",
    "Sur de Brasil, Uruguay y norte argentino; bosques de la ribera platense e Isla Martín García.", "Melica sarmentosa var. glabrior"
  ),
  ed2_melica_macra: species(
    "ed2_melica_macra", "Melica macra", "Gramínea perenne densamente cespitosa, de alrededor de 50 cm.",
    "Glumas casi iguales y agudas; hojas rígidas y convolutas; panoja larga y angosta; espiguillas pajizas de 12-15 mm.",
    "Brasil, Uruguay y nordeste y centro argentino; barrancas y suelos pedregosos.", "Paja brava"
  ),
  ed2_melica_eremophila: species(
    "ed2_melica_eremophila", "Melica eremophila", "Gramínea perenne y rizomatosa de 20-40 cm.",
    "Glumas muy desiguales; pálea brevemente pilosa entre las nervaduras; gluma inferior obovada de 7-11 mm.",
    "Uruguay y sierras de la provincia de Buenos Aires.", "Melica eremophila"
  ),
  ed2_melica_argyrea: species(
    "ed2_melica_argyrea", "Melica argyrea", "Gramínea perenne de 15-70 cm, con rizomas cortos.",
    "Glumas muy desiguales; pálea con asperezas retrorsas; gluma inferior obovada o flabelada, con márgenes hialinos.",
    "Uruguay, Argentina y Chile; frecuente en la estepa prístina.", "Espartillo dulce"
  ),
  ed2_melica_brasiliana: species(
    "ed2_melica_brasiliana", "Melica brasiliana", "Gramínea perenne cortamente rizomatosa de 20-75 cm.",
    "Pálea glabra; vainas glabras; gluma inferior obovada y redondeada o subaguda; gluma superior aguda; hojas de 2-2,5 mm.",
    "Sur de Brasil, Uruguay y Argentina; estepa clímax y sierras bonaerenses.", "Melica brasiliana"
  ),
  ed2_melica_hyalina: species(
    "ed2_melica_hyalina", "Melica hyalina", "Gramínea perenne cortamente rizomatosa de 50-100 cm.",
    "Pálea glabra; vainas glabras; gluma inferior obovada, truncada o retusa; gluma superior obtusa; hojas de 3-6 mm.",
    "Brasil, Uruguay y Argentina; ribera platense e Isla Martín García.", "Melica hyalina"
  ),
  ed2_melica_parodiana: species(
    "ed2_melica_parodiana", "Melica parodiana", "Gramínea perenne cortamente rizomatosa de 30-50 cm.",
    "Vainas pilosas o subpilosas; espiguillas comprimidas dorsiventralmente de 7-8,5 mm; hojas de 2-3,5 mm.",
    "Uruguay y Argentina; sierras de Balcarce y Tandil.", "Melica parodiana"
  ),
  ed2_melica_aurantiaca: species(
    "ed2_melica_aurantiaca", "Melica aurantiaca", "Gramínea perenne cortamente rizomatosa de 30-60 cm.",
    "Vainas pilosas o subpilosas; espiguillas algo comprimidas lateralmente de 9-18,5 mm; hojas de 3,5-9 mm.",
    "Brasil, Uruguay y Argentina; estepa prístina y sierras bonaerenses.", "Melica aurantiaca"
  ),
  ed2_glyceria_multiflora: species(
    "ed2_glyceria_multiflora", "Glyceria multiflora", "Gramínea perenne, rizomatosa y palustre de 30-70 cm.",
    "Panoja angosta de 10-40 cm; espiguillas lineares de 15-25 mm con 12-15 flores; lemmas oblongas de siete nervaduras.",
    "América del Sur cálida y templada; común en suelos inundables y zanjas.", "Glyceria multiflora"
  ),
  ed2_diandrochloa_glomerata: species(
    "ed2_diandrochloa_glomerata", "Diandrochloa glomerata", "Gramínea anual, erecta y glabra de 30-100 cm.",
    "Lígula membranosa; panoja de 10-50 cm; espiguillas de 2-3,5 mm con seis a once antecios; flores con dos estambres.",
    "América cálida; rara en los alrededores de Buenos Aires.", "Diandrochloa glomerata"
  ),
  ed2_tridens_brasiliensis: species(
    "ed2_tridens_brasiliensis", "Tridens brasiliensis", "Gramínea perenne de 80-150 cm, con panoja contraída.",
    "Espiguillas con ocho a diez flores; lemma con arista central de 1-1,5 mm y dos arístulas laterales de 0,7 mm.",
    "Sur de Brasil, Paraguay, Uruguay y norte y centro argentino; rara en la región.", "Tridens brasiliensis"
  ),
  ed2_eragrostis_hypnoides: species(
    "ed2_eragrostis_hypnoides", "Eragrostis hypnoides", "Gramínea anual enana, rastrera y frecuentemente radicante en los nudos.",
    "Panoja contraída de 1-5 cm; espiguillas lanceoladas de 5-10 mm con diez a cincuenta flores; dos estambres.",
    "América cálida, desde Estados Unidos hasta el nordeste argentino; suelos húmedos.", "Eragrostis hypnoides"
  ),
  ed2_eragrostis_neomexicana: species(
    "ed2_eragrostis_neomexicana", "Eragrostis neomexicana", "Gramínea anual con cañas de hasta 1 m.",
    "Vainas con glándulas crateriformes; panoja amplia y laxa de 20-35 cm; cariopse con surco ventral ancho.",
    "Originaria de Estados Unidos; adventicia en suelos modificados.", "Eragrostis neomexicana"
  ),
  ed2_eragrostis_minor: species(
    "ed2_eragrostis_minor", "Eragrostis minor", "Gramínea anual con cañas ascendentes de 10-20 cm.",
    "Vainas con glándulas crateriformes; panoja de 2-10 cm; espiguillas de 1,3-2 mm de ancho, con ocho a quince antecios; lemmas obtusas.",
    "Sur de Europa; adventicia en calles de la Capital Federal.", "Eragrostis minor"
  ),
  ed2_eragrostis_cilianensis: species(
    "ed2_eragrostis_cilianensis", "Eragrostis cilianensis", "Gramínea anual de 10-40 cm.",
    "Vainas con glándulas crateriformes; espiguillas de 2-4 mm de ancho con ocho a treinta y cuatro antecios; lemmas mucronuladas.",
    "Originaria de Europa; adventicia en suelos modificados.", "Eragrostis cilianensis"
  ),
  ed2_eragrostis_virescens: species(
    "ed2_eragrostis_virescens", "Eragrostis virescens", "Gramínea anual ascendente o erecta de 20-70 cm.",
    "Vainas sin glándulas; cariopse con surco ventral ancho; panoja laxa de 10-30 cm; espiguillas con siete a diez antecios.",
    "América austral; frecuente en ambientes antropógenos y suelos húmedos bonaerenses.", "Eragrostis virescens"
  ),
  ed2_eragrostis_neesii: species(
    "ed2_eragrostis_neesii", "Eragrostis neesii var. lindmanii", "Gramínea pequeña e hirsuta de 20-45 cm.",
    "Dos estambres; panoja breve y contraída de 3-9 cm; espiguillas de tres a quince flores, frecuentemente con glumas caducas.",
    "Sur de Brasil, Paraguay, Uruguay y nordeste argentino; rara cerca de Buenos Aires.", "Eragrostis neesii var. lindmanii"
  ),
  ed2_eragrostis_barrelieri: species(
    "ed2_eragrostis_barrelieri", "Eragrostis barrelieri", "Gramínea anual con cañas de 15-40 cm.",
    "Nudos con anillo de glándulas; panoja aérea acompañada por otra de flores cleistógamas semiincluida en la vaina.",
    "Sur de Europa; adventicia en La Plata.", "Eragrostis barrelieri"
  ),
  ed2_eragrostis_pectinacea: species(
    "ed2_eragrostis_pectinacea", "Eragrostis pectinacea", "Gramínea anual con cañas ascendentes de 15-25 cm.",
    "Cuello de la vaina con mechones laterales; glumas agudas y carenadas; lemmas de nervios prominentes; espiguillas verde grisáceas.",
    "América del Norte; rara en Puerto Nuevo.", "Eragrostis pectinacea"
  ),
  ed2_eragrostis_pilosa: species(
    "ed2_eragrostis_pilosa", "Eragrostis pilosa", "Gramínea anual ascendente o erecta de 10-40 cm.",
    "Cuello de la vaina con mechones laterales; glumas muy desiguales y tenues; lemmas con nervaduras laterales poco visibles.",
    "Originaria de Europa; adventicia en suelos modificados.", "Eragrostis pilosa"
  ),
  ed2_eragrostis_multicaulis: species(
    "ed2_eragrostis_multicaulis", "Eragrostis multicaulis", "Gramínea anual glabra, ascendente o erecta, de 15-40 cm.",
    "Cuello de la vaina sin mechones; lemmas muy agudas; pálea igual a dos tercios de la lemma o menor; panoja laxa.",
    "Regiones templadas y cálidas del globo; hallada en el Delta bonaerense.", "Eragrostis multicaulis"
  ),
  ed2_eragrostis_airoides: species(
    "ed2_eragrostis_airoides", "Eragrostis airoides", "Gramínea perenne de cañas delgadas, de 30-100 cm.",
    "Espiguillas diminutas de 1-2 mm con uno a tres antecios; panoja muy difusa con pedicelos filiformes glandulosos.",
    "América cálida hasta el norte y este argentino; frecuente en el Delta, norte provincial y sierras.", "Eragrostis airoides"
  ),
  ed2_eragrostis_retinens: species(
    "ed2_eragrostis_retinens", "Eragrostis retinens", "Gramínea perenne de cañas delgadas y glabras, de 20-60 cm.",
    "Lemmas obtusas; páleas con quillas prominentes y ciliadas; espiguillas elipsoidales con tres a seis antecios.",
    "Uruguay y nordeste y centro argentino; campos del norte y nordeste bonaerense.", "Eragrostis retinens"
  ),
  ed2_eragrostis_polytricha: species(
    "ed2_eragrostis_polytricha", "Eragrostis polytricha", "Gramínea perenne de 30-60 cm.",
    "Panoja difusa y piramidal; vainas velludas; láminas planas de 3-6 mm; pedicelos mucho más largos que las espiguillas.",
    "América cálida hasta el nordeste argentino; rara en Pergamino y Tandil.", "Eragrostis polytricha"
  ),
  ed2_eragrostis_lugens: species(
    "ed2_eragrostis_lugens", "Eragrostis lugens", "Gramínea perenne de cañas delgadas, de 15-70 cm.",
    "Panoja amplia y difusa; vainas glabras o pilosas cerca de la lígula; láminas de 1-3 mm; glumas tenues.",
    "América cálida hasta el centro argentino; frecuente en la estepa clímax y forrajera.", "Eragrostis lugens"
  ),
  ed2_eragrostis_bahiensis: species(
    "ed2_eragrostis_bahiensis", "Eragrostis bahiensis", "Gramínea perenne alta y glabra, con cañas de hasta 1 m y raíces profundas.",
    "Panoja densa, algo nutante; raquilla tenaz; las páleas permanecen en ella al madurar los cariopses.",
    "Este y sur de Brasil, Paraguay, Uruguay y nordeste y centro argentino; rara en Isla Maciel y San Clemente.", "Eragrostis bahiensis"
  ),
  ed2_eragrostis_cataclasta: species(
    "ed2_eragrostis_cataclasta", "Eragrostis cataclasta", "Gramínea perenne de cañas estriadas y glabras, de 30-80 cm.",
    "Raquilla frágil; panoja contraída de 3-15 cm; espiguillas casi sésiles de 5-10 mm con ocho a veinte antecios.",
    "Sur de Brasil, Uruguay y nordeste argentino; presente en Isla Maciel.", "Eragrostis cataclasta"
  ),
  ed2_pappophorum_mucronulatum: species(
    "ed2_pappophorum_mucronulatum", "Pappophorum mucronulatum", "Gramínea perenne y cespitosa de 30-80 cm.",
    "Panoja espiciforme de 8-15 cm; espiguillas con dos o tres flores fértiles; lemmas con trece a quince aristas apicales.",
    "América templado-cálida; presente en la estepa clímax.", "Cola de zorro"
  ),
  ed2_aristida_spegazzinii: species(
    "ed2_aristida_spegazzinii", "Aristida spegazzinii", "Gramínea perenne y cespitosa de 15-45 cm, con hojas filiformes y convolutas.",
    "Gluma inferior de 17-18 mm, mayor que la superior; lemma de 10-12 mm; aristas de unos 8 cm; panoja alargada.",
    "Uruguay y nordeste argentino; estepa clímax.", "Aristida spegazzinii"
  ),
  ed2_aristida_pallens: species(
    "ed2_aristida_pallens", "Aristida pallens", "Gramínea perenne y cespitosa de 40-50 cm.",
    "Gluma inferior menor que la superior; panoja alargada y laxa; lemma de 27-28 mm; aristas de unos 10 cm.",
    "América austral; rara en la estepa clímax.", "Aristida pallens"
  ),
  ed2_aristida_adscensionis: species(
    "ed2_aristida_adscensionis", "Aristida adscensionis", "Gramínea anual ramificada en la base, de 10-30 cm.",
    "Gluma inferior menor que la superior; panoja angosta y densa de 5-8 cm; lemma de 8-10 mm; aristas de cerca de 20 mm.",
    "Isla Ascensión y ampliamente difundida en América; rara cerca de Buenos Aires.", "Aristida adscensionis"
  ),
  ed2_aristida_murina: species(
    "ed2_aristida_murina", "Aristida murina", "Gramínea perenne y erecta de 15-60 cm, con hojas planas o conduplicadas.",
    "Gluma inferior menor que la superior; panoja contraída, densa y semiespiciforme; lemma de 13-14 mm; aristas de 9 cm.",
    "América del Sur; muy común en la estepa clímax.", "Aristida murina"
  ),
  ed2_tragus_racemosus: species(
    "ed2_tragus_racemosus", "Tragus racemosus", "Gramínea anual y estolonífera de 10-35 cm.",
    "Espiguillas unifloras agrupadas de dos a cinco en fascículos caducos; gluma superior cubierta por cerdas ganchudas.",
    "Originaria del Viejo Mundo; accidental en vías férreas de la región.", "Tragus racemosus"
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
  ed2_gramineae_group_3: {
    id: "ed2_gramineae_group_3", milestone: "Gramineae: grupo 3", manualPage: 66,
    descripcion: "¿Las espiguillas se agrupan de dos a cinco en fascículos caducos en conjunto?",
    opcionA: { label: "Sí; fascículos en panojas espiciformes densas", keyStep: "A", nextNodeId: "ed2_tragus" },
    opcionA_prima: { label: "No; espiguillas caducas por separado en panojas laxas", keyStep: "A'", nextNodeId: "ed2_pseudechinolaena_pending" },
  },
  ed2_pseudechinolaena_pending: {
    id: "ed2_pseudechinolaena_pending", milestone: "Pseudechinolaena", manualPage: 141,
    descripcion: "Continuar con la especie de Pseudechinolaena tratada por el manual.",
    opcionA: { label: "Continuar desarrollando Pseudechinolaena", keyStep: "A'", especieId: "ed2_gramineae" },
    opcionA_prima: { label: "Continuar desarrollando Pseudechinolaena", keyStep: "A'", especieId: "ed2_gramineae" },
  },
  ed2_gramineae_group_4: {
    id: "ed2_gramineae_group_4", milestone: "Gramineae: grupo 4", manualPage: 66,
    descripcion: "¿La lemma termina en numerosas aristas o en tres aristas?",
    opcionA: { label: "Dividida en la parte superior en numerosas aristas desiguales", keyStep: "A", nextNodeId: "ed2_gramineae_group_4_many_awns_pending" },
    opcionA_prima: { label: "Terminada en tres aristas largas o en una arista trífida", keyStep: "A'", nextNodeId: "ed2_gramineae_group_4_inflorescence" },
  },
  ed2_gramineae_group_4_many_awns_pending: {
    id: "ed2_gramineae_group_4_many_awns_pending", milestone: "Gramineae: grupo 4, aristas numerosas", manualPage: 66,
    descripcion: "Pappophorum: única especie tratada para la región.",
    opcionA: { label: "Identificar como Pappophorum mucronulatum", keyStep: "1", especieId: "ed2_pappophorum_mucronulatum" },
    opcionA_prima: { label: "Identificar como Pappophorum mucronulatum", keyStep: "1", especieId: "ed2_pappophorum_mucronulatum" },
  },
  ed2_gramineae_group_4_inflorescence: {
    id: "ed2_gramineae_group_4_inflorescence", milestone: "Gramineae: grupo 4, arista trífida", manualPage: 66,
    descripcion: "¿Las espiguillas forman una panoja espiciforme corta o una inflorescencia laxa o alargada?",
    opcionA: { label: "Panoja espiciforme corta, ovoide o globosa", keyStep: "B", nextNodeId: "ed2_gramineae_group_4_lagurus_pending" },
    opcionA_prima: { label: "Panojas laxas o espigas alargadas", keyStep: "B'", nextNodeId: "ed2_gramineae_group_4_attachment" },
  },
  ed2_gramineae_group_4_lagurus_pending: {
    id: "ed2_gramineae_group_4_lagurus_pending", milestone: "Gramineae: grupo 4, panoja corta", manualPage: 66,
    descripcion: "Lagurus: única especie tratada para la región.",
    opcionA: { label: "Identificar como Lagurus ovatus", keyStep: "B", especieId: "ed2_lagurus_ovatus" },
    opcionA_prima: { label: "Identificar como Lagurus ovatus", keyStep: "B", especieId: "ed2_lagurus_ovatus" },
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
    descripcion: "Continuar con la clave específica de Aristida.",
    opcionA: { label: "Espiguillas unifloras; lemma con arista trífida", keyStep: "E", nextNodeId: "ed2_aristida" },
    opcionA_prima: { label: "Espiguillas unifloras; lemma con arista trífida", keyStep: "E", nextNodeId: "ed2_aristida" },
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
    descripcion: "¿La lemma posee una arista dorsal?",
    opcionA: { label: "Con arista dorsal", keyStep: "C", nextNodeId: "ed2_gramineae_group_6_dorsal" },
    opcionA_prima: { label: "Mútica o con arista apical o subapical", keyStep: "C'", nextNodeId: "ed2_gramineae_group_6_apical_pending" },
  },
  ed2_gramineae_group_6_dorsal: {
    id: "ed2_gramineae_group_6_dorsal", milestone: "Gramineae: grupo 6, arista dorsal", manualPage: 67,
    descripcion: "¿Las espiguillas son unifloras o bifloras?",
    opcionA: { label: "Unifloras; arista larga y geniculada", keyStep: "D", nextNodeId: "ed2_gramineae_group_6_alopecurus_pending" },
    opcionA_prima: { label: "Bifloras; antecio superior cortamente aristado", keyStep: "D'", especieId: "ed2_holcus_lanatus" },
  },
  ed2_gramineae_group_6_alopecurus_pending: {
    id: "ed2_gramineae_group_6_alopecurus_pending", milestone: "Gramineae: grupo 6, unifloras", manualPage: 67,
    descripcion: "Continuar con la clave específica de Alopecurus.",
    opcionA: { label: "Espiguillas unifloras; lemma con arista dorsal larga y geniculada", keyStep: "D", nextNodeId: "ed2_alopecurus" },
    opcionA_prima: { label: "Espiguillas unifloras; lemma con arista dorsal larga y geniculada", keyStep: "D", nextNodeId: "ed2_alopecurus" },
  },
  ed2_gramineae_group_6_apical_pending: {
    id: "ed2_gramineae_group_6_apical_pending", milestone: "Gramineae: grupo 6, arista apical", manualPage: 67,
    descripcion: "¿Las espiguillas son completamente sésiles y forman espigas?",
    opcionA: { label: "Sí, sésiles y dispuestas en espigas", keyStep: "E", nextNodeId: "ed2_gramineae_group_6_spikes" },
    opcionA_prima: { label: "Pediceladas y dispuestas en panojas", keyStep: "E'", nextNodeId: "ed2_gramineae_group_6_panicles_pending" },
  },
  ed2_gramineae_group_6_spikes: {
    id: "ed2_gramineae_group_6_spikes", milestone: "Gramineae: grupo 6, espigas", manualPage: 67,
    descripcion: "¿Las espiguillas son aristadas o múticas?",
    opcionA: { label: "Aristadas, reunidas en cada nudo del raquis", keyStep: "F", nextNodeId: "ed2_hordeum" },
    opcionA_prima: { label: "Múticas, en espigas situadas a lo largo del eje principal", keyStep: "F'", nextNodeId: "ed2_gramineae_group_6_spartina_pending" },
  },
  ed2_gramineae_group_6_spartina_pending: {
    id: "ed2_gramineae_group_6_spartina_pending", milestone: "Gramineae: grupo 6, espigas múticas", manualPage: 67,
    descripcion: "Continuar con el género de espiguillas múticas.",
    opcionA: { label: "Continuar desarrollando el grupo 6", keyStep: "F'", especieId: "ed2_gramineae" },
    opcionA_prima: { label: "Continuar desarrollando el grupo 6", keyStep: "F'", especieId: "ed2_gramineae" },
  },
  ed2_gramineae_group_6_panicles_pending: {
    id: "ed2_gramineae_group_6_panicles_pending", milestone: "Gramineae: grupo 6, panojas", manualPage: 67,
    descripcion: "¿Las glumas son ásperas o equinuladas y la espiguilla cae con parte del pedicelo?",
    opcionA: { label: "Sí; glumas ásperas o equinuladas", keyStep: "G", nextNodeId: "ed2_gramineae_group_6_palea" },
    opcionA_prima: { label: "Glumas con largos pelos sedosos; pedicelo permanece en la panoja", keyStep: "G'", nextNodeId: "ed2_gramineae_group_6_rhynchelytrum_pending" },
  },
  ed2_gramineae_group_6_palea: {
    id: "ed2_gramineae_group_6_palea", milestone: "Gramineae: grupo 6, longitud de la pálea", manualPage: 67,
    descripcion: "¿La pálea tiene la misma longitud que la lemma?",
    opcionA: { label: "De la misma longitud", keyStep: "H", nextNodeId: "ed2_polypogon" },
    opcionA_prima: { label: "De la mitad o menos", keyStep: "H'", nextNodeId: "ed2_chaetotropis" },
  },
  ed2_gramineae_group_6_rhynchelytrum_pending: {
    id: "ed2_gramineae_group_6_rhynchelytrum_pending", milestone: "Gramineae: grupo 6, glumas sedosas", manualPage: 67,
    descripcion: "Continuar con el género de glumas cubiertas por pelos sedosos.",
    opcionA: { label: "Continuar desarrollando el grupo 6", keyStep: "G'", especieId: "ed2_gramineae" },
    opcionA_prima: { label: "Continuar desarrollando el grupo 6", keyStep: "G'", especieId: "ed2_gramineae" },
  },
  ed2_gramineae_group_7: {
    id: "ed2_gramineae_group_7", milestone: "Gramineae: grupo 7", manualPage: 67,
    descripcion: "¿La espiguilla tiene una sola flor fértil o varias?",
    opcionA: { label: "Una sola flor fértil, a veces con antecios estériles", keyStep: "A", nextNodeId: "ed2_gramineae_group_7_uniflorous_pending" },
    opcionA_prima: { label: "Dos o más flores fértiles", keyStep: "A'", nextNodeId: "ed2_gramineae_group_7_multiflorous" },
  },
  ed2_gramineae_group_7_uniflorous_pending: {
    id: "ed2_gramineae_group_7_uniflorous_pending", milestone: "Gramineae: grupo 7, unifloras", manualPage: 67,
    descripcion: "¿Las espiguillas forman espigas o racimos lineares muy alargados, agrupados en el ápice?",
    opcionA: { label: "Sí; espigas o racimos alargados apicales", keyStep: "B", nextNodeId: "ed2_gramineae_group_7_apical_spikes_pending" },
    opcionA_prima: { label: "Racimos solitarios, espigas o panojas de otras formas", keyStep: "B'", nextNodeId: "ed2_gramineae_group_7_uniflorous_arrangement" },
  },
  ed2_gramineae_group_7_apical_spikes_pending: {
    id: "ed2_gramineae_group_7_apical_spikes_pending", milestone: "Gramineae: grupo 7, espigas apicales", manualPage: 67,
    descripcion: "Continuar con los géneros de espigas o racimos alargados apicales.",
    opcionA: { label: "Continuar desarrollando el grupo 7", keyStep: "B", especieId: "ed2_gramineae" },
    opcionA_prima: { label: "Continuar desarrollando el grupo 7", keyStep: "B", especieId: "ed2_gramineae" },
  },
  ed2_gramineae_group_7_uniflorous_arrangement: {
    id: "ed2_gramineae_group_7_uniflorous_arrangement", milestone: "Gramineae: grupo 7, disposición", manualPage: 67,
    descripcion: "¿Las espiguillas forman una única espiga linear?",
    opcionA: { label: "Una espiga linear", keyStep: "E", nextNodeId: "ed2_gramineae_group_7_microchloa_pending" },
    opcionA_prima: { label: "Varias espigas o panojas", keyStep: "E'", nextNodeId: "ed2_gramineae_group_7_uniflorous_awn" },
  },
  ed2_gramineae_group_7_microchloa_pending: {
    id: "ed2_gramineae_group_7_microchloa_pending", milestone: "Gramineae: grupo 7, espiga única", manualPage: 67,
    descripcion: "Continuar con el género de espiga linear única.",
    opcionA: { label: "Continuar desarrollando el grupo 7", keyStep: "E", especieId: "ed2_gramineae" },
    opcionA_prima: { label: "Continuar desarrollando el grupo 7", keyStep: "E", especieId: "ed2_gramineae" },
  },
  ed2_gramineae_group_7_uniflorous_awn: {
    id: "ed2_gramineae_group_7_uniflorous_awn", milestone: "Gramineae: grupo 7, lemma", manualPage: 67,
    descripcion: "¿La lemma posee arista terminal o dorsal?",
    opcionA: { label: "Con arista terminal o dorsal", keyStep: "F", nextNodeId: "ed2_gramineae_group_7_uniflorous_awned_pending" },
    opcionA_prima: { label: "Mútica o apenas mucronada", keyStep: "F'", nextNodeId: "ed2_gramineae_group_7_uniflorous_mutic" },
  },
  ed2_gramineae_group_7_uniflorous_awned_pending: {
    id: "ed2_gramineae_group_7_uniflorous_awned_pending", milestone: "Gramineae: grupo 7, unifloras aristadas", manualPage: 68,
    descripcion: "¿La lemma endurecida encierra el cariopse y termina en una arista larga?",
    opcionA: { label: "Sí; lemma endurecida, envolviendo el cariopse", keyStep: "G", nextNodeId: "ed2_gramineae_group_7_hardened_awn" },
    opcionA_prima: { label: "No; lemma no envuelve el cariopse y la arista suele ser dorsal", keyStep: "G'", nextNodeId: "ed2_gramineae_group_7_soft_glumes" },
  },
  ed2_gramineae_group_7_hardened_awn: {
    id: "ed2_gramineae_group_7_hardened_awn", milestone: "Gramineae: grupo 7, antecio endurecido", manualPage: 68,
    descripcion: "¿La arista de la lemma es recta, no retorcida y fácilmente caduca?",
    opcionA: { label: "Recta, no retorcida y caduca; pálea plana", keyStep: "H", nextNodeId: "ed2_oryzopsis_pending" },
    opcionA_prima: { label: "Retorcida y persistente", keyStep: "H'", nextNodeId: "ed2_gramineae_group_7_twisted_palea" },
  },
  ed2_oryzopsis_pending: {
    id: "ed2_oryzopsis_pending", milestone: "Oryzopsis", manualPage: 100,
    descripcion: "Oryzopsis: única especie tratada para la región.",
    opcionA: { label: "Identificar como Oryzopsis miliacea", keyStep: "1", especieId: "ed2_oryzopsis_miliacea" },
    opcionA_prima: { label: "Identificar como Oryzopsis miliacea", keyStep: "1", especieId: "ed2_oryzopsis_miliacea" },
  },
  ed2_gramineae_group_7_twisted_palea: {
    id: "ed2_gramineae_group_7_twisted_palea", milestone: "Gramineae: grupo 7, pálea", manualPage: 68,
    descripcion: "¿La pálea es bicarenada y posee un surco longitudinal entre las quillas?",
    opcionA: { label: "Sí; pálea bicarenada y surcada", keyStep: "I", nextNodeId: "ed2_piptochaetium_pending" },
    opcionA_prima: { label: "No; pálea plana, lanceolada y a veces reducida", keyStep: "I'", nextNodeId: "ed2_stipa_pending" },
  },
  ed2_piptochaetium_pending: {
    id: "ed2_piptochaetium_pending", milestone: "Piptochaetium", manualPage: 100,
    descripcion: "¿El antecio fructífero es alargado, con antopodio agudo y punzante de 2-5 mm?",
    opcionA: { label: "Sí; antecio cilíndrico u obovoide alargado; glumas generalmente mayores de 9,5 mm", keyStep: "A", nextNodeId: "ed2_piptochaetium_elongated" },
    opcionA_prima: { label: "No; antecio obovoide o globoso, corto y grueso; antopodio obtuso menor de 1 mm", keyStep: "A'", nextNodeId: "ed2_piptochaetium_short_indument" },
  },
  ed2_piptochaetium_elongated: {
    id: "ed2_piptochaetium_elongated", milestone: "Piptochaetium: antecio alargado", manualPage: 100,
    descripcion: "¿El antecio es cilíndrico, de 9-14 mm, inconspicuamente giboso y de color castaño oscuro?",
    opcionA: { label: "Sí; glumas de 21-30 mm y arista de 8-10 cm", keyStep: "B", especieId: "ed2_piptochaetium_hackelii" },
    opcionA_prima: { label: "No; antecio alargadamente obovoide de 5-8,5 mm y conspicuamente giboso", keyStep: "B'", nextNodeId: "ed2_piptochaetium_obovoid" },
  },
  ed2_piptochaetium_obovoid: {
    id: "ed2_piptochaetium_obovoid", milestone: "Piptochaetium: antecio obovoide", manualPage: 100,
    descripcion: "¿El antecio es cilíndrico-obovado, de 7-8,5 mm, y la panoja generalmente nutante?",
    opcionA: { label: "Sí; glumas violáceas de 13-15 mm", keyStep: "C", especieId: "ed2_piptochaetium_ruprechtianum" },
    opcionA_prima: { label: "No; antecio obpiriforme de 3,5-6,5 mm", keyStep: "C'", nextNodeId: "ed2_piptochaetium_corona" },
  },
  ed2_piptochaetium_corona: {
    id: "ed2_piptochaetium_corona", milestone: "Piptochaetium: corona", manualPage: 100,
    descripcion: "¿La corona es laciniado-ciliada y mide 0,5-1 mm?",
    opcionA: { label: "Sí; antecio de 1,3-1,5 mm de diámetro; glumas de 7,5-10,5 mm", keyStep: "D", especieId: "ed2_piptochaetium_bicolor" },
    opcionA_prima: { label: "No; corona papilosa muy reducida; antecio de 1,7-2 mm de diámetro", keyStep: "D'", especieId: "ed2_piptochaetium_medium" },
  },
  ed2_piptochaetium_short_indument: {
    id: "ed2_piptochaetium_short_indument", milestone: "Piptochaetium: antecio corto", manualPage: 102,
    descripcion: "¿El antecio está cubierto por largos pelos castaños que sobrepasan la corona?",
    opcionA: { label: "Sí; antecio de unos 3 mm y arista débil glabra de 1,5-2 cm", keyStep: "E", especieId: "ed2_piptochaetium_lasianthum" },
    opcionA_prima: { label: "No; antecio glabro, aunque el antopodio puede ser piloso", keyStep: "E'", nextNodeId: "ed2_piptochaetium_corona_width" },
  },
  ed2_piptochaetium_corona_width: {
    id: "ed2_piptochaetium_corona_width", milestone: "Piptochaetium: ancho de la corona", manualPage: 102,
    descripcion: "¿La corona es ancha, de 0,6-2 mm de diámetro?",
    opcionA: { label: "Sí; antopodio piloso", keyStep: "F", nextNodeId: "ed2_piptochaetium_leaves" },
    opcionA_prima: { label: "No; corona muy estrecha o inconspicua", keyStep: "F'", nextNodeId: "ed2_piptochaetium_surface" },
  },
  ed2_piptochaetium_leaves: {
    id: "ed2_piptochaetium_leaves", milestone: "Piptochaetium: hojas", manualPage: 102,
    descripcion: "¿Las hojas tienen lámina plegada, filiforme y de 1 mm de ancho?",
    opcionA: { label: "Sí; pilosas o casi glabras", keyStep: "G", especieId: "ed2_piptochaetium_stipoides" },
    opcionA_prima: { label: "No; lámina plana o convoluta de 2 mm, glabra", keyStep: "G'", especieId: "ed2_piptochaetium_grisebachii" },
  },
  ed2_piptochaetium_surface: {
    id: "ed2_piptochaetium_surface", milestone: "Piptochaetium: superficie del antecio", manualPage: 102,
    descripcion: "¿El antecio es liso, estriado, lenticular y comprimido?",
    opcionA: { label: "Sí; de 1,8-2,5 mm, con arista caduca de 1 cm", keyStep: "H", especieId: "ed2_piptochaetium_panicoides" },
    opcionA_prima: { label: "No; verrucoso-papiloso y rugoso", keyStep: "H'", nextNodeId: "ed2_piptochaetium_rugose" },
  },
  ed2_piptochaetium_rugose: {
    id: "ed2_piptochaetium_rugose", milestone: "Piptochaetium: antecio rugoso", manualPage: 102,
    descripcion: "¿El antecio es grueso, de 2,5-3 mm, y la arista casi glabra mide 2-2,5 cm?",
    opcionA: { label: "Sí", keyStep: "I", especieId: "ed2_piptochaetium_uruguense" },
    opcionA_prima: { label: "No; antecio comprimido de 1,5-2 mm y arista pubescente de 5-9 mm", keyStep: "I'", especieId: "ed2_piptochaetium_montevidense" },
  },
  ed2_stipa_pending: {
    id: "ed2_stipa_pending", milestone: "Stipa", manualPage: 102,
    descripcion: "¿Los antecios son obovoides, algo gibosos y de unos 2 mm?",
    opcionA: { label: "Sí; antopodio con pelos cortos y arista de 2-3,5 cm", keyStep: "A", especieId: "ed2_stipa_trichotoma" },
    opcionA_prima: { label: "No; antecios cilíndricos o fusiformes", keyStep: "A'", nextNodeId: "ed2_stipa_apical_hairs" },
  },
  ed2_stipa_apical_hairs: {
    id: "ed2_stipa_apical_hairs", milestone: "Stipa: pelos apicales", manualPage: 103,
    descripcion: "¿La parte apical del antecio posee pelos largos, de más de 1,5 mm, formando una especie de papus?",
    opcionA: { label: "Sí; antecio velludo sin corona, de 6-9 mm", keyStep: "B", especieId: "ed2_stipa_papposa" },
    opcionA_prima: { label: "No; parte apical con pelos cortos o sin pelos", keyStep: "B'", nextNodeId: "ed2_stipa_corona_presence" },
  },
  ed2_stipa_corona_presence: {
    id: "ed2_stipa_corona_presence", milestone: "Stipa: corona", manualPage: 104,
    descripcion: "¿El antecio posee una corona obcónica o cilíndrica diferenciada?",
    opcionA: { label: "Sí; corona más o menos diferenciada", keyStep: "C", nextNodeId: "ed2_stipa_coronate_color" },
    opcionA_prima: { label: "No; antecio sin corona", keyStep: "C'", nextNodeId: "ed2_stipa_no_corona_ring" },
  },
  ed2_stipa_coronate_color: {
    id: "ed2_stipa_coronate_color", milestone: "Stipa: color del antecio", manualPage: 104,
    descripcion: "¿Los antecios son rojizos, glabros y brillantes, de 11-13 mm?",
    opcionA: { label: "Sí; corona ciliada y arista velluda de 4-5 cm", keyStep: "D", especieId: "ed2_stipa_bonariensis" },
    opcionA_prima: { label: "No; verdosos o pajizos, de hasta 14 mm", keyStep: "D'", nextNodeId: "ed2_stipa_corona_length" },
  },
  ed2_stipa_corona_length: {
    id: "ed2_stipa_corona_length", milestone: "Stipa: longitud de la corona", manualPage: 104,
    descripcion: "¿La corona es acartuchada y tan larga o más larga que el antecio?",
    opcionA: { label: "Sí; corona de hasta 7,5 mm y cuerpo densamente papiloso", keyStep: "E", especieId: "ed2_stipa_charruana" },
    opcionA_prima: { label: "No; corona corta", keyStep: "E'", nextNodeId: "ed2_stipa_indument" },
  },
  ed2_stipa_indument: {
    id: "ed2_stipa_indument", milestone: "Stipa: indumento del antecio", manualPage: 104,
    descripcion: "¿Los antecios son uniformemente pubescentes y miden 2,5-4 mm?",
    opcionA: { label: "Sí; uniformemente pubescentes", keyStep: "F", nextNodeId: "ed2_stipa_pubescent_corona" },
    opcionA_prima: { label: "No; glabros o velludos sólo sobre las nervaduras", keyStep: "F'", nextNodeId: "ed2_stipa_nerve_hairs" },
  },
  ed2_stipa_pubescent_corona: {
    id: "ed2_stipa_pubescent_corona", milestone: "Stipa: corona del antecio pubescente", manualPage: 104,
    descripcion: "¿La corona es obcónica y está claramente diferenciada del cuerpo?",
    opcionA: { label: "Sí; corona de 0,3 mm y antopodio brevísimo", keyStep: "G", especieId: "ed2_stipa_philippii" },
    opcionA_prima: { label: "No; corona cilíndrica apenas diferenciada, de 0,4-0,5 mm", keyStep: "G'", especieId: "ed2_stipa_airoides" },
  },
  ed2_stipa_nerve_hairs: {
    id: "ed2_stipa_nerve_hairs", milestone: "Stipa: pelos de las nervaduras", manualPage: 104,
    descripcion: "¿Las nervaduras del antecio son velludas hasta el ápice?",
    opcionA: { label: "Sí; antecio de 9-14 mm y corona largamente ciliada", keyStep: "H", especieId: "ed2_stipa_clarazii" },
    opcionA_prima: { label: "No; velludas sólo abajo o glabras", keyStep: "H'", nextNodeId: "ed2_stipa_corona_shape" },
  },
  ed2_stipa_corona_shape: {
    id: "ed2_stipa_corona_shape", milestone: "Stipa: forma de la corona", manualPage: 104,
    descripcion: "¿La corona es cilíndrica, poco diferenciada y continua con el cuerpo del antecio?",
    opcionA: { label: "Sí; hojas de 4-12 mm de ancho", keyStep: "I", nextNodeId: "ed2_stipa_continuous_corona" },
    opcionA_prima: { label: "No; contraída en la base, bien diferenciada o muy corta", keyStep: "I'", nextNodeId: "ed2_stipa_antopodium" },
  },
  ed2_stipa_continuous_corona: {
    id: "ed2_stipa_continuous_corona", milestone: "Stipa: corona continua", manualPage: 104,
    descripcion: "¿El antecio mide 4-5 mm?",
    opcionA: { label: "Sí; nervaduras velludas hasta la mitad y arista de 3-5 cm", keyStep: "J", especieId: "ed2_stipa_megapotamia" },
    opcionA_prima: { label: "No; antecio de 6-8 mm y arista pubescente de 5-9 cm", keyStep: "J'", especieId: "ed2_stipa_poeppigiana" },
  },
  ed2_stipa_antopodium: {
    id: "ed2_stipa_antopodium", milestone: "Stipa: antopodio", manualPage: 104,
    descripcion: "¿El antopodio es tan largo como el diámetro del antecio o más corto?",
    opcionA: { label: "Sí; antopodio corto", keyStep: "K", nextNodeId: "ed2_stipa_short_antopodium" },
    opcionA_prima: { label: "No; antopodio mucho más largo que el diámetro del antecio", keyStep: "K'", nextNodeId: "ed2_stipa_long_antopodium" },
  },
  ed2_stipa_short_antopodium: {
    id: "ed2_stipa_short_antopodium", milestone: "Stipa: antopodio corto", manualPage: 104,
    descripcion: "¿El antecio mide 0,7-0,9 mm de diámetro y la corona 1-1,3 mm?",
    opcionA: { label: "Sí; arista filiforme ciliolada abajo", keyStep: "L", especieId: "ed2_stipa_formicarum" },
    opcionA_prima: { label: "No; antecio de 0,4-0,5 mm y corona de 0,5-0,7 mm", keyStep: "L'", especieId: "ed2_stipa_hyalina" },
  },
  ed2_stipa_long_antopodium: {
    id: "ed2_stipa_long_antopodium", milestone: "Stipa: antopodio largo", manualPage: 106,
    descripcion: "¿Las hojas son lineares, planas o convolutas, de 1,5-5 mm de ancho?",
    opcionA: { label: "Sí; antecio de 7-10 mm y corona corta", keyStep: "M", especieId: "ed2_stipa_neesiana" },
    opcionA_prima: { label: "No; hojas filiformes plegadas de 0,5-1 mm", keyStep: "M'", especieId: "ed2_stipa_torquata" },
  },
  ed2_stipa_no_corona_ring: {
    id: "ed2_stipa_no_corona_ring", milestone: "Stipa: antecio sin corona", manualPage: 106,
    descripcion: "¿El ápice carece de un anillo de pelos en el punto de inserción de la arista?",
    opcionA: { label: "Sí; antecio de 3-4 mm y panoja fusiforme muy densa", keyStep: "N", especieId: "ed2_stipa_filifolia" },
    opcionA_prima: { label: "No; ápice con un anillo de pelos", keyStep: "N'", nextNodeId: "ed2_stipa_no_corona_awn" },
  },
  ed2_stipa_no_corona_awn: {
    id: "ed2_stipa_no_corona_awn", milestone: "Stipa: arista sin corona", manualPage: 106,
    descripcion: "¿La arista mide 5-8 cm y la pálea es mucho más corta que la lemma?",
    opcionA: { label: "Sí; antecio de 5-6 mm, velludo sólo abajo", keyStep: "O", especieId: "ed2_stipa_juncoides" },
    opcionA_prima: { label: "No; arista de 1,5-2,5 cm y pálea apenas más corta", keyStep: "O'", nextNodeId: "ed2_stipa_no_corona_indument" },
  },
  ed2_stipa_no_corona_indument: {
    id: "ed2_stipa_no_corona_indument", milestone: "Stipa: indumento sin corona", manualPage: 106,
    descripcion: "¿El antecio es totalmente velludo y las hojas son rígidas?",
    opcionA: { label: "Sí; cariopse oblongo", keyStep: "P", especieId: "ed2_stipa_brachychaeta" },
    opcionA_prima: { label: "No; velludo sobre la nervadura principal y el margen; hojas flexuosas", keyStep: "P'", especieId: "ed2_stipa_caudata" },
  },
  ed2_gramineae_group_7_soft_glumes: {
    id: "ed2_gramineae_group_7_soft_glumes", milestone: "Gramineae: grupo 7, glumas", manualPage: 68,
    descripcion: "¿Las glumas terminan en una arista gruesa y corta y son largamente ciliadas en la quilla?",
    opcionA: { label: "Sí; panoja espiciforme cilíndrica", keyStep: "J", nextNodeId: "ed2_phleum" },
    opcionA_prima: { label: "No; glumas agudas o atenuadas, sin largas cilias en la quilla", keyStep: "J'", nextNodeId: "ed2_gramineae_group_7_rachilla_uniflorous" },
  },
  ed2_gramineae_group_7_rachilla_uniflorous: {
    id: "ed2_gramineae_group_7_rachilla_uniflorous", milestone: "Gramineae: grupo 7, raquilla uniflora", manualPage: 68,
    descripcion: "¿La raquilla se prolonga junto al antecio fértil y generalmente está cubierta de pelos?",
    opcionA: { label: "Sí; raquilla prolongada y generalmente pilosa", keyStep: "K", nextNodeId: "ed2_deyeuxia" },
    opcionA_prima: { label: "No; raquilla no prolongada", keyStep: "K'", nextNodeId: "ed2_gramineae_group_7_no_rachilla" },
  },
  ed2_gramineae_group_7_no_rachilla: {
    id: "ed2_gramineae_group_7_no_rachilla", milestone: "Gramineae: grupo 7, raquilla no prolongada", manualPage: 68,
    descripcion: "¿Las espiguillas son casi sésiles y están dispuestas en espigas largas?",
    opcionA: { label: "Sí; espigas largas a lo largo del eje principal", keyStep: "L", nextNodeId: "ed2_gymnopogon_pending" },
    opcionA_prima: { label: "No; espiguillas pediceladas en panojas densas o laxas", keyStep: "L'", nextNodeId: "ed2_agrostis" },
  },
  ed2_gymnopogon_pending: {
    id: "ed2_gymnopogon_pending", milestone: "Gymnopogon", manualPage: 112,
    descripcion: "Continuar con la clave específica de Gymnopogon.",
    opcionA: { label: "Continuar desarrollando Gymnopogon", keyStep: "L", especieId: "ed2_gramineae" },
    opcionA_prima: { label: "Continuar desarrollando Gymnopogon", keyStep: "L", especieId: "ed2_gramineae" },
  },
  ed2_gramineae_group_7_uniflorous_mutic: {
    id: "ed2_gramineae_group_7_uniflorous_mutic", milestone: "Gramineae: grupo 7, unifloras múticas", manualPage: 68,
    descripcion: "¿Las espiguillas forman varias espigas alargadas a lo largo de un eje central?",
    opcionA: { label: "Sí, varias espigas alargadas", keyStep: "M", nextNodeId: "ed2_gramineae_group_7_schedonnardus_pending" },
    opcionA_prima: { label: "Panojas laxas o densas, a veces espiciformes", keyStep: "M'", nextNodeId: "ed2_gramineae_group_7_rudimentary_florets" },
  },
  ed2_gramineae_group_7_schedonnardus_pending: {
    id: "ed2_gramineae_group_7_schedonnardus_pending", milestone: "Gramineae: grupo 7, varias espigas", manualPage: 68,
    descripcion: "Continuar con el género de varias espigas alargadas.",
    opcionA: { label: "Continuar desarrollando el grupo 7", keyStep: "M", especieId: "ed2_gramineae" },
    opcionA_prima: { label: "Continuar desarrollando el grupo 7", keyStep: "M", especieId: "ed2_gramineae" },
  },
  ed2_gramineae_group_7_rudimentary_florets: {
    id: "ed2_gramineae_group_7_rudimentary_florets", milestone: "Gramineae: grupo 7, flores rudimentarias", manualPage: 68,
    descripcion: "¿El antecio fértil lleva una o dos flores rudimentarias en la base?",
    opcionA: { label: "Sí; se desprenden junto con el antecio fértil", keyStep: "N", nextNodeId: "ed2_gramineae_group_7_rudimentary_panicle" },
    opcionA_prima: { label: "No lleva flores rudimentarias basales", keyStep: "N'", nextNodeId: "ed2_gramineae_group_7_no_rudimentary_pending" },
  },
  ed2_gramineae_group_7_rudimentary_panicle: {
    id: "ed2_gramineae_group_7_rudimentary_panicle", milestone: "Gramineae: grupo 7, panoja", manualPage: 68,
    descripcion: "¿La panoja es espiciforme y muy densa o linear y laxa?",
    opcionA: { label: "Espiciforme, ovoide o alargada y muy densa; lemmas estériles reducidas", keyStep: "Ñ", nextNodeId: "ed2_phalaris" },
    opcionA_prima: { label: "Linear y laxa; lemmas estériles mayores que el antecio fértil", keyStep: "Ñ'", nextNodeId: "ed2_ehrharta" },
  },
  ed2_gramineae_group_7_no_rudimentary_pending: {
    id: "ed2_gramineae_group_7_no_rudimentary_pending", milestone: "Gramineae: grupo 7, sin flores rudimentarias", manualPage: 68,
    descripcion: "Continuar con los géneros sin flores rudimentarias basales.",
    opcionA: { label: "Continuar desarrollando el grupo 7", keyStep: "N'", especieId: "ed2_gramineae" },
    opcionA_prima: { label: "Continuar desarrollando el grupo 7", keyStep: "N'", especieId: "ed2_gramineae" },
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
    descripcion: "Gaudinia: única especie tratada para la región.",
    opcionA: { label: "Identificar como Gaudinia fragilis", keyStep: "R", especieId: "ed2_gaudinia_fragilis" },
    opcionA_prima: { label: "Identificar como Gaudinia fragilis", keyStep: "R", especieId: "ed2_gaudinia_fragilis" },
  },
  ed2_gramineae_group_7_distichous_orientation: {
    id: "ed2_gramineae_group_7_distichous_orientation", milestone: "Gramineae: orientación de las espiguillas", manualPage: 68,
    descripcion: "¿Las espiguillas muestran el costado o las caras hacia el raquis?",
    opcionA: { label: "En un solo plano, con el costado hacia el raquis; laterales con una sola gluma", keyStep: "S", nextNodeId: "ed2_lolium" },
    opcionA_prima: { label: "Con sus caras hacia el raquis; todas con dos glumas", keyStep: "S'", nextNodeId: "ed2_gramineae_group_7_cereals_pending" },
  },
  ed2_gramineae_group_7_cereals_pending: {
    id: "ed2_gramineae_group_7_cereals_pending", milestone: "Gramineae: grupo 7, dos glumas", manualPage: 68,
    descripcion: "¿Las glumas son lineares y uninervadas o cóncavas con tres o más nervaduras?",
    opcionA: { label: "Lineares y uninervadas; espiguillas de dos a tres flores", keyStep: "T", especieId: "ed2_secale_cereale" },
    opcionA_prima: { label: "Cóncavas o carenadas, con tres o más nervaduras", keyStep: "T'", nextNodeId: "ed2_gramineae_group_7_cereal_habit" },
  },
  ed2_gramineae_group_7_cereal_habit: {
    id: "ed2_gramineae_group_7_cereal_habit", milestone: "Gramineae: cereales de glumas anchas", manualPage: 68,
    descripcion: "¿La planta es perenne o anual?",
    opcionA: { label: "Perenne; glumas plano-cóncavas", keyStep: "U", nextNodeId: "ed2_agropyron" },
    opcionA_prima: { label: "Anual; glumas ventradas o carenadas", keyStep: "U'", especieId: "ed2_triticum_aestivum" },
  },
  ed2_agropyron: {
    id: "ed2_agropyron", milestone: "Agropyron", manualPage: 92,
    descripcion: "¿La raquilla es hirsuta y hay espiguillas geminadas?",
    opcionA: { label: "Raquilla hirsuta; espiguillas geminadas abajo; planta cespitosa", keyStep: "A", especieId: "ed2_agropyron_scabriglume" },
    opcionA_prima: { label: "Raquilla glabra o escabrosa; espiguillas siempre solitarias", keyStep: "A'", nextNodeId: "ed2_agropyron_rhizome" },
  },
  ed2_agropyron_rhizome: {
    id: "ed2_agropyron_rhizome", milestone: "Agropyron: rizomas", manualPage: 92,
    descripcion: "¿Los rizomas son cortos o muy largos?",
    opcionA: { label: "Cortos; cañas de hasta 2 m; espiguillas de seis a doce flores", keyStep: "B", especieId: "ed2_agropyron_scabrifolium" },
    opcionA_prima: { label: "Muy largos; cañas de hasta 1,2 m; espiguillas de tres a ocho flores", keyStep: "B'", especieId: "ed2_agropyron_repens" },
  },
  ed2_hordeum: {
    id: "ed2_hordeum", milestone: "Hordeum", manualPage: 93,
    descripcion: "¿Las hojas superan 1 cm de ancho y el raquis es tenaz?",
    opcionA: { label: "Sí; hojas anchas y raquis tenaz", keyStep: "A", especieId: "ed2_hordeum_vulgare" },
    opcionA_prima: { label: "Hojas menores de 1 cm; raquis frágil", keyStep: "A'", nextNodeId: "ed2_hordeum_glume_cilia" },
  },
  ed2_hordeum_glume_cilia: {
    id: "ed2_hordeum_glume_cilia", milestone: "Hordeum: cilias de las glumas", manualPage: 93,
    descripcion: "¿Las glumas de la espiguilla central son ciliadas en los márgenes?",
    opcionA: { label: "Ciliadas", keyStep: "B", nextNodeId: "ed2_hordeum_central_floret" },
    opcionA_prima: { label: "No ciliadas", keyStep: "B'", nextNodeId: "ed2_hordeum_unciliated" },
  },
  ed2_hordeum_central_floret: {
    id: "ed2_hordeum_central_floret", milestone: "Hordeum: antecio central", manualPage: 93,
    descripcion: "¿El antecio central es sésil y mayor que los laterales?",
    opcionA: { label: "Sésil o casi; lemma mayor que los antecios laterales", keyStep: "C", especieId: "ed2_hordeum_murinum" },
    opcionA_prima: { label: "Pedicelado; lemma más corta que los antecios laterales", keyStep: "C'", nextNodeId: "ed2_hordeum_immature_spike" },
  },
  ed2_hordeum_immature_spike: {
    id: "ed2_hordeum_immature_spike", milestone: "Hordeum: espiga inmadura", manualPage: 94,
    descripcion: "¿La espiga inmadura es glauca o verde intensa?",
    opcionA: { label: "Glauca; raquis largamente ciliado; anteras de hasta 0,5 mm", keyStep: "D", especieId: "ed2_hordeum_glaucum" },
    opcionA_prima: { label: "Verde intensa; raquis brevemente ciliado; anteras mayores de 0,7 mm", keyStep: "D'", especieId: "ed2_hordeum_leporinum" },
  },
  ed2_hordeum_unciliated: {
    id: "ed2_hordeum_unciliated", milestone: "Hordeum: glumas no ciliadas", manualPage: 94,
    descripcion: "¿La lemma fértil posee siete a nueve nervaduras?",
    opcionA: { label: "Siete a nueve; raquilla muy breve o nula", keyStep: "E", especieId: "ed2_hordeum_compressum" },
    opcionA_prima: { label: "Cinco poco visibles; raquilla bien desarrollada", keyStep: "E'", nextNodeId: "ed2_hordeum_central_glumes" },
  },
  ed2_hordeum_central_glumes: {
    id: "ed2_hordeum_central_glumes", milestone: "Hordeum: forma de las glumas centrales", manualPage: 94,
    descripcion: "¿Las glumas centrales son lanceoladas o filiformes?",
    opcionA: { label: "Lanceoladas", keyStep: "F", nextNodeId: "ed2_hordeum_lateral_glumes" },
    opcionA_prima: { label: "Filiformes o lineares", keyStep: "F'", nextNodeId: "ed2_hordeum_spike_shape" },
  },
  ed2_hordeum_lateral_glumes: {
    id: "ed2_hordeum_lateral_glumes", milestone: "Hordeum: glumas laterales", manualPage: 94,
    descripcion: "¿Las glumas interiores laterales son obtusas o atenuadas?",
    opcionA: { label: "Obtusas y aristadas", keyStep: "G", especieId: "ed2_hordeum_bonariense" },
    opcionA_prima: { label: "Atenuadas y aristadas", keyStep: "G'", especieId: "ed2_hordeum_euclaston" },
  },
  ed2_hordeum_spike_shape: {
    id: "ed2_hordeum_spike_shape", milestone: "Hordeum: forma de la espiga", manualPage: 94,
    descripcion: "¿La espiga es ovoide u oblonga o cilíndrica?",
    opcionA: { label: "Ovoide a oblonga, de hasta 5 cm", keyStep: "H", especieId: "ed2_hordeum_geniculatum" },
    opcionA_prima: { label: "Cilíndrica", keyStep: "H'", nextNodeId: "ed2_hordeum_awn_length" },
  },
  ed2_hordeum_awn_length: {
    id: "ed2_hordeum_awn_length", milestone: "Hordeum: longitud de las aristas", manualPage: 94,
    descripcion: "¿Las glumas y aristas son capilares y alcanzan 8 cm?",
    opcionA: { label: "Sí, hasta 8 cm", keyStep: "I", especieId: "ed2_hordeum_jubatum" },
    opcionA_prima: { label: "Hasta 2,5 cm", keyStep: "I'", nextNodeId: "ed2_hordeum_lemma_surface" },
  },
  ed2_hordeum_lemma_surface: {
    id: "ed2_hordeum_lemma_surface", milestone: "Hordeum: superficie de la lemma", manualPage: 94,
    descripcion: "¿La lemma fértil es pubescente o escabrosa?",
    opcionA: { label: "Pubescente", keyStep: "J", especieId: "ed2_hordeum_stenostachys" },
    opcionA_prima: { label: "Escabrosa", keyStep: "J'", especieId: "ed2_hordeum_parodii" },
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
    descripcion: "¿Las lemmas son múticas o mucronadas?",
    opcionA: { label: "Múticas", keyStep: "a", nextNodeId: "ed2_gramineae_group_7_three_nerves_ligule" },
    opcionA_prima: { label: "Mucronadas", keyStep: "a'", nextNodeId: "ed2_gramineae_group_7_three_nerves_mucronate" },
  },
  ed2_gramineae_group_7_three_nerves_ligule: {
    id: "ed2_gramineae_group_7_three_nerves_ligule", milestone: "Gramineae: grupo 7, lígula", manualPage: 69,
    descripcion: "¿La lígula es membranosa o está formada por una hilera de pelos?",
    opcionA: { label: "Membranosa", keyStep: "b", nextNodeId: "ed2_diandrochloa" },
    opcionA_prima: { label: "Formada por una hilera de pelos", keyStep: "b'", nextNodeId: "ed2_eragrostis_pending" },
  },
  ed2_eragrostis_pending: {
    id: "ed2_eragrostis_pending", milestone: "Eragrostis", manualPage: 111,
    descripcion: "¿La planta es enana, rastrera, ramificada y frecuentemente radicante en los nudos?",
    opcionA: { label: "Sí; panoja contraída de 1-5 cm", keyStep: "A", especieId: "ed2_eragrostis_hypnoides" },
    opcionA_prima: { label: "No; planta ascendente o erecta", keyStep: "A'", nextNodeId: "ed2_eragrostis_duration" },
  },
  ed2_eragrostis_duration: {
    id: "ed2_eragrostis_duration", milestone: "Eragrostis: duración", manualPage: 111,
    descripcion: "¿La planta es anual o perenne?",
    opcionA: { label: "Anual; todos los tallos florecen en el mismo período", keyStep: "B", nextNodeId: "ed2_eragrostis_annual_glands" },
    opcionA_prima: { label: "Perenne; con renuevos que florecerán al año siguiente", keyStep: "B'", nextNodeId: "ed2_eragrostis_perennial_size" },
  },
  ed2_eragrostis_annual_glands: {
    id: "ed2_eragrostis_annual_glands", milestone: "Eragrostis anual: glándulas", manualPage: 111,
    descripcion: "¿Las nervaduras de las vainas poseen glándulas crateriformes?",
    opcionA: { label: "Sí; glándulas excavadas", keyStep: "C", nextNodeId: "ed2_eragrostis_glandular_panicle" },
    opcionA_prima: { label: "No; nervaduras sin glándulas excavadas", keyStep: "C'", nextNodeId: "ed2_eragrostis_annual_caryopsis" },
  },
  ed2_eragrostis_glandular_panicle: {
    id: "ed2_eragrostis_glandular_panicle", milestone: "Eragrostis anual: panoja glandulosa", manualPage: 111,
    descripcion: "¿La panoja es amplia y laxa, de 20-35 cm, y el cariopse posee un surco ventral ancho?",
    opcionA: { label: "Sí", keyStep: "D", especieId: "ed2_eragrostis_neomexicana" },
    opcionA_prima: { label: "No; panoja de 2-10 cm y cariopse sin surco ventral", keyStep: "D'", nextNodeId: "ed2_eragrostis_glandular_spikelet" },
  },
  ed2_eragrostis_glandular_spikelet: {
    id: "ed2_eragrostis_glandular_spikelet", milestone: "Eragrostis anual: espiguilla glandulosa", manualPage: 112,
    descripcion: "¿Las espiguillas miden 1,3-2 mm de ancho y las lemmas son obtusas?",
    opcionA: { label: "Sí; ocho a quince antecios", keyStep: "E", especieId: "ed2_eragrostis_minor" },
    opcionA_prima: { label: "No; espiguillas de 2-4 mm y lemmas mucronuladas", keyStep: "E'", especieId: "ed2_eragrostis_cilianensis" },
  },
  ed2_eragrostis_annual_caryopsis: {
    id: "ed2_eragrostis_annual_caryopsis", milestone: "Eragrostis anual: cariopse", manualPage: 112,
    descripcion: "¿El cariopse posee un surco ventral ancho?",
    opcionA: { label: "Sí; panoja laxa de 10-30 cm", keyStep: "F", especieId: "ed2_eragrostis_virescens" },
    opcionA_prima: { label: "No; contorno redondeado", keyStep: "F'", nextNodeId: "ed2_eragrostis_stamens" },
  },
  ed2_eragrostis_stamens: {
    id: "ed2_eragrostis_stamens", milestone: "Eragrostis anual: estambres", manualPage: 112,
    descripcion: "¿Las flores poseen dos o tres estambres?",
    opcionA: { label: "Dos; planta pequeña e hirsuta", keyStep: "G", especieId: "ed2_eragrostis_neesii" },
    opcionA_prima: { label: "Tres", keyStep: "G'", nextNodeId: "ed2_eragrostis_node_glands" },
  },
  ed2_eragrostis_node_glands: {
    id: "ed2_eragrostis_node_glands", milestone: "Eragrostis anual: nudos", manualPage: 112,
    descripcion: "¿La base de los nudos posee un anillo de glándulas y hay una panoja cleistógama?",
    opcionA: { label: "Sí", keyStep: "H", especieId: "ed2_eragrostis_barrelieri" },
    opcionA_prima: { label: "No", keyStep: "H'", nextNodeId: "ed2_eragrostis_neck_hairs" },
  },
  ed2_eragrostis_neck_hairs: {
    id: "ed2_eragrostis_neck_hairs", milestone: "Eragrostis anual: cuello de la vaina", manualPage: 112,
    descripcion: "¿El cuello de la vaina posee un mechón de pelos a cada lado?",
    opcionA: { label: "Sí; lemmas obtusas y pálea mayor que dos tercios", keyStep: "I", nextNodeId: "ed2_eragrostis_glumes" },
    opcionA_prima: { label: "No; lemmas muy agudas y pálea de dos tercios o menor", keyStep: "I'", especieId: "ed2_eragrostis_multicaulis" },
  },
  ed2_eragrostis_glumes: {
    id: "ed2_eragrostis_glumes", milestone: "Eragrostis anual: glumas", manualPage: 112,
    descripcion: "¿Las glumas son agudas, con quilla conspicua y nervadura aserrada?",
    opcionA: { label: "Sí; nervios laterales de la lemma prominentes", keyStep: "J", especieId: "ed2_eragrostis_pectinacea" },
    opcionA_prima: { label: "No; glumas obtusas o tenues y muy desiguales", keyStep: "J'", especieId: "ed2_eragrostis_pilosa" },
  },
  ed2_eragrostis_perennial_size: {
    id: "ed2_eragrostis_perennial_size", milestone: "Eragrostis perenne: espiguillas", manualPage: 112,
    descripcion: "¿Las espiguillas son diminutas, de 1-2 mm, con uno a tres antecios?",
    opcionA: { label: "Sí; panoja muy difusa y pedicelos filiformes", keyStep: "K", especieId: "ed2_eragrostis_airoides" },
    opcionA_prima: { label: "No; de 1,5 a varios milímetros, con tres o más antecios", keyStep: "K'", nextNodeId: "ed2_eragrostis_perennial_lemma" },
  },
  ed2_eragrostis_perennial_lemma: {
    id: "ed2_eragrostis_perennial_lemma", milestone: "Eragrostis perenne: lemma", manualPage: 112,
    descripcion: "¿Las lemmas son obtusas y las páleas tienen quillas prominentemente ciliadas?",
    opcionA: { label: "Sí; espiguillas elipsoidales con tres a seis antecios", keyStep: "L", especieId: "ed2_eragrostis_retinens" },
    opcionA_prima: { label: "No; lemmas agudas y quillas escabrosas o apenas ciliadas", keyStep: "L'", nextNodeId: "ed2_eragrostis_perennial_panicle" },
  },
  ed2_eragrostis_perennial_panicle: {
    id: "ed2_eragrostis_perennial_panicle", milestone: "Eragrostis perenne: panoja", manualPage: 113,
    descripcion: "¿La panoja es difusa y los pedicelos mucho más largos que las espiguillas?",
    opcionA: { label: "Sí", keyStep: "M", nextNodeId: "ed2_eragrostis_sheath" },
    opcionA_prima: { label: "No; panoja densa y pedicelos más cortos", keyStep: "M'", nextNodeId: "ed2_eragrostis_rachilla" },
  },
  ed2_eragrostis_sheath: {
    id: "ed2_eragrostis_sheath", milestone: "Eragrostis perenne: vainas", manualPage: 113,
    descripcion: "¿Las vainas son velludas y las láminas anchas y planas?",
    opcionA: { label: "Sí; láminas de 3-6 mm", keyStep: "N", especieId: "ed2_eragrostis_polytricha" },
    opcionA_prima: { label: "No; vainas glabras o pilosas sólo cerca de la lígula", keyStep: "N'", especieId: "ed2_eragrostis_lugens" },
  },
  ed2_eragrostis_rachilla: {
    id: "ed2_eragrostis_rachilla", milestone: "Eragrostis perenne: raquilla", manualPage: 113,
    descripcion: "¿La raquilla es tenaz y persistente?",
    opcionA: { label: "Sí; las espiguillas caen enteras o las páleas permanecen", keyStep: "O", nextNodeId: "ed2_eragrostis_tenacious_habit" },
    opcionA_prima: { label: "No; raquilla frágil, quebrándose junto a la inserción", keyStep: "O'", especieId: "ed2_eragrostis_cataclasta" },
  },
  ed2_eragrostis_tenacious_habit: {
    id: "ed2_eragrostis_tenacious_habit", milestone: "Eragrostis perenne: hábito", manualPage: 113,
    descripcion: "¿La planta es pequeña e hirsuta, de 20-45 cm?",
    opcionA: { label: "Sí; panoja corta y contraída", keyStep: "P", especieId: "ed2_eragrostis_neesii" },
    opcionA_prima: { label: "No; planta alta y glabra, con cañas de hasta 1 m", keyStep: "P'", especieId: "ed2_eragrostis_bahiensis" },
  },
  ed2_gramineae_group_7_three_nerves_mucronate: {
    id: "ed2_gramineae_group_7_three_nerves_mucronate", milestone: "Gramineae: grupo 7, lemmas mucronadas", manualPage: 69,
    descripcion: "¿La inflorescencia está formada por una sola espiga terminal y la planta es pigmea?",
    opcionA: { label: "Sí; una espiga terminal", keyStep: "c", nextNodeId: "ed2_gramineae_group_7_tripogon_pending" },
    opcionA_prima: { label: "No; varias espigas y planta robusta", keyStep: "c'", nextNodeId: "ed2_gramineae_group_7_diplachne_pending" },
  },
  ed2_gramineae_group_7_tripogon_pending: {
    id: "ed2_gramineae_group_7_tripogon_pending", milestone: "Tripogon", manualPage: 129,
    descripcion: "Continuar con la clave específica de Tripogon.",
    opcionA: { label: "Continuar desarrollando Tripogon", keyStep: "c", especieId: "ed2_gramineae" },
    opcionA_prima: { label: "Continuar desarrollando Tripogon", keyStep: "c", especieId: "ed2_gramineae" },
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
    descripcion: "Koeleria: única especie tratada para la región.",
    opcionA: { label: "Identificar como Koeleria permollis", keyStep: "g'", especieId: "ed2_koeleria_permollis" },
    opcionA_prima: { label: "Identificar como Koeleria permollis", keyStep: "g'", especieId: "ed2_koeleria_permollis" },
  },
  ed2_gramineae_group_7_rounded_pending: {
    id: "ed2_gramineae_group_7_rounded_pending", milestone: "Gramineae: grupo 7, lemma redondeada", manualPage: 69,
    descripcion: "¿La planta es perenne y robusta o anual y pequeña?",
    opcionA: { label: "Perenne y robusta", keyStep: "g", especieId: "ed2_festuca_arundinacea" },
    opcionA_prima: { label: "Anual y pequeña", keyStep: "g'", especieId: "ed2_catapodium_rigidum" },
  },
  ed2_gramineae_group_7_awn_position: {
    id: "ed2_gramineae_group_7_awn_position", milestone: "Gramineae: grupo 7, lemmas aristadas", manualPage: 69,
    descripcion: "¿La arista es terminal o dorsal?",
    opcionA: { label: "Terminal o nacida entre dos dientes muy cortos", keyStep: "i", nextNodeId: "ed2_gramineae_group_7_terminal_awn" },
    opcionA_prima: { label: "Dorsal", keyStep: "i'", nextNodeId: "ed2_gramineae_group_7_dorsal_pending" },
  },
  ed2_gramineae_group_7_dorsal_pending: {
    id: "ed2_gramineae_group_7_dorsal_pending", milestone: "Gramineae: grupo 7, arista dorsal", manualPage: 70,
    descripcion: "¿La arista es recta y subapical o dorsal y geniculada?",
    opcionA: { label: "Recta; lemma mútica o con arista subapical o apical", keyStep: "r", nextNodeId: "ed2_gramineae_group_7_dorsal_straight" },
    opcionA_prima: { label: "Dorsal y geniculada", keyStep: "r'", nextNodeId: "ed2_gramineae_group_7_dorsal_geniculate" },
  },
  ed2_gramineae_group_7_dorsal_straight: {
    id: "ed2_gramineae_group_7_dorsal_straight", milestone: "Gramineae: grupo 7, arista recta", manualPage: 70,
    descripcion: "¿La inflorescencia es una panoja espiciforme?",
    opcionA: { label: "Panoja espiciforme", keyStep: "s", especieId: "ed2_lophochloa_phleoides" },
    opcionA_prima: { label: "Espigas fasciculadas o dispuestas a lo largo de la caña", keyStep: "s'", nextNodeId: "ed2_gramineae_group_7_dorsal_spikes_pending" },
  },
  ed2_gramineae_group_7_dorsal_spikes_pending: {
    id: "ed2_gramineae_group_7_dorsal_spikes_pending", milestone: "Gramineae: grupo 7, espigas", manualPage: 70,
    descripcion: "Continuar con los géneros de espigas y arista recta.",
    opcionA: { label: "Continuar desarrollando el grupo 7", keyStep: "s'", especieId: "ed2_gramineae" },
    opcionA_prima: { label: "Continuar desarrollando el grupo 7", keyStep: "s'", especieId: "ed2_gramineae" },
  },
  ed2_gramineae_group_7_dorsal_geniculate: {
    id: "ed2_gramineae_group_7_dorsal_geniculate", milestone: "Gramineae: grupo 7, arista geniculada", manualPage: 70,
    descripcion: "¿La espiguilla es biflora con la flor inferior masculina?",
    opcionA: { label: "Sí; flor inferior masculina y superior hermafrodita", keyStep: "u", especieId: "ed2_arrhenatherum_elatius" },
    opcionA_prima: { label: "Dos o más flores; la inferior siempre hermafrodita", keyStep: "u'", nextNodeId: "ed2_gramineae_group_7_rachilla" },
  },
  ed2_gramineae_group_7_rachilla: {
    id: "ed2_gramineae_group_7_rachilla", milestone: "Gramineae: grupo 7, raquilla", manualPage: 70,
    descripcion: "¿La raquilla es muy corta y no se prolonga junto a la segunda flor?",
    opcionA: { label: "Sí; espiguillas bifloras; planta anual", keyStep: "v", especieId: "ed2_aira_caryophyllea" },
    opcionA_prima: { label: "Se prolonga junto al antecio superior; planta perenne", keyStep: "v'", nextNodeId: "ed2_gramineae_group_7_glume_length" },
  },
  ed2_gramineae_group_7_glume_length: {
    id: "ed2_gramineae_group_7_glume_length", milestone: "Gramineae: grupo 7, longitud de las glumas", manualPage: 70,
    descripcion: "¿Las glumas sobrepasan dos tercios de la espiguilla?",
    opcionA: { label: "Sí; lemmas bidentadas", keyStep: "w", especieId: "ed2_helictotrichon_bulbosum" },
    opcionA_prima: { label: "Apenas alcanzan la mitad de los antecios basales", keyStep: "w'", especieId: "ed2_amphibromus_scabrivalvis" },
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
    descripcion: "¿La lemma es carenada o redondeada en el dorso?",
    opcionA: { label: "Carenada", keyStep: "n", nextNodeId: "ed2_gramineae_group_7_small_carinate_pending" },
    opcionA_prima: { label: "Redondeada", keyStep: "n'", nextNodeId: "ed2_gramineae_group_7_small_rounded" },
  },
  ed2_gramineae_group_7_small_carinate_pending: {
    id: "ed2_gramineae_group_7_small_carinate_pending", milestone: "Gramineae: grupo 7, lemma carenada aristada", manualPage: 69,
    descripcion: "¿Las espiguillas tienen dos flores fértiles o entre tres y ocho?",
    opcionA: { label: "Dos flores fértiles", keyStep: "ñ", especieId: "ed2_koeleria_permollis" },
    opcionA_prima: { label: "Tres a ocho flores fértiles", keyStep: "ñ'", especieId: "ed2_dactylis_glomerata" },
  },
  ed2_gramineae_group_7_small_rounded: {
    id: "ed2_gramineae_group_7_small_rounded", milestone: "Gramineae: grupo 7, lemma redondeada aristada", manualPage: 70,
    descripcion: "¿La lemma posee pequeñas aristas laterales además de la central?",
    opcionA: { label: "Una arista corta a cada lado de la central", keyStep: "o", nextNodeId: "ed2_gramineae_group_7_tridens_pending" },
    opcionA_prima: { label: "Sin aristas laterales", keyStep: "o'", nextNodeId: "ed2_gramineae_group_7_pedicel" },
  },
  ed2_gramineae_group_7_tridens_pending: {
    id: "ed2_gramineae_group_7_tridens_pending", milestone: "Gramineae: grupo 7, aristas laterales", manualPage: 70,
    descripcion: "Tridens: única especie tratada para la región.",
    opcionA: { label: "Identificar como Tridens brasiliensis", keyStep: "1", especieId: "ed2_tridens_brasiliensis" },
    opcionA_prima: { label: "Identificar como Tridens brasiliensis", keyStep: "1", especieId: "ed2_tridens_brasiliensis" },
  },
  ed2_gramineae_group_7_pedicel: {
    id: "ed2_gramineae_group_7_pedicel", milestone: "Gramineae: grupo 7, pedicelo", manualPage: 70,
    descripcion: "¿Las espiguillas son casi sésiles o conspicuamente pediceladas?",
    opcionA: { label: "Casi sésiles y cilíndricas; lemmas con dientes laterales", keyStep: "p", nextNodeId: "ed2_gramineae_group_7_diplachne_pending" },
    opcionA_prima: { label: "Conspicuamente pediceladas; lemmas sin dientes laterales", keyStep: "p'", nextNodeId: "ed2_gramineae_group_7_annuality" },
  },
  ed2_gramineae_group_7_diplachne_pending: {
    id: "ed2_gramineae_group_7_diplachne_pending", milestone: "Gramineae: grupo 7, espiguillas subsésiles", manualPage: 70,
    descripcion: "Continuar con el género de espiguillas casi sésiles.",
    opcionA: { label: "Continuar desarrollando el grupo 7", keyStep: "p", especieId: "ed2_gramineae" },
    opcionA_prima: { label: "Continuar desarrollando el grupo 7", keyStep: "p", especieId: "ed2_gramineae" },
  },
  ed2_gramineae_group_7_annuality: {
    id: "ed2_gramineae_group_7_annuality", milestone: "Gramineae: grupo 7, hábito", manualPage: 70,
    descripcion: "¿La planta es anual o perenne?",
    opcionA: { label: "Anual", keyStep: "q", nextNodeId: "ed2_vulpia" },
    opcionA_prima: { label: "Perenne", keyStep: "q'", especieId: "ed2_festuca_arundinacea" },
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
    descripcion: "¿Las espiguillas poseen dos glumas o una sola?",
    opcionA: { label: "Dos glumas", keyStep: "B", nextNodeId: "ed2_parapholis" },
    opcionA_prima: { label: "Una sola gluma", keyStep: "B'", nextNodeId: "ed2_monerma" },
  },
  ed2_gramineae_group_8_awn: {
    id: "ed2_gramineae_group_8_awn", milestone: "Gramineae: grupo 8, posición de la arista", manualPage: 70,
    descripcion: "¿La lemma lleva una arista dorsal geniculada?",
    opcionA: { label: "Sí, arista dorsal geniculada", keyStep: "C", nextNodeId: "ed2_gramineae_group_8_avena_pending" },
    opcionA_prima: { label: "Mútica o con arista apical", keyStep: "C'", nextNodeId: "ed2_gramineae_group_8_florets" },
  },
  ed2_gramineae_group_8_avena_pending: {
    id: "ed2_gramineae_group_8_avena_pending", milestone: "Gramineae: grupo 8, arista dorsal", manualPage: 70,
    descripcion: "Avena: espiguillas grandes con lemmas provistas de arista dorsal geniculada.",
    opcionA: { label: "Continuar con la clave de Avena", keyStep: "C", nextNodeId: "ed2_avena" },
    opcionA_prima: { label: "Continuar con la clave de Avena", keyStep: "C", nextNodeId: "ed2_avena" },
  },
  ed2_gramineae_group_8_florets: {
    id: "ed2_gramineae_group_8_florets", milestone: "Gramineae: grupo 8, número de flores", manualPage: 70,
    descripcion: "¿Las espiguillas son unifloras o plurifloras?",
    opcionA: { label: "Unifloras", keyStep: "D", nextNodeId: "ed2_gramineae_group_8_uniflorous_pending" },
    opcionA_prima: { label: "Plurifloras", keyStep: "D'", nextNodeId: "ed2_gramineae_group_8_glumes" },
  },
  ed2_gramineae_group_8_uniflorous_pending: {
    id: "ed2_gramineae_group_8_uniflorous_pending", milestone: "Gramineae: grupo 8, unifloras", manualPage: 70,
    descripcion: "¿El antecio fértil está acompañado por dos lemmas estériles aristadas?",
    opcionA: { label: "Sí, acompañado por dos lemmas estériles aristadas", keyStep: "E", especieId: "ed2_anthoxanthum_odoratum" },
    opcionA_prima: { label: "No acompañado por lemmas estériles", keyStep: "E'", nextNodeId: "ed2_gramineae_group_8_uniflorous_lemma_pending" },
  },
  ed2_gramineae_group_8_uniflorous_lemma_pending: {
    id: "ed2_gramineae_group_8_uniflorous_lemma_pending", milestone: "Gramineae: grupo 8, antecio sin flores estériles", manualPage: 70,
    descripcion: "Continuar según la presencia de mucrón o arista en la lemma.",
    opcionA: { label: "Continuar desarrollando el grupo 8", keyStep: "E'", especieId: "ed2_gramineae" },
    opcionA_prima: { label: "Continuar desarrollando el grupo 8", keyStep: "E'", especieId: "ed2_gramineae" },
  },
  ed2_gramineae_group_8_glumes: {
    id: "ed2_gramineae_group_8_glumes", milestone: "Gramineae: grupo 8, plurifloras", manualPage: 70,
    descripcion: "¿Las glumas son anchas, membranosas e igualan o superan a la espiguilla?",
    opcionA: { label: "Sí; lemmas múticas", keyStep: "G", nextNodeId: "ed2_gramineae_group_8_melica_pending" },
    opcionA_prima: { label: "Lanceoladas y menores que la espiguilla", keyStep: "G'", nextNodeId: "ed2_gramineae_group_8_shape" },
  },
  ed2_gramineae_group_8_melica_pending: {
    id: "ed2_gramineae_group_8_melica_pending", milestone: "Gramineae: grupo 8, glumas anchas", manualPage: 70,
    descripcion: "Continuar con la clave específica de Melica.",
    opcionA: { label: "Glumas membranosas y anchas; lemmas múticas", keyStep: "G", nextNodeId: "ed2_melica" },
    opcionA_prima: { label: "Glumas membranosas y anchas; lemmas múticas", keyStep: "G", nextNodeId: "ed2_melica" },
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
    descripcion: "Glyceria: única especie tratada para la región.",
    opcionA: { label: "Identificar como Glyceria multiflora", keyStep: "1", especieId: "ed2_glyceria_multiflora" },
    opcionA_prima: { label: "Identificar como Glyceria multiflora", keyStep: "1", especieId: "ed2_glyceria_multiflora" },
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
  ed2_vulpia: {
    id: "ed2_vulpia", milestone: "Vulpia", manualPage: 85,
    descripcion: "¿Las lemmas poseen cilias en la mitad superior del margen?",
    opcionA: { label: "Sí; aristas de 8-10 mm; hojas glabras", keyStep: "A", especieId: "ed2_vulpia_megalura" },
    opcionA_prima: { label: "No ciliadas en el margen", keyStep: "A'", nextNodeId: "ed2_vulpia_glumes" },
  },
  ed2_vulpia_glumes: {
    id: "ed2_vulpia_glumes", milestone: "Vulpia: proporción de las glumas", manualPage: 85,
    descripcion: "¿La gluma inferior es menor que la mitad de la superior?",
    opcionA: { label: "Sí; espiguillas de cuatro a cinco flores; panoja incluida o apenas exerta", keyStep: "B", especieId: "ed2_vulpia_myuros" },
    opcionA_prima: { label: "Igual o mayor que la mitad; panoja exerta", keyStep: "B'", nextNodeId: "ed2_vulpia_upper_glume" },
  },
  ed2_vulpia_upper_glume: {
    id: "ed2_vulpia_upper_glume", milestone: "Vulpia: gluma superior", manualPage: 85,
    descripcion: "¿La gluma superior mide al menos 6 mm y casi iguala al antecio contiguo?",
    opcionA: { label: "De 6-10 mm; casi tan larga como el antecio", keyStep: "C", especieId: "ed2_vulpia_dertonensis" },
    opcionA_prima: { label: "Menor de 6 mm; bastante más corta que el antecio", keyStep: "C'", especieId: "ed2_vulpia_australis" },
  },
  ed2_avena: {
    id: "ed2_avena", milestone: "Avena", manualPage: 87,
    descripcion: "¿La lemma está profundamente bífida o apenas bidentada?",
    opcionA: { label: "Profundamente bífida, con dos lacinias de 4-8 mm; espiguillas bifloras", keyStep: "A", especieId: "ed2_avena_barbata" },
    opcionA_prima: { label: "Cortamente bidentada o casi entera", keyStep: "A'", nextNodeId: "ed2_avena_rachilla" },
  },
  ed2_avena_rachilla: {
    id: "ed2_avena_rachilla", milestone: "Avena: raquilla", manualPage: 87,
    descripcion: "¿La raquilla se articula y libera cada antecio por separado?",
    opcionA: { label: "Articulada; antecios se desprenden independientemente", keyStep: "B", nextNodeId: "ed2_avena_articulated" },
    opcionA_prima: { label: "Continua; antecios de la espiguilla caen juntos", keyStep: "B'", nextNodeId: "ed2_avena_continuous" },
  },
  ed2_avena_articulated: {
    id: "ed2_avena_articulated", milestone: "Avena: raquilla articulada", manualPage: 87,
    descripcion: "¿Las lemmas son pilosas o glabras?",
    opcionA: { label: "Pilosas; las dos basales aristadas", keyStep: "C", especieId: "ed2_avena_fatua" },
    opcionA_prima: { label: "Glabras; sólo la inferior aristada", keyStep: "C'", especieId: "ed2_avena_sativa" },
  },
  ed2_avena_continuous: {
    id: "ed2_avena_continuous", milestone: "Avena: raquilla continua", manualPage: 87,
    descripcion: "¿Las espiguillas poseen tres a cinco flores o generalmente dos?",
    opcionA: { label: "De tres a cinco flores", keyStep: "D", especieId: "ed2_avena_sterilis" },
    opcionA_prima: { label: "Dos flores, rara vez hasta cuatro", keyStep: "D'", nextNodeId: "ed2_avena_indument" },
  },
  ed2_avena_indument: {
    id: "ed2_avena_indument", milestone: "Avena: indumento de la lemma", manualPage: 87,
    descripcion: "¿Las lemmas son glabras salvo en la base?",
    opcionA: { label: "Glabras, pilosas sólo en la base", keyStep: "E", especieId: "ed2_avena_bizantina" },
    opcionA_prima: { label: "Más o menos velludas, al menos abajo y junto a la arista", keyStep: "E'", especieId: "ed2_avena_ludoviciana" },
  },
  ed2_phalaris: {
    id: "ed2_phalaris", milestone: "Phalaris", manualPage: 95,
    descripcion: "¿Las espiguillas se desprenden en grupos o individualmente?",
    opcionA: { label: "En grupos de seis a nueve: una fértil y las demás estériles", keyStep: "A", especieId: "ed2_phalaris_paradoxa" },
    opcionA_prima: { label: "Todas fértiles y desprendiéndose por separado", keyStep: "A'", nextNodeId: "ed2_phalaris_habit" },
  },
  ed2_phalaris_habit: {
    id: "ed2_phalaris_habit", milestone: "Phalaris: hábito", manualPage: 95,
    descripcion: "¿La planta es perenne o anual?",
    opcionA: { label: "Perenne y cespitosa", keyStep: "B", especieId: "ed2_phalaris_aquatica" },
    opcionA_prima: { label: "Anual", keyStep: "B'", nextNodeId: "ed2_phalaris_panicle" },
  },
  ed2_phalaris_panicle: {
    id: "ed2_phalaris_panicle", milestone: "Phalaris: panoja", manualPage: 96,
    descripcion: "¿La panoja es ovoide y gruesa o cilíndrica y angosta?",
    opcionA: { label: "Ovoide, corta y gruesa; glumas conspicuamente aladas", keyStep: "C", nextNodeId: "ed2_phalaris_ovoid" },
    opcionA_prima: { label: "Cilíndrica y angosta; glumas poco aladas o sin ala", keyStep: "C'", nextNodeId: "ed2_phalaris_cylindrical" },
  },
  ed2_phalaris_ovoid: {
    id: "ed2_phalaris_ovoid", milestone: "Phalaris: panoja ovoide", manualPage: 96,
    descripcion: "¿Los antecios estériles son iguales?",
    opcionA: { label: "Iguales; glumas de 6-10 mm", keyStep: "D", especieId: "ed2_phalaris_canariensis" },
    opcionA_prima: { label: "Desiguales; uno muy reducido; glumas de 4-6,5 mm", keyStep: "D'", especieId: "ed2_phalaris_minor" },
  },
  ed2_phalaris_cylindrical: {
    id: "ed2_phalaris_cylindrical", milestone: "Phalaris: panoja cilíndrica", manualPage: 96,
    descripcion: "¿El antecio fértil es completamente pubescente?",
    opcionA: { label: "Agudo y totalmente pubescente; hoja lisa arriba", keyStep: "E", especieId: "ed2_phalaris_angusta" },
    opcionA_prima: { label: "Acuminado y glabro arriba; hoja estriada", keyStep: "E'", especieId: "ed2_phalaris_platensis" },
  },
  ed2_polypogon: {
    id: "ed2_polypogon", milestone: "Polypogon", manualPage: 96,
    descripcion: "¿La planta es perenne, estolonífera y de tallos rastreros?",
    opcionA: { label: "Sí; panoja no espiciforme; glumas múticas o mucronadas", keyStep: "A", especieId: "ed2_polypogon_semiverticillatus" },
    opcionA_prima: { label: "Anual y erecta; panoja espiciforme; glumas aristadas", keyStep: "A'", nextNodeId: "ed2_polypogon_glumes" },
  },
  ed2_polypogon_glumes: {
    id: "ed2_polypogon_glumes", milestone: "Polypogon: lóbulos de las glumas", manualPage: 97,
    descripcion: "¿Las glumas son enteras o notablemente bilobadas?",
    opcionA: { label: "Enteras o brevemente bilobadas; lemma con tres arístulas", keyStep: "B", especieId: "ed2_polypogon_monspeliensis" },
    opcionA_prima: { label: "Notablemente bilobadas; lemma mútica o con arístula central", keyStep: "B'", especieId: "ed2_polypogon_maritimus" },
  },
  ed2_chaetotropis: {
    id: "ed2_chaetotropis", milestone: "Chaetotropis", manualPage: 97,
    descripcion: "¿La planta es anual y las glumas tienen carena pectinado-espinulosa?",
    opcionA: { label: "Sí; planta anual", keyStep: "A", especieId: "ed2_chaetotropis_chilensis" },
    opcionA_prima: { label: "Perenne; glumas no pectinado-espinulosas", keyStep: "A'", nextNodeId: "ed2_chaetotropis_glumes" },
  },
  ed2_chaetotropis_glumes: {
    id: "ed2_chaetotropis_glumes", milestone: "Chaetotropis: superficie de las glumas", manualPage: 97,
    descripcion: "¿Las glumas son lanceolado-subuladas y la panoja laxa?",
    opcionA: { label: "Sí; glumas ásperas, lemma aristada y panoja laxa", keyStep: "B", especieId: "ed2_chaetotropis_elongata" },
    opcionA_prima: { label: "Con protuberancias cortas; lemma mútica o aristulada; panoja compacta", keyStep: "B'", especieId: "ed2_chaetotropis_imberbis" },
  },
  ed2_alopecurus: {
    id: "ed2_alopecurus", milestone: "Alopecurus", manualPage: 98,
    descripcion: "¿Las glumas están soldadas entre sí hasta la mitad?",
    opcionA: { label: "Soldadas hasta la mitad; carenas ásperas o cortamente ciliadas", keyStep: "A", especieId: "ed2_alopecurus_agrestis" },
    opcionA_prima: { label: "Unidas sólo en la base; quillas largamente ciliadas abajo", keyStep: "A'", especieId: "ed2_alopecurus_bonariensis" },
  },
  ed2_deyeuxia: {
    id: "ed2_deyeuxia", milestone: "Deyeuxia", manualPage: 98,
    descripcion: "¿Las glumas miden 5-6,5 mm y los antecios 3,5-4 mm?",
    opcionA: { label: "Sí; panoja fusiforme de 25-35 cm; planta de 80-130 cm", keyStep: "A", especieId: "ed2_deyeuxia_viridiflavescens" },
    opcionA_prima: { label: "Glumas de 7-12 mm; panoja densa de 5-20 cm; planta de 40-80 cm", keyStep: "A'", especieId: "ed2_deyeuxia_armata" },
  },
  ed2_phleum: {
    id: "ed2_phleum", milestone: "Phleum", manualPage: 99,
    descripcion: "Phleum: única especie tratada para la región.",
    opcionA: { label: "Identificar como Phleum pratense", keyStep: "1", especieId: "ed2_phleum_pratense" },
    opcionA_prima: { label: "Identificar como Phleum pratense", keyStep: "1", especieId: "ed2_phleum_pratense" },
  },
  ed2_agrostis: {
    id: "ed2_agrostis", milestone: "Agrostis", manualPage: 99,
    descripcion: "¿La lemma es mútica o aristada?",
    opcionA: { label: "Mútica", keyStep: "A", nextNodeId: "ed2_agrostis_mutic_habit" },
    opcionA_prima: { label: "Aristada", keyStep: "A'", nextNodeId: "ed2_agrostis_glumes" },
  },
  ed2_agrostis_mutic_habit: {
    id: "ed2_agrostis_mutic_habit", milestone: "Agrostis: lemma mútica", manualPage: 100,
    descripcion: "¿La planta es rizomatosa o estolonífera?",
    opcionA: { label: "Rizomatosa; panoja piramidal laxa, con ramas abiertas", keyStep: "B", especieId: "ed2_agrostis_alba" },
    opcionA_prima: { label: "Estolonífera; panoja fusiforme densa, con ramas aplicadas", keyStep: "B'", especieId: "ed2_agrostis_palustris" },
  },
  ed2_agrostis_glumes: {
    id: "ed2_agrostis_glumes", milestone: "Agrostis: lemma aristada", manualPage: 100,
    descripcion: "¿Las glumas son cortamente aristadas en el ápice?",
    opcionA: { label: "Sí; arista débil de la lemma inserta cerca del ápice", keyStep: "C", especieId: "ed2_agrostis_platensis" },
    opcionA_prima: { label: "No; glumas agudas o mucronadas", keyStep: "C'", nextNodeId: "ed2_agrostis_panicle_density" },
  },
  ed2_agrostis_panicle_density: {
    id: "ed2_agrostis_panicle_density", milestone: "Agrostis: panoja", manualPage: 100,
    descripcion: "¿Las panojas son laxas o muy densas y espiciformes?",
    opcionA: { label: "Laxas", keyStep: "D", nextNodeId: "ed2_agrostis_pedicels" },
    opcionA_prima: { label: "Muy densas y espiciformes", keyStep: "D'", nextNodeId: "ed2_agrostis_dense_glumes" },
  },
  ed2_agrostis_pedicels: {
    id: "ed2_agrostis_pedicels", milestone: "Agrostis: pedicelos", manualPage: 100,
    descripcion: "¿Los pedicelos son mucho más largos que las espiguillas?",
    opcionA: { label: "Sí; arista dorsal de unos 2 mm inserta cerca del ápice", keyStep: "E", especieId: "ed2_agrostis_montevidensis" },
    opcionA_prima: { label: "Menores o apenas más largos; arista de 3-3,5 mm sobre la mitad", keyStep: "E'", especieId: "ed2_agrostis_avenacea" },
  },
  ed2_agrostis_dense_glumes: {
    id: "ed2_agrostis_dense_glumes", milestone: "Agrostis: panoja espiciforme", manualPage: 100,
    descripcion: "¿Las glumas son casi iguales?",
    opcionA: { label: "Casi iguales; panoja de 3-7 cm", keyStep: "F", especieId: "ed2_agrostis_tandilensis" },
    opcionA_prima: { label: "Gluma inferior más larga; panoja de 10-20 cm", keyStep: "F'", especieId: "ed2_agrostis_jirgensii" },
  },
  ed2_parapholis: {
    id: "ed2_parapholis", milestone: "Parapholis", manualPage: 108,
    descripcion: "Parapholis: única especie tratada para la región.",
    opcionA: { label: "Identificar como Parapholis incurva", keyStep: "1", especieId: "ed2_parapholis_incurva" },
    opcionA_prima: { label: "Identificar como Parapholis incurva", keyStep: "1", especieId: "ed2_parapholis_incurva" },
  },
  ed2_monerma: {
    id: "ed2_monerma", milestone: "Monerma", manualPage: 108,
    descripcion: "Monerma: única especie tratada para la región.",
    opcionA: { label: "Identificar como Monerma cylindrica", keyStep: "1", especieId: "ed2_monerma_cylindrica" },
    opcionA_prima: { label: "Identificar como Monerma cylindrica", keyStep: "1", especieId: "ed2_monerma_cylindrica" },
  },
  ed2_melica: {
    id: "ed2_melica", milestone: "Melica", manualPage: 108,
    descripcion: "¿Las glumas son casi iguales y agudas, y las espiguillas fusiformes?",
    opcionA: { label: "Sí; glumas casi iguales y agudas", keyStep: "A", nextNodeId: "ed2_melica_habit" },
    opcionA_prima: { label: "No; glumas muy desiguales, la inferior ancha, obovada y casi plana", keyStep: "A'", nextNodeId: "ed2_melica_palea" },
  },
  ed2_melica_habit: {
    id: "ed2_melica_habit", milestone: "Melica: hábito", manualPage: 108,
    descripcion: "¿Los tallos son flojos y apoyantes, de 1,5-3 m?",
    opcionA: { label: "Sí; vainas cerradas y panoja densa de 7-12 cm", keyStep: "B", especieId: "ed2_melica_sarmentosa" },
    opcionA_prima: { label: "No; planta densamente cespitosa de unos 50 cm", keyStep: "B'", especieId: "ed2_melica_macra" },
  },
  ed2_melica_palea: {
    id: "ed2_melica_palea", milestone: "Melica: pálea", manualPage: 109,
    descripcion: "¿La pálea presenta pelos cortos o asperezas retrorsas entre sus nervaduras?",
    opcionA: { label: "Sí; pilosa o áspera entre las nervaduras", keyStep: "C", nextNodeId: "ed2_melica_palea_texture" },
    opcionA_prima: { label: "No; glabra y lisa entre las nervaduras", keyStep: "C'", nextNodeId: "ed2_melica_sheaths" },
  },
  ed2_melica_palea_texture: {
    id: "ed2_melica_palea_texture", milestone: "Melica: textura de la pálea", manualPage: 109,
    descripcion: "¿La pálea es brevemente pilosa entre las nervaduras?",
    opcionA: { label: "Sí; gluma inferior de 7-11 mm y superior pubérula en el dorso", keyStep: "D", especieId: "ed2_melica_eremophila" },
    opcionA_prima: { label: "No; con numerosas asperezas retrorsas", keyStep: "D'", especieId: "ed2_melica_argyrea" },
  },
  ed2_melica_sheaths: {
    id: "ed2_melica_sheaths", milestone: "Melica: vainas", manualPage: 109,
    descripcion: "¿Las vainas foliares son glabras?",
    opcionA: { label: "Sí; vainas glabras", keyStep: "E", nextNodeId: "ed2_melica_glabrous_sheaths" },
    opcionA_prima: { label: "No; vainas pilosas o subpilosas", keyStep: "E'", nextNodeId: "ed2_melica_pilose_spikelets" },
  },
  ed2_melica_glabrous_sheaths: {
    id: "ed2_melica_glabrous_sheaths", milestone: "Melica: vainas glabras", manualPage: 109,
    descripcion: "¿La gluma inferior es redondeada o subaguda y la superior aguda?",
    opcionA: { label: "Sí; hojas de 2-2,5 mm", keyStep: "F", especieId: "ed2_melica_brasiliana" },
    opcionA_prima: { label: "No; inferior truncada o retusa y superior obtusa; hojas de 3-6 mm", keyStep: "F'", especieId: "ed2_melica_hyalina" },
  },
  ed2_melica_pilose_spikelets: {
    id: "ed2_melica_pilose_spikelets", milestone: "Melica: vainas pilosas", manualPage: 109,
    descripcion: "¿Las espiguillas están comprimidas dorsiventralmente y miden 7-8,5 mm?",
    opcionA: { label: "Sí; hojas de 2-3,5 mm", keyStep: "G", especieId: "ed2_melica_parodiana" },
    opcionA_prima: { label: "No; algo comprimidas lateralmente, de 9-18,5 mm", keyStep: "G'", especieId: "ed2_melica_aurantiaca" },
  },
  ed2_diandrochloa: {
    id: "ed2_diandrochloa", milestone: "Diandrochloa", manualPage: 110,
    descripcion: "Diandrochloa: única especie tratada para la región.",
    opcionA: { label: "Identificar como Diandrochloa glomerata", keyStep: "1", especieId: "ed2_diandrochloa_glomerata" },
    opcionA_prima: { label: "Identificar como Diandrochloa glomerata", keyStep: "1", especieId: "ed2_diandrochloa_glomerata" },
  },
  ed2_aristida: {
    id: "ed2_aristida", milestone: "Aristida", manualPage: 115,
    descripcion: "¿La gluma inferior es mayor que la superior?",
    opcionA: { label: "Sí; inferior de 17-18 mm y superior de unos 11 mm", keyStep: "A", especieId: "ed2_aristida_spegazzinii" },
    opcionA_prima: { label: "No; gluma inferior más corta que la superior", keyStep: "A'", nextNodeId: "ed2_aristida_panicle" },
  },
  ed2_aristida_panicle: {
    id: "ed2_aristida_panicle", milestone: "Aristida: panoja", manualPage: 115,
    descripcion: "¿La inflorescencia es alargada y débil o contraída y semiespiciforme?",
    opcionA: { label: "Alargada y débil", keyStep: "B", nextNodeId: "ed2_aristida_duration" },
    opcionA_prima: { label: "Contraída, densa y semiespiciforme", keyStep: "B'", especieId: "ed2_aristida_murina" },
  },
  ed2_aristida_duration: {
    id: "ed2_aristida_duration", milestone: "Aristida: duración", manualPage: 115,
    descripcion: "¿La planta es perenne o anual?",
    opcionA: { label: "Perenne y cespitosa; panoja alargada y laxa", keyStep: "C", especieId: "ed2_aristida_pallens" },
    opcionA_prima: { label: "Anual y ramificada en la base; panoja angosta y densa", keyStep: "C'", especieId: "ed2_aristida_adscensionis" },
  },
  ed2_tragus: {
    id: "ed2_tragus", milestone: "Tragus", manualPage: 115,
    descripcion: "Tragus: única especie tratada para la región.",
    opcionA: { label: "Identificar como Tragus racemosus", keyStep: "1", especieId: "ed2_tragus_racemosus" },
    opcionA_prima: { label: "Identificar como Tragus racemosus", keyStep: "1", especieId: "ed2_tragus_racemosus" },
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
