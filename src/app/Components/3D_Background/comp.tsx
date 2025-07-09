'use client'

import React, { useRef } from 'react'
import Room from './Sc-Fi-Room/comp'
import { Canvas, useFrame } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { Suspense } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { GirlRoom } from './Sc-Fi-Room/girlRoom'
import { Model } from './Sc-Fi-Room/Untitled'

const AnimatedRoom = () => {
  const { scrollYProgress } = useScroll()

  // Interpolations based on scroll position (tweak these as needed)
  const posX = useTransform(scrollYProgress, [0.5, 1], [-2, 3.4])
  const posY = useTransform(scrollYProgress, [0.5, 1], [-5.4, -10])
  const posZ = useTransform(scrollYProgress, [0.5, 1], [22.7, 28.7])
  const rotX = useTransform(scrollYProgress, [0.5, 1], [0.5, 0.3])
  const rotY = useTransform(scrollYProgress, [0.5, 1], [-1.5, -1.6])
  const rotZ = useTransform(scrollYProgress, [0.5, 1], [-0.9, 0])
  const sca = useTransform(scrollYProgress, [0.5, 1], [1, 1.1])

  const ref = useRef<any>(0)

  useFrame(() => {
    if (ref.current) {
      ref.current.position.set(posX.get(), posY.get(), posZ.get())
      ref.current.rotation.set(rotX.get(), rotY.get(), rotZ.get())
      ref.current.scale.setScalar(sca.get())
    }
  })

  return <Model ref={ref} />
}

const SciFiRoomScene = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 30]} />
          <AnimatedRoom />
          {/* <GirlRoom/> */}
          {/* <Model/> */}
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 10]} intensity={0.5} />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default SciFiRoomScene
