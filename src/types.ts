export interface Meaning {
  meaning: string;
  lightAndShadow: string;
  tip: string;
}

export interface CalculationResult {
  value: number;
  calculation: string;
}

export interface NumerologyData {
  lifePath: CalculationResult;
  soul: CalculationResult;
  personality: CalculationResult;
  expression: CalculationResult;
  strength: CalculationResult;
  personalYear: CalculationResult;
}
