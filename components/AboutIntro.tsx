import Image from 'next/image';

export interface StatItem { value: string; label: string }

export interface AboutIntroProps {
  heading: string; // About IMoMEST
  body: string;
  imageSrc: string;
  imageAlt?: string;
  stats: ReadonlyArray<StatItem>;
}

export default function AboutIntro({ heading, body, imageSrc, imageAlt = 'About image', stats }: AboutIntroProps) {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left image */}
          <div className="relative aspect-[16/11] w-full overflow-hidden rounded-lg">
            <Image src={imageSrc} alt={imageAlt} fill sizes="(min-width:1024px) 560px, 100vw" className="object-cover" />
          </div>
          {/* Right text */}
          <div className="lg:pl-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">{heading}</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">{body}</p>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((s, i) => (
                <div key={i}>
                  <div className="text-2xl sm:text-3xl font-extrabold text-gray-900">{s.value}</div>
                  <div className="text-gray-600 text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
