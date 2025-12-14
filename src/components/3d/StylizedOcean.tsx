"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function StylizedOcean() {
  const meshRef = useRef<THREE.Mesh>(null);

  // Create geometry with sufficient segments for wave movement
  const geometry = useMemo(() => new THREE.PlaneGeometry(100, 100, 50, 50), []);
  
  // Store original positions to calculate waves from
  const originalPositions = useMemo(() => {
    return geometry.attributes.position.array.slice();
  }, [geometry]);

  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.getElapsedTime();
    const positionAttribute = meshRef.current.geometry.attributes.position;
    const positions = positionAttribute.array as Float32Array;

    for (let i = 0; i < positions.length; i += 3) {
      // Get original coordinates (x, y are flat on the plane initially)
      // But we rotate the plane -90deg so it's flat.
      // Let's assume standard plane: x is left-right, y is up-down (in 2D), z is depth.
      // We will displace Z based on X and Y.
      
      const x = originalPositions[i];
      const y = originalPositions[i + 1];
      
      // Wave calculation
      // Combine multiple sine waves for organic look
      const wave1 = 0.5 * Math.sin(x * 0.2 + time * 1.5);
      const wave2 = 0.2 * Math.sin(y * 0.1 + time * 0.5);
      const wave3 = 0.2 * Math.sin((x + y) * 0.15 + time);

      // Update Z position (which will be "up" after rotation)
      positions[i + 2] = originalPositions[i + 2] + wave1 + wave2 + wave3;
    }

    positionAttribute.needsUpdate = true;
    
    // Optional: Rotate the water slightly? No, just keep it flat.
  });

  return (
    <mesh 
      ref={meshRef} 
      rotation={[-Math.PI / 2, 0, 0]} 
      position={[0, -5, -10]} 
      geometry={geometry}
    >
      {/* Stylized Water Material */}
      <meshStandardMaterial
        color="#006994" // Deep blue
        roughness={0.1}
        metalness={0.1}
        flatShading={true} // Gives it that low-poly / anime look
        transparent
        opacity={0.8}
      />
    </mesh>
  );
}


