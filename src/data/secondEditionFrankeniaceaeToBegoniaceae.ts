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

export const secondEditionFrankeniaceaeToBegoniaceaeSpecies: Record<string, Especie> = {
  ed2_frankenia_pulverulenta: species("ed2_frankenia_pulverulenta", "Frankenia pulverulenta", "Frankenia pulverulenta", "XCVII. Frankeniaceae", "Hierba anual tendida con hojas obovadas, enteras, glabras en el haz y papilosas en el enves; flores solitarias y sesiles en la axila de las ramificaciones del tallo; caliz de 4-5 mm; petalos blancos o rosados; estambres 5; capsula de 2,5 mm", "Europa. Naturalizada en suelos salobres desde Santa Fe a Rio Negro; muy rara cerca de Buenos Aires."),
  ed2_helianthemum_brasiliense: species("ed2_helianthemum_brasiliense", "Helianthemum brasiliense", "Helianthemum brasiliense", "XCVIII. Cistaceae", "Sufrutice de 10-40 cm, ascendente o erecto y velludo; hojas sesiles, lanceolado-elipticas, agudas, enteras, de 1-3 cm; flores largamente pedunculadas solitarias o en cincinios muy laxos; petalos amarillos de 1,5 cm; flores cleistogamas ferreces casi sesiles", "Sur de Brasil, Uruguay y nordeste de Argentina hasta la provincia de Buenos Aires; rara cerca de Buenos Aires y mas comun en el norte provincial y sierras de Tandil."),
  ed2_anchietea_parvifolia: species("ed2_anchietea_parvifolia", "Anchietea parvifolia", "Anchietea parvifolia", "XCIX. Violaceae", "Liana de 10 m o mas, con tronco grueso y ramas glabras; hojas pecioladas, eliptico-lanceoladas, sinuado-aserradas y glabras de 3-8 cm; flores rosadas en fasciculos axilares; capsulas membranosas de 3,5-6 cm; semillas aladas", "America del Sud subtropical hasta el Delta y la ribera del Plata."),
  ed2_viola_arvensis: species("ed2_viola_arvensis", "Viola arvensis", "Violeta silvestre", "XCIX. Violaceae", "Hierba anual o bienal con tallos ramosos, tendidos o ascendentes, glabros o pubescentes; estipulas foliaceas lirado-pinnatifidas; hojas ovadas, crenadas y largamente pecioladas; flores largamente pedunculadas con corola blanca y manchas amarillas", "Europa. Adventicia en America; frecuente en campos cultivados."),
  ed2_viola_odorata: species("ed2_viola_odorata", "Viola odorata", "Violeta", "XCIX. Violaceae", "Perenne, rizomatosa, con estolones y hojas en roseta; hojas anchamente ovado-acorazonadas o reniformes, menudamente crenadas; sepalos ovados y obtusos; petalos violaceos o blancos", "Europa y Asia. Cultivada como ornamental y a veces espontanea en los bosques de talas de los alrededores de Buenos Aires, Magdalena y Punta Indio."),
  ed2_viola_metajaponica: species("ed2_viola_metajaponica", "Viola metajaponica", "Violeta francesa", "XCIX. Violaceae", "Perenne con hojas en roseta; hojas ovado-acorazonadas mas largas que anchas; sepalos lanceolados y agudos; petalos violaceos", "Japon. Cultivada como ornamental y a veces espontanea."),
  ed2_hybanthus_parviflorus: species("ed2_hybanthus_parviflorus", "Hybanthus parviflorus", "Hybanthus parviflorus", "XCIX. Violaceae", "Hierba perenne ascendente, cortamente glanduloso-pubescente, de 20-50 cm; hojas opuestas, lanceoladas o elipticas, agudas, cortamente pecioladas, aserradas y glabras; flores pequenas blancas; capsulas globosas de 4-5 mm", "America del Sud tropical y subtropical hasta el centro de Argentina; frecuente en bosques del Delta, ribera platense, estepa climax y sierras."),
  ed2_turnera_pinnatifida_angustiloba: species("ed2_turnera_pinnatifida_angustiloba", "Turnera pinnatifida var. angustiloba", "Turnera pinnatifida", "C. Turneraceae", "Hierba perenne con raices gemiferas profundas; tallos ascendentes, velludos, de unos 20 cm; hojas alternas, pinnatisectas, con segmentos lineares; flores grandes en las axilas de las hojas superiores; petalos de color minio de 1-1,5 cm", "Sur de Brasil, Uruguay y nordeste de Argentina; se encuentra en la estepa climax; primaveral."),
  ed2_passiflora_coerulea: species("ed2_passiflora_coerulea", "Passiflora coerulea", "Pasionaria", "CI. Passifloraceae", "Sufrutice trepador, glabro y glauco, con zarcillos; hojas palmadas, 5-lobadas, con peciolo glanduloso y estipulas reniformes; flores solitarias de 7-10 cm; corona con filamentos azules, blancos y purpureos; frutos ovoides anaranjados comestibles", "America subtropical. Comun en bosques del Delta, talares y ribera del Plata; a veces cultivada; florece en primavera."),
  ed2_passiflora_misera: species("ed2_passiflora_misera", "Passiflora misera", "Passiflora misera", "CI. Passifloraceae", "Enredadera perenne con tallos glabros o algo pubescentes y zarcillos; hojas 2-lobadas con lobulos muy divergentes, semejantes a una mariposa; flores solitarias de 2,5-4 cm, con petalos blancos y corona purpurea; frutos globosos", "America tropical y subtropical hasta los bosques del Delta del Parana."),
  ed2_blumenbachia_urens: species("ed2_blumenbachia_urens", "Blumenbachia urens", "Blumenbachia urens", "CII. Loasaceae", "Hierba perenne, decumbente o trepadora, con pelos urticantes; hojas 3-folioladas, con foliolos ovados mas o menos lobados; flores blancas con pedunculos de 3-15 mm; sepalos pinnatipartidos; capsulas globosas de 2 cm", "Sur de Brasil, Uruguay y norte de Argentina; bosques del Delta y ribera platense."),
  ed2_blumenbachia_insignis: species("ed2_blumenbachia_insignis", "Blumenbachia insignis", "Blumenbachia insignis", "CII. Loasaceae", "Hierba perenne, rastrera o ascendente, con pelos urticantes; hojas palmatisectas con 3-5 segmentos primarios bipinnatisectos; flores blancas con pedunculos de 30-120 mm; sepalos generalmente enteros; capsulas globosas de 1,5-2 cm", "Sur de Brasil, Uruguay y norte y centro de Argentina; frecuente en sierras bonaerenses y suelos de conchillas proximos al Rio de la Plata."),
  ed2_begonia_cucullata: species("ed2_begonia_cucullata", "Begonia cucullata", "Begonia", "CIII. Begoniaceae", "Hierba perenne estolonifera de 10-80 cm; tallos suculentos, erectos, rojizos y glabros; hojas anchamente ovadas, ciliado-crenadas; cimas axilares paucifloras; flores masculinas con tepalos exteriores rosados e interiores blancos; capsula 3-alada", "America tropical y subtropical; lugares humedos y sombrios de los bosques del Delta y la ribera platense."),
};

export const secondEditionFrankeniaceaeToBegoniaceaeKeyData: Record<string, CladoNode> = {
  ed2_family_frankeniaceae: single("ed2_family_frankeniaceae", "XCVII. Frankeniaceae", 421, "ed2_frankenia_pulverulenta", "Identificar como Frankenia pulverulenta"),
  ed2_family_cistaceae: single("ed2_family_cistaceae", "XCVIII. Cistaceae", 423, "ed2_helianthemum_brasiliense", "Identificar como Helianthemum brasiliense"),
  ed2_family_violaceae: {
    id: "ed2_family_violaceae",
    milestone: "XCIX. Violaceae",
    manualPage: 424,
    descripcion: "Las semillas son aladas y la planta lenosa voluble?",
    opcionA: { label: "Semillas aladas; plantas lenosas, volubles; capsulas grandes y membranosas", keyStep: "A", especieId: "ed2_anchietea_parvifolia" },
    opcionA_prima: { label: "Semillas sin alas; plantas herbaceas o sufrutescentes", keyStep: "A'", nextNodeId: "ed2_violaceae_sepal_appendix" },
  },
  ed2_violaceae_sepal_appendix: {
    id: "ed2_violaceae_sepal_appendix",
    milestone: "Violaceae",
    manualPage: 424,
    descripcion: "Los sepalos se prolongan en la base?",
    opcionA: { label: "Sepalos prolongados en un apendice herbaceo; flores solitarias sobre largos pedunculos", keyStep: "B", nextNodeId: "ed2_viola_stipules" },
    opcionA_prima: { label: "Sepalos no prolongados; flores en axilas superiores formando racimos hojosos", keyStep: "B'", especieId: "ed2_hybanthus_parviflorus" },
  },
  ed2_viola_stipules: {
    id: "ed2_viola_stipules",
    milestone: "Viola",
    manualPage: 425,
    descripcion: "Como son las estipulas y el porte?",
    opcionA: { label: "Estipulas foliaceas lirado-pinnatifidas; hierba anual o bienal; corola blanca con manchas amarillas", keyStep: "A", especieId: "ed2_viola_arvensis" },
    opcionA_prima: { label: "Estipulas linear-lanceoladas reducidas; plantas perennes acaules o subacaules", keyStep: "A'", nextNodeId: "ed2_viola_leaf_shape" },
  },
  ed2_viola_leaf_shape: {
    id: "ed2_viola_leaf_shape",
    milestone: "Viola",
    manualPage: 426,
    descripcion: "Las hojas son mas anchas que largas?",
    opcionA: { label: "Hojas anchamente ovado-acorazonadas o reniformes, generalmente mas anchas que largas; sepalos obtusos", keyStep: "B", especieId: "ed2_viola_odorata" },
    opcionA_prima: { label: "Hojas ovado-acorazonadas, mas largas que anchas; sepalos lanceolados y agudos", keyStep: "B'", especieId: "ed2_viola_metajaponica" },
  },
  ed2_family_turneraceae: single("ed2_family_turneraceae", "C. Turneraceae", 426, "ed2_turnera_pinnatifida_angustiloba", "Identificar como Turnera pinnatifida var. angustiloba"),
  ed2_family_passifloraceae: {
    id: "ed2_family_passifloraceae",
    milestone: "CI. Passifloraceae",
    manualPage: 428,
    descripcion: "Como son las hojas?",
    opcionA: { label: "Hojas palmadas, 5-lobadas; flores de 7-10 cm; frutos ovoides anaranjados", keyStep: "A", especieId: "ed2_passiflora_coerulea" },
    opcionA_prima: { label: "Hojas 2-lobadas con lobulos muy divergentes; flores de 2,5-4 cm; frutos globosos", keyStep: "A'", especieId: "ed2_passiflora_misera" },
  },
  ed2_family_loasaceae: {
    id: "ed2_family_loasaceae",
    milestone: "CII. Loasaceae",
    manualPage: 430,
    descripcion: "Como son las hojas y los pedunculos?",
    opcionA: { label: "Hojas 3-folioladas; pedunculos de 3-15 mm; sepalos pinnatipartidos", keyStep: "A", especieId: "ed2_blumenbachia_urens" },
    opcionA_prima: { label: "Hojas palmatisectas y bipinnatisectas; pedunculos de 30-120 mm; sepalos generalmente enteros", keyStep: "A'", especieId: "ed2_blumenbachia_insignis" },
  },
  ed2_family_begoniaceae: single("ed2_family_begoniaceae", "CIII. Begoniaceae", 432, "ed2_begonia_cucullata", "Identificar como Begonia cucullata"),
};
