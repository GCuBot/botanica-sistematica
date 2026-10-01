import { CladoNode, Especie } from "@/types";

function species(id: string, scientificName: string, commonName: string, characteristics: string, distribution: string): Especie {
  return { id, nombreCientifico: scientificName, nombreVulgar: commonName, familia: "LXIX. Capparidaceae", descripcion: characteristics.split(";", 1)[0] + ".", caracteristicas: characteristics, distribucion: distribution };
}

export const secondEditionCapparidaceaeSpecies: Record<string, Especie> = {
  ed2_cleome_trachycarpa: species("ed2_cleome_trachycarpa", "Cleome trachycarpa", "Cleome trachycarpa", "Perenne erecta de 40-80 cm, hispido-glandulosa y con aguijones rectos; hojas palmaticompuestas con cinco foliolos enteros; flores rosadas en racimos; capsula linear hispido-velluda de 6-7 cm y carpoforo de 4-6 cm", "Sur de Brasil, Paraguay, Uruguay y nordeste de Argentina; suelos humedos."),
  ed2_cleome_titubans: species("ed2_cleome_titubans", "Cleome titubans", "Cleome titubans", "Perenne hispido-glandulosa de 30-50 cm; tallos y peciolos con aguijones; hojas palmaticompuestas con tres a cinco foliolos sinuados; flores rosadas en racimos; capsula linear glabra de 3-4 cm y carpoforo de 5-15 mm", "Region platense; pajonales."),
  ed2_cleome_hassleriana: species("ed2_cleome_hassleriana", "Cleome hassleriana", "Cleome hassleriana", "Anual erecta de 40-100 cm e hispido-glandulosa; hojas palmaticompuestas con cinco a siete foliolos oblanceolados y peciolos espinosos en la base; flores purpureas o blancas; capsula linear glabra de 6-8 cm y carpoforo de 50-70 mm", "Paraguay y norte de Argentina; rara en el Delta."),
};

export const secondEditionCapparidaceaeKeyData: Record<string, CladoNode> = {
  ed2_family_capparidaceae: { id: "ed2_family_capparidaceae", milestone: "Capparidaceae", manualPage: 290, descripcion: "¿La capsula linear es hispido-velluda o glabra?", opcionA: { label: "Hispido-velluda; carpoforo de 4-6 cm", keyStep: "A", especieId: "ed2_cleome_trachycarpa" }, opcionA_prima: { label: "Glabra", keyStep: "A'", nextNodeId: "ed2_cleome_glabrous_carpophore" } },
  ed2_cleome_glabrous_carpophore: { id: "ed2_cleome_glabrous_carpophore", milestone: "Cleome: capsula glabra", manualPage: 290, descripcion: "¿El carpoforo mide 5-15 mm o 50-70 mm?", opcionA: { label: "5-15 mm; perenne con tallos y peciolos armados", keyStep: "B", especieId: "ed2_cleome_titubans" }, opcionA_prima: { label: "50-70 mm; anual con peciolos espinosos en la base", keyStep: "B'", especieId: "ed2_cleome_hassleriana" } },
};
