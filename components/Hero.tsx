import Link from 'next/link';
import Image from 'next/image';

interface HeroProps {
  title: string;
  subtitle: string;
  cta: {
    text: string;
    link: string;
  };
  stats: readonly {
    value: string;
    label: string;
  }[];
  bgImage?: string;
}

export default function Hero({ 
  title, 
  subtitle, 
  cta,
  stats,
  bgImage
}: HeroProps) {
  // If bgImage provided, render overlayed background with left-aligned content matching Figma
  if (bgImage) {
    return (
      <section
        className="relative"
        style={{}}
      >
        <div
          className="absolute inset-0 bg-cover bg-[url('/tingey-injury-law-firm-NcNqTsq-UVY-unsplash.jpg')] bg-[position:50%_20%]"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="w-full">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              {title}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-2xl">
              {subtitle}
            </p>
            <div className="mt-8">
              <Link
                href={cta.link}
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-md transition-colors"
              >
                {cta.text}
              </Link>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto w-full mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">{stat.value}</div>
                  <div className="text-sm text-blue-200 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Default centered variant (no background image)
  return (
    <div className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl mb-6">
          {title}
        </h1>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
          {subtitle}
        </p>
        
        <div className="flex flex-col items-center justify-center">
          <Link
            href={cta.link}
            className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-8 rounded-md text-lg transition duration-150 ease-in-out mb-16 inline-block"
          >
            {cta.text}
          </Link>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto w-full">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">{stat.value}</div>
                <div className="text-sm text-blue-200 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
