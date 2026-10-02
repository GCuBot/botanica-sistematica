import { CladoNode, Especie } from "@/types";

function species(id: string, scientificName: string, commonName: string, family: string, characteristics: string, distribution: string): Especie {
  return { id, nombreCientifico: scientificName, nombreVulgar: commonName, familia: family, descripcion: characteristics.split(";", 1)[0] + ".", caracteristicas: characteristics, distribucion: distribution };
}

export const secondEditionTropaeolaceaeLinaceaeSpecies: Record<string, Especie> = {
  ed2_tropaeolum_pentaphyllum: species("ed2_tropaeolum_pentaphyllum", "Tropaeolum pentaphyllum", "Flor de pitito", "LXXVIII. Tropaeolaceae", "Enredadera perenne con tuberculos globosos o fusiformes; hojas palmaticompuestas con cinco foliolos; caliz verdoso con largo espolon rojo; dos petalos pequeños azules; fruto carnoso negruzco azulado", "America calida; comun en el Delta y bosques de la ribera platense; florece en primavera."),
  ed2_linum_usitatissimum: species("ed2_linum_usitatissimum", "Linum usitatissimum", "Lino", "LXXIX. Linaceae", "Anual erecta y glabra de 40-100 cm; hojas linear-lanceoladas trinervadas; flores grandes azules en cimas corimbiformes laxas; capsulas ovoides", "Eurasia; cultivada y frecuentemente subespontanea junto a vias ferreas y rastrojos."),
  ed2_linum_selaginoides: species("ed2_linum_selaginoides", "Linum selaginoides", "Linum selaginoides", "LXXIX. Linaceae", "Perenne pluricaule de 10-20 cm con tallos tendidos o ascendentes; hojas estrechamente lineares y densas; flores solitarias blancas o rosadas; capsulas globosas", "Sur de Brasil, Uruguay y nordeste de Argentina; estepa climax y sierras."),
  ed2_linum_junceum: species("ed2_linum_junceum", "Linum junceum", "Linum junceum", "LXXIX. Linaceae", "Perenne de hasta 70 cm con tallos erectos y pocas hojas filiformes en las ramas nuevas; flores pequeñas amarillo-palidas en cimas laxas; capsulas globosas", "Sur de Brasil, Uruguay y sierras bonaerenses."),
};

export const secondEditionTropaeolaceaeLinaceaeKeyData: Record<string, CladoNode> = {
  ed2_family_tropaeolaceae: { id: "ed2_family_tropaeolaceae", milestone: "LXXVIII. Tropaeolaceae", manualPage: 363, descripcion: "Tropaeolaceae: unica especie tratada para la region.", opcionA: { label: "Identificar como Tropaeolum pentaphyllum", keyStep: "1", especieId: "ed2_tropaeolum_pentaphyllum" }, opcionA_prima: { label: "Identificar como Tropaeolum pentaphyllum", keyStep: "1", especieId: "ed2_tropaeolum_pentaphyllum" } },
  ed2_family_linaceae: { id: "ed2_family_linaceae", milestone: "LXXIX. Linaceae", manualPage: 364, descripcion: "La planta es anual con flores grandes azules o perenne con flores pequeñas?", opcionA: { label: "Anual; flores grandes azules", keyStep: "A", especieId: "ed2_linum_usitatissimum" }, opcionA_prima: { label: "Perenne; flores pequeñas", keyStep: "A'", nextNodeId: "ed2_linum_perennial_habit" } },
  ed2_linum_perennial_habit: { id: "ed2_linum_perennial_habit", milestone: "Linum: especies perennes", manualPage: 364, descripcion: "Los tallos son tendidos o ascendentes con hojas densas, o erectos con pocas hojas?", opcionA: { label: "Tendidos o ascendentes; flores blancas o rosadas", keyStep: "B", especieId: "ed2_linum_selaginoides" }, opcionA_prima: { label: "Erectos; flores amarillo-palidas", keyStep: "B'", especieId: "ed2_linum_junceum" } },
};
