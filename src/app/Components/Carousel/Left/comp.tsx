"use client";

import { motion, useTransform, MotionValue } from "framer-motion";
import useWindowWidth from "@/app/Hooks/useWindowWidth";
import Image from "next/image";
import LeftImageSrc from "../../../../../public/assets/yoyo4.png";

type Props = {
  mouseX: MotionValue<number>;
};

export default function LeftImage({ mouseX }: Props) {
  const width = useWindowWidth();

  // Opposite direction: move left image RIGHT when cursor goes LEFT
  const translateX = useTransform(mouseX, [0, width], ["0%", "100%"]);

  return (
    <div className="w-1/2 h-full overflow-hidden absolute left-0 top-0">
      <motion.div
        style={{ translateX }}
        transition={{
          duration: 0.8,
          ease: [0.49, 0.04, 0.5, 0.99],
        }}
        className="w-full h-[650px] absolute right-9 bottom-0"
      >
        <div className="absolute bottom-0 ">
          <div className="w-[700px] h-86 rounded-t-full border-t-4 border-x-4 border-b-0 border-transparent bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 "></div>
        </div>

        <Image
          src={LeftImageSrc}
          alt="Left"
          fill
          className="object-cover brightness-125"
          priority
        />
      </motion.div>
    </div>
  );
}
