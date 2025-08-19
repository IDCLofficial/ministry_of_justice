import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactHero from './ContactHero';
import ContactSection from './ContactSection';

export default function ContactPage() {
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
    { code: 'es', name: 'Español' },
  ];
  const currentLanguage = 'en';

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        ctaText="Get Started"
        ctaLink="/get-started"
        languages={languages}
        currentLanguage={currentLanguage}
      />

      <main className="flex-grow">
        <ContactHero />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
