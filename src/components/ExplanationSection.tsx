import { motion } from 'motion/react';
import { BookOpen, Calculator, Info } from 'lucide-react';

interface ExplanationSectionProps {
  theme: 'dark' | 'light';
}

export default function ExplanationSection({ theme }: ExplanationSectionProps) {
  return (
    <div className="max-w-4xl mx-auto space-y-16 py-20 pb-40 no-print transition-colors duration-300">
      <div className="text-center space-y-4">
        <h2 className={`text-4xl font-display font-black transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>¿Cómo funciona la Numerología?</h2>
        <p className={`opacity-70 transition-colors ${theme === 'dark' ? 'text-indigo-200' : 'text-slate-600'}`}>Comprende la base matemática detrás de tus vibraciones personales.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
           whileHover={{ y: -5 }}
           className={`backdrop-blur-md p-8 rounded-[2rem] border shadow-xl transition-colors ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200'}`}
        >
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border ${theme === 'dark' ? 'bg-pink-500/10 border-pink-500/20' : 'bg-pink-500/5 border-pink-500/10'}`}>
            <Calculator className={`w-7 h-7 ${theme === 'dark' ? 'text-pink-400' : 'text-pink-600'}`} />
          </div>
          <h3 className={`text-2xl font-black mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>El Alfabeto Pitagórico</h3>
          <p className={`text-sm leading-relaxed mb-6 opacity-80 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
            Cada letra de tu nombre tiene un valor numérico asignado según la tabla pitagórica. 
            Las vocales representan tu <b>Número de Alma</b>, mientras que las consonantes 
            definen tu <b>Número de Personalidad</b>.
          </p>
          <div className={`grid grid-cols-3 gap-2 text-[10px] font-mono border-t pt-6 ${theme === 'dark' ? 'border-white/10' : 'border-slate-100'}`}>
            <div className={`p-2 rounded transition-colors ${theme === 'dark' ? 'bg-indigo-900/40 text-indigo-200' : 'bg-slate-50 text-slate-500'}`}>1: A, J, S</div>
            <div className={`p-2 rounded transition-colors ${theme === 'dark' ? 'bg-indigo-900/40 text-indigo-200' : 'bg-slate-50 text-slate-500'}`}>2: B, K, T</div>
            <div className={`p-2 rounded transition-colors ${theme === 'dark' ? 'bg-indigo-900/40 text-indigo-200' : 'bg-slate-50 text-slate-500'}`}>3: C, L, U</div>
            <div className={`p-2 rounded transition-colors ${theme === 'dark' ? 'bg-indigo-900/40 text-indigo-200' : 'bg-slate-50 text-slate-500'}`}>4: D, M, V</div>
            <div className={`p-2 rounded transition-colors ${theme === 'dark' ? 'bg-indigo-900/40 text-indigo-200' : 'bg-slate-50 text-slate-500'}`}>5: E, N, Ñ, W</div>
            <div className={`p-2 rounded transition-colors ${theme === 'dark' ? 'bg-indigo-900/40 text-indigo-200' : 'bg-slate-50 text-slate-500'}`}>6: F, O, X</div>
            <div className={`p-2 rounded transition-colors ${theme === 'dark' ? 'bg-indigo-900/40 text-indigo-200' : 'bg-slate-50 text-slate-500'}`}>7: G, P, Y</div>
            <div className={`p-2 rounded transition-colors ${theme === 'dark' ? 'bg-indigo-900/40 text-indigo-200' : 'bg-slate-50 text-slate-500'}`}>8: H, Q, Z</div>
            <div className={`p-2 rounded transition-colors ${theme === 'dark' ? 'bg-indigo-900/40 text-indigo-200' : 'bg-slate-50 text-slate-500'}`}>9: I, R</div>
          </div>
        </motion.div>

        <motion.div
           whileHover={{ y: -5 }}
           className={`backdrop-blur-md p-8 rounded-[2rem] border shadow-xl transition-colors ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200'}`}
        >
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border ${theme === 'dark' ? 'bg-yellow-500/10 border-yellow-500/20' : 'bg-yellow-500/5 border-yellow-500/10'}`}>
            <Info className={`w-7 h-7 ${theme === 'dark' ? 'text-yellow-500' : 'text-amber-600'}`} />
          </div>
          <h3 className={`text-2xl font-black mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Números Maestros</h3>
          <p className={`text-sm leading-relaxed mb-6 opacity-80 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
            En numerología, los números <b>11, 22 y 33</b> no se reducen. Poseen una vibración de mayor intensidad y responsabilidad espiritual.
          </p>
          <ul className="space-y-4 text-xs">
            <li className="flex gap-3 items-start">
              <span className={`font-black px-2 py-0.5 rounded shrink-0 ${theme === 'dark' ? 'text-indigo-950 bg-yellow-400' : 'text-white bg-amber-500'}`}>11</span> 
              <span className={`transition-colors ${theme === 'dark' ? 'text-slate-200' : 'text-slate-700'}`}>Iluminación, intuición y visión espiritual.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className={`font-black px-2 py-0.5 rounded shrink-0 ${theme === 'dark' ? 'text-indigo-950 bg-yellow-400' : 'text-white bg-amber-500'}`}>22</span> 
              <span className={`transition-colors ${theme === 'dark' ? 'text-slate-200' : 'text-slate-700'}`}>Arquitecto, construcción de grandes ideales en la realidad.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className={`font-black px-2 py-0.5 rounded shrink-0 ${theme === 'dark' ? 'text-indigo-950 bg-yellow-400' : 'text-white bg-amber-500'}`}>33</span> 
              <span className={`transition-colors ${theme === 'dark' ? 'text-slate-200' : 'text-slate-700'}`}>Servicio desinteresado, guía y amor incondicional.</span>
            </li>
          </ul>
        </motion.div>
      </div>

      <div className={`rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden border shadow-lg transition-colors ${theme === 'dark' ? 'bg-gradient-to-br from-indigo-900/80 to-pink-900/40 text-white border-white/10' : 'bg-gradient-to-br from-indigo-50 to-pink-50 text-slate-900 border-slate-200'}`}>
        <div className="relative z-10 space-y-8 max-w-2xl">
          <h3 className="text-3xl font-black transition-colors">Cálculo de los Números</h3>
          <div className="space-y-8">
            <div className="flex gap-6">
               <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center shrink-0 font-black text-white shadow-lg shadow-pink-500/40">1</div>
               <p className={`text-sm leading-relaxed transition-colors ${theme === 'dark' ? 'text-indigo-100' : 'text-slate-700'}`}><b className={`block mb-1 ${theme === 'dark' ? 'text-pink-400' : 'text-pink-600'}`}>Camino de Vida:</b> Sumamos día + mes + año de nacimiento y reducimos a un dígito (ej: 15/05/1990 → 1+5 + 0+5 + 1+9+9+0 = 6 + 5 + 19 = 30 → 3).</p>
            </div>
            <div className="flex gap-6">
               <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center shrink-0 font-black text-white shadow-lg shadow-pink-500/40">2</div>
               <p className={`text-sm leading-relaxed transition-colors ${theme === 'dark' ? 'text-indigo-100' : 'text-slate-700'}`}><b className={`block mb-1 ${theme === 'dark' ? 'text-pink-400' : 'text-pink-600'}`}>Número de Expresión:</b> Suma total de los valores de todas las letras de tu nombre completo según la tabla pitagórica.</p>
            </div>
            <div className="flex gap-6">
               <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center shrink-0 font-black text-white shadow-lg shadow-pink-500/40">3</div>
               <p className={`text-sm leading-relaxed transition-colors ${theme === 'dark' ? 'text-indigo-100' : 'text-slate-700'}`}><b className={`block mb-1 ${theme === 'dark' ? 'text-pink-400' : 'text-pink-600'}`}>Año Personal:</b> Suma día + mes de nacimiento + el año actual o del último cumpleaños celebrado (vibración vigente).</p>
            </div>
          </div>
        </div>
        <BookOpen className={`absolute -right-16 -bottom-16 w-80 h-80 opacity-5 rotate-12 ${theme === 'dark' ? 'text-white' : 'text-black'}`} />
      </div>
    </div>
  );
}
