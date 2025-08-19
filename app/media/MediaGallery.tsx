'use client';
import React from 'react';
import { Media } from '@/lib/types';

export default function MediaGallery({ items }: { items: Media[] }) {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const [show, setShow] = React.useState(false);

  // Open viewer
  const open = (idx: number) => {
    setActiveIndex(idx);
    // allow next tick for transition
    requestAnimationFrame(() => setShow(true));
  };

  // Close viewer
  const close = () => {
    setShow(false);
    // wait for transition then clear
    setTimeout(() => setActiveIndex(null), 150);
  };

  // Keyboard navigation
  React.useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') setActiveIndex((i) => (i === null ? null : Math.min(items.length - 1, i + 1)));
      if (e.key === 'ArrowLeft') setActiveIndex((i) => (i === null ? null : Math.max(0, i - 1)));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeIndex, items.length]);

  // Body scroll lock when viewer is open
  React.useEffect(() => {
    if (activeIndex === null) return;
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [activeIndex]);

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <figure key={it.sys.id} className="rounded-xl overflow-hidden group cursor-zoom-in" onClick={() => open(idx)}>
              <img
                src={`https:${it.fields.img.fields.file.url}`}
                alt={it.fields.title || 'Media item'}
                className="w-full h-[260px] sm:h-[360px] lg:h-[420px] object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <figcaption className="mt-2 text-sm text-slate-600">{it.fields.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/40 transition-opacity duration-150 ${
            show ? 'opacity-100' : 'opacity-0'
          }`}
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          {/* Content wrapper */}
          <div className={`relative w-[500px] h-[500px] transition-transform duration-200 ${show ? 'scale-100' : 'scale-95'}`}>
            {/* Image */}
            <img
              src={`https:${items[activeIndex].fields.img.fields.file.url}`}
              alt={items[activeIndex].fields.title || 'Media item'}
              className="w-full h-full object-cover rounded-xl shadow-xl bg-white"
            />

            {/* Close button */}
            <button
              onClick={close}
              aria-label="Close"
              className="absolute -top-10 right-0 md:top-4 md:right-4 inline-flex items-center justify-center h-10 w-10 rounded-full bg-white text-slate-800 shadow hover:shadow-md transition"
            >
              ✕
            </button>

            {/* Prev */}
            {activeIndex > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex((i) => (i === null ? null : Math.max(0, i - 1)));
                }}
                aria-label="Previous image"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 rounded-full h-10 w-10 shadow"
              >
                ‹
              </button>
            )}
            {/* Next */}
            {activeIndex < items.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex((i) => (i === null ? null : Math.min(items.length - 1, i + 1)));
                }}
                aria-label="Next image"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 rounded-full h-10 w-10 shadow"
              >
                ›
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
