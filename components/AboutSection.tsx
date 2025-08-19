import Image from 'next/image';

interface AboutSectionProps {
  title: string;
  subtitle: string;
  description: string;
  stats: {
    value: string;
    label: string;
  }[];
  imageUrl: string;
  tagline: string;
  yearsExperience: string;
}

export default function AboutSection({
  title,
  subtitle,
  description,
  stats,
  imageUrl,
  tagline,
  yearsExperience,
}: AboutSectionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative h-96 lg:h-[500px] mb-8 lg:mb-0">
            <Image
              src={imageUrl}
              alt="About Us"
              fill
              className="object-cover rounded-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg w-40">
              <div className="text-4xl font-bold">{yearsExperience}</div>
              <div className="text-sm">Years of Experience</div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:pl-12">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
              {tagline}
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {title}
              <span className="block text-blue-600">{subtitle}</span>
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {description}
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4">
                  <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
