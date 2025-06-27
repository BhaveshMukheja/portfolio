'use client'

import { useRef } from 'react'
import { useMotionValue, animate } from 'framer-motion'
import Left from './Left/comp'
import Right from './Right/comp'
import LeftTag from './Left/tag'
import RightTag from './Right/tag'
// import LeftBg from './Left/bg'
// import RightBg from './Right/bg'

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  

  const handleMouseMove = (e: React.MouseEvent) => {
    const bounds = containerRef.current?.getBoundingClientRect()
    if (!bounds) return
    const x = e.clientX
      const delta = window.innerWidth - x
    animate(mouseX, delta, {
      duration: 0.8,
      ease: [0.49, 0.04, 0.5, 0.99],
    })
    mouseX.set(x)
  }

  const handleMouseLeave = ()=>{
 animate(mouseX, window.innerWidth/2, {
      duration: 0.8,
      ease: [0.49, 0.04, 0.5, 0.99],
    })

  }

  return (
    <div
      ref={containerRef}
      className="w-screen h-screen flex overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* <RightBg mouseX={mouseX}/> */}
      {/* <LeftBg mouseX={mouseX}/> */}
      <LeftTag mouseX={mouseX}/>
      <RightTag mouseX={mouseX}/>
      <Left mouseX={mouseX} />
      <Right mouseX={mouseX} />

    </div>
  )
}

