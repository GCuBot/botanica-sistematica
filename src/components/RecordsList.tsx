"use client";

import { useMemo, useState } from "react";
import {
  CircleCheckBig,
  ExternalLink,
  Image as ImageIcon,
  Images,
  LoaderCircle,
  Pencil,
  Tags,
  Trash2,
} from "lucide-react";
import { especiesData } from "@/data/clados";
import {
  generateLabelsPDF,
  generatePhotoCatalogPDF,
  recordToLabel,
  recordToPhotoCatalog,
} from "@/lib/pdfGenerator";
import { PhotoRecord } from "@/types";

interface RecordsListProps {
  records: PhotoRecord[];
  isLoading: boolean;
  onEdit: (record: PhotoRecord) => void;
  onDelete: (record: PhotoRecord) => Promise<void>;
  onConfirm: (record: PhotoRecord, isConfirmed: boolean) => Promise<void>;
}

type SearchMode = "all" | "number" | "name" | "family" | "place" | "date" | "notes";

function normalizeSearchText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export default function RecordsList({
  records,
  isLoading,
  onEdit,
  onDelete,
  onConfirm,
}: RecordsListProps) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [rangeStart, setRangeStart] = useState("");
  const [rangeEnd, setRangeEnd] = useState("");
  const [activeRange, setActiveRange] = useState<{
    start: number;
    end: number;
  } | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchMode, setSearchMode] = useState<SearchMode>("all");
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [confirmingId, setConfirmingId] = useState<string | null>(null);
  const [actionError, setActionError] = useState("");
  const [isGeneratingCatalog, setIsGeneratingCatalog] = useState(false);
  const filteredRecords = useMemo(() => {
    const normalizedSearch = normalizeSearchText(searchTerm.trim());
    return records.filter((record) => {
      if (
        activeRange &&
        (record.plant_number < activeRange.start ||
          record.plant_number > activeRange.end)
      ) {
        return false;
      }

      if (!normalizedSearch) return true;

      const especie = especiesData[record.especie_id];
      if (searchMode === "number") {
        return record.plant_number.toString() === normalizedSearch;
      }

      const fieldsByMode: Record<SearchMode, string[]> = {
        all: [
          record.plant_number.toString(),
          record.especie_id,
          especie?.nombreCientifico || "",
          record.nombre_vulgar || "",
          especie?.nombreVulgar || "",
          especie?.familia || "",
          record.nombre_usuario,
          record.fecha,
          record.lugar,
          record.observaciones || "",
        ],
        number: [],
        name: [
          record.especie_id,
          especie?.nombreCientifico || "",
          record.nombre_vulgar || "",
          especie?.nombreVulgar || "",
        ],
        family: [especie?.familia || "", record.especie_id],
        place: [record.lugar],
        date: [record.fecha],
        notes: [record.observaciones || ""],
      };
      const searchableText = fieldsByMode[searchMode].filter(Boolean).join(" ");

      return normalizeSearchText(searchableText).includes(normalizedSearch);
    });
  }, [activeRange, records, searchMode, searchTerm]);
  const selectedRecords = useMemo(
    () => records.filter((record) => selectedIds.includes(record.id)),
    [records, selectedIds]
  );
  const allRecordsSelected =
    filteredRecords.length > 0 &&
    filteredRecords.every((record) => selectedIds.includes(record.id));

  const toggleRecord = (recordId: string) => {
    setSelectedIds((current) =>
      current.includes(recordId)
        ? current.filter((id) => id !== recordId)
        : [...current, recordId]
    );
  };

  const toggleAll = () => {
    const filteredIds = filteredRecords.map((record) => record.id);

    setSelectedIds((current) =>
      allRecordsSelected
        ? current.filter((id) => !filteredIds.includes(id))
        : [...new Set([...current, ...filteredIds])]
    );
  };

  const selectRange = () => {
    const start = Number(rangeStart);
    const end = Number(rangeEnd);

    if (!Number.isInteger(start) || !Number.isInteger(end)) return;

    const min = Math.min(start, end);
    const max = Math.max(start, end);
    setActiveRange({ start: min, end: max });
    setSelectedIds(
      records
        .filter(
          (record) => record.plant_number >= min && record.plant_number <= max
        )
        .map((record) => record.id)
    );
  };

  const handleGenerateLabels = async () => {
    await generateLabelsPDF(
      selectedRecords.map((record) =>
        recordToLabel(record, especiesData[record.especie_id])
      )
    );
  };

  const handleGeneratePhotoCatalog = async () => {
    const catalogRecords = selectedRecords
      .map((record) => recordToPhotoCatalog(record, especiesData[record.especie_id]))
      .filter((record): record is NonNullable<typeof record> => record !== null);

    if (catalogRecords.length === 0) {
      setActionError("Las plantas seleccionadas no tienen fotos para incluir.");
      return;
    }

    setActionError("");
    setIsGeneratingCatalog(true);
    try {
      const result = await generatePhotoCatalogPDF(catalogRecords);
      if (result.included === 0) {
        setActionError("No se pudieron cargar las fotos para generar el catálogo.");
      } else if (result.failed > 0) {
        setActionError(
          `El catálogo se generó, pero ${result.failed} foto${result.failed === 1 ? "" : "s"} no se pudo incluir.`
        );
      }
    } catch (error) {
      setActionError(error instanceof Error ? error.message : "No se pudo generar el catálogo visual");
    } finally {
      setIsGeneratingCatalog(false);
    }
  };

  const clearRange = () => {
    setActiveRange(null);
    setRangeStart("");
    setRangeEnd("");
  };

  const handleDelete = async (record: PhotoRecord) => {
    const confirmed = window.confirm(
      `¿Eliminar definitivamente la planta N° ${record.plant_number}? Los otros registros conservarán su número.`
    );
    if (!confirmed) return;

    setActionError("");
    setDeletingId(record.id);
    try {
      await onDelete(record);
      setSelectedIds((current) => current.filter((id) => id !== record.id));
    } catch (error) {
      setActionError(error instanceof Error ? error.message : "No se pudo eliminar el registro");
    } finally {
      setDeletingId(null);
    }
  };

  const handleConfirm = async (record: PhotoRecord) => {
    setActionError("");
    setConfirmingId(record.id);
    try {
      await onConfirm(record, !record.is_confirmed);
    } catch (error) {
      setActionError(
        error instanceof Error ? error.message : "No se pudo cambiar la confirmacion"
      );
    } finally {
      setConfirmingId(null);
    }
  };

  return (
    <section className="rounded-lg bg-white p-4 shadow-lg sm:p-5">
      <div className="mb-3 flex items-center justify-between gap-4">
        <h2 className="text-xl font-bold text-gray-800">Mis plantas</h2>
        <span className="text-sm text-gray-700">
          {records.length} registros · {records.filter((record) => record.is_confirmed).length} confirmados
        </span>
      </div>

      {isLoading && <p className="text-gray-700">Cargando registros...</p>}

      {actionError && (
        <p className="mb-3 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-800" role="alert">
          {actionError}
        </p>
      )}

      {!isLoading && records.length === 0 && (
        <p className="text-gray-700">Todavía no registraste plantas.</p>
      )}

      {!isLoading && records.length > 0 && (
        <div className="space-y-2">
          <div className="flex flex-col gap-2 border-b border-gray-200 pb-3">
            <div className="grid gap-2 sm:grid-cols-[120px_1fr]">
              <label className="text-sm font-medium text-gray-800">
                Buscar por
                <select
                  value={searchMode}
                  onChange={(event) =>
                    setSearchMode(event.target.value as SearchMode)
                  }
                  className="mt-1 w-full rounded border border-gray-300 px-2 py-2 text-sm"
                >
                  <option value="all">Todo</option>
                  <option value="number">N°</option>
                  <option value="name">Nombre</option>
                  <option value="family">Familia</option>
                  <option value="place">Lugar</option>
                  <option value="date">Fecha</option>
                  <option value="notes">Observación</option>
                </select>
              </label>
              <label className="text-sm font-medium text-gray-800">
                Búsqueda
                <input
                  type="search"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder={
                    searchMode === "number"
                      ? "Ej: 2"
                      : "Nombre, familia, lugar, fecha..."
                  }
                  className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-sm"
                />
              </label>
            </div>
            <div className="flex items-center justify-between gap-3">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-800">
                <input
                  type="checkbox"
                  checked={allRecordsSelected}
                  onChange={toggleAll}
                  className="h-4 w-4 accent-green-700"
                />
                Seleccionar todas
              </label>
              <button
                type="button"
                onClick={() => setSelectedIds([])}
                disabled={selectedIds.length === 0}
                className="text-sm text-gray-700 underline disabled:text-gray-400 disabled:no-underline"
              >
                Limpiar
              </button>
            </div>
            <div className="grid grid-cols-[1fr_1fr_auto] items-end gap-2">
              <label className="text-xs font-medium text-gray-800">
                Desde N°
                <input
                  type="number"
                  min="1"
                  value={rangeStart}
                  onChange={(event) => setRangeStart(event.target.value)}
                  className="mt-1 w-full rounded border border-gray-300 px-2 py-1 text-sm"
                />
              </label>
              <label className="text-xs font-medium text-gray-800">
                Hasta N°
                <input
                  type="number"
                  min="1"
                  value={rangeEnd}
                  onChange={(event) => setRangeEnd(event.target.value)}
                  className="mt-1 w-full rounded border border-gray-300 px-2 py-1 text-sm"
                />
              </label>
              <button
                type="button"
                onClick={selectRange}
                disabled={!rangeStart || !rangeEnd}
                className="rounded border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-800 hover:bg-gray-50 disabled:text-gray-400"
              >
                Elegir
              </button>
            </div>
            {activeRange && (
              <div className="flex items-center justify-between gap-2 rounded bg-green-50 px-3 py-2 text-xs text-green-900">
                <span>
                  Mostrando N° {activeRange.start} a {activeRange.end}
                </span>
                <button
                  type="button"
                  onClick={clearRange}
                  className="font-medium underline"
                >
                  Ver todas
                </button>
              </div>
            )}
            <div className="grid gap-2 sm:grid-cols-2">
              <button
                type="button"
                onClick={handleGenerateLabels}
                disabled={selectedRecords.length === 0}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-green-700 px-4 py-2 text-sm font-medium text-white hover:bg-green-800 disabled:bg-gray-300"
              >
                <Tags aria-hidden="true" size={16} />
                Generar etiquetas
              </button>
              <button
                type="button"
                onClick={() => void handleGeneratePhotoCatalog()}
                disabled={selectedRecords.length === 0 || isGeneratingCatalog}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-green-700 bg-white px-4 py-2 text-sm font-medium text-green-800 hover:bg-green-50 disabled:border-gray-300 disabled:text-gray-400"
              >
                {isGeneratingCatalog ? (
                  <LoaderCircle aria-hidden="true" className="animate-spin" size={16} />
                ) : (
                  <Images aria-hidden="true" size={16} />
                )}
                {isGeneratingCatalog ? "Generando..." : "Catálogo visual"}
              </button>
            </div>
            <p className="text-xs text-gray-700">
              {selectedRecords.length} seleccionadas · {filteredRecords.length} visibles · Hoja A4 con 12 etiquetas
            </p>
          </div>

          {filteredRecords.map((record) => {
            const especie = especiesData[record.especie_id];
            const isDeleting = deletingId === record.id;
            const isConfirming = confirmingId === record.id;

            return (
              <article
                key={record.id}
                className={`grid grid-cols-[auto_3.5rem_minmax(0,1fr)] items-center gap-x-3 gap-y-1 rounded-md border p-3 sm:grid-cols-[auto_3.5rem_minmax(0,1fr)_auto] ${selectedIds.includes(record.id) ? "border-green-300 bg-green-50" : record.is_confirmed ? "border-green-200" : "border-gray-200"}`}
              >
                <input
                  type="checkbox"
                  checked={selectedIds.includes(record.id)}
                  onChange={() => toggleRecord(record.id)}
                  aria-label={`Seleccionar planta N° ${record.plant_number}`}
                  className="h-4 w-4 accent-green-700"
                />

                {record.photo_url ? (
                  <a
                    href={record.photo_url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Ampliar foto de la planta N° ${record.plant_number}`}
                    title="Ampliar foto"
                    className="h-14 w-14 overflow-hidden rounded-md bg-gray-100"
                  >
                    {/* Arbitrary public Supabase URLs cannot be declared statically for next/image. */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={record.photo_url}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </a>
                ) : (
                  <div className="flex h-14 w-14 items-center justify-center rounded-md bg-gray-100 text-gray-400" title="Sin foto">
                    <ImageIcon aria-hidden="true" size={20} />
                  </div>
                )}

                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                    <span className="font-bold text-green-800">N° {record.plant_number}</span>
                    {record.is_confirmed && (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-green-700" title="Identificacion confirmada">
                        <CircleCheckBig aria-hidden="true" size={14} />
                        Confirmada
                      </span>
                    )}
                    <span className="truncate text-sm italic text-gray-900">
                      {especie?.nombreCientifico || record.especie_id}
                    </span>
                  </div>
                  <p className="truncate text-sm text-gray-700">
                    {record.nombre_vulgar || especie?.nombreVulgar || "Sin nombre vulgar"}
                  </p>
                  <p className="truncate text-xs text-gray-500">
                    {record.lugar} · <time>{record.fecha}</time>
                  </p>
                </div>

                <div className="col-start-3 flex items-center justify-self-end gap-1 sm:col-start-4 sm:row-start-1">
                  <button
                    type="button"
                    onClick={() => void handleConfirm(record)}
                    disabled={isDeleting || isConfirming}
                    aria-label={`${record.is_confirmed ? "Quitar confirmacion de" : "Confirmar"} planta N° ${record.plant_number}`}
                    title={record.is_confirmed ? "Quitar confirmacion" : "Marcar como confirmada"}
                    className={`inline-flex h-8 w-8 items-center justify-center rounded-md disabled:text-gray-300 ${record.is_confirmed ? "bg-green-100 text-green-700 hover:bg-green-200" : "text-gray-500 hover:bg-gray-100 hover:text-green-700"}`}
                  >
                    {isConfirming ? (
                      <LoaderCircle aria-hidden="true" className="animate-spin" size={16} strokeWidth={2} />
                    ) : (
                      <CircleCheckBig aria-hidden="true" size={17} strokeWidth={2} />
                    )}
                  </button>
                  {record.photo_url && (
                    <a
                      href={record.photo_url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Ver foto de la planta N° ${record.plant_number}`}
                      title="Ver foto"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md text-blue-700 hover:bg-blue-50"
                    >
                      <ExternalLink aria-hidden="true" size={16} strokeWidth={2} />
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => onEdit(record)}
                    disabled={isDeleting}
                    aria-label={`Editar planta N° ${record.plant_number}`}
                    title="Editar"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-md text-gray-700 hover:bg-gray-100 disabled:text-gray-300"
                  >
                    <Pencil aria-hidden="true" size={16} strokeWidth={2} />
                  </button>
                  <button
                    type="button"
                    onClick={() => void handleDelete(record)}
                    disabled={isDeleting}
                    aria-label={`Eliminar planta N° ${record.plant_number}`}
                    title="Eliminar"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-md text-red-700 hover:bg-red-50 disabled:text-gray-300"
                  >
                    {isDeleting ? (
                      <LoaderCircle aria-hidden="true" className="animate-spin" size={16} strokeWidth={2} />
                    ) : (
                      <Trash2 aria-hidden="true" size={16} strokeWidth={2} />
                    )}
                  </button>
                </div>
              </article>
            );
          })}

          {filteredRecords.length === 0 && (
            <p className="text-sm text-gray-700">
              No hay registros que coincidan con la búsqueda.
            </p>
          )}
        </div>
      )}
    </section>
  );
}
