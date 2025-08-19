import { ReactNode } from 'react';
import { FiGlobe, FiUsers, FiTrendingUp, FiShield, FiLayers, FiCode } from 'react-icons/fi';

interface FeatureItem {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
}

interface FeaturesProps {
  title: string;
  subtitle: string;
  features: FeatureItem[];
}

const FeatureIcon = ({ icon, index }: { icon: ReactNode; index: number }) => {
  const colors = [
    'bg-blue-100 text-blue-600',
    'bg-green-100 text-green-600',
    'bg-purple-100 text-purple-600',
    'bg-yellow-100 text-yellow-600',
    'bg-red-100 text-red-600',
    'bg-indigo-100 text-indigo-600',
  ];
  
  return (
    <div className={`${colors[index % colors.length]} p-3 rounded-lg inline-flex items-center justify-center`}>
      {icon}
    </div>
  );
};

export default function Features({ title, subtitle, features }: FeaturesProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.id}
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="mb-4">
                <FeatureIcon icon={feature.icon} index={index} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
