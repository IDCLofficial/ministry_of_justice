import ProjectCard from './ProjectCard';
import { Project } from '@/lib/types';

export default function ProjectsGrid({ projects }: {projects: Project[]}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Showing {projects.length} Projects</h2>
        <div className="text-sm text-gray-500">Sorted by: Most Recent</div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.sys.id} project={p} />
        ))}
      </div>
    </div>
  );
}
