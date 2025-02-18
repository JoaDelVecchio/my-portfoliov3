"use client";
import { useHoveredContext } from "../context/HoveredProjectContextProvider";
import HoveredProject from "./HoveredProject";
import PersonalInfo from "./PersonalInfo";

const Home = () => {
  const { hoveredProject } = useHoveredContext();
  return (
    <div className="hidden md:flex min-h-full w-full items-center justify-start p-10">
      {hoveredProject ? (
        <HoveredProject project={hoveredProject} />
      ) : (
        <PersonalInfo />
      )}
    </div>
  );
};

export default Home;
