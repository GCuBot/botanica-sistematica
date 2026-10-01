import { CladoNode, Especie } from "@/types";

function species(
  id: string,
  scientificName: string,
  commonName: string,
  description: string,
  characteristics: string,
  distribution: string
): Especie {
  return {
    id,
    nombreCientifico: scientificName,
    nombreVulgar: commonName,
    familia: "XXXV. Pontederiaceae",
    descripcion: description,
    caracteristicas: characteristics,
    distribucion: distribution,
  };
}

export const secondEditionPontederiaceaeSpecies: Record<string, Especie> = {
  ed2_eichhornia_crassipes: species(
    "ed2_eichhornia_crassipes", "Eichhornia crassipes", "Camalote, aguapey",
    "Hierba flotante en roseta que emite estolones.",
    "Peciolos casi globosos con abundante aerenquima; espigas paucifloras y perigonio azul o lilacino de 4-5 cm.",
    "America calida; comun en camalotales del Delta y la ribera del Plata."
  ),
  ed2_eichhornia_azurea: species(
    "ed2_eichhornia_azurea", "Eichhornia azurea", "Camalote",
    "Hierba flotante de tallos largos, con hojas e inflorescencias emergentes.",
    "Peciolos alargados poco engrosados; lamina orbicular y espigas de 18-40 flores azules de 4-5 cm.",
    "America calida; comun en el Delta y la ribera."
  ),
  ed2_pontederia_cordata: species(
    "ed2_pontederia_cordata", "Pontederia cordata", "Pontederia cordata",
    "Hierba palustre erecta, robusta y rizomatosa.",
    "Hojas largamente pecioladas con lamina ovada algo cordada; espigas de 10-25 cm y utriculos con seis costillas.",
    "America calida; muy comun en pajonales del Delta y la ribera platense."
  ),
  ed2_pontederia_rotundifolia: species(
    "ed2_pontederia_rotundifolia", "Pontederia rotundifolia", "Camalote",
    "Hierba flotante con tallos tendidos y hojas largamente pecioladas.",
    "Lamina orbicular o reniforme; espiga densa con 30-70 flores azules o lilacinas y utriculo con doce aristas muricadas.",
    "America tropical hasta el Rio de la Plata; camalotales."
  ),
  ed2_heteranthera_peduncularis: species(
    "ed2_heteranthera_peduncularis", "Heteranthera peduncularis", "Heteranthera peduncularis",
    "Hierba acuatica de tallos flotantes y hojas con limbo acorazonado.",
    "Espigas de nueve a dieciseis flores; perigonio lilacino de 16 mm y tres estambres desiguales.",
    "America calida; rara en charcas del partido de Pergamino."
  ),
};

export const secondEditionPontederiaceaeKeyData: Record<string, CladoNode> = {
  ed2_family_pontederiaceae: {
    id: "ed2_family_pontederiaceae", milestone: "Pontederiaceae", manualPage: 181,
    descripcion: "¿Las flores poseen seis estambres o tres?",
    opcionA: { label: "Seis estambres", keyStep: "A", nextNodeId: "ed2_pontederiaceae_ovary" },
    opcionA_prima: { label: "Tres estambres y ovario trilocular", keyStep: "A'", especieId: "ed2_heteranthera_peduncularis" },
  },
  ed2_pontederiaceae_ovary: {
    id: "ed2_pontederiaceae_ovary", milestone: "Pontederiaceae: ovario", manualPage: 181,
    descripcion: "¿El ovario es trilocular y produce una capsula con muchas semillas?",
    opcionA: { label: "Si; ovario trilocular y capsula dehiscente polisperma", keyStep: "B", nextNodeId: "ed2_eichhornia" },
    opcionA_prima: { label: "No; aparentemente unilocular y utriculo uniseminado", keyStep: "B'", nextNodeId: "ed2_pontederia" },
  },
  ed2_eichhornia: {
    id: "ed2_eichhornia", milestone: "Eichhornia", manualPage: 181,
    descripcion: "¿Los peciolos son muy gruesos y casi globosos o alargados y poco engrosados?",
    opcionA: { label: "Muy gruesos, casi globosos; planta en roseta y espigas paucifloras", keyStep: "A", especieId: "ed2_eichhornia_crassipes" },
    opcionA_prima: { label: "Alargados y poco engrosados; tallos flotantes y espigas de 18-40 flores", keyStep: "A'", especieId: "ed2_eichhornia_azurea" },
  },
  ed2_pontederia: {
    id: "ed2_pontederia", milestone: "Pontederia", manualPage: 183,
    descripcion: "¿La planta es palustre y erecta o flotante con tallos tendidos?",
    opcionA: { label: "Palustre, erecta y rizomatosa; utriculo con seis costillas", keyStep: "A", especieId: "ed2_pontederia_cordata" },
    opcionA_prima: { label: "Flotante, con tallos tendidos; utriculo con doce aristas", keyStep: "A'", especieId: "ed2_pontederia_rotundifolia" },
  },
};
