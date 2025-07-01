'use client'
import React, { useRef, useLayoutEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Card from './TimelineCard/comp'
import expData from '../../Data/expAndEdu.json'

type TimelineItem = {
  title: string
  subtitle: string
  description: string
}

const timelineData: TimelineItem[] = [
  { title: 'High School', subtitle: '2009–2023', description: 'Graduated with passion for tech.' },
  { title: 'College', subtitle: '2023–2027', description: 'Majoring in Computer Science.' },
  { title: 'Internship', subtitle: '2024–2025', description: 'Frontend at ShadowFox.' },
  { title: 'Research', subtitle: '2025–2026', description: 'Worked on ML applications in astrophysics.' },
]

const TimelineCard: React.FC<{ item: TimelineItem; index: number }> = ({ item, index }) => {
  const cardRef = useRef<HTMLDivElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [lineWidth, setLineWidth] = React.useState(0)

  const side = index % 2 === 0 ? 'left' : 'right'
  const inView = useInView(containerRef, { once: true, margin: '-100px' })

  const computeDistance = () => {
    if (cardRef.current && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect()
      const cardRect = cardRef.current.getBoundingClientRect()

      const centerX = containerRect.left + containerRect.width / 2
      const cardSideX = side === 'left' ? cardRect.right : cardRect.left
      const distance = Math.abs(cardSideX - centerX)
      setLineWidth(distance ) // subtract a bit for visual spacing
    }
  }

  return (
    <div ref={containerRef} className={`relative w-full flex ${side === 'left' ? 'justify-start' : 'justify-end'} mb-16`}>
      {/* Bullet and connector */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.3 }}
          className="w-4 h-4 rounded-full bg-blue-500 z-10"
        />

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: lineWidth }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className={`h-[2px] absolute top-1.5 ${side === 'left' ? 'right-2' : 'left-2'} bg-blue-500`}
        />
      </div>

      {/* Card */}
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, x: side === 'left' ? -100 : 100 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        onAnimationComplete={() => computeDistance()}
        className={`max-w-sm w-[80%] px-6 py-4 rounded-xl border-2 ${
          inView ? 'border-blue-500 shadow-xl bg-white' : 'border-gray-300 bg-gray-100'
        } ${side === 'left' ? 'ml-12' : 'mr-12'}`}
      >
        <h3 className="text-xl font-semibold">{item.title}</h3>
        <small className="text-gray-500">{item.subtitle}</small>
        <p className="text-gray-700 mt-2">{item.description}</p>
      </motion.div>
    </div>
  )
}

const Timeline: React.FC = () => {
  const containerRef = useRef(null)
  const inView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <>
    
   <div className='text-5xl flex items-center justify-center'> Education and Experience</div>
    <div ref={containerRef} className="relative w-full max-w-5xl mx-auto px-4 py-20 mt-20">
      {/* Vertical Timeline Line */}
      <motion.div
        initial={{ height: 0 }}
        animate={inView ? { height: '80%' } : {}}
        transition={{ duration: 2, ease: 'easeInOut' }}
        className="absolute left-1/2 transform -translate-x-1/2 top-0 w-1 bg-blue-500 z-0"
      />
      {/* Cards */}
      {expData.map((item, i) => (
        < Card data={item} key={i} id={i}/>
      ))}
    </div>
    </>
  )
}

export default Timeline
