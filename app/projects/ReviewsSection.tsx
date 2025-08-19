'use client';
import { useMemo, useState } from 'react';
import Image from 'next/image';

interface Review {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  rating: number; // 1-5
}

interface ReviewsSectionProps {
  title: string;
  subtitle?: string;
  reviews: Review[];
  chunkSize?: number; // how many to show per load
}

export default function ReviewsSection({ title, subtitle, reviews, chunkSize = 3 }: ReviewsSectionProps) {
  const [visibleCount, setVisibleCount] = useState(chunkSize);

  const visible = useMemo(() => reviews.slice(0, visibleCount), [reviews, visibleCount]);
  const hasMore = visibleCount < reviews.length;

  return (
    <section className="bg-blue-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold">{title}</h2>
          {subtitle ? <p className="mt-3 text-blue-100">{subtitle}</p> : null}
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((r) => (
            <figure key={r.id} className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  <Image src={r.avatar} alt={r.name} fill className="object-cover" />
                </div>
                <div>
                  <figcaption className="font-semibold">{r.name}</figcaption>
                  <div className="text-sm text-blue-200">{r.role}</div>
                </div>
              </div>
              <blockquote className="mt-4 text-blue-100">“{r.quote}”</blockquote>
              <div className="mt-4 text-yellow-400" aria-label={`Rating: ${r.rating} out of 5`}>
                {'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}
              </div>
            </figure>
          ))}
        </div>

        {hasMore ? (
          <div className="mt-10">
            <button
              onClick={() => setVisibleCount((c) => Math.min(c + chunkSize, reviews.length))}
              className="inline-flex items-center px-6 py-3 rounded-md bg-yellow-500 text-blue-900 font-semibold hover:bg-yellow-400 transition"
            >
              Load more reviews
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
