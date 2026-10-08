"use client";

import { useMemo, useState } from "react";
import { keyGlossary } from "@/data/keyGlossary";

const normalize = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

export default function KeyGlossarySearch() {
  const [query, setQuery] = useState("");
  const normalizedQuery = normalize(query.trim());

  const results = useMemo(() => {
    if (!normalizedQuery) return [];

    return keyGlossary
      .filter((entry) => {
        const normalizedTerm = normalize(entry.term);
        const normalizedDefinition = normalize(entry.definition);
        return (
          normalizedTerm.includes(normalizedQuery) ||
          normalizedDefinition.includes(normalizedQuery)
        );
      })
      .sort((left, right) => {
        const leftTerm = normalize(left.term);
        const rightTerm = normalize(right.term);
        const leftStarts = leftTerm.startsWith(normalizedQuery);
        const rightStarts = rightTerm.startsWith(normalizedQuery);
        if (leftStarts !== rightStarts) return leftStarts ? -1 : 1;
        return left.term.localeCompare(right.term);
      })
      .slice(0, 8);
  }, [normalizedQuery]);

  return (
    <section className="mt-4 rounded-md border border-emerald-200 bg-emerald-50 p-3 dark-glossary-search">
      <label htmlFor="key-glossary-search" className="text-xs font-semibold uppercase tracking-wide text-emerald-950">
        Buscar termino
      </label>
      <input
        id="key-glossary-search"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Ej: aquenio, gluma, pubescente"
        className="mt-1.5 w-full rounded-md border border-emerald-300 bg-white px-3 py-1.5 text-sm text-gray-900 focus:border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-200"
      />

      {query.trim() && (
        <div className="mt-2 max-h-56 overflow-y-auto pr-1">
          {results.length > 0 ? (
            <dl className="grid gap-2 text-sm text-emerald-950">
              {results.map((entry) => (
                <div key={`${entry.term}-${entry.sourcePage}`}>
                  <dt className="font-semibold">{entry.term}</dt>
                  <dd className="mt-0.5 text-emerald-900">{entry.definition}</dd>
                  <dd className="mt-1 text-xs text-emerald-800">
                    {entry.source}
                    {entry.sourcePage ? `, p. PDF ${entry.sourcePage}` : ""}
                  </dd>
                </div>
              ))}
            </dl>
          ) : (
            <p className="text-sm text-emerald-900">Sin resultados en el glosario.</p>
          )}
        </div>
      )}
    </section>
  );
}
