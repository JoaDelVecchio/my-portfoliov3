import { IProject } from "../types/types";

const isLocal = process.env.NODE_ENV === "development";

export const projects: IProject[] = [
  {
    id: "BASinFiltro",
    title: "BA Sin Filtro AI",
    video: isLocal
      ? "/videos/BASinFiltro.mp4"
      : "https://7zrt0z2xf10hjynz.public.blob.vercel-storage.com/Screen%20Recording%202025-12-08%20at%2011.53.12.mov",
    year: 2025,
    link: "https://ba-sin-filtro.vercel.app/",
  },
  {
    id: "PrestaYa",
    title: "Presta Ya",
    video: isLocal
      ? "/videos/PrestaYa.mp4"
      : "https://7zrt0z2xf10hjynz.public.blob.vercel-storage.com/Screen%20Recording%202025-12-08%20at%2011.37.18.mov",
    year: 2025,
    link: "https://presta-ya-web.vercel.app/dashboard",
  },
  {
    id: "ChatWithPDF",
    title: "ChatWithPDF (Early-stage)",
    video: isLocal
      ? "/videos/ChatWithPDF.mp4"
      : "https://kkdaquubuhuwwawu.public.blob.vercel-storage.com/ChatWithPDF-cWqkzXMqdpw0ILurtce5TXdGx0DSfu",
    year: 2025,
    link: "https://chat-with-pdf-olive.vercel.app/",
  },
  {
    id: "247Pilars",
    title: "247Pilars",
    video: isLocal
      ? "/videos/247Pilars.mp4"
      : "https://kkdaquubuhuwwawu.public.blob.vercel-storage.com/247Pilars-bVqutjfjwBvMHCicOXWKQa5teBNtyH.mp4",
    year: 2025,
    link: "https://247-pilars.vercel.app/profile/login",
  },
  {
    id: "WAGMI Crypto",
    title: "WAGMI Crypto",
    video: isLocal
      ? "/videos/WAGMI.mp4"
      : "https://kkdaquubuhuwwawu.public.blob.vercel-storage.com/WAGMI-tRJiUXHKJwt54mCkOaTr0aIDJOAiwz",
    year: 2025,
    link: "https://wagmi-steel.vercel.app/",
  },
  {
    id: "Top3",
    title: "Top3",
    video: isLocal
      ? "/videos/Top3.mp4" // Local fallback
      : "https://kkdaquubuhuwwawu.public.blob.vercel-storage.com/Screen%20Recording%202025-02-10%20at%2012.42.33-KA6UOr0UHPkLC6TWpryw4bQjajntY8.mov",
    year: 2025,
    link: "https://top3-gamma.vercel.app/",
  },

  {
    id: "CountryInfo",
    title: "CountryInfo",
    video: isLocal
      ? "/videos/CountryInfo.mp4"
      : "https://kkdaquubuhuwwawu.public.blob.vercel-storage.com/CountryInfo-H7BRNWE6whK6RCs1GKa8DXyMd4vv9V.mp4",
    year: 2025,
    link: "https://the-country-info-app-iota.vercel.app/",
  },
  {
    id: "ProteinPlates",
    title: "ProteinPlates",
    video: isLocal
      ? "/videos/ProteinPlates.mp4"
      : "https://kkdaquubuhuwwawu.public.blob.vercel-storage.com/ProteinPlates-PqTTEUaGOhLldAdnJ60RI4gqlpOSwZ.mp4",
    year: 2025,
    link: "https://proteinplates-sigma.vercel.app/",
  },
  {
    id: "KeyPlace",
    title: "KeyPlace",
    video: isLocal
      ? "/videos/KeyPlace.mp4"
      : "https://kkdaquubuhuwwawu.public.blob.vercel-storage.com/KeyPlace-DQiW4FO9tDb4guu1ept5ANlLu9wKR7.mp4",
    year: 2025,
    link: "https://key-place.vercel.app/",
  },
  {
    id: "Jym",
    title: "Jym",
    video: isLocal
      ? "/videos/Jym.mp4"
      : "https://kkdaquubuhuwwawu.public.blob.vercel-storage.com/Jym-geu5sNRWIz8P3SBx5U7Px5HUrgx2PR.mp4",
    year: 2025,
    link: "https://gym-app-tau-swart.vercel.app/",
  },
  {
    id: "Muvi",
    title: "Muvi",
    video: isLocal
      ? "/videos/Muvi.mp4"
      : "https://kkdaquubuhuwwawu.public.blob.vercel-storage.com/Muvi-RSTap4ASHKP6B21v4AldljOfQvevhO.mp4",
    year: 2025,
    link: "https://muvi-liart.vercel.app/",
  },
];
