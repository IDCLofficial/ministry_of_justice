'use client';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutHero from '@/components/AboutHero';
import AboutIntro from '@/components/AboutIntro';
import MissionVision from '@/components/MissionVision';
import ResponsibilitiesChips from '@/components/ResponsibilitiesChips';
import StructureSection from '@/components/StructureSection';
import CtaGradientBlock from '@/components/CtaGradientBlock';
import { FiMapPin, FiMail, FiPhone, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
import TeamGrid from '@/components/TeamGrid';

export default function AboutPage() {
  // Navbar
  

  // Hero
  const aboutHero = {
    title: 'About Us',
    subtitle: 'Learn more about the Imo State Ministry of Justice',
    bgImage: '/about_hero.jpg',
  } as const;

  // Intro + stats
  const aboutIntro = {
    heading: 'About The Ministry',
    body:
      'The Imo State Ministry of Justice ensures access to justice, upholds the rule of law, and promotes fairness and equity for all citizens through effective legal services and good governance.',
    imageSrc: '/about-us.jpg',
    stats: [
      { value: '6', label: 'Departments' },
      { value: '5', label: 'Agencies' },
      { value: '7+', label: 'Core Legal Services' },
      { value: '5+', label: 'Access-to-Justice Programs' },
    ] as const,
  } as const;

  // Mission & Vision
  const missionVision = {
    missionTitle: 'Our Mission',
    missionText:
      'To ensure access to justice, uphold the rule of law, and promote fairness and equity for all citizens of Imo State through effective legal services and good governance.',
    missionImage: '/attorneys.jpeg',
    visionTitle: 'Our Vision',
    visionText:
      'To be a leading Ministry recognized for its commitment to justice, fairness, and the rule of law, ensuring a safe and equitable society for all citizens of Imo State.',
    visionImage: '/attorneys2.jpeg',
  } as const;

  // Responsibilities (chips)
  const responsibilities = {
    title: 'Our Core Responsibilities',
    items: [
      'Public Prosecution',
      'Civil Litigation',
      'Legal Drafting',
      'Contracts & MoUs',
      'Law Review & Reform',
      'Advisory to MDAs',
      'Access to Justice',
      'ADR (Mediation/Arbitration)',
    ] as const,
  } as const;

  // Structure (dark section)
  const structure = {
    heading: 'Our Structure',
    subtext:
      'Our Ministry operates through specialized departments and agencies advancing justice, fairness, and good governance.',
    imageSrc: '/structure.jpg',
    items: [
      { title: 'Public Prosecution', body: 'Prosecution of criminal cases and issuance of legal advice on investigations.' },
      { title: 'Civil Litigation', body: 'Representation of the state in civil matters across all courts.' },
      { title: 'Legal Drafting/Parliamentary Counsel', body: 'Drafting of executive bills and legislative instruments.' },
      { title: 'Administration & Finance', body: 'Administration, finance, and resource management for the Ministry.' },
      { title: 'Planning & Research', body: 'Policy analysis, data systems, law reporting coordination, and M&E.' },
      { title: "Citizens' Rights / ADR", body: 'Human rights desk, public legal education, and alternative dispute resolution.' },
    ] as const,
  } as const;

  // CTA gradient
  const ctaGradient = {
    heading: 'Partner With Us To Uphold Justice In Imo',
    subtext:
      'Support our mission to strengthen the rule of law and ensure equitable access to justice for all citizens of Imo State.',
    cta: { text: 'Contact Us', href: '/contact' },
  } as const;

  const teamData = {
    title: 'Our Team',
    members: [
      { id: 1, name: 'Not available', role: 'Commissioner', imageSrc: '/No-Image-Placeholder.svg' },
      { id: 2, name: 'Permanent Secretary', role: 'Position', imageSrc: '/permSec.jpg' },
    ] as const,
  } as const;

  // Scroll-triggered animations for About page
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
      />

      <main className="flex-grow">
        <div className="reveal animate-delay-100">
          <AboutHero title={aboutHero.title} subtitle={aboutHero.subtitle} bgImage={aboutHero.bgImage} />
        </div>
        <div className="reveal-pop animate-delay-200">
          <AboutIntro heading={aboutIntro.heading} body={aboutIntro.body} imageSrc={aboutIntro.imageSrc} stats={aboutIntro.stats} />
        </div>
        <div className="reveal animate-delay-300">
          <MissionVision {...missionVision} />
        </div>
        <div className="reveal-pop animate-delay-300">
          <TeamGrid title={teamData.title} members={teamData.members} />
        </div>
        <div className="reveal-pop animate-delay-400">
          <ResponsibilitiesChips title={responsibilities.title} items={responsibilities.items} />
        </div>
        <div className="reveal animate-delay-500">
          <StructureSection {...structure} />
        </div>
        <div className="reveal animate-delay-700">
          <CtaGradientBlock heading={ctaGradient.heading} subtext={ctaGradient.subtext} cta={ctaGradient.cta} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
