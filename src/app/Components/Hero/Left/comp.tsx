"use client"; // Ensures this component only runs on the client (important for hooks like `useWindowWidth`)

// Import necessary modules
import { motion, useTransform, MotionValue } from "framer-motion";
import useWindowWidth from "@/app/Hooks/useWindowWidth"; // Custom hook to get current window width
import Image from "next/image"; // Optimized image component from Next.js
import LeftImageSrc from "../../../../../public/assets/ss12.png"; // Local image source
import yellowBg from "../../../../../public/assets/yellowBg4.png";

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
    <div className="w-1/2 h-full overflow-hidden">
      {/* Motion div to animate horizontal move3ent based on cursor */}
      <motion.div
        style={{ translateX }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }} // Bind the horizontal movement to `translateX`
        transition={{
          duration: 0.8, // Smooth animation
          ease: [0.49, 0.04, 0.5, 0.99], // Custom easing curve for natural motion
        }}
        className="w-full h-full relative"
      >
        <div className="absolute bottom-0 z-0">
          <Image
            loading="lazy"
            src={yellowBg}
            alt="Yellow bg"
            className="object-contain w-full -left-7"
          />
        </div>

        {/* Foreground: explicit z-10 */}
        <div className="absolute bottom-0 z-10">
          <Image
            src={LeftImageSrc}
            alt="Hero Section Left Image"
            className="object-contain brightness-125"
          />
        </div>
      </motion.div>
    </div>
  );
}
