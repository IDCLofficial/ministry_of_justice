import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CtaGradientBlock from '@/components/CtaGradientBlock';
import NewsDetailHero from './NewsDetailHero';
import NewsBody from './NewsBody';
import { contentfulService } from '@/lib/contentful';

export default async function NewsSlugPage({ params }: { params: Promise<{ slug: string }> }) {

  const detail = await contentfulService.getBlogById((await params).slug);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
    { code: 'es', name: 'Español' },
  ];
  const currentLanguage = 'en';

  // Mock detail. In real use, fetch by `params.slug`
  const cta = {
    heading: 'Partner With Us To Deliver Decent Housing In Imo',
    subtext:
      'Support our mission to provide affordable, inclusive, and sustainable housing for all residents of Imo State.',
    cta: { text: 'Contact Us', href: '/contact' },
  } as const;


  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        ctaText="Get Started"
        ctaLink="/get-started"
        languages={languages}
        currentLanguage={currentLanguage}
      />

      <main className="flex-grow">
        {detail ? (
          <>
            <NewsDetailHero title={`${detail.fields.title}`} date={`${detail.sys.createdAt}`} tag={`${detail.fields.category.fields.category_name}`} image={`https:${detail.fields.featuredImage?.fields.file.url}`} />
            <NewsBody post={detail} />
          </>
        ) : (
          <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <p>News post not found.</p>
          </section>
        )}
      </main>

      <CtaGradientBlock heading={cta.heading} subtext={cta.subtext} cta={cta.cta} />
      <Footer />
    </div>
  );
}

