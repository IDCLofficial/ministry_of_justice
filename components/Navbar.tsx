'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FiMenu, FiX, FiChevronDown, FiGlobe } from 'react-icons/fi';
import { usePathname } from 'next/navigation';

interface NavbarProps {
  ctaText: string;
  ctaLink: string;
  languages?: { code: string; name: string }[];
  currentLanguage?: string;
}

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Departments', href: '/departments' },
  { name: 'Projects', href: '/projects' },
  { name: 'News', href: '/news' },
  { name: 'Events', href: '/events' },
  { name: 'Media', href: '/media' },
  { name: 'Contact Us', href: '/contact' },
];

export default function Navbar({ctaText, ctaLink}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="text-gray-900">
      {/* Thin purple top border */}
      <div className="h-1 w-full bg-white " />
      <div className="border-b border-gray-200">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src={'/logo.png'}
                  alt="Logo"
                  width={140}
                  height={50}
                  className="h-[50px] w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation - centered */}
            <div className="hidden md:flex items-center justify-center">
              <div className="flex items-center space-x-2">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={
                        `px-4 py-2 text-sm font-medium rounded-full transition-colors ` +
                        (isActive
                          ? 'bg-indigo-50 text-indigo-700'
                          : 'text-gray-700 hover:text-indigo-700 hover:bg-gray-50')
                      }
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Right spacer (keep layout symmetric). Mobile menu button appears here */}
            <div className="flex items-center justify-end md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-700 focus:outline-none"
              >
                {isMenuOpen ? (
                  <FiX className="block h-6 w-6" />
                ) : (
                  <FiMenu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 text-base font-medium rounded-md ${pathname === item.href ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-700'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
