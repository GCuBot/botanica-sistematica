"use client";

import StudyCollection from "@/components/StudyCollection";
import { secondExamCategories, secondExamEntries } from "@/data/secondExam";

export default function SecondExamStudy() {
  return (
    <StudyCollection
      title="Segundo parcial"
      description="Familias, grupos y especies trabajados en las clases del segundo parcial."
      entries={secondExamEntries}
      categories={secondExamCategories}
      storagePrefix="botanica:second-exam"
      searchLabel="Buscar familia, género, especie o carácter"
      searchPlaceholder="Ej: estambres tetradínamos, sorgo, Araucaria"
      emptyMessage="No figura entre los contenidos cargados del segundo parcial."
      diagnosticLabel="Carácter clave"
      examplesLabel="Géneros y especies de la clase"
    />
  );
}
