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

export const secondEditionPiperaceaeSalicaceaeUlmaceaeSpecies: Record<string, Especie> = {
  ed2_peperomia_catharinae: species(
    "ed2_peperomia_catharinae", "Peperomia catharinae", "Peperomia catharinae", "XLV. Piperaceae",
    "Epifita decumbente de unos 15 cm; hojas opuestas o ternadas, obovado-circulares; espigas terminales solitarias con flores incrustadas en el raquis",
    "Sur de Brasil, Uruguay y Delta del Parana; hallada sobre ceibos."
  ),
  ed2_peperomia_comarapana: species(
    "ed2_peperomia_comarapana", "Peperomia comarapana", "Peperomia comarapana", "XLV. Piperaceae",
    "Terricola rizomatosa de 10-30 cm; hojas verticiladas, carnosas y obovadas u oblanceoladas; espigas largas y delgadas con flores no incrustadas en el raquis",
    "Sur de Bolivia, Chaco y norte de Buenos Aires; abundante en talares de las barrancas del Parana al norte de Zarate."
  ),
  ed2_salix_humboldtiana: species(
    "ed2_salix_humboldtiana", "Salix humboldtiana", "Sauce colorado; sauce criollo", "XLVI. Salicaceae",
    "Arbol dioico de 10-15 m; hojas linear-lanceoladas, aserradas y verde claras; amentos masculinos lanuginosos y frutos piriformes",
    "Riberas e islas arenosas de los rios de America calida hasta el norte de Patagonia; comun en el Delta del Parana y la ribera platense."
  ),
  ed2_celtis_tala: species(
    "ed2_celtis_tala", "Celtis tala", "Tala", "XLVII. Ulmaceae",
    "Arbol espinoso y tortuoso de 4-8 m; espinas rectas; hojas ovadas, aserradas y poco asimetricas; drupas rojas o negruzcas",
    "Sabanas y bosques xerofilos de Sudamerica; frecuente en el nordeste de Buenos Aires formando talares."
  ),
  ed2_celtis_iguanea: species(
    "ed2_celtis_iguanea", "Celtis iguanea", "Tala gateador", "XLVII. Ulmaceae",
    "Arbusto apoyante espinoso de 4-10 m; ramas flexuosas con espinas cortas y curvas; hojas ovadas aserrado-crenadas; frutos amarillos",
    "America calida; comun en bosques primitivos del Delta y de la ribera platense."
  ),
  ed2_celtis_occidentalis: species(
    "ed2_celtis_occidentalis", "Celtis occidentalis", "Almez", "XLVII. Ulmaceae",
    "Arbol inerme; hojas largamente acuminadas y muy asimetricas; pedicelo del fruto mas largo que el peciolo foliar y drupa anaranjada",
    "Originario de America del Norte; cultivado en calles y parques y a veces subespontaneo."
  ),
};

function singleSpeciesNode(
  id: string,
  milestone: string,
  manualPage: number,
  speciesId: string,
  scientificName: string
): CladoNode {
  return {
    id,
    milestone,
    manualPage,
    descripcion: `${milestone}: unica especie tratada para la region.`,
    opcionA: { label: `Identificar como ${scientificName}`, keyStep: "1", especieId: speciesId },
    opcionA_prima: { label: `Identificar como ${scientificName}`, keyStep: "1", especieId: speciesId },
  };
}

export const secondEditionPiperaceaeSalicaceaeUlmaceaeKeyData: Record<string, CladoNode> = {
  ed2_family_piperaceae: {
    id: "ed2_family_piperaceae", milestone: "Piperaceae: Peperomia", manualPage: 218,
    descripcion: "¿La planta es epifita y decumbente o terricola y rizomatosa?",
    opcionA: { label: "Epifita y decumbente; hojas opuestas o ternadas y flores incrustadas en el raquis", keyStep: "A", especieId: "ed2_peperomia_catharinae" },
    opcionA_prima: { label: "Terricola, erecta o ascendente; hojas verticiladas y flores no incrustadas", keyStep: "A'", especieId: "ed2_peperomia_comarapana" },
  },
  ed2_family_salicaceae: singleSpeciesNode(
    "ed2_family_salicaceae", "Salicaceae", 220, "ed2_salix_humboldtiana", "Salix humboldtiana"
  ),
  ed2_family_ulmaceae: {
    id: "ed2_family_ulmaceae", milestone: "Ulmaceae: Celtis", manualPage: 221,
    descripcion: "¿La planta posee espinas?",
    opcionA: { label: "Si; pedicelo del fruto mas corto que el peciolo y hojas poco asimetricas", keyStep: "A", nextNodeId: "ed2_celtis_spiny" },
    opcionA_prima: { label: "No; pedicelo mas largo que el peciolo y hojas muy asimetricas", keyStep: "A'", especieId: "ed2_celtis_occidentalis" },
  },
  ed2_celtis_spiny: {
    id: "ed2_celtis_spiny", milestone: "Celtis: plantas espinosas", manualPage: 221,
    descripcion: "¿Es un arbol erecto con espinas rectas o un arbusto apoyante con espinas curvas?",
    opcionA: { label: "Arbol erecto y tortuoso de 4-8 m; espinas rectas y drupas rojas o negruzcas", keyStep: "B", especieId: "ed2_celtis_tala" },
    opcionA_prima: { label: "Arbusto apoyante de 4-10 m; espinas cortas y curvas y frutos amarillos", keyStep: "B'", especieId: "ed2_celtis_iguanea" },
  },
};
