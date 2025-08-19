import { FiArrowRight } from 'react-icons/fi';

interface DepartmentCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const DepartmentCard = ({ title, description, icon, link }: DepartmentCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <div className="text-4xl text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      <a 
        href={link} 
        className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
      >
        Learn more <FiArrowRight className="ml-2" />
      </a>
    </div>
  );
};

interface DepartmentsSectionProps {
  title: string;
  subtitle: string;
  description: string;
  departments: {
    title: string;
    description: string;
    icon: React.ReactNode;
    link: string;
  }[];
}

export default function DepartmentsSection({
  title,
  subtitle,
  description,
  departments,
}: DepartmentsSectionProps) {
  const delayClasses = [
    'animate-delay-100',
    'animate-delay-200',
    'animate-delay-300',
    'animate-delay-400',
    'animate-delay-500',
    'animate-delay-600',
  ];
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {title}
            <span className="block text-blue-600">{subtitle}</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <div
              key={index}
              className={`reveal-pop ${delayClasses[index % delayClasses.length]}`}
            >
              <DepartmentCard
                title={dept.title}
                description={dept.description}
                icon={dept.icon}
                link={dept.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
