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
  const mouseX = useMotionValue(0);


  useEffect(() => {
    const centerX = window.innerWidth / 2;
    mouseX.set(centerX);
  }, [mouseX]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const bounds = containerRef.current?.getBoundingClientRect();
    if (!bounds) return;
    const x = e.clientX;
    const delta = window.innerWidth - x;

    animate(mouseX, delta, {
      duration: 0.8,
      ease: [0.49, 0.04, 0.5, 0.99],
    });

    mouseX.set(x);
  };

  const handleMouseLeave = () => {
    animate(mouseX, window.innerWidth / 2, {
      duration: 0.8,
      ease: [0.49, 0.04, 0.5, 0.99],
    });
  };

  return (
    <div className="w-screen h-screen ">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3.0, ease: "easeOut" }}
      id="home"
      ref={containerRef}
      className="h-full w-full absolute top-4 flex bg-white"
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
