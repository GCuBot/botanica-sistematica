import { CladoNode, Especie } from "@/types";

function species(
  id: string,
  scientificName: string,
  commonName: string,
  characteristics: string,
  distribution: string
): Especie {
  return {
    id,
    nombreCientifico: scientificName,
    nombreVulgar: commonName,
    familia: "XLIV. Orchidaceae",
    descripcion: characteristics.split(";", 1)[0] + ".",
    caracteristicas: characteristics,
    distribucion: distribution,
  };
}

export const secondEditionOrchidaceaeSpecies: Record<string, Especie> = {
  ed2_oncidium_bifolium: species(
    "ed2_oncidium_bifolium", "Oncidium bifolium", "Flor de patito; pajarito",
    "Epifita con numerosas raices y seudobulbos; dos hojas apicales coriaceas y lanceoladas; pedunculos largos con 7-12 flores amarillas grandes",
    "Uruguay y norte de Argentina hasta Buenos Aires; comun en el Delta y cultivada como ornamental."
  ),
  ed2_habenaria_secunda: species(
    "ed2_habenaria_secunda", "Habenaria secunda", "Habenaria secunda",
    "Hierba terrestre robusta de mas de 50 cm; hojas lanceoladas y densas; flores amarillentas pequenas con labelo carnoso y espolon de 7-8 mm",
    "Sur de Brasil y nordeste de Argentina hasta el Delta del Parana."
  ),
  ed2_habenaria_paucifolia: species(
    "ed2_habenaria_paucifolia", "Habenaria paucifolia", "Habenaria paucifolia",
    "Hierba terrestre grácil de 20-40 cm con tuberculo eliptico; hojas lanceoladas; flores pequenas con labelo carnoso y espolon de 13-15 mm",
    "Sudamerica; dunas del este de la provincia de Buenos Aires."
  ),
  ed2_habenaria_bractescens: species(
    "ed2_habenaria_bractescens", "Habenaria bractescens", "Habenaria bractescens",
    "Hierba terrestre de 50-90 cm con tuberculo elipsoideo; hojas lanceolado-oblongas; flores blanco-verdosas medianas con espolon de unos 60 mm",
    "Sur de Brasil, Uruguay y norte de Argentina; comun en bosques del Delta y de la ribera platense."
  ),
  ed2_habenaria_gourlieana: species(
    "ed2_habenaria_gourlieana", "Habenaria gourlieana", "Habenaria gourlieana",
    "Hierba terrestre de 50-100 cm con tuberculo elipsoide; hojas lineal-lanceoladas; lobulos laterales del labelo muy largos y espolon de 11-13 cm",
    "Uruguay y norte de Argentina hasta las dunas del nordeste de Buenos Aires."
  ),
  ed2_pelexia_bonariensis: species(
    "ed2_pelexia_bonariensis", "Pelexia bonariensis", "Pelexia bonariensis",
    "Hierba terrestre de 50-90 cm con raices fusiformes fasciculadas; hojas grandes oblanceoladas; sepalos laterales ensanchados en la base y labelo con lamina apical conspicua",
    "Sur de Brasil, Paraguay, Uruguay y norte de Argentina hasta el Rio de la Plata."
  ),
  ed2_pelexia_callosa: species(
    "ed2_pelexia_callosa", "Pelexia callosa", "Pelexia callosa",
    "Hierba terrestre de unos 70 cm; sepalos laterales no ensanchados en la base; labelo sin lamina apical conspicua y con dos protuberancias carnosas laterales",
    "Conocida en la region por un hallazgo en Punta Lara, cerca de La Plata."
  ),
  ed2_platythelys_platensis: species(
    "ed2_platythelys_platensis", "Platythelys platensis", "Platythelys platensis",
    "Perenne delicada de 15-25 cm; tallo ascendente con raices crasas en los nudos inferiores; hojas elipsoides y espiga densa de flores blancas con espolon corto",
    "Buenos Aires; Delta y ribera del Plata."
  ),
  ed2_bipinnula_biplumata: species(
    "ed2_bipinnula_biplumata", "Bipinnula biplumata", "Bipinnula biplumata",
    "Hierba terrestre de 15-20 cm; hojas ovado-lanceoladas; flor solitaria verdosa; sepalo dorsal entero y labelo negro con un lobulo piloso",
    "Sur de Brasil, Uruguay y nordeste de Argentina; en campos."
  ),
  ed2_bipinnula_polysyka: species(
    "ed2_bipinnula_polysyka", "Bipinnula polysyka", "Bipinnula polysyka",
    "Hierba terrestre de 10-25 cm; hojas lanceoladas; flor solitaria verdosa; sepalo dorsal generalmente lobulado y labelo con pequenos lobulitos marginales",
    "Uruguay y norte de Buenos Aires; en la estepa climax."
  ),
  ed2_cyanaeorchis_arundinae: species(
    "ed2_cyanaeorchis_arundinae", "Cyanaeorchis arundinae", "Cyanaeorchis arundinae",
    "Hierba palustre de 40-80 cm; hojas caulinares envainadoras, lanceoladas y rigidas; inflorescencia laxa y labelo trilobado con crestas y lacinias",
    "Sur de Brasil y nordeste de Argentina hasta el Delta."
  ),
  ed2_chloraea_membranacea: species(
    "ed2_chloraea_membranacea", "Chloraea membranacea", "Chloraea membranacea",
    "Perenne terrestre de 40-70 cm con raices fasciculadas carnosas; racimo de numerosas flores blanco-verdosas; labelo unguiculado con densas papilas claviformes",
    "Sur de Brasil, Uruguay y nordeste de Argentina; frecuente en el Delta, bosques riberenos y sierras."
  ),
  ed2_geoblasta_pennicillata: species(
    "ed2_geoblasta_pennicillata", "Geoblasta pennicillata", "Geoblasta pennicillata",
    "Hierba terrestre de 10-30 cm con hojas en roseta basal; flor solitaria grande y verdosa; labelo trapezoidal carnoso con pelos blancos y papilas castano-rojizas",
    "Sur de Brasil, Uruguay y Buenos Aires; sierras de Tandil y Balcarce."
  ),
  ed2_brachystele_dilatata: species(
    "ed2_brachystele_dilatata", "Brachystele dilatata", "Brachystele dilatata",
    "Hierba terrestre de 12-40 cm sin hojas al florecer; escapo con vainas membranosas; bracteas tiesas que superan las flores verdosas y pubescencia densa en el sepalo dorsal",
    "Sur de Brasil, Uruguay y nordeste de Argentina hasta las sierras de Buenos Aires."
  ),
  ed2_brachystele_camporum: species(
    "ed2_brachystele_camporum", "Brachystele camporum", "Brachystele camporum",
    "Hierba terrestre de 12-40 cm; hojas lanceoladas largamente pecioladas; bracteas delicadas mas cortas que las flores verdosas o castano-rojizas",
    "Sur de Brasil, Paraguay y nordeste de Argentina; campos humedos y arenosos de la ribera del Plata."
  ),
  ed2_cyclopogon_apricus: species(
    "ed2_cyclopogon_apricus", "Cyclopogon apricus", "Cyclopogon apricus",
    "Hierba terrestre de 8-20 cm con hojas ovado-lanceoladas en roseta; 3-25 flores casi horizontales; sepalo dorsal de 4-5 mm y labelo de 4,5 mm",
    "Brasil, Uruguay y norte de Argentina; en suelos arenosos."
  ),
  ed2_cyclopogon_elatus: species(
    "ed2_cyclopogon_elatus", "Cyclopogon elatus", "Cyclopogon elatus",
    "Hierba terrestre de 20-60 cm con hojas eliptico-lanceoladas en roseta; flores numerosas; sepalo dorsal de 6-9 mm y labelo de 7-11 mm",
    "Sur de Brasil, Uruguay y nordeste de Argentina; en bosques de tala."
  ),
};

export const secondEditionOrchidaceaeKeyData: Record<string, CladoNode> = {
  ed2_family_orchidaceae: {
    id: "ed2_family_orchidaceae", milestone: "Orchidaceae", manualPage: 208,
    descripcion: "¿La planta es epifita con seudobulbos o terrestre a palustre?",
    opcionA: { label: "Epifita, con tallos engrosados bulbiformes", keyStep: "A", especieId: "ed2_oncidium_bifolium" },
    opcionA_prima: { label: "Terrestre o palustre", keyStep: "A'", nextNodeId: "ed2_orchidaceae_spur" },
  },
  ed2_orchidaceae_spur: {
    id: "ed2_orchidaceae_spur", milestone: "Orchidaceae: labelo", manualPage: 208,
    descripcion: "¿Las flores poseen espolon en el labelo o menton formado por los sepalos?",
    opcionA: { label: "Si; espolon hueco o menton prominente", keyStep: "B", nextNodeId: "ed2_orchidaceae_spur_length" },
    opcionA_prima: { label: "No; sin espolon ni menton conspicuo", keyStep: "B'", nextNodeId: "ed2_orchidaceae_lateral_sepals" },
  },
  ed2_orchidaceae_spur_length: {
    id: "ed2_orchidaceae_spur_length", milestone: "Orchidaceae: espolon", manualPage: 208,
    descripcion: "¿El espolon supera 8 mm y el labelo es tripartido?",
    opcionA: { label: "Si; espolon de mas de 8 mm y labelo tripartido", keyStep: "C", nextNodeId: "ed2_habenaria" },
    opcionA_prima: { label: "No; espolon o menton muy corto y labelo no tripartido", keyStep: "C'", nextNodeId: "ed2_orchidaceae_short_spur_roots" },
  },
  ed2_orchidaceae_short_spur_roots: {
    id: "ed2_orchidaceae_short_spur_roots", milestone: "Orchidaceae: raices", manualPage: 208,
    descripcion: "¿Las raices nacen fasciculadas en la base o en los nudos inferiores del tallo?",
    opcionA: { label: "Fasciculadas en la base; flores con menton", keyStep: "D", nextNodeId: "ed2_pelexia" },
    opcionA_prima: { label: "En las articulaciones inferiores; flores con espolon corto", keyStep: "D'", especieId: "ed2_platythelys_platensis" },
  },
  ed2_orchidaceae_lateral_sepals: {
    id: "ed2_orchidaceae_lateral_sepals", milestone: "Orchidaceae: sepalos laterales", manualPage: 208,
    descripcion: "¿Los sepalos laterales son multifidos o enteros?",
    opcionA: { label: "Multifidos o fimbriados", keyStep: "E", nextNodeId: "ed2_bipinnula" },
    opcionA_prima: { label: "Enteros", keyStep: "E'", nextNodeId: "ed2_orchidaceae_flower_size" },
  },
  ed2_orchidaceae_flower_size: {
    id: "ed2_orchidaceae_flower_size", milestone: "Orchidaceae: tamano floral", manualPage: 208,
    descripcion: "¿Las flores miden mas de 1,5 cm o menos de 1 cm?",
    opcionA: { label: "Grandes, de mas de 1,5 cm", keyStep: "F", nextNodeId: "ed2_orchidaceae_large_habitat" },
    opcionA_prima: { label: "Pequenas, de menos de 1 cm", keyStep: "F'", nextNodeId: "ed2_orchidaceae_small_leaves" },
  },
  ed2_orchidaceae_large_habitat: {
    id: "ed2_orchidaceae_large_habitat", milestone: "Orchidaceae: flores grandes", manualPage: 208,
    descripcion: "¿La planta es palustre y tiene labelo conspicuamente trilobado?",
    opcionA: { label: "Palustre; labelo conspicuamente trilobado", keyStep: "G", especieId: "ed2_cyanaeorchis_arundinae" },
    opcionA_prima: { label: "Terricola; labelo entero o apenas trilobado", keyStep: "G'", nextNodeId: "ed2_orchidaceae_large_count" },
  },
  ed2_orchidaceae_large_count: {
    id: "ed2_orchidaceae_large_count", milestone: "Orchidaceae: flores grandes terrestres", manualPage: 208,
    descripcion: "¿Las flores son numerosas o solitarias?",
    opcionA: { label: "Numerosas; labelo unguiculado", keyStep: "H", especieId: "ed2_chloraea_membranacea" },
    opcionA_prima: { label: "Una, excepcionalmente dos; labelo trapezoidal", keyStep: "H'", especieId: "ed2_geoblasta_pennicillata" },
  },
  ed2_orchidaceae_small_leaves: {
    id: "ed2_orchidaceae_small_leaves", milestone: "Orchidaceae: flores pequenas", manualPage: 209,
    descripcion: "¿Hay hojas basales presentes durante la floracion?",
    opcionA: { label: "No; tallos con vainas foliares muy desarrolladas", keyStep: "I", nextNodeId: "ed2_brachystele" },
    opcionA_prima: { label: "Si; hojas en roseta basal y tallos escapiformes", keyStep: "I'", nextNodeId: "ed2_cyclopogon" },
  },
  ed2_habenaria: {
    id: "ed2_habenaria", milestone: "Habenaria", manualPage: 210,
    descripcion: "¿Las flores son pequenas y el labelo carnoso?",
    opcionA: { label: "Si; petalos de 6-8 mm y labelo carnoso", keyStep: "A", nextNodeId: "ed2_habenaria_small" },
    opcionA_prima: { label: "No; petalos de 10-30 mm y labelo no carnoso", keyStep: "A'", nextNodeId: "ed2_habenaria_medium" },
  },
  ed2_habenaria_small: {
    id: "ed2_habenaria_small", milestone: "Habenaria: flores pequenas", manualPage: 210,
    descripcion: "¿El segmento central del labelo iguala en anchura a los laterales?",
    opcionA: { label: "Igual de ancho; planta robusta de mas de 50 cm y espolon de 7-8 mm", keyStep: "B", especieId: "ed2_habenaria_secunda" },
    opcionA_prima: { label: "Dos veces mas ancho; planta grácil de 20-40 cm y espolon de 13-15 mm", keyStep: "B'", especieId: "ed2_habenaria_paucifolia" },
  },
  ed2_habenaria_medium: {
    id: "ed2_habenaria_medium", milestone: "Habenaria: flores medianas", manualPage: 210,
    descripcion: "¿Los lobulos laterales del labelo son iguales o mucho mas largos que el central?",
    opcionA: { label: "Iguales o mas cortos; espolon de unos 60 mm", keyStep: "C", especieId: "ed2_habenaria_bractescens" },
    opcionA_prima: { label: "Al menos dos veces mas largos; espolon de 11-13 cm", keyStep: "C'", especieId: "ed2_habenaria_gourlieana" },
  },
  ed2_pelexia: {
    id: "ed2_pelexia", milestone: "Pelexia", manualPage: 212,
    descripcion: "¿Los sepalos laterales se ensanchan en la base?",
    opcionA: { label: "Si; labelo con lamina apical conspicua y dos auriculas carnosas basales", keyStep: "A", especieId: "ed2_pelexia_bonariensis" },
    opcionA_prima: { label: "No; labelo sin lamina apical conspicua y con dos protuberancias laterales", keyStep: "A'", especieId: "ed2_pelexia_callosa" },
  },
  ed2_bipinnula: {
    id: "ed2_bipinnula", milestone: "Bipinnula", manualPage: 214,
    descripcion: "¿El sepalo dorsal y los petalos son enteros o lobulados?",
    opcionA: { label: "Enteros; sepalos laterales de unos 40 mm y labelo negro con lobulo piloso", keyStep: "A", especieId: "ed2_bipinnula_biplumata" },
    opcionA_prima: { label: "Lobulados; sepalos laterales de 20-25 mm y labelo con pequenos lobulitos", keyStep: "A'", especieId: "ed2_bipinnula_polysyka" },
  },
  ed2_brachystele: {
    id: "ed2_brachystele", milestone: "Brachystele", manualPage: 217,
    descripcion: "¿Las bracteas son tiesas y sobrepasan la flor?",
    opcionA: { label: "Si; pubescencia densa en mechon y flores verdosas", keyStep: "A", especieId: "ed2_brachystele_dilatata" },
    opcionA_prima: { label: "No; bracteas delicadas mas cortas y pubescencia breve", keyStep: "A'", especieId: "ed2_brachystele_camporum" },
  },
  ed2_cyclopogon: {
    id: "ed2_cyclopogon", milestone: "Cyclopogon", manualPage: 217,
    descripcion: "¿La planta y sus piezas florales son pequenas o mayores?",
    opcionA: { label: "Planta de 8-20 cm; hojas de 10-30 mm, sepalo dorsal de 4-5 mm y labelo de 4,5 mm", keyStep: "A", especieId: "ed2_cyclopogon_apricus" },
    opcionA_prima: { label: "Planta de 20-60 cm; hojas de 4-13 cm, sepalo dorsal de 6-9 mm y labelo de 7-11 mm", keyStep: "A'", especieId: "ed2_cyclopogon_elatus" },
  },
};
