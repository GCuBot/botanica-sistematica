import jsPDF from "jspdf";
import { formatScientificName } from "@/lib/scientificNames";
import { Especie, PhotoRecord, PlantFormData } from "@/types";
import { formatCommonName } from "@/lib/commonNames";

export interface LabelRecord {
  plantNumber: number;
  collector: string;
  family: string;
  scientificName: string;
  commonName: string;
  date: string;
  place: string;
  observation?: string | null;
}

export interface PhotoCatalogRecord {
  plantNumber: number;
  family: string;
  scientificName: string;
  commonName: string;
  photoUrl: string;
}

function formatDateForLabel(date: string) {
  if (!date) return "";

  const [year, month, day] = date.split("-");
  if (!year || !month || !day) return date;

  return `${day}/${month}/${year}`;
}

function cleanFamilyName(familia: string) {
  return familia.replace(/^\d+\.\s*/, "");
}

function drawLabel(
  doc: jsPDF,
  label: LabelRecord,
  x: number,
  y: number,
  width: number,
  height: number
) {
  const padding = 2;
  const contentX = x + padding;
  const maxLineWidth = width - padding * 2;
  const valueGap = 1.1;
  const lineHeight = 3.6;
  let yPosition = y + 6;

  const drawInlineField = (
    fieldLabel: string,
    value: string,
    options?: { italicValue?: boolean }
  ) => {
    doc.setFont("helvetica", "bold");
    doc.text(`${fieldLabel}:`, contentX, yPosition);

    const fieldLabelWidth = doc.getTextWidth(`${fieldLabel}:`);
    const valueX = contentX + fieldLabelWidth + valueGap;
    const availableWidth = maxLineWidth - fieldLabelWidth - valueGap;
    doc.setFont("helvetica", options?.italicValue ? "italic" : "normal");

    const wrappedValue = doc.splitTextToSize(value || "-", availableWidth);
    const maxLines = Math.max(1, Math.floor((y + height - 2 - yPosition) / lineHeight));
    doc.text(wrappedValue.slice(0, maxLines), valueX, yPosition);
    yPosition += Math.max(1, Math.min(wrappedValue.length, maxLines)) * lineHeight;
  };

  doc.setDrawColor(20, 20, 20);
  doc.setLineWidth(0.2);
  doc.rect(x, y, width, height);

  doc.setFontSize(7.4);
  drawInlineField("Colector", label.collector);

  doc.setFont("helvetica", "bold");
  doc.text(`N°: ${label.plantNumber}`, x + width - padding, y + 6, {
    align: "right",
  });

  yPosition += 1.4;
  drawInlineField("Familia", cleanFamilyName(label.family));

  yPosition += 1.2;
  drawInlineField("Nombre Científico", label.scientificName, {
    italicValue: true,
  });

  yPosition += 1.2;
  drawInlineField("Nombre Vulgar", label.commonName);

  yPosition += 1.2;
  drawInlineField(
    "Fecha y Lugar de Colección",
    `${formatDateForLabel(label.date)}, ${label.place}`
  );

  yPosition += 1.2;
  drawInlineField("Observación", label.observation || "-");
}

function createA4Document() {
  return new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });
}

function generateLabelsDocument(labels: LabelRecord[]) {
  const doc = createA4Document();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 8;
  const columnGap = 4;
  const rowGap = 3;
  const columns = 2;
  const rows = 6;
  const labelsPerPage = columns * rows;
  const labelWidth = (pageWidth - margin * 2 - columnGap) / columns;
  const labelHeight = (pageHeight - margin * 2 - rowGap * (rows - 1)) / rows;

  labels.forEach((label, index) => {
    if (index > 0 && index % labelsPerPage === 0) {
      doc.addPage();
    }

    const pageIndex = index % labelsPerPage;
    const column = pageIndex % columns;
    const row = Math.floor(pageIndex / columns);
    const x = margin + column * (labelWidth + columnGap);
    const y = margin + row * (labelHeight + rowGap);

    drawLabel(doc, label, x, y, labelWidth, labelHeight);
  });

  return doc;
}

export async function generatePDF(
  especie: Especie,
  formData: PlantFormData,
  numeroPlanta: number
) {
  const doc = generateLabelsDocument([
    {
      plantNumber: numeroPlanta,
      collector: formData.nombreUsuario,
      family: especie.familia,
      scientificName: formatScientificName(especie),
      commonName: formData.nombreVulgar,
      date: formData.fecha,
      place: formData.lugar,
      observation: formData.observaciones,
    },
  ]);

  doc.save(`etiqueta-planta-${numeroPlanta}-${Date.now()}.pdf`);
}

export async function generateLabelsPDF(labels: LabelRecord[]) {
  if (labels.length === 0) return;

  const doc = generateLabelsDocument(labels);
  doc.save(`etiquetas-plantas-${Date.now()}.pdf`);
}

async function loadCatalogImage(photoUrl: string) {
  const response = await fetch(photoUrl);
  if (!response.ok) throw new Error(`No se pudo descargar la foto (${response.status})`);

  const source = await createImageBitmap(await response.blob());
  const canvas = document.createElement("canvas");
  canvas.width = 900;
  canvas.height = 650;
  const context = canvas.getContext("2d");
  if (!context) throw new Error("No se pudo preparar la foto");

  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, canvas.width, canvas.height);
  const scale = Math.min(canvas.width / source.width, canvas.height / source.height);
  const width = source.width * scale;
  const height = source.height * scale;
  context.drawImage(
    source,
    (canvas.width - width) / 2,
    (canvas.height - height) / 2,
    width,
    height
  );
  source.close();

  return canvas.toDataURL("image/jpeg", 0.78);
}

export async function generatePhotoCatalogPDF(records: PhotoCatalogRecord[]) {
  if (records.length === 0) return { included: 0, failed: 0 };

  const doc = createA4Document();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 8;
  const gap = 4;
  const columns = 2;
  const rows = 3;
  const itemsPerPage = columns * rows;
  const cellWidth = (pageWidth - margin * 2 - gap) / columns;
  const cellHeight = (pageHeight - margin * 2 - gap * (rows - 1)) / rows;
  const imageHeight = 64;
  let included = 0;
  let failed = 0;

  for (const record of records) {
    let imageData: string;
    try {
      imageData = await loadCatalogImage(record.photoUrl);
    } catch (error) {
      console.error(`No se pudo incluir la planta N° ${record.plantNumber}:`, error);
      failed += 1;
      continue;
    }

    if (included > 0 && included % itemsPerPage === 0) doc.addPage();

    const pageIndex = included % itemsPerPage;
    const column = pageIndex % columns;
    const row = Math.floor(pageIndex / columns);
    const x = margin + column * (cellWidth + gap);
    const y = margin + row * (cellHeight + gap);
    const contentX = x + 2;
    const contentWidth = cellWidth - 4;

    doc.setDrawColor(180, 190, 185);
    doc.setLineWidth(0.2);
    doc.roundedRect(x, y, cellWidth, cellHeight, 1.5, 1.5);
    doc.addImage(imageData, "JPEG", contentX, y + 2, contentWidth, imageHeight, undefined, "FAST");

    let textY = y + imageHeight + 7;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.text(`N° ${record.plantNumber} · ${cleanFamilyName(record.family)}`, contentX, textY, {
      maxWidth: contentWidth,
    });
    textY += 4;
    doc.setFont("helvetica", "italic");
    doc.setFontSize(7.5);
    doc.text(record.scientificName || "-", contentX, textY, { maxWidth: contentWidth });
    textY += 3.7;
    doc.setFont("helvetica", "normal");
    doc.text(record.commonName || "-", contentX, textY, { maxWidth: contentWidth });
    included += 1;
  }

  if (included > 0) doc.save(`catalogo-visual-plantas-${Date.now()}.pdf`);
  return { included, failed };
}

export function recordToLabel(record: PhotoRecord, especie?: Especie): LabelRecord {
  return {
    plantNumber: record.plant_number,
    collector: record.nombre_usuario,
    family: especie?.familia || record.especie_id,
    scientificName: especie ? formatScientificName(especie) : record.especie_id,
    commonName: especie
      ? formatCommonName(record.nombre_vulgar ?? especie.nombreVulgar, especie.nombreCientifico)
      : record.nombre_vulgar || "Sin nombre vulgar",
    date: record.fecha,
    place: record.lugar,
    observation: record.observaciones,
  };
}

export function recordToPhotoCatalog(
  record: PhotoRecord,
  especie?: Especie
): PhotoCatalogRecord | null {
  if (!record.photo_url) return null;

  return {
    plantNumber: record.plant_number,
    family: especie?.familia || record.especie_id,
    scientificName: especie ? formatScientificName(especie) : record.especie_id,
    commonName: especie
      ? formatCommonName(record.nombre_vulgar ?? especie.nombreVulgar, especie.nombreCientifico)
      : record.nombre_vulgar || "Sin nombre vulgar",
    photoUrl: record.photo_url,
  };
}
