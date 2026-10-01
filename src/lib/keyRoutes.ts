import { cladosTree, especiesData } from "@/data/clados";
import {
  getAllNames,
  getTaxonomicAliasForPdfName,
  normalizeTaxonName,
} from "@/data/taxonomicAliases";
import { CladoNode, CladoOption, Especie } from "@/types";

export interface KeyRouteStep {
  nodeId: string;
  question: string;
  choice: string;
  keyStep: string;
  milestone?: string;
  manualPage?: number;
}

export interface SpeciesKeyRoute {
  especie: Especie;
  steps: KeyRouteStep[];
}

function normalize(value: string) {
  return normalizeTaxonName(value);
}

function inferKeyBase(node: CladoNode) {
  const match = node.descripcion.match(/\s-\s([^:]+):/);
  return match?.[1];
}

function getOptionKeySteps(node: CladoNode) {
  const inferredBase = inferKeyBase(node);
  const explicitA = node.opcionA.keyStep;
  const explicitAPrima = node.opcionA_prima.keyStep;
  const baseFromExplicitA = explicitA && !explicitA.endsWith("'") ? explicitA : undefined;
  const baseFromExplicitAPrima = explicitAPrima?.endsWith("'")
    ? explicitAPrima.slice(0, -1)
    : undefined;
  const base = inferredBase || baseFromExplicitA || baseFromExplicitAPrima || "A";

  return {
    opcionA: explicitA || base,
    opcionA_prima: explicitAPrima || `${base}'`,
  };
}

function addRoute(
  routes: Map<string, SpeciesKeyRoute>,
  especieId: string,
  steps: KeyRouteStep[]
) {
  const especie = especiesData[especieId];
  if (!especie) return;

  const existing = routes.get(especieId);
  if (!existing || steps.length < existing.steps.length) {
    routes.set(especieId, { especie, steps });
  }
}

function routeStep(node: CladoNode, option: CladoOption, keyStep: string): KeyRouteStep {
  return {
    nodeId: node.id,
    question: node.descripcion,
    choice: option.label,
    keyStep,
    milestone: node.milestone,
    manualPage: node.manualPage,
  };
}

export function buildSpeciesRoutes(rootNodeId = "root") {
  const routes = new Map<string, SpeciesKeyRoute>();

  const visit = (nodeId: string, steps: KeyRouteStep[], visited: Set<string>) => {
    if (visited.has(nodeId)) return;
    const node = cladosTree[nodeId];
    if (!node) return;

    if (node.especie) addRoute(routes, node.especie.id, steps);

    const nextVisited = new Set(visited).add(nodeId);
    const keySteps = getOptionKeySteps(node);
    const choices: Array<[CladoOption, string]> = [
      [node.opcionA, keySteps.opcionA],
      [node.opcionA_prima, keySteps.opcionA_prima],
    ];

    choices.forEach(([option, keyStep]) => {
      const nextSteps = [...steps, routeStep(node, option, keyStep)];
      if (option.especieId) addRoute(routes, option.especieId, nextSteps);
      if (option.nextNodeId) visit(option.nextNodeId, nextSteps, nextVisited);
    });
  };

  visit(rootNodeId, [], new Set());
  return [...routes.values()];
}

export const speciesKeyRoutes = buildSpeciesRoutes();

export function searchSpeciesRoutes(
  query: string,
  limit = 8,
  routes = speciesKeyRoutes
) {
  const normalizedQuery = normalize(query);
  if (normalizedQuery.length < 2) return [];

  return routes
    .map((route) => {
      const scientificName = normalize(route.especie.nombreCientifico);
      const commonName = normalize(route.especie.nombreVulgar);
      const family = normalize(route.especie.familia);
      const id = normalize(route.especie.id);
      const taxonomicAlias = getTaxonomicAliasForPdfName(route.especie.nombreCientifico);
      const aliasNames = taxonomicAlias
        ? getAllNames(taxonomicAlias).map(normalize)
        : [];
      let rank = Number.POSITIVE_INFINITY;

      if (scientificName === normalizedQuery) rank = 0;
      else if (aliasNames.includes(normalizedQuery)) rank = 0;
      else if (scientificName.startsWith(normalizedQuery)) rank = 1;
      else if (aliasNames.some((name) => name.startsWith(normalizedQuery))) rank = 1;
      else if (scientificName.includes(normalizedQuery)) rank = 2;
      else if (aliasNames.some((name) => name.includes(normalizedQuery))) rank = 2;
      else if (commonName.startsWith(normalizedQuery)) rank = 3;
      else if (commonName.includes(normalizedQuery)) rank = 4;
      else if (family.includes(normalizedQuery)) rank = 5;
      else if (id.includes(normalizedQuery)) rank = 6;

      return { route, rank };
    })
    .filter((result) => Number.isFinite(result.rank))
    .sort(
      (a, b) =>
        a.rank - b.rank ||
        a.route.especie.nombreCientifico.localeCompare(b.route.especie.nombreCientifico)
    )
    .slice(0, limit)
    .map((result) => result.route);
}

export function findSpeciesRoutesByScientificNames(
  names: string[],
  routes = speciesKeyRoutes
) {
  const normalizedNames = new Set(names.map(normalize));
  return routes.filter((route) =>
    normalizedNames.has(normalize(route.especie.nombreCientifico))
  );
}
