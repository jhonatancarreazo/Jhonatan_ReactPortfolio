import React, { useState } from 'react';
import { ExternalLink, Check, ShieldCheck, ArrowUpRight, X } from 'lucide-react';
import { Project } from '../types';

export const ProjectsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'negocio' | 'marca' | 'catalogo'>('all');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const projects: Project[] = [
    {
  id: 'moon-window-cleaning',
  title: 'Moon Window Cleaning Services',
  category: 'Servicios & Negocio Internacional',
  type: 'Proyecto Real',
  description: 'Landing page bilingüe de alto rendimiento para empresa de servicios de limpieza residencial y comercial en Estados Unidos (Maryland, Virginia y DC), enfocada en captación de clientes y cotizaciones directas.',
  clientNeed: 'Establecer una presencia digital profesional e internacional en EE. UU. con soporte bilingüe (EN/ES), transmisión de confianza (licencias y seguros) y un canal rápido para solicitudes de presupuesto.',
  solution: 'Sitio web ultra-rápido e intuitivo con selector de idioma dinámico, formulario interactivo de cotizaciones ("Get a Quote"), catálogo estructurado de 11+ servicios, integración con reseñas de Google y contacto directo vía WhatsApp.',
  technologies: ['React', 'TypeScript', 'Tailwind CSS', 'i18n (Bilingüe EN/ES)', 'Vite', 'Mobile-First'],
  imageSrc: '/assets/images/preview_moon_windows_cleaning_services.png',
  liveUrl: 'https://jhonatancarreazo.github.io/moon-windows/moon-windows-v2/',
  demoNote: 'Enfoque en internacionalización, conversión B2C/B2B y carga optimizada de medios.',
},
    {
      id: 'gise-cassiani',
      title: 'Portafolio UGC Gise Cassiani',
      category: 'Marca Personal & UGC',
      type: 'Proyecto Real',
      description: 'Plataforma web para creadora de contenido UGC, diseñada para presentar videos demostrativos, métricas de impacto y conectar con marcas comerciales.',
      clientNeed: 'Desarrollar una presencia digital limpia e intuitiva para exhibir contenido estético y conectar de manera directa con marcas que buscan marketing de contenidos auténtico.',
      solution: 'Diseño responsive con paleta de tonos cálidos y orgánicos, integración de reproductores de video, resaltado de estadísticas clave de conversión y botones de contacto directo.',
      technologies: ['React', 'CSS Moderno', 'Tipografía Editorial', 'Responsive Layout', 'Mobile-First'],
      imageSrc: '/assets/images/preview_portafolio_ugc_gise_cassiani.png',
      liveUrl: 'https://gisecassiani.vercel.app/',
      demoNote: 'Enfoque en autoridad profesional y lectura fluida.',
    },
    {
      id: 'aroma-tradicion',
      title: 'Catálogo Interactivo Aroma y Tradición',
      category: 'Gastronomía & Domicilios',
      type: 'Demostración de Alto Rendimiento',
      description: 'Menú digital para restaurante con armado de pedido en tiempo real y envío formateado directo al WhatsApp del negocio sin comisiones.',
      clientNeed: 'Muchos negocios de comida y productos locales pierden hasta un 30% en plataformas de domicilios. Necesitan un catálogo directo y accesible.',
      solution: 'Arquitectura ligera que permite navegar platillos con precios en COP, agregar al carrito y generar el mensaje exacto con productos y dirección listo para enviar.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'WhatsApp Deep Link', 'State Store'],
      imageSrc: '/assets/images/preview_digital_catalog_1792873608421.jpg',
      demoNote: 'Solución aplicable a cualquier restaurante o tienda en Colombia.',
    },
  ];

  const filteredProjects = projects.filter((p) => {
    if (selectedFilter === 'negocio') return p.id === 'consultorio-dental';
    if (selectedFilter === 'marca') return p.id === 'gise-cassiani';
    if (selectedFilter === 'catalogo') return p.id === 'aroma-tradicion';
    return true;
  });

  return (
    <section id="proyectos" className="py-20 md:py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
              Portafolio y Casos de Estudio
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Trabajo real y demostraciones funcionales
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              Presento mis capacidades con honestidad: proyectos desarrollados para clientes reales y prototipos comerciales de alto rendimiento que puedes probar tú mismo.
            </p>
          </div>

          {/* Filter Tabs (Interactive Segmented Control) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl overflow-x-auto shrink-0">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                selectedFilter === 'all'
                  ? 'bg-emerald-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Todos (3)
            </button>
            <button
              onClick={() => setSelectedFilter('negocio')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                selectedFilter === 'negocio'
                  ? 'bg-emerald-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Negocios Locales
            </button>
            <button
              onClick={() => setSelectedFilter('marca')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                selectedFilter === 'marca'
                  ? 'bg-emerald-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Marca Personal
            </button>
            <button
              onClick={() => setSelectedFilter('catalogo')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                selectedFilter === 'catalogo'
                  ? 'bg-emerald-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Catálogos WhatsApp
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-2xl overflow-hidden transition-all group"
            >
              {/* Image Preview Container with Fallback */}
              <div className="relative aspect-[16/10] bg-slate-950 overflow-hidden border-b border-slate-800">
                <img
                  src={project.imageSrc}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-300"
                />

                {/* Status Badge in Image (Top-Right, Unboxed clean overlay) */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-slate-950/80 backdrop-blur-sm border border-slate-700/80 text-[11px] font-medium text-emerald-300 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{project.type}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Clean unboxed metadata with dot separator (No pill badges) */}
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                    <span className="text-emerald-400 font-medium">{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>Optimizado Móvil</span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack text list */}
                  <div className="flex flex-wrap gap-x-2 gap-y-1 text-[11px] text-slate-400 mb-5 font-mono">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="text-slate-400">
                        #{tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveProjectModal(project)}
                    className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1"
                  >
                    <span>Ver detalles y solución</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center gap-1.5 transition-colors"
                    >
                      <span>Abrir demo</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                  ) : (
                    <button
                      onClick={() => setActiveProjectModal(project)}
                      className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center gap-1.5 transition-colors"
                    >
                      <span>Explorar</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                  {activeProjectModal.category} · {activeProjectModal.type}
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  {activeProjectModal.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveProjectModal(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-300">
              <div className="aspect-[16/9] rounded-xl overflow-hidden border border-slate-800">
                <img
                  src={activeProjectModal.imageSrc}
                  alt={activeProjectModal.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h4 className="text-white font-semibold mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  El Reto del Cliente / Negocio:
                </h4>
                <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                  {activeProjectModal.clientNeed}
                </p>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  La Solución Implementada:
                </h4>
                <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                  {activeProjectModal.solution}
                </p>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-2">Tecnologías y Enfoque:</h4>
                <div className="flex flex-wrap gap-2">
                  {activeProjectModal.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 px-6 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between">
              <span className="text-xs text-slate-400">{activeProjectModal.demoNote}</span>
              <button
                onClick={() => setActiveProjectModal(null)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-lg"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
