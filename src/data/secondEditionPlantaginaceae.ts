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

export const secondEditionPlantaginaceaeSpecies: Record<string, Especie> = {
  ed2_plantago_major: species("ed2_plantago_major", "Plantago major", "Llanten", "CXXXVII. Plantaginaceae", "Hierba rizomatosa, glabra o algo pubescente; hojas largamente pecioladas, ovadas, sinuadas o dentadas; espigas densas; semillas numerosas", "Europa; adventicia en America. En suelos modificados."),
  ed2_plantago_heterophylla: species("ed2_plantago_heterophylla", "Plantago heterophylla", "Plantago heterophylla", "CXXXVII. Plantaginaceae", "Hierba anual pigmea con hojas lineales, enteras o apenas dentadas; espigas laxas; dos estambres; semillas numerosas", "Estados Unidos. Rara en campos humedos de La Plata."),
  ed2_plantago_lanceolata: species("ed2_plantago_lanceolata", "Plantago lanceolata", "Llanten", "CXXXVII. Plantaginaceae", "Hierba perenne cortamente rizomatosa, glabra o apenas pubescente; hojas lanceoladas, enteras, generalmente con cinco nervaduras; espigas cortas y densas; dos semillas", "Europa; adventicia en America. Medicinal; frecuente en suelos humedos."),
  ed2_plantago_patagonica: species("ed2_plantago_patagonica", "Plantago patagonica", "Plantago patagonica", "CXXXVII. Plantaginaceae", "Hierba anual densamente sericeo-pubescente, con hojas lineares; flores en espigas densas; dos semillas", "Centro y sur de Argentina, en suelos arenosos. Frecuente en dunas de Monte Veloz y Junin."),
  ed2_plantago_penantha: species("ed2_plantago_penantha", "Plantago penantha", "Plantago penantha", "CXXXVII. Plantaginaceae", "Hierba anual glabrescente, con hojas lanceoladas, sinuado-dentadas; espigas densas; dos semillas", "Uruguay y este de Argentina. En campos humedos de San Antonio de Areco, Boulogne y alrededores."),
  ed2_plantago_dielsiana: species("ed2_plantago_dielsiana", "Plantago dielsiana", "Plantago dielsiana", "CXXXVII. Plantaginaceae", "Hierba perenne con raiz napiforme, hojas arrosetadas, glabras, lanceoladas y sinuado-dentadas; semilla solitaria", "Sur de Uruguay y region de los cerros de Tandil, en la provincia de Buenos Aires."),
  ed2_plantago_brasiliensis: species("ed2_plantago_brasiliensis", "Plantago brasiliensis", "Plantago brasiliensis", "CXXXVII. Plantaginaceae", "Sufrutice con tallos lenosos ramosos y hojas amontonadas, lineares y pubescentes; espigas cortas y densas; dos semillas", "Sur de Brasil, Uruguay y nordeste de Argentina. Sierras de Tandil y Balcarce; var. tandilensis con hojas estrechas y espigas muy cortas."),
  ed2_plantago_myosuros: species("ed2_plantago_myosuros", "Plantago myosuros", "Plantago myosuros", "CXXXVII. Plantaginaceae", "Hierba anual con hojas lanceoladas, sinuado-dentadas y velludas o raramente glabrescentes; escapos mas largos que las hojas; espigas densas; semillas punteadas", "America del Sur. Frecuente en la estepa climax."),
  ed2_plantago_australis: species("ed2_plantago_australis", "Plantago australis", "Llanten", "CXXXVII. Plantaginaceae", "Hierba perenne con raiz primaria corta oculta por raices fasciculadas; hojas largamente pecioladas, eliptico-lanceoladas y sinuado-dentadas; espigas largas y densas", "America, desde el sur de Estados Unidos a Patagonia. Frecuente en suelos humedos."),
  ed2_plantago_tomentosa: species("ed2_plantago_tomentosa", "Plantago tomentosa", "Llanten", "CXXXVII. Plantaginaceae", "Hierba perenne con raiz fusiforme poco engrosada; hojas elipticas y velludas; semillas rugosas", "America austral. Comun en la estepa climax."),
  ed2_plantago_berroi: species("ed2_plantago_berroi", "Plantago berroi", "Llanten", "CXXXVII. Plantaginaceae", "Hierba perenne con raiz napiforme muy engrosada; hojas elipticas y velludas; semillas punteadas", "Sierras del Uruguay y de Buenos Aires. Tambien en estepa climax en Pergamino."),
};

export const secondEditionPlantaginaceaeKeyData: Record<string, CladoNode> = {
  ed2_family_plantaginaceae: node("ed2_family_plantaginaceae", "CXXXVII. Plantaginaceae", 576, "Cuantas semillas tiene el fruto?", { label: "Seis a numerosas", keyStep: "A", nextNodeId: "ed2_plantago_many_seeds" }, { label: "Una a cuatro", keyStep: "A'", nextNodeId: "ed2_plantago_few_seeds" }),
  ed2_plantago_many_seeds: node("ed2_plantago_many_seeds", "Plantago", 577, "La planta es rizomatosa grande o anual pigmea?", { label: "Rizomatosa, con hojas ovadas pecioladas y espigas densas", keyStep: "B", especieId: "ed2_plantago_major" }, { label: "Anual pigmea, con hojas lineales y espigas laxas", keyStep: "B'", especieId: "ed2_plantago_heterophylla" }),
  ed2_plantago_few_seeds: node("ed2_plantago_few_seeds", "Plantago", 577, "Los sepalos anteriores estan unidos?", { label: "Si; semillas 2 y hojas lanceoladas de cinco nervaduras", keyStep: "C", especieId: "ed2_plantago_lanceolata" }, { label: "No; sepalos anteriores libres", keyStep: "C'", nextNodeId: "ed2_plantago_seed_count" }),
  ed2_plantago_seed_count: node("ed2_plantago_seed_count", "Plantago", 577, "Tiene 1-2 semillas o 3-4?", { label: "Una o dos semillas", keyStep: "D", nextNodeId: "ed2_plantago_one_two_seeds" }, { label: "Tres o cuatro semillas", keyStep: "D'", nextNodeId: "ed2_plantago_three_four_seeds" }),
  ed2_plantago_one_two_seeds: node("ed2_plantago_one_two_seeds", "Plantago", 577, "Es anual con raiz delgada o perenne con raices gruesas?", { label: "Anual, raiz delgada", keyStep: "E", nextNodeId: "ed2_plantago_annual_hairs" }, { label: "Perenne, raices gruesas", keyStep: "E'", nextNodeId: "ed2_plantago_perennial_root" }),
  ed2_plantago_annual_hairs: node("ed2_plantago_annual_hairs", "Plantago", 577, "La hierba es sericeo-pubescente o glabrescente?", { label: "Densamente sericeo-pubescente, hojas lineares", keyStep: "F", especieId: "ed2_plantago_patagonica" }, { label: "Glabrescente, hojas lanceoladas sinuado-dentadas", keyStep: "F'", especieId: "ed2_plantago_penantha" }),
  ed2_plantago_perennial_root: node("ed2_plantago_perennial_root", "Plantago", 577, "Tiene raiz napiforme y hojas arrosetadas o tallos lenosos?", { label: "Raiz napiforme; hojas arrosetadas", keyStep: "G", especieId: "ed2_plantago_dielsiana" }, { label: "Sufrutice lenoso con hojas amontonadas", keyStep: "G'", especieId: "ed2_plantago_brasiliensis" }),
  ed2_plantago_three_four_seeds: node("ed2_plantago_three_four_seeds", "Plantago", 577, "La hierba es anual o perenne?", { label: "Anual, hojas lanceoladas y semillas punteadas", keyStep: "H", especieId: "ed2_plantago_myosuros" }, { label: "Perenne", keyStep: "H'", nextNodeId: "ed2_plantago_perennial_three_seeds" }),
  ed2_plantago_perennial_three_seeds: node("ed2_plantago_perennial_three_seeds", "Plantago", 578, "La raiz primaria es corta o gruesa/napiforme?", { label: "Corta, oculta por raices fasciculadas", keyStep: "I", especieId: "ed2_plantago_australis" }, { label: "Gruesa o napiforme", keyStep: "I'", nextNodeId: "ed2_plantago_seed_surface" }),
  ed2_plantago_seed_surface: node("ed2_plantago_seed_surface", "Plantago", 578, "Las semillas son rugosas o punteadas?", { label: "Rugosas; raiz fusiforme", keyStep: "J", especieId: "ed2_plantago_tomentosa" }, { label: "Punteadas; raiz napiforme muy engrosada", keyStep: "J'", especieId: "ed2_plantago_berroi" }),
};
