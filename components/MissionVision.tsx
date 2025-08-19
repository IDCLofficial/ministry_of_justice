import Image from 'next/image';

export interface MissionVisionProps {
  missionTitle: string;
  missionText: string;
  missionBg?: string; // tailwind class override
  missionCardBgClass?: string; // custom
  missionImage: string;
  visionTitle: string;
  visionText: string;
  visionImage: string;
}

export default function MissionVision({ missionTitle, missionText, missionImage, visionTitle, visionText, visionImage, missionCardBgClass = 'bg-slate-800' }: MissionVisionProps) {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Row 1: Mission card left, image right */}
        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          <div className={`flex flex-col justify-center rounded-lg p-8 text-white bg-[#06163A]/60 shadow-md`}>
            <h3 className="text-2xl font-extrabold">{missionTitle}</h3>
            <p className="mt-3 text-white/85 max-w-prose">{missionText}</p>
          </div>
          <div className="relative rounded-lg overflow-hidden h-[500px]">
            <Image src={missionImage} alt={missionTitle} fill sizes="(min-width:1024px) 560px, 100vw" className="object-cover" />
          </div>
        </div>
        {/* Row 2: Image left, Vision card right */}
        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          <div className="relative rounded-lg overflow-hidden h-[500px] order-1 lg:order-none">
            <Image src={visionImage} alt={visionTitle} fill sizes="(min-width:1024px) 560px, 100vw" className="object-cover" />
          </div>
          <div className="rounded-lg p-8 bg-white shadow-md ring-1 ring-gray-200 flex flex-col justify-center">
            <h3 className="text-2xl font-extrabold text-gray-900">{visionTitle}</h3>
            <p className="mt-3 text-gray-600 max-w-prose">{visionText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
