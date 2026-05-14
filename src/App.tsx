import React, { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Calendar, 
  User, 
  Sparkles, 
  BookOpen, 
  Download, 
  ChevronDown, 
  ChevronUp, 
  Heart, 
  Star,
  Info,
  Shield,
  Clock
} from "lucide-react";
import { 
  calculateLifePath, 
  getNameNumbers, 
  calculateExpressionNumber,
  calculateStrengthNumber,
  calculatePersonalYear,
  IS_MASTER_NUMBER 
} from "./lib/numerology";
import {
  LIFE_PATH_MEANINGS,
  SOUL_NUMBER_MEANINGS,
  PERSONALITY_MEANINGS,
  EXPRESSION_MEANINGS,
  STRENGTH_MEANINGS,
  PERSONAL_YEAR_MEANINGS,
  DetailedMeaning
} from "./lib/meanings";
import html2pdf from "html2pdf.js";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function App() {
  const [fullName, setFullName] = useState("");
  const [birthDate, setBirthDate] = useState(""); // Format: DD/MM/YYYY
  const [dateError, setDateError] = useState("");
  const [showSteps, setShowSteps] = useState(false);
  const pdfRef = useRef<HTMLDivElement>(null);
  const [isExporting, setIsExporting] = useState(false);

  // Custom date validation and formatting
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ""); // Only digits
    if (value.length > 8) value = value.slice(0, 8);

    // Apply mask DD/MM/YYYY
    let formatted = value;
    if (value.length > 2) formatted = value.slice(0, 2) + "/" + value.slice(2);
    if (value.length > 4) formatted = formatted.slice(0, 5) + "/" + formatted.slice(5);

    setBirthDate(formatted);

    // Validations
    if (value.length === 8) {
      const day = parseInt(value.slice(0, 2));
      const month = parseInt(value.slice(2, 4));
      const year = parseInt(value.slice(4, 8));

      if (day < 1 || day > 31) {
        setDateError("Día inválido (1-31)");
      } else if (month < 1 || month > 12) {
        setDateError("Mes inválido (1-12)");
      } else if (year < 1900 || year > new Date().getFullYear()) {
        setDateError("Año fuera de rango");
      } else {
        setDateError("");
      }
    } else if (value.length > 0) {
      setDateError("Fecha incompleta");
    } else {
      setDateError("");
    }
  };

  const results = useMemo(() => {
    if (!fullName || birthDate.length !== 10 || dateError) return null;
    
    // Convert DD/MM/YYYY to YYYY-MM-DD for current logic
    const [d, m, y] = birthDate.split("/");
    const isoDate = `${y}-${m}-${d}`;
    
    const lifePath = calculateLifePath(isoDate);
    const expression = calculateExpressionNumber(fullName);
    const nameData = getNameNumbers(fullName);
    const strength = calculateStrengthNumber(isoDate);
    const personalYear = calculatePersonalYear(isoDate);
    
    return {
      lifePath,
      expression,
      soul: { value: nameData.soul, calculation: `Vocal total: ${nameData.raw.soulTotal}` },
      personality: { value: nameData.personality, calculation: `Consonante total: ${nameData.raw.personalityTotal}` },
      strength,
      personalYear,
      breakdown: nameData.breakdown
    };
  }, [fullName, birthDate, dateError]);

  const exportToPDF = async () => {
    if (!pdfRef.current || !fullName) return;
    
    setIsExporting(true);
    
    try {
      const element = pdfRef.current;
      
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        logging: false,
        backgroundColor: "#fcfaf7",
        onclone: (clonedDoc) => {
          const pdfOnly = clonedDoc.querySelector(".pdf-only") as HTMLElement;
          if (pdfOnly) pdfOnly.style.display = "block";
        }
      });

      const imgData = canvas.toDataURL("image/jpeg", 0.95);
      const pdf = new jsPDF({
        orientation: "p",
        unit: "mm",
        format: "a4"
      });

      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
      
      // Use output with blob to force download in some restricted environments
      const blob = pdf.output("blob");
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `Mapa-Numerologico-${fullName.replace(/\s+/g, "-")}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
    } catch (error) {
      console.error("PDF Export failed", error);
      alert("Hubo un error al generar el PDF. Si el problema persiste, intenta abrir la aplicación en una pestaña nueva (usando el icono de la flecha en la esquina superior derecha) y descarga desde allí.");
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfaf7] text-slate-800 font-sans selection:bg-rose-100">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-rose-400 to-amber-300 flex items-center justify-center text-white shadow-sm">
            <Sparkles size={18} />
          </div>
          <span className="font-semibold text-lg tracking-tight">Aura Numerología</span>
        </div>
        <button 
          onClick={exportToPDF}
          disabled={!results || isExporting}
          className="flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 active:scale-95 transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
        >
          {isExporting ? (
            <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span> Generando...</>
          ) : (
            <><Download size={16} /> Guardar Análisis PDF</>
          )}
        </button>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <header className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Tu Mapa <span className="text-rose-500">Numerológico</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-lg max-w-2xl mx-auto"
          >
            Descubre la vibración de tus números y el propósito de tu alma.
          </motion.p>
        </header>

        {/* Inputs */}
        <section className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 mb-12 border border-slate-50">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-slate-600 px-1">
                <User size={14} className="text-rose-400" /> NOMBRE COMPLETO
              </label>
              <input 
                type="text"
                placeholder="Ej: Maria Gracia Lopez"
                className="w-full bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-rose-200 focus:border-rose-400 rounded-2xl py-4 px-6 outline-none transition-all text-lg font-medium placeholder:text-slate-300"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-slate-600 px-1">
                <Calendar size={14} className="text-amber-400" /> FECHA DE NACIMIENTO
              </label>
              <div className="relative">
                <input 
                  type="text"
                  placeholder="DD/MM/AAAA"
                  className={`w-full bg-slate-50 border-2 ${dateError ? 'border-rose-200 focus:border-rose-400' : 'border-transparent focus:border-amber-400'} focus:bg-white focus:ring-2 ${dateError ? 'focus:ring-rose-100' : 'focus:ring-amber-100'} rounded-2xl py-4 px-6 outline-none transition-all text-lg font-medium placeholder:text-slate-300`}
                  value={birthDate}
                  onChange={handleDateChange}
                  maxLength={10}
                />
                {dateError && (
                  <span className="absolute -bottom-6 left-2 text-[10px] font-bold text-rose-500 uppercase tracking-tighter">
                    {dateError}
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <AnimatePresence mode="wait">
          {results ? (
            <motion.div 
              id="pdf-content"
              ref={pdfRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-12 pb-20"
            >
              {/* User summary in PDF */}
              <div className="hidden pdf-only flex flex-col items-center mb-8 pb-8 border-b border-slate-100">
                <h2 className="text-3xl font-bold">Análisis de {fullName}</h2>
                <p className="text-slate-400">{birthDate}</p>
              </div>

              {/* Main 6 Numbers Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ResultCard 
                    title="Camino de Vida"
                    value={results.lifePath?.value}
                    calculation={results.lifePath?.calculation}
                    meaning={LIFE_PATH_MEANINGS[results.lifePath?.value || 0]}
                    icon={<Calendar size={20} />}
                    color="rose"
                />
                <ResultCard 
                    title="Número de Alma"
                    value={results.soul.value}
                    calculation={results.soul.calculation}
                    meaning={SOUL_NUMBER_MEANINGS[results.soul.value]}
                    icon={<Heart size={20} />}
                    color="amber"
                />
                <ResultCard 
                    title="Personalidad"
                    value={results.personality.value}
                    calculation={results.personality.calculation}
                    meaning={PERSONALITY_MEANINGS[results.personality.value]}
                    icon={<User size={20} />}
                    color="purple"
                />
                <ResultCard 
                    title="Número de Expresión"
                    value={results.expression.value}
                    calculation={results.expression.calculation}
                    meaning={EXPRESSION_MEANINGS[results.expression.value]}
                    icon={<Star size={20} />}
                    color="blue"
                />
                <ResultCard 
                    title="Número de Fuerza"
                    value={results.strength?.value}
                    calculation={results.strength?.calculation}
                    meaning={STRENGTH_MEANINGS[results.strength?.value || 0]}
                    icon={<Shield size={20} />}
                    color="emerald"
                />
                <ResultCard 
                    title="Año Personal"
                    value={results.personalYear?.value}
                    calculation={results.personalYear?.calculation}
                    meaning={PERSONAL_YEAR_MEANINGS[results.personalYear?.value || 0]}
                    icon={<Clock size={20} />}
                    color="cyan"
                    extraInfo={
                        <div className="mt-2 flex items-center gap-2 text-[10px] text-slate-400 font-medium">
                            <Calendar size={10} />
                            <span>Ciclo vigente: {results.personalYear?.cycleRange}</span>
                        </div>
                    }
                />
              </div>

              {/* Breakdown section */}
              <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-50">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold flex items-center gap-2">
                        <BookOpen size={20} className="text-rose-500" /> 
                        Detalle Matemático de tu Nombre
                    </h3>
                    <button 
                        onClick={() => setShowSteps(!showSteps)}
                        className="text-sm font-medium text-slate-400 hover:text-slate-600 flex items-center gap-1 transition-colors"
                    >
                        {showSteps ? "Ocultar" : "Mostrar sumas"}
                        {showSteps ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="flex flex-wrap gap-4">
                        {results.breakdown.map((word, wIdx) => (
                            <div key={wIdx} className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col gap-2">
                                <div className="flex gap-1">
                                    {word.letters.map((l, lIdx) => (
                                        <div key={lIdx} className="flex flex-col items-center">
                                            <span className="text-[10px] text-slate-400 font-mono">{l.val}</span>
                                            <span className={`w-8 h-8 flex items-center justify-center rounded-lg font-bold ${l.isVowel ? 'bg-amber-100 text-amber-700' : 'bg-slate-200 text-slate-700'}`}>
                                                {l.char}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {showSteps && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                            <CalculationRow label="Camino de Vida" formula={results.lifePath?.calculation} />
                            <CalculationRow label="Número de Alma (Vocales)" formula={results.soul.calculation} />
                            <CalculationRow label="Personalidad (Consonantes)" formula={results.personality.calculation} />
                            <CalculationRow label="Expresión (Total Nombre)" formula={results.expression.calculation} />
                            <CalculationRow label="Fuerza" formula={results.strength?.calculation} />
                            <CalculationRow label="Año Personal" formula={results.personalYear?.calculation} />
                        </motion.div>
                    )}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-20 text-slate-300"
            >
              <div className="w-24 h-24 rounded-full border-4 border-dashed border-slate-200 flex items-center justify-center mb-6">
                <Sparkles size={40} />
              </div>
              <p className="text-lg font-medium">Ingresa tus datos para revelar tu mapa vibratorio</p>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="text-center py-12 border-t border-slate-100 text-slate-400 text-sm">
        <p>© 2026 Aura Numerología • rincónzen.com.ar</p>
      </footer>
    </div>
  );
}

function ResultCard({ title, value, calculation, meaning, icon, color, extraInfo }: { 
    title: string; 
    value?: number; 
    calculation?: string; 
    meaning?: DetailedMeaning; 
    icon: React.ReactNode;
    color: string;
    extraInfo?: React.ReactNode;
}) {
    const isMaster = value && IS_MASTER_NUMBER(value);
    
    // Using explicit hex/classes for variety
    const colors: any = {
        rose: "bg-rose-50 border-rose-100 text-rose-700",
        amber: "bg-amber-50 border-amber-100 text-amber-700",
        purple: "bg-purple-50 border-purple-100 text-purple-700",
        blue: "bg-blue-50 border-blue-100 text-blue-700",
        emerald: "bg-emerald-50 border-emerald-100 text-emerald-700",
        cyan: "bg-cyan-50 border-cyan-100 text-cyan-700"
    };

    return (
        <motion.div 
            whileHover={{ y: -4 }}
            className={`p-8 rounded-[2.5rem] border shadow-sm flex flex-col gap-6 bg-white relative overflow-hidden transition-all`}
        >
            {isMaster && (
                <div className="absolute top-4 right-4 bg-amber-400 text-white text-[10px] font-black px-2 py-1 rounded-full uppercase tracking-tighter shadow-orange-200 shadow-lg">
                    Maestro
                </div>
            )}

            <div className={`w-12 h-12 rounded-2xl ${colors[color]} flex items-center justify-center shadow-inner`}>
                {icon}
            </div>

            <div>
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">{title}</h4>
                <div className="flex items-baseline gap-3">
                    <span className="text-6xl font-black text-slate-900">{value}</span>
                    <span className="text-xs text-slate-400 font-mono italic">({calculation})</span>
                </div>
                {extraInfo}
            </div>

            <div className="space-y-4">
                <p className="text-sm leading-relaxed text-slate-600">
                    {meaning?.meaning}
                </p>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="text-xs font-bold text-slate-800 mb-1">Luz y Sombra</p>
                    <p className="text-xs text-slate-500 leading-relaxed italic">{meaning?.lightAndShadow}</p>
                </div>
                <div className="flex gap-2 items-start">
                    <div className="mt-1"><Info size={12} className="text-rose-400" /></div>
                    <p className="text-[11px] font-medium text-slate-500">
                        <span className="font-bold text-slate-700">Tip:</span> {meaning?.tip}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

function CalculationRow({ label, formula }: { label: string, formula?: string }) {
    return (
        <div className="flex justify-between items-center p-3 border-b border-slate-50 text-sm">
            <span className="font-bold text-slate-600">{label}</span>
            <span className="font-mono text-xs text-slate-400">{formula}</span>
        </div>
    );
}
