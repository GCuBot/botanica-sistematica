import { CladoNode, Especie } from "@/types";

function species(
  id: string,
  scientificName: string,
  commonName: string,
  family: string,
  description: string,
  characteristics: string,
  distribution: string
): Especie {
  return {
    id,
    nombreCientifico: scientificName,
    nombreVulgar: commonName,
    familia: family,
    descripcion: description,
    caracteristicas: characteristics,
    distribucion: distribution,
  };
}

export const secondEditionPalmaeAraceaeSpecies: Record<string, Especie> = {
  ed2_syagrus_romanzoffiana: species(
    "ed2_syagrus_romanzoffiana", "Syagrus romanzoffiana", "Pindo, datil", "XXX. Palmae",
    "Palmera monoica de unos 10 m, con estipite desnudo y anillado.",
    "Hojas pinnadas de unos 2,5 m; flores amarillo crema en espadice ramificado protegido por espata leñosa; fruto globoso-ovoideo de 2 cm.",
    "Sudamerica calida; individuos aislados en el Delta y cultivo ornamental."
  ),
  ed2_pistia_stratiotes: species(
    "ed2_pistia_stratiotes", "Pistia stratiotes", "Repollito de agua", "XXXI. Araceae",
    "Hierba acuatica flotante y estolonifera, con hojas crasas en roseta.",
    "Hojas anchamente espatuladas con abundante aerenquima; espadice corto parcialmente soldado a la espata, con una flor femenina y dos a cuatro masculinas.",
    "Regiones calidas del globo; muy comun en arroyos lentos del Delta y la ribera platense."
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

export const secondEditionPalmaeAraceaeKeyData: Record<string, CladoNode> = {
  ed2_family_palmae: singleSpeciesNode(
    "ed2_family_palmae", "Palmae", 169, "ed2_syagrus_romanzoffiana", "Syagrus romanzoffiana"
  ),
  ed2_family_araceae: singleSpeciesNode(
    "ed2_family_araceae", "Araceae", 170, "ed2_pistia_stratiotes", "Pistia stratiotes"
  ),
};
