"use client"; // This ensures the component only renders on the client side

import React from "react";
import { motion, useTransform, MotionValue } from "framer-motion";
import useWindowWidth from "@/app/Hooks/useWindowWidth"; // Custom hook to get the window width

// Props definition: receives mouseX motion value from parent
type Props = {
  mouseX: MotionValue<number>;
};

const Tag = ({ mouseX }: Props) => {
  const width = useWindowWidth(); // Get current screen width

  // Create a framer-motion transformation:
  // As the cursor moves from left (width/4) to center (width/2), opacity increases from 0 to 1
  const opacity = useTransform(mouseX, [width / 4, width / 2], [0, 1]);

  return (
    <>
      {/* // Full height section */}

      {/* Motion div fades in based on cursor X position */}
      <motion.div
        style={{ opacity }}
        transition={{
          duration: 0.8, // Smooth fade
          delay: 0.5, // Slight delay before showing
          ease: [0, 0.71, 0.2, 1.01], // Custom easing curve for natural feel
        }}
        className="absolute top-[35%] left-[10%] text-center"
      >
        {/* Title Text */}
        <p className="text-5xl font-rob">AI Researcher</p>

        {/* Subtitle */}
        <p className="text-lg mt-5 text-gray-400">
          Exploring intelligence through
          <br />
          data, models, and the cosmos
        </p>
      </motion.div>
    </>
  );
};

export default Tag;
