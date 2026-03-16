export interface StatItem {
  value: string;
  key: string;
}

export const STATS: StatItem[] = [
  { value: "0g", key: "sugar" },
  { value: "234mg", key: "sodium" },
  { value: "5", key: "electrolytes" },
  { value: "1g", key: "taurine" },
];

export const ELEMENT_SYMBOLS = ["Na", "K", "Cl", "Mg", "Zn", "Tau"] as const;

export interface ComparisonRow {
  key: string;
  ours: string;
  values: string[];
}

export const COMPARISON_ROWS: ComparisonRow[] = [
  { key: "sodium", ours: "234mg", values: ["1,000mg", "500mg", "150mg"] },
  { key: "potassium", ours: "300mg", values: ["200mg", "380mg", "45mg"] },
  { key: "magnesium", ours: "120mg", values: ["60mg", "0mg", "0mg"] },
  { key: "zinc", ours: "10mg", values: ["0mg", "0mg", "0mg"] },
  { key: "taurine", ours: "1,000mg", values: ["0mg", "0mg", "0mg"] },
  { key: "sugar", ours: "0g", values: ["0g", "11g", "21g"] },
];

export const COMPETITORS = ["LMNT", "Liquid IV", "Gatorade"] as const;
