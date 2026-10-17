"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import SpeciesReferenceLinks from "@/components/SpeciesReferenceLinks";
import ScientificName from "@/components/ScientificName";
import { formatCommonName } from "@/lib/commonNames";
import { Especie, PhotoRecord, PlantFormData } from "@/types";

interface FormProps {
  especie: Especie;
  defaultUserName: string;
  record?: PhotoRecord;
  onSubmit: (formData: PlantFormData) => void | Promise<void>;
  onCancel?: () => void;
}

export default function SpeciesForm({
  especie,
  defaultUserName,
  record,
  onSubmit,
  onCancel,
}: FormProps) {
  const [formData, setFormData] = useState<PlantFormData>({
    nombreUsuario: record?.nombre_usuario || defaultUserName,
    nombreVulgar: formatCommonName(
      record?.nombre_vulgar ?? especie.nombreVulgar,
      especie.nombreCientifico
    ),
    fecha: record?.fecha || new Date().toISOString().split("T")[0],
    lugar: record?.lugar || "",
    observaciones: record?.observaciones || "",
    foto: null,
    removeExistingPhoto: false,
  });

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        foto: file,
        removeExistingPhoto: false,
      }));

      // Preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombreUsuario || !formData.nombreVulgar.trim() || !formData.lugar) {
      alert("Por favor completa Nombre, Nombre vulgar y Lugar");
      return;
    }
    setIsSubmitting(true);
    try {
      await onSubmit(formData);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        {record ? `Editar planta N° ${record.plant_number}` : "Registrar especie"}
      </h2>

      {/* Información de la especie identificada */}
      <div className="bg-green-50 border border-green-200 rounded p-4 mb-6">
        <p className="text-sm text-gray-700">Especie identificada:</p>
        <ScientificName
          especie={especie}
          className="text-lg font-bold text-green-700"
          authorityClassName="text-green-700"
        />
        <p className="text-sm text-gray-700">{formData.nombreVulgar}</p>
      </div>

      {!record && (
        <div className="mb-6">
          <SpeciesReferenceLinks especie={especie} />
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nombre vulgar*
          </label>
          <input
            type="text"
            name="nombreVulgar"
            value={formData.nombreVulgar}
            onChange={handleInputChange}
            placeholder="Nombre usado para este ejemplar"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <p className="mt-1 text-xs text-gray-500">
            Esta correccion se guarda solo en este registro.
          </p>
        </div>

        {/* Nombre del usuario */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nombre y Apellido*
          </label>
          <input
            type="text"
            name="nombreUsuario"
            value={formData.nombreUsuario}
            onChange={handleInputChange}
            placeholder="Tu nombre completo"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Fecha */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Fecha*
          </label>
          <input
            type="date"
            name="fecha"
            value={formData.fecha}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Lugar */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Lugar*
          </label>
          <input
            type="text"
            name="lugar"
            value={formData.lugar}
            onChange={handleInputChange}
            placeholder="Dónde encontraste la planta"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Foto */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Foto de la planta
          </label>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {preview && (
            <Image
              src={preview}
              alt="Preview"
              width={320}
              height={192}
              unoptimized
              className="mt-2 max-w-xs rounded max-h-48 object-contain"
            />
          )}
          {record?.photo_url && !preview && (
            <div className="mt-2 flex items-center justify-between gap-3 text-sm">
              <a
                href={record.photo_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-700 hover:underline"
              >
                Ver foto actual
              </a>
              <label className="flex items-center gap-2 text-gray-700">
                <input
                  type="checkbox"
                  checked={Boolean(formData.removeExistingPhoto)}
                  onChange={(event) =>
                    setFormData((current) => ({
                      ...current,
                      removeExistingPhoto: event.target.checked,
                    }))
                  }
                  className="h-4 w-4 accent-red-700"
                />
                Eliminar foto
              </label>
            </div>
          )}
        </div>

        {/* Observaciones */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Observaciones (opcional)
          </label>
          <textarea
            name="observaciones"
            value={formData.observaciones || ""}
            onChange={handleInputChange}
            placeholder="Notas adicionales sobre la planta"
            rows={3}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Botones */}
        <div className="flex flex-col-reverse gap-2 sm:flex-row">
          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              disabled={isSubmitting}
              className="w-full rounded-md border border-gray-300 px-5 py-2 font-medium text-gray-700 hover:bg-gray-50 disabled:text-gray-400"
            >
              Cancelar
            </button>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-md bg-green-700 px-5 py-2 font-medium text-white hover:bg-green-800 disabled:bg-gray-400"
          >
            {isSubmitting ? "Guardando..." : record ? "Guardar cambios" : "Guardar registro"}
          </button>
        </div>
      </form>
    </div>
  );
}
