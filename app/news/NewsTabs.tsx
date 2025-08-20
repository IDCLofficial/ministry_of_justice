import React from "react";
import { Category } from "@/lib/types";
import Link from "next/link";

type Props = {
  query:string,
  categories: Category[];
  onChange: (cat: Category) => void;
};

export default function NewsTabs({query,categories, onChange }: Props) {
  return (
    <div className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-6 overflow-x-auto no-scrollbar py-3 text-sm">
          {categories.map((c) => {
            const isActive = query === c.sys.id;
            return (
              <Link
                href={`/news?category=${c.sys.id}`}
                key={c.fields.category_name}
                onClick={() => onChange(c)}
                className={`shrink-0 pb-2 -mb-px border-b-2 transition-colors ${
                  isActive
                    ? "border-red-500 text-red-600 font-medium"
                    : "border-transparent text-slate-500 hover:text-slate-800"
                }`}
              >
                {c.fields.category_name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
