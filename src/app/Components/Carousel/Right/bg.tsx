'use client'
import React from 'react'
import { motion, useTransform, MotionValue } from 'framer-motion'
import useWindowWidth from '@/app/Hooks/useWindowWidth'
// import CodingImg from '../../../../../public/assets/soft.png'
import Image from 'next/image'

type Props = {
  mouseX: MotionValue<number>
}


const bg = ({ mouseX }: Props) => {

    const width = useWindowWidth()
  
    const translateX = useTransform(mouseX, [0, width], ['0', '50%']) // Reveal left image as mouse moves left
    const opacity = useTransform(mouseX, [width/2, width-width/6], [1, 0])

    // console.log(mouseX)
 
    
  
  return (
    <div>
      <motion.div
       style={{ translateX,  opacity }}
        transition={{
type: 'tween',
    ease: 'easeOut',
    duration: 0.5
  }} className='text-5xl absolute right-[50%] bottom-0 overflow-hidden'>
   

        </motion.div>
    </div>
  )
}

export default bg