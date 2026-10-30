import { CladoNode, Especie } from "@/types";
import { secondEditionSpeciesData, secondEditionTree } from "./secondEdition";

export const especiesData: Record<string, Especie> = secondEditionSpeciesData;

export const cladosTree: Record<string, CladoNode> = secondEditionTree;
