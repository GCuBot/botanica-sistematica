import { CladoNode, Especie } from "@/types";

function species(id: string, scientificName: string, commonName: string, characteristics: string, distribution: string): Especie {
  return {
    id,
    nombreCientifico: scientificName,
    nombreVulgar: commonName,
    familia: "XXXVI. Juncaceae",
    descripcion: characteristics.split(";", 1)[0] + ".",
    caracteristicas: characteristics,
    distribucion: distribution,
  };
}

export const secondEditionJuncaceaeSpecies: Record<string, Especie> = {
  ed2_juncus_bufonius: species("ed2_juncus_bufonius", "Juncus bufonius", "Juncus bufonius", "Anual tenue, de unos 20 cm; hojas numerosas y estrechamente lineares; flores profiladas de 5-9 mm", "Cosmopolita; lugares pantanosos."),
  ed2_juncus_capillaceus: species("ed2_juncus_capillaceus", "Juncus capillaceus", "Junco", "Perenne de 15-25 cm; hojas capilares surcadas; bractea larguisima y flores pardas de 3-3,5 mm", "Chile, sur de Brasil, Uruguay y nordeste argentino; suelos humedos."),
  ed2_juncus_balticus: species("ed2_juncus_balticus", "Juncus balticus", "Juncus balticus", "Perenne rizomatosa robusta de 25-100 cm; hojas inferiores reducidas a catafilas; flores de 4-5 mm", "Europa, Asia y America; suelos humedos."),
  ed2_juncus_lesueurii: species("ed2_juncus_lesueurii", "Juncus lesueurii", "Junco", "Perenne rizomatosa robusta de 25-100 cm; hojas inferiores catafilares; flores de 6-7 mm y fruto mas corto", "America; suelos pantanosos."),
  ed2_juncus_imbricatus: species("ed2_juncus_imbricatus", "Juncus imbricatus var. chamissonis", "Junquito", "Perenne cespitosa de 10-40 cm; inflorescencia terminal; capsula madura mas larga que el perigonio", "Sudamerica; muy frecuente en campos humedos."),
  ed2_juncus_tenuis: species("ed2_juncus_tenuis", "Juncus tenuis", "Juncus tenuis", "Perenne de 10-45 cm; hojas planas de 5-15 cm; capsula no mas larga que el perigonio", "Europa y America; rara en Martin Garcia y Punta Lara, en lugares pantanosos."),
  ed2_juncus_dichotomus: species("ed2_juncus_dichotomus", "Juncus dichotomus", "Juncus dichotomus", "Perenne de 20-80 cm; hojas semicilindricas acanaladas de hasta 40 cm; flores de 3,5-4 mm", "America; comun en suelos pantanosos."),
  ed2_juncus_uruguensis: species("ed2_juncus_uruguensis", "Juncus uruguensis", "Juncus uruguensis", "Perenne cespitosa de 20-45 cm; tres estambres; tallos floriferos con una o dos hojas laminares", "Uruguay y nordeste argentino; rara en la region."),
  ed2_juncus_venturianus: species("ed2_juncus_venturianus", "Juncus venturianus", "Juncus venturianus", "Perenne de 18-30 cm; tres estambres; tallos floriferos con varias hojas lineares", "Paraguay, Uruguay y norte argentino; rara en la region."),
  ed2_juncus_acutus: species("ed2_juncus_acutus", "Juncus acutus var. leopoldii", "Junco, hunco", "Perenne muy robusta de 1-1,5 m; hojas cilindricas, macizas y punzantes; flores sin profilos", "Cosmopolita; campos humedos y salobres."),
  ed2_juncus_microcephalus: species("ed2_juncus_microcephalus", "Juncus microcephalus", "Juncus microcephalus", "Perenne de 20-70 cm; seis estambres; capitulos de tres a nueve flores y fruto apenas mas corto", "America Central y del Sur; comun en suelos pantanosos."),
  ed2_juncus_dombeyanus: species("ed2_juncus_dombeyanus", "Juncus dombeyanus", "Juncus dombeyanus", "Perenne de 20-100 cm; seis estambres; capitulos de seis a quince flores y fruto mucho mas corto", "Sudamerica templada; suelos pantanosos."),
  ed2_juncus_densiflorus: species("ed2_juncus_densiflorus", "Juncus densiflorus var. pohlii", "Juncus densiflorus", "Perenne rizomatosa de 50-120 cm; tres estambres; capitulos multifloros de 8-12 mm", "Sudamerica; pajonales del Delta y la ribera del Plata."),
  ed2_juncus_scirpoides: species("ed2_juncus_scirpoides", "Juncus scirpoides var. meridionalis", "Juncus scirpoides", "Perenne rizomatosa de 20-80 cm; tres estambres; capitulos multifloros de 6-10 mm", "Sur de Brasil, Paraguay, Uruguay y Argentina; frecuente en lagunas y esteros."),
  ed2_luzula_hieronymi: species("ed2_luzula_hieronymi", "Luzula hieronymi f. bonariensis", "Luzula hieronymi", "Perenne cespitosa de 20-30 cm; hojas de margen ciliado; panoja de espiguillas y capsula trisemina", "Forma endemica de las sierras de Buenos Aires."),
};

export const secondEditionJuncaceaeKeyData: Record<string, CladoNode> = {
  ed2_family_juncaceae: {
    id: "ed2_family_juncaceae", milestone: "Juncaceae", manualPage: 184,
    descripcion: "¿Las vainas foliares son abiertas y el margen de la lamina glabro?",
    opcionA: { label: "Si; vainas abiertas, margen glabro y capsula con numerosas semillas", keyStep: "A", nextNodeId: "ed2_juncus" },
    opcionA_prima: { label: "No; vainas cerradas, margen ciliado y capsula con tres semillas", keyStep: "A'", especieId: "ed2_luzula_hieronymi" },
  },
  ed2_juncus: {
    id: "ed2_juncus", milestone: "Juncus", manualPage: 184,
    descripcion: "¿Las flores poseen dos bracteolas basales o carecen de ellas?",
    opcionA: { label: "Profiladas; con dos bracteolas y dispuestas en cimas escorpioides", keyStep: "A", nextNodeId: "ed2_juncus_profiled_duration" },
    opcionA_prima: { label: "Sin profilos; sesiles y agrupadas en capitulos", keyStep: "A'", nextNodeId: "ed2_juncus_unprofiled_habit" },
  },
  ed2_juncus_profiled_duration: {
    id: "ed2_juncus_profiled_duration", milestone: "Juncus: flores profiladas", manualPage: 184,
    descripcion: "¿La planta es anual o perenne?",
    opcionA: { label: "Anual, tenue, de unos 20 cm", keyStep: "B", especieId: "ed2_juncus_bufonius" },
    opcionA_prima: { label: "Perenne, generalmente rizomatosa", keyStep: "B'", nextNodeId: "ed2_juncus_profiled_stamens" },
  },
  ed2_juncus_profiled_stamens: {
    id: "ed2_juncus_profiled_stamens", milestone: "Juncus: estambres", manualPage: 184,
    descripcion: "¿Las flores poseen seis estambres o tres?",
    opcionA: { label: "Seis", keyStep: "C", nextNodeId: "ed2_juncus_six_bract" },
    opcionA_prima: { label: "Tres, raramente cuatro o cinco", keyStep: "C'", nextNodeId: "ed2_juncus_three_leaves" },
  },
  ed2_juncus_six_bract: {
    id: "ed2_juncus_six_bract", milestone: "Juncus: seis estambres", manualPage: 184,
    descripcion: "¿La bractea de la inflorescencia es larguisima y simula continuar el tallo?",
    opcionA: { label: "Si; inflorescencia seudolateral", keyStep: "D", nextNodeId: "ed2_juncus_pseudolateral_leaves" },
    opcionA_prima: { label: "No; bractea corta e inflorescencia terminal", keyStep: "D'", nextNodeId: "ed2_juncus_terminal_fruit" },
  },
  ed2_juncus_pseudolateral_leaves: {
    id: "ed2_juncus_pseudolateral_leaves", milestone: "Juncus: inflorescencia seudolateral", manualPage: 184,
    descripcion: "¿Las hojas inferiores tienen lamina capilar o estan reducidas a catafilas?",
    opcionA: { label: "Lamina capilar surcada de 0,2-0,5 mm", keyStep: "E", especieId: "ed2_juncus_capillaceus" },
    opcionA_prima: { label: "Reducidas a catafilas anchas sin lamina", keyStep: "E'", nextNodeId: "ed2_juncus_cataphyll_flower" },
  },
  ed2_juncus_cataphyll_flower: {
    id: "ed2_juncus_cataphyll_flower", milestone: "Juncus: flores seudolaterales", manualPage: 184,
    descripcion: "¿Las flores miden 4-5 mm o 6-7 mm?",
    opcionA: { label: "4-5 mm; fruto igual o mas largo que el perigonio", keyStep: "F", especieId: "ed2_juncus_balticus" },
    opcionA_prima: { label: "6-7 mm; fruto mas corto que el perigonio", keyStep: "F'", especieId: "ed2_juncus_lesueurii" },
  },
  ed2_juncus_terminal_fruit: {
    id: "ed2_juncus_terminal_fruit", milestone: "Juncus: inflorescencia terminal", manualPage: 184,
    descripcion: "¿La capsula madura supera el perigonio?",
    opcionA: { label: "Si; capsula mas larga", keyStep: "G", especieId: "ed2_juncus_imbricatus" },
    opcionA_prima: { label: "No; igual o mas corta", keyStep: "G'", nextNodeId: "ed2_juncus_terminal_leaf_shape" },
  },
  ed2_juncus_terminal_leaf_shape: {
    id: "ed2_juncus_terminal_leaf_shape", milestone: "Juncus: forma foliar", manualPage: 185,
    descripcion: "¿Las hojas son planas o semicilindricas y acanaladas?",
    opcionA: { label: "Planas, de 5-15 cm", keyStep: "H", especieId: "ed2_juncus_tenuis" },
    opcionA_prima: { label: "Semicilindricas y acanaladas, de hasta 40 cm", keyStep: "H'", especieId: "ed2_juncus_dichotomus" },
  },
  ed2_juncus_three_leaves: {
    id: "ed2_juncus_three_leaves", milestone: "Juncus: tres estambres", manualPage: 186,
    descripcion: "¿Los tallos floriferos poseen una o dos hojas laminares o varias?",
    opcionA: { label: "Una o dos hojas con lamina; flores de 4-4,5 mm", keyStep: "I", especieId: "ed2_juncus_uruguensis" },
    opcionA_prima: { label: "Varias hojas lineares; flores de 4,5-5,5 mm", keyStep: "I'", especieId: "ed2_juncus_venturianus" },
  },
  ed2_juncus_unprofiled_habit: {
    id: "ed2_juncus_unprofiled_habit", milestone: "Juncus: flores sin profilos", manualPage: 186,
    descripcion: "¿La planta es muy robusta, con hojas macizas y punzantes?",
    opcionA: { label: "Si; mata densa de 1-1,5 m y hojas cilindricas punzantes", keyStep: "J", especieId: "ed2_juncus_acutus" },
    opcionA_prima: { label: "No; menor, con hojas huecas no punzantes", keyStep: "J'", nextNodeId: "ed2_juncus_unprofiled_stamens" },
  },
  ed2_juncus_unprofiled_stamens: {
    id: "ed2_juncus_unprofiled_stamens", milestone: "Juncus: capitulos", manualPage: 186,
    descripcion: "¿Las flores poseen seis estambres o tres?",
    opcionA: { label: "Seis; capitulos con tres a quince flores", keyStep: "K", nextNodeId: "ed2_juncus_six_fruit" },
    opcionA_prima: { label: "Tres; capitulos multifloros", keyStep: "K'", nextNodeId: "ed2_juncus_three_fruit" },
  },
  ed2_juncus_six_fruit: {
    id: "ed2_juncus_six_fruit", milestone: "Juncus: seis estambres en capitulos", manualPage: 186,
    descripcion: "¿El fruto es apenas o mucho mas corto que el perigonio?",
    opcionA: { label: "Apenas mas corto; semillas elipticas y capitulos de 3-9 flores", keyStep: "L", especieId: "ed2_juncus_microcephalus" },
    opcionA_prima: { label: "Mucho mas corto; semillas globosas y capitulos de 6-15 flores", keyStep: "L'", especieId: "ed2_juncus_dombeyanus" },
  },
  ed2_juncus_three_fruit: {
    id: "ed2_juncus_three_fruit", milestone: "Juncus: tres estambres en capitulos", manualPage: 186,
    descripcion: "¿El fruto es claramente mas corto o casi igual al perigonio?",
    opcionA: { label: "Mas corto, de 2 mm; planta de 50-120 cm y capitulos de 8-12 mm", keyStep: "M", especieId: "ed2_juncus_densiflorus" },
    opcionA_prima: { label: "Igual o algo mas corto; planta de 20-80 cm y capitulos de 6-10 mm", keyStep: "M'", especieId: "ed2_juncus_scirpoides" },
  },
};
