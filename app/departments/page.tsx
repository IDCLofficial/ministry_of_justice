import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DepartmentsHero from '@/components/DepartmentsHero';
import DepartmentsStructure from '@/components/DepartmentsStructure';
import CtaGradientBlock from '@/components/CtaGradientBlock';

export default function DepartmentsPage() {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Departments', href: '/departments' },
    { name: 'Projects', href: '/projects' },
    { name: 'News', href: '/news' },
    { name: 'Events', href: '/events' },
    { name: 'Media', href: '/media' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const hero = {
    title: 'Our Structure',
    subtitle: 'Each department plays a unique role in advancing justice, upholding the rule of law, and supporting good governance across Imo State.',
  } as const;

  const departments = [
    {
      name: 'Public Prosecution',
      title: 'Public Prosecution',
      imageSrc: '/prosecution.webp',
      body:
        'Prosecution of criminal cases in all courts and issuance of legal advice on criminal investigations.',
    },
    {
      name: 'Civil Litigation',
      title: 'Civil Litigation',
      imageSrc: '/lawyer.jpg',
      body:
        'Representation of the state in civil litigation and protection of government legal interests.',
    },
    {
      name: 'Legal Drafting/Parliamentary Counsel',
      title: 'Legal Drafting/Parliamentary Counsel',
      imageSrc: '/imo_judiciary.jpeg',
      body:
        'Drafting of executive bills and legislative instruments; legislative support to the House of Assembly.',
    },
    {
      name: 'Administration & Finance',
      title: 'Administration & Finance',
      imageSrc: '/finance.jpg',
      body:
        'Administration, finance, procurement, HR management and resource allocation for Ministry-wide effectiveness.',
    },
    {
      name: 'Planning & Research',
      title: 'Planning & Research',
      imageSrc: '/planning.jpeg',
      body:
        'Policy analysis, data systems, monitoring and evaluation, and coordination of law reporting.',
    },
    {
      name: "Citizens' Rights / ADR",
      title: "Citizens' Rights / ADR",
      imageSrc: '/ADHR.jpeg',
      body:
        'Human rights desk, public legal education and rights awareness, and Alternative Dispute Resolution (mediation, conciliation, arbitration).',
    },
  ] as const;

  const cta = {
    heading: 'Partner With Us To Uphold Justice In Imo',
    subtext:
      'Support our mission to strengthen the rule of law and ensure equitable access to justice for all citizens of Imo State.',
    cta: { text: 'Contact Us', href: '/contact' },
  } as const;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar ctaText="Get Started" ctaLink="/get-started" />

      <main className="flex-grow">
        <DepartmentsHero title={hero.title} subtitle={hero.subtitle} />
        <DepartmentsStructure departments={departments} />
        <CtaGradientBlock heading={cta.heading} subtext={cta.subtext} cta={cta.cta} />
      </main>

      <Footer />
    </div>
  );
}
