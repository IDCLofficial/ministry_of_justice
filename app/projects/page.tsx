import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ReactNode } from 'react';
import CtaGradientBlock from '@/components/CtaGradientBlock';
import { contentfulService } from '@/lib/contentful';
import getProjects from './projects';
import { Project } from '@/lib/types';
import { ProjectsSection } from './ProjectsSection';

type Stat = { value: string; label: string };
const stats: Stat[] = [
  { value: '6', label: 'Core Departments' },
  { value: '7', label: 'Legal Services' },
  { value: '5', label: 'Access to Justice Programs' },
  { value: '2', label: 'Law Reporting Functions' },
];

// const projects: Project[] = [
//   {
//     id: 'p1',
//     title: 'Committee on Land Disputes',
//     status: 'Planned',
//     description:
//       'Resolving title reviews and compensations to ensure fairness and lawful settlements.',
//     image: '/images/projects/justice-1.jpg',
//     location: 'Owerri, Imo State',
//     category: 'Justice Initiative',
//     budget: 'N/A',
//     beneficiaries: 'Citizens of Imo State',
//     partners: 'MDAs & Stakeholders',
//   },
//   {
//     id: 'p2',
//     title: 'Justice Sector Technological Transformation',
//     status: 'Planned',
//     description:
//       'Digitizing justice services to enhance efficiency, transparency, and access.',
//     image: '/images/projects/justice-2.jpg',
//     location: 'Owerri, Imo State',
//     category: 'e-Justice',
//     budget: 'N/A',
//     beneficiaries: 'Citizens of Imo State',
//     partners: 'MDAs & Stakeholders',
//   },
//   {
//     id: 'p3',
//     title: 'Strategic Laws & Regulations',
//     status: 'Planned',
//     description:
//       'Focus on Electricity Law 2023 and other regulatory frameworks supporting development.',
//     image: '/images/projects/justice-3.jpg',
//     location: 'Owerri, Imo State',
//     category: 'Law & Policy',
//     budget: 'N/A',
//     beneficiaries: 'Citizens of Imo State',
//     partners: 'House of Assembly & Stakeholders',
//   },
//   {
//     id: 'p4',
//     title: 'Speedy & Efficient Judicial System',
//     status: 'Planned',
//     description:
//       'Enhancing dispute resolution and reducing case backlogs through coordinated reforms.',
//     image: '/images/projects/justice-4.jpg',
//     location: 'Owerri, Imo State',
//     category: 'Judicial Reform',
//     budget: 'N/A',
//     beneficiaries: 'Citizens of Imo State',
//     partners: 'Judiciary & Stakeholders',
//   },
// ];
const currentLanguage = 'en';
const cta = {
  heading: 'Partner With Us To Uphold Justice In Imo',
  subtext:
    'Support our mission to strengthen the rule of law and ensure equitable access to justice for all citizens of Imo State.',
  cta: { text: 'Contact Us', href: '#contact' },
} as const;

const languages = [
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' },
  { code: 'es', name: 'Español' },
];


function HeroSection({ title, subtitle, children }: { title: string; subtitle: string; children?: ReactNode }) {
  return (
    <section className="bg-[#0B1C34] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
          {title}
        </h1>
        <p className="mt-4 text-sm sm:text-base text-slate-200 max-w-3xl">
          {subtitle}
        </p>
      </div>
      {children}
    </section>
  );
}

function StatsSection({ stats }: { stats: Stat[] }) {
  return (
    <div className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-[22px] sm:text-2xl font-semibold text-slate-900">{s.value}</div>
            <div className="mt-1 text-xs sm:text-sm text-slate-500">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default async function ProjectsPage() {
  // Navbar
  const projects = await getProjects();


  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        ctaText="Get Started"
        ctaLink="/get-started"
        languages={languages}
        currentLanguage={currentLanguage}
      />
      <main className="flex-grow">
        <HeroSection
          title="Justice Programs & Strategic Initiatives"
          subtitle="Our initiatives focus on access to justice, legal reform, digitization of services, and efficient dispute resolution across Imo State."
        >
          <StatsSection stats={stats} />
        </HeroSection>
        <ProjectsSection projects={projects as unknown as Project[]} />
      </main>
      <CtaGradientBlock 
        heading={cta.heading} 
        subtext={cta.subtext} 
        cta={cta.cta} 
      />
      <Footer />
    </div>
  );
}
