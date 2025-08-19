import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CtaGradientBlock from '@/components/CtaGradientBlock';
import EventDetailHero from './EventDetailHero';
import EventDetailBody from './EventDetailBody';
import SpeakersSection from './SpeakersSection';
import { contentfulService } from '@/lib/contentful';
import { notFound } from 'next/navigation';
import { Events } from '@/lib/types';

const cta = {
  heading: 'Partner With Us To Uphold Justice In Imo',
  subtext:
    'Support our mission to strengthen the rule of law and ensure equitable access to justice for all citizens of Imo State.',
  cta: { text: 'Contact Us', href: '/contact' },
} as const;


const languages = [
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' },
  { code: 'es', name: 'Español' },
];
const currentLanguage = 'en';

export default async function EventSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  // Fetch the event by sys.id (slug in URL)
  const event = await contentfulService.getEventById((await params).slug);
  if (!event) return notFound();

  // Prepare hero image
  const image = `https:${event.fields.bannerImage?.fields.file.url}`

  // Compute simple countdown to event date (if in the future)
  const now = new Date();
  const target = new Date(event.fields.eventDate as any);
  const diffMs = isNaN(target.getTime()) ? 0 : Math.max(0, target.getTime() - now.getTime());
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diffMs / (1000 * 60)) % 60);
  const seconds = Math.floor((diffMs / 1000) % 60);

  const countdown = { days, hours, minutes, seconds };

  // Build speakers from Contentful event fields
  const speakers = [
    event.fields.firstSpeaker
      ? {
          id: 's1',
          name: event.fields.firstSpeaker,
          image: `https:${event.fields.firstSpeakerPicture?.fields.file.url || ''}`,
        }
      : null,
    event.fields.secondSpeaker
      ? {
          id: 's2',
          name: event.fields.secondSpeaker,
          image: `https:${event.fields.secondSpeakerPicture?.fields.file.url || ''}`,
        }
      : null,
  ].filter(Boolean) as { id: string; name: string; image: string }[];

  

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        ctaText="Get Started"
        ctaLink="/get-started"
        languages={languages}
        currentLanguage={currentLanguage}
      />

      <main className="flex-grow bg-white">
        <EventDetailHero image={image} countdown={countdown} />
        <EventDetailBody event={event as Events} />
        {speakers.length > 0 && <SpeakersSection speakers={speakers} />}
      </main>

      <CtaGradientBlock heading={cta.heading} subtext={cta.subtext} cta={cta.cta} />
      <Footer />
    </div>
  );
}
