import React from 'react';

type Props = {
  title: string;
  date: string;
  tag?: string;
  image?: string;
};

export default function NewsDetailHero({ title, date, tag = 'Development', image = '/images/news/news-1.jpg' }: Props) {
  return (
    <section className="bg-[#0B1C34] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,360px] gap-8 items-end">
          <div className="py-10 sm:py-14 lg:py-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight whitespace-pre-line">
              {title}
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-200">{date}</p>
            {tag && (
              <span className="mt-4 inline-flex w-max rounded-md bg-slate-100/10 px-3 py-1 text-xs font-medium ring-1 ring-white/20">
                {tag}
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
