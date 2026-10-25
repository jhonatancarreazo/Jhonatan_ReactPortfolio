import React from 'react';
import { ShieldCheck, Award, Smartphone, MessageCircle, Code2, Cpu } from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';

interface AboutSectionProps {
  currentPhone: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ currentPhone }) => {
  const handleContact = () => {
    const url = buildWhatsAppUrl(
      'Hola Jhonatan, estuve leyendo sobre tu trayectoria y me gustaría evaluar una propuesta para mi negocio.',
      currentPhone
    );
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const skills = [
    { name: 'HTML5 & Semántica Web', desc: 'Estructuras limpias y accesibles indexables por Google' },
    { name: 'CSS3, Tailwind & Bootstrap', desc: 'Diseño responsive de precisión visual sin desajustes móviles' },
    { name: 'JavaScript & React', desc: 'Interactividad dinámica, catálogos en vivo y componentes modulares' },
    { name: 'Firebase & Despliegues Cloud', desc: 'Hosting de alta disponibilidad y gestión de datos ágil' },
    { name: 'Integración Comercial WhatsApp', desc: 'Formatos de mensajes y enlaces pre-configurados para cerrar ventas' },
  ];

  return (
    <section id="sobre-mi" className="py-20 md:py-28 bg-slate-900/40 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Honestidad y Compromiso Profesional
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
              Hola, soy Jhonatan Carreazo. Desarrollo con rigor técnico y foco comercial.
            </h2>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                Soy un Desarrollador Frontend radicado en <strong className="text-white font-medium">Cartagena de Indias, Colombia</strong>. Mi formación combina conocimientos sólidos en desarrollo web con una trayectoria técnica en la industria corporativa (incluyendo experiencia comprobable en empresas de alta exigencia como <strong className="text-white font-medium">Tenaris</strong>).
              </p>

              <p>
                De la industria aprendí algo vital: <span className="text-slate-100 font-medium">la precisión, los procesos y el cumplimiento estricto de los plazos</span>. En desarrollo web aplico esa misma mentalidad: no te entrego un código desordenado ni plantillas genéricas sobrecargadas, sino un sitio web confiable que tus clientes pueden abrir en cuestión de milisegundos desde cualquier celular en Colombia.
              </p>

              <p>
                Estoy en una etapa activa de consolidación de mis primeros clientes independientes en desarrollo web. Eso significa que <span className="text-emerald-300 font-medium">cada proyecto recibe mi dedicación total</span>, trato directo sin intermediarios y precios transparentes y razonables sin las tarifas infladas de una agencia tradicional.
              </p>
            </div>

            {/* Guarantees unboxed list */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <div className="flex items-center gap-2.5 mb-1.5 text-white font-semibold text-sm">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Sin ataduras ni sorpresas</span>
                </div>
                <p className="text-xs text-slate-400">
                  El dominio, el hosting y el código quedan registrados a tu nombre. Eres el dueño absoluto de tu activo digital.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <div className="flex items-center gap-2.5 mb-1.5 text-white font-semibold text-sm">
                  <Smartphone className="w-4 h-4 text-emerald-400" />
                  <span>Enfoque Mobile First</span>
                </div>
                <p className="text-xs text-slate-400">
                  En Colombia más del 80% del tráfico navega por smartphone. Tu sitio se verá y funcionará impecable en cualquier pantalla.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={handleContact}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Conversar directamente con Jhonatan</span>
              </button>
            </div>
          </div>

          {/* Right Column: Practical Skills & Tenaris Background */}
          <div className="lg:col-span-5 space-y-6">
            {/* Tech Stack Card */}
            <div className="rounded-2xl p-6 sm:p-8 bg-slate-950 border border-slate-800 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                <Code2 className="w-4 h-4 text-emerald-400" />
                <span>Habilidades Prácticas Comprobadas</span>
              </div>

              <div className="space-y-4">
                {skills.map((skill, idx) => (
                  <div key={idx} className="pb-3 border-b border-slate-900 last:border-0 last:pb-0">
                    <div className="text-sm font-semibold text-white mb-0.5">
                      {skill.name}
                    </div>
                    <div className="text-xs text-slate-400">
                      {skill.desc}
                    </div>
                  </div>
                ))}
              </div>

              {/* Industrial discipline footnote */}
              <div className="mt-6 pt-5 border-t border-slate-800 flex items-start gap-3">
                <Cpu className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-400">
                  <span className="font-semibold text-slate-200 block">Rigor Industrial Aplicado al Software</span>
                  Estándares de calidad y trazabilidad inspirados en procesos industriales de ingeniería.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
