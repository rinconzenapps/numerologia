/**
 * Numerology Utility Library
 * Implements Pythagorean Numerology calculations
 */

export const PYTHAGOREAN_CHART: Record<string, number> = {
  A: 1, J: 1, S: 1,
  B: 2, K: 2, T: 2,
  C: 3, L: 3, U: 3,
  D: 4, M: 4, V: 4,
  E: 5, N: 5, W: 5, Ñ: 5,
  F: 6, O: 6, X: 6,
  G: 7, P: 7, Y: 7,
  H: 8, Q: 8, Z: 8,
  I: 9, R: 9,
};

export const IS_MASTER_NUMBER = (num: number) => [11, 22, 33].includes(num);

export const reduceNumber = (num: number, allowMaster: boolean = true): number => {
  if (allowMaster && IS_MASTER_NUMBER(num)) return num;
  if (num < 10) return num;
  const sum = String(num)
    .split("")
    .reduce((acc, digit) => acc + parseInt(digit), 0);
  return reduceNumber(sum, allowMaster);
};

export const calculateLifePath = (dob: string) => {
  if (!dob) return null;
  const [year, month, day] = dob.split("-").map(Number);
  
  const d = reduceNumber(day);
  const m = reduceNumber(month);
  const y = reduceNumber(year);
  
  const total = d + m + y;
  return {
    value: reduceNumber(total),
    steps: { day: d, month: m, year: y, total }
  };
};

export const calculateExpressionNumber = (fullName: string) => {
  const cleanName = fullName.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^A-ZÑ ]/g, "");
  let total = 0;
  const calc = [];
  for (const char of cleanName) {
    if (PYTHAGOREAN_CHART[char]) {
      const val = PYTHAGOREAN_CHART[char];
      total += val;
      calc.push(val);
    }
  }
  return {
    value: reduceNumber(total),
    calculation: `Suma de todas las letras: ${calc.slice(0, 10).join(' + ')}${calc.length > 10 ? '...' : ''} = ${total}`
  };
};

export const calculateStrengthNumber = (dob: string) => {
  if (!dob) return null;
  const [year, month, day] = dob.split("-").map(Number);
  const d = reduceNumber(day);
  const m = reduceNumber(month);
  const result = reduceNumber(d + m);
  return {
    value: result,
    calculation: `${d} (día) + ${m} (mes)`
  };
};

export const calculatePersonalYear = (dob: string) => {
  if (!dob) return null;
  const today = new Date();
  const [bYear, bMonth, bDay] = dob.split("-").map(Number);
  
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;
  const currentDay = today.getDate();

  // Rule: If birthday hasn't happened this year, use previous year.
  // Personal Year starts on birthday and ends day before next birthday.
  let yearToUse;
  let cycleStart;
  let cycleEnd;

  if (currentMonth < bMonth || (currentMonth === bMonth && currentDay < bDay)) {
    yearToUse = currentYear - 1;
  } else {
    yearToUse = currentYear;
  }
  
  cycleStart = `${bDay}/${bMonth}/${yearToUse}`;
  cycleEnd = `${bDay}/${bMonth}/${yearToUse + 1}`;

  const d = reduceNumber(bDay);
  const m = reduceNumber(bMonth);
  const y = reduceNumber(yearToUse);
  const result = reduceNumber(d + m + y);
  
  return {
    value: result,
    yearVibration: yearToUse,
    cycleRange: `${cycleStart} - ${cycleEnd}`,
    calculation: `${d} (Día) + ${m} (Mes) + ${y} (Año ${yearToUse}) = ${d+m+y} -> ${result}`
  };
};

export const getNameNumbers = (fullName: string) => {
  const cleanName = fullName.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^A-ZÑ ]/g, "");
  const vowels = "AEOIU";
  
  let destinyTotal = 0;
  let soulTotal = 0;
  let personalityTotal = 0;
  
  const breakdown: any[] = [];

  const words = cleanName.split(/\s+/).filter(w => w.length > 0);
  
  words.forEach(word => {
    let wordDestiny = 0;
    let wordSoul = 0;
    let wordPersonality = 0;
    const wordLetters: any[] = [];

    for (const char of word) {
      const val = PYTHAGOREAN_CHART[char] || 0;
      wordDestiny += val;
      const isVowel = vowels.includes(char);
      if (isVowel) wordSoul += val;
      else wordPersonality += val;
      
      wordLetters.push({ char, val, isVowel });
    }

    destinyTotal += wordDestiny;
    soulTotal += wordSoul;
    personalityTotal += wordPersonality;
    
    breakdown.push({ word, letters: wordLetters, wordDestiny, wordSoul, wordPersonality });
  });

  return {
    destiny: reduceNumber(destinyTotal),
    soul: reduceNumber(soulTotal),
    personality: reduceNumber(personalityTotal),
    breakdown,
    raw: { destinyTotal, soulTotal, personalityTotal }
  };
};

export const INTERPRETATIONS: Record<number, { title: string, description: string }> = {
  1: { 
    title: "El Líder", 
    description: "Independencia, creatividad y determinación. Marcado por la originalidad y la capacidad de iniciar nuevos proyectos." 
  },
  2: { 
    title: "El Pacificador", 
    description: "Diplomacia, cooperación y sensibilidad. Buscas la armonía y el equilibrio en tus relaciones." 
  },
  3: { 
    title: "El Comunicador", 
    description: "Expresión, optimismo y alegría. Posees un gran talento creativo y una chispa social natural." 
  },
  4: { 
    title: "El Constructor", 
    description: "Estabilidad, disciplina y trabajo duro. Valoras la estructura, el orden y la honestidad." 
  },
  5: { 
    title: "El Aventurero", 
    description: "Libertad, adaptabilidad y curiosidad. Amas el cambio y las experiencias sensoriales." 
  },
  6: { 
    title: "El Nutridor", 
    description: "Responsabilidad, amor y servicio. Eres el pilar de la familia y posees un gran sentido estético." 
  },
  7: { 
    title: "El Buscador", 
    description: "Análisis, espiritualidad y reflexión. Buscas la verdad interior y tienes una mente analítica profunda." 
  },
  8: { 
    title: "El Manifestador", 
    description: "Poder, abundancia y autoridad. Tienes la capacidad de materializar metas ambiciosas en el mundo físico." 
  },
  9: { 
    title: "El Humanitario", 
    description: "Compasión, idealismo y altruismo. Tu visión es global y buscas dejar el mundo mejor de como lo encontraste." 
  },
  11: { 
    title: "El Maestro Intuitivo", 
    description: "Número Maestro. Posees una intuición excepcional y una visión espiritual que inspira a los demás." 
  },
  22: { 
    title: "El Maestro Constructor", 
    description: "Número Maestro. Capacidad para convertir grandes sueños en realidades tangibles a gran escala." 
  },
  33: { 
    title: "El Maestro Guía", 
    description: "Número Maestro. La máxima expresión de servicio amoroso y guía espiritual para la humanidad." 
  }
};
