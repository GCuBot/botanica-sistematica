import { CladoNode, Especie } from "@/types";

function species(id: string, scientificName: string, commonName: string, characteristics: string, distribution: string): Especie {
  return {
    id,
    nombreCientifico: scientificName,
    nombreVulgar: commonName,
    familia: "LXXXV. Callitrichaceae",
    descripcion: characteristics.split(";", 1)[0] + ".",
    caracteristicas: characteristics,
    distribucion: distribution,
  };
}

export const secondEditionCallitrichaceaeSpecies: Record<string, Especie> = {
  ed2_callitriche_turfosa: species("ed2_callitriche_turfosa", "Callitriche turfosa", "Callitriche turfosa", "Anual pigmea de suelos humedos; fruto mas ancho que alto, de 0,7-0,9 mm x 0,6-0,8 mm; mericarpios de cara convexa y ala muy estrecha; hojas de 2-4 mm x 0,7-1,5 mm", "America del Sud, en suelos pantanosos."),
  ed2_callitriche_deflexa: species("ed2_callitriche_deflexa", "Callitriche deflexa", "Callitriche deflexa", "Planta terrestre de suelos humedos; fruto mas ancho que alto, de 0,5-0,9 mm x 0,3-0,7 mm; cara de los mericarpios casi plana; hojas de 2-4 mm x 0,8-2,3 mm; pedicelos fructiferos de 0,5-4 mm", "America del Sud, en suelos humedos."),
  ed2_callitriche_rimosa: species("ed2_callitriche_rimosa", "Callitriche rimosa", "Callitriche rimosa", "Hierba anfibia; fruto redondeado de 0,9-1,2 mm x 0,9-1,3 mm, circundado por alas estrechas; hojas obovadas o espatuladas, en formas acuaticas de hasta 15 mm x 6 mm", "Sur de Brasil, Uruguay y nordeste de Argentina hasta el Rio de la Plata; en charcas y bordes de arroyos."),
  ed2_callitriche_heterophylla: species("ed2_callitriche_heterophylla", "Callitriche heterophylla", "Callitriche heterophylla", "Acuatica pigmea; fruto sin alas, de 0,6-1,2 mm de ancho y aproximadamente otro tanto de alto; hojas lineares o espatuladas", "America del Norte. Rara en Uruguay y en las sierras de la provincia de Buenos Aires."),
  ed2_callitriche_oblongicarpa: species("ed2_callitriche_oblongicarpa", "Callitriche oblongicarpa", "Callitriche oblongicarpa", "Planta anfibia o de suelos inundados; frutos con alas estrechisimas que no llegan a la base ni al apice de los mericarpios, de 0,7-0,9 mm x 0,8-0,9 mm; hojas espatuladas", "Region platense, en suelos pantanosos o inundados."),
};

export const secondEditionCallitrichaceaeKeyData: Record<string, CladoNode> = {
  ed2_family_callitrichaceae: {
    id: "ed2_family_callitrichaceae",
    milestone: "LXXXV. Callitrichaceae",
    manualPage: 388,
    descripcion: "El fruto es mas ancho que alto o tan alto como ancho a algo mas alto?",
    opcionA: { label: "Fruto mas ancho que alto; plantas terrestres de suelos humedos", keyStep: "A", nextNodeId: "ed2_callitriche_wide_fruit" },
    opcionA_prima: { label: "Fruto tan alto como ancho o algo mas alto; plantas anfibias o acuaticas", keyStep: "A'", nextNodeId: "ed2_callitriche_tall_fruit" },
  },
  ed2_callitriche_wide_fruit: {
    id: "ed2_callitriche_wide_fruit",
    milestone: "Callitriche: frutos mas anchos que altos",
    manualPage: 388,
    descripcion: "La cara de los mericarpios es convexa o casi plana?",
    opcionA: { label: "Mericarpios con cara convexa; frutos de 0,7-0,9 mm de ancho", keyStep: "B", especieId: "ed2_callitriche_turfosa" },
    opcionA_prima: { label: "Mericarpios con cara casi plana; frutos de 0,5-0,9 mm de ancho", keyStep: "B'", especieId: "ed2_callitriche_deflexa" },
  },
  ed2_callitriche_tall_fruit: {
    id: "ed2_callitriche_tall_fruit",
    milestone: "Callitriche: frutos altos",
    manualPage: 389,
    descripcion: "Los frutos estan rodeados por alas estrechas?",
    opcionA: { label: "Frutos redondeados, circundados por alas estrechas", keyStep: "C", especieId: "ed2_callitriche_rimosa" },
    opcionA_prima: { label: "Frutos sin ala o con ala estrechisima incompleta", keyStep: "C'", nextNodeId: "ed2_callitriche_wing_absent" },
  },
  ed2_callitriche_wing_absent: {
    id: "ed2_callitriche_wing_absent",
    milestone: "Callitriche: ala ausente o incompleta",
    manualPage: 390,
    descripcion: "Los frutos carecen de alas o tienen alas estrechisimas que no llegan a la base ni al apice?",
    opcionA: { label: "Frutos sin alas", keyStep: "D", especieId: "ed2_callitriche_heterophylla" },
    opcionA_prima: { label: "Frutos con alas estrechisimas incompletas", keyStep: "D'", especieId: "ed2_callitriche_oblongicarpa" },
  },
};
