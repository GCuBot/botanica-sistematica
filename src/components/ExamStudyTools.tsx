"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import {
  botanicalGlossary,
  examGenera,
  ExamGenus,
  PlantExample,
  examTaxa,
  ExamTaxon,
} from "@/data/firstExam";

export function PlantExamples({ examples }: { examples: PlantExample[] }) {
  return (
    <div className="mt-4 border-t border-gray-200 pt-4">
      <h4 className="text-xs font-bold uppercase text-gray-600">Tres ejemplos</h4>
      <ul className="mt-2 space-y-1.5 text-sm text-gray-700">
        {examples.map((example) => (
          <li key={example.scientificName}>
            <span className="italic text-gray-900">{example.scientificName}</span>
            {" · "}{example.commonName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function KeyDiagnostic({ text }: { text: string }) {
  return (
    <div className="mt-4 border-l-4 border-amber-400 bg-amber-50 px-3 py-2.5 text-sm text-gray-900 dark-panel-warm">
      <span className="mr-1.5 text-xs font-bold uppercase text-gray-700">Caracter clave:</span>
      <mark className="bg-yellow-200 px-1 font-semibold text-gray-950 box-decoration-clone dark-mark">
        <GlossaryText text={text} />
      </mark>
    </div>
  );
}

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

const glossaryAliases = botanicalGlossary
  .flatMap((entry) => [entry.term, ...(entry.aliases ?? [])].map((alias) => ({ alias, entry })))
  .sort((a, b) => b.alias.length - a.alias.length);
const glossaryPattern = new RegExp(
  `(${glossaryAliases
    .map(({ alias }) => alias.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|")})`,
  "gi"
);

export function GlossaryText({ text }: { text: string }) {
  const [openTerm, setOpenTerm] = useState<string | null>(null);
  const parts = text.split(glossaryPattern);
  const activeEntry = openTerm
    ? glossaryAliases.find(({ alias }) => normalize(alias) === normalize(openTerm))?.entry
    : undefined;

  return (
    <span>
      {parts.map((part, index) => {
        const match = glossaryAliases.find(
          ({ alias }) => normalize(alias) === normalize(part)
        );
        if (!match) return <span key={`${part}-${index}`}>{part}</span>;

        return (
          <button
            key={`${part}-${index}`}
            type="button"
            onClick={() => setOpenTerm(openTerm === part ? null : part)}
            className="font-medium text-emerald-800 underline decoration-dotted underline-offset-2 dark-glossary-trigger"
            aria-expanded={openTerm === part}
          >
            {part}
          </button>
        );
      })}
      {activeEntry && (
        <span className="mt-2 block rounded-md border border-emerald-200 bg-emerald-50 p-2 text-xs font-normal text-emerald-950 dark-glossary-popover">
          <strong>{activeEntry.term}:</strong> {activeEntry.definition}
        </span>
      )}
    </span>
  );
}

type LookupResult =
  | { type: "genus"; genus: ExamGenus; taxon: ExamTaxon }
  | { type: "taxon"; taxon: ExamTaxon };

export function QuickLookupMode() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<LookupResult | null>(null);
  const normalizedQuery = normalize(query.trim());
  const results = useMemo<LookupResult[]>(() => {
    if (normalizedQuery.length < 2) return [];

    const genusResults: LookupResult[] = examGenera
      .filter((genus) => normalize(genus.name).includes(normalizedQuery))
      .map((genus) => ({
        type: "genus",
        genus,
        taxon: examTaxa.find((taxon) => taxon.id === genus.taxonId) as ExamTaxon,
      }));
    const taxonResults: LookupResult[] = examTaxa
      .filter(
        (taxon) =>
          normalize(taxon.name).includes(normalizedQuery) ||
          normalize(taxon.group).includes(normalizedQuery)
      )
      .map((taxon) => ({ type: "taxon", taxon }));

    return [...genusResults, ...taxonResults].slice(0, 10);
  }, [normalizedQuery]);

  const selectedTaxon = selected?.taxon;
  const selectedGenus = selected?.type === "genus" ? selected.genus : null;

  return (
    <div className="mx-auto max-w-3xl">
      <label htmlFor="exam-genus-search" className="text-sm font-semibold text-gray-800">
        Buscar genero, familia o subfamilia
      </label>
      <div className="relative mt-2">
        <Search aria-hidden="true" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          id="exam-genus-search"
          type="search"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setSelected(null);
          }}
          placeholder="Ej: Solanum, Rosa, Lamiaceae"
          className="w-full rounded-md border border-gray-300 py-2.5 pl-10 pr-3 text-gray-900 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-200"
        />
      </div>

      {normalizedQuery.length >= 2 && !selected && (
        <div className="mt-2 overflow-hidden rounded-md border border-gray-200 bg-white">
          {results.length > 0 ? (
            results.map((result) => (
              <button
                key={result.type === "genus" ? `genus-${result.genus.name}` : `taxon-${result.taxon.id}`}
                type="button"
                onClick={() => setSelected(result)}
                className="block w-full border-b border-gray-100 px-3 py-2.5 text-left last:border-b-0 hover:bg-emerald-50"
              >
                <span className={result.type === "genus" ? "font-semibold italic text-gray-900" : "font-semibold text-gray-900"}>
                  {result.type === "genus" ? result.genus.name : result.taxon.name}
                </span>
                <span className="ml-2 text-xs text-gray-500">{result.taxon.name}</span>
              </button>
            ))
          ) : (
            <p className="px-3 py-3 text-sm text-gray-600">No figura entre los grupos trabajados para el parcial.</p>
          )}
        </div>
      )}

      {selectedTaxon && (
        <section className="mt-5 border-t border-gray-200 pt-5">
          <p className="text-xs font-semibold uppercase text-emerald-700">{selectedTaxon.group}</p>
          <h3 className="mt-1 text-2xl font-bold text-gray-900">
            {selectedGenus ? <span className="italic">{selectedGenus.name}</span> : selectedTaxon.name}
          </h3>
          {selectedGenus && <p className="mt-1 text-sm text-gray-600">Familia o grupo: {selectedTaxon.name}</p>}

          {selectedGenus?.note && (
            <p className="mt-4 border-l-4 border-emerald-500 bg-emerald-50 p-3 text-sm text-gray-800">
              <GlossaryText text={selectedGenus.note} />
            </p>
          )}
          {selectedGenus && !selectedGenus.note && (
            <p className="mt-4 text-sm text-gray-600">
              El material lo presenta como genero de referencia. Para reconocerlo en este nivel, use primero los caracteres de su familia.
            </p>
          )}

          <KeyDiagnostic text={selectedTaxon.keyDiagnostic} />
          <h4 className="mt-5 text-sm font-bold uppercase text-gray-700">Caracteres diagnosticos</h4>
          <ul className="mt-2 space-y-2 text-sm text-gray-800">
            {selectedTaxon.diagnosticTraits.map((trait) => (
              <li key={trait} className="border-l-2 border-gray-200 pl-3">
                <GlossaryText text={trait} />
              </li>
            ))}
          </ul>
          <div className="mt-5 grid gap-4 border-t border-gray-200 pt-4 sm:grid-cols-2">
            <div>
              <h4 className="text-sm font-bold text-gray-900">Que mirar</h4>
              <p className="mt-1 text-sm text-gray-700"><GlossaryText text={selectedTaxon.lookFor} /></p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900">No confundir</h4>
              <p className="mt-1 text-sm text-gray-700"><GlossaryText text={selectedTaxon.confusion} /></p>
            </div>
          </div>
          <PlantExamples examples={selectedTaxon.examples} />
        </section>
      )}
    </div>
  );
}

export function GlossaryMode() {
  const [query, setQuery] = useState("");
  const normalizedQuery = normalize(query.trim());
  const entries = botanicalGlossary.filter(
    (entry) =>
      normalize(entry.term).includes(normalizedQuery) ||
      normalize(entry.definition).includes(normalizedQuery)
  );

  return (
    <div className="mx-auto max-w-4xl">
      <label htmlFor="glossary-search" className="text-sm font-semibold text-gray-800">Buscar termino</label>
      <div className="relative mt-2">
        <Search aria-hidden="true" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input id="glossary-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Ej: hipanto, ginostemo, gluma" className="w-full rounded-md border border-gray-300 py-2.5 pl-10 pr-3 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-200" />
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {entries.map((entry) => (
          <article key={entry.term} className="rounded-md border border-gray-200 bg-white p-4">
            <h3 className="font-bold text-emerald-800">{entry.term}</h3>
            <p className="mt-1 text-sm text-gray-700">{entry.definition}</p>
          </article>
        ))}
      </div>
      {entries.length === 0 && <p className="mt-5 text-sm text-gray-600">No se encontro ese termino.</p>}
    </div>
  );
}
