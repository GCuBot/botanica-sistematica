import { CladoNode, Especie } from "@/types";

function species(id: string, scientificName: string, commonName: string, family: string, characteristics: string, distribution: string): Especie {
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

function single(id: string, milestone: string, manualPage: number, speciesId: string, label: string): CladoNode {
  return {
    id,
    milestone,
    manualPage,
    descripcion: label,
    opcionA: { label, keyStep: "1", especieId: speciesId },
    opcionA_prima: { label, keyStep: "1", especieId: speciesId },
  };
}

export const secondEditionSymplocaceaeToBuddlejaceaeSpecies: Record<string, Especie> = {
  ed2_symplocos_uniflora: species("ed2_symplocos_uniflora", "Symplocos uniflora", "Azahar del monte", "CXVIII. Symplocaceae", "Arbolito con ramas pubescentes; hojas subcoriaceas, elipticas, casi obtusas, cortamente aserradas, glabras, de 6-8 cm; flores en racimos axilares cortos o solitarias; corola blanca; estambres numerosos en tres ciclos; fruto ovoide", "Sur de Brasil, Uruguay y nordeste de Argentina. Frecuente en selvas marginales del Delta."),
  ed2_menodora_trifida: species("ed2_menodora_trifida", "Menodora trifida", "Menodora trifida", "CXIX. Oleaceae", "Arbustito ramoso de hasta 40 cm; hojas opuestas, en su mayoria trifidas con segmentos lineares, algunas enteras o irregularmente divididas; flores amarillas generalmente solitarias y terminales; fruto con dos capsulas de dehiscencia transversal", "Bolivia, Paraguay, Uruguay y centro de Argentina hasta las barrancas del Parana cerca de Zarate."),
  ed2_ligustrum_lucidum: species("ed2_ligustrum_lucidum", "Ligustrum lucidum", "Ligustro", "CXIX. Oleaceae", "Arbol de hasta 10 m; hojas persistentes, subcoriaceas, ovadas, de 7-13 cm, con nervadura media glabra y peciolo de 1-2 cm; flores blancas, fragantes, en panojas terminales, con pedicelos de menos de 2 mm; bayas de 8 mm", "China. Cultivado en todo el mundo como arbol de sombra; espontaneo e invasor en selvas marginales del Delta y ribera platense."),
  ed2_ligustrum_sinense: species("ed2_ligustrum_sinense", "Ligustrum sinense", "Ligustrina", "CXIX. Oleaceae", "Arbusto de 3-5 m; hojas caducas, herbaceas, de 2-7 cm, con nervadura media pubescente y peciolo corto; flores blancas, fragantes, en panojas terminales, con pedicelos de hasta 3 mm; bayas de 6 mm", "China. Cultivada para formar cercos vivos; subespontanea en el Delta."),
  ed2_spigelia_humboldtiana: species("ed2_spigelia_humboldtiana", "Spigelia humboldtiana", "Spigelia humboldtiana", "CXX. Loganiaceae", "Hierba perenne rizomatosa, glabra o escabrosa; tallos cuadrangulares de 30-50 cm; hojas opuestas o verticiladas, sesiles, lanceoladas u ovado-lanceoladas, enteras; flores blancas en cimas escorpioides; capsulas bilobadas", "America calida. Comun en bosques del Delta y ribera platense."),
  ed2_buddleja_grandiflora: species("ed2_buddleja_grandiflora", "Buddleja grandiflora", "Buddleja grandiflora", "CXXI. Buddlejaceae", "Sufrutice de 1-2 m, densamente ferrugineo-tomentoso; tallos cuadrangulares; hojas ovado-lanceoladas, agudas y atenuadas; flores en densa espiga de glomerulos; caliz de 6-7 mm y corola de unos 20 mm", "Sur de Brasil, Uruguay y nordeste de Argentina hasta la isla Martin Garcia."),
  ed2_buddleja_stachyoides: species("ed2_buddleja_stachyoides", "Buddleja stachyoides", "Buddleja stachyoides", "CXXI. Buddlejaceae", "Arbusto de 1,5 m con ramas cuadrangulares, estrechamente aladas; hojas rombico-ovadas, connatas en la base por pequenas auriculas, crenado-dentadas y laxamente tomentosas; flores amarillas en espiga interrumpida de glomerulos", "Sur de Brasil, Paraguay, Uruguay y nordeste de Argentina hasta el Delta, barrancas del Parana e isla Martin Garcia."),
  ed2_buddleja_thyrsoides: species("ed2_buddleja_thyrsoides", "Buddleja thyrsoides", "Buddleja thyrsoides", "CXXI. Buddlejaceae", "Arbusto de 1,5-2 m con ramitas nuevas cuadrangulares y tomentosas; hojas linear-lanceoladas, largamente atenuadas, sesiles, aserradas, glabras en el haz y tomentosas en el enves; flores blancas en tirsos de cimas", "Sur de Brasil, Uruguay y nordeste de Argentina. En pajonales del Delta y ribera platense."),
  ed2_buddleja_elegans: species("ed2_buddleja_elegans", "Buddleja elegans", "Buddleja elegans", "CXXI. Buddlejaceae", "Sufrutice de 1,5-2 m con ramas nuevas tomentulosas; hojas oblongo-lanceoladas, agudas y atenuadas, crenadas arriba o enteras, glabras en el haz y tomentosas en el enves; flores blancas en tirsos de cimas", "Sur de Brasil. Hallada en los pajonales del Delta."),
};

export const secondEditionSymplocaceaeToBuddlejaceaeKeyData: Record<string, CladoNode> = {
  ed2_family_symplocaceae: single("ed2_family_symplocaceae", "CXVIII. Symplocaceae", 478, "ed2_symplocos_uniflora", "Identificar como Symplocos uniflora"),
  ed2_family_oleaceae: {
    id: "ed2_family_oleaceae",
    milestone: "CXIX. Oleaceae",
    manualPage: 479,
    descripcion: "Las flores son solitarias amarillas o en panojas terminales blancas?",
    opcionA: { label: "Flores solitarias amarillas; arbustos o sufrutices bajos", keyStep: "A", especieId: "ed2_menodora_trifida" },
    opcionA_prima: { label: "Flores blancas en panojas terminales; arbustos elevados o arboles", keyStep: "A'", nextNodeId: "ed2_ligustrum_pedicels" },
  },
  ed2_ligustrum_pedicels: {
    id: "ed2_ligustrum_pedicels",
    milestone: "Ligustrum",
    manualPage: 480,
    descripcion: "Como son los pedicelos y las hojas?",
    opcionA: { label: "Pedicelos menores de 2 mm; hojas persistentes, subcoriaceas, grandes", keyStep: "A", especieId: "ed2_ligustrum_lucidum" },
    opcionA_prima: { label: "Pedicelos de hasta 3 mm; hojas caducas, herbaceas, menores", keyStep: "A'", especieId: "ed2_ligustrum_sinense" },
  },
  ed2_family_loganiaceae: single("ed2_family_loganiaceae", "CXX. Loganiaceae", 480, "ed2_spigelia_humboldtiana", "Identificar como Spigelia humboldtiana"),
  ed2_family_buddlejaceae: {
    id: "ed2_family_buddlejaceae",
    milestone: "CXXI. Buddlejaceae",
    manualPage: 481,
    descripcion: "Como es la relacion entre tubo de corola y caliz?",
    opcionA: { label: "Tubo de la corola tres veces mas largo que el caliz", keyStep: "A", especieId: "ed2_buddleja_grandiflora" },
    opcionA_prima: { label: "Tubo de la corola algo mas de dos veces el caliz", keyStep: "A'", nextNodeId: "ed2_buddleja_leaf_shape" },
  },
  ed2_buddleja_leaf_shape: {
    id: "ed2_buddleja_leaf_shape",
    milestone: "Buddleja",
    manualPage: 481,
    descripcion: "Las hojas estan connatas en la base?",
    opcionA: { label: "Rombico-ovadas, connatas por pequenas auriculas", keyStep: "B", especieId: "ed2_buddleja_stachyoides" },
    opcionA_prima: { label: "Lanceoladas o linear-lanceoladas, no connatas", keyStep: "B'", nextNodeId: "ed2_buddleja_leaf_width" },
  },
  ed2_buddleja_leaf_width: {
    id: "ed2_buddleja_leaf_width",
    milestone: "Buddleja",
    manualPage: 482,
    descripcion: "Las hojas son linear-lanceoladas u oblongo-lanceoladas?",
    opcionA: { label: "Linear-lanceoladas, largamente atenuadas y uniformemente aserradas", keyStep: "C", especieId: "ed2_buddleja_thyrsoides" },
    opcionA_prima: { label: "Oblongo-lanceoladas, crenadas arriba o enteras", keyStep: "C'", especieId: "ed2_buddleja_elegans" },
  },
};
