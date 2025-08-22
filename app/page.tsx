'use client';
import { Suspense, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSplit from '@/components/AboutSplit';
import DepartmentsSplit from '@/components/DepartmentsSplit';
import AboutCommissioner from '@/components/AboutCommissioner';
import LatestNews from '@/components/LatestNews';
import FeaturedPartners from '@/components/FeaturedPartners';
import CtaGradientBlock from '@/components/CtaGradientBlock';
import Footer from '@/components/Footer'
// Hero data
const heroData = {
  title: 'Imo State Ministry of Justice',
  subtitle:
    'To ensure access to justice, uphold the rule of law, and promote fairness and equity for all citizens of Imo State through effective legal services and good governance.',
  cta: {
    text: 'Learn More',
    link: '/about',
  },
  stats: [],
  bgImage: '/images/hero-education.jpg',
} as const;

// Featured Partners section
const featuredPartnersData = {
  title: 'Featured Partners',
  partners: [
    { name: 'Partner 1', logoText: 'Logo' },
    { name: 'Partner 2', logoText: 'Logo' },
    { name: 'Partner 3', logoText: 'Logo' },
    { name: 'Partner 4', logoText: 'Logo' },
    { name: 'Partner 5', logoText: 'Logo' },
    { name: 'Partner 6', logoText: 'Logo' },
  ],
} as const;

// CTA gradient block
const ctaGradientData = {
  heading: 'Partner With Us To Uphold Justice In Imo',
  subtext:
    'Support our mission to strengthen the rule of law and ensure equitable access to justice for all citizens of Imo State.',
  cta: { text: 'Contact Us', href: '#contact' },
} as const;

// About Commissioner section (split)
const aboutCommissionerData = {
  heading: "Message from the Commissioner",
  body:
    "Our commitment is to uphold the rule of law, protect citizens' rights, and ensure a safe and equitable society for all.",
  cta: { text: 'Learn More', href: '/team' },
  imageSrc: '/No-Image-Placeholder.svg',
} as const;

// Latest News section
const latestNewsData = {
  title: 'News & Press Releases',
  subtitle:
    'Policy updates, ministry initiatives, official statements, engagements and collaborations from the Ministry of Justice.',
  posts: [
    {
      id: 1,
      imageSrc: '/images/news-1.jpg',
      title: "Caregivers Are Essential Workers. It's Time We Recognize Them As Such",
      date: '20th July',
      tag: 'Latest',
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...',
      href: '#',
    },
    {
      id: 2,
      imageSrc: '/images/news-2.jpg',
      title: "Caregivers Are Essential Workers. It's Time We Recognize Them As Such",
      date: '20th July',
      tag: 'Latest',
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...',
      href: '#',
    },
    {
      id: 3,
      imageSrc: '/images/news-3.jpg',
      title: "Caregivers Are Essential Workers. It's Time We Recognize Them As Such",
      date: '20th July',
      tag: 'Latest',
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...',
      href: '#',
    },
  ],
} as const;

// About section (split) - from Figma
const aboutSplitData = {
  heading: 'About Us',
  body:
    'The Imo State Ministry of Justice ensures access to justice and promotes fairness for all citizens. We provide effective legal services, strengthen the rule of law, and support good governance across the state.',
  cta: { text: 'Learn More', href: '/about' },
  imageSrc: '/imo_judiciary.jpeg',
  hoverImageSrc: '/about_us_img-2.jpeg',
} as const;

// Departments section (split) - from Figma
const departmentsSplitData = {
  heading: 'Our Departments & Their\nFunctions',
  description:
    'Key departments advancing justice, fairness, and good governance across Imo State.',
  items: [
    {
      title: 'Public Prosecution',
      description:
        'Handles criminal prosecutions on behalf of the state and issues legal advice on investigations.',
    },
    {
      title: 'Civil Litigation',
      description:
        'Represents the state in civil matters and protects government legal interests in court.',
    },
    {
      title: 'Legal Drafting',
      description:
        'Drafts executive bills, legislative instruments, and provides legislative support.',
    },
    {
      title: 'Law Reporting',
      description:
        'Compiles and publishes law reports and maintains legal documentation and archives.',
    },
  ],
  cta: { text: 'See All Departments', href: '/departments' },
  imageSrc: '/image_from_justice_oputa_high_court.jpg',
} as const;

// Footer is now self-contained; no footerData needed

// Language options
const languages = [
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' },
  { code: 'es', name: 'Español' },
];
const currentLanguage = 'en';

export default function Home() {
  // Navbar data
  // Scroll-triggered animations: reveal on enter
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>('.reveal, .reveal-left, .reveal-right, .reveal-pop')
    );
    if (elements.length === 0) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        ctaText="Get Started" 
        ctaLink="/get-started"
        languages={languages}
        currentLanguage={currentLanguage}
      />
      
      <main className="flex-grow">
        <div className="reveal animate-delay-100">
          <Hero 
            title={heroData.title}
            subtitle={heroData.subtitle}
            cta={heroData.cta}
            stats={heroData.stats}
            bgImage={heroData.bgImage}
          />
        </div>

        <div className="reveal animate-delay-200">
          <AboutSplit
            heading={aboutSplitData.heading}
            body={aboutSplitData.body}
            cta={aboutSplitData.cta}
            imageSrc={aboutSplitData.imageSrc}
            hoverImageSrc={aboutSplitData.hoverImageSrc}
          />
        </div>

        <div className="reveal animate-delay-300">
          <DepartmentsSplit
            heading={departmentsSplitData.heading}
            description={departmentsSplitData.description}
            items={departmentsSplitData.items}
            cta={departmentsSplitData.cta}
            imageSrc={departmentsSplitData.imageSrc}
          />
        </div>
        
        <div className="reveal animate-delay-400">
          <AboutCommissioner
            heading={aboutCommissionerData.heading}
            body={aboutCommissionerData.body}
            cta={aboutCommissionerData.cta}
            imageSrc={aboutCommissionerData.imageSrc}
          />
        </div>

        <div className="reveal animate-delay-500">
          <Suspense fallback={<div>Loading...</div>}>
            <LatestNews
              title={latestNewsData.title}
              subtitle={latestNewsData.subtitle}
            />
          </Suspense>
        </div>
        
        <div className="reveal animate-delay-600">
          <FeaturedPartners
            title={featuredPartnersData.title}
            partners={featuredPartnersData.partners}
          />
        </div>

        <div className="reveal animate-delay-800">
          <CtaGradientBlock
            heading={ctaGradientData.heading}
            subtext={ctaGradientData.subtext}
            cta={ctaGradientData.cta}
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
