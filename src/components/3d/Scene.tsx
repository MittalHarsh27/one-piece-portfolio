"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, PerspectiveCamera, Environment } from "@react-three/drei";

interface SceneProps {
  children: React.ReactNode;
  className?: string;
  enableControls?: boolean;
  cameraPosition?: [number, number, number];
  cameraTarget?: [number, number, number];
}

export default function Scene({
  children,
  className = "w-full h-full",
  enableControls = false,
  cameraPosition = [0, 0, 5],
  cameraTarget = [0, 0, 0],
}: SceneProps) {
  return (
    <div className={className}>
      <Canvas
        shadows
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <PerspectiveCamera
          makeDefault
          position={cameraPosition}
          fov={50}
          near={0.1}
          far={1000}
        />
        
        <Suspense fallback={null}>
          <Environment preset="sunset" />
          <ambientLight intensity={0.4} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          
          {children}
          
          {enableControls && (
            <OrbitControls
              target={cameraTarget}
              enablePan={false}
              enableZoom={false}
              enableRotate={true}
              autoRotate={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 3}
            />
          )}
        </Suspense>
      </Canvas>
    </div>
  );
}
