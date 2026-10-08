"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  GlossaryMode,
  GlossaryText,
  KeyDiagnostic,
  PlantExamples,
  QuickLookupMode,
} from "@/components/ExamStudyTools";
import {
  cerealKeyNodes,
  cerealKeyStart,
  cerealResults,
  cerealStudyCards,
  examTaxa,
  familyKeyNodes,
  familyKeyStart,
  KeyNode,
  KeyResult,
  rosaceaeKeyNodes,
  rosaceaeKeyStart,
  rosaceaeResults,
  rosaceaeStudyCards,
  StudyCard,
} from "@/data/firstExam";
import { usePersistentState } from "@/hooks/usePersistentState";

type PracticeMode = "lookup" | "exam" | "glossary" | "review" | "key" | "cereals";
type SheetType = "families" | "rosaceae" | "cereals";
type KeyType = "families" | "rosaceae";

const PRACTICE_MODES: readonly PracticeMode[] = ["lookup", "exam", "glossary", "review", "cereals", "key"];
const SHEET_TYPES: readonly SheetType[] = ["families", "rosaceae", "cereals"];
const KEY_TYPES: readonly KeyType[] = ["families", "rosaceae"];

const modeLabels: Array<{ id: PracticeMode; label: string }> = [
  { id: "lookup", label: "Consulta" },
  { id: "exam", label: "Justificar" },
  { id: "glossary", label: "Glosario" },
  { id: "review", label: "Fichas" },
  { id: "cereals", label: "Cereales" },
  { id: "key", label: "Clave" },
];

function GuidedKey({
  nodes,
  start,
  results,
}: {
  nodes: Record<string, KeyNode>;
  start: string;
  results: Record<string, KeyResult>;
}) {
  const [path, setPath] = useState<string[]>([start]);
  const [resultId, setResultId] = useState<string | null>(null);
  const currentId = path[path.length - 1];
  const node = nodes[currentId];
  const result = resultId ? results[resultId] : null;

  const reset = () => {
    setPath([start]);
    setResultId(null);
  };

  const choose = (choice: KeyNode["choices"][number]) => {
    if (choice.result) setResultId(choice.result);
    if (choice.next) setPath((current) => [...current, choice.next as string]);
  };

  if (result) {
    return (
      <section className="border border-emerald-200 bg-emerald-50 p-5 rounded-lg" aria-live="polite">
        <p className="text-sm font-semibold uppercase text-emerald-700">Resultado</p>
        <h3 className="mt-1 text-2xl font-bold text-gray-900">{result.title}</h3>
        {result.scientificName && <p className="mt-1 italic text-gray-700">{result.scientificName}</p>}
        <p className="mt-3 text-gray-700"><GlossaryText text={result.explanation} /></p>
        <button onClick={reset} className="mt-5 rounded-md bg-emerald-700 px-4 py-2 font-medium text-white hover:bg-emerald-800">
          Empezar de nuevo
        </button>
      </section>
    );
  }

  return (
    <section className="border border-gray-200 bg-white p-5 rounded-lg">
      <div className="mb-5 flex items-center justify-between gap-3">
        <p className="text-sm font-medium text-gray-500">Paso {path.length}</p>
        {path.length > 1 && (
          <button
            onClick={() => setPath((current) => current.slice(0, -1))}
            className="rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Volver
          </button>
        )}
      </div>
      <h3 className="text-xl font-bold text-gray-900"><GlossaryText text={node.prompt} /></h3>
      {node.hint && <p className="mt-2 text-sm text-gray-600"><GlossaryText text={node.hint} /></p>}
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {node.choices.map((choice) => (
          <button
            key={choice.label}
            onClick={() => choose(choice)}
            className="min-h-20 rounded-md border-2 border-gray-200 bg-white p-4 text-left font-medium text-gray-800 hover:border-emerald-500 hover:bg-emerald-50"
          >
            {choice.label}
          </button>
        ))}
      </div>
    </section>
  );
}

function TextStudyCard({ card }: { card: StudyCard }) {
  return (
    <article className="overflow-hidden rounded-lg border border-gray-200 bg-white">
      <figure>
        <div className="relative aspect-[4/3] bg-gray-950">
          <Image src={card.image} alt={card.imageAlt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain" />
          {card.schemeImage && card.schemeAlt && (
            <div className="absolute right-2 top-2 h-24 w-24 overflow-hidden border-2 border-white bg-black shadow-md sm:h-28 sm:w-28">
              <Image src={card.schemeImage} alt={card.schemeAlt} fill sizes="(max-width: 640px) 96px, 112px" className="object-contain" />
            </div>
          )}
        </div>
        <figcaption className="border-b border-gray-200 bg-gray-50 px-4 py-2 text-xs text-gray-600">
          {card.imageCaption}
          {card.schemeText && (
            <span className="mt-1 block font-medium text-gray-700">
              <span className="font-bold">Esquema:</span> {card.schemeText}
            </span>
          )}
          {card.imageSourceUrl && card.imageCredit && (
            <>
              {" "}
              <a href={card.imageSourceUrl} target="_blank" rel="noreferrer" className="font-medium text-emerald-800 underline">
                Fuente: {card.imageCredit}
              </a>
            </>
          )}
        </figcaption>
      </figure>
      <div className="p-5">
        <p className="text-xs font-semibold uppercase text-emerald-700">{card.group}</p>
        <h3 className="mt-1 text-xl font-bold text-gray-900">{card.name}</h3>
        <p className="mt-1 text-sm italic text-gray-600">{card.scientificName}</p>
        <KeyDiagnostic text={card.keyDiagnostic} />
        <ul className="mt-4 space-y-2 text-sm text-gray-700">
          {card.diagnosticTraits.map((trait) => (
            <li key={trait} className="border-l-2 border-emerald-200 pl-3">
              <GlossaryText text={trait} />
            </li>
          ))}
        </ul>
        <div className="mt-4 border-t border-gray-200 pt-4 text-sm text-gray-700">
          <p><strong>Que mirar:</strong> <GlossaryText text={card.lookFor} /></p>
          <p className="mt-2"><strong>Ojo con:</strong> <GlossaryText text={card.confusion} /></p>
        </div>
        <PlantExamples examples={card.examples} />
      </div>
    </article>
  );
}

function ReviewMode() {
  const [sheetType, setSheetType] = usePersistentState<SheetType>(
    "botanica:first-exam-sheet",
    "families",
    SHEET_TYPES
  );

  return (
    <div>
      <div className="mb-6 border-l-4 border-amber-500 bg-amber-50 p-4 text-sm text-amber-950 dark-panel-warm">
        <strong>Nivel de esta guia:</strong> las clases permiten separar con seguridad familias y las subfamilias de Amaryllidaceae. En Rosaceae orientan a grupos de generos; la clave de cereales llega a taxones concretos. El caracter resaltado es prioritario dentro de esta comparacion, no necesariamente exclusivo en toda la flora.
      </div>
      <div className="mb-6 flex overflow-x-auto border-b border-gray-300" aria-label="Tipos de fichas">
        {[
          { id: "families", label: "Familias" },
          { id: "rosaceae", label: "Grupos de Rosaceae" },
          { id: "cereals", label: "Cereales" },
        ].map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setSheetType(item.id as typeof sheetType)}
            className={`shrink-0 border-b-2 px-4 py-2.5 text-sm font-semibold ${sheetType === item.id ? "border-emerald-700 text-emerald-800" : "border-transparent text-gray-600 hover:text-gray-900"}`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {sheetType === "families" && examTaxa.map((taxon) => (
            <article key={taxon.id} className="overflow-hidden rounded-lg border border-gray-200 bg-white">
              <div className="relative aspect-[3/2] bg-gray-100">
                <Image src={taxon.image} alt={taxon.imageAlt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase text-emerald-700">{taxon.group}</p>
                <h3 className="mt-1 text-xl font-bold text-gray-900">{taxon.name}</h3>
                <KeyDiagnostic text={taxon.keyDiagnostic} />
                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  {taxon.diagnosticTraits.map((trait) => <li key={trait}>• <GlossaryText text={trait} /></li>)}
                </ul>
                <div className="mt-4 border-t border-gray-200 pt-4 text-sm text-gray-700">
                  <p><strong>Que mirar:</strong> <GlossaryText text={taxon.lookFor} /></p>
                  <p className="mt-2"><strong>Ojo con:</strong> <GlossaryText text={taxon.confusion} /></p>
                  <p className="mt-2"><strong>Generos de referencia:</strong> {taxon.referenceGenera}</p>
                </div>
                <PlantExamples examples={taxon.examples} />
              </div>
            </article>
          ))}
        {sheetType === "rosaceae" && rosaceaeStudyCards.map((card) => <TextStudyCard key={card.id} card={card} />)}
        {sheetType === "cereals" && cerealStudyCards.map((card) => <TextStudyCard key={card.id} card={card} />)}
      </div>
    </div>
  );
}

function FamilyKeyMode() {
  const [keyType, setKeyType] = usePersistentState<KeyType>(
    "botanica:first-exam-key",
    "families",
    KEY_TYPES
  );
  const familyResults = useMemo(
    () => Object.fromEntries(examTaxa.map((taxon) => [taxon.id, {
      title: taxon.name,
      scientificName: taxon.group,
      explanation: taxon.lookFor,
    }])),
    []
  );

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-5 inline-flex rounded-md border border-gray-300 bg-white p-1" aria-label="Nivel de la clave">
        <button
          onClick={() => setKeyType("families")}
          className={`rounded px-4 py-2 text-sm font-semibold ${keyType === "families" ? "bg-emerald-700 text-white" : "text-gray-700 hover:bg-gray-100"}`}
        >
          Familias
        </button>
        <button
          onClick={() => setKeyType("rosaceae")}
          className={`rounded px-4 py-2 text-sm font-semibold ${keyType === "rosaceae" ? "bg-emerald-700 text-white" : "text-gray-700 hover:bg-gray-100"}`}
        >
          Grupos de Rosaceae
        </button>
      </div>
      {keyType === "families" ? (
        <>
          <p className="mb-5 text-gray-700">Use caracteres florales observables. La clave es didactica para el conjunto del parcial, no una clave taxonomica universal.</p>
          <GuidedKey key="families" nodes={familyKeyNodes} start={familyKeyStart} results={familyResults} />
        </>
      ) : (
        <>
          <p className="mb-5 text-gray-700">Una vez reconocida Rosaceae, la arquitectura del gineceo y del hipanto permite orientar el genero o grupo.</p>
          <GuidedKey key="rosaceae" nodes={rosaceaeKeyNodes} start={rosaceaeKeyStart} results={rosaceaeResults} />
        </>
      )}
    </div>
  );
}

function ExamMode() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedTaxon, setSelectedTaxon] = useState<string | null>(null);
  const [selectedTraits, setSelectedTraits] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const question = examTaxa[questionIndex];

  const options = useMemo(() => {
    const offsets = [0, 3, 6, 8];
    const choices = offsets.map((offset) => examTaxa[(questionIndex + offset) % examTaxa.length]);
    const rotation = questionIndex % choices.length;
    return [...choices.slice(rotation), ...choices.slice(0, rotation)];
  }, [questionIndex]);

  const displayedTraits = useMemo(() => {
    const rotation = questionIndex % question.quizTraits.length;
    return [...question.quizTraits.slice(rotation), ...question.quizTraits.slice(0, rotation)];
  }, [question, questionIndex]);

  const toggleTrait = (trait: string) => {
    if (checked) return;
    setSelectedTraits((current) => {
      if (current.includes(trait)) return current.filter((item) => item !== trait);
      if (current.length === 2) return current;
      return [...current, trait];
    });
  };

  const checkAnswer = () => {
    if (!selectedTaxon || selectedTraits.length !== 2) return;
    const identityPoint = selectedTaxon === question.id ? 1 : 0;
    const diagnosticPoint = question.quizTraits.slice(0, 2).every((trait) => selectedTraits.includes(trait)) ? 1 : 0;
    setScore((current) => current + identityPoint + diagnosticPoint);
    setChecked(true);
  };

  const next = () => {
    if (questionIndex === examTaxa.length - 1) {
      setFinished(true);
      return;
    }
    setQuestionIndex((current) => current + 1);
    setSelectedTaxon(null);
    setSelectedTraits([]);
    setChecked(false);
  };

  const restart = () => {
    setQuestionIndex(0);
    setSelectedTaxon(null);
    setSelectedTraits([]);
    setChecked(false);
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    const maxScore = examTaxa.length * 2;
    return (
      <section className="mx-auto max-w-2xl rounded-lg border border-gray-200 bg-white p-7 text-center">
        <p className="text-sm font-semibold uppercase text-emerald-700">Simulacro completo</p>
        <h3 className="mt-2 text-3xl font-bold text-gray-900">{score} / {maxScore}</h3>
        <p className="mt-3 text-gray-700">Cada caso vale un punto por identificar y otro por justificar con los dos caracteres diagnosticos.</p>
        <button onClick={restart} className="mt-6 rounded-md bg-emerald-700 px-5 py-2.5 font-medium text-white hover:bg-emerald-800">Repetir simulacro</button>
      </section>
    );
  }

  const identityCorrect = selectedTaxon === question.id;
  const traitsCorrect = question.quizTraits.slice(0, 2).every((trait) => selectedTraits.includes(trait));

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-3 flex items-center justify-between text-sm text-gray-600">
        <span>Caso {questionIndex + 1} de {examTaxa.length}</span>
        <span>Puntaje: {score}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-gray-200"><div className="h-full bg-emerald-600" style={{ width: `${((questionIndex + 1) / examTaxa.length) * 100}%` }} /></div>
      <section className="mt-5 overflow-hidden rounded-lg border border-gray-200 bg-white">
        <div className="relative aspect-[3/2] bg-gray-100">
          <Image src={question.image} alt="Ejemplar floral para identificar" fill priority={questionIndex === 0} sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
        </div>
        <div className="p-5 sm:p-6">
          <h3 className="text-xl font-bold text-gray-900">1. ¿A que grupo corresponde?</h3>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {options.map((option) => (
              <button key={option.id} disabled={checked} onClick={() => setSelectedTaxon(option.id)} className={`rounded-md border-2 p-3 text-left font-medium ${selectedTaxon === option.id ? "border-emerald-600 bg-emerald-50 text-emerald-900" : "border-gray-200 text-gray-800 hover:border-emerald-400"}`}>{option.name}</button>
            ))}
          </div>
          <h3 className="mt-6 text-xl font-bold text-gray-900">2. Elegi los dos caracteres que mejor lo justifican</h3>
          <p className="mt-1 text-sm text-gray-600">Seleccionados: {selectedTraits.length} / 2</p>
          <div className="mt-3 grid gap-2">
            {displayedTraits.map((trait) => (
              <button key={trait} disabled={checked} onClick={() => toggleTrait(trait)} className={`rounded-md border p-3 text-left text-sm ${selectedTraits.includes(trait) ? "border-emerald-600 bg-emerald-50 text-emerald-900" : "border-gray-200 text-gray-700 hover:border-emerald-400"}`}>{trait}</button>
            ))}
          </div>
          {checked && (
            <div className={`mt-5 rounded-md border p-4 ${identityCorrect && traitsCorrect ? "border-emerald-200 bg-emerald-50" : "border-amber-200 bg-amber-50"}`} aria-live="polite">
              <p className="font-bold text-gray-900">{identityCorrect && traitsCorrect ? "Identificacion y fundamento correctos" : `Respuesta: ${question.name}`}</p>
              <p className="mt-1 text-sm text-gray-700">Diagnostico: <GlossaryText text={`${question.quizTraits[0]}; ${question.quizTraits[1].toLowerCase()}.`} /></p>
            </div>
          )}
          <div className="mt-5 flex justify-end">
            {!checked ? (
              <button disabled={!selectedTaxon || selectedTraits.length !== 2} onClick={checkAnswer} className="rounded-md bg-emerald-700 px-5 py-2.5 font-medium text-white hover:bg-emerald-800 disabled:cursor-not-allowed disabled:bg-gray-300">Corregir</button>
            ) : (
              <button onClick={next} className="rounded-md bg-gray-900 px-5 py-2.5 font-medium text-white hover:bg-black">{questionIndex === examTaxa.length - 1 ? "Ver resultado" : "Siguiente caso"}</button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function CerealsMode() {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-5 bg-sky-50 p-4 text-sm text-sky-950 border-l-4 border-sky-500 dark-panel-info">
        Esta practica reproduce la clave entregada en clase. Mire primero la arquitectura de la inflorescencia y luego glumas, cantidad de espiguillas por nudo y fertilidad.
      </div>
      <GuidedKey nodes={cerealKeyNodes} start={cerealKeyStart} results={cerealResults} />
    </div>
  );
}

export default function FirstExamPractice() {
  const [mode, setMode] = usePersistentState<PracticeMode>(
    "botanica:first-exam-mode",
    "lookup",
    PRACTICE_MODES
  );

  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Practica del primer parcial</h2>
        <p className="mt-1 text-gray-600">Entrena la secuencia del examen: observar, identificar y justificar.</p>
      </div>
      <div className="mb-7 overflow-x-auto border-b border-gray-300" role="tablist" aria-label="Modos de practica">
        <div className="flex min-w-max gap-1">
          {modeLabels.map((item) => (
            <button key={item.id} role="tab" aria-selected={mode === item.id} onClick={() => setMode(item.id)} className={`border-b-2 px-4 py-3 text-sm font-semibold ${mode === item.id ? "border-emerald-700 text-emerald-800" : "border-transparent text-gray-600 hover:border-gray-300 hover:text-gray-900"}`}>{item.label}</button>
          ))}
        </div>
      </div>
      {mode === "lookup" && <QuickLookupMode />}
      {mode === "exam" && <ExamMode />}
      {mode === "glossary" && <GlossaryMode />}
      {mode === "review" && <ReviewMode />}
      {mode === "cereals" && <CerealsMode />}
      {mode === "key" && <FamilyKeyMode />}
    </section>
  );
}
