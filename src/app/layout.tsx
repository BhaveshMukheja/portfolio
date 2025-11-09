"use client"; // Make RootLayout a client component (if needed, read below)

import dynamic from "next/dynamic";
import { Geist, Geist_Mono, Pacifico, Tangerine } from "next/font/google";
import "./globals.css";
import SkillHoverProvider from "./Context/skillHoverContext";
import ProjectHoverProvider from "./Context/projectHoverContext";

// Dynamically import Navbar only on client
const Navbar = dynamic(() => import("./Components/Navbar/comp"), {
  ssr: false,
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instaFont = Pacifico({
  variable: "--font-insta",
  subsets: ["latin"],
  weight: "400",
});

const tang = Tangerine({
  variable: "--font-tang",
  subsets: ["latin"],
  weight: "400",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/dheereshag/coloured-icons@master/app/ci.min.css"
        />
      </head>
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${instaFont.variable}
          ${tang.variable}
          antialiased
        `}
      >
        <SkillHoverProvider>
          <ProjectHoverProvider>
            <Navbar />
            {children}
          </ProjectHoverProvider>
        </SkillHoverProvider>
      </body>
    </html>
  );
}
