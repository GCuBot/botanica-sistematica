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

export const secondEditionLythraceaeCombretaceaeSpecies: Record<string, Especie> = {
  ed2_heimia_salicifolia: species("ed2_heimia_salicifolia", "Heimia salicifolia", "Quiebra arado", "CVI. Lythraceae", "Arbustito de hasta 1 m; hojas decusadas o en verticilos trimeros, lanceoladas o elipticas, enteras, discolores, de 1,5-8 cm; flores solitarias axilares, amarillas y grandes; petalos de 10-18 mm; capsula 4-locular", "America calida. Hallada en bosques riberenos y estepa climax."),
  ed2_cuphea_glutinosa: species("ed2_cuphea_glutinosa", "Cuphea glutinosa", "Siete sangrias", "CVI. Lythraceae", "Planta sufruticosa de hasta 40 cm, densamente glanduloso-pubescente; hojas decusadas, cortamente pecioladas, ovado-elipticas, de 4-20 mm; pedunculo floral con dos bracteolas cerca del apice; flores alternas; receptaculo de 6-9 mm; petalos violaceos", "America templado-calida. Frecuente en la estepa climax y region serrana; florece en verano; medicinal."),
  ed2_cuphea_fruticosa: species("ed2_cuphea_fruticosa", "Cuphea fruticosa", "Siete sangrias", "CVI. Lythraceae", "Sufrutice de hasta 50 cm; pedunculo floral sin bracteolas; hojas lanceoladas, decusadas, subsesiles, glabras o casi, de 2-6 cm; flores opuestas en seudorracimos terminales; receptaculo de 8-10 mm; petalos lilacinos", "America austral subtropical. Muy comun en el Delta y la ribera platense."),
  ed2_cuphea_racemosa: species("ed2_cuphea_racemosa", "Cuphea racemosa", "Cuphea racemosa", "CVI. Lythraceae", "Hierba o sufrutice de hasta 60 cm; pedunculo floral sin bracteolas; hojas ovadas u ovado-oblongas, obtusas en la base, de 2-8 cm; flores opuestas en seudorracimos terminales; receptaculo de 6-8 mm; petalos rosados o violaceos", "America del Sud. Frecuente en la ribera platense y Delta; mas rara en las sierras."),
  ed2_lythrum_maritimum: species("ed2_lythrum_maritimum", "Lythrum maritimum", "Lythrum maritimum", "CVI. Lythraceae", "Planta sufruticosa de 50-80 cm; hojas decusadas o alternas, elipticas u oblongas, de 1-3 cm; flores sesiles axilares; receptaculo semialado de 5-8 mm; base del ovario rodeada por anillo carnoso; estambres 6; petalos violaceos", "America calida. Comun en los bosques de la ribera del Plata; florece en verano."),
  ed2_lythrum_hyssopifolia: species("ed2_lythrum_hyssopifolia", "Lythrum hyssopifolia", "Lythrum hyssopifolia", "CVI. Lythraceae", "Hierba anual decumbente o ascendente, con tallos glabros; hojas lineal-oblongas de 1-3 cm; flores sesiles axilares; receptaculo de 4-5 mm; base del ovario sin anillo carnoso; estambres generalmente 4; petalos azules", "Cosmopolita. Comun en suelos humedos."),
  ed2_terminalia_australis: species("ed2_terminalia_australis", "Terminalia australis", "Palo amarillo", "CVII. Combretaceae", "Arbol de 4-10 m; hojas oblanceoladas, glabras, enteras, de 2-7 cm; flores amarillentas de 2-2,5 mm en capitulos; receptaculo soldado al ovario; fruto ovoide con dos alas", "Paraguay, Uruguay y nordeste de Argentina hasta el Delta y la ribera del Plata; florece en primavera."),
};

export const secondEditionLythraceaeCombretaceaeKeyData: Record<string, CladoNode> = {
  ed2_family_lythraceae: {
    id: "ed2_family_lythraceae",
    milestone: "CVI. Lythraceae",
    manualPage: 440,
    descripcion: "Como es el receptaculo y el color de las flores?",
    opcionA: { label: "Receptaculo acampanado; flores amarillas grandes; estambres 12-18", keyStep: "A", especieId: "ed2_heimia_salicifolia" },
    opcionA_prima: { label: "Receptaculo tubuloso; flores rosadas o violaceas; estambres 4 o mas", keyStep: "A'", nextNodeId: "ed2_lythraceae_tubular_flowers" },
  },
  ed2_lythraceae_tubular_flowers: {
    id: "ed2_lythraceae_tubular_flowers",
    milestone: "Lythraceae",
    manualPage: 440,
    descripcion: "Las flores son zigomorfas y con receptaculo bolsudo?",
    opcionA: { label: "Flores zigomorfas; base del receptaculo bolsuda; apendices intersepalicos ausentes o reducidos", keyStep: "B", nextNodeId: "ed2_cuphea_bracteoles" },
    opcionA_prima: { label: "Flores actinomorfas; receptaculo no bolsudo; apendices intersepalicos desarrollados", keyStep: "B'", nextNodeId: "ed2_lythrum_ovary_ring" },
  },
  ed2_cuphea_bracteoles: {
    id: "ed2_cuphea_bracteoles",
    milestone: "Cuphea",
    manualPage: 441,
    descripcion: "El pedunculo floral tiene dos bracteolas cerca del apice?",
    opcionA: { label: "Con dos bracteolas; plantas densamente glanduloso-pubescentes", keyStep: "A", especieId: "ed2_cuphea_glutinosa" },
    opcionA_prima: { label: "Sin bracteolas; plantas pubescentes o casi glabras", keyStep: "A'", nextNodeId: "ed2_cuphea_leaf_shape" },
  },
  ed2_cuphea_leaf_shape: {
    id: "ed2_cuphea_leaf_shape",
    milestone: "Cuphea",
    manualPage: 441,
    descripcion: "Como son las hojas?",
    opcionA: { label: "Hojas lanceoladas, decusadas, subsesiles, glabras o casi", keyStep: "B", especieId: "ed2_cuphea_fruticosa" },
    opcionA_prima: { label: "Hojas ovadas u ovado-oblongas, obtusas en la base", keyStep: "B'", especieId: "ed2_cuphea_racemosa" },
  },
  ed2_lythrum_ovary_ring: {
    id: "ed2_lythrum_ovary_ring",
    milestone: "Lythrum",
    manualPage: 442,
    descripcion: "La base del ovario esta rodeada por un anillo carnoso?",
    opcionA: { label: "Con anillo carnoso; estambres 6; plantas sufruticosas", keyStep: "A", especieId: "ed2_lythrum_maritimum" },
    opcionA_prima: { label: "Sin anillo carnoso; estambres generalmente 4; hierba anual", keyStep: "A'", especieId: "ed2_lythrum_hyssopifolia" },
  },
  ed2_family_combretaceae: single("ed2_family_combretaceae", "CVII. Combretaceae", 443, "ed2_terminalia_australis", "Identificar como Terminalia australis"),
};
