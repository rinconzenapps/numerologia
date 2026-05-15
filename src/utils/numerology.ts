import { LETTER_VALUES, VOWELS } from '../constants';
import { CalculationResult, NumerologyData } from '../types';

export function reduceNumber(num: number): number {
  if (num === 11 || num === 22 || num === 33) return num;
  const digits = String(num).split('').map(Number);
  const sum = digits.reduce((acc, d) => acc + d, 0);
  return sum > 9 && sum !== 11 && sum !== 22 && sum !== 33 ? reduceNumber(sum) : sum;
}

export function calculateLifePath(date: Date): CalculationResult {
  const day = reduceNumber(date.getUTCDate());
  const month = reduceNumber(date.getUTCMonth() + 1);
  const year = reduceNumber(date.getUTCFullYear());
  const result = reduceNumber(day + month + year);
  return {
    value: result,
    calculation: `${day} (día) + ${month} (mes) + ${year} (año)`
  };
}

export function calculateSoulNumber(name: string): CalculationResult {
  let sum = 0;
  const calc: number[] = [];
  const normalizedName = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
  
  for (const char of normalizedName) {
    if (VOWELS.includes(char) && LETTER_VALUES[char]) {
      sum += LETTER_VALUES[char];
      calc.push(LETTER_VALUES[char]);
    }
  }
  return {
    value: reduceNumber(sum),
    calculation: `Vibración de vocales: ${calc.length > 0 ? calc.join(' + ') : '0'}`
  };
}

export function calculatePersonalityNumber(name: string): CalculationResult {
  let sum = 0;
  const calc: number[] = [];
  const normalizedName = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();

  for (const char of normalizedName) {
    if (LETTER_VALUES[char] && !VOWELS.includes(char)) {
      sum += LETTER_VALUES[char];
      calc.push(LETTER_VALUES[char]);
    }
  }
  return {
    value: reduceNumber(sum),
    calculation: `Vibración de consonantes: ${calc.length > 0 ? calc.join(' + ') : '0'}`
  };
}

export function calculateExpressionNumber(name: string): CalculationResult {
  let sum = 0;
  const calc: number[] = [];
  const normalizedName = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();

  for (const char of normalizedName) {
    if (LETTER_VALUES[char]) {
      sum += LETTER_VALUES[char];
      calc.push(LETTER_VALUES[char]);
    }
  }
  return {
    value: reduceNumber(sum),
    calculation: `Suma total de letras: ${calc.length > 0 ? calc.join(' + ') : '0'}`
  };
}

export function calculateStrengthNumber(date: Date): CalculationResult {
  const day = reduceNumber(date.getUTCDate());
  const month = reduceNumber(date.getUTCMonth() + 1);
  const result = reduceNumber(day + month);
  return {
    value: result,
    calculation: `${day} (día) + ${month} (mes)`
  };
}

export function calculatePersonalYear(birthDate: Date): CalculationResult {
  const today = new Date();
  const birthMonth = birthDate.getUTCMonth();
  const birthDay = birthDate.getUTCDate();
  
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const currentDay = today.getDate();

  let yearToUse: number;
  
  if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
    yearToUse = currentYear - 1;
  } else {
    yearToUse = currentYear;
  }
  
  const day = reduceNumber(birthDate.getUTCDate());
  const month = reduceNumber(birthDate.getUTCMonth() + 1);
  const year = reduceNumber(yearToUse);
  const result = reduceNumber(day + month + year);
  
  return {
    value: result,
    calculation: `${day} (día) + ${month} (mes) + ${year} (año)`
  };
}

export function getAllNumerology(name: string, date: Date): NumerologyData {
  return {
    lifePath: calculateLifePath(date),
    soul: calculateSoulNumber(name),
    personality: calculatePersonalityNumber(name),
    expression: calculateExpressionNumber(name),
    strength: calculateStrengthNumber(date),
    personalYear: calculatePersonalYear(date)
  };
}
