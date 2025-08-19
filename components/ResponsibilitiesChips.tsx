export interface ResponsibilitiesChipsProps {
  title: string;
  items: ReadonlyArray<string>;
}

export default function ResponsibilitiesChips({ title, items }: ResponsibilitiesChipsProps) {
  return (
    <section className="bg-gray-50 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-gray-900">{title}</h2>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          {items.map((it, idx) => (
            <span key={idx} className="inline-block bg-white shadow-sm ring-1 ring-gray-200 px-4 py-2 rounded-full text-sm font-medium text-gray-700">
              {it}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
