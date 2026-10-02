import { CladoNode, Especie } from "@/types";
import {
  secondEditionPteridophytaFamilies,
  secondEditionPteridophytaKeyData,
} from "./secondEditionPteridophyta";
import {
  secondEditionSpermatophytaFamilies,
  secondEditionSpermatophytaKeyData,
} from "./secondEditionSpermatophyta";
import {
  secondEditionDicotGroupsABFamilies,
  secondEditionDicotGroupsABKeyData,
} from "./secondEditionDicotGroupsAB";
import {
  secondEditionDicotGroupC1Families,
  secondEditionDicotGroupC1KeyData,
} from "./secondEditionDicotGroupC1";
import {
  secondEditionDicotGroupC2Families,
  secondEditionDicotGroupC2KeyData,
} from "./secondEditionDicotGroupC2";
import {
  secondEditionDicotGroupC3Families,
  secondEditionDicotGroupC3KeyData,
} from "./secondEditionDicotGroupC3";
import {
  secondEditionDicotGroupDFamilies,
  secondEditionDicotGroupDKeyData,
} from "./secondEditionDicotGroupD";
import {
  secondEditionDicotGroupE1Families,
  secondEditionDicotGroupE1KeyData,
} from "./secondEditionDicotGroupE1";
import {
  secondEditionDicotGroupE2Families,
  secondEditionDicotGroupE2KeyData,
} from "./secondEditionDicotGroupE2";
import {
  secondEditionSelaginellaceaeKeyData,
  secondEditionSelaginellaceaeSpecies,
} from "./secondEditionSelaginellaceae";
import {
  secondEditionEarlyPteridophyteKeyData,
  secondEditionEarlyPteridophyteSpecies,
} from "./secondEditionEarlyPteridophytes";
import {
  secondEditionAdiantaceaeKeyData,
  secondEditionAdiantaceaeSpecies,
} from "./secondEditionAdiantaceae";
import {
  secondEditionDavalliaceaePolypodiaceaeKeyData,
  secondEditionDavalliaceaePolypodiaceaeSpecies,
} from "./secondEditionDavalliaceaePolypodiaceae";
import {
  secondEditionAspidiaceaeKeyData,
  secondEditionAspidiaceaeSpecies,
} from "./secondEditionAspidiaceae";
import {
  secondEditionMiddlePteridophyteKeyData,
  secondEditionMiddlePteridophyteSpecies,
} from "./secondEditionMiddlePteridophytes";
import {
  secondEditionLatePteridophyteKeyData,
  secondEditionLatePteridophyteSpecies,
} from "./secondEditionLatePteridophytes";
import {
  secondEditionEphedraceaeKeyData,
  secondEditionEphedraceaeSpecies,
} from "./secondEditionEphedraceae";
import {
  secondEditionTyphaceaeKeyData,
  secondEditionTyphaceaeSpecies,
} from "./secondEditionTyphaceae";
import {
  secondEditionPotamogetonaceaeKeyData,
  secondEditionPotamogetonaceaeSpecies,
} from "./secondEditionPotamogetonaceae";
import {
  secondEditionZannichelliaceaeJuncaginaceaeKeyData,
  secondEditionZannichelliaceaeJuncaginaceaeSpecies,
} from "./secondEditionZannichelliaceaeJuncaginaceae";
import {
  secondEditionAlismataceaeButomaceaeKeyData,
  secondEditionAlismataceaeButomaceaeSpecies,
} from "./secondEditionAlismataceaeButomaceae";
import {
  secondEditionHydrocharitaceaeKeyData,
  secondEditionHydrocharitaceaeSpecies,
} from "./secondEditionHydrocharitaceae";
import {
  secondEditionGramineaeKeyData,
  secondEditionGramineaeSpecies,
} from "./secondEditionGramineae";
import {
  secondEditionCyperaceaeKeyData,
  secondEditionCyperaceaeSpecies,
} from "./secondEditionCyperaceae";
import {
  secondEditionPalmaeAraceaeKeyData,
  secondEditionPalmaeAraceaeSpecies,
} from "./secondEditionPalmaeAraceae";
import {
  secondEditionLemnaceaeKeyData,
  secondEditionLemnaceaeSpecies,
} from "./secondEditionLemnaceae";
import {
  secondEditionBromeliaceaeKeyData,
  secondEditionBromeliaceaeSpecies,
} from "./secondEditionBromeliaceae";
import {
  secondEditionCommelinaceaeKeyData,
  secondEditionCommelinaceaeSpecies,
} from "./secondEditionCommelinaceae";
import {
  secondEditionPontederiaceaeKeyData,
  secondEditionPontederiaceaeSpecies,
} from "./secondEditionPontederiaceae";
import {
  secondEditionJuncaceaeKeyData,
  secondEditionJuncaceaeSpecies,
} from "./secondEditionJuncaceae";
import {
  secondEditionLiliaceaeKeyData,
  secondEditionLiliaceaeSpecies,
} from "./secondEditionLiliaceae";
import {
  secondEditionAmaryllidaceaeKeyData,
  secondEditionAmaryllidaceaeSpecies,
} from "./secondEditionAmaryllidaceae";
import {
  secondEditionDioscoreaceaeKeyData,
  secondEditionDioscoreaceaeSpecies,
} from "./secondEditionDioscoreaceae";
import {
  secondEditionIridaceaeKeyData,
  secondEditionIridaceaeSpecies,
} from "./secondEditionIridaceae";
import {
  secondEditionZingiberaceaeCannaceaeMarantaceaeKeyData,
  secondEditionZingiberaceaeCannaceaeMarantaceaeSpecies,
} from "./secondEditionZingiberaceaeCannaceaeMarantaceae";
import {
  secondEditionOrchidaceaeKeyData,
  secondEditionOrchidaceaeSpecies,
} from "./secondEditionOrchidaceae";
import {
  secondEditionPiperaceaeSalicaceaeUlmaceaeKeyData,
  secondEditionPiperaceaeSalicaceaeUlmaceaeSpecies,
} from "./secondEditionPiperaceaeSalicaceaeUlmaceae";
import {
  secondEditionMoraceaeCannabinaceaeUrticaceaeKeyData,
  secondEditionMoraceaeCannabinaceaeUrticaceaeSpecies,
} from "./secondEditionMoraceaeCannabinaceaeUrticaceae";
import {
  secondEditionSantalaceaeLoranthaceaeAristolochiaceaeKeyData,
  secondEditionSantalaceaeLoranthaceaeAristolochiaceaeSpecies,
} from "./secondEditionSantalaceaeLoranthaceaeAristolochiaceae";
import {
  secondEditionPolygonaceaeKeyData,
  secondEditionPolygonaceaeSpecies,
} from "./secondEditionPolygonaceae";
import {
  secondEditionChenopodiaceaeKeyData,
  secondEditionChenopodiaceaeSpecies,
} from "./secondEditionChenopodiaceae";
import {
  secondEditionAmaranthaceaeKeyData,
  secondEditionAmaranthaceaeSpecies,
} from "./secondEditionAmaranthaceae";
import {
  secondEditionNyctaginaceaePhytolaccaceaeKeyData,
  secondEditionNyctaginaceaePhytolaccaceaeSpecies,
} from "./secondEditionNyctaginaceaePhytolaccaceae";
import {
  secondEditionAizoaceaePortulacaceaeBasellaceaeKeyData,
  secondEditionAizoaceaePortulacaceaeBasellaceaeSpecies,
} from "./secondEditionAizoaceaePortulacaceaeBasellaceae";
import {
  secondEditionCaryophyllaceaeKeyData,
  secondEditionCaryophyllaceaeSpecies,
} from "./secondEditionCaryophyllaceae";
import {
  secondEditionNymphaeaceaeCeratophyllaceaeRanunculaceaeKeyData,
  secondEditionNymphaeaceaeCeratophyllaceaeRanunculaceaeSpecies,
} from "./secondEditionNymphaeaceaeCeratophyllaceaeRanunculaceae";
import {
  secondEditionBerberidaceaeLauraceaePapaveraceaeKeyData,
  secondEditionBerberidaceaeLauraceaePapaveraceaeSpecies,
} from "./secondEditionBerberidaceaeLauraceaePapaveraceae";
import {
  secondEditionCapparidaceaeKeyData,
  secondEditionCapparidaceaeSpecies,
} from "./secondEditionCapparidaceae";
import {
  secondEditionCruciferaeKeyData,
  secondEditionCruciferaeSpecies,
} from "./secondEditionCruciferae";
import {
  secondEditionResedaceaeCrassulaceaeSaxifragaceaeRosaceaeKeyData,
  secondEditionResedaceaeCrassulaceaeSaxifragaceaeRosaceaeSpecies,
} from "./secondEditionResedaceaeCrassulaceaeSaxifragaceaeRosaceae";
import {
  secondEditionLeguminosaeMimosoideaeKeyData,
  secondEditionLeguminosaeMimosoideaeSpecies,
} from "./secondEditionLeguminosaeMimosoideae";
import {
  secondEditionLeguminosaeCaesalpinioideaeKeyData,
  secondEditionLeguminosaeCaesalpinioideaeSpecies,
} from "./secondEditionLeguminosaeCaesalpinioideae";
import {
  secondEditionLeguminosaePapilionoideaeKeyData,
  secondEditionLeguminosaePapilionoideaeSpecies,
} from "./secondEditionLeguminosaePapilionoideae";

function mergeUniqueRecords<T>(label: string, records: Array<Record<string, T>>) {
  const merged: Record<string, T> = {};
  records.forEach((record) => {
    Object.entries(record).forEach(([id, value]) => {
      if (id in merged) throw new Error(`${label} duplicado en segunda edición: ${id}`);
      merged[id] = value;
    });
  });
  return merged;
}

export const secondEditionSpeciesData: Record<string, Especie> = mergeUniqueRecords(
  "Taxón",
  [
    secondEditionPteridophytaFamilies,
    secondEditionSpermatophytaFamilies,
    secondEditionDicotGroupsABFamilies,
    secondEditionDicotGroupC1Families,
    secondEditionDicotGroupC2Families,
    secondEditionDicotGroupC3Families,
    secondEditionDicotGroupDFamilies,
    secondEditionDicotGroupE1Families,
    secondEditionDicotGroupE2Families,
    secondEditionSelaginellaceaeSpecies,
    secondEditionEarlyPteridophyteSpecies,
    secondEditionAdiantaceaeSpecies,
    secondEditionDavalliaceaePolypodiaceaeSpecies,
    secondEditionAspidiaceaeSpecies,
    secondEditionMiddlePteridophyteSpecies,
    secondEditionLatePteridophyteSpecies,
    secondEditionEphedraceaeSpecies,
    secondEditionTyphaceaeSpecies,
    secondEditionPotamogetonaceaeSpecies,
    secondEditionZannichelliaceaeJuncaginaceaeSpecies,
    secondEditionAlismataceaeButomaceaeSpecies,
    secondEditionHydrocharitaceaeSpecies,
    secondEditionGramineaeSpecies,
    secondEditionCyperaceaeSpecies,
    secondEditionPalmaeAraceaeSpecies,
    secondEditionLemnaceaeSpecies,
    secondEditionBromeliaceaeSpecies,
    secondEditionCommelinaceaeSpecies,
    secondEditionPontederiaceaeSpecies,
    secondEditionJuncaceaeSpecies,
    secondEditionLiliaceaeSpecies,
    secondEditionAmaryllidaceaeSpecies,
    secondEditionDioscoreaceaeSpecies,
    secondEditionIridaceaeSpecies,
    secondEditionZingiberaceaeCannaceaeMarantaceaeSpecies,
    secondEditionOrchidaceaeSpecies,
    secondEditionPiperaceaeSalicaceaeUlmaceaeSpecies,
    secondEditionMoraceaeCannabinaceaeUrticaceaeSpecies,
    secondEditionSantalaceaeLoranthaceaeAristolochiaceaeSpecies,
    secondEditionPolygonaceaeSpecies,
    secondEditionChenopodiaceaeSpecies,
    secondEditionAmaranthaceaeSpecies,
    secondEditionNyctaginaceaePhytolaccaceaeSpecies,
    secondEditionAizoaceaePortulacaceaeBasellaceaeSpecies,
    secondEditionCaryophyllaceaeSpecies,
    secondEditionNymphaeaceaeCeratophyllaceaeRanunculaceaeSpecies,
    secondEditionBerberidaceaeLauraceaePapaveraceaeSpecies,
    secondEditionCapparidaceaeSpecies,
    secondEditionCruciferaeSpecies,
    secondEditionResedaceaeCrassulaceaeSaxifragaceaeRosaceaeSpecies,
    secondEditionLeguminosaeMimosoideaeSpecies,
    secondEditionLeguminosaeCaesalpinioideaeSpecies,
    secondEditionLeguminosaePapilionoideaeSpecies,
  ]
);

export const secondEditionTree: Record<string, CladoNode> = mergeUniqueRecords(
  "Nodo",
  [
    secondEditionPteridophytaKeyData,
    secondEditionSpermatophytaKeyData,
    secondEditionDicotGroupsABKeyData,
    secondEditionDicotGroupC1KeyData,
    secondEditionDicotGroupC2KeyData,
    secondEditionDicotGroupC3KeyData,
    secondEditionDicotGroupDKeyData,
    secondEditionDicotGroupE1KeyData,
    secondEditionDicotGroupE2KeyData,
    secondEditionSelaginellaceaeKeyData,
    secondEditionEarlyPteridophyteKeyData,
    secondEditionAdiantaceaeKeyData,
    secondEditionDavalliaceaePolypodiaceaeKeyData,
    secondEditionAspidiaceaeKeyData,
    secondEditionMiddlePteridophyteKeyData,
    secondEditionLatePteridophyteKeyData,
    secondEditionEphedraceaeKeyData,
    secondEditionTyphaceaeKeyData,
    secondEditionPotamogetonaceaeKeyData,
    secondEditionZannichelliaceaeJuncaginaceaeKeyData,
    secondEditionAlismataceaeButomaceaeKeyData,
    secondEditionHydrocharitaceaeKeyData,
    secondEditionGramineaeKeyData,
    secondEditionCyperaceaeKeyData,
    secondEditionPalmaeAraceaeKeyData,
    secondEditionLemnaceaeKeyData,
    secondEditionBromeliaceaeKeyData,
    secondEditionCommelinaceaeKeyData,
    secondEditionPontederiaceaeKeyData,
    secondEditionJuncaceaeKeyData,
    secondEditionLiliaceaeKeyData,
    secondEditionAmaryllidaceaeKeyData,
    secondEditionDioscoreaceaeKeyData,
    secondEditionIridaceaeKeyData,
    secondEditionZingiberaceaeCannaceaeMarantaceaeKeyData,
    secondEditionOrchidaceaeKeyData,
    secondEditionPiperaceaeSalicaceaeUlmaceaeKeyData,
    secondEditionMoraceaeCannabinaceaeUrticaceaeKeyData,
    secondEditionSantalaceaeLoranthaceaeAristolochiaceaeKeyData,
    secondEditionPolygonaceaeKeyData,
    secondEditionChenopodiaceaeKeyData,
    secondEditionAmaranthaceaeKeyData,
    secondEditionNyctaginaceaePhytolaccaceaeKeyData,
    secondEditionAizoaceaePortulacaceaeBasellaceaeKeyData,
    secondEditionCaryophyllaceaeKeyData,
    secondEditionNymphaeaceaeCeratophyllaceaeRanunculaceaeKeyData,
    secondEditionBerberidaceaeLauraceaePapaveraceaeKeyData,
    secondEditionCapparidaceaeKeyData,
    secondEditionCruciferaeKeyData,
    secondEditionResedaceaeCrassulaceaeSaxifragaceaeRosaceaeKeyData,
    secondEditionLeguminosaeMimosoideaeKeyData,
    secondEditionLeguminosaeCaesalpinioideaeKeyData,
    secondEditionLeguminosaePapilionoideaeKeyData,
  ]
);

export const SECOND_EDITION_ROOT_NODE_ID = "ed2_root";
