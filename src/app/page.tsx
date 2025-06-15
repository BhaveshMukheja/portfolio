'use client'
import { Suspense } from 'react'
import Carousel from './Components/Carousel/comp'
import Navbar from './Components/Navbar/comp'
import Skill from './Components/Skills/comp'
import Room from './Components/Sc-Fi-Room/comp'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { AmbientLight, DirectionalLight } from 'three'



export default function Home() {
  return (
    <>
    <Navbar/>
      <Carousel/>
      <Skill/>
      <div className='h-screen w-screen'>
      <Canvas>
        <Suspense fallback={null}> 
          <PerspectiveCamera makeDefault position={[0,0,30]}/>

          <Room scale={10} position={[5,0,0]} 
          // rotation={[0, -Math.PI/2, 0]}
          />
          <ambientLight intensity={1}/>
          <directionalLight position={[10, 10, 10]} intensity={0.5}/>
          
          


        </Suspense>
      </Canvas>
      </div>
    </>
  )
}