import { CladoNode, Especie } from "@/types";

function species(
  id: string,
  scientificName: string,
  description: string,
  characteristics: string,
  distribution: string,
  commonName = scientificName
): Especie {
  return {
    id,
    nombreCientifico: scientificName,
    nombreVulgar: commonName,
    familia: "VIII. Adiantaceae",
    descripcion: description,
    caracteristicas: characteristics,
    distribucion: distribution,
  };
}

export const secondEditionAdiantaceaeSpecies: Record<string, Especie> = {
  ed2_trismeria_trifoliata: species(
    "ed2_trismeria_trifoliata",
    "Trismeria trifoliata",
    "Helecho robusto, de cerca de 1 m, con rizoma corto y erecto.",
    "Frondes bipinnadas; cada pinna se divide en tres segmentos enteros y las pínnulas fértiles son lineares y muy contraídas.",
    "América cálida, hasta las islas arenosas del Delta del Paraná."
  ),
  ed2_anogramma_chaerophylla: species(
    "ed2_anogramma_chaerophylla",
    "Anogramma chaerophylla",
    "Hierba perenne, delicada y casi glabra, con rizoma corto.",
    "Frondes de contorno ovado, largamente pecioladas y divididas cuatro o más veces; soros sobre la porción media de las nervaduras.",
    "América tropical y Antillas; Delta y selva marginal de la ribera del Plata."
  ),
  ed2_adiantum_chilense: species(
    "ed2_adiantum_chilense",
    "Adiantum chilense",
    "Helecho delicado con rizoma cilíndrico rastrero y frondes de 10-45 cm.",
    "Pínnulas semicirculares, truncadas en la base; pecíolos pardo-violados lustrosos e indusio semilunar.",
    "América austral; hallado en las sierras de Balcarce."
  ),
  ed2_adiantum_raddianum: species(
    "ed2_adiantum_raddianum",
    "Adiantum raddianum",
    "Helecho delicado de rizoma corto; el manual también cita el sinónimo Adiantum cuneatum.",
    "Frondes glabras y tripinnadas; pínnulas romboidales de base cuneada, palmatilobadas, con indusio reniforme casi circular.",
    "América del Sur, hasta la ribera del Plata y las sierras de Tandil y Ventana.",
    "Culantrillo"
  ),
  ed2_adiantopsis_chlorophylla: species(
    "ed2_adiantopsis_chlorophylla",
    "Adiantopsis chlorophylla",
    "Helecho con frondes de hasta 70 cm y raquis castaño.",
    "Lámina tripinnada con pínnulas oblongas, pequeñas y glabras; soros redondeados en los extremos de las nervaduras.",
    "América tropical y subtropical, hasta el Delta del Paraná."
  ),
  ed2_doryopteris_triphylla: species(
    "ed2_doryopteris_triphylla",
    "Doryopteris triphylla",
    "Helecho saxícola con rizoma escamoso y frondes tripalmadas.",
    "Tres, raramente cinco, pinnas lanceoladas, iguales, de ápice agudo y borde crenado.",
    "Sur del Brasil, Uruguay y norte de la Argentina; sierras de Tandil y Ventana."
  ),
  ed2_doryopteris_concolor: species(
    "ed2_doryopteris_concolor",
    "Doryopteris concolor",
    "Helecho de rizoma erguido cubierto de escamas pardas.",
    "Frondes palmaticompuestas con unas ocho pinnas bipinnatisectas y pecíolo rojo-violado a negro.",
    "Regiones pantropicales; norte argentino e isla Martín García."
  ),
  ed2_pteris_longifolia: species(
    "ed2_pteris_longifolia",
    "Pteris longifolia",
    "Helecho de frondes glabras, simplemente pinnadas, de hasta 90 cm.",
    "Rizoma y pecíolo escamosos; pinnas lanceoladas auriculadas en la base, con la terminal más larga.",
    "Cosmopolita; subespontáneo en la Argentina sobre muros viejos y húmedos."
  ),
  ed2_pteris_multifida: species(
    "ed2_pteris_multifida",
    "Pteris multifida",
    "Helecho de frondes glabras de hasta 50 cm.",
    "Raquis alado y decurrente entre las pinnas; pinnas lineares, agudas, enteras o lobuladas.",
    "Asia; subespontáneo en la Argentina sobre suelo o muros viejos."
  ),
  ed2_pteris_cretica: species(
    "ed2_pteris_cretica",
    "Pteris cretica",
    "Helecho de frondes de hasta 70 cm.",
    "Raquis no alado; pinnas superiores enteras e inferiores bífidas o trífidas, lanceoladas y aserradas.",
    "Regiones tropicales; raro subespontáneo y frecuentemente cultivado en la Argentina."
  ),
  ed2_cheilanthes_marginata: species(
    "ed2_cheilanthes_marginata",
    "Cheilanthes marginata var. gracilis",
    "Helecho pequeño, con frondes de 5-15 cm.",
    "Frondes glabras y tripinnadas; pínnulas oblongo-elípticas, simples o divididas en dos a cinco lóbulos.",
    "América del Sur cálida; frecuente en las sierras bonaerenses."
  ),
  ed2_cheilanthes_micropteris: species(
    "ed2_cheilanthes_micropteris",
    "Cheilanthes micropteris",
    "Helecho pequeño, con frondes de hasta 14 cm.",
    "Frondes unipinnadas; pinnas redondeadas, crenadas, cortamente pecioladas y con pelos glandulares en ambas caras.",
    "América cálida; frecuente en las sierras bonaerenses."
  ),
  ed2_cheilanthes_myriophylla: species(
    "ed2_cheilanthes_myriophylla",
    "Cheilanthes myriophylla",
    "Helecho de frondes de 15-35 cm.",
    "Frondes tripinnadas, escamosas en una cara y pilosas en la otra; pínnulas divididas en tres a cinco segmentos subglobosos.",
    "América cálida; sierras de Balcarce y Ventana."
  ),
  ed2_pellaea_ternifolia: species(
    "ed2_pellaea_ternifolia",
    "Pellaea ternifolia",
    "Helecho terrestre de 12-35 cm, con rizoma corto y ramificaciones bulbiformes.",
    "Frondes glabras con pinnas divididas en tres pínnulas linear-lanceoladas de ápice mucronado; margen revoluto continuo.",
    "América cálida; entre rocas en las sierras bonaerenses."
  ),
};

export const secondEditionAdiantaceaeKeyData: Record<string, CladoNode> = {
  ed2_family_adiantaceae: {
    id: "ed2_family_adiantaceae",
    milestone: "Adiantaceae",
    manualPage: 29,
    descripcion: "¿Los soros son superficiales o marginales y cubiertos por el borde revoluto?",
    opcionA: { label: "Superficiales, sin indusio; cubren parcial o totalmente el envés", keyStep: "A", nextNodeId: "ed2_adiantaceae_superficial" },
    opcionA_prima: { label: "Marginales o submarginales; cubiertos por el borde revoluto", keyStep: "A'", nextNodeId: "ed2_adiantaceae_marginal" },
  },
  ed2_adiantaceae_superficial: {
    id: "ed2_adiantaceae_superficial",
    milestone: "Adiantaceae: soros superficiales",
    manualPage: 29,
    descripcion: "¿Cómo se dividen las pinnas y dónde se ubican los soros?",
    opcionA: { label: "Cada pinna con tres pínnulas lanceoladas enteras; soros cubriendo las nervaduras secundarias", keyStep: "B", especieId: "ed2_trismeria_trifoliata" },
    opcionA_prima: { label: "Pinnas pinnaticompuestas; pínnulas flabeladas o cuneadas; soros en la porción media de las nervaduras", keyStep: "B'", especieId: "ed2_anogramma_chaerophylla" },
  },
  ed2_adiantaceae_marginal: {
    id: "ed2_adiantaceae_marginal",
    milestone: "Adiantaceae: soros marginales",
    manualPage: 29,
    descripcion: "¿Los soros son aislados o continuos?",
    opcionA: { label: "Aislados, circulares u oblongos", keyStep: "C", nextNodeId: "ed2_adiantaceae_isolated" },
    opcionA_prima: { label: "Continuos o contiguos", keyStep: "C'", nextNodeId: "ed2_adiantaceae_continuous" },
  },
  ed2_adiantaceae_isolated: {
    id: "ed2_adiantaceae_isolated",
    milestone: "Adiantaceae: soros aislados",
    manualPage: 29,
    descripcion: "¿Las pínnulas son cuneiformes o pinnatipartidas?",
    opcionA: { label: "Cuneiformes o flabeladas, palmatilobadas; soros sobre el margen revoluto", keyStep: "D", nextNodeId: "ed2_adiantum" },
    opcionA_prima: { label: "Oblongas y pinnatipartidas; soros en los extremos de las nervaduras", keyStep: "D'", especieId: "ed2_adiantopsis_chlorophylla" },
  },
  ed2_adiantaceae_continuous: {
    id: "ed2_adiantaceae_continuous",
    milestone: "Adiantaceae: soros continuos",
    manualPage: 29,
    descripcion: "¿Las frondes son palmaticompuestas o pinnaticompuestas?",
    opcionA: { label: "Palmaticompuestas, con pinnas enteras o pinnatisectas", keyStep: "E", nextNodeId: "ed2_doryopteris" },
    opcionA_prima: { label: "Pinnaticompuestas", keyStep: "E'", nextNodeId: "ed2_adiantaceae_pinnaticomposed" },
  },
  ed2_adiantaceae_pinnaticomposed: {
    id: "ed2_adiantaceae_pinnaticomposed",
    milestone: "Adiantaceae: frondes pinnaticompuestas",
    manualPage: 29,
    descripcion: "¿Las pinnas son largas, lineares y enteras o son pequeñas y compuestas?",
    opcionA: { label: "Lineal-lanceoladas, enteras o furcadas, de más de 5 cm", keyStep: "F", nextNodeId: "ed2_pteris" },
    opcionA_prima: { label: "Más pequeñas y compuestas", keyStep: "F'", nextNodeId: "ed2_adiantaceae_small_pinnae" },
  },
  ed2_adiantaceae_small_pinnae: {
    id: "ed2_adiantaceae_small_pinnae",
    milestone: "Adiantaceae: pinnas pequeñas",
    manualPage: 29,
    descripcion: "¿La fronde es pilosa o escamosa?",
    opcionA: { label: "Pilosa o escamosa; margen revoluto interrumpido", keyStep: "G", nextNodeId: "ed2_cheilanthes" },
    opcionA_prima: { label: "Glabra; margen revoluto continuo", keyStep: "G'", especieId: "ed2_pellaea_ternifolia" },
  },
  ed2_adiantum: {
    id: "ed2_adiantum",
    milestone: "Adiantum",
    manualPage: 30,
    descripcion: "¿Qué forma tienen las pínnulas y el falso indusio?",
    opcionA: { label: "Pínnulas semicirculares, truncadas en la base; indusio semilunar", keyStep: "A", especieId: "ed2_adiantum_chilense" },
    opcionA_prima: { label: "Pínnulas romboidales, de base cuneada; indusio casi circular", keyStep: "A'", especieId: "ed2_adiantum_raddianum" },
  },
  ed2_doryopteris: {
    id: "ed2_doryopteris",
    milestone: "Doryopteris",
    manualPage: 32,
    descripcion: "¿Cuántas pinnas componen la fronde?",
    opcionA: { label: "Tres, raramente cinco, pinnas lanceoladas y crenadas", keyStep: "A", especieId: "ed2_doryopteris_triphylla" },
    opcionA_prima: { label: "Unas ocho pinnas bipinnatisectas", keyStep: "A'", especieId: "ed2_doryopteris_concolor" },
  },
  ed2_pteris: {
    id: "ed2_pteris",
    milestone: "Pteris",
    manualPage: 32,
    descripcion: "¿El rizoma y el pecíolo poseen escamas?",
    opcionA: { label: "Con escamas sobre protuberancias; frondes simplemente pinnadas y pinnas auriculadas", keyStep: "A", especieId: "ed2_pteris_longifolia" },
    opcionA_prima: { label: "Sin escamas; frondes furcado-pinnadas", keyStep: "A'", nextNodeId: "ed2_pteris_rachis" },
  },
  ed2_pteris_rachis: {
    id: "ed2_pteris_rachis",
    milestone: "Pteris: raquis",
    manualPage: 32,
    descripcion: "¿El raquis es alado entre las pinnas?",
    opcionA: { label: "Alado y decurrente; pinnas lineares enteras o lobuladas", keyStep: "B", especieId: "ed2_pteris_multifida" },
    opcionA_prima: { label: "No alado; pinnas superiores enteras e inferiores bífidas o trífidas", keyStep: "B'", especieId: "ed2_pteris_cretica" },
  },
  ed2_cheilanthes: {
    id: "ed2_cheilanthes",
    milestone: "Cheilanthes",
    manualPage: 33,
    descripcion: "¿Las frondes son glabras, pilosas o escamosas?",
    opcionA: { label: "Glabras, tripinnadas, con pínnulas oblongo-elípticas", keyStep: "A", especieId: "ed2_cheilanthes_marginata" },
    opcionA_prima: { label: "Pilosas o escamosas", keyStep: "A'", nextNodeId: "ed2_cheilanthes_indument" },
  },
  ed2_cheilanthes_indument: {
    id: "ed2_cheilanthes_indument",
    milestone: "Cheilanthes: indumento",
    manualPage: 33,
    descripcion: "¿Las frondes son unipinnadas o tripinnadas?",
    opcionA: { label: "Unipinnadas, con pelos glandulares y pinnas redondeadas", keyStep: "B", especieId: "ed2_cheilanthes_micropteris" },
    opcionA_prima: { label: "Tripinnadas, con escamas en una cara y pelos en la otra; pínnulas ovadas", keyStep: "B'", especieId: "ed2_cheilanthes_myriophylla" },
  },
};
