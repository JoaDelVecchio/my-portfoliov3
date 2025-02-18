"use client";
import { useState } from "react";

import { motion } from "framer-motion";
import { IProject } from "../types/types";

const HoveredProject = ({ project }: { project: IProject }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full">
      {/* Loading Indicator */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-gray-900 bg-opacity-50">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-white border-t-transparent"></div>
        </div>
      )}

      {/* Video */}
      <motion.video
        src={project.video}
        className="hidden h-auto w-full rounded-xl shadow-lg md:block"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onCanPlay={() => setIsLoading(false)}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />
    </div>
  );
};

export default HoveredProject;
