import React, { useState, useEffect } from 'react';
import { Phone, Check, Settings, X, ExternalLink } from 'lucide-react';
import { getStoredWhatsAppNumber, saveStoredWhatsAppNumber, DEFAULT_WHATSAPP_NUMBER } from '../utils/whatsapp';

interface WhatsAppConfigBarProps {
  onPhoneChange: (newPhone: string) => void;
}

export const WhatsAppConfigBar: React.FC<WhatsAppConfigBarProps> = ({ onPhoneChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    const current = getStoredWhatsAppNumber();
    setPhoneNumber(current);
  }, []);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanNumber = phoneNumber.replace(/\D/g, '');
    if (cleanNumber.length >= 10) {
      saveStoredWhatsAppNumber(cleanNumber);
      onPhoneChange(cleanNumber);
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 2500);
    }
  };

  const isDefault = phoneNumber === DEFAULT_WHATSAPP_NUMBER;

  return (
    <div className="bg-slate-900 border-b border-slate-800 text-xs text-slate-300 py-1.5 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
          <span className="font-medium text-slate-200 shrink-0">Configuración de Contacto:</span>
          <span className="truncate text-slate-400">
            {isDefault ? (
              <span>Actualmente usando número de muestra (<code className="text-amber-400 font-mono">573000000000</code>). Configura tu número real para probar la conversión.</span>
            ) : (
              <span>Número activo para botones de WhatsApp: <code className="text-emerald-400 font-mono">+{phoneNumber}</code></span>
            )}
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded transition-colors"
          >
            <Settings className="w-3.5 h-3.5 text-slate-400" />
            <span>{isOpen ? 'Ocultar ajuste' : 'Cambiar número'}</span>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mt-3 pt-3 border-t border-slate-800/80 max-w-7xl mx-auto pb-1">
          <form onSubmit={handleSave} className="flex flex-wrap items-center gap-3">
            <label className="text-slate-300 font-medium flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              Tu WhatsApp con código de país (ej. 573001234567 para Colombia):
            </label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="573001234567"
              className="bg-slate-950 border border-slate-700 rounded px-2.5 py-1 text-slate-100 font-mono text-xs focus:outline-none focus:border-emerald-500 w-44"
            />
            <button
              type="submit"
              className="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded transition-colors flex items-center gap-1"
            >
              {savedSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>¡Guardado!</span>
                </>
              ) : (
                <span>Guardar y actualizar botones</span>
              )}
            </button>
            <span className="text-slate-500 text-[11px]">
              * Se guarda en tu navegador para que pruebes los enlaces al instante antes de publicar en tu servidor.
            </span>
          </form>
        </div>
      )}
    </div>
  );
};
