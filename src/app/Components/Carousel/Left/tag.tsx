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
  const opacity = useTransform(mouseX, [width / 4, width / 2], [0, 1]);

  return (
    <div className="h-screen">
      <motion.div
        style={{ opacity }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className=" absolute top-[35%] left-[10%] text-center"
      >
       <p className="text-5xl font-rob "> AI Researcher </p>
        <p className="text-lg mt-5 text-gray-400">
          Exploring intelligence through 
          <br/>data, models, and the cosmos
        </p>
      </motion.div>
    </div>
  );
};

export default tag;
