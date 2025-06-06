'use client'

import { motion, useTransform, MotionValue } from 'framer-motion'
import useWindowWidth from '@/app/Hooks/useWindowWidth'
import Image from 'next/image'
import LeftImageSrc from '../../../../../public/assets/avtar.png'

type Props = {
  mouseX: MotionValue<number>
}

export default function LeftImage({ mouseX }: Props) {
  const width = useWindowWidth()

  const translateX = useTransform(mouseX, [0, width], ['100%', '0%']) // Reveal left image as mouse moves left
  const opacity = useTransform(mouseX, [0, width], [1, 1])

  return (
    <div className="w-1/2 h-full overflow-hidden absolute left-0 top-0">
      <motion.div
        style={{ translateX, opacity }}
        transition={{
    duration: 0.8,
  delay: 0.5,
  ease: [0, 0.71, 0.2, 1.01],
  }}
        className="w-full h-full absolute right-0 top-0"
      >
        <Image
          src={LeftImageSrc}
          alt="Left"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
    </div>
  )
}
