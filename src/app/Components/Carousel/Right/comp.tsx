"use client";

import { motion, useTransform, MotionValue } from "framer-motion";
import useWindowWidth from "@/app/Hooks/useWindowWidth";
import Image from "next/image";
import RightImageSrc from "../../../../../public/assets/yoyo.png";

type Props = {
  mouseX: MotionValue<number>;
};

export default function RightImage({ mouseX }: Props) {
  const width = useWindowWidth();

  // Opposite direction: move right image LEFT when cursor goes RIGHT
  const translateX = useTransform(mouseX, [0, width], ["-100%", "0%"]);

  return (
    <div className="w-1/2 h-full overflow-hidden absolute right-0 bottom-0">
      <motion.div
        style={{ translateX }}
        transition={{
          duration: 0.8,
          ease: [0.49, 0.04, 0.5, 0.99],
        }}
        className="w-full h-[650px] absolute -left-9 bottom-0"
      >
        <div className="absolute bottom-0 ">
          <div className="w-[700px] h-86 rounded-t-full border-t-4 border-x-4 border-b-0 border-transparent bg-gradient-to-l from-pink-600 via-violet-600 to-indigo-600 "></div>
        </div>

        <Image
          src={RightImageSrc}
          alt="Right"
          fill
          className="object-cover "
          priority
        />
      </motion.div>
    </div>
  );
}
