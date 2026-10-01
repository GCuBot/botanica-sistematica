import { CladoNode, Especie } from "@/types";
import { manualFamilyData, manualKeyData } from "./manualKey";
import { monocotiledoneaeData, monocotEspecies } from "./monocotyledoneae";
import { secondEditionSpeciesData, secondEditionTree } from "./secondEdition";

// Datos de especies/familias basados en el manual
export const especiesData: Record<string, Especie> = {
  ...manualFamilyData,
  ...monocotEspecies,
  ...secondEditionSpeciesData,
};

// Árbol de clados - Estructura del manual de Flora de Buenos Aires
export const cladosTree: Record<string, CladoNode> = {
  ...manualKeyData,

  // Rama Angiosperma - Nivel 1
  angiosperm_1: {
    id: "angiosperm_1",
    milestone: "Angiospermae",
    manualPage: 39,
    descripcion: "¿Cuántos cotiledones tiene el embrión?",
    opcionA: {
      label: "1 cotiledón - Hojas paralelinervadas (Monocotiledoneae)",
      keyStep: "Clase 1",
      nextNodeId: "monocot_root",
    },
    opcionA_prima: {
      label: "2 cotiledones - Hojas retinervadas (Dicotyledoneae)",
      keyStep: "Clase 2",
      nextNodeId: "dicot_root",
    },
  },

  // Rama MONOCOTILEDONEAE - Toda la estructura del manual
  ...monocotiledoneaeData,
  ...secondEditionTree,
};
