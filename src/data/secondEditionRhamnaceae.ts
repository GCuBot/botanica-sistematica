import { CladoNode, Especie } from "@/types";

function species(id: string, scientificName: string, commonName: string, characteristics: string, distribution: string): Especie {
  return {
    id,
    nombreCientifico: scientificName,
    nombreVulgar: commonName,
    familia: "XC. Rhamnaceae",
    descripcion: characteristics.split(";", 1)[0] + ".",
    caracteristicas: characteristics,
    distribucion: distribution,
  };
}

export const secondEditionRhamnaceaeSpecies: Record<string, Especie> = {
  ed2_gouania_ulmifolia: species("ed2_gouania_ulmifolia", "Gouania ulmifolia", "Gouania ulmifolia", "Liana con zarcillos; hojas ovadas de 5-7 cm; racimos axilares y terminales; fruto capsular trialado de 1 cm", "Uruguay y nordeste de Argentina hasta la Isla Martin Garcia."),
  ed2_scutia_buxifolia: species("ed2_scutia_buxifolia", "Scutia buxifolia", "Coronillo", "Arbolito de 2-6 m; ramas subopuestas con espinas axilares; hojas elipticas, de 1,5-2,5 cm, enteras o apenas aserradas; flores en fasciculos paucifloros, pentameras; fruto drupaceo piriforme", "Sur de Brasil, Uruguay y norte de Argentina. Comun en bosques xerofilos del norte y este de Buenos Aires."),
  ed2_rhamnus_catharticus: species("ed2_rhamnus_catharticus", "Rhamnus catharticus", "Espino cerval", "Arbusto o arbolito de 2-6 m; ramas espiniformes; hojas glabras, anchamente ovadas o elipticas, crenadas, de 3-6 cm; flores unisexuales axilares, pequenas, tetrameras; drupas globosas negras de 1 cm", "Europa. Cultivado y frecuentemente espontaneo en el Delta del Parana; frutos medicinales."),
  ed2_discaria_americana: species("ed2_discaria_americana", "Discaria americana", "Brusquilla", "Arbusto achaparrado de 50-80 cm; ramas espinosas, las laterales opuestas, cortas, generalmente con pocos nudos; hojas pequenas prontamente caducas; receptaculo blanco con petalos diminutos", "Sur de Brasil, Uruguay y norte de Argentina. Frecuente en las dunas litorales y en las sierras de la provincia."),
  ed2_colletia_paradoxa: species("ed2_colletia_paradoxa", "Colletia paradoxa", "Curro", "Arbusto de 1-1,5 m; espinas triangulares muy comprimidas de hasta 5 cm; flores en fasciculos de 5-6 mm", "Uruguay y sierras de Balcarce y Mar del Plata en la provincia de Buenos Aires."),
  ed2_colletia_spinosissima: species("ed2_colletia_spinosissima", "Colletia spinosissima", "Quina", "Arbusto de 1,5-4 m; espinas subuladas, gruesas y rigidas; flores fasciculadas o solitarias en la base de las espinas", "Uruguay y Argentina. Comun en bosques de tala del nordeste de Buenos Aires; corteza usada como febrifuga y astringente."),
  ed2_colletia_tenuicola: species("ed2_colletia_tenuicola", "Colletia tenuicola", "Colletia tenuicola", "Arbusto de 1,5-2 m; ramas y espinas delgadas y flexibles; flores en la base de las espinas", "Talares del norte de la provincia de Buenos Aires."),
};

export const secondEditionRhamnaceaeKeyData: Record<string, CladoNode> = {
  ed2_family_rhamnaceae: {
    id: "ed2_family_rhamnaceae",
    milestone: "XC. Rhamnaceae",
    manualPage: 398,
    descripcion: "La planta es liana con zarcillos o arbol/arbusto sin zarcillos?",
    opcionA: { label: "Liana con zarcillos; fruto trialado", keyStep: "A", especieId: "ed2_gouania_ulmifolia" },
    opcionA_prima: { label: "Arboles o arbustos sin zarcillos; fruto no alado", keyStep: "A'", nextNodeId: "ed2_rhamnaceae_habit_receptacle" },
  },
  ed2_rhamnaceae_habit_receptacle: {
    id: "ed2_rhamnaceae_habit_receptacle",
    milestone: "Rhamnaceae: porte y receptaculo",
    manualPage: 398,
    descripcion: "Son arboles con hojas persistentes y receptaculo no urceolado, o arbustos espinosos afilos o de hojas reducidas con receptaculo urceolado?",
    opcionA: { label: "Arboles con hojas persistentes; receptaculo no urceolado", keyStep: "B", nextNodeId: "ed2_rhamnaceae_tree_spines" },
    opcionA_prima: { label: "Arbustos espinosos, afilos o de hojas reducidas; receptaculo urceolado", keyStep: "B'", nextNodeId: "ed2_rhamnaceae_aphyllous_nodes" },
  },
  ed2_rhamnaceae_tree_spines: {
    id: "ed2_rhamnaceae_tree_spines",
    milestone: "Rhamnaceae: arboles espinosos",
    manualPage: 398,
    descripcion: "Las espinas son axilares cortas o estan formadas por ramas hojosas?",
    opcionA: { label: "Espinas axilares cortas; hojas opuestas o semiopuestas", keyStep: "C", especieId: "ed2_scutia_buxifolia" },
    opcionA_prima: { label: "Espinas formadas por ramas hojosas; hojas alternas o semiopuestas", keyStep: "C'", especieId: "ed2_rhamnus_catharticus" },
  },
  ed2_rhamnaceae_aphyllous_nodes: {
    id: "ed2_rhamnaceae_aphyllous_nodes",
    milestone: "Rhamnaceae: arbustos afilos",
    manualPage: 398,
    descripcion: "Las ramas tienen nudos marcados por una linea transversal?",
    opcionA: { label: "Ramas con nudos marcados; borde del disco no enrollado", keyStep: "D", especieId: "ed2_discaria_americana" },
    opcionA_prima: { label: "Ramas sin nudos marcados; borde del disco enrollado hacia adentro", keyStep: "D'", nextNodeId: "ed2_colletia_spines" },
  },
  ed2_colletia_spines: {
    id: "ed2_colletia_spines",
    milestone: "Colletia",
    manualPage: 400,
    descripcion: "Las espinas son triangulares muy comprimidas o subuladas?",
    opcionA: { label: "Espinas triangulares muy comprimidas, de hasta 5 cm", keyStep: "A", especieId: "ed2_colletia_paradoxa" },
    opcionA_prima: { label: "Espinas subuladas", keyStep: "A'", nextNodeId: "ed2_colletia_branch_strength" },
  },
  ed2_colletia_branch_strength: {
    id: "ed2_colletia_branch_strength",
    milestone: "Colletia: ramas y espinas",
    manualPage: 400,
    descripcion: "Las ramas y espinas son gruesas y rigidas o delgadas y flexibles?",
    opcionA: { label: "Ramas y espinas gruesas, rigidas", keyStep: "B", especieId: "ed2_colletia_spinosissima" },
    opcionA_prima: { label: "Ramas y espinas delgadas, flexibles", keyStep: "B'", especieId: "ed2_colletia_tenuicola" },
  },
};
