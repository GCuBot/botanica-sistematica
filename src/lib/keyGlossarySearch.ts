import { KeyGlossaryEntry } from "@/data/keyGlossary";

export function normalizeGlossaryText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function singularize(value: string) {
  if (value.length > 5 && value.endsWith("es")) return value.slice(0, -2);
  if (value.length > 4 && value.endsWith("s")) return value.slice(0, -1);
  return value;
}

function tokenMatches(token: string, text: string) {
  const tokenRoot = singularize(token);
  return text.split(" ").some((word) => {
    const wordRoot = singularize(word);
    return word.startsWith(token) || token.startsWith(word) || wordRoot === tokenRoot;
  });
}

export function searchKeyGlossary(
  entries: KeyGlossaryEntry[],
  query: string,
  limit?: number
) {
  const normalizedQuery = normalizeGlossaryText(query);
  if (!normalizedQuery) return limit ? [] : entries;

  const queryTokens = normalizedQuery.split(" ");
  const ranked = entries.flatMap((entry) => {
    const term = normalizeGlossaryText(entry.term);
    const definition = normalizeGlossaryText(entry.definition);
    const allText = `${term} ${definition}`;
    if (!queryTokens.every((token) => tokenMatches(token, allText))) return [];

    let score = 4;
    if (term === normalizedQuery) score = 0;
    else if (term.startsWith(normalizedQuery)) score = 1;
    else if (queryTokens.every((token) => tokenMatches(token, term))) score = 2;
    else if (definition.includes(normalizedQuery)) score = 3;

    return [{ entry, score }];
  });

  ranked.sort(
    (left, right) =>
      left.score - right.score ||
      left.entry.term.localeCompare(right.entry.term, "es", { sensitivity: "base" })
  );
  return ranked.slice(0, limit).map(({ entry }) => entry);
}

export function glossaryInitial(term: string) {
  return normalizeGlossaryText(term).charAt(0).toUpperCase();
}
