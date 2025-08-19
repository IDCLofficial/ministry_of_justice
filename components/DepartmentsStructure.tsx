"use client";
import Image from 'next/image';
import { useState } from 'react';

export interface DepartmentItem { name: string; title: string; imageSrc: string; body: string }

export interface DepartmentsStructureProps {
  departments: ReadonlyArray<DepartmentItem>;
  initialIndex?: number;
}

export default function DepartmentsStructure({ departments, initialIndex = 0 }: DepartmentsStructureProps) {
  const [active, setActive] = useState(Math.min(Math.max(initialIndex, 0), Math.max(0, departments.length - 1)));
  const content = departments[active];
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="rounded-lg ring-1 ring-gray-200 overflow-hidden">
              {departments.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActive(idx)}
                  className={`w-full text-left border-b last:border-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${idx === active ? 'bg-white' : 'bg-white'}`}
                >
                  <div className="flex items-center gap-3">
                    {idx === active ? (
                      <span className="w-full inline-block bg-red-600 text-white text-[12px] px-4 py-3 font-semibold rounded">
                        {item.name}
                      </span>
                    ) : (
                      <span className="w-full px-4 py-3 text-gray-700 text-sm">{item.name}</span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </aside>

          {/* Content */}
          <div className="lg:col-span-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">{content.title}</h2>
            <div className="relative mt-4 rounded-lg overflow-hidden aspect-[16/10] ring-1 ring-gray-200">
              <Image src={content.imageSrc} alt={content.title} width={1280} height={1280} sizes="(min-width:1024px) 720px, 100vw" className="object-cover w-full h-full object-[50%_20%]" />
            </div>
            <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">{content.body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
