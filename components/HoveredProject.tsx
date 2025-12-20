"use client";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { IProject } from "../types/types";
import { useHoveredContext } from "../context/HoveredProjectContextProvider";

const HoveredProject = ({ project }: { project: IProject }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { updateHoveredProject } = useHoveredContext();

  // ✅ Memoize video source to prevent unnecessary re-renders
  const videoSrc = useMemo(() => project.video, [project.video]);

  return (
    <div className="w-full">
      <div className="flex w-full flex-col gap-6">
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

        <div className="flex w-full flex-col gap-4 text-gray-800">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="text-lg font-semibold tracking-tight text-gray-900 md:text-2xl">
              {project.title}
            </h3>
            <span className="text-sm text-gray-400 md:text-base">
              {project.year}
            </span>
          </div>
          <p className="text-sm leading-relaxed text-gray-600 md:text-base">
            {project.description}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <button
              type="button"
              onClick={() => updateHoveredProject(undefined)}
              className="inline-flex items-center gap-2 text-gray-500 transition-colors hover:text-gray-800"
            >
              Return to profile
            </button>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-medium text-gray-900 underline decoration-gray-300 underline-offset-4 transition-colors hover:decoration-gray-600"
            >
              View project
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
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoveredProject;
