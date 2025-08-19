interface ProjectsHeroProps {
  title: string;
  subtitle: string;
  bgImage?: string;
}

export default function ProjectsHero({ title, subtitle, bgImage }: ProjectsHeroProps) {
  return (
    <section className="relative">
      {bgImage ? (
        <>
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }} />
          <div className="absolute inset-0 bg-black/60" />
        </>
      ) : null}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight whitespace-pre">
            {title}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-2xl">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
