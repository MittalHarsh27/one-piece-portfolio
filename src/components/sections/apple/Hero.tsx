"use client";

import SceneWrapper from "@/components/3d/SceneWrapper";
import AbstractShape from "@/components/3d/AbstractShape";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-light-bg-secondary dark:bg-black">
      {/* 3D Background */}
      <SceneWrapper className="absolute inset-0 z-0">
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={1} />
        <AbstractShape />
      </SceneWrapper>

      {/* Typography Overlay */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl font-bold tracking-tight text-light-text-primary dark:text-white mb-6"
        >
          Think Different.
          <span className="block text-4xl md:text-6xl mt-2 text-light-text-secondary dark:text-gray-400 font-medium">
            Build Better.
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-2xl text-light-text-secondary dark:text-gray-400 max-w-2xl mx-auto"
        >
          Crafting digital experiences with precision and purpose.
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-light-text-secondary dark:text-gray-500 animate-bounce" />
      </motion.div>
    </section>
  );
}

