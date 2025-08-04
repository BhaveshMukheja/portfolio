import Carousel from "./Components/Carousel/comp";
import Skill from "./Components/Skills/comp";
import Timeline from "./Components/Timeline/comp";
import Projects from "./Components/Projects/comp";
import Competions from "./Components/Competitions/comp";
import AboutMe from "./Components/AboutMe/comp";
import SciFiRoom from "./Components/3D_Background/comp";
import Footer from "./Components/Footer/comp";
import SeoHead from "./Components/SeoHead/comp";


export default function Home() {
  return (
    <>
    <SeoHead
      title="Bhavesh Mukheja | AI Researcher & Full Stack Developer"
      description="Welcome to my portfolio — I am an AI Researcher and Web Developer, and forever Physicist and musicsian. What am I aiming for? Bridging the gap between Physics and CS. Want to know about me, dig in!"
      url=""
      image="public/assets/projects/portfolio.png"
    />
    <main>
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
      </main>
    </>
  );
}