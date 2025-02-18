"use client";
import { createContext, useContext, useState } from "react";
import { IProject } from "../types/types";

interface HoveredContextType {
  hoveredProject: IProject | undefined;
  updateHoveredProject: (project: IProject | undefined) => void;
}

const HoveredContext = createContext<HoveredContextType | undefined>(undefined);

export const useHoveredContext = () => {
  const context = useContext(HoveredContext);
  if (!context)
    throw new Error("HoveredProjectContextProvider must wrap main component");
  return context;
};

const HoveredProjectContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [hoveredProject, setHoveredProject] = useState<IProject | undefined>(
    undefined
  );
  const updateHoveredProject = (project: IProject | undefined) => {
    console.log("Hovered Project updated succesfully", project);
    setHoveredProject(project ? project : undefined);
  };

  return (
    <HoveredContext.Provider value={{ hoveredProject, updateHoveredProject }}>
      {children}
    </HoveredContext.Provider>
  );
};

export default HoveredProjectContextProvider;
