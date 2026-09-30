import { CladoNode, Especie } from "@/types";

function species(
  id: string,
  scientificName: string,
  familyName: string,
  description: string,
  characteristics: string,
  distribution: string,
  commonName = scientificName
): Especie {
  return {
    id,
    nombreCientifico: scientificName,
    nombreVulgar: commonName,
    familia: familyName,
    descripcion: description,
    caracteristicas: characteristics,
    distribucion: distribution,
  };
}

export const secondEditionEarlyPteridophyteSpecies: Record<string, Especie> = {
  ed2_isoetes_ekmanii: species(
    "ed2_isoetes_ekmanii",
    "Isoetes ekmanii",
    "II. Isoetaceae",
    "Planta palustre perenne, con rizoma corto y hojas arrosetadas.",
    "Hojas subuladas de 5-15 cm, con cámaras aéreas; esporangios ovalados de unos 6 mm; macrosporos reticulados y microsporos lisos y alargados.",
    "Nordeste de la Argentina hasta el Delta y la isla Martín García."
  ),
  ed2_equisetum_giganteum: species(
    "ed2_equisetum_giganteum",
    "Equisetum giganteum",
    "III. Equisetaceae",
    "Hierba rizomatosa con tallos erectos, surcados y muy ramificados, de 1-2 m.",
    "Tallos ásperos por sílice; hojas reducidas a vainas dentadas; espigas ovoides de alrededor de 1 cm.",
    "América cálida; común en los bosques del Delta y en la ribera del Plata.",
    "Cola de caballo"
  ),
  ed2_ophioglossum_reticulatum: species(
    "ed2_ophioglossum_reticulatum",
    "Ophioglossum reticulatum",
    "IV. Ophioglossaceae",
    "Planta de hasta 18 cm, con rizoma cilíndrico.",
    "Lámina estéril ovada a cordiforme; segmento fértil más largo, terminado en un esporangióforo cilíndrico y agudo.",
    "Pantropical, hasta el Delta del Paraná."
  ),
  ed2_ophioglossum_crotalophoroides: species(
    "ed2_ophioglossum_crotalophoroides",
    "Ophioglossum crotalophoroides",
    "IV. Ophioglossaceae",
    "Planta de 6-10 cm, con rizoma globoso y fronde largamente peciolada.",
    "Porción estéril ovada y aguda; porción fértil terminada en un esporangióforo de 0,5-1 cm.",
    "América; rara en campos húmedos a fines del invierno."
  ),
  ed2_osmunda_regalis_palustris: species(
    "ed2_osmunda_regalis_palustris",
    "Osmunda regalis var. palustris",
    "V. Osmundaceae",
    "Hierba rizomatosa con frondes de 50-130 cm.",
    "Pecíolo cilíndrico y glabro; lámina bipinnada; pínnulas superiores reducidas a la nervadura y portadoras de esporangios.",
    "América tropical, hasta el Delta del Paraná."
  ),
  ed2_anemia_phyllitidis: species(
    "ed2_anemia_phyllitidis",
    "Anemia phyllitidis",
    "VI. Schizaeaceae",
    "Helecho con rizoma ascendente y frondes glabras.",
    "Frondes pinnadas con dos a siete pares de pinnas oval-lanceoladas; esporangióforo poco ramificado.",
    "América cálida, hasta el Delta y la isla Martín García."
  ),
  ed2_anemia_tomentosa: species(
    "ed2_anemia_tomentosa",
    "Anemia tomentosa",
    "VI. Schizaeaceae",
    "Helecho con rizoma rastrero cubierto de pelos amarillentos y frondes muy velludas.",
    "Frondes bipinnadas con doce a dieciocho pinnas; pínnulas ovadas y lobadas; esporangióforo muy ramificado.",
    "Brasil austral, Paraguay y nordeste de la Argentina; entre rocas en las sierras de Tandil.",
    "Doradilla"
  ),
};

function singleSpeciesNode(
  nodeId: string,
  familyName: string,
  manualPage: number,
  speciesId: string
): CladoNode {
  const especie = secondEditionEarlyPteridophyteSpecies[speciesId];
  return {
    id: nodeId,
    milestone: familyName,
    manualPage,
    descripcion: `${familyName}: única especie tratada para la región.`,
    opcionA: { label: `Identificar como ${especie.nombreCientifico}`, keyStep: "1", especieId: speciesId },
    opcionA_prima: { label: `Identificar como ${especie.nombreCientifico}`, keyStep: "1", especieId: speciesId },
    especie,
  };
}

export const secondEditionEarlyPteridophyteKeyData: Record<string, CladoNode> = {
  ed2_family_isoetaceae: singleSpeciesNode("ed2_family_isoetaceae", "Isoetaceae", 22, "ed2_isoetes_ekmanii"),
  ed2_family_equisetaceae: singleSpeciesNode("ed2_family_equisetaceae", "Equisetaceae", 23, "ed2_equisetum_giganteum"),
  ed2_family_ophioglossaceae: {
    id: "ed2_family_ophioglossaceae",
    milestone: "Ophioglossaceae",
    manualPage: 24,
    descripcion: "¿La planta supera generalmente los 10 cm y posee rizoma cilíndrico?",
    opcionA: {
      label: "Generalmente mayor de 10 cm; rizoma cilíndrico; lámina ovada a cordiforme",
      keyStep: "A",
      especieId: "ed2_ophioglossum_reticulatum",
    },
    opcionA_prima: {
      label: "Menor de 10 cm; rizoma esférico; lámina suborbicular",
      keyStep: "A'",
      especieId: "ed2_ophioglossum_crotalophoroides",
    },
  },
  ed2_family_osmundaceae: singleSpeciesNode("ed2_family_osmundaceae", "Osmundaceae", 25, "ed2_osmunda_regalis_palustris"),
  ed2_family_schizaeaceae: {
    id: "ed2_family_schizaeaceae",
    milestone: "Schizaeaceae",
    manualPage: 27,
    descripcion: "¿Las frondes son pinnadas o bipinnadas?",
    opcionA: {
      label: "Pinnadas, con dos a siete pares de pinnas; esporangióforo poco ramificado",
      keyStep: "A",
      especieId: "ed2_anemia_phyllitidis",
    },
    opcionA_prima: {
      label: "Bipinnadas, con doce a dieciocho pinnas velludas; esporangióforo muy ramificado",
      keyStep: "A'",
      especieId: "ed2_anemia_tomentosa",
    },
  },
};
