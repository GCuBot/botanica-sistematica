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
  ed2_cyperus_esculentus: species(
    "ed2_cyperus_esculentus", "Cyperus esculentus var. leptostachyus", "Perenne de 20-50 cm, con largos rizomas terminados en tuberculos rojizos.",
    "Espiguillas pardo amarillentas de 15-40 mm; glumas con mucron subapical y nervaduras laterales y dorsales.",
    "America; comun en suelos humedos."
  ),
  ed2_cyperus_corymbosus: species(
    "ed2_cyperus_corymbosus", "Cyperus corymbosus var. subnodosus", "Perenne rizomatosa, de 60-120 cm.",
    "Una a tres hojas cortas; espiguillas castaño rojizas, lineares, de 20-50 mm y 20-40 flores.",
    "America calida; suelos inundables."
  ),
  ed2_cyperus_rotundus: species(
    "ed2_cyperus_rotundus", "Cyperus rotundus", "Cipero o cebollin; perenne rizomatosa de 15-30 cm.",
    "Cuatro a diez hojas casi tan largas como el tallo; espiguillas castaño rojizas de 10-30 mm.",
    "Cosmopolita de regiones calidas; maleza muy comun en suelos modificados y viveros."
  ),
  ed2_cyperus_prolixus: species(
    "ed2_cyperus_prolixus", "Cyperus prolixus", "Perenne cespitosa y robusta, de cerca de 1 m.",
    "Espiguillas linear-lanceoladas recostadas sobre el eje, de 10-15 mm y siete a nueve flores; umbela muy compuesta.",
    "America calida; pajonales del Delta y la ribera y orillas de arroyos."
  ),
  ed2_cyperus_exaltatus: species(
    "ed2_cyperus_exaltatus", "Cyperus exaltatus", "Perenne cespitosa de 30-80 cm.",
    "Espiguillas lanceolado-oblongas recostadas sobre el eje, de 5-7 mm y 16-20 flores; espigas cilindricas densas.",
    "Regiones tropicales; hallada en Puerto Nuevo."
  ),
  ed2_cyperus_odoratus: species(
    "ed2_cyperus_odoratus", "Cyperus odoratus", "Anual cespitosa de 20-80 cm.",
    "Espiguillas cilindricas con raquilla articulada, que se fragmenta en unidades uninucigeras; umbela compuesta.",
    "Regiones calidas; comun en pajonales del Delta y la ribera."
  ),
  ed2_cyperus_rigens: species(
    "ed2_cyperus_rigens", "Cyperus rigens", "Perenne rizomatosa de 40-120 cm.",
    "Umbela simple o poco compuesta, con espigas ovoides densas; espiguillas lanceoladas de 10-16 mm.",
    "Sudamerica calida; suelos humedos y sierras del sur bonaerense."
  ),
  ed2_cyperus_pohlii: species(
    "ed2_cyperus_pohlii", "Cyperus pohlii", "Perenne rizomatosa de cerca de 1 m.",
    "Umbela compuesta muy amplia; espigas ovoides a cilindricas y espiguillas linear-lanceoladas de 10-15 mm.",
    "Brasil, Paraguay y nordeste argentino hasta el Delta y la ribera."
  ),
  ed2_cyperus_giganteus: species(
    "ed2_cyperus_giganteus", "Cyperus giganteus", "Perenne rizomatosa, afila o subafila, de hasta 2 m.",
    "Umbela compuesta con muchos radios; espiguillas laxas y redondeadas de 11-13 mm y 18-20 flores.",
    "America calida; frecuente en pajonales del Delta."
  ),
  ed2_cyperus_imbricatus: species(
    "ed2_cyperus_imbricatus", "Cyperus imbricatus", "Perenne cespitosa de 20-80 cm.",
    "Raquilla no alada; glumas orbiculares y mucronadas; espigas muy densas en umbela compuesta.",
    "Regiones muy calidas; lugares muy humedos."
  ),
  ed2_cyperus_digitatus: species(
    "ed2_cyperus_digitatus", "Cyperus digitatus var. obtusifructus", "Perenne cespitosa de 50-120 cm.",
    "Raquilla alada y glumas decurrentes; espiguillas lanceolado-lineares de 8-12 mm en umbela compuesta.",
    "Bolivia, Paraguay y Argentina; comun en pajonales del Delta y la ribera platense."
  ),
  ed2_cyperus_haspan: species(
    "ed2_cyperus_haspan", "Cyperus haspan subsp. juncoides", "Perenne cespitosa de 20-60 cm.",
    "Umbela compuesta con menos de treinta espiguillas castaño rojizas, linear-lanceoladas, y aquenio blanco o vitreo.",
    "America tropical y subtropical; Delta del Parana y Capital Federal."
  ),
  ed2_cyperus_virens: species(
    "ed2_cyperus_virens", "Cyperus virens", "Perenne robusta y hojosa de cerca de 1 m.",
    "Tallo triquetro semialado y aspero; umbela compuesta con cabezuelas amarillentas y espiguillas ovadas de 30-40 flores.",
    "America calida; comun en el Delta, la ribera y bañados."
  ),
  ed2_cyperus_surinamensis: species(
    "ed2_cyperus_surinamensis", "Cyperus surinamensis", "Perenne de 20-40 cm, con hojas largas y rigidas.",
    "Tallo trigono con diminutas espinas retrorsas; capitulos esfericos o trilobados con espiguillas pajizas.",
    "America tropical y subtropical; pajonales del Delta."
  ),
  ed2_cyperus_unicolor: species(
    "ed2_cyperus_unicolor", "Cyperus unicolor", "Anual cespitosa y delicada, de 5-20 cm.",
    "Tallo liso; umbela simple y espiguillas de 3-9 mm con glumas acuminadas.",
    "Sudamerica calida; Delta del Parana."
  ),
  ed2_cyperus_eragrostis: species(
    "ed2_cyperus_eragrostis", "Cyperus eragrostis", "Perenne de 30-60 cm.",
    "Tallo trigono de caras planas; umbela de capitulos con espiguillas verde claras, oblongas, de 10-15 mm.",
    "America calida; comun en lugares humedos."
  ),
  ed2_cyperus_entrerianus: species(
    "ed2_cyperus_entrerianus", "Cyperus entrerianus", "Perenne de 25-65 cm.",
    "Tallo subterete o trigono de caras convexas; capitulos densos con espiguillas ovadas de 4-5 mm.",
    "America tropical; rara en Puerto Nuevo."
  ),
  ed2_scirpus_giganteus: species(
    "ed2_scirpus_giganteus", "Scirpus giganteus", "Cortadera o paja brava; perenne muy robusta, de hasta 1,5 m.",
    "Seis a diez bracteas anchas; umbela compuesta con numerosos capitulos y espiguillas pequeñas, plurifloras.",
    "Sur de Brasil, Paraguay, Uruguay y norte argentino; dominante en pajonales del Delta y la ribera."
  ),
  ed2_scirpus_cubensis: species(
    "ed2_scirpus_cubensis", "Scirpus cubensis var. paraguayensis", "Perenne rizomatosa de 20-75 cm.",
    "Tres a seis bracteas angostas; espiguillas de unos 4 mm reunidas en uno o pocos capitulos terminales.",
    "America del Sur; suelos humedos del Delta."
  ),
  ed2_scirpus_paludosus: species(
    "ed2_scirpus_paludosus", "Scirpus paludosus", "Perenne rizomatosa de 30-60 cm.",
    "Una a diez espiguillas grandes; apice opuesto de la vaina con nervaduras divergentes en V; estilo bifido.",
    "America; pantanos salobres."
  ),
  ed2_scirpus_robustus: species(
    "ed2_scirpus_robustus", "Scirpus robustus", "Perenne rizomatosa de 30-85 cm, con hojas mas largas que el tallo.",
    "Pocas espiguillas grandes; nervaduras del apice de la vaina se doblan bruscamente en T; estilo trifido.",
    "America; marismas y pantanos salobres poco profundos del este bonaerense."
  ),
  ed2_scirpus_californicus: species(
    "ed2_scirpus_californicus", "Scirpus californicus", "Junco; perenne afila, rizomatosa y robusta, de 1-2 m.",
    "Tallo trigono; umbela compuesta nutante y cerdas hipoginas plumosas; espiguillas ovoides de 8-18 mm.",
    "America; muy comun en arroyos, zanjas y playas arenosas, donde forma juncales."
  ),
  ed2_scirpus_validus: species(
    "ed2_scirpus_validus", "Scirpus validus", "Perenne afila, rizomatosa y robusta, de 1,5-2,5 m.",
    "Tallo redondeado; umbela compuesta laxa y cerdas hipoginas con cilias retrorsas; espiguillas castañas de 4-7 mm.",
    "America; rara en lagunas cercanas a Buenos Aires."
  ),
  ed2_scirpus_cernuus: species(
    "ed2_scirpus_cernuus", "Scirpus cernuus", "Anual de hasta 20 cm, con tallos filiformes.",
    "Una, rara vez dos o tres, espiguillas sesiles de 2-10 mm; sin cerdas hipoginas.",
    "Cosmopolita; suelos humedos."
  ),
  ed2_scirpus_americanus: species(
    "ed2_scirpus_americanus", "Scirpus americanus var. longispicatus", "Perenne rizomatosa de 20-100 cm.",
    "Una a seis espiguillas ovoides con bractea de 1-3 cm y dos bracteas glumaceas; posee cerdas hipoginas.",
    "Cosmopolita; comun en lugares pantanosos."
  ),
  ed2_fimbristylis_squarrosa: species(
    "ed2_fimbristylis_squarrosa", "Fimbristylis squarrosa", "Perenne cespitosa de 10-20 cm, con tallos filiformes.",
    "Estilo bifido; umbela compuesta con cuatro a seis bracteas; espiguillas cilindrico-conicas y aquenio blanco reticulado.",
    "America tropical, Africa y Asia; rara en el Delta."
  ),
  ed2_fimbristylis_autumnalis: species(
    "ed2_fimbristylis_autumnalis", "Fimbristylis autumnalis", "Perenne de rizoma corto y tallos graciles de 25-50 cm.",
    "Estilo trifido; umbela compuesta; espiguillas lanceoladas agudas con glumas rojizas y aquenio blanquecino.",
    "Regiones tropicales; comun en la ribera y las dunas litorales."
  ),
  ed2_eleocharis_parodii: species(
    "ed2_eleocharis_parodii", "Eleocharis parodii", "Perenne cespitosa y cortamente rizomatosa, de 30-50 cm.",
    "Vaina con diente apical; tallos macizos o imperfectamente septados; espiguilla cilindrica de 2-3 cm.",
    "Nordeste argentino; pantanos del norte bonaerense."
  ),
  ed2_eleocharis_elegans: species(
    "ed2_eleocharis_elegans", "Eleocharis elegans", "Perenne de rizoma alargado y robusto, con tallos de 35-80 cm.",
    "Vaina dentada; tallos huecos y septados de unos 4 mm; espiguilla ovoide de 1-3 cm.",
    "America calida; Delta del Parana."
  ),
  ed2_eleocharis_nodulosa: species(
    "ed2_eleocharis_nodulosa", "Eleocharis nodulosa", "Perenne de rizoma grueso y tallos de 15-65 cm.",
    "Vaina dentada; tallos huecos y septados de 1,5-2,5 mm; espiguilla lanceolada de 10-25 mm.",
    "America calida; comun en charcas y arroyos."
  ),
  ed2_eleocharis_flavescens: species(
    "ed2_eleocharis_flavescens", "Eleocharis flavescens", "Perenne de rizomas largos y filiformes, con tallos muy delgados.",
    "Estilo bifido; vaina de apice membranaceo blanco; espiguillas ovoides con glumas palidas o verdosas.",
    "America calida; suelos humedos."
  ),
  ed2_eleocharis_maculosa: species(
    "ed2_eleocharis_maculosa", "Eleocharis maculosa", "Perenne de rizoma horizontal robusto y tallos de 5-25 cm.",
    "Estilo bifido; vaina de apice membranaceo blanco; glumas castaño rojizas y orbiculares.",
    "America calida; dunas litorales y sierras bonaerenses."
  ),
  ed2_eleocharis_macrostachya: species(
    "ed2_eleocharis_macrostachya", "Eleocharis macrostachya", "Perenne de rizoma horizontal grueso y tallos de 10-60 cm.",
    "Estilo bifido; vaina truncada de borde verde; espiguillas lanceoladas agudas de 15-25 mm.",
    "America; frecuente en orillas de zanjas y arroyos."
  ),
  ed2_eleocharis_obtusa: species(
    "ed2_eleocharis_obtusa", "Eleocharis obtusa", "Anual erecta de 3-30 cm, con tallos capilares.",
    "Estilo bifido; vaina oblicua de borde verde; espiguillas ovoides obtusas de 2-13 mm.",
    "America; rara en la region."
  ),
  ed2_eleocharis_bonariensis: species(
    "ed2_eleocharis_bonariensis", "Eleocharis bonariensis", "Perenne de rizomas horizontales muy largos y tallos de 5-40 cm.",
    "Estilo trifido; aquenio con 12-14 costillas; vaina oblicua herbacea y espiguilla lanceolada.",
    "Sur y centro de America; muy comun en pantanos, arroyos y cesped de la ribera del Plata."
  ),
  ed2_eleocharis_radicans: species(
    "ed2_eleocharis_radicans", "Eleocharis radicans", "Perenne de rizoma largo y delgado, con tallos capilares de 3-10 cm.",
    "Estilo trifido; aquenio costillado; vaina truncada oblicuamente y espiguilla lanceolada aguda de 3-5 mm.",
    "America templado-calida; suelos acidos."
  ),
  ed2_eleocharis_viridans: species(
    "ed2_eleocharis_viridans", "Eleocharis viridans", "Perenne cespitosa de 15-40 cm, con tallos capilares cuadrangulares.",
    "Aquenio sin costillas; glumas obtusas o agudas de margen hialino; vaina superior apenas prolongada dorsalmente.",
    "Sudamerica; rara en la ribera del Plata."
  ),
  ed2_eleocharis_filiculmis: species(
    "ed2_eleocharis_filiculmis", "Eleocharis filiculmis", "Perenne cespitosa de 10-25 cm, con tallos capilares cuadrangulares.",
    "Aquenio sin costillas; glumas emarginadas o bilobadas y vaina superior prolongada dorsalmente.",
    "America calida; rara en Buenos Aires."
  ),
  ed2_eleocharis_dunensis: species(
    "ed2_eleocharis_dunensis", "Eleocharis dunensis", "Perenne de rizomas largos y tallos fasciculados debiles de 10-50 cm.",
    "Tallos pentagonales de seccion estrellada; vaina de borde rojizo y espiguilla oblonga obtusa de 5-10 mm.",
    "Uruguay y nordeste argentino."
  ),
  ed2_eleocharis_montevidensis: species(
    "ed2_eleocharis_montevidensis", "Eleocharis montevidensis", "Perenne rizomatosa, con tallos de 5-15 cm.",
    "Tallos no pentagonales; espiguillas ovoides obtusas de 4-13 mm; aquenio finamente punteado y vainas truncadas.",
    "America templado-calida; rara en la region."
  ),
  ed2_eleocharis_haumaniana: species(
    "ed2_eleocharis_haumaniana", "Eleocharis haumaniana", "Perenne de rizoma horizontal robusto y tallos de 25-80 cm.",
    "Espiguillas lanceoladas plurifloras de 15-25 mm; glumas agudas, aquenios lisos y vainas ligeramente oblicuas.",
    "Uruguay y nordeste argentino; vive en charcas."
  ),
  ed2_rhynchospora_megapotamica: species(
    "ed2_rhynchospora_megapotamica", "Rhynchospora megapotamica", "Perenne rizomatosa y estolonifera, con tallos hojosos de 20-30 cm.",
    "Estilo profundamente bifido; espiguillas de 3-3,5 mm reunidas en panojas contraidas.",
    "Sudamerica; cercanias de La Plata."
  ),
  ed2_rhynchospora_corymbosa: species(
    "ed2_rhynchospora_corymbosa", "Rhynchospora corymbosa var. bonariensis", "Perenne rizomatosa de cerca de 1 m.",
    "Estilo indiviso; panoja corimbiforme muy laxa, con fasciculos pedunculados de tres a cinco espiguillas.",
    "Region platense; muy comun en pajonales del Delta y la ribera."
  ),
  ed2_rhynchospora_legrandii: species(
    "ed2_rhynchospora_legrandii", "Rhynchospora legrandii", "Perenne de 50-110 cm, con hojas planas.",
    "Estilo indiviso; fasciculos muy densos y apicales, con espiguillas gruesas castañas de 8-10 mm.",
    "Sur de Brasil, Paraguay, Uruguay y nordeste argentino; pajonales de la ribera del Plata."
  ),
  ed2_rhynchospora_rostrata: species(
    "ed2_rhynchospora_rostrata", "Rhynchospora rostrata", "Perenne de 1 m o mas, con hojas planas de unos 15 mm.",
    "Estilo indiviso; fasciculos en panojas contraidas terminales y laterales; espiguillas angostas de 7-8 mm.",
    "Brasil y nordeste argentino; comun en pajonales del Delta y la ribera."
  ),
  ed2_bulbostylis_juncoides: species(
    "ed2_bulbostylis_juncoides", "Bulbostylis juncoides", "Anual delicada de 10-40 cm, con tallos y hojas filiformes.",
    "Pocas espiguillas sesiles o subsesiles reunidas en un capitulo terminal con dos o tres bracteas foliaceas.",
    "Sierras de Olavarria, Tandil y Balcarce."
  ),
  ed2_bulbostylis_capillaris: species(
    "ed2_bulbostylis_capillaris", "Bulbostylis capillaris", "Anual delicada de 5-30 cm, con tallos y hojas filiformes.",
    "Espiguillas mayormente pediceladas, reunidas en cimas compuestas con dos bracteas foliaceas cortas.",
    "Regiones calidas del globo; sierras de la provincia de Buenos Aires."
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
    opcionA_prima: { label: "Espiraladas", keyStep: "B'", nextNodeId: "ed2_cyperaceae_style_base" },
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
  ed2_cyperaceae_style_base: {
    id: "ed2_cyperaceae_style_base", milestone: "Cyperaceae: base del estilo", manualPage: 154,
    descripcion: "¿El estilo esta engrosado en la base?",
    opcionA: { label: "No engrosado", keyStep: "D", nextNodeId: "ed2_scirpus" },
    opcionA_prima: { label: "Engrosado en la base", keyStep: "D'", nextNodeId: "ed2_cyperaceae_thickened_style" },
  },
  ed2_cyperaceae_thickened_style: {
    id: "ed2_cyperaceae_thickened_style", milestone: "Cyperaceae: estilo engrosado", manualPage: 154,
    descripcion: "¿La base engrosada del estilo cae junto con el estilo?",
    opcionA: { label: "Si; totalmente caduca", keyStep: "E", nextNodeId: "ed2_fimbristylis" },
    opcionA_prima: { label: "No; persiste sobre el fruto formando un rostro", keyStep: "E'", nextNodeId: "ed2_cyperaceae_persistent_style_habit" },
  },
  ed2_cyperaceae_persistent_style_habit: {
    id: "ed2_cyperaceae_persistent_style_habit", milestone: "Cyperaceae: estilo persistente", manualPage: 154,
    descripcion: "¿La planta es afila y posee una unica espiguilla terminal sin bracteas?",
    opcionA: { label: "Si; afila y con una espiguilla terminal", keyStep: "F", nextNodeId: "ed2_eleocharis" },
    opcionA_prima: { label: "No; generalmente con hojas y numerosas espiguillas con bracteas", keyStep: "F'", nextNodeId: "ed2_cyperaceae_spikelet_fertility" },
  },
  ed2_cyperaceae_spikelet_fertility: {
    id: "ed2_cyperaceae_spikelet_fertility", milestone: "Cyperaceae: flores por espiguilla", manualPage: 154,
    descripcion: "¿Las espiguillas poseen una o dos flores y tres o mas glumas esteriles basales?",
    opcionA: { label: "Si; espiguillas paucifloras y plantas frecuentemente robustas", keyStep: "G", nextNodeId: "ed2_rhynchospora" },
    opcionA_prima: { label: "No; espiguillas plurifloras con una o dos glumas esteriles o ninguna; plantas debiles", keyStep: "G'", nextNodeId: "ed2_bulbostylis" },
  },
  ed2_scirpus: {
    id: "ed2_scirpus", milestone: "Scirpus", manualPage: 159,
    descripcion: "¿La inflorescencia esta acompañada por dos o mas bracteas foliaceas?",
    opcionA: { label: "Si; dos a numerosas bracteas foliaceas", keyStep: "A", nextNodeId: "ed2_scirpus_many_bracts" },
    opcionA_prima: { label: "No; una bractea subulada que parece continuar el tallo", keyStep: "A'", nextNodeId: "ed2_scirpus_single_bract_inflorescence" },
  },
  ed2_scirpus_many_bracts: {
    id: "ed2_scirpus_many_bracts", milestone: "Scirpus: bracteas foliaceas", manualPage: 159,
    descripcion: "¿Hay seis a diez bracteas de 10-20 mm de ancho?",
    opcionA: { label: "Si; planta muy robusta y umbela compuesta con numerosos capitulos", keyStep: "B", especieId: "ed2_scirpus_giganteus" },
    opcionA_prima: { label: "No; tres a seis bracteas de 1-5 mm", keyStep: "B'", nextNodeId: "ed2_scirpus_spikelet_size" },
  },
  ed2_scirpus_spikelet_size: {
    id: "ed2_scirpus_spikelet_size", milestone: "Scirpus: tamaño de espiguilla", manualPage: 159,
    descripcion: "¿Las espiguillas miden unos 4 mm o entre 10 y 25 mm?",
    opcionA: { label: "Pequeñas, de unos 4 mm, en uno o pocos capitulos", keyStep: "C", especieId: "ed2_scirpus_cubensis" },
    opcionA_prima: { label: "Grandes, ovoides, de 10-25 mm", keyStep: "C'", nextNodeId: "ed2_scirpus_sheath_veins" },
  },
  ed2_scirpus_sheath_veins: {
    id: "ed2_scirpus_sheath_veins", milestone: "Scirpus: nervaduras de la vaina", manualPage: 159,
    descripcion: "¿Las nervaduras del apice opuesto de la vaina divergen suavemente en V o se doblan bruscamente en T?",
    opcionA: { label: "Se separan suavemente en V; estilo bifido", keyStep: "D", especieId: "ed2_scirpus_paludosus" },
    opcionA_prima: { label: "Se doblan bruscamente en T; estilo trifido", keyStep: "D'", especieId: "ed2_scirpus_robustus" },
  },
  ed2_scirpus_single_bract_inflorescence: {
    id: "ed2_scirpus_single_bract_inflorescence", milestone: "Scirpus: bractea unica", manualPage: 160,
    descripcion: "¿La inflorescencia es una umbela numerosa o un capitulo de una a seis espiguillas?",
    opcionA: { label: "Umbela con numerosas espiguillas; planta robusta y afila", keyStep: "E", nextNodeId: "ed2_scirpus_robust_stem" },
    opcionA_prima: { label: "Capitulo de una a seis espiguillas; planta con hojas", keyStep: "E'", nextNodeId: "ed2_scirpus_leafy_duration" },
  },
  ed2_scirpus_robust_stem: {
    id: "ed2_scirpus_robust_stem", milestone: "Scirpus: plantas robustas", manualPage: 160,
    descripcion: "¿El tallo es trigono o redondeado?",
    opcionA: { label: "Trigono; cerdas hipoginas plumosas y umbela nutante", keyStep: "F", especieId: "ed2_scirpus_californicus" },
    opcionA_prima: { label: "Redondeado; cerdas hipoginas con cilias retrorsas", keyStep: "F'", especieId: "ed2_scirpus_validus" },
  },
  ed2_scirpus_leafy_duration: {
    id: "ed2_scirpus_leafy_duration", milestone: "Scirpus: plantas con hojas", manualPage: 160,
    descripcion: "¿La planta es anual o perenne rizomatosa?",
    opcionA: { label: "Anual, menor de 20 cm, sin cerdas hipoginas", keyStep: "G", especieId: "ed2_scirpus_cernuus" },
    opcionA_prima: { label: "Perenne rizomatosa, de 20-100 cm, con cerdas hipoginas", keyStep: "G'", especieId: "ed2_scirpus_americanus" },
  },
  ed2_fimbristylis: {
    id: "ed2_fimbristylis", milestone: "Fimbristylis", manualPage: 162,
    descripcion: "¿El estilo es bifido o trifido?",
    opcionA: { label: "Bifido; un estambre y espiguillas cilindrico-conicas de 5 mm", keyStep: "A", especieId: "ed2_fimbristylis_squarrosa" },
    opcionA_prima: { label: "Trifido; tres estambres y espiguillas lanceoladas de 4-8 mm", keyStep: "A'", especieId: "ed2_fimbristylis_autumnalis" },
  },
  ed2_eleocharis: {
    id: "ed2_eleocharis", milestone: "Eleocharis", manualPage: 162,
    descripcion: "¿La vaina posee un diente apical bien desarrollado?",
    opcionA: { label: "Si; diente apical marcado", keyStep: "A", nextNodeId: "ed2_eleocharis_tissue" },
    opcionA_prima: { label: "No; sin diente marcado, a veces aguda y engrosada", keyStep: "A'", nextNodeId: "ed2_eleocharis_style" },
  },
  ed2_eleocharis_tissue: {
    id: "ed2_eleocharis_tissue", milestone: "Eleocharis: tallo", manualPage: 162,
    descripcion: "¿Los tallos son macizos o huecos con tabiques transversales?",
    opcionA: { label: "Macizos o imperfectamente septados; espiguilla cilindrica de 2-3 cm", keyStep: "B", especieId: "ed2_eleocharis_parodii" },
    opcionA_prima: { label: "Huecos y septados transversalmente", keyStep: "B'", nextNodeId: "ed2_eleocharis_septate_diameter" },
  },
  ed2_eleocharis_septate_diameter: {
    id: "ed2_eleocharis_septate_diameter", milestone: "Eleocharis: tallos septados", manualPage: 162,
    descripcion: "¿El tallo mide cerca de 4 mm o entre 1,5 y 2,5 mm de diametro?",
    opcionA: { label: "Cerca de 4 mm; espiguilla ovoide de 1-3 cm", keyStep: "C", especieId: "ed2_eleocharis_elegans" },
    opcionA_prima: { label: "1,5-2,5 mm; espiguilla lanceolada de 10-25 mm", keyStep: "C'", especieId: "ed2_eleocharis_nodulosa" },
  },
  ed2_eleocharis_style: {
    id: "ed2_eleocharis_style", milestone: "Eleocharis: estilo", manualPage: 162,
    descripcion: "¿El estilo es bifido o trifido?",
    opcionA: { label: "Bifido", keyStep: "D", nextNodeId: "ed2_eleocharis_bifid_sheath" },
    opcionA_prima: { label: "Trifido", keyStep: "D'", nextNodeId: "ed2_eleocharis_achene_ribs" },
  },
  ed2_eleocharis_bifid_sheath: {
    id: "ed2_eleocharis_bifid_sheath", milestone: "Eleocharis: estilo bifido", manualPage: 162,
    descripcion: "¿El apice de la vaina es membranaceo y blanco o herbaceo y verde?",
    opcionA: { label: "Membranaceo, blanco y transparente", keyStep: "E", nextNodeId: "ed2_eleocharis_membranous_glumes" },
    opcionA_prima: { label: "Herbaceo y verde", keyStep: "E'", nextNodeId: "ed2_eleocharis_green_spikelet" },
  },
  ed2_eleocharis_membranous_glumes: {
    id: "ed2_eleocharis_membranous_glumes", milestone: "Eleocharis: vaina membranacea", manualPage: 162,
    descripcion: "¿Las glumas son palidas o castaño rojizas?",
    opcionA: { label: "Palidas o verdosas; tallos menores de 1 mm y rizomas muy delgados", keyStep: "F", especieId: "ed2_eleocharis_flavescens" },
    opcionA_prima: { label: "Castaño rojizas y orbiculares; rizomas robustos", keyStep: "F'", especieId: "ed2_eleocharis_maculosa" },
  },
  ed2_eleocharis_green_spikelet: {
    id: "ed2_eleocharis_green_spikelet", milestone: "Eleocharis: vaina verde", manualPage: 162,
    descripcion: "¿Las espiguillas son lanceoladas y agudas u ovoides y obtusas?",
    opcionA: { label: "Lanceoladas, agudas, de 15-25 mm; vaina truncada", keyStep: "G", especieId: "ed2_eleocharis_macrostachya" },
    opcionA_prima: { label: "Ovoides, obtusas, de 2-13 mm; vaina oblicua", keyStep: "G'", especieId: "ed2_eleocharis_obtusa" },
  },
  ed2_eleocharis_achene_ribs: {
    id: "ed2_eleocharis_achene_ribs", milestone: "Eleocharis: aquenio", manualPage: 163,
    descripcion: "¿El aquenio presenta 12-14 costillas longitudinales y estrias horizontales?",
    opcionA: { label: "Si; costillado y estriado", keyStep: "H", nextNodeId: "ed2_eleocharis_ribbed_sheath" },
    opcionA_prima: { label: "No; sin costillas ni estrias", keyStep: "H'", nextNodeId: "ed2_eleocharis_habit" },
  },
  ed2_eleocharis_ribbed_sheath: {
    id: "ed2_eleocharis_ribbed_sheath", milestone: "Eleocharis: aquenio costillado", manualPage: 163,
    descripcion: "¿La vaina superior tiene borde herbaceo o escarioso-hialino?",
    opcionA: { label: "Oblicua, con borde herbaceo; glumas obtusas", keyStep: "I", especieId: "ed2_eleocharis_bonariensis" },
    opcionA_prima: { label: "Truncada oblicuamente, escarioso-hialina; espiguilla aguda", keyStep: "I'", especieId: "ed2_eleocharis_radicans" },
  },
  ed2_eleocharis_habit: {
    id: "ed2_eleocharis_habit", milestone: "Eleocharis: habito", manualPage: 163,
    descripcion: "¿La planta es cespitosa o rizomatosa?",
    opcionA: { label: "Cespitosa; tallos capilares cuadrangulares", keyStep: "J", nextNodeId: "ed2_eleocharis_cespitose_glumes" },
    opcionA_prima: { label: "Rizomatosa", keyStep: "J'", nextNodeId: "ed2_eleocharis_rhizomatous_stem" },
  },
  ed2_eleocharis_cespitose_glumes: {
    id: "ed2_eleocharis_cespitose_glumes", milestone: "Eleocharis: plantas cespitosas", manualPage: 163,
    descripcion: "¿Las glumas son obtusas o agudas, o emarginadas y bilobadas?",
    opcionA: { label: "Obtusas o agudas; vaina apenas prolongada dorsalmente", keyStep: "K", especieId: "ed2_eleocharis_viridans" },
    opcionA_prima: { label: "Emarginadas o bilobadas; vaina prolongada dorsalmente", keyStep: "K'", especieId: "ed2_eleocharis_filiculmis" },
  },
  ed2_eleocharis_rhizomatous_stem: {
    id: "ed2_eleocharis_rhizomatous_stem", milestone: "Eleocharis: plantas rizomatosas", manualPage: 163,
    descripcion: "¿Los tallos son pentagonales, capilares y de seccion estrellada?",
    opcionA: { label: "Si; vaina de borde rojizo y espiguilla oblonga de 5-10 mm", keyStep: "L", especieId: "ed2_eleocharis_dunensis" },
    opcionA_prima: { label: "No; tallos graciles o robustos, no pentagonales", keyStep: "L'", nextNodeId: "ed2_eleocharis_rhizomatous_spikelet" },
  },
  ed2_eleocharis_rhizomatous_spikelet: {
    id: "ed2_eleocharis_rhizomatous_spikelet", milestone: "Eleocharis: espiguilla", manualPage: 163,
    descripcion: "¿Las espiguillas son ovoides y obtusas o lanceoladas y agudas?",
    opcionA: { label: "Ovoides, obtusas, de 4-13 mm; aquenio punteado", keyStep: "M", especieId: "ed2_eleocharis_montevidensis" },
    opcionA_prima: { label: "Lanceoladas, agudas, de 15-25 mm; aquenio liso", keyStep: "M'", especieId: "ed2_eleocharis_haumaniana" },
  },
  ed2_rhynchospora: {
    id: "ed2_rhynchospora", milestone: "Rhynchospora", manualPage: 165,
    descripcion: "¿El estilo es profundamente bifido o indiviso?",
    opcionA: { label: "Profundamente bifido; espiguillas de 3-3,5 mm en panojas contraidas", keyStep: "A", especieId: "ed2_rhynchospora_megapotamica" },
    opcionA_prima: { label: "Indiviso; espiguillas mayores", keyStep: "A'", nextNodeId: "ed2_rhynchospora_panicle" },
  },
  ed2_rhynchospora_panicle: {
    id: "ed2_rhynchospora_panicle", milestone: "Rhynchospora: panoja", manualPage: 165,
    descripcion: "¿La panoja es corimbiforme y muy laxa o contraida?",
    opcionA: { label: "Corimbiforme muy laxa; fasciculos de tres a cinco, largamente pedunculados", keyStep: "B", especieId: "ed2_rhynchospora_corymbosa" },
    opcionA_prima: { label: "Contraida; fasciculos de mas de ocho espiguillas, cortamente pedunculados", keyStep: "B'", nextNodeId: "ed2_rhynchospora_fascicles" },
  },
  ed2_rhynchospora_fascicles: {
    id: "ed2_rhynchospora_fascicles", milestone: "Rhynchospora: fasciculos", manualPage: 165,
    descripcion: "¿Los fasciculos se amontonan principalmente en el apice del tallo?",
    opcionA: { label: "Si; muy densos, con espiguillas gruesas castañas de 8-10 mm", keyStep: "C", especieId: "ed2_rhynchospora_legrandii" },
    opcionA_prima: { label: "No; en panojas contraidas terminales y laterales, con espiguillas angostas", keyStep: "C'", especieId: "ed2_rhynchospora_rostrata" },
  },
  ed2_bulbostylis: {
    id: "ed2_bulbostylis", milestone: "Bulbostylis", manualPage: 166,
    descripcion: "¿Las espiguillas son sesiles y forman un capitulo terminal o son mayormente pediceladas?",
    opcionA: { label: "Sesiles o casi sesiles, pocas, en un capitulo terminal", keyStep: "A", especieId: "ed2_bulbostylis_juncoides" },
    opcionA_prima: { label: "Mayormente pediceladas, reunidas en cimas compuestas", keyStep: "A'", especieId: "ed2_bulbostylis_capillaris" },
  },
  ed2_cyperus: {
    id: "ed2_cyperus", milestone: "Cyperus", manualPage: 156,
    descripcion: "¿Las espiguillas forman capitulos o fasciculos solitarios en los apices de los tallos?",
    opcionA: { label: "Si; inflorescencias solitarias y plantas generalmente menores de 1 m", keyStep: "A", nextNodeId: "ed2_cyperus_solitary_fertile_flowers" },
    opcionA_prima: { label: "No; capitulos, fasciculos o espigas dispuestos en umbela", keyStep: "A'", nextNodeId: "ed2_cyperus_umbel_style" },
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
  ed2_cyperus_umbel_style: {
    id: "ed2_cyperus_umbel_style", milestone: "Cyperus: umbelas", manualPage: 157,
    descripcion: "¿El estilo es bifido o trifido?",
    opcionA: { label: "Bifido; aquenio biconvexo", keyStep: "L", nextNodeId: "ed2_cyperus_compressed_length" },
    opcionA_prima: { label: "Trifido; aquenio trigono", keyStep: "L'", nextNodeId: "ed2_cyperus_umbel_arrangement" },
  },
  ed2_cyperus_umbel_arrangement: {
    id: "ed2_cyperus_umbel_arrangement", milestone: "Cyperus: disposicion en umbela", manualPage: 157,
    descripcion: "¿Las espiguillas estan dispuestas en espigas o en fasciculos y capitulos?",
    opcionA: { label: "En espigas", keyStep: "N", nextNodeId: "ed2_cyperus_spike_density" },
    opcionA_prima: { label: "En fasciculos o capitulos", keyStep: "N'", nextNodeId: "ed2_cyperus_head_color" },
  },
  ed2_cyperus_spike_density: {
    id: "ed2_cyperus_spike_density", milestone: "Cyperus: densidad de las espigas", manualPage: 157,
    descripcion: "¿Hay cinco a veinte espiguillas laxas por espiga o son muy numerosas y densas?",
    opcionA: { label: "Laxas; rizomas horizontales largos y tallos debiles", keyStep: "O", nextNodeId: "ed2_cyperus_lax_spike_color" },
    opcionA_prima: { label: "Densas y muy numerosas; plantas cespitosas o con rizomas cortos", keyStep: "O'", nextNodeId: "ed2_cyperus_dense_orientation" },
  },
  ed2_cyperus_lax_spike_color: {
    id: "ed2_cyperus_lax_spike_color", milestone: "Cyperus: espiguillas laxas", manualPage: 157,
    descripcion: "¿Las espiguillas son pardo amarillentas o castaño rojizas?",
    opcionA: { label: "Pardo amarillentas, de 15-40 mm; glumas nervadas tambien en los costados", keyStep: "P", especieId: "ed2_cyperus_esculentus" },
    opcionA_prima: { label: "Castaño rojizas; glumas nervadas solamente en el dorso", keyStep: "P'", nextNodeId: "ed2_cyperus_red_leaves" },
  },
  ed2_cyperus_red_leaves: {
    id: "ed2_cyperus_red_leaves", milestone: "Cyperus: hojas", manualPage: 157,
    descripcion: "¿La planta tiene una a tres hojas cortas o cuatro a diez casi tan largas como el tallo?",
    opcionA: { label: "Una a tres hojas mucho mas cortas; bracteas apenas superan la inflorescencia", keyStep: "Q", especieId: "ed2_cyperus_corymbosus" },
    opcionA_prima: { label: "Cuatro a diez hojas casi tan largas; bracteas mas largas que la inflorescencia", keyStep: "Q'", especieId: "ed2_cyperus_rotundus" },
  },
  ed2_cyperus_dense_orientation: {
    id: "ed2_cyperus_dense_orientation", milestone: "Cyperus: espiguillas densas", manualPage: 157,
    descripcion: "¿Las espiguillas estan recostadas sobre el eje o abiertas hasta perpendiculares?",
    opcionA: { label: "Recostadas sobre el eje", keyStep: "R", nextNodeId: "ed2_cyperus_appressed_shape" },
    opcionA_prima: { label: "Abiertas hasta perpendiculares al eje", keyStep: "R'", nextNodeId: "ed2_cyperus_open_spike_shape" },
  },
  ed2_cyperus_appressed_shape: {
    id: "ed2_cyperus_appressed_shape", milestone: "Cyperus: espiguillas recostadas", manualPage: 157,
    descripcion: "¿Son linear-lanceoladas de 10-15 mm o lanceolado-oblongas de 5-7 mm?",
    opcionA: { label: "Linear-lanceoladas, 10-15 mm y siete a nueve flores", keyStep: "S", especieId: "ed2_cyperus_prolixus" },
    opcionA_prima: { label: "Lanceolado-oblongas, 5-7 mm y 16-20 flores", keyStep: "S'", especieId: "ed2_cyperus_exaltatus" },
  },
  ed2_cyperus_open_spike_shape: {
    id: "ed2_cyperus_open_spike_shape", milestone: "Cyperus: forma de la espiga", manualPage: 157,
    descripcion: "¿Las espigas son cortas y ovadas o cilindricas y alargadas?",
    opcionA: { label: "Ovadas, cortas y anchas", keyStep: "T", nextNodeId: "ed2_cyperus_ovate_rachilla" },
    opcionA_prima: { label: "Cilindricas y alargadas; raquilla persistente", keyStep: "T'", nextNodeId: "ed2_cyperus_cylindrical_habit" },
  },
  ed2_cyperus_ovate_rachilla: {
    id: "ed2_cyperus_ovate_rachilla", milestone: "Cyperus: raquilla", manualPage: 157,
    descripcion: "¿La raquilla se articula en cada gluma y se fragmenta al madurar?",
    opcionA: { label: "Si; se divide en fragmentos uninucigeros", keyStep: "U", especieId: "ed2_cyperus_odoratus" },
    opcionA_prima: { label: "No; persistente o caduca en conjunto", keyStep: "U'", nextNodeId: "ed2_cyperus_ovate_umbel" },
  },
  ed2_cyperus_ovate_umbel: {
    id: "ed2_cyperus_ovate_umbel", milestone: "Cyperus: umbela de espigas ovadas", manualPage: 157,
    descripcion: "¿La umbela es simple o muy compuesta y amplia?",
    opcionA: { label: "Simple o apenas compuesta; espigas ovoides o globosas", keyStep: "V", especieId: "ed2_cyperus_rigens" },
    opcionA_prima: { label: "Compuesta y muy amplia; espigas ovoides o casi cilindricas", keyStep: "V'", especieId: "ed2_cyperus_pohlii" },
  },
  ed2_cyperus_cylindrical_habit: {
    id: "ed2_cyperus_cylindrical_habit", milestone: "Cyperus: espigas cilindricas", manualPage: 158,
    descripcion: "¿La planta es afila o subafila, o presenta hojas desarrolladas?",
    opcionA: { label: "Afila o subafila, de hasta 2 m", keyStep: "W", especieId: "ed2_cyperus_giganteus" },
    opcionA_prima: { label: "Con hojas", keyStep: "W'", nextNodeId: "ed2_cyperus_rachilla_wing" },
  },
  ed2_cyperus_rachilla_wing: {
    id: "ed2_cyperus_rachilla_wing", milestone: "Cyperus: ala de la raquilla", manualPage: 158,
    descripcion: "¿La raquilla carece de alas y las glumas no son decurrentes?",
    opcionA: { label: "Si; raquilla no alada y glumas orbiculares mucronadas", keyStep: "X", especieId: "ed2_cyperus_imbricatus" },
    opcionA_prima: { label: "No; raquilla alada y glumas decurrentes", keyStep: "X'", especieId: "ed2_cyperus_digitatus" },
  },
  ed2_cyperus_head_color: {
    id: "ed2_cyperus_head_color", milestone: "Cyperus: fasciculos o capitulos", manualPage: 158,
    descripcion: "¿Las espiguillas son castaño rojizas o verdosas a pajizas?",
    opcionA: { label: "Castaño rojizas", keyStep: "Y", nextNodeId: "ed2_cyperus_red_head_length" },
    opcionA_prima: { label: "Verdosas o pajizas", keyStep: "Y'", nextNodeId: "ed2_cyperus_green_stem" },
  },
  ed2_cyperus_red_head_length: {
    id: "ed2_cyperus_red_head_length", milestone: "Cyperus: capitulos rojizos", manualPage: 158,
    descripcion: "¿Las espiguillas suelen medir menos de 10 mm o entre 10 y 50 mm?",
    opcionA: { label: "Menos de 10 mm, en fasciculos o capitulos densos", keyStep: "Z", nextNodeId: "ed2_cyperus_red_umbel" },
    opcionA_prima: { label: "10-50 mm, en una espiga muy corta semejante a un fasciculo", keyStep: "Z'", nextNodeId: "ed2_cyperus_red_leaves" },
  },
  ed2_cyperus_red_umbel: {
    id: "ed2_cyperus_red_umbel", milestone: "Cyperus: umbela rojiza", manualPage: 158,
    descripcion: "¿La umbela es simple o compuesta?",
    opcionA: { label: "Simple; capitulos con muchas espiguillas lanceoladas", keyStep: "a", especieId: "ed2_cyperus_reflexus" },
    opcionA_prima: { label: "Compuesta; menos de treinta espiguillas y aquenio blanco o vitreo", keyStep: "a'", especieId: "ed2_cyperus_haspan" },
  },
  ed2_cyperus_green_stem: {
    id: "ed2_cyperus_green_stem", milestone: "Cyperus: tallo", manualPage: 158,
    descripcion: "¿El tallo es aspero o liso?",
    opcionA: { label: "Aspero", keyStep: "c", nextNodeId: "ed2_cyperus_rough_stem" },
    opcionA_prima: { label: "Liso", keyStep: "c'", nextNodeId: "ed2_cyperus_smooth_height" },
  },
  ed2_cyperus_rough_stem: {
    id: "ed2_cyperus_rough_stem", milestone: "Cyperus: tallo aspero", manualPage: 158,
    descripcion: "¿El tallo es triquetro y semialado o trigono con espinitas dirigidas hacia abajo?",
    opcionA: { label: "Triquetro, semialado y escabroso en los angulos; cerca de 1 m", keyStep: "d", especieId: "ed2_cyperus_virens" },
    opcionA_prima: { label: "Trigono con diminutas espinas retrorsas; 20-40 cm", keyStep: "d'", especieId: "ed2_cyperus_surinamensis" },
  },
  ed2_cyperus_smooth_height: {
    id: "ed2_cyperus_smooth_height", milestone: "Cyperus: tallo liso", manualPage: 158,
    descripcion: "¿La planta mide 5-20 cm o mas de 25 cm?",
    opcionA: { label: "5-20 cm; glumas acuminadas y umbela simple", keyStep: "e", especieId: "ed2_cyperus_unicolor" },
    opcionA_prima: { label: "Mas de 25 cm; glumas no acuminadas", keyStep: "e'", nextNodeId: "ed2_cyperus_smooth_spikelet" },
  },
  ed2_cyperus_smooth_spikelet: {
    id: "ed2_cyperus_smooth_spikelet", milestone: "Cyperus: espiguillas de tallo liso", manualPage: 159,
    descripcion: "¿Las espiguillas son oblongas y verde claras u ovadas y mas pequeñas?",
    opcionA: { label: "Oblongas, verde claras, de 10-15 mm y 20-30 flores", keyStep: "f", especieId: "ed2_cyperus_eragrostis" },
    opcionA_prima: { label: "Ovadas, de 4-5 mm y 10-25 flores", keyStep: "f'", especieId: "ed2_cyperus_entrerianus" },
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
