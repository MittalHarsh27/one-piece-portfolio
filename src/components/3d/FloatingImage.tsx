"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

interface FloatingImageProps {
  imgSrc: string;
  position?: [number, number, number];
  scale?: number | [number, number, number];
  rotation?: [number, number, number];
  speed?: number; // Floating speed
}

export default function FloatingImage({
  imgSrc,
  position = [0, 0, 0],
  scale = 1,
  rotation = [0, 0, 0],
  speed = 1,
}: FloatingImageProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useTexture(imgSrc);
  const [hovered, setHovered] = useState(false);

  // Random offset for independent movement
  const offset = useRef(Math.random() * 100);

  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.getElapsedTime();

    // Floating animation (sine wave on Y axis)
    meshRef.current.position.y = position[1] + Math.sin(time * speed + offset.current) * 0.2;
    
    // Gentle rotation sway
    meshRef.current.rotation.z = rotation[2] + Math.sin(time * 0.5 + offset.current) * 0.05;

    // Hover effect: Scale up slightly and look at mouse (optional, keeping it simple for now)
    const targetScale = hovered ? 1.1 : 1;
    const currentScale = meshRef.current.scale.x; // Assuming uniform scale initially
    
    // Simple lerp for scale
    const lerpSpeed = 0.1;
    const newScale = THREE.MathUtils.lerp(currentScale, typeof scale === 'number' ? scale * targetScale : scale[0] * targetScale, lerpSpeed);
    
    meshRef.current.scale.setScalar(newScale);
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      rotation={rotation}
      scale={typeof scale === 'number' ? [scale, scale, scale] : scale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <planeGeometry args={[3, 3]} /> 
      <meshBasicMaterial 
        map={texture} 
        transparent 
        side={THREE.DoubleSide}
        toneMapped={false} // Keeps colors vivid like the original image
      />
    </mesh>
  );
}


