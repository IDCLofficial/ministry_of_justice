import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CtaGradientBlock from '@/components/CtaGradientBlock';
import MediaHero from './MediaHero';
import MediaGallery from './MediaGallery';
import getMedia from './media';
import { Media } from '@/lib/types';


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

export default async function MediaPage() {

  const media = await getMedia();

  // const items = [
  //   {
  //     id: 'm1',
  //     image: '<insert image link for Image 1 here>',
  //     caption: 'Opening of the Community Justice Centre in Owerri'
  //   },
  //   {
  //     id: 'm2',
  //     image: '<insert image link for Image 2 here>',
  //     caption: 'Governor Uzodimma swears in Justice Nzeukwu as Acting Chief Judge'
  //   },
  //   {
  //     id: 'm3',
  //     image: '<insert image link for Image 3 here>',
  //     caption: 'Swearing-in of the Chief Judge, President CCA, and other justices'
  //   },
  //   {
  //     id: 'm4',
  //     image: '<insert image link for Image 4 here>',
  //     caption: 'Inauguration ceremony of the Small Claims Court, Owerri'
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

      <main className="flex-grow">
        <MediaHero />
        <MediaGallery items={media as unknown as Media[]} />
      </main>

      <CtaGradientBlock heading={cta.heading} subtext={cta.subtext} cta={cta.cta} />
      <Footer />
    </div>
  );
}
