import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import {
//   Lexend_Tera,
//   Roboto_Mono,
//   Newsreader,
//   Pacifico,
// } from "next/font/google";
import "./globals.css";
import SkillHoverProvider from "./Context/skillHoverContext";
import ProjectHoverProvider from "./Context/projectHoverContext";
import Navbar from "./Components/Navbar/comp";

// const lexend = Lexend_Tera({
//   subsets: ["latin"],
//   variable: "--font-lexend",
//   display: "swap",
// });

// const newsreader = Newsreader({
//   subsets: ["latin"],
//   variable: "--font-newsreader",
//   display: "swap",
// });

// const pacifico = Pacifico({
//   subsets: ["latin"],
//   weight: "400",
//   variable: "--font-pacifico",
//   display: "swap",
// });

// const roboto = Roboto_Mono({
//   subsets: ["latin"],
//   variable: "--font-roboto",
//   display: "swap",
// });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/dheereshagrwal/coloured-icons@master/src/app/ci.min.css"
        />
      </head>

      <body
        className={`
    ${geistSans.variable}
    ${geistMono.variable}
    antialiased `}
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
