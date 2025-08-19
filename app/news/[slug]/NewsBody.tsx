import { NewsPost } from '@/lib/types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import React from 'react';
import MarkdownRenderer from './MarkdownRenderer';

export default function NewsBody({ post }: { post: NewsPost }) {
  const doc = post?.fields?.fullNews;
  const hasContent = doc.trim() !== '';

  if (!hasContent) {
    return <p>No content available.</p>;
  }

  return (
    <section className="bg-white">
      <div className="max-w-[80%] mx-auto px-4 sm:px-6 lg:px-18 py-10 sm:py-14 prose prose-slate relative">
        <div className="aspect-[4/3] overflow-hidden rounded-lg ring-1 ring-white/10">
          <img src={post.fields.featuredImage?.fields.file.url} alt="Cover" className="h-full w-full object-cover" />
        </div>
        <MarkdownRenderer content={doc} />
      </div>
    </section>
  );
}
