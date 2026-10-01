import { CladoNode, Especie } from "@/types";

function species(id: string, scientificName: string, commonName: string, characteristics: string, distribution: string): Especie {
  return {
    id,
    nombreCientifico: scientificName,
    nombreVulgar: commonName,
    familia: "XXXVII. Liliaceae",
    descripcion: characteristics.split(";", 1)[0] + ".",
    caracteristicas: characteristics,
    distribucion: distribution,
  };
}

export const secondEditionLiliaceaeSpecies: Record<string, Especie> = {
  ed2_smilax_campestris: species("ed2_smilax_campestris", "Smilax campestris", "Zarzaparrilla blanca", "Enredadera subleñosa con aguijones curvos; hojas ovado-lanceoladas trinervadas; bayas negras globosas", "Sur de Brasil, Bolivia, Paraguay, Uruguay y norte argentino hasta el Delta y la ribera; medicinal."),
  ed2_herreria_ophiopogonoides: species("ed2_herreria_ophiopogonoides", "Herreria ophiopogonoides", "Herreria ophiopogonoides", "Planta acaule erecta; hojas de 6-8 cm en roseta basal; escapo de 30-50 cm y flores blanquecinas", "Sur de Brasil, Uruguay y nordeste argentino hasta la isla Martin Garcia."),
  ed2_herreria_montevidensis: species("ed2_herreria_montevidensis", "Herreria montevidensis", "Herreria montevidensis", "Planta voluble y hojosa; hojas verticiladas, lanceoladas y acuminadas de 4-10 cm", "Sur de Brasil, Uruguay, Paraguay y nordeste argentino hasta el Delta."),
  ed2_asparagus_officinalis: species("ed2_asparagus_officinalis", "Asparagus officinalis", "Esparrago", "Planta dioica de tallos erectos de 60-150 cm; cladodios filiformes, tres a ocho por fasciculo", "Europa; cultivada como alimenticia y escapada de cultivo en el Delta."),
  ed2_asparagus_setaceus: species("ed2_asparagus_setaceus", "Asparagus setaceus", "Helecho", "Planta de flores hermafroditas y tallos volubles; ocho a veinte cladodios aciculares por verticilo", "Sur de Africa; ornamental escapada de cultivo."),
  ed2_asparagus_densiflorus: species("ed2_asparagus_densiflorus", "Asparagus densiflorus", "Helecho esparrago", "Planta de flores hermafroditas y tallos volubles; tres a ocho cladodios lineares y planos por fasciculo", "Sur de Africa; ornamental escapada de cultivo."),
  ed2_ipheion_uniflorum: species("ed2_ipheion_uniflorum", "Ipheion uniflorum", "Estrellita", "Bulbifera de flores blancas con nervaduras azuladas o rosadas; tubo del perigonio igual o mayor que los segmentos", "Uruguay y nordeste argentino; frecuente en sierras y cultivada como ornamental."),
  ed2_ipheion_dialystemon: species("ed2_ipheion_dialystemon", "Ipheion dialystemon", "Ipheion dialystemon", "Bulbifera de flores amarillas; tubo del perigonio mas corto que sus ocho a once segmentos", "Uruguay y nordeste argentino; comun en la estepa climax."),
  ed2_allium_ampeloprasum: species("ed2_allium_ampeloprasum", "Allium ampeloprasum", "Allium ampeloprasum", "Bulbo doble rodeado de bulbillos; hojas lineares asperas; escapo de cerca de 1 m y umbela densa rosada", "Sur de Europa; espontanea en el Delta."),
};

export const secondEditionLiliaceaeKeyData: Record<string, CladoNode> = {
  ed2_family_liliaceae: {
    id: "ed2_family_liliaceae", milestone: "Liliaceae", manualPage: 187,
    descripcion: "¿La planta posee tallos ramosos volubles o sarmentosos, sin bulbo?",
    opcionA: { label: "Si; tallos ramosos, generalmente volubles o sarmentosos", keyStep: "A", nextNodeId: "ed2_liliaceae_stemmed_leaves" },
    opcionA_prima: { label: "No; acaule, con bulbo, roseta de hojas y escapo florifero", keyStep: "A'", nextNodeId: "ed2_liliaceae_bulb_umbel" },
  },
  ed2_liliaceae_stemmed_leaves: {
    id: "ed2_liliaceae_stemmed_leaves", milestone: "Liliaceae: plantas con tallo", manualPage: 187,
    descripcion: "¿Las hojas son alternas y ovadas, con nervaduras reticuladas menores?",
    opcionA: { label: "Si; hojas alternas ovadas y planta con aguijones", keyStep: "B", especieId: "ed2_smilax_campestris" },
    opcionA_prima: { label: "No; hojas verticiladas lineares o lanceoladas, o reemplazadas por cladodios", keyStep: "B'", nextNodeId: "ed2_liliaceae_leaves_or_cladodes" },
  },
  ed2_liliaceae_leaves_or_cladodes: {
    id: "ed2_liliaceae_leaves_or_cladodes", milestone: "Liliaceae: hojas o cladodios", manualPage: 188,
    descripcion: "¿Hay hojas linear-lanceoladas multinervadas o cladodios en su lugar?",
    opcionA: { label: "Hojas linear-lanceoladas multinervadas; fruto capsula", keyStep: "C", nextNodeId: "ed2_herreria" },
    opcionA_prima: { label: "Hojas ausentes, sustituidas por cladodios; fruto baya", keyStep: "C'", nextNodeId: "ed2_asparagus" },
  },
  ed2_liliaceae_bulb_umbel: {
    id: "ed2_liliaceae_bulb_umbel", milestone: "Liliaceae: plantas bulbiferas", manualPage: 188,
    descripcion: "¿La umbela posee una sola flor y el escapo se curva al fructificar?",
    opcionA: { label: "Si; umbela uniflora, rara vez biflora, y escapo geotropico", keyStep: "D", nextNodeId: "ed2_ipheion" },
    opcionA_prima: { label: "No; umbela pluriflora y fructificacion aerea", keyStep: "D'", nextNodeId: "ed2_liliaceae_tepal_union" },
  },
  ed2_liliaceae_tepal_union: {
    id: "ed2_liliaceae_tepal_union", milestone: "Liliaceae: tepalos", manualPage: 188,
    descripcion: "¿Los tepalos son libres y el estilo mas o menos ginobasico?",
    opcionA: { label: "Si; tepalos libres y estilo ginobasico", keyStep: "E", especieId: "ed2_allium_ampeloprasum" },
    opcionA_prima: { label: "No; tepalos soldados en la base y estilo apical", keyStep: "E'", especieId: "ed2_liliaceae" },
  },
  ed2_herreria: {
    id: "ed2_herreria", milestone: "Herreria", manualPage: 189,
    descripcion: "¿La planta es acaule y erecta o presenta tallos volubles?",
    opcionA: { label: "Acaule, erecta, con roseta basal e inflorescencia axilar", keyStep: "A", especieId: "ed2_herreria_ophiopogonoides" },
    opcionA_prima: { label: "Tallos volubles hojosos y hojas verticiladas", keyStep: "A'", especieId: "ed2_herreria_montevidensis" },
  },
  ed2_asparagus: {
    id: "ed2_asparagus", milestone: "Asparagus", manualPage: 190,
    descripcion: "¿La planta es dioica, de tallos erectos y cladodios filiformes?",
    opcionA: { label: "Si; tallos erectos y tres a ocho cladodios filiformes por fasciculo", keyStep: "A", especieId: "ed2_asparagus_officinalis" },
    opcionA_prima: { label: "No; flores hermafroditas y tallos volubles", keyStep: "A'", nextNodeId: "ed2_asparagus_cladodes" },
  },
  ed2_asparagus_cladodes: {
    id: "ed2_asparagus_cladodes", milestone: "Asparagus: cladodios", manualPage: 190,
    descripcion: "¿Los cladodios son aciculares o lineares y planos?",
    opcionA: { label: "Aciculares, ocho a veinte por verticilo", keyStep: "B", especieId: "ed2_asparagus_setaceus" },
    opcionA_prima: { label: "Lineares y planos, tres a ocho por fasciculo", keyStep: "B'", especieId: "ed2_asparagus_densiflorus" },
  },
  ed2_ipheion: {
    id: "ed2_ipheion", milestone: "Ipheion", manualPage: 190,
    descripcion: "¿Las flores son blancas con nervaduras coloreadas o amarillas?",
    opcionA: { label: "Blancas, con nervaduras azuladas o rosadas; tubo igual o mas largo", keyStep: "A", especieId: "ed2_ipheion_uniflorum" },
    opcionA_prima: { label: "Amarillas; tubo mas corto que los segmentos", keyStep: "A'", especieId: "ed2_ipheion_dialystemon" },
  },
};
