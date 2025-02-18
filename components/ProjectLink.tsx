"use client";
import { useHoveredContext } from "../context/HoveredProjectContextProvider";
import { IProject } from "../types/types";

const ProjectLink = ({ project }: { project: IProject }) => {
  const { updateHoveredProject } = useHoveredContext();
  return (
    <a href={project.link} target="_blank" rel="noopener noreferrer">
      <li
        className="flex w-60 justify-between px-4 py-5 duration-200 hover:scale-105 hover:rounded-full hover:font-medium hover:shadow-lg hover:backdrop-blur-xl"
        onMouseEnter={() => updateHoveredProject(project)}
        onMouseLeave={() => updateHoveredProject(undefined)}
      >
        <span>{project.title}</span>
        <span className="text-gray-400">{project.year}</span>
      </li>
    </a>
  );
};

export default ProjectLink;
