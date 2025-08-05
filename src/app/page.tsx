import SeoHead from "./Components/SeoHead/comp";
import Dashboard from "./Components/Dashboard/comp"; // new client component

export default function Home() {
  return (
    <>
      <SeoHead
        title="Bhavesh Mukheja | AI Researcher & Full Stack Developer"
        description="Welcome to my portfolio — I am an AI Researcher and Web Developer, and forever Physicist and musician. What am I aiming for? Bridging the gap between Physics and CS. Want to know about me, dig in!"
        url=""
        image="public/assets/projects/portfolio.png"
      />

      <Dashboard />
    </>
  );
}
