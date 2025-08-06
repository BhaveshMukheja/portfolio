"use client";

import { useEffect, useState } from "react";
import Hero from "../Hero/comp";
import Skill from "../Skills/comp";
import Timeline from "../Timeline/comp";
import Projects from "../Projects/comp";
import Competions from "../Competitions/comp";
import AboutMe from "../Contact/comp";
import SciFiRoom from "../3D_Models/LoFiGirlRoom/comp";
import Footer from "../Footer/comp";
import Loader from "../Loader/comp";

export default function Dashboard() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!loaded && <Loader />}

      {/* Pre-load Heroduring loader */}
      {/* <div className={`${loaded ? "" : "invisible absolute -z-10"}`}> */}
      {/* </div> */}

      {loaded && (
        <main>
          <Hero/>
          <SciFiRoom />
          <Skill />
          <Timeline />
          <div className="h-screen" />
          <Projects />
          <div className="h-screen" />
          <Competions />
          <AboutMe />
          <Footer />
        </main>
      )}
    </>
  );
}
