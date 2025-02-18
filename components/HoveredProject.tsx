"use client";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { IProject } from "../types/types";

const HoveredProject = ({ project }: { project: IProject }) => {
  const [isLoading, setIsLoading] = useState(true);

  // ✅ Memoize video source to prevent unnecessary re-renders
  const videoSrc = useMemo(() => project.video, [project.video]);

  return (
    <div className="relative w-full">
      {/* ✅ Improved Loading Animation (only visible while loading) */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center rounded-xl bg-gray-900 bg-opacity-50 transition-opacity duration-300"
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoading ? 1 : 0 }}
        exit={{ opacity: 0 }}
      >
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-white border-t-transparent"></div>
      </motion.div>

      {/* ✅ Preloading the video with smooth transition */}
      <motion.video
        src={videoSrc}
        className="opacity-0 h-auto w-full rounded-xl shadow-lg md:block transition-opacity duration-300 ease-in-out"
        autoPlay
        loop
        muted
        playsInline
        preload="auto" // ✅ Preloads video so it's ready before showing
        onLoadedData={() => setIsLoading(false)} // ✅ Hides loading animation when video is ready
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: isLoading ? 0 : 1, scale: 1 }}
        whileHover={{ scale: 1.02 }} // ✅ Smooth hover effect
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />
    </div>
  );
};

export default HoveredProject;
