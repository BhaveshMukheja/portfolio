'use client'
import React from 'react'
import Room from './Sc-Fi-Room/comp'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { Leva, useControls } from 'leva'
import { Suspense } from 'react'

const comp = () => {
    const x = useControls('Room', {
    posX: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    posY: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    posZ: {
      value: 2.5,
      min: -100,
      max: 100,
    },
    rotX: {
      value: 0,
      min: -10,
      max: 10,
    },
    rotY: {
      value: 0,
      min: -10,
      max: 10,
    },
    rotZ: {
      value: 0,
      min: -10,
      max: 10,
    },
    sca: {
      value: 20,
      min: -10,
      max: 10,
    },
  })
  return (
    <div>
        <div className="h-screen w-screen">
        <Leva />
        <Canvas>
          <Suspense fallback={null}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <Room
              scale={x.sca}
              position={[x.posX, x.posY, x.posZ]}
              rotation={[x.rotX, x.rotY, x.rotZ]}
            />
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
      </div>
  )
}

export default comp