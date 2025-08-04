"use client";

import * as THREE from "three";
import { useRef, useState, useMemo, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Billboard, Text, TrackballControls } from "@react-three/drei";
import { Html } from "@react-three/drei";
import { useskillHoverContext } from "@/app/Context/skillHoverContext";

const skills = [
  "c",
  "cpp",
  "javascript",
  "typescript",
  "python",
  "r",
  "html",
  "css",
  "tailwindcss",
  "react",
  "next",
  "vite",
  "node",
  "express",
  "mongo",
  "mongoose",
  "prisma",
  "postgresql",
  "tensorflow",
  "keras",
  "opencv",
  "pytorch",
  "scikitlearn",
  "chatgpt",
  "sql",
  "aws",
  "git",
  "github",
  "docker",
  "latex",
  "premierepro",
  "aftereffects",
  "photoshop",
];

const hoverSkills = [
  {
    id: 1,
    skills: ["c", "cpp", "javascript", "typescript", "python", "r", "sql"],
  },
  {
    id: 2,
    skills: ["html", "css", "tailwindcss", "javascript", "typescript"],
  },
  {
    id: 3,
    skills: ["react", "next", "vite"],
  },
  {
    id: 4,
    skills: ["node", "express", "python", "aws"],
  },
  {
    id: 5,
    skills: ["mongo", "mongoose", "prisma", "postgresql", "sql"],
  },
  {
    id: 6,
    skills: ["tensorflow", "keras", "opencv", "pytorch", "chatgpt"],
  },
  {
    id: 7,
    skills: ["docker", "aws", "git", "github"],
  },
  {
    id: 8,
    skills: ["latex", "premierepro", "aftereffects", "photoshop"],
  },
];

function Word({
  children,
  position,
  hoveredKey,
}: {
  children: string;
  position: THREE.Vector3;
  hoveredKey: number | null;
}) {
  const color = new THREE.Color();
  const fontProps = {
    fontSize: 3.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    "material-toneMapped": false,
  };

  const ref = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  const over = (e: any) => {
    e.stopPropagation();
    setHovered(true);
  };
  const out = () => setHovered(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  useFrame(() => {
    if (ref.current) {
      const mat = ref.current.material as THREE.MeshBasicMaterial;
      mat.color.lerp(color.set(hovered ? "#00ff88" : "white"), 0.1);
    }
  });

  // 🧠 Find the current hovered skill group
  const activeSkills =
    hoverSkills.find((group) => group.id === hoveredKey)?.skills || [];

  // 🖤 Gray out everything except those in activeSkills
  const isActive = activeSkills.includes(children);

  return (
    <Billboard position={position}>
      <Text
        ref={ref}
        onPointerOver={over}
        onPointerOut={out}
        onClick={() => console.log(children)}
        {...fontProps}
        material-depthTest={false}
        material-transparent={true}
        renderOrder={999}
      >
        <Html center>
          <i
            className={`ci ci-${children} ci-2x text-black transition-scale duration-300 ${
              isActive ? "scale-125" : "filter grayscale"
            }`}
          />
        </Html>
      </Text>
    </Billboard>
  );
}

function Cloud({
  radius = 45,
  hoveredKey,
}: {
  radius?: number;
  hoveredKey: number | null;
}) {
  const groupRef = useRef<THREE.Group>(null);

  const positions = useMemo(() => {
    const spherical = new THREE.Spherical();
    return skills.map((_, i) => {
      const phi = Math.acos(-1 + (2 * i) / skills.length);
      const theta = Math.sqrt(skills.length * Math.PI) * phi;
      return new THREE.Vector3().setFromSpherical(
        spherical.set(radius, phi, theta)
      );
    });
  }, [radius]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={groupRef}>
      {skills.map((skill, index) => (
        <Word
          key={index}
          position={positions[index]}
          children={skill}
          hoveredKey={hoveredKey}
        />
      ))}
    </group>
  );
}

export default function Comp() {
  const { hoveredKey } = useskillHoverContext();


  return (
    <div>
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 80], fov: 90 }}
        style={{ height: "600px", width: "100%" }}
      >
        <fog attach="fog" args={["#202025", 0, 80]} />
        <ambientLight intensity={20} />
        <Suspense fallback={null}>
          <Cloud radius={45} hoveredKey={hoveredKey} />
        </Suspense>
        <TrackballControls noZoom />
      </Canvas>
    </div>
  );
}
