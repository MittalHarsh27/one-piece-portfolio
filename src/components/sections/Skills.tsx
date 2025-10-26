"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
  fruitImage: string;
}

const skills: Skill[] = [
  { name: "React", level: 5, category: "Frontend", icon: "⚛️", fruitImage: "/assets/images/one-piece-logos/Devil-Fruit-1-3D.png" },
  { name: "Next.js", level: 5, category: "Frontend", icon: "🔥", fruitImage: "/assets/images/one-piece-logos/Devil-Fruit-1-Transparent-Background-2D.png" },
  { name: "TypeScript", level: 4, category: "Frontend", icon: "📘", fruitImage: "/assets/images/one-piece-logos/Devil-Fruit-2-Transparent-Background-2D.png" },
  { name: "Node.js", level: 5, category: "Backend", icon: "🟢", fruitImage: "/assets/images/one-piece-logos/Devil-Fruit-1-3D.png" },
  { name: "Python", level: 4, category: "Backend", icon: "🐍", fruitImage: "/assets/images/one-piece-logos/Devil-Fruit-2-Transparent-Background-2D.png" },
  { name: "MongoDB", level: 4, category: "Database", icon: "🍃", fruitImage: "/assets/images/one-piece-logos/Devil-Fruit-1-Transparent-Background-2D.png" },
  { name: "AWS", level: 3, category: "Cloud", icon: "☁️", fruitImage: "/assets/images/one-piece-logos/Devil-Fruit-2-Transparent-Background-2D.png" },
  { name: "Docker", level: 4, category: "DevOps", icon: "🐳", fruitImage: "/assets/images/one-piece-logos/Devil-Fruit-1-3D.png" },
];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      id="skills"
      className="relative py-20 lg:py-32 bg-gradient-to-b from-light-bg-primary via-ocean-blue/20 to-light-bg-primary dark:from-dark-bg-primary dark:via-ocean-blue/30 dark:to-dark-bg-primary overflow-hidden"
    >
      {/* Background decorative ship */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96"
          animate={{
            y: [0, -40, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/assets/images/one-piece-logos/Ship-Transparent-Background-3D.png"
            alt=""
            fill
            className="object-contain"
            unoptimized
          />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="font-manga text-5xl sm:text-6xl lg:text-7xl mb-6 text-ocean-blue dark:text-treasure-gold"
            initial={{ scale: 0.9 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            Devil Fruit Powers
          </motion.h2>
          <p className="text-xl sm:text-2xl text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto leading-relaxed">
            The mystical fruits that grant me my coding abilities
          </p>
        </motion.div>

        {/* Skills Grid with Devil Fruits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className={cn(
                "relative group cursor-pointer",
                "bg-light-bg-card dark:bg-dark-bg-card",
                "rounded-3xl p-6 shadow-xl",
                "transform transition-all duration-300",
                "hover:scale-110 hover:shadow-2xl",
                "border-4 border-transparent hover:border-treasure-gold dark:hover:border-straw-hat"
              )}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {/* Devil Fruit Image */}
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src={skill.fruitImage}
                  alt={`${skill.name} Devil Fruit`}
                  fill
                  className="object-contain drop-shadow-2xl"
                  unoptimized
                />
              </div>

              {/* Skill Level Bars */}
              <div className="absolute top-4 right-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      "w-1.5 h-6 rounded-full",
                      i < skill.level ? "bg-treasure-gold" : "bg-gray-300 dark:bg-gray-700"
                    )}
                  />
                ))}
              </div>

              {/* Name */}
              <h3 className="text-2xl font-bold mb-2 text-center text-light-text-primary dark:text-dark-text-primary">
                {skill.name}
              </h3>

              {/* Category */}
              <p className="text-sm text-center text-light-text-accent dark:text-dark-text-accent mb-4">
                {skill.category}
              </p>

              {/* Icon */}
              <div className="text-4xl text-center">{skill.icon}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
