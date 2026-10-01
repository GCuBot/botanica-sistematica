import { CladoNode, Especie } from "@/types";

function species(id: string, scientificName: string, commonName: string, characteristics: string, distribution: string): Especie {
  return { id, nombreCientifico: scientificName, nombreVulgar: commonName, familia: "XL. Iridaceae", descripcion: characteristics.split(";", 1)[0] + ".", caracteristicas: characteristics, distribucion: distribution };
}

export const secondEditionIridaceaeSpecies: Record<string, Especie> = {
  ed2_sisyrinchium_vaginatum: species("ed2_sisyrinchium_vaginatum", "Sisyrinchium vaginatum", "Sisyrinchium vaginatum", "Sin roseta basal conspicua; tallos flexuosos y ramosos; flores amarillas de unos 7 mm", "Sur de Brasil, Uruguay y nordeste argentino; rara en la region."),
  ed2_sisyrinchium_platycaule: species("ed2_sisyrinchium_platycaule", "Sisyrinchium platycaule", "Sisyrinchium platycaule", "Planta pigmea de tallos tendidos; roseta basal presente y flores diminutas ocraceas", "Brasil, Paraguay y nordeste argentino; rara en la region."),
  ed2_sisyrinchium_pachyrhizum: species("ed2_sisyrinchium_pachyrhizum", "Sisyrinchium pachyrhizum", "Sisyrinchium pachyrhizum", "Perenne erecta de hasta 30 cm; flores amarillas; columna estaminal glandulosa y raices carnosas", "Sur de Brasil, Paraguay y norte y centro argentinos; estepa climax."),
  ed2_sisyrinchium_avenaceum: species("ed2_sisyrinchium_avenaceum", "Sisyrinchium avenaceum", "Sisyrinchium avenaceum", "Perenne de hasta 60 cm; flores amarillas; espatas sesiles e inflorescencia espiciforme", "Sur de Brasil, Uruguay y nordeste argentino; sierras de Tandil."),
  ed2_sisyrinchium_megapotamicum: species("ed2_sisyrinchium_megapotamicum", "Sisyrinchium megapotamicum", "Sisyrinchium megapotamicum", "Perenne de hasta 40 cm; flores amarillas; espatas pedunculadas e inflorescencia cimoso-corimbosa", "Sur de Brasil, Uruguay y nordeste argentino; norte bonaerense, estepa climax."),
  ed2_sisyrinchium_junceum: species("ed2_sisyrinchium_junceum", "Sisyrinchium junceum subsp. lainezii", "Sisyrinchium junceum", "Perenne erecta de hasta 50 cm; flores rosadas o blanquecinas; columna estaminal glabra", "Sierras de la provincia de Buenos Aires."),
  ed2_sisyrinchium_platense: species("ed2_sisyrinchium_platense", "Sisyrinchium platense", "Sisyrinchium platense", "Perenne de raices gruesas; flores violetas y filamentos totalmente soldados", "Uruguay y nordeste argentino; muy frecuente en estepa climax y suelos algo salobres."),
  ed2_sisyrinchium_iridifolium: species("ed2_sisyrinchium_iridifolium", "Sisyrinchium iridifolium subsp. valdivianum", "Sisyrinchium iridifolium", "Anual de raices filiformes; flores violaceas, blancas o rosadas; filamentos soldados solo parcialmente", "America; frecuente en suelos humedos."),
  ed2_sisyrinchium_minus: species("ed2_sisyrinchium_minus", "Sisyrinchium minus", "Sisyrinchium minus", "Anual de hasta 25 cm; filamentos totalmente soldados y valva inferior de la espata casi doble", "America templado-calida; Delta y ribera platense."),
  ed2_sisyrinchium_minutiflorum: species("ed2_sisyrinchium_minutiflorum", "Sisyrinchium minutiflorum", "Sisyrinchium minutiflorum", "Anual baja; filamentos totalmente soldados y valvas de la espata casi iguales", "Sur de Brasil, Uruguay y nordeste y centro argentinos."),
  ed2_gelasine_azurea: species("ed2_gelasine_azurea", "Gelasine azurea", "Gelasine azurea", "Bulbifera de 45-80 cm; hojas plegadas; flores azules infundibuliformes de unos 2 cm", "Sur de Brasil, Uruguay y este y centro argentinos; sierras de Tandil y Balcarce."),
  ed2_trifurcia_lahue: species("ed2_trifurcia_lahue", "Trifurcia lahue subsp. amoena", "Trifurcia lahue", "Geofita de hasta 20 cm; flores azul plomo con tepalos internos muy reducidos y estilo de ramas bifidas", "Sur de Brasil, Uruguay y nordeste argentino; comun en la estepa climax."),
  ed2_cypella_coelestis: species("ed2_cypella_coelestis", "Cypella coelestis", "Cypella coelestis", "Bulbifera de hasta 1 m; tepalos azules de 4-5 cm y hojas anchas de nervaduras gruesas", "Sur de Brasil, Paraguay, Uruguay y nordeste argentino; rara en pajonales del Delta y la ribera."),
  ed2_cypella_herbertii: species("ed2_cypella_herbertii", "Cypella herbertii", "Cypella herbertii", "Bulbifera de 20-80 cm; tepalos amarillo-anaranjados y filamentos soldados en sus dos tercios", "Sur de Brasil, Paraguay, Uruguay y nordeste argentino; comun en estepa y praderas ribereñas."),
  ed2_cypella_wolffhuegelii: species("ed2_cypella_wolffhuegelii", "Cypella wolffhuegelii", "Cypella wolffhuegelii", "Bulbifera de hasta 1 m; tepalos amarillo-ocraceos y filamentos libres", "Sierras de la provincia de Buenos Aires."),
  ed2_iris_pseudacorus: species("ed2_iris_pseudacorus", "Iris pseudacorus", "Lirio amarillo", "Perenne robusta y rizomatosa; hojas ensiformes glaucas y flores amarillas grandes", "Europa; adventicia frecuente en suelos inundables del Delta y la ribera."),
  ed2_crocosmia_crocosmiflora: species("ed2_crocosmia_crocosmiflora", "Crocosmia crocosmiflora", "Crocosmia crocosmiflora", "Perenne bulbifera de unos 80 cm; inflorescencia espiciforme ramosa y flores rojo-naranja", "Hibrido ornamental cultivado y espontaneo en el Delta y la ribera platense."),
};

export const secondEditionIridaceaeKeyData: Record<string, CladoNode> = {
  ed2_family_iridaceae: {
    id: "ed2_family_iridaceae", milestone: "Iridaceae", manualPage: 199,
    descripcion: "¿La planta carece de bulbos y rizomas y posee raices fasciculadas?",
    opcionA: { label: "Si; sin bulbo ni rizoma y ramas del estilo alternas con las anteras", keyStep: "A", nextNodeId: "ed2_sisyrinchium" },
    opcionA_prima: { label: "No; con bulbo o rizoma", keyStep: "A'", nextNodeId: "ed2_iridaceae_storage" },
  },
  ed2_iridaceae_storage: {
    id: "ed2_iridaceae_storage", milestone: "Iridaceae: organo subterraneo", manualPage: 199,
    descripcion: "¿La planta posee bulbo tunicado o rizoma o bulbo macizo?",
    opcionA: { label: "Bulbo tunicado", keyStep: "B", nextNodeId: "ed2_iridaceae_tunicate_tepals" },
    opcionA_prima: { label: "Rizoma o bulbo macizo", keyStep: "B'", nextNodeId: "ed2_iridaceae_rhizome_symmetry" },
  },
  ed2_iridaceae_tunicate_tepals: {
    id: "ed2_iridaceae_tunicate_tepals", milestone: "Iridaceae: bulbo tunicado", manualPage: 199,
    descripcion: "¿Los seis tepalos son aproximadamente iguales?",
    opcionA: { label: "Si; seis tepalos semejantes", keyStep: "C", especieId: "ed2_gelasine_azurea" },
    opcionA_prima: { label: "No; exteriores grandes e interiores muy reducidos", keyStep: "C'", nextNodeId: "ed2_iridaceae_style_branches" },
  },
  ed2_iridaceae_style_branches: {
    id: "ed2_iridaceae_style_branches", milestone: "Iridaceae: ramas del estilo", manualPage: 199,
    descripcion: "¿Las ramas del estilo son bifidas o enteras?",
    opcionA: { label: "Bifidas; tepalos interiores casi planos", keyStep: "D", especieId: "ed2_trifurcia_lahue" },
    opcionA_prima: { label: "Enteras; tepalos interiores recurvados, doblados o casi nulos", keyStep: "D'", nextNodeId: "ed2_cypella" },
  },
  ed2_iridaceae_rhizome_symmetry: {
    id: "ed2_iridaceae_rhizome_symmetry", milestone: "Iridaceae: rizoma o cormo", manualPage: 199,
    descripcion: "¿Las flores son actinomorfas o zigomorfas?",
    opcionA: { label: "Actinomorfas; tepalos exteriores grandes y recurvados", keyStep: "E", especieId: "ed2_iris_pseudacorus" },
    opcionA_prima: { label: "Zigomorfas; tepalos interiores mas largos", keyStep: "E'", especieId: "ed2_crocosmia_crocosmiflora" },
  },
  ed2_sisyrinchium: {
    id: "ed2_sisyrinchium", milestone: "Sisyrinchium", manualPage: 200,
    descripcion: "¿Las hojas basales estan ausentes o muy reducidas?",
    opcionA: { label: "Si; sin roseta conspicua, tallos flexuosos y flores amarillas", keyStep: "A", especieId: "ed2_sisyrinchium_vaginatum" },
    opcionA_prima: { label: "No; hojas basales desarrolladas en roseta", keyStep: "A'", nextNodeId: "ed2_sisyrinchium_flower_color" },
  },
  ed2_sisyrinchium_flower_color: {
    id: "ed2_sisyrinchium_flower_color", milestone: "Sisyrinchium: color floral", manualPage: 200,
    descripcion: "¿Las flores son amarillas u ocraceas o violetas, rosas o blancas?",
    opcionA: { label: "Amarillas u ocraceas", keyStep: "B", nextNodeId: "ed2_sisyrinchium_yellow_habit" },
    opcionA_prima: { label: "Violetas, rosas o blancas", keyStep: "B'", nextNodeId: "ed2_sisyrinchium_pale_column" },
  },
  ed2_sisyrinchium_yellow_habit: {
    id: "ed2_sisyrinchium_yellow_habit", milestone: "Sisyrinchium: flores amarillas", manualPage: 200,
    descripcion: "¿La planta es pigmea y de tallos tendidos?",
    opcionA: { label: "Si; flores diminutas ocraceas", keyStep: "C", especieId: "ed2_sisyrinchium_platycaule" },
    opcionA_prima: { label: "No; robusta, erecta y de flores amarillas", keyStep: "C'", nextNodeId: "ed2_sisyrinchium_yellow_column" },
  },
  ed2_sisyrinchium_yellow_column: {
    id: "ed2_sisyrinchium_yellow_column", milestone: "Sisyrinchium: columna estaminal", manualPage: 200,
    descripcion: "¿La columna estaminal es glandulosa en la parte inferior?",
    opcionA: { label: "Si; raices algo carnosas y tepalos de unos 12 mm", keyStep: "D", especieId: "ed2_sisyrinchium_pachyrhizum" },
    opcionA_prima: { label: "No; columna glabra", keyStep: "D'", nextNodeId: "ed2_sisyrinchium_yellow_spathe" },
  },
  ed2_sisyrinchium_yellow_spathe: {
    id: "ed2_sisyrinchium_yellow_spathe", milestone: "Sisyrinchium: espatas amarillas", manualPage: 200,
    descripcion: "¿Las espatas son sesiles o pedunculadas?",
    opcionA: { label: "Sesiles; inflorescencia de aspecto espiciforme", keyStep: "E", especieId: "ed2_sisyrinchium_avenaceum" },
    opcionA_prima: { label: "Pedunculadas; inflorescencia cimoso-corimbosa", keyStep: "E'", especieId: "ed2_sisyrinchium_megapotamicum" },
  },
  ed2_sisyrinchium_pale_column: {
    id: "ed2_sisyrinchium_pale_column", milestone: "Sisyrinchium: flores palidas o violetas", manualPage: 200,
    descripcion: "¿La columna estaminal es glabra?",
    opcionA: { label: "Si; flores rosadas o blanquecinas y tepalos de 17 mm", keyStep: "F", especieId: "ed2_sisyrinchium_junceum" },
    opcionA_prima: { label: "No; glandulosa en la parte inferior", keyStep: "F'", nextNodeId: "ed2_sisyrinchium_roots" },
  },
  ed2_sisyrinchium_roots: {
    id: "ed2_sisyrinchium_roots", milestone: "Sisyrinchium: raices", manualPage: 200,
    descripcion: "¿Las raices son gruesas y carnosas o filiformes?",
    opcionA: { label: "Gruesas y carnosas; filamentos totalmente soldados", keyStep: "G", especieId: "ed2_sisyrinchium_platense" },
    opcionA_prima: { label: "Filiformes; plantas generalmente anuales", keyStep: "G'", nextNodeId: "ed2_sisyrinchium_filament_union" },
  },
  ed2_sisyrinchium_filament_union: {
    id: "ed2_sisyrinchium_filament_union", milestone: "Sisyrinchium: union de filamentos", manualPage: 200,
    descripcion: "¿Los filamentos estan soldados solo parcialmente o en toda su longitud?",
    opcionA: { label: "Solo en la mitad o dos tercios", keyStep: "H", especieId: "ed2_sisyrinchium_iridifolium" },
    opcionA_prima: { label: "En toda su longitud", keyStep: "H'", nextNodeId: "ed2_sisyrinchium_spathe_valves" },
  },
  ed2_sisyrinchium_spathe_valves: {
    id: "ed2_sisyrinchium_spathe_valves", milestone: "Sisyrinchium: valvas de la espata", manualPage: 200,
    descripcion: "¿Las valvas de la espata son muy desiguales o casi iguales?",
    opcionA: { label: "Desiguales; la inferior casi duplica a la superior", keyStep: "I", especieId: "ed2_sisyrinchium_minus" },
    opcionA_prima: { label: "Casi iguales", keyStep: "I'", especieId: "ed2_sisyrinchium_minutiflorum" },
  },
  ed2_cypella: {
    id: "ed2_cypella", milestone: "Cypella", manualPage: 203,
    descripcion: "¿Los tepalos son azules o amarillos a anaranjados?",
    opcionA: { label: "Azules, de 4-5 cm", keyStep: "A", especieId: "ed2_cypella_coelestis" },
    opcionA_prima: { label: "Amarillos o anaranjados", keyStep: "A'", nextNodeId: "ed2_cypella_filaments" },
  },
  ed2_cypella_filaments: {
    id: "ed2_cypella_filaments", milestone: "Cypella: filamentos", manualPage: 203,
    descripcion: "¿Los filamentos estaminales estan soldados o libres?",
    opcionA: { label: "Soldados en sus dos tercios; tepalos amarillo-anaranjados", keyStep: "B", especieId: "ed2_cypella_herbertii" },
    opcionA_prima: { label: "Libres; tepalos amarillo-ocraceos", keyStep: "B'", especieId: "ed2_cypella_wolffhuegelii" },
  },
};
