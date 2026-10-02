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

export const secondEditionCaprifoliaceaeToDipsacaceaeSpecies: Record<string, Especie> = {
  ed2_sambucus_australis: species("ed2_sambucus_australis", "Sambucus australis", "Sauco", "CXXXIX. Caprifoliaceae", "Arbolito de 3-5 m, de corteza gris rugosa; hojas opuestas, estipuladas, pinnaticompuestas, con foliolos ovado-lanceolados aserrados; flores blancas numerosas en cimas umbeliformes; fruto negro", "Sur de Brasil, Paraguay, Uruguay y norte de Argentina. Comun en bosques de tala y selvas marginales del Delta y ribera platense, hasta Mar del Plata."),
  ed2_lonicera_japonica: species("ed2_lonicera_japonica", "Lonicera japonica", "Madreselva", "CXXXIX. Caprifoliaceae", "Enredadera lenosa con hojas persistentes, cortamente pecioladas, ovadas y enteras; flores geminadas, blancas o amarillentas, fragantes, con corola bilabiada; estambres exertos", "China y Japon. Frecuente como espontanea en Delta y ribera del Plata; cultivada ornamental."),
  ed2_valeriana_scandens: species("ed2_valeriana_scandens", "Valeriana scandens", "Yerba de la vibora", "CXL. Valerianaceae", "Hierba anual voluble y glabra; hojas inferiores trifolioladas y superiores enteras, cordadas; flores blancas pequenas en paniculas de cimas dicotomicas; fruto con vilano plumoso", "Frecuente en bosques del Delta y ribera del Plata."),
  ed2_valeriana_falcifolia: species("ed2_valeriana_falcifolia", "Valeriana falcifolia", "Valeriana falcifolia", "CXL. Valerianaceae", "Hierba perenne rizomatosa, glabra, con tallos de cerca de 1 m; hojas enteras, oblongo-lanceoladas, sesiles o subsesiles; flores verdosas unisexuales en amplias panojas", "Sur de Brasil, Uruguay y region platense. Comun en bosques higrofilos del Delta y ribera del Plata."),
  ed2_valeriana_polystachya: species("ed2_valeriana_polystachya", "Valeriana polystachya", "Valeriana polystachya", "CXL. Valerianaceae", "Hierba perenne rizomatosa, glabra, de hasta 1,5 m; hojas caulinares opuestas; flores en paniculas; caliz no transformado en vilano", "Sur de Brasil, Uruguay y nordeste de Argentina. Comun en pajonales del Delta y ribera del Plata."),
  ed2_dipsacus_fullonum: species("ed2_dipsacus_fullonum", "Dipsacus fullonum", "Dipsacus fullonum", "CXLI. Dipsacaceae", "Hierba bienal o perenne aspera o aculeada, con bracteas y paleas rigidas; flores en cabezuelas; caliz ciatiforme", "Viejo Mundo. Naturalizada en la provincia de Buenos Aires."),
  ed2_dipsacus_sativus: species("ed2_dipsacus_sativus", "Dipsacus sativus", "Carda de cardar", "CXLI. Dipsacaceae", "Hierba bienal o perenne aculeada, afin a las cardas, con capitulos de bracteas rigidas y paleas rectas", "Europa. Naturalizada en las sierras australes."),
  ed2_scabiosa_atropurpurea: species("ed2_scabiosa_atropurpurea", "Scabiosa atropurpurea", "Flor de viuda", "CXLI. Dipsacaceae", "Sufrutice inerme de 0,5-1 m; hojas inferiores espatuladas y superiores pinnatifidas; capitulos subhemisfericos largamente pedunculados; flores moradas, granates o blanquecinas", "Sur de Europa. Cultivada como ornamental y a veces subespontanea."),
};

export const secondEditionCaprifoliaceaeToDipsacaceaeKeyData: Record<string, CladoNode> = {
  ed2_family_caprifoliaceae: node("ed2_family_caprifoliaceae", "CXXXIX. Caprifoliaceae", 590, "Las hojas son compuestas o simples?", { label: "Compuestas; flores actinomorfas; arboles", keyStep: "A", especieId: "ed2_sambucus_australis" }, { label: "Simples; flores cigomorfas; enredaderas", keyStep: "A'", especieId: "ed2_lonicera_japonica" }),
  ed2_family_valerianaceae: node("ed2_family_valerianaceae", "CXL. Valerianaceae", 592, "La hierba es anual voluble o perenne erecta?", { label: "Anual, voluble, glabra; fruto con vilano plumoso", keyStep: "A", especieId: "ed2_valeriana_scandens" }, { label: "Perenne, erecta; caliz no transformado en vilano", keyStep: "A'", nextNodeId: "ed2_valeriana_perennial_leaves" }),
  ed2_valeriana_perennial_leaves: node("ed2_valeriana_perennial_leaves", "Valeriana", 592, "Las hojas son enteras oblongo-lanceoladas o diferentes?", { label: "Enteras, oblongo-lanceoladas, con flores unisexuales verdosas", keyStep: "B", especieId: "ed2_valeriana_falcifolia" }, { label: "Hierba rizomatosa alta de pajonales", keyStep: "B'", especieId: "ed2_valeriana_polystachya" }),
  ed2_family_dipsacaceae: node("ed2_family_dipsacaceae", "CXLI. Dipsacaceae", 593, "La planta es aculeada con caliz ciatiforme o inerme con caliz setoso?", { label: "Aspera o aculeada; bracteas y paleas rigidas", keyStep: "A", nextNodeId: "ed2_dipsacus_species" }, { label: "Inerme; bracteas y paleas herbaceas", keyStep: "A'", especieId: "ed2_scabiosa_atropurpurea" }),
  ed2_dipsacus_species: node("ed2_dipsacus_species", "Dipsacus", 593, "Las paleas son subuladas o rectas?", { label: "Paleas subuladas", keyStep: "A", especieId: "ed2_dipsacus_fullonum" }, { label: "Paleas rectas; carda de cardar", keyStep: "A'", especieId: "ed2_dipsacus_sativus" }),
};
