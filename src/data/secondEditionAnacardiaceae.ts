import { CladoNode, Especie } from "@/types";

function species(id: string, scientificName: string, commonName: string, characteristics: string, distribution: string): Especie {
  return {
    id,
    nombreCientifico: scientificName,
    nombreVulgar: commonName,
    familia: "LXXXVI. Anacardiaceae",
    descripcion: characteristics.split(";", 1)[0] + ".",
    caracteristicas: characteristics,
    distribucion: distribution,
  };
}

export const secondEditionAnacardiaceaeSpecies: Record<string, Especie> = {
  ed2_schinus_longifolius: species("ed2_schinus_longifolius", "Schinus longifolius", "Molle", "Arbol de 2-5 m con ramas espinescentes; hojas oblanceolado-espatuladas, glabras, enteras, de 2,5-7 cm x 0,5-1,4 cm; inflorescencia de 1 cm; petalos de 2 mm; fruto lilacino de 6 mm", "Sur de Brasil, Uruguay y nordeste de Argentina hasta las barrancas del Parana y los bosques de Celtis del este de Buenos Aires; usado en medicina popular."),
  ed2_schinus_engleri: species("ed2_schinus_engleri", "Schinus engleri var. uruguayensis", "Molle", "Arbusto o arbolito de hasta 3 m con ramas espinescentes; hojas juveniles ovadas, dentadas o inciso-aserradas, de 1,5-4 cm x 1-2 cm; hojas adultas angostamente ovadas de 1,5-3 cm x 0,5-1 cm; inflorescencia de 1 cm", "Sur de Brasil, Uruguay y este de Argentina hasta la Isla Martin Garcia."),
};

export const secondEditionAnacardiaceaeKeyData: Record<string, CladoNode> = {
  ed2_family_anacardiaceae: {
    id: "ed2_family_anacardiaceae",
    milestone: "LXXXVI. Anacardiaceae",
    manualPage: 390,
    descripcion: "Como son las hojas?",
    opcionA: { label: "Hojas oblanceolado-espatuladas, glabras y enteras", keyStep: "A", especieId: "ed2_schinus_longifolius" },
    opcionA_prima: { label: "Hojas juveniles ovadas, dentadas o inciso-aserradas; adultas angostamente ovadas", keyStep: "A'", especieId: "ed2_schinus_engleri" },
  },
};
