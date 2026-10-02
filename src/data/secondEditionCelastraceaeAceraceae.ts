import { CladoNode, Especie } from "@/types";

function species(
  id: string,
  scientificName: string,
  commonName: string,
  family: string,
  characteristics: string,
  distribution: string
): Especie {
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

export const secondEditionCelastraceaeAceraceaeSpecies: Record<string, Especie> = {
  ed2_schaefferia_argentinensis: species(
    "ed2_schaefferia_argentinensis",
    "Schaefferia argentinensis",
    "Schaefferia argentinensis",
    "LXXXVII. Celastraceae",
    "Arbusto o arbolito glabro de 1,5-4 m; ramas delgadas y estriadas; hojas anchamente lanceoladas u ovadas, de 1,5-7 cm x 1-4 cm; flores axilares, pedunculadas, pequenas y verdosas; fruto globoso u ovoide, anaranjado, de 4 mm, con dos semillas",
    "Paraguay, Uruguay y nordeste de Argentina hasta las barrancas del Parana al norte de Buenos Aires."
  ),
  ed2_maytenus_vitis_idaea: species(
    "ed2_maytenus_vitis_idaea",
    "Maytenus vitis-idaea",
    "Maytenus vitis-idaea",
    "LXXXVII. Celastraceae",
    "Arbusto o arbolito de 2-5 m; hojas enteras, carnosas, obovadas o subcirculares, obtusas, cortamente pecioladas, de 2-8 cm; flores en pequenas cimas axilares; capsulas globosas, 3-valvas, de 1-1,5 cm",
    "Bolivia, Paraguay y norte y centro de Argentina. Rara en las barrancas del Parana al norte de Buenos Aires."
  ),
  ed2_maytenus_ilicifolia: species(
    "ed2_maytenus_ilicifolia",
    "Maytenus ilicifolia",
    "Sombra de toro",
    "LXXXVII. Celastraceae",
    "Arbusto o arbolito de hasta 5 m; hojas dentado-espinosas, coriaceas, elipticas, de 2-15 cm; flores en fasciculos axilares; capsulas bivalvas de cerca de 1 cm",
    "Bolivia, Paraguay, sur de Brasil y este de Argentina. Rara en las barrancas del Parana."
  ),
  ed2_acer_negundo: species(
    "ed2_acer_negundo",
    "Acer negundo",
    "Arce",
    "LXXXVIII. Aceraceae",
    "Arbol dioico de 10-12 m; hojas pinaticompuestas, 3-7-folioladas; fruto disamara",
    "Originario de America del Norte y cultivado con frecuencia en calles y paseos; asilvestrado en las islas del Delta."
  ),
};

export const secondEditionCelastraceaeAceraceaeKeyData: Record<string, CladoNode> = {
  ed2_family_celastraceae: {
    id: "ed2_family_celastraceae",
    milestone: "LXXXVII. Celastraceae",
    manualPage: 391,
    descripcion: "El fruto es drupaceo con flores tetrameras o capsular con flores pentameras?",
    opcionA: { label: "Fruto drupaceo; flores tetrameras", keyStep: "A", especieId: "ed2_schaefferia_argentinensis" },
    opcionA_prima: { label: "Fruto capsular; flores pentameras", keyStep: "A'", nextNodeId: "ed2_maytenus_leaves" },
  },
  ed2_maytenus_leaves: {
    id: "ed2_maytenus_leaves",
    milestone: "Maytenus",
    manualPage: 392,
    descripcion: "Las hojas son enteras y carnosas o dentado-espinosas y coriaceas?",
    opcionA: { label: "Enteras, carnosas, obovadas o subcirculares", keyStep: "A", especieId: "ed2_maytenus_vitis_idaea" },
    opcionA_prima: { label: "Dentado-espinosas, coriaceas, elipticas", keyStep: "A'", especieId: "ed2_maytenus_ilicifolia" },
  },
  ed2_family_aceraceae: {
    id: "ed2_family_aceraceae",
    milestone: "LXXXVIII. Aceraceae",
    manualPage: 393,
    descripcion: "Aceraceae: unica especie tratada para la region.",
    opcionA: { label: "Identificar como Acer negundo", keyStep: "1", especieId: "ed2_acer_negundo" },
    opcionA_prima: { label: "Identificar como Acer negundo", keyStep: "1", especieId: "ed2_acer_negundo" },
  },
};
