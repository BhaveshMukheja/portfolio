"use client";

import * as THREE from "three";
import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Billboard, Text, TrackballControls, Html } from "@react-three/drei";
import { useskillHoverContext } from "@/app/Context/skillHoverContext";

// All skills to be displayed in the 3D skill cloud
const skills = [
  "c", "cpp", "javascript", "typescript", "python", "r", "html", "css", "tailwindcss",
  "react", "next", "vite", "node", "express", "mongo", "mongoose", "prisma", "postgresql",
  "tensorflow", "keras", "opencv", "pytorch", "scikitlearn", "chatgpt", "sql", "aws",
  "git", "github", "docker", "latex", "premierepro", "aftereffects", "photoshop",
];

// Mapping of component `id`s to specific skill sets (used for hover highlight)
const hoverSkills = [
  { id: 1, skills: ["c", "cpp", "javascript", "typescript", "python", "r", "sql"] },
  { id: 2, skills: ["html", "css", "tailwindcss", "javascript", "typescript"] },
  { id: 3, skills: ["react", "next", "vite"] },
  { id: 4, skills: ["node", "express", "python", "aws"] },
  { id: 5, skills: ["mongo", "mongoose", "prisma", "postgresql", "sql"] },
  { id: 6, skills: ["tensorflow", "keras", "opencv", "pytorch", "chatgpt"] },
  { id: 7, skills: ["docker", "aws", "git", "github"] },
  { id: 8, skills: ["latex", "premierepro", "aftereffects", "photoshop"] },
];

// Convert hoverSkills into a Map for faster lookup
const useHoverSkillMap = () => {
  return useMemo(() => {
    const map = new Map<number, Set<string>>();
    hoverSkills.forEach(({ id, skills }) => {
      map.set(id, new Set(skills));
    });
    return map;
  }, []);
};

// Individual 3D word (icon) component
function Word({
  children,
  position,
  hoveredKey,
  hoverSkillMap,
}: {
  children: string;                    // Skill name
  position: THREE.Vector3;            // 3D position in the sphere
  hoveredKey: number | null;          // Currently hovered card/component ID
  hoverSkillMap: Map<number, Set<string>>; // Hoverable skills for each ID
}) {
  const ref = useRef<THREE.Mesh>(null);

  // Font styling for Text component
  const fontProps = {
    fontSize: 3.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    "material-toneMapped": false,
  };

  // Whether this skill should be active (highlighted)
  const isActive = hoverSkillMap.get(hoveredKey || -1)?.has(children) ?? false;

  // Animate the icon color based on hover status
  useFrame(() => {
    if (ref.current) {
      const mat = ref.current.material as THREE.MeshBasicMaterial;
      mat.color.lerp(new THREE.Color(isActive ? "#00ff88" : "#ffffff"), 0.1);
    }
  });

  return (
    <Billboard position={position}>
      <Text
        ref={ref}
        {...fontProps}
        material-depthTest={false}
        material-transparent={true}
        renderOrder={999}
      >
        <Html center>
          <i
            className={`ci ci-${children} ci-2x text-black transition-transform duration-300 ${
              isActive ? "scale-125" : "filter grayscale"
            }`}
            style={{ cursor: isActive ? "pointer" : "default" }}
          />
        </Html>
      </Text>
    </Billboard>
  );
}

// Component that generates a rotating cloud of skill icons
function Cloud({
  radius = 45,
  hoveredKey,
}: {
  radius?: number;                   // Sphere radius
  hoveredKey: number | null;        // Hovered component ID
}) {
  const groupRef = useRef<THREE.Group>(null);
  const hoverSkillMap = useHoverSkillMap();

  // Compute 3D positions for each skill on a spherical shell
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

  // Slowly rotate the entire skill cloud
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
          hoverSkillMap={hoverSkillMap}
        />
      ))}
    </group>
  );
}

// Top-level component that renders the 3D canvas and cloud
export default function Comp() {
  const { hoveredKey } = useskillHoverContext(); // Get hovered card ID from context

  return (
    <div>
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 80], fov: 90 }}
        style={{ height: "600px", width: "100%" }}
      >
        {/* Fog and light setup for ambient look */}
        <fog attach="fog" args={["#202025", 0, 80]} />
        <ambientLight intensity={20} />

        {/* Cloud wrapped in suspense for lazy load */}
        <Suspense fallback={null}>
          <Cloud radius={45} hoveredKey={hoveredKey} />
        </Suspense>

        {/* Allow user to rotate the scene */}
        <TrackballControls noZoom />
      </Canvas>
    </div>
  );
}
