"use client";

import dynamic from "next/dynamic";
import { usePersistentState } from "@/hooks/usePersistentState";

type StudySection = "first" | "second" | "ecoregions";

const STUDY_SECTIONS: readonly StudySection[] = ["first", "second", "ecoregions"];
const loading = () => <p className="py-8 text-center text-gray-600">Cargando material...</p>;

const FirstExamPractice = dynamic(() => import("@/components/FirstExamPractice"), { loading });
const SecondExamStudy = dynamic(() => import("@/components/SecondExamStudy"), { loading });
const EcoregionsStudy = dynamic(() => import("@/components/EcoregionsStudy"), { loading });

const sections: Array<{ id: StudySection; label: string }> = [
  { id: "first", label: "Primer parcial" },
  { id: "second", label: "Segundo parcial" },
  { id: "ecoregions", label: "Ecorregiones" },
];

export default function StudyHub() {
  const [section, setSection] = usePersistentState<StudySection>(
    "botanica:study-section",
    "first",
    STUDY_SECTIONS
  );

  return (
    <section className="min-w-0 max-w-full overflow-hidden">
      <div className="mb-7 overflow-x-auto border-b border-gray-300" role="tablist" aria-label="Material de estudio">
        <div className="flex min-w-max gap-1">
          {sections.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={section === item.id}
              onClick={() => setSection(item.id)}
              className={`border-b-2 px-4 py-3 text-sm font-semibold ${section === item.id ? "border-green-700 text-green-800" : "border-transparent text-gray-600 hover:border-gray-300 hover:text-gray-900"}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {section === "first" ? (
        <FirstExamPractice />
      ) : section === "second" ? (
        <SecondExamStudy />
      ) : (
        <EcoregionsStudy />
      )}
    </section>
  );
}
