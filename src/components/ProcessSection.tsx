import React from 'react';
import { MessageSquare, LayoutTemplate, Code, Rocket, CheckCircle2 } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Diagnóstico Ágil por WhatsApp',
      duration: '1 a 2 días',
      description: 'Me cuentas qué hace tu negocio, qué vendes y qué objetivo necesitas alcanzar (vender más, conseguir citas o proyectar formalidad). Evaluamos si soy el profesional indicado sin presiones.',
      icon: MessageSquare,
      deliverable: 'Alcance definido y cotización formal transparente.',
    },
    {
      number: '02',
      title: 'Estructura, Textos y Oferta',
      duration: '2 a 3 días',
      description: 'Organizamos juntos los textos clave, las fotos de tus productos/servicios y los llamados a la acción. Te guío para redactar de forma que cualquier cliente entienda tu valor en 5 segundos.',
      icon: LayoutTemplate,
      deliverable: 'Borrador interactivo de la arquitectura de la página.',
    },
    {
      number: '03',
      title: 'Desarrollo Frontend y Rendimiento',
      duration: '4 a 6 días',
      description: 'Construyo tu página con código limpio y moderno. Pruebo minuciosamente la visualización en iPhone, Android y computadores, verificando que los enlaces de WhatsApp funcionen a la perfección.',
      icon: Code,
      deliverable: 'Sitio web 100% interactivo listo para revisión en enlace privado.',
    },
    {
      number: '04',
      title: 'Lanzamiento, Dominio y Entrega',
      duration: '1 a 2 días',
      description: 'Conectamos tu propio dominio (.com o .co). Te entrego el control absoluto de tus accesos y realizamos una videollamada corta o tutorial personalizado para que sepas administrarlo.',
      icon: Rocket,
      deliverable: 'Tu sitio web publicado en vivo y listo para compartir en redes.',
    },
  ];

  return (
    <section id="proceso" className="py-20 md:py-28 bg-slate-950 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
            Metodología Transparente
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Cómo trabajaremos juntos, paso a paso
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Un proceso predecible, sin tecnicismos confusos y con fechas claras de entrega para que siempre sepas en qué estado se encuentra tu proyecto.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative flex flex-col justify-between p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-bold text-emerald-400">
                      {step.number}
                    </span>
                    <div className="p-2 rounded-lg bg-slate-800 text-slate-300">
                      <Icon className="w-5 h-5 text-emerald-400" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 mt-2">
                  <div className="flex items-start gap-1.5 text-xs text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-300 block">Entregable:</strong> {step.deliverable}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
