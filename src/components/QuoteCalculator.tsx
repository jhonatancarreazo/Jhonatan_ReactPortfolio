import React, { useState, useId } from 'react';
import { Calculator, ArrowRight, MessageSquare, Check, Sparkles, HelpCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';

interface QuoteCalculatorProps {
  currentPhone: string;
}

export const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({ currentPhone }) => {
  const businessNameId = useId();
  const cityId = useId();
  const [projectType, setProjectType] = useState<'landing' | 'corporativo' | 'catalogo'>('landing');
  const [includeGoogleMaps, setIncludeGoogleMaps] = useState(true);
  const [includeCopywriting, setIncludeCopywriting] = useState(false);
  const [includeHostingAssistance, setIncludeHostingAssistance] = useState(true);
  const [businessName, setBusinessName] = useState('');
  const [city, setCity] = useState('Cartagena');

  const projectTypes = [
    {
      id: 'landing',
      label: 'Landing Page Comercial',
      time: '5 a 8 días',
      desc: '1 página de alto impacto para captar clientes directo a WhatsApp',
      baseRange: '$600.000 - $950.000 COP',
    },
    {
      id: 'corporativo',
      label: 'Sitio Web para Negocio / Consultorio',
      time: '10 a 14 días',
      desc: 'Sitio institucional con múltiples secciones y credibilidad formal',
      baseRange: '$1.100.000 - $1.800.000 COP',
    },
    {
      id: 'catalogo',
      label: 'Catálogo Digital para WhatsApp',
      time: '7 a 12 días',
      desc: 'Vitrina de productos con carrito liviano y pedidos sin comisiones',
      baseRange: '$850.000 - $1.400.000 COP',
    },
  ];

  const currentTypeObj = projectTypes.find((p) => p.id === projectType) || projectTypes[0];

  // Build the message preview
  const generateMessageText = () => {
    const selectedType = currentTypeObj.label;
    const extras: string[] = [];
    if (includeGoogleMaps) extras.push('Optimización para Google Maps');
    if (includeCopywriting) extras.push('Ayuda con redacción de textos');
    if (includeHostingAssistance) extras.push('Asesoría con dominio y hosting');

    const extrasText = extras.length > 0 ? `\n• Adicionales de interés: ${extras.join(', ')}` : '';
    const businessText = businessName.trim() ? ` para mi negocio "${businessName.trim()}"` : '';
    const cityText = city.trim() ? ` en ${city.trim()}` : '';

    return `Hola Jhonatan, estuve usando el cotizador en tu sitio web. Me interesa solicitar una cotización formal:${businessText}${cityText}

• Tipo de proyecto: ${selectedType}
• Tiempo estimado requerido: ${currentTypeObj.time}${extrasText}

¿Podemos revisar disponibilidad y agendar una llamada breve de 15 minutos?`;
  };

  const handleSendToWhatsApp = () => {
    const message = generateMessageText();
    const url = buildWhatsAppUrl(message, currentPhone);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="cotizador" className="py-20 md:py-28 bg-slate-900/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
            Herramienta Interactiva
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Calcula el alcance de tu proyecto y cotiza al instante
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Selecciona las características que necesita tu negocio y genera automáticamente el mensaje con todos los detalles listos para enviarme por WhatsApp.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Step 1 & 2: Selection controls */}
            <div className="lg:col-span-7 space-y-6">
              {/* Type selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
                  1. ¿Qué tipo de solución buscas?
                </label>
                <div className="space-y-2.5">
                  {projectTypes.map((pt) => {
                    const isSelected = projectType === pt.id;
                    return (
                      <div
                        key={pt.id}
                        onClick={() => setProjectType(pt.id as any)}
                        className={`p-4 rounded-xl border cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-slate-900 border-emerald-500/70 shadow-md shadow-emerald-950/20'
                            : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className={`text-sm font-semibold ${isSelected ? 'text-emerald-300' : 'text-white'}`}>
                            {pt.label}
                          </span>
                          <span className="text-[11px] font-mono text-slate-400">
                            {pt.time}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-1">
                          {pt.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Add-ons selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
                  2. Complementos sugeridos (Opcionales):
                </label>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/40 border border-slate-800/80 cursor-pointer hover:bg-slate-900 transition-colors">
                    <input
                      type="checkbox"
                      checked={includeGoogleMaps}
                      onChange={(e) => setIncludeGoogleMaps(e.target.checked)}
                      className="w-4 h-4 rounded text-emerald-500 bg-slate-950 border-slate-700 focus:ring-emerald-500"
                    />
                    <div className="text-xs">
                      <span className="text-white font-medium block">Integración con Google Maps & Ficha Local</span>
                      <span className="text-slate-400">Para que tus clientes en Cartagena o tu ciudad te ubiquen rápido.</span>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/40 border border-slate-800/80 cursor-pointer hover:bg-slate-900 transition-colors">
                    <input
                      type="checkbox"
                      checked={includeCopywriting}
                      onChange={(e) => setIncludeCopywriting(e.target.checked)}
                      className="w-4 h-4 rounded text-emerald-500 bg-slate-950 border-slate-700 focus:ring-emerald-500"
                    />
                    <div className="text-xs">
                      <span className="text-white font-medium block">Redacción y estructura de textos de venta</span>
                      <span className="text-slate-400">Si aún no tienes redactada la propuesta de tus servicios.</span>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/40 border border-slate-800/80 cursor-pointer hover:bg-slate-900 transition-colors">
                    <input
                      type="checkbox"
                      checked={includeHostingAssistance}
                      onChange={(e) => setIncludeHostingAssistance(e.target.checked)}
                      className="w-4 h-4 rounded text-emerald-500 bg-slate-950 border-slate-700 focus:ring-emerald-500"
                    />
                    <div className="text-xs">
                      <span className="text-white font-medium block">Asesoría de Dominio y Hosting propio</span>
                      <span className="text-slate-400">Te enseño y configuro todo para que quede a tu nombre personal o de empresa.</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Business Name and City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label htmlFor={businessNameId} className="block text-xs text-slate-400 mb-1">
                    Nombre de tu negocio (Opcional):
                  </label>
                  <input
                    id={businessNameId}
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="Ej. Clínica Dental Sonrisas"
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label htmlFor={cityId} className="block text-xs text-slate-400 mb-1">
                    Ciudad / Ubicación:
                  </label>
                  <input
                    id={cityId}
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Cartagena, Colombia"
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic WhatsApp Preview & Action */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-semibold text-white">Resumen Estimado</span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400">{currentTypeObj.time}</span>
                </div>

                <div className="mb-4">
                  <span className="text-xs text-slate-400 block mb-1">Rango orientativo de inversión:</span>
                  <div className="text-lg sm:text-xl font-bold font-mono text-white">
                    {currentTypeObj.baseRange}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    * Sin cobros mensuales ocultos. Pago 50% al iniciar y 50% al entregar a entera satisfacción.
                  </p>
                </div>

                {/* Simulated WhatsApp message bubble */}
                <div className="mb-6">
                  <span className="text-[11px] font-medium text-slate-400 block mb-1.5">
                    Mensaje que se enviará a WhatsApp:
                  </span>
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 font-mono text-[11px] text-slate-300 leading-relaxed whitespace-pre-wrap max-h-48 overflow-y-auto">
                    {generateMessageText()}
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={handleSendToWhatsApp}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-lg shadow-emerald-500/20 active:scale-98"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enviar cotización a WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="text-center mt-2.5">
                  <span className="text-[11px] text-slate-400">
                    Respuesta habitual en menos de 2 horas en horario comercial.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
