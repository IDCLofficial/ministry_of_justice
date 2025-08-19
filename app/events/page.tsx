import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EventsHero from './EventsHero';
import EventsList from './EventsList';
import {Events} from '@/lib/types';
import getEvents from './events';
import CtaGradientBlock from '@/components/CtaGradientBlock';

export default async function EventsPage() {
  const events = await getEvents(); 

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
    { code: 'es', name: 'Español' },
  ];
  const currentLanguage = 'en';

  const cta = {
    heading: 'Partner With Us To Uphold Justice In Imo',
    subtext:
      'Support our mission to strengthen the rule of law and ensure equitable access to justice for all citizens of Imo State.',
    cta: { text: 'Contact Us', href: '/contact' },
  } as const;


  // const items: EventItem[] = [
  //   // ... your existing events
  
  //   {
  //     id: 'e5',
  //     date: 'APRIL 3, 2025',
  //     location: 'Government House, Owerri / Ministry of Justice, Imo State',
  //     title: 'Swearing-in of Acting Chief Judge',
  //     description:
  //       'Justice Theophilus Nnamdi Nzeukwu was sworn in as Acting Chief Judge of Imo State, filling a five-month vacancy in the judiciary’s leadership.',
  //     image: '/images/events/event-5.jpg',
  //     href: '#',
  //   },
  //   {
  //     id: 'e6',
  //     date: 'APRIL 30, 2025',
  //     location: 'Imo State Ministry of Justice / High Court Complex, Owerri',
  //     title: 'NJC Orders Reversal of Acting Chief Judge Appointment',
  //     description:
  //       'The National Judicial Council directed the Governor to reverse Justice Nzeukwu’s appointment, citing constitutional provisions and issuing a 7-day ultimatum.',
  //     image: '/images/events/event-6.jpg',
  //     href: '#',
  //   },
  //   {
  //     id: 'e7',
  //     date: 'DECEMBER 2023',
  //     location: 'Ministry of Justice, Imo State',
  //     title: 'Workshop on Administration of Criminal Justice Law',
  //     description:
  //       'In collaboration with the American Attorney General Alliance-Africa (AGA-Africa), the Ministry organized a workshop to facilitate effective implementation of the Administration of Criminal Justice Law.',
  //     image: '/images/events/event-7.jpg',
  //     href: '#',
  //   },
  //   {
  //     id: 'e8',
  //     date: 'OCTOBER 2024',
  //     location: 'Ministry of Justice, Imo State',
  //     title: 'Workshop on Domestication of Administration of Criminal Justice Act',
  //     description:
  //       'The Ministry, with support from the Federal Ministry of Justice, held a workshop to advance domestication of key sections of the Administration of Criminal Justice Law 2020.',
  //     image: '/images/events/event-8.jpg',
  //     href: '#',
  //   },
  // ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        ctaText="Get Started"
        ctaLink="/get-started"
        languages={languages}
        currentLanguage={currentLanguage}
      />

      <main className="flex-grow bg-slate-50">
        <EventsHero />
        <EventsList items={events as unknown as Events[]} />
      </main>
      <CtaGradientBlock heading={cta.heading} subtext={cta.subtext} cta={cta.cta} />
      <Footer />
    </div>
  );
}
