'use client'

import { useRef } from 'react'
import { useMotionValue } from 'framer-motion'
import Left from './Left/comp'
import Right from './Right/comp'
import LeftTag from './Left/tag'
import RightTag from './Right/tag'
import LeftBg from './Left/bg'
import RightBg from './Right/bg'

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)

  const handleMouseMove = (e: React.MouseEvent) => {
    const bounds = containerRef.current?.getBoundingClientRect()
    if (!bounds) return
    const x = e.clientX - bounds.left
    mouseX.set(x)
  }

  return (
    <div
      ref={containerRef}
      className="w-screen h-screen flex overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <RightBg mouseX={mouseX}/>
      <LeftBg mouseX={mouseX}/>
      <LeftTag mouseX={mouseX}/>
      <RightTag mouseX={mouseX}/>
      <Left mouseX={mouseX} />
      <Right mouseX={mouseX} />

    </div>
  )
}
