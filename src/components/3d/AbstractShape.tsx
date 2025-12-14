"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { MeshTransmissionMaterial } from "@react-three/drei";

export default function AbstractShape() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    
    // Smooth complex rotation
    meshRef.current.rotation.x = time * 0.2;
    meshRef.current.rotation.y = time * 0.3;
    
    // Gentle floating
    meshRef.current.position.y = Math.sin(time * 0.5) * 0.2;
  });

  return (
    <mesh ref={meshRef} scale={2}>
      {/* Icosahedron for a geometric tech look */}
      <icosahedronGeometry args={[1, 0]} />
      
      {/* High-quality glass/crystal material */}
      <MeshTransmissionMaterial
        backside
        backsideThickness={1}
        thickness={2}
        chromaticAberration={0.05}
        anisotropy={0.5}
        distortion={0.5}
        distortionScale={0.5}
        temporalDistortion={0.2}
        clearcoat={1}
        attenuationDistance={0.5}
        attenuationColor="#ffffff"
        color="#ffffff"
        bg="transparent"
      />
    </mesh>
  );
}

