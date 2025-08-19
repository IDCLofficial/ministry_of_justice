import Image from 'next/image';

export interface AboutHeroProps {
  title: string; // About Us
  subtitle?: string; // short line under title
  bgImage: string;
}

export default function AboutHero({ title, subtitle, bgImage }: AboutHeroProps) {
  return (
    <section className="relative h-[320px] sm:h-[380px] w-full overflow-hidden">
      <Image src={bgImage} alt="About hero" fill priority className="object-cover" />
      <div className="absolute inset-0 bg-slate-900/20" />
      <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <h1 className="text-white text-4xl sm:text-5xl font-extrabold">{title}</h1>
        {subtitle && (
          <p className="mt-2 text-white/85 max-w-2xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
