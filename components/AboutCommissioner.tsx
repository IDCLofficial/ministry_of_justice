import Image from 'next/image';
import Link from 'next/link';

export interface AboutCommissionerProps {
  heading: string; // About The Commissioner
  body: string; // paragraph text
  cta: { text: string; href: string };
  imageSrc: string;
  imageAlt?: string;
}

export default function AboutCommissioner({ heading, body, cta, imageSrc, imageAlt = 'Commissioner' }: AboutCommissionerProps) {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left image */}
          <div className="relative aspect-[3/3] w-full overflow-hidden rounded-lg shadow-sm reveal-left animate-delay-100">
            <Image src={imageSrc} alt={imageAlt} width={500} height={500} sizes="(min-width: 1024px) 560px, 100vw" className="object-cover w-full h-full" />
          </div>

          {/* Right content */}
          <div className="lg:pl-8 reveal-right animate-delay-200">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">{heading}</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">{body}</p>
            <div className="mt-6">
              <Link href={cta.href} className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-3 rounded-md">
                {cta.text}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
