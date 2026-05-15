import { Meaning } from '../types';
import { motion } from 'motion/react';

interface CardProps {
  title: string;
  value: number;
  calculation: string;
  meaning: Meaning;
  color: string;
  theme: 'dark' | 'light';
}

export default function Card({ title, value, calculation, meaning, color, theme }: CardProps) {
  const isMaster = value === 11 || value === 22 || value === 33;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative overflow-hidden ${theme === 'dark' ? 'bg-white/5 border-white/10 shadow-2xl' : 'bg-white border-slate-200 shadow-xl'} backdrop-blur-lg rounded-3xl p-8 border flex flex-col h-full pdf-card print:shadow-none print:border-slate-200 transition-colors duration-300 ${isMaster ? 'ring-2 ring-yellow-400/30' : ''}`}
    >
      {isMaster && (
        <div className="absolute top-0 right-0">
          <div className="bg-yellow-400 text-indigo-900 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-bl-xl shadow-lg">
            Maestro
          </div>
        </div>
      )}

      <div className="flex justify-between items-start mb-6">
        <div className="space-y-1">
          <h3 className={`text-xl font-black font-sans uppercase tracking-tight ${color}`}>{title}</h3>
          <p className={`text-xs font-mono uppercase tracking-widest ${theme === 'dark' ? 'text-indigo-300/60' : 'text-slate-500'}`}>{calculation}</p>
        </div>
        <div className={`text-6xl font-black ${isMaster ? 'text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.4)]' : (theme === 'dark' ? 'opacity-20 ' : 'opacity-10 ') + color} select-none`}>
          {value}
        </div>
      </div>

      <div className="space-y-6 flex-grow">
        <div className="space-y-2">
          <p className={`leading-relaxed text-sm md:text-base ${theme === 'dark' ? 'text-slate-200 opacity-90' : 'text-slate-700'}`}>
            {meaning.meaning}
          </p>
        </div>

        <div className={`space-y-4 pt-6 border-t ${theme === 'dark' ? 'border-white/10' : 'border-slate-100'}`}>
          <div className="space-y-1">
            <h4 className={`text-[10px] font-bold uppercase tracking-wider opacity-60 ${theme === 'dark' ? 'text-indigo-300' : 'text-slate-500'}`}>Luz y Sombra</h4>
            <p className={`text-sm italic ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
              {meaning.lightAndShadow}
            </p>
          </div>
          
          <div className="space-y-1">
            <h4 className={`text-[10px] font-bold uppercase tracking-wider opacity-60 ${theme === 'dark' ? 'text-indigo-300' : 'text-slate-500'}`}>Integración</h4>
            <p className={`text-sm font-medium p-4 rounded-2xl border ${theme === 'dark' ? 'text-white bg-white/5 border-white/5' : 'text-slate-800 bg-slate-50 border-slate-100'}`}>
              {meaning.tip}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
