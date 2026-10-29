"use client";

import Image from "next/image";
import { BookOpenText, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { StudyEntry } from "@/data/studyLibrary";
import { usePersistentState } from "@/hooks/usePersistentState";

type StudyMode = "lookup" | "sheets";

interface StudyCollectionProps {
  title: string;
  description: string;
  entries: StudyEntry[];
  categories: readonly string[];
  storagePrefix: string;
  searchLabel: string;
  searchPlaceholder: string;
  emptyMessage: string;
  diagnosticLabel: string;
  examplesLabel: string;
}

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function searchableText(entry: StudyEntry) {
  return normalize([
    entry.title,
    entry.subtitle,
    entry.category,
    entry.keyDiagnostic,
    entry.lookFor,
    entry.confusion,
    ...entry.traits,
    ...entry.keywords,
    ...entry.examples.flatMap((example) => [example.name, example.note]),
  ].join(" "));
}

function EntryDetails({
  entry,
  diagnosticLabel,
  examplesLabel,
}: {
  entry: StudyEntry;
  diagnosticLabel: string;
  examplesLabel: string;
}) {
  return (
    <article className="overflow-hidden border border-gray-200 bg-white">
      <div
        className="relative bg-gray-950"
        style={{ aspectRatio: "16 / 9", minHeight: "220px" }}
      >
        <Image
          src={entry.image}
          alt={entry.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain"
        />
      </div>

      <div className="p-4 sm:p-6">
        <p className="text-xs font-semibold uppercase text-emerald-800">{entry.category}</p>
        <h3 className="mt-1 text-2xl font-bold text-gray-900">{entry.title}</h3>
        <p className="mt-1 text-sm text-gray-600">{entry.subtitle}</p>

        <div className="mt-5 border-l-4 border-amber-400 bg-amber-50 px-3 py-3 text-sm text-gray-900 dark-panel-warm">
          <span className="mr-1.5 text-xs font-bold uppercase text-gray-700">{diagnosticLabel}:</span>
          <span className="font-semibold">{entry.keyDiagnostic}</span>
        </div>

        <ul className="mt-5 grid gap-x-6 gap-y-3 text-sm text-gray-700 sm:grid-cols-2">
          {entry.traits.map((trait) => (
            <li key={trait} className="border-l-2 border-emerald-300 pl-3">
              {trait}
            </li>
          ))}
        </ul>

        <div className="mt-6 grid gap-5 border-t border-gray-200 pt-5 text-sm text-gray-700 sm:grid-cols-2">
          <div>
            <h4 className="font-bold text-gray-900">Qué mirar</h4>
            <p className="mt-1">{entry.lookFor}</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Diferenciar de</h4>
            <p className="mt-1">{entry.confusion}</p>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-200 pt-5">
          <h4 className="text-xs font-bold uppercase text-gray-600">{examplesLabel}</h4>
          <dl className="mt-3 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
            {entry.examples.map((example) => (
              <div key={`${entry.id}-${example.name}`} className="min-w-0">
                <dt className="break-words font-semibold italic text-gray-900">{example.name}</dt>
                <dd className="text-gray-600">{example.note}</dd>
              </div>
            ))}
          </dl>
        </div>

        <p className="mt-6 border-t border-gray-200 pt-4 text-xs text-gray-500">
          Fuente: {entry.source.document} · diapositivas {entry.source.pages}
        </p>
      </div>
    </article>
  );
}

export default function StudyCollection({
  title,
  description,
  entries,
  categories,
  storagePrefix,
  searchLabel,
  searchPlaceholder,
  emptyMessage,
  diagnosticLabel,
  examplesLabel,
}: StudyCollectionProps) {
  const [mode, setMode] = usePersistentState<StudyMode>(
    `${storagePrefix}:mode`,
    "lookup",
    ["lookup", "sheets"]
  );
  const [query, setQuery] = useState("");
  const [selectedLookupId, setSelectedLookupId] = useState<string | null>(null);
  const [category, setCategory] = usePersistentState(
    `${storagePrefix}:category`,
    categories[0],
    categories
  );

  const normalizedQuery = normalize(query.trim());
  const results = useMemo(() => {
    if (normalizedQuery.length < 2) return [];
    return entries
      .filter((entry) => searchableText(entry).includes(normalizedQuery))
      .slice(0, 12);
  }, [entries, normalizedQuery]);

  const selectedLookup = entries.find((entry) => entry.id === selectedLookupId) ?? null;
  const visibleSheets = category === categories[0]
    ? entries
    : entries.filter((entry) => entry.category === category);

  return (
    <section className="min-w-0 max-w-full overflow-hidden">
      <div className="mb-5 min-w-0">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        <p className="mt-1 max-w-full break-words text-gray-600">{description}</p>
      </div>

      <div className="mb-6 flex border-b border-gray-300" role="tablist" aria-label={`Modos de ${title}`}>
        <button
          type="button"
          role="tab"
          aria-selected={mode === "lookup"}
          onClick={() => setMode("lookup")}
          className={`flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-semibold ${mode === "lookup" ? "border-emerald-700 text-emerald-800" : "border-transparent text-gray-600 hover:text-gray-900"}`}
        >
          <Search aria-hidden="true" size={17} />
          Consulta
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={mode === "sheets"}
          onClick={() => setMode("sheets")}
          className={`flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-semibold ${mode === "sheets" ? "border-emerald-700 text-emerald-800" : "border-transparent text-gray-600 hover:text-gray-900"}`}
        >
          <BookOpenText aria-hidden="true" size={17} />
          Fichas
        </button>
      </div>

      {mode === "lookup" ? (
        <div className="mx-auto min-w-0 max-w-4xl">
          <label htmlFor={`${storagePrefix}-search`} className="text-sm font-semibold text-gray-800">
            {searchLabel}
          </label>
          <div className="relative mt-2">
            <Search aria-hidden="true" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              id={`${storagePrefix}-search`}
              type="search"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setSelectedLookupId(null);
              }}
              placeholder={searchPlaceholder}
              className="min-w-0 w-full rounded-md border border-gray-300 py-2.5 pl-10 pr-3 text-gray-900 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-200"
            />
          </div>

          {normalizedQuery.length >= 2 && !selectedLookup && (
            <div className="mt-2 overflow-hidden border border-gray-200 bg-white">
              {results.length > 0 ? results.map((entry) => (
                <button
                  key={entry.id}
                  type="button"
                  onClick={() => setSelectedLookupId(entry.id)}
                  className="flex w-full items-start justify-between gap-3 border-b border-gray-100 px-3 py-3 text-left last:border-b-0 hover:bg-emerald-50"
                >
                  <span>
                    <span className="block font-semibold text-gray-900">{entry.title}</span>
                    <span className="mt-0.5 block text-xs text-gray-600">{entry.subtitle}</span>
                  </span>
                  <span className="shrink-0 text-xs font-medium text-emerald-800">{entry.category}</span>
                </button>
              )) : (
                <p className="px-3 py-3 text-sm text-gray-600">{emptyMessage}</p>
              )}
            </div>
          )}

          {selectedLookup && (
            <div className="mt-5">
              <EntryDetails entry={selectedLookup} diagnosticLabel={diagnosticLabel} examplesLabel={examplesLabel} />
            </div>
          )}
        </div>
      ) : (
        <div>
          <div className="mb-5 flex gap-1 overflow-x-auto border-b border-gray-200" aria-label="Filtrar fichas">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                aria-pressed={category === item}
                className={`shrink-0 border-b-2 px-3 py-2.5 text-sm font-semibold ${category === item ? "border-emerald-700 text-emerald-800" : "border-transparent text-gray-600 hover:text-gray-900"}`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="mb-4 flex items-end justify-between gap-3">
            <h3 className="text-xl font-bold text-gray-900">{category}</h3>
            <span className="shrink-0 text-xs font-semibold text-gray-500">
              {visibleSheets.length} {visibleSheets.length === 1 ? "ficha" : "fichas"}
            </span>
          </div>

          <div className="grid items-start gap-5 md:grid-cols-2">
            {visibleSheets.map((entry) => (
              <EntryDetails
                key={entry.id}
                entry={entry}
                diagnosticLabel={diagnosticLabel}
                examplesLabel={examplesLabel}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
