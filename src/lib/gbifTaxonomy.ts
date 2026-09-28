interface GbifMatchResponse {
  usageKey?: number;
  acceptedUsageKey?: number;
  canonicalName?: string;
  scientificName?: string;
  acceptedScientificName?: string;
  kingdom?: string;
  matchType?: string;
  alternatives?: GbifMatchResponse[];
}

interface GbifNameUsage {
  canonicalName?: string;
  scientificName?: string;
}

interface GbifSynonymsResponse {
  results?: GbifNameUsage[];
}

export interface GbifTaxonomicResult {
  acceptedName: string;
  matchedName: string;
  names: string[];
  sourceUrl: string;
  isSimilarMatch: boolean;
}

const GBIF_API = "https://api.gbif.org/v1";

async function loadCandidate(
  match: GbifMatchResponse,
  queriedName: string,
  isSimilarMatch: boolean
): Promise<GbifTaxonomicResult | null> {
  if (!match.usageKey || match.matchType === "NONE") return null;

  const acceptedKey = match.acceptedUsageKey ?? match.usageKey;
  const [acceptedResponse, synonymsResponse] = await Promise.all([
    fetch(`${GBIF_API}/species/${acceptedKey}`),
    fetch(`${GBIF_API}/species/${acceptedKey}/synonyms?limit=1000`),
  ]);
  if (!acceptedResponse.ok || !synonymsResponse.ok) return null;

  const accepted = (await acceptedResponse.json()) as GbifNameUsage;
  const synonyms = (await synonymsResponse.json()) as GbifSynonymsResponse;
  const acceptedName =
    accepted.canonicalName || match.acceptedScientificName || match.canonicalName;
  const matchedName = match.canonicalName || acceptedName;
  if (!acceptedName || !matchedName) return null;

  const names = new Set<string>([
    ...(!isSimilarMatch ? [queriedName] : []),
    acceptedName,
    matchedName,
    ...(synonyms.results ?? []).flatMap((synonym) =>
      synonym.canonicalName
        ? [synonym.canonicalName]
        : synonym.scientificName
          ? [synonym.scientificName]
          : []
    ),
  ]);

  return {
    acceptedName,
    matchedName,
    names: [...names],
    sourceUrl: `https://www.gbif.org/species/${acceptedKey}`,
    isSimilarMatch,
  };
}

export async function lookupGbifSynonyms(name: string): Promise<GbifTaxonomicResult[]> {
  const matchResponse = await fetch(
    `${GBIF_API}/species/match?kingdom=Plantae&verbose=true&name=${encodeURIComponent(name)}`
  );
  if (!matchResponse.ok) throw new Error("GBIF no respondió correctamente.");

  const match = (await matchResponse.json()) as GbifMatchResponse;
  const candidates = [
    { match, isSimilarMatch: false },
    ...(match.alternatives ?? []).slice(0, 3).map((alternative) => ({
      match: alternative,
      isSimilarMatch: true,
    })),
  ];

  const results = await Promise.all(
    candidates.map((candidate) =>
      loadCandidate(candidate.match, name, candidate.isSimilarMatch)
    )
  );

  return results.filter((result): result is GbifTaxonomicResult => result !== null);
}
