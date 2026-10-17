import { Especie } from "@/types";

interface ScientificNameProps {
  especie?: Especie | null;
  fallback?: string;
  className?: string;
  nameClassName?: string;
  authorityClassName?: string;
}

export default function ScientificName({
  especie,
  fallback = "",
  className = "",
  nameClassName = "",
  authorityClassName = "",
}: ScientificNameProps) {
  if (!especie) {
    return <span className={className}>{fallback}</span>;
  }

  return (
    <span className={`flex min-w-0 items-baseline justify-between gap-3 ${className}`}>
      <span className={`min-w-0 truncate italic ${nameClassName}`}>
        {especie.nombreCientifico}
      </span>
      {especie.autoridad && (
        <span className={`shrink-0 text-right text-xs font-medium not-italic opacity-80 ${authorityClassName}`}>
          {especie.autoridad}
        </span>
      )}
    </span>
  );
}
