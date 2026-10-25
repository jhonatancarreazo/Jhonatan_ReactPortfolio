import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AboutSection } from './components/AboutSection';
import { ProcessSection } from './components/ProcessSection';
import { QuoteCalculator } from './components/QuoteCalculator';
import { FaqSection } from './components/FaqSection';
import { CtaFinalSection } from './components/CtaFinalSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { getStoredWhatsAppNumber } from './utils/whatsapp';

export default function App() {
  const [currentPhone, setCurrentPhone] = useState<string>('573000000000');

  useEffect(() => {
    setCurrentPhone(getStoredWhatsAppNumber());
  }, []);

  const handlePhoneChange = (newPhone: string) => {
    setCurrentPhone(newPhone);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500/30 selection:text-emerald-200">


      {/* Main Top Navigation */}
      <Navbar currentPhone={currentPhone} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero currentPhone={currentPhone} />
        <ServicesSection currentPhone={currentPhone} />
        <ProjectsSection />
        <AboutSection currentPhone={currentPhone} />
        <ProcessSection />
        <QuoteCalculator currentPhone={currentPhone} />
        <FaqSection currentPhone={currentPhone} />
        <CtaFinalSection currentPhone={currentPhone} />
      </main>

      {/* Footer */}
      <Footer currentPhone={currentPhone} />

      {/* Floating Instant WhatsApp Button */}
      <FloatingWhatsApp currentPhone={currentPhone} />
    </div>
  );
}
