import { Project } from "@/lib/types";
import ProjectCard from "./ProjectCard";

export function ProjectsSection({ projects }: { projects: Project[] }) {
    return (
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-6">
          {projects.map((project) => (
            <ProjectCard key={project.fields.projectTitle} project={project} />
          ))}
        </div>
      </section>
    );
}