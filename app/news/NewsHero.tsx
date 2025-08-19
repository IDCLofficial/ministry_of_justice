import React from 'react';

export default function NewsHero({ title }: { title: string }) {
  return (
    <section className="bg-[#0B1C34] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight whitespace-pre">
          {title}
        </h1>
      </div>
    </section>
  );
}
