"use client";

import { useEffect, useState } from "react";
import Carousel from "./Components/Hero/comp";
import Skill from "./Components/Skills/comp";
import Timeline from "./Components/Timeline/comp";
import Projects from "./Components/Projects/comp";
import Competions from "./Components/Competitions/comp";
import AboutMe from "./Components/Contact/comp";
import SciFiRoom from "./Components/3D_Models/LoFiGirlRoom/comp";
import Footer from "./Components/Footer/comp";
import SeoHead from "./Components/SeoHead/comp";
import Loader from "./Components/Loader/comp";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <SeoHead
        title="Bhavesh Mukheja | AI Researcher & Full Stack Developer"
        description="Welcome to my portfolio — I am an AI Researcher and Web Developer, and forever Physicist and musician. What am I aiming for? Bridging the gap between Physics and CS. Want to know about me, dig in!"
        url=""
        image="public/assets/projects/portfolio.png"
      />

      {/* Loader */}
      {!loaded && <Loader />}

      {/* Carousel loads *during* loader time but stays hidden */}
      <div className={`${loaded ? "" : "invisible absolute -z-10"}`}>
        <Carousel />
      </div>

      {/* Rest of content visible after loader */}
      {loaded && (
        <main>
          <SciFiRoom />
          {/* Carousel is already mounted */}

          <Skill />
          <Timeline />
          <div className="h-screen" />
          <Projects />
          <div className="h-screen" />
          <Competions />
          <AboutMe />
          <Footer />
          {/* <Loader/> */}
        </main>
      )}
    </>
  );
}
