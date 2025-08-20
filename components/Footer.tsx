import Link from 'next/link';
import Image from 'next/image';
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

interface FooterLink {
  name: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface ContactInfo {
  icon: React.ReactNode;
  text: string;
}

// No external props; Footer owns its content

const ContactItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-start space-x-3">
    <div className="text-white/70 mt-1">{icon}</div>
    <p className="text-white/70">{text}</p>
  </div>
);

export default function Footer() {
  // Internal content (can be swapped later to fetch from CMS)
  const logo = '/logo.png';
  const ministryName = 'Ministry of Justice'
  const description = 'To ensure access to justice, uphold the rule of law, and promote fairness and equity for all citizens of Imo State through effective legal services and good governance.';
  const contactInfo: ContactInfo[] = [
    { icon: <FiMapPin className="h-5 w-5" />, text: 'Block Ten, Imo State Secretariat, Port Harcourt Road, PMB 1145, Owerri, Imo State, Nigeria' },
    { icon: <FiMail className="h-5 w-5" />, text: 'contact@moj.jg.gov.ng' },
    { icon: <FiPhone className="h-5 w-5" />, text: '+234 704 725 4728 / +234 803 574 4810 (SMS/WhatsApp: +234 808 446 1826)' },
  ];
  const columns: FooterColumn[] = [
    { title: 'About', links: [
      { name: 'About Us', href: '/about' },
    ]},
    { title: 'Quick Links', links: [
      { name: 'Home', href: '/' },
      { name: 'News', href: '/news' },
      { name: 'Departments', href: '/departments' },
      { name: 'Events', href: '/events' },
    ]},
    { title: 'Legal', links: [
      { name: 'Privacy Policy', href: '/#' },
      { name: 'Terms of Service', href: '/#' },
      { name: 'Cookie Policy', href: '/#' },
      { name: 'GDPR', href: '/#' },
    ]},
  ];
  const socialLinks = [
    { name: 'Facebook', href: '#', icon: <FiFacebook className="h-5 w-5" /> },
    { name: 'Twitter', href: '#', icon: <FiTwitter className="h-5 w-5" /> },
    { name: 'LinkedIn', href: '#', icon: <FiLinkedin className="h-5 w-5" /> },
  ];
  const copyright = '© 2025 Imo State Ministry of Justice. All rights reserved';
  return (
    <footer className="bg-[#06163A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Image
                src={logo}
                alt="Company Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
              <span className='text-white/70'>Imo state {ministryName}</span>
            </div>
            <p className="text-white/70">
              {description}
            </p>
            
            <div className="space-y-4 mt-6">
              {contactInfo.map((info, index) => (
                <ContactItem key={index} icon={info.icon} text={info.text} />
              ))}
            </div>
            
            <div className="flex space-x-4 pt-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.href}
                  className="text-white/70 hover:text-white transition-colors duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Links Columns */}
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-lg font-semibold mb-6">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10 mt-16 pt-8">
          <p className="text-center text-white/60 text-sm">
            {copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
