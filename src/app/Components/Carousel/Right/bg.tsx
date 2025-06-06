'use client'
import React from 'react'
import { motion, useTransform, MotionValue } from 'framer-motion'
import useWindowWidth from '@/app/Hooks/useWindowWidth'
import CodingImg from '../../../../../public/assets/coding.png'
import Image from 'next/image'

type Props = {
  mouseX: MotionValue<number>
}


const bg = ({ mouseX }: Props) => {

    const width = useWindowWidth()
  
    const translateX = useTransform(mouseX, [0, width], ['50%', '0%']) // Reveal left image as mouse moves left
    const opacity = useTransform(mouseX, [width/6, width/2], [0, 1])

    // console.log(mouseX)
 
    
  
  return (
    <div>
      <motion.div
       style={{ translateX,  opacity }}
        transition={{
type: 'tween',
    ease: 'easeOut',
    duration: 0.5
  }} className='text-5xl absolute bottom-[0] right-[10%] rotate-5'>
   
   <Image src={CodingImg} alt='Coding image'/>
        </motion.div>
    </div>
  )
}

export default bg