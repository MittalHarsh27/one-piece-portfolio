"use client";

import { Canvas } from "@react-three/fiber";
import { ReactNode, Suspense } from "react";
import { Environment, Preload } from "@react-three/drei";

interface SceneWrapperProps {
  children: ReactNode;
  className?: string;
  cameraPosition?: [number, number, number];
  fov?: number;
}

export default function SceneWrapper({
  children,
  className = "absolute inset-0 z-0",
  cameraPosition = [0, 0, 10],
  fov = 45,
}: SceneWrapperProps) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: cameraPosition, fov }}
        dpr={[1, 2]} // Handle high DPI screens
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          {/* Basic Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} />
          
          {children}
          
          {/* Optional: HDRI environment for realistic reflections if needed later */}
          {/* <Environment preset="city" /> */}
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}


