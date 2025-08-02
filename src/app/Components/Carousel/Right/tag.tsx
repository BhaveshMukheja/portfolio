"use client";
import React from "react";
import { motion, useTransform, MotionValue } from "framer-motion";
import useWindowWidth from "@/app/Hooks/useWindowWidth";

type Props = {
  mouseX: MotionValue<number>;
};

const tag = ({ mouseX }: Props) => {
  const width = useWindowWidth();

  // const translateX = useTransform(mouseX, [0, width], ['100%', '0%']) // Reveal left image as mouse moves left
  const opacity = useTransform(mouseX,[width/2, width-width/4], [1, 0]);

  // console.log(mouseX);

  return (
    <div className="h-screen">
      <motion.div
        style={{ opacity }}
        transition={{
          type: "tween",
          ease: "easeOut",
          duration: 0.5,
        }}
        className="absolute top-[35%] right-[5%]"
      >
        <p className="text-5xl font-rob">Web Developer</p>
        <p className="text-lg mt-5 text-gray-500">
          Front end developer who writes
          <br />
          clean, elegant, and efficient code
        </p>
      </motion.div>
    </div>
  );
};

export default tag;
