import { CladoNode, Especie } from "@/types";

function species(id: string, scientificName: string, commonName: string, characteristics: string, distribution: string): Especie {
  return { id, nombreCientifico: scientificName, nombreVulgar: commonName, familia: "LXXV. Leguminosae - Caesalpinioideae", descripcion: characteristics.split(";", 1)[0] + ".", caracteristicas: characteristics, distribucion: distribution };
}

export const secondEditionLeguminosaeCaesalpinioideaeSpecies: Record<string, Especie> = {
  ed2_bauhinia_candicans: species("ed2_bauhinia_candicans", "Bauhinia candicans", "Pata de buey; pezuna de vaca; falsa caoba", "Arbol de 3-8 m con aguijones estipulares curvos; hojas simples bilobadas; flores blancas muy grandes; legumbre alargada", "Sur de Brasil, Paraguay, Uruguay y norte de Argentina; cultivada y subespontanea en cercos y talares bonaerenses."),
  ed2_parkinsonia_aculeata: species("ed2_parkinsonia_aculeata", "Parkinsonia aculeata", "Cina-cina", "Arbusto o arbolito de 3-6 m; hojas bipinnadas con raquis primario corto terminado en espina y raquis secundarios verdes y planos; flores amarillas con manchas rojas", "America tropical y subtropical; cultivada para cercos y espontanea en bosques riberenos, barrancas y terraplenes."),
  ed2_gleditsia_triacanthos: species("ed2_gleditsia_triacanthos", "Gleditsia triacanthos", "Acacia negra; corona de Cristo", "Arbol elevado con grandes espinas ramificadas en el tronco; hojas pinadas y bipinnadas; flores pequenas en racimos; legumbres indehiscentes de 15-42 cm", "Norteamerica; cultivada como forestal y subespontanea en la provincia de Buenos Aires."),
  ed2_cassia_corymbosa: species("ed2_cassia_corymbosa", "Cassia corymbosa", "Sen del campo; rama negra", "Arbolito o arbusto glabro de 1-4 m; hojas pinnadas con dos o tres pares de foliolos; flores amarillas en racimos; estambres desiguales; legumbre subcilindrica", "Sur de Brasil, Uruguay y nordeste de Argentina hasta Buenos Aires; talares y bosques del Delta y la ribera."),
  ed2_caesalpinia_gilliesii: species("ed2_caesalpinia_gilliesii", "Caesalpinia gilliesii", "Lagana de perro; barba de chivo", "Arbusto inerme de 1-3 m; hojas bipinnadas glabras; racimos terminales multifloros y glandulosos; petalos amarillos; estambres y estilo rojos muy exertos; legumbre comprimida bivalva", "Norte y centro de Argentina y Uruguay; comun en barrancas del Parana y junto a alambrados y cercos."),
};

function singleSpeciesNode(id: string, milestone: string, page: number, speciesId: string, name: string): CladoNode {
  return { id, milestone, manualPage: page, descripcion: `${milestone}: unica especie tratada para la region.`, opcionA: { label: `Identificar como ${name}`, keyStep: "1", especieId: speciesId }, opcionA_prima: { label: `Identificar como ${name}`, keyStep: "1", especieId: speciesId } };
}

export const secondEditionLeguminosaeCaesalpinioideaeKeyData: Record<string, CladoNode> = {
  ed2_leguminosae_caesalpinioideae: { id: "ed2_leguminosae_caesalpinioideae", milestone: "Caesalpinioideae", manualPage: 317, descripcion: "¿Las hojas son simples y bilobadas o pinnadas a bipinnadas?", opcionA: { label: "Simples y bilobadas; arbol con flores blancas grandes", keyStep: "A", nextNodeId: "ed2_bauhinia" }, opcionA_prima: { label: "Pinnadas o bipinnadas", keyStep: "A'", nextNodeId: "ed2_caesalpinioideae_spines" } },
  ed2_caesalpinioideae_spines: { id: "ed2_caesalpinioideae_spines", milestone: "Caesalpinioideae: hojas compuestas", manualPage: 317, descripcion: "¿El arbol posee espinas?", opcionA: { label: "Si", keyStep: "B", nextNodeId: "ed2_caesalpinioideae_spiny_flowers" }, opcionA_prima: { label: "No; arbol o arbusto inerme", keyStep: "B'", nextNodeId: "ed2_caesalpinioideae_unarmed_leaves" } },
  ed2_caesalpinioideae_spiny_flowers: { id: "ed2_caesalpinioideae_spiny_flowers", milestone: "Caesalpinioideae: arboles espinosos", manualPage: 317, descripcion: "¿Las flores son amarillas y el raquis primario termina en espina?", opcionA: { label: "Si", keyStep: "C", nextNodeId: "ed2_parkinsonia" }, opcionA_prima: { label: "No; flores verdosas o blancas y espinas ramificadas en el tallo", keyStep: "C'", nextNodeId: "ed2_gleditsia" } },
  ed2_caesalpinioideae_unarmed_leaves: { id: "ed2_caesalpinioideae_unarmed_leaves", milestone: "Caesalpinioideae: inermes", manualPage: 317, descripcion: "¿Las hojas son pinnadas o bipinnadas?", opcionA: { label: "Pinnadas", keyStep: "D", nextNodeId: "ed2_cassia" }, opcionA_prima: { label: "Bipinnadas", keyStep: "D'", nextNodeId: "ed2_caesalpinia" } },
  ed2_bauhinia: singleSpeciesNode("ed2_bauhinia", "Bauhinia", 325, "ed2_bauhinia_candicans", "Bauhinia candicans"),
  ed2_parkinsonia: singleSpeciesNode("ed2_parkinsonia", "Parkinsonia", 326, "ed2_parkinsonia_aculeata", "Parkinsonia aculeata"),
  ed2_gleditsia: singleSpeciesNode("ed2_gleditsia", "Gleditsia", 326, "ed2_gleditsia_triacanthos", "Gleditsia triacanthos"),
  ed2_cassia: singleSpeciesNode("ed2_cassia", "Cassia", 328, "ed2_cassia_corymbosa", "Cassia corymbosa"),
  ed2_caesalpinia: singleSpeciesNode("ed2_caesalpinia", "Caesalpinia", 329, "ed2_caesalpinia_gilliesii", "Caesalpinia gilliesii"),
};
