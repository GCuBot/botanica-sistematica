"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { keyGlossary } from "@/data/keyGlossary";
import { searchKeyGlossary } from "@/lib/keyGlossarySearch";

export default function KeyGlossarySearch() {
  const [query, setQuery] = useState("");
  const results = useMemo(() => searchKeyGlossary(keyGlossary, query, 8), [query]);

  return (
    <section className="mt-4 rounded-md border border-emerald-200 bg-emerald-50 p-3 dark-glossary-search">
      <label htmlFor="key-glossary-search" className="text-xs font-semibold uppercase tracking-wide text-emerald-950">
        Buscar término
      </label>
      <div className="relative mt-1.5">
        <Search aria-hidden="true" size={17} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
        <input
          id="key-glossary-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Ej.: aquenio, glumas, pubescente"
          className="w-full rounded-md border border-emerald-300 bg-white py-1.5 pl-9 pr-9 text-sm text-gray-900 focus:border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-200"
        />
        {query && (
          <button type="button" onClick={() => setQuery("")} aria-label="Limpiar búsqueda" className="absolute right-1 top-1/2 inline-flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded text-gray-500 hover:bg-emerald-100">
            <X aria-hidden="true" size={16} />
          </button>
        )}
      </div>

      {query.trim() && (
        <div className="mt-2 max-h-56 overflow-y-auto pr-1">
          {results.length > 0 ? (
            <dl className="grid gap-2 text-sm text-emerald-950">
              {results.map((entry) => (
                <div key={`${entry.term}-${entry.sourcePage}`}>
                  <dt className="font-semibold">{entry.term}</dt>
                  <dd className="mt-0.5 text-emerald-900">{entry.definition}</dd>
                  <dd className="mt-1 text-xs text-emerald-800">
                    2.ª edición{entry.sourcePage ? `, p. ${entry.sourcePage}` : ""}
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
