import { CladoNode, Especie } from "@/types";

function species(id: string, scientificName: string, commonName: string, family: string, characteristics: string, distribution: string): Especie {
  return { id, nombreCientifico: scientificName, nombreVulgar: commonName, familia: family, descripcion: characteristics.split(";", 1)[0] + ".", caracteristicas: characteristics, distribucion: distribution };
}

export const secondEditionNyctaginaceaePhytolaccaceaeSpecies: Record<string, Especie> = {
  ed2_boerhavia_coccinea: species("ed2_boerhavia_coccinea", "Boerhavia coccinea", "Boerhavia coccinea", "LVII. Nyctaginaceae", "Perenne rastrera o ascendente y glanduloso-pubescente; hojas ovadas discolores; flores diminutas purpureas sin involucro caliciforme", "America calida; rara en vias ferreas; usada en medicina popular."),
  ed2_mirabilis_jalapa: species("ed2_mirabilis_jalapa", "Mirabilis jalapa", "Dondiego de noche", "LVII. Nyctaginaceae", "Perenne erecta de 1-1,5 m con raiz napiforme; hojas ovadas; flores grandes purpureas, amarillas o blancas con involucro caliciforme", "America tropical; cultivada como ornamental y frecuente en suelos modificados."),
  ed2_phytolacca_dioica: species("ed2_phytolacca_dioica", "Phytolacca dioica", "Ombu", "LVIII. Phytolaccaceae", "Arbol dioico de 8-10 m con tronco grueso y flojo; hojas anchamente elipticas; racimos pendulos, flores unisexuales y bayas lobadas", "America calida; cultivado y comun en bosques de Celtis tala."),
  ed2_phytolacca_americana: species("ed2_phytolacca_americana", "Phytolacca americana", "Phytolacca americana", "LVIII. Phytolaccaceae", "Sufrutice de 1,5 m; hojas ovado-elipticas acuminadas; racimos erectos con flores hermafroditas 5-meras y bayas negras", "Norteamerica; adventicia en Argentina junto a caminos y vias ferreas."),
  ed2_phytolacca_tetramera: species("ed2_phytolacca_tetramera", "Phytolacca tetramera", "Ombusillo", "LVIII. Phytolaccaceae", "Sufrutice dioico de hasta 1 m; hojas oblanceoladas; racimos erectos con flores unisexuales 4-meras y bayas deprimidas", "Endemica del nordeste de Buenos Aires, desde La Plata hasta la Ensenada de Samborombon."),
  ed2_rivina_humilis: species("ed2_rivina_humilis", "Rivina humilis", "Sangre de toro", "LVIII. Phytolaccaceae", "Sufrutice erecto de cerca de 1 m; hojas ovadas; racimos alargados con flores blancas o rosadas y bayas rojas", "America calida hasta el Delta y la ribera del Plata."),
};

export const secondEditionNyctaginaceaePhytolaccaceaeKeyData: Record<string, CladoNode> = {
  ed2_family_nyctaginaceae: { id: "ed2_family_nyctaginaceae", milestone: "Nyctaginaceae", manualPage: 255, descripcion: "¿La planta es rastrera con flores diminutas o erecta con flores grandes?", opcionA: { label: "Rastrera; flores diminutas sin involucro caliciforme", keyStep: "A", especieId: "ed2_boerhavia_coccinea" }, opcionA_prima: { label: "Erecta; flores grandes con involucro caliciforme", keyStep: "A'", especieId: "ed2_mirabilis_jalapa" } },
  ed2_family_phytolaccaceae: { id: "ed2_family_phytolaccaceae", milestone: "Phytolaccaceae", manualPage: 256, descripcion: "¿El ovario es pluricarpelar o unicarpelar?", opcionA: { label: "Pluricarpelar", keyStep: "A", nextNodeId: "ed2_phytolacca" }, opcionA_prima: { label: "Unicarpelar", keyStep: "A'", especieId: "ed2_rivina_humilis" } },
  ed2_phytolacca: { id: "ed2_phytolacca", milestone: "Phytolacca", manualPage: 257, descripcion: "¿La planta es arborea con racimos pendulos?", opcionA: { label: "Si; flores unisexuales y perigonio 5-mero", keyStep: "A", especieId: "ed2_phytolacca_dioica" }, opcionA_prima: { label: "No; sufrutice con racimos erectos", keyStep: "A'", nextNodeId: "ed2_phytolacca_flower_sex" } },
  ed2_phytolacca_flower_sex: { id: "ed2_phytolacca_flower_sex", milestone: "Phytolacca: sufrutices", manualPage: 257, descripcion: "¿Las flores son hermafroditas y 5-meras o unisexuales y 4-meras?", opcionA: { label: "Hermafroditas y 5-meras; hojas ovado-elipticas", keyStep: "B", especieId: "ed2_phytolacca_americana" }, opcionA_prima: { label: "Unisexuales y 4-meras; hojas oblanceoladas", keyStep: "B'", especieId: "ed2_phytolacca_tetramera" } },
};
