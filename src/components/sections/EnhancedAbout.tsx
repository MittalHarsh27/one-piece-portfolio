"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Compass, Heart, Target, Users, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import Badge from "@/components/ui/Badge";
import StrawHatIcon from "@/components/ui/StrawHatIcon";

const CREW_VALUES = [
  {
    icon: Heart,
    title: "Passion",
    description: "Like Luffy's unwavering dream, I pour my heart into every project.",
    color: "from-red-500 to-pink-500"
  },
  {
    icon: Target,
    title: "Determination",
    description: "Face challenges head-on, never backing down from difficult problems.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Every great crew succeeds together - teamwork makes the dream work.",
    color: "from-purple-500 to-indigo-500"
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Think outside the box, just like the Straw Hat crew's creative solutions.",
    color: "from-yellow-500 to-orange-500"
  },
];

const JOURNEY_MILESTONES = [
  {
    year: "2020",
    title: "Set Sail",
    description: "Started my journey into software development and fell in love with creating solutions.",
    badge: "East Blue"
  },
  {
    year: "2021",
    title: "Grand Line Entry",
    description: "Dove deep into Machine Learning and Computer Vision, tackling real-world problems.",
    badge: "Grand Line"
  },
  {
    year: "2022",
    title: "Tesla Voyage",
    description: "Joined Tesla as Test Engineer, working on hardware integration for autonomous systems.",
    badge: "New World"
  },
  {
    year: "2023-2024",
    title: "Master's Thesis",
    description: "Conducted research on self-driving perception, pushing boundaries of what's possible.",
    badge: "Laugh Tale"
  },
];

export default function EnhancedAbout() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-20 lg:py-32 bg-white dark:bg-neutral-950 overflow-hidden"
    >
      {/* Decorative compass background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute top-1/4 right-1/4 w-64 h-64">
          <Compass className="w-full h-full text-treasure-gold animate-spin" style={{ animationDuration: "60s" }} />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex justify-center mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <StrawHatIcon size="xl" className="text-treasure-gold" />
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-neutral-900 dark:text-neutral-100"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            About This Adventurer
          </motion.h2>
          
          <motion.p
            className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I&apos;m a mechanical engineering master&apos;s student with a passion for integrating hardware and software. 
            My thesis focuses on self-driving perception, and I bring hands-on experience from Tesla working on 
            hardware integration for autonomous systems.
          </motion.p>
        </motion.div>

        {/* Core Values */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-center mb-10 text-neutral-900 dark:text-neutral-100">
            Crew Values
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CREW_VALUES.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className={cn(
                    "group relative",
                    "bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md",
                    "border border-neutral-200 dark:border-neutral-800",
                    "rounded-2xl overflow-hidden",
                    "shadow-lg hover:shadow-2xl",
                    "transition-all duration-300 hover:scale-105",
                    "p-6 text-center"
                  )}
                >
                  <div className={cn(
                    "w-16 h-16 mx-auto mb-4 rounded-2xl",
                    "bg-gradient-to-br",
                    value.color,
                    "flex items-center justify-center",
                    "group-hover:scale-110 transition-transform"
                  )}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-neutral-900 dark:text-neutral-100">
                    {value.title}
                  </h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center mb-10 text-neutral-900 dark:text-neutral-100">
            My Journey Through the Grand Line
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-ocean-blue via-treasure-gold to-ocean-blue hidden md:block" />

            <div className="space-y-8">
              {JOURNEY_MILESTONES.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className="relative"
                >
                  <div className="flex items-start gap-6">
                    {/* Timeline dot */}
                    <div className="hidden md:flex flex-shrink-0 w-16 h-16 rounded-full bg-treasure-gold border-4 border-white dark:border-neutral-950 shadow-lg items-center justify-center z-10">
                      <span className="text-sm font-bold text-neutral-900">{milestone.year}</span>
                    </div>

                    {/* Content card */}
                    <div className="flex-1 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <Badge variant="gold" className="mb-2">{milestone.badge}</Badge>
                          <h4 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                            {milestone.title}
                          </h4>
                        </div>
                        <span className="md:hidden text-sm font-bold text-treasure-gold">{milestone.year}</span>
                      </div>
                      <p className="text-neutral-600 dark:text-neutral-400">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Current Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 px-8 py-6 bg-gradient-to-r from-ocean-blue/10 to-treasure-gold/10 border border-neutral-200 dark:border-neutral-800 rounded-2xl backdrop-blur-sm">
            <StrawHatIcon size="md" className="text-treasure-gold" />
            <div>
              <p className="text-base font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                <strong>Currently Seeking:</strong> Full-time roles in ML, Robotics, Perception, or Autonomy
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 italic">
                Always down to chat about energy efficiency, vehicle modeling, and robust ML systems!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

