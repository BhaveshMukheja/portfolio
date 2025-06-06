'use client'
import React from 'react'
import { motion, useTransform, MotionValue } from 'framer-motion'
import useWindowWidth from '@/app/Hooks/useWindowWidth'

type Props = {
  mouseX: MotionValue<number>
}


const tag = ({ mouseX }: Props) => {

    const width = useWindowWidth()
  
    // const translateX = useTransform(mouseX, [0, width], ['100%', '0%']) // Reveal left image as mouse moves left
    const opacity = useTransform(mouseX, [width/6, width/2], [0, 1])

    console.log(mouseX)
 
    
  
  return (
    <div>
      <motion.div
       style={{  opacity }}
        transition={{
type: 'tween',
    ease: 'easeOut',
    duration: 0.5
  }} className='text-5xl absolute top-[20%] right-[10%]'>
        Software<br></br> Developer 
  <p className='text-lg mt-5'>
          Front end developer who writes<br/>clean, elegant, and efficient code
        </p>
        </motion.div>
    </div>
  )
}

export default tag