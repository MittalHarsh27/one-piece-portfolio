"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Scene from "@/components/3d/Scene";
import Ship from "@/components/3d/Ship";
import Ocean from "@/components/3d/Ocean";
import { ChevronDown, Anchor } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const x = useSpring(0, springConfig);
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const mouseX = (e.clientX - centerX) / (rect.width / 2);
      const mouseY = (e.clientY - centerY) / (rect.height / 2);
      

      
      x.set(mouseX * 20);
      rotateX.set(mouseY * 5);
      rotateY.set(mouseX * 5);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, rotateX, rotateY]);

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-sky-200 via-sky-300 to-blue-600"
    >
      {/* Animated background clouds */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-16 bg-white/30 rounded-full blur-sm"
          animate={{
            x: [0, 50, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-12 bg-white/20 rounded-full blur-sm"
          animate={{
            x: [0, -30, 0],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* 3D Ship Scene */}
      <motion.div
        className="absolute inset-0 z-10"
        style={{ y, opacity }}
      >
        <motion.div
          style={{ x, rotateX, rotateY }}
          className="w-full h-full"
        >
          <Scene
            cameraPosition={[3, 2, 5]}
            cameraTarget={[0, 0, 0]}
            className="w-full h-full"
          >
            <Ocean />
            <Ship />
          </Scene>
        </motion.div>
      </motion.div>

      {/* Content overlay */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-8"
        >
          {/* Main heading */}
          <motion.h1
            className="font-manga text-4xl sm:text-6xl lg:text-8xl text-white drop-shadow-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <span className="block text-blue-800 drop-shadow-md">
              SET SAIL
            </span>
            <span className="block text-2xl sm:text-3xl lg:text-4xl font-body font-bold mt-2">
              for the Grand Line of Code
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl text-white font-medium max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Join the crew and explore a world of{" "}
            <span className="text-straw-hat font-bold">innovative web development</span>,{" "}
            <span className="text-haki-purple font-bold">creative solutions</span>, and{" "}
            <span className="text-straw-hat font-bold">epic adventures</span> in code.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.button
              onClick={() => scrollToNext()}
              className={cn(
                "group relative px-8 py-4 bg-blue-600 text-white rounded-lg font-bold text-lg",
                "transform transition-all duration-300 hover:scale-105 hover:shadow-lg",
                "border-2 border-blue-400 hover:border-straw-hat",
                "focus:outline-none focus:ring-2 focus:ring-straw-hat focus:ring-offset-2"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center space-x-2">
                <Anchor className="w-5 h-5" />
                <span>Explore the Crew</span>
              </span>
              <motion.div
                className="absolute inset-0 bg-straw-hat rounded-lg opacity-0 group-hover:opacity-20"
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              onClick={() => {
                const projectsSection = document.getElementById("projects");
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className={cn(
                "px-8 py-4 bg-transparent text-white rounded-lg font-bold text-lg",
                "border-2 border-white hover:bg-white hover:text-black",
                "transform transition-all duration-300 hover:scale-105",
                "focus:outline-none focus:ring-2 focus:ring-straw-hat focus:ring-offset-2"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Wanted Posters
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <motion.button
            onClick={scrollToNext}
            className="flex flex-col items-center space-y-2 text-white/80 hover:text-white transition-colors duration-300"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            aria-label="Scroll to next section"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ChevronDown className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>

      {/* Parallax waves at the bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ocean-blue to-transparent"
        style={{
          y: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
        }}
      />
    </section>
  );
}
