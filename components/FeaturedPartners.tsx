export interface PartnerItem {
  name: string;
  logoText?: string; // fallback text when no image provided
  logoSrc?: string;  // optional image path
  href?: string;
}

export interface FeaturedPartnersProps {
  title: string; // Featured Partners
  partners: ReadonlyArray<PartnerItem>;
}

export default function FeaturedPartners({ title, partners }: FeaturedPartnersProps) {
  return (
    <section className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-gray-900">{title}</h2>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-8 gap-y-6 items-center justify-items-center">
          {partners.map((p, idx) => (
            <a key={idx} href={p.href || '#'} className="opacity-80 hover:opacity-100 transition-opacity">
              {p.logoSrc ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={p.logoSrc} alt={p.name} className="h-8 object-contain" />
              ) : (
                <span className="text-gray-500 text-xl font-semibold select-none">{p.logoText || p.name}</span>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
