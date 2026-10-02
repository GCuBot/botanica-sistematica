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

export const secondEditionVitaceaeTiliaceaeSpecies: Record<string, Especie> = {
  ed2_cissus_palmata: species("ed2_cissus_palmata", "Cissus palmata", "Uva del diablo", "XCI. Vitaceae", "Enredadera perenne con zarcillos; hojas alternas palmaticompuestas con 5 foliolos lanceolado-lineares, aserrados; cimas opuestas a las hojas; flores verdosas; bayas negras, ovoides, con 1-2 semillas", "Sur de Brasil, Paraguay, Uruguay y nordeste de Argentina hasta los bosques del Delta y la ribera platense."),
  ed2_cissus_striata_argentina: species("ed2_cissus_striata_argentina", "Cissus striata var. argentina", "Uva del diablo", "XCI. Vitaceae", "Enredadera con zarcillos; hojas palmaticompuestas con foliolos oblanceolado-espatulados, algo coriaceos y aserrados; cimas opuestas a las hojas; flores verdosas; bayas negras", "America austral. Comun en los bosques del Delta y de la ribera del Plata."),
  ed2_luehea_divaricata: species("ed2_luehea_divaricata", "Luehea divaricata", "Azota-caballo", "XCII. Tiliaceae", "Arbol de 5-15 m con ramas castanas; hojas alternas, pecioladas, ovadas, aserradas, 3-nervadas, glabras en el haz y densamente tomentosas en el enves, de 7-12 cm; flores grandes en cimas; petalos lilas; capsulas ovoides pubescentes", "Brasil, Paraguay, Uruguay y nordeste de Argentina. Hallada en la Isla Martin Garcia."),
};

export const secondEditionVitaceaeTiliaceaeKeyData: Record<string, CladoNode> = {
  ed2_family_vitaceae: {
    id: "ed2_family_vitaceae",
    milestone: "XCI. Vitaceae",
    manualPage: 401,
    descripcion: "Como son los foliolos?",
    opcionA: { label: "Foliolos lanceolado-lineares, aserrados", keyStep: "A", especieId: "ed2_cissus_palmata" },
    opcionA_prima: { label: "Foliolos oblanceolado-espatulados, algo coriaceos y aserrados", keyStep: "A'", especieId: "ed2_cissus_striata_argentina" },
  },
  ed2_family_tiliaceae: {
    id: "ed2_family_tiliaceae",
    milestone: "XCII. Tiliaceae",
    manualPage: 403,
    descripcion: "Tiliaceae: unica especie tratada para la region.",
    opcionA: { label: "Identificar como Luehea divaricata", keyStep: "1", especieId: "ed2_luehea_divaricata" },
    opcionA_prima: { label: "Identificar como Luehea divaricata", keyStep: "1", especieId: "ed2_luehea_divaricata" },
  },
};
