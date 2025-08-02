"use client";
import Carousel from "./Components/Carousel/comp";
import Navbar from "./Components/Navbar/comp";
import Skill from "./Components/Skills/comp";
import Timeline from "./Components/Timeline/test";
import Projects from "./Components/Projects/comp";
import Competions from "./Components/Competitions/comp";
import AboutMe from "./Components/AboutMe/comp";
import SciFiRoom from "./Components/3D_Background/comp";
import Footer from "./Components/Footer/comp";


export default function Home() {
  return (
    <>
      <SciFiRoom />
      <Carousel />
      <Skill />
      <Timeline />
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <Projects />
      <div className="h-screen"></div>
      <Competions />
      <AboutMe />
      <Footer/>
    </>
  );
}
