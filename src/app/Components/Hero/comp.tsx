"use client";

import { useRef, useEffect } from "react";
import { useMotionValue, animate, motion } from "framer-motion";
import Left from "./Left/comp";
import Right from "./Right/comp";
import LeftTag from "./Left/tag";
import RightTag from "./Right/tag";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Center mouseX on first render
  const mouseX = useMotionValue(window.innerWidth/2);

  const widthRef = useRef(window.innerWidth);
useEffect(() => {
  const handleResize = () => (widthRef.current = window.innerWidth);
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);



  // useEffect(() => {
  //   const centerX = window.innerWidth / 2;
  //   mouseX.set(centerX);
  // }, [mouseX]);


let frame: number | null = null;
const handleMouseMove = (e: React.MouseEvent) => {
  if (frame) cancelAnimationFrame(frame);
  frame = requestAnimationFrame(() => {
    const x = e.clientX;
    const delta = widthRef.current - x;
    animate(mouseX, delta, {
      duration: 0.8,
      ease: [0.49, 0.04, 0.5, 0.99],
    });
  });
};

  const handleMouseLeave = () => {
    animate(mouseX, window.innerWidth / 2, {
      duration: 0.8,
      ease: [0.49, 0.04, 0.5, 0.99],
    });
  };

  return (
    <div className="w-screen h-[30vh] sm:h-[30vh] md:h-[40vh] lg:h-[60vh] xl:h-[70vh] 2xl:h-[80vh]">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3.0, ease: "easeOut" }}
      id="home"
      ref={containerRef}
      className="h-full w-full flex bg-white"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <LeftTag mouseX={mouseX} />
      <RightTag mouseX={mouseX} />
      <Left mouseX={mouseX} />
      <Right mouseX={mouseX} />
    </motion.div>
    </div>
  );
}
