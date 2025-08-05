import dynamic from "next/dynamic"; // For dynamically importing components in Next.js
import { Canvas } from "@react-three/fiber"; // Main 3D rendering surface from React Three Fiber
import { PerspectiveCamera } from "@react-three/drei"; // 3D camera with perspective projection
import { Suspense } from "react"; // React suspense for lazy-loading components
// import { Model } from "./model";  // for Leva use

// Dynamically import the animated 3D room without server-side rendering (SSR disabled)
const AnimatedRoom = dynamic(() => import("./animatedRoom"), {
  ssr: false, // Ensure this runs only on the client side
  loading: () => null, // Render nothing while loading
});

export default function SciFiRoomScene() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas>
        <Suspense fallback={null}>
          {/* Main camera with a perspective view, set as the default */}
          <PerspectiveCamera makeDefault position={[0, 0, 30]} />

          {/* The animated 3D room model that responds to scroll */}
          <AnimatedRoom />

          {/* Uncomment the model and comment ouot the Animated Room to use Leva */}
          {/* <Model/> */}

          {/* Ambient light for overall scene illumination */}
          <ambientLight intensity={1} />

          {/* Directional light simulating sunlight or a spotlight */}
          <directionalLight position={[10, 10, 10]} intensity={0.5} />
        </Suspense>
      </Canvas>
    </div>
  );
}
