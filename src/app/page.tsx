'use client'
import Carousel from './Components/Carousel/comp'
import Navbar from './Components/Navbar/comp'
import Skill from './Components/Skills/comp'
import Timeline from './Components/Timeline/comp'
import Projects from './Components/Projects/comp'
import Competions from './Components/Competitions/comp'
import TerminalComponent from './Components/TerminalComponent/comp'
import Playground from './Components/MLPlayground/comp'
import IPhoneComp from './Components/AboutMe/comp'


export default function Home() {
  

  return (
    <>
      <Navbar />
      <Carousel />
      <Skill />
      <Timeline/>
      <Projects/>
      <Competions/>
      <TerminalComponent/>
      <IPhoneComp/>     
    </>
  )
}
