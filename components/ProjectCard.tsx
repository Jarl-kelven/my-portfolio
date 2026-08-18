import Link from "next/link";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  stack: string[];
  github: string;
  live: string;
  wip?: boolean;
  desktop: string;
  mobile: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group bg-[#161616] border border-white/10 rounded-xl p-6 flex flex-col gap-4 hover:border-white/20 transition-all duration-200">
      {/* Top row */}
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-medium text-white leading-snug group-hover:text-[#E8652A] transition-colors duration-200">
          {project.title}
        </h3>
        {project.wip && (
          <span className="text-[10px] font-medium text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded-full flex-shrink-0">
            WIP
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-sm text-[#666] leading-relaxed flex-1">
        {project.description}
      </p>

      {/* Stack badges */}
      <div className="flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-[11px] font-medium text-[#555] bg-white/[0.04] border border-white/[0.07] px-2.5 py-1 rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Display */}

      <div>
        {project.desktop && (
          <div className="mt-4">
            <Image
              src={project.desktop}
              alt="desktop view"
              width={1000}
              height={650}
              className="rounded-lg border border-white/10"
            />
          </div>
        )}

        {project.mobile && (
          <div className="mt-4">
            <Image
              src={project.mobile}
              alt="Mobile view"
              width={100}
              height={300}
              className="rounded-lg border border-white/10"
            />
          </div>
        )}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3 pt-2 border-t border-white/[0.06]">
        <Link
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-[#555] hover:text-white transition-colors duration-150"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
          GitHub
        </Link>

        {project.live && (
          <Link
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[#555] hover:text-[#E8652A] transition-colors duration-150"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Live demo
          </Link>
        )}
      </div>
    </div>
  );
}
