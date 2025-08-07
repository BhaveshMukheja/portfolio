'use client'; // Indicates that this file should be rendered on the client side in Next.js

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber"; // Used to run code on every animation frame in the render loop
import { useScroll, useTransform, useSpring } from "framer-motion"; // Hooks for scroll-based animation and smoothing
import { Model } from "./model"; // 3D model component
import { Group } from "three";
import * as THREE from "three";

export default function AnimatedRoom() {
  // Hook to get scroll progress between 0 and 1
  const { scrollYProgress } = useScroll();

  // Define how position and rotation change with scroll using keyframes
  // These are raw, non-smoothed motion values that animate based on scroll progress
  // Use Leva to get the accurate values in model.tsx
  const rawPosX = useTransform(scrollYProgress, [0.3, 0.4, 0.5, 0.75, 0.8], [1.9, 2.4, 6.4, 4.9, 2.5]);
  const rawPosY = useTransform(scrollYProgress, [0.3, 0.4, 0.5, 0.75, 0.8], [-14.2, -8.8, -8.8, -8.8, -8.8]);
  const rawPosZ = useTransform(scrollYProgress, [0.3, 0.4, 0.5, 0.75, 0.8], [40.0, 24.3, 30, 33.3, 37.8]);
  const rawRotX = useTransform(scrollYProgress, [0.3, 0.4, 0.5, 0.75, 0.8], [0.0, 0.0, 0.0, 0.0, 0.0]);
  const rawRotY = useTransform(scrollYProgress, [0.3, 0.4, 0.5, 0.75, 0.8], [0.0, -0.7, -1.1, -1.4, -1.5]);
  const rawRotZ = useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.75, 0.8], [0.0, 0, 0, 0, 0]);
  const rawScale = useTransform(scrollYProgress, [0.3, 0.5], [1, 1]);

  // Config for spring smoothing — controls how bouncy and smooth the transition is
  const smoothConfig = { damping: 20, stiffness: 120 };

  // Smooth the raw values using spring animation
  const posX = useSpring(rawPosX, smoothConfig);
  const posY = useSpring(rawPosY, smoothConfig);
  const posZ = useSpring(rawPosZ, smoothConfig);
  const rotX = useSpring(rawRotX, smoothConfig);
  const rotY = useSpring(rawRotY, smoothConfig);
  const rotZ = useSpring(rawRotZ, smoothConfig);
  const scale = useSpring(rawScale, smoothConfig);

  // Ref to access and manipulate the 3D model directly
 const ref = useRef<THREE.Group>(null);

  // Runs on every animation frame to update model's transform properties
  useFrame(() => {
    if (ref.current) {
      ref.current.position.set(posX.get(), posY.get(), posZ.get()); // Update position
      ref.current.rotation.set(rotX.get(), rotY.get(), rotZ.get()); // Update rotation
      ref.current.scale.setScalar(scale.get()); // Update uniform scale
    }
  });

  // Render the 3D model with the reference for animation
  return <Model ref={ref} />;
}
