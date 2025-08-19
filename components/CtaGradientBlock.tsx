import Link from 'next/link';

export interface CtaGradientBlockProps {
  heading: string; // Partner With Us To Transform Education In Imo
  subtext: string;
  cta: { text: string; href: string };
}

export default function CtaGradientBlock({ heading, subtext, cta }: CtaGradientBlockProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient background matching Figma look */}
      <div className="bg-gradient-to-br from-emerald-700 via-blue-700 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 text-center text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">{heading}</h2>
          <p className="mt-3 text-white/85 max-w-3xl mx-auto">{subtext}</p>
          <div className="mt-6">
            <Link href={cta.href} className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-3 rounded-md">
              {cta.text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
