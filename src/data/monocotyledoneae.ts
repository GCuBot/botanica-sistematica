// Estructura completa de clados para Monocotiledoneae
// Basado en el manual de Flora de Buenos Aires

export const monocotiledoneaeData = {
  // Nivel 0: Raíz de Monocotiledoneae
  monocot_root: {
    id: "monocot_root",
    milestone: "Monocotiledoneae",
    manualPage: 39,
    descripcion: "Clase Monocotiledoneae: Embrión con 1 solo cotiledón. Hojas generalmente paralelinervadas. Flores generalmente trimeras.",
    opcionA: {
      label: "Plantas arborescentes, con tronco terminado en una sola yema",
      keyStep: "A",
      nextNodeId: "palmae",
      familia: "19. Palmae"
    },
    opcionA_prima: {
      label: "Plantas herbáceas, con otros caracteres",
      keyStep: "A'",
      nextNodeId: "herbaceae"
    }
  },

  // RAMA A: Palmae
  palmae: {
    id: "palmae",
    milestone: "Palmae",
    manualPage: 128,
    descripcion: "Palmae: plantas con tallo simple, una sola yema terminal, hojas generalmente pinatisectas o palmatisectas e inflorescencia protegida por espata lenosa.",
    opcionA: {
      label: "Genero Arecastrum; especie unica tratada en el manual",
      keyStep: "1",
      especieId: "arecastrum_romanzoffianum"
    },
    opcionA_prima: {
      label: "Genero Arecastrum; especie unica tratada en el manual",
      keyStep: "1",
      especieId: "arecastrum_romanzoffianum"
    },
    especie: {
      id: "arecastrum_romanzoffianum",
      nombreCientifico: "Arecastrum romanzoffianum",
      nombreVulgar: "Pindo; datil",
      familia: "19. Palmae",
      descripcion: "Palma de unos 10 m de alto, con estipe desnudo y anillado.",
      caracteristicas: "Hojas pinadas de unos 2,5 m; segmentos lineales, plegados y flaccidos, dispuestos en grupos de 2-5 a cada lado del raquis; ramas de la inflorescencia sinuosas; flores amarillo-crema; fruto globoso-ovoideo de 2 cm.",
      distribucion: "America austral calida; individuos aislados en el Delta del Parana y cultivada como ornamental.",
      imagen: ""
    }
  },

  // RAMA A': Plantas herbáceas
  herbaceae: {
    id: "herbaceae",
    descripcion: "¿Qué tipo de plantas son?",
    opcionA: {
      label: "Plantas acuáticas, reducidas a un pequeño cuerpo taliforme",
      nextNodeId: "lemnaceae_a"
    },
    opcionA_prima: {
      label: "Plantas acuáticas o terrestres con tallos y hojas bien diferenciados",
      nextNodeId: "herbaceae_b"
    }
  },

  lemnaceae_a: {
    id: "lemnaceae_a",
    milestone: "Lemnaceae",
    manualPage: 129,
    descripcion: "Lemnaceae - A: frondas con raices o sin raices",
    opcionA: {
      label: "Frondas con raices; bolsas proliferas 2",
      keyStep: "A",
      nextNodeId: "lemnaceae_b"
    },
    opcionA_prima: {
      label: "Frondas sin raices; bolsa prolifera una sola",
      keyStep: "A'",
      nextNodeId: "lemnaceae_c"
    }
  },

  lemnaceae_b: {
    id: "lemnaceae_b",
    milestone: "Lemnaceae",
    manualPage: 130,
    descripcion: "Lemnaceae - B: cantidad de raices",
    opcionA: {
      label: "Raices varias, fasciculadas; caracteres de Spirodella",
      keyStep: "B",
      especieId: "spirodella_intermedia"
    },
    opcionA_prima: {
      label: "Raiz solitaria; caracteres de Lemna",
      keyStep: "B'",
      nextNodeId: "lemna_a"
    }
  },

  lemnaceae_c: {
    id: "lemnaceae_c",
    milestone: "Lemnaceae",
    manualPage: 130,
    descripcion: "Lemnaceae - C: forma y espesor de las frondas sin raices",
    opcionA: {
      label: "Frondas delgadas, oblongas; caracteres de Wolffiella",
      keyStep: "C",
      especieId: "wolffiella_oblonga"
    },
    opcionA_prima: {
      label: "Frondas gruesas, globulares; caracteres de Wolffia",
      keyStep: "C'",
      nextNodeId: "wolffia_a"
    }
  },

  lemna_a: {
    id: "lemna_a",
    milestone: "Lemna",
    manualPage: 130,
    descripcion: "Lemna - A: frondas planas o convexas",
    opcionA: {
      label: "Frondas planas o apenas convexas en la cara inferior, oblongas, de 2,5-3,5 mm por 1,5-2 mm, agrupadas de 2-3",
      keyStep: "A",
      especieId: "lemna_valdiviana"
    },
    opcionA_prima: {
      label: "Frondas fuertemente convexas o gibosas en la cara inferior",
      keyStep: "A'",
      nextNodeId: "lemna_b"
    }
  },

  lemna_b: {
    id: "lemna_b",
    milestone: "Lemna",
    manualPage: 130,
    descripcion: "Lemna - B: frondas ovoideas alargadas o anchas",
    opcionA: {
      label: "Frondas ovoideas, alargadas, de 1,7-2,5 mm por 0,9-1,6 mm, gruesas y ligeramente gibosas; ovario con 1-2 ovulos",
      keyStep: "B",
      especieId: "lemna_disperma"
    },
    opcionA_prima: {
      label: "Frondas anchas, de 2-5 mm por 1,7-4 mm, gibosas",
      keyStep: "B'",
      nextNodeId: "lemna_c"
    }
  },

  lemna_c: {
    id: "lemna_c",
    milestone: "Lemna",
    manualPage: 130,
    descripcion: "Lemna - C: manchas rojizas y forma de las frondas anchas",
    opcionA: {
      label: "Frondas ovado-circulares de 2-3 mm por 1,7-2,3 mm, con manchitas rojizas en la cara superior; generalmente agrupadas de 3-4",
      keyStep: "C",
      especieId: "lemna_parodiana"
    },
    opcionA_prima: {
      label: "Frondas ovadas u orbiculares de 3-5 mm por 2-4 mm, sin manchas rojizas, con 3-5 nervaduras, agrupadas de a dos",
      keyStep: "C'",
      especieId: "lemna_gibba"
    }
  },

  wolffia_a: {
    id: "wolffia_a",
    milestone: "Wolffia",
    manualPage: 132,
    descripcion: "Wolffia - A: cara superior de la fronda",
    opcionA: {
      label: "Cara superior convexa, no punteada; fronda de 0,5-1 mm por 0,5-0,8 mm, sin celulas epidermicas pigmentadas",
      keyStep: "A",
      especieId: "wolffia_columbiana"
    },
    opcionA_prima: {
      label: "Cara superior aplanada en el margen y con una papila en el centro; frondas de 0,8-1,5 mm por 0,7-1 mm, con celulas epidermicas pigmentadas",
      keyStep: "A'",
      especieId: "wolffia_papulifera"
    }
  },

  // Nivel B: Herbáceas (continuación)
  herbaceae_b: {
    id: "herbaceae_b",
    descripcion: "¿Cómo son las flores?",
    opcionA: {
      label: "Flores desnudas (protegidas o no por brácteas) o con perigonio verdoso poco llamativo",
      nextNodeId: "herbaceae_b_c"
    },
    opcionA_prima: {
      label: "Flores con cáliz y corola bien diferenciados o con perigonio coralino vistoso",
      nextNodeId: "herbaceae_c_prima"
    }
  },

  // Nivel C (dentro de B): Flores desnudas
  herbaceae_b_c: {
    id: "herbaceae_b_c",
    descripcion: "¿Cómo están agrupadas las flores?",
    opcionA: {
      label: "Flores agrupadas en espiguillas (pastos y ciperos)",
      nextNodeId: "herbaceae_b_c_d"
    },
    opcionA_prima: {
      label: "Flores desnudas o con perigonio verdoso, sin espiguillas",
      nextNodeId: "herbaceae_b_c_d_prima"
    }
  },

  // D: Espiguillas - Gramineae vs Cyperaceae
  herbaceae_b_c_d: {
    id: "herbaceae_b_c_d",
    descripcion: "¿Cuál es la estructura del tallo y las vainas?",
    opcionA: {
      label: "Tallos huecos con nudos bien marcados. Vainas abiertas. Fruto cariopse",
      familia: "17. Gramineae",
      nextNodeId: "gramineae_tribe_a"
    },
    opcionA_prima: {
      label: "Tallos macizos, triangulares. Vainas cerradas. Fruto aquenio",
      familia: "18. Cyperaceae",
      nextNodeId: "cyperaceae_a"
    }
  },

  cyperaceae_a: {
    id: "cyperaceae_a",
    milestone: "Cyperaceae",
    manualPage: 112,
    descripcion: "Cyperaceae - A: flores fructiferas unisexuales o hermafroditas",
    opcionA: {
      label: "Flores fructiferas unisexuales; caracteres de Carex",
      keyStep: "A",
      nextNodeId: "carex_a"
    },
    opcionA_prima: {
      label: "Flores fructiferas hermafroditas; continuar en proximas tandas de Cyperaceae",
      keyStep: "A'",
      nextNodeId: "cyperaceae_b"
    }
  },

  cyperaceae_b: {
    id: "cyperaceae_b",
    milestone: "Cyperaceae",
    manualPage: 112,
    descripcion: "Cyperaceae - B: disposicion de las glumas",
    opcionA: {
      label: "Glumas disticas",
      keyStep: "B",
      nextNodeId: "cyperaceae_c"
    },
    opcionA_prima: {
      label: "Glumas espiraladas; continuar en proximas tandas de Cyperaceae",
      keyStep: "B'",
      nextNodeId: "cyperaceae_d"
    }
  },

  cyperaceae_c: {
    id: "cyperaceae_c",
    milestone: "Cyperaceae",
    manualPage: 112,
    descripcion: "Cyperaceae - C: plantas afilas o con hojas",
    opcionA: {
      label: "Plantas afilas; estambres acrescentes despues de la antesis; caracteres de Androtrichum",
      keyStep: "C",
      especieId: "androtrichum_trigynum"
    },
    opcionA_prima: {
      label: "Plantas generalmente con hojas; estambres no acrescentes; caracteres de Cyperus",
      keyStep: "C'",
      nextNodeId: "cyperus_a"
    }
  },

  carex_a: {
    id: "carex_a",
    milestone: "Carex",
    manualPage: 112,
    descripcion: "Carex - A: espiguilla solitaria o numerosas",
    opcionA: {
      label: "Espiguilla androgina, solitaria en el apice del tallo, lanceolada, de 1,5-2 cm; utriculos elipsoideos de 6-7 mm",
      keyStep: "A",
      especieId: "carex_sellowiana"
    },
    opcionA_prima: {
      label: "Espiguillas mas o menos numerosas",
      keyStep: "A'",
      nextNodeId: "carex_b"
    }
  },

  carex_b: {
    id: "carex_b",
    milestone: "Carex",
    manualPage: 112,
    descripcion: "Carex - B: espiguillas androginas o unisexuales",
    opcionA: {
      label: "Todas las espiguillas androginas, con flores femeninas en la base y masculinas en el apice",
      keyStep: "B",
      nextNodeId: "carex_c"
    },
    opcionA_prima: {
      label: "Espiguillas unisexuales, masculinas en la parte superior del tallo y femeninas mas abajo; continuar en proxima tanda de Carex",
      keyStep: "B'",
      nextNodeId: "carex_i"
    }
  },

  carex_c: {
    id: "carex_c",
    milestone: "Carex",
    manualPage: 112,
    descripcion: "Carex - C: espiguillas pedunculadas o sesiles",
    opcionA: {
      label: "Espiguillas 4-6, de 7-10 mm, largamente pedunculadas, cada una en axila de una bractea foliacea",
      keyStep: "C",
      especieId: "carex_phalaroides"
    },
    opcionA_prima: {
      label: "Espiguillas siempre sesiles, formando una espiga terminal",
      keyStep: "C'",
      nextNodeId: "carex_d"
    }
  },

  carex_d: {
    id: "carex_d",
    milestone: "Carex",
    manualPage: 112,
    descripcion: "Carex - D: espiga sin bractea o con bracteas largas",
    opcionA: {
      label: "Espiga sin bractea o con una bractea mas corta que ella",
      keyStep: "D",
      nextNodeId: "carex_e"
    },
    opcionA_prima: {
      label: "Espiga con 2-3 bracteas foliaceas varias veces mas largas que ella; continuar en proxima tanda de Carex",
      keyStep: "D'",
      nextNodeId: "carex_g"
    }
  },

  carex_e: {
    id: "carex_e",
    milestone: "Carex",
    manualPage: 112,
    descripcion: "Carex - E: rizomas largos o cortos",
    opcionA: {
      label: "Rizomas muy largos, tendidos; espiguillas 6-10 en espiga terminal oblonga ebracteada de 2 cm",
      keyStep: "E",
      especieId: "carex_marcida"
    },
    opcionA_prima: {
      label: "Rizomas muy cortos, formando matas cespitosas",
      keyStep: "E'",
      nextNodeId: "carex_f"
    }
  },

  carex_f: {
    id: "carex_f",
    milestone: "Carex",
    manualPage: 113,
    descripcion: "Carex - F: espiga interrumpida o densa",
    opcionA: {
      label: "Espiga interrumpida, de 5-8 cm, con bractea muy corta; espiguillas 6-8; utriculos lanceolado-ovados de 3-4 mm",
      keyStep: "F",
      especieId: "carex_divulsa"
    },
    opcionA_prima: {
      label: "Espiga densa, cilindrica, de 4-6 cm, con bractea setacea basal; espiguillas en glomerulos compactos",
      keyStep: "F'",
      especieId: "carex_brongniartii"
    }
  },

  carex_g: {
    id: "carex_g",
    milestone: "Carex",
    manualPage: 113,
    descripcion: "Carex - G: utriculos papilosos/verrugosos o lisos",
    opcionA: {
      label: "Utriculos papilosos o verrugosos, ovado-lanceolados, de 3-4,5 mm, pajizos, con rostro corto bidentado",
      keyStep: "G",
      especieId: "carex_bonariensis"
    },
    opcionA_prima: {
      label: "Utriculos lisos",
      keyStep: "G'",
      nextNodeId: "carex_h"
    }
  },

  carex_h: {
    id: "carex_h",
    milestone: "Carex",
    manualPage: 113,
    descripcion: "Carex - H: forma y color de utriculos lisos",
    opcionA: {
      label: "Utriculos lanceolados, pajizos, largamente rostrados, glabros, de 2,5-3 mm; espiga interrumpida de 2-3 cm",
      keyStep: "H",
      especieId: "carex_uruguensis"
    },
    opcionA_prima: {
      label: "Utriculos anchamente elipticos, castanos, de 4-5 mm, contraidos en rostro hendido; espiga ovada de 15-18 mm",
      keyStep: "H'",
      especieId: "carex_sororia"
    }
  },

  carex_i: {
    id: "carex_i",
    milestone: "Carex",
    manualPage: 113,
    descripcion: "Carex - I: cantidad de espiguillas masculinas",
    opcionA: {
      label: "Una sola espiguilla masculina",
      keyStep: "I",
      nextNodeId: "carex_j"
    },
    opcionA_prima: {
      label: "Dos o mas espiguillas masculinas",
      keyStep: "I'",
      nextNodeId: "carex_k"
    }
  },

  carex_j: {
    id: "carex_j",
    milestone: "Carex",
    manualPage: 113,
    descripcion: "Carex - J: espiguillas pedunculadas o casi sesiles",
    opcionA: {
      label: "Espiguillas pedunculadas, nutantes, 5-6; terminal masculina cilindrica de 3-6 cm y laterales femeninas densifloras",
      keyStep: "J",
      especieId: "carex_pseudocyperus"
    },
    opcionA_prima: {
      label: "Espiguillas casi todas sesiles, erectas, 3-5; superior masculina y otras femeninas cilindricas de 1-2,5 cm",
      keyStep: "J'",
      especieId: "carex_extensa"
    }
  },

  carex_k: {
    id: "carex_k",
    milestone: "Carex",
    manualPage: 113,
    descripcion: "Carex - K: utriculos lisos o hispidos",
    opcionA: {
      label: "Utriculos lisos, ovoideo-lanceolados, de 6-7 mm, castanos, con rostro corto",
      keyStep: "K",
      especieId: "carex_riparia"
    },
    opcionA_prima: {
      label: "Utriculos hispidos, suberosos, orbiculado-ovales, trigonales, de 4-5 mm",
      keyStep: "K'",
      especieId: "carex_tweediana"
    }
  },

  cyperus_a: {
    id: "cyperus_a",
    milestone: "Cyperus",
    manualPage: 116,
    descripcion: "Cyperus - A: estilo bifido o trifido",
    opcionA: {
      label: "Estilo bifido",
      keyStep: "A",
      nextNodeId: "cyperus_b"
    },
    opcionA_prima: {
      label: "Estilo trifido; continuar en proxima tanda de Cyperus",
      keyStep: "A'",
      nextNodeId: "cyperus_g"
    }
  },

  cyperus_b: {
    id: "cyperus_b",
    milestone: "Cyperus",
    manualPage: 116,
    descripcion: "Cyperus - B: espiguillas 1-2-floras o plurifloras",
    opcionA: {
      label: "Espiguillas 1-2-floras",
      keyStep: "B",
      nextNodeId: "cyperus_c"
    },
    opcionA_prima: {
      label: "Espiguillas plurifloras",
      keyStep: "B'",
      nextNodeId: "cyperus_e"
    }
  },

  cyperus_c: {
    id: "cyperus_c",
    milestone: "Cyperus",
    manualPage: 116,
    descripcion: "Cyperus - C: plantas cespitosas o rizomatosas",
    opcionA: {
      label: "Plantas cespitosas con rizoma muy corto; tallos triquetros lisos de 5-20 cm; inflorescencia en capitulo",
      keyStep: "C",
      especieId: "cyperus_sesquiflorus"
    },
    opcionA_prima: {
      label: "Plantas rizomatosas",
      keyStep: "C'",
      nextNodeId: "cyperus_d"
    }
  },

  cyperus_d: {
    id: "cyperus_d",
    milestone: "Cyperus",
    manualPage: 116,
    descripcion: "Cyperus - D: espiguillas bifloras o unifloras",
    opcionA: {
      label: "Espiguillas bifloras, ovado-lanceoladas, con 5 glumas de carena lisa, en capitulo eliptico de 6-10 mm",
      keyStep: "D",
      especieId: "cyperus_obtusatus"
    },
    opcionA_prima: {
      label: "Espiguillas unifloras, lanceoladas, de 2,5-3 mm, con glumas blancas de carena espinulosa",
      keyStep: "D'",
      especieId: "cyperus_brevifolius"
    }
  },

  cyperus_e: {
    id: "cyperus_e",
    milestone: "Cyperus",
    manualPage: 116,
    descripcion: "Cyperus - E: espiguillas deprimidas dorsiventralmente o comprimidas lateralmente",
    opcionA: {
      label: "Espiguillas deprimidas dorsiventralmente, lanceoladas, de 7-12 mm, con 10-15 flores; inflorescencia seudolateral capituliforme",
      keyStep: "E",
      especieId: "cyperus_laevigatus"
    },
    opcionA_prima: {
      label: "Espiguillas comprimidas lateralmente",
      keyStep: "E'",
      nextNodeId: "cyperus_f"
    }
  },

  cyperus_f: {
    id: "cyperus_f",
    milestone: "Cyperus",
    manualPage: 116,
    descripcion: "Cyperus - F: color de glumas",
    opcionA: {
      label: "Glumas castanas, obtusas; espiguillas ovado-lanceoladas, obtusas, 6-14-floras, de 5-10 mm",
      keyStep: "F",
      especieId: "cyperus_megapotamicus"
    },
    opcionA_prima: {
      label: "Glumas blanquecinas, carenado-naviculares, obtusas; estambres 2; espiguillas 15-25 lineal-lanceoladas",
      keyStep: "F'",
      especieId: "cyperus_tener"
    }
  },

  cyperus_g: {
    id: "cyperus_g",
    milestone: "Cyperus",
    manualPage: 116,
    descripcion: "Cyperus - G: espiguillas cilindricas con raquis articulado",
    opcionA: {
      label: "Espiguillas cilindricas, con raquis articulado al nivel de las glumas, dividiendose a la madurez en fragmentos uninucigenos",
      keyStep: "G",
      especieId: "cyperus_ferax"
    },
    opcionA_prima: {
      label: "Espiguillas mas o menos comprimidas lateralmente",
      keyStep: "G'",
      nextNodeId: "cyperus_h"
    }
  },

  cyperus_h: {
    id: "cyperus_h",
    milestone: "Cyperus",
    manualPage: 116,
    descripcion: "Cyperus - H: espiguillas digitadas/fasciculadas o agrupadas en espigas",
    opcionA: {
      label: "Espiguillas digitadas o fasciculadas",
      keyStep: "H",
      nextNodeId: "cyperus_i"
    },
    opcionA_prima: {
      label: "Espiguillas agrupadas en espigas; continuar en proxima tanda de Cyperus",
      keyStep: "H'",
      nextNodeId: "cyperus_p"
    }
  },

  cyperus_i: {
    id: "cyperus_i",
    milestone: "Cyperus",
    manualPage: 116,
    descripcion: "Cyperus - I: tallo escabroso/espinuloso o liso",
    opcionA: {
      label: "Tallo escabroso o espinuloso",
      keyStep: "I",
      nextNodeId: "cyperus_j"
    },
    opcionA_prima: {
      label: "Tallo liso",
      keyStep: "I'",
      nextNodeId: "cyperus_k"
    }
  },

  cyperus_j: {
    id: "cyperus_j",
    milestone: "Cyperus",
    manualPage: 116,
    descripcion: "Cyperus - J: tipo de tallo escabroso",
    opcionA: {
      label: "Tallo triquetro, semialado, escabroso en los angulos, hojoso en la base, de cerca de 1 m",
      keyStep: "J",
      especieId: "cyperus_virens"
    },
    opcionA_prima: {
      label: "Tallo trigono, con espinitas dirigidas hacia abajo, de 15-40 cm",
      keyStep: "J'",
      especieId: "cyperus_surinamensis"
    }
  },

  cyperus_k: {
    id: "cyperus_k",
    milestone: "Cyperus",
    manualPage: 117,
    descripcion: "Cyperus - K: color del aquenio",
    opcionA: {
      label: "Aquenio blanco o vitreo; inflorescencia en umbela compuesta laxa",
      keyStep: "K",
      especieId: "cyperus_haspan"
    },
    opcionA_prima: {
      label: "Aquenio pardo, castano o gris",
      keyStep: "K'",
      nextNodeId: "cyperus_l"
    }
  },

  cyperus_l: {
    id: "cyperus_l",
    milestone: "Cyperus",
    manualPage: 117,
    descripcion: "Cyperus - L: glumas persistentes o caducas",
    opcionA: {
      label: "Glumas persistentes sobre la raquilla, que es caduca; inflorescencia con 4-8 espigas simples cilindricas",
      keyStep: "L",
      especieId: "cyperus_cayennensis"
    },
    opcionA_prima: {
      label: "Glumas caducas",
      keyStep: "L'",
      nextNodeId: "cyperus_m"
    }
  },

  cyperus_m: {
    id: "cyperus_m",
    milestone: "Cyperus",
    manualPage: 117,
    descripcion: "Cyperus - M: forma de aquenios",
    opcionA: {
      label: "Aquenios obovoideos; inflorescencia en umbela compuesta, a veces contraida y capituliforme",
      keyStep: "M",
      especieId: "cyperus_eragrostis"
    },
    opcionA_prima: {
      label: "Aquenios elipticos; espiguillas castanas o amarillentas",
      keyStep: "M'",
      nextNodeId: "cyperus_n"
    }
  },

  cyperus_n: {
    id: "cyperus_n",
    milestone: "Cyperus",
    manualPage: 117,
    descripcion: "Cyperus - N: inflorescencia laxa o densa",
    opcionA: {
      label: "Inflorescencia en antela laxa, con muchos fasciculos globosos; espiguillas ovadas, agudas, muy comprimidas",
      keyStep: "N",
      especieId: "cyperus_luzulae"
    },
    opcionA_prima: {
      label: "Inflorescencia densa, capituliforme, raramente en antela de pocos fasciculos",
      keyStep: "N'",
      nextNodeId: "cyperus_o"
    }
  },

  cyperus_o: {
    id: "cyperus_o",
    milestone: "Cyperus",
    manualPage: 117,
    descripcion: "Cyperus - O: color de cabezuelas",
    opcionA: {
      label: "Cabezuelas de color castano rojizo, rodeadas por 3 bracteas foliaceas",
      keyStep: "O",
      especieId: "cyperus_reflexus"
    },
    opcionA_prima: {
      label: "Cabezuelas de color pajizo; espiguillas 8-30, fasciculadas, lanceolado-lineales",
      keyStep: "O'",
      especieId: "cyperus_incomptus"
    }
  },

  cyperus_p: {
    id: "cyperus_p",
    milestone: "Cyperus",
    manualPage: 117,
    descripcion: "Cyperus - P: rizomas largos o plantas cespitosas/cortamente rizomatosas",
    opcionA: {
      label: "Plantas con rizomas horizontales largos; tallos debiles de 20-80 cm",
      keyStep: "P",
      nextNodeId: "cyperus_q"
    },
    opcionA_prima: {
      label: "Plantas cespitosas o con rizomas muy cortos; tallos robustos de cerca de 1 m",
      keyStep: "P'",
      nextNodeId: "cyperus_s"
    }
  },

  cyperus_q: {
    id: "cyperus_q",
    milestone: "Cyperus",
    manualPage: 117,
    descripcion: "Cyperus - Q: color de espiguillas y nervaduras de glumas",
    opcionA: {
      label: "Espiguillas pardo-amarillentas, en antelas de espigas, lineales, de 15-40 mm por 1,5 mm; aquenios grises",
      keyStep: "Q",
      especieId: "cyperus_esculentus"
    },
    opcionA_prima: {
      label: "Espiguillas castano-rojizas; glumas con nervaduras solamente en el dorso",
      keyStep: "Q'",
      nextNodeId: "cyperus_r"
    }
  },

  cyperus_r: {
    id: "cyperus_r",
    milestone: "Cyperus",
    manualPage: 117,
    descripcion: "Cyperus - R: forma del tallo",
    opcionA: {
      label: "Tallo redondeado en la parte inferior, irregularmente nudoso cuando seco; inflorescencia seudolateral",
      keyStep: "R",
      especieId: "cyperus_corymbosus"
    },
    opcionA_prima: {
      label: "Tallo trigono, liso; inflorescencia terminal en umbela simple o poco ramificada",
      keyStep: "R'",
      especieId: "cyperus_rotundus"
    }
  },

  cyperus_s: {
    id: "cyperus_s",
    milestone: "Cyperus",
    manualPage: 118,
    descripcion: "Cyperus - S: raquilla articulada o no",
    opcionA: {
      label: "Raquilla no articulada por encima de las dos glumas inferiores esteriles",
      keyStep: "S",
      nextNodeId: "cyperus_t"
    },
    opcionA_prima: {
      label: "Raquilla articulada por encima de las dos glumas inferiores esteriles",
      keyStep: "S'",
      nextNodeId: "cyperus_v"
    }
  },

  cyperus_t: {
    id: "cyperus_t",
    milestone: "Cyperus",
    manualPage: 118,
    descripcion: "Cyperus - T: raquilla alada o no",
    opcionA: {
      label: "Raquilla no alada; glumas no decurrentes, orbiculares, mucronadas; aquenios blancos",
      keyStep: "T",
      especieId: "cyperus_imbricatus"
    },
    opcionA_prima: {
      label: "Raquilla alada; glumas decurrentes",
      keyStep: "T'",
      nextNodeId: "cyperus_u"
    }
  },

  cyperus_u: {
    id: "cyperus_u",
    milestone: "Cyperus",
    manualPage: 118,
    descripcion: "Cyperus - U: angulo de espiguillas con el eje",
    opcionA: {
      label: "Espiguillas en angulo muy agudo con el eje de la espiga; fruto ovoide, amarillento",
      keyStep: "U",
      especieId: "cyperus_exaltatus"
    },
    opcionA_prima: {
      label: "Espiguillas casi en angulo recto con el eje de la espiga; fruto eliptico, gris",
      keyStep: "U'",
      especieId: "cyperus_digitatus"
    }
  },

  cyperus_v: {
    id: "cyperus_v",
    milestone: "Cyperus",
    manualPage: 118,
    descripcion: "Cyperus - V: forma de las espigas",
    opcionA: {
      label: "Espiguillas dispuestas en espigas ovoideas, densas; antela con 5-7 radios",
      keyStep: "V",
      especieId: "cyperus_laetus"
    },
    opcionA_prima: {
      label: "Espiguillas dispuestas en espigas cilindricas",
      keyStep: "V'",
      nextNodeId: "cyperus_w"
    }
  },

  cyperus_w: {
    id: "cyperus_w",
    milestone: "Cyperus",
    manualPage: 118,
    descripcion: "Cyperus - W: forma de las ocreas",
    opcionA: {
      label: "Ocreas de boca oblicua, aguda; espiguillas muy abiertas respecto al raquis, laxas y redondeadas",
      keyStep: "W",
      especieId: "cyperus_giganteus"
    },
    opcionA_prima: {
      label: "Ocreas largamente bifidas; espiguillas en angulo muy agudo respecto al raquis",
      keyStep: "W'",
      nextNodeId: "cyperus_x"
    }
  },

  cyperus_x: {
    id: "cyperus_x",
    milestone: "Cyperus",
    manualPage: 118,
    descripcion: "Cyperus - X: orden de radios de la antela",
    opcionA: {
      label: "Antela compuesta con radios de primer, segundo y tercer orden, a veces tambien cuarto",
      keyStep: "X",
      especieId: "cyperus_prolixus"
    },
    opcionA_prima: {
      label: "Antela con radios de primer y segundo orden solamente",
      keyStep: "X'",
      especieId: "cyperus_pohlii"
    }
  },

  cyperaceae_d: {
    id: "cyperaceae_d",
    milestone: "Cyperaceae",
    manualPage: 112,
    descripcion: "Cyperaceae - D: estilo engrosado o no en la base",
    opcionA: {
      label: "Estilo no engrosado en su base; caracteres de Scirpus",
      keyStep: "D",
      nextNodeId: "scirpus_a"
    },
    opcionA_prima: {
      label: "Estilo engrosado en la base; continuar en proximas tandas de Cyperaceae",
      keyStep: "D'",
      nextNodeId: "cyperaceae_e"
    }
  },

  cyperaceae_e: {
    id: "cyperaceae_e",
    milestone: "Cyperaceae",
    manualPage: 112,
    descripcion: "Cyperaceae - E: parte basal dilatada del estilo",
    opcionA: {
      label: "La parte basal dilatada del estilo se desprende con este a la madurez del fruto; caracteres de Fimbristylis",
      keyStep: "E",
      nextNodeId: "fimbristylis_a"
    },
    opcionA_prima: {
      label: "La parte dilatada del estilo persiste sobre el fruto formando un estilopodio; continuar en proximas tandas",
      keyStep: "E'",
      nextNodeId: "cyperaceae_f"
    }
  },

  cyperaceae_f: {
    id: "cyperaceae_f",
    milestone: "Cyperaceae",
    manualPage: 124,
    descripcion: "Cyperaceae - F: plantas afilas o generalmente hojosas",
    opcionA: {
      label: "Plantas afilas; espiguilla solitaria terminal; caracteres de Heleocharis",
      keyStep: "F",
      nextNodeId: "heleocharis_a"
    },
    opcionA_prima: {
      label: "Plantas generalmente hojosas, con inflorescencias capitadas o fasciculadas; continuar en proximas tandas",
      keyStep: "F'",
      nextNodeId: "cyperaceae_g"
    }
  },

  cyperaceae_g: {
    id: "cyperaceae_g",
    milestone: "Cyperaceae",
    manualPage: 112,
    descripcion: "Cyperaceae - G: espiguillas paucifloras o plurifloras",
    opcionA: {
      label: "Espiguillas paucifloras, generalmente 1-2-floras, con 3 o mas glumas esteriles en la base; caracteres de Rhynchospora",
      keyStep: "G",
      nextNodeId: "rhynchospora_a"
    },
    opcionA_prima: {
      label: "Espiguillas plurifloras, con 1-2 glumas basales esteriles o sin ellas; caracteres de Bulbostylis",
      keyStep: "G'",
      especieId: "bulbostylis_capillaris"
    }
  },

  scirpus_a: {
    id: "scirpus_a",
    milestone: "Scirpus",
    manualPage: 121,
    descripcion: "Scirpus - A: flores con o sin sedas hipoginas",
    opcionA: {
      label: "Flores sin sedas hipoginas",
      keyStep: "A",
      nextNodeId: "scirpus_b"
    },
    opcionA_prima: {
      label: "Flores con sedas hipoginas",
      keyStep: "A'",
      nextNodeId: "scirpus_d"
    }
  },

  scirpus_b: {
    id: "scirpus_b",
    milestone: "Scirpus",
    manualPage: 121,
    descripcion: "Scirpus - B: estilo bifido o trifido",
    opcionA: {
      label: "Estilo bifido; inflorescencia en capitulo solitario globoso; aquenio lenticular pajizo",
      keyStep: "B",
      especieId: "scirpus_cubensis"
    },
    opcionA_prima: {
      label: "Estilo trifido",
      keyStep: "B'",
      nextNodeId: "scirpus_c"
    }
  },

  scirpus_c: {
    id: "scirpus_c",
    milestone: "Scirpus",
    manualPage: 121,
    descripcion: "Scirpus - C: inflorescencia capituliforme o umbeliforme",
    opcionA: {
      label: "Inflorescencia capituliforme, con 1-3 espiguillas sesiles en el apice del tallo",
      keyStep: "C",
      especieId: "scirpus_cernuus"
    },
    opcionA_prima: {
      label: "Inflorescencia umbeliforme compuesta, rodeada de bracteas foliaceas; planta robusta de 1,5-1,8 m",
      keyStep: "C'",
      especieId: "scirpus_giganteus"
    }
  },

  scirpus_d: {
    id: "scirpus_d",
    milestone: "Scirpus",
    manualPage: 122,
    descripcion: "Scirpus - D: inflorescencia capituliforme o en antela",
    opcionA: {
      label: "Inflorescencia capituliforme",
      keyStep: "D",
      nextNodeId: "scirpus_e"
    },
    opcionA_prima: {
      label: "Inflorescencia en antela",
      keyStep: "D'",
      nextNodeId: "scirpus_f"
    }
  },

  scirpus_e: {
    id: "scirpus_e",
    milestone: "Scirpus",
    manualPage: 122,
    descripcion: "Scirpus - E: tallos triquetros o trigonales",
    opcionA: {
      label: "Tallos triquetros, con angulos muy agudos, de hasta 1 m; inflorescencia seudolateral con 1-6 espigas sesiles",
      keyStep: "E",
      especieId: "scirpus_chilensis"
    },
    opcionA_prima: {
      label: "Tallos trigonales, con angulos redondeados, de 10-100 cm; inflorescencia con 1-5 espiguillas sesiles",
      keyStep: "E'",
      especieId: "scirpus_americanus"
    }
  },

  scirpus_f: {
    id: "scirpus_f",
    milestone: "Scirpus",
    manualPage: 122,
    descripcion: "Scirpus - F: plantas con hojas lineales o afilas",
    opcionA: {
      label: "Plantas con hojas lineales de 30-50 cm; antela simple o compuesta; espiguillas ovoideas de 10-25 mm",
      keyStep: "F",
      especieId: "scirpus_paludosus"
    },
    opcionA_prima: {
      label: "Plantas afilas",
      keyStep: "F'",
      nextNodeId: "scirpus_g"
    }
  },

  scirpus_g: {
    id: "scirpus_g",
    milestone: "Scirpus",
    manualPage: 122,
    descripcion: "Scirpus - G: cerdas del perianto",
    opcionA: {
      label: "Cerdas del perianto ciliado-plumosas; tallos afilos de 1-2 m; antela compuesta nutante",
      keyStep: "G",
      especieId: "scirpus_californicus"
    },
    opcionA_prima: {
      label: "Cerdas del perianto retrorso-hispidas; tallos afilos de 1,5-2,5 m; antela compuesta laxa lateral",
      keyStep: "G'",
      especieId: "scirpus_validus"
    }
  },

  fimbristylis_a: {
    id: "fimbristylis_a",
    milestone: "Fimbristylis",
    manualPage: 124,
    descripcion: "Fimbristylis - A: estilo bifido o trifido",
    opcionA: {
      label: "Estilo bifido; antelas compuestas; espiguillas cilindrico-conicas; aquenio blanco reticulado",
      keyStep: "A",
      especieId: "fimbristylis_squarrosa"
    },
    opcionA_prima: {
      label: "Estilo trifido; antela compuesta; espiguillas lanceoladas, agudas, de 4-8 mm",
      keyStep: "A'",
      especieId: "fimbristylis_autumnalis"
    }
  },

  heleocharis_a: {
    id: "heleocharis_a",
    milestone: "Heleocharis",
    manualPage: 124,
    descripcion: "Heleocharis - A: vaina con diente desarrollado",
    opcionA: {
      label: "Vaina provista de un diente bien desarrollado",
      keyStep: "A",
      nextNodeId: "heleocharis_b"
    },
    opcionA_prima: {
      label: "Vaina sin diente marcado, a veces aguda y algo engrosada en el apice",
      keyStep: "A'",
      nextNodeId: "heleocharis_c"
    }
  },

  heleocharis_b: {
    id: "heleocharis_b",
    milestone: "Heleocharis",
    manualPage: 124,
    descripcion: "Heleocharis - B: tallos huecos o macizos",
    opcionA: {
      label: "Tallos huecos, con tabiques horizontales; espiguilla oblongo-lanceolada de 8-15 mm",
      keyStep: "B",
      especieId: "heleocharis_nodulosa"
    },
    opcionA_prima: {
      label: "Tallos macizos, no tabicados; espiguilla cilindrica de 2-3 cm por 3-4 mm",
      keyStep: "B'",
      especieId: "heleocharis_parodii"
    }
  },

  heleocharis_c: {
    id: "heleocharis_c",
    milestone: "Heleocharis",
    manualPage: 124,
    descripcion: "Heleocharis - C: estilo bifido o trifido",
    opcionA: {
      label: "Estilo bifido",
      keyStep: "C",
      nextNodeId: "heleocharis_d"
    },
    opcionA_prima: {
      label: "Estilo trifido",
      keyStep: "C'",
      nextNodeId: "heleocharis_f"
    }
  },

  heleocharis_d: {
    id: "heleocharis_d",
    milestone: "Heleocharis",
    manualPage: 124,
    descripcion: "Heleocharis - D: apice de las vainas",
    opcionA: {
      label: "Vainas con apice membranaceo, blanco, transparente; espiguilla ovada de 2-6 mm",
      keyStep: "D",
      especieId: "heleocharis_flavescens"
    },
    opcionA_prima: {
      label: "Vainas con borde herbaceo, verde",
      keyStep: "D'",
      nextNodeId: "heleocharis_e"
    }
  },

  heleocharis_e: {
    id: "heleocharis_e",
    milestone: "Heleocharis",
    manualPage: 124,
    descripcion: "Heleocharis - E: forma de la espiguilla en especies de estilo bifido",
    opcionA: {
      label: "Espiguilla lanceolada, aguda, de 15-25 mm; glumas agudas; vainas truncadas",
      keyStep: "E",
      especieId: "heleocharis_macrostachya"
    },
    opcionA_prima: {
      label: "Espiguilla ovoidea, obtusa, de 2-13 mm; glumas obtusas; vaina oblicua",
      keyStep: "E'",
      especieId: "heleocharis_obtusa"
    }
  },

  heleocharis_f: {
    id: "heleocharis_f",
    milestone: "Heleocharis",
    manualPage: 124,
    descripcion: "Heleocharis - F: costillas y estrias del fruto",
    opcionA: {
      label: "Fruto con 12-14 costillas longitudinales y estrias horizontales entre ellas",
      keyStep: "F",
      nextNodeId: "heleocharis_g"
    },
    opcionA_prima: {
      label: "Frutos sin costillas ni estrias",
      keyStep: "F'",
      nextNodeId: "heleocharis_h"
    }
  },

  heleocharis_g: {
    id: "heleocharis_g",
    milestone: "Heleocharis",
    manualPage: 124,
    descripcion: "Heleocharis - G: vaina superior en frutos costillados",
    opcionA: {
      label: "Vaina superior oblicua, con borde herbaceo; espiguillas lanceoladas de 4-8 mm",
      keyStep: "G",
      especieId: "heleocharis_bonariensis"
    },
    opcionA_prima: {
      label: "Vaina superior truncada oblicuamente, escarioso-hialina; espiguilla lanceolada de 3-5 mm",
      keyStep: "G'",
      especieId: "heleocharis_radicans"
    }
  },

  heleocharis_h: {
    id: "heleocharis_h",
    milestone: "Heleocharis",
    manualPage: 125,
    descripcion: "Heleocharis - H: tallos cuadrangulares o no",
    opcionA: {
      label: "Tallos cuadrangulares, capilares; espiguilla ovada, aguda, multiflora, a menudo prolifera",
      keyStep: "H",
      especieId: "heleocharis_viridans"
    },
    opcionA_prima: {
      label: "Tallos no cuadrangulares; espiguillas nunca proliferadas",
      keyStep: "H'",
      nextNodeId: "heleocharis_i"
    }
  },

  heleocharis_i: {
    id: "heleocharis_i",
    milestone: "Heleocharis",
    manualPage: 125,
    descripcion: "Heleocharis - I: tallos pentagonales o no",
    opcionA: {
      label: "Tallos pentagonales, de seccion estrellada, capilares; espiguilla oblonga de 5-9 mm",
      keyStep: "I",
      especieId: "heleocharis_dunensis"
    },
    opcionA_prima: {
      label: "Tallos no pentagonales, graciles o robustos",
      keyStep: "I'",
      nextNodeId: "heleocharis_j"
    }
  },

  heleocharis_j: {
    id: "heleocharis_j",
    milestone: "Heleocharis",
    manualPage: 125,
    descripcion: "Heleocharis - J: espiguillas ovoideas u lanceoladas",
    opcionA: {
      label: "Espiguillas ovoideas, obtusas, de 4-13 mm; aquenio finamente punteado; vainas truncadas",
      keyStep: "J",
      especieId: "heleocharis_montevidensis"
    },
    opcionA_prima: {
      label: "Espiguillas lanceoladas, plurifloras, de 15-25 mm; aquenios lisos; vainas ligeramente oblicuas",
      keyStep: "J'",
      especieId: "heleocharis_haumaniana"
    }
  },

  rhynchospora_a: {
    id: "rhynchospora_a",
    milestone: "Rhynchospora",
    manualPage: 127,
    descripcion: "Rhynchospora - A: estilo profundamente bifido o indiviso",
    opcionA: {
      label: "Estilo profundamente bifido; espiguillas de 3-3,5 mm, agrupadas en panojas contraidas",
      keyStep: "A",
      especieId: "rhynchospora_luzuliformis"
    },
    opcionA_prima: {
      label: "Estilo indiviso; espiguillas mayores",
      keyStep: "A'",
      nextNodeId: "rhynchospora_b"
    }
  },

  rhynchospora_b: {
    id: "rhynchospora_b",
    milestone: "Rhynchospora",
    manualPage: 127,
    descripcion: "Rhynchospora - B: panoja corimbiforme laxa o panojas contraidas",
    opcionA: {
      label: "Inflorescencia en panoja corimbiforme muy laxa; fasciculos de 3-5 espiguillas largamente pedunculados; rostro casi tan largo como el aquenio",
      keyStep: "B",
      especieId: "rhynchospora_corymbosa"
    },
    opcionA_prima: {
      label: "Inflorescencia en panojas contraidas; fasciculos de mas de 8 espiguillas cortamente pedunculados; rostro mas largo que el aquenio",
      keyStep: "B'",
      nextNodeId: "rhynchospora_c"
    }
  },

  rhynchospora_c: {
    id: "rhynchospora_c",
    milestone: "Rhynchospora",
    manualPage: 127,
    descripcion: "Rhynchospora - C: densidad y posicion de los fasciculos",
    opcionA: {
      label: "Fasciculos muy densos, amontonados principalmente en el apice del tallo; espiguillas gruesas castanas de 8-10 mm",
      keyStep: "C",
      especieId: "rhynchospora_legrandii"
    },
    opcionA_prima: {
      label: "Fasciculos agrupados en panojas contraidas terminales y laterales; espiguillas angostas de 7-8 mm",
      keyStep: "C'",
      especieId: "rhynchospora_rostrata"
    }
  },

  gramineae_tribe_a: {
    id: "gramineae_tribe_a",
    milestone: "Gramineae",
    manualPage: 49,
    descripcion: "Gramineae - A: ¿las cañas son leñosas y la floración ocurre cada varios años?",
    opcionA: {
      label: "Plantas perennes, con cañas leñosas elevadas, de floración espaciada por varios años",
      keyStep: "A",
      especieId: "guadua_trinii"
    },
    opcionA_prima: {
      label: "Plantas anuales o perennes, con cañas herbáceas o sólo subleñosas, de floración anual",
      keyStep: "A'",
      nextNodeId: "gramineae_tribe_b"
    }
  },

  gramineae_tribe_b: {
    id: "gramineae_tribe_b",
    milestone: "Gramineae",
    manualPage: 49,
    descripcion: "Gramineae - B: ¿cómo son las espiguillas, glumas, pálea y androceo?",
    opcionA: {
      label: "Espiguillas unifloras, con glumas rudimentarias o nulas; pálea 3-nervada; androceo 6-1",
      keyStep: "B",
      nextNodeId: "oryzeae_a"
    },
    opcionA_prima: {
      label: "Espiguillas 1-multifloras, con dos glumas o faltando la inferior; pálea bicarenada; androceo 3-1",
      keyStep: "B'",
      nextNodeId: "gramineae_tribe_c"
    }
  },

  gramineae_tribe_c: {
    id: "gramineae_tribe_c",
    milestone: "Gramineae",
    manualPage: 49,
    descripcion: "Gramineae - C: ¿cómo se comprimen las espiguillas y dónde articula la raquilla?",
    opcionA: {
      label: "Espiguillas más o menos comprimidas lateralmente; raquilla articulada por encima de las glumas",
      keyStep: "C",
      nextNodeId: "gramineae_tribe_d"
    },
    opcionA_prima: {
      label: "Espiguillas con una sola flor hermafrodita, generalmente deprimidas dorsiventralmente; raquilla articulada debajo de las glumas",
      keyStep: "C'",
      nextNodeId: "gramineae_tribe_j"
    }
  },

  gramineae_tribe_d: {
    id: "gramineae_tribe_d",
    milestone: "Gramineae",
    manualPage: 49,
    descripcion: "Gramineae - D: ¿la inflorescencia es espiga o panoja?",
    opcionA: {
      label: "Inflorescencia en espiga dística o unilateral",
      keyStep: "D",
      nextNodeId: "gramineae_tribe_e"
    },
    opcionA_prima: {
      label: "Inflorescencia en panoja laxa o densa, a veces espiciforme",
      keyStep: "D'",
      nextNodeId: "gramineae_tribe_f"
    }
  },

  gramineae_tribe_e: {
    id: "gramineae_tribe_e",
    milestone: "Gramineae",
    manualPage: 49,
    descripcion: "Gramineae - E: ¿cómo se disponen las espiguillas sobre el raquis?",
    opcionA: {
      label: "Espiguillas dispuestas a ambos lados del raquis",
      keyStep: "E",
      nextNodeId: "hordeae_a"
    },
    opcionA_prima: {
      label: "Espiguillas dispuestas a un solo lado del raquis",
      keyStep: "E'",
      nextNodeId: "chlorideae_a"
    }
  },

  hordeae_a: {
    id: "hordeae_a",
    milestone: "Hordeae",
    manualPage: 66,
    descripcion: "Hordeae - A: ¿cuántas espiguillas hay en cada articulación del raquis?",
    opcionA: {
      label: "Una sola espiguilla en cada articulación del raquis",
      keyStep: "A",
      nextNodeId: "hordeae_b"
    },
    opcionA_prima: {
      label: "Tres espiguillas unifloras en cada soporte del raquis; las marginales a veces reducidas",
      keyStep: "A'",
      nextNodeId: "hordeum_a"
    }
  },

  hordeae_b: {
    id: "hordeae_b",
    milestone: "Hordeae",
    manualPage: 66,
    descripcion: "Hordeae - B: ¿las espiguillas están incrustadas en un raquis engrosado?",
    opcionA: {
      label: "Espiguillas unifloras, incrustadas en excavaciones de un raquis engrosado que se desarticula a la madurez",
      keyStep: "B",
      nextNodeId: "hordeae_c"
    },
    opcionA_prima: {
      label: "Espiguillas 2-multifloras, no incrustadas en el raquis",
      keyStep: "B'",
      nextNodeId: "hordeae_d"
    }
  },

  hordeae_c: {
    id: "hordeae_c",
    milestone: "Hordeae",
    manualPage: 66,
    descripcion: "Hordeae - C: ¿cuántas glumas tienen las espiguillas laterales?",
    opcionA: {
      label: "Espiguillas laterales con una sola gluma",
      keyStep: "C",
      especieId: "lepturus_cylindricus"
    },
    opcionA_prima: {
      label: "Espiguillas laterales con dos glumas",
      keyStep: "C'",
      especieId: "pholiurus_incurvus"
    }
  },

  hordeae_d: {
    id: "hordeae_d",
    milestone: "Hordeae",
    manualPage: 66,
    descripcion: "Hordeae - D: ¿cómo están colocadas las espiguillas respecto del raquis?",
    opcionA: {
      label: "Espiguillas colocadas en el mismo plano que el raquis; las laterales con una sola gluma y la terminal con dos",
      keyStep: "D",
      nextNodeId: "lolium_a"
    },
    opcionA_prima: {
      label: "Espiguillas transversales al raquis, todas con dos glumas",
      keyStep: "D'",
      nextNodeId: "hordeae_e"
    }
  },

  hordeae_e: {
    id: "hordeae_e",
    milestone: "Hordeae",
    manualPage: 66,
    descripcion: "Hordeae - E: ¿cómo son las glumas y cuántas flores tiene la espiguilla?",
    opcionA: {
      label: "Glumas lineales, uninervadas; espiguillas 2-3-floras",
      keyStep: "E",
      especieId: "secale_cereale"
    },
    opcionA_prima: {
      label: "Glumas cóncavas o carenadas, con 3 o más nervaduras; espiguillas con 3 o más flores",
      keyStep: "E'",
      nextNodeId: "hordeae_f"
    }
  },

  hordeae_f: {
    id: "hordeae_f",
    milestone: "Hordeae",
    manualPage: 66,
    descripcion: "Hordeae - F: ¿las plantas son perennes o anuales?",
    opcionA: {
      label: "Plantas perennes; glumas plano-cóncavas",
      keyStep: "F",
      nextNodeId: "agropyron_a"
    },
    opcionA_prima: {
      label: "Plantas anuales; glumas ventradas o carenadas",
      keyStep: "F'",
      nextNodeId: "triticum_a"
    }
  },

  agropyron_a: {
    id: "agropyron_a",
    milestone: "Agropyron",
    manualPage: 66,
    descripcion: "Agropyron - A: ¿las plantas tienen rizomas horizontales cundidores?",
    opcionA: {
      label: "Plantas con rizomas horizontales cundidores",
      keyStep: "A",
      nextNodeId: "agropyron_b"
    },
    opcionA_prima: {
      label: "Plantas cespitosas, sin rizomas, de cerca de 50 cm",
      keyStep: "A'",
      especieId: "agropyron_attenuatum"
    }
  },

  agropyron_b: {
    id: "agropyron_b",
    milestone: "Agropyron",
    manualPage: 66,
    descripcion: "Agropyron - B: ¿cómo son las láminas foliares?",
    opcionA: {
      label: "Láminas foliares convolutas, rígidas y punzantes, con nervaduras muy marcadas",
      keyStep: "B",
      especieId: "agropyron_pungens"
    },
    opcionA_prima: {
      label: "Láminas foliares más o menos planas, flojas, con nervaduras poco marcadas",
      keyStep: "B'",
      nextNodeId: "agropyron_c"
    }
  },

  agropyron_c: {
    id: "agropyron_c",
    milestone: "Agropyron",
    manualPage: 66,
    descripcion: "Agropyron - C: ¿qué tamaño tienen las espiguillas?",
    opcionA: {
      label: "Espiguillas de 12-15 mm, 6-8-floras; tallos hasta de 1 m y espigas de 10-18 cm",
      keyStep: "C",
      especieId: "agropyron_repens"
    },
    opcionA_prima: {
      label: "Espiguillas de 20-35 mm, 8-10-floras; tallos hasta de 2 m y espigas dísticas de 15-25 cm",
      keyStep: "C'",
      especieId: "agropyron_scabrifolium"
    }
  },

  hordeum_a: {
    id: "hordeum_a",
    milestone: "Hordeum",
    manualPage: 67,
    descripcion: "Hordeum - A: ¿cómo son las flores laterales de la tríada?",
    opcionA: {
      label: "Flores laterales más grandes que la central, con gluma interior semejante a la central y aristas muy largas",
      keyStep: "A",
      especieId: "hordeum_leporinum"
    },
    opcionA_prima: {
      label: "Flores laterales abortivas o mucho menos desarrolladas que la central",
      keyStep: "A'",
      nextNodeId: "hordeum_b"
    }
  },

  hordeum_b: {
    id: "hordeum_b",
    milestone: "Hordeum",
    manualPage: 67,
    descripcion: "Hordeum - B: ¿qué longitud alcanzan las aristas de las glumas?",
    opcionA: {
      label: "Glumas capilares con arista larga de 4-6 cm",
      keyStep: "B",
      especieId: "hordeum_jubatum"
    },
    opcionA_prima: {
      label: "Glumas con arista de menos de 2 cm",
      keyStep: "B'",
      nextNodeId: "hordeum_c"
    }
  },

  hordeum_c: {
    id: "hordeum_c",
    milestone: "Hordeum",
    manualPage: 67,
    descripcion: "Hordeum - C: ¿cómo son las glumas interiores?",
    opcionA: {
      label: "Gluma interior de las flores laterales lanceolada; glumas centrales lineales o subuladas",
      keyStep: "C",
      nextNodeId: "hordeum_d"
    },
    opcionA_prima: {
      label: "Glumas interiores laterales y glumas centrales netamente lanceoladas; espigas oblongas angostas",
      keyStep: "C'",
      especieId: "hordeum_pusillum"
    }
  },

  hordeum_d: {
    id: "hordeum_d",
    milestone: "Hordeum",
    manualPage: 67,
    descripcion: "Hordeum - D: ¿las espigas son muy comprimidas o algo comprimidas?",
    opcionA: {
      label: "Espigas comprimidas, de unos 8 cm por 2-4 mm; glumas alcanzan el ápice de las flores laterales",
      keyStep: "D",
      especieId: "hordeum_compressum"
    },
    opcionA_prima: {
      label: "Espigas algo comprimidas, de 4-8 cm por cerca de 5 mm; glumas sobrepasan el ápice de las flores laterales",
      keyStep: "D'",
      especieId: "hordeum_stenostachys"
    }
  },

  lolium_a: {
    id: "lolium_a",
    milestone: "Lolium",
    manualPage: 69,
    descripcion: "Lolium - A: ¿la planta es perenne o anual?",
    opcionA: {
      label: "Hierba perenne; gluma más corta que la espiguilla; 10-20 flores por espiguilla; lemmas aristadas o múticas",
      keyStep: "A",
      especieId: "lolium_multiflorum"
    },
    opcionA_prima: {
      label: "Hierba anual; gluma igual o mayor que la espiguilla, con 5-7 flores; lemmas aristadas",
      keyStep: "A'",
      especieId: "lolium_temulentum"
    }
  },

  triticum_a: {
    id: "triticum_a",
    milestone: "Triticum",
    manualPage: 70,
    descripcion: "Triticum - A: ¿qué trigo corresponde?",
    opcionA: {
      label: "Tallos de cerca de 1 m; espiguillas 3-5-floras; especie cultivada para pan",
      keyStep: "1",
      especieId: "triticum_aestivum"
    },
    opcionA_prima: {
      label: "Especie poco cultivada en Argentina, a veces espontánea",
      keyStep: "2",
      especieId: "triticum_durum"
    }
  },

  aveneae_a: {
    id: "aveneae_a",
    milestone: "Aveneae",
    manualPage: 70,
    descripcion: "Aveneae - A: ¿las glumas caen junto con las lemmas?",
    opcionA: {
      label: "Glumas caducas con las lemmas; flor inferior hermafrodita con lemma mútica y flor superior masculina con lemma aristada",
      keyStep: "A",
      especieId: "holcus_lanatus"
    },
    opcionA_prima: {
      label: "Glumas persistentes",
      keyStep: "A'",
      nextNodeId: "aveneae_b"
    }
  },

  aveneae_b: {
    id: "aveneae_b",
    milestone: "Aveneae",
    manualPage: 70,
    descripcion: "Aveneae - B: ¿cómo es la lígula y la lemma?",
    opcionA: {
      label: "Lígula formada por una línea transversal de pelos; lemma profundamente bífida con dos puntas agudas y arista entre ellas",
      keyStep: "B",
      especieId: "danthonia_montevidensis"
    },
    opcionA_prima: {
      label: "Lígula membranosa; lemma entera o bidentada con arista dorsal o subapical",
      keyStep: "B'",
      nextNodeId: "aveneae_c"
    }
  },

  aveneae_c: {
    id: "aveneae_c",
    milestone: "Aveneae",
    manualPage: 70,
    descripcion: "Aveneae - C: ¿las panojas son espiciformes o laxas?",
    opcionA: {
      label: "Panojas contraídas, espiciformes; arista subapical recta",
      keyStep: "C",
      especieId: "koeleria_phleoides"
    },
    opcionA_prima: {
      label: "Panojas laxas; arista dorsal retorcida",
      keyStep: "C'",
      nextNodeId: "aveneae_d"
    }
  },

  aveneae_d: {
    id: "aveneae_d",
    milestone: "Aveneae",
    manualPage: 70,
    descripcion: "Aveneae - D: ¿las glumas son menores o mayores que las lemmas?",
    opcionA: {
      label: "Glumas menores que las lemmas; plantas perennes",
      keyStep: "D",
      especieId: "amphibromus_scabrivalvis"
    },
    opcionA_prima: {
      label: "Glumas mayores que las lemmas; plantas anuales",
      keyStep: "D'",
      nextNodeId: "avena_a"
    }
  },

  avena_a: {
    id: "avena_a",
    milestone: "Avena",
    manualPage: 71,
    descripcion: "Avena - A: ¿el segundo flósculo se desprende fácilmente de la raquilla?",
    opcionA: {
      label: "El segundo flósculo está soldado a la raquilla y difícilmente se desprende",
      keyStep: "A",
      nextNodeId: "avena_b"
    },
    opcionA_prima: {
      label: "El segundo flósculo está articulado sobre la raquilla y se desprende fácilmente",
      keyStep: "A'",
      nextNodeId: "avena_c"
    }
  },

  avena_b: {
    id: "avena_b",
    milestone: "Avena",
    manualPage: 71,
    descripcion: "Avena - B: ¿la lemma es glabra o cubierta de pelos en el dorso?",
    opcionA: {
      label: "Lemma glabra en su parte dorsal, rodeada de pelos hirsutos en la base; arista retorcida larga",
      keyStep: "B",
      especieId: "avena_byzantina"
    },
    opcionA_prima: {
      label: "Lemma cubierta de pelos hirsutos en el dorso; arista retorcida y geniculada",
      keyStep: "B'",
      especieId: "avena_sterilis"
    }
  },

  avena_c: {
    id: "avena_c",
    milestone: "Avena",
    manualPage: 71,
    descripcion: "Avena - C: ¿cómo termina el ápice de la lemma?",
    opcionA: {
      label: "Lemma con ápice entero o apenas bidentado",
      keyStep: "C",
      nextNodeId: "avena_d"
    },
    opcionA_prima: {
      label: "Lemma terminada en dos dientes o lacinias de 4-8 mm; espiguillas bifloras",
      keyStep: "C'",
      especieId: "avena_barbata"
    }
  },

  avena_d: {
    id: "avena_d",
    milestone: "Avena",
    manualPage: 71,
    descripcion: "Avena - D: ¿la lemma es hirsuta o glabra?",
    opcionA: {
      label: "Lemma hirsuta; arista dorsal retorcida de 35 mm; panojas flojas y abiertas; espiguillas generalmente 3-floras",
      keyStep: "D",
      especieId: "avena_fatua"
    },
    opcionA_prima: {
      label: "Lemma glabra; arista sólo en el flósculo inferior, débil y apenas retorcida; espiguillas castañas, generalmente bifloras",
      keyStep: "D'",
      especieId: "avena_sativa"
    }
  },

  agrostideae_a: {
    id: "agrostideae_a",
    milestone: "Agrostideae",
    manualPage: 72,
    descripcion: "Agrostideae - A: ¿la lemma tiene arista desde el ápice?",
    opcionA: {
      label: "Lemma aristada desde el ápice",
      keyStep: "A",
      nextNodeId: "agrostideae_b"
    },
    opcionA_prima: {
      label: "Lemma con arista dorsal o subapical, o mútica",
      keyStep: "A'",
      nextNodeId: "agrostideae_f"
    }
  },

  agrostideae_b: {
    id: "agrostideae_b",
    milestone: "Agrostideae",
    manualPage: 72,
    descripcion: "Agrostideae - B: ¿las glumas son más cortas o más largas que la lemma?",
    opcionA: {
      label: "Glumas más cortas que la lemma",
      keyStep: "B",
      nextNodeId: "muhlenbergia_a"
    },
    opcionA_prima: {
      label: "Glumas más largas que la lemma",
      keyStep: "B'",
      nextNodeId: "agrostideae_c"
    }
  },

  agrostideae_c: {
    id: "agrostideae_c",
    milestone: "Agrostideae",
    manualPage: 72,
    descripcion: "Agrostideae - C: ¿la arista es trífida o simple?",
    opcionA: {
      label: "Arista trífida",
      keyStep: "C",
      nextNodeId: "aristida_a"
    },
    opcionA_prima: {
      label: "Arista simple",
      keyStep: "C'",
      nextNodeId: "agrostideae_d"
    }
  },

  agrostideae_d: {
    id: "agrostideae_d",
    milestone: "Agrostideae",
    manualPage: 52,
    descripcion: "Agrostideae - D: ¿la arista es recta o está retorcida en la base?",
    opcionA: {
      label: "Arista no retorcida en la base; plantas introducidas",
      keyStep: "D",
      especieId: "oryzopsis_miliacea"
    },
    opcionA_prima: {
      label: "Arista retorcida en la base; plantas indígenas",
      keyStep: "D'",
      nextNodeId: "agrostideae_e"
    }
  },

  agrostideae_e: {
    id: "agrostideae_e",
    milestone: "Agrostideae",
    manualPage: 52,
    descripcion: "Agrostideae - E: forma de la pálea y del callus",
    opcionA: {
      label: "Pálea bicarenada; callus agudo u obtuso",
      keyStep: "E",
      nextNodeId: "piptochaetium_a"
    },
    opcionA_prima: {
      label: "Pálea plana, con frecuencia inconspicua; callus corto o largo y puntiagudo",
      keyStep: "E'",
      nextNodeId: "stipa_a"
    }
  },

  piptochaetium_a: {
    id: "piptochaetium_a",
    milestone: "Piptochaetium",
    manualPage: 76,
    descripcion: "Piptochaetium - A: forma de los antecios fructíferos",
    opcionA: {
      label: "Antecios alargados, más o menos fusiformes, con pie agudo",
      keyStep: "A",
      nextNodeId: "piptochaetium_b"
    },
    opcionA_prima: {
      label: "Antecios esféricos u obovoideos, con pie corto y obtuso",
      keyStep: "A'",
      nextNodeId: "piptochaetium_c"
    }
  },

  piptochaetium_b: {
    id: "piptochaetium_b",
    milestone: "Piptochaetium",
    manualPage: 76,
    descripcion: "Piptochaetium - B: longitud de las glumas",
    opcionA: {
      label: "Glumas de 21-30 mm; antecio fusiforme de 10-12 mm; arista de 8-10 cm",
      keyStep: "B",
      especieId: "piptochaetium_hackelii"
    },
    opcionA_prima: {
      label: "Glumas de 10-12 mm; antecio ovado-fusiforme de 3,5-7 mm; arista de unos 5 cm",
      keyStep: "B'",
      nextNodeId: "piptochaetium_bicolor_a"
    }
  },

  piptochaetium_bicolor_a: {
    id: "piptochaetium_bicolor_a",
    milestone: "Piptochaetium bicolor",
    manualPage: 77,
    descripcion: "Piptochaetium bicolor: longitud del antecio",
    opcionA: {
      label: "Antecios de no más de 4,5 mm",
      keyStep: "a",
      especieId: "piptochaetium_bicolor_minor"
    },
    opcionA_prima: {
      label: "Antecios de más de 4,5 mm",
      keyStep: "a'",
      especieId: "piptochaetium_bicolor"
    }
  },

  piptochaetium_c: {
    id: "piptochaetium_c",
    milestone: "Piptochaetium",
    manualPage: 77,
    descripcion: "Piptochaetium - C: pubescencia del antecio",
    opcionA: {
      label: "Antecio obovado cubierto de largos pelos castaños que sobrepasan la corona",
      keyStep: "C",
      especieId: "piptochaetium_lasianthum"
    },
    opcionA_prima: {
      label: "Antecio glabro",
      keyStep: "C'",
      nextNodeId: "piptochaetium_d"
    }
  },

  piptochaetium_d: {
    id: "piptochaetium_d",
    milestone: "Piptochaetium",
    manualPage: 77,
    descripcion: "Piptochaetium - D: amplitud de la corona",
    opcionA: {
      label: "Corona amplia, de 0,8-1,5 mm de diámetro; antecios obovado-globosos",
      keyStep: "D",
      nextNodeId: "piptochaetium_stipoides_a"
    },
    opcionA_prima: {
      label: "Corona muy estrecha o inconspicua",
      keyStep: "D'",
      nextNodeId: "piptochaetium_e"
    }
  },

  piptochaetium_stipoides_a: {
    id: "piptochaetium_stipoides_a",
    milestone: "Piptochaetium stipoides",
    manualPage: 77,
    descripcion: "Piptochaetium stipoides - A: superficie de los frutos",
    opcionA: {
      label: "Frutos papilosos, por lo menos en la parte superior",
      keyStep: "A",
      nextNodeId: "piptochaetium_stipoides_b"
    },
    opcionA_prima: {
      label: "Frutos lisos; corona generalmente menor de 1 mm",
      keyStep: "A'",
      especieId: "piptochaetium_stipoides_purpurascens"
    }
  },

  piptochaetium_stipoides_b: {
    id: "piptochaetium_stipoides_b",
    milestone: "Piptochaetium stipoides",
    manualPage: 77,
    descripcion: "Piptochaetium stipoides - B: intensidad de las papilas",
    opcionA: {
      label: "Frutos apenas papilosos en la parte superior",
      keyStep: "B",
      nextNodeId: "piptochaetium_stipoides_c"
    },
    opcionA_prima: {
      label: "Frutos densamente papilosos, al menos en la mitad superior",
      keyStep: "B'",
      especieId: "piptochaetium_stipoides_verruculosum"
    }
  },

  piptochaetium_stipoides_c: {
    id: "piptochaetium_stipoides_c",
    milestone: "Piptochaetium stipoides",
    manualPage: 77,
    descripcion: "Piptochaetium stipoides - C: forma del fruto y diámetro de la corona",
    opcionA: {
      label: "Frutos ovoideos; corona de 0,8-1,1 mm; hojas generalmente glabras",
      keyStep: "C",
      especieId: "piptochaetium_stipoides"
    },
    opcionA_prima: {
      label: "Frutos globosos; corona de 1,2-1,5 mm; hojas generalmente pilosas",
      keyStep: "C'",
      especieId: "piptochaetium_stipoides_chaetophorum"
    }
  },

  piptochaetium_e: {
    id: "piptochaetium_e",
    milestone: "Piptochaetium",
    manualPage: 77,
    descripcion: "Piptochaetium - E: longitud y forma del antecio",
    opcionA: {
      label: "Antecio obovado de 3-4,5 mm, castaño y estriado; arista de 2 cm",
      keyStep: "E",
      especieId: "piptochaetium_grisebachii"
    },
    opcionA_prima: {
      label: "Antecio de 1,5-2,5 mm",
      keyStep: "E'",
      nextNodeId: "piptochaetium_f"
    }
  },

  piptochaetium_f: {
    id: "piptochaetium_f",
    milestone: "Piptochaetium",
    manualPage: 77,
    descripcion: "Piptochaetium - F: superficie y compresión del antecio",
    opcionA: {
      label: "Antecio verrugoso o papiloso, globoso; arista de 7-8 mm",
      keyStep: "F",
      especieId: "piptochaetium_montevidense"
    },
    opcionA_prima: {
      label: "Antecio finamente estriado, lenticular y comprimido; arista de 10 mm",
      keyStep: "F'",
      especieId: "piptochaetium_panicoides"
    }
  },

  stipa_a: {
    id: "stipa_a",
    milestone: "Stipa",
    manualPage: 79,
    descripcion: "Stipa - A: pelos largos en la parte superior de la lemma",
    opcionA: {
      label: "Lemma de 7-8 mm, sin corona, con largos pelos superiores que forman una especie de papus",
      keyStep: "A",
      especieId: "stipa_papposa"
    },
    opcionA_prima: {
      label: "Lemma sin largos pelos superiores formando un papus",
      keyStep: "A'",
      nextNodeId: "stipa_b"
    }
  },

  stipa_b: {
    id: "stipa_b",
    milestone: "Stipa",
    manualPage: 79,
    descripcion: "Stipa - B: forma y longitud de los antecios",
    opcionA: {
      label: "Antecios claviformes u obovoideos, gibosos, de 2-3 mm; arista excéntrica",
      keyStep: "B",
      especieId: "stipa_trichotoma"
    },
    opcionA_prima: {
      label: "Antecios más o menos fusiformes, con arista central",
      keyStep: "B'",
      nextNodeId: "stipa_c"
    }
  },

  stipa_c: {
    id: "stipa_c",
    milestone: "Stipa",
    manualPage: 80,
    descripcion: "Stipa - C: longitud del antecio sin la arista",
    opcionA: {
      label: "Antecios de 8-14 mm",
      keyStep: "C",
      nextNodeId: "stipa_d"
    },
    opcionA_prima: {
      label: "Antecios de menos de 7 mm",
      keyStep: "C'",
      nextNodeId: "stipa_f"
    }
  },

  stipa_d: {
    id: "stipa_d",
    milestone: "Stipa",
    manualPage: 80,
    descripcion: "Stipa - D: color del antecio y diferenciación de la corona",
    opcionA: {
      label: "Antecios rojo oscuro o casi negros, de unos 13 mm; corona apenas diferenciada",
      keyStep: "D",
      especieId: "stipa_bonariensis"
    },
    opcionA_prima: {
      label: "Antecios claros, de color pajizo; corona diferenciada",
      keyStep: "D'",
      nextNodeId: "stipa_e"
    }
  },

  stipa_e: {
    id: "stipa_e",
    milestone: "Stipa",
    manualPage: 80,
    descripcion: "Stipa - E: longitud del antecio y de las glumas",
    opcionA: {
      label: "Antecios de 11-14 mm; glumas de 27-40 mm; corona largamente ciliada",
      keyStep: "E",
      especieId: "stipa_clarazii"
    },
    opcionA_prima: {
      label: "Antecios de 8-10 mm; glumas de 15-20 mm; corona laciniada",
      keyStep: "E'",
      especieId: "stipa_neesiana"
    }
  },

  stipa_f: {
    id: "stipa_f",
    milestone: "Stipa",
    manualPage: 80,
    descripcion: "Stipa - F: presencia de una corona diferenciada",
    opcionA: {
      label: "Ápice de la lemma articulado directamente con la arista, sin corona diferenciada",
      keyStep: "F",
      especieId: "stipa_brachychaeta"
    },
    opcionA_prima: {
      label: "Ápice de la lemma diferenciado en una corona cilíndrica o turbinada",
      keyStep: "F'",
      nextNodeId: "stipa_g"
    }
  },

  stipa_g: {
    id: "stipa_g",
    milestone: "Stipa",
    manualPage: 80,
    descripcion: "Stipa - G: apéndice de la corona",
    opcionA: {
      label: "Corona prolongada en un apéndice membranoso acartuchado de unos 6 mm",
      keyStep: "G",
      especieId: "stipa_charruana"
    },
    opcionA_prima: {
      label: "Corona sin apéndice y menor de 2 mm",
      keyStep: "G'",
      nextNodeId: "stipa_h"
    }
  },

  stipa_h: {
    id: "stipa_h",
    milestone: "Stipa",
    manualPage: 80,
    descripcion: "Stipa - H: extensión de la pubescencia del antecio",
    opcionA: {
      label: "Pubescencia extendida, al menos en líneas, hasta cerca del ápice",
      keyStep: "H",
      nextNodeId: "stipa_i"
    },
    opcionA_prima: {
      label: "Pubescencia confinada al callus y a la parte inferior de la lemma",
      keyStep: "H'",
      nextNodeId: "stipa_j"
    }
  },

  stipa_i: {
    id: "stipa_i",
    milestone: "Stipa",
    manualPage: 80,
    descripcion: "Stipa - I: forma y cilias de la corona",
    opcionA: {
      label: "Corona cupuliforme, largamente ciliada; lemma uniformemente albo-velluda",
      keyStep: "I",
      especieId: "stipa_bavioensis"
    },
    opcionA_prima: {
      label: "Corona anuliforme, cortísimamente ciliada; lemma pubescente en la base y líneas laterales",
      keyStep: "I'",
      especieId: "stipa_megapotamica"
    }
  },

  stipa_j: {
    id: "stipa_j",
    milestone: "Stipa",
    manualPage: 80,
    descripcion: "Stipa - J: altura de la corona",
    opcionA: {
      label: "Corona de 0,2-0,5 mm; lemma de apenas 4 mm; arista de 4-5 cm",
      keyStep: "J",
      especieId: "stipa_hyalina"
    },
    opcionA_prima: {
      label: "Corona de 0,6-1,5 mm; lemma de 5-6 mm; arista de 3-4 cm",
      keyStep: "J'",
      especieId: "stipa_formicarum"
    }
  },

  agrostideae_f: {
    id: "agrostideae_f",
    milestone: "Agrostideae",
    manualPage: 72,
    descripcion: "Agrostideae - F: ¿la raquilla se prolonga más allá de la flor con pelos lanosos largos?",
    opcionA: {
      label: "Raquilla prolongada más allá de la flor y provista de pelos lanosos largos; lemma con arista dorsal",
      keyStep: "F",
      especieId: "calamagrostis_montevidensis"
    },
    opcionA_prima: {
      label: "Raquilla raramente prolongada, glabra",
      keyStep: "F'",
      nextNodeId: "agrostideae_g"
    }
  },

  agrostideae_g: {
    id: "agrostideae_g",
    milestone: "Agrostideae",
    manualPage: 72,
    descripcion: "Agrostideae - G: ¿las glumas son menores o mayores que las lemmas?",
    opcionA: {
      label: "Glumas menores que las lemmas, que son múticas",
      keyStep: "G",
      nextNodeId: "sporobolus_a"
    },
    opcionA_prima: {
      label: "Glumas mayores que las lemmas, que generalmente son aristadas",
      keyStep: "G'",
      nextNodeId: "agrostideae_h"
    }
  },

  agrostideae_h: {
    id: "agrostideae_h",
    milestone: "Agrostideae",
    manualPage: 72,
    descripcion: "Agrostideae - H: ¿las glumas son caducas o persistentes sobre la panoja?",
    opcionA: {
      label: "Glumas caducas a la madurez de la espiguilla",
      keyStep: "H",
      nextNodeId: "agrostideae_j"
    },
    opcionA_prima: {
      label: "Glumas persistentes sobre la panoja",
      keyStep: "H'",
      nextNodeId: "agrostideae_k"
    }
  },

  agrostideae_j: {
    id: "agrostideae_j",
    milestone: "Agrostideae",
    manualPage: 72,
    descripcion: "Agrostideae - J: ¿las glumas son aristadas/acuminadas o múticas?",
    opcionA: {
      label: "Glumas aristadas o acuminadas, caducas junto con una parte del pedicelo",
      keyStep: "J",
      nextNodeId: "polypogon_a"
    },
    opcionA_prima: {
      label: "Glumas múticas, articuladas sobre el pedicelo",
      keyStep: "J'",
      nextNodeId: "alopecurus_a"
    }
  },

  agrostideae_k: {
    id: "agrostideae_k",
    milestone: "Agrostideae",
    manualPage: 72,
    descripcion: "Agrostideae - K: ¿las glumas son redondeadas con mucrón o atenuadas agudas?",
    opcionA: {
      label: "Glumas redondeadas en el ápice, donde llevan un largo mucrón",
      keyStep: "K",
      especieId: "phleum_pratense"
    },
    opcionA_prima: {
      label: "Glumas atenuadas y agudas en el ápice",
      keyStep: "K'",
      nextNodeId: "agrostis_a"
    }
  },

  agrostis_a: {
    id: "agrostis_a",
    milestone: "Agrostis",
    manualPage: 72,
    descripcion: "Agrostis - A: ¿la panoja es muy laxa y tenue?",
    opcionA: {
      label: "Panoja muy laxa y tenue; espiguillas muy largamente pediceladas de 2-2,5 mm; lemma con arista dorsal de 2 mm",
      keyStep: "A",
      especieId: "agrostis_montevidensis"
    },
    opcionA_prima: {
      label: "Panoja más o menos contraída",
      keyStep: "A'",
      nextNodeId: "agrostis_b"
    }
  },

  agrostis_b: {
    id: "agrostis_b",
    milestone: "Agrostis",
    manualPage: 72,
    descripcion: "Agrostis - B: ¿la glumela tiene arista dorsal?",
    opcionA: {
      label: "Glumela sin arista dorsal",
      keyStep: "B",
      nextNodeId: "agrostis_c"
    },
    opcionA_prima: {
      label: "Glumela con arista dorsal; espiguillas lanceoladas; glumas carenadas con carena ciliada",
      keyStep: "B'",
      nextNodeId: "agrostis_d"
    }
  },

  agrostis_c: {
    id: "agrostis_c",
    milestone: "Agrostis",
    manualPage: 72,
    descripcion: "Agrostis - C: ¿dónde son escabrosas las glumas?",
    opcionA: {
      label: "Glumas escabrosas únicamente en la quilla; panojas densas interrumpidas con ramas no verticiladas",
      keyStep: "C",
      especieId: "agrostis_palustris"
    },
    opcionA_prima: {
      label: "Glumas escabrosas en la quilla y en el dorso; panojas contraídas con ramificaciones verticiladas",
      keyStep: "C'",
      especieId: "agrostis_verticillata"
    }
  },

  agrostis_d: {
    id: "agrostis_d",
    milestone: "Agrostis",
    manualPage: 72,
    descripcion: "Agrostis - D: ¿la panoja es espiciforme continua o alargada interrumpida?",
    opcionA: {
      label: "Panoja muy densa, espiciforme, continua, de 3-5 cm; espiguillas de 3-3,5 mm",
      keyStep: "D",
      especieId: "agrostis_tandilensis"
    },
    opcionA_prima: {
      label: "Panojas alargadas, densas, no espiciformes, interrumpidas, de 5-25 cm",
      keyStep: "D'",
      nextNodeId: "agrostis_e"
    }
  },

  agrostis_e: {
    id: "agrostis_e",
    milestone: "Agrostis",
    manualPage: 72,
    descripcion: "Agrostis - E: ¿qué tamaño tiene la panoja?",
    opcionA: {
      label: "Panojas de 5-12 cm; espiguillas de 3 mm; glumas desiguales puntiagudas; lemma con arista dorsal de unos 4 mm",
      keyStep: "E",
      especieId: "agrostis_jurgensii"
    },
    opcionA_prima: {
      label: "Panoja de 10-25 cm; espiguillas de 2,5 mm; glumas casi iguales aristadas; arista dorsal de 1-2 mm",
      keyStep: "E'",
      especieId: "agrostis_platensis"
    }
  },

  alopecurus_a: {
    id: "alopecurus_a",
    milestone: "Alopecurus",
    manualPage: 74,
    descripcion: "Alopecurus - A: ¿cómo están unidas las glumas?",
    opcionA: {
      label: "Glumas soldadas entre sí hasta su mitad; quillas ásperas o cortamente ciliadas; panojas delgadas de 4-10 cm",
      keyStep: "A",
      especieId: "alopecurus_agrestis"
    },
    opcionA_prima: {
      label: "Glumas unidas sólo en la base; quillas largamente ciliadas abajo; panoja muy densa de 2-3 cm",
      keyStep: "A'",
      especieId: "alopecurus_bonariensis"
    }
  },

  aristida_a: {
    id: "aristida_a",
    milestone: "Aristida",
    manualPage: 74,
    descripcion: "Aristida - A: ¿la gluma inferior es mayor que la superior?",
    opcionA: {
      label: "Gluma inferior de 17-18 mm, mayor que la superior; aristas de unos 8 cm",
      keyStep: "A",
      especieId: "aristida_spegazzinii"
    },
    opcionA_prima: {
      label: "Gluma inferior más corta que la superior",
      keyStep: "A'",
      nextNodeId: "aristida_b"
    }
  },

  aristida_b: {
    id: "aristida_b",
    milestone: "Aristida",
    manualPage: 75,
    descripcion: "Aristida - B: ¿cómo es la inflorescencia?",
    opcionA: {
      label: "Inflorescencia alargada, débil",
      keyStep: "B",
      nextNodeId: "aristida_c"
    },
    opcionA_prima: {
      label: "Panojas contraídas, densas, semiespiciformes, con eje principal muy corto",
      keyStep: "B'",
      especieId: "aristida_murina"
    }
  },

  aristida_c: {
    id: "aristida_c",
    milestone: "Aristida",
    manualPage: 75,
    descripcion: "Aristida - C: ¿la hierba es perenne cespitosa o anual ramificada?",
    opcionA: {
      label: "Hierba perenne cespitosa, de 40-50 cm; panojas alargadas laxas; aristas de unos 10 cm",
      keyStep: "C",
      especieId: "aristida_pallens"
    },
    opcionA_prima: {
      label: "Hierba anual ramificada en la base, de 10-30 cm; panojas angostas densas; aristas de cerca de 10 mm",
      keyStep: "C'",
      especieId: "aristida_adscensionis"
    }
  },

  muhlenbergia_a: {
    id: "muhlenbergia_a",
    milestone: "Muhlenbergia",
    manualPage: 76,
    descripcion: "Muhlenbergia - A: ¿la lemma es cortamente mucronada o largamente aristada?",
    opcionA: {
      label: "Lemma cortamente mucronada; perenne rizomatosa de 8-25 cm; espiguillas de 2 mm en panojas laxas",
      keyStep: "A",
      especieId: "muhlenbergia_asperifolia"
    },
    opcionA_prima: {
      label: "Lemma largamente aristada; perenne ascendente de 50 cm; panojas angostas flojas",
      keyStep: "A'",
      especieId: "muhlenbergia_schreberi"
    }
  },

  polypogon_a: {
    id: "polypogon_a",
    milestone: "Polypogon",
    manualPage: 78,
    descripcion: "Polypogon - A: ¿las glumas son casi múticas o largamente aristadas?",
    opcionA: {
      label: "Glumas agudas, casi múticas, ciliado-espinulosas en el dorso; panojas interrumpidas densas",
      keyStep: "A",
      especieId: "polypogon_chilensis"
    },
    opcionA_prima: {
      label: "Glumas largamente aristadas",
      keyStep: "A'",
      nextNodeId: "polypogon_b"
    }
  },

  polypogon_b: {
    id: "polypogon_b",
    milestone: "Polypogon",
    manualPage: 78,
    descripcion: "Polypogon - B: ¿la arista es apical o subapical?",
    opcionA: {
      label: "Arista apical; panoja interrumpida; hierba perenne de 50-100 cm",
      keyStep: "B",
      especieId: "polypogon_elongatus"
    },
    opcionA_prima: {
      label: "Arista subapical; panoja compacta espiciforme elíptica; hierba anual de 15-50 cm",
      keyStep: "B'",
      especieId: "polypogon_monspeliensis"
    }
  },

  sporobolus_a: {
    id: "sporobolus_a",
    milestone: "Sporobolus",
    manualPage: 79,
    descripcion: "Sporobolus - A: ¿la inflorescencia es densa o laxa?",
    opcionA: {
      label: "Inflorescencia densa, más o menos espiciforme; ramas laterales alternas",
      keyStep: "A",
      nextNodeId: "sporobolus_b"
    },
    opcionA_prima: {
      label: "Inflorescencia laxa, piramidal; espiguillas lanceoladas glabras de 1,5-1,7 mm",
      keyStep: "A'",
      especieId: "sporobolus_pyramidatus"
    }
  },

  sporobolus_b: {
    id: "sporobolus_b",
    milestone: "Sporobolus",
    manualPage: 79,
    descripcion: "Sporobolus - B: ¿qué tamaño tienen las espiguillas?",
    opcionA: {
      label: "Espiguillas de 2 mm, glabras, verdosas; panojas muy largas y angostas",
      keyStep: "B",
      especieId: "sporobolus_poiretii"
    },
    opcionA_prima: {
      label: "Espiguillas de 6-7 mm, lanceoladas, muy comprimidas, claras; panoja contraída de 10-25 cm",
      keyStep: "B'",
      especieId: "sporobolus_platensis"
    }
  },

  chlorideae_a: {
    id: "chlorideae_a",
    milestone: "Chlorideae",
    manualPage: 83,
    descripcion: "Chlorideae - A: ¿cómo se disponen las espigas?",
    opcionA: {
      label: "Espigas fasciculadas en el extremo de las cañas floríferas",
      keyStep: "A",
      nextNodeId: "chlorideae_b"
    },
    opcionA_prima: {
      label: "Espigas dispuestas a lo largo de un eje principal, raramente solitarias",
      keyStep: "A'",
      nextNodeId: "chlorideae_f"
    }
  },

  chlorideae_b: {
    id: "chlorideae_b",
    milestone: "Chlorideae",
    manualPage: 83,
    descripcion: "Chlorideae - B: ¿la lemma termina en tres aristas largas?",
    opcionA: {
      label: "Lemma terminada en 3 aristas largas",
      keyStep: "B",
      especieId: "trichloris_crinita"
    },
    opcionA_prima: {
      label: "Lemma mútica o con una sola arista",
      keyStep: "B'",
      nextNodeId: "chlorideae_c"
    }
  },

  chlorideae_c: {
    id: "chlorideae_c",
    milestone: "Chlorideae",
    manualPage: 83,
    descripcion: "Chlorideae - C: ¿cuántas flores hermafroditas tienen las espiguillas?",
    opcionA: {
      label: "Espiguillas con una sola flor hermafrodita, rara vez dos en Chloris",
      keyStep: "C",
      nextNodeId: "chlorideae_d"
    },
    opcionA_prima: {
      label: "Espiguillas con 3 o más flores",
      keyStep: "C'",
      nextNodeId: "chlorideae_e"
    }
  },

  chlorideae_d: {
    id: "chlorideae_d",
    milestone: "Chlorideae",
    manualPage: 83,
    descripcion: "Chlorideae - D: ¿las lemmas son múticas o aristadas?",
    opcionA: {
      label: "Lemmas múticas",
      keyStep: "D",
      nextNodeId: "cynodon_a"
    },
    opcionA_prima: {
      label: "Lemmas aristadas",
      keyStep: "D'",
      nextNodeId: "chloris_a"
    }
  },

  chlorideae_e: {
    id: "chlorideae_e",
    milestone: "Chlorideae",
    manualPage: 83,
    descripcion: "Chlorideae - E: ¿la lemma es aguda o bilobada/bidentada?",
    opcionA: {
      label: "Lemma aguda, mútica",
      keyStep: "E",
      nextNodeId: "eleusine_a"
    },
    opcionA_prima: {
      label: "Lemma bilobada o bidentada, con mucrón o arista entre los dos dientes",
      keyStep: "E'",
      nextNodeId: "leptochloa_a"
    }
  },

  chlorideae_f: {
    id: "chlorideae_f",
    milestone: "Chlorideae",
    manualPage: 83,
    descripcion: "Chlorideae - F: ¿la lemma es tri-aristada?",
    opcionA: {
      label: "Lemma tri-aristada",
      keyStep: "F",
      especieId: "bouteloua_megapotamica"
    },
    opcionA_prima: {
      label: "Lemma mútica o con una sola arista",
      keyStep: "F'",
      nextNodeId: "chlorideae_g"
    }
  },

  chlorideae_g: {
    id: "chlorideae_g",
    milestone: "Chlorideae",
    manualPage: 83,
    descripcion: "Chlorideae - G: ¿las glumas caen con la espiguilla?",
    opcionA: {
      label: "Glumas caducas con la espiguilla",
      keyStep: "G",
      nextNodeId: "spartina_a"
    },
    opcionA_prima: {
      label: "Glumas persistentes sobre el raquis",
      keyStep: "G'",
      nextNodeId: "chlorideae_h"
    }
  },

  chlorideae_h: {
    id: "chlorideae_h",
    milestone: "Chlorideae",
    manualPage: 83,
    descripcion: "Chlorideae - H: ¿cuántas flores hermafroditas tienen las espiguillas?",
    opcionA: {
      label: "Espiguillas con dos o más flores hermafroditas; lemma bilobada o bidentada con mucrón",
      keyStep: "H",
      nextNodeId: "chlorideae_j"
    },
    opcionA_prima: {
      label: "Espiguillas con una sola flor hermafrodita; lemma aguda",
      keyStep: "H'",
      nextNodeId: "chlorideae_k"
    }
  },

  chlorideae_j: {
    id: "chlorideae_j",
    milestone: "Chlorideae",
    manualPage: 83,
    descripcion: "Chlorideae - J: ¿las espiguillas son violáceas/rojizas o verdes?",
    opcionA: {
      label: "Espiguillas violáceas o rojizas, comprimidas lateralmente",
      keyStep: "J",
      nextNodeId: "leptochloa_a"
    },
    opcionA_prima: {
      label: "Espiguillas verdes, cilíndricas",
      keyStep: "J'",
      nextNodeId: "diplachne_a"
    }
  },

  chlorideae_k: {
    id: "chlorideae_k",
    milestone: "Chlorideae",
    manualPage: 83,
    descripcion: "Chlorideae - K: ¿el raquis de las espigas es articulado o continuo?",
    opcionA: {
      label: "Espigas divergentes, con raquis articulado",
      keyStep: "K",
      especieId: "schedonnardus_paniculatus"
    },
    opcionA_prima: {
      label: "Espigas aproximadas al eje principal, con raquis continuo",
      keyStep: "K'",
      especieId: "willkommia_texana_stolonifera"
    }
  },

  cynodon_a: {
    id: "cynodon_a",
    milestone: "Cynodon",
    manualPage: 85,
    descripcion: "Cynodon - A: ¿la raquilla se prolonga al lado de la pálea?",
    opcionA: {
      label: "Raquilla prolongada al lado de la pálea; lemma con quilla pestañosa no alada; planta con rizomas y estolones",
      keyStep: "A",
      especieId: "cynodon_dactylon"
    },
    opcionA_prima: {
      label: "Raquilla no prolongada; lemma con quilla brevemente pestañosa y angostamente alada; sólo estolones superficiales",
      keyStep: "A'",
      especieId: "cynodon_hirsutus"
    }
  },

  diplachne_a: {
    id: "diplachne_a",
    milestone: "Diplachne",
    manualPage: 86,
    descripcion: "Diplachne - A: ¿la lemma es bilobulada o bidentada?",
    opcionA: {
      label: "Lemma bilobulada en el ápice, 3-nervada, con nervadura central terminada en corto diente",
      keyStep: "A",
      especieId: "diplachne_dubia"
    },
    opcionA_prima: {
      label: "Lemma bidentada en el ápice",
      keyStep: "A'",
      nextNodeId: "diplachne_b"
    }
  },

  diplachne_b: {
    id: "diplachne_b",
    milestone: "Diplachne",
    manualPage: 86,
    descripcion: "Diplachne - B: ¿qué tamaño tienen las anteras?",
    opcionA: {
      label: "Anteras de 1-1,5 mm; lemma no aristada; inflorescencia con 15-20 racimos flexuosos",
      keyStep: "B",
      especieId: "diplachne_fusca"
    },
    opcionA_prima: {
      label: "Anteras de 0,5 mm; lemma generalmente aristada",
      keyStep: "B'",
      nextNodeId: "diplachne_c"
    }
  },

  diplachne_c: {
    id: "diplachne_c",
    milestone: "Diplachne",
    manualPage: 86,
    descripcion: "Diplachne - C: ¿la lemma es acuminada o obtusa/truncada?",
    opcionA: {
      label: "Lemma acuminada en el ápice, con dos dientes agudos y arista de 1 mm",
      keyStep: "C",
      especieId: "diplachne_fascicularis"
    },
    opcionA_prima: {
      label: "Lemma obtusa o truncada en el ápice, con 3 dientes cortos",
      keyStep: "C'",
      especieId: "diplachne_uninervia"
    }
  },

  eleusine_a: {
    id: "eleusine_a",
    milestone: "Eleusine",
    manualPage: 87,
    descripcion: "Eleusine - A: ¿cuántas espigas tiene la inflorescencia?",
    opcionA: {
      label: "Espigas 5-12, de 5-7 cm; espiguillas ovadas agudas, de unos 5 mm, 6-10-floras",
      keyStep: "A",
      especieId: "eleusine_indica"
    },
    opcionA_prima: {
      label: "Espigas 2-4, gruesas, de 1-4 cm; espiguillas ovado-lanceoladas de 6-9 mm",
      keyStep: "A'",
      especieId: "eleusine_tristachya"
    }
  },

  spartina_a: {
    id: "spartina_a",
    milestone: "Spartina",
    manualPage: 87,
    descripcion: "Spartina - A: ¿qué tamaño y disposición tienen las espigas?",
    opcionA: {
      label: "Espigas de 3-7 cm, pocas, completamente adosadas al eje principal; espiguillas de 9-12 mm",
      keyStep: "A",
      especieId: "spartina_montevidensis"
    },
    opcionA_prima: {
      label: "Espigas de 10-16 cm; espiguillas de 12-18 mm",
      keyStep: "A'",
      nextNodeId: "spartina_b"
    }
  },

  spartina_b: {
    id: "spartina_b",
    milestone: "Spartina",
    manualPage: 87,
    descripcion: "Spartina - B: ¿las espigas divergen o se aproximan al raquis principal?",
    opcionA: {
      label: "Espigas 12-20, de unos 10 cm, algo divergentes; glumas glabras o ligeramente cilioladas",
      keyStep: "B",
      especieId: "spartina_brasiliensis"
    },
    opcionA_prima: {
      label: "Espigas 7-11, de 11-16 cm, aproximadas al raquis principal; glumas escabrosas en la quilla",
      keyStep: "B'",
      especieId: "spartina_longispica"
    }
  },

  leptochloa_a: {
    id: "leptochloa_a",
    milestone: "Leptochloa",
    manualPage: 88,
    descripcion: "Leptochloa - A: ¿las espigas están fasciculadas en el ápice o a lo largo del raquis?",
    opcionA: {
      label: "Espigas 5-10, fasciculadas en el ápice de las cañas, de 10-15 cm; espiguillas 3-4-floras",
      keyStep: "A",
      especieId: "leptochloa_chloridiformis"
    },
    opcionA_prima: {
      label: "Espigas numerosas, delgadas, dispuestas a lo largo del raquis principal; espiguillas 5-6-floras rojizo-violáceas",
      keyStep: "A'",
      especieId: "leptochloa_virgata"
    }
  },

  chloris_a: {
    id: "chloris_a",
    milestone: "Chloris",
    manualPage: 83,
    descripcion: "Chloris - A: ¿las espigas están adheridas entre sí simulando una sola espiga terminal?",
    opcionA: {
      label: "Inflorescencia con 2-7 espigas semihelicoidales estrechamente adheridas, simulando una espiga terminal única",
      keyStep: "A",
      especieId: "chloris_berroi"
    },
    opcionA_prima: {
      label: "Inflorescencia formada por varias espigas libres",
      keyStep: "A'",
      nextNodeId: "chloris_b"
    }
  },

  chloris_b: {
    id: "chloris_b",
    milestone: "Chloris",
    manualPage: 83,
    descripcion: "Chloris - B: ¿cómo es la gluma superior y la lemma fértil?",
    opcionA: {
      label: "Gluma superior bilobada, con corta arista apical; lemma fértil mútica o apenas aristulada",
      keyStep: "B",
      nextNodeId: "chloris_c"
    },
    opcionA_prima: {
      label: "Glumas múticas, la superior mucronada; lemma fértil largamente aristada",
      keyStep: "B'",
      nextNodeId: "chloris_e"
    }
  },

  chloris_c: {
    id: "chloris_c",
    milestone: "Chloris",
    manualPage: 83,
    descripcion: "Chloris - C: ¿la lemma está ciliada también en el dorso?",
    opcionA: {
      label: "Lemma ciliada en el dorso y en el margen, carenada y mútica; espigas 4-14 digitadas",
      keyStep: "C",
      especieId: "chloris_capensis_bahiensis"
    },
    opcionA_prima: {
      label: "Lemma ciliada en el margen y glabra en el dorso",
      keyStep: "C'",
      nextNodeId: "chloris_d"
    }
  },

  chloris_d: {
    id: "chloris_d",
    milestone: "Chloris",
    manualPage: 84,
    descripcion: "Chloris - D: ¿cómo termina la lemma de la flor estéril?",
    opcionA: {
      label: "Lemma de la flor estéril aguda; espigas 12-30, flexuosas, de 8-14 cm",
      keyStep: "D",
      especieId: "chloris_distichophylla"
    },
    opcionA_prima: {
      label: "Lemma del antecio estéril truncada en el ápice; espigas 8-15, de 4-10 cm",
      keyStep: "D'",
      especieId: "chloris_retusa"
    }
  },

  chloris_e: {
    id: "chloris_e",
    milestone: "Chloris",
    manualPage: 84,
    descripcion: "Chloris - E: ¿cuántos antecios estériles acompañan al fértil?",
    opcionA: {
      label: "Espiguillas con un antecio fértil y dos antecios estériles casi iguales, largamente aristados",
      keyStep: "E",
      especieId: "chloris_inflata"
    },
    opcionA_prima: {
      label: "Espiguillas con un antecio hermafrodita y un antecio estéril largamente aristado",
      keyStep: "E'",
      nextNodeId: "chloris_f"
    }
  },

  chloris_f: {
    id: "chloris_f",
    milestone: "Chloris",
    manualPage: 84,
    descripcion: "Chloris - F: ¿la lemma es glabra o ciliada?",
    opcionA: {
      label: "Lemma glabra o casi glabra en el dorso y margen; inflorescencia con 2-3 verticilos de espigas perpendiculares",
      keyStep: "F",
      especieId: "chloris_halophila"
    },
    opcionA_prima: {
      label: "Lemma ciliada en el margen y a veces también en la quilla",
      keyStep: "F'",
      nextNodeId: "chloris_g"
    }
  },

  chloris_g: {
    id: "chloris_g",
    milestone: "Chloris",
    manualPage: 84,
    descripcion: "Chloris - G: ¿la quilla de la lemma es glabra o ciliada?",
    opcionA: {
      label: "Lemma ciliada únicamente en el margen, con quilla glabra; espigas 12-24 de 7-9 cm",
      keyStep: "G",
      especieId: "chloris_gayana"
    },
    opcionA_prima: {
      label: "Lemma ciliada en el margen y en la quilla",
      keyStep: "G'",
      nextNodeId: "chloris_h"
    }
  },

  chloris_h: {
    id: "chloris_h",
    milestone: "Chloris",
    manualPage: 84,
    descripcion: "Chloris - H: ¿qué tamaño tienen las espigas?",
    opcionA: {
      label: "Espigas 3-8, de 3-5 cm, fasciculadas en el ápice; espiguillas de 2-3 mm",
      keyStep: "H",
      especieId: "chloris_ciliata"
    },
    opcionA_prima: {
      label: "Espigas de 7-15 cm",
      keyStep: "H'",
      nextNodeId: "chloris_j"
    }
  },

  chloris_j: {
    id: "chloris_j",
    milestone: "Chloris",
    manualPage: 84,
    descripcion: "Chloris - J: ¿cuántas espigas y de qué tamaño?",
    opcionA: {
      label: "Espigas 3-6, flexuosas e inclinadas hacia abajo, de 7-10 cm",
      keyStep: "J",
      especieId: "chloris_canterai"
    },
    opcionA_prima: {
      label: "Espigas 12-25, flexuosas, de 10-15 cm",
      keyStep: "J'",
      especieId: "chloris_polydactyla"
    }
  },

  phalarideae_a: {
    id: "phalarideae_a",
    milestone: "Phalarideae",
    manualPage: 89,
    descripcion: "Phalarideae - A: ¿las flores estériles tienen lemma mútica o aristada?",
    opcionA: {
      label: "Flores estériles con lemma mútica; espiguillas muy comprimidas lateralmente",
      keyStep: "A",
      nextNodeId: "phalaris_a"
    },
    opcionA_prima: {
      label: "Flores estériles con lemma aristada; espiguillas casi cilíndricas",
      keyStep: "A'",
      especieId: "anthoxanthum_odoratum"
    }
  },

  phalaris_a: {
    id: "phalaris_a",
    milestone: "Phalaris",
    manualPage: 89,
    descripcion: "Phalaris - A: ¿la quilla de las glumas es anchamente alada?",
    opcionA: {
      label: "Glumas con quilla anchamente alada, ala puntiaguda arriba; panoja cilíndrica de 4-6 cm",
      keyStep: "A",
      especieId: "phalaris_paradoxa"
    },
    opcionA_prima: {
      label: "Glumas con quilla estrechamente alada, ala no puntiaguda",
      keyStep: "A'",
      nextNodeId: "phalaris_b"
    }
  },

  phalaris_b: {
    id: "phalaris_b",
    milestone: "Phalaris",
    manualPage: 89,
    descripcion: "Phalaris - B: ¿qué tamaño tienen las espiguillas?",
    opcionA: {
      label: "Espiguillas de 7-9 mm; panojas ovoides de 3-4 cm; lemma fértil pubescente",
      keyStep: "B",
      especieId: "phalaris_canariensis"
    },
    opcionA_prima: {
      label: "Espiguillas de 3-6 mm",
      keyStep: "B'",
      nextNodeId: "phalaris_c"
    }
  },

  phalaris_c: {
    id: "phalaris_c",
    milestone: "Phalaris",
    manualPage: 89,
    descripcion: "Phalaris - C: ¿las panojas son cilíndricas largas u ovoides/cortas?",
    opcionA: {
      label: "Panojas cilíndricas de 5-15 cm; espiguillas de 3,5-4,5 mm",
      keyStep: "C",
      nextNodeId: "phalaris_d"
    },
    opcionA_prima: {
      label: "Panojas ovoides o cortamente cilíndricas, de 2-5(-7) cm; espiguillas de 5-6 mm",
      keyStep: "C'",
      especieId: "phalaris_minor"
    }
  },

  phalaris_d: {
    id: "phalaris_d",
    milestone: "Phalaris",
    manualPage: 89,
    descripcion: "Phalaris - D: ¿cómo es la pubescencia de la lemma?",
    opcionA: {
      label: "Espiguillas de unos 4,5 mm; lemma pubescente salvo el tercio superior glabro; panojas de 5-10 cm",
      keyStep: "D",
      especieId: "phalaris_platensis"
    },
    opcionA_prima: {
      label: "Espiguillas de 3,5-4 mm; lemma uniformemente pubescente; panojas de 8-15 cm",
      keyStep: "D'",
      especieId: "phalaris_angusta"
    }
  },

  oryzeae_a: {
    id: "oryzeae_a",
    milestone: "Oryzeae",
    manualPage: 91,
    descripcion: "Oryzeae - A: ¿las flores son hermafroditas o unisexuales?",
    opcionA: {
      label: "Flores hermafroditas; espiguillas comprimidas lateralmente; lemma mútica",
      keyStep: "A",
      especieId: "leersia_hexandra"
    },
    opcionA_prima: {
      label: "Flores unisexuales, diclino-monoicas; espiguillas cilíndricas",
      keyStep: "A'",
      nextNodeId: "oryzeae_b"
    }
  },

  oryzeae_b: {
    id: "oryzeae_b",
    milestone: "Oryzeae",
    manualPage: 91,
    descripcion: "Oryzeae - B: ¿la lemma es mútica o aristada?",
    opcionA: {
      label: "Lemma mútica; flores masculinas y femeninas en inflorescencias separadas",
      keyStep: "B",
      especieId: "luziola_peruviana"
    },
    opcionA_prima: {
      label: "Lemma aristada; flores masculinas y femeninas en la misma inflorescencia",
      keyStep: "B'",
      especieId: "zizaniopsis_bonariensis"
    }
  },

  gramineae_tribe_f: {
    id: "gramineae_tribe_f",
    milestone: "Gramineae",
    manualPage: 49,
    descripcion: "Gramineae - F: ¿cuántas flores tienen las espiguillas?",
    opcionA: {
      label: "Espiguillas 2-multifloras",
      keyStep: "F",
      nextNodeId: "gramineae_tribe_g"
    },
    opcionA_prima: {
      label: "Espiguillas unifloras",
      keyStep: "F'",
      nextNodeId: "gramineae_tribe_h"
    }
  },

  gramineae_tribe_g: {
    id: "gramineae_tribe_g",
    milestone: "Gramineae",
    manualPage: 49,
    descripcion: "Gramineae - G: ¿cómo son las glumelas respecto de las glumas?",
    opcionA: {
      label: "Glumelas generalmente mayores que las glumas, múticas o aristadas desde el ápice",
      keyStep: "G",
      nextNodeId: "festuceae_a"
    },
    opcionA_prima: {
      label: "Glumelas menores que las glumas, con arista dorsal retorcida",
      keyStep: "G'",
      nextNodeId: "aveneae_a"
    }
  },

  gramineae_tribe_h: {
    id: "gramineae_tribe_h",
    milestone: "Gramineae",
    manualPage: 49,
    descripcion: "Gramineae - H: ¿dónde está el antecio fértil?",
    opcionA: {
      label: "Antecio fértil basal",
      keyStep: "H",
      nextNodeId: "agrostideae_a"
    },
    opcionA_prima: {
      label: "Antecio fértil terminal, con una o dos flores rudimentarias en la base",
      keyStep: "H'",
      nextNodeId: "phalarideae_a"
    }
  },

  gramineae_tribe_j: {
    id: "gramineae_tribe_j",
    milestone: "Gramineae",
    manualPage: 49,
    descripcion: "Gramineae - J: ¿cómo es la lemma fértil?",
    opcionA: {
      label: "Lemma fértil papirácea o cartilaginosa, más consistente que las glumas",
      keyStep: "J",
      nextNodeId: "paniceae_a"
    },
    opcionA_prima: {
      label: "Lemma fértil tenue, hialina; glumas cartilaginosas o coriáceas",
      keyStep: "J'",
      nextNodeId: "andropogoneae_a"
    }
  },

  paniceae_a: {
    id: "paniceae_a",
    milestone: "Paniceae",
    manualPage: 92,
    descripcion: "Paniceae - entrada parcial: espiguillas en dos filas sobre un lado de un raquis triangular",
    opcionA: {
      label: "Espiguillas unifloras, deprimidas, biconvexas, dispuestas en dos filas sobre un lado de un raquis triangular; espigas delgadas",
      keyStep: "A",
      especieId: "axonopus_compressus"
    },
    opcionA_prima: {
      label: "Espiguillas con otros caracteres dentro de Paniceae",
      keyStep: "A'",
      nextNodeId: "paniceae_b"
    }
  },

  paniceae_b: {
    id: "paniceae_b",
    milestone: "Paniceae",
    manualPage: 92,
    descripcion: "Paniceae - entrada parcial: espiguillas rodeadas por un involucro espinoso",
    opcionA: {
      label: "Espiguillas rodeadas por un involucro espinoso formado por numerosas cerdas soldadas entre si",
      keyStep: "B",
      nextNodeId: "cenchrus_a"
    },
    opcionA_prima: {
      label: "Espiguillas sin ese involucro espinoso; continuar en la proxima tanda de Paniceae",
      keyStep: "B'",
      nextNodeId: "paniceae_c"
    }
  },

  paniceae_c: {
    id: "paniceae_c",
    milestone: "Paniceae",
    manualPage: 93,
    descripcion: "Paniceae - entrada parcial: espiguillas en grupos de 2-3 sobre un raquis triangular",
    opcionA: {
      label: "Espiguillas en grupos de 2-3, sesiles o cortamente pediceladas, dispuestas en dos hileras sobre uno de los lados de un raquis triangular",
      keyStep: "C",
      nextNodeId: "digitaria_a"
    },
    opcionA_prima: {
      label: "Espiguillas con otros caracteres dentro de Paniceae; continuar en una proxima tanda",
      keyStep: "C'",
      nextNodeId: "paniceae_d"
    }
  },

  cenchrus_a: {
    id: "cenchrus_a",
    milestone: "Cenchrus",
    manualPage: 92,
    descripcion: "Cenchrus - A: cerdas involucrales delgadas o muy ensanchadas",
    opcionA: {
      label: "Cerdas involucrales delgadas, unidas unicamente en su base, cubiertas de pelitos retrorsos; racimos densos de 10-25 cm",
      keyStep: "A",
      especieId: "cenchrus_myosuroides"
    },
    opcionA_prima: {
      label: "Cerdas involucrales muy ensanchadas y unidas por encima de la base",
      keyStep: "A'",
      nextNodeId: "cenchrus_b"
    }
  },

  cenchrus_b: {
    id: "cenchrus_b",
    milestone: "Cenchrus",
    manualPage: 92,
    descripcion: "Cenchrus - B: forma del involucro",
    opcionA: {
      label: "Involucro con numerosas cerdas; las internas ensanchadas en la base y soldadas casi hasta la mitad, con pelos retrorsos; espiguillas de a 4",
      keyStep: "B",
      especieId: "cenchrus_echinatus"
    },
    opcionA_prima: {
      label: "Involucro formado unicamente por espinas muy anchas en la base, abiertas, sin pelos retrorsos; espiguillas 2 por involucro",
      keyStep: "B'",
      especieId: "cenchrus_pauciflorus"
    }
  },

  digitaria_a: {
    id: "digitaria_a",
    milestone: "Digitaria",
    manualPage: 93,
    descripcion: "Digitaria - A: disposicion de los racimos",
    opcionA: {
      label: "Racimos distribuidos a lo largo de un eje principal, no amontonados en el apice de la cana",
      keyStep: "A",
      nextNodeId: "digitaria_b"
    },
    opcionA_prima: {
      label: "Racimos amontonados y mas o menos fasciculados en el apice de la cana florifera",
      keyStep: "A'",
      nextNodeId: "digitaria_c"
    }
  },

  digitaria_b: {
    id: "digitaria_b",
    milestone: "Digitaria",
    manualPage: 93,
    descripcion: "Digitaria - B: relacion entre segunda gluma y lemma esteril",
    opcionA: {
      label: "Segunda gluma mucho mas corta que la tercera o lemma esteril; panoja de 3-6 racimos; espiguillas lanceoladas, velludas, de 4-5 mm",
      keyStep: "B",
      especieId: "digitaria_sellowii"
    },
    opcionA_prima: {
      label: "Segunda gluma casi igual a la tercera o lemma esteril; panoja de 10 a muchos racimos; espiguillas lanceoladas, velludas, de 5-6 mm",
      keyStep: "B'",
      especieId: "digitaria_insularis"
    }
  },

  digitaria_c: {
    id: "digitaria_c",
    milestone: "Digitaria",
    manualPage: 93,
    descripcion: "Digitaria - C: relacion entre segunda gluma y lemma esteril",
    opcionA: {
      label: "Segunda gluma mucho mas corta que la lemma esteril; espiguillas lanceoladas de unos 3 mm; racimos digitados de 5-15 cm",
      keyStep: "C",
      especieId: "digitaria_sanguinalis"
    },
    opcionA_prima: {
      label: "Segunda gluma casi igual a la lemma esteril",
      keyStep: "C'",
      nextNodeId: "digitaria_d"
    }
  },

  digitaria_d: {
    id: "digitaria_d",
    milestone: "Digitaria",
    manualPage: 93,
    descripcion: "Digitaria - D: tamano de las espiguillas",
    opcionA: {
      label: "Espiguillas de 3,5 mm o mas; gluma superior y lemma esteril iguales, acuminadas y velludas; racimos 3-5 de 3-7 cm",
      keyStep: "D",
      especieId: "digitaria_aequiglumis"
    },
    opcionA_prima: {
      label: "Espiguillas de menos de 3 mm; espigas 8 a muchas, debiles, de 7-11 cm, alternas y amontonadas en el apice",
      keyStep: "D'",
      especieId: "digitaria_lanuginosa"
    }
  },

  paniceae_d: {
    id: "paniceae_d",
    milestone: "Paniceae",
    manualPage: 94,
    descripcion: "Paniceae - entrada parcial: espiguillas deprimidas en panojas compactas",
    opcionA: {
      label: "Espiguillas deprimidas, plano-convexas, solitarias o en glomerulos irregulares sobre un lado de las ramificaciones de la panoja",
      keyStep: "D",
      nextNodeId: "echinochloa_a"
    },
    opcionA_prima: {
      label: "Espiguillas con otros caracteres dentro de Paniceae; continuar en una proxima tanda",
      keyStep: "D'",
      nextNodeId: "paniceae_e"
    }
  },

  echinochloa_a: {
    id: "echinochloa_a",
    milestone: "Echinochloa",
    manualPage: 94,
    descripcion: "Echinochloa - A: plantas perennes o anuales",
    opcionA: {
      label: "Plantas perennes; hojas con ligula formada por una hilera de pelos",
      keyStep: "A",
      nextNodeId: "echinochloa_b"
    },
    opcionA_prima: {
      label: "Plantas anuales; hojas sin ligula o a lo mas algo pubescentes en la region ligular",
      keyStep: "A'",
      nextNodeId: "echinochloa_c"
    }
  },

  echinochloa_b: {
    id: "echinochloa_b",
    milestone: "Echinochloa",
    manualPage: 94,
    descripcion: "Echinochloa - B: ancho de hojas y densidad de panojas",
    opcionA: {
      label: "Hojas de 10-25 mm de ancho; panojas densas; espiguillas ovoideas de 4,5-7 mm por 2-3 mm",
      keyStep: "B",
      especieId: "echinochloa_polystachya"
    },
    opcionA_prima: {
      label: "Hojas de 6-10 mm de ancho; panojas laxas, nutantes y paucifloras; espiguillas lanceoladas de 6-7 mm",
      keyStep: "B'",
      especieId: "echinochloa_helodes"
    }
  },

  echinochloa_c: {
    id: "echinochloa_c",
    milestone: "Echinochloa",
    manualPage: 94,
    descripcion: "Echinochloa - C: tamano y forma de las espiguillas",
    opcionA: {
      label: "Espiguillas de 2-2,6 mm, ovoides, obtusas, rojizas o verdosas, muticas; panoja erecta lineal",
      keyStep: "C",
      especieId: "echinochloa_colonum"
    },
    opcionA_prima: {
      label: "Espiguillas de 3 mm o mas, acuminadas, generalmente aristadas",
      keyStep: "C'",
      nextNodeId: "echinochloa_d"
    }
  },

  echinochloa_d: {
    id: "echinochloa_d",
    milestone: "Echinochloa",
    manualPage: 94,
    descripcion: "Echinochloa - D: forma de espiguillas y panojas",
    opcionA: {
      label: "Espiguillas ovoides, ensanchadas, espinulosas; lemma esteril con arista de 3-30 mm; panojas piramidales densas",
      keyStep: "D",
      especieId: "echinochloa_crusgalli"
    },
    opcionA_prima: {
      label: "Espiguillas lanceoladas; lemma esteril con espinulas poco desarrolladas y arista de 2-15 mm; panojas oblongo-lanceoladas nutantes",
      keyStep: "D'",
      especieId: "echinochloa_cruspavonis"
    }
  },

  paniceae_e: {
    id: "paniceae_e",
    milestone: "Paniceae",
    manualPage: 96,
    descripcion: "Paniceae - entrada parcial: espiguillas con dilatacion basal o panojas de Panicum",
    opcionA: {
      label: "Espiguillas deprimidas, solitarias o geminadas, con una dilatacion claviforme en su base; racimos simples sobre un eje principal",
      keyStep: "E",
      especieId: "eriochloa_montevidensis"
    },
    opcionA_prima: {
      label: "Espiguillas con otros caracteres dentro de Paniceae",
      keyStep: "E'",
      nextNodeId: "paniceae_f"
    }
  },

  paniceae_f: {
    id: "paniceae_f",
    milestone: "Paniceae",
    manualPage: 96,
    descripcion: "Paniceae - entrada parcial: Panicum o Paspalum",
    opcionA: {
      label: "Espiguillas mas o menos deprimidas, dispuestas en panojas laxas o densas; caracteres de Panicum",
      keyStep: "F",
      nextNodeId: "panicum_a"
    },
    opcionA_prima: {
      label: "Espiguillas solitarias o en pares, dispuestas en dos o mas filas sobre un lado de un raquis angosto o dilatado; caracteres de Paspalum",
      keyStep: "F'",
      nextNodeId: "paniceae_g"
    }
  },

  paniceae_g: {
    id: "paniceae_g",
    milestone: "Paniceae",
    manualPage: 100,
    descripcion: "Paniceae - entrada parcial: Paspalum o Pennisetum",
    opcionA: {
      label: "Espiguillas solitarias o en pares, dispuestas en dos o mas filas sobre uno de los lados de un raquis; caracteres de Paspalum",
      keyStep: "G",
      nextNodeId: "paspalum_a"
    },
    opcionA_prima: {
      label: "Espiguillas solitarias o en grupos de 2-3, rodeadas por un involucro de cerdas libres que se desprende con la espiguilla; caracteres de Pennisetum",
      keyStep: "G'",
      nextNodeId: "paniceae_h"
    }
  },

  paniceae_h: {
    id: "paniceae_h",
    milestone: "Paniceae",
    manualPage: 102,
    descripcion: "Paniceae - entrada parcial: Pennisetum o Setaria",
    opcionA: {
      label: "Espiguillas rodeadas por un involucro de cerdas libres que se desprende con la espiguilla; caracteres de Pennisetum",
      keyStep: "H",
      nextNodeId: "pennisetum_a"
    },
    opcionA_prima: {
      label: "Espiguillas con otros caracteres dentro de Paniceae",
      keyStep: "H'",
      nextNodeId: "paniceae_i"
    }
  },

  paniceae_i: {
    id: "paniceae_i",
    milestone: "Paniceae",
    manualPage: 103,
    descripcion: "Paniceae - entrada parcial: Setaria u otros generos finales",
    opcionA: {
      label: "Espiguillas rodeadas por una o mas cerdas involucrales que persisten sobre el raquis despues de caer las espiguillas; caracteres de Setaria",
      keyStep: "I",
      nextNodeId: "setaria_a"
    },
    opcionA_prima: {
      label: "Espiguillas sin cerdas involucrales persistentes de Setaria; continuar con otros generos de Paniceae",
      keyStep: "I'",
      nextNodeId: "paniceae_j"
    }
  },

  panicum_a: {
    id: "panicum_a",
    milestone: "Panicum",
    manualPage: 96,
    descripcion: "Panicum - A: tamano y aspecto de las espiguillas",
    opcionA: {
      label: "Espiguillas de 6-8 mm, ovoideo-globosas, cubiertas de largos pelos blancos; panojas largas y densas, subnutantes",
      keyStep: "A",
      especieId: "panicum_racemosum"
    },
    opcionA_prima: {
      label: "Espiguillas de 1-5 mm",
      keyStep: "A'",
      nextNodeId: "panicum_b"
    }
  },

  panicum_b: {
    id: "panicum_b",
    milestone: "Panicum",
    manualPage: 96,
    descripcion: "Panicum - B: espiguillas de 4-5 mm o menores",
    opcionA: {
      label: "Espiguillas de 4-5 mm",
      keyStep: "B",
      nextNodeId: "panicum_c"
    },
    opcionA_prima: {
      label: "Espiguillas de 1-3,5 mm; continuar en una proxima tanda de Panicum",
      keyStep: "B'",
      nextNodeId: "panicum_d"
    }
  },

  panicum_c: {
    id: "panicum_c",
    milestone: "Panicum",
    manualPage: 96,
    descripcion: "Panicum - C: plantas flotantes robustas o terrestres anuales",
    opcionA: {
      label: "Plantas robustas, flotantes, con tallos gruesos ricos en aerenquima, radicantes en los nudos; panojas grandes y abiertas",
      keyStep: "C",
      especieId: "panicum_elephantipes"
    },
    opcionA_prima: {
      label: "Plantas terrestres, anuales, erectas o ascendentes; panojas por lo comun parcialmente incluidas en la vaina de la hoja superior",
      keyStep: "C'",
      especieId: "panicum_miliaceum"
    }
  },

  panicum_d: {
    id: "panicum_d",
    milestone: "Panicum",
    manualPage: 96,
    descripcion: "Panicum - D: tipo de inflorescencia",
    opcionA: {
      label: "Inflorescencia mas o menos contraida, con espiguillas cortamente pediceladas amontonadas en racimos a lo largo de un eje principal",
      keyStep: "D",
      nextNodeId: "panicum_e"
    },
    opcionA_prima: {
      label: "Inflorescencia muy laxa, difusa, con espiguillas largamente pediceladas; continuar en una proxima tanda de Panicum",
      keyStep: "D'",
      nextNodeId: "panicum_j"
    }
  },

  panicum_e: {
    id: "panicum_e",
    milestone: "Panicum",
    manualPage: 97,
    descripcion: "Panicum - E: ancho de hojas y robustez",
    opcionA: {
      label: "Hojas de 15-25 mm de ancho, glabras; plantas perennes, rizomatosas, robustas, de 1-2 m; panojas erectas y amplias",
      keyStep: "E",
      especieId: "panicum_grumosum"
    },
    opcionA_prima: {
      label: "Hojas de menos de 11 mm de ancho",
      keyStep: "E'",
      nextNodeId: "panicum_f"
    }
  },

  panicum_f: {
    id: "panicum_f",
    milestone: "Panicum",
    manualPage: 97,
    descripcion: "Panicum - F: largo de espiguillas",
    opcionA: {
      label: "Espiguillas de 1-1,5 mm, ovoideas, semiagudas, glabras; gluma inferior de un tercio de la espiguilla",
      keyStep: "F",
      especieId: "panicum_laxum"
    },
    opcionA_prima: {
      label: "Espiguillas de 1,5-3 mm",
      keyStep: "F'",
      nextNodeId: "panicum_g"
    }
  },

  panicum_g: {
    id: "panicum_g",
    milestone: "Panicum",
    manualPage: 97,
    descripcion: "Panicum - G: longitud relativa de la gluma inferior",
    opcionA: {
      label: "Gluma inferior alcanzando hasta la mitad de la espiguilla; hojas rigidas de 4-8 cm por 5-7 mm; panojas terminales laxas",
      keyStep: "G",
      especieId: "panicum_fultum"
    },
    opcionA_prima: {
      label: "Gluma inferior alcanzando a lo mas hasta un tercio de la espiguilla",
      keyStep: "G'",
      nextNodeId: "panicum_i"
    }
  },

  panicum_i: {
    id: "panicum_i",
    milestone: "Panicum",
    manualPage: 97,
    descripcion: "Panicum - I: forma de espiguillas y densidad de panojas",
    opcionA: {
      label: "Espiguillas de 1,8-2 mm, ovadas, agudas, glabras; panojas contraidas con 10-25 racimos densos",
      keyStep: "I",
      especieId: "panicum_milioides"
    },
    opcionA_prima: {
      label: "Espiguillas de 2,5-3 mm, lanceoladas, agudas, glabras, rojizas; panojas muy densas, espiciformes, de 4-10 racimos",
      keyStep: "I'",
      especieId: "panicum_decipiens"
    }
  },

  panicum_j: {
    id: "panicum_j",
    milestone: "Panicum",
    manualPage: 97,
    descripcion: "Panicum - J: cerdas involucrales en la base de la espiguilla",
    opcionA: {
      label: "En la base de la espiguilla existen generalmente algunas cerdas involucrales caducas; plantas bambusoides, rizomatosas, de 1-3 m",
      keyStep: "J",
      especieId: "panicum_tricholaenoides"
    },
    opcionA_prima: {
      label: "Espiguillas sin cerdas en su base; plantas no bambusoides",
      keyStep: "J'",
      nextNodeId: "panicum_k"
    }
  },

  panicum_k: {
    id: "panicum_k",
    milestone: "Panicum",
    manualPage: 97,
    descripcion: "Panicum - K: plantas anuales o perennes",
    opcionA: {
      label: "Plantas anuales",
      keyStep: "K",
      nextNodeId: "panicum_l"
    },
    opcionA_prima: {
      label: "Plantas perennes",
      keyStep: "K'",
      nextNodeId: "panicum_m"
    }
  },

  panicum_l: {
    id: "panicum_l",
    milestone: "Panicum",
    manualPage: 97,
    descripcion: "Panicum - L: pubescencia de plantas anuales",
    opcionA: {
      label: "Plantas densamente hirsutas, erectas, de 20-80 cm; panojas amplias y laxas; espiguillas de unos 2 mm",
      keyStep: "L",
      especieId: "panicum_capillare"
    },
    opcionA_prima: {
      label: "Plantas laxamente pubescentes o glabras, ascendentes o erectas, de 50-100 cm; espiguillas de 2-3,2 mm",
      keyStep: "L'",
      especieId: "panicum_dichotomiflorum"
    }
  },

  panicum_m: {
    id: "panicum_m",
    milestone: "Panicum",
    manualPage: 97,
    descripcion: "Panicum - M: hojas anchas planas o angostas convolutas",
    opcionA: {
      label: "Hojas planas, anchas, de 5-15 mm, con base redondeada o auriculada",
      keyStep: "M",
      nextNodeId: "panicum_n"
    },
    opcionA_prima: {
      label: "Hojas por lo comun mas o menos convolutas, de 1-5 mm, no redondeadas en la base",
      keyStep: "M'",
      nextNodeId: "panicum_r"
    }
  },

  panicum_n: {
    id: "panicum_n",
    milestone: "Panicum",
    manualPage: 97,
    descripcion: "Panicum - N: longitud de la gluma inferior",
    opcionA: {
      label: "Gluma inferior obtusa, alcanzando solo de un quinto a un cuarto de la longitud de la espiguilla",
      keyStep: "N",
      especieId: "panicum_dichotomiflorum"
    },
    opcionA_prima: {
      label: "Gluma inferior alcanzando de la mitad a tres cuartos de la longitud de la espiguilla",
      keyStep: "N'",
      nextNodeId: "panicum_o"
    }
  },

  panicum_o: {
    id: "panicum_o",
    milestone: "Panicum",
    manualPage: 98,
    descripcion: "Panicum - O: ligula pilosa o glabra",
    opcionA: {
      label: "Ligula pilosa; hojas de mas de 6 cm, lanceoladas; espiguillas obovadas, obtusas y laxamente pubescentes",
      keyStep: "O",
      especieId: "panicum_sabulorum"
    },
    opcionA_prima: {
      label: "Ligula glabra o casi glabra; hojas de 4-5 cm",
      keyStep: "O'",
      nextNodeId: "panicum_p"
    }
  },

  panicum_p: {
    id: "panicum_p",
    milestone: "Panicum",
    manualPage: 98,
    descripcion: "Panicum - P: espiguillas obtusas o agudas",
    opcionA: {
      label: "Espiguillas obtusas, de unos 2 mm, largamente pediceladas y glaberrimas; panojas difusas muy laxas",
      keyStep: "P",
      especieId: "panicum_helobium"
    },
    opcionA_prima: {
      label: "Espiguillas agudas, ovadas, glabras, de unos 2 mm; panojas cortas paucispicadas terminales y axilares",
      keyStep: "P'",
      especieId: "panicum_unilineatum"
    }
  },

  panicum_r: {
    id: "panicum_r",
    milestone: "Panicum",
    manualPage: 98,
    descripcion: "Panicum - R: rizomas cundidores o plantas cespitosas",
    opcionA: {
      label: "Plantas con rizomas horizontales u oblicuos cundidores; panojas pequenas, densas, algo purpureas",
      keyStep: "R",
      especieId: "panicum_gouini"
    },
    opcionA_prima: {
      label: "Plantas cespitosas; gluma inferior de un cuarto a la mitad del largo de la espiguilla",
      keyStep: "R'",
      nextNodeId: "panicum_s"
    }
  },

  panicum_s: {
    id: "panicum_s",
    milestone: "Panicum",
    manualPage: 98,
    descripcion: "Panicum - S: ancho de hojas en plantas cespitosas",
    opcionA: {
      label: "Hojas de 1-3 mm, lineales, rigidas, pubescentes; plantas de cerca de 50 cm; panojas deltoideas, amplias, muy laxas",
      keyStep: "S",
      especieId: "panicum_bergii"
    },
    opcionA_prima: {
      label: "Hojas de cerca de 5 mm; plantas de 50-100 cm, ligeramente hirsutas o glabrescentes; panojas amplias y difusas",
      keyStep: "S'",
      especieId: "panicum_pilcomayense"
    }
  },

  paspalum_a: {
    id: "paspalum_a",
    milestone: "Paspalum",
    manualPage: 100,
    descripcion: "Paspalum - A: plantas flotantes o terrestres",
    opcionA: {
      label: "Plantas perennes, flotantes, con vainas dilatadas y esponjosas; tallos tendidos sobre el agua, radicantes en los nudos",
      keyStep: "A",
      especieId: "paspalum_repens"
    },
    opcionA_prima: {
      label: "Plantas terrestres, con vainas no dilatadas; raquis generalmente triquetro, igual o mas angosto que las espiguillas",
      keyStep: "A'",
      nextNodeId: "paspalum_b"
    }
  },

  paspalum_b: {
    id: "paspalum_b",
    milestone: "Paspalum",
    manualPage: 100,
    descripcion: "Paspalum - B: tipo de inflorescencia",
    opcionA: {
      label: "Inflorescencia formada por dos espigas geminadas en V en la extremidad de las canas floriferas, raramente con una tercera cercana",
      keyStep: "B",
      nextNodeId: "paspalum_c"
    },
    opcionA_prima: {
      label: "Inflorescencia formada por 1 a muchas espigas nunca geminadas; continuar en proxima tanda de Paspalum",
      keyStep: "B'",
      nextNodeId: "paspalum_f"
    }
  },

  paspalum_c: {
    id: "paspalum_c",
    milestone: "Paspalum",
    manualPage: 100,
    descripcion: "Paspalum - C: rizomas cortos o largos",
    opcionA: {
      label: "Plantas con rizomas cortos y fuertes, que dan lugar a matas compactas",
      keyStep: "C",
      nextNodeId: "paspalum_d"
    },
    opcionA_prima: {
      label: "Plantas con rizomas largos y profundos; espiguillas lanceoladas de 2,5-3,5 mm",
      keyStep: "C'",
      nextNodeId: "paspalum_e"
    }
  },

  paspalum_d: {
    id: "paspalum_d",
    milestone: "Paspalum",
    manualPage: 100,
    descripcion: "Paspalum - D: tamano y disposicion de espiguillas",
    opcionA: {
      label: "Espiguillas de 1,8-2,3 mm por 1,1-1,3 mm, elipticas u obovadas, en una sola serie; espigas de 4-7 cm",
      keyStep: "D",
      especieId: "paspalum_pumilum"
    },
    opcionA_prima: {
      label: "Espiguillas de 2,8-4 mm, elipticas u obovadas, verde-violaceas, en dos hileras; espigas generalmente 2, a veces 3-4",
      keyStep: "D'",
      especieId: "paspalum_notatum"
    }
  },

  paspalum_e: {
    id: "paspalum_e",
    milestone: "Paspalum",
    manualPage: 100,
    descripcion: "Paspalum - E: pubescencia de gluma y lemma esteril",
    opcionA: {
      label: "Gluma finamente pubescente; lemma esteril glabra; espigas desigualmente pedunculadas de 2-6 cm",
      keyStep: "E",
      especieId: "paspalum_distichum"
    },
    opcionA_prima: {
      label: "Gluma y lemma esteril glabras; espigas con pedicelos casi iguales",
      keyStep: "E'",
      especieId: "paspalum_vaginatum"
    }
  },

  paspalum_f: {
    id: "paspalum_f",
    milestone: "Paspalum",
    manualPage: 100,
    descripcion: "Paspalum - F: color y forma de la lemma",
    opcionA: {
      label: "Lemma castana, lustrosa, pronunciadamente convexa",
      keyStep: "F",
      nextNodeId: "paspalum_g"
    },
    opcionA_prima: {
      label: "Lemma blanca o pajiza, suavemente convexa o navicular",
      keyStep: "F'",
      nextNodeId: "paspalum_h"
    }
  },

  paspalum_g: {
    id: "paspalum_g",
    milestone: "Paspalum",
    manualPage: 100,
    descripcion: "Paspalum - G: plantas cespitosas o con rizomas largos",
    opcionA: {
      label: "Plantas cespitosas de 30-90 cm; espigas 3-6 alternadas; espiguillas ovado-elipticas de 2,8-3 mm",
      keyStep: "G",
      especieId: "paspalum_plicatulum"
    },
    opcionA_prima: {
      label: "Plantas con largos rizomas horizontales de 30-40 cm; espigas 3-6; espiguillas castano claro, elipticas, de unos 3 mm",
      keyStep: "G'",
      especieId: "paspalum_nicorae"
    }
  },

  paspalum_h: {
    id: "paspalum_h",
    milestone: "Paspalum",
    manualPage: 101,
    descripcion: "Paspalum - H: cantidad de espigas",
    opcionA: {
      label: "Inflorescencia formada por 3-10 espigas",
      keyStep: "H",
      nextNodeId: "paspalum_j"
    },
    opcionA_prima: {
      label: "Inflorescencia formada por 12-80 espigas; continuar en proxima tanda de Paspalum",
      keyStep: "H'",
      nextNodeId: "paspalum_m"
    }
  },

  paspalum_j: {
    id: "paspalum_j",
    milestone: "Paspalum",
    manualPage: 101,
    descripcion: "Paspalum - J: largo de las espigas",
    opcionA: {
      label: "Espigas de 1,5-3 cm; plantas cespitosas con estolones; canas floriferas de cerca de 50 cm con 6-8 espigas",
      keyStep: "J",
      especieId: "paspalum_proliferum"
    },
    opcionA_prima: {
      label: "Espigas de 3-9 cm; plantas sin estolones",
      keyStep: "J'",
      nextNodeId: "paspalum_k"
    }
  },

  paspalum_k: {
    id: "paspalum_k",
    milestone: "Paspalum",
    manualPage: 101,
    descripcion: "Paspalum - K: largo de espiguillas",
    opcionA: {
      label: "Espiguillas de 1,5 mm, verdosas, ovadas; hierba erecta perenne de 50-100 cm; espigas 4-6 delgadas",
      keyStep: "K",
      especieId: "paspalum_malacophyllum"
    },
    opcionA_prima: {
      label: "Espiguillas de 3-3,5 mm",
      keyStep: "K'",
      nextNodeId: "paspalum_l"
    }
  },

  paspalum_l: {
    id: "paspalum_l",
    milestone: "Paspalum",
    manualPage: 101,
    descripcion: "Paspalum - L: color y pubescencia de espiguillas",
    opcionA: {
      label: "Espiguillas castano claro, obovadas, corta y flojamente pubescentes; espigas 3-7 de 3-5 cm",
      keyStep: "L",
      especieId: "paspalum_alcalinum"
    },
    opcionA_prima: {
      label: "Espiguillas verdosas, en pares, ovadas, agudas, de 3-3,5 mm por 2-2,5 mm; espigas 3-6 inclinadas",
      keyStep: "L'",
      especieId: "paspalum_dilatatum"
    }
  },

  paspalum_m: {
    id: "paspalum_m",
    milestone: "Paspalum",
    manualPage: 101,
    descripcion: "Paspalum - M: color de espiguillas en inflorescencias con 12-80 espigas",
    opcionA: {
      label: "Espiguillas verdosas, obovadas, agudas, de 2,3-2,6 mm; hierba perenne de 1,5-2 m; espigas 10-25",
      keyStep: "M",
      especieId: "paspalum_urvillei"
    },
    opcionA_prima: {
      label: "Espiguillas ferrugineas o rojizas",
      keyStep: "M'",
      nextNodeId: "paspalum_n"
    }
  },

  paspalum_n: {
    id: "paspalum_n",
    milestone: "Paspalum",
    manualPage: 101,
    descripcion: "Paspalum - N: vainas foliares carenadas o cilindricas",
    opcionA: {
      label: "Vainas foliares notablemente carenadas; espiguillas glabras, ovadas, de 2,5-2,8 mm por 1,5 mm",
      keyStep: "N",
      especieId: "paspalum_intermedium"
    },
    opcionA_prima: {
      label: "Vainas foliares cilindricas o apenas carenadas; espiguillas pubescentes al menos en el borde de las glumas",
      keyStep: "N'",
      nextNodeId: "paspalum_o"
    }
  },

  paspalum_o: {
    id: "paspalum_o",
    milestone: "Paspalum",
    manualPage: 101,
    descripcion: "Paspalum - O: tamano y disposicion de espiguillas",
    opcionA: {
      label: "Espiguillas de 2-2,5 mm, ovado-lanceoladas, en 4 hileras; gluma pubescente; lemma esteril plana, casi glabra",
      keyStep: "O",
      especieId: "paspalum_quadrifarium"
    },
    opcionA_prima: {
      label: "Espiguillas de 3-4 mm",
      keyStep: "O'",
      nextNodeId: "paspalum_p"
    }
  },

  paspalum_p: {
    id: "paspalum_p",
    milestone: "Paspalum",
    manualPage: 101,
    descripcion: "Paspalum - P: cantidad de espigas",
    opcionA: {
      label: "Inflorescencia formada por 12-30 espigas; espiguillas ovadas, agudas, de 3,3-3,7 mm",
      keyStep: "P",
      especieId: "paspalum_exaltatum"
    },
    opcionA_prima: {
      label: "Inflorescencia con 40-80 espigas, piramidal, de cerca de 50 cm; espiguillas lanceoladas, ferrugineas, de 3,5-4 mm",
      keyStep: "P'",
      especieId: "paspalum_haumanii"
    }
  },

  pennisetum_a: {
    id: "pennisetum_a",
    milestone: "Pennisetum",
    manualPage: 102,
    descripcion: "Pennisetum - A: cerdas involucrales plumosas o simples",
    opcionA: {
      label: "Cerdas involucrales numerosas, plumosas, de hasta 25 mm; panojas cilíndricas, densas, de 5-10 cm",
      keyStep: "A",
      especieId: "pennisetum_villosum"
    },
    opcionA_prima: {
      label: "Cerdas involucrales simples, 8-12, de menos de 20 mm; panojas gruesas de 3-5 cm, inclinadas",
      keyStep: "A'",
      especieId: "pennisetum_latifolium"
    }
  },

  setaria_a: {
    id: "setaria_a",
    milestone: "Setaria",
    manualPage: 103,
    descripcion: "Setaria - A: cantidad de cerdas involucrales",
    opcionA: {
      label: "Cerdas involucrales mas de cinco; perenne, cespitosa, con tallos ascendentes de 30-40 cm",
      keyStep: "A",
      especieId: "setaria_geniculata"
    },
    opcionA_prima: {
      label: "Cerdas involucrales 1, raramente 2-3",
      keyStep: "A'",
      nextNodeId: "setaria_b"
    }
  },

  setaria_b: {
    id: "setaria_b",
    milestone: "Setaria",
    manualPage: 103,
    descripcion: "Setaria - B: direccion de los pelos de las cerdas",
    opcionA: {
      label: "Cerdas con pelos retrorsos que las hacen adherentes a la ropa; anual de 40-100 cm",
      keyStep: "B",
      especieId: "setaria_verticillata"
    },
    opcionA_prima: {
      label: "Cerdas involucrales con pelos antrorsos, no adherentes",
      keyStep: "B'",
      nextNodeId: "setaria_c"
    }
  },

  setaria_c: {
    id: "setaria_c",
    milestone: "Setaria",
    manualPage: 103,
    descripcion: "Setaria - C: plantas anuales o perennes",
    opcionA: {
      label: "Plantas anuales de 20-40 cm; panojas espiciformes cortas y gruesas; eje de la panoja velludo",
      keyStep: "C",
      especieId: "setaria_viridis"
    },
    opcionA_prima: {
      label: "Plantas perennes; panojas lineales u oblongas",
      keyStep: "C'",
      nextNodeId: "setaria_d"
    }
  },

  setaria_d: {
    id: "setaria_d",
    milestone: "Setaria",
    manualPage: 103,
    descripcion: "Setaria - D: plantas robustas o menores",
    opcionA: {
      label: "Plantas robustas de 60-100 cm; hojas de hasta 16 cm por 12-15 mm; panojas densas de 10-18 cm",
      keyStep: "D",
      especieId: "setaria_argentina"
    },
    opcionA_prima: {
      label: "Plantas generalmente menores; hojas de menos de 10 mm de ancho; espigas de 5-10 cm",
      keyStep: "D'",
      nextNodeId: "setaria_e"
    }
  },

  setaria_e: {
    id: "setaria_e",
    milestone: "Setaria",
    manualPage: 103,
    descripcion: "Setaria - E: forma de espiguillas",
    opcionA: {
      label: "Espiguillas globosas, de 1,8 mm, glabras; gluma inferior hasta la mitad de la espiguilla; eje escabroso",
      keyStep: "E",
      especieId: "setaria_fiebrigii"
    },
    opcionA_prima: {
      label: "Espiguillas ovoideas, de 2-2,5 mm; gluma superior casi hasta el apice de la espiguilla",
      keyStep: "E'",
      nextNodeId: "setaria_f"
    }
  },

  setaria_f: {
    id: "setaria_f",
    milestone: "Setaria",
    manualPage: 103,
    descripcion: "Setaria - F: eje de la inflorescencia",
    opcionA: {
      label: "Eje de la inflorescencia glabro o aspero; perenne cespitosa de 30-50 cm; panoja densa, espiciforme",
      keyStep: "F",
      especieId: "setaria_caespitosa"
    },
    opcionA_prima: {
      label: "Eje de la inflorescencia pubescente; perenne cespitosa de 50-70 cm; panojas no muy densas, algo interrumpidas abajo",
      keyStep: "F'",
      especieId: "setaria_vaginata"
    }
  },

  paniceae_j: {
    id: "paniceae_j",
    milestone: "Paniceae",
    manualPage: 104,
    descripcion: "Paniceae - generos finales: Stenotaphrum o continuar",
    opcionA: {
      label: "Espiguillas incrustadas sobre un lado de un raquis grueso y plano que se desarticula tardiamente",
      keyStep: "J",
      especieId: "stenotaphrum_secundatum"
    },
    opcionA_prima: {
      label: "Espiguillas no incrustadas en un raquis grueso y plano",
      keyStep: "J'",
      nextNodeId: "paniceae_k"
    }
  },

  paniceae_k: {
    id: "paniceae_k",
    milestone: "Paniceae",
    manualPage: 104,
    descripcion: "Paniceae - generos finales: Leptocoryphium o continuar",
    opcionA: {
      label: "Gluma inferior ausente; segunda gluma y lemma esteril velludas; lemma fertil y palea pardas con apice blanquecino",
      keyStep: "K",
      especieId: "leptocoryphium_lanatum"
    },
    opcionA_prima: {
      label: "Gluma inferior presente o con otros caracteres",
      keyStep: "K'",
      nextNodeId: "paniceae_l"
    }
  },

  paniceae_l: {
    id: "paniceae_l",
    milestone: "Paniceae",
    manualPage: 105,
    descripcion: "Paniceae - generos finales: Ichnanthus o continuar",
    opcionA: {
      label: "Gluma inferior casi tan larga como la superior; lemma de la flor hermafrodita con dos excavaciones laterales en la base",
      keyStep: "L",
      especieId: "ichnanthus_pallens"
    },
    opcionA_prima: {
      label: "Lemma fertil sin dos excavaciones laterales en la base",
      keyStep: "L'",
      nextNodeId: "paniceae_m"
    }
  },

  paniceae_m: {
    id: "paniceae_m",
    milestone: "Paniceae",
    manualPage: 105,
    descripcion: "Paniceae - generos finales: Hymenachne o continuar",
    opcionA: {
      label: "Espiguillas con dos glumas y lemma esteril glumiforme; lemma fertil y palea poco endurecidas; panoja espiciforme",
      keyStep: "M",
      especieId: "hymenachne_amplexicaulis"
    },
    opcionA_prima: {
      label: "Lemma fertil mas endurecida o con otros caracteres",
      keyStep: "M'",
      nextNodeId: "paniceae_n"
    }
  },

  paniceae_n: {
    id: "paniceae_n",
    milestone: "Paniceae",
    manualPage: 105,
    descripcion: "Paniceae - generos finales: Pseudechinolaena o continuar",
    opcionA: {
      label: "Primera y segunda glumas casi de la misma longitud; segunda gluma ventricosa y con pelos ganchudos a la madurez",
      keyStep: "N",
      especieId: "pseudechinolaena_polystachya"
    },
    opcionA_prima: {
      label: "Segunda gluma sin pelos ganchudos ventricosos a la madurez",
      keyStep: "N'",
      nextNodeId: "paniceae_o"
    }
  },

  paniceae_o: {
    id: "paniceae_o",
    milestone: "Paniceae",
    manualPage: 105,
    descripcion: "Paniceae - generos finales: Brachiaria o continuar",
    opcionA: {
      label: "Gluma inferior orientada hacia el raquis; espiguillas en dos hileras sobre un raquis triquetro formando espigas unilaterales",
      keyStep: "O",
      especieId: "brachiaria_extensa"
    },
    opcionA_prima: {
      label: "Gluma inferior orientada hacia afuera o glumas aristadas; continuar",
      keyStep: "O'",
      nextNodeId: "paniceae_p"
    }
  },

  paniceae_p: {
    id: "paniceae_p",
    milestone: "Paniceae",
    manualPage: 105,
    descripcion: "Paniceae - generos finales: Paspalidium u Oplismenopsis/Oplismenus",
    opcionA: {
      label: "Espiguillas con dos glumas, la inferior hacia afuera y la superior hacia el raquis; lemma esteril mutica",
      keyStep: "P",
      especieId: "paspalidium_paludivagum"
    },
    opcionA_prima: {
      label: "Glumas aristadas o espiguillas bifloras con gluma inferior aristada",
      keyStep: "P'",
      nextNodeId: "paniceae_q"
    }
  },

  paniceae_q: {
    id: "paniceae_q",
    milestone: "Paniceae",
    manualPage: 106,
    descripcion: "Paniceae - generos finales: Oplismenopsis u Oplismenus",
    opcionA: {
      label: "Espiguillas bifloras; gluma inferior corta, aristada, con el dorso dirigido hacia el raquis; hojas lanceoladas planas",
      keyStep: "Q",
      especieId: "oplismenopsis_najada"
    },
    opcionA_prima: {
      label: "Espiguillas gruesas o algo comprimidas lateralmente, subsesiles, ordenadas en dos hileras; glumas casi iguales, aristadas",
      keyStep: "Q'",
      especieId: "oplismenus_setarius"
    }
  },

  andropogoneae_a: {
    id: "andropogoneae_a",
    milestone: "Andropogoneae",
    manualPage: 106,
    descripcion: "Andropogoneae - entrada parcial: Bothriochloa o continuar",
    opcionA: {
      label: "Racimos amontonados en la parte superior de las canas floriferas formando panojas plateadas densas; caracteres de Bothriochloa",
      keyStep: "A",
      nextNodeId: "bothriochloa_a"
    },
    opcionA_prima: {
      label: "Racimos solitarios, geminados, fasciculados o con otros caracteres dentro de Andropogoneae; continuar en proxima tanda",
      keyStep: "A'",
      nextNodeId: "andropogoneae_b"
    }
  },

  bothriochloa_a: {
    id: "bothriochloa_a",
    milestone: "Bothriochloa",
    manualPage: 107,
    descripcion: "Bothriochloa - A: espiguillas muticas o aristadas",
    opcionA: {
      label: "Espiguillas muticas; hierba perenne, cespitosa, de 1-2 m; tallos glabros; racimos muy numerosos",
      keyStep: "A",
      especieId: "bothriochloa_hassleri"
    },
    opcionA_prima: {
      label: "Espiguillas aristadas",
      keyStep: "A'",
      nextNodeId: "bothriochloa_b"
    }
  },

  bothriochloa_b: {
    id: "bothriochloa_b",
    milestone: "Bothriochloa",
    manualPage: 107,
    descripcion: "Bothriochloa - B: pelos en los nudos de las canas",
    opcionA: {
      label: "Canas glabras en los nudos; plantas cespitosas, cortamente rizomatosas, de cerca de 50 cm; panoja fusiforme plateada",
      keyStep: "B",
      especieId: "bothriochloa_lagurioides"
    },
    opcionA_prima: {
      label: "Canas con una coronita de pelos en los nudos",
      keyStep: "B'",
      nextNodeId: "bothriochloa_c"
    }
  },

  bothriochloa_c: {
    id: "bothriochloa_c",
    milestone: "Bothriochloa",
    manualPage: 107,
    descripcion: "Bothriochloa - C: largo y color de panojas",
    opcionA: {
      label: "Panojas de menos de 10 cm, plateadas; tallos de menos de 1 m",
      keyStep: "C",
      nextNodeId: "bothriochloa_d"
    },
    opcionA_prima: {
      label: "Panojas de 10-20 cm, verdosas; tallos de 1,5-2 m; gluma inferior con excavacion puntiforme dorsal",
      keyStep: "C'",
      especieId: "bothriochloa_alta"
    }
  },

  bothriochloa_d: {
    id: "bothriochloa_d",
    milestone: "Bothriochloa",
    manualPage: 107,
    descripcion: "Bothriochloa - D: excavacion puntiforme en gluma inferior",
    opcionA: {
      label: "Gluma inferior sin excavaciones puntiformes en el dorso; panoja oblonga plateada; espiguillas fertiles de unos 4 mm",
      keyStep: "D",
      especieId: "bothriochloa_saccharoides"
    },
    opcionA_prima: {
      label: "Gluma inferior con una excavacion puntiforme en el dorso",
      keyStep: "D'",
      especieId: "bothriochloa_perforata"
    }
  },

  andropogoneae_b: {
    id: "andropogoneae_b",
    milestone: "Andropogoneae",
    manualPage: 109,
    descripcion: "Andropogoneae - entrada parcial: Andropogon o generos con raquis articulado",
    opcionA: {
      label: "Racimos solitarios en axilas de hojas reducidas formando seudopanoja; caracteres de Andropogon",
      keyStep: "B",
      nextNodeId: "andropogon_a"
    },
    opcionA_prima: {
      label: "Racimos espiciformes cilindricos o panojas terminales con otros caracteres",
      keyStep: "B'",
      nextNodeId: "andropogoneae_c"
    }
  },

  andropogon_a: {
    id: "andropogon_a",
    milestone: "Andropogon",
    manualPage: 109,
    descripcion: "Andropogon - A: largo de espiguillas",
    opcionA: {
      label: "Espiguillas de 4-5 mm; hierbas perennes, cespitosas, con tallos rojizos de 50-100 cm",
      keyStep: "A",
      especieId: "andropogon_paniculatus"
    },
    opcionA_prima: {
      label: "Espiguillas de 6-9 mm; hierbas perennes, cespitosas, rojizas, de 30-40 cm",
      keyStep: "A'",
      especieId: "andropogon_consanguineus"
    }
  },

  andropogoneae_c: {
    id: "andropogoneae_c",
    milestone: "Andropogoneae",
    manualPage: 109,
    descripcion: "Andropogoneae - generos simples: Hemarthria o continuar",
    opcionA: {
      label: "Raquis tenaz; espiguilla esteril con pedicelo adherido al raquis; glumas muticas, coriaceas, carenadas, con quilla alada",
      keyStep: "C",
      especieId: "hemarthria_altissima"
    },
    opcionA_prima: {
      label: "Raquis que se desarticula facilmente o panojas terminales con otros caracteres",
      keyStep: "C'",
      nextNodeId: "andropogoneae_d"
    }
  },

  andropogoneae_d: {
    id: "andropogoneae_d",
    milestone: "Andropogoneae",
    manualPage: 109,
    descripcion: "Andropogoneae - generos simples: Rottboellia o continuar",
    opcionA: {
      label: "Raquis engrosado que se desarticula facilmente; espiguilla fertil apretada contra la parte concava del raquis",
      keyStep: "D",
      especieId: "rottboellia_selloana"
    },
    opcionA_prima: {
      label: "Panojas terminales laxas o estrechas, no con ese raquis engrosado",
      keyStep: "D'",
      nextNodeId: "andropogoneae_e"
    }
  },

  andropogoneae_e: {
    id: "andropogoneae_e",
    milestone: "Andropogoneae",
    manualPage: 109,
    descripcion: "Andropogoneae - generos simples: Sorghum o Imperata",
    opcionA: {
      label: "Espiguillas en pares, una sesil y otra pedicelada esteril pero bien desarrollada; panojas terminales mas o menos laxas",
      keyStep: "E",
      especieId: "sorghum_halepense"
    },
    opcionA_prima: {
      label: "Espiguillas iguales entre si, muticas, en pares sobre un raquis continuo alargado y envueltas por largos pelos plateados",
      keyStep: "E'",
      nextNodeId: "andropogoneae_f"
    }
  },

  andropogoneae_f: {
    id: "andropogoneae_f",
    milestone: "Andropogoneae",
    manualPage: 110,
    descripcion: "Andropogoneae - generos finales: Imperata o continuar",
    opcionA: {
      label: "Espiguillas iguales entre si, muticas, en pares sobre un raquis continuo alargado, envueltas por largos pelos plateados; panojas estrechas, plateadas",
      keyStep: "F",
      especieId: "imperata_brasiliensis"
    },
    opcionA_prima: {
      label: "Espiguillas no envueltas por largos pelos plateados de Imperata; continuar con generos finales",
      keyStep: "F'",
      nextNodeId: "andropogoneae_g"
    }
  },

  andropogoneae_g: {
    id: "andropogoneae_g",
    milestone: "Andropogoneae",
    manualPage: 110,
    descripcion: "Andropogoneae - generos finales: Ischaemum o continuar",
    opcionA: {
      label: "Espiguillas en pares en racimos espiciformes solitarios, geminados o fasciculados; una casi sesil con pedicelo oculto por la gluma decurrente",
      keyStep: "G",
      especieId: "ischaemum_urvilleanum"
    },
    opcionA_prima: {
      label: "Espiguillas gruesas sesiles con pedicelo velludo ausente, o pares con una sesil masculina y otra pedicelada hermafrodita",
      keyStep: "G'",
      nextNodeId: "andropogoneae_h"
    }
  },

  andropogoneae_h: {
    id: "andropogoneae_h",
    milestone: "Andropogoneae",
    manualPage: 111,
    descripcion: "Andropogoneae - generos finales: Sorghastrum o Trachypogon",
    opcionA: {
      label: "Espiguillas gruesas, sesiles, hermafroditas, acompanadas por el pedicelo velludo de una segunda espiguilla que falta; caracteres de Sorghastrum",
      keyStep: "H",
      nextNodeId: "sorghastrum_a"
    },
    opcionA_prima: {
      label: "Espiguillas en pares sobre raquis delgado y continuo; una sesil masculina sin arista y otra pedicelada hermafrodita largamente aristada",
      keyStep: "H'",
      especieId: "trachypogon_canescens"
    }
  },

  sorghastrum_a: {
    id: "sorghastrum_a",
    milestone: "Sorghastrum",
    manualPage: 111,
    descripcion: "Sorghastrum - A: largo de la arista",
    opcionA: {
      label: "Arista de 10-15 mm; plantas cespitosas de 1-1,5 m; hojas planas, enroscables; panojas densas plateado-ocraceas",
      keyStep: "A",
      especieId: "sorghastrum_pellitum"
    },
    opcionA_prima: {
      label: "Arista de 5 mm; plantas de 1,5-2 m; panojas laxas; espiguillas velludas",
      keyStep: "A'",
      especieId: "sorghastrum_agrostoides"
    }
  },

  festuceae_a: {
    id: "festuceae_a",
    milestone: "Festuceae",
    manualPage: 51,
    descripcion: "Festuceae - A: ¿la lemma termina en varias aristas que simulan un papus?",
    opcionA: {
      label: "Lemma terminada superiormente en 5 o más aristas que simulan un papus",
      keyStep: "A",
      especieId: "pappophorum_mucronulatum"
    },
    opcionA_prima: {
      label: "Lemma mútica o con una sola arista",
      keyStep: "A'",
      nextNodeId: "festuceae_b"
    }
  },

  festuceae_b: {
    id: "festuceae_b",
    milestone: "Festuceae",
    manualPage: 51,
    descripcion: "Festuceae - B: ¿el porte es muy robusto?",
    opcionA: {
      label: "Plantas muy robustas, de más de 1,5 m, con inflorescencia en penacho y pelos plateados",
      keyStep: "B",
      nextNodeId: "festuceae_c"
    },
    opcionA_prima: {
      label: "Plantas gráciles, generalmente de menos de 1,5 m, sin largos pelos plateados",
      keyStep: "B'",
      nextNodeId: "festuceae_e"
    }
  },

  festuceae_c: {
    id: "festuceae_c",
    milestone: "Festuceae",
    manualPage: 51,
    descripcion: "Festuceae - C: ¿cómo se distribuyen las hojas y cómo son las flores?",
    opcionA: {
      label: "Hojas muy largas, amontonadas en la base de las cañas; flores dioicas",
      keyStep: "C",
      especieId: "cortaderia_selloana"
    },
    opcionA_prima: {
      label: "Hojas repartidas uniformemente por el tallo; flores hermafroditas",
      keyStep: "C'",
      nextNodeId: "festuceae_d"
    }
  },

  festuceae_d: {
    id: "festuceae_d",
    milestone: "Festuceae",
    manualPage: 51,
    descripcion: "Festuceae - D: ¿dónde están los pelos largos?",
    opcionA: {
      label: "Lemma velluda y raquilla glabra",
      keyStep: "D",
      especieId: "arundo_donax"
    },
    opcionA_prima: {
      label: "Lemma glabra y raquilla velluda",
      keyStep: "D'",
      especieId: "phragmites_communis"
    }
  },

  festuceae_e: {
    id: "festuceae_e",
    milestone: "Festuceae",
    manualPage: 51,
    descripcion: "Festuceae - E: ¿cómo son glumas, color y porte de las espiguillas?",
    opcionA: {
      label: "Glumas membranosas anchas, iguales o mayores que la espiguilla; espiguillas péndulas no verdes; lemma mútica",
      keyStep: "E",
      nextNodeId: "melica_a"
    },
    opcionA_prima: {
      label: "Glumas lanceoladas, menores que la espiguilla, generalmente verde",
      keyStep: "E'",
      nextNodeId: "festuceae_f"
    }
  },

  festuceae_f: {
    id: "festuceae_f",
    milestone: "Festuceae",
    manualPage: 51,
    descripcion: "Festuceae - F: ¿las espiguillas son dioicas o hermafroditas?",
    opcionA: {
      label: "Espiguillas dioicas",
      keyStep: "F",
      nextNodeId: "festuceae_g"
    },
    opcionA_prima: {
      label: "Espiguillas hermafroditas",
      keyStep: "F'",
      nextNodeId: "festuceae_h"
    }
  },

  festuceae_g: {
    id: "festuceae_g",
    milestone: "Festuceae",
    manualPage: 51,
    descripcion: "Festuceae - G: ¿las espiguillas femeninas tienen pelos lanosos?",
    opcionA: {
      label: "Espiguillas masculinas y femeninas glabras; plantas rizomatosas de suelos salados",
      keyStep: "G",
      nextNodeId: "distichlis_a"
    },
    opcionA_prima: {
      label: "Espiguillas femeninas con largos pelos lanosos",
      keyStep: "G'",
      nextNodeId: "poa_a"
    }
  },

  festuceae_h: {
    id: "festuceae_h",
    milestone: "Festuceae",
    manualPage: 51,
    descripcion: "Festuceae - H: ¿la espiguilla es globosa o alargada?",
    opcionA: {
      label: "Espiguillas más o menos globosas, casi tan anchas como largas; lemma con margen membranoso",
      keyStep: "H",
      nextNodeId: "briza_a"
    },
    opcionA_prima: {
      label: "Espiguillas lineales o lanceoladas, más largas que anchas",
      keyStep: "H'",
      nextNodeId: "festuceae_j"
    }
  },

  festuceae_j: {
    id: "festuceae_j",
    milestone: "Festuceae",
    manualPage: 51,
    descripcion: "Festuceae - J: ¿las espiguillas son lineales cilíndricas o lanceoladas?",
    opcionA: {
      label: "Espiguillas lineales, más o menos cilíndricas; lemmas obtusas y múticas",
      keyStep: "J",
      nextNodeId: "festuceae_k"
    },
    opcionA_prima: {
      label: "Espiguillas lanceoladas o lanceolado-lineales; lemmas con nervaduras convergentes hacia el ápice",
      keyStep: "J'",
      nextNodeId: "festuceae_l"
    }
  },

  festuceae_k: {
    id: "festuceae_k",
    milestone: "Festuceae",
    manualPage: 51,
    descripcion: "Festuceae - K: ¿los estilos son persistentes y el cariopse hendido?",
    opcionA: {
      label: "Estilos alargados, persistentes; lemmas con nervaduras prominentes; cariopse con hendidura longitudinal",
      keyStep: "K",
      especieId: "glyceria_multiflora"
    },
    opcionA_prima: {
      label: "Estilos cortos, caducos; lemmas con nervaduras tenues; cariopse no hendido",
      keyStep: "K'",
      especieId: "puccinellia_glaucescens"
    }
  },

  festuceae_l: {
    id: "festuceae_l",
    milestone: "Festuceae",
    manualPage: 51,
    descripcion: "Festuceae - L: ¿cuántas nervaduras tiene la lemma?",
    opcionA: {
      label: "Lemma trinervada",
      keyStep: "L",
      nextNodeId: "eragrostis_a"
    },
    opcionA_prima: {
      label: "Lemma con 5 o más nervaduras",
      keyStep: "L'",
      nextNodeId: "festuceae_m"
    }
  },

  festuceae_m: {
    id: "festuceae_m",
    milestone: "Festuceae",
    manualPage: 51,
    descripcion: "Festuceae - M: ¿qué tamaño tienen las espiguillas?",
    opcionA: {
      label: "Espiguillas grandes, de 15-35 mm; lemma mucronada o aristada",
      keyStep: "M",
      nextNodeId: "bromus_a"
    },
    opcionA_prima: {
      label: "Espiguillas, sin contar las aristas, de menos de 12 mm",
      keyStep: "M'",
      nextNodeId: "festuceae_n"
    }
  },

  festuceae_n: {
    id: "festuceae_n",
    milestone: "Festuceae",
    manualPage: 51,
    descripcion: "Festuceae - N: ¿la lemma es carenada en el dorso?",
    opcionA: {
      label: "Lemma carenada en el dorso",
      keyStep: "N",
      nextNodeId: "festuceae_o"
    },
    opcionA_prima: {
      label: "Lemma redondeada en el dorso",
      keyStep: "N'",
      nextNodeId: "festuceae_p"
    }
  },

  festuceae_o: {
    id: "festuceae_o",
    milestone: "Festuceae",
    manualPage: 51,
    descripcion: "Festuceae - O: ¿la lemma es mútica o mucronada/aristada?",
    opcionA: {
      label: "Lemmas múticas",
      keyStep: "O",
      nextNodeId: "poa_a"
    },
    opcionA_prima: {
      label: "Lemmas mucronadas o aristadas",
      keyStep: "O'",
      especieId: "dactylis_glomerata"
    }
  },

  festuceae_p: {
    id: "festuceae_p",
    milestone: "Festuceae",
    manualPage: 51,
    descripcion: "Festuceae - P: ¿cómo son los pedicelos y las lemmas?",
    opcionA: {
      label: "Espiguillas con pedicelos muy gruesos; lemmas múticas o mucronadas",
      keyStep: "P",
      especieId: "scleropoa_rigida"
    },
    opcionA_prima: {
      label: "Espiguillas con pedicelos filiformes; lemmas acuminadas o aristadas",
      keyStep: "P'",
      nextNodeId: "festuca_a"
    }
  },

  melica_a: {
    id: "melica_a",
    milestone: "Melica",
    manualPage: 62,
    descripcion: "Melica - A: igualdad de las glumas y pubescencia de la lemma",
    opcionA: {
      label: "Glumas casi iguales y agudas; espiguillas fusiformes; lemma glabra",
      keyStep: "A",
      nextNodeId: "melica_b"
    },
    opcionA_prima: {
      label: "Glumas muy desiguales, la inferior muy ancha y obtusa; lemma hirsuta",
      keyStep: "A'",
      nextNodeId: "melica_c"
    }
  },

  melica_b: {
    id: "melica_b",
    milestone: "Melica",
    manualPage: 62,
    descripcion: "Melica - B: porte, hojas y tamaño de las espiguillas",
    opcionA: {
      label: "Tallos flojos y apoyantes de 1-3 m; hojas planas; espiguillas de 7-8 mm",
      keyStep: "B",
      especieId: "melica_sarmentosa"
    },
    opcionA_prima: {
      label: "Plantas cespitosas de unos 50 cm; hojas rígidas, convolutas y punzantes; espiguillas de 12-15 mm",
      keyStep: "B'",
      especieId: "melica_macra"
    }
  },

  melica_c: {
    id: "melica_c",
    milestone: "Melica",
    manualPage: 62,
    descripcion: "Melica - C: forma de la gluma inferior",
    opcionA: {
      label: "Gluma inferior anchamente obovada, hialina arriba, irregularmente recortada y algo plegada",
      keyStep: "C",
      especieId: "melica_argyrea"
    },
    opcionA_prima: {
      label: "Gluma inferior obovada, entera o casi entera arriba, plana o enroscada, no plegada",
      keyStep: "C'",
      nextNodeId: "melica_d"
    }
  },

  melica_d: {
    id: "melica_d",
    milestone: "Melica",
    manualPage: 62,
    descripcion: "Melica - D: tamaño de la gluma inferior y porte",
    opcionA: {
      label: "Gluma inferior de 8-10 mm; planta cespitosa de 50 cm; hojas cortas y convolutas",
      keyStep: "D",
      especieId: "melica_papilionacea"
    },
    opcionA_prima: {
      label: "Gluma inferior de unos 15 mm; planta de 1 m o más; hojas lineales y planas",
      keyStep: "D'",
      especieId: "melica_aurantiaca"
    }
  },

  poa_a: {
    id: "poa_a",
    milestone: "Poa",
    manualPage: 64,
    descripcion: "Poa - A: sexualidad de las flores y origen de las plantas",
    opcionA: {
      label: "Flores hermafroditas; plantas adventicias",
      keyStep: "A",
      nextNodeId: "poa_b"
    },
    opcionA_prima: {
      label: "Flores dioicas; plantas indígenas",
      keyStep: "A'",
      nextNodeId: "poa_e"
    }
  },

  poa_b: {
    id: "poa_b",
    milestone: "Poa",
    manualPage: 64,
    descripcion: "Poa - B: ciclo y porte de las plantas hermafroditas",
    opcionA: {
      label: "Plantas anuales de 5-20 cm; panojas abiertas y laxas; espiguillas de 4-6 mm",
      keyStep: "B",
      especieId: "poa_annua"
    },
    opcionA_prima: {
      label: "Plantas perennes de 20-90 cm",
      keyStep: "B'",
      nextNodeId: "poa_c"
    }
  },

  poa_c: {
    id: "poa_c",
    milestone: "Poa",
    manualPage: 64,
    descripcion: "Poa - C: presencia de rizomas horizontales",
    opcionA: {
      label: "Sin rizomas; plantas erectas o ascendentes; panoja amplia; espiguillas de unos 3 mm",
      keyStep: "C",
      especieId: "poa_trivialis"
    },
    opcionA_prima: {
      label: "Con rizomas horizontales",
      keyStep: "C'",
      nextNodeId: "poa_d"
    }
  },

  poa_d: {
    id: "poa_d",
    milestone: "Poa",
    manualPage: 64,
    descripcion: "Poa - D: forma de los tallos y de la panoja",
    opcionA: {
      label: "Tallos redondeados; panoja piramidal abierta; espiguillas de 3-6 mm",
      keyStep: "D",
      especieId: "poa_pratensis"
    },
    opcionA_prima: {
      label: "Tallos muy comprimidos; panojas angostas; espiguillas amontonadas casi sésiles",
      keyStep: "D'",
      especieId: "poa_compressa"
    }
  },

  poa_e: {
    id: "poa_e",
    milestone: "Poa",
    manualPage: 64,
    descripcion: "Poa - E: hábito de las plantas dioicas",
    opcionA: {
      label: "Plantas con rizomas horizontales",
      keyStep: "E",
      nextNodeId: "poa_f"
    },
    opcionA_prima: {
      label: "Plantas cespitosas, sin rizomas; panojas contraídas y espiguillas femeninas lanosas",
      keyStep: "E'",
      especieId: "poa_lanigera"
    }
  },

  poa_f: {
    id: "poa_f",
    milestone: "Poa",
    manualPage: 64,
    descripcion: "Poa - F: longitud de la lígula",
    opcionA: {
      label: "Lígula de 5-12 mm o más; hojas conduplicadas y rígidas",
      keyStep: "F",
      especieId: "poa_lanuginosa"
    },
    opcionA_prima: {
      label: "Lígula de 1-2,5 mm; láminas plegadas o planas; panoja contraída y densa",
      keyStep: "F'",
      especieId: "poa_bonariensis"
    }
  },

  eragrostis_a: {
    id: "eragrostis_a",
    milestone: "Eragrostis",
    manualPage: 60,
    descripcion: "Eragrostis - A: hábito rastrero o erecto",
    opcionA: {
      label: "Planta anual, rastrera, radicante en los nudos; panojas muy cortas y densas",
      keyStep: "A",
      especieId: "eragrostis_hypnoides"
    },
    opcionA_prima: {
      label: "Plantas erectas o ascendentes",
      keyStep: "A'",
      nextNodeId: "eragrostis_b"
    }
  },

  eragrostis_b: {
    id: "eragrostis_b",
    milestone: "Eragrostis",
    manualPage: 60,
    descripcion: "Eragrostis - B: duración de la planta",
    opcionA: {
      label: "Plantas perennes, rizomatosas o cespitosas",
      keyStep: "B",
      nextNodeId: "eragrostis_c"
    },
    opcionA_prima: {
      label: "Plantas anuales",
      keyStep: "B'",
      nextNodeId: "eragrostis_g"
    }
  },

  eragrostis_c: {
    id: "eragrostis_c",
    milestone: "Eragrostis",
    manualPage: 60,
    descripcion: "Eragrostis - C: rizomatosa o cespitosa",
    opcionA: {
      label: "Rizomatosa, glabra, de 40-90 cm; panojas laxas; espiguillas con 8-30 flores",
      keyStep: "C",
      especieId: "eragrostis_bahiensis"
    },
    opcionA_prima: {
      label: "Cespitosa; espiguillas con 1-7 flores",
      keyStep: "C'",
      nextNodeId: "eragrostis_d"
    }
  },

  eragrostis_d: {
    id: "eragrostis_d",
    milestone: "Eragrostis",
    manualPage: 60,
    descripcion: "Eragrostis - D: número de flores por espiguilla",
    opcionA: {
      label: "Espiguillas con 1-2 flores, raramente 3, de 1 mm; panojas tenues rojizas",
      keyStep: "D",
      especieId: "eragrostis_airoides"
    },
    opcionA_prima: {
      label: "Espiguillas con 3-7 flores",
      keyStep: "D'",
      nextNodeId: "eragrostis_e"
    }
  },

  eragrostis_e: {
    id: "eragrostis_e",
    milestone: "Eragrostis",
    manualPage: 60,
    descripcion: "Eragrostis - E: cilios en el margen de las páleas",
    opcionA: {
      label: "Páleas ciliadas en el margen; panoja laxa; espiguillas violáceas de 4-5 flores",
      keyStep: "E",
      nextNodeId: "eragrostis_retinens_a"
    },
    opcionA_prima: {
      label: "Páleas no ciliadas",
      keyStep: "E'",
      nextNodeId: "eragrostis_f"
    }
  },

  eragrostis_retinens_a: {
    id: "eragrostis_retinens_a",
    milestone: "Eragrostis retinens",
    manualPage: 61,
    descripcion: "Eragrostis retinens: número de flores por espiguilla",
    opcionA: {
      label: "Espiguillas con 4-5 flores",
      keyStep: "a",
      especieId: "eragrostis_retinens"
    },
    opcionA_prima: {
      label: "Espiguillas menores, con sólo 2-3 flores",
      keyStep: "a'",
      especieId: "eragrostis_retinens_pergaminensis"
    }
  },

  eragrostis_f: {
    id: "eragrostis_f",
    milestone: "Eragrostis",
    manualPage: 60,
    descripcion: "Eragrostis - F: porte de las panojas",
    opcionA: {
      label: "Panojas erectas, tenues y difusas; vainas peludas en la garganta",
      keyStep: "F",
      especieId: "eragrostis_lugens"
    },
    opcionA_prima: {
      label: "Panojas débiles, generalmente nutantes",
      keyStep: "F'",
      especieId: "eragrostis_flaccida"
    }
  },

  eragrostis_g: {
    id: "eragrostis_g",
    milestone: "Eragrostis",
    manualPage: 60,
    descripcion: "Eragrostis - G: densidad de las panojas",
    opcionA: {
      label: "Panojas contraídas, densas y angostas",
      keyStep: "G",
      nextNodeId: "eragrostis_h"
    },
    opcionA_prima: {
      label: "Panojas laxas y amplias",
      keyStep: "G'",
      nextNodeId: "eragrostis_j"
    }
  },

  eragrostis_h: {
    id: "eragrostis_h",
    milestone: "Eragrostis",
    manualPage: 60,
    descripcion: "Eragrostis - H: tamaño y forma de las espiguillas",
    opcionA: {
      label: "Espiguillas lanceoladas de 5-15 por 2-3 mm; tallos con depresiones glandulares",
      keyStep: "H",
      especieId: "eragrostis_cilianensis"
    },
    opcionA_prima: {
      label: "Espiguillas de 4-8 por 1-1,5 mm; planta erecta y velluda de 20-30 cm",
      keyStep: "H'",
      especieId: "eragrostis_neesii"
    }
  },

  eragrostis_j: {
    id: "eragrostis_j",
    milestone: "Eragrostis",
    manualPage: 60,
    descripcion: "Eragrostis - J: anchura de las espiguillas",
    opcionA: {
      label: "Espiguillas lanceoladas de 1,5-2 mm de ancho",
      keyStep: "J",
      nextNodeId: "eragrostis_k"
    },
    opcionA_prima: {
      label: "Espiguillas lineales de 1 mm o menos de ancho",
      keyStep: "J'",
      nextNodeId: "eragrostis_m"
    }
  },

  eragrostis_k: {
    id: "eragrostis_k",
    milestone: "Eragrostis",
    manualPage: 60,
    descripcion: "Eragrostis - K: longitud y número de flores de las espiguillas",
    opcionA: {
      label: "Espiguillas de 3-4 mm, con 4-8 flores; plantas de 5-20 cm",
      keyStep: "K",
      especieId: "eragrostis_multicaulis"
    },
    opcionA_prima: {
      label: "Espiguillas de 6-10 mm",
      keyStep: "K'",
      nextNodeId: "eragrostis_l"
    }
  },

  eragrostis_l: {
    id: "eragrostis_l",
    milestone: "Eragrostis",
    manualPage: 60,
    descripcion: "Eragrostis - L: orientación de las ramificaciones de la panoja",
    opcionA: {
      label: "Ramificaciones muy abiertas; espiguillas con 12-20 flores; plantas de 20-40 cm",
      keyStep: "L",
      especieId: "eragrostis_barrelieri"
    },
    opcionA_prima: {
      label: "Ramificaciones oblicuas al raquis; espiguillas con 8-12 flores; planta de hasta 1 m",
      keyStep: "L'",
      especieId: "eragrostis_neomexicana"
    }
  },

  eragrostis_m: {
    id: "eragrostis_m",
    milestone: "Eragrostis",
    manualPage: 60,
    descripcion: "Eragrostis - M: pelos en las axilas de las ramificaciones",
    opcionA: {
      label: "Eje con largos pelos blancos en las axilas; espiguillas oscuras de 3-5 mm",
      keyStep: "M",
      especieId: "eragrostis_pilosa"
    },
    opcionA_prima: {
      label: "Eje sin largos pelos blancos en las axilas; espiguillas de 4-5 mm",
      keyStep: "M'",
      especieId: "eragrostis_virescens"
    }
  },

  briza_a: {
    id: "briza_a",
    milestone: "Briza",
    manualPage: 56,
    descripcion: "Briza - A: ¿cómo son las espiguillas y la lemma vista de perfil?",
    opcionA: {
      label: "Espiguillas comprimidas lateralmente, violáceas; lemma triangular de perfil, con dilataciones marginales anchas y arista de 4-5 mm",
      keyStep: "A",
      especieId: "briza_brizoides"
    },
    opcionA_prima: {
      label: "Espiguillas más o menos globosas; lemma cortamente aristada o mútica",
      keyStep: "A'",
      nextNodeId: "briza_b"
    }
  },

  briza_b: {
    id: "briza_b",
    milestone: "Briza",
    manualPage: 56,
    descripcion: "Briza - B: ¿la lemma es aguda y aristada?",
    opcionA: {
      label: "Lemmas agudas, bidentadas, con arista de 0,5 mm; espiguillas globosas de 5 mm, 5-8-floras",
      keyStep: "B",
      especieId: "briza_subaristata"
    },
    opcionA_prima: {
      label: "Lemma obtusa y mútica",
      keyStep: "B'",
      nextNodeId: "briza_c"
    }
  },

  briza_c: {
    id: "briza_c",
    milestone: "Briza",
    manualPage: 56,
    descripcion: "Briza - C: ¿la planta es perenne rizomatosa o anual?",
    opcionA: {
      label: "Hierbas perennes, rizomatosas, de cerca de 1 m; panojas densas espiciformes ramificadas",
      keyStep: "C",
      especieId: "briza_glomerata"
    },
    opcionA_prima: {
      label: "Hierbas anuales; panojas laxas",
      keyStep: "C'",
      nextNodeId: "briza_d"
    }
  },

  briza_d: {
    id: "briza_d",
    milestone: "Briza",
    manualPage: 56,
    descripcion: "Briza - D: ¿qué tamaño tienen las espiguillas?",
    opcionA: {
      label: "Espiguillas de 2-4 mm, globosas, 4-6-floras; glumas y glumelas redondeadas en el ápice",
      keyStep: "D",
      especieId: "briza_minor"
    },
    opcionA_prima: {
      label: "Espiguillas de 15-20 mm, ovoideas, amarillentas, 13-17-floras; glumas y glumelas ovadas obtusas",
      keyStep: "D'",
      especieId: "briza_maxima"
    }
  },

  distichlis_a: {
    id: "distichlis_a",
    milestone: "Distichlis",
    manualPage: 59,
    descripcion: "Distichlis - A: ¿la panoja es laxa o muy densa?",
    opcionA: {
      label: "Panoja laxa; hojas densas y uniformemente repartidas por el tallo, con lámina convoluta rígida",
      keyStep: "A",
      especieId: "distichlis_scoparia"
    },
    opcionA_prima: {
      label: "Panoja muy densa; hojas dísticas, con vainas superpuestas; lámina plana o convoluta",
      keyStep: "A'",
      especieId: "distichlis_spicata"
    }
  },

  festuca_a: {
    id: "festuca_a",
    milestone: "Festuca",
    manualPage: 61,
    descripcion: "Festuca - A: ¿las lemmas son ciliadas en la mitad superior?",
    opcionA: {
      label: "Lemmas ciliadas en su mitad superior, lineal-lanceoladas y escabrosas; aristas de 8-10 mm",
      keyStep: "A",
      especieId: "festuca_megalura"
    },
    opcionA_prima: {
      label: "Lemmas no ciliadas",
      keyStep: "A'",
      nextNodeId: "festuca_b"
    }
  },

  festuca_b: {
    id: "festuca_b",
    milestone: "Festuca",
    manualPage: 61,
    descripcion: "Festuca - B: ¿qué tamaño tienen las glumas?",
    opcionA: {
      label: "Gluma inferior de unos 4 mm y superior de 6-7 mm; lemma lanceolada escabrosa; arista de 10-13 mm",
      keyStep: "B",
      especieId: "festuca_dertonensis"
    },
    opcionA_prima: {
      label: "Gluma inferior de 1-1,5 mm y superior de 4-4,5 mm",
      keyStep: "B'",
      especieId: "festuca_myurus"
    }
  },

  bromus_a: {
    id: "bromus_a",
    milestone: "Bromus",
    manualPage: 56,
    descripcion: "Bromus - A: ¿qué longitud tienen las aristas de las lemmas?",
    opcionA: {
      label: "Lemmas con aristas de 0,5 mm; espiguillas de 15-18 mm, lanceoladas y comprimidas",
      keyStep: "A",
      especieId: "bromus_brevis"
    },
    opcionA_prima: {
      label: "Lemmas con aristas de más de 1 mm",
      keyStep: "A'",
      nextNodeId: "bromus_b"
    }
  },

  bromus_b: {
    id: "bromus_b",
    milestone: "Bromus",
    manualPage: 56,
    descripcion: "Bromus - B: ¿las lemmas son glabras o pubescentes?",
    opcionA: {
      label: "Lemmas glabras, escabrosas",
      keyStep: "B",
      nextNodeId: "bromus_c"
    },
    opcionA_prima: {
      label: "Lemmas pubescentes",
      keyStep: "B'",
      nextNodeId: "bromus_f"
    }
  },

  bromus_c: {
    id: "bromus_c",
    milestone: "Bromus",
    manualPage: 56,
    descripcion: "Bromus - C: ¿cómo son las espiguillas y la carena de las lemmas?",
    opcionA: {
      label: "Espiguillas muy comprimidas, lanceoladas, 7-10-floras, de 25-30 mm; lemmas carenadas y arista de unos 2 mm",
      keyStep: "C",
      especieId: "bromus_catharticus"
    },
    opcionA_prima: {
      label: "Espiguillas más o menos redondeadas; lemmas no carenadas",
      keyStep: "C'",
      nextNodeId: "bromus_d"
    }
  },

  bromus_d: {
    id: "bromus_d",
    milestone: "Bromus",
    manualPage: 56,
    descripcion: "Bromus - D: ¿cómo son glumas, lemmas y espiguillas?",
    opcionA: {
      label: "Glumas acuminadas o subuladas; lemmas acuminadas con arista de 20-25 mm; espiguillas flojas muy alargadas",
      keyStep: "D",
      especieId: "bromus_madritensis"
    },
    opcionA_prima: {
      label: "Glumas agudas; espiguillas cortas y compactas",
      keyStep: "D'",
      nextNodeId: "bromus_e"
    }
  },

  bromus_e: {
    id: "bromus_e",
    milestone: "Bromus",
    manualPage: 56,
    descripcion: "Bromus - E: ¿la panoja es densa o laxa?",
    opcionA: {
      label: "Panojas densas, casi espiciformes y erectas; lemmas anchamente ovadas, bidentadas y largamente aristadas",
      keyStep: "E",
      especieId: "bromus_racemosus"
    },
    opcionA_prima: {
      label: "Panojas laxas, péndulas; espiguillas fusiformes con antecios apretados",
      keyStep: "E'",
      especieId: "bromus_japonicus"
    }
  },

  bromus_f: {
    id: "bromus_f",
    milestone: "Bromus",
    manualPage: 56,
    descripcion: "Bromus - F: ¿la panoja es contraída o laxa?",
    opcionA: {
      label: "Panojas contraídas y densas; espiguillas lanceoladas gruesas; hierba anual pubescente",
      keyStep: "F",
      especieId: "bromus_mollis"
    },
    opcionA_prima: {
      label: "Panojas laxas; plantas perennes",
      keyStep: "F'",
      nextNodeId: "bromus_g"
    }
  },

  bromus_g: {
    id: "bromus_g",
    milestone: "Bromus",
    manualPage: 56,
    descripcion: "Bromus - G: ¿qué longitud tiene la arista respecto de la lemma?",
    opcionA: {
      label: "Arista de la misma longitud que la lemma; panojas laxas inclinadas; espiguillas de 15-20 mm",
      keyStep: "G",
      especieId: "bromus_uruguayensis"
    },
    opcionA_prima: {
      label: "Arista de la mitad de la longitud de la lemma; espiguillas de 25-30 mm, 7-10-floras",
      keyStep: "G'",
      especieId: "bromus_auleticus"
    }
  },

  // D': Flores sin espiguillas
  herbaceae_b_c_d_prima: {
    id: "herbaceae_b_c_d_prima",
    descripcion: "¿Cómo es el perigonio?",
    opcionA: {
      label: "Flores con perigonio verdoso formado por 6 piezas",
      nextNodeId: "herbaceae_b_c_f"
    },
    opcionA_prima: {
      label: "Flores desnudas o con perigonio de menos de 6 piezas",
      nextNodeId: "herbaceae_b_c_f_prima"
    }
  },

  // F: Perigonio 6 piezas
  herbaceae_b_c_f: {
    id: "herbaceae_b_c_f",
    descripcion: "¿Son plantas trepadoras?",
    opcionA: {
      label: "Arbustos o hierbas trepadoras",
      nextNodeId: "herbaceae_b_c_f_g"
    },
    opcionA_prima: {
      label: "Plantas no trepadoras",
      nextNodeId: "herbaceae_b_c_f_g_prima"
    }
  },

  // G: Trepadoras
  herbaceae_b_c_f_g: {
    id: "herbaceae_b_c_f_g",
    descripcion: "¿Dónde está el ovario?",
    opcionA: {
      label: "Ovario ínfero. Hojas retinervadas",
      familia: "28. Dioscoreaceae",
      nextNodeId: "dioscoreaceae_a"
    },
    opcionA_prima: {
      label: "Ovario súpero. Hojas paralelinervadas",
      familia: "26. Liliaceae",
      nextNodeId: "liliaceae_a"
    }
  },

  dioscoreaceae_a: {
    id: "dioscoreaceae_a",
    milestone: "Dioscoreaceae",
    manualPage: 148,
    descripcion: "Dioscoreaceae: enredaderas con flores actinomorfas generalmente unisexuales y fruto capsula trialada o triquetra.",
    opcionA: {
      label: "Genero Dioscorea; especie unica tratada en el manual",
      keyStep: "1",
      especieId: "dioscorea_sinuata"
    },
    opcionA_prima: {
      label: "Genero Dioscorea; especie unica tratada en el manual",
      keyStep: "1",
      especieId: "dioscorea_sinuata"
    },
    especie: {
      id: "dioscorea_sinuata",
      nombreCientifico: "Dioscorea sinuata",
      nombreVulgar: "Carape",
      familia: "28. Dioscoreaceae",
      descripcion: "Enredadera perenne herbacea, con tuberculo discoideo y tallos volubles de 2-4 m, glabros.",
      caracteristicas: "Hojas alternas, delgadas, pecioladas, ovado-acorazonadas, acuminadas, trilobadas o sinuadas, de 5-12 cm por 3-9 cm; flores en racimos; capsulas membranosas trialadas de 15 mm por 12 mm; semillas aladas.",
      distribucion: "Sur del Brasil, Paraguay, Uruguay y nordeste de la Argentina; frecuente en bosques del Delta y de la ribera platense; tuberculos comestibles.",
      imagen: ""
    }
  },

  liliaceae_a: {
    id: "liliaceae_a",
    milestone: "Liliaceae",
    manualPage: 141,
    descripcion: "Liliaceae - A: enredaderas o hierbas bulbiferas",
    opcionA: {
      label: "Enredaderas",
      keyStep: "A",
      nextNodeId: "liliaceae_b"
    },
    opcionA_prima: {
      label: "Hierbas perennes, con bulbos; hojas lineales",
      keyStep: "A'",
      nextNodeId: "liliaceae_c"
    }
  },

  liliaceae_b: {
    id: "liliaceae_b",
    milestone: "Liliaceae",
    manualPage: 141,
    descripcion: "Liliaceae - B: aguijones y forma de hojas en enredaderas",
    opcionA: {
      label: "Plantas con aguijones y hojas ovadas, trinervadas; caracteres de Smilax",
      keyStep: "B",
      especieId: "smilax_campestris"
    },
    opcionA_prima: {
      label: "Plantas sin aguijones; hojas lineal-lanceoladas; caracteres de Herreria",
      keyStep: "B'",
      especieId: "herreria_bonplandii"
    }
  },

  liliaceae_c: {
    id: "liliaceae_c",
    milestone: "Liliaceae",
    manualPage: 141,
    descripcion: "Liliaceae - C: tepalos libres o soldados",
    opcionA: {
      label: "Tepalos libres casi hasta su base; flores en umbelas; caracteres de Nothoscordum",
      keyStep: "C",
      nextNodeId: "nothoscordum_a"
    },
    opcionA_prima: {
      label: "Tepalos soldados, al menos en su parte inferior, formando un tubo; flores solitarias; caracteres de Beauverdia",
      keyStep: "C'",
      nextNodeId: "beauverdia_a"
    }
  },

  nothoscordum_a: {
    id: "nothoscordum_a",
    milestone: "Nothoscordum",
    manualPage: 142,
    descripcion: "Nothoscordum - A: color de flores",
    opcionA: {
      label: "Flores amarillas; umbelas 2-7-floras; tepalos de 8-10 mm",
      keyStep: "A",
      especieId: "nothoscordum_montevidense"
    },
    opcionA_prima: {
      label: "Flores blancas, con tintes liliaceos",
      keyStep: "A'",
      nextNodeId: "nothoscordum_b"
    }
  },

  nothoscordum_b: {
    id: "nothoscordum_b",
    milestone: "Nothoscordum",
    manualPage: 142,
    descripcion: "Nothoscordum - B: ancho de hojas, bulbo y filamentos",
    opcionA: {
      label: "Hojas de 20-30 cm por 4-10 mm; bulbo ovoideo rodeado por numerosos bulbillos; raices gruesas y carnosas; umbela 8-12-flora",
      keyStep: "B",
      especieId: "nothoscordum_inodorum"
    },
    opcionA_prima: {
      label: "Hojas mas estrechas, de 0,3-3 mm; bulbos no proliferos o con solo 2-3 bulbillos laterales; filamentos estaminales mas angostos",
      keyStep: "B'",
      nextNodeId: "nothoscordum_c"
    }
  },

  nothoscordum_c: {
    id: "nothoscordum_c",
    milestone: "Nothoscordum",
    manualPage: 144,
    descripcion: "Nothoscordum - C: hojas muy estrechas o de 1-3 mm",
    opcionA: {
      label: "Hojas de 0,3-1 mm de ancho y 8-15 cm; bulbo esferico no prolifero de 1 cm; umbela 3-6-flora",
      keyStep: "C",
      especieId: "nothoscordum_gaudichaudianum"
    },
    opcionA_prima: {
      label: "Hojas de 1-3 mm de ancho; umbelas 6-10-floras; plantas de 15-40 cm",
      keyStep: "C'",
      nextNodeId: "nothoscordum_d"
    }
  },

  nothoscordum_d: {
    id: "nothoscordum_d",
    milestone: "Nothoscordum",
    manualPage: 144,
    descripcion: "Nothoscordum - D: forma del bulbo y bulbillos",
    opcionA: {
      label: "Bulbos esfericos de 10-12 mm, frecuentemente con rizomas laterales cortos o 1-3 bulbillos hijos; pedicelos de diferentes longitudes",
      keyStep: "D",
      especieId: "nothoscordum_bonariense"
    },
    opcionA_prima: {
      label: "Bulbos fusiformes o conicos de 2-2,5 cm por 1-1,5 cm, sin bulbillos laterales; umbelas 7-14-floras",
      keyStep: "D'",
      especieId: "nothoscordum_arenarium"
    }
  },

  beauverdia_a: {
    id: "beauverdia_a",
    milestone: "Beauverdia",
    manualPage: 144,
    descripcion: "Beauverdia - A: color de flores y longitud del tubo",
    opcionA: {
      label: "Flores blancas con nervaduras azuladas o rosadas; tubo del perigonio de la misma longitud o mas largo que los segmentos",
      keyStep: "A",
      especieId: "beauverdia_uniflora"
    },
    opcionA_prima: {
      label: "Flores amarillas; tubo del perigonio mas corto que los segmentos",
      keyStep: "A'",
      especieId: "beauverdia_sellowiana"
    }
  },

  // G': No trepadoras
  herbaceae_b_c_f_g_prima: {
    id: "herbaceae_b_c_f_g_prima",
    descripcion: "¿Cómo es el gineceo?",
    opcionA: {
      label: "Gineceo dialicarpelar con 3-6 carpelos",
      familia: "13. Scheuchzeriaceae",
      nextNodeId: "scheuchzeriaceae_a"
    },
    opcionA_prima: {
      label: "Gineceo gamocarpelar",
      familia: "25. Juncaceae",
      nextNodeId: "juncus_a"
    }
  },

  juncus_a: {
    id: "juncus_a",
    milestone: "Juncaceae",
    manualPage: 138,
    descripcion: "Juncus - A: bracteas cortas en la base de cada flor",
    opcionA: {
      label: "Cada flor lleva dos bracteas cortas en su base",
      keyStep: "A",
      nextNodeId: "juncus_b"
    },
    opcionA_prima: {
      label: "Flores sin bracteas en la base; plantas perennes",
      keyStep: "A'",
      nextNodeId: "juncus_f"
    }
  },

  juncus_b: {
    id: "juncus_b",
    milestone: "Juncus",
    manualPage: 139,
    descripcion: "Juncus - B: plantas anuales o perennes",
    opcionA: {
      label: "Plantas anuales, tenues, con tallos de unos 20 cm; hojas numerosas estrechamente lineales; flores en antela; perigonio de 5-7 mm",
      keyStep: "B",
      especieId: "juncus_bufonius"
    },
    opcionA_prima: {
      label: "Plantas perennes",
      keyStep: "B'",
      nextNodeId: "juncus_c"
    }
  },

  juncus_c: {
    id: "juncus_c",
    milestone: "Juncus",
    manualPage: 139,
    descripcion: "Juncus - C: hojas capilares o lineales",
    opcionA: {
      label: "Hojas capilares, surcadas, de solo 0,2-0,3 mm de diametro; tallos filiformes de 15-25 cm; inflorescencia seudolateral pauciflora",
      keyStep: "C",
      especieId: "juncus_capillaceus"
    },
    opcionA_prima: {
      label: "Hojas lineales, de 0,5 mm o mas de anchura",
      keyStep: "C'",
      nextNodeId: "juncus_d"
    }
  },

  juncus_d: {
    id: "juncus_d",
    milestone: "Juncus",
    manualPage: 139,
    descripcion: "Juncus - D: longitud y color del perigonio",
    opcionA: {
      label: "Perigonio castano de 5-6 mm; fruto algo mas largo que los tepalos; hierba cespitosa de 10-40 cm; hojas lineales canaliculadas",
      keyStep: "D",
      especieId: "juncus_imbricatus"
    },
    opcionA_prima: {
      label: "Perigonio de 3-4 mm; fruto del mismo largo",
      keyStep: "D'",
      nextNodeId: "juncus_e"
    }
  },

  juncus_e: {
    id: "juncus_e",
    milestone: "Juncus",
    manualPage: 139,
    descripcion: "Juncus - E: antela laxa o densa",
    opcionA: {
      label: "Antela laxa, con bractea mas larga o mas corta que ella; perigonio parduzco de 3-4 mm; hierba cespitosa de 20-80 cm",
      keyStep: "E",
      especieId: "juncus_dichotomus"
    },
    opcionA_prima: {
      label: "Antela muy densa; perigonio castano de 3-4 mm; estambres solo 3; hierba cespitosa de 20-45 cm",
      keyStep: "E'",
      especieId: "juncus_uruguensis"
    }
  },

  juncus_f: {
    id: "juncus_f",
    milestone: "Juncus",
    manualPage: 139,
    descripcion: "Juncus - F: plantas robustas punzantes o menores",
    opcionA: {
      label: "Plantas muy robustas, con hojas cilindricas rigidas y punzantes, formando matas densas de 1-1,5 m; flores numerosas en grupos de 4-6 ordenados en antelas",
      keyStep: "F",
      especieId: "juncus_acutus"
    },
    opcionA_prima: {
      label: "Plantas menores, con tallos y hojas no punzantes; flores en capitulos",
      keyStep: "F'",
      nextNodeId: "juncus_g"
    }
  },

  juncus_g: {
    id: "juncus_g",
    milestone: "Juncus",
    manualPage: 139,
    descripcion: "Juncus - G: forma y tamano de las cabezuelas",
    opcionA: {
      label: "Cabezuelas esfericas, globosas, multifloras, de 7-10 mm, agrupadas en antela terminal; hojas cilindricas huecas con tabiques transversales",
      keyStep: "G",
      especieId: "juncus_densiflorus"
    },
    opcionA_prima: {
      label: "Cabezuelas hemisfericas, paucifloras, de 3-5 mm, agrupadas en antelas; hojas tubulosas, comprimidas, septadas",
      keyStep: "G'",
      especieId: "juncus_microcephalus"
    }
  },

  // F': Menos de 6 piezas de perigonio
  herbaceae_b_c_f_prima: {
    id: "herbaceae_b_c_f_prima",
    descripcion: "¿Cómo son las plantas?",
    opcionA: {
      label: "Plantas robustas, erectas, con hojas en forma de sable. Flores en espigas muy densas",
      familia: "11. Typhaceae",
      nextNodeId: "typhaceae_a"
    },
    opcionA_prima: {
      label: "Plantas acuáticas, flotantes o sumergidas",
      nextNodeId: "herbaceae_b_c_f_prima_k"
    }
  },

  herbaceae_b_c_f_prima_k: {
    id: "herbaceae_b_c_f_prima_k",
    descripcion: "¿Cómo son las hojas?",
    opcionA: {
      label: "Hojas anchas, crasas, en rosetas. Plantas flotantes sin tallo",
      familia: "20. Araceae",
      nextNodeId: "araceae"
    },
    opcionA_prima: {
      label: "Hojas herbáceas a lo largo de tallos alargados",
      familia: "12. Potamogetonaceae",
      nextNodeId: "potamogetonaceae_a"
    }
  },

  araceae: {
    id: "araceae",
    milestone: "Araceae",
    manualPage: 128,
    descripcion: "Araceae: flores en espadices simples, protegidos por una espata; en el manual se trata Pistia como genero flotante.",
    opcionA: {
      label: "Genero Pistia; especie unica tratada en el manual",
      keyStep: "1",
      especieId: "pistia_stratiotes"
    },
    opcionA_prima: {
      label: "Genero Pistia; especie unica tratada en el manual",
      keyStep: "1",
      especieId: "pistia_stratiotes"
    },
    especie: {
      id: "pistia_stratiotes",
      nombreCientifico: "Pistia stratiotes",
      nombreVulgar: "Repollito de agua",
      familia: "20. Araceae",
      descripcion: "Plantita flotante, estolonifera, con hojas en roseta, sesiles, crasas y acanaladas longitudinalmente.",
      caracteristicas: "Flores desnudas unisexuales en un espadice corto, parcialmente soldado a la espata; hojas anchamente espatuladas de unos 5 cm por 3 cm, con abundante aerenquima; estolones horizontales con pequenas plantitas terminales.",
      distribucion: "Regiones calidas del globo; muy comun en arroyos de corriente suave del Delta y de la ribera platense.",
      imagen: ""
    }
  },

  typhaceae_a: {
    id: "typhaceae_a",
    milestone: "Typhaceae",
    manualPage: 39,
    descripcion: "Typhaceae - A: ¿las flores femeninas tienen brácteas y cómo es el polen?",
    opcionA: {
      label: "Flores femeninas sin brácteas; polen en tétradas",
      keyStep: "A",
      especieId: "typha_latifolia"
    },
    opcionA_prima: {
      label: "Flores femeninas con brácteas; polen pulverulento",
      keyStep: "A'",
      especieId: "typha_angustifolia"
    }
  },

  potamogetonaceae_a: {
    id: "potamogetonaceae_a",
    milestone: "Potamogetonaceae",
    manualPage: 39,
    descripcion: "Potamogetonaceae - A: ¿cómo son las flores?",
    opcionA: {
      label: "Flores hermafroditas, agrupadas en espigas",
      keyStep: "A",
      nextNodeId: "potamogeton_a"
    },
    opcionA_prima: {
      label: "Flores diclinas, monoicas, solitarias o en cimas",
      keyStep: "A'",
      especieId: "zannichellia_palustris"
    }
  },

  potamogeton_a: {
    id: "potamogeton_a",
    milestone: "Potamogeton",
    manualPage: 41,
    descripcion: "Potamogeton - A: ¿cómo son las hojas?",
    opcionA: {
      label: "Hojas, al menos las superiores, elípticas y anchas",
      keyStep: "A",
      nextNodeId: "potamogeton_b"
    },
    opcionA_prima: {
      label: "Todas las hojas estrechamente lineales",
      keyStep: "A'",
      nextNodeId: "potamogeton_c"
    }
  },

  potamogeton_b: {
    id: "potamogeton_b",
    milestone: "Potamogeton",
    manualPage: 41,
    descripcion: "Potamogeton - B: con hojas elípticas, ¿cómo son las hojas y espigas?",
    opcionA: {
      label: "Hojas nadantes obovadas, redondeadas en el ápice; hojas sumergidas lineales; espigas cortas de 4-6 flores",
      keyStep: "B",
      especieId: "potamogeton_spirilliformis"
    },
    opcionA_prima: {
      label: "Todas las hojas elípticas, plurinervadas, atenuadas en largo pecíolo; espigas densas plurifloras",
      keyStep: "B'",
      especieId: "potamogeton_ferrugineus"
    }
  },

  potamogeton_c: {
    id: "potamogeton_c",
    milestone: "Potamogeton",
    manualPage: 41,
    descripcion: "Potamogeton - C: con hojas lineales, ¿son envainadoras?",
    opcionA: {
      label: "Hojas no envainadoras, sin lígula",
      keyStep: "C",
      nextNodeId: "potamogeton_d"
    },
    opcionA_prima: {
      label: "Hojas envainadoras, con lígula tenue en la unión de la vaina con la hoja",
      keyStep: "C'",
      especieId: "potamogeton_striatus"
    }
  },

  potamogeton_d: {
    id: "potamogeton_d",
    milestone: "Potamogeton",
    manualPage: 41,
    descripcion: "Potamogeton - D: con hojas no envainadoras, ¿cuál es el ancho de la hoja?",
    opcionA: {
      label: "Hojas de más de 2,5 mm de ancho",
      keyStep: "D",
      nextNodeId: "potamogeton_e"
    },
    opcionA_prima: {
      label: "Hojas lineales muy estrechas, de menos de 2 mm de ancho",
      keyStep: "D'",
      especieId: "potamogeton_pusillus"
    }
  },

  potamogeton_e: {
    id: "potamogeton_e",
    milestone: "Potamogeton",
    manualPage: 41,
    descripcion: "Potamogeton - E: con hojas de más de 2,5 mm, ¿cómo son hojas, estípulas y espigas?",
    opcionA: {
      label: "Hojas de 5-11 cm por 3-10 mm, agudas; estípulas de 1,8-2,4 cm; espigas paucifloras de 12-15 mm",
      keyStep: "E",
      especieId: "potamogeton_gayii"
    },
    opcionA_prima: {
      label: "Hojas de 4-6 cm por 3-4 mm; estípulas de 1 cm; espigas 4-floras de 7 mm",
      keyStep: "E'",
      especieId: "potamogeton_uruguayensis"
    }
  },

  scheuchzeriaceae_a: {
    id: "scheuchzeriaceae_a",
    milestone: "Scheuchzeriaceae",
    manualPage: 43,
    descripcion: "Scheuchzeriaceae - A: ¿las flores tienen perigonio y cómo se agrupan?",
    opcionA: {
      label: "Flores con perigonio, hermafroditas, en espigas o racimos laxos",
      keyStep: "A",
      nextNodeId: "triglochin_a"
    },
    opcionA_prima: {
      label: "Flores desnudas, polígamas, en espigas densas",
      keyStep: "A'",
      especieId: "lilaea_scilloides"
    }
  },

  triglochin_a: {
    id: "triglochin_a",
    milestone: "Triglochin",
    manualPage: 43,
    descripcion: "Triglochin - A: ¿cómo son los frutos y el hábito?",
    opcionA: {
      label: "Frutos lineales de 7-8 mm; hierba perenne con rizoma corto y estolones terminados en bulbillos",
      keyStep: "A",
      especieId: "triglochin_palustris"
    },
    opcionA_prima: {
      label: "Frutos con carpelos semicirculares comprimidos; hierba perenne rizomatosa",
      keyStep: "A'",
      especieId: "triglochin_striata"
    }
  },

  // C': Flores con cáliz y corola
  herbaceae_c_prima: {
    id: "herbaceae_c_prima",
    descripcion: "¿Cuántos estambres fértiles hay?",
    opcionA: {
      label: "Flores con un solo estambre fértil",
      nextNodeId: "herbaceae_c_prima_l"
    },
    opcionA_prima: {
      label: "Flores con más de dos estambres",
      nextNodeId: "herbaceae_c_prima_l_prima"
    }
  },

  // L: Un estambre
  herbaceae_c_prima_l: {
    id: "herbaceae_c_prima_l",
    descripcion: "¿Cómo es el estambre?",
    opcionA: {
      label: "Estambre soldado con el pistilo (ginostemio). Polen en polinias",
      familia: "33. Orchidaceae",
      nextNodeId: "orchidaceae_a"
    },
    opcionA_prima: {
      label: "Estambre no soldado con el pistilo. Polen no en polinias",
      nextNodeId: "herbaceae_c_prima_l_m_prima"
    }
  },

  herbaceae_c_prima_l_m_prima: {
    id: "herbaceae_c_prima_l_m_prima",
    descripcion: "¿Cómo es la antera?",
    opcionA: {
      label: "Estambre con antera bilocular",
      familia: "30. Zingiberaceae",
      especieId: "hedychium_coronarium"
    },
    opcionA_prima: {
      label: "Estambre con antera unilocular",
      nextNodeId: "herbaceae_c_prima_l_m_prima_n_prima"
    }
  },

  herbaceae_c_prima_l_m_prima_n_prima: {
    id: "herbaceae_c_prima_l_m_prima_n_prima",
    descripcion: "¿Cuántos óvulos hay en las cavidades del ovario?",
    opcionA: {
      label: "Cavidades del ovario con muchos óvulos",
      familia: "31. Cannaceae",
      nextNodeId: "cannaceae_a"
    },
    opcionA_prima: {
      label: "Cavidades del ovario con un solo óvulo",
      familia: "32. Marantaceae",
      nextNodeId: "marantaceae_a"
    }
  },

  cannaceae_a: {
    id: "cannaceae_a",
    milestone: "Cannaceae",
    manualPage: 155,
    descripcion: "Canna - A: forma y color de las hojas",
    opcionA: {
      label: "Hojas largamente lanceoladas, glaucas, de hasta 50 cm por 10-15 cm; racimos simples; flores amarillas o rojas",
      keyStep: "A",
      especieId: "canna_glauca"
    },
    opcionA_prima: {
      label: "Hojas elipticas, verdes, de hasta 50 cm por 20-25 cm; racimos simples; flores grandes, rojas",
      keyStep: "A'",
      especieId: "canna_indica"
    }
  },

  marantaceae_a: {
    id: "marantaceae_a",
    milestone: "Marantaceae",
    manualPage: 156,
    descripcion: "Thalia - A: tipo de panoja y hojas",
    opcionA: {
      label: "Flores en panojas laxas, azules; hierba de hasta 2 m; hojas largamente pecioladas, las basales ovado-oblongas de hasta 40 cm o mas",
      keyStep: "A",
      especieId: "thalia_geniculata"
    },
    opcionA_prima: {
      label: "Flores en panojas contraidas, espiciformes; hierbas de 1,5-2 m; hojas ovado-oblongas de cerca de 50 cm",
      keyStep: "A'",
      especieId: "thalia_multiflora"
    }
  },

  orchidaceae_a: {
    id: "orchidaceae_a",
    milestone: "Orchidaceae",
    manualPage: 157,
    descripcion: "Orchidaceae - A: habito de la planta",
    opcionA: {
      label: "Plantas terrestres, con tallos normales",
      keyStep: "A",
      nextNodeId: "orchidaceae_b"
    },
    opcionA_prima: {
      label: "Plantas epifitas, con tallos engrosados, bulbiformes",
      keyStep: "A'",
      especieId: "oncidium_bifolium"
    }
  },

  orchidaceae_b: {
    id: "orchidaceae_b",
    milestone: "Orchidaceae",
    manualPage: 157,
    descripcion: "Orchidaceae - B: espolon o menton del labelo",
    opcionA: {
      label: "Flores con un espolon hueco en la base del labelo, o con un menton prominente formado por la base de los sepalos",
      keyStep: "B",
      nextNodeId: "orchidaceae_c"
    },
    opcionA_prima: {
      label: "Flores sin espolon ni menton conspicuo",
      keyStep: "B'",
      nextNodeId: "orchidaceae_e"
    }
  },

  orchidaceae_c: {
    id: "orchidaceae_c",
    milestone: "Orchidaceae",
    manualPage: 157,
    descripcion: "Orchidaceae - C: longitud del espolon o menton",
    opcionA: {
      label: "Flores con espolon de varios centimetros",
      keyStep: "C",
      nextNodeId: "habenaria_a"
    },
    opcionA_prima: {
      label: "Flores con espolon o menton de menos de 1 cm",
      keyStep: "C'",
      nextNodeId: "orchidaceae_d"
    }
  },

  orchidaceae_d: {
    id: "orchidaceae_d",
    milestone: "Orchidaceae",
    manualPage: 157,
    descripcion: "Orchidaceae - D: origen de las raices",
    opcionA: {
      label: "Raices fasciculadas en la base del tallo; flores con menton",
      keyStep: "D",
      especieId: "pelexia_bonariensis"
    },
    opcionA_prima: {
      label: "Raices emergiendo de las articulaciones inferiores del tallo; flores con espolon corto",
      keyStep: "D'",
      especieId: "physurus_platensis"
    }
  },

  orchidaceae_e: {
    id: "orchidaceae_e",
    milestone: "Orchidaceae",
    manualPage: 157,
    descripcion: "Orchidaceae - E: sepalos laterales",
    opcionA: {
      label: "Sepalos laterales multifidos o fimbriados",
      keyStep: "E",
      especieId: "bipinnula_biplumata"
    },
    opcionA_prima: {
      label: "Sepalos laterales enteros",
      keyStep: "E'",
      nextNodeId: "orchidaceae_f"
    }
  },

  orchidaceae_f: {
    id: "orchidaceae_f",
    milestone: "Orchidaceae",
    manualPage: 157,
    descripcion: "Orchidaceae - F: tamano de las flores",
    opcionA: {
      label: "Flores grandes, de mas de 1,5 cm de largo",
      keyStep: "F",
      especieId: "chloraea_membranacea"
    },
    opcionA_prima: {
      label: "Flores pequenas, de menos de 1 cm de largo",
      keyStep: "F'",
      nextNodeId: "orchidaceae_g"
    }
  },

  orchidaceae_g: {
    id: "orchidaceae_g",
    milestone: "Orchidaceae",
    manualPage: 157,
    descripcion: "Orchidaceae - G: hojas basales durante la floracion",
    opcionA: {
      label: "Plantas sin hojas basales al llegar a la floracion; tallos cubiertos de vainas foliares herbaceas o membranaceas",
      keyStep: "G",
      especieId: "brachystele_dilatata"
    },
    opcionA_prima: {
      label: "Plantas con hojas en roseta basal y tallos escapiformes",
      keyStep: "G'",
      especieId: "cyclopogon_elatus"
    }
  },

  habenaria_a: {
    id: "habenaria_a",
    milestone: "Habenaria",
    manualPage: 157,
    descripcion: "Habenaria - A: petalos y labelo",
    opcionA: {
      label: "Petalos 2-3-partidos; segmento anterior apenas mas largo que el posterior; labelo trifido, con el segmento central poco mas corto que los laterales; espolon de 5-7 cm",
      keyStep: "A",
      especieId: "habenaria_bractescens"
    },
    opcionA_prima: {
      label: "Petalos bifidos; segmento anterior por lo menos dos veces tan largo como el posterior; segmentos laterales del labelo filiformes, dos veces mas largos que el central; espolon de 13 cm",
      keyStep: "A'",
      especieId: "habenaria_gourlieana"
    }
  },

  // L': Más estambres
  herbaceae_c_prima_l_prima: {
    id: "herbaceae_c_prima_l_prima",
    descripcion: "¿Dónde viven las plantas?",
    opcionA: {
      label: "Plantas acuáticas, flotantes o sumergidas",
      nextNodeId: "herbaceae_c_prima_l_prima_p"
    },
    opcionA_prima: {
      label: "Plantas terrestres o de lugares pantanosos",
      nextNodeId: "herbaceae_c_prima_l_prima_p_prima"
    }
  },

  // P: Acuáticas
  herbaceae_c_prima_l_prima_p: {
    id: "herbaceae_c_prima_l_prima_p",
    descripcion: "¿Cómo son las flores?",
    opcionA: {
      label: "Flores zigomorfas, azules o rosadas. Ovario súpero, trilocular",
      familia: "21. Pontederiaceae",
      nextNodeId: "pontederiaceae_a"
    },
    opcionA_prima: {
      label: "Flores actinomorfas, blancas o amarillas",
      nextNodeId: "herbaceae_c_prima_l_prima_p_q_prima"
    }
  },

  herbaceae_c_prima_l_prima_p_q_prima: {
    id: "herbaceae_c_prima_l_prima_p_q_prima",
    descripcion: "¿Dónde está el ovario?",
    opcionA: {
      label: "Ovario súpero",
      familia: "15. Butomaceae",
      especieId: "hydrocleis_nymphoides"
    },
    opcionA_prima: {
      label: "Ovario ínfero",
      familia: "16. Hydrocharitaceae",
      nextNodeId: "hydrocharitaceae_a"
    }
  },

  hydrocharitaceae_a: {
    id: "hydrocharitaceae_a",
    milestone: "Hydrocharitaceae",
    manualPage: 47,
    descripcion: "Hydrocharitaceae - A: ¿la planta es flotante o sumergida?",
    opcionA: {
      label: "Plantas flotantes; hojas pecioladas con lámina elíptico-acorazonada",
      keyStep: "A",
      especieId: "hydromystria_stolonifera"
    },
    opcionA_prima: {
      label: "Plantas sumergidas; hojas sésiles, lineales",
      keyStep: "A'",
      nextNodeId: "elodea_a"
    }
  },

  pontederiaceae_a: {
    id: "pontederiaceae_a",
    milestone: "Pontederiaceae",
    manualPage: 136,
    descripcion: "Pontederiaceae - A: numero de estambres y ovario",
    opcionA: {
      label: "Estambres 6",
      keyStep: "A",
      nextNodeId: "pontederiaceae_b"
    },
    opcionA_prima: {
      label: "Estambres 3; ovario 3-locular; caracteres de Heteranthera",
      keyStep: "A'",
      especieId: "heteranthera_peduncularis"
    }
  },

  pontederiaceae_b: {
    id: "pontederiaceae_b",
    milestone: "Pontederiaceae",
    manualPage: 136,
    descripcion: "Pontederiaceae - B: ovario y fruto",
    opcionA: {
      label: "Ovario 3-locular; fruto capsula dehiscente polisperma; caracteres de Eichhornia",
      keyStep: "B",
      nextNodeId: "eichhornia_a"
    },
    opcionA_prima: {
      label: "Ovario unilocular; fruto utriculo uniseminado; caracteres de Pontederia",
      keyStep: "B'",
      nextNodeId: "pontederia_a"
    }
  },

  eichhornia_a: {
    id: "eichhornia_a",
    milestone: "Eichhornia",
    manualPage: 136,
    descripcion: "Eichhornia - A: peciolos y tipo de tallo",
    opcionA: {
      label: "Hojas con peciolos muy gruesos, casi globosos, llenos de aerenquima; lamina anchamente eliptica o reniforme; plantas en rosetas que emiten estolones",
      keyStep: "A",
      especieId: "eichhornia_crassipes"
    },
    opcionA_prima: {
      label: "Hojas con peciolos alargados, poco engrosados; lamina orbicular de 8-10 cm; plantas con tallos largos flotantes",
      keyStep: "A'",
      especieId: "eichhornia_azurea"
    }
  },

  pontederia_a: {
    id: "pontederia_a",
    milestone: "Pontederia",
    manualPage: 138,
    descripcion: "Pontederia - A: plantas palustres erectas o flotantes",
    opcionA: {
      label: "Plantas palustres, erectas, con rizomas gruesos; hojas largamente pecioladas; espigas de 10-25 cm; utriculos con 6 costillas rugosas",
      keyStep: "A",
      especieId: "pontederia_cordata"
    },
    opcionA_prima: {
      label: "Plantas flotantes, con tallos tendidos; hojas con lamina orbicular; espiga densa de 5 cm con 30-70 flores; utriculo con 12 aristas espinulosas",
      keyStep: "A'",
      especieId: "pontederia_rotundifolia"
    }
  },

  elodea_a: {
    id: "elodea_a",
    milestone: "Elodea",
    manualPage: 48,
    descripcion: "Elodea - A: ¿cómo son las hojas y flores?",
    opcionA: {
      label: "Hojas opuestas o en verticilos de 3, lineal-lanceoladas, de 1,5-2,5 mm de ancho; flores pequeñas blanquecinas",
      keyStep: "A",
      especieId: "elodea_callitrichoides"
    },
    opcionA_prima: {
      label: "Hojas en verticilos de 4, raramente 6, de más de 2,5 mm de ancho; flores grandes blancas emergidas",
      keyStep: "A'",
      especieId: "elodea_densa"
    }
  },

  // P': Terrestres
  herbaceae_c_prima_l_prima_p_prima: {
    id: "herbaceae_c_prima_l_prima_p_prima",
    descripcion: "¿Cómo es el gineceo?",
    opcionA: {
      label: "Gineceo dialicarpelar. Hojas largamente pecioladas, ovadas o sagitadas",
      familia: "14. Alismataceae",
      nextNodeId: "alismataceae_a"
    },
    opcionA_prima: {
      label: "Gineceo gamocarpelar",
      nextNodeId: "herbaceae_c_prima_l_prima_p_prima_s_prima"
    }
  },

  alismataceae_a: {
    id: "alismataceae_a",
    milestone: "Alismataceae",
    manualPage: 45,
    descripcion: "Alismataceae - A: ¿las flores son hermafroditas o diclinas?",
    opcionA: {
      label: "Flores hermafroditas; hojas elípticas o lanceoladas",
      keyStep: "A",
      nextNodeId: "echinodorus_a"
    },
    opcionA_prima: {
      label: "Flores diclinas; hojas sagitadas",
      keyStep: "A'",
      especieId: "sagittaria_montevidensis"
    }
  },

  echinodorus_a: {
    id: "echinodorus_a",
    milestone: "Echinodorus",
    manualPage: 45,
    descripcion: "Echinodorus - A: ¿cómo es el porte y las hojas?",
    opcionA: {
      label: "Plantas robustas, de 0,5-1,5 m; hojas grandes, largamente pecioladas, anchamente elípticas u ovadas",
      keyStep: "A",
      nextNodeId: "echinodorus_b"
    },
    opcionA_prima: {
      label: "Plantas pequeñas; hojas arrosetadas, elíptico-lanceoladas, de 4-7 cm",
      keyStep: "A'",
      especieId: "echinodorus_aschersonianus"
    }
  },

  echinodorus_b: {
    id: "echinodorus_b",
    milestone: "Echinodorus",
    manualPage: 45,
    descripcion: "Echinodorus - B: en plantas robustas, ¿cómo son las hojas e inflorescencias?",
    opcionA: {
      label: "Hojas con pequeños puntos y rayitas cortas translúcidas; inflorescencias ramificadas",
      keyStep: "B",
      especieId: "echinodorus_grandiflorus"
    },
    opcionA_prima: {
      label: "Hojas con rayitas translúcidas; inflorescencia frecuentemente simple",
      keyStep: "B'",
      especieId: "echinodorus_palaefolius"
    }
  },

  herbaceae_c_prima_l_prima_p_prima_s_prima: {
    id: "herbaceae_c_prima_l_prima_p_prima_s_prima",
    descripcion: "¿Dónde viven exactamente?",
    opcionA: {
      label: "Plantas de lugares pantanosos o inundados, con flores cigomorfas, azules o violáceas",
      familia: "24. Pontederiaceae",
      nextNodeId: "pontederiaceae_a"
    },
    opcionA_prima: {
      label: "Plantas terrestres o epífitas",
      nextNodeId: "herbaceae_c_prima_l_prima_p_prima_s_prima_t_prima"
    }
  },

  herbaceae_c_prima_l_prima_p_prima_s_prima_t_prima: {
    id: "herbaceae_c_prima_l_prima_p_prima_s_prima_t_prima",
    descripcion: "¿Son plantas epífitas?",
    opcionA: {
      label: "Plantas epífitas con hojas subuladas en roseta",
      familia: "22. Bromeliaceae",
      nextNodeId: "bromeliaceae_a"
    },
    opcionA_prima: {
      label: "Plantas terrícolas",
      nextNodeId: "herbaceae_c_prima_l_prima_p_prima_s_prima_t_prima_u_prima"
    }
  },

  bromeliaceae_a: {
    id: "bromeliaceae_a",
    milestone: "Bromeliaceae",
    manualPage: 132,
    descripcion: "Tillandsia - A: plantas con raices o sin raices",
    opcionA: {
      label: "Plantas sin raices; tallos largos, filiformes, colgantes, con hojas esparcidas de hasta 2 cm; flores solitarias cortamente pedunculadas",
      keyStep: "A",
      especieId: "tillandsia_usneoides"
    },
    opcionA_prima: {
      label: "Plantas con raices; tallos muy cortos; hojas en roseta",
      keyStep: "A'",
      nextNodeId: "bromeliaceae_b"
    }
  },

  bromeliaceae_b: {
    id: "bromeliaceae_b",
    milestone: "Tillandsia",
    manualPage: 133,
    descripcion: "Tillandsia - B: color y longitud del caliz",
    opcionA: {
      label: "Caliz rojo de unos 17 mm; petalos violeta de unos 28 mm; capsulas de 25 mm; hojas grisaceas acanaladas de cerca de 6 cm",
      keyStep: "B",
      especieId: "tillandsia_aeranthos"
    },
    opcionA_prima: {
      label: "Caliz amarillento o verdoso",
      keyStep: "B'",
      nextNodeId: "bromeliaceae_c"
    }
  },

  bromeliaceae_c: {
    id: "bromeliaceae_c",
    milestone: "Tillandsia",
    manualPage: 133,
    descripcion: "Tillandsia - C: petalos y escapo",
    opcionA: {
      label: "Petalos de 15-16 mm, con limbo eliptico de 6 mm, azules o violaceos; sepalos verdosos abajo y purpureos-amarillos arriba; escapos delgados con 1-3 flores subsesiles",
      keyStep: "C",
      especieId: "tillandsia_bandensis"
    },
    opcionA_prima: {
      label: "Petalos liguliformes de unos 7 mm por 1,5 mm, blancos o azules; sepalos verdosos o violaceos; escapo con 1-2 flores",
      keyStep: "C'",
      especieId: "tillandsia_recurvata"
    }
  },

  herbaceae_c_prima_l_prima_p_prima_s_prima_t_prima_u_prima: {
    id: "herbaceae_c_prima_l_prima_p_prima_s_prima_t_prima_u_prima",
    descripcion: "¿Dónde está el ovario?",
    opcionA: {
      label: "Ovario ínfero",
      nextNodeId: "herbaceae_c_prima_l_prima_p_prima_s_prima_t_prima_u_prima_v"
    },
    opcionA_prima: {
      label: "Ovario súpero",
      nextNodeId: "herbaceae_c_prima_l_prima_p_prima_s_prima_t_prima_u_prima_v_prima"
    }
  },

  // V: Ovario ínfero
  herbaceae_c_prima_l_prima_p_prima_s_prima_t_prima_u_prima_v: {
    id: "herbaceae_c_prima_l_prima_p_prima_s_prima_t_prima_u_prima_v",
    descripcion: "¿Cuántos estambres hay?",
    opcionA: {
      label: "Estambres 3",
      familia: "29. Iridaceae",
      nextNodeId: "iridaceae_a"
    },
    opcionA_prima: {
      label: "Estambres 6",
      familia: "27. Amaryllidaceae",
      nextNodeId: "amaryllidaceae_a"
    }
  },

  iridaceae_a: {
    id: "iridaceae_a",
    milestone: "Iridaceae",
    manualPage: 149,
    descripcion: "Iridaceae - A: presencia de bulbo o rizoma",
    opcionA: {
      label: "Planta con bulbo o rizoma; ramas del estilo opuestas a las anteras",
      keyStep: "A",
      nextNodeId: "iridaceae_b"
    },
    opcionA_prima: {
      label: "Plantas sin bulbo ni rizoma, con raices fasciculadas; ramas del estilo alternando con las anteras; continuar con Sisyrinchium en proximas tandas",
      keyStep: "A'",
      nextNodeId: "sisyrinchium_a"
    }
  },

  sisyrinchium_a: {
    id: "sisyrinchium_a",
    milestone: "Sisyrinchium",
    manualPage: 151,
    descripcion: "Sisyrinchium - A: color del perigonio",
    opcionA: {
      label: "Perigonio amarillo",
      keyStep: "A",
      nextNodeId: "sisyrinchium_b"
    },
    opcionA_prima: {
      label: "Perigonio azul, violaceo o blanco, a veces con estrias amarillas",
      keyStep: "A'",
      nextNodeId: "sisyrinchium_c"
    }
  },

  sisyrinchium_b: {
    id: "sisyrinchium_b",
    milestone: "Sisyrinchium",
    manualPage: 151,
    descripcion: "Sisyrinchium - B: pelos o glandulas del tubo estaminal",
    opcionA: {
      label: "Tubo estaminal sin pelos ni glandulas; espatas laxas a lo largo de la parte superior del tallo; perigonio de 7-8 mm",
      keyStep: "B",
      especieId: "sisyrinchium_megapotamicum"
    },
    opcionA_prima: {
      label: "Tubo estaminal con glandulas o pelos, especialmente en la base; inflorescencias laxas; perigonio de 6-9 mm",
      keyStep: "B'",
      especieId: "sisyrinchium_pachyrhizum"
    }
  },

  sisyrinchium_c: {
    id: "sisyrinchium_c",
    milestone: "Sisyrinchium",
    manualPage: 153,
    descripcion: "Sisyrinchium - C: plantas perennes robustas o anuales debiles",
    opcionA: {
      label: "Plantas perennes, robustas; flores numerosas; perigonio azul-violaceo de 10 mm; filamentos estaminales totalmente unidos",
      keyStep: "C",
      especieId: "sisyrinchium_platense"
    },
    opcionA_prima: {
      label: "Plantas anuales, debiles",
      keyStep: "C'",
      nextNodeId: "sisyrinchium_d"
    }
  },

  sisyrinchium_d: {
    id: "sisyrinchium_d",
    milestone: "Sisyrinchium",
    manualPage: 153,
    descripcion: "Sisyrinchium - D: longitud de union de los filamentos",
    opcionA: {
      label: "Filamentos de los estambres unidos solo en 1/4 a 1/3 de su longitud",
      keyStep: "D",
      nextNodeId: "sisyrinchium_e"
    },
    opcionA_prima: {
      label: "Filamentos de los estambres unidos en toda su longitud; espatas con 3-7 flores; perigonio violaceo o blanco de 5-6 mm",
      keyStep: "D'",
      especieId: "sisyrinchium_minus"
    }
  },

  sisyrinchium_e: {
    id: "sisyrinchium_e",
    milestone: "Sisyrinchium",
    manualPage: 153,
    descripcion: "Sisyrinchium - E: longitud del perigonio en plantas anuales",
    opcionA: {
      label: "Perigonio violaceo de 5-6 mm; flores pocas; capsulas de 3 mm",
      keyStep: "E",
      especieId: "sisyrinchium_micranthum"
    },
    opcionA_prima: {
      label: "Perigonio violaceo de 10-15 mm; espata terminal con 5-7 flores; capsulas de 3 mm",
      keyStep: "E'",
      especieId: "sisyrinchium_laxum"
    }
  },

  iridaceae_b: {
    id: "iridaceae_b",
    milestone: "Iridaceae",
    manualPage: 150,
    descripcion: "Iridaceae - B: plantas con bulbo o rizoma",
    opcionA: {
      label: "Plantas con bulbo",
      keyStep: "B",
      nextNodeId: "iridaceae_c"
    },
    opcionA_prima: {
      label: "Plantas con rizoma; caracteres de Iris",
      keyStep: "B'",
      especieId: "iris_pseudacorus"
    }
  },

  iridaceae_c: {
    id: "iridaceae_c",
    milestone: "Iridaceae",
    manualPage: 150,
    descripcion: "Iridaceae - C: forma del estilo y filamentos",
    opcionA: {
      label: "Estilo delgado abajo, engrosado arriba y dividido en 3 ramas cortas ramificadas; estambres mas cortos que los estigmas, con filamentos libres; caracteres de Cypella",
      keyStep: "C",
      nextNodeId: "cypella_a"
    },
    opcionA_prima: {
      label: "Estilo delgado, con 3 ramas filiformes bifidas o trifidas; estambres generalmente superando a los estigmas, con filamentos unidos formando un tubo; caracteres de Alophia",
      keyStep: "C'",
      especieId: "alophia_amoena"
    }
  },

  cypella_a: {
    id: "cypella_a",
    milestone: "Cypella",
    manualPage: 150,
    descripcion: "Cypella - A: color y tamano de tepalos",
    opcionA: {
      label: "Tepalos amarillo-anaranjados; exteriores obovados de 2,5-4 cm; capsulas claviformes de 12-20 mm; bulbo esferico de 12-15 mm",
      keyStep: "A",
      especieId: "cypella_herbertii"
    },
    opcionA_prima: {
      label: "Tepalos azul-plomizos; exteriores de 3,5-5 cm; capsulas de unos 5 cm; bulbo esferico de 2-2,5 cm",
      keyStep: "A'",
      especieId: "cypella_plumbea"
    }
  },

  amaryllidaceae_a: {
    id: "amaryllidaceae_a",
    milestone: "Amaryllidaceae",
    manualPage: 145,
    descripcion: "Amaryllidaceae - A: plantas rizomatosas o bulbiferas",
    opcionA: {
      label: "Plantas rizomatosas; caracteres de Hypoxis",
      keyStep: "A",
      especieId: "hypoxis_decumbens"
    },
    opcionA_prima: {
      label: "Plantas bulbiferas",
      keyStep: "A'",
      nextNodeId: "amaryllidaceae_b"
    }
  },

  amaryllidaceae_b: {
    id: "amaryllidaceae_b",
    milestone: "Amaryllidaceae",
    manualPage: 145,
    descripcion: "Amaryllidaceae - B: espata unica o dos espatas",
    opcionA: {
      label: "Espata unica, entera o bifida; flores solitarias, raramente 2",
      keyStep: "B",
      nextNodeId: "amaryllidaceae_c"
    },
    opcionA_prima: {
      label: "Espatas 2, libres hasta su base; flores 2-muchas ligeramente cigomorfas; continuar en proximas tandas",
      keyStep: "B'",
      nextNodeId: "amaryllidaceae_d"
    }
  },

  amaryllidaceae_c: {
    id: "amaryllidaceae_c",
    milestone: "Amaryllidaceae",
    manualPage: 145,
    descripcion: "Amaryllidaceae - C: espata entera o bifida",
    opcionA: {
      label: "Espata entera; flores erectas; estambres erectos; tepalos sin apendices escamiformes; caracteres de Zephyranthes",
      keyStep: "C",
      nextNodeId: "zephyranthes_a"
    },
    opcionA_prima: {
      label: "Espata bifida; flores algo inclinadas y ligeramente cigomorfas; estambres declinados; continuar con Habranthus en proximas tandas",
      keyStep: "C'",
      nextNodeId: "habranthus_a"
    }
  },

  amaryllidaceae_d: {
    id: "amaryllidaceae_d",
    milestone: "Amaryllidaceae",
    manualPage: 145,
    descripcion: "Amaryllidaceae - D: ancho de hojas en plantas con dos espatas",
    opcionA: {
      label: "Hojas lineal-ensiformes, de mas de 1 cm de ancho; caracteres de Amaryllis",
      keyStep: "D",
      especieId: "amaryllis_rutila"
    },
    opcionA_prima: {
      label: "Hojas estrechamente lineales, de menos de 1 cm de ancho; caracteres de Rhodophiala",
      keyStep: "D'",
      especieId: "rhodophiala_bifida"
    }
  },

  habranthus_a: {
    id: "habranthus_a",
    milestone: "Habranthus",
    manualPage: 147,
    descripcion: "Habranthus - A: color de flores",
    opcionA: {
      label: "Flores amarillas o anaranjadas; perigonio de 2-3 cm; bulbo ovoideo de unos 2 cm; hojas cortas, escasas, posteriores a la flor",
      keyStep: "A",
      especieId: "habranthus_andersonii"
    },
    opcionA_prima: {
      label: "Flores rosadas o blancas; tepalos de 3,5-7,5 cm",
      keyStep: "A'",
      nextNodeId: "habranthus_b"
    }
  },

  habranthus_b: {
    id: "habranthus_b",
    milestone: "Habranthus",
    manualPage: 147,
    descripcion: "Habranthus - B: hojas macizas o con cavidades",
    opcionA: {
      label: "Hojas estrechamente lineales, macizas; escapos de 15-20 cm; flores 1-2, rosadas, de 3,5-5 cm",
      keyStep: "B",
      especieId: "habranthus_gracilifolius"
    },
    opcionA_prima: {
      label: "Hojas lineales, de cerca de 4 mm de ancho, con cavidades longitudinales; escapos de 20-30 cm; flores generalmente 2, rosadas, de 4,5-7 cm",
      keyStep: "B'",
      especieId: "habranthus_robustus"
    }
  },

  zephyranthes_a: {
    id: "zephyranthes_a",
    milestone: "Zephyranthes",
    manualPage: 147,
    descripcion: "Zephyranthes - A: tamano de flor y cantidad de estambres",
    opcionA: {
      label: "Flor pequena; tepalos blancos, algo violaceos exteriormente, de 5-10 mm; estambres 3 y estaminodios 3; bulbos de 1-1,5 cm",
      keyStep: "A",
      especieId: "zephyranthes_minima"
    },
    opcionA_prima: {
      label: "Flor grande; tepalos de mas de 15 mm; estambres 6",
      keyStep: "A'",
      nextNodeId: "zephyranthes_b"
    }
  },

  zephyranthes_b: {
    id: "zephyranthes_b",
    milestone: "Zephyranthes",
    manualPage: 147,
    descripcion: "Zephyranthes - B: estigma trilobado o trifido",
    opcionA: {
      label: "Estigma trilobado; bulbos esfericos de unos 2 cm; escapos de 20-40 cm; espata de 2-2,5 cm; tepalos de 3-5 cm",
      keyStep: "B",
      especieId: "zephyranthes_candida"
    },
    opcionA_prima: {
      label: "Estigma trifido; bulbo ovoideo de unos 2 cm; escapo de 10-20 cm; tepalos de 3-5 cm",
      keyStep: "B'",
      especieId: "zephyranthes_mesochloa"
    }
  },

  // V': Ovario súpero
  herbaceae_c_prima_l_prima_p_prima_s_prima_t_prima_u_prima_v_prima: {
    id: "herbaceae_c_prima_l_prima_p_prima_s_prima_t_prima_u_prima_v_prima",
    descripcion: "¿Cómo es el perianthio?",
    opcionA: {
      label: "Cáliz y corola diferenciados",
      familia: "23. Commelinaceae",
      nextNodeId: "commelinaceae_a"
    },
    opcionA_prima: {
      label: "Cáliz y corola iguales, formando perigonio coralino",
      familia: "26. Liliaceae",
      nextNodeId: "liliaceae_a"
    }
  },

  commelinaceae_a: {
    id: "commelinaceae_a",
    milestone: "Commelinaceae",
    manualPage: 134,
    descripcion: "Commelinaceae - A: estambres fertiles y simetria floral",
    opcionA: {
      label: "Estambres fertiles 3; estaminodios 3; flores cigomorfas; caracteres de Commelina",
      keyStep: "A",
      nextNodeId: "commelina_a"
    },
    opcionA_prima: {
      label: "Estambres fertiles 6; flores actinomorfas",
      keyStep: "A'",
      nextNodeId: "commelinaceae_b"
    }
  },

  commelinaceae_b: {
    id: "commelinaceae_b",
    milestone: "Commelinaceae",
    manualPage: 134,
    descripcion: "Commelinaceae - B: longitud de los estambres",
    opcionA: {
      label: "Todos los estambres de igual longitud; caracteres de Tradescantia",
      keyStep: "B",
      especieId: "tradescantia_fluminensis"
    },
    opcionA_prima: {
      label: "Tres estambres con filamentos largos y tres con filamentos cortos; caracteres de Descantaria",
      keyStep: "B'",
      especieId: "descantaria_elongata"
    }
  },

  commelina_a: {
    id: "commelina_a",
    milestone: "Commelina",
    manualPage: 135,
    descripcion: "Commelina - A: ovulos y tipo de espata",
    opcionA: {
      label: "Ovario con loculos ventrales biovulados; capsulas con 5 semillas; espata plegada, con bordes no soldados; flores azules grandes",
      keyStep: "A",
      especieId: "commelina_nudiflora"
    },
    opcionA_prima: {
      label: "Ovario con todos los loculos uniovulados; capsula con 3 semillas; espata cuculada, con bordes parcialmente soldados; flores azules",
      keyStep: "A'",
      especieId: "commelina_virginica"
    }
  }
};

// Especies de Monocotiledoneae
const rawMonocotEspecies = {
  // Palmae
  arecastrum_romanzoffianum: {
    id: "arecastrum_romanzoffianum",
    nombreCientifico: "Arecastrum romanzoffianum",
    nombreVulgar: "Pindo; datil",
    familia: "19. Palmae",
    descripcion: "Palma de unos 10 m de alto, con estipe desnudo y anillado.",
    caracteristicas: "Hojas pinadas de unos 2,5 m; segmentos lineales, plegados y flaccidos, dispuestos en grupos de 2-5 a cada lado del raquis; ramas de la inflorescencia sinuosas; flores amarillo-crema; fruto globoso-ovoideo de 2 cm.",
    distribucion: "America austral calida; individuos aislados en el Delta del Parana y cultivada como ornamental.",
    imagen: ""
  },

  // Lemnaceae
  spirodella_intermedia: {
    id: "spirodella_intermedia",
    nombreCientifico: "Spirodella intermedia",
    nombreVulgar: "Spirodella",
    familia: "21. Lemnaceae",
    descripcion: "Planta acuatica diminuta, flotante, reducida a frondas asimetricas ovado-circulares.",
    caracteristicas: "Frondas de 4-7,5 mm por 3-6 mm y 2-3 mm de espesor, con 7-10 nervaduras; raices numerosas, fasciculadas, de 2-3 cm; inflorescencia en la bolsa reproductiva del lado menos desarrollado de la fronda.",
    distribucion: "Uruguay y norte y centro de la Argentina; comun en riachos del Delta y de la ribera del Plata.",
    imagen: ""
  },

  lemna_valdiviana: {
    id: "lemna_valdiviana",
    nombreCientifico: "Lemna valdiviana",
    nombreVulgar: "Lenteja de agua",
    familia: "21. Lemnaceae",
    descripcion: "Planta acuatica diminuta, flotante, con frondas planas o apenas convexas en la cara inferior.",
    caracteristicas: "Frondas oblongas de 2,5-3,5 mm por 1,5-2 mm, generalmente agrupadas de 2-3; raiz solitaria.",
    distribucion: "America; en aguas tranquilas, camalotales y pajonales del Delta y de la ribera.",
    imagen: ""
  },

  lemna_disperma: {
    id: "lemna_disperma",
    nombreCientifico: "Lemna disperma",
    nombreVulgar: "Lenteja de agua",
    familia: "21. Lemnaceae",
    descripcion: "Planta acuatica diminuta, flotante, de frondas fuertemente convexas o gibosas.",
    caracteristicas: "Frondas ovoideas alargadas de 1,7-2,5 mm por 0,9-1,6 mm, gruesas, ligeramente gibosas, con lagunas de aerenquima amplias y 3 nervaduras poco visibles; ovario con 1-2 ovulos; fruto monospermo.",
    distribucion: "Australia y Argentina; en aguas estancadas.",
    imagen: ""
  },

  lemna_parodiana: {
    id: "lemna_parodiana",
    nombreCientifico: "Lemna parodiana",
    nombreVulgar: "Lenteja de agua",
    familia: "21. Lemnaceae",
    descripcion: "Planta acuatica diminuta, flotante, de frondas anchas y gibosas.",
    caracteristicas: "Frondas ovado-circulares de 2-3 mm por 1,7-2,3 mm, con manchitas rojizas en la cara superior; cara inferior con grandes lagunas de aerenquima; generalmente agrupadas de 3-4; fruto monospermo.",
    distribucion: "Hallada hasta ahora en Sarandi, cerca de Buenos Aires.",
    imagen: ""
  },

  lemna_gibba: {
    id: "lemna_gibba",
    nombreCientifico: "Lemna gibba",
    nombreVulgar: "Lenteja de agua",
    familia: "21. Lemnaceae",
    descripcion: "Planta acuatica diminuta, flotante, de frondas ovadas u orbiculares.",
    caracteristicas: "Frondas de 3-5 mm por 2-4 mm, algo convexas arriba y muy gibosas abajo, sin manchas rojizas, con 3-5 nervaduras, agrupadas de a dos; raiz corta; ovario con 2-7 ovulos.",
    distribucion: "Cosmopolita; comun en aguas estancadas.",
    imagen: ""
  },

  wolffiella_oblonga: {
    id: "wolffiella_oblonga",
    nombreCientifico: "Wolffiella oblonga",
    nombreVulgar: "Wolffiella",
    familia: "21. Lemnaceae",
    descripcion: "Planta acuatica flotante, diminuta, sin raices, con frondas planas, delgadas, asimetricas y algo curvadas.",
    caracteristicas: "Frondas solitarias o en pares, largamente oblongas, de 1,7-4,5 mm por 0,5-1 mm, muy delgadas; bolsa prolifera solitaria en el extremo de la fronda; inflorescencia sin espata.",
    distribucion: "Aguas dulces tranquilas de America, desde Mexico a la Argentina y Chile.",
    imagen: ""
  },

  wolffia_columbiana: {
    id: "wolffia_columbiana",
    nombreCientifico: "Wolffia columbiana",
    nombreVulgar: "Wolffia",
    familia: "21. Lemnaceae",
    descripcion: "Planta acuatica diminuta, flotante, sin raices, con frondas gruesas mas o menos globulares.",
    caracteristicas: "Cara superior convexa y no punteada; fronda de 0,5-1 mm por 0,5-0,8 mm, sin celulas epidermicas pigmentadas; una sola bolsa prolifera infundibuliforme.",
    distribucion: "America; en charcas, estanques y ambientes semejantes.",
    imagen: ""
  },

  wolffia_papulifera: {
    id: "wolffia_papulifera",
    nombreCientifico: "Wolffia papulifera",
    nombreVulgar: "Wolffia",
    familia: "21. Lemnaceae",
    descripcion: "Planta acuatica diminuta, flotante, sin raices, con frondas gruesas y globulares.",
    caracteristicas: "Cara superior aplanada en el margen y con una papila central; frondas de 0,8-1,5 mm por 0,7-1 mm, con celulas epidermicas pigmentadas.",
    distribucion: "America calida; hallada en la ribera de Hudson, cerca de Buenos Aires.",
    imagen: ""
  },

  // Gramineae
  gramineae: {
    id: "gramineae",
    nombreCientifico: "Paspalum notatum Flüggé",
    nombreVulgar: "Pasto bahía",
    familia: "17. Gramineae",
    descripcion: "Gramínea perenne con tallos huecos y espiguillas.",
    caracteristicas: "Tallos huecos con nudos, vainas abiertas, inflorescencias en espigas.",
    distribucion: "Praderas de Buenos Aires y alrededores",
    imagen: ""
  },

  guadua_trinii: {
    id: "guadua_trinii",
    nombreCientifico: "Guadua trinii",
    nombreVulgar: "Tacuarazú; tacuara brava",
    familia: "17. Gramineae - Bambuseae",
    descripcion: "Bambú de rizomas gruesos y cañas leñosas de 6-10 m de alto.",
    caracteristicas: "Cañas huecas y débiles, con espinas rígidas y curvas en los nudos; hojas lanceoladas de 10-15 cm; panojas laxas y espiguillas de 2,5-3 cm.",
    distribucion: "Sur del Brasil y nordeste de la Argentina hasta el Río de la Plata; citada para Punta Lara.",
    imagen: ""
  },

  oryzeae: {
    id: "oryzeae",
    nombreCientifico: "Tribu Oryzeae",
    nombreVulgar: "Gramínea de Oryzeae",
    familia: "17. Gramineae",
    descripcion: "Rama de la clave de gramíneas con espiguillas unifloras y glumas rudimentarias o nulas.",
    caracteristicas: "Pálea 3-nervada, con una sola quilla, y androceo de 6 a 1 estambres.",
    distribucion: "Grupo pendiente de carga a nivel de géneros y especies.",
    imagen: ""
  },

  hordeae: {
    id: "hordeae",
    nombreCientifico: "Tribu Hordeae",
    nombreVulgar: "Gramínea de Hordeae",
    familia: "17. Gramineae",
    descripcion: "Gramíneas con inflorescencia en espiga dística y espiguillas a ambos lados del raquis.",
    caracteristicas: "Rama que en el manual conduce a géneros como Lolium, Hordeum, Secale y Triticum.",
    distribucion: "Grupo pendiente de carga a nivel de géneros y especies.",
    imagen: ""
  },

  chlorideae: {
    id: "chlorideae",
    nombreCientifico: "Tribu Chlorideae",
    nombreVulgar: "Gramínea de Chlorideae",
    familia: "17. Gramineae",
    descripcion: "Gramíneas con espigas unilaterales o dispuestas a lo largo de un eje principal.",
    caracteristicas: "Rama que en el manual conduce a géneros como Cynodon, Chloris, Eleusine y Spartina.",
    distribucion: "Grupo pendiente de carga a nivel de géneros y especies.",
    imagen: ""
  },

  aveneae: {
    id: "aveneae",
    nombreCientifico: "Tribu Aveneae",
    nombreVulgar: "Gramínea de Aveneae",
    familia: "17. Gramineae",
    descripcion: "Gramíneas con glumelas menores que las glumas y arista dorsal retorcida.",
    caracteristicas: "Rama que en el manual conduce a géneros como Avena, Danthonia, Koeleria y Holcus.",
    distribucion: "Grupo pendiente de carga a nivel de géneros y especies.",
    imagen: ""
  },

  agrostideae: {
    id: "agrostideae",
    nombreCientifico: "Tribu Agrostideae",
    nombreVulgar: "Gramínea de Agrostideae",
    familia: "17. Gramineae",
    descripcion: "Gramíneas de espiguillas unifloras con antecio fértil basal.",
    caracteristicas: "Rama que en el manual conduce a géneros como Agrostis, Polypogon, Stipa, Aristida y Sporobolus.",
    distribucion: "Grupo pendiente de carga a nivel de géneros y especies.",
    imagen: ""
  },

  phalarideae: {
    id: "phalarideae",
    nombreCientifico: "Tribu Phalarideae",
    nombreVulgar: "Gramínea de Phalarideae",
    familia: "17. Gramineae",
    descripcion: "Gramíneas con antecio fértil terminal y flores rudimentarias en la base.",
    caracteristicas: "Rama que en el manual conduce a Phalaris y Anthoxanthum.",
    distribucion: "Grupo pendiente de carga a nivel de géneros y especies.",
    imagen: ""
  },

  axonopus_compressus: {
    id: "axonopus_compressus",
    nombreCientifico: "Axonopus compressus",
    nombreVulgar: "Axonopus compressus",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne con tallos rastreros, estoloniferos, radicantes en los nudos.",
    caracteristicas: "Canas floriferas erectas de 23-63 cm; espigas generalmente 3, lineales, dos terminales y una algo mas baja; espiguillas eliptico-lanceoladas de 2 mm.",
    distribucion: "America calida; comun en el Delta y en la ribera platense. Forrajera.",
    imagen: ""
  },

  cenchrus_myosuroides: {
    id: "cenchrus_myosuroides",
    nombreCientifico: "Cenchrus myosuroides",
    nombreVulgar: "Cadillo",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne, robusta, de 80-150 cm de alto.",
    caracteristicas: "Cerdas involucrales delgadas, unidas solo en la base y cubiertas de pelitos retrorsos; racimos densos, espiciformes, de 10-25 cm.",
    distribucion: "America calida; citada para Campana y San Fernando.",
    imagen: ""
  },

  cenchrus_echinatus: {
    id: "cenchrus_echinatus",
    nombreCientifico: "Cenchrus echinatus",
    nombreVulgar: "Cenchrus echinatus",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba anual de 25-60 cm de alto.",
    caracteristicas: "Involucro con numerosas cerdas; las externas delgadas y las internas ensanchadas en la base, soldadas casi hasta la mitad, con pelos retrorsos; espiguillas agrupadas de a 4.",
    distribucion: "America calida; accidental en Palermo.",
    imagen: ""
  },

  cenchrus_pauciflorus: {
    id: "cenchrus_pauciflorus",
    nombreCientifico: "Cenchrus pauciflorus",
    nombreVulgar: "Roseta",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba anual, ascendente, de 20-90 cm de alto.",
    caracteristicas: "Involucro formado por espinas muy anchas en la base, abiertas, sin pelos retrorsos; racimos de 3-8 cm; espiguillas 2 en cada involucro.",
    distribucion: "America calida; muy comun en suelos arenosos.",
    imagen: ""
  },

  digitaria_sellowii: {
    id: "digitaria_sellowii",
    nombreCientifico: "Digitaria sellowii",
    nombreVulgar: "Digitaria sellowii",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne, cespitosa, de unos 50 cm de alto.",
    caracteristicas: "Hojas lineales, planas y pubescentes; panoja de 3-6 racimos espiciformes; espiguillas lanceoladas, velludas, de 4-5 mm.",
    distribucion: "Norte y centro de la Argentina y Uruguay; hallada en Campana y San Isidro.",
    imagen: ""
  },

  digitaria_insularis: {
    id: "digitaria_insularis",
    nombreCientifico: "Digitaria insularis",
    nombreVulgar: "Digitaria insularis",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne, cortamente rizomatosa, de alrededor de 1 m de alto.",
    caracteristicas: "Hojas planas; panoja formada por 10 a muchos racimos espiciformes; espiguillas lanceoladas, velludas, de 5-6 mm.",
    distribucion: "America tropical; rara en la region.",
    imagen: ""
  },

  digitaria_sanguinalis: {
    id: "digitaria_sanguinalis",
    nombreCientifico: "Digitaria sanguinalis",
    nombreVulgar: "Pasto de cuaresma; pata de gallina",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba anual, ascendente, con hojas planas.",
    caracteristicas: "Racimos espiciformes en numero variable, digitados en el apice de la cana, de 5-15 cm; espiguillas lanceoladas de unos 3 mm.",
    distribucion: "Europa; adventicia en America. Comun en jardines y rastrojos.",
    imagen: ""
  },

  digitaria_aequiglumis: {
    id: "digitaria_aequiglumis",
    nombreCientifico: "Digitaria aequiglumis",
    nombreVulgar: "Digitaria aequiglumis",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba anual con canas debiles de 30-60 cm de alto.",
    caracteristicas: "Hojas planas, estrechas; espiguillas de 3,5 mm o mas; gluma superior y lemma esteril iguales, acuminadas y velludas.",
    distribucion: "Uruguay y nordeste de la Argentina; en suelos humedos del Delta y de la ribera platense.",
    imagen: ""
  },

  digitaria_lanuginosa: {
    id: "digitaria_lanuginosa",
    nombreCientifico: "Digitaria lanuginosa var. cuyabensis",
    nombreVulgar: "Digitaria lanuginosa",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne de 40-80 cm de alto.",
    caracteristicas: "Hojas planas y velludas; espiguillas de menos de 3 mm; espigas 8 a muchas, debiles, de 7-11 cm, alternas y amontonadas en el apice.",
    distribucion: "America tropical; hallada unicamente en Puerto Nuevo.",
    imagen: ""
  },

  echinochloa_polystachya: {
    id: "echinochloa_polystachya",
    nombreCientifico: "Echinochloa polystachya",
    nombreVulgar: "Echinochloa polystachya",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne con tallos gruesos, ascendentes, estriados y glabros.",
    caracteristicas: "Hojas planas de 10-25 mm de ancho; panojas densas, verdosas o purpureas; espiguillas ovoideas de 4,5-7 mm. El manual menciona tambien la var. spectabilis, con nudos engrosados y setoso-hirsutos.",
    distribucion: "America tropical y subtropical; especie acuatica flotante, frecuente en los camalotales del Delta y de la ribera platense.",
    imagen: ""
  },

  echinochloa_helodes: {
    id: "echinochloa_helodes",
    nombreCientifico: "Echinochloa helodes",
    nombreVulgar: "Echinochloa helodes",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne con rizomas tuberculiformes y tallos ascendentes.",
    caracteristicas: "Nudos hirsutos; hojas planas de 6-10 mm de ancho; panojas laxas, nutantes y paucifloras; espiguillas lanceoladas de 6-7 mm.",
    distribucion: "Uruguay y nordeste de la Argentina; frecuente en suelos inundables.",
    imagen: ""
  },

  echinochloa_colonum: {
    id: "echinochloa_colonum",
    nombreCientifico: "Echinochloa colonum",
    nombreVulgar: "Echinochloa colonum",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba anual de 10-50 cm de alto, con hojas lineales y planas.",
    caracteristicas: "Espiguillas de 2-2,6 mm, ovoides, obtusas, rojizas o verdosas y muticas; panoja erecta, lineal, con ramas apretadas contra el raquis.",
    distribucion: "Viejo Mundo; adventicia en todo el globo. Comun en suelos modificados.",
    imagen: ""
  },

  echinochloa_crusgalli: {
    id: "echinochloa_crusgalli",
    nombreCientifico: "Echinochloa crusgalli",
    nombreVulgar: "Echinochloa crusgalli",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba anual de 30-100 cm de alto, con hojas planas y glabras.",
    caracteristicas: "Espiguillas ovoides, ensanchadas, espinulosas, de 2,8-3,7 mm por 1,7-2 mm; lemma esteril con arista de 3-30 mm; panojas piramidales densas.",
    distribucion: "Europa; adventicia en America. Comun en suelos modificados.",
    imagen: ""
  },

  echinochloa_cruspavonis: {
    id: "echinochloa_cruspavonis",
    nombreCientifico: "Echinochloa cruspavonis",
    nombreVulgar: "Echinochloa cruspavonis",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba anual de 1-2 m de alto, con hojas planas y anchas.",
    caracteristicas: "Espiguillas lanceoladas de 2,8-3,7 mm por 1-1,4 mm; lemma esteril con espinulas poco desarrolladas y arista de 2-15 mm; panojas oblongo-lanceoladas, nutantes.",
    distribucion: "America calida; muy comun en la ribera platense.",
    imagen: ""
  },

  eriochloa_montevidensis: {
    id: "eriochloa_montevidensis",
    nombreCientifico: "Eriochloa montevidensis",
    nombreVulgar: "Eriochloa montevidensis",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne, erecta, de 30-50 cm de alto.",
    caracteristicas: "Hojas amontonadas principalmente en la base, planas; racimos pocos; espiguillas lanceoladas de 3-5 mm; gluma y lemma esteril finamente pubescentes; lemma fertil aristulada.",
    distribucion: "Uruguay y nordeste de la Argentina; se halla en campos bajos y humedos.",
    imagen: ""
  },

  panicum_racemosum: {
    id: "panicum_racemosum",
    nombreCientifico: "Panicum racemosum",
    nombreVulgar: "Panicum racemosum",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne, rizomatosa, de 70-120 cm de alto.",
    caracteristicas: "Vainas retrorso-velludas y lamina convoluta; espiguillas de 6-8 mm, ovoideo-globosas, con largos pelos blancos; panojas largas, densas y subnutantes.",
    distribucion: "Sur del Brasil, Uruguay y nordeste de la Argentina; frecuente en dunas de Samborombon, litoral atlantico e isla Martin Garcia.",
    imagen: ""
  },

  panicum_elephantipes: {
    id: "panicum_elephantipes",
    nombreCientifico: "Panicum elephantipes",
    nombreVulgar: "Pasto camalote",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Planta robusta y flotante, con tallos gruesos ricos en aerenquima, radicantes en los nudos.",
    caracteristicas: "Hojas planas de 15-50 cm por 7-20 mm; panojas grandes y abiertas; espiguillas lanceoladas, acuminadas, de 4-5 mm.",
    distribucion: "America calida; muy comun en los camalotales del Delta y de la ribera platense.",
    imagen: ""
  },

  panicum_miliaceum: {
    id: "panicum_miliaceum",
    nombreCientifico: "Panicum miliaceum",
    nombreVulgar: "Mijo",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba terrestre anual, erecta o ascendente, de 20-100 cm de alto.",
    caracteristicas: "Hojas velludas o glabrescentes, planas; panojas laxas, generalmente parcialmente incluidas en la vaina superior; espiguillas ovado-lanceoladas de 4,5-5 mm.",
    distribucion: "Asia; cultivado por sus granos y a veces subespontaneo en suelos modificados y calles.",
    imagen: ""
  },

  panicum_grumosum: {
    id: "panicum_grumosum",
    nombreCientifico: "Panicum grumosum",
    nombreVulgar: "Paja mansa",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne, rizomatosa, robusta, de 1-2 m de alto.",
    caracteristicas: "Hojas glabras de 15-25 mm de ancho; panojas erectas, amplias, con numerosos racimos compuestos densos; espiguillas elipticas de 2,5 mm.",
    distribucion: "Sur del Brasil, Uruguay, Paraguay y nordeste de la Argentina; muy frecuente en suelos inundados del Delta y ribera del Plata.",
    imagen: ""
  },

  panicum_laxum: {
    id: "panicum_laxum",
    nombreCientifico: "Panicum laxum",
    nombreVulgar: "Panicum laxum",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne con tallos decumbentes en la base, radicantes y luego erectos, de 20-50 cm de alto.",
    caracteristicas: "Hojas lineales y glabras; panojas formadas por varios racimos contraidos; espiguillas de 1-1,5 mm, ovoideas, semiagudas y glabras.",
    distribucion: "Indias occidentales y America calida; hallada en Martin Garcia.",
    imagen: ""
  },

  panicum_fultum: {
    id: "panicum_fultum",
    nombreCientifico: "Panicum fultum",
    nombreVulgar: "Panicum fultum",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba erecta de 20-30 cm de alto.",
    caracteristicas: "Hojas lineal-lanceoladas, rigidas, redondeadas en la base; ligula formada por cilias; espiguillas ovoideas, obtusas, pubescentes, de 2,5-3 mm.",
    distribucion: "Paraguay, Uruguay y nordeste de la Argentina; citada para la isla Martin Garcia.",
    imagen: ""
  },

  panicum_milioides: {
    id: "panicum_milioides",
    nombreCientifico: "Panicum milioides",
    nombreVulgar: "Panicum milioides",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne de 30-60 cm de alto.",
    caracteristicas: "Hojas lineales y planas; panojas contraidas formadas por 10-25 racimos densos; espiguillas ovadas, agudas y glabras, de 1,8-2 mm.",
    distribucion: "Sur del Brasil, Uruguay y nordeste de la Argentina; comun en campos humedos.",
    imagen: ""
  },

  panicum_decipiens: {
    id: "panicum_decipiens",
    nombreCientifico: "Panicum decipiens",
    nombreVulgar: "Panicum decipiens",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba rizomatosa, ascendente, de 20-40 cm de alto.",
    caracteristicas: "Hojas lineales; panojas muy densas, espiciformes, con 4-10 racimos; espiguillas lanceoladas, agudas, glabras y rojizas, de 2,5-3 mm.",
    distribucion: "Sur del Brasil, Uruguay y nordeste de la Argentina; en suelos arenosos humedos del Delta y de la ribera platense.",
    imagen: ""
  },

  panicum_tricholaenoides: {
    id: "panicum_tricholaenoides",
    nombreCientifico: "Panicum tricholaenoides",
    nombreVulgar: "Panicum tricholaenoides",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Planta bambusoide, rizomatosa, de 1-3 m de alto.",
    caracteristicas: "Hojas con vainas coriaceas, glabras o pestanosas, y laminas lineales; panojas amplias de 25-30 cm con ramificaciones verticiladas; espiguillas anchamente ovoideas de 2,5 mm.",
    distribucion: "Uruguay y nordeste de la Argentina; hallada en los arenales de la Isla Santiago.",
    imagen: ""
  },

  panicum_capillare: {
    id: "panicum_capillare",
    nombreCientifico: "Panicum capillare",
    nombreVulgar: "Panicum capillare",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba anual, densamente hirsuta, erecta, de 20-80 cm de alto.",
    caracteristicas: "Hojas planas; panojas amplias y laxas; espiguillas ovoideo-lanceoladas, acuminadas, de unos 2 mm; gluma inferior aguda.",
    distribucion: "America del Norte; adventicia en la Argentina, en suelos modificados.",
    imagen: ""
  },

  panicum_dichotomiflorum: {
    id: "panicum_dichotomiflorum",
    nombreCientifico: "Panicum dichotomiflorum",
    nombreVulgar: "Panicum dichotomiflorum",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba anual o perenne segun la rama de la clave, laxamente pubescente o glabra, ascendente o erecta.",
    caracteristicas: "Hojas planas; panojas terminales y axilares, a menudo parcialmente incluidas en la vaina superior o tardiamente exertas; espiguillas estrechamente ovadas de 2-3,2 mm.",
    distribucion: "America calida; en lugares humedos.",
    imagen: ""
  },

  panicum_sabulorum: {
    id: "panicum_sabulorum",
    nombreCientifico: "Panicum sabulorum",
    nombreVulgar: "Panicum sabulorum",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne, ascendente, de unos 50 cm de alto.",
    caracteristicas: "Hojas lanceoladas, ensanchadas en la base, de mas de 6 cm; ligula pilosa; espiguillas obovadas, obtusas, laxamente pubescentes, de 2,5 mm.",
    distribucion: "Paraguay y nordeste de la Argentina; comun en el Delta y en la ribera del Plata.",
    imagen: ""
  },

  panicum_helobium: {
    id: "panicum_helobium",
    nombreCientifico: "Panicum helobium",
    nombreVulgar: "Panicum helobium",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne, ascendente, de unos 40 cm de alto.",
    caracteristicas: "Hojas lanceoladas, redondeadas o auriculadas en la base; espiguillas obtusas, de unos 2 mm, largamente pediceladas y glaberrimas; panojas difusas muy laxas.",
    distribucion: "America tropical, hasta el Delta del Parana.",
    imagen: ""
  },

  panicum_unilineatum: {
    id: "panicum_unilineatum",
    nombreCientifico: "Panicum unilineatum",
    nombreVulgar: "Panicum unilineatum",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne, tendida o ascendente.",
    caracteristicas: "Hojas lanceoladas, redondeadas y semiabrazadoras en la base, de 4-5 cm; espiguillas agudas, ovadas y glabras, de unos 2 mm; panojas cortas, paucispicadas, terminales y axilares.",
    distribucion: "Nordeste de la Argentina, hasta el Delta.",
    imagen: ""
  },

  panicum_gouini: {
    id: "panicum_gouini",
    nombreCientifico: "Panicum gouini",
    nombreVulgar: "Panicum gouini",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba con rizomas horizontales u oblicuos cundidores y tallos de unos 30 cm de alto.",
    caracteristicas: "Hojas angostas, a menudo convolutas; panojas pequenas, densas, algo purpureas; espiguillas de 2,2 mm por 1 mm; primera gluma triangular.",
    distribucion: "Sur de los Estados Unidos, Mexico, Uruguay y Argentina; frecuente en el cesped de la ribera platense.",
    imagen: ""
  },

  panicum_bergii: {
    id: "panicum_bergii",
    nombreCientifico: "Panicum bergii",
    nombreVulgar: "Paja voladora",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba cespitosa de cerca de 50 cm de alto.",
    caracteristicas: "Hojas de 1-3 mm, lineales, rigidas y pubescentes; panojas deltoideas, amplias y muy laxas; espiguillas ovoideas, acuminadas, glabras, de 2-2,5 mm.",
    distribucion: "Uruguay y nordeste de la Argentina; frecuente en la estepa climax.",
    imagen: ""
  },

  panicum_pilcomayense: {
    id: "panicum_pilcomayense",
    nombreCientifico: "Panicum pilcomayense",
    nombreVulgar: "Panicum pilcomayense",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba cespitosa de 50-100 cm de alto, ligeramente hirsuta o glabrescente.",
    caracteristicas: "Hojas de cerca de 5 mm de ancho; panojas amplias y difusas; espiguillas ovoideas, acuminadas, glabras, de 2,5 mm.",
    distribucion: "Paraguay y nordeste de la Argentina; hallada en Palermo.",
    imagen: ""
  },

  paspalum_repens: {
    id: "paspalum_repens",
    nombreCientifico: "Paspalum repens",
    nombreVulgar: "Paspalum repens",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne, flotante, con vainas dilatadas y esponjosas.",
    caracteristicas: "Tallos tendidos sobre el agua, radicantes en los nudos; inflorescencias con mas de 20 espigas; raquis membranaceo ancho terminado en punta delgada; espiguillas ovado-lanceoladas de unos 2 mm.",
    distribucion: "America calida; muy comun en los camalotales del Delta y de la ribera platense.",
    imagen: ""
  },

  paspalum_pumilum: {
    id: "paspalum_pumilum",
    nombreCientifico: "Paspalum pumilum",
    nombreVulgar: "Paspalum pumilum",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba terrestre de 15-40 cm de alto, con rizomas cortos y fuertes que forman matas compactas.",
    caracteristicas: "Inflorescencia con dos espigas geminadas en V; espiguillas elipticas u obovadas, de 1,8-2,3 mm por 1,1-1,3 mm, dispuestas en una sola serie; espigas de 4-7 cm.",
    distribucion: "America tropical y subtropical; comun en el cesped de la ribera.",
    imagen: ""
  },

  paspalum_notatum: {
    id: "paspalum_notatum",
    nombreCientifico: "Paspalum notatum var. latiflorum",
    nombreVulgar: "Paspalum notatum",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba terrestre de 30-100 cm de alto, con rizomas cortos y fuertes que forman matas compactas.",
    caracteristicas: "Espiguillas elipticas u obovadas, verde-violaceas, de 2,8-4 mm, dispuestas en dos hileras; espigas generalmente 2, a veces 3-4, de hasta 16 cm. El manual menciona tambien la var. saurae, con espiguillas menores.",
    distribucion: "America tropical y subtropical; comun en campos altos.",
    imagen: ""
  },

  paspalum_distichum: {
    id: "paspalum_distichum",
    nombreCientifico: "Paspalum distichum",
    nombreVulgar: "Gramilla dulce",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne terrestre, de menos de 25 cm de alto, con rizomas largos y profundos.",
    caracteristicas: "Espiguillas lanceoladas de 3-3,5 mm; gluma finamente pubescente y lemma esteril glabra; espigas desigualmente pedunculadas de 2-6 cm.",
    distribucion: "America tropical y subtropical; adventicia en otras regiones del globo. Comun en praderas humedas.",
    imagen: ""
  },

  paspalum_vaginatum: {
    id: "paspalum_vaginatum",
    nombreCientifico: "Paspalum vaginatum",
    nombreVulgar: "Paspalum vaginatum",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne terrestre, de menos de 25 cm de alto, con rizomas largos y profundos.",
    caracteristicas: "Espiguillas lanceoladas de 2,5-3,5 mm; gluma y lemma esteril glabras; espigas con pedicelos casi iguales.",
    distribucion: "America calida y templada; muy comun en suelos humedos.",
    imagen: ""
  },

  paspalum_plicatulum: {
    id: "paspalum_plicatulum",
    nombreCientifico: "Paspalum plicatulum",
    nombreVulgar: "Paspalum plicatulum",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba cespitosa de 30-90 cm de alto.",
    caracteristicas: "Espigas 3-6, alternadas, de 3-7 cm; espiguillas en dos series, ovado-elipticas, de 2,8-3 mm; gluma y lemma esteril glabras, membranaceas, castanas u olivaceas.",
    distribucion: "America calida; en la estepa climax.",
    imagen: ""
  },

  paspalum_nicorae: {
    id: "paspalum_nicorae",
    nombreCientifico: "Paspalum nicorae",
    nombreVulgar: "Paspalum nicorae",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba con largos rizomas horizontales, de 30-40 cm de alto.",
    caracteristicas: "Espigas 3-6, de 2,5-6 cm; espiguillas de color castano claro, elipticas, de unos 3 mm.",
    distribucion: "Uruguay y nordeste de la Argentina; en suelos arenosos del Dock Sur.",
    imagen: ""
  },

  paspalum_proliferum: {
    id: "paspalum_proliferum",
    nombreCientifico: "Paspalum proliferum",
    nombreVulgar: "Paspalum proliferum",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba cespitosa con estolones y canas floriferas de cerca de 50 cm de alto.",
    caracteristicas: "Inflorescencia con 6-8 espigas de 1,5-3 cm; espiguillas glabras, ovado-elipticas, de 2-2,5 mm.",
    distribucion: "Uruguay y nordeste de la Argentina; se halla en el Delta y en la ribera del Plata.",
    imagen: ""
  },

  paspalum_malacophyllum: {
    id: "paspalum_malacophyllum",
    nombreCientifico: "Paspalum malacophyllum var. linearifolium",
    nombreVulgar: "Paspalum malacophyllum",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba erecta, perenne, de 50-100 cm de alto.",
    caracteristicas: "Inflorescencia con 4-6 espigas delgadas de 4-5 cm; espiguillas verdosas, ovadas, de 1,5 mm.",
    distribucion: "Paraguay y nordeste de la Argentina; hallado en Palermo.",
    imagen: ""
  },

  paspalum_alcalinum: {
    id: "paspalum_alcalinum",
    nombreCientifico: "Paspalum alcalinum",
    nombreVulgar: "Paspalum alcalinum",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba cespitosa de 50 cm o mas de alto.",
    caracteristicas: "Espigas 3-7 de 3-5 cm; espiguillas de color castano claro, obovadas, corta y flojamente pubescentes, de 3-3,5 mm.",
    distribucion: "America calida; accidental en Palermo.",
    imagen: ""
  },

  paspalum_dilatatum: {
    id: "paspalum_dilatatum",
    nombreCientifico: "Paspalum dilatatum",
    nombreVulgar: "Pasto miel",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne de alrededor de 50 cm de alto.",
    caracteristicas: "Espigas 3-6, de 5-9 cm, inclinadas; espiguillas verdosas, en pares, ovadas, agudas, de 3-3,5 mm por 2-2,5 mm; gluma y lemma esteril pubescentes y pestanosas en el borde.",
    distribucion: "Region platense; comun en campos fertiles.",
    imagen: ""
  },

  paspalum_urvillei: {
    id: "paspalum_urvillei",
    nombreCientifico: "Paspalum urvillei",
    nombreVulgar: "Paspalum urvillei",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne de 1,5-2 m de alto.",
    caracteristicas: "Inflorescencia con 10-25 espigas; espiguillas verdosas, obovadas, agudas, de 2,3-2,6 mm.",
    distribucion: "America calida; muy frecuente en la ribera platense.",
    imagen: ""
  },

  paspalum_intermedium: {
    id: "paspalum_intermedium",
    nombreCientifico: "Paspalum intermedium",
    nombreVulgar: "Paspalum intermedium",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba cespitosa de 1 m o mas de alto.",
    caracteristicas: "Vainas foliares notablemente carenadas; espigas numerosas; espiguillas glabras, ovadas, de 2,5-2,8 mm por 1,5 mm.",
    distribucion: "Nordeste de la Argentina; accidental en Palermo.",
    imagen: ""
  },

  paspalum_quadrifarium: {
    id: "paspalum_quadrifarium",
    nombreCientifico: "Paspalum quadrifarium",
    nombreVulgar: "Paja colorada",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba cespitosa de 1-1,8 m de alto, con hojas largas y glabras.",
    caracteristicas: "Espigas ferruginosas, 15-25, de cerca de 7 cm; espiguillas ovado-lanceoladas, de 2-2,5 mm, en 4 hileras; gluma pubescente y lemma esteril casi glabra.",
    distribucion: "Uruguay y nordeste de la Argentina; en campos bajos.",
    imagen: ""
  },

  paspalum_exaltatum: {
    id: "paspalum_exaltatum",
    nombreCientifico: "Paspalum exaltatum",
    nombreVulgar: "Paspalum exaltatum",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne, densamente cespitosa, de 1,5-2 m de alto.",
    caracteristicas: "Inflorescencia con 12-30 espigas; espiguillas ovadas, agudas, de 3,3-3,7 mm; gluma lanceolada, apiculada, con pubescencia rala en el margen; hojas muy largas, de 1 cm de ancho.",
    distribucion: "Region platense; en suelos bajos inundables, Delta y ribera platense.",
    imagen: ""
  },

  paspalum_haumanii: {
    id: "paspalum_haumanii",
    nombreCientifico: "Paspalum haumanii",
    nombreVulgar: "Paspalum haumanii",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Planta densamente cespitosa, de 2-3 m de alto.",
    caracteristicas: "Inflorescencia piramidal con 40-80 espigas, de cerca de 50 cm; espiguillas lanceoladas, ferrugineas, de 3,5-4 mm por 1,5 mm; hojas de 1-1,5 m por 12-14 mm.",
    distribucion: "Uruguay y nordeste de la Argentina; frecuente en el Delta y en la ribera del Plata.",
    imagen: ""
  },

  paspalum: {
    id: "paspalum",
    nombreCientifico: "Paspalum sp.",
    nombreVulgar: "Paspalum",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Genero de Paniceae con espiguillas deprimidas, generalmente obtusas, solitarias o en pares, dispuestas en filas sobre un lado del raquis.",
    caracteristicas: "Rama parcialmente cargada; quedan pendientes las especies de inflorescencias no geminadas y otros grupos internos del genero.",
    distribucion: "Genero representado en la flora de los alrededores de Buenos Aires.",
    imagen: ""
  },

  pennisetum_villosum: {
    id: "pennisetum_villosum",
    nombreCientifico: "Pennisetum villosum",
    nombreVulgar: "Pennisetum villosum",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne, rizomatosa, baja.",
    caracteristicas: "Hojas lineales, plegadas y escabrosas; cerdas involucrales numerosas y plumosas, de hasta 25 mm; panojas cilindricas, densas, de 5-10 cm.",
    distribucion: "Africa; adventicia en America. En suelos modificados.",
    imagen: ""
  },

  pennisetum_latifolium: {
    id: "pennisetum_latifolium",
    nombreCientifico: "Pennisetum latifolium",
    nombreVulgar: "Pennisetum latifolium",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne, erecta, de 1,5-3 m de alto, con canas ramificadas.",
    caracteristicas: "Hojas lanceoladas y planas; cerdas involucrales simples, 8-12, de menos de 20 mm; panojas gruesas de 3-5 cm, inclinadas; espiguillas lanceoladas de 4-5 mm.",
    distribucion: "America austral; en matorrales de la ribera platense.",
    imagen: ""
  },

  setaria_geniculata: {
    id: "setaria_geniculata",
    nombreCientifico: "Setaria geniculata",
    nombreVulgar: "Setaria geniculata",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne, cespitosa, con tallos ascendentes de 30-40 cm de alto.",
    caracteristicas: "Cerdas involucrales mas de cinco; hojas escabrosas en el margen; panojas espiciformes; espiguillas de unos 2,5 mm.",
    distribucion: "America templado-calida; ubicua, principalmente en rastrojos y jardines.",
    imagen: ""
  },

  setaria_verticillata: {
    id: "setaria_verticillata",
    nombreCientifico: "Setaria verticillata",
    nombreVulgar: "Setaria verticillata",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba anual de 40-100 cm de alto.",
    caracteristicas: "Cerdas con pelos retrorsos, adherentes a la ropa; panoja densa, espiciforme, interrumpida en la base; espiguillas de 2 mm.",
    distribucion: "Europa; adventicia en America. Ubicua.",
    imagen: ""
  },

  setaria_viridis: {
    id: "setaria_viridis",
    nombreCientifico: "Setaria viridis",
    nombreVulgar: "Setaria viridis",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba anual de 20-40 cm de alto.",
    caracteristicas: "Panojas espiciformes cortas y gruesas, de 4-6 cm por 1-1,5 cm; eje de la panoja velludo; cerdas involucrales 1-3, largas; espiguillas de 2-2,5 mm.",
    distribucion: "Europa; adventicia en America. En ambientes diversos.",
    imagen: ""
  },

  setaria_argentina: {
    id: "setaria_argentina",
    nombreCientifico: "Setaria argentina",
    nombreVulgar: "Setaria argentina",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne robusta, de 60-100 cm de alto.",
    caracteristicas: "Hojas de hasta 16 cm por 12-15 mm; panojas espiciformes densas de 10-18 cm por 15-20 mm; espiguillas ovoides, verdosas y glabras, de 1,5-2 mm.",
    distribucion: "Bolivia, Paraguay y norte de la Argentina; frecuente a lo largo de las vias ferreas al norte de la Capital Federal.",
    imagen: ""
  },

  setaria_fiebrigii: {
    id: "setaria_fiebrigii",
    nombreCientifico: "Setaria fiebrigii",
    nombreVulgar: "Setaria fiebrigii",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne, cespitosa, de 50-150 cm de alto.",
    caracteristicas: "Hojas de unos 30 cm por 7 mm; panojas densas, espiciformes, de 8-10(-18) cm; eje escabroso; espiguillas globosas, glabras, de 1,8 mm.",
    distribucion: "Paraguay y nordeste de la Argentina; se halla al norte de la Capital Federal, hasta Palermo.",
    imagen: ""
  },

  setaria_caespitosa: {
    id: "setaria_caespitosa",
    nombreCientifico: "Setaria caespitosa",
    nombreVulgar: "Setaria caespitosa",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne, cespitosa, de 30-50 cm de alto.",
    caracteristicas: "Eje de la inflorescencia glabro o aspero; panoja densa, espiciforme; espiguillas ovoideas de 2 mm.",
    distribucion: "Uruguay y nordeste de la Argentina; se halla en la estepa climax y en las praderas de la ribera.",
    imagen: ""
  },

  setaria_vaginata: {
    id: "setaria_vaginata",
    nombreCientifico: "Setaria vaginata",
    nombreVulgar: "Cola de zorro",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne, cespitosa, de 50-70 cm de alto.",
    caracteristicas: "Eje de la inflorescencia pubescente; panojas espiciformes no muy densas, algo interrumpidas en la parte inferior, de 7-11 cm; espiguillas de unos 2 mm.",
    distribucion: "Sur del Brasil, Uruguay y nordeste de la Argentina; comun en la region.",
    imagen: ""
  },

  stenotaphrum_secundatum: {
    id: "stenotaphrum_secundatum",
    nombreCientifico: "Stenotaphrum secundatum",
    nombreVulgar: "Gramillon",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne, rastrera, con tallos comprimidos, ramosos y radicantes.",
    caracteristicas: "Espiguillas incrustadas sobre un lado de un raquis grueso y plano; espiguillas de 4-5 mm; hojas cortas y obtusas; espigas terminales y axilares.",
    distribucion: "America calida; comun en suelos bajos y humedos. Se utiliza para formar cesped.",
    imagen: ""
  },

  leptocoryphium_lanatum: {
    id: "leptocoryphium_lanatum",
    nombreCientifico: "Leptocoryphium lanatum",
    nombreVulgar: "Leptocoryphium lanatum",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne, erecta, de 50-100 cm de alto.",
    caracteristicas: "Hojas estrechas, a menudo involutas; panojas flojas y angostas; espiguillas lanceoladas, velludas, de unos 4 mm; gluma inferior ausente.",
    distribucion: "America calida; norte de la provincia de Buenos Aires.",
    imagen: ""
  },

  ichnanthus_pallens: {
    id: "ichnanthus_pallens",
    nombreCientifico: "Ichnanthus pallens",
    nombreVulgar: "Ichnanthus pallens",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne, rastrera o ascendente.",
    caracteristicas: "Hojas anchamente lanceoladas y glabras; espiguillas lanceoladas de 3,5-4 mm; gluma inferior casi tan larga como la superior; lemma fertil con dos excavaciones laterales basales.",
    distribucion: "America tropical; rara en la region, citada para la Isla Martin Garcia.",
    imagen: ""
  },

  hymenachne_amplexicaulis: {
    id: "hymenachne_amplexicaulis",
    nombreCientifico: "Hymenachne amplexicaulis",
    nombreVulgar: "Hymenachne amplexicaulis",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne, glabra, acuatica, con tallos ramosos y crasos.",
    caracteristicas: "Hojas anchamente lineales, acorazonadas y semiabrazadoras en la base; panojas espiciformes de 20-50 cm.",
    distribucion: "America tropical; hallada en Retiro.",
    imagen: ""
  },

  pseudechinolaena_polystachya: {
    id: "pseudechinolaena_polystachya",
    nombreCientifico: "Pseudechinolaena polystachya",
    nombreVulgar: "Pseudechinolaena polystachya",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne, rastrera, con tallos radicantes.",
    caracteristicas: "Hojas cortas, anchamente lanceoladas, de 3-6 cm por 1-1,5 cm; panojas laxas; espiguillas de 3-4 mm; segunda gluma ventricosa y con pelos ganchudos a la madurez.",
    distribucion: "America tropical; hallada en los bosques de la Isla Martin Garcia.",
    imagen: ""
  },

  brachiaria_extensa: {
    id: "brachiaria_extensa",
    nombreCientifico: "Brachiaria extensa",
    nombreVulgar: "Brachiaria extensa",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba anual con tallos decumbentes, radicantes en los nudos.",
    caracteristicas: "Hojas anchas; panojas con 3-6 espigas distantes de 3-8 cm; raquis alado; espiguillas ovadas de 4-4,5 mm.",
    distribucion: "Sur de los Estados Unidos; hallada en Palermo.",
    imagen: ""
  },

  paspalidium_paludivagum: {
    id: "paspalidium_paludivagum",
    nombreCientifico: "Paspalidium paludivagum",
    nombreVulgar: "Paspalidium paludivagum",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne, palustre, de hasta 2 m de alto.",
    caracteristicas: "Espiguillas en racimos espiciformes mas o menos adosados al eje principal; gluma inferior muy corta y obtusa; lemma esteril de 2,8-3 mm, aguda.",
    distribucion: "Sur de los Estados Unidos, Mexico y Guatemala; hallada en Campana y San Isidro.",
    imagen: ""
  },

  oplismenopsis_najada: {
    id: "oplismenopsis_najada",
    nombreCientifico: "Oplismenopsis najada",
    nombreVulgar: "Oplismenopsis najada",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Planta perenne, acuatica, rizomatosa, con tallos nadantes ramificados y canas floriferas erectas.",
    caracteristicas: "Panojas con varios racimos espiciformes; espiguillas lanceoladas, violaceas, de 7-8 mm; gluma inferior corta y aristada.",
    distribucion: "Uruguay y nordeste de la Argentina; en banados del Delta y de la ribera del Plata.",
    imagen: ""
  },

  oplismenus_setarius: {
    id: "oplismenus_setarius",
    nombreCientifico: "Oplismenus setarius",
    nombreVulgar: "Oplismenus setarius",
    familia: "17. Gramineae - Paniceae",
    descripcion: "Hierba perenne, debil, tendida o ascendente, radicante en los nudos, de 10-20 cm de alto.",
    caracteristicas: "Hojas anchamente lanceoladas y cortas; panojas de 3-6 racimos cortos y densos, casi globosos; espiguillas gruesas de 3 mm; gluma inferior largamente aristada.",
    distribucion: "America calida; bosques higrofilos del Delta y de la Isla Martin Garcia.",
    imagen: ""
  },

  paniceae: {
    id: "paniceae",
    nombreCientifico: "Tribu Paniceae",
    nombreVulgar: "Gramínea de Paniceae",
    familia: "17. Gramineae",
    descripcion: "Gramíneas con lemma fértil papirácea o cartilaginosa, más consistente que las glumas.",
    caracteristicas: "Rama que en el manual conduce a géneros como Paspalum, Digitaria, Setaria, Panicum y Echinochloa.",
    distribucion: "Grupo pendiente de carga a nivel de géneros y especies.",
    imagen: ""
  },

  bothriochloa_hassleri: {
    id: "bothriochloa_hassleri",
    nombreCientifico: "Bothriochloa hassleri",
    nombreVulgar: "Bothriochloa hassleri",
    familia: "17. Gramineae - Andropogoneae",
    descripcion: "Hierba perenne, cespitosa, de 1-2 m de alto.",
    caracteristicas: "Tallos glabros; racimos muy numerosos; espiguillas muticas.",
    distribucion: "Paraguay; hallada en Palermo.",
    imagen: ""
  },

  bothriochloa_lagurioides: {
    id: "bothriochloa_lagurioides",
    nombreCientifico: "Bothriochloa lagurioides",
    nombreVulgar: "Bothriochloa lagurioides",
    familia: "17. Gramineae - Andropogoneae",
    descripcion: "Hierba cespitosa, cortamente rizomatosa, de cerca de 50 cm de alto.",
    caracteristicas: "Canas glabras en los nudos; hojas planas y lineales; racimos numerosos formando una panoja fusiforme plateada; espiguillas fertiles de 3 mm con lemma largamente aristada.",
    distribucion: "America calida; muy comun en la estepa climax.",
    imagen: ""
  },

  bothriochloa_saccharoides: {
    id: "bothriochloa_saccharoides",
    nombreCientifico: "Bothriochloa saccharoides",
    nombreVulgar: "Bothriochloa saccharoides",
    familia: "17. Gramineae - Andropogoneae",
    descripcion: "Hierba perenne de cerca de 1 m de alto.",
    caracteristicas: "Canas con coronita de pelos en los nudos; racimos muy numerosos formando una panoja oblonga plateada; espiguillas fertiles de unos 4 mm; gluma inferior sin excavaciones puntiformes dorsales.",
    distribucion: "America templado-calida; en la estepa climax.",
    imagen: ""
  },

  bothriochloa_perforata: {
    id: "bothriochloa_perforata",
    nombreCientifico: "Bothriochloa perforata",
    nombreVulgar: "Bothriochloa perforata",
    familia: "17. Gramineae - Andropogoneae",
    descripcion: "Hierba de Bothriochloa con canas provistas de una coronita de pelos en los nudos.",
    caracteristicas: "Panojas plateadas de menos de 10 cm; gluma inferior con una excavacion puntiforme en el dorso; caracteres restantes semejantes a B. saccharoides.",
    distribucion: "America calida; se halla en las barrancas de San Isidro y Campana.",
    imagen: ""
  },

  bothriochloa_alta: {
    id: "bothriochloa_alta",
    nombreCientifico: "Bothriochloa alta",
    nombreVulgar: "Bothriochloa alta",
    familia: "17. Gramineae - Andropogoneae",
    descripcion: "Hierba de tallos altos, de 1,5-2 m.",
    caracteristicas: "Panojas verdosas de 10-20 cm; gluma inferior con una excavacion puntiforme en el dorso; otros caracteres semejantes a B. saccharoides.",
    distribucion: "America calida; citada para Palermo.",
    imagen: ""
  },

  andropogon_paniculatus: {
    id: "andropogon_paniculatus",
    nombreCientifico: "Andropogon paniculatus",
    nombreVulgar: "Andropogon paniculatus",
    familia: "17. Gramineae - Andropogoneae",
    descripcion: "Hierba perenne, cespitosa, con tallos rojizos de 50-100 cm de alto.",
    caracteristicas: "Hojas con nervaduras muy marcadas; inflorescencia con numerosos racimos solitarios de hasta 2,5 cm, nacidos en axilas de hojas reducidas, formando una seudopanoja densa; espiguillas de 4-5 mm.",
    distribucion: "America calida; en la estepa climax, principalmente al norte de la Capital Federal.",
    imagen: ""
  },

  andropogon_consanguineus: {
    id: "andropogon_consanguineus",
    nombreCientifico: "Andropogon consanguineus",
    nombreVulgar: "Te pampa",
    familia: "17. Gramineae - Andropogoneae",
    descripcion: "Hierba perenne, cespitosa, rojiza, de 30-40 cm de alto.",
    caracteristicas: "Hojas planas; racimos numerosos de 4-7 cm, solitarios en las axilas de las hojas formando una seudopanoja angosta; espiguillas de 6-9 mm.",
    distribucion: "Sur del Brasil, Uruguay y nordeste de la Argentina; comun en la estepa climax.",
    imagen: ""
  },

  hemarthria_altissima: {
    id: "hemarthria_altissima",
    nombreCientifico: "Hemarthria altissima",
    nombreVulgar: "Hemarthria altissima",
    familia: "17. Gramineae - Andropogoneae",
    descripcion: "Hierba perenne con canas ramosas, ascendentes, glabras, de 40-60 cm de alto.",
    caracteristicas: "Hojas lineales; espigas terminales en el extremo de las ramas, subcilindricas, comprimidas, a veces semifasciculadas; raquis articulado con excavaciones donde se ajustan dos espiguillas.",
    distribucion: "Regiones calidas del globo; comun en los bosques del Delta y de la ribera del Plata.",
    imagen: ""
  },

  rottboellia_selloana: {
    id: "rottboellia_selloana",
    nombreCientifico: "Rottboellia selloana",
    nombreVulgar: "Rottboellia selloana",
    familia: "17. Gramineae - Andropogoneae",
    descripcion: "Hierba perenne, rizomatosa, glabra, con tallos erectos de 30-50 cm de alto.",
    caracteristicas: "Hojas lineales; espigas cilindricas, rectas o algo arqueadas, articuladas, de 6-15 cm, pocas; raquis engrosado que se desarticula facilmente.",
    distribucion: "Uruguay y nordeste de la Argentina; en campos humedos proximos a Abasto.",
    imagen: ""
  },

  sorghum_halepense: {
    id: "sorghum_halepense",
    nombreCientifico: "Sorghum halepense",
    nombreVulgar: "Sorgo de Halepo",
    familia: "17. Gramineae - Andropogoneae",
    descripcion: "Hierba perenne, rizomatosa, de 1-1,5 m de alto.",
    caracteristicas: "Panojas abiertas; lemma con larga arista retorcida; espiguillas en pares, una sesil y otra pedicelada esteril pero bien desarrollada.",
    distribucion: "Africa; adventicia en America. Maleza invasora.",
    imagen: ""
  },

  imperata_brasiliensis: {
    id: "imperata_brasiliensis",
    nombreCientifico: "Imperata brasiliensis",
    nombreVulgar: "Imperata brasiliensis",
    familia: "17. Gramineae - Andropogoneae",
    descripcion: "Hierba perenne, rizomatosa, con tallos erectos de 50-100 cm de alto.",
    caracteristicas: "Hojas inferiores amontonadas, planas o convolutas, glabras, con dos auriculas en la base de la lamina; panojas lanceoladas, densas y plateadas de 10-12 cm; espiguillas de 4-5 mm.",
    distribucion: "America tropical; comun en dunas humedas de Pipinas y San Clemente del Tuyu.",
    imagen: ""
  },

  ischaemum_urvilleanum: {
    id: "ischaemum_urvilleanum",
    nombreCientifico: "Ischaemum urvilleanum",
    nombreVulgar: "Ischaemum urvilleanum",
    familia: "17. Gramineae - Andropogoneae",
    descripcion: "Hierba perenne, rizomatosa, con tallos bajos y ascendentes.",
    caracteristicas: "Hojas amontonadas en la parte inferior del tallo, planas y lineal-lanceoladas; racimos espiciformes geminados, uno sesil y otro cortamente pedunculado; espiguillas de 6-7 mm, cortamente aristadas.",
    distribucion: "Sur del Brasil, Uruguay y nordeste de la Argentina; hallada en la Isla Martin Garcia y en la ribera platense.",
    imagen: ""
  },

  sorghastrum_pellitum: {
    id: "sorghastrum_pellitum",
    nombreCientifico: "Sorghastrum pellitum",
    nombreVulgar: "Sorghastrum pellitum",
    familia: "17. Gramineae - Andropogoneae",
    descripcion: "Hierba perenne, cespitosa, de 1-1,5 m de alto.",
    caracteristicas: "Hojas planas, enroscables; panojas densas, plateado-ocraceas; espiguillas velludas; arista de 10-15 mm.",
    distribucion: "America austral; frecuente en la estepa climax del norte y este de la provincia de Buenos Aires.",
    imagen: ""
  },

  sorghastrum_agrostoides: {
    id: "sorghastrum_agrostoides",
    nombreCientifico: "Sorghastrum agrostoides",
    nombreVulgar: "Sorghastrum agrostoides",
    familia: "17. Gramineae - Andropogoneae",
    descripcion: "Hierba perenne robusta de 1,5-2 m de alto.",
    caracteristicas: "Panojas laxas; espiguillas velludas; arista de unos 5 mm.",
    distribucion: "America calida; accidental en Palermo.",
    imagen: ""
  },

  trachypogon_canescens: {
    id: "trachypogon_canescens",
    nombreCientifico: "Trachypogon canescens",
    nombreVulgar: "Trachypogon canescens",
    familia: "17. Gramineae - Andropogoneae",
    descripcion: "Hierba perenne, cespitosa, de cerca de 1 m de alto.",
    caracteristicas: "Hojas largas y velludas; racimos solitarios de 8-10 cm; espiguillas fusiformes, velludas, de 6-7 mm; arista de 4-6 cm, largamente velluda.",
    distribucion: "Sur del Brasil y nordeste de la Argentina; se halla en el norte de la provincia de Buenos Aires, en la estepa climax.",
    imagen: ""
  },

  andropogoneae: {
    id: "andropogoneae",
    nombreCientifico: "Tribu Andropogoneae",
    nombreVulgar: "Gramínea de Andropogoneae",
    familia: "17. Gramineae",
    descripcion: "Gramíneas con lemma fértil tenue e hialina y glumas cartilaginosas o coriáceas.",
    caracteristicas: "Rama que en el manual conduce a géneros como Imperata, Sorghum, Andropogon y Bothriochloa.",
    distribucion: "Grupo pendiente de carga a nivel de géneros y especies.",
    imagen: ""
  },

  pappophorum: {
    id: "pappophorum",
    nombreCientifico: "Pappophorum sp.",
    nombreVulgar: "Pappophorum",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Gramínea de Festuceae con lemmas divididas en numerosas aristas.",
    caracteristicas: "Las aristas abiertas forman una estructura semejante a un papus.",
    distribucion: "Grupo pendiente de carga a nivel de especies.",
    imagen: ""
  },

  cortaderia_selloana: {
    id: "cortaderia_selloana",
    nombreCientifico: "Cortaderia selloana",
    nombreVulgar: "Cortadera",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba perenne muy robusta, con tallos floríferos cercanos a 2 m.",
    caracteristicas: "Hojas muy largas y ásperas en los bordes, panojas grandes en penacho y espiguillas unisexuales.",
    distribucion: "América austral; frecuente en terrenos húmedos del Delta y de la ribera del Plata.",
    imagen: ""
  },

  arundo_donax: {
    id: "arundo_donax",
    nombreCientifico: "Arundo donax",
    nombreVulgar: "Caña de Castilla",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba perenne rizomatosa, con cañas huecas y gruesas de 2-6 m de alto.",
    caracteristicas: "Hojas numerosas y planas; panojas densas de 30-60 cm; espiguillas de unos 12 mm; lemma velluda y raquilla glabra.",
    distribucion: "Viejo Mundo; adventicia y cultivada en América, espontánea en el Delta y la ribera del Plata.",
    imagen: ""
  },

  phragmites: {
    id: "phragmites",
    nombreCientifico: "Phragmites sp.",
    nombreVulgar: "Carrizo",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Gramínea robusta de ambientes húmedos.",
    caracteristicas: "En la clave se separa por lemma glabra y raquilla velluda.",
    distribucion: "Grupo pendiente de carga a nivel de especies.",
    imagen: ""
  },

  melica_sarmentosa: {
    id: "melica_sarmentosa",
    nombreCientifico: "Melica sarmentosa",
    nombreVulgar: "Melica",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba perenne de tallos flojos y apoyantes, de 1-3 m de alto.",
    caracteristicas: "Vainas cerradas; láminas cortas y planas; panojas densas de 7-12 cm; espiguillas blanquecinas o violáceas de 7-8 mm.",
    distribucion: "América austral cálida; común en los bosques del Delta y de la ribera del Plata.",
    imagen: ""
  },

  melica_macra: {
    id: "melica_macra",
    nombreCientifico: "Melica macra",
    nombreVulgar: "Paja brava",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba perenne densamente cespitosa, de alrededor de 50 cm.",
    caracteristicas: "Hojas rígidas, convolutas y punzantes; panojas largas y angostas; espiguillas fusiformes pajizas de 12-15 mm.",
    distribucion: "Uruguay y centro de la Argentina; cerca de Buenos Aires, junto a vías férreas y barrancas del Paraná.",
    imagen: ""
  },

  melica_argyrea: {
    id: "melica_argyrea",
    nombreCientifico: "Melica argyrea",
    nombreVulgar: "Melica",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba perenne cespitosa de 20-50 cm de alto.",
    caracteristicas: "Hojas plegadas; panojas estrechas y densas; espiguillas blanquecinas de 5-6 mm; gluma inferior ancha, recortada y plegada.",
    distribucion: "Uruguay y centro de la Argentina; rara en Campana, San Isidro e Isla Martín García.",
    imagen: ""
  },

  melica_papilionacea: {
    id: "melica_papilionacea",
    nombreCientifico: "Melica papilionacea",
    nombreVulgar: "Melica",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba perenne cespitosa de unos 50 cm de alto.",
    caracteristicas: "Hojas cortas y convolutas; panojas laxas; espiguillas nutantes de 8-10 mm; gluma inferior casi plana con margen membranáceo.",
    distribucion: "Sur del Brasil, Uruguay y nordeste de la Argentina; común en la estepa clímax.",
    imagen: ""
  },

  melica_aurantiaca: {
    id: "melica_aurantiaca",
    nombreCientifico: "Melica aurantiaca",
    nombreVulgar: "Melica",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba perenne de 1 m o más de alto.",
    caracteristicas: "Hojas lineales y planas; panojas estrechas; espiguillas amarillentas de 12-16 mm; gluma inferior anchamente oblanceolada.",
    distribucion: "Uruguay y nordeste de la Argentina; Punta del Indio y General Lavalle.",
    imagen: ""
  },

  distichlis: {
    id: "distichlis",
    nombreCientifico: "Distichlis sp.",
    nombreVulgar: "Pasto salado",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Gramínea dioica y rizomatosa de suelos salados.",
    caracteristicas: "Espiguillas masculinas y femeninas glabras.",
    distribucion: "Campos húmedos y salobres.",
    imagen: ""
  },

  poa_annua: {
    id: "poa_annua",
    nombreCientifico: "Poa annua",
    nombreVulgar: "Poa",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba anual de 5-20 cm de alto.",
    caracteristicas: "Panojas abiertas y laxas; espiguillas lanceoladas de 4-6 mm, con 3-8 flores; lemmas con nervaduras pubescentes.",
    distribucion: "Europa; adventicia en América y ubicua.",
    imagen: ""
  },

  poa_trivialis: {
    id: "poa_trivialis",
    nombreCientifico: "Poa trivialis",
    nombreVulgar: "Poa",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba perenne sin rizomas, erecta o ascendente, de 30-90 cm.",
    caracteristicas: "Hojas escabrosas; panoja amplia; espiguillas de unos 3 mm con 2-3 flores; lemma con pelos lanosos en la base.",
    distribucion: "Europa; adventicia en América, en suelos arenosos de la ribera del Plata.",
    imagen: ""
  },

  poa_pratensis: {
    id: "poa_pratensis",
    nombreCientifico: "Poa pratensis",
    nombreVulgar: "Poa",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba perenne rizomatosa, con tallos redondeados de 30-100 cm.",
    caracteristicas: "Hojas planas; panoja piramidal abierta; espiguillas de 3-6 mm con 3-5 flores; lemmas lanosas en la base.",
    distribucion: "Europa; adventicia en América, común en suelos modificados.",
    imagen: ""
  },

  poa_compressa: {
    id: "poa_compressa",
    nombreCientifico: "Poa compressa",
    nombreVulgar: "Poa",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba perenne rizomatosa de tallos muy comprimidos y ascendentes, de 15-50 cm.",
    caracteristicas: "Panojas angostas de 3-7 cm; espiguillas amontonadas, casi sésiles, de 4-6 mm y con 3-6 flores.",
    distribucion: "Europa; adventicia en América, citada para los alrededores de Buenos Aires.",
    imagen: ""
  },

  poa_lanuginosa: {
    id: "poa_lanuginosa",
    nombreCientifico: "Poa lanuginosa",
    nombreVulgar: "Poa",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba dioica rizomatosa de 30-50 cm de alto.",
    caracteristicas: "Hojas conduplicadas y rígidas, con lígula de 5-12 mm o más; espiguillas femeninas grandes y largamente lanosas.",
    distribucion: "Sur del Brasil, Uruguay y nordeste de la Argentina; en suelos arenosos de Isla Martín García.",
    imagen: ""
  },

  poa_bonariensis: {
    id: "poa_bonariensis",
    nombreCientifico: "Poa bonariensis",
    nombreVulgar: "Poa",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba dioica rizomatosa de 30-70 cm de alto.",
    caracteristicas: "Lígula de 1-2,5 mm; láminas plegadas o planas; panoja contraída y densa; espiguillas femeninas lanosas.",
    distribucion: "Uruguay y nordeste de la Argentina; en campos fértiles.",
    imagen: ""
  },

  poa_lanigera: {
    id: "poa_lanigera",
    nombreCientifico: "Poa lanigera",
    nombreVulgar: "Poa",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba dioica cespitosa, sin rizomas, de 30-70 cm de alto.",
    caracteristicas: "Lígula corta; láminas plegadas o planas; panojas contraídas y densas; espiguillas femeninas lanosas.",
    distribucion: "Sur del Brasil, Uruguay y centro de la Argentina; en la estepa clímax.",
    imagen: ""
  },

  briza: {
    id: "briza",
    nombreCientifico: "Briza sp.",
    nombreVulgar: "Tembladerilla",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Gramínea con espiguillas más o menos globosas.",
    caracteristicas: "Espiguillas casi tan anchas como largas y lemma con margen membranoso.",
    distribucion: "Grupo pendiente de carga a nivel de especies.",
    imagen: ""
  },

  glyceria_multiflora: {
    id: "glyceria_multiflora",
    nombreCientifico: "Glyceria multiflora",
    nombreVulgar: "Glyceria",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba perenne, generalmente palustre y con frecuencia rizomatosa.",
    caracteristicas: "Espiguillas lineales de 15-20 mm, 12-15-floras; lemmas pergamináceas con nervaduras paralelas.",
    distribucion: "América del Sur cálida y templada; común en suelos inundables y zanjas.",
    imagen: ""
  },

  puccinellia: {
    id: "puccinellia",
    nombreCientifico: "Puccinellia sp.",
    nombreVulgar: "Puccinellia",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Gramínea de espiguillas lineales con lemmas obtusas y múticas.",
    caracteristicas: "Estilos cortos y caducos, lemmas con nervaduras tenues y cariopse no hendido.",
    distribucion: "Grupo pendiente de carga a nivel de especies.",
    imagen: ""
  },

  eragrostis_hypnoides: {
    id: "eragrostis_hypnoides",
    nombreCientifico: "Eragrostis hypnoides",
    nombreVulgar: "Eragrostis",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba anual rastrera, radicante en los nudos y glabra.",
    caracteristicas: "Hojas cortas casi perpendiculares al tallo; panojas muy cortas y densas; espiguillas oblongas verdosas de 1 cm.",
    distribucion: "América templado-cálida; Delta y San Isidro.",
    imagen: ""
  },

  eragrostis_bahiensis: {
    id: "eragrostis_bahiensis",
    nombreCientifico: "Eragrostis bahiensis",
    nombreVulgar: "Eragrostis",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba perenne rizomatosa y glabra, de 40-90 cm.",
    caracteristicas: "Panojas laxas; espiguillas lanceoladas verdosas o violáceas, de 4-10 mm y con 8-30 flores.",
    distribucion: "América cálida; suelos arenosos de Palermo, Dock Sud y otros sitios.",
    imagen: ""
  },

  eragrostis_airoides: {
    id: "eragrostis_airoides",
    nombreCientifico: "Eragrostis airoides",
    nombreVulgar: "Eragrostis",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba perenne cespitosa de 30-80 cm de alto.",
    caracteristicas: "Vainas velludas; panojas tenues, multifloras y rojizas; espiguillas de 1 mm con 1-2 flores, raramente 3.",
    distribucion: "América cálida; frecuente en el Delta y en Palermo.",
    imagen: ""
  },

  eragrostis_retinens: {
    id: "eragrostis_retinens",
    nombreCientifico: "Eragrostis retinens",
    nombreVulgar: "Eragrostis",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba perenne cespitosa de unos 50 cm de alto.",
    caracteristicas: "Páleas ciliadas en el margen; panoja laxa; espiguillas violáceas de unos 2 mm, con 4-5 flores.",
    distribucion: "América austral; rara en la región, citada para Pipinas.",
    imagen: ""
  },

  eragrostis_retinens_pergaminensis: {
    id: "eragrostis_retinens_pergaminensis",
    nombreCientifico: "Eragrostis retinens var. pergaminensis",
    nombreVulgar: "Eragrostis",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Variedad de Eragrostis retinens con espiguillas menores.",
    caracteristicas: "Espiguillas con sólo 2-3 flores; conserva los demás caracteres de la especie.",
    distribucion: "Pergamino, provincia de Buenos Aires.",
    imagen: ""
  },

  eragrostis_lugens: {
    id: "eragrostis_lugens",
    nombreCientifico: "Eragrostis lugens",
    nombreVulgar: "Eragrostis",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba perenne cespitosa de 20-40 cm de alto.",
    caracteristicas: "Páleas no ciliadas; panojas erectas, tenues y difusas; espiguillas con 3-7 flores; vainas peludas en la garganta.",
    distribucion: "América templado-cálida; común en la estepa clímax.",
    imagen: ""
  },

  eragrostis_flaccida: {
    id: "eragrostis_flaccida",
    nombreCientifico: "Eragrostis flaccida",
    nombreVulgar: "Eragrostis",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba perenne cespitosa de panojas débiles.",
    caracteristicas: "Páleas no ciliadas; espiguillas con 3-7 flores; panojas generalmente nutantes.",
    distribucion: "América austral cálida; citada para la Capital Federal.",
    imagen: ""
  },

  eragrostis_cilianensis: {
    id: "eragrostis_cilianensis",
    nombreCientifico: "Eragrostis cilianensis",
    nombreVulgar: "Eragrostis",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba anual de tallos tendidos o ascendentes.",
    caracteristicas: "Panojas muy densas y angostas; espiguillas lanceoladas plurifloras de 5-15 por 2-3 mm; tallos a menudo glandulosos.",
    distribucion: "Europa; adventicia en América, común en suelos modificados.",
    imagen: ""
  },

  eragrostis_neesii: {
    id: "eragrostis_neesii",
    nombreCientifico: "Eragrostis neesii",
    nombreVulgar: "Eragrostis",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba anual erecta y velluda, de 20-30 cm de alto.",
    caracteristicas: "Panojas contraídas y densas; espiguillas de 4-8 por 1-1,5 mm.",
    distribucion: "América del Sur cálida; rara en la región, citada para Dock Sur.",
    imagen: ""
  },

  eragrostis_multicaulis: {
    id: "eragrostis_multicaulis",
    nombreCientifico: "Eragrostis multicaulis",
    nombreVulgar: "Eragrostis",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba anual de 5-20 cm de alto.",
    caracteristicas: "Panojas laxas de 4-10 cm; espiguillas lanceoladas de 3-4 mm, con 4-8 flores.",
    distribucion: "Japón; adventicia en América, citada para el Delta y la Capital Federal.",
    imagen: ""
  },

  eragrostis_barrelieri: {
    id: "eragrostis_barrelieri",
    nombreCientifico: "Eragrostis barrelieri",
    nombreVulgar: "Eragrostis",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba anual de 20-40 cm de alto.",
    caracteristicas: "Panojas laxas con ramificaciones muy abiertas; espiguillas de 6-10 mm, cortamente pediceladas y con 12-20 flores.",
    distribucion: "Europa; adventicia en América, hallada en Eva Perón.",
    imagen: ""
  },

  eragrostis_neomexicana: {
    id: "eragrostis_neomexicana",
    nombreCientifico: "Eragrostis neomexicana",
    nombreVulgar: "Eragrostis",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba anual de hasta 1 m de alto.",
    caracteristicas: "Panojas laxas con ramificaciones oblicuas al raquis; espiguillas ovadas de 5-8 mm, con 8-12 flores.",
    distribucion: "América templado-cálida; Capital Federal, Villa Elisa y otros sitios.",
    imagen: ""
  },

  eragrostis_pilosa: {
    id: "eragrostis_pilosa",
    nombreCientifico: "Eragrostis pilosa",
    nombreVulgar: "Eragrostis",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba anual de panojas laxas y amplias.",
    caracteristicas: "Eje con largos pelos blancos en las axilas; espiguillas oscuras y lineales de 3-5 mm por 1 mm, con 3-9 flores.",
    distribucion: "Europa; adventicia en América, citada para el Delta y la Capital Federal.",
    imagen: ""
  },

  eragrostis_virescens: {
    id: "eragrostis_virescens",
    nombreCientifico: "Eragrostis virescens",
    nombreVulgar: "Eragrostis",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba anual de 50-60 cm de alto.",
    caracteristicas: "Eje sin pelos blancos en las axilas; espiguillas lineales de 4-5 mm por 1 mm, con 7-9 flores.",
    distribucion: "América cálida; muy común en la región platense.",
    imagen: ""
  },

  dactylis_glomerata: {
    id: "dactylis_glomerata",
    nombreCientifico: "Dactylis glomerata",
    nombreVulgar: "Pasto ovillo",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba perenne, erecta, de 60-120 cm.",
    caracteristicas: "Espiguillas paucifloras, comprimidas, casi sésiles, en fascículos unilaterales densos.",
    distribucion: "Viejo Mundo; adventicia en América, en suelos fértiles.",
    imagen: ""
  },

  scleropoa: {
    id: "scleropoa",
    nombreCientifico: "Scleropoa sp.",
    nombreVulgar: "Scleropoa",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Gramínea de Festuceae con espiguillas de pedicelos muy gruesos.",
    caracteristicas: "Lemmas múticas o mucronadas.",
    distribucion: "Grupo pendiente de carga a nivel de especies.",
    imagen: ""
  },

  festuca: {
    id: "festuca",
    nombreCientifico: "Festuca sp.",
    nombreVulgar: "Festuca",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Gramínea de espiguillas lanceoladas y lemmas acuminadas o aristadas.",
    caracteristicas: "El manual separa especies por ciliosidad de lemmas, tamaño de glumas y longitud de aristas.",
    distribucion: "Grupo pendiente de carga a nivel de especies.",
    imagen: ""
  },

  bromus_brevis: {
    id: "bromus_brevis",
    nombreCientifico: "Bromus brevis",
    nombreVulgar: "Bromus",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba perenne, de más de medio metro de alto, con panojas laxas.",
    caracteristicas: "Lemmas con aristas de 0,5 mm y espiguillas lanceoladas comprimidas de 15-18 mm.",
    distribucion: "Centro de la Argentina; rara en campos altos.",
    imagen: ""
  },

  bromus_catharticus: {
    id: "bromus_catharticus",
    nombreCientifico: "Bromus catharticus Vahl",
    nombreVulgar: "Cebadilla criolla",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba perenne, de 1 m o más de alto.",
    caracteristicas: "Hojas anchas y planas, panojas laxas, espiguillas muy comprimidas y lemmas carenadas con arista corta.",
    distribucion: "América; forrajera y común en la región.",
    imagen: ""
  },

  bromus_madritensis: {
    id: "bromus_madritensis",
    nombreCientifico: "Bromus madritensis",
    nombreVulgar: "Bromus",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba anual, de alrededor de 0,5 m.",
    caracteristicas: "Glumas acuminadas o subuladas, lemmas acuminadas escabrosas y aristas de 20-25 mm.",
    distribucion: "Europa; rara cerca de La Plata.",
    imagen: ""
  },

  bromus_racemosus: {
    id: "bromus_racemosus",
    nombreCientifico: "Bromus racemosus",
    nombreVulgar: "Bromus",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba anual, de 30-70 cm.",
    caracteristicas: "Panojas densas casi espiciformes, glumas anchas y lemmas anchamente ovadas, bidentadas y largamente aristadas.",
    distribucion: "Europa; adventicia en América y rara cerca de Buenos Aires.",
    imagen: ""
  },

  bromus_japonicus: {
    id: "bromus_japonicus",
    nombreCientifico: "Bromus japonicus",
    nombreVulgar: "Bromus",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba anual, de 30-70 cm, pubescente lanosa.",
    caracteristicas: "Panojas laxas y péndulas, espiguillas fusiformes y antecios apretados.",
    distribucion: "Japón; adventicia en Europa y América, rara en La Plata.",
    imagen: ""
  },

  bromus_mollis: {
    id: "bromus_mollis",
    nombreCientifico: "Bromus mollis",
    nombreVulgar: "Bromus",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba anual pubescente.",
    caracteristicas: "Panojas contraídas y densas, espiguillas lanceoladas gruesas de 12-17 mm y lemmas pubescentes con larga arista.",
    distribucion: "Europa; común en la región como adventicia.",
    imagen: ""
  },

  bromus_uruguayensis: {
    id: "bromus_uruguayensis",
    nombreCientifico: "Bromus uruguayensis",
    nombreVulgar: "Bromus",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba perenne cespitosa, de 30-60 cm.",
    caracteristicas: "Panojas laxas inclinadas, espiguillas gruesas de 15-20 mm y arista de la misma longitud que la lemma.",
    distribucion: "Uruguay y nordeste de Argentina; vive en la ribera del Plata y la Isla Martín García.",
    imagen: ""
  },

  bromus_auleticus: {
    id: "bromus_auleticus",
    nombreCientifico: "Bromus auleticus",
    nombreVulgar: "Bromus",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba perenne robusta, de alrededor de 1,5 m.",
    caracteristicas: "Panojas laxas, espiguillas lanceoladas de 25-30 mm y arista de la mitad de la longitud de la lemma.",
    distribucion: "América austral; rara cerca de Buenos Aires y muy común hacia el oeste de la provincia.",
    imagen: ""
  },

  pappophorum_mucronulatum: {
    id: "pappophorum_mucronulatum",
    nombreCientifico: "Pappophorum mucronulatum",
    nombreVulgar: "Pappophorum",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba perenne cespitosa, de 30-80 cm de alto.",
    caracteristicas: "Panojas de 8-15 cm, espiguillas 2-3-floras y aristas de unos 5 mm.",
    distribucion: "America templado-calida; se halla en la estepa climax.",
    imagen: ""
  },

  phragmites_communis: {
    id: "phragmites_communis",
    nombreCientifico: "Phragmites communis",
    nombreVulgar: "Carrizo",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba perenne rizomatosa, robusta, de 2-4 m de alto.",
    caracteristicas: "Cañas uniformemente hojosas, hojas planas largas de 1-6 cm de ancho, panojas de 15-40 cm y espiguillas de 12-15 mm.",
    distribucion: "Regiones calidas; rara en terrenos inundables del Delta y de la ribera del Plata.",
    imagen: ""
  },

  briza_brizoides: {
    id: "briza_brizoides",
    nombreCientifico: "Briza brizoides",
    nombreVulgar: "Briza",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba perenne cespitosa, de 20-50 cm de alto.",
    caracteristicas: "Espiguillas comprimidas lateralmente y violaceas; lemma triangular de perfil con dilataciones marginales muy anchas.",
    distribucion: "Sur del Brasil, Uruguay y nordeste de Argentina; frecuente en la estepa climax.",
    imagen: ""
  },

  briza_subaristata: {
    id: "briza_subaristata",
    nombreCientifico: "Briza subaristata",
    nombreVulgar: "Briza",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba perenne cespitosa, de alrededor de 50 cm de alto.",
    caracteristicas: "Panojas contraidas; espiguillas globosas de 5 mm, 5-8-floras; lemmas agudas, bidentadas y cortamente aristadas.",
    distribucion: "America austral; frecuente en la estepa climax.",
    imagen: ""
  },

  briza_glomerata: {
    id: "briza_glomerata",
    nombreCientifico: "Briza glomerata",
    nombreVulgar: "Briza",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba perenne rizomatosa, de cerca de 1 m de alto.",
    caracteristicas: "Panojas densas espiciformes ramificadas, espiguillas verdes aglomeradas y lemmas conchiformes gibosas.",
    distribucion: "Uruguay y ribera del Plata en la Argentina.",
    imagen: ""
  },

  briza_minor: {
    id: "briza_minor",
    nombreCientifico: "Briza minor",
    nombreVulgar: "Briza",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba anual, de 25-40 cm de alto, con panojas laxas.",
    caracteristicas: "Espiguillas globosas de 2-4 mm, 4-6-floras, con glumas y glumelas redondeadas en el apice.",
    distribucion: "Ubicua; florece en primavera.",
    imagen: ""
  },

  briza_maxima: {
    id: "briza_maxima",
    nombreCientifico: "Briza maxima",
    nombreVulgar: "Briza",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba anual erecta, de 30-60 cm de alto, con panojas laxas.",
    caracteristicas: "Espiguillas ovoideas amarillentas de 15-20 mm, 13-17-floras, con glumas y glumelas ovadas obtusas.",
    distribucion: "Europa; cultivada y adventicia en America.",
    imagen: ""
  },

  distichlis_scoparia: {
    id: "distichlis_scoparia",
    nombreCientifico: "Distichlis scoparia",
    nombreVulgar: "Pasto salado",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba perenne rizomatosa, baja, con tallos delgados y ramosos en la base.",
    caracteristicas: "Panoja laxa, hojas densas uniformemente repartidas por el tallo y espiguillas oblongas 5-6-floras.",
    distribucion: "America austral; en campos humedos y salobres.",
    imagen: ""
  },

  distichlis_spicata: {
    id: "distichlis_spicata",
    nombreCientifico: "Distichlis spicata",
    nombreVulgar: "Pasto salado",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba perenne rizomatosa, baja, de tallos erectos de 10-40 cm.",
    caracteristicas: "Panoja muy densa, hojas disticas con vainas superpuestas y espiguillas oblongas de 6-10 mm, 5-9-floras.",
    distribucion: "America; comun en suelos bajos salobres.",
    imagen: ""
  },

  puccinellia_glaucescens: {
    id: "puccinellia_glaucescens",
    nombreCientifico: "Puccinellia glaucescens var. osteniana",
    nombreVulgar: "Puccinellia",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba perenne cespitosa, de 20-30 cm de alto, de suelos salados.",
    caracteristicas: "Hojas angostas convolutas, panojas largas y angostas, espiguillas oblongas 7-10-floras y lemmas de 2 mm.",
    distribucion: "Uruguay y nordeste de Argentina; en suelos salados humedos.",
    imagen: ""
  },

  scleropoa_rigida: {
    id: "scleropoa_rigida",
    nombreCientifico: "Scleropoa rigida",
    nombreVulgar: "Scleropoa",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba anual, erecta o ascendente, de 10-20 cm de alto.",
    caracteristicas: "Panojas estrechas y densas de 5-10 cm; espiguillas lanceoladas, 4-10-floras, de 5-8 mm.",
    distribucion: "Europa; adventicia en America y comun en suelos modificados.",
    imagen: ""
  },

  festuca_megalura: {
    id: "festuca_megalura",
    nombreCientifico: "Festuca megalura",
    nombreVulgar: "Festuca",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba anual, de 20-60 cm de alto.",
    caracteristicas: "Lemmas ciliadas en su mitad superior, lineal-lanceoladas y escabrosas; aristas de 8-10 mm; panojas estrechas.",
    distribucion: "America templado-calida; frecuente en la region.",
    imagen: ""
  },

  festuca_dertonensis: {
    id: "festuca_dertonensis",
    nombreCientifico: "Festuca dertonensis",
    nombreVulgar: "Festuca",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba anual glabra.",
    caracteristicas: "Gluma inferior de unos 4 mm, superior de 6-7 mm, lemma lanceolada escabrosa y arista de 10-13 mm.",
    distribucion: "Europa; adventicia en America y comun en la estepa climax.",
    imagen: ""
  },

  festuca_myurus: {
    id: "festuca_myurus",
    nombreCientifico: "Festuca myurus",
    nombreVulgar: "Festuca",
    familia: "17. Gramineae - Festuceae",
    descripcion: "Hierba anual.",
    caracteristicas: "Lemmas no ciliadas, gluma inferior de 1-1,5 mm y gluma superior de 4-4,5 mm.",
    distribucion: "Europa; adventicia en America y rara en la region platense.",
    imagen: ""
  },

  agropyron_pungens: {
    id: "agropyron_pungens",
    nombreCientifico: "Agropyron pungens",
    nombreVulgar: "Agropiro",
    familia: "17. Gramineae - Hordeae",
    descripcion: "Hierba perenne con rizomas horizontales cundidores.",
    caracteristicas: "Láminas foliares convolutas, rígidas y punzantes, con nervaduras muy marcadas; tallos de 50-80 cm y espiguillas 5-6-floras.",
    distribucion: "Europa; adventicia en Argentina, en suelos salados de la Ensenada de Samborombón.",
    imagen: ""
  },

  agropyron_repens: {
    id: "agropyron_repens",
    nombreCientifico: "Agropyron repens",
    nombreVulgar: "Agropiro",
    familia: "17. Gramineae - Hordeae",
    descripcion: "Hierba perenne rizomatosa, con hojas planas y flojas.",
    caracteristicas: "Espiguillas de 12-15 mm, 6-8-floras; glumas lanceoladas acuminadas de 5-7 nervaduras; espigas de 10-18 cm.",
    distribucion: "Europa; adventicia en América, hallada en Buenos Aires y Punta Lara.",
    imagen: ""
  },

  agropyron_scabrifolium: {
    id: "agropyron_scabrifolium",
    nombreCientifico: "Agropyron scabrifolium",
    nombreVulgar: "Agropiro",
    familia: "17. Gramineae - Hordeae",
    descripcion: "Hierba perenne rizomatosa, robusta, con tallos de hasta 2 m.",
    caracteristicas: "Espiguillas de 20-35 mm, 8-10-floras; hojas planas o subconvolutas retrorso-escabrosas y espigas dísticas de 15-25 cm.",
    distribucion: "Uruguay y norte y centro de Argentina; hallada en el Delta y región de Samborombón.",
    imagen: ""
  },

  agropyron_attenuatum: {
    id: "agropyron_attenuatum",
    nombreCientifico: "Agropyron attenuatum var. platense",
    nombreVulgar: "Agropiro",
    familia: "17. Gramineae - Hordeae",
    descripcion: "Hierba perenne cespitosa, sin rizomas, de cerca de 50 cm de alto.",
    caracteristicas: "Hojas planas o subconvolutas, espigas de 6-8 cm y espiguillas lanceoladas estrechas 4-5-floras.",
    distribucion: "Bosques de talas de la región de Samborombón.",
    imagen: ""
  },

  hordeum_leporinum: {
    id: "hordeum_leporinum",
    nombreCientifico: "Hordeum leporinum",
    nombreVulgar: "Cola de zorro",
    familia: "17. Gramineae - Hordeae",
    descripcion: "Hierba anual ascendente, de 30-50 cm de alto.",
    caracteristicas: "Hojas planas pubescentes; flores laterales de la tríada más grandes que la central y espiga comprimida ancha de 6-7 cm.",
    distribucion: "Europa; adventicia en Argentina, común en suelos modificados.",
    imagen: ""
  },

  hordeum_jubatum: {
    id: "hordeum_jubatum",
    nombreCientifico: "Hordeum jubatum var. pampeanum",
    nombreVulgar: "Hordeum",
    familia: "17. Gramineae - Hordeae",
    descripcion: "Hierba anual erecta, de alrededor de 50 cm de alto.",
    caracteristicas: "Hojas planas, glumas capilares con aristas de 4-6 cm y espigas anchas de 8-10 cm.",
    distribucion: "Uruguay y este de Argentina; en suelos húmedos algo salados.",
    imagen: ""
  },

  hordeum_compressum: {
    id: "hordeum_compressum",
    nombreCientifico: "Hordeum compressum",
    nombreVulgar: "Hordeum",
    familia: "17. Gramineae - Hordeae",
    descripcion: "Hierba anual, de 20-40 cm de alto.",
    caracteristicas: "Espigas comprimidas de unos 8 cm por 2-4 mm, con espiguillas laterales adosadas contra la flor central.",
    distribucion: "Centro de Argentina; raro en la región platense.",
    imagen: ""
  },

  hordeum_stenostachys: {
    id: "hordeum_stenostachys",
    nombreCientifico: "Hordeum stenostachys",
    nombreVulgar: "Hordeum",
    familia: "17. Gramineae - Hordeae",
    descripcion: "Hierba perenne, de 30-80 cm de alto.",
    caracteristicas: "Hojas rígidas algo enroscadas y espigas algo comprimidas de 4-8 cm por cerca de 5 mm.",
    distribucion: "América austral; en la estepa climax.",
    imagen: ""
  },

  hordeum_pusillum: {
    id: "hordeum_pusillum",
    nombreCientifico: "Hordeum pusillum",
    nombreVulgar: "Hordeum",
    familia: "17. Gramineae - Hordeae",
    descripcion: "Hierba anual, de 10-40 cm de alto.",
    caracteristicas: "Glumas laterales y centrales netamente lanceoladas, espigas oblongas angostas subcuadrangulares y aristas largas.",
    distribucion: "América; común en campos bajos.",
    imagen: ""
  },

  lepturus_cylindricus: {
    id: "lepturus_cylindricus",
    nombreCientifico: "Lepturus cylindricus",
    nombreVulgar: "Lepturus",
    familia: "17. Gramineae - Hordeae",
    descripcion: "Hierba anual ascendente o erecta, de 20-30 cm de alto.",
    caracteristicas: "Espiga lineal algo curvada y espiguillas de 5 mm incrustadas en excavaciones del raquis.",
    distribucion: "Europa; adventicia en América, común en suelos salados.",
    imagen: ""
  },

  lolium_multiflorum: {
    id: "lolium_multiflorum",
    nombreCientifico: "Lolium multiflorum",
    nombreVulgar: "Rye grass, ballico",
    familia: "17. Gramineae - Hordeae",
    descripcion: "Hierba perenne con tallos de 50-100 cm de alto.",
    caracteristicas: "Gluma más corta que la espiguilla, 10-20 flores por espiguilla y lemmas aristadas o múticas.",
    distribucion: "Europa; adventicia en América, muy común en campos húmedos.",
    imagen: ""
  },

  lolium_temulentum: {
    id: "lolium_temulentum",
    nombreCientifico: "Lolium temulentum",
    nombreVulgar: "Trigollo",
    familia: "17. Gramineae - Hordeae",
    descripcion: "Hierba anual con tallos de 60-90 cm de alto.",
    caracteristicas: "Gluma igual o mayor que la espiguilla, 5-7 flores por espiguilla y lemmas aristadas.",
    distribucion: "Europa; maleza en Argentina. Tóxica.",
    imagen: ""
  },

  pholiurus_incurvus: {
    id: "pholiurus_incurvus",
    nombreCientifico: "Pholiurus incurvus",
    nombreVulgar: "Pholiurus",
    familia: "17. Gramineae - Hordeae",
    descripcion: "Hierba anual baja, con tallos tendidos o ascendentes de 10-20 cm.",
    caracteristicas: "Espigas lineales curvas de 7-10 cm y espiguillas de 5-7 mm incrustadas en el raquis.",
    distribucion: "Europa; adventicia en América, en campos húmedos y salados.",
    imagen: ""
  },

  secale_cereale: {
    id: "secale_cereale",
    nombreCientifico: "Secale cereale",
    nombreVulgar: "Centeno",
    familia: "17. Gramineae - Hordeae",
    descripcion: "Hierba anual con tallos de 1-1,5 m de alto.",
    caracteristicas: "Espiguillas solitarias en las articulaciones del raquis, generalmente con dos flores hermafroditas y una rudimentaria.",
    distribucion: "Europa; cultivado en Argentina y a veces espontáneo.",
    imagen: ""
  },

  triticum_aestivum: {
    id: "triticum_aestivum",
    nombreCientifico: "Triticum aestivum",
    nombreVulgar: "Trigo",
    familia: "17. Gramineae - Hordeae",
    descripcion: "Hierba anual cultivada para la elaboración de pan.",
    caracteristicas: "Tallos de cerca de 1 m y espiguillas 3-5-floras, con raquilla articulada por encima de las glumas.",
    distribucion: "Cultivada; a veces escapada de cultivos.",
    imagen: ""
  },

  triticum_durum: {
    id: "triticum_durum",
    nombreCientifico: "Triticum durum",
    nombreVulgar: "Trigo duro",
    familia: "17. Gramineae - Hordeae",
    descripcion: "Hierba anual cultivada.",
    caracteristicas: "Especie de trigo poco cultivada en Argentina, ocasionalmente espontánea.",
    distribucion: "Cultivos y escapes ocasionales.",
    imagen: ""
  },

  koeleria_phleoides: {
    id: "koeleria_phleoides",
    nombreCientifico: "Koeleria phleoides",
    nombreVulgar: "Koeleria",
    familia: "17. Gramineae - Aveneae",
    descripcion: "Hierba anual erecta, de 15-30 cm de alto.",
    caracteristicas: "Hojas pilosas, panojas muy densas espiciformes de 2-7 cm, espiguillas de 4 mm y lemmas bidentadas con corta arista subapical.",
    distribucion: "Europa; adventicia en América, muy común en la estepa climax y ambientes antropógenos.",
    imagen: ""
  },

  amphibromus_scabrivalvis: {
    id: "amphibromus_scabrivalvis",
    nombreCientifico: "Amphibromus scabrivalvis",
    nombreVulgar: "Amphibromus",
    familia: "17. Gramineae - Aveneae",
    descripcion: "Hierba perenne, de 40-100 cm de alto, con base bulbiforme.",
    caracteristicas: "Hojas planas y espiguillas de dos tipos: cleistógamas en las vainas y chasmógamas 3-5-floras en panojas laxas.",
    distribucion: "Uruguay, Argentina y Chile; en suelos inundables y zanjas.",
    imagen: ""
  },

  avena_byzantina: {
    id: "avena_byzantina",
    nombreCientifico: "Avena byzantina",
    nombreVulgar: "Avena",
    familia: "17. Gramineae - Aveneae",
    descripcion: "Hierba anual de hojas anchas y panojas laxas.",
    caracteristicas: "Segundo flósculo soldado a la raquilla; lemma glabra dorsalmente, rodeada de pelos hirsutos en la base, con arista retorcida larga.",
    distribucion: "Especie cultivada y a veces subespontánea.",
    imagen: ""
  },

  avena_sterilis: {
    id: "avena_sterilis",
    nombreCientifico: "Avena sterilis",
    nombreVulgar: "Avena",
    familia: "17. Gramineae - Aveneae",
    descripcion: "Hierba anual, de alrededor de 1 m de alto, con hojas anchas y panojas laxas.",
    caracteristicas: "Segundo flósculo soldado a la raquilla; lemma cubierta de pelos hirsutos en el dorso, con arista retorcida y geniculada.",
    distribucion: "España; adventicia en América, en cultivos y rastrojos.",
    imagen: ""
  },

  avena_fatua: {
    id: "avena_fatua",
    nombreCientifico: "Avena fatua",
    nombreVulgar: "Avena guacha",
    familia: "17. Gramineae - Aveneae",
    descripcion: "Hierba anual, de 50-100 cm de alto, con hojas anchas.",
    caracteristicas: "Segundo flósculo fácilmente desprendible; lemma hirsuta, arista dorsal retorcida de 35 mm y panojas flojas abiertas.",
    distribucion: "Europa; adventicia en América, en rastrojos, vías férreas y ambientes similares.",
    imagen: ""
  },

  avena_sativa: {
    id: "avena_sativa",
    nombreCientifico: "Avena sativa",
    nombreVulgar: "Avena",
    familia: "17. Gramineae - Aveneae",
    descripcion: "Hierba anual cultivada como forrajera.",
    caracteristicas: "Lemma glabra, arista débil apenas retorcida sólo en el flósculo inferior y espiguillas castañas generalmente bifloras.",
    distribucion: "Cultivada y con frecuencia espontánea.",
    imagen: ""
  },

  avena_barbata: {
    id: "avena_barbata",
    nombreCientifico: "Avena barbata",
    nombreVulgar: "Avena",
    familia: "17. Gramineae - Aveneae",
    descripcion: "Hierba anual de espiguillas bifloras.",
    caracteristicas: "Lemma terminada en dos dientes o lacinias de 4-8 mm.",
    distribucion: "Europa; adventicia en América, ubicua.",
    imagen: ""
  },

  danthonia_montevidensis: {
    id: "danthonia_montevidensis",
    nombreCientifico: "Danthonia montevidensis",
    nombreVulgar: "Danthonia",
    familia: "17. Gramineae - Aveneae",
    descripcion: "Hierba perenne cespitosa, de 40-60 cm de alto.",
    caracteristicas: "Hojas estrechas planas o convolutas, panojas cortas con pocas espiguillas, y lemma lanceolada largamente velluda y bífida.",
    distribucion: "Uruguay y nordeste de Argentina; frecuente en la estepa climax.",
    imagen: ""
  },

  holcus_lanatus: {
    id: "holcus_lanatus",
    nombreCientifico: "Holcus lanatus",
    nombreVulgar: "Holcus",
    familia: "17. Gramineae - Aveneae",
    descripcion: "Hierba perenne, de 30-60 cm de alto.",
    caracteristicas: "Vainas pubescentes, láminas lineales, panojas densas de 8-15 cm y glumas velludas.",
    distribucion: "Europa; adventicia en América, muy rara en la región.",
    imagen: ""
  },

  oryzopsis_miliacea: {
    id: "oryzopsis_miliacea",
    nombreCientifico: "Oryzopsis miliacea",
    nombreVulgar: "Oryzopsis",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba perenne ascendente, de 60-150 cm de alto.",
    caracteristicas: "Hojas planas; panojas laxas; glumas acuminadas de 3 mm; lemma anchamente fusiforme de 2 mm y arista débil de 4 mm, no retorcida.",
    distribucion: "Europa; adventicia en América. Accidental en Dock Sur, según Parodi.",
    imagen: ""
  },

  piptochaetium_hackelii: {
    id: "piptochaetium_hackelii",
    nombreCientifico: "Piptochaetium hackelii",
    nombreVulgar: "Piptochaetium",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba perenne de unos 50 cm de alto, con panojas laxas y paucispicadas.",
    caracteristicas: "Glumas lanceolado-subuladas de 21-30 mm; antecio fusiforme de 10-12 mm, castaño oscuro; arista pubescente de 8-10 cm.",
    distribucion: "Provincia de Buenos Aires y Uruguay; frecuente en las sierras bonaerenses y en Pergamino.",
    imagen: ""
  },

  piptochaetium_bicolor: {
    id: "piptochaetium_bicolor",
    nombreCientifico: "Piptochaetium bicolor",
    nombreVulgar: "Piptochaetium",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba perenne cespitosa, de unos 50 cm de alto.",
    caracteristicas: "Glumas lanceoladas de 10-12 mm; antecio ovado-fusiforme de más de 4,5 mm, con callus seríceo-pubescente y arista de unos 5 cm.",
    distribucion: "Uruguay y centro y este de la Argentina; muy común en la estepa clímax.",
    imagen: ""
  },

  piptochaetium_bicolor_minor: {
    id: "piptochaetium_bicolor_minor",
    nombreCientifico: "Piptochaetium bicolor var. minor",
    nombreVulgar: "Piptochaetium",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Variedad de Piptochaetium bicolor con antecios pequeños.",
    caracteristicas: "Antecios de no más de 4,5 mm; los demás caracteres corresponden a Piptochaetium bicolor.",
    distribucion: "Con la variedad bicolor, en Uruguay y centro y este de la Argentina.",
    imagen: ""
  },

  piptochaetium_lasianthum: {
    id: "piptochaetium_lasianthum",
    nombreCientifico: "Piptochaetium lasianthum",
    nombreVulgar: "Piptochaetium",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba cespitosa de 30-70 cm de alto.",
    caracteristicas: "Antecio obovado de unos 3 mm, cubierto de largos pelos castaños; arista débil de 1,5-2 cm; panoja laxa y nutante.",
    distribucion: "Nordeste de la Argentina y Uruguay; rara en la región, citada para el Bañado de Flores.",
    imagen: ""
  },

  piptochaetium_stipoides: {
    id: "piptochaetium_stipoides",
    nombreCientifico: "Piptochaetium stipoides var. stipoides",
    nombreVulgar: "Piptochaetium",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba perenne cespitosa de antecios obovado-globosos.",
    caracteristicas: "Frutos ovoideos, apenas papilosos en la parte superior; corona de 0,8-1,1 mm; hojas generalmente glabras.",
    distribucion: "Sur del Brasil, Uruguay y norte y centro de la Argentina; común en la estepa clímax.",
    imagen: ""
  },

  piptochaetium_stipoides_chaetophorum: {
    id: "piptochaetium_stipoides_chaetophorum",
    nombreCientifico: "Piptochaetium stipoides var. chaetophorum",
    nombreVulgar: "Piptochaetium",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Variedad de Piptochaetium stipoides de frutos globosos.",
    caracteristicas: "Frutos apenas papilosos en la parte superior; corona de 1,2-1,5 mm; hojas generalmente pilosas.",
    distribucion: "Argentina, Chile, Brasil y Uruguay; en la estepa clímax.",
    imagen: ""
  },

  piptochaetium_stipoides_verruculosum: {
    id: "piptochaetium_stipoides_verruculosum",
    nombreCientifico: "Piptochaetium stipoides var. verruculosum",
    nombreVulgar: "Piptochaetium",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Variedad de Piptochaetium stipoides con frutos marcadamente papilosos.",
    caracteristicas: "Frutos densamente papilosos, al menos en la mitad superior; corona generalmente de 1 mm o más.",
    distribucion: "Uruguay y Argentina; en la estepa clímax.",
    imagen: ""
  },

  piptochaetium_stipoides_purpurascens: {
    id: "piptochaetium_stipoides_purpurascens",
    nombreCientifico: "Piptochaetium stipoides var. purpurascens",
    nombreVulgar: "Piptochaetium",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Variedad de Piptochaetium stipoides con frutos lisos.",
    caracteristicas: "Frutos lisos y corona generalmente de menos de 1 mm de diámetro.",
    distribucion: "Sur del Brasil, Uruguay y nordeste de la Argentina; en la estepa clímax.",
    imagen: ""
  },

  piptochaetium_grisebachii: {
    id: "piptochaetium_grisebachii",
    nombreCientifico: "Piptochaetium grisebachii",
    nombreVulgar: "Piptochaetium",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba cespitosa de unos 50 cm de alto.",
    caracteristicas: "Antecio obovado de 3-4,5 mm, castaño y estriado; corona reducida y pestañosa; arista excéntrica de 2 cm.",
    distribucion: "Buenos Aires y Entre Ríos; rara en la región platense.",
    imagen: ""
  },

  piptochaetium_montevidense: {
    id: "piptochaetium_montevidense",
    nombreCientifico: "Piptochaetium montevidense",
    nombreVulgar: "Piptochaetium",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba perenne baja y cespitosa, de 5-30 cm de alto.",
    caracteristicas: "Hojas filiformes; antecio globoso, verrugoso o papiloso, de 1,5-2,5 mm; arista de 7-8 mm; panoja espiciforme.",
    distribucion: "América del Sur; muy frecuente en la estepa clímax.",
    imagen: ""
  },

  piptochaetium_panicoides: {
    id: "piptochaetium_panicoides",
    nombreCientifico: "Piptochaetium panicoides",
    nombreVulgar: "Piptochaetium",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba perenne cespitosa de 15-40 cm de alto.",
    caracteristicas: "Hojas setáceas y plegadas; antecio lenticular comprimido de 1,5-2,5 mm, finamente estriado; arista de 10 mm.",
    distribucion: "América austral; hallada una sola vez en Dock Sud.",
    imagen: ""
  },

  stipa_papposa: {
    id: "stipa_papposa",
    nombreCientifico: "Stipa papposa",
    nombreVulgar: "Flechilla",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba perenne de 20-70 cm de alto, con hojas convolutas.",
    caracteristicas: "Lemma lineal-fusiforme de 7-8 mm, sin corona, con pelos superiores en forma de papus; arista de 20-30 mm; panoja laxa.",
    distribucion: "América austral; común en la estepa clímax y en las estepas de costa.",
    imagen: ""
  },

  stipa_trichotoma: {
    id: "stipa_trichotoma",
    nombreCientifico: "Stipa trichotoma",
    nombreVulgar: "Pasto puna",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba cespitosa de 30-50 cm de alto, con hojas filiformes y redondeadas.",
    caracteristicas: "Antecios claviformes u obovoideos de 2-3 mm, rugosos arriba; arista excéntrica de 20-30 mm; panoja muy laxa.",
    distribucion: "Uruguay y centro de la Argentina; rara en terraplenes del ferrocarril.",
    imagen: ""
  },

  stipa_bonariensis: {
    id: "stipa_bonariensis",
    nombreCientifico: "Stipa bonariensis",
    nombreVulgar: "Flechilla",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba cespitosa de 30-60 cm de alto.",
    caracteristicas: "Antecios rojo oscuro o casi negros de unos 13 mm; corona apenas diferenciada; arista de unos 10 cm; glumas de 20-25 mm.",
    distribucion: "Provincia de Buenos Aires; rara en la estepa clímax.",
    imagen: ""
  },

  stipa_clarazii: {
    id: "stipa_clarazii",
    nombreCientifico: "Stipa clarazii",
    nombreVulgar: "Flechilla",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba cespitosa de 30-70 cm de alto, con hojas convolutas y rígidas.",
    caracteristicas: "Antecios pajizos de 11-14 mm; corona largamente ciliada; arista velluda de cerca de 10 cm; glumas de 27-40 mm.",
    distribucion: "Centro de la Argentina y Uruguay; en campos altos y secos.",
    imagen: ""
  },

  stipa_neesiana: {
    id: "stipa_neesiana",
    nombreCientifico: "Stipa neesiana",
    nombreVulgar: "Flechilla",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba perenne de 70-80 cm de alto, con hojas convolutas.",
    caracteristicas: "Antecios pajizos de 8-10 mm; corona laciniada; arista de unos 7 cm; glumas violáceas de 15-20 mm.",
    distribucion: "América austral templado-cálida; muy común en la estepa clímax.",
    imagen: ""
  },

  stipa_brachychaeta: {
    id: "stipa_brachychaeta",
    nombreCientifico: "Stipa brachychaeta",
    nombreVulgar: "Paja vizcachera",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba densamente cespitosa de alrededor de 1 m de alto.",
    caracteristicas: "Lemma fusiforme de 3,5-6 mm, sin corona diferenciada; arista de 11-18 mm; panoja densa; hojas planas y rígidas.",
    distribucion: "América austral; frecuente en las barrancas del Paraná y en las antiguas barrancas del Plata.",
    imagen: ""
  },

  stipa_charruana: {
    id: "stipa_charruana",
    nombreCientifico: "Stipa charruana",
    nombreVulgar: "Flechilla",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba cespitosa de 60-80 cm de alto, con hojas muy angostas y rígidas.",
    caracteristicas: "Corona prolongada en un apéndice membranoso de unos 6 mm; lemma de 5-6 mm; arista de 6-8 cm; panoja laxa.",
    distribucion: "Uruguay, Entre Ríos y nordeste de Buenos Aires; en la estepa clímax.",
    imagen: ""
  },

  stipa_bavioensis: {
    id: "stipa_bavioensis",
    nombreCientifico: "Stipa bavioensis",
    nombreVulgar: "Flechilla",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba densamente cespitosa de 50-80 cm de alto, con hojas convolutas.",
    caracteristicas: "Corona cupuliforme largamente ciliada; lemma de 2,5-3,5 mm uniformemente albo-velluda; arista de unos 3 cm.",
    distribucion: "Nordeste de Buenos Aires y Uruguay; en campos húmedos.",
    imagen: ""
  },

  stipa_megapotamica: {
    id: "stipa_megapotamica",
    nombreCientifico: "Stipa megapotamica",
    nombreVulgar: "Flechilla",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba perenne de cerca de 1 m de alto, con hojas planas.",
    caracteristicas: "Corona anuliforme cortamente ciliada; lemma de 5 mm pubescente en la base y en líneas laterales; arista de 3,5-4 cm.",
    distribucion: "Uruguay y nordeste de la Argentina; bosques húmedos del Delta y de la ribera del Plata.",
    imagen: ""
  },

  stipa_hyalina: {
    id: "stipa_hyalina",
    nombreCientifico: "Stipa hyalina",
    nombreVulgar: "Flechilla mansa",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba perenne de 25-100 cm de alto, con hojas planas y glabras.",
    caracteristicas: "Corona ciliada de 0,2-0,5 mm; lemma fusiforme de apenas 4 mm; arista de 4-5 cm; panoja densa.",
    distribucion: "Uruguay y centro de la Argentina; frecuente en suelos húmedos.",
    imagen: ""
  },

  stipa_formicarum: {
    id: "stipa_formicarum",
    nombreCientifico: "Stipa formicarum",
    nombreVulgar: "Flechilla",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba cespitosa de 40-60 cm de alto, con hojas estrechas y planas.",
    caracteristicas: "Corona ciliada de 0,6-1,5 mm; lemma fusiforme de 5-6 mm; arista de 3-4 cm; panoja densa.",
    distribucion: "Común en campos bajos de la provincia de Buenos Aires.",
    imagen: ""
  },

  agrostis_montevidensis: {
    id: "agrostis_montevidensis",
    nombreCientifico: "Agrostis montevidensis",
    nombreVulgar: "Pasto ilusión",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba perenne cespitosa, de 20-30 cm de alto.",
    caracteristicas: "Láminas planas estrechas, panoja muy laxa y tenue, espiguillas largamente pediceladas y lemma con arista dorsal.",
    distribucion: "Uruguay y nordeste de Argentina; en la estepa climax.",
    imagen: ""
  },

  agrostis_palustris: {
    id: "agrostis_palustris",
    nombreCientifico: "Agrostis palustris",
    nombreVulgar: "Agrostis",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba perenne estolonífera, de 30-60 cm de alto.",
    caracteristicas: "Hojas planas ásperas, glumas escabrosas únicamente en la quilla y panojas densas interrumpidas.",
    distribucion: "Eurasia; adventicia en América, en bosques de la ribera.",
    imagen: ""
  },

  agrostis_verticillata: {
    id: "agrostis_verticillata",
    nombreCientifico: "Agrostis verticillata",
    nombreVulgar: "Agrostis",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba perenne ascendente y estolonífera.",
    caracteristicas: "Hojas planas cortas, panojas contraídas con ramificaciones cortas verticiladas y espiguillas de 2 mm.",
    distribucion: "Europa; adventicia en América, en suelos húmedos y jardines.",
    imagen: ""
  },

  agrostis_tandilensis: {
    id: "agrostis_tandilensis",
    nombreCientifico: "Agrostis tandilensis",
    nombreVulgar: "Agrostis",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba anual erecta, de 15-20 cm de alto.",
    caracteristicas: "Hojas estrechas planas, panoja muy densa espiciforme continua y lemma con arista de 3-4 mm.",
    distribucion: "Uruguay y nordeste de Argentina; en la estepa climax.",
    imagen: ""
  },

  agrostis_jurgensii: {
    id: "agrostis_jurgensii",
    nombreCientifico: "Agrostis jurgensii",
    nombreVulgar: "Agrostis",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba perenne, de 20-40 cm de alto.",
    caracteristicas: "Panojas de 5-12 cm, espiguillas de 3 mm, glumas desiguales puntiagudas y lemma con arista dorsal de unos 4 mm.",
    distribucion: "Campos húmedos.",
    imagen: ""
  },

  agrostis_platensis: {
    id: "agrostis_platensis",
    nombreCientifico: "Agrostis platensis",
    nombreVulgar: "Agrostis",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba perenne estolonífera, con tallos ascendentes plurinodes de 70-150 cm.",
    caracteristicas: "Panojas de 10-25 cm, espiguillas de 2,5 mm, glumas casi iguales aristadas y lemma con arista dorsal de 1-2 mm.",
    distribucion: "Argentina: Delta del Paraná.",
    imagen: ""
  },

  alopecurus_agrestis: {
    id: "alopecurus_agrestis",
    nombreCientifico: "Alopecurus agrestis",
    nombreVulgar: "Alopecurus",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba perenne cespitosa, de 50-100 cm de alto.",
    caracteristicas: "Glumas soldadas hasta la mitad, quillas ásperas o cortamente ciliadas, panojas delgadas de 4-10 cm y espiguillas casi glabras.",
    distribucion: "Europa; adventicia en América, en suelos modificados.",
    imagen: ""
  },

  alopecurus_bonariensis: {
    id: "alopecurus_bonariensis",
    nombreCientifico: "Alopecurus bonariensis",
    nombreVulgar: "Alopecurus",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba anual, de 10-30 cm de alto.",
    caracteristicas: "Vainas algo infladas, láminas lineales, panoja muy densa espiciforme cilíndrica y espiguillas imbricadas.",
    distribucion: "Suelos salados de Santa Fe y norte de Buenos Aires.",
    imagen: ""
  },

  aristida_spegazzinii: {
    id: "aristida_spegazzinii",
    nombreCientifico: "Aristida spegazzinii",
    nombreVulgar: "Aristida",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba perenne cespitosa, de 20-30 cm de alto.",
    caracteristicas: "Hojas cilíndricas, gluma inferior mayor que la superior, lemma de 10-12 mm y aristas de unos 8 cm.",
    distribucion: "Uruguay y nordeste de Argentina; en la estepa climax.",
    imagen: ""
  },

  aristida_pallens: {
    id: "aristida_pallens",
    nombreCientifico: "Aristida pallens",
    nombreVulgar: "Aristida",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba perenne cespitosa, de 40-50 cm de alto.",
    caracteristicas: "Panojas alargadas laxas, glumas largas y aristas de unos 10 cm.",
    distribucion: "América austral; rara en la estepa climax.",
    imagen: ""
  },

  aristida_adscensionis: {
    id: "aristida_adscensionis",
    nombreCientifico: "Aristida adscensionis",
    nombreVulgar: "Aristida",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba anual ramificada en la base, de 10-30 cm de alto.",
    caracteristicas: "Hojas cortas angostas generalmente convolutas, panojas angostas densas y aristas de cerca de 10 mm.",
    distribucion: "Frecuente en América; rara cerca de Buenos Aires.",
    imagen: ""
  },

  aristida_murina: {
    id: "aristida_murina",
    nombreCientifico: "Aristida murina",
    nombreVulgar: "Aristida",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba perenne con tallos de 30-40 cm.",
    caracteristicas: "Hojas cortas convolutas y estriadas, panojas densas semiespiciformes y aristas de unos 9 cm.",
    distribucion: "América del Sur; muy común en la estepa climax.",
    imagen: ""
  },

  calamagrostis_montevidensis: {
    id: "calamagrostis_montevidensis",
    nombreCientifico: "Calamagrostis montevidensis",
    nombreVulgar: "Calamagrostis",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba perenne cortamente rizomatosa, de 80-130 cm de alto.",
    caracteristicas: "Hojas planas, panojas densas multiespigadas de 25-35 cm, espiguillas plateadas de 5-6 mm y raquilla con pelos largos.",
    distribucion: "América austral; en campos húmedos.",
    imagen: ""
  },

  muhlenbergia_asperifolia: {
    id: "muhlenbergia_asperifolia",
    nombreCientifico: "Muhlenbergia asperifolia",
    nombreVulgar: "Muhlenbergia",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba perenne rizomatosa, de 8-25 cm de alto.",
    caracteristicas: "Hojas densas con láminas cortas plegadas, espiguillas unifloras de 2 mm y lemma cortamente mucronada.",
    distribucion: "Norte de Chile y regiones secas de Argentina; accidental en Capital Federal.",
    imagen: ""
  },

  muhlenbergia_schreberi: {
    id: "muhlenbergia_schreberi",
    nombreCientifico: "Muhlenbergia schreberi",
    nombreVulgar: "Muhlenbergia",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba perenne ascendente, de alrededor de 50 cm de alto.",
    caracteristicas: "Hojas lineales, panojas angostas flojas, glumas muy cortas hialinas y lemma largamente aristada.",
    distribucion: "América templado-cálida; frecuente en el Delta y la ribera platense.",
    imagen: ""
  },

  polypogon_chilensis: {
    id: "polypogon_chilensis",
    nombreCientifico: "Polypogon chilensis",
    nombreVulgar: "Polypogon",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba perenne, de alrededor de 50 cm de alto.",
    caracteristicas: "Glumas agudas casi múticas, ciliado-espinulosas en el dorso; panojas interrumpidas densas de 10-30 cm.",
    distribucion: "América austral; rara en la región platense.",
    imagen: ""
  },

  polypogon_elongatus: {
    id: "polypogon_elongatus",
    nombreCientifico: "Polypogon elongatus",
    nombreVulgar: "Polypogon",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba perenne, de 50-100 cm de alto.",
    caracteristicas: "Glumas largamente aristadas con arista apical, panojas interrumpidas de 20-30 cm y espiguillas de 2,5 mm.",
    distribucion: "América del Sur; muy común en suelos húmedos, especialmente en el Delta y la ribera.",
    imagen: ""
  },

  polypogon_monspeliensis: {
    id: "polypogon_monspeliensis",
    nombreCientifico: "Polypogon monspeliensis",
    nombreVulgar: "Polypogon",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba anual, de 15-50 cm de alto.",
    caracteristicas: "Glumas largamente aristadas con arista subapical, panoja compacta espiciforme elíptica de 4-10 cm y espiguillas de 2 mm.",
    distribucion: "Europa; adventicia en América, común en campos bajos y salados.",
    imagen: ""
  },

  sporobolus_poiretii: {
    id: "sporobolus_poiretii",
    nombreCientifico: "Sporobolus poiretii",
    nombreVulgar: "Sporobolus",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba perenne cespitosa, de 30-100 cm de alto.",
    caracteristicas: "Inflorescencia densa más o menos espiciforme, panojas muy largas y angostas, espiguillas glabras verdosas de 2 mm.",
    distribucion: "Cosmopolita; muy común en la región platense.",
    imagen: ""
  },

  sporobolus_platensis: {
    id: "sporobolus_platensis",
    nombreCientifico: "Sporobolus platensis",
    nombreVulgar: "Sporobolus",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba perenne, de 50-100 cm de alto.",
    caracteristicas: "Espiguillas lanceoladas muy comprimidas de 6-7 mm, claras, con glumas acuminadas rígidas y panoja contraída.",
    distribucion: "Provincia de Buenos Aires y Uruguay; hallada en San Vicente y Pipinas.",
    imagen: ""
  },

  sporobolus_pyramidatus: {
    id: "sporobolus_pyramidatus",
    nombreCientifico: "Sporobolus pyramidatus",
    nombreVulgar: "Sporobolus",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba perenne cespitosa, de 20-50 cm de alto.",
    caracteristicas: "Inflorescencia laxa piramidal y espiguillas lanceoladas glabras de 1,5-1,7 mm.",
    distribucion: "América templado-cálida; común en campos salobres.",
    imagen: ""
  },

  phleum_pratense: {
    id: "phleum_pratense",
    nombreCientifico: "Phleum pratense",
    nombreVulgar: "Phleum",
    familia: "17. Gramineae - Agrostideae",
    descripcion: "Hierba perenne, de 50-150 cm de alto.",
    caracteristicas: "Panojas cilíndricas de 5-10 cm, glumas de 3-5 mm truncadas con arista gruesa y quilla largamente ciliada.",
    distribucion: "Europa; cultivada como forrajera y a veces espontánea en suelos modificados.",
    imagen: ""
  },

  chloris_berroi: {
    id: "chloris_berroi",
    nombreCientifico: "Chloris berroi",
    nombreVulgar: "Chloris",
    familia: "17. Gramineae - Chlorideae",
    descripcion: "Hierba perenne rizomatosa, de 40-100 cm de alto.",
    caracteristicas: "Hojas planas angostas e inflorescencia con 2-7 espigas semihelicoidales adheridas que simulan una espiga terminal única.",
    distribucion: "Uruguay y nordeste de Argentina; frecuente en campos bajos algo salinos.",
    imagen: ""
  },

  chloris_capensis_bahiensis: {
    id: "chloris_capensis_bahiensis",
    nombreCientifico: "Chloris capensis var. bahiensis",
    nombreVulgar: "Chloris",
    familia: "17. Gramineae - Chlorideae",
    descripcion: "Hierba perenne cortamente rizomatosa, de 20-50 cm de alto.",
    caracteristicas: "Hojas inferiores amontonadas, con lámina corta obtusa; espigas digitadas en el ápice y lemma ciliada en dorso y margen.",
    distribucion: "América del Sur cálida; en suelos arenosos de Isla Martín García y Dock Sur.",
    imagen: ""
  },

  chloris_distichophylla: {
    id: "chloris_distichophylla",
    nombreCientifico: "Chloris distichophylla",
    nombreVulgar: "Chloris",
    familia: "17. Gramineae - Chlorideae",
    descripcion: "Hierba perenne cortamente rizomatosa, de 50-100 cm de alto.",
    caracteristicas: "Espigas 12-30 flexuosas, de 8-14 cm, espiguillas apretadas y lemma estéril aguda.",
    distribucion: "América del Sur cálida; hallada en Palermo.",
    imagen: ""
  },

  chloris_retusa: {
    id: "chloris_retusa",
    nombreCientifico: "Chloris retusa",
    nombreVulgar: "Chloris",
    familia: "17. Gramineae - Chlorideae",
    descripcion: "Hierba perenne rizomatosa, de 40-80 cm de alto.",
    caracteristicas: "Hojas con lámina obtusa plegada; espigas 8-15 de 4-10 cm y antecio estéril truncado.",
    distribucion: "América del Sur; en la estepa climax.",
    imagen: ""
  },

  chloris_inflata: {
    id: "chloris_inflata",
    nombreCientifico: "Chloris inflata",
    nombreVulgar: "Chloris",
    familia: "17. Gramineae - Chlorideae",
    descripcion: "Hierba perenne cespitosa, de alrededor de 1 m de alto.",
    caracteristicas: "Espigas 15-25 de 4-6 cm y espiguillas con un antecio fértil y dos estériles largamente aristados.",
    distribucion: "América cálida; rara en la Isla Maciel.",
    imagen: ""
  },

  chloris_halophila: {
    id: "chloris_halophila",
    nombreCientifico: "Chloris halophila",
    nombreVulgar: "Chloris",
    familia: "17. Gramineae - Chlorideae",
    descripcion: "Hierba perenne con tallos rastreros radicantes y cañas floríferas erectas de 40-70 cm.",
    caracteristicas: "Lemma glabra o casi glabra, lanceolada y largamente aristada; espigas en 2-3 verticilos perpendiculares al tallo.",
    distribucion: "América austral; en campos salobres de Pergamino y Campana.",
    imagen: ""
  },

  chloris_gayana: {
    id: "chloris_gayana",
    nombreCientifico: "Chloris gayana",
    nombreVulgar: "Chloris",
    familia: "17. Gramineae - Chlorideae",
    descripcion: "Hierba perenne cortamente rizomatosa, de alrededor de 1 m de alto.",
    caracteristicas: "Hojas lineales planas, espigas 12-24 de 7-9 cm y lemma ciliada sólo en el margen, con quilla glabra.",
    distribucion: "Senegal; cultivada como forrajera y a veces subespontánea.",
    imagen: ""
  },

  chloris_ciliata: {
    id: "chloris_ciliata",
    nombreCientifico: "Chloris ciliata",
    nombreVulgar: "Chloris",
    familia: "17. Gramineae - Chlorideae",
    descripcion: "Hierba perenne cespitosa, de 15-50 cm de alto.",
    caracteristicas: "Espigas 3-8 de 3-5 cm, espiguillas de 2-3 mm, glumas lanceoladas agudas y lemma ciliada en margen y quilla.",
    distribucion: "América cálida y templada; en suelos secos.",
    imagen: ""
  },

  chloris_canterai: {
    id: "chloris_canterai",
    nombreCientifico: "Chloris canterai",
    nombreVulgar: "Chloris",
    familia: "17. Gramineae - Chlorideae",
    descripcion: "Hierba perenne cespitosa con rizomas cortos y tallos de 50-100 cm.",
    caracteristicas: "Espigas 3-6, flexuosas e inclinadas hacia abajo, de 7-10 cm; espiguillas castañas de unos 3 mm.",
    distribucion: "Uruguay y norte de Argentina; citada para Campo de Mayo y Palermo.",
    imagen: ""
  },

  chloris_polydactyla: {
    id: "chloris_polydactyla",
    nombreCientifico: "Chloris polydactyla",
    nombreVulgar: "Chloris",
    familia: "17. Gramineae - Chlorideae",
    descripcion: "Hierba perenne cortamente rizomatosa, de alrededor de 1 m de alto.",
    caracteristicas: "Espigas 12-25 flexuosas de 10-15 cm, espiguillas de 2-2,5 mm y glumas lineales.",
    distribucion: "América cálida; accidental en Palermo.",
    imagen: ""
  },

  bouteloua_megapotamica: {
    id: "bouteloua_megapotamica",
    nombreCientifico: "Bouteloua megapotamica",
    nombreVulgar: "Bouteloua",
    familia: "17. Gramineae - Chlorideae",
    descripcion: "Hierba perenne estolonífera, de 15-20 cm de alto.",
    caracteristicas: "Hojas cortas agudas con pelos sedosos; inflorescencia con 3-6 espigas rojizas cortas y lemmas 3-aristadas.",
    distribucion: "Sur del Brasil, Uruguay y norte y centro de Argentina; en la estepa climax.",
    imagen: ""
  },

  cynodon_dactylon: {
    id: "cynodon_dactylon",
    nombreCientifico: "Cynodon dactylon",
    nombreVulgar: "Gramilla blanca, pata de perdiz, Bermuda grass",
    familia: "17. Gramineae - Chlorideae",
    descripcion: "Hierba perenne con rizomas horizontales poderosos y estolones superficiales.",
    caracteristicas: "Hojas casi glabras, espigas 4-8 de 2-5 cm, espiguillas de 2-3 mm y lemma con quilla pestañosa no alada.",
    distribucion: "Cosmopolita; común en suelos arenosos o sueltos. Invasora y tóxica para el ganado por glucósidos cianogenéticos.",
    imagen: ""
  },

  cynodon_hirsutus: {
    id: "cynodon_hirsutus",
    nombreCientifico: "Cynodon hirsutus",
    nombreVulgar: "Cynodon",
    familia: "17. Gramineae - Chlorideae",
    descripcion: "Hierba perenne con estolones superficiales.",
    caracteristicas: "Hojas densamente hirsutas, espigas 3-6 de 4-5 cm, espiguillas de 2 mm y lemma con quilla brevemente pestañosa y angostamente alada.",
    distribucion: "África del Sur; adventicia en Argentina, en suelos sueltos. Tóxica.",
    imagen: ""
  },

  diplachne_dubia: {
    id: "diplachne_dubia",
    nombreCientifico: "Diplachne dubia",
    nombreVulgar: "Diplachne",
    familia: "17. Gramineae - Chlorideae",
    descripcion: "Hierba perenne cespitosa, de hasta 80 cm de alto.",
    caracteristicas: "Hojas planas glabras, lemma bilobulada y espiguillas con 8-17 flores en racimos abiertos.",
    distribucion: "América cálida; accidental en Palermo.",
    imagen: ""
  },

  diplachne_fusca: {
    id: "diplachne_fusca",
    nombreCientifico: "Diplachne fusca",
    nombreVulgar: "Diplachne",
    familia: "17. Gramineae - Chlorideae",
    descripcion: "Hierba perenne, de hasta 80 cm de alto.",
    caracteristicas: "Hojas planas, anteras de 1-1,5 mm, lemma no aristada e inflorescencia de racimos flexuosos.",
    distribucion: "Norte de África; accidental en Dock Sur.",
    imagen: ""
  },

  diplachne_fascicularis: {
    id: "diplachne_fascicularis",
    nombreCientifico: "Diplachne fascicularis",
    nombreVulgar: "Diplachne",
    familia: "17. Gramineae - Chlorideae",
    descripcion: "Hierba anual, de 70-80 cm de alto.",
    caracteristicas: "Hojas subconvolutas, lemma acuminada con dos dientes agudos y arista de 1 mm; racimos numerosos.",
    distribucion: "América cálida; rara en la región, citada para Dock Sud.",
    imagen: ""
  },

  diplachne_uninervia: {
    id: "diplachne_uninervia",
    nombreCientifico: "Diplachne uninervia",
    nombreVulgar: "Diplachne",
    familia: "17. Gramineae - Chlorideae",
    descripcion: "Hierba anual erecta, de 30-90 cm de alto.",
    caracteristicas: "Espiguillas 6-10-floras y lemma con tres dientes cortos en el ápice, a veces con el central aristulado.",
    distribucion: "América cálida; común en suelos salobres.",
    imagen: ""
  },

  eleusine_indica: {
    id: "eleusine_indica",
    nombreCientifico: "Eleusine indica",
    nombreVulgar: "Eleusine",
    familia: "17. Gramineae - Chlorideae",
    descripcion: "Hierba anual con tallos ascendentes radicantes en los nudos, de 30-50 cm de alto.",
    caracteristicas: "Hojas planas o plegadas, espigas 5-12 de 5-7 cm y espiguillas ovadas agudas 6-10-floras.",
    distribucion: "Asia; adventicia en regiones cálidas, en suelos modificados.",
    imagen: ""
  },

  eleusine_tristachya: {
    id: "eleusine_tristachya",
    nombreCientifico: "Eleusine tristachya",
    nombreVulgar: "Eleusine",
    familia: "17. Gramineae - Chlorideae",
    descripcion: "Hierba perenne, de 10-30 cm de alto.",
    caracteristicas: "Hojas lineales, espigas 2-4 gruesas de 1-4 cm y espiguillas ovado-lanceoladas de 6-9 mm.",
    distribucion: "África y América tropicales; muy frecuente en suelos modificados.",
    imagen: ""
  },

  spartina_montevidensis: {
    id: "spartina_montevidensis",
    nombreCientifico: "Spartina montevidensis",
    nombreVulgar: "Espartillo",
    familia: "17. Gramineae - Chlorideae",
    descripcion: "Hierba perenne rizomatosa, formando matas robustas de 1-1,5 m.",
    caracteristicas: "Hojas convolutas, pocas espigas de 3-7 cm adosadas al eje principal y espiguillas rígidas de 9-12 mm.",
    distribucion: "Uruguay y centro y este de Argentina; en campos salados inundables.",
    imagen: ""
  },

  spartina_brasiliensis: {
    id: "spartina_brasiliensis",
    nombreCientifico: "Spartina brasiliensis",
    nombreVulgar: "Espartillo",
    familia: "17. Gramineae - Chlorideae",
    descripcion: "Hierba perenne rizomatosa, de cerca de 1 m de alto.",
    caracteristicas: "Hojas convolutas muy largas, espigas 12-20 de unos 10 cm algo divergentes y espiguillas de 14-16 mm.",
    distribucion: "América del Sur; arenales y cangrejales de Punta del Indio y Pipinas.",
    imagen: ""
  },

  spartina_longispica: {
    id: "spartina_longispica",
    nombreCientifico: "Spartina longispica",
    nombreVulgar: "Espartillo",
    familia: "17. Gramineae - Chlorideae",
    descripcion: "Hierba robusta rizomatosa, de alrededor de 1,5 m de alto.",
    caracteristicas: "Hojas convolutas, espigas 7-11 de 11-16 cm aproximadas al raquis principal y glumas escabrosas en la quilla.",
    distribucion: "Cangrejales de la región de Pipinas.",
    imagen: ""
  },

  trichloris_crinita: {
    id: "trichloris_crinita",
    nombreCientifico: "Trichloris crinita",
    nombreVulgar: "Trichloris",
    familia: "17. Gramineae - Chlorideae",
    descripcion: "Hierba perenne cespitosa con rizomas cortos y tallos de 50-100 cm.",
    caracteristicas: "Hojas planas escabrosas, espigas 7-15 aproximadas, espiguillas con una flor hermafrodita y una estéril, lemma con tres aristas.",
    distribucion: "Sur de Estados Unidos, norte de México y norte y centro de Argentina; rara en la región.",
    imagen: ""
  },

  leptochloa_chloridiformis: {
    id: "leptochloa_chloridiformis",
    nombreCientifico: "Leptochloa chloridiformis",
    nombreVulgar: "Leptochloa",
    familia: "17. Gramineae - Chlorideae",
    descripcion: "Hierba perenne cespitosa, de 60-80 cm de alto.",
    caracteristicas: "Espigas 5-10 fasciculadas en el ápice, espiguillas 3-4-floras y lemma bilobulada cortamente aristada.",
    distribucion: "Norte de Argentina y Paraguay; hallada en Campana y Palermo.",
    imagen: ""
  },

  leptochloa_virgata: {
    id: "leptochloa_virgata",
    nombreCientifico: "Leptochloa virgata",
    nombreVulgar: "Leptochloa",
    familia: "17. Gramineae - Chlorideae",
    descripcion: "Hierba perenne cespitosa.",
    caracteristicas: "Espigas numerosas y delgadas a lo largo del raquis principal, espiguillas rojizo-violáceas 5-6-floras y lemmas largamente aristadas.",
    distribucion: "América cálida; citada para Palermo.",
    imagen: ""
  },

  schedonnardus_paniculatus: {
    id: "schedonnardus_paniculatus",
    nombreCientifico: "Schedonnardus paniculatus",
    nombreVulgar: "Schedonnardus",
    familia: "17. Gramineae - Chlorideae",
    descripcion: "Hierba perenne glauca y tenue, de 20-40 cm de alto.",
    caracteristicas: "Hojas basales planas y estrechas, espigas de 2-10 cm y espiguillas adosadas al raquis de 4 mm.",
    distribucion: "Sur de Estados Unidos y centro de Argentina; muy rara en Palermo.",
    imagen: ""
  },

  willkommia_texana_stolonifera: {
    id: "willkommia_texana_stolonifera",
    nombreCientifico: "Willkommia texana var. stolonifera",
    nombreVulgar: "Willkommia",
    familia: "17. Gramineae - Chlorideae",
    descripcion: "Hierba perenne estolonífera, glabra, de 20-30 cm de alto.",
    caracteristicas: "Hojas cortas convolutas, espigas 6-12 de 2-2,5 cm y espiguillas de 4-5 mm.",
    distribucion: "Variedad hallada únicamente en la región de Pipinas, cerca de la bahía de Samborombón.",
    imagen: ""
  },

  phalaris_paradoxa: {
    id: "phalaris_paradoxa",
    nombreCientifico: "Phalaris paradoxa",
    nombreVulgar: "Phalaris",
    familia: "17. Gramineae - Phalarideae",
    descripcion: "Hierba anual, de unos 20 cm de alto.",
    caracteristicas: "Glumas con quilla anchamente alada y ala puntiaguda, panoja cilíndrica de 4-6 cm y glumas aristuladas.",
    distribucion: "Europa; adventicia en América, hallada en el puerto de Eva Perón.",
    imagen: ""
  },

  phalaris_canariensis: {
    id: "phalaris_canariensis",
    nombreCientifico: "Phalaris canariensis",
    nombreVulgar: "Alpiste",
    familia: "17. Gramineae - Phalarideae",
    descripcion: "Hierba anual, de 30-80 cm de alto.",
    caracteristicas: "Espiguillas de 7-9 mm, panojas ovoides de 3-4 cm, glumas ovadas 3-nervadas y lemma fértil pubescente.",
    distribucion: "Islas Canarias y sur de Europa; cultivada para alimentar aves y a veces espontánea.",
    imagen: ""
  },

  phalaris_platensis: {
    id: "phalaris_platensis",
    nombreCientifico: "Phalaris platensis",
    nombreVulgar: "Phalaris",
    familia: "17. Gramineae - Phalarideae",
    descripcion: "Hierba anual, de 20-80 cm de alto.",
    caracteristicas: "Panojas cilíndricas de 5-10 cm, espiguillas de unos 4,5 mm y lemma pubescente excepto en el tercio superior.",
    distribucion: "Uruguay y nordeste de Argentina; en campos húmedos.",
    imagen: ""
  },

  phalaris_angusta: {
    id: "phalaris_angusta",
    nombreCientifico: "Phalaris angusta",
    nombreVulgar: "Phalaris",
    familia: "17. Gramineae - Phalarideae",
    descripcion: "Hierba anual glabra, de 1-1,5 m de alto.",
    caracteristicas: "Panojas cilíndricas de 8-15 cm, espiguillas de 3,5-4 mm y lemma uniformemente pubescente.",
    distribucion: "Sur del Brasil, Uruguay y nordeste de Argentina; común en campos húmedos y bosques de ribera.",
    imagen: ""
  },

  phalaris_minor: {
    id: "phalaris_minor",
    nombreCientifico: "Phalaris minor",
    nombreVulgar: "Phalaris",
    familia: "17. Gramineae - Phalarideae",
    descripcion: "Hierba anual, de 60-90 cm de alto.",
    caracteristicas: "Panojas ovoides o cortamente cilíndricas de 2-5(-7) cm, espiguillas de 5-6 mm y lemma pubescente salvo el tercio inferior.",
    distribucion: "Europa; cultivada como forrajera y adventicia en cultivos y rastrojos.",
    imagen: ""
  },

  anthoxanthum_odoratum: {
    id: "anthoxanthum_odoratum",
    nombreCientifico: "Anthoxanthum odoratum",
    nombreVulgar: "Anthoxanthum",
    familia: "17. Gramineae - Phalarideae",
    descripcion: "Hierba perenne fragante, de 30-60 cm de alto.",
    caracteristicas: "Hojas planas, panojas amarillentas de 2-6 cm, espiguillas de 8-10 mm y lemmas estériles cubiertas de pelos dorados.",
    distribucion: "Europa; cultivada para césped y a veces espontánea en suelos húmedos de la ribera.",
    imagen: ""
  },

  leersia_hexandra: {
    id: "leersia_hexandra",
    nombreCientifico: "Leersia hexandra",
    nombreVulgar: "Leersia",
    familia: "17. Gramineae - Oryzeae",
    descripcion: "Hierba perenne rizomatosa, de 20-50 cm de alto.",
    caracteristicas: "Hojas lanceoladas, espiguillas comprimidas de 4-5 mm, glumas ausentes y estambres 6.",
    distribucion: "Regiones cálidas; frecuente en el Delta, ribera platense y lugares pantanosos del interior.",
    imagen: ""
  },

  luziola_peruviana: {
    id: "luziola_peruviana",
    nombreCientifico: "Luziola peruviana",
    nombreVulgar: "Luziola",
    familia: "17. Gramineae - Oryzeae",
    descripcion: "Hierba perenne delicada, con tallos ascendentes de 10-40 cm.",
    caracteristicas: "Flores unisexuales en panojas masculinas terminales y femeninas axilares/terminales; lemma mútica.",
    distribucion: "América cálida; común en lugares pantanosos.",
    imagen: ""
  },

  zizaniopsis_bonariensis: {
    id: "zizaniopsis_bonariensis",
    nombreCientifico: "Zizaniopsis bonariensis",
    nombreVulgar: "Espadaña",
    familia: "17. Gramineae - Oryzeae",
    descripcion: "Hierba perenne robusta, palustre, con rizomas horizontales poderosos y tallos de hasta 2 m.",
    caracteristicas: "Hojas lineales de 1 m o más, panojas erectas de 0,5-1 m, espiguillas lanceoladas de 10 mm y lemma largamente aristada.",
    distribucion: "Pajonales del norte de Buenos Aires y Uruguay.",
    imagen: ""
  },

  // Cyperaceae
  carex_sellowiana: {
    id: "carex_sellowiana",
    nombreCientifico: "Carex sellowiana",
    nombreVulgar: "Carex sellowiana",
    familia: "18. Cyperaceae",
    descripcion: "Hierba perenne de unos 30 cm de alto.",
    caracteristicas: "Hojas lineales, mas largas que el tallo; espiguilla androgina solitaria, lanceolada, de 1,5-2 cm; utriculos elipsoideos, trigonales, de 6-7 mm.",
    distribucion: "Sur del Brasil, Paraguay, Uruguay y nordeste de la Argentina; hallada en Isla Martin Garcia y selva marginal de Punta Lara.",
    imagen: ""
  },

  carex_phalaroides: {
    id: "carex_phalaroides",
    nombreCientifico: "Carex phalaroides",
    nombreVulgar: "Carex phalaroides",
    familia: "18. Cyperaceae",
    descripcion: "Hierba perenne, baja, rizomatosa, de 4-15 cm de alto.",
    caracteristicas: "Hojas mas largas que los tallos, lineales y carenadas; espiguillas 4-6, de 7-10 mm, largamente pedunculadas; utriculos obovoideos de 3-4 mm.",
    distribucion: "America austral hasta el norte de la Argentina; en campos humedos. El manual menciona tambien la var. capitellata.",
    imagen: ""
  },

  carex_marcida: {
    id: "carex_marcida",
    nombreCientifico: "Carex marcida",
    nombreVulgar: "Carex marcida",
    familia: "18. Cyperaceae",
    descripcion: "Hierba perenne con rizoma horizontal largo y tallos erectos de 25-60 cm de alto.",
    caracteristicas: "Hojas lineales; espiguillas 6-10 agrupadas en espiga terminal oblonga ebracteada; utriculos plano-convexos, ovados, largamente rostrados, de 3-3,5 mm.",
    distribucion: "America del Norte; rara en Uruguay y Argentina, en suelos humedos.",
    imagen: ""
  },

  carex_divulsa: {
    id: "carex_divulsa",
    nombreCientifico: "Carex divulsa",
    nombreVulgar: "Carex divulsa",
    familia: "18. Cyperaceae",
    descripcion: "Hierba perenne con rizoma corto y tallos numerosos de 30-100 cm de alto.",
    caracteristicas: "Hojas mas cortas que los tallos, lineales; espiga interrumpida de 5-8 cm con bractea muy corta; espiguillas 6-8; utriculos lanceolado-ovados de 3-4 mm.",
    distribucion: "Viejo Mundo; adventicia en la Argentina.",
    imagen: ""
  },

  carex_brongniartii: {
    id: "carex_brongniartii",
    nombreCientifico: "Carex brongniartii",
    nombreVulgar: "Carex brongniartii",
    familia: "18. Cyperaceae",
    descripcion: "Hierba perenne con rizomas cortos y tallos de 40-90 cm de alto.",
    caracteristicas: "Hojas cortas y rigidas; espiga densa, cilindrica, de 4-6 cm, con bractea setacea basal; utriculos ovoideos, coriaceos, plano-convexos, pardos, con rostro hendido.",
    distribucion: "America austral; hallada en lugares humedos de San Isidro y Belgrano.",
    imagen: ""
  },

  carex_bonariensis: {
    id: "carex_bonariensis",
    nombreCientifico: "Carex bonariensis",
    nombreVulgar: "Carex bonariensis",
    familia: "18. Cyperaceae",
    descripcion: "Hierba perenne con rizoma corto y tallos de 10-40 cm de alto.",
    caracteristicas: "Espiga parda, densa o interrumpida, piramidal, de 1-4 cm; utriculos papilosos o verrugosos, ovado-lanceolados, pajizos, con rostro corto bidentado. El manual menciona var. achalensis y var. trachycystis.",
    distribucion: "America austral; comun en la estepa climax y en campos humedos.",
    imagen: ""
  },

  carex_uruguensis: {
    id: "carex_uruguensis",
    nombreCientifico: "Carex uruguensis",
    nombreVulgar: "Carex uruguensis",
    familia: "18. Cyperaceae",
    descripcion: "Hierba perenne con rizomas cortos y tallos de unos 30 cm de alto.",
    caracteristicas: "Hojas tan largas como el tallo; utriculos lisos, lanceolados, pajizos, largamente rostrados, glabros, de 2,5-3 mm; espiga interrumpida de 2-3 cm. El manual menciona var. pseudoechinata.",
    distribucion: "Sur del Brasil, Uruguay y norte de la Argentina; en suelos humedos.",
    imagen: ""
  },

  carex_sororia: {
    id: "carex_sororia",
    nombreCientifico: "Carex sororia",
    nombreVulgar: "Carex sororia",
    familia: "18. Cyperaceae",
    descripcion: "Hierba con tallos de 25-60 cm de alto.",
    caracteristicas: "Utriculos lisos, anchamente elipticos, castanos, de 4-5 mm, contraidos en rostro hendido; espiga ovada de 15-18 mm.",
    distribucion: "Brasil, Paraguay, Uruguay y norte y centro de la Argentina; en terrenos humedos.",
    imagen: ""
  },

  carex_pseudocyperus: {
    id: "carex_pseudocyperus",
    nombreCientifico: "Carex pseudocyperus var. polysticha",
    nombreVulgar: "Carex pseudocyperus",
    familia: "18. Cyperaceae",
    descripcion: "Hierba con tallos de 30-75 cm de alto, escabrosos en los angulos y foliados.",
    caracteristicas: "Hojas largas y planas; espiguillas pedunculadas, nutantes, 5-6; terminal masculina cilindrica de 3-6 cm y laterales femeninas densifloras; utriculos elipsoideos de unos 5 mm.",
    distribucion: "America del Sur; lugares pantanosos.",
    imagen: ""
  },

  carex_extensa: {
    id: "carex_extensa",
    nombreCientifico: "Carex extensa var. vixdentata",
    nombreVulgar: "Carex extensa",
    familia: "18. Cyperaceae",
    descripcion: "Hierba cespitosa de 15-35 cm de alto.",
    caracteristicas: "Hojas largas; espiguillas casi todas sesiles y erectas, 3-5; superior masculina, otras femeninas cilindricas de 1-2,5 cm; utriculos obovoideos, pajizos, con rostro corto tridentado.",
    distribucion: "Uruguay y nordeste de la Argentina; en suelos humedos.",
    imagen: ""
  },

  carex_riparia: {
    id: "carex_riparia",
    nombreCientifico: "Carex riparia var. chilensis",
    nombreVulgar: "Carex riparia",
    familia: "18. Cyperaceae",
    descripcion: "Hierba perenne con rizomas cundidores y tallos de 1 m de alto.",
    caracteristicas: "Hojas largas y planas; espiguillas masculinas 3-5, cilindricas, de 2-6 cm; femeninas 2-5, de 3-9 cm; utriculos lisos, ovoideo-lanceolados, de 6-7 mm.",
    distribucion: "America austral; comun en los pajonales del Delta y de la ribera platense.",
    imagen: ""
  },

  carex_tweediana: {
    id: "carex_tweediana",
    nombreCientifico: "Carex tweediana",
    nombreVulgar: "Carex tweediana",
    familia: "18. Cyperaceae",
    descripcion: "Hierba perenne con rizoma horizontal, tallos de 15-60 cm y hojas mas largas que el tallo.",
    caracteristicas: "Espiguillas masculinas 1-3, cilindricas, de 1,5-3,5 cm; femeninas 2-5, cilindricas, de 2-5 cm; utriculos hispidos, suberosos, orbiculado-ovales, trigonales, de 4-5 mm.",
    distribucion: "Sur del Brasil, Uruguay y nordeste de la Argentina; en bosques del Delta y de la ribera del Plata.",
    imagen: ""
  },

  androtrichum_trigynum: {
    id: "androtrichum_trigynum",
    nombreCientifico: "Androtrichum trigynum",
    nombreVulgar: "Androtrichum trigynum",
    familia: "18. Cyperaceae",
    descripcion: "Planta rizomatosa, afila, con espiguillas fasciculadas e involucro de 4-5 bracteas rigidas.",
    caracteristicas: "Tallos de 50 cm; fasciculos de espiguillas amontonados en cabezuelas esfericas; estambres acrescentes despues de la antesis, dando aspecto lanoso.",
    distribucion: "Dunas del sur del Brasil, Uruguay y este de la Republica Argentina; muy comun en dunas litorales de Pipinas y San Clemente del Tuyu.",
    imagen: ""
  },

  cyperus_sesquiflorus: {
    id: "cyperus_sesquiflorus",
    nombreCientifico: "Cyperus sesquiflorus",
    nombreVulgar: "Cyperus sesquiflorus",
    familia: "18. Cyperaceae",
    descripcion: "Planta cespitosa con rizoma corto y tallos lisos de 5-20 cm de alto.",
    caracteristicas: "Hojas 4-6 mas cortas que el tallo; inflorescencia de 1-3 espigas en capitulo; espiguillas unifloras ovado-lanceoladas de 2,5-3,4 mm; estambres 2.",
    distribucion: "Africa y America; hallada en suelos humedos de la Isla Martin Garcia.",
    imagen: ""
  },

  cyperus_obtusatus: {
    id: "cyperus_obtusatus",
    nombreCientifico: "Cyperus obtusatus",
    nombreVulgar: "Cyperus obtusatus",
    familia: "18. Cyperaceae",
    descripcion: "Planta rizomatosa de 15-45 cm de alto.",
    caracteristicas: "Hojas planas y lineales; espiguillas bifloras, ovado-lanceoladas, con 5 glumas de carena lisa, amontonadas en un capitulo eliptico de 6-10 mm.",
    distribucion: "America calida, Africa y Asia; se halla en el Delta y en el cesped de la ribera platense.",
    imagen: ""
  },

  cyperus_brevifolius: {
    id: "cyperus_brevifolius",
    nombreCientifico: "Cyperus brevifolius",
    nombreVulgar: "Cyperus brevifolius",
    familia: "18. Cyperaceae",
    descripcion: "Planta perenne con rizoma rastrero largo y tallos lisos de 12-30 cm de alto.",
    caracteristicas: "Con 1-2 hojas cortas y planas; espiguillas unifloras, lanceoladas, de 2,5-3 mm, con glumas blancas de carena espinulosa; estambre 1.",
    distribucion: "Regiones tropicales; hallada en el Delta.",
    imagen: ""
  },

  cyperus_laevigatus: {
    id: "cyperus_laevigatus",
    nombreCientifico: "Cyperus laevigatus",
    nombreVulgar: "Cyperus laevigatus",
    familia: "18. Cyperaceae",
    descripcion: "Planta perenne, rizomatosa, de 5-25 cm de alto.",
    caracteristicas: "Hojas reducidas a las vainas, salvo la superior corta; espiguillas deprimidas dorsiventralmente, lanceoladas, de 7-12 mm, con 10-15 flores.",
    distribucion: "Cosmopolita; hallada en Mercedes.",
    imagen: ""
  },

  cyperus_megapotamicus: {
    id: "cyperus_megapotamicus",
    nombreCientifico: "Cyperus megapotamicus var. jaeggi",
    nombreVulgar: "Cyperus megapotamicus",
    familia: "18. Cyperaceae",
    descripcion: "Planta perenne, rizomatosa, laxamente hojosa, de 25-60 cm de alto.",
    caracteristicas: "Hojas 3-5, lineales; glumas castanas y obtusas; espiguillas ovado-lanceoladas, obtusas, 6-14-floras, de 5-10 mm.",
    distribucion: "Sur del Brasil, Uruguay y nordeste de la Argentina; Delta y cesped de la ribera platense.",
    imagen: ""
  },

  cyperus_tener: {
    id: "cyperus_tener",
    nombreCientifico: "Cyperus tener",
    nombreVulgar: "Cyperus tener",
    familia: "18. Cyperaceae",
    descripcion: "Planta perenne con rizoma delgado y tallos lisos de 8-10 cm de alto.",
    caracteristicas: "Con 1-2 hojas cortas; glumas blanquecinas, carenado-naviculares, obtusas; inflorescencia en capitulo seudolateral; espiguillas 15-25, lineal-lanceoladas, 16-30-floras, de 15-18 mm.",
    distribucion: "America austral; hallado en San Isidro, Vicente Lopez, etc.",
    imagen: ""
  },

  cyperus_ferax: {
    id: "cyperus_ferax",
    nombreCientifico: "Cyperus ferax",
    nombreVulgar: "Cyperus ferax",
    familia: "18. Cyperaceae",
    descripcion: "Planta cespitosa, de 20-80 cm de alto.",
    caracteristicas: "Hojas en la parte inferior del tallo, planas y lineales; espiguillas cilindricas con raquis articulado al nivel de las glumas, dividiendose a la madurez en fragmentos uninucigenos.",
    distribucion: "Regiones calidas; comun en los pajonales del Delta y de la ribera.",
    imagen: ""
  },

  cyperus_virens: {
    id: "cyperus_virens",
    nombreCientifico: "Cyperus virens",
    nombreVulgar: "Cyperus virens",
    familia: "18. Cyperaceae",
    descripcion: "Planta perenne, cespitosa, con tallos triquetros semialados, hojosos en la base, de cerca de 1 m de alto.",
    caracteristicas: "Hojas lineales, asperas en el borde; inflorescencia umbeliforme laxa o contraida, con cabezuelas amarillentas; espiguillas ovadas, comprimidas, 14-28-floras, de 5-8 mm.",
    distribucion: "America calida; comun en el Delta y en la ribera del Plata.",
    imagen: ""
  },

  cyperus_surinamensis: {
    id: "cyperus_surinamensis",
    nombreCientifico: "Cyperus surinamensis",
    nombreVulgar: "Cyperus surinamensis",
    familia: "18. Cyperaceae",
    descripcion: "Planta perenne, rizomatosa, con tallos trigonales de 15-40 cm, cubiertos de espinitas retrorsas.",
    caracteristicas: "Hojas largas, rigidas y carenadas; inflorescencia en antela compuesta; cabezuelas esfericas o trilobadas; espiguillas ovado-lanceoladas, 14-18-floras, de 3-5 mm.",
    distribucion: "America tropical y subtropical; en los pajonales del Delta.",
    imagen: ""
  },

  cyperus_haspan: {
    id: "cyperus_haspan",
    nombreCientifico: "Cyperus haspan subsp. juncoides var. riparius",
    nombreVulgar: "Cyperus haspan",
    familia: "18. Cyperaceae",
    descripcion: "Planta perenne, cespitosa, de 50 cm de alto.",
    caracteristicas: "Hojas basales lineales; tallo liso; aquenio blanco o vitreo; inflorescencia en umbela compuesta laxa, con fasciculos de 1-3 espiguillas lineal-lanceoladas, 15-25-floras, de 5-8 mm.",
    distribucion: "Paraguay y nordeste de la Argentina; comun en la ribera.",
    imagen: ""
  },

  cyperus_cayennensis: {
    id: "cyperus_cayennensis",
    nombreCientifico: "Cyperus cayennensis",
    nombreVulgar: "Cyperus cayennensis",
    familia: "18. Cyperaceae",
    descripcion: "Planta perenne, rizomatosa, con tallos triquetros, lisos, hojosos en la base, de 15-45 cm de alto.",
    caracteristicas: "Glumas persistentes sobre la raquilla caduca; inflorescencia con 4-8 espigas simples, cilindricas, obtusas; espiguillas oblongo-lanceoladas, 2-5-floras.",
    distribucion: "America calida; comun en suelos humedos.",
    imagen: ""
  },

  cyperus_eragrostis: {
    id: "cyperus_eragrostis",
    nombreCientifico: "Cyperus eragrostis",
    nombreVulgar: "Cyperus eragrostis",
    familia: "18. Cyperaceae",
    descripcion: "Planta perenne con rizoma corto y tallos lisos de hasta 50 cm de alto.",
    caracteristicas: "Hojas planas y carenadas; aquenios obovoideos; inflorescencia en umbela compuesta, a veces contraida y capituliforme; espiguillas verde claro, 18-32-floras, de 11-15 mm.",
    distribucion: "America calida; comun en lugares muy humedos.",
    imagen: ""
  },

  cyperus_luzulae: {
    id: "cyperus_luzulae",
    nombreCientifico: "Cyperus luzulae var. entrerianus",
    nombreVulgar: "Cyperus luzulae",
    familia: "18. Cyperaceae",
    descripcion: "Planta perenne, cespitosa, de 20-60 cm de alto.",
    caracteristicas: "Hojas tan largas o mas que el tallo; inflorescencia en antela laxa con muchos fasciculos globosos; espiguillas ovadas, agudas, muy comprimidas, de 4-5 mm, con 15-25 flores.",
    distribucion: "America tropical; raro en Puerto Nuevo.",
    imagen: ""
  },

  cyperus_reflexus: {
    id: "cyperus_reflexus",
    nombreCientifico: "Cyperus reflexus",
    nombreVulgar: "Cyperus reflexus",
    familia: "18. Cyperaceae",
    descripcion: "Planta perenne, rizomatosa, de unos 50 cm de alto, con tallos hojosos en la base.",
    caracteristicas: "Inflorescencia densa capituliforme; cabezuelas castano rojizas con 3 bracteas foliaceas; espiguillas fasciculadas, lanceoladas, 15-30-floras, de 6-12 mm. El manual menciona var. fraternus.",
    distribucion: "America calida; muy comun en campos humedos.",
    imagen: ""
  },

  cyperus_incomptus: {
    id: "cyperus_incomptus",
    nombreCientifico: "Cyperus incomptus",
    nombreVulgar: "Cyperus incomptus",
    familia: "18. Cyperaceae",
    descripcion: "Planta perenne, cespitosa, de 40-75 cm de alto.",
    caracteristicas: "Hojas asperas en los bordes; cabezuelas pajizas; espiguillas 8-30, fasciculadas, lanceolado-lineales, poco comprimidas, 20-30-floras, de 15-22 mm.",
    distribucion: "America del Sur; citada para la Isla Martin Garcia.",
    imagen: ""
  },

  cyperus_esculentus: {
    id: "cyperus_esculentus",
    nombreCientifico: "Cyperus esculentus var. leptostachys",
    nombreVulgar: "Cyperus esculentus",
    familia: "18. Cyperaceae",
    descripcion: "Planta perenne, largamente rizomatosa, con rizomas terminados en tuberculos ovoideos rojizos.",
    caracteristicas: "Tallos triquetros lisos de 30-50 cm; hojas planas; espiguillas pardo-amarillentas lineales de 15-40 mm por 1,5 mm; el manual menciona tambien var. macrostachys.",
    distribucion: "America; comun en suelos humedos.",
    imagen: ""
  },

  cyperus_corymbosus: {
    id: "cyperus_corymbosus",
    nombreCientifico: "Cyperus corymbosus var. subnodosus",
    nombreVulgar: "Cyperus corymbosus",
    familia: "18. Cyperaceae",
    descripcion: "Planta perenne, estolonifera, con estolones de 10-15 cm cubiertos de bracteas rojizas.",
    caracteristicas: "Tallos de 40-80 cm; tallo redondeado en la parte inferior, irregularmente nudoso cuando seco; inflorescencia seudolateral en umbela simple o algo ramificada.",
    distribucion: "America calida; en suelos inundables.",
    imagen: ""
  },

  cyperus_rotundus: {
    id: "cyperus_rotundus",
    nombreCientifico: "Cyperus rotundus",
    nombreVulgar: "Cipero; cebollin",
    familia: "18. Cyperaceae",
    descripcion: "Planta perenne, estolonifera, con estolones terminados en tuberculos.",
    caracteristicas: "Tallos lisos de 20-30 cm, con pocas hojas basales; espiguillas castano-rojizas lineal-lanceoladas de 1-3 cm, con 15-30 flores; glumas obtusas y decurrentes.",
    distribucion: "Regiones calidas; muy comun en suelos humedos modificados. Plaga de viveros.",
    imagen: ""
  },

  cyperus_imbricatus: {
    id: "cyperus_imbricatus",
    nombreCientifico: "Cyperus imbricatus",
    nombreVulgar: "Cyperus imbricatus",
    familia: "18. Cyperaceae",
    descripcion: "Planta perenne, cespitosa, de 20-80 cm de alto.",
    caracteristicas: "Hojas pocas; raquilla no alada y no articulada sobre las glumas inferiores esteriles; glumas orbiculares, mucronadas; aquenios blancos.",
    distribucion: "Regiones calidas; en lugares muy humedos.",
    imagen: ""
  },

  cyperus_exaltatus: {
    id: "cyperus_exaltatus",
    nombreCientifico: "Cyperus exaltatus",
    nombreVulgar: "Cyperus exaltatus",
    familia: "18. Cyperaceae",
    descripcion: "Planta cortamente rizomatosa, con tallos lisos de unos 75 cm de alto.",
    caracteristicas: "Hojas pocas, largas; raquilla alada; espiguillas en angulo muy agudo con el eje de la espiga; fruto ovoide, amarillento.",
    distribucion: "Regiones tropicales; hallada en Puerto Nuevo.",
    imagen: ""
  },

  cyperus_digitatus: {
    id: "cyperus_digitatus",
    nombreCientifico: "Cyperus digitatus var. obtusifructus",
    nombreVulgar: "Cyperus digitatus",
    familia: "18. Cyperaceae",
    descripcion: "Planta cespitosa, cortamente rizomatosa, con tallos de hasta 1 m de alto, hojosos en la base y lisos.",
    caracteristicas: "Espiguillas casi en angulo recto con el eje de la espiga; fruto eliptico, gris; inflorescencia en umbela compuesta con espigas densas de espiguillas lanceolado-lineales.",
    distribucion: "Norte y centro de la Argentina; comun en los pajonales del Delta y de la ribera del Plata.",
    imagen: ""
  },

  cyperus_laetus: {
    id: "cyperus_laetus",
    nombreCientifico: "Cyperus laetus subsp. oostachyus",
    nombreVulgar: "Cyperus laetus",
    familia: "18. Cyperaceae",
    descripcion: "Planta rizomatosa, con tallos de 50-100 cm de alto.",
    caracteristicas: "Hojas lustrosas tan largas como el tallo; raquilla articulada sobre las dos glumas inferiores esteriles; espiguillas en espigas ovoideas densas; antela con 5-7 radios.",
    distribucion: "America del Sur calida; en suelos humedos.",
    imagen: ""
  },

  cyperus_giganteus: {
    id: "cyperus_giganteus",
    nombreCientifico: "Cyperus giganteus",
    nombreVulgar: "Cyperus giganteus",
    familia: "18. Cyperaceae",
    descripcion: "Planta rizomatosa, con rizomas gruesos y tallos lisos de 1-2 m de alto.",
    caracteristicas: "Con pocas hojas cortas; ocreas de boca oblicua y aguda; espiguillas muy abiertas respecto al raquis, laxas, redondeadas, de 11-13 mm.",
    distribucion: "America calida; frecuente en los pajonales del Delta.",
    imagen: ""
  },

  cyperus_prolixus: {
    id: "cyperus_prolixus",
    nombreCientifico: "Cyperus prolixus",
    nombreVulgar: "Cyperus prolixus",
    familia: "18. Cyperaceae",
    descripcion: "Planta rizomatosa de cerca de 1 m de alto.",
    caracteristicas: "Tallos lisos, hojosos en la base; hojas escabrosas en los bordes; ocreas largamente bifidas; antela compuesta con radios de primer, segundo y tercer orden, a veces cuarto.",
    distribucion: "America calida; en pajonales del Delta y de la ribera, orillas de arroyos, etc.",
    imagen: ""
  },

  cyperus_pohlii: {
    id: "cyperus_pohlii",
    nombreCientifico: "Cyperus pohlii",
    nombreVulgar: "Cyperus pohlii",
    familia: "18. Cyperaceae",
    descripcion: "Planta rizomatosa de cerca de 1 m de alto.",
    caracteristicas: "Tallos angulosos y lisos; hojas lustrosas, largas; ocreas largamente bifidas; antela con radios de primer y segundo orden solamente.",
    distribucion: "Brasil y region del Plata; comun en los pajonales del Delta y de la ribera.",
    imagen: ""
  },

  scirpus_cubensis: {
    id: "scirpus_cubensis",
    nombreCientifico: "Scirpus cubensis var. paraguayensis",
    nombreVulgar: "Scirpus cubensis",
    familia: "18. Cyperaceae",
    descripcion: "Planta perenne, rizomatosa, de 20-75 cm de alto.",
    caracteristicas: "Hojas basales lineales, escabrosas en el borde; flores sin sedas hipoginas; estilo bifido; inflorescencia en capitulo solitario globoso; aquenio lenticular pajizo.",
    distribucion: "America del Sur; en suelos humedos.",
    imagen: ""
  },

  scirpus_cernuus: {
    id: "scirpus_cernuus",
    nombreCientifico: "Scirpus cernuus",
    nombreVulgar: "Scirpus cernuus",
    familia: "18. Cyperaceae",
    descripcion: "Hierba anual, cespitosa, de 3-20 cm de alto.",
    caracteristicas: "Hojas pocas, filiformes; flores sin sedas hipoginas; estilo trifido; inflorescencia capituliforme con 1-3 espiguillas sesiles apicales, de 2-10 mm.",
    distribucion: "Cosmopolita; en suelos humedos.",
    imagen: ""
  },

  scirpus_giganteus: {
    id: "scirpus_giganteus",
    nombreCientifico: "Scirpus giganteus",
    nombreVulgar: "Cortadera; paja brava",
    familia: "18. Cyperaceae",
    descripcion: "Hierba perenne, robusta, rizomatosa, de 1,5-1,8 m de alto.",
    caracteristicas: "Hojas muy largas, con bordes cortantes; inflorescencia umbeliforme compuesta; espiguillas ovoideas de 5-7 mm, en fasciculos hemisfericos.",
    distribucion: "Sur del Brasil, Paraguay, Uruguay y nordeste de la Argentina; muy comun en los pajonales del Delta y de la ribera platense.",
    imagen: ""
  },

  scirpus_chilensis: {
    id: "scirpus_chilensis",
    nombreCientifico: "Scirpus chilensis",
    nombreVulgar: "Scirpus chilensis",
    familia: "18. Cyperaceae",
    descripcion: "Hierba perenne, rizomatosa.",
    caracteristicas: "Tallos triquetros con angulos muy agudos, de hasta 1 m; hojas basales con lamina lineal corta; inflorescencia seudolateral con 1-6 espigas sesiles; cerdas del perianto con pelos retrorsos.",
    distribucion: "America del Sur; muy frecuente en charcas y arroyos.",
    imagen: ""
  },

  scirpus_americanus: {
    id: "scirpus_americanus",
    nombreCientifico: "Scirpus americanus var. polyphyllus",
    nombreVulgar: "Scirpus americanus",
    familia: "18. Cyperaceae",
    descripcion: "Hierba perenne, rizomatosa.",
    caracteristicas: "Tallos trigonales con angulos redondeados, de 10-100 cm; hojas basales lineales cortas; inflorescencia con 1-5 espiguillas sesiles; cerdas del perianto con pelos retrorsos.",
    distribucion: "Cosmopolita; comun en lugares pantanosos.",
    imagen: ""
  },

  scirpus_paludosus: {
    id: "scirpus_paludosus",
    nombreCientifico: "Scirpus paludosus",
    nombreVulgar: "Scirpus paludosus",
    familia: "18. Cyperaceae",
    descripcion: "Hierba perenne, rizomatosa, con tallos trigonales de 50-150 cm de alto.",
    caracteristicas: "Plantas con hojas lineales de 30-50 cm; antela simple o compuesta; espiguillas ovoideas de 10-25 mm. El manual menciona la especie parecida Scirpus robustus.",
    distribucion: "America; raro en la region platense.",
    imagen: ""
  },

  scirpus_californicus: {
    id: "scirpus_californicus",
    nombreCientifico: "Scirpus californicus",
    nombreVulgar: "Junco",
    familia: "18. Cyperaceae",
    descripcion: "Hierba con gruesos rizomas y tallos afilos de 1-2 m de alto.",
    caracteristicas: "Antela compuesta, nutante, con bractea rigida punzante; espiguillas numerosas, ovoideas, de 8-18 mm; cerdas del perianto ciliado-plumosas.",
    distribucion: "America; muy comun en arroyos, zanjas y playas arenosas, formando juncales. Utilizado para fabricar esteras y cortinas.",
    imagen: ""
  },

  scirpus_validus: {
    id: "scirpus_validus",
    nombreCientifico: "Scirpus validus",
    nombreVulgar: "Scirpus validus",
    familia: "18. Cyperaceae",
    descripcion: "Hierba con rizomas gruesos y tallos afilos de 1,5-2,5 m de alto.",
    caracteristicas: "Antela compuesta, laxa, lateral, con bractea aguda de 1-6 cm; espiguillas ovoideas castanas de 4-7 mm; cerdas del perianto retrorso-hispidas.",
    distribucion: "America; raro en la region.",
    imagen: ""
  },

  fimbristylis_squarrosa: {
    id: "fimbristylis_squarrosa",
    nombreCientifico: "Fimbristylis squarrosa",
    nombreVulgar: "Fimbristylis squarrosa",
    familia: "18. Cyperaceae",
    descripcion: "Hierba perenne, cespitosa, de 10-20 cm de alto.",
    caracteristicas: "Tallos filiformes; hojas estrechamente lineales; estilo bifido; antelas compuestas; espiguillas cilindrico-conicas; aquenio blanco, reticulado.",
    distribucion: "America tropical, Africa y Asia; rara en la region, citada para Puerto Nuevo.",
    imagen: ""
  },

  fimbristylis_autumnalis: {
    id: "fimbristylis_autumnalis",
    nombreCientifico: "Fimbristylis autumnalis",
    nombreVulgar: "Fimbristylis autumnalis",
    familia: "18. Cyperaceae",
    descripcion: "Hierba perenne con rizoma corto y tallos de 25-35 cm de alto.",
    caracteristicas: "Estilo trifido; antela compuesta; espiguillas solitarias en el extremo de los radios, lanceoladas, agudas, de 4-8 mm; glumas rojizas y mucronadas.",
    distribucion: "Regiones tropicales; se halla en la ribera del Plata.",
    imagen: ""
  },

  heleocharis_nodulosa: {
    id: "heleocharis_nodulosa",
    nombreCientifico: "Heleocharis nodulosa",
    nombreVulgar: "Heleocharis nodulosa",
    familia: "18. Cyperaceae",
    descripcion: "Hierba perenne, con rizoma horizontal y tallos de 30-80 cm de alto.",
    caracteristicas: "Vaina con diente desarrollado; tallos huecos con tabiques horizontales; espiguilla pluriflora oblongo-lanceolada de 8-15 mm; estilo 2-3-fido.",
    distribucion: "America; comun en charcas y arroyos.",
    imagen: ""
  },

  heleocharis_parodii: {
    id: "heleocharis_parodii",
    nombreCientifico: "Heleocharis parodii",
    nombreVulgar: "Heleocharis parodii",
    familia: "18. Cyperaceae",
    descripcion: "Hierba perenne, cespitosa, cortamente rizomatosa, con tallos robustos de 30-50 cm de alto.",
    caracteristicas: "Vaina con diente desarrollado; tallos macizos, no tabicados; espiguilla cilindrica de 2-3 cm por 3-4 mm; glumas numerosas, espatuladas y acuminadas; estilo trifido.",
    distribucion: "Nordeste de la Argentina; rara en la region, mas frecuente en pantanos del norte bonaerense.",
    imagen: ""
  },

  heleocharis_flavescens: {
    id: "heleocharis_flavescens",
    nombreCientifico: "Heleocharis flavescens",
    nombreVulgar: "Heleocharis flavescens",
    familia: "18. Cyperaceae",
    descripcion: "Hierba con rizomas filiformes largos y tallos muy delgados de 5-40 cm de alto.",
    caracteristicas: "Vainas con apice membranaceo blanco y transparente; estilo bifido; espiguilla ovada de 2-6 mm; glumas obtusas.",
    distribucion: "America calida; en suelos humedos.",
    imagen: ""
  },

  heleocharis_macrostachya: {
    id: "heleocharis_macrostachya",
    nombreCientifico: "Heleocharis macrostachya",
    nombreVulgar: "Heleocharis macrostachya",
    familia: "18. Cyperaceae",
    descripcion: "Hierba con rizoma fuerte horizontal y tallos de 10-60 cm de alto.",
    caracteristicas: "Vainas truncadas en el apice, con borde herbaceo verde; estilo bifido; espiguilla lanceolada, aguda, de 15-25 mm; glumas agudas.",
    distribucion: "America; frecuente en la orilla de zanjas y arroyos.",
    imagen: ""
  },

  heleocharis_obtusa: {
    id: "heleocharis_obtusa",
    nombreCientifico: "Heleocharis obtusa",
    nombreVulgar: "Heleocharis obtusa",
    familia: "18. Cyperaceae",
    descripcion: "Hierba anual, erecta, de 3-30 cm de alto, con tallos capilares.",
    caracteristicas: "Vainas oblicuas en el apice, con borde herbaceo verde; estilo bifido; espiguilla ovoidea, obtusa, de 2-13 mm; glumas obtusas.",
    distribucion: "America; rara en la region, citada para La Plata.",
    imagen: ""
  },

  heleocharis_bonariensis: {
    id: "heleocharis_bonariensis",
    nombreCientifico: "Heleocharis bonariensis",
    nombreVulgar: "Heleocharis bonariensis",
    familia: "18. Cyperaceae",
    descripcion: "Hierba con rizomas horizontales muy largos y tallos de 5-40 cm de alto.",
    caracteristicas: "Estilo trifido; fruto con 12-14 costillas longitudinales y estrias horizontales; vaina superior oblicua con borde herbaceo; espiguillas lanceoladas de 4-8 mm.",
    distribucion: "America del Sur y Central; muy comun en pantanos, arroyos y cesped de la ribera del Plata.",
    imagen: ""
  },

  heleocharis_radicans: {
    id: "heleocharis_radicans",
    nombreCientifico: "Heleocharis radicans",
    nombreVulgar: "Heleocharis radicans",
    familia: "18. Cyperaceae",
    descripcion: "Hierba con rizoma largo y delgado, y tallos estriados de 3-10 cm de alto.",
    caracteristicas: "Estilo trifido; fruto costillado; vaina superior truncada oblicuamente, escarioso-hialina; espiguilla lanceolada de 3-5 mm, con glumas ovado-lanceoladas.",
    distribucion: "America templado-calida; rara en la region, citada para Puerto Nuevo.",
    imagen: ""
  },

  heleocharis_viridans: {
    id: "heleocharis_viridans",
    nombreCientifico: "Heleocharis viridans",
    nombreVulgar: "Heleocharis viridans",
    familia: "18. Cyperaceae",
    descripcion: "Hierba cespitosa, de 15-40 cm de alto.",
    caracteristicas: "Tallos cuadrangulares y capilares; vaina superior algo oblicua, aguda; espiguilla ovada, aguda, multiflora, a menudo prolifera; glumas ovadas obtusas con margen hialino.",
    distribucion: "America del Sur; rara en Avellaneda y Vicente Lopez.",
    imagen: ""
  },

  heleocharis_dunensis: {
    id: "heleocharis_dunensis",
    nombreCientifico: "Heleocharis dunensis",
    nombreVulgar: "Heleocharis dunensis",
    familia: "18. Cyperaceae",
    descripcion: "Hierba con rizomas horizontales largos y tallos fasciculados debiles de 10-50 cm de alto.",
    caracteristicas: "Tallos pentagonales, de seccion estrellada, capilares; vaina superior oblicua con borde rojizo; espiguilla oblonga, obtusa, de 5-9 mm; glumas anchamente ovales.",
    distribucion: "Uruguay y nordeste de la Argentina; hallada en banados de la provincia de Buenos Aires.",
    imagen: ""
  },

  heleocharis_montevidensis: {
    id: "heleocharis_montevidensis",
    nombreCientifico: "Heleocharis montevidensis",
    nombreVulgar: "Heleocharis montevidensis",
    familia: "18. Cyperaceae",
    descripcion: "Hierba con rizomas horizontales y tallos de 5-45 cm de alto.",
    caracteristicas: "Tallos no cuadrangulares ni pentagonales; espiguillas ovoideas, obtusas, de 4-13 mm; glumas obtusas; aquenio finamente punteado; vainas truncadas.",
    distribucion: "America templado-calida; rara en la region.",
    imagen: ""
  },

  heleocharis_haumaniana: {
    id: "heleocharis_haumaniana",
    nombreCientifico: "Heleocharis haumaniana",
    nombreVulgar: "Heleocharis haumaniana",
    familia: "18. Cyperaceae",
    descripcion: "Hierba con rizoma horizontal robusto y tallos de 25-60 cm de alto.",
    caracteristicas: "Tallos no pentagonales; espiguillas lanceoladas, plurifloras, de 15-25 mm; glumas lanceoladas, agudas; aquenios lisos; vainas ligeramente oblicuas.",
    distribucion: "Uruguay y nordeste de la Argentina; en charcas.",
    imagen: ""
  },

  rhynchospora_luzuliformis: {
    id: "rhynchospora_luzuliformis",
    nombreCientifico: "Rhynchospora luzuliformis",
    nombreVulgar: "Rhynchospora luzuliformis",
    familia: "18. Cyperaceae",
    descripcion: "Hierba perenne, rizomatosa, con estolones largos cubiertos de bracteas; tallos hojosos de 20-30 cm de alto.",
    caracteristicas: "Estilo profundamente bifido; espiguillas de 3-3,5 mm, agrupadas en panojas contraidas; hojas lineales.",
    distribucion: "America austral; hallada en los campos de Abasto.",
    imagen: ""
  },

  rhynchospora_corymbosa: {
    id: "rhynchospora_corymbosa",
    nombreCientifico: "Rhynchospora corymbosa var. bonariensis",
    nombreVulgar: "Rhynchospora corymbosa",
    familia: "18. Cyperaceae",
    descripcion: "Hierba perenne, rizomatosa, de aproximadamente 1 m de alto, con hojas planas de 10-15 mm de ancho.",
    caracteristicas: "Estilo indiviso; inflorescencia en panoja corimbiforme muy laxa; espiguillas agrupadas en fasciculos de 3-5, largamente pedunculados; rostro casi tan largo como el aquenio.",
    distribucion: "Region platense; muy comun en pajonales del Delta y de la ribera.",
    imagen: ""
  },

  rhynchospora_legrandii: {
    id: "rhynchospora_legrandii",
    nombreCientifico: "Rhynchospora legrandii",
    nombreVulgar: "Rhynchospora legrandii",
    familia: "18. Cyperaceae",
    descripcion: "Hierba perenne, de unos 60 cm de alto, con hojas planas de 10 mm de ancho.",
    caracteristicas: "Estilo indiviso; panojas contraidas; fasciculos muy densos, amontonados principalmente en el apice del tallo; espiguillas gruesas, castanas, de 8-10 mm.",
    distribucion: "Uruguay y riberas del Plata; en pajonales.",
    imagen: ""
  },

  rhynchospora_rostrata: {
    id: "rhynchospora_rostrata",
    nombreCientifico: "Rhynchospora rostrata",
    nombreVulgar: "Rhynchospora rostrata",
    familia: "18. Cyperaceae",
    descripcion: "Hierba perenne, de 1 m o mas de alto, con hojas planas de 15 mm de ancho.",
    caracteristicas: "Estilo indiviso; fasciculos agrupados en panojas contraidas terminales y laterales; espiguillas angostas de 7-8 mm; rostro mas largo que el aquenio.",
    distribucion: "Brasil y nordeste de la Argentina; comun en pajonales del Delta y de la ribera del Plata.",
    imagen: ""
  },

  bulbostylis_capillaris: {
    id: "bulbostylis_capillaris",
    nombreCientifico: "Bulbostylis capillaris",
    nombreVulgar: "Bulbostylis capillaris",
    familia: "18. Cyperaceae",
    descripcion: "Hierba anual cespitosa, con tallos cuadrangulares de 10-35 cm de alto.",
    caracteristicas: "Hojas acanaladas y filiformes; vainas ciliadas; antelas con involucro bifilo; espiguillas ovoides, agudas, de 4-6 mm, con 6-15 flores; estilo trifido.",
    distribucion: "America austral; rara en la region, citada para Dock Sur.",
    imagen: ""
  },

  cyperus: {
    id: "cyperus",
    nombreCientifico: "Cyperus sp.",
    nombreVulgar: "Cyperus",
    familia: "18. Cyperaceae",
    descripcion: "Genero de Cyperaceae con espiguillas 1-multifloras y glumas disticas.",
    caracteristicas: "Rama parcialmente cargada; falta continuar la clave desde estilo trifido.",
    distribucion: "Genero representado en la flora de los alrededores de Buenos Aires.",
    imagen: ""
  },

  carex: {
    id: "carex",
    nombreCientifico: "Carex sp.",
    nombreVulgar: "Carex",
    familia: "18. Cyperaceae",
    descripcion: "Genero de Cyperaceae con flores unisexuales y flores femeninas encerradas en utriculo.",
    caracteristicas: "Rama parcialmente cargada; faltan continuar las opciones desde Carex D' y B'.",
    distribucion: "Genero representado en la flora de los alrededores de Buenos Aires.",
    imagen: ""
  },

  cyperaceae: {
    id: "cyperaceae",
    nombreCientifico: "Cyperus sp.",
    nombreVulgar: "Junquillo",
    familia: "18. Cyperaceae",
    descripcion: "Cipácea con tallo triangular.",
    caracteristicas: "Tallos macizos triangulares, vainas cerradas, espiguillas.",
    distribucion: "Lugares pantanosos y húmedos",
    imagen: ""
  },

  // Otras familias
  dioscorea_sinuata: {
    id: "dioscorea_sinuata",
    nombreCientifico: "Dioscorea sinuata",
    nombreVulgar: "Carape",
    familia: "28. Dioscoreaceae",
    descripcion: "Enredadera perenne herbacea, con tuberculo discoideo y tallos volubles de 2-4 m, glabros.",
    caracteristicas: "Hojas alternas, delgadas, pecioladas, ovado-acorazonadas, acuminadas, trilobadas o sinuadas, de 5-12 cm por 3-9 cm; flores en racimos; capsulas membranosas trialadas de 15 mm por 12 mm; semillas aladas.",
    distribucion: "Sur del Brasil, Paraguay, Uruguay y nordeste de la Argentina; frecuente en bosques del Delta y de la ribera platense; tuberculos comestibles.",
    imagen: ""
  },

  smilax_campestris: {
    id: "smilax_campestris",
    nombreCientifico: "Smilax campestris",
    nombreVulgar: "Zarzaparrilla blanca",
    familia: "26. Liliaceae",
    descripcion: "Enredadera sublenosa, con tallos estriados provistos de aguijones curvos.",
    caracteristicas: "Hojas ovado-lanceoladas, obtusas, lustrosas, de 4-7 cm; peciolos con un largo zarcillo a cada lado; flores pequenas blanquecinas; bayas negras globosas de unos 5 mm.",
    distribucion: "Bosques del sur del Brasil, Bolivia, Paraguay, Uruguay y norte de la Argentina; en bosques del Delta y de la ribera platense.",
    imagen: ""
  },

  herreria_bonplandii: {
    id: "herreria_bonplandii",
    nombreCientifico: "Herreria bonplandii",
    nombreVulgar: "Herreria",
    familia: "26. Liliaceae",
    descripcion: "Enredadera voluble, glabra, sin aguijones.",
    caracteristicas: "Hojas estrechamente lineales de 3-7 cm, multinervadas; flores en racimos flojos en el apice de las ramitas; perigonio blanquecino de 5 mm; frutos triquetros amarillentos de unos 15 mm por 10 mm.",
    distribucion: "Bosques del nordeste de la Argentina; hallada en la Isla Martin Garcia.",
    imagen: ""
  },

  nothoscordum_montevidense: {
    id: "nothoscordum_montevidense",
    nombreCientifico: "Nothoscordum montevidense",
    nombreVulgar: "Nothoscordum montevidense",
    familia: "26. Liliaceae",
    descripcion: "Hierba bulbifera con flores amarillas en umbelas 2-7-floras.",
    caracteristicas: "Tepalos de 8-10 mm; bulbo de 8-12 mm de diametro; hojas de 8-10 cm por 0,5 mm; escapos de 4-10 cm.",
    distribucion: "Uruguay y nordeste de la Argentina; comun en la estepa climax, en primavera y otono.",
    imagen: ""
  },

  nothoscordum_inodorum: {
    id: "nothoscordum_inodorum",
    nombreCientifico: "Nothoscordum inodorum",
    nombreVulgar: "Lagrima de la Virgen",
    familia: "26. Liliaceae",
    descripcion: "Hierba bulbifera de flores blancas con tintes liliaceos.",
    caracteristicas: "Hojas de 20-30 cm por 4-10 mm; bulbo ovoideo de 12-20 mm, generalmente rodeado por numerosos bulbillos; raices gruesas y carnosas; escapo de 30-40 cm; umbela 8-12-flora; tepalos blancos con linea rosada o violacea.",
    distribucion: "Originaria de America; adventicia en casi todo el globo; invasora de huertas y jardines.",
    imagen: ""
  },

  nothoscordum_gaudichaudianum: {
    id: "nothoscordum_gaudichaudianum",
    nombreCientifico: "Nothoscordum gaudichaudianum",
    nombreVulgar: "Nothoscordum gaudichaudianum",
    familia: "26. Liliaceae",
    descripcion: "Hierba bulbifera de flores blancas con tintes liliaceos.",
    caracteristicas: "Hojas de 0,3-1 mm de ancho y 8-15 cm de largo; bulbo esferico no prolifero, de 1 cm; escapos de 8-20 cm; umbela 3-6-flora; tepalos blancos de 8-10 mm.",
    distribucion: "Uruguay y nordeste de la Argentina; frecuente en campos humedos.",
    imagen: ""
  },

  nothoscordum_bonariense: {
    id: "nothoscordum_bonariense",
    nombreCientifico: "Nothoscordum bonariense",
    nombreVulgar: "Nothoscordum bonariense",
    familia: "26. Liliaceae",
    descripcion: "Hierba bulbifera de flores blancas con tintes liliaceos.",
    caracteristicas: "Hojas de 20-30 cm por 1-2 mm; bulbos esfericos de 10-12 mm, frecuentemente con rizomas laterales cortos o 1-3 bulbillos hijos; escapos de 20-30 cm; umbela 6-10-flora con pedicelos de diferentes longitudes.",
    distribucion: "Provincia de Buenos Aires; comun en la region, en suelos humedos.",
    imagen: ""
  },

  nothoscordum_arenarium: {
    id: "nothoscordum_arenarium",
    nombreCientifico: "Nothoscordum arenarium",
    nombreVulgar: "Nothoscordum arenarium",
    familia: "26. Liliaceae",
    descripcion: "Hierba bulbifera de flores blancas con tintes liliaceos.",
    caracteristicas: "Bulbos fusiformes o conicos de 2-2,5 cm por 1-1,5 cm, sin bulbillos laterales; hojas de 0,5-2 mm de ancho; umbelas 7-14-floras; tepalos de 8-10 mm.",
    distribucion: "Suelos arenosos de la ribera del Plata; hallada en las dunas de la Isla Martin Garcia.",
    imagen: ""
  },

  beauverdia_uniflora: {
    id: "beauverdia_uniflora",
    nombreCientifico: "Beauverdia uniflora",
    nombreVulgar: "Beauverdia uniflora",
    familia: "26. Liliaceae",
    descripcion: "Geofita bulbifera, con bulbo esferico generalmente acompanado por bulbillos menores.",
    caracteristicas: "Flores blancas con nervaduras azuladas o rosadas; tubo del perigonio de la misma longitud o mas largo que los segmentos; hojas lineales algo carnosas, obtusas, de 2-7 mm de ancho; escapos de 10-20 cm; perigonio de 20-25 mm.",
    distribucion: "Uruguay y nordeste de la Argentina; rara en la region platense; cultivada como ornamental.",
    imagen: ""
  },

  beauverdia_sellowiana: {
    id: "beauverdia_sellowiana",
    nombreCientifico: "Beauverdia sellowiana",
    nombreVulgar: "Beauverdia sellowiana",
    familia: "26. Liliaceae",
    descripcion: "Hierba bulbifera de flores amarillas.",
    caracteristicas: "Tubo del perigonio mas corto que los segmentos; bulbo de 1 cm de diametro; hojas lineales de 3-10 cm por 1-25 mm; perigonio con 6 u 8 tepalos de 15-20 mm; escapo mas corto que las hojas, glabro.",
    distribucion: "Uruguay y provincia de Buenos Aires; comun en la estepa climax al comienzo de la primavera.",
    imagen: ""
  },

  scheuchzeriaceae: {
    id: "scheuchzeriaceae",
    nombreCientifico: "Scheuchzeria palustris L.",
    nombreVulgar: "Plantas palustres",
    familia: "13. Scheuchzeriaceae",
    descripcion: "Plantas de lugares pantanosos.",
    caracteristicas: "Gineceo dialicarpelar con 3-6 carpelos.",
    distribucion: "Pantanos y áreas húmedas",
    imagen: ""
  },

  triglochin_palustris: {
    id: "triglochin_palustris",
    nombreCientifico: "Triglochin palustris",
    nombreVulgar: "Triglochin",
    familia: "13. Scheuchzeriaceae",
    descripcion: "Hierba palustre perenne con rizoma corto y estolones terminados en bulbillos.",
    caracteristicas: "Tallos de 10-30 cm, hojas subuladas mas cortas que el tallo, flores numerosas en racimo terminal y frutos lineales de 7-8 mm.",
    distribucion: "Cosmopolita; aparece en cespedes inundables de la ribera platense.",
    imagen: ""
  },

  triglochin_striata: {
    id: "triglochin_striata",
    nombreCientifico: "Triglochin striata",
    nombreVulgar: "Triglochin",
    familia: "13. Scheuchzeriaceae",
    descripcion: "Hierba palustre perenne y rizomatosa.",
    caracteristicas: "Tallos de 5-35 cm, hojas subulado-filiformes, flores en racimos estrechos y frutos con carpelos semicirculares comprimidos.",
    distribucion: "Cosmopolita; comun en ambientes inundables, orillas de arroyos y ribera del Plata.",
    imagen: ""
  },

  lilaea_scilloides: {
    id: "lilaea_scilloides",
    nombreCientifico: "Lilaea scilloides",
    nombreVulgar: "Lilaea",
    familia: "13. Scheuchzeriaceae",
    descripcion: "Hierba palustre junciforme.",
    caracteristicas: "Hojas subuladas y flores desnudas poligamas en espigas densas.",
    distribucion: "America; frecuente en lagunas y charcas durante la primavera.",
    imagen: ""
  },

  juncus_bufonius: {
    id: "juncus_bufonius",
    nombreCientifico: "Juncus bufonius",
    nombreVulgar: "Juncus bufonius",
    familia: "25. Juncaceae",
    descripcion: "Planta anual, tenue, con tallos de unos 20 cm de alto.",
    caracteristicas: "Cada flor lleva dos bracteas cortas en su base; hojas numerosas, estrechamente lineales; flores en antela; perigonio de 5-7 mm, con tepalos lanceolados y agudos.",
    distribucion: "Cosmopolita; en lugares pantanosos.",
    imagen: ""
  },

  juncus_capillaceus: {
    id: "juncus_capillaceus",
    nombreCientifico: "Juncus capillaceus",
    nombreVulgar: "Juncus capillaceus",
    familia: "25. Juncaceae",
    descripcion: "Planta perenne con tallos filiformes de 15-25 cm de alto.",
    caracteristicas: "Hojas capilares, surcadas, de solo 0,2-0,3 mm de diametro; inflorescencia seudolateral, pauciflora, con larga bractea subulada; flores parduzcas de 2-3,5 mm.",
    distribucion: "Uruguay y nordeste de la Argentina; en suelos humedos.",
    imagen: ""
  },

  juncus_imbricatus: {
    id: "juncus_imbricatus",
    nombreCientifico: "Juncus imbricatus var. chamissonis",
    nombreVulgar: "Junquito",
    familia: "25. Juncaceae",
    descripcion: "Hierba perenne, cespitosa, de 10-40 cm de alto.",
    caracteristicas: "Perigonio castano de 5-6 mm; fruto algo mas largo que los tepalos; hojas inferiores catafilares y las siguientes lineales, canaliculadas, de 0,5-1 mm de ancho, con auriculas obtusas; antela terminal con bractea corta.",
    distribucion: "America del Sur; muy frecuente en campos humedos, en primavera.",
    imagen: ""
  },

  juncus_dichotomus: {
    id: "juncus_dichotomus",
    nombreCientifico: "Juncus dichotomus",
    nombreVulgar: "Juncus dichotomus",
    familia: "25. Juncaceae",
    descripcion: "Hierba cespitosa, de 20-80 cm de alto.",
    caracteristicas: "Perigonio parduzco de 3-4 mm; fruto del mismo largo; antela laxa, con bractea mas larga o mas corta que ella; hojas inferiores catafilares y las normales estrechamente lineales, semicilindricas y canaliculadas.",
    distribucion: "America; comun en suelos pantanosos.",
    imagen: ""
  },

  juncus_uruguensis: {
    id: "juncus_uruguensis",
    nombreCientifico: "Juncus uruguensis",
    nombreVulgar: "Juncus uruguensis",
    familia: "25. Juncaceae",
    descripcion: "Hierba cespitosa, de 20-45 cm de alto.",
    caracteristicas: "Antela muy densa; perigonio castano de 3-4 mm; estambres solo 3; hojas lineales de cerca de 1 mm de ancho.",
    distribucion: "Uruguay y nordeste de la Argentina; raro en la region, citado para Abasto.",
    imagen: ""
  },

  juncus_acutus: {
    id: "juncus_acutus",
    nombreCientifico: "Juncus acutus var. leopoldii",
    nombreVulgar: "Junco; hunco",
    familia: "25. Juncaceae",
    descripcion: "Planta perenne muy robusta, formando matas densas de 1-1,5 m de alto.",
    caracteristicas: "Flores sin bracteas en la base; hojas cilindricas rigidas y punzantes; flores numerosas en grupos de 4-6 ordenados en antelas; bractea de la inflorescencia generalmente mas larga que esta; perigonio castano de 3-4 mm; estambres 6; frutos castanos globosos de unos 3 mm.",
    distribucion: "Cosmopolita; en suelos salinos humedos, en verano.",
    imagen: ""
  },

  juncus_densiflorus: {
    id: "juncus_densiflorus",
    nombreCientifico: "Juncus densiflorus var. pohlii",
    nombreVulgar: "Juncus densiflorus",
    familia: "25. Juncaceae",
    descripcion: "Hierba rizomatosa, de cerca de 1 m de alto.",
    caracteristicas: "Planta menor, no punzante; flores en capitulos; cabezuelas esfericas, globosas, multifloras, de 7-10 mm, agrupadas en antela terminal; perigonio verdoso-rojizo de unos 4 mm; fruto mas corto que los tepalos; hojas cilindricas huecas con tabiques transversales.",
    distribucion: "America del Sur; en los pajonales del Delta y de la ribera del Plata.",
    imagen: ""
  },

  juncus_microcephalus: {
    id: "juncus_microcephalus",
    nombreCientifico: "Juncus microcephalus var. floribundus",
    nombreVulgar: "Juncus microcephalus",
    familia: "25. Juncaceae",
    descripcion: "Hierba cortamente rizomatosa, de 20-80 cm de alto.",
    caracteristicas: "Planta menor, no punzante; flores en capitulos; cabezuelas hemisfericas, paucifloras, de 3-5 mm, agrupadas en antelas; perigonio de unos 3 mm; hojas tubulosas, comprimidas y septadas.",
    distribucion: "America del Sur y America Central; comun en terrenos pantanosos.",
    imagen: ""
  },

  typha_latifolia: {
    id: "typha_latifolia",
    nombreCientifico: "Typha latifolia",
    nombreVulgar: "Totora",
    familia: "11. Typhaceae",
    descripcion: "Hierba palustre robusta, de 1,5-2,5 m de alto.",
    caracteristicas: "Flores femeninas sin brácteas y polen en tétradas; hojas de alrededor de 1 m, torcidas en la parte superior.",
    distribucion: "Cosmopolita; común en pajonales.",
    imagen: ""
  },

  typha_angustifolia: {
    id: "typha_angustifolia",
    nombreCientifico: "Typha angustifolia",
    nombreVulgar: "Totora",
    familia: "11. Typhaceae",
    descripcion: "Hierba palustre parecida a Typha latifolia.",
    caracteristicas: "Flores femeninas con brácteas, polen pulverulento y pelos del ginecóforo agudos.",
    distribucion: "Cosmopolita; común en zanjas y pajonales.",
    imagen: ""
  },

  pistia_stratiotes: {
    id: "pistia_stratiotes",
    nombreCientifico: "Pistia stratiotes",
    nombreVulgar: "Repollito de agua",
    familia: "20. Araceae",
    descripcion: "Plantita flotante, estolonifera, con hojas en roseta, sesiles, crasas y acanaladas longitudinalmente.",
    caracteristicas: "Flores desnudas unisexuales en un espadice corto, parcialmente soldado a la espata; hojas anchamente espatuladas de unos 5 cm por 3 cm, con abundante aerenquima; estolones horizontales con pequenas plantitas terminales.",
    distribucion: "Regiones calidas del globo; muy comun en arroyos de corriente suave del Delta y de la ribera platense.",
    imagen: ""
  },

  potamogeton_spirilliformis: {
    id: "potamogeton_spirilliformis",
    nombreCientifico: "Potamogeton spirilliformis",
    nombreVulgar: "Potamogeton",
    familia: "12. Potamogetonaceae",
    descripcion: "Hierba acuática con tallos redondeados y ramosos.",
    caracteristicas: "Hojas nadantes obovadas, hojas sumergidas lineales, espigas cortas de 4-6 flores y frutos pequeños con 3 quillas.",
    distribucion: "Aguas dulces del sur del Brasil, Uruguay y NE de Argentina; rara en la región.",
    imagen: ""
  },

  potamogeton_ferrugineus: {
    id: "potamogeton_ferrugineus",
    nombreCientifico: "Potamogeton ferrugineus",
    nombreVulgar: "Potamogeton",
    familia: "12. Potamogetonaceae",
    descripcion: "Hierba acuática de tallos redondeados.",
    caracteristicas: "Todas las hojas elípticas, plurinervadas, atenuadas en largo pecíolo; espigas densas y frutos con una quilla media y dos laterales.",
    distribucion: "Centro de la Argentina y Uruguay; común en arroyos.",
    imagen: ""
  },

  potamogeton_gayii: {
    id: "potamogeton_gayii",
    nombreCientifico: "Potamogeton gayii",
    nombreVulgar: "Potamogeton",
    familia: "12. Potamogetonaceae",
    descripcion: "Hierba acuática de tallos algo comprimidos.",
    caracteristicas: "Hojas lineales no envainadoras, de 5-11 cm por 3-10 mm, agudas, con 3-5 nervaduras; espigas paucifloras.",
    distribucion: "América austral; frecuente en charcas y arroyos.",
    imagen: ""
  },

  potamogeton_uruguayensis: {
    id: "potamogeton_uruguayensis",
    nombreCientifico: "Potamogeton uruguayensis",
    nombreVulgar: "Potamogeton",
    familia: "12. Potamogetonaceae",
    descripcion: "Hierba acuática de hojas lineales no envainadoras.",
    caracteristicas: "Hojas de 4-6 cm por 3-4 mm, con 3-5 nervaduras; estípulas de 1 cm y espigas 4-floras de 7 mm.",
    distribucion: "Uruguay y provincia de Buenos Aires; común en arroyos.",
    imagen: ""
  },

  potamogeton_pusillus: {
    id: "potamogeton_pusillus",
    nombreCientifico: "Potamogeton pusillus",
    nombreVulgar: "Potamogeton",
    familia: "12. Potamogetonaceae",
    descripcion: "Hierba acuática de tallos delgados y difusos.",
    caracteristicas: "Hojas lineales muy estrechas, de 1,5-5 cm y menos de 2 mm de ancho; espigas paucifloras muy cortas.",
    distribucion: "Cosmopolita; en zanjas y arroyos.",
    imagen: ""
  },

  potamogeton_striatus: {
    id: "potamogeton_striatus",
    nombreCientifico: "Potamogeton striatus",
    nombreVulgar: "Potamogeton",
    familia: "12. Potamogetonaceae",
    descripcion: "Hierba acuática sumergida, con tallos ligeramente comprimidos y entrenudos largos.",
    caracteristicas: "Hojas envainadoras, con lígula tenue; lámina trinervada de 6-14 cm; espigas de 8-10 flores y frutos oblicuamente elípticos.",
    distribucion: "Sudamérica; común en tanques australianos, arroyos y ambientes similares.",
    imagen: ""
  },

  zannichellia_palustris: {
    id: "zannichellia_palustris",
    nombreCientifico: "Zannichellia palustris",
    nombreVulgar: "Zannichellia",
    familia: "12. Potamogetonaceae",
    descripcion: "Hierba acuática sumergida y rizomatosa.",
    caracteristicas: "Flores diclinas monoicas; hojas filiformes, estípulas grandes y flores axilares; carpelos casi sésiles, semilunares.",
    distribucion: "Cosmopolita; en charcas.",
    imagen: ""
  },

  habenaria_bractescens: {
    id: "habenaria_bractescens",
    nombreCientifico: "Habenaria bractescens Lindl.",
    nombreVulgar: "Habenaria",
    familia: "33. Orchidaceae",
    descripcion: "Orquidea terrestre perenne, de 30-75 cm de alto.",
    caracteristicas: "Tuberculo elipsoideo; tallos hojosos; hojas lanceolado-oblongas, agudas y envainadoras; flores grandes blanco-verdosas con espolon de 5-7 cm.",
    distribucion: "Sur del Brasil, Uruguay y norte de la Argentina. Comun en bosques del Delta y de la ribera del Plata; florece en verano.",
    imagen: ""
  },

  habenaria_gourlieana: {
    id: "habenaria_gourlieana",
    nombreCientifico: "Habenaria gourlieana Gill. ex Lindl.",
    nombreVulgar: "Habenaria",
    familia: "33. Orchidaceae",
    descripcion: "Orquidea terrestre perenne, de hasta 50 cm de alto.",
    caracteristicas: "Tuberculo elipsoideo; tallos densamente hojosos; hojas lineal-lanceoladas; flores grandes albo-verdosas con espolon muy largo.",
    distribucion: "Uruguay y norte de la Argentina, hasta las dunas de San Clemente del Tuyu.",
    imagen: ""
  },

  pelexia_bonariensis: {
    id: "pelexia_bonariensis",
    nombreCientifico: "Pelexia bonariensis (Lindl.) Schlechter",
    nombreVulgar: "Pelexia",
    familia: "33. Orchidaceae",
    descripcion: "Hierba terrestre perenne, de 50-70 cm de alto.",
    caracteristicas: "Raices fusiformes fasciculadas; hojas inferiores lanceoladas de 15-35 cm; espiga densa, multiflora; flores verdosas con menton conspicuo.",
    distribucion: "Sur del Brasil, Paraguay, Uruguay y NE de la Argentina. En bosques del Delta y de la ribera del Plata; primavera.",
    imagen: ""
  },

  physurus_platensis: {
    id: "physurus_platensis",
    nombreCientifico: "Physurus platensis Hauman",
    nombreVulgar: "Physurus",
    familia: "33. Orchidaceae",
    descripcion: "Orquidea terrestre perenne, delicada, de 15-25 cm de alto.",
    caracteristicas: "Tallo ascendente con raices cortas y crasas emergiendo de los nudos inferiores; hojas elipsoideas; espiga corta, multiflora y densa; flores pequenas blancas con espolon de 3-4 mm.",
    distribucion: "Region platense y Paraguay. En bosques del Delta y de la ribera platense; primavera.",
    imagen: ""
  },

  bipinnula_biplumata: {
    id: "bipinnula_biplumata",
    nombreCientifico: "Bipinnula biplumata (L.) Reichb. fil.",
    nombreVulgar: "Bipinnula",
    familia: "33. Orchidaceae",
    descripcion: "Hierba terrestre perenne, de 10-15 cm de alto.",
    caracteristicas: "Raices claviformes; hojas basales pocas, oblongas y agudas; flor apical solitaria; sepalos laterales lineales, pectinado-pinatífidos; labelo negro con lobulo piloso.",
    distribucion: "Rio Grande do Sul, Uruguay y NE de la Argentina. Rara en la region, citada para la estepa climax de Elizalde.",
    imagen: ""
  },

  chloraea_membranacea: {
    id: "chloraea_membranacea",
    nombreCientifico: "Chloraea membranacea Lindl.",
    nombreVulgar: "Chloraea",
    familia: "33. Orchidaceae",
    descripcion: "Hierba terrestre perenne, de 40-70 cm de alto.",
    caracteristicas: "Raices fasciculadas y carnosas; hojas inferiores lanceoladas; racimos pauci- o multifloros; flores grandes blanco-verdosas; labelo casi orbicular con papilas claviformes.",
    distribucion: "Sur del Brasil, Uruguay y NE de la Argentina. Frecuente en la region platense: Delta, ribera del Plata y talares; primavera.",
    imagen: ""
  },

  brachystele_dilatata: {
    id: "brachystele_dilatata",
    nombreCientifico: "Brachystele dilatata (Lindl.) Schlechter",
    nombreVulgar: "Brachystele",
    familia: "33. Orchidaceae",
    descripcion: "Hierba terrestre perenne, de 20-30 cm de alto.",
    caracteristicas: "Raices fusiformes; tallos simples cubiertos de vainas membranosas agudas; espigas densas; flores pequenas verdosas; labelo terminado en un lobulo reniforme.",
    distribucion: "Uruguay y NE de Buenos Aires. Hallada cerca de Eva Peron.",
    imagen: ""
  },

  cyclopogon_elatus: {
    id: "cyclopogon_elatus",
    nombreCientifico: "Cyclopogon elatus (Sw.) Schltr.",
    nombreVulgar: "Cyclopogon",
    familia: "33. Orchidaceae",
    descripcion: "Orquidea terrestre perenne con hojas arrosetadas.",
    caracteristicas: "Raices pilosas; hojas oblanceoladas de 9-13 cm por 2-2,5 cm; escapos de 20-30 cm; espigas densas; petalos blancos o rosados; labelo blanco con dos lineas verdes.",
    distribucion: "Sur del Brasil, Uruguay y NE de la Argentina. Frecuente en bosques de talas.",
    imagen: ""
  },

  oncidium_bifolium: {
    id: "oncidium_bifolium",
    nombreCientifico: "Oncidium bifolium Sims",
    nombreVulgar: "Flor de patito",
    familia: "33. Orchidaceae",
    descripcion: "Orquidea epifita con seudobulbos y numerosas raices.",
    caracteristicas: "Seudobulbos de 3-4 cm por 1-2 cm; dos hojas apicales coriaceas, lanceoladas, de 6-12 cm; pedunculos largos inclinados con 7-12 flores amarillas grandes.",
    distribucion: "Norte de la Argentina y Uruguay. En bosques del Delta; tambien cultivada al aire libre como ornamental.",
    imagen: ""
  },

  hedychium_coronarium: {
    id: "hedychium_coronarium",
    nombreCientifico: "Hedychium coronarium Koenig",
    nombreVulgar: "Sultana; caña de ámbar; mariposa de ámbar",
    familia: "30. Zingiberaceae",
    descripcion: "Hierba perenne rizomatosa, alta, con tallos de un metro o mas.",
    caracteristicas: "Hojas sesiles, lanceoladas, de 8-60 cm por 3-11 cm; espigas elipsoidales densas de 10-20 cm; flores grandes con petalos y estaminodios blancos.",
    distribucion: "Originaria de Asia; cultivada por sus flores y naturalizada en America calida. En pajonales del Delta y de la ribera del Plata.",
    imagen: ""
  },

  canna_glauca: {
    id: "canna_glauca",
    nombreCientifico: "Canna glauca L.",
    nombreVulgar: "Achira",
    familia: "31. Cannaceae",
    descripcion: "Hierba perenne con rizomas largos y tallos de hasta 2 m de alto.",
    caracteristicas: "Hojas largamente lanceoladas y glaucas; racimos simples; flores amarillas o rojas. El manual cita tambien la var. rubrolutea con flores rojas.",
    distribucion: "America calida. Cultivada como ornamental y frecuente en bosques del Delta y de la ribera; florece en verano.",
    imagen: ""
  },

  canna_indica: {
    id: "canna_indica",
    nombreCientifico: "Canna indica L.",
    nombreVulgar: "Achira roja",
    familia: "31. Cannaceae",
    descripcion: "Hierba perenne con rizomas gruesos y tallos de 50-150 cm de alto.",
    caracteristicas: "Hojas elipticas, verdes, de hasta 50 cm por 20-25 cm; racimos simples; flores grandes, rojas.",
    distribucion: "America tropical. Cultivada como ornamental; se halla en el Delta y en la ribera del Plata.",
    imagen: ""
  },

  thalia_geniculata: {
    id: "thalia_geniculata",
    nombreCientifico: "Thalia geniculata L.",
    nombreVulgar: "Thalia",
    familia: "32. Marantaceae",
    descripcion: "Hierba palustre alta, de hasta 2 m.",
    caracteristicas: "Flores en panojas laxas, azules; hojas largamente pecioladas, las basales con lamina ovado-oblonga de hasta 40 cm o mas.",
    distribucion: "America calida. Rara en la region; aparece en zanjas.",
    imagen: ""
  },

  thalia_multiflora: {
    id: "thalia_multiflora",
    nombreCientifico: "Thalia multiflora Horkel",
    nombreVulgar: "Thalia",
    familia: "32. Marantaceae",
    descripcion: "Hierba palustre alta, de 1,5-2 m.",
    caracteristicas: "Flores en panojas contraidas, espiciformes; hojas ovado-oblongas de cerca de 50 cm.",
    distribucion: "Brasil, Uruguay y norte de la Argentina. Comun en zanjas junto a la via ferrea al norte de la Capital Federal.",
    imagen: ""
  },

  eichhornia_crassipes: {
    id: "eichhornia_crassipes",
    nombreCientifico: "Eichhornia crassipes",
    nombreVulgar: "Camalote; aguapey",
    familia: "24. Pontederiaceae",
    descripcion: "Hierba acuatica flotante, en rosetas que emiten estolones.",
    caracteristicas: "Hojas con peciolos muy gruesos, casi globosos, llenos de aerenquima; lamina anchamente eliptica o reniforme; espigas paucifloras de 10-20 cm; perigonio azul o liliaceo de 4-5 cm; estambres exertos; capsula alargada glabra.",
    distribucion: "America calida; comun en los camalotales del Delta y de la ribera del Plata.",
    imagen: ""
  },

  eichhornia_azurea: {
    id: "eichhornia_azurea",
    nombreCientifico: "Eichhornia azurea",
    nombreVulgar: "Camalote",
    familia: "24. Pontederiaceae",
    descripcion: "Hierba acuatica flotante, con tallos largos de los que nacen hojas e inflorescencias.",
    caracteristicas: "Hojas con peciolos alargados y poco engrosados; lamina orbicular de 8-10 cm; espigas con 18-40 flores; perigonio infundibuliforme azul de 4-5 cm, con tubo velludo-glanduloso; fruto capsula apiculada.",
    distribucion: "America calida; comun en el Delta y en la ribera.",
    imagen: ""
  },

  pontederia_cordata: {
    id: "pontederia_cordata",
    nombreCientifico: "Pontederia cordata",
    nombreVulgar: "Pontederia",
    familia: "24. Pontederiaceae",
    descripcion: "Planta palustre, erecta, con rizomas gruesos y escapo largo.",
    caracteristicas: "Hojas largamente pecioladas, con lamina eliptica, ovada o lanceolada, atenuada o cordada en la base; espigas de 10-25 cm; flores numerosas; perigonio azul de 1 cm; utriculos con 6 costillas rugosas.",
    distribucion: "America calida; muy comun en los pajonales del Delta y de la ribera platense.",
    imagen: ""
  },

  pontederia_rotundifolia: {
    id: "pontederia_rotundifolia",
    nombreCientifico: "Pontederia rotundifolia",
    nombreVulgar: "Camalote",
    familia: "24. Pontederiaceae",
    descripcion: "Planta flotante, con tallos tendidos y hojas largamente pecioladas.",
    caracteristicas: "Lamina orbicular de unos 8 cm por 10 cm; escapos de 10-20 cm; espata transparente; espiga densa de 5 cm con 30-70 flores azules o liliaceas; perigonio velludo de 15 mm; utriculo con 12 aristas espinulosas.",
    distribucion: "America tropical, hasta el Rio de la Plata.",
    imagen: ""
  },

  heteranthera_peduncularis: {
    id: "heteranthera_peduncularis",
    nombreCientifico: "Heteranthera peduncularis",
    nombreVulgar: "Heteranthera",
    familia: "24. Pontederiaceae",
    descripcion: "Hierba acuatica de tallos flotantes, con hojas de limbo acorazonado.",
    caracteristicas: "Estambres 3; ovario 3-locular; espigas con 9-16 flores lilaceas de 16 mm; estambres laterales mas cortos y barbudos, estambre central mas largo y no barbudo; capsulas de unos 13 mm.",
    distribucion: "America calida; rara en la region, citada para Pergamino.",
    imagen: ""
  },

  butomaceae: {
    id: "butomaceae",
    nombreCientifico: "Butomus umbellatus L.",
    nombreVulgar: "Butomus",
    familia: "15. Butomaceae",
    descripcion: "Planta acuática con ovario súpero.",
    caracteristicas: "Flores actinomorfas blancas o rosadas en umbela.",
    distribucion: "Aguas dulces",
    imagen: ""
  },

  hydrocharitaceae: {
    id: "hydrocharitaceae",
    nombreCientifico: "Hydrocharis morsus-ranae L.",
    nombreVulgar: "Rana flotante",
    familia: "16. Hydrocharitaceae",
    descripcion: "Planta acuática con ovario ínfero.",
    caracteristicas: "Hojas flotantes redondas, flores blancas pequeñas.",
    distribucion: "Aguas estancadas dulces",
    imagen: ""
  },

  alismataceae: {
    id: "alismataceae",
    nombreCientifico: "Alisma plantago-aquatica L.",
    nombreVulgar: "Alisma",
    familia: "14. Alismataceae",
    descripcion: "Planta palustre con gineceo dialicarpelar.",
    caracteristicas: "Hojas ovadas sagitadas largamente pecioladas.",
    distribucion: "Pantanos y ciénegas",
    imagen: ""
  },

  hydrocleis_nymphoides: {
    id: "hydrocleis_nymphoides",
    nombreCientifico: "Hydrocleis nymphoides",
    nombreVulgar: "Camalotillo",
    familia: "15. Butomaceae",
    descripcion: "Hierba acuatica perenne, flotante.",
    caracteristicas: "Hojas inferiores sumergidas y lineales, hojas superiores flotantes ovadas a circulares, largamente pecioladas, y flores amarillas grandes.",
    distribucion: "America tropical y subtropical; comun en arroyos limpios de corriente lenta durante la primavera.",
    imagen: ""
  },

  hydromystria_stolonifera: {
    id: "hydromystria_stolonifera",
    nombreCientifico: "Hydromystria stolonifera",
    nombreVulgar: "Hydromystria",
    familia: "16. Hydrocharitaceae",
    descripcion: "Planta acuatica flotante libre.",
    caracteristicas: "Hojas pecioladas con lamina eliptico-acorazonada y habito flotante.",
    distribucion: "Regiones calidas de America hasta el Rio de la Plata; frecuente en camalotales del Delta y la ribera.",
    imagen: ""
  },

  elodea_callitrichoides: {
    id: "elodea_callitrichoides",
    nombreCientifico: "Elodea callitrichoides",
    nombreVulgar: "Elodea",
    familia: "16. Hydrocharitaceae",
    descripcion: "Hierba acuatica sumergida.",
    caracteristicas: "Hojas opuestas o en verticilos de 3, lineal-lanceoladas, agudas y ligeramente denticuladas; flores pequenas blanquecinas.",
    distribucion: "America del Sur; comun en aguas tranquilas del Delta y la ribera platense.",
    imagen: ""
  },

  elodea_densa: {
    id: "elodea_densa",
    nombreCientifico: "Elodea densa",
    nombreVulgar: "Elodea",
    familia: "16. Hydrocharitaceae",
    descripcion: "Hierba acuatica sumergida de flores emergentes.",
    caracteristicas: "Hojas en verticilos de 4, raramente 6, lanceoladas y finamente denticuladas; flores blancas grandes, emergidas.",
    distribucion: "Endemica de la region platense; comun en charcas y arroyuelos del Delta y la ribera.",
    imagen: ""
  },

  echinodorus_grandiflorus: {
    id: "echinodorus_grandiflorus",
    nombreCientifico: "Echinodorus grandiflorus",
    nombreVulgar: "Cucharero",
    familia: "14. Alismataceae",
    descripcion: "Planta palustre robusta, de hojas grandes y largamente pecioladas.",
    caracteristicas: "Hojas elipticas a ovadas, con puntos y rayitas translucidas; flores blancas numerosas en inflorescencias ramificadas.",
    distribucion: "America austral; muy comun en pajonales, zanjas y lagunas de la ribera y el Delta.",
    imagen: ""
  },

  echinodorus_palaefolius: {
    id: "echinodorus_palaefolius",
    nombreCientifico: "Echinodorus palaefolius",
    nombreVulgar: "Cucharero",
    familia: "14. Alismataceae",
    descripcion: "Planta palustre robusta, semejante a Echinodorus grandiflorus.",
    caracteristicas: "Hojas grandes con rayitas translucidas e inflorescencia frecuentemente simple.",
    distribucion: "America del Sur; mas escasa en la region.",
    imagen: ""
  },

  echinodorus_aschersonianus: {
    id: "echinodorus_aschersonianus",
    nombreCientifico: "Echinodorus aschersonianus",
    nombreVulgar: "Echinodorus",
    familia: "14. Alismataceae",
    descripcion: "Planta palustre pequena, con hojas arrosetadas.",
    caracteristicas: "Hojas eliptico-lanceoladas de 4-7 cm por 1,5-2 cm, escapos de 20-25 cm y pocas flores blancas.",
    distribucion: "Uruguay e Isla Martin Garcia.",
    imagen: ""
  },

  sagittaria_montevidensis: {
    id: "sagittaria_montevidensis",
    nombreCientifico: "Sagittaria montevidensis",
    nombreVulgar: "Saeta",
    familia: "14. Alismataceae",
    descripcion: "Planta palustre perenne, robusta y rizomatosa.",
    caracteristicas: "Hojas grandes, largamente pecioladas y sagitadas; flores blancas grandes, diclinas, con las masculinas arriba y las femeninas abajo.",
    distribucion: "America austral; comun en pajonales, arroyos y ambientes inundables.",
    imagen: ""
  },

  tillandsia_usneoides: {
    id: "tillandsia_usneoides",
    nombreCientifico: "Tillandsia usneoides f. ferruginea",
    nombreVulgar: "Barba del monte",
    familia: "22. Bromeliaceae",
    descripcion: "Bromeliacea epifita, sin raices, de tallos largos, filiformes y colgantes.",
    caracteristicas: "Hojas esparcidas de hasta 2 cm; flores solitarias cortamente pedunculadas; bracteas floriferas glabras en los bordes y con pelos escamosos en el dorso; sepalos de 7 mm; petalos amarillentos.",
    distribucion: "America calida; en los bosques del Delta.",
    imagen: ""
  },

  tillandsia_aeranthos: {
    id: "tillandsia_aeranthos",
    nombreCientifico: "Tillandsia aeranthos",
    nombreVulgar: "Clavel del aire",
    familia: "22. Bromeliaceae",
    descripcion: "Bromeliacea epifita con raices, tallos muy cortos y hojas en roseta.",
    caracteristicas: "Caliz rojo de unos 17 mm; petalos violeta de unos 28 mm; capsulas de 25 mm; hojas grisaceas, acanaladas, de cerca de 6 cm; flores con espigas polisticas.",
    distribucion: "Sur del Brasil, Paraguay, Uruguay y nordeste de la Argentina; epifita en bosques del Delta y de la ribera del Plata.",
    imagen: ""
  },

  tillandsia_bandensis: {
    id: "tillandsia_bandensis",
    nombreCientifico: "Tillandsia bandensis",
    nombreVulgar: "Tillandsia bandensis",
    familia: "22. Bromeliaceae",
    descripcion: "Bromeliacea epifita con raices, tallos muy cortos y hojas en roseta.",
    caracteristicas: "Caliz amarillento o verdoso; petalos de 15-16 mm con limbo eliptico de 6 mm, azules o violaceos; sepalos verdosos inferiormente y purpureos-amarillos arriba; capsulas cilindricas de 30 mm; hojas subuladas de unos 5 cm.",
    distribucion: "America austral calida; frecuente en seibales y bosques higrofilos del Delta.",
    imagen: ""
  },

  tillandsia_recurvata: {
    id: "tillandsia_recurvata",
    nombreCientifico: "Tillandsia recurvata",
    nombreVulgar: "Tillandsia recurvata",
    familia: "22. Bromeliaceae",
    descripcion: "Bromeliacea epifita con raices, tallos muy cortos y hojas en roseta.",
    caracteristicas: "Petalos liguliformes de unos 7 mm por 1,5 mm, blancos o azules; sepalos verdosos o violaceos, papiraceos en el margen, de unos 6 mm; capsulas cilindricas de 20-25 mm; hojas disticas subuladas de 3,5-5 cm; escapo con 1-2 flores.",
    distribucion: "America calida; epifita en los bosques del Delta y de la ribera del Plata.",
    imagen: ""
  },

  sisyrinchium_megapotamicum: {
    id: "sisyrinchium_megapotamicum",
    nombreCientifico: "Sisyrinchium megapotamicum",
    nombreVulgar: "Sisyrinchium megapotamicum",
    familia: "29. Iridaceae",
    descripcion: "Hierba perenne con raices fasciculadas y tallos comprimidos, estrechamente bialados, glabros, de 15-20 cm.",
    caracteristicas: "Perigonio amarillo de 7-8 mm; tubo estaminal sin pelos ni glandulas; espatas laxas a lo largo de la parte superior del tallo, de 12-15 mm; hojas de 0,5-1 mm de ancho.",
    distribucion: "Sur del Brasil y nordeste de la Argentina; en la estepa climax.",
    imagen: ""
  },

  sisyrinchium_pachyrhizum: {
    id: "sisyrinchium_pachyrhizum",
    nombreCientifico: "Sisyrinchium pachyrhizum",
    nombreVulgar: "Sisyrinchium pachyrhizum",
    familia: "29. Iridaceae",
    descripcion: "Hierba perenne de 30-60 cm de alto, con raices algo carnosas.",
    caracteristicas: "Perigonio amarillo de 6-9 mm; tubo estaminal con glandulas o pelos, especialmente en la base; inflorescencias laxas; tallos comprimidos; hojas de 1-2 mm de ancho.",
    distribucion: "Sur del Brasil, Paraguay y norte y centro de la Argentina; se halla en la estepa climax, en primavera.",
    imagen: ""
  },

  sisyrinchium_platense: {
    id: "sisyrinchium_platense",
    nombreCientifico: "Sisyrinchium platense",
    nombreVulgar: "Sisyrinchium platense",
    familia: "29. Iridaceae",
    descripcion: "Hierba perenne, robusta, de unos 40 cm, con raices fasciculadas carnosas.",
    caracteristicas: "Perigonio azul-violaceo de 10 mm; flores numerosas; filamentos estaminales totalmente unidos entre si y glanduliferos; capsulas globosas de 4-5 mm; tallos comprimidos, estrechamente bialados; hojas de 1-3 mm de ancho.",
    distribucion: "Uruguay y provincia de Buenos Aires; muy comun en la estepa climax y especialmente en comunidades halofilas priserales, en primavera.",
    imagen: ""
  },

  sisyrinchium_micranthum: {
    id: "sisyrinchium_micranthum",
    nombreCientifico: "Sisyrinchium micranthum",
    nombreVulgar: "Sisyrinchium micranthum",
    familia: "29. Iridaceae",
    descripcion: "Hierba anual, debil, con tallos comprimidos de unos 20 cm.",
    caracteristicas: "Perigonio violaceo de 5-6 mm; flores pocas; capsulas de 3 mm; filamentos unidos solo en parte de su longitud; hojas de 1 mm de ancho.",
    distribucion: "America del Sur; en suelos humedos del Delta y de la ribera platense.",
    imagen: ""
  },

  sisyrinchium_laxum: {
    id: "sisyrinchium_laxum",
    nombreCientifico: "Sisyrinchium laxum",
    nombreVulgar: "Sisyrinchium laxum",
    familia: "29. Iridaceae",
    descripcion: "Hierba anual, debil, de 10-15 cm de alto.",
    caracteristicas: "Perigonio violaceo de 10-15 mm; espata terminal con 5-7 flores; capsulas de 3 mm; filamentos unidos solo en parte de su longitud; hojas de 1,5-3 mm de ancho.",
    distribucion: "America austral; comun en suelos humedos, en primavera.",
    imagen: ""
  },

  sisyrinchium_minus: {
    id: "sisyrinchium_minus",
    nombreCientifico: "Sisyrinchium minus",
    nombreVulgar: "Sisyrinchium minus",
    familia: "29. Iridaceae",
    descripcion: "Hierba anual, debil, de 10-20 cm de alto.",
    caracteristicas: "Filamentos de los estambres unidos en toda su longitud; espatas con 3-7 flores; perigonio violaceo o blanco de 5-6 mm; capsulas de 3 mm; hojas de 1 mm de ancho.",
    distribucion: "America templado-calida; en el Delta y en la ribera platense.",
    imagen: ""
  },

  cypella_herbertii: {
    id: "cypella_herbertii",
    nombreCientifico: "Cypella herbertii",
    nombreVulgar: "Cypella herbertii",
    familia: "29. Iridaceae",
    descripcion: "Hierba bulbifera con bulbo esferico de 12-15 mm y tallos de 20-60 cm.",
    caracteristicas: "Tepalos amarillo-anaranjados, los exteriores obovados de 2,5-4 cm y los interiores mucho mas cortos y convolutos; capsulas claviformes de 12-20 mm; hojas casi todas basales, lineales, de hasta 40 cm por 5 mm; flores pocas, efimeras, en cimas.",
    distribucion: "Sur del Brasil, Paraguay, Uruguay y nordeste de la Argentina; comun en la estepa climax y en praderas de la ribera platense, en primavera.",
    imagen: ""
  },

  cypella_plumbea: {
    id: "cypella_plumbea",
    nombreCientifico: "Cypella plumbea",
    nombreVulgar: "Cypella plumbea",
    familia: "29. Iridaceae",
    descripcion: "Hierba bulbifera con bulbo esferico de 2-2,5 cm y tallos de hasta 1 m.",
    caracteristicas: "Tepalos azul-plomizos, los exteriores obovados de 3,5-5 cm y los interiores menores; capsulas de unos 5 cm; hojas lineales de 30-60 cm por unos 2 cm, con nervaduras paralelas gruesas y otras mas tenues; espatas de 4-5 cm; flores pocas y muy efimeras.",
    distribucion: "Sur del Brasil, Paraguay, Uruguay y nordeste de la Argentina; se halla en el Delta y en la ribera platense.",
    imagen: ""
  },

  alophia_amoena: {
    id: "alophia_amoena",
    nombreCientifico: "Alophia amoena",
    nombreVulgar: "Alophia amoena",
    familia: "29. Iridaceae",
    descripcion: "Geofita con bulbo esferico castano, de 1,5-2 cm de diametro.",
    caracteristicas: "Tallos delgados de hasta 20 cm; hojas lineales de 9-15 cm por 3-10 mm; espata formada por dos valvas desiguales, con una o dos flores; perigonio azul-plomo; tubo estaminal de unos 4 mm; anteras de 6 mm; capsula de unos 12 mm.",
    distribucion: "Uruguay y nordeste de la Argentina; comun en la estepa climax, en primavera.",
    imagen: ""
  },

  iris_pseudacorus: {
    id: "iris_pseudacorus",
    nombreCientifico: "Iris pseudacorus",
    nombreVulgar: "Iris pseudacorus",
    familia: "29. Iridaceae",
    descripcion: "Hierba perenne robusta, con rizoma corto y grueso.",
    caracteristicas: "Hojas ensiformes, glaucas, de 45-60 cm; tallos floriferos de 60-90 cm, con varias hojas y espatas con 2-3 flores cada una; pedunculos mas cortos que las espatas; hipanto de unos 12 mm; tepalos amarillos de 5-7 cm.",
    distribucion: "Europa; adventicia en America; en suelos inundables del Delta y de la ribera del Plata.",
    imagen: ""
  },

  habranthus_andersonii: {
    id: "habranthus_andersonii",
    nombreCientifico: "Habranthus andersonii",
    nombreVulgar: "Habranthus andersonii",
    familia: "27. Amaryllidaceae",
    descripcion: "Hierba bulbifera con flores amarillas o anaranjadas.",
    caracteristicas: "Espata bifida; flores algo inclinadas, ligeramente cigomorfas; estambres declinados; perigonio de 2-3 cm; bulbo ovoideo de unos 2 cm; hojas cortas, escasas, posteriores a la flor; escapo delgado, unifloro, de 6-18 cm.",
    distribucion: "Uruguay y nordeste de la Argentina; comun en la estepa climax, en verano.",
    imagen: ""
  },

  habranthus_gracilifolius: {
    id: "habranthus_gracilifolius",
    nombreCientifico: "Habranthus gracilifolius",
    nombreVulgar: "Habranthus gracilifolius",
    familia: "27. Amaryllidaceae",
    descripcion: "Hierba bulbifera con flores rosadas o blancas.",
    caracteristicas: "Tepalos de 3,5-5 cm; hojas estrechamente lineales, macizas; escapos de 15-20 cm; flores 1-2, rosadas.",
    distribucion: "Uruguay y nordeste de la Argentina; frecuente en la estepa climax, a fines del verano.",
    imagen: ""
  },

  habranthus_robustus: {
    id: "habranthus_robustus",
    nombreCientifico: "Habranthus robustus",
    nombreVulgar: "Habranthus robustus",
    familia: "27. Amaryllidaceae",
    descripcion: "Hierba bulbifera con flores rosadas.",
    caracteristicas: "Hojas lineales, de cerca de 4 mm de ancho, con cavidades longitudinales; escapos de 20-30 cm; flores generalmente 2, raramente solitarias, de 4,5-7 cm.",
    distribucion: "America austral; hallado en Las Palmas.",
    imagen: ""
  },

  amaryllis_rutila: {
    id: "amaryllis_rutila",
    nombreCientifico: "Amaryllis rutila",
    nombreVulgar: "Amaryllis rutila",
    familia: "27. Amaryllidaceae",
    descripcion: "Hierba bulbifera con bulbos grandes, globosos, de 5-8 cm de diametro.",
    caracteristicas: "Hojas 6-8, lineal-ensiformes, anchas, de 30 cm por 2,5-5 cm; escapo de 30-50 cm; flores 2-4, carmesi, con tubo de 2 cm y segmentos de 4-10 cm, sin apendices escamiformes; estambres mas cortos que el perigonio; estigma trifido.",
    distribucion: "Sur del Brasil y nordeste de la Argentina, hasta el Delta y la Isla Martin Garcia; a veces cultivada.",
    imagen: ""
  },

  rhodophiala_bifida: {
    id: "rhodophiala_bifida",
    nombreCientifico: "Rhodophiala bifida",
    nombreVulgar: "Rhodophiala bifida",
    familia: "27. Amaryllidaceae",
    descripcion: "Hierba bulbifera con bulbo esferico de 2,5-4 cm de diametro.",
    caracteristicas: "Hojas lineales, carnosas, de hasta 30 cm; escapo grueso de 30-40 cm; espata de 5-7 cm; flores 3-7 en umbela; perigonio de unos 5 cm, rosa fuerte o bermellon.",
    distribucion: "Campos del Uruguay y nordeste de la Argentina; comun en suelos fertiles, en otono.",
    imagen: ""
  },

  hypoxis_decumbens: {
    id: "hypoxis_decumbens",
    nombreCientifico: "Hypoxis decumbens",
    nombreVulgar: "Hypoxis",
    familia: "27. Amaryllidaceae",
    descripcion: "Hierba rizomatosa, con rizoma corto tuberiforme y hojas radicales lineales.",
    caracteristicas: "Hojas glabras o con pelos laxos, de 8-20 cm; escapos cortos y debiles, terminados en 1-2 flores; tepalos amarillos, lanceolados, de 5-7 mm; capsulas cilindricas; semillas asperas, negras. El manual menciona la var. major, mas robusta, con hojas de 20-40 cm y 3-6 flores.",
    distribucion: "America calida; comun en el Delta y en el cesped de la ribera platense.",
    imagen: ""
  },

  zephyranthes_minima: {
    id: "zephyranthes_minima",
    nombreCientifico: "Zephyranthes minima",
    nombreVulgar: "Zephyranthes minima",
    familia: "27. Amaryllidaceae",
    descripcion: "Hierba bulbifera con escapos fistulosos terminados en una sola flor pequena.",
    caracteristicas: "Tepalos blancos, algo violaceos exteriormente, de 5-10 mm; estambres 3 y estaminodios 3; bulbos de 1-1,5 cm; hojas estrechas; escapos de 5-25 cm; espata membranacea de 18-25 mm.",
    distribucion: "Nordeste y centro de la Argentina; comun en campos humedos, en otono.",
    imagen: ""
  },

  zephyranthes_candida: {
    id: "zephyranthes_candida",
    nombreCientifico: "Zephyranthes candida",
    nombreVulgar: "Azucenita",
    familia: "27. Amaryllidaceae",
    descripcion: "Hierba bulbifera de flor grande, con tepalos de mas de 15 mm y 6 estambres.",
    caracteristicas: "Estigma trilobado; bulbos esfericos de unos 2 cm; escapos de 20-40 cm; espata de 2-2,5 cm; tepalos de 3-5 cm.",
    distribucion: "Sur del Brasil, Uruguay y nordeste de la Argentina; comun en el Delta y en la ribera platense, a fines del verano.",
    imagen: ""
  },

  zephyranthes_mesochloa: {
    id: "zephyranthes_mesochloa",
    nombreCientifico: "Zephyranthes mesochloa",
    nombreVulgar: "Zephyranthes mesochloa",
    familia: "27. Amaryllidaceae",
    descripcion: "Hierba bulbifera de flor grande, con tepalos de mas de 15 mm y 6 estambres.",
    caracteristicas: "Estigma trifido; bulbo ovoideo de unos 2 cm; escapo de 10-20 cm; tepalos de 3-5 cm.",
    distribucion: "Centro de la Argentina; raro en la region, citado para Punta Lara.",
    imagen: ""
  },

  commelina_nudiflora: {
    id: "commelina_nudiflora",
    nombreCientifico: "Commelina nudiflora",
    nombreVulgar: "Commelina nudiflora",
    familia: "23. Commelinaceae",
    descripcion: "Hierba perenne, ascendente, casi glabra, con hojas lanceoladas y flores azules grandes.",
    caracteristicas: "Ovario con loculos ventrales biovulados; capsulas con 5 semillas; espata plegada, con los bordes no soldados entre si.",
    distribucion: "Cosmopolita; comun en el Delta y en la ribera.",
    imagen: ""
  },

  commelina_virginica: {
    id: "commelina_virginica",
    nombreCientifico: "Commelina virginica",
    nombreVulgar: "Flor de Santa Lucia",
    familia: "23. Commelinaceae",
    descripcion: "Hierba perenne, ascendente, con hojas lanceoladas laxamente puberulas o glabras y flores azules.",
    caracteristicas: "Ovario con todos los loculos uniovulados; capsula con 3 semillas; espata cuculada, con los bordes parcialmente soldados.",
    distribucion: "En suelos sueltos.",
    imagen: ""
  },

  tradescantia_fluminensis: {
    id: "tradescantia_fluminensis",
    nombreCientifico: "Tradescantia fluminensis",
    nombreVulgar: "Tradescantia",
    familia: "23. Commelinaceae",
    descripcion: "Hierba ascendente, glabra o algo pubescente, con hojas ovadas, agudas y enteras.",
    caracteristicas: "Flores actinomorfas, blancas, en umbelas multifloras; estambres fertiles 6 de longitud semejante; filamentos estaminales barbelados.",
    distribucion: "Brasil austral, Paraguay, Uruguay y norte de la Argentina hasta Buenos Aires; comun en lugares humedos y sombrios.",
    imagen: ""
  },

  descantaria_elongata: {
    id: "descantaria_elongata",
    nombreCientifico: "Descantaria elongata",
    nombreVulgar: "Descantaria",
    familia: "23. Commelinaceae",
    descripcion: "Hierba ascendente, radicante en los nudos, glabra o algo pubescente.",
    caracteristicas: "Hojas lanceoladas, enteras, de unos 8 cm por 2 cm; umbelas densas; flores rosadas; tres estambres con filamentos largos y tres con filamentos cortos.",
    distribucion: "America calida; comun en los bosques del Delta y de la ribera platense.",
    imagen: ""
  }
};

const nonSpeciesPlaceholderIds = new Set([
  "oryzeae",
  "hordeae",
  "chlorideae",
  "aveneae",
  "agrostideae",
  "phalarideae",
  "paspalum",
  "paniceae",
  "andropogoneae",
  "pappophorum",
  "phragmites",
  "distichlis",
  "briza",
  "puccinellia",
  "scleropoa",
  "festuca",
  "cyperus",
  "carex",
  "cyperaceae",
]);

export const monocotEspecies = Object.fromEntries(
  Object.entries(rawMonocotEspecies).filter(
    ([speciesId]) => !nonSpeciesPlaceholderIds.has(speciesId),
  ),
);
