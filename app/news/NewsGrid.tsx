import React from 'react';
import NewsCard from './NewsCard';
import { getNewsBycategory } from './news';
import { NewsPost } from '@/lib/types';

export default async function NewsGrid({ query }: { query: string}) {
  const items = await getNewsBycategory(query);
  console.log(items)
  return (
    <section className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {items?.map((item: NewsPost) => (
            <NewsCard key={item.fields.slug} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
