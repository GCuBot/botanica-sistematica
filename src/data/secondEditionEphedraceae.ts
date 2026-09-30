import { CladoNode, Especie } from "@/types";

function species(
  id: string,
  scientificName: string,
  description: string,
  characteristics: string,
  distribution: string,
  commonName: string
): Especie {
  return {
    id,
    nombreCientifico: scientificName,
    nombreVulgar: commonName,
    familia: "XX. Ephedraceae",
    descripcion: description,
    caracteristicas: characteristics,
    distribucion: distribution,
  };
}

export const secondEditionEphedraceaeSpecies: Record<string, Especie> = {
  ed2_ephedra_tweediana: species(
    "ed2_ephedra_tweediana",
    "Ephedra tweediana",
    "Arbusto apoyante y dioico de hasta 6 m, con hojas pequeñas y caducas.",
    "Estróbilos masculinos con tres a siete pares de brácteas y seis a ocho anteras; estróbilos femeninos pedunculados, carnosos y rojos.",
    "Sur del Brasil, Uruguay y Argentina; barrancas del Paraná, isla Martín García y sierras de Balcarce.",
    "Tramontana"
  ),
  ed2_ephedra_triandra: species(
    "ed2_ephedra_triandra",
    "Ephedra triandra",
    "Arbusto apoyante y dioico de hasta 2 m, con hojas pequeñas y caducas.",
    "Estróbilos masculinos con siete a dieciséis verticilos de brácteas y tres anteras; estróbilos femeninos sésiles, carnosos y rojos.",
    "Bolivia y Argentina; hallado en las barrancas del Paraná.",
    "Tramontana, pico de gallo, pico de loro"
  ),
};

export const secondEditionEphedraceaeKeyData: Record<string, CladoNode> = {
  ed2_family_ephedraceae: {
    id: "ed2_family_ephedraceae",
    milestone: "Ephedraceae",
    manualPage: 48,
    descripcion: "¿Cómo están formados los estróbilos masculinos y femeninos?",
    opcionA: {
      label: "Masculinos con tres a siete pares de brácteas y seis a ocho anteras; femeninos pedunculados",
      keyStep: "A",
      especieId: "ed2_ephedra_tweediana",
    },
    opcionA_prima: {
      label: "Masculinos con siete a dieciséis verticilos de brácteas y tres anteras; femeninos sésiles",
      keyStep: "A'",
      especieId: "ed2_ephedra_triandra",
    },
  },
};
