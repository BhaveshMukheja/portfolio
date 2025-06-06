'use client'

import * as THREE from 'three'
import { useRef, useState, useMemo, useEffect, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Billboard, Text, TrackballControls } from '@react-three/drei'
import { div } from 'framer-motion/client'

const skills = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js',
  'Tailwind', 'Framer Motion', 'Three.js', 'MongoDB', 'Express',
  'HTML', 'CSS', 'Git', 'GraphQL', 'Docker', 'Figma'
]

function Word({ children, position }: { children: string; position: THREE.Vector3 }) {
  const color = new THREE.Color()
  const fontProps = {
    fontSize: 3.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    'material-toneMapped': false,
  }

  const ref = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  const over = (e: any) => {
    e.stopPropagation()
    setHovered(true)
  }
  const out = () => setHovered(false)

  useEffect(() => {
    if (hovered) document.body.style.cursor = 'pointer'
    return () => {
      document.body.style.cursor = 'auto'
    }
  }, [hovered])

  useFrame(() => {
    if (ref.current) {
      const mat = ref.current.material as THREE.MeshBasicMaterial
      mat.color.lerp(color.set(hovered ? '#00ff88' : 'white'), 0.1)
    }
  })

  return (
    <Billboard position={position}>
      <Text
        ref={ref}
        onPointerOver={over}
        onPointerOut={out}
        onClick={() => console.log(children)}
        {...fontProps}
        material-depthTest={false}
        material-transparent={true}
        renderOrder={999}
      >
        {children}
      </Text>
    </Billboard>
  )
}


function Cloud({ radius = 30 }) {
  const groupRef = useRef<THREE.Group>(null)

  const positions = useMemo(() => {
    const spherical = new THREE.Spherical()
    return skills.map((_, i) => {
      const phi = Math.acos(-1 + (2 * i) / skills.length)
      const theta = Math.sqrt(skills.length * Math.PI) * phi
      return new THREE.Vector3().setFromSpherical(spherical.set(radius, phi, theta))
    })
  }, [radius])

  // ✅ This is now inside Canvas
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002
    }
  })

  return (
    <group ref={groupRef}>
      {skills.map((skill, index) => (
        <Word key={index} position={positions[index]} children={skill}  />
      ))}
    </group>
  )
}

export default function comp() {
  return (
    <div className='h-screen w-screen overflow-hidden'>
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 80], fov: 90 }} >
      <fog attach="fog" args={['#202025', 0, 80]} />
      <ambientLight intensity={1.2} />
      <Suspense fallback={null}>
        <Cloud radius={30} />
      </Suspense>
      <TrackballControls noZoom />
    </Canvas>
    </div>
  )
}
