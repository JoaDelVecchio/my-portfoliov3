import { projects } from "../data/projects";
import { IProject } from "../types/types";
import PersonalInfo from "./PersonalInfo";

const ArrowIcon = () => {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      aria-hidden="true"
    >
      <path d="M5 15L15 5" />
      <path d="M8 5h7v7" />
    </svg>
  );
};

const ProjectCard = ({ project }: { project: IProject }) => {
  return (
    <article className="flex flex-col gap-4">
      <video
        src={project.video}
        className="h-auto w-full rounded-xl shadow-lg"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      />
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-lg font-semibold tracking-tight text-gray-900">
          {project.title}
        </h3>
        <span className="text-sm text-gray-400">{project.year}</span>
      </div>
      <p className="text-sm leading-relaxed text-gray-600">
        {project.description}
      </p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 text-sm font-medium text-gray-900 underline decoration-gray-300 underline-offset-4 transition-colors hover:decoration-gray-600"
      >
        View project
        <ArrowIcon />
      </a>
    </article>
  );
};

const ProjectsMobile = () => {
  return (
    <div className="flex w-full flex-col gap-10 px-6 py-10 md:hidden">
      <PersonalInfo />
      <div className="flex flex-col gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsMobile;
