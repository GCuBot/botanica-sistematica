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
    nombreVulgar: scientificName,
    familia: "XXIX. Cyperaceae",
    descripcion: description,
    caracteristicas: characteristics,
    distribucion: distribution,
  };
}

export const secondEditionCyperaceaeSpecies: Record<string, Especie> = {
  ed2_carex_sellowiana: species(
    "ed2_carex_sellowiana", "Carex sellowiana", "Perenne rizomatosa de 8-35 cm.",
    "Espiguilla solitaria, bisexual, de 1,5-2 cm; utriculos elipsoides, trigonos, de 6-7 mm y con rostro corto.",
    "Sur de Brasil, Paraguay, Uruguay y nordeste argentino; Delta y ribera del Plata."
  ),
  ed2_carex_phalaroides: species(
    "ed2_carex_phalaroides", "Carex phalaroides", "Perenne rizomatosa de 5-15 cm.",
    "Cuatro a seis espiguillas largamente pedunculadas; glumas femeninas blanquecinas y aristadas; utriculos obovoides amarillentos de 3-4 mm.",
    "America austral hasta el norte argentino; campos humedos."
  ),
  ed2_carex_divulsa: species(
    "ed2_carex_divulsa", "Carex divulsa", "Perenne brevemente rizomatosa de 30-100 cm.",
    "Espiga terminal laxa, sin bracteas largas; espiguillas inferiores distantes y utriculos ovado-lanceolados verdosos de 3-4 mm.",
    "Originaria del Viejo Mundo; adventicia en Argentina."
  ),
  ed2_carex_marcida: species(
    "ed2_carex_marcida", "Carex marcida", "Perenne de 20-60 cm, con rizomas largos y tendidos.",
    "Seis a diez espiguillas en una espiga terminal oblonga y sin bracteas; utriculos plano-convexos, ovados y largamente rostrados.",
    "America del Norte; rara en Argentina y Uruguay, en suelos humedos."
  ),
  ed2_carex_brongniartii: species(
    "ed2_carex_brongniartii", "Carex brongniartii", "Perenne cespitosa de 40-90 cm, con rizoma muy corto.",
    "Espiga cilindrica densa de 4-6 cm; espiguillas en glomerulos compactos y utriculos ovoideos, coriaceos y pardos.",
    "America austral; suelos humedos del norte de Buenos Aires."
  ),
  ed2_carex_bonariensis: species(
    "ed2_carex_bonariensis", "Carex bonariensis", "Perenne de 10-40 cm, con rizoma corto.",
    "Espiga parda, densa o interrumpida, con bractea muy larga; utriculos papilosos o verrugosos, pajizos y cortamente bidentados.",
    "America austral; comun en la estepa climax y en suelos humedos."
  ),
  ed2_carex_uruguensis: species(
    "ed2_carex_uruguensis", "Carex uruguensis", "Perenne de rizomas cortos y tallos de 30-65 cm.",
    "Espiga interrumpida con seis a ocho espiguillas; utriculos lanceolados, pajizos, glabros y largamente rostrados.",
    "Sur de Brasil, Uruguay y nordeste argentino; suelos humedos."
  ),
  ed2_carex_sororia: species(
    "ed2_carex_sororia", "Carex sororia", "Perenne de 25-60 cm.",
    "Espiga ovada de 15-18 mm; utriculos anchamente elipticos, castaños, de 4-5 mm y contraidos en un rostro hendido.",
    "Paraguay, sur de Brasil, Uruguay y norte argentino; comun en suelos humedos."
  ),
  ed2_carex_tweediana: species(
    "ed2_carex_tweediana", "Carex tweediana", "Perenne de 15-60 cm.",
    "Utriculos pubescentes, orbiculado-ovales y trigonos; espiguillas masculinas superiores y femeninas inferiores, con bracteas muy largas.",
    "Sur de Brasil, Uruguay, Paraguay y nordeste argentino; Delta y ribera."
  ),
  ed2_carex_riparia_chilensis: species(
    "ed2_carex_riparia_chilensis", "Carex riparia var. chilensis", "Perenne rizomatosa de 1-2 m.",
    "Rizomas largos; utriculos glabros, lisos, ovoideo-lanceolados y castaños; varias espiguillas masculinas y femeninas cilindricas.",
    "America del Sur; pajonales del Delta y de la ribera."
  ),
  ed2_carex_pseudocyperus_polysticha: species(
    "ed2_carex_pseudocyperus_polysticha", "Carex pseudocyperus var. polysticha", "Perenne cespitosa de cerca de 1 m.",
    "Cinco a seis espiguillas femeninas largamente pedunculadas y pendulas; utriculos elipsoides de unos 5 mm.",
    "Sur de America; vive en pantanos."
  ),
  ed2_carex_extensa_vixdentata: species(
    "ed2_carex_extensa_vixdentata", "Carex extensa var. vixdentata", "Perenne cespitosa de 10-60 cm.",
    "Tres a cinco espiguillas casi sesiles y erectas; utriculos obovoideos pajizos, con rostro corto y tridentado.",
    "Uruguay y Argentina; suelos humedos."
  ),
  ed2_androtrichum_trigynum: species(
    "ed2_androtrichum_trigynum", "Androtrichum trigynum", "Perenne rizomatosa y afila, de unos 50 cm.",
    "Espiguillas plurifloras en fasciculos reunidos en cabezuelas esfericas; filamentos estaminales acrescentes que dan aspecto lanoso.",
    "Litoral del sur de Brasil, Uruguay y Buenos Aires; comun en dunas costeras de Pipinas y San Clemente del Tuyu."
  ),
  ed2_cyperus_cayennensis: species(
    "ed2_cyperus_cayennensis", "Cyperus cayennensis", "Perenne de 5-45 cm.",
    "Cuatro a numerosas espigas gruesas rodeadas por cinco a ocho bracteas; espiguillas con una o dos flores fertiles y aquenio trigono.",
    "America calida; comun en suelos humedos."
  ),
  ed2_cyperus_sesquiflorus: species(
    "ed2_cyperus_sesquiflorus", "Cyperus sesquiflorus", "Perenne cespitosa de 5-30 cm, con rizomas muy cortos.",
    "Una a tres espigas blancas y sesiles; espiguillas unifloras, involucro con tres bracteas reflejas y aquenio biconvexo.",
    "Pantropical; suelos humedos de la isla Martin Garcia."
  ),
  ed2_cyperus_obtusatus: species(
    "ed2_cyperus_obtusatus", "Cyperus obtusatus", "Perenne largamente rizomatosa de 10-45 cm.",
    "Espiguillas de una o dos flores, con cinco glumas de carena lisa, reunidas en un capitulo eliptico.",
    "America calida y Africa; Delta y ribera platense."
  ),
  ed2_cyperus_brevifolius: species(
    "ed2_cyperus_brevifolius", "Cyperus brevifolius", "Perenne largamente rizomatosa de 15-40 cm.",
    "Espiguillas unifloras con glumas blancas de carena espinulosa; capitulo solitario con tres bracteas lineares.",
    "Pantropical; alrededores de la Capital Federal."
  ),
  ed2_cyperus_meridionalis: species(
    "ed2_cyperus_meridionalis", "Cyperus meridionalis", "Perenne de 10-40 cm.",
    "Capitulo piramidal o hemisferico formado por tres a cinco espigas; espiguillas verdosas con cuatro a nueve flores.",
    "Sierras de Buenos Aires y Uruguay."
  ),
  ed2_cyperus_incomtus: species(
    "ed2_cyperus_incomtus", "Cyperus incomtus", "Perenne de 15-75 cm.",
    "Espiguillas oblongas verdosas o amarillentas, de 10-20 mm y 20-30 flores; estilo trifido.",
    "America del Sur; isla Martin Garcia."
  ),
  ed2_cyperus_reflexus: species(
    "ed2_cyperus_reflexus", "Cyperus reflexus", "Perenne de 20-75 cm.",
    "Espiguillas rojizas ovado-lanceoladas de 6-12 mm, reunidas en uno a cuatro capitulos; estilo trifido.",
    "America calida; muy comun en campos humedos."
  ),
  ed2_cyperus_laevigatus: species(
    "ed2_cyperus_laevigatus", "Cyperus laevigatus", "Perenne de 5-30 cm, con rizomas horizontales conspicuos y casi sin hojas.",
    "Espiguillas muy gruesas de 10-20 flores; glumas con grandes manchas castañas y aquenio plano-convexo.",
    "Cosmopolita; hallada en la estepa bonaerense."
  ),
  ed2_cyperus_barrosianus: species(
    "ed2_cyperus_barrosianus", "Cyperus barrosianus", "Perenne cespitosa de 5-20 cm.",
    "Espiguillas blanquecinas, muy comprimidas, sesiles y reunidas en un unico capitulo; 16-30 flores.",
    "America austral; alrededores de la Capital Federal."
  ),
  ed2_cyperus_lanceolatus: species(
    "ed2_cyperus_lanceolatus", "Cyperus lanceolatus", "Perenne de 12-45 cm.",
    "Espiguillas pardo claras de 12-20 mm y 10-30 flores; glumas generalmente trinervadas; umbela de uno a cinco radios.",
    "America y Africa tropicales; isla Martin Garcia."
  ),
  ed2_cyperus_megapotamicus: species(
    "ed2_cyperus_megapotamicus", "Cyperus megapotamicus var. jaeggii", "Perenne de 25-80 cm.",
    "Espiguillas castañas de 8-10 mm y 6-14 flores, con glumas binervadas; un capitulo sesil y dos o tres pedicelados.",
    "Sur de Brasil, Uruguay y nordeste argentino hasta el Delta y la ribera platense."
  ),
};

export const secondEditionCyperaceaeKeyData: Record<string, CladoNode> = {
  ed2_family_cyperaceae: {
    id: "ed2_family_cyperaceae", milestone: "Cyperaceae", manualPage: 154,
    descripcion: "¿Las flores fructiferas son unisexuales y estan encerradas en un utriculo?",
    opcionA: { label: "Si; flores unisexuales encerradas en un utriculo", keyStep: "A", nextNodeId: "ed2_carex" },
    opcionA_prima: { label: "No; flores hermafroditas, sin utriculo", keyStep: "A'", nextNodeId: "ed2_cyperaceae_glume_arrangement" },
  },
  ed2_cyperaceae_glume_arrangement: {
    id: "ed2_cyperaceae_glume_arrangement", milestone: "Cyperaceae: glumas", manualPage: 154,
    descripcion: "¿Las glumas se disponen en dos filas o en espiral?",
    opcionA: { label: "Disticas", keyStep: "B", nextNodeId: "ed2_cyperaceae_distichous" },
    opcionA_prima: { label: "Espiraladas", keyStep: "B'", especieId: "ed2_cyperaceae" },
  },
  ed2_cyperaceae_distichous: {
    id: "ed2_cyperaceae_distichous", milestone: "Cyperaceae: glumas disticas", manualPage: 154,
    descripcion: "¿La planta carece de hojas y sus estambres crecen despues de la antesis?",
    opcionA: { label: "Si; planta afila y estambres acrescentes", keyStep: "C", nextNodeId: "ed2_androtrichum" },
    opcionA_prima: { label: "No; generalmente con hojas y estambres no acrescentes", keyStep: "C'", nextNodeId: "ed2_cyperus" },
  },
  ed2_androtrichum: {
    id: "ed2_androtrichum", milestone: "Androtrichum", manualPage: 155,
    descripcion: "Androtrichum: unica especie tratada para la region.",
    opcionA: { label: "Identificar como Androtrichum trigynum", keyStep: "1", especieId: "ed2_androtrichum_trigynum" },
    opcionA_prima: { label: "Identificar como Androtrichum trigynum", keyStep: "1", especieId: "ed2_androtrichum_trigynum" },
  },
  ed2_cyperus: {
    id: "ed2_cyperus", milestone: "Cyperus", manualPage: 156,
    descripcion: "¿Las espiguillas forman capitulos o fasciculos solitarios en los apices de los tallos?",
    opcionA: { label: "Si; inflorescencias solitarias y plantas generalmente menores de 1 m", keyStep: "A", nextNodeId: "ed2_cyperus_solitary_fertile_flowers" },
    opcionA_prima: { label: "No; capitulos, fasciculos o espigas dispuestos en umbela", keyStep: "A'", especieId: "ed2_cyperaceae" },
  },
  ed2_cyperus_solitary_fertile_flowers: {
    id: "ed2_cyperus_solitary_fertile_flowers", milestone: "Cyperus: inflorescencia solitaria", manualPage: 156,
    descripcion: "¿Las espiguillas tienen una o dos flores fertiles, o cuatro o mas?",
    opcionA: { label: "Una o dos flores fertiles", keyStep: "B", nextNodeId: "ed2_cyperus_few_style" },
    opcionA_prima: { label: "Cuatro o mas flores fertiles", keyStep: "B'", nextNodeId: "ed2_cyperus_many_flower_count" },
  },
  ed2_cyperus_few_style: {
    id: "ed2_cyperus_few_style", milestone: "Cyperus: pocas flores", manualPage: 156,
    descripcion: "¿El estilo es trifido y el aquenio trigono?",
    opcionA: { label: "Si; varias espigas gruesas rodeadas por cinco a ocho bracteas", keyStep: "C", especieId: "ed2_cyperus_cayennensis" },
    opcionA_prima: { label: "No; estilo bifido, aquenio biconvexo y una a tres espigas blancas", keyStep: "C'", nextNodeId: "ed2_cyperus_few_rhizome" },
  },
  ed2_cyperus_few_rhizome: {
    id: "ed2_cyperus_few_rhizome", milestone: "Cyperus: rizoma", manualPage: 156,
    descripcion: "¿La planta es cespitosa con rizomas muy cortos o largamente rizomatosa?",
    opcionA: { label: "Cespitosa, con rizomas muy cortos y tres bracteas reflejas", keyStep: "D", especieId: "ed2_cyperus_sesquiflorus" },
    opcionA_prima: { label: "Largamente rizomatosa", keyStep: "D'", nextNodeId: "ed2_cyperus_few_glumes" },
  },
  ed2_cyperus_few_glumes: {
    id: "ed2_cyperus_few_glumes", milestone: "Cyperus: glumas", manualPage: 156,
    descripcion: "¿Las espiguillas tienen cinco glumas de carena lisa o glumas blancas de carena espinulosa?",
    opcionA: { label: "Una o dos flores, cinco glumas de carena lisa y capitulo eliptico", keyStep: "E", especieId: "ed2_cyperus_obtusatus" },
    opcionA_prima: { label: "Una flor, glumas blancas de carena espinulosa y capitulo de 6-9 mm", keyStep: "E'", especieId: "ed2_cyperus_brevifolius" },
  },
  ed2_cyperus_many_flower_count: {
    id: "ed2_cyperus_many_flower_count", milestone: "Cyperus: espiguillas plurifloras", manualPage: 156,
    descripcion: "¿Las espiguillas tienen cuatro a nueve flores o entre diez y cuarenta?",
    opcionA: { label: "Cuatro a nueve; capitulo piramidal o hemisferico", keyStep: "F", especieId: "ed2_cyperus_meridionalis" },
    opcionA_prima: { label: "Diez a cuarenta", keyStep: "F'", nextNodeId: "ed2_cyperus_many_style" },
  },
  ed2_cyperus_many_style: {
    id: "ed2_cyperus_many_style", milestone: "Cyperus: estilo", manualPage: 156,
    descripcion: "¿El estilo es trifido o bifido?",
    opcionA: { label: "Trifido", keyStep: "G", nextNodeId: "ed2_cyperus_trifid_shape" },
    opcionA_prima: { label: "Bifido", keyStep: "G'", nextNodeId: "ed2_cyperus_bifid_thickness" },
  },
  ed2_cyperus_trifid_shape: {
    id: "ed2_cyperus_trifid_shape", milestone: "Cyperus: estilo trifido", manualPage: 156,
    descripcion: "¿Las espiguillas son oblongas verdosas o ovado-lanceoladas rojizas?",
    opcionA: { label: "Oblongas, verdosas o amarillentas, de 10-20 mm", keyStep: "H", especieId: "ed2_cyperus_incomtus" },
    opcionA_prima: { label: "Ovado-lanceoladas, rojizas, de 6-12 mm", keyStep: "H'", especieId: "ed2_cyperus_reflexus" },
  },
  ed2_cyperus_bifid_thickness: {
    id: "ed2_cyperus_bifid_thickness", milestone: "Cyperus: estilo bifido", manualPage: 156,
    descripcion: "¿Las espiguillas son muy gruesas o muy comprimidas lateralmente?",
    opcionA: { label: "Muy gruesas, de 5-10 mm, con grandes manchas castañas", keyStep: "I", especieId: "ed2_cyperus_laevigatus" },
    opcionA_prima: { label: "Muy comprimidas lateralmente", keyStep: "I'", nextNodeId: "ed2_cyperus_compressed_color" },
  },
  ed2_cyperus_compressed_color: {
    id: "ed2_cyperus_compressed_color", milestone: "Cyperus: espiguillas comprimidas", manualPage: 156,
    descripcion: "¿Las espiguillas son blanquecinas o pardas a castañas?",
    opcionA: { label: "Blanquecinas, sesiles, en un unico capitulo", keyStep: "J", especieId: "ed2_cyperus_barrosianus" },
    opcionA_prima: { label: "Pardo claras o castañas", keyStep: "J'", nextNodeId: "ed2_cyperus_compressed_length" },
  },
  ed2_cyperus_compressed_length: {
    id: "ed2_cyperus_compressed_length", milestone: "Cyperus: longitud", manualPage: 157,
    descripcion: "¿Las espiguillas miden 12-20 mm o 8-10 mm?",
    opcionA: { label: "12-20 mm, con 10-30 flores y glumas generalmente trinervadas", keyStep: "K", especieId: "ed2_cyperus_lanceolatus" },
    opcionA_prima: { label: "8-10 mm, con 6-14 flores y glumas binervadas", keyStep: "K'", especieId: "ed2_cyperus_megapotamicus" },
  },
  ed2_carex: {
    id: "ed2_carex", milestone: "Carex", manualPage: 154,
    descripcion: "¿Hay una sola espiguilla bisexual en el apice del tallo?",
    opcionA: { label: "Si; solitaria, de 1,5-2 cm, con seis a doce flores", keyStep: "A", especieId: "ed2_carex_sellowiana" },
    opcionA_prima: { label: "No; espiguillas numerosas", keyStep: "A'", nextNodeId: "ed2_carex_sex_distribution" },
  },
  ed2_carex_sex_distribution: {
    id: "ed2_carex_sex_distribution", milestone: "Carex: distribucion sexual", manualPage: 154,
    descripcion: "¿Cada espiguilla tiene flores femeninas basales y masculinas apicales?",
    opcionA: { label: "Si; todas las espiguillas son bisexuales", keyStep: "B", nextNodeId: "ed2_carex_bisexual_attachment" },
    opcionA_prima: { label: "No; espiguillas masculinas arriba y femeninas mas abajo", keyStep: "B'", nextNodeId: "ed2_carex_unisexual_indument" },
  },
  ed2_carex_bisexual_attachment: {
    id: "ed2_carex_bisexual_attachment", milestone: "Carex: espiguillas bisexuales", manualPage: 154,
    descripcion: "¿Las espiguillas son largamente pedunculadas o siempre sesiles?",
    opcionA: { label: "Cuatro a seis, largamente pedunculadas, cada una con bractea foliar", keyStep: "C", especieId: "ed2_carex_phalaroides" },
    opcionA_prima: { label: "Siempre sesiles, formando una espiga terminal", keyStep: "C'", nextNodeId: "ed2_carex_terminal_bracts" },
  },
  ed2_carex_terminal_bracts: {
    id: "ed2_carex_terminal_bracts", milestone: "Carex: bracteas terminales", manualPage: 154,
    descripcion: "¿La espiga carece de bracteas largas?",
    opcionA: { label: "Sin bracteas o con una mas corta que la espiga", keyStep: "D", nextNodeId: "ed2_carex_terminal_density" },
    opcionA_prima: { label: "Con dos o tres bracteas foliaceas mucho mas largas", keyStep: "D'", nextNodeId: "ed2_carex_long_bracts" },
  },
  ed2_carex_terminal_density: {
    id: "ed2_carex_terminal_density", milestone: "Carex: densidad de la espiga", manualPage: 154,
    descripcion: "¿La inflorescencia es laxa o densa?",
    opcionA: { label: "Laxa; espiguillas inferiores distantes", keyStep: "E", especieId: "ed2_carex_divulsa" },
    opcionA_prima: { label: "Densa", keyStep: "E'", nextNodeId: "ed2_carex_rhizome" },
  },
  ed2_carex_rhizome: {
    id: "ed2_carex_rhizome", milestone: "Carex: rizoma", manualPage: 154,
    descripcion: "¿Los rizomas son largos y tendidos o muy cortos y cespitosos?",
    opcionA: { label: "Largos y tendidos; espiga oblonga ebracteada", keyStep: "F", especieId: "ed2_carex_marcida" },
    opcionA_prima: { label: "Muy cortos; mata cespitosa y espiga cilindrica densa", keyStep: "F'", especieId: "ed2_carex_brongniartii" },
  },
  ed2_carex_long_bracts: {
    id: "ed2_carex_long_bracts", milestone: "Carex: bracteas largas", manualPage: 155,
    descripcion: "¿Los utriculos son papilosos o verrugosos?",
    opcionA: { label: "Si; ovado-lanceolados, pajizos, de 3-4,5 mm", keyStep: "G", especieId: "ed2_carex_bonariensis" },
    opcionA_prima: { label: "No; utriculos lisos", keyStep: "G'", nextNodeId: "ed2_carex_smooth_utricles" },
  },
  ed2_carex_smooth_utricles: {
    id: "ed2_carex_smooth_utricles", milestone: "Carex: utriculos lisos", manualPage: 155,
    descripcion: "¿Los utriculos son lanceolados y largamente rostrados o anchamente elipticos?",
    opcionA: { label: "Lanceolados, pajizos, de 2,5-3 mm y largamente rostrados", keyStep: "H", especieId: "ed2_carex_uruguensis" },
    opcionA_prima: { label: "Anchamente elipticos, castaños, de 4-5 mm y con rostro hendido", keyStep: "H'", especieId: "ed2_carex_sororia" },
  },
  ed2_carex_unisexual_indument: {
    id: "ed2_carex_unisexual_indument", milestone: "Carex: espiguillas unisexuales", manualPage: 155,
    descripcion: "¿Los utriculos son pubescentes o glabros?",
    opcionA: { label: "Pubescentes, orbiculado-ovales y trigonos", keyStep: "I", especieId: "ed2_carex_tweediana" },
    opcionA_prima: { label: "Glabros", keyStep: "I'", nextNodeId: "ed2_carex_glabrous_habit" },
  },
  ed2_carex_glabrous_habit: {
    id: "ed2_carex_glabrous_habit", milestone: "Carex: utriculos glabros", manualPage: 155,
    descripcion: "¿La planta posee rizomas largos o es cespitosa?",
    opcionA: { label: "Rizomas largos; varias espiguillas masculinas y femeninas", keyStep: "J", especieId: "ed2_carex_riparia_chilensis" },
    opcionA_prima: { label: "Cespitosa; espiga masculina solitaria", keyStep: "J'", nextNodeId: "ed2_carex_female_spikelets" },
  },
  ed2_carex_female_spikelets: {
    id: "ed2_carex_female_spikelets", milestone: "Carex: espiguillas femeninas", manualPage: 155,
    descripcion: "¿Las espiguillas femeninas son pendulas y largamente pedunculadas?",
    opcionA: { label: "Si; cinco o seis, pendulas", keyStep: "K", especieId: "ed2_carex_pseudocyperus_polysticha" },
    opcionA_prima: { label: "No; tres a cinco, casi sesiles y erectas", keyStep: "K'", especieId: "ed2_carex_extensa_vixdentata" },
  },
};
