"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { keyGlossary } from "@/data/keyGlossary";
import { glossaryInitial, searchKeyGlossary } from "@/lib/keyGlossarySearch";

const INITIALS = Array.from(new Set(keyGlossary.map((entry) => glossaryInitial(entry.term))));

export default function Glossary() {
  const [query, setQuery] = useState("");
  const [initial, setInitial] = useState("A");
  const trimmedQuery = query.trim();
  const results = useMemo(() => {
    if (trimmedQuery) return searchKeyGlossary(keyGlossary, trimmedQuery);
    return keyGlossary.filter((entry) => glossaryInitial(entry.term) === initial);
  }, [initial, trimmedQuery]);

  return (
    <section className="mx-auto max-w-4xl pb-4">
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-gray-900">Glosario</h2>
        <p className="mt-1 text-sm text-gray-600">
          {keyGlossary.length} términos del glosario de la segunda edición.
        </p>
      </div>

      <div className="relative">
        <Search
          aria-hidden="true"
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
          size={19}
        />
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Buscar término o palabra de la definición"
          aria-label="Buscar en el glosario"
          className="w-full rounded-md border border-gray-300 bg-white py-2.5 pl-10 pr-10 text-sm text-gray-900 outline-none focus:border-green-700 focus:ring-2 focus:ring-green-100"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            aria-label="Limpiar búsqueda"
            className="absolute right-2 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md text-gray-500 hover:bg-gray-100 hover:text-gray-900"
          >
            <X aria-hidden="true" size={18} />
          </button>
        )}
      </div>

      {!trimmedQuery && (
        <div className="mt-4 flex gap-1 overflow-x-auto pb-2" aria-label="Índice alfabético">
          {INITIALS.map((letter) => (
            <button
              key={letter}
              type="button"
              onClick={() => setInitial(letter)}
              aria-pressed={initial === letter}
              className={`h-8 min-w-8 rounded px-2 text-sm font-semibold ${
                initial === letter
                  ? "bg-green-700 text-white"
                  : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              {letter}
            </button>
          ))}
        </div>
      )}

      <p className="mt-3 text-xs font-medium text-gray-600">
        {results.length} {results.length === 1 ? "resultado" : "resultados"}
      </p>

      {results.length ? (
        <dl className="mt-2 divide-y divide-gray-200 border-y border-gray-200">
          {results.map((entry) => (
            <div key={entry.term} className="py-3">
              <dt className="font-semibold text-green-800">{entry.term}</dt>
              <dd className="mt-0.5 text-sm leading-relaxed text-gray-800">{entry.definition}</dd>
              {entry.sourcePage && (
                <dd className="mt-1 text-xs text-gray-500">2.ª edición, p. {entry.sourcePage}</dd>
              )}
            </div>
          ))}
        </dl>
      ) : (
        <p className="mt-6 text-sm text-gray-700">No hay términos que coincidan con la búsqueda.</p>
      )}
    </section>
  );
}
