import { Especie } from "@/types";

interface SpeciesReferenceLinksProps {
  especie: Especie;
  context?: "register" | "review";
  embedded?: boolean;
  compact?: boolean;
}

export default function SpeciesReferenceLinks({
  especie,
  context = "register",
  embedded = false,
  compact = false,
}: SpeciesReferenceLinksProps) {
  const query = encodeURIComponent(especie.nombreCientifico);
  const wikipediaUrl = `https://es.wikipedia.org/wiki/Especial:Buscar?search=${query}`;
  const commonsUrl = `https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=${query}`;

  return (
    <div className={embedded ? "" : "border-t border-gray-200 pt-4"}>
      {!embedded && (
        <p className="text-sm font-semibold text-gray-800">Comparar la identificación</p>
      )}
      {!compact && (
        <p className="mt-1 text-sm text-gray-600">
          {context === "review"
            ? "Compare el registro con fotografías y descripciones externas."
            : "Revise fotos y descripción antes de registrar el ejemplar."}
        </p>
      )}
      <div className={`${compact ? "" : "mt-3"} flex flex-wrap gap-2`}>
        <a
          href={wikipediaUrl}
          target="_blank"
          rel="noreferrer"
          className={`rounded-md border border-gray-300 font-medium text-blue-700 hover:bg-blue-50 ${compact ? "px-2.5 py-1.5 text-xs" : "px-3 py-2 text-sm"}`}
        >
          {compact ? "Wikipedia" : "Buscar en Wikipedia"}
        </a>
        <a
          href={commonsUrl}
          target="_blank"
          rel="noreferrer"
          className={`rounded-md border border-gray-300 font-medium text-blue-700 hover:bg-blue-50 ${compact ? "px-2.5 py-1.5 text-xs" : "px-3 py-2 text-sm"}`}
        >
          {compact ? "Ver fotos" : "Ver fotos en Wikimedia"}
        </a>
      </div>
    </div>
  );
}
