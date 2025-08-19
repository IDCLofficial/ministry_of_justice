import Image from 'next/image';

export interface StructureItem { title: string; body: string }

export interface StructureSectionProps {
  heading: string; // Our Structure
  subtext: string;
  imageSrc: string;
  items: ReadonlyArray<StructureItem>; // numbered list
}

export default function StructureSection({ heading, subtext, imageSrc, items }: StructureSectionProps) {
  return (
    <section className="bg-[#06163A] text-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold">{heading}</h2>
          <p className="mt-3 text-white/80 max-w-prose">{subtext}</p>
          <ol className="mt-8 space-y-6">
            {items.map((it, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 text-white font-bold grid place-items-center">{idx + 1}</span>
                <div>
                  <h4 className="font-semibold">{it.title}</h4>
                  <p className="text-white/80 text-sm mt-1">{it.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="relative rounded-lg overflow-hidden h-full ring-1 ring-white/10">
          <Image src={imageSrc} alt={heading} fill sizes="(min-width:1024px) 560px, 100vw" className="object-cover" />
        </div>
      </div>
    </section>
  );
}
