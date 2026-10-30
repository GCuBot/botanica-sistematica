"use client";

import { ChevronDown, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import ScientificName from "@/components/ScientificName";
import SpeciesReferenceLinks from "@/components/SpeciesReferenceLinks";
import { especiesData } from "@/data/clados";
import { formatCommonName } from "@/lib/commonNames";
import { buildSpeciesRoutes } from "@/lib/keyRoutes";
import { PhotoRecord } from "@/types";

const routesBySpeciesId = new Map(
  buildSpeciesRoutes().map((route) => [route.especie.id, route])
);

interface PlantRecordDetailsProps {
  record: PhotoRecord;
  onClose: () => void;
}

export default function PlantRecordDetails({
  record,
  onClose,
}: PlantRecordDetailsProps) {
  const especie = especiesData[record.especie_id];
  const route = routesBySpeciesId.get(record.especie_id);
  const [isManualOpen, setIsManualOpen] = useState(false);
  const [isRouteOpen, setIsRouteOpen] = useState(false);
  const [selectedStepIndex, setSelectedStepIndex] = useState<number | null>(null);
  const commonName = especie
    ? formatCommonName(
        record.nombre_vulgar ?? especie.nombreVulgar,
        especie.nombreCientifico
      )
    : record.nombre_vulgar || "Sin nombre vulgar";

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex touch-pan-y items-start justify-center overflow-y-auto overscroll-contain bg-black/60 p-3 sm:p-6"
      role="presentation"
      style={{ WebkitOverflowScrolling: "touch" }}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="plant-record-title"
        className="my-auto w-full max-w-xl rounded-md bg-white shadow-2xl"
      >
        <header className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-gray-200 bg-white px-3 py-2.5 sm:px-4">
          <div className="min-w-0">
            <h2 id="plant-record-title" className="text-base font-bold text-gray-900">
              Planta N° {record.plant_number}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar ficha"
            title="Cerrar"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-gray-600 hover:bg-gray-100"
          >
            <X aria-hidden="true" size={20} />
          </button>
        </header>

        <div className="space-y-3 p-3">
          <section aria-labelledby="plant-taxonomy-title">
            <h3 id="plant-taxonomy-title" className="text-xs font-bold uppercase text-gray-600">
              Identificación
            </h3>
            <div className="mt-1.5 grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs sm:text-sm">
              <div className="col-span-2">
                <p className="text-xs font-semibold text-gray-500">Nombre científico</p>
                <ScientificName
                  especie={especie}
                  fallback={record.especie_id}
                  className="mt-0.5 font-semibold text-gray-900"
                  authorityClassName="text-gray-600"
                />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500">Nombre vulgar</p>
                <p className="mt-0.5 text-gray-900">{commonName}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500">Familia</p>
                <p className="mt-0.5 text-gray-900">{especie?.familia || "No disponible"}</p>
              </div>
              <div className="col-span-2">
                <p className="text-xs font-semibold text-gray-500">Estado</p>
                <p className="mt-0.5 text-gray-900">
                  {record.is_confirmed ? "Identificación confirmada" : "Sin confirmar"}
                </p>
              </div>
            </div>
          </section>

          <section aria-labelledby="plant-collection-title" className="border-t border-gray-200 pt-2.5">
            <h3 id="plant-collection-title" className="text-xs font-bold uppercase text-gray-600">
              Registro
            </h3>
            <dl className="mt-1.5 grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs sm:text-sm">
              <div><dt className="text-xs font-semibold text-gray-500">Recolector</dt><dd className="text-gray-900">{record.nombre_usuario}</dd></div>
              <div><dt className="text-xs font-semibold text-gray-500">Fecha</dt><dd className="text-gray-900">{record.fecha}</dd></div>
              <div><dt className="text-xs font-semibold text-gray-500">Lugar</dt><dd className="text-gray-900">{record.lugar}</dd></div>
              <div><dt className="text-xs font-semibold text-gray-500">Observaciones</dt><dd className="whitespace-pre-wrap text-gray-900">{record.observaciones || "Sin observaciones"}</dd></div>
            </dl>
          </section>

          {especie && (
            <section aria-labelledby="plant-manual-title" className="border-t border-gray-200 pt-2">
              <button
                type="button"
                onClick={() => setIsManualOpen((current) => !current)}
                aria-expanded={isManualOpen}
                className="flex w-full items-center justify-between gap-3 px-1 py-1 text-left text-gray-800 hover:text-green-800"
              >
                <span id="plant-manual-title" className="text-sm font-bold">
                  Información del manual
                </span>
                {isManualOpen ? (
                  <ChevronDown aria-hidden="true" size={18} />
                ) : (
                  <ChevronRight aria-hidden="true" size={18} />
                )}
              </button>
              {isManualOpen && (
                <div className="mt-2 space-y-2 border-l-2 border-gray-200 pl-3 text-sm text-gray-800">
                  <p><strong>Descripción:</strong> {especie.descripcion}</p>
                  <p><strong>Características:</strong> {especie.caracteristicas}</p>
                  <p><strong>Distribución:</strong> {especie.distribucion}</p>
                </div>
              )}
            </section>
          )}

          {especie && (
            <SpeciesReferenceLinks
              especie={especie}
              context="review"
              embedded
              compact
            />
          )}

          <section aria-labelledby="plant-route-title" className="border-t border-gray-200 pt-2">
            <button
              type="button"
              onClick={() => {
                setIsRouteOpen((current) => !current);
                setSelectedStepIndex(null);
              }}
              aria-expanded={isRouteOpen}
              className="flex w-full items-center justify-between gap-3 px-1 py-1 text-left text-green-900 hover:text-green-700"
            >
              <span>
                <span id="plant-route-title" className="block text-sm font-bold">
                  Recorrido de la clave
                </span>
                <span className="block text-xs text-green-800">
                  {route ? `${route.steps.length} pasos` : "No disponible"}
                </span>
              </span>
              {isRouteOpen ? (
                <ChevronDown aria-hidden="true" size={19} />
              ) : (
                <ChevronRight aria-hidden="true" size={19} />
              )}
            </button>

            {isRouteOpen && route && (
              <div className="mt-3">
                <div className="flex flex-wrap items-center gap-1.5">
                  {route.steps.map((step, index) => (
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
                      Paso {selectedStepIndex + 1} · {route.steps[selectedStepIndex].keyStep}
                    </p>
                    <p className="mt-1 text-gray-900">
                      {route.steps[selectedStepIndex].question}
                    </p>
                    <p className="mt-2 text-gray-700">
                      {route.steps[selectedStepIndex].choice}
                    </p>
                    {(route.steps[selectedStepIndex].milestone ||
                      route.steps[selectedStepIndex].manualPage) && (
                      <p className="mt-2 text-xs text-gray-500">
                        {[
                          route.steps[selectedStepIndex].milestone,
                          route.steps[selectedStepIndex].manualPage
                            ? `p. ${route.steps[selectedStepIndex].manualPage}`
                            : null,
                        ]
                          .filter(Boolean)
                          .join(" · ")}
                      </p>
                    )}
                  </div>
                )}
              </div>
            )}

            {isRouteOpen && !route && (
              <p className="mt-2 text-sm text-gray-600">
                No se pudo reconstruir el recorrido para este registro.
              </p>
            )}
          </section>

        </div>
      </section>
    </div>
  );
}
