import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="work" className="bg-[#111111] px-6 sm:px-10 md:px-16 lg:px-24 py-24">
      <div className="max-w-4xl mx-auto">

        {/* Section header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs font-medium text-[#C0460A] uppercase tracking-widest mb-3">
              02 — Work
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              Things I&apos;ve built
            </h2>
          </div>
          
          <a
            href="https://github.com/Jarl-kelven"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#555] hover:text-[#aaa] transition-colors hidden sm:block"
          >
            View all on GitHub →
          </a>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* Mobile github link */}
        <div className="mt-8 sm:hidden">

         <a 
            href="https://github.com/Jarl-kelven"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#555] hover:text-[#aaa] transition-colors"
          >
            View all on GitHub →
          </a>
        </div>

      </div>
    </section>
  );
}