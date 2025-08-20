import React from 'react';
import { NewsPost } from '@/lib/types';

export default function NewsCard({ item }: { item: NewsPost }) {
  return (
    <article className="rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm">
      <div className="aspect-[16/10] w-full overflow-hidden">
        <img src={item.fields.featuredImage?.fields.file.url} alt={item.fields.featuredImage?.fields.title} className="h-full w-full object-cover" />
      </div>
      <div className="p-5 sm:p-6">
        <div className="text-xs text-slate-500">
          {item.sys.createdAt} • <span className="text-red-600">{item.fields.category.fields.category_name}</span>
        </div>
        <h3 className="mt-2 text-lg sm:text-xl font-semibold text-slate-900 leading-snug line-clamp-3 overflow-ellipsis">
          {item.fields.title}
        </h3>
        <p className="mt-2 text-sm text-slate-500 line-clamp-2">{item.fields.content.content[0].content[0].value}</p>
        <div className="mt-4">
          <a
            href={`/news/${item.sys.id}` || '#'}
            className="text-red-600 text-sm font-medium hover:underline"
          >
            Read More
          </a>
        </div>
      </div>
    </article>
  );
}
