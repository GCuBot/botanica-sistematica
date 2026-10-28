import { formatCommonName } from "@/lib/commonNames";
import { Especie, PhotoRecord } from "@/types";

const CSV_HEADERS = [
  "Número de planta",
  "ID del registro",
  "ID de especie",
  "Nombre científico",
  "Autor",
  "Nombre vulgar",
  "Familia",
  "Recolector/a",
  "Fecha",
  "Lugar",
  "Observaciones",
  "Confirmada",
  "URL de foto",
  "Fecha de registro",
];

function escapeCsvCell(value: string | number | null | undefined) {
  const text = String(value ?? "");
  const safeText = /^[=+\-@\t\r]/.test(text) ? `'${text}` : text;
  return `"${safeText.replace(/"/g, '""')}"`;
}

export function buildPlantsCsv(
  records: PhotoRecord[],
  species: Record<string, Especie>
) {
  const rows = [...records]
    .sort((first, second) => first.plant_number - second.plant_number)
    .map((record) => {
      const especie = species[record.especie_id];
      const commonName = especie
        ? formatCommonName(
            record.nombre_vulgar ?? especie.nombreVulgar,
            especie.nombreCientifico
          )
        : record.nombre_vulgar || "Sin nombre vulgar";

      return [
        record.plant_number,
        record.id,
        record.especie_id,
        especie?.nombreCientifico || record.especie_id,
        especie?.autoridad || "",
        commonName,
        especie?.familia || "",
        record.nombre_usuario,
        record.fecha,
        record.lugar,
        record.observaciones || "",
        record.is_confirmed ? "Sí" : "No",
        record.photo_url || "",
        record.created_at,
      ].map(escapeCsvCell).join(";");
    });

  return `\uFEFF${CSV_HEADERS.map(escapeCsvCell).join(";")}\r\n${rows.join("\r\n")}\r\n`;
}

export function downloadPlantsCsv(
  records: PhotoRecord[],
  species: Record<string, Especie>
) {
  const blob = new Blob([buildPlantsCsv(records, species)], {
    type: "text/csv;charset=utf-8",
  });
  const downloadUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = downloadUrl;
  link.download = `mis-plantas-${new Date().toISOString().slice(0, 10)}.csv`;
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(downloadUrl), 0);
}
