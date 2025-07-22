"use client";

import React, { useEffect, useRef } from "react";
import Room from "./Sc-Fi-Room/comp";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import { GirlRoom } from "./Sc-Fi-Room/girlRoom";
import { Model } from "./Sc-Fi-Room/Untitled";
// import { PreloadProjectTextures } from "@/app/Utils/texturePreloader";


const AnimatedRoom = () => {
  const { scrollYProgress } = useScroll();

  // Interpolations based on scroll position (tweak these as needed)
  // Base transforms
  const rawPosX = useTransform(
    scrollYProgress,
    [0.30, 0.45, 0.60, 0.75,0.8],
    [2.4, 2.4, 6.4, 4.9, 2.5]
  );
  const rawPosY = useTransform(
    scrollYProgress,
    [0.30, 0.45, 0.60, 0.75,0.8],
    [-13.3, -8.8, -8.8, -8.8, -8.8]
  );
  const rawPosZ = useTransform(
    scrollYProgress,
    [0.30, 0.45, 0.60, 0.75,0.8],
    [37.8, 24.3, 30, 33.3, 37.8]
  );
  const rawRotX = useTransform(
    scrollYProgress,
    [0.30, 0.45, 0.60, 0.75,0.8],
    [0.0, 0.0, 0.0, 0.0, 0.0]
  );
  const rawRotY = useTransform(
    scrollYProgress,
    [0.30, 0.45, 0.60, 0.75,0.8],
    [0.0, -0.7, -1.1 , -1.4, -1.5]
  );
  const rawRotZ = useTransform(
    scrollYProgress,
    [0.30, 0.45,0.60,0.75,0.8],
    [0.0, 0, 0 ,0, 0]
  );
  const rawScale = useTransform(scrollYProgress, [0.30, 0.5], [1, 1]);

  // Smooth spring versions
  const smoothConfig = { damping: 20, stiffness: 120 }; // You can tweak these
  const posX = useSpring(rawPosX, smoothConfig);
  const posY = useSpring(rawPosY, smoothConfig);
  const posZ = useSpring(rawPosZ, smoothConfig);
  const rotX = useSpring(rawRotX, smoothConfig);
  const rotY = useSpring(rawRotY, smoothConfig);
  const rotZ = useSpring(rawRotZ, smoothConfig);
  const scale = useSpring(rawScale, smoothConfig);

  const ref = useRef<any>(0);

  // Custom Z rotation from mouse
  const mouseZRot = useMotionValue(0);
  const smoothMouseZRot = useSpring(mouseZRot, smoothConfig);

  // Track mouse movement to update rotation around Z
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const halfWidth = window.innerWidth;
      const deltaX = e.clientX - halfWidth;
      const rotationFactor = 0.000000001; // tune this value for sensitivity
      mouseZRot.set(-deltaX * rotationFactor);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    if (ref.current) {
      ref.current.position.set(posX.get(), posY.get(), posZ.get());
      ref.current.rotation.set(rotX.get(), rotY.get(), rotZ.get());
      ref.current.scale.setScalar(scale.get());
    }
  });

  return <Model ref={ref} />;
};

const SciFiRoomScene = () => {
  return (
    <div className="fixed inset-0 -z-10">
      {/* <PreloadProjectTextures/> */}
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 30]} />
          <AnimatedRoom />
          {/* <GirlRoom/> */}
          {/* <Model/> */}
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 10]} intensity={0.5} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default SciFiRoomScene;
