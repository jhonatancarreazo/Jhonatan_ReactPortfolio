import React from 'react';
import { Mail, Globe, ArrowUp } from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';

interface FooterProps {
  currentPhone: string;
}

export const Footer: React.FC<FooterProps> = ({ currentPhone }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          {/* Brand */}
          <div className="space-y-1 text-center md:text-left">
            <a href="#" className="text-base font-bold text-white tracking-tight hover:text-emerald-400 transition-colors">
              Jhonatan Carreazo<span className="text-emerald-500">.dev</span>
            </a>
            <p className="text-slate-400">
              Desarrollo web comercial, rápido y enfocado en ventas desde Cartagena, Colombia.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400">
            <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
            <a href="#proyectos" className="hover:text-white transition-colors">Proyectos</a>
            <a href="#sobre-mi" className="hover:text-white transition-colors">Sobre mí</a>
            <a href="#proceso" className="hover:text-white transition-colors">Proceso</a>
            <a href="#faq" className="hover:text-white transition-colors">Preguntas</a>
            <a href="#cotizador" className="hover:text-white transition-colors">Cotizador</a>
          </div>

          {/* Back to top */}
          <div>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-slate-800"
            >
              <span>Subir</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-slate-400">
          <div>
            &copy; {currentYear} Jhonatan Carreazo. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Globe className="w-3.5 h-3.5 text-emerald-500" />
              <span>Cartagena de Indias, Colombia</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
