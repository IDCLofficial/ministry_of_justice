export interface DepartmentsHeroProps {
  title: string;
  subtitle?: string;
}

export default function DepartmentsHero({ title, subtitle }: DepartmentsHeroProps) {
  return (
    <section className="bg-[#06163A] text-white py-16 sm:py-20">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold">{title}</h1>
        {subtitle && (
          <p className="mt-3 max-w-3xl text-white/85">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
