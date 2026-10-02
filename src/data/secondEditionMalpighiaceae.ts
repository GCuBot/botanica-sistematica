import { CladoNode, Especie } from "@/types";

function species(
  id: string,
  scientificName: string,
  commonName: string,
  characteristics: string,
  distribution: string
): Especie {
  return {
    id,
    nombreCientifico: scientificName,
    nombreVulgar: commonName,
    familia: "LXXXII. Malpighiaceae",
    descripcion: characteristics.split(";", 1)[0] + ".",
    caracteristicas: characteristics,
    distribucion: distribution,
  };
}

export const secondEditionMalpighiaceaeSpecies: Record<string, Especie> = {
  ed2_stigmatophyllum_littorale: species(
    "ed2_stigmatophyllum_littorale",
    "Stigmatophyllum littorale",
    "Papa del rio",
    "Sufrutice con tuberculos lenosos gruesos y ramos tendidos o volubles; hojas pecioladas, ovadas u orbiculares, enteras o trilobadas, discolores y amarillento-sedosas en el enves; umbelas 10-20-floras; petalos amarillos fimbriados de 1 cm",
    "Sur de Brasil, Uruguay, Paraguay y nordeste de Argentina. Comun en el Delta y en la ribera del Plata; florece en verano."
  ),
  ed2_galphimia_brasiliensis: species(
    "ed2_galphimia_brasiliensis",
    "Galphimia brasiliensis",
    "Galphimia brasiliensis",
    "Sufrutice de 20-80 cm, glabro o algo pubescente; hojas cortamente pecioladas, lanceoladas, agudas, enteras y discolores; racimos laxos 10-25-floros; petalos amarillos; ovario glabro y fruto con alas estrechisimas",
    "America austral templado-calida. Muy rara en el Delta y en la ribera platense."
  ),
  ed2_heteropteris_angustifolia: species(
    "ed2_heteropteris_angustifolia",
    "Heteropteris angustifolia",
    "Heteropteris angustifolia",
    "Arbusto apoyante de 1-3 m, glabrescente; hojas cortamente pecioladas, lanceoladas, enteras, de 3-12 cm x 4-10 mm; racimos terminales o axilares; flores amarillas; ovario con pubescencia rojiza; samaras rojizas con una ala dorsal de 2-2,5 cm",
    "Sur de Brasil, Paraguay, Uruguay y nordeste de Argentina. Rara en el Delta."
  ),
  ed2_mascagnia_psilophylla: species(
    "ed2_mascagnia_psilophylla",
    "Mascagnia psilophylla",
    "Mascagnia psilophylla",
    "Liana glabrescente con hojas elipticas u ovadas, pecioladas, enteras, glabras, de 3-12 cm x 2-6 cm; estipulas triangulares; umbelas 4-floras agrupadas en corimbos; petalos amarillos; samaras con alas rojizas laterales auriculiformes de 2-3 cm",
    "Sur de Brasil, Paraguay, Uruguay y norte de Argentina. Isla Martin Garcia."
  ),
};

export const secondEditionMalpighiaceaeKeyData: Record<string, CladoNode> = {
  ed2_family_malpighiaceae: {
    id: "ed2_family_malpighiaceae",
    milestone: "LXXXII. Malpighiaceae",
    manualPage: 369,
    descripcion: "Cuantos estambres fertiles hay y como son los estigmas?",
    opcionA: {
      label: "Seis estambres fertiles; estigmas ensanchados y petaloides",
      keyStep: "A",
      especieId: "ed2_stigmatophyllum_littorale",
    },
    opcionA_prima: {
      label: "Diez estambres fertiles; estigmas no petaloides",
      keyStep: "A'",
      nextNodeId: "ed2_malpighiaceae_ovary_fruit",
    },
  },
  ed2_malpighiaceae_ovary_fruit: {
    id: "ed2_malpighiaceae_ovary_fruit",
    milestone: "Malpighiaceae: ovario y fruto",
    manualPage: 369,
    descripcion: "El ovario es glabro con fruto de alas inconspicuas o pubescente con fruto de alas grandes?",
    opcionA: {
      label: "Ovario glabro; fruto con alas inconspicuas",
      keyStep: "B",
      especieId: "ed2_galphimia_brasiliensis",
    },
    opcionA_prima: {
      label: "Ovario pubescente; fruto con alas grandes",
      keyStep: "B'",
      nextNodeId: "ed2_malpighiaceae_samara_wings",
    },
  },
  ed2_malpighiaceae_samara_wings: {
    id: "ed2_malpighiaceae_samara_wings",
    milestone: "Malpighiaceae: alas de la samara",
    manualPage: 369,
    descripcion: "Las samaras tienen una sola ala dorsal o dos alas laterales grandes y una dorsal menor?",
    opcionA: {
      label: "Samaras con una sola ala dorsal",
      keyStep: "C",
      especieId: "ed2_heteropteris_angustifolia",
    },
    opcionA_prima: {
      label: "Samaras con dos alas laterales grandes y un ala dorsal menor",
      keyStep: "C'",
      especieId: "ed2_mascagnia_psilophylla",
    },
  },
};
