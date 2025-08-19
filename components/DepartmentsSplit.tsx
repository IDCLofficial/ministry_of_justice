import Image from 'next/image';
import Link from 'next/link';

export interface DepartmentItem {
  title: string;
  description: string;
}

export interface DepartmentsSplitProps {
  heading: string; // Our Departments & Their Functions
  subheading?: string;
  description: string;
  items: ReadonlyArray<DepartmentItem>; // 4 cards
  cta: { text: string; href: string };
  imageSrc: string; // right image
  imageAlt?: string;
}

export default function DepartmentsSplit({
  heading,
  subheading,
  description,
  items,
  cta,
  imageSrc,
  imageAlt = 'Departments image',
}: DepartmentsSplitProps) {
  const delayClasses = [
    'animate-delay-100',
    'animate-delay-200',
    'animate-delay-300',
    'animate-delay-400',
    'animate-delay-500',
    'animate-delay-600',
  ];
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left content */}
          <div className="lg:pr-8">
            {subheading && (
              <p className="text-sm font-semibold text-blue-700 mb-2">{subheading}</p>
            )}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              {heading}
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl">{description}</p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {items.map((it, idx) => (
                <div key={idx} className={`reveal-pop ${delayClasses[idx % delayClasses.length]}`}>
                  <div className="bg-white rounded-lg shadow-sm ring-1 ring-gray-200 p-5">
                    <h3 className="text-[15px] font-extrabold text-gray-900 leading-snug">
                      {it.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                      {it.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link href={cta.href} className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-3 rounded-md">
                {cta.text}
              </Link>
            </div>
          </div>

          {/* Right image */}
          <div className="relative aspect-[4/4] w-full  overflow-hidden rounded-lg lg:mt-8">
            <Image src={imageSrc} alt={imageAlt} width={500} height={500} sizes="(min-width: 1024px) 560px, 100vw" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
