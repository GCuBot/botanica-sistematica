"use client";

import { useState } from "react";
import { cladosTree, especiesData } from "@/data/clados";
import { CladoNode, Especie } from "@/types";
import SpeciesReferenceLinks from "@/components/SpeciesReferenceLinks";
import SpeciesRouteSearch from "@/components/SpeciesRouteSearch";

interface QuizProps {
  onComplete: (especie: Especie) => void;
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

export default function Quiz({ onComplete }: QuizProps) {
  const [currentNodeId, setCurrentNodeId] = useState<string>("root");
  const [history, setHistory] = useState<HistoryEntry[]>([{ nodeId: "root" }]);
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
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-bold text-green-700 mb-4">
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
        <div className="space-y-3">
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

        <div className="mt-6">
          <SpeciesReferenceLinks especie={finalEspecie} />
        </div>

        <div className="mt-6 space-x-3">
          <button
            onClick={() =>
              onComplete({
                ...finalEspecie,
                nombreVulgar:
                  (commonNameDraft ?? finalEspecie.nombreVulgar).trim() ||
                  finalEspecie.nombreVulgar,
              })
            }
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
          >
            Continuar a Formulario
          </button>
          <button
            onClick={() => {
              setCurrentNodeId("root");
              setHistory([{ nodeId: "root" }]);
              setIdentifiedEspecie(null);
              setCommonNameDraft(null);
            }}
            className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700"
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

  const optionKeySteps = getOptionKeySteps(currentNode);
  const optionALetter = optionKeySteps.A;
  const optionAPrimaLetter = optionKeySteps.A_prima;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <SpeciesRouteSearch
        onRouteOpenChange={setIsRouteOpen}
        onRegister={onComplete}
      />

      {!isRouteOpen && (
        <>
      <div className="mb-4">
        <span className="text-sm text-gray-700">
          Paso {history.length} del quiz
        </span>
        {keyPath && (
          <p className="mt-2 text-sm text-gray-700">
            Recorrido en la clave: <span className="font-semibold text-gray-900">{keyPath}</span>
          </p>
        )}
        {milestones && (
          <p className="mt-1 text-sm text-gray-700">
            Hitos: <span className="font-semibold text-gray-900">{milestones}</span>
          </p>
        )}
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        {currentNode.descripcion}
      </h2>

      <div className="space-y-3">
        <button
          onClick={() => handleOption("A")}
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 text-left"
        >
          <span className="font-bold">{optionALetter}.</span> {currentNode.opcionA.label}
        </button>

        <button
          onClick={() => handleOption("A_prima")}
          className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 text-left"
        >
          <span className="font-bold">{optionAPrimaLetter}.</span> {currentNode.opcionA_prima.label}
        </button>
      </div>

      {history.length > 1 && (
        <button
          onClick={() => {
            const newHistory = history.slice(0, -1);
            setHistory(newHistory);
            setCurrentNodeId(newHistory[newHistory.length - 1].nodeId);
            setIdentifiedEspecie(null);
          }}
          className="mt-4 text-gray-700 hover:text-gray-900 underline"
        >
          ← Volver atrás
        </button>
      )}
        </>
      )}
    </div>
  );
}
