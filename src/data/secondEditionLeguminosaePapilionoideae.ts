import { CladoNode, Especie } from "@/types";

function species(id: string, scientificName: string, commonName: string, characteristics: string, distribution: string): Especie {
  return { id, nombreCientifico: scientificName, nombreVulgar: commonName, familia: "LXXV. Leguminosae - Papilionoideae", descripcion: characteristics.split(";", 1)[0] + ".", caracteristicas: characteristics, distribucion: distribution };
}

export const secondEditionLeguminosaePapilionoideaeSpecies: Record<string, Especie> = {
  ed2_amorpha_fruticosa: species("ed2_amorpha_fruticosa", "Amorpha fruticosa", "Falso indigo; acacia", "Arbusto inerme de 2-4 m; hojas imparipinnadas con tres a doce foliolos glandulosos; corola reducida a un estandarte violeta; vaina glandulosa monosperma", "Sudeste de Estados Unidos; cultivada y naturalizada en el norte bonaerense y Delta, en suelos humedos."),
  ed2_ulex_europaeus: species("ed2_ulex_europaeus", "Ulex europaeus", "Tojo", "Arbusto espinoso de 1,5-3 m con pelos hispidos bronceos; ramas y hojas reducidas a espinas; flores amarillas; legumbres cortas con una a tres semillas", "Europa; cultivada para cercos vivos y a veces subespontanea."),
  ed2_spartium_junceum: species("ed2_spartium_junceum", "Spartium junceum", "Retama", "Arbusto subafilo de 1-3 m con ramas verdes y hojas pequenas caducas; flores amarillas en racimos terminales; vaina linear dehiscente y rojiza al madurar", "Sur de Europa; muy cultivada y a veces subespontanea en barrancas y baldios de Balcarce."),
  ed2_galactia_marginalis: species("ed2_galactia_marginalis", "Galactia marginalis", "Galactia marginalis", "Perenne rizomatosa de 10-50 cm con raices napiformes; hojas unifolioladas; flores axilares azules o violaceas; vaina comprimida y recta", "America calida; rara en campos altos del oeste bonaerense y Pergamino."),
  ed2_zornia_trachycarpa: species("ed2_zornia_trachycarpa", "Zornia trachycarpa", "Zornia trachycarpa", "Perenne con tallos erectos de 30-60 cm; hojas con dos foliolos oblongo-lanceolados; flores amarillas en espigas terminales; lamento pubescente", "Uruguay y norte y centro de Argentina; rara cerca de Buenos Aires."),
  ed2_lupinus_heptaphyllus: species("ed2_lupinus_heptaphyllus", "Lupinus heptaphyllus", "Lupinus heptaphyllus", "Anual pubescente de 20-50 cm; hojas digitadas con cinco a diez foliolos glabros arriba y pilosos abajo; flores celestes; labio inferior del caliz con diente medio mas largo", "Sur de Brasil, Uruguay y nordeste de Argentina hasta el Delta y sierras del sur bonaerense."),
  ed2_lupinus_bracteolaris: species("ed2_lupinus_bracteolaris", "Lupinus bracteolaris", "Lupinus bracteolaris", "Anual de 10-35 cm con tallos delgados y pelos rojizos ralos; tres a siete foliolos pubescentes; flores azules; legumbre coriacea angosta y hexaseminada", "Sur de Brasil, Uruguay y nordeste de Argentina; suelos pedregosos o arenosos; muy rara cerca de Buenos Aires."),
  ed2_lupinus_aureonitens: species("ed2_lupinus_aureonitens", "Lupinus aureonitens", "Lupinus aureonitens", "Bienal lanoso-pubescente de 25-35 cm con tallos gruesos; tres a cinco foliolos lanceolados; flores azules; legumbre de 3,5-5 cm", "Endemica del centro de Argentina; rara en las sierras bonaerenses."),
  ed2_lupinus_incanus: species("ed2_lupinus_incanus", "Lupinus incanus", "Lupinus incanus", "Anual sericeo-pubescente de 40-80 cm con tallos gruesos; cinco a once foliolos oblongo-lineares; flores azules en largos racimos; legumbre de 4,5-6,5 cm", "Uruguay y nordeste de Argentina; suelos arenosos de la isla Martin Garcia."),
};

function singleSpeciesNode(id: string, milestone: string, page: number, speciesId: string, name: string): CladoNode {
  return { id, milestone, manualPage: page, descripcion: `${milestone}: unica especie tratada para la region.`, opcionA: { label: `Identificar como ${name}`, keyStep: "1", especieId: speciesId }, opcionA_prima: { label: `Identificar como ${name}`, keyStep: "1", especieId: speciesId } };
}

export const secondEditionLeguminosaePapilionoideaeKeyData: Record<string, CladoNode> = {
  ed2_amorpha: singleSpeciesNode("ed2_amorpha", "Amorpha", 329, "ed2_amorpha_fruticosa", "Amorpha fruticosa"),
  ed2_ulex: singleSpeciesNode("ed2_ulex", "Ulex", 329, "ed2_ulex_europaeus", "Ulex europaeus"),
  ed2_spartium: singleSpeciesNode("ed2_spartium", "Spartium", 330, "ed2_spartium_junceum", "Spartium junceum"),
  ed2_galactia: singleSpeciesNode("ed2_galactia", "Galactia", 330, "ed2_galactia_marginalis", "Galactia marginalis"),
  ed2_zornia: singleSpeciesNode("ed2_zornia", "Zornia", 330, "ed2_zornia_trachycarpa", "Zornia trachycarpa"),
  ed2_lupinus: { id: "ed2_lupinus", milestone: "Lupinus", manualPage: 331, descripcion: "¿Los foliolos son glabros en el haz y pilosos en el enves?", opcionA: { label: "Si; generalmente siete y diente medio del caliz mas largo", keyStep: "A", especieId: "ed2_lupinus_heptaphyllus" }, opcionA_prima: { label: "No; pubescentes o lanosos en ambas caras", keyStep: "A'", nextNodeId: "ed2_lupinus_stem_width" } },
  ed2_lupinus_stem_width: { id: "ed2_lupinus_stem_width", milestone: "Lupinus: hojas pubescentes", manualPage: 331, descripcion: "¿Los tallos principales son delgados, de 1,5-4 mm?", opcionA: { label: "Si; anual con pubescencia rala rojiza", keyStep: "B", especieId: "ed2_lupinus_bracteolaris" }, opcionA_prima: { label: "No; de 5-10 mm y pubescencia densa", keyStep: "B'", nextNodeId: "ed2_lupinus_thick_leaflets" } },
  ed2_lupinus_thick_leaflets: { id: "ed2_lupinus_thick_leaflets", milestone: "Lupinus: tallos gruesos", manualPage: 331, descripcion: "¿Las hojas poseen tres a cinco foliolos lanceolados?", opcionA: { label: "Si; bienal lanoso-pubescente", keyStep: "C", especieId: "ed2_lupinus_aureonitens" }, opcionA_prima: { label: "No; cinco a once foliolos oblongo-lineares", keyStep: "C'", especieId: "ed2_lupinus_incanus" } },
};
