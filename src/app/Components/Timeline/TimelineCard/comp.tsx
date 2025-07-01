'use client'
import { motion, useInView } from 'framer-motion'
import React, { useRef, useState, useEffect } from 'react'

interface CardPromps {
  data: Record<string, any>
  id: number
}

const ChatBotCard: React.FC<CardPromps> = ({ data, id }) => {
  const cardRef = useRef<HTMLDivElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [lineWidth, setLineWidth] = useState(0)

  const side = id % 2 === 0 ? 'left' : 'right'
  const inView = useInView(containerRef, { once: true, margin: '-100px' })

  const computeDistance = () => {
    if (cardRef.current && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect()
      const cardRect = cardRef.current.getBoundingClientRect()
      const centerX = containerRect.left + containerRect.width / 2
      const cardSideX = side === 'left' ? cardRect.right : cardRect.left
      const distance = Math.abs(cardSideX - centerX)
      setLineWidth(distance)
    }
  }

  // 🛠️ Call `computeDistance` only after inView becomes true
  useEffect(() => {
    if (inView) {
      computeDistance()
    }
  }, [inView])

  return (
    <div
      ref={containerRef}
      className={`relative w-full flex ${side === 'left' ? 'justify-start' : 'justify-end'} mb-16`}
    >
      {/* Center bullet and line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.3 }}
          className="w-4 h-4 rounded-full bg-blue-500 z-10"
        />
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: lineWidth } : { width: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className={`h-[2px] absolute top-1.5 ${side === 'left' ? 'right-2' : 'left-2'} bg-blue-500`}
        />
      </div>

      {/* Card */}
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, x: side === 'left' ? -500 : 400 }}
        animate={inView ? { opacity: 1, x: side==='left'?-300:250 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10 ${
          side === 'left' ? 'ml-12' : 'mr-12'
        }`}
      >
        {/* Glow blob */}
        <span className="absolute -top-5 -left-8 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]" />

        <div className="relative z-10 mx-auto max-w-md">
          <img
            src={data.logo}
            alt={data.title}
            width={id === 0 || id === 1 ? 125 : 50}
            height={100}
            className="mx-auto"
          />
          <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
            <p>
              Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.
            </p>
          </div>
          <div className="pt-5 text-base font-semibold leading-7">
            <p>
              <a href="#" className="text-sky-500 transition-all duration-300 group-hover:text-white">
                Read the docs →
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ChatBotCard
