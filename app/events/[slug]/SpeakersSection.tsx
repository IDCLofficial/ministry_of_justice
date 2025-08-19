import React from 'react';

type Speaker = {
  id: string;
  name: string;
  role?: string; // e.g., Lead Speaker
  image: string;
};

function SpeakerCard({ s }: { s: Speaker }) {
  return (
    <div className="rounded-xl overflow-hidden">
      <div className="relative">
        <img src={s.image} alt={s.name} className="w-full h-64 object-cover" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-500" />
      </div>
      <div className="mt-2 px-1">
        {s.role && <div className="text-[12px] text-red-600 font-medium">{s.role}</div>}
        <div className="text-slate-900 font-extrabold uppercase">{s.name}</div>
      </div>
    </div>
  );
}

export default function SpeakersSection({ speakers }: { speakers: Speaker[] }) {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <h3 className="text-xl font-semibold tracking-wide text-slate-900">Speakers</h3>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {speakers.map((s) => (
            <SpeakerCard key={s.id} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
