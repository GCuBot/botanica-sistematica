import { CladoNode, Especie } from "@/types";

function species(id: string, scientificName: string, commonName: string, characteristics: string, distribution: string): Especie {
  return {
    id,
    nombreCientifico: scientificName,
    nombreVulgar: commonName,
    familia: "XXXVIII. Amaryllidaceae",
    descripcion: characteristics.split(";", 1)[0] + ".",
    caracteristicas: characteristics,
    distribucion: distribution,
  };
}

export const secondEditionAmaryllidaceaeSpecies: Record<string, Especie> = {
  ed2_hypoxis_decumbens: species("ed2_hypoxis_decumbens", "Hypoxis decumbens", "Hypoxis decumbens", "Rizomatosa de hojas lineares; escapos cortos con una a ocho flores; tepalos amarillos de 5-7 mm", "America calida; comun en el Delta y la ribera platense."),
  ed2_narcissus_tazetta: species("ed2_narcissus_tazetta", "Narcissus tazetta", "Junquillo blanco", "Bulbifera de hojas lineares; umbela de cuatro a doce flores blancas fragantes con corona amarilla cupuliforme", "Eurasia; muy cultivada y subespontanea en el Delta."),
  ed2_hippeastrum_bifidum: species("ed2_hippeastrum_bifidum", "Hippeastrum bifidum", "Hippeastrum bifidum", "Perigonio carmin de 3,5-5 cm; hojas menores de 2 cm de ancho; umbela de tres a siete flores", "Uruguay y nordeste argentino; comun en suelos fertiles y menos frecuente en sierras bonaerenses."),
  ed2_hippeastrum_rutilum: species("ed2_hippeastrum_rutilum", "Hippeastrum rutilum", "Hippeastrum rutilum", "Perigonio coral de 7,5-10 cm; hojas de 2-2,5 cm de ancho; umbela de dos a cuatro flores", "Sur de Brasil, Uruguay y Argentina; Delta e isla Martin Garcia."),
  ed2_zephyranthes_candida: species("ed2_zephyranthes_candida", "Zephyranthes candida", "Azucenita del campo, azucena", "Perigonio blanco de 3-5 cm; seis estambres; hojas de 3-5 mm de ancho", "Delta, ribera e isla Martin Garcia."),
  ed2_zephyranthes_minima: species("ed2_zephyranthes_minima", "Zephyranthes minima", "Zephyranthes minima", "Perigonio blanco de 5-10 mm; tres estambres y tres estaminodios; hojas de cerca de 1 mm", "Nordeste y centro de Argentina; estepa climax."),
  ed2_habranthus_tubispathus: species("ed2_habranthus_tubispathus", "Habranthus tubispathus", "Habranthus tubispathus", "Perigonio amarillo o anaranjado cobrizo de 20-35 mm; hojas cortas posteriores a la flor", "Uruguay y este argentino hasta Patagonia; comun en estepa y sierras."),
  ed2_habranthus_gracilifolius: species("ed2_habranthus_gracilifolius", "Habranthus gracilifolius", "Habranthus gracilifolius", "Perigonio rosado o blanco de 26-35 mm; hojas subfiliformes semicilindricas", "Uruguay y nordeste argentino; sierras y estepa climax."),
  ed2_habranthus_barrosianus: species("ed2_habranthus_barrosianus", "Habranthus barrosianus", "Habranthus barrosianus", "Perigonio rosado o blanco de 30-50 mm; hojas acintadas y planas", "Estepas y sierras de la provincia de Buenos Aires."),
};

export const secondEditionAmaryllidaceaeKeyData: Record<string, CladoNode> = {
  ed2_family_amaryllidaceae: {
    id: "ed2_family_amaryllidaceae", milestone: "Amaryllidaceae", manualPage: 193,
    descripcion: "¿La planta posee rizoma o cormo y flores pequeñas amarillas?",
    opcionA: { label: "Si; rizoma o cormo y flores amarillas pequeñas", keyStep: "A", especieId: "ed2_hypoxis_decumbens" },
    opcionA_prima: { label: "No; bulbo tunicado", keyStep: "A'", nextNodeId: "ed2_amaryllidaceae_corona" },
  },
  ed2_amaryllidaceae_corona: {
    id: "ed2_amaryllidaceae_corona", milestone: "Amaryllidaceae: corona", manualPage: 193,
    descripcion: "¿El perigonio presenta una corona tepaloidea conspicua?",
    opcionA: { label: "Si; corona conspicua", keyStep: "B", especieId: "ed2_narcissus_tazetta" },
    opcionA_prima: { label: "No; corona ausente o reducida a escamas o fimbrias", keyStep: "B'", nextNodeId: "ed2_amaryllidaceae_spathe" },
  },
  ed2_amaryllidaceae_spathe: {
    id: "ed2_amaryllidaceae_spathe", milestone: "Amaryllidaceae: espata", manualPage: 193,
    descripcion: "¿Hay dos espatas libres y flores zigomorfas generalmente numerosas?",
    opcionA: { label: "Si; dos espatas y estambres declinados de cuatro longitudes", keyStep: "C", nextNodeId: "ed2_hippeastrum" },
    opcionA_prima: { label: "No; una espata entera o bifida y flores solitarias, rara vez dos", keyStep: "C'", nextNodeId: "ed2_amaryllidaceae_flower_posture" },
  },
  ed2_amaryllidaceae_flower_posture: {
    id: "ed2_amaryllidaceae_flower_posture", milestone: "Amaryllidaceae: posicion floral", manualPage: 194,
    descripcion: "¿Las flores son erectas o inclinadas?",
    opcionA: { label: "Erectas o suberectas; estambres erectos de dos longitudes", keyStep: "D", nextNodeId: "ed2_zephyranthes" },
    opcionA_prima: { label: "Oblicuas o inclinadas; estambres declinados de tres o cuatro longitudes", keyStep: "D'", nextNodeId: "ed2_habranthus" },
  },
  ed2_hippeastrum: {
    id: "ed2_hippeastrum", milestone: "Hippeastrum", manualPage: 195,
    descripcion: "¿El perigonio es carmin y mide 3,5-5 cm o coral y mide 7,5-10 cm?",
    opcionA: { label: "Carmin, de 3,5-5 cm; hojas menores de 2 cm", keyStep: "A", especieId: "ed2_hippeastrum_bifidum" },
    opcionA_prima: { label: "Coral, de 7,5-10 cm; hojas de 2-2,5 cm", keyStep: "A'", especieId: "ed2_hippeastrum_rutilum" },
  },
  ed2_zephyranthes: {
    id: "ed2_zephyranthes", milestone: "Zephyranthes", manualPage: 196,
    descripcion: "¿El perigonio mide 3-5 cm y posee seis estambres?",
    opcionA: { label: "Si; perigonio blanco de 3-5 cm y seis estambres", keyStep: "A", especieId: "ed2_zephyranthes_candida" },
    opcionA_prima: { label: "No; perigonio blanco de 5-10 mm, tres estambres y tres estaminodios", keyStep: "A'", especieId: "ed2_zephyranthes_minima" },
  },
  ed2_habranthus: {
    id: "ed2_habranthus", milestone: "Habranthus", manualPage: 196,
    descripcion: "¿El perigonio es amarillo o anaranjado cobrizo?",
    opcionA: { label: "Si; 20-35 mm y hojas posteriores a la flor", keyStep: "A", especieId: "ed2_habranthus_tubispathus" },
    opcionA_prima: { label: "No; rosado o blanco, de 25-50 mm", keyStep: "A'", nextNodeId: "ed2_habranthus_leaf_shape" },
  },
  ed2_habranthus_leaf_shape: {
    id: "ed2_habranthus_leaf_shape", milestone: "Habranthus: hojas", manualPage: 196,
    descripcion: "¿Las hojas son subfiliformes y semicilindricas o acintadas y planas?",
    opcionA: { label: "Subfiliformes, semicilindricas; perigonio de 26-35 mm", keyStep: "B", especieId: "ed2_habranthus_gracilifolius" },
    opcionA_prima: { label: "Acintadas, planas; perigonio de 30-50 mm", keyStep: "B'", especieId: "ed2_habranthus_barrosianus" },
  },
};
