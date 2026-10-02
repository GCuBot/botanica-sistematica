import { CladoNode, Especie } from "@/types";

function species(id: string, scientificName: string, commonName: string, characteristics: string, distribution: string): Especie {
  return {
    id,
    nombreCientifico: scientificName,
    nombreVulgar: commonName,
    familia: "XCIV. Sterculiaceae",
    descripcion: characteristics.split(";", 1)[0] + ".",
    caracteristicas: characteristics,
    distribucion: distribution,
  };
}

export const secondEditionSterculiaceaeSpecies: Record<string, Especie> = {
  ed2_byttneria_urticifolia: species("ed2_byttneria_urticifolia", "Byttneria urticifolia", "Byttneria urticifolia", "Arbusto ramoso, hispido y aculeado; hojas pubescentes con peciolo de 2-5 cm y lamina ovada, cordada y aserrada de 5-8 cm; flores en umbelas paucifloras; petalos con ligula filiforme glabra; capsulas de 10-12 mm", "Sur de Brasil, Uruguay y nordeste de Argentina hasta el Delta."),
  ed2_byttneria_scabra: species("ed2_byttneria_scabra", "Byttneria scabra", "Byttneria scabra", "Arbusto erecto, hispido y aculeado; hojas muy cortamente pecioladas o subsesiles, ovadas u ovado-lanceoladas, enteras o aserradas, escabrosas, de 6-12 cm; flores en umbelas pedunculadas; petalos con ligula pubescente en la base; capsulas de 12-15 mm", "Sur de Brasil, Paraguay y norte de Argentina hasta el Delta."),
};

export const secondEditionSterculiaceaeKeyData: Record<string, CladoNode> = {
  ed2_family_sterculiaceae: {
    id: "ed2_family_sterculiaceae",
    milestone: "XCIV. Sterculiaceae",
    manualPage: 417,
    descripcion: "Como son las hojas y la ligula de los petalos?",
    opcionA: { label: "Hojas pecioladas, ovadas y cordadas; ligula filiforme glabra", keyStep: "A", especieId: "ed2_byttneria_urticifolia" },
    opcionA_prima: { label: "Hojas muy cortamente pecioladas o subsesiles; ligula pubescente en la base", keyStep: "A'", especieId: "ed2_byttneria_scabra" },
  },
};
