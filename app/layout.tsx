import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HoveredProjectContextProvider from "@/context/HoveredProjectContextProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joaquin Del Vecchio",
  description: "Joaquin Del Vecchio's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <HoveredProjectContextProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={` ${inter.variable} antialiased flex flex-col min-h-screen overflow-y-auto min-w-full`}
        >
          {children}
        </body>
      </html>
    </HoveredProjectContextProvider>
  );
}
