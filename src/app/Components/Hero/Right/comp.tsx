"use client"; // This directive ensures the component is rendered only on the client side

// Import dependencies
import { motion, useTransform, MotionValue } from "framer-motion";
import useWindowWidth from "@/app/Hooks/useWindowWidth"; // Custom hook to get window width (responsive behavior)
import Image from "next/image"; // Optimized image rendering
import RightImageSrc from "../../../../../public/assets/ss2.png"; // Image source

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
    <div className="w-1/2 h-full overflow-hidden absolute right-0 bottom-0">
      {/* Motion div to animate the image horizontally */}
      <motion.div
        style={{ translateX }} // Apply horizontal translation based on cursor position
        transition={{
          duration: 0.8, // Smooth transition duration
          ease: [0.49, 0.04, 0.5, 0.99], // Custom easing for natural motion
        }}
        className="w-full h-[650px] absolute bottom-0"
      >
        {/* Decorative arc at the bottom with a colorful gradient */}
        <div className="absolute bottom-0">
          <div className="w-[700px] h-86 rounded-t-full border-t-4 border-x-4 border-b-0 border-transparent bg-gradient-to-l from-pink-600 via-violet-600 to-indigo-600" />
        </div>

        {/* Full-size image with object cover */}
        <Image
          src={RightImageSrc}       // Imported static asset
          alt="Hero Section Right"               // Alt text for accessibility
          fill                      // Fills the parent container
          className="object-cover"  // Ensures image covers the container without distortion
          priority                  // Loads this image with high priority (important for hero sections)
          // width={100}
          // height={100}
        />
      </motion.div>
    </div>
  );
}
