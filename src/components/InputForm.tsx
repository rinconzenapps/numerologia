import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface InputFormProps {
  onCalculate: (name: string, date: Date) => void;
  theme: 'dark' | 'light';
}

export default function InputForm({ onCalculate, theme }: InputFormProps) {
  const [name, setName] = useState('');
  const [dateInput, setDateInput] = useState('');
  const [error, setError] = useState('');

  const currentYear = new Date().getFullYear();

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 2 && val.length <= 4) {
      val = val.slice(0, 2) + '/' + val.slice(2);
    } else if (val.length > 4) {
      val = val.slice(0, 2) + '/' + val.slice(2, 4) + '/' + val.slice(4, 8);
    }
    setDateInput(val);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) {
      setError('Por favor ingresa tu nombre completo.');
      return;
    }

    const parts = dateInput.split('/');
    if (parts.length !== 3 || dateInput.length !== 10) {
      setError('Formato de fecha inválido. Usa DD/MM/AAAA.');
      return;
    }

    const d = parseInt(parts[0]);
    const m = parseInt(parts[1]);
    const y = parseInt(parts[2]);

    if (isNaN(d) || d < 1 || d > 31) {
      setError('Día de nacimiento inválido (1-31).');
      return;
    }

    if (isNaN(m) || m < 1 || m > 12) {
      setError('Mes de nacimiento inválido (1-12).');
      return;
    }

    if (isNaN(y) || y < 1900 || y > currentYear) {
      setError(`Año de nacimiento inválido (1900-${currentYear}).`);
      return;
    }

    const dateCheck = new Date(y, m - 1, d);
    if (dateCheck.getDate() !== d) {
       setError('Fecha inválida para ese mes/año.');
       return;
    }

    onCalculate(name, dateCheck);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`max-w-xl mx-auto w-full backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 border shadow-2xl transition-colors duration-300 ${theme === 'dark' ? 'bg-white/10 border-white/20' : 'bg-white border-slate-200'}`}
    >
      <div className="text-center mb-10">
        <div className={`inline-flex p-4 rounded-2xl mb-6 border ${theme === 'dark' ? 'bg-gradient-to-br from-pink-500/20 to-yellow-500/20 border-white/10' : 'bg-gradient-to-br from-pink-500/10 to-yellow-500/10 border-pink-500/20'}`}>
          <Sparkles className={`w-8 h-8 ${theme === 'dark' ? 'text-pink-400' : 'text-pink-600'}`} />
        </div>
        <h2 className={`text-4xl font-display font-black mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Mapa Vibracional</h2>
        <p className={`leading-relaxed opacity-80 ${theme === 'dark' ? 'text-indigo-200' : 'text-slate-500'}`}>Ingresa tus datos para revelar la energía que guía tus pasos.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-3">
          <label className={`text-xs font-black uppercase tracking-widest ml-1 ${theme === 'dark' ? 'text-indigo-300' : 'text-indigo-600'}`}>Nombre Completo</label>
          <input
            type="text"
            placeholder="Ej: Maria Gracia Lopez"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`w-full px-6 py-5 rounded-2xl transition-all font-medium text-lg border focus:outline-none focus:ring-4 focus:ring-pink-500/20 focus:border-pink-500/50 ${theme === 'dark' ? 'bg-indigo-900/40 border-white/10 text-white placeholder:text-indigo-300/40' : 'bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400'}`}
          />
        </div>

        <div className="space-y-3">
          <label className={`text-xs font-black uppercase tracking-widest ml-1 ${theme === 'dark' ? 'text-indigo-300' : 'text-indigo-600'}`}>Fecha de Nacimiento (DD/MM/AAAA)</label>
          <div className="relative">
             <input
                type="text"
                placeholder="25/12/1985"
                value={dateInput}
                onChange={handleDateChange}
                maxLength={10}
                className={`w-full px-6 py-5 rounded-2xl transition-all text-lg font-bold tracking-wider border focus:outline-none focus:ring-4 focus:ring-pink-500/20 focus:border-pink-500/50 ${theme === 'dark' ? 'bg-indigo-900/40 border-white/10 text-white placeholder:text-indigo-300/40' : 'bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400'}`}
              />
          </div>
        </div>

        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-bold text-rose-300 bg-rose-500/20 px-5 py-4 rounded-2xl border border-rose-500/40 flex items-center gap-3"
          >
            <span>⚠️</span> {error}
          </motion.p>
        )}

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-500 to-indigo-500 hover:from-pink-600 hover:to-indigo-600 text-white font-black py-6 rounded-[1.5rem] shadow-2xl shadow-pink-500/20 transition-all active:scale-95 text-xl tracking-widest uppercase"
        >
          Calcular Vibración
        </button>
      </form>
    </motion.div>
  );
}
