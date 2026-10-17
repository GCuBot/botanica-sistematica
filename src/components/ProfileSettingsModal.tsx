"use client";

import { FormEvent, useState } from "react";
import { LoaderCircle, Save, X } from "lucide-react";

interface ProfileSettingsModalProps {
  currentName: string;
  onClose: () => void;
  onSave: (displayName: string, updateExistingRecords: boolean) => Promise<void>;
}

export default function ProfileSettingsModal({
  currentName,
  onClose,
  onSave,
}: ProfileSettingsModalProps) {
  const [displayName, setDisplayName] = useState(currentName);
  const [updateExistingRecords, setUpdateExistingRecords] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const cleanedName = displayName.trim().replace(/\s+/g, " ");
    if (cleanedName.length < 2) {
      setError("Ingresá un nombre de al menos 2 caracteres.");
      return;
    }

    setIsSaving(true);
    setError("");
    try {
      await onSave(cleanedName, updateExistingRecords);
    } catch (saveError) {
      setError(saveError instanceof Error ? saveError.message : "No se pudo guardar el perfil.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="profile-settings-title"
    >
      <section className="w-full max-w-md rounded-lg border border-gray-200 bg-white p-5 shadow-xl">
        <div className="flex items-center justify-between gap-3">
          <h2 id="profile-settings-title" className="text-xl font-bold text-gray-900">
            Perfil
          </h2>
          <button
            type="button"
            onClick={onClose}
            disabled={isSaving}
            aria-label="Cerrar"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md text-gray-500 hover:bg-gray-100 hover:text-gray-900 disabled:opacity-50"
          >
            <X aria-hidden="true" size={19} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <div>
            <label htmlFor="profile-display-name" className="mb-1 block text-sm font-medium text-gray-700">
              Nombre y apellido
            </label>
            <input
              id="profile-display-name"
              type="text"
              value={displayName}
              onChange={(event) => setDisplayName(event.target.value)}
              maxLength={80}
              autoComplete="name"
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 outline-none focus:border-green-700 focus:ring-2 focus:ring-green-100"
              required
            />
          </div>

          <label className="flex cursor-pointer items-start gap-3 text-sm text-gray-700">
            <input
              type="checkbox"
              checked={updateExistingRecords}
              onChange={(event) => setUpdateExistingRecords(event.target.checked)}
              className="mt-0.5 h-4 w-4 accent-green-700"
            />
            <span>Actualizar también el nombre en todas mis plantas guardadas</span>
          </label>

          {error && <p className="text-sm text-red-700" role="alert">{error}</p>}

          <div className="flex justify-end gap-2 pt-1">
            <button
              type="button"
              onClick={onClose}
              disabled={isSaving}
              className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-50"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isSaving}
              className="inline-flex items-center gap-2 rounded-md bg-green-700 px-4 py-2 text-sm font-semibold text-white hover:bg-green-800 disabled:opacity-60"
            >
              {isSaving ? <LoaderCircle aria-hidden="true" size={17} className="animate-spin" /> : <Save aria-hidden="true" size={17} />}
              Guardar
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
