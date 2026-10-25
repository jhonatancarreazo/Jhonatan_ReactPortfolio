import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FaqItem } from '../types';
import { buildWhatsAppUrl } from '../utils/whatsapp';

interface FaqSectionProps {
  currentPhone: string;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ currentPhone }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'precios' | 'tiempos' | 'hosting' | 'pagos'>('all');

  const faqs: FaqItem[] = [
    {
      id: 'faq-1',
      category: 'precios',
      question: '¿Cuánto cuesta exactamente una página web y qué incluye el precio?',
      answer:
        'Cada proyecto se cotiza según sus necesidades puntuales. Para darte una idea clara y honesta: una Landing Page comercial de una sola página inicia desde $600.000 COP, y un sitio corporativo con múltiples secciones o catálogo para WhatsApp suele ubicarse entre $1.100.000 y $1.800.000 COP. No cobro mensualidades ocultas por el diseño: una vez te lo entrego, es tuyo.',
    },
    {
      id: 'faq-2',
      category: 'tiempos',
      question: '¿Cuánto tardas en entregar la página lista para publicar?',
      answer:
        'Para una Landing Page comercial, el tiempo promedio es de 5 a 8 días hábiles. Para un sitio web corporativo o catálogo con varios productos, entre 10 y 14 días hábiles. Este tiempo comienza a contar desde el momento en que me entregas la información inicial (fotos, textos básicos y logotipo). Cumplo rigurosamente las fechas acordadas.',
    },
    {
      id: 'faq-3',
      category: 'hosting',
      question: '¿Qué pasa con el dominio (.com o .co) y el alojamiento web (hosting)?',
      answer:
        'A diferencia de algunas agencias que retienen tu dominio para obligarte a pagar mensualidades, yo te asesoro gratuitamente paso a paso para que compres tu propio dominio en plataformas oficiales (ej. Namecheap, Hostinger o GoDaddy) a tu nombre y con tu tarjeta. Así tú eres el único y legítimo dueño de tu marca en internet para siempre.',
    },
    {
      id: 'faq-4',
      category: 'pagos',
      question: '¿Cómo es el esquema de pago y qué medios recibes en Colombia?',
      answer:
        'Trabajamos con el esquema más seguro y transparente: 50% de anticipo para iniciar el desarrollo y 50% restante únicamente cuando el sitio esté completamente terminado, probado en celulares y a tu entera satisfacción. Recibo transferencias Bancolombia, Nequi, Daviplata o PSE.',
    },
    {
      id: 'faq-5',
      category: 'hosting',
      question: '¿Necesito saber de programación para cambiar textos o números de WhatsApp?',
      answer:
        'No. Estructuro el sitio de forma que los números de WhatsApp, enlaces a redes sociales y textos clave sean sencillos de actualizar. Además, al momento de la entrega realizamos una sesión explicativa de 30 minutos y te entrego una guía rápida para que tengas total autonomía.',
    },
    {
      id: 'faq-6',
      category: 'precios',
      question: '¿Qué pasa si después necesito hacer cambios o actualizaciones?',
      answer:
        'Todos mis proyectos incluyen 30 días de garantía y soporte técnico gratuito posterior al lanzamiento para cualquier ajuste menor o duda. Para cambios posteriores en el futuro, puedes contratar horas de soporte puntual sin necesidad de pagar contratos mensuales forzosos.',
    },
  ];

  const filteredFaqs = faqs.filter((f) => {
    if (selectedCategory === 'all') return true;
    return f.category === selectedCategory;
  });

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const handleAskOther = () => {
    const url = buildWhatsAppUrl(
      'Hola Jhonatan, tengo una pregunta sobre el desarrollo de páginas web que no encontré en la sección de preguntas frecuentes.',
      currentPhone
    );
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-slate-950 border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
            Claridad Total
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Respuestas claras y directas sobre precios, tiempos de entrega, propiedad del sitio y formas de pago.
          </p>
        </div>

        {/* Filter categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'Todas las preguntas' },
            { id: 'precios', label: 'Precios & Cotización' },
            { id: 'tiempos', label: 'Tiempos de Entrega' },
            { id: 'hosting', label: 'Dominio & Hosting' },
            { id: 'pagos', label: 'Formas de Pago' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-slate-800 text-white border border-slate-700'
                  : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-slate-900 transition-colors"
                >
                  <span className="text-sm sm:text-base font-semibold text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-emerald-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Have another question? */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
          <p className="text-sm text-slate-300 mb-3">
            ¿Tienes otra duda o un caso especial que quieras consultar?
          </p>
          <button
            onClick={handleAskOther}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>Preguntarle directamente a Jhonatan por WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
};
