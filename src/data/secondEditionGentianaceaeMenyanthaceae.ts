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

function single(id: string, milestone: string, manualPage: number, speciesId: string, label: string): CladoNode {
  return {
    id,
    milestone,
    manualPage,
    descripcion: label,
    opcionA: { label, keyStep: "1", especieId: speciesId },
    opcionA_prima: { label, keyStep: "1", especieId: speciesId },
  };
}

export const secondEditionGentianaceaeMenyanthaceaeSpecies: Record<string, Especie> = {
  ed2_microcala_quadrangularis: species("ed2_microcala_quadrangularis", "Microcala quadrangularis", "Microcala quadrangularis", "CXXII. Gentianaceae", "Hierba anual glabra con tallos filiformes cuadrangulares de 5-10 cm; hojas opuestas, oblongas u ovadas, sesiles; flores solitarias terminales; caliz tubuloso-prismatico; corola amarilla", "America subtropical y templada. Rara en las sierras de la provincia."),
  ed2_blackstonia_perfoliata: species("ed2_blackstonia_perfoliata", "Blackstonia perfoliata", "Blackstonia perfoliata", "CXXII. Gentianaceae", "Hierba anual con hojas opuestas ovado-triangulares, connatas por su base; flores amarillas en cimas dicotomicas laxas; caliz 6-8-secto, con segmentos tan largos o mas que la corola", "Europa. Adventicia en Argentina y Uruguay; en suelos arenosos de San Clemente del Tuyu y La Margarita."),
  ed2_zygostigma_australe: species("ed2_zygostigma_australe", "Zygostigma australe", "Zygostigma australe", "CXXII. Gentianaceae", "Hierba perenne, erecta, poco ramificada, de 20-50 cm; hojas opuestas, sesiles, lineares y agudas; flores pocas, largamente pedunculadas; caliz profundamente 4-5-secto; corola infundibuliforme", "America austral. Rara en la estepa climax y sierras."),
  ed2_centaurium_pulchellum: species("ed2_centaurium_pulchellum", "Centaurium pulchellum", "Centaurium pulchellum", "CXXII. Gentianaceae", "Hierba anual, erecta y ramosa, de 10-50 cm; hojas ovadas u oblongas, subobtusas; flores numerosas en cimas dicotomicas laxas; corola rosada; anteras espiraladas luego de la antesis", "Europa, adventicia en America. Frecuente en suelos humedos."),
  ed2_nymphoides_indica: species("ed2_nymphoides_indica", "Nymphoides indica", "Nymphoides indica", "CXXIII. Menyanthaceae", "Hierba acuatica con hojas largamente pecioladas, de laminas orbiculares, cordadas y flotantes; flores en fasciculos umbeliformes axilares, con corola blanca de lobulos fimbriados; capsula globosa e indehiscente", "Pantropical. Rara en arroyos y lagunas de los alrededores de Buenos Aires."),
};

export const secondEditionGentianaceaeMenyanthaceaeKeyData: Record<string, CladoNode> = {
  ed2_family_gentianaceae: {
    id: "ed2_family_gentianaceae",
    milestone: "CXXII. Gentianaceae",
    manualPage: 482,
    descripcion: "Como son las flores y el caliz?",
    opcionA: { label: "Flores 4-meras; caliz tubuloso, truncado y 4-dentado", keyStep: "A", especieId: "ed2_microcala_quadrangularis" },
    opcionA_prima: { label: "Flores 4-8-meras; caliz profundamente lobulado", keyStep: "A'", nextNodeId: "ed2_gentianaceae_calyx_lobes" },
  },
  ed2_gentianaceae_calyx_lobes: {
    id: "ed2_gentianaceae_calyx_lobes",
    milestone: "Gentianaceae",
    manualPage: 482,
    descripcion: "El caliz es 6-8-secto o 4-5-mero?",
    opcionA: { label: "Caliz 6-8-secto; corola y estambres generalmente 8; hojas connatas", keyStep: "B", especieId: "ed2_blackstonia_perfoliata" },
    opcionA_prima: { label: "Caliz 4-5-mero; corola y estambres 4-5", keyStep: "B'", nextNodeId: "ed2_gentianaceae_stigma_anthers" },
  },
  ed2_gentianaceae_stigma_anthers: {
    id: "ed2_gentianaceae_stigma_anthers",
    milestone: "Gentianaceae",
    manualPage: 482,
    descripcion: "Como son los lobulos del estigma y las anteras?",
    opcionA: { label: "Lobulos del estigma conniventes; anteras rectas; flores 1-3", keyStep: "C", especieId: "ed2_zygostigma_australe" },
    opcionA_prima: { label: "Lobulos del estigma divergentes; anteras espiraladas; flores numerosas", keyStep: "C'", especieId: "ed2_centaurium_pulchellum" },
  },
  ed2_family_menyanthaceae: single("ed2_family_menyanthaceae", "CXXIII. Menyanthaceae", 486, "ed2_nymphoides_indica", "Identificar como Nymphoides indica"),
};
