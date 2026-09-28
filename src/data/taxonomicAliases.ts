export interface TaxonomicAlias {
  pdfName: string;
  acceptedName: string;
  aliases: string[];
  sourceLabel: string;
  sourceUrl: string;
}

export const taxonomicAliases: TaxonomicAlias[] = [
  {
    pdfName: "Abutilon molle",
    acceptedName: "Abutilon grandifolium",
    aliases: ["Abutilon molle var. grandifolium", "Sida grandifolia"],
    sourceLabel: "Kew POWO",
    sourceUrl: "https://powo.science.kew.org/taxon/1026852-2",
  },
  {
    pdfName: "Paspalidium paludivagum",
    acceptedName: "Setaria geminata",
    aliases: ["Paspalidium geminatum", "Panicum paludivagum"],
    sourceLabel: "Kew POWO",
    sourceUrl:
      "https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:184130-2",
  },
];

export function normalizeTaxonName(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/^\s*\*+\s*/, "")
    .trim()
    .toLowerCase();
}

export function getTaxonomicAliasForPdfName(pdfName: string) {
  const normalizedName = normalizeTaxonName(pdfName);
  return taxonomicAliases.find(
    (entry) => normalizeTaxonName(entry.pdfName) === normalizedName
  );
}

export function getAllNames(entry: TaxonomicAlias) {
  return [entry.pdfName, entry.acceptedName, ...entry.aliases];
}
