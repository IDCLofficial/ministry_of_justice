import Image from 'next/image';
import Link from 'next/link';

export interface NewsPost {
  id: string | number;
  imageSrc: string;
  imageAlt?: string;
  title: string;
  date: string; // e.g. "20th July"
  tag: string;  // e.g. "Latest"
  excerpt: string;
  href: string;
}

export interface LatestNewsProps {
  title: string; // The Latest News
  subtitle?: string; // small paragraph under heading
  posts: ReadonlyArray<NewsPost>; // three cards
}

export default function LatestNews({ title, subtitle, posts }: LatestNewsProps) {
  return (
    <section className="bg-gray-50 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">{title}</h2>
          {subtitle && (
            <p className="mt-3 text-gray-600">{subtitle}</p>
          )}
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-sm ring-1 ring-gray-200 overflow-hidden">
              <div className="relative aspect-[16/10] w-full">
                <Image src={post.imageSrc} alt={post.imageAlt || post.title} fill sizes="(min-width:1024px) 400px, 100vw" className="object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-[18px] font-extrabold text-gray-900 leading-snug">
                  {post.title}
                </h3>
                <div className="mt-2 text-xs text-gray-500">
                  {post.date} • {post.tag}
                </div>
                <p className="mt-3 text-sm text-gray-600 line-clamp-3">{post.excerpt}</p>
                <div className="mt-4">
                  <Link href={post.href} className="text-red-600 font-semibold hover:underline">
                    Read More
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
