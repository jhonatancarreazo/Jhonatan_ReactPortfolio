/**
 * Helper to construct direct WhatsApp links with formatted messages
 */

export const DEFAULT_WHATSAPP_NUMBER = '573015856174'; // Placeholder to be replaced by Jhonatan

export function getStoredWhatsAppNumber(): string {
  if (typeof window === 'undefined') return DEFAULT_WHATSAPP_NUMBER;
  const stored = localStorage.getItem('jc_wa_phone');
  return stored && stored.trim().length > 7 ? stored.trim() : DEFAULT_WHATSAPP_NUMBER;
}

export function saveStoredWhatsAppNumber(num: string): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('jc_wa_phone', num.replace(/\D/g, ''));
}

export function buildWhatsAppUrl(message: string, customPhone?: string): string {
  const phone = (customPhone && customPhone.trim().length > 6) ? customPhone.trim() : getStoredWhatsAppNumber();
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedText}`;
}
