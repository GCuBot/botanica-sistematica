import { CladoNode, Especie } from "@/types";

function species(id: string, scientificName: string, commonName: string, family: string, characteristics: string, distribution: string): Especie {
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

function node(id: string, milestone: string, page: number, descripcion: string, a: CladoNode["opcionA"], b: CladoNode["opcionA_prima"]): CladoNode {
  return { id, milestone, manualPage: page, descripcion, opcionA: a, opcionA_prima: b };
}

export const secondEditionBignoniaceaeToLentibulariaceaeSpecies: Record<string, Especie> = {
  ed2_clytostoma_callistegioides: species("ed2_clytostoma_callistegioides", "Clytostoma callistegioides", "Dama del monte", "CXXXIII. Bignoniaceae", "Liana robusta de hojas persistentes, bifolioladas, con foliolos elipticos enteros y zarcillo simple; flores lilacinas grandes en fasciculos terminales; capsula elipsoide densamente erizada", "America subtropical. Frecuente en Delta y bosques de la ribera platense hasta Punta Lara."),
  ed2_macfadyena_unguis_cati: species("ed2_macfadyena_unguis_cati", "Macfadyena unguis-cati", "Una de gato", "CXXXIII. Bignoniaceae", "Liana con zarcillos trigarfios, flores amarillas y caliz acampanado irregularmente crenado; fruto comprimido de valvas paralelas", "America tropical, desde Mexico al norte de Argentina. Comun en selvas del Delta y ribera; cultivada ornamental."),
  ed2_macfadyena_dentata: species("ed2_macfadyena_dentata", "Macfadyena dentata", "Una de gato", "CXXXIII. Bignoniaceae", "Liana con zarcillos trigarfios, flores amarillas y caliz espataceo con diente dorsal incurvo; fruto comprimido con semillas bialadas", "America tropical. Rara en el Delta."),
  ed2_ibicella_lutea: species("ed2_ibicella_lutea", "Ibicella lutea", "Cuerno del diablo", "CXXXIV. Martiniaceae", "Hierba glandulosa con tallos ascendentes de 30-70 cm; hojas opuestas, largamente pecioladas, orbiculares o acorazonadas y dentadas; flores amarillas en racimos erectos; fruto con endocarpo de dos cuernos curvos", "Sur de Brasil, Paraguay, Uruguay y norte y centro de Argentina. Comun en campos secos."),
  ed2_utricularia_platensis: species("ed2_utricularia_platensis", "Utricularia platensis", "Utricularia platensis", "CXXXV. Lentibulariaceae", "Hierba perenne acuatica flotante, sin raices, con hojas sumergidas plumosas provistas de utriculos y hojas superiores en verticilo flotador; escapo floral erecto, 3-5-floro; corola amarilla", "Region atlantica de America desde Estados Unidos hasta el nordeste de Argentina. Frecuente en zanjas, lagunas y charcas de Buenos Aires."),
  ed2_utricularia_gibba: species("ed2_utricularia_gibba", "Utricularia gibba", "Utricularia gibba", "CXXXV. Lentibulariaceae", "Hierba perenne acuatica semifija o flotante, con estolones filiformes; hojas filiformes con utriculos en las bifurcaciones; escapo floral corto, 2-3-floro; corola amarilla con espolon conico", "Pantropical. Muy rara en lagunas de la provincia de Buenos Aires."),
};

export const secondEditionBignoniaceaeToLentibulariaceaeKeyData: Record<string, CladoNode> = {
  ed2_family_bignoniaceae: node("ed2_family_bignoniaceae", "CXXXIII. Bignoniaceae", 567, "Los zarcillos son simples o trigarfios?", { label: "Simples; flores lilacinas", keyStep: "A", especieId: "ed2_clytostoma_callistegioides" }, { label: "Trigarfios; flores amarillas", keyStep: "A'", nextNodeId: "ed2_macfadyena_calyx" }),
  ed2_macfadyena_calyx: node("ed2_macfadyena_calyx", "Macfadyena", 568, "Como es el caliz?", { label: "Acampanado, irregularmente crenado", keyStep: "A", especieId: "ed2_macfadyena_unguis_cati" }, { label: "Espataceo, con diente dorsal incurvo", keyStep: "A'", especieId: "ed2_macfadyena_dentata" }),
  ed2_family_martiniaceae: node("ed2_family_martiniaceae", "CXXXIV. Martiniaceae", 569, "Identificar como Ibicella lutea", { label: "Hierba glanduloso-pubescente con fruto de cuernos largos", keyStep: "1", especieId: "ed2_ibicella_lutea" }, { label: "Hierba glanduloso-pubescente con fruto de cuernos largos", keyStep: "1", especieId: "ed2_ibicella_lutea" }),
  ed2_family_lentibulariaceae: node("ed2_family_lentibulariaceae", "CXXXV. Lentibulariaceae", 570, "El escapo floral es largo y reflejo con verticilo de flotadores?", { label: "Si; planta acuatica flotante libre con hojas plumosas", keyStep: "A", especieId: "ed2_utricularia_platensis" }, { label: "No; escapo corto sin verticilo de flotadores", keyStep: "A'", especieId: "ed2_utricularia_gibba" }),
};
