'use client'

import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

const skills = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js',
  'Tailwind', 'Framer Motion', 'Three.js', 'MongoDB', 'Express',
  'HTML', 'CSS', 'Git', 'GraphQL', 'Docker', 'Figma'
]

function SkillTextCloud() {
  const groupRef = useRef<THREE.Group>(null!)

  // Rotation animation
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002
    }
  })

  const radius = 4
  const count = skills.length

  return (
    <group ref={groupRef}>
      {skills.map((skill, i) => {
        const phi = Math.acos(-1 + (2 * i) / count)
        const theta = Math.sqrt(count * Math.PI) * phi

        const x = radius * Math.cos(theta) * Math.sin(phi)
        const y = radius * Math.sin(theta) * Math.sin(phi)
        const z = radius * Math.cos(phi)

        return (
          <Text
            key={skill}
            position={[x, y, z]}
            fontSize={0.5}
            color="#facc15"
            anchorX="center"
            anchorY="middle"
          >
            {skill}
          </Text>
        )
      })}
    </group>
  )
}

export default function comp() {
  return (
    <div className="w-full h-[600px]">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} />
        <SkillTextCloud />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  )
}
