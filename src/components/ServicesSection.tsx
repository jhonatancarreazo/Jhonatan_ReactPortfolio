import React from 'react';
import { ArrowUpRight, Check, Zap, Globe, ShoppingBag, Clock } from 'lucide-react';
import { Service } from '../types';
import { buildWhatsAppUrl } from '../utils/whatsapp';

interface ServicesSectionProps {
  currentPhone: string;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ currentPhone }) => {
  const services: Service[] = [
    {
      id: 'landing-pages',
      number: '01',
      title: 'Landing Pages (Páginas de Alta Conversión)',
      shortDesc: 'Sitios de una sola página diseñados con precisión psicológica para presentar tu oferta y llevar al visitante a hacer clic en tu WhatsApp.',
      deliverables: [
        'Diseño visual moderno adaptado 100% a celulares',
        'Botones de llamado a la acción (CTA) directos a tu WhatsApp con mensaje predeterminado',
        'Sección de propuesta de valor, beneficios y preguntas frecuentes',
        'Velocidad de carga optimizada para conexiones móviles 4G',
        'Integración con Google Analytics y Pixel si realizas pauta publicitaria',
      ],
      idealFor: 'Lanzamientos de servicios, profesionales independientes, cursos, promociones o pauta en Meta/Google Ads.',
      estimatedTime: '5 a 8 días hábiles',
      startingAtCop: 'Inversión accesible para emprendedores',
    },
    {
      id: 'sitios-corporativos',
      number: '02',
      title: 'Páginas Web para Negocios y Consultorios',
      shortDesc: 'El sitio web formal que tu empresa necesita para transmitir máxima confianza, posicionarse en Google y cerrar contratos con clientes exigentes.',
      deliverables: [
        'Estructura multipágina o secciones completas (Inicio, Servicios, Nosotros, Contacto)',
        'Formularios de contacto validados + botón flotante de WhatsApp',
        'Mapa interactivo de ubicación y ficha de Google Perfil de Negocio',
        'Optimización SEO inicial para búsquedas locales en Cartagena y Colombia',
        'Asesoría para compra de dominio propio (.com o .co) y hosting a tu nombre',
      ],
      idealFor: 'Consultorios médicos y odontológicos, firmas contables y legales, empresas de turismo, hotelería y negocios locales.',
      estimatedTime: '10 a 14 días hábiles',
      startingAtCop: 'Estructura modular a medida',
    },
    {
      id: 'catalogos-whatsapp',
      number: '03',
      title: 'Catálogos Digitales Livianos para WhatsApp',
      shortDesc: 'Muestra tus productos, platos o servicios con precios claros en COP. Tus clientes eligen lo que quieren y el pedido llega formateado a tu chat sin comisiones abusivas.',
      deliverables: [
        'Vitrina visual con fotos de productos, descripciones y precios en COP',
        'Selector de cantidades y armado de carrito liviano',
        'Generación de resumen de compra enviado directo a tu WhatsApp con 1 toque',
        'Panel o archivo sencillo para actualizar precios tú mismo sin depender de nadie',
        'Cero comisiones por venta mensual ni intermediarios',
      ],
      idealFor: 'Restaurantes, reposterías, tiendas de ropa, artesanías, distribuidoras y emprendedores comerciales.',
      estimatedTime: '7 a 12 días hábiles',
      startingAtCop: 'Sin comisiones por pedido',
    },
  ];

  const handleServiceQuote = (serviceName: string) => {
    const text = `Hola Jhonatan, me interesa cotizar el servicio de "${serviceName}" para mi negocio. ¿Podemos conversar sobre tiempos y detalles?`;
    const url = buildWhatsAppUrl(text, currentPhone);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="servicios" className="py-20 md:py-28 bg-slate-900/50 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
            Servicios Especializados
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            Soluciones web enfocadas en resultados reales para tu negocio
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Sin código innecesario ni plantillas pesadas. Construyo herramientas comerciales que te ayudan a vender más y proyectar solidez frente a tu competencia.
          </p>
        </div>

        {/* Services Grid (Asymmetric & Distinctive) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {services.map((service, index) => {
            const isFeatured = index === 0;

            return (
              <div
                key={service.id}
                className={`relative flex flex-col justify-between rounded-2xl p-7 lg:p-8 transition-all ${
                  isFeatured
                    ? 'bg-slate-900 border-2 border-emerald-500/40 shadow-xl shadow-emerald-950/30'
                    : 'bg-slate-900/70 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {isFeatured && (
                  <div className="absolute -top-3.5 left-8 px-3 py-0.5 rounded-full bg-emerald-500 text-slate-950 text-[11px] font-bold uppercase tracking-wider">
                    Más Solicitado
                  </div>
                )}

                <div>
                  {/* Service Number & Icon Header */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-2xl font-bold text-slate-500">
                      {service.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-emerald-400">
                      {index === 0 && <Zap className="w-5 h-5" />}
                      {index === 1 && <Globe className="w-5 h-5" />}
                      {index === 2 && <ShoppingBag className="w-5 h-5" />}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-3 pt-4 border-t border-slate-800">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      ¿Qué incluye el proyecto?
                    </div>
                    <ul className="space-y-2.5">
                      {service.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300 leading-normal">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ideal for box */}
                  <div className="mt-6 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs">
                    <span className="text-slate-400 block font-medium mb-1">Ideal para:</span>
                    <span className="text-slate-200">{service.idealFor}</span>
                  </div>
                </div>

                {/* Footer of Card with Timeline & CTA */}
                <div className="mt-8 pt-6 border-t border-slate-800 space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      <span>Tiempo estimado:</span>
                    </span>
                    <span className="font-medium text-slate-200">{service.estimatedTime}</span>
                  </div>

                  <button
                    onClick={() => handleServiceQuote(service.title)}
                    className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold transition-all ${
                      isFeatured
                        ? 'bg-emerald-400 hover:bg-emerald-300 text-slate-950 shadow-md shadow-emerald-500/20'
                        : 'bg-slate-800 hover:bg-slate-700 text-white'
                    }`}
                  >
                    <span>Cotizar este servicio</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
