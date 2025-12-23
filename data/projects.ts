import { IProject } from "../types/types";

const isLocal = process.env.NODE_ENV === "development";

export const projects: IProject[] = [
  {
    id: "BASinFiltro",
    title: "BA Sin Filtro AI",
    description:
      "Scrapes news from Argentina's biggest outlets and uses AI to rewrite it into unbiased, clearer, more understandable articles with added context.",
    video: isLocal
      ? "/videos/BASinFiltro.mp4"
      : "https://7zrt0z2xf10hjynz.public.blob.vercel-storage.com/BASINFILTRO",
    year: 2025,
    link: "https://ba-sin-filtro.vercel.app/",
  },
  {
    id: "PrestaYa",
    title: "Presta Ya",
    description:
      "Loan website that streamlines applications and repayment tracking.",
    video: isLocal
      ? "/videos/PrestaYa.mp4"
      : "https://7zrt0z2xf10hjynz.public.blob.vercel-storage.com/Screen%20Recording%202025-12-08%20at%2011.37.18.mov",
    year: 2024,
    link: "https://presta-ya-web.vercel.app/dashboard",
  },

  {
    id: "ProteinPlates",
    title: "ProteinPlates",
    description:
      "High-protein meal planner with recipes, macro breakdowns, and weekly prep guidance.",
    video: isLocal
      ? "/videos/ProteinPlates.mp4"
      : "https://kkdaquubuhuwwawu.public.blob.vercel-storage.com/ProteinPlates-PqTTEUaGOhLldAdnJ60RI4gqlpOSwZ.mp4",
    year: 2022,
    link: "https://proteinplates-sigma.vercel.app/",
  },

  {
    id: "Muvi",
    title: "Muvi",
    description:
      "Movie discovery experience with trailers, ratings, and a personalized watchlist.",
    video: isLocal
      ? "/videos/Muvi.mp4"
      : "https://kkdaquubuhuwwawu.public.blob.vercel-storage.com/Muvi-RSTap4ASHKP6B21v4AldljOfQvevhO.mp4",
    year: 2022,
    link: "https://muvi-liart.vercel.app/",
  },
];
