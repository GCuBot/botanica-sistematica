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

export const secondEditionMyrsinaceaeToSapotaceaeSpecies: Record<string, Especie> = {
  ed2_rapanea_laetevirens: species("ed2_rapanea_laetevirens", "Rapanea laetevirens", "Canelon", "CXIV. Myrsinaceae", "Arbol de 6-10 m con ramitas glabras; flores en racimos cortos con eje conspicuo; hojas verdes al secarse, cortamente pecioladas, oblanceoladas, obtusas, enteras y glabras; corolas de 2,5 mm", "Norte de Argentina, Uruguay, sur de Brasil y Paraguay. Comun en selvas marginales del Delta y ribera platense."),
  ed2_rapanea_lorentziana: species("ed2_rapanea_lorentziana", "Rapanea lorentziana", "Canelon", "CXIV. Myrsinaceae", "Arbol de 6-10 m; flores en umbelas densas; hojas castanas al secarse, cortamente pecioladas, oblanceoladas, obtusas, enteras y glabras", "Sur de Brasil, Uruguay, Paraguay y nordeste de Argentina hasta el Delta y ribera platense."),
  ed2_samolus_valerandi: species("ed2_samolus_valerandi", "Samolus valerandi", "Samolus valerandi", "CXV. Primulaceae", "Hierba anual, glabra, erecta, de 10-40 cm; hojas alternas, obovado-espatuladas y enteras; flores en racimos terminales; ovario semiinfero; corola blanca; capsula dehiscente por valvas", "Cosmopolita. Frecuente en suelos humedos."),
  ed2_pelletiera_serpyllifolia: species("ed2_pelletiera_serpyllifolia", "Pelletiera serpyllifolia", "Pelletiera serpyllifolia", "CXV. Primulaceae", "Hierba de 2-10 cm, glabra, con tallos ascendentes angulosos; hojas opuestas, sesiles y lanceoladas; flores blancas solitarias axilares, cortamente pedunculadas; capsula globosa de dehiscencia longitudinal", "America austral. Rara en suelos humedos de la ribera platense."),
  ed2_anagallis_arvensis: species("ed2_anagallis_arvensis", "Anagallis arvensis", "Anagallis arvensis", "CXV. Primulaceae", "Anual glabra, con tallos ascendentes o tendidos; hojas opuestas o ternadas, sesiles, ovadas y enteras; flores axilares pedunculadas; corola mayor que el caliz; capsula de dehiscencia transversal", "Europa. Adventicia en regiones templadas. Comun en suelos modificados."),
  ed2_centunculus_minimus: species("ed2_centunculus_minimus", "Centunculus minimus", "Centunculus minimus", "CXV. Primulaceae", "Hierba pigmea de 3-7 cm; hojas alternas o brevemente pecioladas; flores axilares subsesiles de cerca de 1 mm; corola menor que el caliz; capsula dehiscente transversalmente", "Europa. Adventicia en todo el globo. Rara en la region."),
  ed2_limonium_brasiliense: species("ed2_limonium_brasiliense", "Limonium brasiliense", "Guaycuru", "CXVI. Plumbaginaceae", "Hemicriptofito de 25-40 cm; raices gruesas rojizas; hojas en roseta, obovadas, obtusas, atenuadas en peciolo, onduladas y glabras; tallos escapiformes ramosos; flores numerosas en panojas de espigas unilaterales; corolas blanco-azuladas", "Suelos salados de America austral. Comun en campos bajos y salobres."),
  ed2_pouteria_salicifolia: species("ed2_pouteria_salicifolia", "Pouteria salicifolia", "Mata-oso", "CXVII. Sapotaceae", "Arbol de 8-15 m con corteza parda agrietada; hojas alternas, coriaceas, oblanceoladas, enteras y glabras; flores pequenas amarillentas en fasciculos axilares; caliz sedoso-pubescente; frutos carnosos ovoides con punta curva", "Sur de Brasil, Paraguay, Uruguay y nordeste de Argentina. Frecuente en selvas marginales del Delta y ribera del Plata."),
};

export const secondEditionMyrsinaceaeToSapotaceaeKeyData: Record<string, CladoNode> = {
  ed2_family_myrsinaceae: {
    id: "ed2_family_myrsinaceae",
    milestone: "CXIV. Myrsinaceae",
    manualPage: 471,
    descripcion: "Como se disponen las flores y que color toman las hojas al secarse?",
    opcionA: { label: "Flores en racimos cortos con eje conspicuo; hojas verdes al secarse", keyStep: "A", especieId: "ed2_rapanea_laetevirens" },
    opcionA_prima: { label: "Flores en umbelas densas; hojas castanas al secarse", keyStep: "A'", especieId: "ed2_rapanea_lorentziana" },
  },
  ed2_family_primulaceae: {
    id: "ed2_family_primulaceae",
    milestone: "CXV. Primulaceae",
    manualPage: 471,
    descripcion: "Las flores estan en racimos/corimbos terminales o solitarias axilares?",
    opcionA: { label: "Flores en racimos o corimbos terminales; ovario semiinfero", keyStep: "A", especieId: "ed2_samolus_valerandi" },
    opcionA_prima: { label: "Flores solitarias en las axilas de las hojas; ovario supero", keyStep: "A'", nextNodeId: "ed2_primulaceae_capsule_dehiscence" },
  },
  ed2_primulaceae_capsule_dehiscence: {
    id: "ed2_primulaceae_capsule_dehiscence",
    milestone: "Primulaceae",
    manualPage: 471,
    descripcion: "Como abre la capsula?",
    opcionA: { label: "Dehiscencia longitudinal", keyStep: "B", especieId: "ed2_pelletiera_serpyllifolia" },
    opcionA_prima: { label: "Dehiscencia transversal, pixidio", keyStep: "B'", nextNodeId: "ed2_primulaceae_stamen_position" },
  },
  ed2_primulaceae_stamen_position: {
    id: "ed2_primulaceae_stamen_position",
    milestone: "Primulaceae",
    manualPage: 471,
    descripcion: "Donde se insertan los estambres?",
    opcionA: { label: "En la base de la corola, que es mayor que el caliz", keyStep: "C", especieId: "ed2_anagallis_arvensis" },
    opcionA_prima: { label: "En la fauce de la corola, que es menor que el caliz", keyStep: "C'", especieId: "ed2_centunculus_minimus" },
  },
  ed2_family_plumbaginaceae: single("ed2_family_plumbaginaceae", "CXVI. Plumbaginaceae", 475, "ed2_limonium_brasiliense", "Identificar como Limonium brasiliense"),
  ed2_family_sapotaceae: single("ed2_family_sapotaceae", "CXVII. Sapotaceae", 476, "ed2_pouteria_salicifolia", "Identificar como Pouteria salicifolia"),
};
