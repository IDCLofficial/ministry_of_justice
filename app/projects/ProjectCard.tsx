import Image from 'next/image';
import { Project } from '@/lib/types';


export default function ProjectCard({ project }: {project:Project}) {
  // Derive status color from dates: completed (end passed),
  //  upcoming (start in future), else ongoing
  const startDate = project.fields.startDate ? new Date(project.fields.startDate) : null;
  const endDate = project.fields.proposedEndDate ? new Date(project.fields.proposedEndDate) : null;
  const now = new Date();

  const startValid = !!(startDate && !isNaN(startDate.getTime()));
  const endValid = !!(endDate && !isNaN(endDate.getTime()));

  const endPassed = endValid && (endDate as Date) < now;
  const upcoming = startValid && (startDate as Date) > now && (!endValid || (endDate as Date) > now);

  const statusColor = endPassed
    ? 'bg-green-100 text-green-700'
    : upcoming
    ? 'bg-blue-100 text-blue-700'
    : 'bg-yellow-100 text-yellow-700';
  const statusLabel = endPassed ? 'Completed' : upcoming ? 'Not started' : 'Ongoing';

  return (
    <div className="group rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-[500px] w-full">
        <Image
          src={`https:${project.fields.projectImage?.fields.file.url}`}
          alt={project.fields.projectTitle}
          width={500}
          height={500}
          className="object-cover h-full w-full"
        />
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <span className={`text-xs font-medium px-2 py-1 rounded ${statusColor}`}>
            {statusLabel}
          </span>
          <span className="text-xs text-gray-500">{project.fields.startDate}</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900">{project.fields.projectTitle}</h3>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{project.fields.projectDescription}</p>
      </div>
    </div>
  );
}
