'use client';
import { useMemo, useState } from 'react';

interface ProjectsFiltersProps {
  categories: string[];
  statuses: string[];
  years: string[];
  onChange?: (filters: { category: string; status: string; year: string; query: string }) => void;
}

export default function ProjectsFilters({ categories, statuses, years, onChange }: ProjectsFiltersProps) {
  const [category, setCategory] = useState(categories[0] ?? 'All');
  const [status, setStatus] = useState(statuses[0] ?? 'All');
  const [year, setYear] = useState(years[0] ?? 'All');
  const [query, setQuery] = useState('');

  const state = useMemo(() => ({ category, status, year, query }), [category, status, year, query]);

  return (
    <div className="bg-white/70 backdrop-blur rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            onChange?.({ ...state, category: e.target.value });
          }}
          className="w-full rounded-lg border-gray-300 focus:border-blue-600 focus:ring-blue-600"
        >
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        <select
          value={status}
          onChange={(e) => {
            setStatus(e.target.value);
            onChange?.({ ...state, status: e.target.value });
          }}
          className="w-full rounded-lg border-gray-300 focus:border-blue-600 focus:ring-blue-600"
        >
          {statuses.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>

        <select
          value={year}
          onChange={(e) => {
            setYear(e.target.value);
            onChange?.({ ...state, year: e.target.value });
          }}
          className="w-full rounded-lg border-gray-300 focus:border-blue-600 focus:ring-blue-600"
        >
          {years.map((y) => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>

        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            onChange?.({ ...state, query: e.target.value });
          }}
          placeholder="Search projects..."
          className="w-full rounded-lg border-gray-300 focus:border-blue-600 focus:ring-blue-600"
        />
      </div>
    </div>
  );
}
