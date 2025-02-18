import { projects } from "../data/projects";
import ProjectLink from "./ProjectLink";

const NavBar = () => {
  return (
    <ul className="flex h-full w-full flex-col items-center justify-center rounded-lg p-4 lg:items-end">
      {projects.map((project) => (
        <ProjectLink key={project.id} project={project} />
      ))}
    </ul>
  );
};

export default NavBar;
