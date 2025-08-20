import React from 'react';
import {Events} from '@/lib/types';

export default function EventRow({ item }: { item: Events}) {
  return (
    <div className="py-5 border-b border-slate-200">
      <div className="flex items-center gap-16">
        <div className="w-[200px] h-[200px] aspect-square rounded-lg overflow-hidden ring-1 ring-slate-200/60">
          <img src={`http:${item.fields.bannerImage?.fields.file.url}`} alt={item.fields.eventName} className="w-full h-full object-cover" />
        </div>

        <div className='flex flex-col gap-2'>
          <div className="flex justify-between text-[11px] tracking-wide text-slate-500">
            <span className="uppercase">{item.fields.eventDate}</span>
            <span className="uppercase">{item.fields.location}</span>
          </div>
          <h3 className="mt-1 text-xl font-extrabold text-slate-900 uppercase">
            {item.fields.eventName}
          </h3>
          <p className="mt-1 text-sm text-slate-500 max-w-2xl">{item.fields.briefDescription}</p>
          <div className="text-right">
            <a
              href={`/events/${item.sys.id}`}
              className="inline-flex items-center justify-center rounded-md border border-red-400 text-red-600 px-3 py-2 text-sm font-medium hover:bg-red-50"
            >
              More Information
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
