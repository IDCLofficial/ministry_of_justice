"use client";
import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import NewsTabs from './NewsTabs';
import NewsGrid from './NewsGrid';
import type { Category } from '@/lib/types';

export default function NewsClient({
  categories,
}: {
    categories: Category[];
}) {
  const [active, setActive] = useState<Category>(categories[0]);
  const searchParams = useSearchParams();
  const categoryQuery = searchParams.get('category');
  const query = categoryQuery
  // Could sync active with query if desired
  // console.log({ categoryQuery });

  // TODO: once news items come from CMS with category associations,
  // use active to filter. For now, show all.

  return (
    <>
      <NewsTabs categories={categories} onChange={(c)=>setActive(c)} />
      <NewsGrid query={query || ''} />
    </>
  );
}
