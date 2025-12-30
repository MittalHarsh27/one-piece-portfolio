"use client";

import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";
import { Suspense } from "react";
import ScrollManager from "./ScrollManager";
import { FloatingParticles } from "./FloatingParticles";

export default function Experience() {
    return (
        <div className="fixed inset-0 z-0 bg-light-bg-secondary dark:bg-black">
            <Canvas
                camera={{
                    position: [0, 0, 5],
                    fov: 30,
                }}
                dpr={[1, 2]} // Optimize pixel ratio
            >
                <Suspense fallback={null}>
                    <ScrollControls pages={6} damping={0.2}>
                        {/* Logic */}
                        <ScrollManager />

                        {/* Scene Content */}
                        <ambientLight intensity={0.5} />
                        <pointLight position={[10, 10, 10]} intensity={1} />

                        <FloatingParticles />

                    </ScrollControls>
                </Suspense>
            </Canvas>
        </div>
    );
}
