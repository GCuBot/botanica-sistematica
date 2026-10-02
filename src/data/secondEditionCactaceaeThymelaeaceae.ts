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

function node(id: string, milestone: string, page: number, descripcion: string, a: CladoNode["opcionA"], b: CladoNode["opcionA_prima"]): CladoNode {
  return { id, milestone, manualPage: page, descripcion, opcionA: a, opcionA_prima: b };
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

export const secondEditionCactaceaeThymelaeaceaeSpecies: Record<string, Especie> = {
  ed2_opuntia_aurantiaca: species("ed2_opuntia_aurantiaca", "Opuntia aurantiaca", "Tuna", "CIV. Cactaceae", "Arbusto bajo con tallos recostados o rastreros y artejos facilmente caducos; artejos oblongos de 6-8 cm por 1,5-2,5 cm; areolas con lana blanca y gloquidios; espinas 2-5; flores de 3,5-4 cm; fruto rojo", "Uruguay y nordeste de Argentina hasta las barrancas de Campana, isla Martin Garcia y sierras de Tandil."),
  ed2_opuntia_paraguayensis: species("ed2_opuntia_paraguayensis", "Opuntia paraguayensis", "Tuna", "CIV. Cactaceae", "Arbusto de hasta 2 m con tronco casi cilindrico; artejos espatulados, alargados, de 20-25 cm por 8-12 cm y 1 cm de espesor; areolas elipticas sin espinas o con una espina corta; flores amarillo-anaranjadas", "Paraguay y norte de Argentina hasta las sierras de Tandil."),
  ed2_opuntia_vulgaris: species("ed2_opuntia_vulgaris", "Opuntia vulgaris", "Tuna", "CIV. Cactaceae", "Arbusto de 1-4 m con tronco cilindrico; artejos obovados de 10 x 5 a 30 x 15 cm y 1-2 cm de espesor; areolas circulares con una o dos espinas de 2-4 cm; flores amarillas", "America calida. Hallada en la isla Martin Garcia."),
  ed2_rhipsalis_lumbricoides: species("ed2_rhipsalis_lumbricoides", "Rhipsalis lumbricoides", "Rhipsalis lumbricoides", "CIV. Cactaceae", "Epifito con tallos cilindricos recostados sobre ramas con abundantes raices adventicias, ligeramente 8-costados y de unos 6 mm de diametro; areolas con espinitas blancas cortas; flores laterales numerosas con perianto blanco marfil; bayas purpureas", "Sur de Brasil, Paraguay, Uruguay y norte de Argentina; frecuente en bosques del Delta y ribera platense."),
  ed2_cereus_peruvianus: species("ed2_cereus_peruvianus", "Cereus peruvianus", "Cardon", "CIV. Cactaceae", "Planta arborescente de varios metros de altura; ramas redondeadas, erectas, algo tendidas en el apice, de 10-20 cm de diametro; areolas con 5-10 espinas de hasta 1 cm; flores blancas de 15 cm; fruto amarillo", "Sur de Brasil, Uruguay y nordeste de Argentina hasta las barrancas del Parana y la isla Martin Garcia."),
  ed2_cereus_aethiops: species("ed2_cereus_aethiops", "Cereus aethiops", "Cardoncito", "CIV. Cactaceae", "Planta arbustiforme de 1-2 m, con ramas mas estrechas, atenuadas hacia la parte superior; areolas grandes, negras, con 10 o mas espinas; flores rosadas o blancas de unos 22 cm; frutos de 6 cm", "Sur de Brasil hasta el centro de Argentina; cerca de Buenos Aires solo en barrancas del Parana y sierras."),
  ed2_eriocereus_tortuosus: species("ed2_eriocereus_tortuosus", "Eriocereus tortuosus", "Eriocereus tortuosus", "CIV. Cactaceae", "Arbusto apoyante con tallos delgados de 2-4 cm de diametro y 6-8 costillas redondeadas; areolas con 6-10 espinas; flores blancas o rosadas de 12-15 cm", "Especie descripta para Buenos Aires, al parecer muy rara."),
  ed2_echinopsis_tubiflora: species("ed2_echinopsis_tubiflora", "Echinopsis tubiflora", "Echinopsis tubiflora", "CIV. Cactaceae", "Tallos globosos o algo deprimidos, de 7-10 cm por 10-12 cm; costillas 10-14, profundas y de borde agudo; areolas lanosas con 1-2 espinas centrales y 7-8 radiales; flores blancas de 15-20 cm; tubo floral y ovario con escamitas lanosas", "Sur de Brasil, Uruguay y nordeste de Argentina; hallado en las barrancas de Campana."),
  ed2_gymnocalycium_gibbosum: species("ed2_gymnocalycium_gibbosum", "Gymnocalycium gibbosum", "Gymnocalycium gibbosum", "CIV. Cactaceae", "Tallo globoso de 10-15 cm de diametro, con 12-19 costillas divididas en lobulos semiglobosos; areolas con 7-15 espinas subuladas, tiesas y largas; flores blancas de 6-6,5 cm", "Centro y sur de Argentina. Rara en las sierras de Tandil."),
  ed2_wigginsia_tephracantha: species("ed2_wigginsia_tephracantha", "Wigginsia tephracantha", "Wigginsia tephracantha", "CIV. Cactaceae", "Tallos globosos o deprimidos de hasta 15 cm de diametro, con 16-30 costillas de borde agudo y algo onduladas; areolas con 4-7 espinas; flores amarillas de 4-4,5 cm; lobulos del estigma rojos", "Sur de Brasil, Uruguay y nordeste de Argentina hasta las sierras de la provincia de Buenos Aires."),
  ed2_notocactus_submammulosus: species("ed2_notocactus_submammulosus", "Notocactus submammulosus", "Notocactus submammulosus", "CIV. Cactaceae", "Tallo globoso de unos 10 cm de diametro, con unas 13 costillas de borde redondeado divididas en mamelones casi conicos; espinas centrales 2-3 y radiantes 7-9; flores amarillas de 4 cm; escamas del ovario y tubo floral con lana", "Sierras de la provincia de Buenos Aires."),
  ed2_daphnopsis_racemosa: species("ed2_daphnopsis_racemosa", "Daphnopsis racemosa", "Daphnopsis racemosa", "CV. Thymelaeaceae", "Arbusto glabro de cerca de 2 m; hojas coriaceas, alternas, cortamente pecioladas, oblanceolado-espatuladas, obtusas y enteras de 5-7 cm; flores blancas en racimos axilares; frutos ovoides", "Brasil, Paraguay, Uruguay y nordeste de Argentina hasta el Delta y la isla Martin Garcia."),
};

export const secondEditionCactaceaeThymelaeaceaeKeyData: Record<string, CladoNode> = {
  ed2_family_cactaceae: node("ed2_family_cactaceae", "CIV. Cactaceae", 433, "Las areolas tienen gloquidios?", { label: "Con gloquidios; tallos aplanados y articulados", keyStep: "A", nextNodeId: "ed2_opuntia_artejos" }, { label: "Sin gloquidios; tallos cilindricos o globosos", keyStep: "A'", nextNodeId: "ed2_cactaceae_no_glochids" }),
  ed2_opuntia_artejos: node("ed2_opuntia_artejos", "Opuntia", 434, "Como son los artejos?", { label: "Oblongos y alargados, de 6-8 cm por 1,5-2,5 cm; flores de 3,5-4 cm; fruto rojo", keyStep: "A", especieId: "ed2_opuntia_aurantiaca" }, { label: "Anchamente espatulados o redondeados, de 10-30 cm por 5-15 cm; flores mayores", keyStep: "A'", nextNodeId: "ed2_opuntia_large_artejos" }),
  ed2_opuntia_large_artejos: node("ed2_opuntia_large_artejos", "Opuntia", 435, "Los artejos son espatulados u obovados?", { label: "Espatulados, alargados; areolas sin espinas o con una espina corta; flores amarillo-anaranjadas", keyStep: "B", especieId: "ed2_opuntia_paraguayensis" }, { label: "Obovados; areolas circulares con una o dos espinas largas; flores amarillas", keyStep: "B'", especieId: "ed2_opuntia_vulgaris" }),
  ed2_cactaceae_no_glochids: node("ed2_cactaceae_no_glochids", "Cactaceae", 434, "Las flores carecen de tubo y la planta es epifita?", { label: "Flores rotaceas sin tubo; plantas epifitas con tallos cilindricos colgantes", keyStep: "B", especieId: "ed2_rhipsalis_lumbricoides" }, { label: "Flores con tubo desarrollado; plantas generalmente terricolas", keyStep: "B'", nextNodeId: "ed2_cactaceae_stem_shape" }),
  ed2_cactaceae_stem_shape: node("ed2_cactaceae_stem_shape", "Cactaceae", 434, "Los tallos son cilindricos articulados o globosos?", { label: "Tallos cilindricos, generalmente formados por varios artejos", keyStep: "C", nextNodeId: "ed2_cylindrical_cactus_habit" }, { label: "Tallos mas o menos globosos, costados, formados por un solo artejo", keyStep: "C'", nextNodeId: "ed2_globose_cactus_flowers" }),
  ed2_cylindrical_cactus_habit: node("ed2_cylindrical_cactus_habit", "Cactaceae: tallos cilindricos", 434, "La planta es erecta o apoyante?", { label: "Erecta; ovario glabro o con pocas escamitas; fruto glabro", keyStep: "D", nextNodeId: "ed2_cereus_habit" }, { label: "Apoyante o semitrepadora; ovario con numerosas escamas y pelos; fruto con espinitas", keyStep: "D'", especieId: "ed2_eriocereus_tortuosus" }),
  ed2_cereus_habit: node("ed2_cereus_habit", "Cereus", 436, "Es arborescente o arbustiforme?", { label: "Arborescente, de varios metros; ramas erectas de 10-20 cm de diametro", keyStep: "A", especieId: "ed2_cereus_peruvianus" }, { label: "Arbustiforme, de 1-2 m; ramas mas estrechas y atenuadas arriba", keyStep: "A'", especieId: "ed2_cereus_aethiops" }),
  ed2_globose_cactus_flowers: node("ed2_globose_cactus_flowers", "Cactaceae: tallos globosos", 434, "Donde nacen las flores y como es el tubo?", { label: "En areolas laterales, con tubo muy largo y delgado", keyStep: "E", especieId: "ed2_echinopsis_tubiflora" }, { label: "En areolas terminales centrales, con tubo corto", keyStep: "E'", nextNodeId: "ed2_terminal_flower_ovary_hairs" }),
  ed2_terminal_flower_ovary_hairs: node("ed2_terminal_flower_ovary_hairs", "Cactaceae: tubo corto", 434, "Las axilas de las escamas del ovario y fruto son glabras?", { label: "Glabras", keyStep: "F", especieId: "ed2_gymnocalycium_gibbosum" }, { label: "Lanosas o setosas", keyStep: "F'", nextNodeId: "ed2_flowering_areoles_hairs" }),
  ed2_flowering_areoles_hairs: node("ed2_flowering_areoles_hairs", "Cactaceae: areolas floriferas", 434, "Las areolas floriferas tienen pelos persistentes?", { label: "Con pelos persistentes", keyStep: "G", especieId: "ed2_wigginsia_tephracantha" }, { label: "Sin pelos persistentes", keyStep: "G'", especieId: "ed2_notocactus_submammulosus" }),
  ed2_family_thymelaeaceae: single("ed2_family_thymelaeaceae", "CV. Thymelaeaceae", 439, "ed2_daphnopsis_racemosa", "Identificar como Daphnopsis racemosa"),
};
