"use client";

import { useMemo, useState } from "react";
import { LoaderCircle, Search, X } from "lucide-react";
import SpeciesReferenceLinks from "@/components/SpeciesReferenceLinks";
import { getTaxonomicAliasForPdfName } from "@/data/taxonomicAliases";
import { GbifTaxonomicResult, lookupGbifSynonyms } from "@/lib/gbifTaxonomy";
import {
  findSpeciesRoutesByScientificNames,
  searchSpeciesRoutes,
  SpeciesKeyRoute,
} from "@/lib/keyRoutes";

interface SpeciesRouteSearchProps {
  onRouteOpenChange?: (isOpen: boolean) => void;
}

export default function SpeciesRouteSearch({ onRouteOpenChange }: SpeciesRouteSearchProps) {
  const [query, setQuery] = useState("");
  const [selectedRoute, setSelectedRoute] = useState<SpeciesKeyRoute | null>(null);
  const [selectedStepIndex, setSelectedStepIndex] = useState<number | null>(null);
  const [externalRoutes, setExternalRoutes] = useState<SpeciesKeyRoute[]>([]);
  const [gbifResult, setGbifResult] = useState<GbifTaxonomicResult | null>(null);
  const [taxonomyMessage, setTaxonomyMessage] = useState<string | null>(null);
  const [isSearchingTaxonomy, setIsSearchingTaxonomy] = useState(false);
  const results = useMemo(() => searchSpeciesRoutes(query), [query]);
  const visibleResults = results.length > 0 ? results : externalRoutes;
  const hasSearch = query.replace(/^\s*\*+\s*/, "").trim().length >= 2;
  const selectedAlias = selectedRoute
    ? getTaxonomicAliasForPdfName(selectedRoute.especie.nombreCientifico)
    : undefined;
  const acceptedName = gbifResult?.acceptedName ?? selectedAlias?.acceptedName;
  const taxonomySourceUrl = gbifResult?.sourceUrl ?? selectedAlias?.sourceUrl;
  const taxonomySourceLabel = gbifResult ? "GBIF" : selectedAlias?.sourceLabel;

  const clearSearch = () => {
    setQuery("");
    setSelectedRoute(null);
    setSelectedStepIndex(null);
    setExternalRoutes([]);
    setGbifResult(null);
    setTaxonomyMessage(null);
    onRouteOpenChange?.(false);
  };

  const searchTaxonomicSynonyms = async () => {
    const cleanQuery = query.replace(/^\s*\*+\s*/, "").trim();
    if (cleanQuery.length < 2 || isSearchingTaxonomy) return;

    setIsSearchingTaxonomy(true);
    setTaxonomyMessage(null);
    setExternalRoutes([]);
    setGbifResult(null);

    try {
      const taxonomicResults = await lookupGbifSynonyms(cleanQuery);
      if (taxonomicResults.length === 0) {
        setTaxonomyMessage("GBIF no pudo reconocer ese nombre científico.");
        return;
      }

      const matchedCandidate = taxonomicResults
        .map((taxonomicResult) => ({
          taxonomicResult,
          routes: findSpeciesRoutesByScientificNames(taxonomicResult.names),
        }))
        .find((candidate) => candidate.routes.length > 0);
      const taxonomicResult = matchedCandidate?.taxonomicResult ?? taxonomicResults[0];
      const matchingRoutes = matchedCandidate?.routes ?? [];

      setGbifResult(taxonomicResult);
      setExternalRoutes(matchingRoutes);
      setTaxonomyMessage(
        matchingRoutes.length > 0
          ? taxonomicResult.isSimilarMatch
            ? `Posible coincidencia: ${taxonomicResult.matchedName} figura en la clave mediante un sinónimo. Revise el nombre antes de continuar.`
            : `Encontrado por sinonimia. Nombre aceptado en GBIF: ${taxonomicResult.acceptedName}.`
          : `GBIF reconoce el nombre como ${taxonomicResult.acceptedName}, pero ninguno de sus sinónimos figura en la clave.`
      );
    } catch {
      setTaxonomyMessage(
        "No se pudo consultar GBIF. Revise la conexión e intente nuevamente."
      );
    } finally {
      setIsSearchingTaxonomy(false);
    }
  };

  return (
    <section className="mb-6 border-b border-gray-200 pb-6">
      <label className="block text-sm font-semibold text-gray-800" htmlFor="species-route-search">
        Buscar planta en la clave
      </label>
      <div className="relative mt-2">
        <Search
          aria-hidden="true"
          size={18}
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          id="species-route-search"
          type="search"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setSelectedRoute(null);
            setSelectedStepIndex(null);
            setExternalRoutes([]);
            setGbifResult(null);
            setTaxonomyMessage(null);
            onRouteOpenChange?.(false);
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter" && results.length === 0) {
              event.preventDefault();
              void searchTaxonomicSynonyms();
            }
          }}
          placeholder="Ej: Salpichroa origanifolia"
          autoComplete="off"
          className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-10 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-200"
        />
        {query && (
          <button
            type="button"
            onClick={clearSearch}
            aria-label="Limpiar búsqueda"
            title="Limpiar"
            className="absolute right-1 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md text-gray-500 hover:bg-gray-100"
          >
            <X aria-hidden="true" size={17} />
          </button>
        )}
      </div>

      {hasSearch && !selectedRoute && (
        <div className="mt-2 overflow-hidden rounded-md border border-gray-200 bg-white">
          {externalRoutes.length > 0 && gbifResult && (
            <p className="border-b border-green-100 bg-green-50 px-3 py-2 text-xs text-green-800">
              {gbifResult.isSimilarMatch ? "Posible coincidencia" : "Coincidencia por sinonimia"}
              {" · "}Nombre aceptado en GBIF: {gbifResult.acceptedName}
            </p>
          )}
          {visibleResults.length > 0 ? (
            visibleResults.map((route) => (
              <button
                key={route.especie.id}
                type="button"
                onClick={() => {
                  setSelectedRoute(route);
                  setSelectedStepIndex(null);
                  onRouteOpenChange?.(true);
                }}
                className="block w-full border-b border-gray-100 px-3 py-2.5 text-left last:border-b-0 hover:bg-green-50"
              >
                <span className="block text-sm font-semibold italic text-gray-900">
                  {route.especie.nombreCientifico}
                </span>
                <span className="block truncate text-xs text-gray-600">
                  {route.especie.nombreVulgar} · {route.especie.familia}
                </span>
                {getTaxonomicAliasForPdfName(route.especie.nombreCientifico) && (
                  <span className="mt-0.5 block text-xs text-green-700">
                    Nombre actual: {getTaxonomicAliasForPdfName(route.especie.nombreCientifico)?.acceptedName}
                  </span>
                )}
              </button>
            ))
          ) : (
            <div className="px-3 py-3">
              <p className="text-sm text-gray-600">No se encontró con ese nombre en la clave.</p>
              <button
                type="button"
                onClick={() => void searchTaxonomicSynonyms()}
                disabled={isSearchingTaxonomy}
                className="mt-2 inline-flex items-center gap-2 rounded-md border border-green-600 px-3 py-2 text-sm font-semibold text-green-700 hover:bg-green-50 disabled:cursor-wait disabled:opacity-60"
              >
                {isSearchingTaxonomy && (
                  <LoaderCircle aria-hidden="true" size={16} className="animate-spin" />
                )}
                Buscar sinónimos en GBIF
              </button>
              {taxonomyMessage && (
                <p className="mt-2 text-xs text-gray-600">{taxonomyMessage}</p>
              )}
            </div>
          )}
        </div>
      )}

      {selectedRoute && (
        <div className="mt-4 rounded-md border border-green-200 bg-green-50 p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-bold italic text-green-900">
                {selectedRoute.especie.nombreCientifico}
              </h3>
              <p className="text-sm text-green-900">
                {selectedRoute.especie.nombreVulgar} · {selectedRoute.especie.familia}
              </p>
              {acceptedName && acceptedName !== selectedRoute.especie.nombreCientifico && (
                <p className="mt-1 text-xs text-green-800">
                  En el PDF: <span className="italic">{selectedRoute.especie.nombreCientifico}</span>
                  {" · "}Nombre aceptado: <span className="italic">{acceptedName}</span>
                  {taxonomySourceUrl && (
                    <>
                      {" · "}
                      <a
                        href={taxonomySourceUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold underline"
                      >
                        {taxonomySourceLabel}
                      </a>
                    </>
                  )}
                </p>
              )}
            </div>
            <button
              type="button"
              onClick={clearSearch}
              aria-label="Cerrar recorrido"
              title="Cerrar recorrido"
              className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-green-800 hover:bg-green-100"
            >
              <X aria-hidden="true" size={17} />
            </button>
          </div>

          <p className="mt-4 text-sm font-semibold text-gray-800">Recorrido de la clave</p>
          <div className="mt-2 flex flex-wrap items-center gap-1.5">
            {selectedRoute.steps.map((step, index) => (
              <div key={`${step.nodeId}-${index}`} className="flex items-center gap-1.5">
                {index > 0 && <span className="text-xs text-gray-400">›</span>}
                <button
                  type="button"
                  onClick={() =>
                    setSelectedStepIndex(selectedStepIndex === index ? null : index)
                  }
                  aria-expanded={selectedStepIndex === index}
                  className={`rounded-md border px-2 py-1 text-xs font-semibold ${
                    selectedStepIndex === index
                      ? "border-green-700 bg-green-700 text-white"
                      : "border-green-300 bg-white text-green-800 hover:bg-green-100"
                  }`}
                >
                  {index + 1}. {step.keyStep}
                </button>
              </div>
            ))}
          </div>

          {selectedStepIndex !== null && (
            <div className="mt-3 rounded-md border border-green-200 bg-white p-3 text-sm">
              <p className="font-semibold text-green-800">
                Paso {selectedStepIndex + 1} · {selectedRoute.steps[selectedStepIndex].keyStep}
              </p>
              <p className="mt-1 text-gray-900">
                {selectedRoute.steps[selectedStepIndex].question}
              </p>
              <p className="mt-2 text-gray-700">
                {selectedRoute.steps[selectedStepIndex].choice}
              </p>
              {(selectedRoute.steps[selectedStepIndex].milestone ||
                selectedRoute.steps[selectedStepIndex].manualPage) && (
                <p className="mt-2 text-xs text-gray-500">
                  {[
                    selectedRoute.steps[selectedStepIndex].milestone,
                    selectedRoute.steps[selectedStepIndex].manualPage
                      ? `p. ${selectedRoute.steps[selectedStepIndex].manualPage}`
                      : null,
                  ]
                    .filter(Boolean)
                    .join(" · ")}
                </p>
              )}
            </div>
          )}

          <div className="mt-5">
            <SpeciesReferenceLinks especie={selectedRoute.especie} />
          </div>
        </div>
      )}
    </section>
  );
}
