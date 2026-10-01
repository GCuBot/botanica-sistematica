import { CladoNode, Especie } from "@/types";

function species(
  id: string,
  scientificName: string,
  commonName: string,
  family: string,
  characteristics: string,
  distribution: string
): Especie {
  return {
    id,
    nombreCientifico: scientificName,
    nombreVulgar: commonName,
    familia: family,
    descripcion: characteristics.split(";", 1)[0] + ".",
    caracteristicas: characteristics,
    distribucion: distribution,
  };
}

export const secondEditionMoraceaeCannabinaceaeUrticaceaeSpecies: Record<string, Especie> = {
  ed2_dorstenia_brasiliensis: species(
    "ed2_dorstenia_brasiliensis", "Dorstenia brasiliensis", "Higuerilla", "XLVIII. Moraceae",
    "Hierba perenne acaule y rizomatosa; hojas en roseta, ovado-cordadas y crenadas; receptaculo circular algo concavo",
    "Brasil, Paraguay, Uruguay y nordeste de Argentina; hallada cerca de Buenos Aires en la Isla Maciel."
  ),
  ed2_broussonetia_papyrifera: species(
    "ed2_broussonetia_papyrifera", "Broussonetia papyrifera", "Morera de papel", "XLVIII. Moraceae",
    "Arbol o arbusto con latex; hojas ovado-cordiformes de 5-20 cm; flores fertiles en cabezuelas y sincarpio globoso de unos 2 cm",
    "Originaria de China y Japon; cultivada en parques y a veces subespontanea."
  ),
  ed2_ficus_enormis: species(
    "ed2_ficus_enormis", "Ficus enormis", "Higueron; agarrapalo", "XLVIII. Moraceae",
    "Arbol epifito o terrestre de 10-15 m; hojas elipticas, subcoriaceas y enteras; siconos globosos cortamente pedunculados",
    "America calida hasta el Delta del Parana; epifito sobre ceibos."
  ),
  ed2_humulus_japonicus: species(
    "ed2_humulus_japonicus", "Humulus japonicus", "Lupulo japones", "XLIX. Cannabinaceae",
    "Planta voluble con hojas anchas, opuestas, palmatinervadas, aserradas o lobadas; flores femeninas pareadas en las axilas de las bracteas del amento",
    "Originaria de Japon y China; cultivada como ornamental y a menudo escapada en ambientes modificados."
  ),
  ed2_urtica_dioica: species(
    "ed2_urtica_dioica", "Urtica dioica var. mollis", "Ortiga", "L. Urticaceae",
    "Perenne dioica de 0,5-1 m, verde oscura y densamente hispida; hojas ovadas acuminadas con grandes dientes; racimos mas largos que los peciolos",
    "Originaria de Europa y adventicia en America; rara en la region."
  ),
  ed2_urtica_circularis: species(
    "ed2_urtica_circularis", "Urtica circularis", "Urtica circularis", "L. Urticaceae",
    "Anual monoica de tallos ascendentes o erectos; cistolitos bacilares; hojas flabelado-circulares profundamente dentadas; flores amontonadas en las axilas",
    "Frecuente en suelos humedos del Delta y de la ribera del Plata."
  ),
  ed2_urtica_urens: species(
    "ed2_urtica_urens", "Urtica urens", "Ortiga", "L. Urticaceae",
    "Anual monoica de 20-60 cm, verde oscura y erizada; cistolitos puntiformes; hojas ovadas o elipticas profundamente dentadas y flores en racimos cortos",
    "Originaria de Europa y adventicia en todo el globo; comun en suelos modificados al comienzo de la primavera."
  ),
  ed2_urtica_spathulata: species(
    "ed2_urtica_spathulata", "Urtica spathulata", "Ortiga crespa", "L. Urticaceae",
    "Anual monoica con cistolitos puntiformes; hojas flabeladas dentadas; flores en glomerulos axilares y perianto femenino sin pelos urticantes",
    "Sudamerica; en suelos modificados."
  ),
  ed2_parietaria_debilis: species(
    "ed2_parietaria_debilis", "Parietaria debilis", "Parietaria debilis", "L. Urticaceae",
    "Anual pubescente de 10-20 cm con tallos tendidos o ascendentes muy debiles; hojas pequenas; perianto femenino con pelos ganchudos",
    "Cosmopolita; frecuente en suelos modificados al comienzo de la primavera."
  ),
  ed2_parietaria_officinalis: species(
    "ed2_parietaria_officinalis", "Parietaria officinalis", "Parietaria officinalis", "L. Urticaceae",
    "Perenne de tallos ascendentes de 30-40 cm; hojas de 4-6 cm; perianto femenino acrescente y pubescente",
    "Cosmopolita; comun en jardines y muros viejos durante la primavera."
  ),
  ed2_boehmeria_cylindrica: species(
    "ed2_boehmeria_cylindrica", "Boehmeria cylindrica", "Boehmeria cylindrica", "L. Urticaceae",
    "Perenne dioica erecta de 0,5-1 m sin pelos urticantes; hojas opuestas ovado-lanceoladas y aserradas; glomerulos en falsas espigas",
    "America; frecuente en bosques del Delta y de la ribera platense."
  ),
};

function singleSpeciesNode(id: string, milestone: string, manualPage: number, speciesId: string, scientificName: string): CladoNode {
  return {
    id, milestone, manualPage,
    descripcion: `${milestone}: unica especie tratada para la region.`,
    opcionA: { label: `Identificar como ${scientificName}`, keyStep: "1", especieId: speciesId },
    opcionA_prima: { label: `Identificar como ${scientificName}`, keyStep: "1", especieId: speciesId },
  };
}

export const secondEditionMoraceaeCannabinaceaeUrticaceaeKeyData: Record<string, CladoNode> = {
  ed2_family_moraceae: {
    id: "ed2_family_moraceae", milestone: "Moraceae", manualPage: 222,
    descripcion: "¿La planta es una hierba baja o una planta lenosa?",
    opcionA: { label: "Hierba baja; inflorescencias en capitulos", keyStep: "A", especieId: "ed2_dorstenia_brasiliensis" },
    opcionA_prima: { label: "Arbol, arbusto o arbusto trepador", keyStep: "A'", nextNodeId: "ed2_moraceae_inflorescence" },
  },
  ed2_moraceae_inflorescence: {
    id: "ed2_moraceae_inflorescence", milestone: "Moraceae: inflorescencia", manualPage: 222,
    descripcion: "¿Las flores son externas o estan encerradas en un sicono?",
    opcionA: { label: "Externas; flores fertiles en cabezuelas que forman un sincarpio", keyStep: "B", especieId: "ed2_broussonetia_papyrifera" },
    opcionA_prima: { label: "Encerradas en un receptaculo carnoso o sicono", keyStep: "B'", especieId: "ed2_ficus_enormis" },
  },
  ed2_family_cannabinaceae: singleSpeciesNode(
    "ed2_family_cannabinaceae", "Cannabinaceae", 225, "ed2_humulus_japonicus", "Humulus japonicus"
  ),
  ed2_family_urticaceae: {
    id: "ed2_family_urticaceae", milestone: "Urticaceae", manualPage: 226,
    descripcion: "¿La planta posee pelos urticantes?",
    opcionA: { label: "Si", keyStep: "A", nextNodeId: "ed2_urtica" },
    opcionA_prima: { label: "No", keyStep: "A'", nextNodeId: "ed2_urticaceae_leaves" },
  },
  ed2_urticaceae_leaves: {
    id: "ed2_urticaceae_leaves", milestone: "Urticaceae: hojas", manualPage: 226,
    descripcion: "¿Las hojas son enteras y al menos en parte alternas o son opuestas y dentadas?",
    opcionA: { label: "Alternas o alternas y opuestas, enteras", keyStep: "B", nextNodeId: "ed2_parietaria" },
    opcionA_prima: { label: "Opuestas y dentadas", keyStep: "B'", especieId: "ed2_boehmeria_cylindrica" },
  },
  ed2_urtica: {
    id: "ed2_urtica", milestone: "Urtica", manualPage: 226,
    descripcion: "¿La planta es perenne y dioica o anual y monoica?",
    opcionA: { label: "Perenne y dioica; hojas ovadas con grandes dientes", keyStep: "A", especieId: "ed2_urtica_dioica" },
    opcionA_prima: { label: "Anual y monoica", keyStep: "A'", nextNodeId: "ed2_urtica_cystoliths" },
  },
  ed2_urtica_cystoliths: {
    id: "ed2_urtica_cystoliths", milestone: "Urtica: cistolitos", manualPage: 226,
    descripcion: "¿Los cistolitos epidermicos son bacilares o puntiformes?",
    opcionA: { label: "Alargados y bacilares; hojas flabelado-circulares", keyStep: "B", especieId: "ed2_urtica_circularis" },
    opcionA_prima: { label: "Puntiformes", keyStep: "B'", nextNodeId: "ed2_urtica_leaf_shape" },
  },
  ed2_urtica_leaf_shape: {
    id: "ed2_urtica_leaf_shape", milestone: "Urtica: hojas", manualPage: 226,
    descripcion: "¿Las hojas son ovadas o flabeladas?",
    opcionA: { label: "Ovadas o elipticas; flores en racimos y perianto con algun pelo urticante", keyStep: "C", especieId: "ed2_urtica_urens" },
    opcionA_prima: { label: "Flabeladas; flores en glomerulos y perianto femenino sin pelos urticantes", keyStep: "C'", especieId: "ed2_urtica_spathulata" },
  },
  ed2_parietaria: {
    id: "ed2_parietaria", milestone: "Parietaria", manualPage: 227,
    descripcion: "¿La planta es anual y pequena o perenne y de mayor porte?",
    opcionA: { label: "Anual pubescente de 10-20 cm; perianto femenino con pelos ganchudos", keyStep: "A", especieId: "ed2_parietaria_debilis" },
    opcionA_prima: { label: "Perenne de 30-40 cm; perianto femenino acrescente y pubescente", keyStep: "A'", especieId: "ed2_parietaria_officinalis" },
  },
};
