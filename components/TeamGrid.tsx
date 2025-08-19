import Image from 'next/image';

export interface TeamMember {
  id: string | number;
  name: string;
  role: string;
  imageSrc: string;
  imageAlt?: string;
}

export interface TeamGridProps {
  title: string; // Our Team
  members: ReadonlyArray<TeamMember>;
}

export default function TeamGrid({ title, members }: TeamGridProps) {
  return (
    <section className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">{title}</h2>
        <div className="mt-6 py-8 gap-6 flex items-start">
          {members.map((m, idx) => (
            <div key={m.id} className={`flex-1 h-[400px] w-[300px] reveal-pop ${['animate-delay-100','animate-delay-200','animate-delay-300','animate-delay-400','animate-delay-500','animate-delay-600'][idx % 6]}`}>
              <div className="bg-white rounded-lg shadow-sm ring-1 ring-gray-200 overflow-hidden">
                <div className="relative aspect-[4/5] w-full">
                  <Image src={m.imageSrc} alt={m.imageAlt || m.name} width={500} height={500} sizes="(min-width:1024px) 360px, 100vw" className="object-cover h-full w-full" />
                </div>
                <div className="p-4">
                  <div className="font-extrabold text-gray-900 text-[16px]">{m.name}</div>
                  <div className="text-gray-600 text-sm mt-1">{m.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
