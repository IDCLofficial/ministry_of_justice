import ProjectCard from './ProjectCard';
import { Project } from '@/lib/types';

export default function ProjectsGrid({ projects }: {projects: Project[]}) {
  return (
    <div className='max-w-7xl px-4 sm:px-6 lg:px-8 py-8'>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.sys.id} project={p} />
        ))}
      </div>
    </div>
  );
}
