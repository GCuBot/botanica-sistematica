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

export const secondEditionSantalaceaeLoranthaceaeAristolochiaceaeSpecies: Record<string, Especie> = {
  ed2_arjona_tuberosa_tandilensis: species(
    "ed2_arjona_tuberosa_tandilensis", "Arjona tuberosa var. tandilensis", "Mata trigo; macachin del trigo", "LI. Santalaceae",
    "Hierba hemiparasita de 7-20 cm, densamente pubescente; hojas lineares densas y apiculadas; flores blancas o violaceas con perianto tubuloso",
    "Centro de Argentina y Uruguay; frecuente en las sierras de Tandil y Balcarce y rara cerca de la Capital Federal; parasita trigales."
  ),
  ed2_acanthosyris_spinescens: species(
    "ed2_acanthosyris_spinescens", "Acanthosyris spinescens", "Quebradillo", "LI. Santalaceae",
    "Arbusto o arbolito hemiparasito de 2-3 m con espinas axilares rectas; hojas oblanceoladas; flores amarillentas y drupas globosas lisas",
    "Sur de Brasil, Uruguay y nordeste de Argentina; rara en bosques xerofilos proximos a la ribera del Plata."
  ),
  ed2_jodina_rhombifolia: species(
    "ed2_jodina_rhombifolia", "Jodina rhombifolia", "Sombra de toro; quebracho flojo", "LI. Santalaceae",
    "Arbolito hemiparasito; hojas alternas, coriaceas, rombicas y espinosas en los angulos; flores en glomerulos axilares y fruto rojo rugoso",
    "Sur de Brasil, Paraguay, Uruguay y nordeste de Argentina; frecuente en talares de los alrededores de Buenos Aires."
  ),
  ed2_ligaria_cuneifolia: species(
    "ed2_ligaria_cuneifolia", "Ligaria cuneifolia", "Liga; liguilla", "LII. Loranthaceae",
    "Arbusto hemiparasito de tallos lenosos; hojas alternas, crasas y linear-espatuladas; flores axilares solitarias con perigonio rojo de 3,5-4,5 cm",
    "Sudamerica calida; en los alrededores de Buenos Aires parasita talas y chanares."
  ),
  ed2_aristolochia_macroura: species(
    "ed2_aristolochia_macroura", "Aristolochia macroura", "Patito", "LIII. Aristolochiaceae",
    "Planta voluble robusta; hojas profundamente bilobadas; perigonio de 9-10 cm con limbo acorazonado y un apendice linear muy largo",
    "Sur de Brasil y nordeste de Argentina hasta el Delta del Parana y la ribera platense."
  ),
  ed2_aristolochia_fimbriata: species(
    "ed2_aristolochia_fimbriata", "Aristolochia fimbriata", "Patito", "LIII. Aristolochiaceae",
    "Hemicriptofita de raices muy gruesas y tallos ascendentes de 30-40 cm; hojas reniformes; limbo del perigonio reniforme, fimbriado y con manchas purpureas",
    "Sur de Brasil, Paraguay, Uruguay y nordeste de Argentina; en talares de Buenos Aires."
  ),
  ed2_aristolochia_stuckertii: species(
    "ed2_aristolochia_stuckertii", "Aristolochia stuckertii", "Aristolochia stuckertii", "LIII. Aristolochiaceae",
    "Hierba pequena rizomatosa con raices napiformes y tallos rastreros; hojas ovado-triangulares cordadas; flores amarillentas con limbo lanceolado",
    "Sur de Argentina; hallada en Pergamino y Campana."
  ),
  ed2_aristolochia_triangularis: species(
    "ed2_aristolochia_triangularis", "Aristolochia triangularis", "Aristolochia triangularis", "LIII. Aristolochiaceae",
    "Planta voluble robusta; hojas triangulares; flores axilares rosadas con limbo redondeado y manchas pardas; capsulas elipsoides",
    "Sur de Brasil, Paraguay, Uruguay y nordeste de Argentina hasta la Isla Martin Garcia."
  ),
};

function singleSpeciesNode(id: string, milestone: string, manualPage: number, speciesId: string, scientificName: string): CladoNode {
  return {
    id, milestone, manualPage,
    descripcion: `${milestone}: unica especie tratada para la region.`,
    opcionA: { label: `Identificar como ${scientificName}`, keyStep: "1", especieId: speciesId },
    opcionA_prima: { label: `Identificar como ${scientificName}`, keyStep: "1", especieId: speciesId },
  };
}

export const secondEditionSantalaceaeLoranthaceaeAristolochiaceaeKeyData: Record<string, CladoNode> = {
  ed2_family_santalaceae: {
    id: "ed2_family_santalaceae", milestone: "Santalaceae", manualPage: 228,
    descripcion: "¿La planta es herbacea o lenosa?",
    opcionA: { label: "Hierba; perianto tubuloso", keyStep: "A", especieId: "ed2_arjona_tuberosa_tandilensis" },
    opcionA_prima: { label: "Arbol o arbusto; perianto no tubuloso", keyStep: "A'", nextNodeId: "ed2_santalaceae_leaves" },
  },
  ed2_santalaceae_leaves: {
    id: "ed2_santalaceae_leaves", milestone: "Santalaceae: plantas lenosas", manualPage: 228,
    descripcion: "¿Las hojas son oblanceoladas o rombicas y espinosas?",
    opcionA: { label: "Oblanceoladas; flores en racimos paucifloros y fruto liso", keyStep: "B", especieId: "ed2_acanthosyris_spinescens" },
    opcionA_prima: { label: "Rombicas y espinosas; flores en glomerulos axilares y fruto rugoso", keyStep: "B'", especieId: "ed2_jodina_rhombifolia" },
  },
  ed2_family_loranthaceae: singleSpeciesNode(
    "ed2_family_loranthaceae", "Loranthaceae", 231, "ed2_ligaria_cuneifolia", "Ligaria cuneifolia"
  ),
  ed2_family_aristolochiaceae: {
    id: "ed2_family_aristolochiaceae", milestone: "Aristolochiaceae: Aristolochia", manualPage: 233,
    descripcion: "¿Las hojas son profundamente bilobadas?",
    opcionA: { label: "Si; planta voluble con perigonio provisto de un apendice linear muy largo", keyStep: "A", especieId: "ed2_aristolochia_macroura" },
    opcionA_prima: { label: "No; hojas enteras y limbo sin apendice linear largo", keyStep: "A'", nextNodeId: "ed2_aristolochia_leaf_shape" },
  },
  ed2_aristolochia_leaf_shape: {
    id: "ed2_aristolochia_leaf_shape", milestone: "Aristolochia: hojas enteras", manualPage: 233,
    descripcion: "¿Las hojas son reniformes u ovado-triangulares?",
    opcionA: { label: "Reniformes; limbo del perigonio reniforme y fimbriado", keyStep: "B", especieId: "ed2_aristolochia_fimbriata" },
    opcionA_prima: { label: "Ovado-triangulares; limbo no fimbriado", keyStep: "B'", nextNodeId: "ed2_aristolochia_perianth_limb" },
  },
  ed2_aristolochia_perianth_limb: {
    id: "ed2_aristolochia_perianth_limb", milestone: "Aristolochia: limbo del perigonio", manualPage: 233,
    descripcion: "¿El limbo del perigonio es lanceolado o redondeado?",
    opcionA: { label: "Lanceolado; hierba pequena rizomatosa con flores amarillentas", keyStep: "C", especieId: "ed2_aristolochia_stuckertii" },
    opcionA_prima: { label: "Redondeado y con manchas pardas; planta voluble con flores rosadas", keyStep: "C'", especieId: "ed2_aristolochia_triangularis" },
  },
};
