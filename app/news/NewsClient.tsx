"use client";
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import NewsTabs from './NewsTabs';
import NewsGrid from './NewsGrid';
import type { Category, NewsPost } from '@/lib/types';
import { getNewsBycategory } from './news';

export default function NewsClient({
  categories,
}: {
    categories: Category[];
}) {
  const [active, setActive] = useState<Category>(categories[0]);
  const [items, setItems] = useState<NewsPost[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const categoryQuery = searchParams.get('category');
  const query = categoryQuery

  useEffect(() => {
    let ignore = false;
    (async () => {
      try {
        setLoading(true);
        const data = await getNewsBycategory(query || '');
        if (!ignore) setItems(data || []);
      } catch (e) {
        if (!ignore) setItems([]);
      } finally {
        if (!ignore) setLoading(false);
      }
    })();
    return () => {
      ignore = true;
    };
  }, [query]);


  return (
    <>
      <NewsTabs query={query || ''} categories={categories} onChange={(c)=>setActive(c)} />
      <NewsGrid query={query || ''} items={items} />
    </>
  );
}

