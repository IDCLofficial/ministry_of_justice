import Image from 'next/image';
import Link from 'next/link';

export interface AboutSplitProps {
  heading: string; // About The Ministry
  body: string; // paragraph text
  cta: { text: string; href: string };
  imageSrc: string;
  imageAlt?: string;
  hoverImageSrc?: string; // optional alternate image on hover
}

export default function AboutSplit({ heading, body, cta, imageSrc, imageAlt = 'About image', hoverImageSrc }: AboutSplitProps) {
  return (
    <section id="about" className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left image */}
          <div className="group relative aspect-[16/10] w-full overflow-hidden rounded-lg border-1 border-gray-200 shadow-md hover:scale-105 transition-all duration-300">
            {/* Base image */}
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className={`object-cover transition-opacity duration-500 ${hoverImageSrc ? 'opacity-100 group-hover:opacity-0' : ''}`}
            />
            {/* Hover image (optional) */}
            {hoverImageSrc && (
              <Image
                src={hoverImageSrc}
                alt={imageAlt}
                width={500}
                height={500}
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                priority={false}
              />
            )}
          </div>

          {/* Right content */}
          <div className="lg:pl-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">{heading}</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">{body}</p>
            <div className="mt-6">
              <Link href={cta.href} className="inline-block bg-red-600 hover:bg-red-700 transition-all text-white font-semibold px-5 py-3 rounded-md">
                {cta.text}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
