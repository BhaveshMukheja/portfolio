"use client"; // Ensures this component only runs on the client (important for hooks like `useWindowWidth`)

// Import necessary modules
import { motion, useTransform, MotionValue } from "framer-motion";
import useWindowWidth from "@/app/Hooks/useWindowWidth"; // Custom hook to get current window width
import Image from "next/image"; // Optimized image component from Next.js
import LeftImageSrc from "../../../../../public/assets/ss12.png"; // Local image source

// Props type definition
type Props = {
  mouseX: MotionValue<number>; // Shared motion value from parent, representing horizontal mouse position
};

export default function LeftImage({ mouseX }: Props) {
  const width = useWindowWidth(); // Dynamically fetches current screen width

  // Set up a transform so the image moves right when the mouse moves left (opposite effect)
  const translateX = useTransform(mouseX, [0, width], ["0%", "100%"]);

  return (
    // Wrapper div for left image, covers left half of the screen
    <div className="w-1/2 h-full overflow-hidden absolute left-0 top-0">
      {/* Motion div to animate horizontal movement based on cursor */}
      <motion.div
        style={{ translateX }} // Bind the horizontal movement to `translateX`
        transition={{
          duration: 0.8, // Smooth animation
          ease: [0.49, 0.04, 0.5, 0.99], // Custom easing curve for natural motion
        }}
        className="w-full h-[650px] absolute right-0 bottom-0"
      >
        {/* Decorative arc-like yellow gradient div at the bottom */}
        <div className="absolute bottom-0 ">
          <div className="w-[700px] h-86 rounded-t-full border-t-4 border-x-4 border-b-0 border-transparent bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 "></div>
        </div>

        {/* The actual image displayed with full coverage and brightness boost */}
        <Image
          src={LeftImageSrc}       // Image source
          alt="Hero Section Left Image"               // Accessibility alt text
          fill                     // Fills the container
          className="object-cover brightness-125" // Styling the image
          priority                 // Preloads the image for faster rendering
        />
      </motion.div>
    </div>
  );
}
