import React from 'react';
import { ArrowUpRight, MessageSquare, ShieldCheck, Check } from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';

interface CtaFinalSectionProps {
  currentPhone: string;
}

export const CtaFinalSection: React.FC<CtaFinalSectionProps> = ({ currentPhone }) => {
  const handleFinalClick = () => {
    const url = buildWhatsAppUrl(
      'Hola Jhonatan, estuve revisando todo tu portafolio y estoy listo para cotizar el desarrollo de mi página web.',
      currentPhone
    );
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800/80 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-3">
          <ShieldCheck className="w-4 h-4" />
          <span>Disponibilidad Inmediata para Nuevos Proyectos</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight text-balance leading-tight">
          ¿Listo para darle a tu negocio la presencia digital que merece?
        </h2>

        <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Escríbeme hoy mismo por WhatsApp. Revisamos lo que necesitas, definimos los tiempos y te entrego una cotización clara sin sorpresas.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleFinalClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/35 transition-all active:scale-98"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Iniciar conversación en WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Small reassurance notes */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-emerald-400" />
            Respuesta promedio: &lt; 2 horas
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-emerald-400" />
            Sin compromiso inicial
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-emerald-400" />
            Cartagena y toda Colombia
          </span>
        </div>
      </div>
    </section>
  );
};
