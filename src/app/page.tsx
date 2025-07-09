'use client'
import Carousel from './Components/Carousel/comp'
import Navbar from './Components/Navbar/comp'
import Skill from './Components/Skills/comp'
import Timeline from './Components/Timeline/test'
import Projects from './Components/Projects/comp'
import Competions from './Components/Competitions/comp'
import AboutMe from './Components/AboutMe/comp'
import SciFiRoom from './Components/3D_Background/comp'
import { GirlRoom } from './Components/3D_Background/Sc-Fi-Room/girlRoom'



export default function Home() {


  return (
    <>
   
      <Navbar />
      <Carousel />
      <Skill />
      <Timeline/>
      <Projects/>
      <Competions/>
      <AboutMe/>
      {/* <GirlRoom/> */}
      <SciFiRoom/>

    </>
  )
}

/*
on skill and experience and education 
{"posX":2.5}
{"posY":-0.10000000000000009}
{"posZ":30.5}
{"rotX":0}
{"rotY":0}
{"rotZ":0}
{"sca":10}
*/
/*
on projects 
{"posX":3.9000000000000004}
{"posY":-0.9000000000000004}
{"posZ":20.5}
{"rotX":0.2}
{"rotY":0}
{"rotZ":0}
{"sca":10}
*/ 
