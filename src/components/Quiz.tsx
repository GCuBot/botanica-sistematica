"use client";

import { useState } from "react";
import { cladosTree, especiesData } from "@/data/clados";
import { CladoNode, Especie } from "@/types";
import KeyGlossarySearch from "@/components/KeyGlossarySearch";
import SpeciesReferenceLinks from "@/components/SpeciesReferenceLinks";
import SpeciesRouteSearch from "@/components/SpeciesRouteSearch";

interface QuizProps {
  onComplete: (especie: Especie) => void;
  rootNodeId?: string;
}

interface HistoryEntry {
  nodeId: string;
  keyStep?: string;
  milestone?: string;
  manualPage?: number;
}

function formatMilestone(entry: HistoryEntry) {
  return entry.manualPage
    ? `${entry.milestone} (p. ${entry.manualPage})`
    : entry.milestone;
}

function inferKeyBase(node: CladoNode) {
  const match = node.descripcion.match(/\s-\s([^:]+):/);
  return match?.[1];
}

function getOptionKeySteps(node: CladoNode) {
  const inferredBase = inferKeyBase(node);
  const explicitA = node.opcionA.keyStep;
  const explicitAPrima = node.opcionA_prima.keyStep;
  const baseFromExplicitA =
    explicitA && !explicitA.endsWith("'") ? explicitA : undefined;
  const baseFromExplicitAPrima = explicitAPrima?.endsWith("'")
    ? explicitAPrima.slice(0, -1)
    : undefined;
  const base = inferredBase || baseFromExplicitA || baseFromExplicitAPrima || "A";

  return {
    A: explicitA || base,
    A_prima: explicitAPrima || `${base}'`,
  };
}

function buildKeyPath(history: HistoryEntry[]) {
  const seenMilestones = new Set<string>();
  const path: string[] = [];

  history.forEach((entry) => {
    if (entry.keyStep) {
      path.push(entry.keyStep);
    }

    if (entry.milestone && !seenMilestones.has(entry.milestone)) {
      seenMilestones.add(entry.milestone);
      path.push(formatMilestone(entry) || entry.milestone);
    }
  });

  return path.join(" > ");
}

function labelHistoryEntry(entry: HistoryEntry, index: number) {
  if (index === 0) return "Inicio";
  const parts = [];
  if (entry.keyStep) parts.push(entry.keyStep);
  if (entry.milestone) parts.push(formatMilestone(entry));
  return parts.join(" - ") || `Paso ${index + 1}`;
}

export default function Quiz({ onComplete, rootNodeId = "root" }: QuizProps) {
  const [currentNodeId, setCurrentNodeId] = useState<string>(rootNodeId);
  const [history, setHistory] = useState<HistoryEntry[]>([{ nodeId: rootNodeId }]);
  const [identifiedEspecie, setIdentifiedEspecie] = useState<Especie | null>(
    null
  );
  const [commonNameDraft, setCommonNameDraft] = useState<string | null>(null);
  const [isRouteOpen, setIsRouteOpen] = useState(false);

  const currentNode: CladoNode | undefined = cladosTree[currentNodeId];
  const keyPath = buildKeyPath(history);
  const milestones = history
    .filter((entry, index, allEntries) => {
      return (
        entry.milestone &&
        allEntries.findIndex((item) => item.milestone === entry.milestone) ===
          index
      );
    })
    .map((entry) => formatMilestone(entry))
    .join(" > ");

  if (!currentNode) {
    return <div className="p-4 text-red-600">Error: Clado no encontrado</div>;
  }

  let finalEspecie: Especie | undefined = identifiedEspecie || undefined;
  
  if (currentNode.especie) {
    finalEspecie = currentNode.especie;
  }

  if (finalEspecie) {
    return (
      <div className="rounded-lg bg-white p-4 shadow-lg sm:p-5">
        <h2 className="mb-3 text-2xl font-bold text-green-700">
          ¡Especie identificada!
        </h2>
        {keyPath && (
          <p className="mb-4 text-sm text-gray-700">
            Recorrido en la clave: <span className="font-semibold text-gray-900">{keyPath}</span>
          </p>
        )}
        {milestones && (
          <p className="mb-4 text-sm text-gray-700">
            Hitos: <span className="font-semibold text-gray-900">{milestones}</span>
          </p>
        )}
        <div className="space-y-2 text-sm sm:text-base">
          <p>
            <strong>Nombre Científico:</strong> {finalEspecie.nombreCientifico}
          </p>
          <label className="block">
            <strong className="block text-sm text-gray-800">Nombre vulgar:</strong>
            <input
              type="text"
              value={commonNameDraft ?? finalEspecie.nombreVulgar}
              onChange={(event) => setCommonNameDraft(event.target.value)}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-200"
            />
            <span className="mt-1 block text-xs text-gray-500">
              Puede corregirlo antes de crear el registro.
            </span>
          </label>
          <p>
            <strong>Familia:</strong> {finalEspecie.familia}
          </p>
          <p>
            <strong>Descripción:</strong> {finalEspecie.descripcion}
          </p>
          <p>
            <strong>Características:</strong> {finalEspecie.caracteristicas}
          </p>
          <p>
            <strong>Distribución:</strong> {finalEspecie.distribucion}
          </p>
        </div>

        <div className="mt-4">
          <SpeciesReferenceLinks especie={finalEspecie} />
        </div>

        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <button
            onClick={() =>
              onComplete({
                ...finalEspecie,
                nombreVulgar:
                  (commonNameDraft ?? finalEspecie.nombreVulgar).trim() ||
                  finalEspecie.nombreVulgar,
              })
            }
            className="rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700"
          >
            Continuar a Formulario
          </button>
          <button
            onClick={() => {
              setCurrentNodeId(rootNodeId);
              setHistory([{ nodeId: rootNodeId }]);
              setIdentifiedEspecie(null);
              setCommonNameDraft(null);
            }}
            className="rounded-md bg-gray-600 px-4 py-2 text-white hover:bg-gray-700"
          >
            Reiniciar Quiz
          </button>
        </div>
      </div>
    );
  }

  const handleOption = (opcion: "A" | "A_prima") => {
    const nextOption = opcion === "A" ? currentNode.opcionA : currentNode.opcionA_prima;
    const optionKeySteps = getOptionKeySteps(currentNode);
    const keyStep = optionKeySteps[opcion];
    const nextMilestone = nextOption.nextNodeId
      ? cladosTree[nextOption.nextNodeId]?.milestone
      : undefined;
    const nextManualPage = nextOption.nextNodeId
      ? cladosTree[nextOption.nextNodeId]?.manualPage
      : undefined;
    
    // Si la opción tiene una especie asociada
    if (nextOption.especieId) {
      const especie = especiesData[nextOption.especieId];
      if (especie) {
        setHistory([
          ...history,
          {
            nodeId: currentNodeId,
            keyStep,
            milestone: nextMilestone,
            manualPage: nextManualPage,
          },
        ]);
        setIdentifiedEspecie(especie);
        setCommonNameDraft(null);
        return;
      }
    }
    
    // Si tiene un siguiente nodo
    if (nextOption.nextNodeId) {
      setCurrentNodeId(nextOption.nextNodeId);
      setHistory([
        ...history,
        {
          nodeId: nextOption.nextNodeId,
          keyStep,
          milestone: nextMilestone,
          manualPage: nextManualPage,
        },
      ]);
      setIdentifiedEspecie(null);
    }
  };

  const goToHistoryIndex = (index: number) => {
    const newHistory = history.slice(0, index + 1);
    setHistory(newHistory);
    setCurrentNodeId(newHistory[newHistory.length - 1].nodeId);
    setIdentifiedEspecie(null);
  };

  const optionKeySteps = getOptionKeySteps(currentNode);
  const optionALetter = optionKeySteps.A;
  const optionAPrimaLetter = optionKeySteps.A_prima;

  return (
    <div className="rounded-lg bg-white p-4 shadow-lg sm:p-5">
      <SpeciesRouteSearch
        onRouteOpenChange={setIsRouteOpen}
        onRegister={onComplete}
        rootNodeId={rootNodeId}
      />

      {!isRouteOpen && (
        <>
      <div className="mb-4 flex min-h-20 items-center">
        <h2 className="text-xl font-bold leading-snug text-gray-800 sm:text-2xl">
          {currentNode.descripcion}
        </h2>
      </div>

      <div className="space-y-2.5">
        <button
          onClick={() => handleOption("A")}
          className="flex min-h-16 w-full items-center rounded-md bg-blue-600 px-4 py-2.5 text-left text-sm leading-snug text-white hover:bg-blue-700 sm:text-base"
        >
          <span className="font-bold">{optionALetter}.</span> {currentNode.opcionA.label}
        </button>

        <button
          onClick={() => handleOption("A_prima")}
          className="flex min-h-16 w-full items-center rounded-md bg-purple-600 px-4 py-2.5 text-left text-sm leading-snug text-white hover:bg-purple-700 sm:text-base"
        >
          <span className="font-bold">{optionAPrimaLetter}.</span> {currentNode.opcionA_prima.label}
        </button>
      </div>

      <KeyGlossarySearch />

      {history.length > 1 && (
        <div className="mt-4 border-t border-gray-200 pt-3">
          <div className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm">
            <span className="font-semibold text-gray-800">Recorrido:</span>
            {history.map((entry, index) => (
              <button
                key={`${entry.nodeId}-${index}`}
                type="button"
                onClick={() => goToHistoryIndex(index)}
                disabled={index === history.length - 1}
                className={`rounded-md border px-2 py-0.5 text-left ${
                  index === history.length - 1
                    ? "cursor-default border-green-200 bg-green-50 font-semibold text-green-900"
                    : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-950"
                }`}
              >
                {labelHistoryEntry(entry, index)}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => goToHistoryIndex(history.length - 2)}
            className="mt-2 text-sm text-gray-700 underline hover:text-gray-900"
          >
            ← Volver atrás
          </button>
        </div>
      )}
        </>
      )}
    </div>
  );
}
