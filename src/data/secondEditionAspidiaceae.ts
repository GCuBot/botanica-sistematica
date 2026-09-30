import { CladoNode, Especie } from "@/types";

function species(
  id: string,
  scientificName: string,
  description: string,
  characteristics: string,
  distribution: string,
  commonName = scientificName
): Especie {
  return {
    id,
    nombreCientifico: scientificName,
    nombreVulgar: commonName,
    familia: "XI. Aspidiaceae",
    descripcion: description,
    caracteristicas: characteristics,
    distribucion: distribution,
  };
}

export const secondEditionAspidiaceaeSpecies: Record<string, Especie> = {
  ed2_phanerophlebia_falcata: species(
    "ed2_phanerophlebia_falcata",
    "Phanerophlebia falcata",
    "Helecho terrestre de rizoma escamoso y frondes unipinnadas.",
    "Pecíolo con escamas; pinnas ovado-falcadas, coriáceas, acuminadas y aserrado-dentadas; soros dispersos con indusio peltado.",
    "Sudeste de Asia; cultivado como ornamental y ocasionalmente subespontáneo."
  ),
  ed2_rumohra_adiantiformis: species(
    "ed2_rumohra_adiantiformis",
    "Rumohra adiantiformis",
    "Helecho robusto con frondes glabras de cerca de medio metro.",
    "Lámina de dos a tres veces pinnada; pinnas inferiores bipinnadas, intermedias pinnadas y superiores simples; soros casi uniseriados.",
    "Regiones cálidas de varios continentes; frecuente en Tandil y Balcarce, más raro en el Delta.",
    "Calaguala"
  ),
  ed2_polystichum_montevidense: species(
    "ed2_polystichum_montevidense",
    "Polystichum montevidense",
    "Helecho terrestre con rizoma corto y frondes arrosetadas de 30-70 cm.",
    "Frondes bipinnadas y escamosas; pínnulas ovado-deltoideas asimétricas, con uno o dos lóbulos basales; soros circulares.",
    "América cálida, hasta las sierras de la provincia de Buenos Aires."
  ),
  ed2_ctenitis_submarginalis: species(
    "ed2_ctenitis_submarginalis",
    "Ctenitis submarginalis",
    "Helecho robusto con rizoma escamoso y frondes de 50-90 cm.",
    "Frondes bipinnatífidas, con pelos y escamas; pinnas oblongo-lanceoladas divididas en numerosos segmentos oblongos con pelos glandulares.",
    "América cálida, hasta el Delta y la ribera del Plata."
  ),
};

export const secondEditionAspidiaceaeKeyData: Record<string, CladoNode> = {
  ed2_family_aspidiaceae: {
    id: "ed2_family_aspidiaceae",
    milestone: "Aspidiaceae",
    manualPage: 37,
    descripcion: "¿Las frondes son unipinnadas o están divididas de dos a cuatro veces?",
    opcionA: {
      label: "Unipinnadas; pecíolo con escamas; pinnas ovado-falcadas, glabras y aserrado-dentadas",
      keyStep: "A",
      especieId: "ed2_phanerophlebia_falcata",
    },
    opcionA_prima: {
      label: "De dos a cuatro veces pinnadas",
      keyStep: "A'",
      nextNodeId: "ed2_aspidiaceae_divided",
    },
  },
  ed2_aspidiaceae_divided: {
    id: "ed2_aspidiaceae_divided",
    milestone: "Aspidiaceae: frondes divididas",
    manualPage: 37,
    descripcion: "¿Las frondes son glabras o poseen escamas o pelos?",
    opcionA: {
      label: "Glabras, de dos a tres veces pinnadas",
      keyStep: "B",
      especieId: "ed2_rumohra_adiantiformis",
    },
    opcionA_prima: {
      label: "Provistas de escamas o de pelos y escamas",
      keyStep: "B'",
      nextNodeId: "ed2_aspidiaceae_indument",
    },
  },
  ed2_aspidiaceae_indument: {
    id: "ed2_aspidiaceae_indument",
    milestone: "Aspidiaceae: indumento",
    manualPage: 37,
    descripcion: "¿Las frondes llevan sólo escamas o también pelos?",
    opcionA: {
      label: "Sólo escamas; pínnulas ovales con uno o dos lóbulos en la base",
      keyStep: "C",
      especieId: "ed2_polystichum_montevidense",
    },
    opcionA_prima: {
      label: "Pelos y escamas; pinnas oblongo-lanceoladas, pinnatífidas, con segmentos oblongos",
      keyStep: "C'",
      especieId: "ed2_ctenitis_submarginalis",
    },
  },
};
