/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  getAllNumerology 
} from './utils/numerology';
import { 
  LIFE_PATH_MEANINGS, 
  SOUL_NUMBER_MEANINGS, 
  PERSONALITY_NUMBER_MEANINGS, 
  EXPRESSION_NUMBER_MEANINGS, 
  STRENGTH_NUMBER_MEANINGS, 
  PERSONAL_YEAR_MEANINGS 
} from './constants';
import { NumerologyData } from './types';
import InputForm from './components/InputForm';
import Card from './components/Card';
import ExplanationSection from './components/ExplanationSection';
import { Printer, RotateCcw, Share2, Sparkles, Moon, Sun } from 'lucide-react';

export default function App() {
  const [userData, setUserData] = useState<{ name: string; date: Date } | null>(null);
  const [results, setResults] = useState<NumerologyData | null>(null);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.className = newTheme;
  };

  const handleCalculate = (name: string, date: Date) => {
    setUserData({ name, date });
    setResults(getAllNumerology(name, date));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setUserData(null);
    setResults(null);
  };

  const handlePrint = () => {
    window.print();
  };

  const formattedDate = userData ? 
    new Date(userData.date).toLocaleDateString('es-AR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }) : '';

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${theme === 'dark' ? 'bg-indigo-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      {/* Header */}
      <header className={`border-b py-6 px-4 no-print sticky top-0 z-50 transition-colors duration-300 ${theme === 'dark' ? 'bg-indigo-950/50 backdrop-blur-md border-white/10' : 'bg-white/80 backdrop-blur-md border-slate-200'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-gradient-to-tr from-pink-500 to-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-xl">✨</span>
              </div>
            <h1 className={`text-2xl font-display font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 ${theme === 'dark' ? 'from-pink-400 to-yellow-300' : 'from-pink-600 to-yellow-500'}`}>SENDERO NUMÉRICO</h1>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-xl transition-all border ${theme === 'dark' ? 'bg-white/5 hover:bg-white/10 border-white/10 text-yellow-400' : 'bg-slate-100 hover:bg-slate-200 border-slate-200 text-indigo-600'}`}
              title={theme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {results && (
              <>
                <button 
                  onClick={handlePrint}
                  className={`flex items-center gap-2 px-5 py-2 rounded-full font-bold transition-all text-sm border ${theme === 'dark' ? 'bg-indigo-500/20 hover:bg-indigo-500/40 border-indigo-400/30 text-white' : 'bg-indigo-600 hover:bg-indigo-700 border-indigo-700 text-white shadow-lg shadow-indigo-100'}`}
                >
                  <Printer className="w-4 h-4" />
                  Imprimir PDF
                </button>
                <button 
                  onClick={handleReset}
                  className={`p-2 rounded-xl transition-all border ${theme === 'dark' ? 'bg-white/5 hover:bg-white/10 border-white/10 text-white' : 'bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-600'}`}
                  title="Volver a calcular"
                >
                  <RotateCcw className="w-5 h-5" />
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      <main className="px-4 py-12 md:py-20">
        <AnimatePresence mode="wait">
          {!results ? (
            <motion.div
              key="input"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <InputForm onCalculate={handleCalculate} theme={theme} />
              <ExplanationSection theme={theme} />
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="max-w-7xl mx-auto space-y-12"
            >
              <div className="text-center space-y-4 mb-20">
                <p className={`font-bold uppercase tracking-[0.2em] text-xs ${theme === 'dark' ? 'text-pink-400' : 'text-pink-600'}`}>Tu Mapa Personal</p>
                <h2 className={`text-5xl md:text-7xl font-display font-black tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  Hola, <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">{userData?.name.split(' ')[0]}</span>
                </h2>
                <div className={`flex flex-col md:flex-row items-center justify-center gap-4 font-medium ${theme === 'dark' ? 'text-indigo-200' : 'text-slate-500'}`}>
                  <span className={`px-6 py-2 rounded-full border shadow-xl backdrop-blur-md transition-colors ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200'}`}>{userData?.name}</span>
                  <span className={`px-6 py-2 rounded-full border shadow-xl backdrop-blur-md transition-colors ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200'}`}>{formattedDate}</span>
                </div>
              </div>

              {/* Print Only Header */}
              <div className="hidden print-only text-center mb-12 border-b-2 border-slate-100 pb-12 text-black">
                 <h1 className="text-4xl font-display font-black">SENDERO NUMÉRICO</h1>
                 <p className="text-slate-500 mt-2">Mapa Vibracional Personal</p>
                 <div className="mt-8 grid grid-cols-2 gap-4 max-w-lg mx-auto">
                    <div className="text-left font-sans">
                       <p className="text-[10px] uppercase font-bold text-slate-400">Consultante</p>
                       <p className="font-bold border-b border-slate-100 pb-2">{userData?.name}</p>
                    </div>
                    <div className="text-left font-sans">
                       <p className="text-[10px] uppercase font-bold text-slate-400">Fecha de Nacimiento</p>
                       <p className="font-bold border-b border-slate-100 pb-2">{formattedDate}</p>
                    </div>
                 </div>
              </div>

              {/* Bento Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card 
                  title="Camino de Vida"
                  value={results.lifePath.value}
                  calculation={results.lifePath.calculation}
                  meaning={LIFE_PATH_MEANINGS[results.lifePath.value]}
                  color={theme === 'dark' ? "text-pink-400" : "text-pink-600"}
                  theme={theme}
                />
                <Card 
                  title="Número de Alma"
                  value={results.soul.value}
                  calculation={results.soul.calculation}
                  meaning={SOUL_NUMBER_MEANINGS[results.soul.value]}
                  color={theme === 'dark' ? "text-pink-400" : "text-pink-600"}
                  theme={theme}
                />
                <Card 
                  title="Número de Personalidad"
                  value={results.personality.value}
                  calculation={results.personality.calculation}
                  meaning={PERSONALITY_NUMBER_MEANINGS[results.personality.value]}
                  color={theme === 'dark' ? "text-yellow-400" : "text-amber-600"}
                  theme={theme}
                />
                <Card 
                  title="Número de Expresión"
                  value={results.expression.value}
                  calculation={results.expression.calculation}
                  meaning={EXPRESSION_NUMBER_MEANINGS[results.expression.value]}
                  color={theme === 'dark' ? "text-cyan-400" : "text-indigo-600"}
                  theme={theme}
                />
                <Card 
                  title="Número de Fuerza"
                  value={results.strength.value}
                  calculation={results.strength.calculation}
                  meaning={STRENGTH_NUMBER_MEANINGS[results.strength.value]}
                  color={theme === 'dark' ? "text-indigo-300" : "text-slate-600"}
                  theme={theme}
                />
                <Card 
                  title="Año Personal"
                  value={results.personalYear.value}
                  calculation={results.personalYear.calculation}
                  meaning={PERSONAL_YEAR_MEANINGS[results.personalYear.value]}
                  color={theme === 'dark' ? "text-yellow-400" : "text-amber-600"}
                  theme={theme}
                />
              </div>

              <div className={`no-print pt-20 border-t flex flex-col items-center gap-6 text-center ${theme === 'dark' ? 'border-white/10' : 'border-slate-200'}`}>
                 <div className="space-y-2">
                    <h3 className={`text-3xl font-display font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>¿Deseas compartir tu análisis?</h3>
                    <p className={theme === 'dark' ? 'text-indigo-200' : 'text-slate-500'}>Puedes imprimir estos resultados o guardarlos como PDF directamente desde el navegador.</p>
                 </div>
                 <div className="flex flex-wrap justify-center gap-4">
                    <button 
                      onClick={handlePrint}
                      className="flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-pink-500 to-indigo-500 hover:from-pink-600 hover:to-indigo-600 text-white rounded-2xl font-black shadow-2xl transition-all active:scale-95 text-lg"
                    >
                      <Printer className="w-5 h-5" />
                      IMPRIMIR RESULTADOS
                    </button>
                    <button 
                      onClick={handleReset}
                      className={`flex items-center gap-3 px-10 py-5 border rounded-2xl font-bold transition-all active:scale-95 text-lg ${theme === 'dark' ? 'bg-white/5 border-white/10 hover:bg-white/10 text-white' : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700 shadow-sm'}`}
                    >
                      <RotateCcw className="w-5 h-5" />
                      NUEVO ANÁLISIS
                    </button>
                 </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className={`py-12 border-t no-print transition-colors duration-300 ${theme === 'dark' ? 'border-white/10' : 'border-slate-200'}`}>
         <div className="max-w-7xl mx-auto px-4 text-center">
            <p className={`text-sm uppercase tracking-widest font-bold ${theme === 'dark' ? 'text-indigo-400 opacity-50' : 'text-slate-400'}`}>© {new Date().getFullYear()} SENDERO NUMÉRICO • TU GUÍA VIBRACIONAL</p>
         </div>
      </footer>
    </div>
  );
}

