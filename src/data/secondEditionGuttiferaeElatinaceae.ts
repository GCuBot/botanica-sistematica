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

export const secondEditionGuttiferaeElatinaceaeSpecies: Record<string, Especie> = {
  ed2_hypericum_connatum: species("ed2_hypericum_connatum", "Hypericum connatum", "Hypericum connatum", "XCV. Guttiferae", "Sufrutice glabro de 30-70 cm; hojas anchamente ovadas o semicirculares, perfoliadas, totalmente connatas en la base, enteras y punteadas; flores amarillas en cimas dicotomicas; ovario unilocular; capsula de 5-7 mm", "Sur de Brasil, Paraguay, Uruguay y norte y centro de Argentina hasta las sierras de la provincia de Buenos Aires."),
  ed2_hypericum_campestre: species("ed2_hypericum_campestre", "Hypericum campestre", "Hypericum campestre", "XCV. Guttiferae", "Hierba perenne de 50-80 cm, con tallos cuadrangulares glabros; hojas oblongo-lanceoladas, enteras, glabras y punteadas; estilos 5; flores amarillas en cimas dicotomicas; capsula ovoide", "Sur de Brasil, Uruguay y nordeste de Argentina hasta el Delta y la ribera del Plata."),
  ed2_hypericum_mutilum: species("ed2_hypericum_mutilum", "Hypericum mutilum", "Hypericum mutilum", "XCV. Guttiferae", "Hierba anual glabra; hojas opuestas, elipticas, obtusas, enteras, semiabrazadoras en la base y punteadas, de 1-2 cm; estilos 3, raramente 4; flores diminutas en cimas dicotomicas", "America. Nordeste de Argentina hasta el Delta."),
  ed2_hypericum_perforatum: species("ed2_hypericum_perforatum", "Hypericum perforatum", "Hypericum perforatum", "XCV. Guttiferae", "Hierba perenne, ramosa, glabra, de 50-80 cm; hojas oblongo-elipticas, obtusas, enteras y punteadas; estilos 3; flores amarillas numerosas con petalos de 10 mm en cimas dicotomicas", "Europa. Accidental cerca de la Capital Federal."),
  ed2_elatine_triandra_brachysperma: species("ed2_elatine_triandra_brachysperma", "Elatine triandra var. brachysperma", "Elatine triandra", "XCVI. Elatinaceae", "Plantita pigmea con tallos rastreros de 3-4 cm; hojas ovadas, obtusas y enteras; flores solitarias, sesiles, trimeras y verdosas", "Cosmopolita. Rara cerca de La Plata; primaveral."),
};

export const secondEditionGuttiferaeElatinaceaeKeyData: Record<string, CladoNode> = {
  ed2_family_guttiferae: {
    id: "ed2_family_guttiferae",
    milestone: "XCV. Guttiferae",
    manualPage: 419,
    descripcion: "Las hojas estan connatas en la base?",
    opcionA: { label: "Hojas anchamente ovadas o semicirculares, perfoliadas y connatas", keyStep: "A", especieId: "ed2_hypericum_connatum" },
    opcionA_prima: { label: "Hojas no connatas, lanceoladas u oblongas", keyStep: "A'", nextNodeId: "ed2_hypericum_styles" },
  },
  ed2_hypericum_styles: {
    id: "ed2_hypericum_styles",
    milestone: "Hypericum",
    manualPage: 419,
    descripcion: "Cuantos estilos presenta?",
    opcionA: { label: "Cinco estilos", keyStep: "B", especieId: "ed2_hypericum_campestre" },
    opcionA_prima: { label: "Tres estilos, raramente cuatro", keyStep: "B'", nextNodeId: "ed2_hypericum_flower_size" },
  },
  ed2_hypericum_flower_size: {
    id: "ed2_hypericum_flower_size",
    milestone: "Hypericum: tamano floral",
    manualPage: 419,
    descripcion: "Las flores son diminutas o mas grandes?",
    opcionA: { label: "Flores diminutas, petalos de poco mas de 2 mm; hierbas anuales", keyStep: "C", especieId: "ed2_hypericum_mutilum" },
    opcionA_prima: { label: "Flores mas grandes, petalos de 10 mm; hierba perenne", keyStep: "C'", especieId: "ed2_hypericum_perforatum" },
  },
  ed2_family_elatinaceae: {
    id: "ed2_family_elatinaceae",
    milestone: "XCVI. Elatinaceae",
    manualPage: 420,
    descripcion: "Elatinaceae: unica especie tratada para la region.",
    opcionA: { label: "Identificar como Elatine triandra var. brachysperma", keyStep: "1", especieId: "ed2_elatine_triandra_brachysperma" },
    opcionA_prima: { label: "Identificar como Elatine triandra var. brachysperma", keyStep: "1", especieId: "ed2_elatine_triandra_brachysperma" },
  },
};
