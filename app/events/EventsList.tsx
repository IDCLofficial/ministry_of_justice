'use client';
import React from 'react';
import EventRow from './EventRow';
import { Events } from '@/lib/types';
import Image from 'next/image';
  import Link from 'next/link';

export default function EventsList({ items }: { items: Events[] }) {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const scroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = container.clientWidth * 0.8;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };
  // Compute past events based on eventDate before today
  const pastItems = React.useMemo(() => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return items.filter((event) => {
      const d = new Date(event.fields.eventDate as any);
      if (isNaN(d.getTime())) return false;
      return d < today;
    });
  }, [items]);
  // Compute upcoming (today or future) events
  const upcomingItems = React.useMemo(() => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return items.filter((event) => {
      const d = new Date(event.fields.eventDate as any);
      if (isNaN(d.getTime())) return false;
      return d >= today;
    });
  }, [items]);

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="divide-y divide-slate-200 rounded-xl bg-white">
          {upcomingItems.length !== 0 ? 
            upcomingItems.map((ev) => (
              <EventRow key={ev.sys.id} item={ev} />
            )) : (
              <div className="text-center text-gray-500 py-12 text-lg">
                No upcoming events at this time.
              </div>
            )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <h1 className="text-2xl font-medium mb-4">Past Events</h1>
        <div className="relative w-full flex items-center">
          {pastItems.length !== 0 && (
            <button
              onClick={() => scroll("left")}
              className="absolute top-1/2 -translate-y-1/2 left-0 z-10 bg-white/10 border rounded-full shadow p-2 text-xl font-bold hover:bg-gray-100 max-md:hidden"
              aria-label="Scroll left"
            >
              &#8592;
            </button>
          )}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-8 py-4 scrollbar-hide w-full"
          >
            {pastItems.length === 0 ? (
              <div className="text-center text-gray-500 py-12 text-lg">
                No past events at this time.
              </div>
            ) : (
              pastItems.map((event) => (
                <div
                  key={event.sys.id}
                  className="flex-shrink-0 w-80 bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col p-4"
                >
                  <div className="relative w-full h-40 mb-4 rounded overflow-hidden">
                    <Image
                      src={`https:${event.fields.bannerImage?.fields.file.url}`}
                      alt={event.fields.eventName}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500 mb-1">
                      {event.fields.eventDate} | {event.fields.location}
                    </span>
                    <h3 className="text-lg font-semibold mb-1">
                      {event.fields.eventName}
                    </h3>
                    <p className="text-sm text-gray-700 mb-2">
                      {event.fields.briefDescription}
                    </p>
                    <Link
                      href={`/events/${event.sys.id}`}
                      className="w-max border border-primary-green text-primary-green text-[14px] px-4 py-2 rounded font-semibold hover:bg-green-50 transition mt-2"
                    >
                      More Information
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
          {pastItems.length !== 0 && (
            <button
              onClick={() => scroll("right")}
              className="absolute top-1/2 -translate-y-1/2 right-0 z-10 bg-white border rounded-full shadow p-2 text-xl font-bold hover:bg-gray-100 max-md:hidden"
              aria-label="Scroll right"
            >
              &#8594;
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
