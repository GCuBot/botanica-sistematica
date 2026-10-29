"use client";

import StudyCollection from "@/components/StudyCollection";
import { ecoregionCategories, ecoregionEntries } from "@/data/ecoregions";

export default function EcoregionsStudy() {
  return (
    <StudyCollection
      title="Ecorregiones"
      description="Ambientes de la Argentina, su vegetación, especies indicadoras y actividades productivas."
      entries={ecoregionEntries}
      categories={ecoregionCategories}
      storagePrefix="botanica:ecoregions"
      searchLabel="Buscar ecorregión, especie, ambiente o actividad"
      searchPlaceholder="Ej: jarilla, humedal, ganadería ovina"
      emptyMessage="No se encontró una ecorregión asociada a esa búsqueda."
      diagnosticLabel="Rasgo clave"
      examplesLabel="Especies y actividades características"
    />
  );
}
