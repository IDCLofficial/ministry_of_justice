import React from 'react';
import { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CtaGradientBlock from '@/components/CtaGradientBlock';
import NewsHero from './NewsHero';
import NewsClient from './NewsClient';  
import { getCategories} from './news';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' },
  { code: 'es', name: 'Español' },
];
const currentLanguage = 'en';


// const allNews: NewsItem[] = [
//   // ... your existing news items

//   {
//     id: 'n6',
//     title: 'Governor Uzodimma Sacks Attorney General and Commissioner for Justice',
//     date: 'May 26, 2025',
//     tag: 'Leadership Change',
//     image: '/images/news/news-6.jpg',
//     excerpt:
//       'Governor Hope Uzodimma approved the immediate removal of Attorney-General Barr. Cyprian C.O.C. Akaolisa, directing him to hand over all government property to the Solicitor-General and Permanent Secretary of the Ministry of Justice.' 
//   },
//   {
//     id: 'n7',
//     title: 'Community Justice Centre Pilot Launched in Owerri',
//     date: 'March 27, 2025',
//     tag: 'Access to Justice',
//     image: '/images/news/news-7.jpg',
//     excerpt:
//       'Imo State opened its first Community Justice Centre in Owerri—a pilot project designed to bring accessible, people-centred justice services closer to communities, especially for domestic, family, and land disputes.'
//   },
//   {
//     id: 'n8',
//     title: 'NJC Directs Reversal of Acting Chief Judge Appointment',
//     date: 'May 1, 2025',
//     tag: 'Judicial Oversight',
//     image: '/images/news/news-8.jpg',
//     excerpt:
//       'The National Judicial Council (NJC) queried and instructed Governor Uzodimma to reverse the appointment of Justice Theophilus Nnamdi Nzeukwu as Acting Chief Judge, citing constitutional breach in skipping senior judges.'
//   },
//   {
//     id: 'n9',
//     title: 'NJC Compulsorily Retires 10 Imo Judges Over Age Falsification',
//     date: 'June 26, 2025',
//     tag: 'Judicial Reform',
//     image: '/images/news/news-9.jpg',
//     excerpt:
//       'The NJC approved the compulsory retirement of 10 judges in Imo State for falsifying their ages, including Justice Nzeukwu for unlawfully assuming the Acting Chief Judge position in violation of constitutional protocols.'
//   },
//   {
//     id: 'n10',
//     title: 'High Court Reaffirms Traditional Ruler Amid Judiciary Dispute',
//     date: 'July 24, 2025',
//     tag: 'Judicial Rulings',
//     image: '/images/news/news-10.jpg',
//     excerpt:
//       'An Owerri High Court reaffirmed Chief Gabriel C. Nwosu as the valid traditional ruler of Obiangwu Autonomous Community, dismissing a longstanding dispute and reinforcing a 2022 judgment.'
//   },
// ];


const cta = {
  heading: 'Partner With Us To Uphold Justice In Imo',
  subtext:
    'To ensure access to justice, uphold the rule of law, and promote fairness and equity for all citizens of Imo State through effective legal services and good governance.',
  cta: { text: 'Contact Us', href: '/contact' },
} as const;

export default async function NewsPage() {
  let categories = await getCategories();
  categories = [{sys: {id: '', type: 'Category', createdAt: '', updatedAt: ''}, fields: {category_name: 'All'}}, ...categories] 
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        ctaText="Get Started"
        ctaLink="/get-started"
        languages={languages}
        currentLanguage={currentLanguage}
      />

      <main className="flex-grow">
        <NewsHero title={"Justice News & Press Releases"} />
        <Suspense fallback={<div>Loading...</div>}>
          <NewsClient categories={categories} />
        </Suspense>
      </main>

      <CtaGradientBlock heading={cta.heading} subtext={cta.subtext} cta={cta.cta} />
      <Footer />
    </div>
  );
}
