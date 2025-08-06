"use client";
import React from "react";
import { motion, useTransform, MotionValue } from "framer-motion";
import useWindowWidth from "@/app/Hooks/useWindowWidth";

// Define the props type for the Tag component
type Props = {
  mouseX: MotionValue<number>; // A motion value representing mouse X position
};

const Tag = ({ mouseX }: Props) => {
  // Get the current window width using a custom hook
  const width = useWindowWidth();

  // Commented out alternative transform - would reveal left image as mouse moves left
  // const translateX = useTransform(mouseX, [0, width], ['100%', '0%'])

  // Create an opacity motion value that changes based on mouseX position:
  // - Fully opaque (1) when mouse is at half screen width
  // - Fully transparent (0) when mouse is at 3/4 of screen width
  const opacity = useTransform(mouseX, [width / 2, width - width / 4], [1, 0]);

  return (
    <>
      {/* Animated div whose opacity changes based on mouse position */}
      <motion.div
        style={{ opacity }} // Apply the opacity motion value
        transition={{
          type: "tween", // Use tween animation
          ease: "easeOut", // Easing function
          duration: 0.5, // Animation duration in seconds
        }}
        className="absolute top-[35%] right-[5%] text-center"
      >
        {/* Main title text */}
        <p className="text-5xl font-rob">Full-Stack Developer</p>

        {/* Subtitle text with smaller size and gray color */}
        <p className="text-lg mt-5 text-gray-500">
          Obsessed with clean code and
          <br />
          seamless user experiences
        </p>
      </motion.div>
    </>
  );
};

export default Tag;
