import React from 'react';
import { ArrowUpRight, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';
import { ThreeDeviceScene } from './ThreeDeviceScene';
import { buildWhatsAppUrl } from '../utils/whatsapp';

interface HeroProps {
  currentPhone: string;
}

export const Hero: React.FC<HeroProps> = ({ currentPhone }) => {
  const handleQuoteClick = () => {
    const url = buildWhatsAppUrl(
      'Hola Jhonatan, me interesa cotizar una página web para mi negocio en Colombia. ¿Podrías darme más información?',
      currentPhone
    );
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      {/* Background radial gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-emerald-500/10 via-sky-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Location & Trust kicker (Clean unboxed text, anti-slop) */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
              <span>Desarrollo Web Comercial · Cartagena y Colombia</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.15] text-balance">
              Páginas web rápidas que convierten visitas en{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400">
                clientes en tu WhatsApp
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Diseño y desarrollo soluciones web a medida para pequeños negocios, consultorios y profesionales independientes. Sin plantillas pesadas ni mensualidades sorpresa: sitios veloces en celular, con dominio a tu nombre y preparados para vender.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={handleQuoteClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all active:scale-98"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Cotizar mi proyecto por WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href="#proyectos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-xl transition-all"
              >
                <span>Ver proyectos reales</span>
              </a>
            </div>

            {/* Honest Trust Badges (Claim-to-proof unboxed list) */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-400">
                  <strong className="text-slate-200 block font-medium">Entrega en 1 a 2 semanas</strong>
                  Cumplimiento de fechas acordadas.
                </span>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-400">
                  <strong className="text-slate-200 block font-medium">100% de tu propiedad</strong>
                  Dominio y código a tu nombre.
                </span>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-400">
                  <strong className="text-slate-200 block font-medium">Atención directa</strong>
                  Hablas directamente con el desarrollador.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D WebGL Device Scene */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <ThreeDeviceScene />
            <div className="mt-2 text-center lg:text-right">
              <span className="text-[11px] text-slate-500">
                Experiencia 3D en tiempo real creada con Three.js · Renderizado PBR sin imágenes externas
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
