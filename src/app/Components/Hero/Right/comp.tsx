"use client"; // This directive ensures the component is rendered only on the client side

// Import dependencies
import { motion, useTransform, MotionValue } from "framer-motion";
import useWindowWidth from "@/app/Hooks/useWindowWidth"; // Custom hook to get window width (responsive behavior)
import Image from "next/image"; // Optimized image rendering
import RightImageSrc from "../../../../../public/assets/ss2.png"; // Image source
import pinkBg from "../../../../../public/assets/pinkBg4.png";

// Define props type
type Props = {
  mouseX: MotionValue<number>; // Shared motion value representing cursor's horizontal position
};

export default function RightImage({ mouseX }: Props) {
  const width = useWindowWidth(); // Dynamically get current window width

  // Set up a transformation: as mouse moves right, image moves left (parallax effect)
  const translateX = useTransform(mouseX, [0, width], ["-100%", "0%"]);

  return (
    // Container taking right half of the screen, positioned at bottom right
    <div className="w-1/2 h-full overflow-hidden">
      {/* Motion div to animate the image horizontally */}
      <motion.div
        style={{ translateX }} // Apply horizontal translation based on cursor position4
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8, // Smooth transition duration
          ease: [0.49, 0.04, 0.5, 0.99], // Custom easing for natural motion
        }}
        className="w-full h-full relative"
      >
        {/* Full-size image with object cover */}
        <div className="absolute bottom-0 z-0">
          <Image
            src={pinkBg}
            alt="Pink bg"
            className="object-contain  w-full -left-7"
            priority
          />
        </div>

        {/* Foreground: explicit z-10 */}
        <div className="absolute bottom-0 z-10">
          <Image
            loading="lazy"
            src={RightImageSrc}
            alt="Hero Section Left Image"
            className=" object-contain"
          />
        </div>
      </motion.div>
    </div>
  );
}
