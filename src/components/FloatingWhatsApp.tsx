import React from 'react';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';

interface FloatingWhatsAppProps {
  currentPhone: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ currentPhone }) => {
  const handleClick = () => {
    const url = buildWhatsAppUrl(
      'Hola Jhonatan, estoy navegando en tu sitio web y me gustaría hacerte una consulta rápida.',
      currentPhone
    );
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 group">
      <button
        onClick={handleClick}
        aria-label="Contactar a Jhonatan Carreazo por WhatsApp"
        className="relative flex items-center gap-2.5 p-3.5 sm:px-4 sm:py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all hover:scale-105 active:scale-95"
      >
        <MessageCircle className="w-6 h-6 fill-slate-950" />
        <span className="hidden sm:inline text-xs font-semibold tracking-tight">
          ¿Hablamos por WhatsApp?
        </span>
      </button>
    </div>
  );
};
