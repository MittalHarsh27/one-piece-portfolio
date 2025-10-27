"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code, Database, Cloud, Cpu, Sparkles, Brain, Layers } from "lucide-react";
import { cn } from "@/lib/utils";
import Badge from "@/components/ui/Badge";
import StrawHatIcon from "@/components/ui/StrawHatIcon";

// Devil Fruit inspired skill categories
const DEVIL_FRUITS_SKILLS = [
  {
    id: "gomu-gomu",
    fruitName: "Gomu Gomu no Mi",
    fruitType: "Paramecia",
    power: "Flexibility & Adaptability",
    category: "Languages & Frameworks",
    icon: Code,
    color: "from-red-500 to-pink-500",
    skills: [
      { name: "Python", level: 95 },
      { name: "JavaScript/TypeScript", level: 90 },
      { name: "C++", level: 85 },
      { name: "React/Next.js", level: 92 },
      { name: "Node.js", level: 88 },
    ],
    description: "Like Luffy's rubber powers, these languages give me the flexibility to stretch across any project."
  },
  {
    id: "mera-mera",
    fruitName: "Mera Mera no Mi",
    fruitType: "Logia",
    power: "Blazing Performance",
    category: "ML & AI",
    icon: Sparkles,
    color: "from-orange-500 to-red-600",
    skills: [
      { name: "PyTorch", level: 93 },
      { name: "TensorFlow", level: 88 },
      { name: "Computer Vision", level: 90 },
      { name: "NLP", level: 82 },
      { name: "scikit-learn", level: 87 },
    ],
    description: "Harness the power of fire - burning through complex ML problems with blazing speed."
  },
  {
    id: "ope-ope",
    fruitName: "Ope Ope no Mi",
    fruitType: "Paramecia",
    power: "Surgical Precision",
    category: "Backend & Databases",
    icon: Database,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "PostgreSQL", level: 89 },
      { name: "MongoDB", level: 85 },
      { name: "Redis", level: 83 },
      { name: "GraphQL", level: 87 },
      { name: "RESTful APIs", level: 92 },
    ],
    description: "Operate on data with surgical precision - clean architecture and optimal queries."
  },
  {
    id: "pika-pika",
    fruitName: "Pika Pika no Mi",
    fruitType: "Logia",
    power: "Speed of Light",
    category: "DevOps & Cloud",
    icon: Cloud,
    color: "from-yellow-400 to-amber-500",
    skills: [
      { name: "Docker", level: 90 },
      { name: "AWS", level: 87 },
      { name: "CI/CD", level: 88 },
      { name: "Kubernetes", level: 80 },
      { name: "Linux", level: 91 },
    ],
    description: "Move at the speed of light - rapid deployment and seamless scalability."
  },
  {
    id: "goro-goro",
    fruitName: "Goro Goro no Mi",
    fruitType: "Logia",
    power: "Lightning Intelligence",
    category: "Robotics & Systems",
    icon: Cpu,
    color: "from-purple-500 to-indigo-600",
    skills: [
      { name: "ROS", level: 88 },
      { name: "CUDA", level: 82 },
      { name: "Embedded Systems", level: 85 },
      { name: "Real-time Processing", level: 87 },
      { name: "SLAM", level: 83 },
    ],
    description: "Channel electrical intelligence through robotic systems with thunderous impact."
  },
  {
    id: "hana-hana",
    fruitName: "Hana Hana no Mi",
    fruitType: "Paramecia",
    power: "Knowledge Multiplication",
    category: "Tools & Practices",
    icon: Layers,
    color: "from-pink-500 to-rose-500",
    skills: [
      { name: "Git/GitHub", level: 94 },
      { name: "Agile/Scrum", level: 89 },
      { name: "System Design", level: 87 },
      { name: "Testing (Jest/Pytest)", level: 86 },
      { name: "Technical Writing", level: 90 },
    ],
    description: "Multiply knowledge and collaboration - every project blooms with proper tools."
  },
];

export default function EnhancedSkills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={containerRef}
      className="relative py-20 lg:py-32 bg-white dark:bg-neutral-950 overflow-hidden"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-treasure-gold/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <div className="relative">
              <StrawHatIcon size="xl" className="text-treasure-gold" />
              <motion.div
                className="absolute -inset-2 bg-treasure-gold/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </div>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-neutral-900 dark:text-neutral-100"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Devil Fruit Powers
          </motion.h2>
          
          <motion.p
            className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            My technical abilities, classified by the legendary Devil Fruits of the Grand Line. 
            Each power grants unique capabilities to conquer any challenge!
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {DEVIL_FRUITS_SKILLS.map((fruit, index) => {
            const Icon = fruit.icon;
            return (
              <motion.div
                key={fruit.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div
                  className={cn(
                    "group h-full",
                    "bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md",
                    "border border-neutral-200 dark:border-neutral-800",
                    "rounded-2xl overflow-hidden",
                    "shadow-lg hover:shadow-2xl",
                    "transition-all duration-300"
                  )}
                >
                  {/* Header with Gradient */}
                  <div className={cn("relative p-6 bg-gradient-to-r", fruit.color)}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Icon className="w-6 h-6 text-white" />
                          <Badge variant="default" className="bg-white/90 text-neutral-900">
                            {fruit.fruitType}
                          </Badge>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {fruit.fruitName}
                        </h3>
                        <p className="text-white/90 text-sm font-medium">
                          {fruit.power}
                        </p>
                      </div>
                      <motion.div
                        animate={{
                          rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                        }}
                      >
                        <Sparkles className="w-8 h-8 text-white/80" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h4 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                        {fruit.category}
                      </h4>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 italic">
                        {fruit.description}
                      </p>
                    </div>

                    {/* Skills with Progress Bars */}
                    <div className="space-y-3">
                      {fruit.skills.map((skill) => (
                        <div key={skill.name}>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                              {skill.name}
                            </span>
                            <span className="text-xs text-neutral-500 dark:text-neutral-400">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                            <motion.div
                              className={cn("h-full bg-gradient-to-r", fruit.color)}
                              initial={{ width: 0 }}
                              animate={isInView ? { width: `${skill.level}%` } : {}}
                              transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="inline-flex flex-col items-center gap-4 px-8 py-6 bg-gradient-to-r from-ocean-blue/10 to-treasure-gold/10 border border-neutral-200 dark:border-neutral-800 rounded-2xl backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <Brain className="w-6 h-6 text-treasure-gold" />
              <p className="text-base font-medium text-neutral-700 dark:text-neutral-300">
                <strong>6 Devil Fruits Mastered</strong> - Always learning new powers!
              </p>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 italic max-w-2xl">
              &ldquo;The sea is vast and full of mysteries. Each Devil Fruit represents years of training, 
              countless projects, and endless curiosity.&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

