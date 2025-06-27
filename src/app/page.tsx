'use client'
import Carousel from './Components/Carousel/comp'
import Navbar from './Components/Navbar/comp'
import Skill from './Components/Skills/comp'
import Timeline from './Components/Timeline/comp'
import Projects from './Components/Projects/comp'
import Competions from './Components/Competitions/comp'
import AboutMe from './Components/AboutMe/comp'



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

    </>
  )
}
