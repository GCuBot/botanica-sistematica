import { CladoNode, Especie } from "@/types";

function species(
  id: string,
  scientificName: string,
  description: string,
  characteristics: string,
  distribution: string
): Especie {
  return {
    id,
    nombreCientifico: scientificName,
    nombreVulgar: scientificName,
    familia: "XXIX. Cyperaceae",
    descripcion: description,
    caracteristicas: characteristics,
    distribucion: distribution,
  };
}

export const secondEditionCyperaceaeSpecies: Record<string, Especie> = {
  ed2_carex_sellowiana: species(
    "ed2_carex_sellowiana", "Carex sellowiana", "Perenne rizomatosa de 8-35 cm.",
    "Espiguilla solitaria, bisexual, de 1,5-2 cm; utriculos elipsoides, trigonos, de 6-7 mm y con rostro corto.",
    "Sur de Brasil, Paraguay, Uruguay y nordeste argentino; Delta y ribera del Plata."
  ),
  ed2_carex_phalaroides: species(
    "ed2_carex_phalaroides", "Carex phalaroides", "Perenne rizomatosa de 5-15 cm.",
    "Cuatro a seis espiguillas largamente pedunculadas; glumas femeninas blanquecinas y aristadas; utriculos obovoides amarillentos de 3-4 mm.",
    "America austral hasta el norte argentino; campos humedos."
  ),
  ed2_carex_divulsa: species(
    "ed2_carex_divulsa", "Carex divulsa", "Perenne brevemente rizomatosa de 30-100 cm.",
    "Espiga terminal laxa, sin bracteas largas; espiguillas inferiores distantes y utriculos ovado-lanceolados verdosos de 3-4 mm.",
    "Originaria del Viejo Mundo; adventicia en Argentina."
  ),
  ed2_carex_marcida: species(
    "ed2_carex_marcida", "Carex marcida", "Perenne de 20-60 cm, con rizomas largos y tendidos.",
    "Seis a diez espiguillas en una espiga terminal oblonga y sin bracteas; utriculos plano-convexos, ovados y largamente rostrados.",
    "America del Norte; rara en Argentina y Uruguay, en suelos humedos."
  ),
  ed2_carex_brongniartii: species(
    "ed2_carex_brongniartii", "Carex brongniartii", "Perenne cespitosa de 40-90 cm, con rizoma muy corto.",
    "Espiga cilindrica densa de 4-6 cm; espiguillas en glomerulos compactos y utriculos ovoideos, coriaceos y pardos.",
    "America austral; suelos humedos del norte de Buenos Aires."
  ),
  ed2_carex_bonariensis: species(
    "ed2_carex_bonariensis", "Carex bonariensis", "Perenne de 10-40 cm, con rizoma corto.",
    "Espiga parda, densa o interrumpida, con bractea muy larga; utriculos papilosos o verrugosos, pajizos y cortamente bidentados.",
    "America austral; comun en la estepa climax y en suelos humedos."
  ),
  ed2_carex_uruguensis: species(
    "ed2_carex_uruguensis", "Carex uruguensis", "Perenne de rizomas cortos y tallos de 30-65 cm.",
    "Espiga interrumpida con seis a ocho espiguillas; utriculos lanceolados, pajizos, glabros y largamente rostrados.",
    "Sur de Brasil, Uruguay y nordeste argentino; suelos humedos."
  ),
  ed2_carex_sororia: species(
    "ed2_carex_sororia", "Carex sororia", "Perenne de 25-60 cm.",
    "Espiga ovada de 15-18 mm; utriculos anchamente elipticos, castaños, de 4-5 mm y contraidos en un rostro hendido.",
    "Paraguay, sur de Brasil, Uruguay y norte argentino; comun en suelos humedos."
  ),
  ed2_carex_tweediana: species(
    "ed2_carex_tweediana", "Carex tweediana", "Perenne de 15-60 cm.",
    "Utriculos pubescentes, orbiculado-ovales y trigonos; espiguillas masculinas superiores y femeninas inferiores, con bracteas muy largas.",
    "Sur de Brasil, Uruguay, Paraguay y nordeste argentino; Delta y ribera."
  ),
  ed2_carex_riparia_chilensis: species(
    "ed2_carex_riparia_chilensis", "Carex riparia var. chilensis", "Perenne rizomatosa de 1-2 m.",
    "Rizomas largos; utriculos glabros, lisos, ovoideo-lanceolados y castaños; varias espiguillas masculinas y femeninas cilindricas.",
    "America del Sur; pajonales del Delta y de la ribera."
  ),
  ed2_carex_pseudocyperus_polysticha: species(
    "ed2_carex_pseudocyperus_polysticha", "Carex pseudocyperus var. polysticha", "Perenne cespitosa de cerca de 1 m.",
    "Cinco a seis espiguillas femeninas largamente pedunculadas y pendulas; utriculos elipsoides de unos 5 mm.",
    "Sur de America; vive en pantanos."
  ),
  ed2_carex_extensa_vixdentata: species(
    "ed2_carex_extensa_vixdentata", "Carex extensa var. vixdentata", "Perenne cespitosa de 10-60 cm.",
    "Tres a cinco espiguillas casi sesiles y erectas; utriculos obovoideos pajizos, con rostro corto y tridentado.",
    "Uruguay y Argentina; suelos humedos."
  ),
};

export const secondEditionCyperaceaeKeyData: Record<string, CladoNode> = {
  ed2_family_cyperaceae: {
    id: "ed2_family_cyperaceae", milestone: "Cyperaceae", manualPage: 154,
    descripcion: "¿Las flores fructiferas son unisexuales y estan encerradas en un utriculo?",
    opcionA: { label: "Si; flores unisexuales encerradas en un utriculo", keyStep: "A", nextNodeId: "ed2_carex" },
    opcionA_prima: { label: "No; flores hermafroditas, sin utriculo", keyStep: "A'", especieId: "ed2_cyperaceae" },
  },
  ed2_carex: {
    id: "ed2_carex", milestone: "Carex", manualPage: 154,
    descripcion: "¿Hay una sola espiguilla bisexual en el apice del tallo?",
    opcionA: { label: "Si; solitaria, de 1,5-2 cm, con seis a doce flores", keyStep: "A", especieId: "ed2_carex_sellowiana" },
    opcionA_prima: { label: "No; espiguillas numerosas", keyStep: "A'", nextNodeId: "ed2_carex_sex_distribution" },
  },
  ed2_carex_sex_distribution: {
    id: "ed2_carex_sex_distribution", milestone: "Carex: distribucion sexual", manualPage: 154,
    descripcion: "¿Cada espiguilla tiene flores femeninas basales y masculinas apicales?",
    opcionA: { label: "Si; todas las espiguillas son bisexuales", keyStep: "B", nextNodeId: "ed2_carex_bisexual_attachment" },
    opcionA_prima: { label: "No; espiguillas masculinas arriba y femeninas mas abajo", keyStep: "B'", nextNodeId: "ed2_carex_unisexual_indument" },
  },
  ed2_carex_bisexual_attachment: {
    id: "ed2_carex_bisexual_attachment", milestone: "Carex: espiguillas bisexuales", manualPage: 154,
    descripcion: "¿Las espiguillas son largamente pedunculadas o siempre sesiles?",
    opcionA: { label: "Cuatro a seis, largamente pedunculadas, cada una con bractea foliar", keyStep: "C", especieId: "ed2_carex_phalaroides" },
    opcionA_prima: { label: "Siempre sesiles, formando una espiga terminal", keyStep: "C'", nextNodeId: "ed2_carex_terminal_bracts" },
  },
  ed2_carex_terminal_bracts: {
    id: "ed2_carex_terminal_bracts", milestone: "Carex: bracteas terminales", manualPage: 154,
    descripcion: "¿La espiga carece de bracteas largas?",
    opcionA: { label: "Sin bracteas o con una mas corta que la espiga", keyStep: "D", nextNodeId: "ed2_carex_terminal_density" },
    opcionA_prima: { label: "Con dos o tres bracteas foliaceas mucho mas largas", keyStep: "D'", nextNodeId: "ed2_carex_long_bracts" },
  },
  ed2_carex_terminal_density: {
    id: "ed2_carex_terminal_density", milestone: "Carex: densidad de la espiga", manualPage: 154,
    descripcion: "¿La inflorescencia es laxa o densa?",
    opcionA: { label: "Laxa; espiguillas inferiores distantes", keyStep: "E", especieId: "ed2_carex_divulsa" },
    opcionA_prima: { label: "Densa", keyStep: "E'", nextNodeId: "ed2_carex_rhizome" },
  },
  ed2_carex_rhizome: {
    id: "ed2_carex_rhizome", milestone: "Carex: rizoma", manualPage: 154,
    descripcion: "¿Los rizomas son largos y tendidos o muy cortos y cespitosos?",
    opcionA: { label: "Largos y tendidos; espiga oblonga ebracteada", keyStep: "F", especieId: "ed2_carex_marcida" },
    opcionA_prima: { label: "Muy cortos; mata cespitosa y espiga cilindrica densa", keyStep: "F'", especieId: "ed2_carex_brongniartii" },
  },
  ed2_carex_long_bracts: {
    id: "ed2_carex_long_bracts", milestone: "Carex: bracteas largas", manualPage: 155,
    descripcion: "¿Los utriculos son papilosos o verrugosos?",
    opcionA: { label: "Si; ovado-lanceolados, pajizos, de 3-4,5 mm", keyStep: "G", especieId: "ed2_carex_bonariensis" },
    opcionA_prima: { label: "No; utriculos lisos", keyStep: "G'", nextNodeId: "ed2_carex_smooth_utricles" },
  },
  ed2_carex_smooth_utricles: {
    id: "ed2_carex_smooth_utricles", milestone: "Carex: utriculos lisos", manualPage: 155,
    descripcion: "¿Los utriculos son lanceolados y largamente rostrados o anchamente elipticos?",
    opcionA: { label: "Lanceolados, pajizos, de 2,5-3 mm y largamente rostrados", keyStep: "H", especieId: "ed2_carex_uruguensis" },
    opcionA_prima: { label: "Anchamente elipticos, castaños, de 4-5 mm y con rostro hendido", keyStep: "H'", especieId: "ed2_carex_sororia" },
  },
  ed2_carex_unisexual_indument: {
    id: "ed2_carex_unisexual_indument", milestone: "Carex: espiguillas unisexuales", manualPage: 155,
    descripcion: "¿Los utriculos son pubescentes o glabros?",
    opcionA: { label: "Pubescentes, orbiculado-ovales y trigonos", keyStep: "I", especieId: "ed2_carex_tweediana" },
    opcionA_prima: { label: "Glabros", keyStep: "I'", nextNodeId: "ed2_carex_glabrous_habit" },
  },
  ed2_carex_glabrous_habit: {
    id: "ed2_carex_glabrous_habit", milestone: "Carex: utriculos glabros", manualPage: 155,
    descripcion: "¿La planta posee rizomas largos o es cespitosa?",
    opcionA: { label: "Rizomas largos; varias espiguillas masculinas y femeninas", keyStep: "J", especieId: "ed2_carex_riparia_chilensis" },
    opcionA_prima: { label: "Cespitosa; espiga masculina solitaria", keyStep: "J'", nextNodeId: "ed2_carex_female_spikelets" },
  },
  ed2_carex_female_spikelets: {
    id: "ed2_carex_female_spikelets", milestone: "Carex: espiguillas femeninas", manualPage: 155,
    descripcion: "¿Las espiguillas femeninas son pendulas y largamente pedunculadas?",
    opcionA: { label: "Si; cinco o seis, pendulas", keyStep: "K", especieId: "ed2_carex_pseudocyperus_polysticha" },
    opcionA_prima: { label: "No; tres a cinco, casi sesiles y erectas", keyStep: "K'", especieId: "ed2_carex_extensa_vixdentata" },
  },
};
