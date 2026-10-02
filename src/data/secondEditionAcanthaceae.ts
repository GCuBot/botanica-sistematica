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

export const secondEditionAcanthaceaeSpecies: Record<string, Especie> = {
  ed2_stenandrium_diphyllum: species("ed2_stenandrium_diphyllum", "Stenandrium diphyllum", "Stenandrium diphyllum", "CXXXVI. Acanthaceae", "Hierba perenne pigmea con hojas en roseta, pecioladas, ovadas o elipticas, obtusas y pilosas; espiga con numerosas flores rosadas; tubo corolino breve; capsula con cuatro semillas", "Brasil, Uruguay y centro de Argentina. Rara cerca de Buenos Aires."),
  ed2_stenandrium_trinerve: species("ed2_stenandrium_trinerve", "Stenandrium trinerve", "Stenandrium trinerve", "CXXXVI. Acanthaceae", "Hierba perenne pigmea con hojas brillosas en el haz y laxamente pilosas en el enves; espiga pauciflora; flores rosadas; corola con tubo de unos 9 mm; capsula con cuatro semillas", "Uruguay y centro de Argentina. Comun en la estepa climax."),
  ed2_hygrophila_pubescens: species("ed2_hygrophila_pubescens", "Hygrophila pubescens", "Hygrophila pubescens", "CXXXVI. Acanthaceae", "Hierba perenne estolonifera, erecta o apoyante, de 40-60 cm; hojas opuestas, oblongas y enteras; flores azules o blancas en cimas verticiladas; capsula oblongo-cilindrica", "Nordeste de Argentina. Comun en el Delta y ribera platense; var. atricheta endemica del Delta."),
  ed2_dicliptera_tweediana: species("ed2_dicliptera_tweediana", "Dicliptera tweediana", "Canario rojo", "CXXXVI. Acanthaceae", "Hierba perenne glabra con tallos hexagonales apoyantes; hojas lanceoladas grandes y pecioladas; flores rojas con bracteas y bracteolas en cimas; capsula ovoide con pocas semillas", "Sur de Brasil, Uruguay y Buenos Aires. Crece junto a vias ferreas y en Delta y ribera platense."),
  ed2_poikilacanthus_tweedianus: species("ed2_poikilacanthus_tweedianus", "Poikilacanthus tweedianus", "Poikilacanthus tweedianus", "CXXXVI. Acanthaceae", "Hierba o sufrutice de altura variable, con tallos apoyantes algo pubescentes; hojas ovado-lanceoladas o lanceoladas; espigas axilares paucifloras; bracteas espatuladas; corola blanca", "Nordeste de Argentina hasta el Delta y la ribera platense."),
  ed2_justicia_campestris: species("ed2_justicia_campestris", "Justicia campestris", "Quiebrarao", "CXXXVI. Acanthaceae", "Arbusto glabro de 1-2 m; hojas lanceoladas con abundantes cistolitos; flores axilares solitarias subsesiles; corola azul o rosada; capsulas largamente pedunculadas", "Argentina. En Buenos Aires crece sobre barrancas del Parana: San Nicolas, San Pedro y Campana; buena forrajera."),
  ed2_justicia_laevilinguis: species("ed2_justicia_laevilinguis", "Justicia laevilinguis", "Justicia laevilinguis", "CXXXVI. Acanthaceae", "Hierba glabra con tallos erectos o ascendentes; hojas lineares o lanceoladas, enteras y sesiles; flores en espigas terminales y axilares; corola blanca, azul o violacea; capsulas estipadas", "America tropical. Frecuente en el Delta y ribera del Plata."),
};

export const secondEditionAcanthaceaeKeyData: Record<string, CladoNode> = {
  ed2_family_acanthaceae: node("ed2_family_acanthaceae", "CXXXVI. Acanthaceae", 572, "Cuantos estambres tiene la flor?", { label: "Cuatro", keyStep: "A", nextNodeId: "ed2_acanthaceae_four_stamens" }, { label: "Dos", keyStep: "A'", nextNodeId: "ed2_acanthaceae_two_stamens" }),
  ed2_acanthaceae_four_stamens: node("ed2_acanthaceae_four_stamens", "Acanthaceae", 573, "La planta es pigmea y acaule?", { label: "Si; hojas en roseta y anteras unitecas", keyStep: "B", nextNodeId: "ed2_stenandrium_leaves" }, { label: "No; caulescente con hojas opuestas y anteras bitecas", keyStep: "B'", especieId: "ed2_hygrophila_pubescens" }),
  ed2_stenandrium_leaves: node("ed2_stenandrium_leaves", "Stenandrium", 573, "Las hojas son densamente pilosas en el enves o brillosas en el haz?", { label: "Pecioladas, ovadas o elipticas, densamente pilosas abajo", keyStep: "A", especieId: "ed2_stenandrium_diphyllum" }, { label: "Brillosas arriba y laxamente pilosas abajo", keyStep: "A'", especieId: "ed2_stenandrium_trinerve" }),
  ed2_acanthaceae_two_stamens: node("ed2_acanthaceae_two_stamens", "Acanthaceae", 573, "Los tallos tienen seis o cuatro angulos?", { label: "Seis angulos; capsula generalmente con dos semillas pubescentes", keyStep: "C", especieId: "ed2_dicliptera_tweediana" }, { label: "Cuatro angulos", keyStep: "C'", nextNodeId: "ed2_acanthaceae_inflorescence" }),
  ed2_acanthaceae_inflorescence: node("ed2_acanthaceae_inflorescence", "Acanthaceae", 573, "Las flores estan en espigas?", { label: "Si; corola alargada y polen totalmente insulado", keyStep: "D", especieId: "ed2_poikilacanthus_tweedianus" }, { label: "Solitarias o en cimas espiciformes", keyStep: "D'", nextNodeId: "ed2_justicia_habit" }),
  ed2_justicia_habit: node("ed2_justicia_habit", "Justicia", 576, "Es arbusto o hierba?", { label: "Arbusto glabro de 1-2 m", keyStep: "A", especieId: "ed2_justicia_campestris" }, { label: "Hierba con tallos erectos o ascendentes", keyStep: "A'", especieId: "ed2_justicia_laevilinguis" }),
};
