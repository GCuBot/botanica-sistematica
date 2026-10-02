import { CladoNode, Especie } from "@/types";

function species(id: string, scientificName: string, commonName: string, characteristics: string, distribution: string): Especie {
  return {
    id,
    nombreCientifico: scientificName,
    nombreVulgar: commonName,
    familia: "LXXXIX. Sapindaceae",
    descripcion: characteristics.split(";", 1)[0] + ".",
    caracteristicas: characteristics,
    distribucion: distribution,
  };
}

export const secondEditionSapindaceaeSpecies: Record<string, Especie> = {
  ed2_dodonaea_viscosa: species("ed2_dodonaea_viscosa", "Dodonaea viscosa", "Dodonaea viscosa", "Arbusto glabro y viscoso de 1-2 m; hojas simples, lanceoladas, cortamente pecioladas, enteras, de 7-15 cm; flores pequenas en panojas contraidas; capsulas 2-3-aladas, con alas grandes membranosas cobrizas", "Especie polimorfa pantropical. Frecuente en las dunas de la Isla Martin Garcia y en las sierras de Balcarce."),
  ed2_allophylus_edulis: species("ed2_allophylus_edulis", "Allophylus edulis", "Chalchal", "Arbol de 4-10 m con corteza rojiza; hojas pecioladas, trifolioladas, glabras; foliolos lanceolados, aserrados, el terminal algo mayor; flores pequenas blanquecinas en racimos; drupas ovoides rojizas de 5 mm", "America tropical. Frecuente en las selvas marginales del Delta y de la ribera platense."),
  ed2_cardiospermum_halicacabum: species("ed2_cardiospermum_halicacabum", "Cardiospermum halicacabum", "Globitos", "Enredadera anual glabra salvo en la parte vegetativa; hojas largamente pecioladas, membranosas, biternadas con foliolos ovados irregularmente aserrados o lobados; inflorescencias de 6-9 cm con zarcillos; capsulas de 25 mm", "Pantropical. Comun en pajonales y matorrales de la ribera platense."),
  ed2_cardiospermum_grandiflorum: species("ed2_cardiospermum_grandiflorum", "Cardiospermum grandiflorum", "Cipo", "Enredadera perenne, lenosa en la base, corta y densamente pubescente; hojas compuestas o bicompuestas, con foliolos ovados irregularmente dentados; flores blancas de unos 10 mm; capsulas de 30-40 mm", "America y Africa calidas. Comun en los bosques del Delta y la ribera."),
  ed2_urvillea_uniloba: species("ed2_urvillea_uniloba", "Urvillea uniloba", "Cipo", "Liana con zarcillos; hojas trifolioladas con foliolos ovados, dentado-lobados; tirsos axilares mas largos que las hojas; flores pequenas amarillentas; trisamaras de 2,5-3 cm", "Sur de Brasil, Paraguay, Uruguay y nordeste de Argentina hasta los bosques del Delta y de la ribera del Plata."),
  ed2_serjania_meridionalis: species("ed2_serjania_meridionalis", "Serjania meridionalis", "Serjania meridionalis", "Liana glabra o casi glabra; hojas biternadas con foliolos ovado-lanceolados, paucidentados; tirsos axilares con zarcillos; trisamaras de 2 cm", "Bosques del sur de Brasil, Paraguay, Uruguay y nordeste de Argentina hasta el Delta y la Isla Martin Garcia."),
};

export const secondEditionSapindaceaeKeyData: Record<string, CladoNode> = {
  ed2_family_sapindaceae: {
    id: "ed2_family_sapindaceae",
    milestone: "LXXXIX. Sapindaceae",
    manualPage: 394,
    descripcion: "Las hojas son simples o compuestas?",
    opcionA: { label: "Hojas simples, enteras, lanceoladas; fruto capsula trialada", keyStep: "A", especieId: "ed2_dodonaea_viscosa" },
    opcionA_prima: { label: "Hojas compuestas, con foliolos generalmente aserrados", keyStep: "A'", nextNodeId: "ed2_sapindaceae_woody_vine" },
  },
  ed2_sapindaceae_woody_vine: {
    id: "ed2_sapindaceae_woody_vine",
    milestone: "Sapindaceae: porte",
    manualPage: 394,
    descripcion: "Es arbol sin zarcillos o liana con zarcillos?",
    opcionA: { label: "Arbol sin zarcillos; fruto con tres drupas", keyStep: "B", especieId: "ed2_allophylus_edulis" },
    opcionA_prima: { label: "Liana con zarcillos; fruto capsula o trisamara", keyStep: "B'", nextNodeId: "ed2_sapindaceae_vine_fruit" },
  },
  ed2_sapindaceae_vine_fruit: {
    id: "ed2_sapindaceae_vine_fruit",
    milestone: "Sapindaceae: fruto de lianas",
    manualPage: 394,
    descripcion: "El fruto es capsula membranosa inflada o trisamara?",
    opcionA: { label: "Capsula membranosa, inflada, trilocular", keyStep: "C", nextNodeId: "ed2_cardiospermum_habit" },
    opcionA_prima: { label: "Trisamara", keyStep: "C'", nextNodeId: "ed2_sapindaceae_samara_seed" },
  },
  ed2_sapindaceae_samara_seed: {
    id: "ed2_sapindaceae_samara_seed",
    milestone: "Sapindaceae: posicion de semillas",
    manualPage: 394,
    descripcion: "Las semillas estan en el centro del fruto o en el apice?",
    opcionA: { label: "Semillas en el centro del fruto, con ala alrededor", keyStep: "D", especieId: "ed2_urvillea_uniloba" },
    opcionA_prima: { label: "Semillas en el apice del fruto, con ala solo inferior", keyStep: "D'", especieId: "ed2_serjania_meridionalis" },
  },
  ed2_cardiospermum_habit: {
    id: "ed2_cardiospermum_habit",
    milestone: "Cardiospermum",
    manualPage: 397,
    descripcion: "La enredadera es anual y glabra o perenne, lenosa en la base y pubescente?",
    opcionA: { label: "Enredadera anual glabra; capsulas de 25 mm", keyStep: "A", especieId: "ed2_cardiospermum_halicacabum" },
    opcionA_prima: { label: "Enredadera perenne, lenosa en la base; capsulas de 30-40 mm", keyStep: "A'", especieId: "ed2_cardiospermum_grandiflorum" },
  },
};
