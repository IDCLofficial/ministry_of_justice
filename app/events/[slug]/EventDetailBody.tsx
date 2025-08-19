import { Events } from '@/lib/types';
import React from 'react';

export default function EventDetailBody({ event }: { event: Events}) {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        <div className="max-w-3xl">
          <p className="text-slate-600">
            {event.fields.briefDescription}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h3 className="text-xl font-semibold tracking-wide text-slate-900">Event Details</h3>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
          <div>
            <div className="text-slate-400 uppercase text-[11px] tracking-wide">Date:</div>
            <div className="mt-1 text-slate-900">{event.fields.eventDate}</div>
          </div>
          <div>
            <div className="text-slate-400 uppercase text-[11px] tracking-wide">Organizer:</div>
            <div className="mt-1 text-slate-900">{event.fields.ministry?.fields.ministryName}</div>
          </div>
          <div>
            <div className="text-slate-400 uppercase text-[11px] tracking-wide">Address:</div>
            <div className="mt-1 text-slate-900">{event.fields.location}</div>
          </div>
          <div>
            <div className="text-slate-400 uppercase text-[11px] tracking-wide">Time:</div>
            <div className="mt-1 text-slate-900">10:am</div>
          </div>
          <div>
            <div className="text-slate-400 uppercase text-[11px] tracking-wide">Phone:</div>
            <div className="mt-1 text-slate-900">{event.fields.contactPhoneNumber}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
