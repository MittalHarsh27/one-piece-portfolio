"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh, Group } from "three";
import { Box, Cylinder, Cone } from "@react-three/drei";

export default function Ship() {
  const groupRef = useRef<Group>(null);
  const sailRef = useRef<Mesh>(null);
  
  // Create floating animation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    }
    
    if (sailRef.current) {
      sailRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 2) * 0.02;
    }
  });

  const shipMaterials = useMemo(() => ({
    hull: { color: "#8B4513" }, // Brown hull
    sail: { color: "#F6F1E4" }, // Parchment sail
    mast: { color: "#654321" }, // Dark brown mast
    flag: { color: "#F0B90B" }, // Straw hat gold flag
  }), []);

  return (
    <group ref={groupRef} scale={[0.8, 0.8, 0.8]}>
      {/* Ship Hull */}
      <Box
        args={[3, 0.5, 1.2]}
        position={[0, -0.5, 0]}
        material-color={shipMaterials.hull.color}
        castShadow
        receiveShadow
      />
      
      {/* Hull bottom curve */}
      <Cylinder
        args={[1.2, 1.5, 0.3, 16]}
        position={[0, -0.8, 0]}
        rotation={[0, 0, 0]}
        material-color={shipMaterials.hull.color}
        castShadow
      />
      
      {/* Main Mast */}
      <Cylinder
        args={[0.05, 0.05, 3]}
        position={[0, 1, 0]}
        material-color={shipMaterials.mast.color}
        castShadow
      />
      
      {/* Main Sail */}
      <Box
        ref={sailRef}
        args={[1.8, 2, 0.02]}
        position={[0, 1.2, 0.1]}
        material-color={shipMaterials.sail.color}
        castShadow
      />
      
      {/* Straw Hat Jolly Roger on Sail */}
      <Box
        args={[0.8, 0.8, 0.03]}
        position={[0, 1.4, 0.12]}
        material-color={shipMaterials.flag.color}
        castShadow
      />
      
      {/* Front Mast */}
      <Cylinder
        args={[0.03, 0.03, 2]}
        position={[1.2, 0.5, 0]}
        material-color={shipMaterials.mast.color}
        castShadow
      />
      
      {/* Front Sail */}
      <Box
        args={[1.2, 1.5, 0.02]}
        position={[1.2, 0.8, 0.1]}
        material-color={shipMaterials.sail.color}
        castShadow
      />
      
      {/* Ship's figurehead (simplified) */}
      <Cone
        args={[0.2, 0.5, 8]}
        position={[1.8, -0.2, 0]}
        rotation={[0, 0, Math.PI / 2]}
        material-color={shipMaterials.flag.color}
        castShadow
      />
      
      {/* Crow's nest */}
      <Cylinder
        args={[0.15, 0.15, 0.1]}
        position={[0, 2.3, 0]}
        material-color={shipMaterials.hull.color}
        castShadow
      />
      
      {/* Flag at the top */}
      <Box
        args={[0.4, 0.3, 0.01]}
        position={[0, 2.7, 0]}
        material-color={shipMaterials.flag.color}
        castShadow
      />
    </group>
  );
}
