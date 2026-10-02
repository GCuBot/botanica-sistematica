import { CladoNode, Especie } from "@/types";

function species(id: string, scientificName: string, commonName: string, characteristics: string, distribution: string): Especie {
  return {
    id,
    nombreCientifico: scientificName,
    nombreVulgar: commonName,
    familia: "CXLIV. Calyceraceae",
    descripcion: characteristics.split(";", 1)[0] + ".",
    caracteristicas: characteristics,
    distribucion: distribution,
  };
}

function node(id: string, milestone: string, page: number, descripcion: string, a: CladoNode["opcionA"], b: CladoNode["opcionA_prima"]): CladoNode {
  return { id, milestone, manualPage: page, descripcion, opcionA: a, opcionA_prima: b };
}

export const secondEditionCalyceraceaeSpecies: Record<string, Especie> = {
  ed2_acicarpha_procumbens: species("ed2_acicarpha_procumbens", "Acicarpha procumbens", "Acicarpha procumbens", "Hierba perenne glabra y decumbente; hojas enteras, oblanceolado-espatuladas, obtusas y mucronadas; capitulos globosos pedunculados; aquenios con aristas prolongadas en espinas", "Sur de Brasil, Uruguay y nordeste de Argentina. Suelos salobres del este y sur bonaerense."),
  ed2_acicarpha_tribuloides: species("ed2_acicarpha_tribuloides", "Acicarpha tribuloides", "Acicarpha tribuloides", "Hierba anual erecta, glabra, de 20-50 cm; hojas radicales arrosetadas y caulinares ensanchadas en la base; capitulos opuestos a las hojas; aquenios coronados por largas espinas", "Sur de Brasil, Paraguay, Bolivia, Uruguay y Argentina. Comun en prados del Delta y ribera del Plata."),
  ed2_boopsis_anthemoides: species("ed2_boopsis_anthemoides", "Boopis anthemoides", "Boopis anthemoides", "Sufrutice ramoso de 20-50 cm; hojas profundamente pinnatisectas con raquis y segmentos lineares; capitulos terminales hemisfericos; aquenios prismaticos inermes", "Chile y Argentina. Rara cerca de Buenos Aires, en suelos secos y barrancas."),
  ed2_calycera_crassifolia: species("ed2_calycera_crassifolia", "Calycera crassifolia", "Calycera crassifolia", "Hierba perenne glabra; hojas caulinares espatulado-lanceoladas y dentado-espinosas; capitulos terminales; aquenios dimorfos, algunos con espinas rigidas largas", "Sur de Brasil, Chile y Argentina. Frecuente en dunas costeras de Buenos Aires."),
};

export const secondEditionCalyceraceaeKeyData: Record<string, CladoNode> = {
  ed2_family_calyceraceae: node("ed2_family_calyceraceae", "CXLIV. Calyceraceae", 605, "Los capitulos tienen flores dimorfas o isomorfas?", { label: "Dimorfas: marginales fertiles y centrales esteriles", keyStep: "A", nextNodeId: "ed2_acicarpha_habit" }, { label: "Isomorfas, todas fertiles", keyStep: "A'", nextNodeId: "ed2_calyceraceae_aquenes" }),
  ed2_acicarpha_habit: node("ed2_acicarpha_habit", "Acicarpha", 605, "La hierba es perenne decumbente o anual erecta?", { label: "Perenne, glabra, decumbente", keyStep: "A", especieId: "ed2_acicarpha_procumbens" }, { label: "Anual, erecta, glabra", keyStep: "A'", especieId: "ed2_acicarpha_tribuloides" }),
  ed2_calyceraceae_aquenes: node("ed2_calyceraceae_aquenes", "Calyceraceae", 605, "Los aquenios son inermes o dimorfos con espinas?", { label: "Isomorfos, carenados, inermes; hojas pinnatisectas", keyStep: "B", especieId: "ed2_boopsis_anthemoides" }, { label: "Dimorfos; exteriores con largas espinas", keyStep: "B'", especieId: "ed2_calycera_crassifolia" }),
};
