"use client";
import { useHoveredContext } from "../context/HoveredProjectContextProvider";
import { IProject } from "../types/types";

const preloadedVideos = new Set<string>();

const prefetchVideo = (src: string) => {
  if (!src || preloadedVideos.has(src)) return;
  const video = document.createElement("video");
  video.preload = "metadata";
  video.src = src;
  video.load();
  preloadedVideos.add(src);
};

const ProjectLink = ({ project }: { project: IProject }) => {
  const { updateHoveredProject } = useHoveredContext();
  return (
    <a href={project.link} target="_blank" rel="noopener noreferrer">
      <li
        className="flex w-72 justify-between px-4 py-5 duration-200 hover:scale-105 hover:rounded-full hover:font-medium hover:shadow-lg hover:backdrop-blur-xl"
        onMouseEnter={() => {
          prefetchVideo(project.video);
          updateHoveredProject(project);
        }}
      >
        <span>{project.title}</span>
        <span className="text-gray-400">{project.year}</span>
      </li>
    </a>
  );
};

export default ProjectLink;
