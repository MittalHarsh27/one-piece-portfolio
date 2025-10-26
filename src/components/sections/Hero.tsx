"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const scrollToNext = () => {
    if (typeof document === "undefined") return;
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-ocean-blue via-dark-bg-primary to-ocean-blue/50"
    >
      {/* 3D Ship Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/one-piece-logos/Ship-Transparent-Background-3D.png"
          alt="3D Ship Background"
          fill
          className="object-cover opacity-40"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-blue/90 via-ocean-blue/80 to-ocean-blue/90" />
      </div>

      {/* Floating Luffy 3D */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-80 h-80 opacity-30"
          animate={{
            y: [0, -50, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/assets/images/one-piece-logos/Luffy-Transparent-Background-3D.png"
            alt=""
            fill
            className="object-contain drop-shadow-2xl"
            unoptimized
          />
        </motion.div>

        {/* Floating Sanji */}
        <motion.div
          className="absolute bottom-40 right-10 w-64 h-64 opacity-20"
          animate={{
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/assets/images/one-piece-logos/Sanji-Battle-pose-transparent-background-2D.png"
            alt=""
            fill
            className="object-contain"
            unoptimized
          />
        </motion.div>

        {/* Floating Zoro */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-56 h-56 opacity-25"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Image
            src="/assets/images/one-piece-logos/Zoro-Transparent-Background-BattleStance-2D.png"
            alt=""
            fill
            className="object-contain"
            unoptimized
          />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Large Luffy Character */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative w-96 h-96">
              <Image
                src="/assets/images/one-piece-logos/Luffy-Smiling-Transparent-Background-2D.png"
                alt="Luffy Main Character"
                fill
                className="object-contain drop-shadow-2xl"
                unoptimized
              />
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            className="font-manga text-6xl sm:text-7xl lg:text-9xl text-white drop-shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Welcome to the Crew
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-2xl sm:text-3xl lg:text-4xl text-treasure-gold font-bold max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            A Developer&apos;s Adventure Through Code
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Join me on an epic journey through innovative web development, creative solutions, 
            and adventures in code. Set sail for the Grand Line of programming!
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.button
              onClick={scrollToNext}
              className={cn(
                "px-12 py-6 bg-treasure-gold text-ocean-blue rounded-2xl font-bold text-xl",
                "transform transition-all duration-300 hover:scale-110 hover:shadow-2xl",
                "border-4 border-white hover:border-treasure-gold",
                "focus:outline-none focus:ring-4 focus:ring-treasure-gold focus:ring-offset-4"
              )}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore My Journey
            </motion.button>

            <motion.button
              onClick={() => {
                if (typeof document === "undefined") return;
                const projectsSection = document.getElementById("projects");
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className={cn(
                "px-12 py-6 bg-transparent text-white rounded-2xl font-bold text-xl",
                "border-4 border-white hover:bg-white hover:text-ocean-blue",
                "transform transition-all duration-300 hover:scale-110",
                "focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-4"
              )}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Projects
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.button
            onClick={scrollToNext}
            className="flex flex-col items-center space-y-2 text-white/80 hover:text-white transition-colors duration-300"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            aria-label="Scroll to next section"
          >
            <span className="text-lg font-medium">Scroll to explore</span>
            <ChevronDown className="w-8 h-8" />
          </motion.button>
        </motion.div>
      </div>

      {/* Parallax gradient at the bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-light-bg-primary dark:from-dark-bg-primary to-transparent"
        style={{
          y: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
        }}
      />
    </section>
  );
}
