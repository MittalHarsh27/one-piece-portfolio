"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Plane } from "@react-three/drei";
import { Mesh, ShaderMaterial } from "three";

const waveVertexShader = `
  uniform float uTime;
  uniform float uWaveHeight;
  uniform float uWaveFrequency;
  
  varying vec2 vUv;
  varying float vElevation;
  
  void main() {
    vUv = uv;
    
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    
    float elevation = sin(modelPosition.x * uWaveFrequency + uTime) * 0.1;
    elevation += sin(modelPosition.z * uWaveFrequency * 1.5 + uTime * 1.2) * 0.05;
    elevation += sin(modelPosition.x * uWaveFrequency * 2.0 + uTime * 0.8) * 0.02;
    
    modelPosition.y += elevation * uWaveHeight;
    vElevation = elevation;
    
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    
    gl_Position = projectedPosition;
  }
`;

const waveFragmentShader = `
  uniform float uTime;
  uniform vec3 uColorDeep;
  uniform vec3 uColorSurface;
  uniform vec3 uColorFoam;
  
  varying vec2 vUv;
  varying float vElevation;
  
  void main() {
    float mixStrength = (vElevation + 0.1) * 5.0;
    mixStrength = smoothstep(0.0, 1.0, mixStrength);
    
    vec3 color = mix(uColorDeep, uColorSurface, mixStrength);
    
    // Add foam on wave peaks
    if (vElevation > 0.05) {
      float foamStrength = (vElevation - 0.05) * 10.0;
      color = mix(color, uColorFoam, foamStrength);
    }
    
    gl_FragColor = vec4(color, 0.8);
  }
`;

export default function Ocean() {
  const meshRef = useRef<Mesh>(null);
  
  const shaderMaterial = useMemo(() => {
    return new ShaderMaterial({
      vertexShader: waveVertexShader,
      fragmentShader: waveFragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uWaveHeight: { value: 0.3 },
        uWaveFrequency: { value: 0.5 },
        uColorDeep: { value: [0.02, 0.4, 0.7] }, // Deep ocean blue
        uColorSurface: { value: [0.05, 0.45, 0.72] }, // Surface blue
        uColorFoam: { value: [0.9, 0.9, 1.0] }, // White foam
      },
      transparent: true,
    });
  }, []);

  useFrame((state) => {
    if (meshRef.current && meshRef.current.material) {
      (meshRef.current.material as ShaderMaterial).uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <Plane
      ref={meshRef}
      args={[20, 20, 64, 64]}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -1, 0]}
      material={shaderMaterial}
      receiveShadow
    />
  );
}
