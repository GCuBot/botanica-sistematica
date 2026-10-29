export interface StudyExample {
  name: string;
  note: string;
}

export interface StudySource {
  document: string;
  pages: string;
}

export interface StudyEntry {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  imageAlt: string;
  keyDiagnostic: string;
  traits: string[];
  lookFor: string;
  confusion: string;
  examples: StudyExample[];
  keywords: string[];
  source: StudySource;
}
