export type ExamTaxon = {
  id: string;
  name: string;
  group: string;
  image: string;
  imageAlt: string;
  keyDiagnostic: string;
  diagnosticTraits: string[];
  lookFor: string;
  confusion: string;
  referenceGenera: string;
  examples: PlantExample[];
  quizTraits: [string, string, string, string];
};

export type PlantExample = {
  scientificName: string;
  commonName: string;
};

export type KeyNode = {
  id: string;
  prompt: string;
  hint?: string;
  choices: Array<{
    label: string;
    next?: string;
    result?: string;
  }>;
};

export type KeyResult = {
  title: string;
  scientificName?: string;
  explanation: string;
};

export type ExamGenus = {
  name: string;
  taxonId: string;
  note?: string;
};

export type GlossaryEntry = {
  term: string;
  definition: string;
  aliases?: string[];
};

export type StudyCard = {
  id: string;
  name: string;
  scientificName: string;
  group: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
  imageCredit?: string;
  imageSourceUrl?: string;
  keyDiagnostic: string;
  diagnosticTraits: string[];
  lookFor: string;
  confusion: string;
  examples: PlantExample[];
};

export const examTaxa: ExamTaxon[] = [
  {
    id: "solanaceae",
    name: "Solanaceae",
    group: "Solanales",
    image: "/partial/solanaceae.jpg",
    imageAlt: "Flor de Solanum con anteras amarillas reunidas alrededor del estilo",
    keyDiagnostic: "Flor actinomorfa con cinco estambres epipetalos alternos y ovario supero generalmente bicarpelar.",
    diagnosticTraits: [
      "Flor generalmente actinomorfa, pentamera y gamopetala.",
      "Cinco estambres epipetalos, alternos con los lobulos de la corola.",
      "Ovario supero, usualmente bicarpelar y bilocular, con placentacion axilar.",
      "Hojas alternas; fruto baya o capsula.",
    ],
    lookFor: "Contar cinco piezas y buscar los cinco estambres insertos en la corola. En Solanum, las anteras suelen ser conniventes y de apertura poricida.",
    confusion: "No decidir solo por una corola tubular: confirmar simetria, numero de estambres y posicion de las hojas.",
    referenceGenera: "Solanum, Capsicum, Nicotiana, Datura y Cestrum.",
    examples: [
      { scientificName: "Solanum tuberosum", commonName: "papa" },
      { scientificName: "Capsicum annuum", commonName: "pimiento" },
      { scientificName: "Nicotiana tabacum", commonName: "tabaco" },
    ],
    quizTraits: [
      "Cinco estambres epipetalos alternos con la corola",
      "Ovario supero, por lo comun bilocular y con muchos ovulos",
      "Estilo ginobasico y fruto dividido en cuatro nueces",
      "Ovario infero y solo tres estambres",
    ],
  },
  {
    id: "bignoniaceae",
    name: "Bignoniaceae",
    group: "Lamiales",
    image: "/partial/bignoniaceae.jpg",
    imageAlt: "Flores tubulares y bilaterales de una bignoniacea",
    keyDiagnostic: "Corola zigomorfa con cuatro estambres didinamos, hojas opuestas y capsula con semillas aladas.",
    diagnosticTraits: [
      "Flor zigomorfa, gamopetala y frecuentemente vistosa.",
      "Cuatro estambres didinamos; a veces existe un estaminodio.",
      "Hojas opuestas, a menudo compuestas.",
      "Fruto capsula; semillas con frecuencia aladas.",
    ],
    lookFor: "Primero reconocer la corola bilateral; despues buscar cuatro estambres y hojas opuestas, muchas veces compuestas.",
    confusion: "Puede parecer Lamiaceae. La capsula con semillas aladas y la ausencia del gineceo profundamente tetralobado orientan a Bignoniaceae.",
    referenceGenera: "Jacaranda, Handroanthus, Bignonia y Pyrostegia.",
    examples: [
      { scientificName: "Pyrostegia venusta", commonName: "bignonia de invierno" },
      { scientificName: "Bignonia callistegioides", commonName: "dama del monte" },
      { scientificName: "Handroanthus impetiginosus", commonName: "lapacho rosado" },
    ],
    quizTraits: [
      "Corola zigomorfa con cuatro estambres didinamos",
      "Hojas opuestas, a menudo compuestas, y capsula con semillas aladas",
      "Tallo cuadrangular y fruto en cuatro nueces",
      "Capitulo rodeado por un involucro de filarios",
    ],
  },
  {
    id: "lamiaceae",
    name: "Lamiaceae",
    group: "Lamiales",
    image: "/partial/lamiaceae.jpg",
    imageAlt: "Flores bilabiadas de una lamiacea",
    keyDiagnostic: "Ovario profundamente tetralobado con estilo ginobasico, que origina cuatro nueces.",
    diagnosticTraits: [
      "Corola zigomorfa, tipicamente bilabiada.",
      "Dos o cuatro estambres, cuando son cuatro suelen ser didinamos.",
      "Ovario profundamente tetralobado con estilo ginobasico; fruto en cuatro nueces.",
      "Hojas opuestas y decusadas, plantas aromaticas y tallos frecuentemente cuadrangulares.",
    ],
    lookFor: "Observar la boca bilabiada y, si hay material vegetativo, frotar suavemente una hoja y revisar la seccion del tallo.",
    confusion: "Frente a Bignoniaceae, priorizar el estilo ginobasico, las cuatro nueces y el conjunto hoja aromatica-tallo cuadrangular.",
    referenceGenera: "Mentha, Lavandula, Origanum y Ocimum.",
    examples: [
      { scientificName: "Mentha × piperita", commonName: "menta piperita" },
      { scientificName: "Ocimum basilicum", commonName: "albahaca" },
      { scientificName: "Origanum vulgare", commonName: "oregano" },
    ],
    quizTraits: [
      "Estilo ginobasico y ovario profundamente dividido en cuatro lobulos",
      "Hojas opuestas decusadas y tallo frecuentemente cuadrangular",
      "Semillas aladas dentro de una capsula alargada",
      "Cinco estambres con anteras unidas formando un tubo",
    ],
  },
  {
    id: "asteraceae",
    name: "Asteraceae (Compuestas)",
    group: "Asterales",
    image: "/partial/asteraceae.jpg",
    imageAlt: "Capitulo de girasol formado por numerosas flores",
    keyDiagnostic: "Capitulo con involucro y anteras singenesicas formando un tubo alrededor del estilo.",
    diagnosticTraits: [
      "Inflorescencia en capitulo, rodeada por un involucro de filarios.",
      "Flores tubulosas, liguladas o filiformes dispuestas sobre un receptaculo comun.",
      "Cinco anteras singenesicas, unidas en un tubo alrededor del estilo.",
      "Ovario infero unilocular; fruto cipsela, frecuentemente con papus.",
    ],
    lookFor: "No tomar el capitulo como una sola flor: separar una flor periferica o central y buscar el ovario infero y el tubo de anteras.",
    confusion: "Una cabezuela compacta no alcanza. Debe existir un receptaculo comun con muchas flores y un involucro externo.",
    referenceGenera: "Helianthus, Cichorium, Lactuca, Cynara, Taraxacum y Conyza.",
    examples: [
      { scientificName: "Helianthus annuus", commonName: "girasol" },
      { scientificName: "Lactuca sativa", commonName: "lechuga" },
      { scientificName: "Taraxacum officinale", commonName: "diente de leon" },
    ],
    quizTraits: [
      "Muchas flores reunidas en un capitulo con involucro",
      "Anteras singenesicas y fruto cipsela, a menudo con papus",
      "Espiguillas protegidas por glumas, lemma y palea",
      "Un solo carpelo libre que origina una drupa",
    ],
  },
  {
    id: "poaceae",
    name: "Poaceae (Gramineae)",
    group: "Poales",
    image: "/partial/poaceae.jpg",
    imageAlt: "Detalle de una espiguilla de poacea",
    keyDiagnostic: "Espiguilla con glumas basales y antecios protegidos por lemma y palea.",
    diagnosticTraits: [
      "Unidad de la inflorescencia: espiguilla con glumas basales.",
      "Cada antecio esta protegido por lemma y palea; el perianto se reduce a lodiculas.",
      "Generalmente tres estambres con anteras versatiles.",
      "Ovario supero, unilocular y uniovulado; estigmas plumosos; fruto cariopse.",
    ],
    lookFor: "Abrir una espiguilla y distinguir primero glumas; luego, en cada antecio, lemma y palea.",
    confusion: "Panoja o espiga describen la inflorescencia completa. La espiguilla es la unidad que confirma Poaceae.",
    referenceGenera: "Avena, Bromus, Triticum, Secale y Hordeum en la clave de cereales.",
    examples: [
      { scientificName: "Avena sativa", commonName: "avena" },
      { scientificName: "Triticum aestivum", commonName: "trigo pan" },
      { scientificName: "Hordeum vulgare", commonName: "cebada" },
    ],
    quizTraits: [
      "Flores reunidas en espiguillas con glumas basales",
      "Lemma, palea, lodiculas y estigmas plumosos",
      "Seis tepalos y gineceo con ovario infero trilocular",
      "Hipanto y numerosos estambres libres",
    ],
  },
  {
    id: "rosaceae",
    name: "Rosaceae",
    group: "Rosales",
    image: "/partial/rosaceae.jpg",
    imageAlt: "Flores de rosaceas mostrando numerosos estambres y distintos receptaculos",
    keyDiagnostic: "Hipanto asociado a numerosos estambres libres; la posicion de los carpelos separa sus grupos.",
    diagnosticTraits: [
      "Flor usualmente actinomorfa y pentamera.",
      "Estambres numerosos, generalmente libres.",
      "Presencia de hipanto; la posicion y forma del ovario varian entre grupos.",
      "Gineceo de uno a muchos carpelos, libres o soldados.",
    ],
    lookFor: "Reconocer el anillo de numerosos estambres y ubicar los carpelos respecto del hipanto: libres, soldados, en receptaculo concavo o convexo.",
    confusion: "No usar solo cinco petalos. El conjunto hipanto + numerosos estambres + arquitectura del gineceo es mucho mas informativo.",
    referenceGenera: "Prunus, Spiraea, Malus/Pyrus, Rosa y Fragaria/Rubus.",
    examples: [
      { scientificName: "Prunus persica", commonName: "duraznero" },
      { scientificName: "Malus domestica", commonName: "manzano" },
      { scientificName: "Fragaria × ananassa", commonName: "frutilla" },
    ],
    quizTraits: [
      "Numerosos estambres libres asociados a un hipanto",
      "Gineceo variable de uno a muchos carpelos",
      "Cuatro estambres didinamos y semillas aladas",
      "Tres estambres y ovario infero trilocular",
    ],
  },
  {
    id: "amaryllidoideae",
    name: "Amaryllidoideae",
    group: "Amaryllidaceae · Asparagales",
    image: "/partial/amaryllidoideae.jpg",
    imageAlt: "Flores de una amarilidoidea reunidas en umbela",
    keyDiagnostic: "Umbela protegida por espata, seis estambres y ovario infero trilocular.",
    diagnosticTraits: [
      "Seis tepalos y seis estambres.",
      "Ovario infero, tipicamente trilocular.",
      "Flores reunidas en umbela en el extremo de un escapo.",
      "Inflorescencia protegida inicialmente por una espata; bulbos tunicados.",
    ],
    lookFor: "Seguir el pedicelo hasta comprobar que el ovario queda por debajo de la insercion de los tepalos y reconocer la umbela escaposa.",
    confusion: "Dentro de Amaryllidaceae, el ovario infero la separa de Allioideae.",
    referenceGenera: "Amaryllis, Hippeastrum y Narcissus.",
    examples: [
      { scientificName: "Amaryllis belladonna", commonName: "azucena rosada" },
      { scientificName: "Hippeastrum striatum", commonName: "lirio del campo" },
      { scientificName: "Narcissus pseudonarcissus", commonName: "narciso" },
    ],
    quizTraits: [
      "Umbela terminal protegida por una espata",
      "Seis estambres y ovario infero trilocular",
      "Olor aliaceo y ovario supero",
      "Un solo estambre fertil unido al estilo en un ginostemo",
    ],
  },
  {
    id: "allioideae",
    name: "Allioideae",
    group: "Amaryllidaceae · Asparagales",
    image: "/partial/allioideae.jpg",
    imageAlt: "Umbela de flores blancas de una allioidea",
    keyDiagnostic: "Umbela con espata, ovario supero y olor aliaceo por compuestos azufrados.",
    diagnosticTraits: [
      "Seis tepalos y seis estambres.",
      "Ovario supero, tipicamente trilocular.",
      "Umbela terminal sobre un escapo, protegida inicialmente por una espata.",
      "Compuestos azufrados y olor aliaceo; bulbos tunicados.",
    ],
    lookFor: "Confirmar umbela y ovario supero; el olor a ajo o cebolla es una ayuda vegetativa muy fuerte.",
    confusion: "El nombre correcto de la subfamilia vista en la clase es Allioideae, no Aroideae. Se separa de Amaryllidoideae por el ovario supero.",
    referenceGenera: "Allium.",
    examples: [
      { scientificName: "Allium cepa", commonName: "cebolla" },
      { scientificName: "Allium sativum", commonName: "ajo" },
      { scientificName: "Allium ampeloprasum var. porrum", commonName: "puerro" },
    ],
    quizTraits: [
      "Olor aliaceo por compuestos azufrados",
      "Umbela con espata y ovario supero",
      "Ovario infero y solo tres estambres",
      "Racimo con una bractea por flor y fruto baya",
    ],
  },
  {
    id: "iridaceae",
    name: "Iridaceae",
    group: "Asparagales",
    image: "/partial/iridaceae.jpg",
    imageAlt: "Flores anaranjadas de una iridacea",
    keyDiagnostic: "Solo tres estambres opuestos a los tepalos externos, combinados con ovario infero.",
    diagnosticTraits: [
      "Seis tepalos, con frecuencia vistosos.",
      "Solo tres estambres, opuestos a los tepalos externos.",
      "Ovario infero y trilocular.",
      "Fruto capsula; hojas frecuentemente equitantes.",
    ],
    lookFor: "Contar estambres: dentro de este conjunto de Asparagales, tres estambres es la entrada mas rapida.",
    confusion: "Amaryllidoideae tambien tiene ovario infero, pero conserva seis estambres y suele presentar umbela con espata.",
    referenceGenera: "Iris, Gladiolus, Crocus y Chasmanthe.",
    examples: [
      { scientificName: "Iris germanica", commonName: "lirio comun" },
      { scientificName: "Gladiolus communis", commonName: "gladiolo" },
      { scientificName: "Crocus sativus", commonName: "azafran" },
    ],
    quizTraits: [
      "Tres estambres opuestos a los tepalos externos",
      "Ovario infero trilocular y fruto capsula",
      "Seis estambres y ovario supero con olor a ajo",
      "Anteras singenesicas alrededor del estilo",
    ],
  },
  {
    id: "asparagaceae",
    name: "Asparagaceae",
    group: "Asparagales",
    image: "/partial/asparagaceae.jpg",
    imageAlt: "Flores azules dispuestas en racimo de una asparagacea",
    keyDiagnostic: "Inflorescencia racemosa con una bractea por flor, ovario supero y fruto generalmente baya.",
    diagnosticTraits: [
      "Seis tepalos y seis estambres.",
      "Ovario supero, usualmente trilocular.",
      "Inflorescencias racemosas, con una bractea por flor.",
      "Fruto generalmente baya.",
    ],
    lookFor: "Diferenciar el racimo, donde cada flor tiene su bractea, de la umbela con espata de Amaryllidaceae.",
    confusion: "El ovario supero tambien aparece en Allioideae; revisar tipo de inflorescencia, fruto y olor aliaceo.",
    referenceGenera: "Asparagus y varios generos ornamentales incluidos en la clase.",
    examples: [
      { scientificName: "Asparagus officinalis", commonName: "esparraguera" },
      { scientificName: "Agave americana", commonName: "pita" },
      { scientificName: "Yucca gloriosa", commonName: "yuca ornamental" },
    ],
    quizTraits: [
      "Inflorescencia racemosa con una bractea por flor",
      "Seis estambres, ovario supero y fruto generalmente baya",
      "Umbela escaposa protegida por espata y olor aliaceo",
      "Corola bilabiada y estilo ginobasico",
    ],
  },
  {
    id: "orchidaceae",
    name: "Orchidaceae",
    group: "Asparagales",
    image: "/partial/orchidaceae.jpg",
    imageAlt: "Flor bilateral de orquidea con labelo destacado",
    keyDiagnostic: "Labelo y ginostemo o columna, con el polen frecuentemente reunido en polinios.",
    diagnosticTraits: [
      "Flor fuertemente zigomorfa con un tepalo modificado en labelo.",
      "Uno o dos estambres fertiles, raramente tres.",
      "Estambres, estilo y estigma fusionados en un ginostemo o columna.",
      "Ovario infero; polen frecuentemente reunido en polinios.",
    ],
    lookFor: "Identificar el labelo y la columna central. La flor puede estar resupinada, por lo que el labelo suele quedar orientado hacia abajo.",
    confusion: "La simetria bilateral por si sola no basta: labelo + ginostemo es la combinacion decisiva.",
    referenceGenera: "Vanilla y numerosos generos ornamentales.",
    examples: [
      { scientificName: "Vanilla planifolia", commonName: "vainilla" },
      { scientificName: "Phalaenopsis amabilis", commonName: "orquidea luna" },
      { scientificName: "Cattleya labiata", commonName: "cattleya" },
    ],
    quizTraits: [
      "Un tepalo diferenciado en labelo",
      "Ginostemo y ovario infero, con polen a menudo en polinios",
      "Tres estambres libres y hojas equitantes",
      "Cinco estambres epipetalos alternos con la corola",
    ],
  },
];

export const examGenera: ExamGenus[] = [
  { name: "Solanum", taxonId: "solanaceae", note: "Anteras conniventes, largas respecto de los filamentos y con dehiscencia por poros apicales." },
  { name: "Capsicum", taxonId: "solanaceae" },
  { name: "Nicotiana", taxonId: "solanaceae" },
  { name: "Datura", taxonId: "solanaceae" },
  { name: "Cestrum", taxonId: "solanaceae" },
  { name: "Jacaranda", taxonId: "bignoniaceae" },
  { name: "Handroanthus", taxonId: "bignoniaceae" },
  { name: "Bignonia", taxonId: "bignoniaceae" },
  { name: "Pyrostegia", taxonId: "bignoniaceae" },
  { name: "Mentha", taxonId: "lamiaceae" },
  { name: "Lavandula", taxonId: "lamiaceae" },
  { name: "Origanum", taxonId: "lamiaceae" },
  { name: "Ocimum", taxonId: "lamiaceae" },
  { name: "Helianthus", taxonId: "asteraceae" },
  { name: "Cichorium", taxonId: "asteraceae" },
  { name: "Lactuca", taxonId: "asteraceae" },
  { name: "Cynara", taxonId: "asteraceae" },
  { name: "Taraxacum", taxonId: "asteraceae" },
  { name: "Conyza", taxonId: "asteraceae" },
  { name: "Avena", taxonId: "poaceae", note: "Panoja laxa y glumas grandes que envuelven toda la espiguilla." },
  { name: "Bromus", taxonId: "poaceae", note: "Panoja laxa y glumas chicas que no envuelven toda la espiguilla." },
  { name: "Triticum", taxonId: "poaceae", note: "Espiga con una espiguilla pluriflora por nudo y glumas anchas y naviculares." },
  { name: "Secale", taxonId: "poaceae", note: "Espiga con una espiguilla pluriflora por nudo y glumas angostas y lineares." },
  { name: "Hordeum", taxonId: "poaceae", note: "Tres espiguillas unifloras por nudo; la fertilidad de las laterales separa cebadas de dos y seis hileras." },
  { name: "Prunus", taxonId: "rosaceae", note: "Un carpelo libre, ovario medio, placentacion marginal y fruto drupa." },
  { name: "Spiraea", taxonId: "rosaceae", note: "Cinco carpelos libres que forman cinco ovarios independientes." },
  { name: "Malus", taxonId: "rosaceae", note: "Carpelos soldados y envueltos por el hipanto; ovario infero y fruto pomo." },
  { name: "Pyrus", taxonId: "rosaceae", note: "Integra Maleae: carpelos soldados, ovario infero y fruto pomo." },
  { name: "Rosa", taxonId: "rosaceae", note: "Numerosos carpelos libres encerrados por un hipanto concavo." },
  { name: "Fragaria", taxonId: "rosaceae", note: "Numerosos carpelos libres sobre un receptaculo convexo que se vuelve carnoso." },
  { name: "Rubus", taxonId: "rosaceae", note: "Numerosos carpelos libres sobre un receptaculo convexo; fruto agregado de pequenas drupas." },
  { name: "Amaryllis", taxonId: "amaryllidoideae" },
  { name: "Hippeastrum", taxonId: "amaryllidoideae" },
  { name: "Narcissus", taxonId: "amaryllidoideae" },
  { name: "Allium", taxonId: "allioideae", note: "Hojas parcial o totalmente fistulosas; umbela protegida inicialmente por una espata y olor aliaceo." },
  { name: "Iris", taxonId: "iridaceae" },
  { name: "Gladiolus", taxonId: "iridaceae" },
  { name: "Crocus", taxonId: "iridaceae" },
  { name: "Chasmanthe", taxonId: "iridaceae" },
  { name: "Asparagus", taxonId: "asparagaceae", note: "Planta rizomatosa; los brotes jovenes constituyen los esparragos." },
  { name: "Vanilla", taxonId: "orchidaceae", note: "Orquidea trepadora; el fruto es una capsula de la que se obtiene el extracto de vainilla." },
];

export const botanicalGlossary: GlossaryEntry[] = [
  { term: "Actinomorfa", definition: "Flor con varios planos posibles de simetria." },
  { term: "Zigomorfa", definition: "Flor con un solo plano de simetria bilateral." },
  { term: "Gamopetala", definition: "Corola cuyos petalos estan soldados entre si, al menos en la base." },
  { term: "Epipetalo", definition: "Estambre inserto o unido a la corola.", aliases: ["epipetalos"] },
  { term: "Didinamos", definition: "Conjunto de cuatro estambres dispuestos en dos pares de diferente longitud." },
  { term: "Estaminodio", definition: "Estambre esteril o modificado que no produce polen funcional." },
  { term: "Ovario supero", definition: "Ovario situado por encima del punto de insercion del perianto y los estambres." },
  { term: "Ovario infero", definition: "Ovario situado por debajo del punto de insercion del perianto y los estambres." },
  { term: "Ovario medio", definition: "Ovario parcialmente rodeado por el hipanto, sin estar completamente soldado a el." },
  { term: "Placentacion axilar", definition: "Ovulos insertos en un eje central dentro de un ovario dividido en loculos." },
  { term: "Placentacion marginal", definition: "Ovulos insertos a lo largo del margen soldado de un carpelo." },
  { term: "Hipanto", definition: "Estructura en forma de copa originada por la base fusionada de piezas florales alrededor del gineceo." },
  { term: "Estilo ginobasico", definition: "Estilo que nace entre los lobulos del ovario, cerca de su base.", aliases: ["ginobasico"] },
  { term: "Capitulo", definition: "Inflorescencia con muchas flores sesiles reunidas sobre un receptaculo comun." },
  { term: "Involucro", definition: "Conjunto de bracteas que rodea una inflorescencia, como el capitulo de Asteraceae." },
  { term: "Filario", definition: "Cada una de las bracteas que forman el involucro de un capitulo.", aliases: ["filarios"] },
  { term: "Singenesicas", definition: "Anteras soldadas entre si formando un tubo alrededor del estilo." },
  { term: "Cipsela", definition: "Fruto seco, indehiscente y uniseminado derivado de un ovario infero." },
  { term: "Papus", definition: "Caliz modificado en pelos, escamas o aristas que corona la cipsela." },
  { term: "Espiguilla", definition: "Unidad basica de la inflorescencia de Poaceae, protegida en la base por glumas.", aliases: ["espiguillas"] },
  { term: "Gluma", definition: "Cada una de las bracteas basales de una espiguilla.", aliases: ["glumas"] },
  { term: "Lemma", definition: "Bractea externa que protege cada antecio de una poacea." },
  { term: "Palea", definition: "Bracteola interna que, junto con la lemma, encierra la flor de una poacea." },
  { term: "Lodicula", definition: "Pieza pequena del perianto reducido de Poaceae; al hincharse abre el antecio.", aliases: ["lodiculas"] },
  { term: "Cariopse", definition: "Fruto seco de Poaceae en el que el pericarpio esta unido a la semilla." },
  { term: "Antecio", definition: "Unidad formada por una flor de Poaceae y las bracteas que la envuelven: lemma y palea.", aliases: ["antecios"] },
  { term: "Panoja", definition: "Inflorescencia ramificada cuyos ejes laterales llevan flores o espiguillas pediceladas." },
  { term: "Raquis", definition: "Eje principal de una inflorescencia o de una hoja compuesta." },
  { term: "Navicular", definition: "Con forma de pequena nave o bote; en cereales describe glumas anchas y aquilladas.", aliases: ["naviculares"] },
  { term: "Tepalo", definition: "Pieza del perianto cuando no se diferencia claramente en sepalo y petalo.", aliases: ["tepalos"] },
  { term: "Escapo", definition: "Tallo floral generalmente sin hojas que sostiene una inflorescencia." },
  { term: "Espata", definition: "Bractea grande o conjunto de bracteas que protege una inflorescencia joven." },
  { term: "Equitante", definition: "Hoja plegada que abraza y monta parcialmente sobre la hoja siguiente.", aliases: ["equitantes"] },
  { term: "Labelo", definition: "Tepalo modificado de Orchidaceae, normalmente conspicuo y relacionado con la polinizacion." },
  { term: "Ginostemo", definition: "Columna formada por la fusion de estambres, estilo y estigma en Orchidaceae." },
  { term: "Polinio", definition: "Masa compacta de granos de polen transportada como una unidad.", aliases: ["polinios"] },
  { term: "Resupinada", definition: "Flor que gira durante su desarrollo y cambia la orientacion original de sus piezas." },
  { term: "Conniventes", definition: "Organos proximos que se tocan o convergen sin estar soldados." },
  { term: "Dehiscencia poricida", definition: "Liberacion del polen a traves de pequenos poros en la antera." },
  { term: "Drupa", definition: "Fruto carnoso con una capa interna endurecida que rodea la semilla." },
  { term: "Aquenio", definition: "Fruto seco, indehiscente y con una sola semilla no soldada al pericarpio.", aliases: ["aquenios"] },
  { term: "Pomo", definition: "Fruto en el que el hipanto carnoso envuelve al ovario, como en manzana y pera." },
  { term: "Fistulosa", definition: "Estructura cilindrica y hueca, como muchas hojas de Allium.", aliases: ["fistulosas"] },
];

export const rosaceaeStudyCards: StudyCard[] = [
  {
    id: "rosaceae-prunus",
    name: "Grupo Prunus",
    scientificName: "Prunus spp.",
    group: "Rosaceae · Amigdaloideae",
    image: "/study/rosaceae-prunus.jpg",
    imageAlt: "Corte floral de Prunus mostrando un unico carpelo dentro del hipanto",
    imageCaption: "Un solo carpelo libre dentro del hipanto.",
    keyDiagnostic: "Un unico carpelo libre que origina una drupa.",
    diagnosticTraits: [
      "Gineceo formado por un solo carpelo libre.",
      "Ovario medio con placentacion marginal y normalmente dos ovulos.",
      "Fruto drupa: los llamados frutales de carozo.",
    ],
    lookFor: "Un unico ovario en el centro de la flor y numerosos estambres alrededor.",
    confusion: "Spiraea tambien presenta carpelos libres y ovario medio, pero conserva cinco carpelos independientes.",
    examples: [
      { scientificName: "Prunus persica", commonName: "duraznero" },
      { scientificName: "Prunus domestica", commonName: "ciruelo" },
      { scientificName: "Prunus avium", commonName: "cerezo" },
    ],
  },
  {
    id: "rosaceae-spiraea",
    name: "Grupo Spiraea",
    scientificName: "Spiraea spp.",
    group: "Rosaceae · Amigdaloideae",
    image: "/study/rosaceae-spiraea.jpg",
    imageAlt: "Corte floral de Spiraea mostrando cinco carpelos libres",
    imageCaption: "Cinco ovarios independientes, uno por cada carpelo.",
    keyDiagnostic: "Cinco carpelos libres e independientes en la misma flor.",
    diagnosticTraits: [
      "Cinco carpelos libres e independientes.",
      "Cada carpelo forma su propio ovario medio.",
      "Placentacion marginal; ejemplo de clase: corona de novia.",
    ],
    lookFor: "Contar cinco ovarios separados en el centro de la misma flor.",
    confusion: "No confundir los cinco ovarios con cinco flores ni con los numerosos carpelos de Rosoideae.",
    examples: [
      { scientificName: "Spiraea cantoniensis", commonName: "corona de novia" },
      { scientificName: "Spiraea japonica", commonName: "espirea japonesa" },
      { scientificName: "Spiraea × vanhouttei", commonName: "corona de novia de Van Houtte" },
    ],
  },
  {
    id: "rosaceae-maleae",
    name: "Tribu Maleae",
    scientificName: "Malus, Pyrus y Cydonia",
    group: "Rosaceae · Amigdaloideae",
    image: "/study/rosaceae-maleae.jpg",
    imageAlt: "Corte floral de Malus mostrando el hipanto soldado a cinco carpelos",
    imageCaption: "Hipanto soldado a los carpelos: ovario infero.",
    keyDiagnostic: "Cinco carpelos soldados y completamente envueltos por el hipanto.",
    diagnosticTraits: [
      "Cinco carpelos soldados entre si.",
      "Hipanto soldado a los carpelos y ovario infero.",
      "Placentacion axilar y fruto pomo o de pepita.",
    ],
    lookFor: "Comprobar que el hipanto envuelve completamente al gineceo y que las piezas florales nacen por encima del ovario.",
    confusion: "Se separa de Spiraea porque sus carpelos no quedan libres y el ovario es infero.",
    examples: [
      { scientificName: "Malus domestica", commonName: "manzano" },
      { scientificName: "Pyrus communis", commonName: "peral" },
      { scientificName: "Cydonia oblonga", commonName: "membrillero" },
    ],
  },
  {
    id: "rosaceae-rosa",
    name: "Grupo Rosa",
    scientificName: "Rosa spp.",
    group: "Rosaceae · Rosoideae",
    image: "/study/rosaceae-rosa.jpg",
    imageAlt: "Corte floral de Rosa con numerosos carpelos dentro de un hipanto concavo",
    imageCaption: "Los carpelos quedan encerrados en un hipanto concavo.",
    keyDiagnostic: "Numerosos carpelos libres dentro de un hipanto concavo y hueco.",
    diagnosticTraits: [
      "Numerosos carpelos libres.",
      "Hipanto concavo y hueco que rodea y encierra los carpelos.",
      "Cada carpelo origina un aquenio.",
    ],
    lookFor: "Observar los carpelos dentro de una estructura concava, no sobre una superficie elevada.",
    confusion: "Fragaria y Rubus tambien tienen numerosos carpelos, pero los llevan sobre un receptaculo convexo o globoso.",
    examples: [
      { scientificName: "Rosa gallica", commonName: "rosa de Castilla" },
      { scientificName: "Rosa canina", commonName: "rosal silvestre" },
      { scientificName: "Rosa rubiginosa", commonName: "rosa mosqueta" },
    ],
  },
  {
    id: "rosaceae-fragaria-rubus",
    name: "Grupo Fragaria / Rubus",
    scientificName: "Fragaria spp. y Rubus spp.",
    group: "Rosaceae · Rosoideae",
    image: "/study/rosaceae-fragaria-rubus.jpg",
    imageAlt: "Corte floral de Fragaria con numerosos carpelos sobre un receptaculo convexo",
    imageCaption: "Los carpelos se apoyan sobre un receptaculo elevado.",
    keyDiagnostic: "Numerosos carpelos libres sobre un receptaculo convexo o globoso.",
    diagnosticTraits: [
      "Numerosos carpelos libres sobre un receptaculo convexo o globoso.",
      "Hipanto breve que no encierra los carpelos.",
      "Fragaria porta aquenios; Rubus forma un agregado de pequenas drupas.",
    ],
    lookFor: "Reconocer el receptaculo elevado que sostiene los carpelos y luego observar el tipo de fruto.",
    confusion: "En Rosa los carpelos quedan encerrados dentro de un hipanto concavo.",
    examples: [
      { scientificName: "Fragaria × ananassa", commonName: "frutilla" },
      { scientificName: "Rubus idaeus", commonName: "frambuesa" },
      { scientificName: "Rubus ulmifolius", commonName: "zarzamora" },
    ],
  },
];

export const cerealStudyCards: StudyCard[] = [
  {
    id: "cereal-avena",
    name: "Avena",
    scientificName: "Avena sativa",
    group: "Poaceae · Aveneae",
    image: "/study/cereal-avena.jpg",
    imageAlt: "Panoja de Avena sativa con espiguillas colgantes",
    imageCaption: "Panoja laxa con espiguillas colgantes y glumas grandes.",
    keyDiagnostic: "Glumas grandes que envuelven toda la espiguilla.",
    diagnosticTraits: [
      "Inflorescencia en panoja laxa.",
      "Glumas grandes que envuelven toda la espiguilla.",
      "Espiguillas pediceladas y generalmente colgantes.",
    ],
    lookFor: "Comenzar por la panoja y comparar el largo de las glumas con el conjunto de antecios.",
    confusion: "Bromus tambien forma una panoja laxa, pero sus glumas son chicas y no envuelven toda la espiguilla.",
    examples: [
      { scientificName: "Avena sativa", commonName: "avena cultivada" },
      { scientificName: "Avena byzantina", commonName: "avena roja" },
      { scientificName: "Avena fatua", commonName: "avena guacha" },
    ],
  },
  {
    id: "cereal-bromus",
    name: "Cebadilla",
    scientificName: "Bromus catharticus",
    group: "Poaceae · Bromeae",
    image: "/study/cereal-bromus.jpg",
    imageAlt: "Detalle de espiguillas plurifloras de Bromus catharticus",
    imageCaption: "Espiguillas plurifloras; los antecios sobresalen de las glumas.",
    imageCredit: "Harry Rose / Wikimedia Commons (CC BY 2.0)",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Bromus_catharticus_spikelets2_CAN_(15351511823).jpg",
    keyDiagnostic: "Glumas chicas que no envuelven toda la espiguilla.",
    diagnosticTraits: [
      "Inflorescencia en panoja laxa.",
      "Glumas chicas que no envuelven toda la espiguilla.",
      "Espiguillas plurifloras y comprimidas lateralmente.",
    ],
    lookFor: "Verificar que los antecios sobresalen claramente por encima de las glumas.",
    confusion: "En Avena las glumas son proporcionalmente grandes y abarcan la espiguilla.",
    examples: [
      { scientificName: "Bromus catharticus", commonName: "cebadilla criolla" },
      { scientificName: "Bromus hordeaceus", commonName: "cebadilla blanda" },
      { scientificName: "Bromus inermis", commonName: "bromo inerme" },
    ],
  },
  {
    id: "cereal-triticum",
    name: "Trigo pan / trigo fideo",
    scientificName: "Triticum aestivum / Triticum durum",
    group: "Poaceae · Triticeae",
    image: "/study/cereal-triticum.jpg",
    imageAlt: "Espiga de Triticum durum o trigo fideo",
    imageCaption: "Espiga de trigo fideo: una espiguilla pluriflora por nudo.",
    keyDiagnostic: "Una espiguilla pluriflora por nudo y glumas anchas y naviculares.",
    diagnosticTraits: [
      "Inflorescencia en espiga.",
      "Una espiguilla pluriflora por nudo del raquis.",
      "Glumas anchas y naviculares.",
    ],
    lookFor: "Mirar cada nudo del raquis y luego la forma ancha, aquillada o navicular de las glumas.",
    confusion: "Secale tiene la misma organizacion general, pero presenta glumas angostas y lineares.",
    examples: [
      { scientificName: "Triticum aestivum", commonName: "trigo pan" },
      { scientificName: "Triticum durum", commonName: "trigo fideo" },
      { scientificName: "Triticum monococcum", commonName: "trigo escaña" },
    ],
  },
  {
    id: "cereal-secale",
    name: "Centeno",
    scientificName: "Secale cereale",
    group: "Poaceae · Triticeae",
    image: "/study/cereal-secale.jpg",
    imageAlt: "Espigas delgadas de Secale cereale o centeno",
    imageCaption: "Centeno: espiga delgada con glumas angostas y lineares.",
    keyDiagnostic: "Una espiguilla pluriflora por nudo y glumas angostas y lineares.",
    diagnosticTraits: [
      "Inflorescencia en espiga delgada y flexible.",
      "Una espiguilla pluriflora por nudo del raquis.",
      "Glumas angostas y lineares; aristas largas y finas.",
    ],
    lookFor: "Confirmar una sola espiguilla en cada nudo y revisar que las glumas sean estrechas.",
    confusion: "Triticum posee glumas notablemente mas anchas y naviculares.",
    examples: [
      { scientificName: "Secale cereale", commonName: "centeno cultivado" },
      { scientificName: "Secale strictum", commonName: "centeno silvestre perenne" },
      { scientificName: "Secale sylvestre", commonName: "centeno silvestre anual" },
    ],
  },
  {
    id: "cereal-hordeum-six",
    name: "Cebada forrajera",
    scientificName: "Hordeum vulgare convar. vulgare",
    group: "Poaceae · Triticeae",
    image: "/study/cereal-hordeum-six.jpg",
    imageAlt: "Espigas de cebada forrajera de seis hileras",
    imageCaption: "En la cebada forrajera son fertiles las tres espiguillas de cada nudo.",
    keyDiagnostic: "Tres espiguillas unifloras fertiles por nudo, que forman seis hileras.",
    diagnosticTraits: [
      "Tres espiguillas unifloras en cada nudo.",
      "Las tres espiguillas son fertiles.",
      "Se forman seis hileras de granos; espiga densa con aristas largas.",
    ],
    lookFor: "Examinar un nudo completo y comprobar que las dos espiguillas laterales desarrollan grano.",
    confusion: "En la cebada cervecera solo la espiguilla central es fertil.",
    examples: [
      { scientificName: "Hordeum vulgare convar. vulgare", commonName: "cebada de seis hileras" },
      { scientificName: "Hordeum vulgare convar. distichon", commonName: "cebada de dos hileras" },
      { scientificName: "Hordeum murinum", commonName: "cebada ratonera" },
    ],
  },
  {
    id: "cereal-hordeum-two",
    name: "Cebada cervecera",
    scientificName: "Hordeum vulgare convar. distichon",
    group: "Poaceae · Triticeae",
    image: "/study/cereal-hordeum-two.jpg",
    imageAlt: "Espiga de cebada cervecera con las espiguillas laterales esteriles indicadas",
    imageCaption: "En la cebada cervecera solo la espiguilla central es fertil.",
    keyDiagnostic: "Solo la espiguilla central es fertil; las laterales son esteriles y quedan dos hileras.",
    diagnosticTraits: [
      "Tres espiguillas unifloras en cada nudo.",
      "Solo la espiguilla central es fertil; las laterales son esteriles y menores.",
      "Se forman dos hileras de granos y una espiga mas chata y simetrica.",
    ],
    lookFor: "Comparar la espiguilla central con las laterales en varios nudos de la espiga.",
    confusion: "En la cebada forrajera las tres espiguillas de cada nudo son fertiles.",
    examples: [
      { scientificName: "Hordeum vulgare convar. distichon", commonName: "cebada de dos hileras" },
      { scientificName: "Hordeum vulgare convar. vulgare", commonName: "cebada de seis hileras" },
      { scientificName: "Hordeum murinum", commonName: "cebada ratonera" },
    ],
  },
];

export const familyKeyStart = "habit";

export const familyKeyNodes: Record<string, KeyNode> = {
  habit: {
    id: "habit",
    prompt: "¿Las flores estan organizadas en espiguillas con glumas?",
    hint: "Busque la unidad basica, no solo si la inflorescencia parece una espiga.",
    choices: [
      { label: "Si, hay espiguillas con glumas", result: "poaceae" },
      { label: "No", next: "capitulum" },
    ],
  },
  capitulum: {
    id: "capitulum",
    prompt: "¿Muchas flores pequeñas forman un capitulo con involucro?",
    choices: [
      { label: "Si, es un capitulo", result: "asteraceae" },
      { label: "No", next: "trimerous" },
    ],
  },
  trimerous: {
    id: "trimerous",
    prompt: "¿La flor es trimera, tipicamente con seis tepalos?",
    choices: [
      { label: "Si", next: "asparagales-symmetry" },
      { label: "No, predomina el plan pentamero", next: "rosaceae" },
    ],
  },
  "asparagales-symmetry": {
    id: "asparagales-symmetry",
    prompt: "¿Es bilateral y presenta labelo y una columna central?",
    choices: [
      { label: "Si: labelo y ginostemo", result: "orchidaceae" },
      { label: "No", next: "stamens" },
    ],
  },
  stamens: {
    id: "stamens",
    prompt: "¿Tiene solamente tres estambres y ovario infero?",
    choices: [
      { label: "Si", result: "iridaceae" },
      { label: "No, tiene seis estambres", next: "asparagales-inflorescence" },
    ],
  },
  "asparagales-inflorescence": {
    id: "asparagales-inflorescence",
    prompt: "¿Las flores forman una umbela sobre un escapo, inicialmente protegida por una espata?",
    choices: [
      { label: "Si", next: "amaryllis-ovary" },
      { label: "No: racimo con una bractea por flor y fruto baya", result: "asparagaceae" },
    ],
  },
  "amaryllis-ovary": {
    id: "amaryllis-ovary",
    prompt: "¿El ovario es infero o supero?",
    choices: [
      { label: "Infero", result: "amaryllidoideae" },
      { label: "Supero, generalmente con olor aliaceo", result: "allioideae" },
    ],
  },
  rosaceae: {
    id: "rosaceae",
    prompt: "¿Presenta numerosos estambres libres asociados a un hipanto?",
    choices: [
      { label: "Si", result: "rosaceae" },
      { label: "No", next: "eudicot-symmetry" },
    ],
  },
  "eudicot-symmetry": {
    id: "eudicot-symmetry",
    prompt: "¿La corola es predominantemente actinomorfa, con cinco estambres?",
    choices: [
      { label: "Si", result: "solanaceae" },
      { label: "No, es marcadamente zigomorfa", next: "lamiales" },
    ],
  },
  lamiales: {
    id: "lamiales",
    prompt: "¿Hay estilo ginobasico, ovario tetralobado y caracteres aromaticos?",
    choices: [
      { label: "Si; hojas decusadas y tallo a menudo cuadrangular", result: "lamiaceae" },
      { label: "No; hojas a menudo compuestas y capsula con semillas aladas", result: "bignoniaceae" },
    ],
  },
};

export const rosaceaeKeyStart = "rosaceae-carpels";

export const rosaceaeKeyNodes: Record<string, KeyNode> = {
  "rosaceae-carpels": {
    id: "rosaceae-carpels",
    prompt: "¿El gineceo tiene un solo carpelo o varios?",
    hint: "Observe el centro de la flor y no confunda cada carpelo libre con una flor distinta.",
    choices: [
      { label: "Un solo carpelo libre", result: "prunus" },
      { label: "Varios carpelos", next: "rosaceae-carpel-union" },
    ],
  },
  "rosaceae-carpel-union": {
    id: "rosaceae-carpel-union",
    prompt: "¿Los carpelos estan soldados y completamente envueltos por el hipanto?",
    choices: [
      { label: "Si; el ovario es infero", result: "maleae" },
      { label: "No, los carpelos permanecen libres", next: "rosaceae-carpel-count" },
    ],
  },
  "rosaceae-carpel-count": {
    id: "rosaceae-carpel-count",
    prompt: "¿Hay cinco carpelos libres o son numerosos?",
    choices: [
      { label: "Cinco carpelos libres", result: "spiraea" },
      { label: "Numerosos carpelos libres", next: "rosaceae-receptacle" },
    ],
  },
  "rosaceae-receptacle": {
    id: "rosaceae-receptacle",
    prompt: "¿Los carpelos quedan dentro de un hipanto concavo o sobre un receptaculo convexo?",
    choices: [
      { label: "Dentro de un hipanto concavo", result: "rosa" },
      { label: "Sobre un receptaculo convexo o globoso", result: "fragaria-rubus" },
    ],
  },
};

export const rosaceaeResults: Record<string, KeyResult> = {
  prunus: {
    title: "Grupo Prunus",
    scientificName: "Prunus spp.",
    explanation: "Un carpelo libre, ovario medio, placentacion marginal y normalmente dos ovulos. El fruto es una drupa, como en duraznero, ciruelo, damasco, almendro y cerezo.",
  },
  spiraea: {
    title: "Grupo Spiraea",
    scientificName: "Spiraea spp.",
    explanation: "Cinco carpelos libres e independientes, con ovarios medios y placentacion marginal. Ejemplo de la clase: corona de novia.",
  },
  maleae: {
    title: "Tribu Maleae",
    scientificName: "Malus, Pyrus y Cydonia",
    explanation: "Carpelos soldados y completamente envueltos por el hipanto, que determina un ovario infero con placentacion axilar. Producen pomos o frutos de pepita.",
  },
  rosa: {
    title: "Grupo Rosa",
    scientificName: "Rosa spp.",
    explanation: "Numerosos carpelos libres, rodeados y encerrados por un hipanto concavo. Cada carpelo origina un aquenio.",
  },
  "fragaria-rubus": {
    title: "Grupo Fragaria / Rubus",
    scientificName: "Fragaria spp. y Rubus spp.",
    explanation: "Numerosos carpelos libres dispuestos sobre un receptaculo convexo o globoso. En Fragaria el receptaculo se vuelve carnoso y porta los aquenios; Rubus forma un agregado de pequeñas drupas.",
  },
};

export const cerealKeyStart = "cereal-inflorescence";

export const cerealKeyNodes: Record<string, KeyNode> = {
  "cereal-inflorescence": {
    id: "cereal-inflorescence",
    prompt: "¿La inflorescencia es una panoja laxa o una espiga?",
    choices: [
      { label: "Panoja laxa", next: "panicle-glumes" },
      { label: "Espiga", next: "spikelets-per-node" },
    ],
  },
  "panicle-glumes": {
    id: "panicle-glumes",
    prompt: "¿Las glumas son grandes y envuelven toda la espiguilla?",
    choices: [
      { label: "Si", result: "oat" },
      { label: "No, son chicas y no envuelven toda la espiguilla", result: "bromus" },
    ],
  },
  "spikelets-per-node": {
    id: "spikelets-per-node",
    prompt: "¿Hay una espiguilla pluriflora o tres espiguillas unifloras en cada nudo?",
    choices: [
      { label: "Una espiguilla pluriflora", next: "spike-glumes" },
      { label: "Tres espiguillas unifloras", next: "barley-fertility" },
    ],
  },
  "spike-glumes": {
    id: "spike-glumes",
    prompt: "¿Las glumas son anchas y naviculares o angostas y lineares?",
    choices: [
      { label: "Anchas y naviculares", result: "wheat" },
      { label: "Angostas y lineares", result: "rye" },
    ],
  },
  "barley-fertility": {
    id: "barley-fertility",
    prompt: "¿Las tres espiguillas de cada nudo son fertiles?",
    choices: [
      { label: "Si, las tres son fertiles", result: "six-row-barley" },
      { label: "No; la central es fertil y las laterales esteriles y menores", result: "two-row-barley" },
    ],
  },
};

export const cerealResults: Record<string, KeyResult> = {
  oat: {
    title: "Avena",
    scientificName: "Avena sativa",
    explanation: "Panoja laxa y glumas grandes que envuelven toda la espiguilla.",
  },
  bromus: {
    title: "Cebadilla",
    scientificName: "Bromus catharticus",
    explanation: "Panoja laxa y glumas chicas que no envuelven toda la espiguilla.",
  },
  wheat: {
    title: "Trigo pan / trigo fideo",
    scientificName: "Triticum aestivum / Triticum durum",
    explanation: "Espiga con una espiguilla pluriflora por nudo y glumas anchas, naviculares. La clave provista agrupa ambos trigos y no agrega un paso para separarlos. El resumen describe a T. durum con espiga compacta, glumas robustas y aristas largas y rectas.",
  },
  rye: {
    title: "Centeno",
    scientificName: "Secale cereale",
    explanation: "Espiga con una espiguilla pluriflora por nudo y glumas angostas, lineares. Suele verse delgada, flexible y con aristas largas y finas.",
  },
  "six-row-barley": {
    title: "Cebada forrajera",
    scientificName: "Hordeum vulgare convar. vulgare",
    explanation: "Tres espiguillas unifloras por nudo; las tres son fertiles y originan seis hileras de granos. La espiga suele verse densa, con aristas muy largas.",
  },
  "two-row-barley": {
    title: "Cebada cervecera",
    scientificName: "Hordeum vulgare convar. distichon",
    explanation: "Tres espiguillas unifloras por nudo; solo la central es fertil y las laterales son esteriles y mucho menores. Por eso se observan dos hileras de granos y una espiga mas chata y simetrica.",
  },
};
