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
    familia: "LXXXIII. Polygalaceae",
    descripcion: characteristics.split(";", 1)[0] + ".",
    caracteristicas: characteristics,
    distribucion: distribution,
  };
}

export const secondEditionPolygalaceaeSpecies: Record<string, Especie> = {
  ed2_polygala_brasiliensis: species(
    "ed2_polygala_brasiliensis",
    "Polygala brasiliensis",
    "Polygala brasiliensis",
    "Anual o bienal de 10-35 cm; hojas triangulares u ovado-triangulares, amplexicaules, de hasta 10 mm x 2,3 mm; racimos de unos 6 cm; capsula orbicular de 1,5-1,8 mm; semillas glabras",
    "Sur de Brasil, Uruguay y nordeste de Argentina hasta las sierras de la provincia de Buenos Aires."
  ),
  ed2_polygala_aspalatha: species(
    "ed2_polygala_aspalatha",
    "Polygala aspalatha",
    "Polygala aspalatha",
    "Perenne multicaule de hasta 40 cm; hojas muy densas, filiformes o lineares de hasta 1 mm de ancho, con entrenudos de 1-4 mm; estilo recto; sepalos externos de 2,8-4,5 mm; racimos capituliformes o espiciformes; flores de 4,5-6,2 mm",
    "America austral. En las sierras bonaerenses."
  ),
  ed2_polygala_cyparissias: species(
    "ed2_polygala_cyparissias",
    "Polygala cyparissias",
    "Polygala cyparissias",
    "Perenne multicaule de hasta 40 cm; hojas muy densas, eliptico-lineares, carnosas, de hasta 2,5 mm de ancho; estilo recto; sepalos externos menores; racimos capituliformes; flores de 4-5 mm",
    "Sur de Brasil, Uruguay y Argentina. En las dunas atlanticas."
  ),
  ed2_polygala_australis: species(
    "ed2_polygala_australis",
    "Polygala australis",
    "Polygala australis",
    "Anual o bienal baja con tallos ascendentes de 5-15 cm; hojas alternas linear-oblongas o elipticas de 6-8 mm; estilo en forma de gancho; semillas subcilindricas con una coronita de pelos en un extremo; racimos espiciformes compactos; flores blanquecinas de 1,8-2,2 mm",
    "Uruguay y nordeste de Argentina. Comun en la estepa climax; florece en primavera."
  ),
  ed2_polygala_pulchella: species(
    "ed2_polygala_pulchella",
    "Polygala pulchella",
    "Polygala pulchella",
    "Anual de 8-16 cm; hojas de 4-10 mm; estilo en forma de gancho; semillas subcilindricas sin coronita de pelos; racimos de 0,5-5 cm; flores de 1,3-1,9 mm",
    "Sur de Brasil, Paraguay, Uruguay y Argentina. Rara en la region."
  ),
  ed2_polygala_duarteana: species(
    "ed2_polygala_duarteana",
    "Polygala duarteana",
    "Polygala duarteana",
    "Perenne de hasta 80 cm; hojas laxas, linear-lanceoladas, de 2-4,5 cm, con entrenudos de 4-30 mm; estilo en forma de gancho; ovario y capsula con 1 o 2 bordes alados; racimos laxos o densos",
    "Uruguay y norte de Argentina hasta la Isla Martin Garcia y norte de Buenos Aires."
  ),
  ed2_polygala_bonariensis: species(
    "ed2_polygala_bonariensis",
    "Polygala bonariensis",
    "Polygala bonariensis",
    "Perenne multicaule de hasta 35 cm; hojas muy densas, estrechamente lineares, de 6-15 mm, con entrenudos de 0,2-1 mm; estilo en forma de gancho; ovario y capsula con 1 o 2 bordes alados; racimos laxos",
    "Nordeste de Argentina hasta el norte de Buenos Aires."
  ),
  ed2_polygala_resedoides: species(
    "ed2_polygala_resedoides",
    "Polygala resedoides",
    "Polygala resedoides",
    "Perenne multicaule de 20-30 cm; hojas lineares a elipticas; estilo en forma de gancho; ovario y capsula sin margenes alados; bracteas anchamente lanceoladas de 3,5-5,5 mm; racimos espiciformes de 4-7 cm; flores de 2,5-3,7 mm",
    "Uruguay y Argentina. Sierras de Tandil y Balcarce."
  ),
  ed2_polygala_linoides: species(
    "ed2_polygala_linoides",
    "Polygala linoides",
    "Polygala linoides",
    "Perenne de hasta 40 cm; hojas de 6-17 mm; estilo en forma de gancho; ovario y capsula sin margenes alados; bracteas linear-lanceoladas de 1,1-2,2 mm; racimos espiciformes de 2-12 cm; flores de 2,2-3,7 mm",
    "Sur de Brasil, Uruguay y nordeste y centro de Argentina hasta Balcarce y Mar del Plata."
  ),
};

export const secondEditionPolygalaceaeKeyData: Record<string, CladoNode> = {
  ed2_family_polygalaceae: {
    id: "ed2_family_polygalaceae",
    milestone: "LXXXIII. Polygalaceae",
    manualPage: 372,
    descripcion: "Las hojas son triangulares u ovado-triangulares, o lineares, lanceoladas o elipticas?",
    opcionA: {
      label: "Hojas triangulares u ovado-triangulares; semillas glabras",
      keyStep: "A",
      especieId: "ed2_polygala_brasiliensis",
    },
    opcionA_prima: {
      label: "Hojas lineares, lanceoladas o elipticas; semillas pilosas",
      keyStep: "A'",
      nextNodeId: "ed2_polygala_style",
    },
  },
  ed2_polygala_style: {
    id: "ed2_polygala_style",
    milestone: "Polygala: estilo",
    manualPage: 373,
    descripcion: "El estilo es recto o tiene forma de gancho?",
    opcionA: {
      label: "Estilo recto; hojas muy densas; semillas ovoides o esfericas",
      keyStep: "B",
      nextNodeId: "ed2_polygala_dense_leaves",
    },
    opcionA_prima: {
      label: "Estilo en forma de gancho; semillas subcilindricas",
      keyStep: "B'",
      nextNodeId: "ed2_polygala_seed_hairs",
    },
  },
  ed2_polygala_dense_leaves: {
    id: "ed2_polygala_dense_leaves",
    milestone: "Polygala: hojas densas",
    manualPage: 373,
    descripcion: "Las hojas son filiformes o lineares de hasta 1 mm, o eliptico-lineares y carnosas de hasta 2,5 mm?",
    opcionA: {
      label: "Filiformes o lineares de hasta 1 mm",
      keyStep: "C",
      especieId: "ed2_polygala_aspalatha",
    },
    opcionA_prima: {
      label: "Eliptico-lineares, carnosas, de hasta 2,5 mm",
      keyStep: "C'",
      especieId: "ed2_polygala_cyparissias",
    },
  },
  ed2_polygala_seed_hairs: {
    id: "ed2_polygala_seed_hairs",
    milestone: "Polygala: semillas",
    manualPage: 373,
    descripcion: "Las semillas tienen una coronita de pelos en un extremo?",
    opcionA: {
      label: "Con coronita de pelos en un extremo",
      keyStep: "D",
      especieId: "ed2_polygala_australis",
    },
    opcionA_prima: {
      label: "Sin coronita de pelos en el extremo",
      keyStep: "D'",
      nextNodeId: "ed2_polygala_flower_size",
    },
  },
  ed2_polygala_flower_size: {
    id: "ed2_polygala_flower_size",
    milestone: "Polygala: largo de flores",
    manualPage: 373,
    descripcion: "Las flores miden 1,3-1,9 mm o 2-4 mm?",
    opcionA: {
      label: "Flores de 1,3-1,9 mm",
      keyStep: "E",
      especieId: "ed2_polygala_pulchella",
    },
    opcionA_prima: {
      label: "Flores de 2-4 mm",
      keyStep: "E'",
      nextNodeId: "ed2_polygala_capsule_wings",
    },
  },
  ed2_polygala_capsule_wings: {
    id: "ed2_polygala_capsule_wings",
    milestone: "Polygala: ovario y capsula",
    manualPage: 373,
    descripcion: "El ovario y la capsula tienen bordes alados?",
    opcionA: {
      label: "Con 1 o 2 bordes alados",
      keyStep: "F",
      nextNodeId: "ed2_polygala_internodes",
    },
    opcionA_prima: {
      label: "Sin margenes alados",
      keyStep: "F'",
      nextNodeId: "ed2_polygala_bracts",
    },
  },
  ed2_polygala_internodes: {
    id: "ed2_polygala_internodes",
    milestone: "Polygala: hojas y entrenudos",
    manualPage: 373,
    descripcion: "Las hojas son laxas con entrenudos largos o muy densas con entrenudos muy cortos?",
    opcionA: {
      label: "Hojas laxas de 2-4,5 cm; entrenudos de 4-30 mm",
      keyStep: "G",
      especieId: "ed2_polygala_duarteana",
    },
    opcionA_prima: {
      label: "Hojas muy densas de 6-15 mm; entrenudos de 0,2-1 mm",
      keyStep: "G'",
      especieId: "ed2_polygala_bonariensis",
    },
  },
  ed2_polygala_bracts: {
    id: "ed2_polygala_bracts",
    milestone: "Polygala: bracteas",
    manualPage: 373,
    descripcion: "Las bracteas de la inflorescencia son anchamente lanceoladas o linear-lanceoladas?",
    opcionA: {
      label: "Anchamente lanceoladas, de 3,5-5,5 mm",
      keyStep: "H",
      especieId: "ed2_polygala_resedoides",
    },
    opcionA_prima: {
      label: "Linear-lanceoladas, de 1,1-2,2 mm",
      keyStep: "H'",
      especieId: "ed2_polygala_linoides",
    },
  },
};
