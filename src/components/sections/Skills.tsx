"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface Skill {
  name: string;
  level: number; // 1-5
  category: string;
  description: string;
  icon: string;
  color: string;
  projects: string[];
}

const skills: Skill[] = [
  // Frontend
  {
    name: "React",
    level: 5,
    category: "Frontend",
    description: "Master of component-based architecture with hooks and context",
    icon: "⚛️",
    color: "from-blue-400 to-blue-600",
    projects: ["E-Commerce Empire", "Crew Task Manager", "Grand Line Weather"]
  },
  {
    name: "Next.js",
    level: 5,
    category: "Frontend",
    description: "Full-stack React framework with SSR and API routes",
    icon: "🔥",
    color: "from-gray-700 to-gray-900",
    projects: ["Portfolio Forge", "Crew Task Manager"]
  },
  {
    name: "TypeScript",
    level: 4,
    category: "Frontend",
    description: "Type-safe JavaScript for scalable applications",
    icon: "📘",
    color: "from-blue-500 to-blue-700",
    projects: ["Crew Task Manager", "AI Code Reviewer"]
  },
  {
    name: "Three.js",
    level: 4,
    category: "Frontend",
    description: "3D graphics and animations for immersive experiences",
    icon: "🎮",
    color: "from-green-400 to-green-600",
    projects: ["Grand Line Weather", "This Portfolio"]
  },
  
  // Backend
  {
    name: "Node.js",
    level: 5,
    category: "Backend",
    description: "Server-side JavaScript with Express and microservices",
    icon: "🟢",
    color: "from-green-500 to-green-700",
    projects: ["E-Commerce Empire", "AI Code Reviewer"]
  },
  {
    name: "Python",
    level: 4,
    category: "Backend",
    description: "Data processing, AI/ML, and API development",
    icon: "🐍",
    color: "from-yellow-400 to-yellow-600",
    projects: ["Portfolio Forge", "AI Code Reviewer"]
  },
  {
    name: "PostgreSQL",
    level: 4,
    category: "Backend",
    description: "Relational database design and optimization",
    icon: "🐘",
    color: "from-blue-600 to-blue-800",
    projects: ["Crew Task Manager", "E-Commerce Empire"]
  },
  {
    name: "MongoDB",
    level: 4,
    category: "Backend",
    description: "NoSQL database for flexible data structures",
    icon: "🍃",
    color: "from-green-600 to-green-800",
    projects: ["E-Commerce Empire", "Portfolio Forge"]
  },

  // DevOps & Tools
  {
    name: "Docker",
    level: 4,
    category: "DevOps",
    description: "Containerization for consistent deployments",
    icon: "🐳",
    color: "from-blue-400 to-blue-600",
    projects: ["AI Code Reviewer", "Portfolio Forge"]
  },
  {
    name: "AWS",
    level: 3,
    category: "DevOps",
    description: "Cloud infrastructure and serverless architecture",
    icon: "☁️",
    color: "from-orange-400 to-orange-600",
    projects: ["E-Commerce Empire", "Grand Line Weather"]
  },
  {
    name: "Git",
    level: 5,
    category: "DevOps",
    description: "Version control and collaborative development",
    icon: "🌿",
    color: "from-red-400 to-red-600",
    projects: ["All Projects"]
  },

  // Blockchain
  {
    name: "Solidity",
    level: 3,
    category: "Blockchain",
    description: "Smart contract development for Ethereum",
    icon: "⛓️",
    color: "from-purple-400 to-purple-600",
    projects: ["Decentralized Democracy"]
  }
];

const categories = ["All", "Frontend", "Backend", "DevOps", "Blockchain"];

const levelLabels: Record<number, string> = {
  1: "Rookie",
  2: "Apprentice", 
  3: "Skilled",
  4: "Expert",
  5: "Master"
};

const levelColors: Record<number, string> = {
  1: "from-gray-400 to-gray-500",
  2: "from-blue-400 to-blue-500",
  3: "from-green-400 to-green-500",
  4: "from-yellow-400 to-yellow-500",
  5: "from-purple-400 to-purple-500"
};

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filteredSkills = selectedCategory === "All" 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section
      id="skills"
      ref={containerRef}
      className="relative py-20 lg:py-32 bg-gradient-to-b from-blue-800 to-black text-white overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Animated Haki aura background */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              "radial-gradient(circle at 20% 20%, rgba(106, 41, 255, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 80%, rgba(106, 41, 255, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 50%, rgba(106, 41, 255, 0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-haki-purple rounded-full opacity-30"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="font-manga text-4xl sm:text-5xl lg:text-6xl text-straw-hat mb-6"
            animate={hoveredSkill ? { 
              textShadow: [
                "0 0 10px #6A29FF", 
                "0 0 20px #6A29FF", 
                "0 0 30px #6A29FF",
                "0 0 20px #6A29FF",
                "0 0 10px #6A29FF"
              ] 
            } : {}}
            transition={{ duration: 1.5, repeat: hoveredSkill ? Infinity : 0 }}
          >
            Dev Haki
          </motion.h2>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Just like the legendary power of Haki, these skills flow through every line of code I write.
            Each one has been forged through countless battles in the digital seas.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-6 py-3 rounded-lg font-medium transition-all duration-300",
                selectedCategory === category
                  ? "bg-haki-purple text-white shadow-lg haki-glow"
                  : "bg-white/80 text-black hover:bg-white hover:shadow-md"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          layout
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <motion.div
                className={cn(
                  "relative p-6 bg-white rounded-xl shadow-lg border-2 transition-all duration-300",
                  "hover:shadow-2xl hover:scale-105 cursor-pointer",
                  hoveredSkill === skill.name
                    ? "border-haki-purple haki-glow"
                    : "border-gray-200 hover:border-straw-hat"
                )}
                whileHover={{ y: -5 }}
              >
                {/* Skill Icon */}
                <motion.div
                  className="text-4xl mb-4 text-center"
                  animate={hoveredSkill === skill.name ? { 
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, -5, 0]
                  } : {}}
                  transition={{ duration: 0.6 }}
                >
                  {skill.icon}
                </motion.div>

                {/* Skill Name */}
                            <h3 className="font-bold text-lg text-blue-800 mb-2 text-center">
              {skill.name}
            </h3>

                {/* Level Indicator */}
                <div className="mb-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-700">Level</span>
                    <span className={cn(
                      "text-xs px-2 py-1 rounded-full text-white font-bold",
                      `bg-gradient-to-r ${levelColors[skill.level]}`
                    )}>
                      {levelLabels[skill.level]}
                    </span>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className={cn(
                        "h-2 rounded-full bg-gradient-to-r",
                        hoveredSkill === skill.name ? skill.color : levelColors[skill.level]
                      )}
                      initial={{ width: 0 }}
                      animate={{ width: `${(skill.level / 5) * 100}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-700 mb-4 text-center leading-relaxed">
                  {skill.description}
                </p>

                {/* Projects using this skill */}
                <div className="text-center">
                                          <h4 className="text-xs font-semibold text-blue-800 uppercase tracking-wide mb-2">
                          Used In:
                        </h4>
                  <div className="flex flex-wrap justify-center gap-1">
                    {skill.projects.slice(0, 2).map((project, i) => (
                      <span
                        key={i}
                                                  className="text-xs px-2 py-1 bg-blue-800/20 text-blue-800 rounded-full"
                      >
                        {project}
                      </span>
                    ))}
                    {skill.projects.length > 2 && (
                      <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                        +{skill.projects.length - 2}
                      </span>
                    )}
                  </div>
                </div>

                {/* Haki glow effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 pointer-events-none"
                  animate={hoveredSkill === skill.name ? {
                    opacity: [0, 0.3, 0],
                    scale: [0.95, 1.05, 0.95],
                  } : { opacity: 0 }}
                  transition={{ duration: 2, repeat: hoveredSkill === skill.name ? Infinity : 0 }}
                  style={{
                    background: `radial-gradient(circle, rgba(106, 41, 255, 0.2) 0%, transparent 70%)`,
                    filter: `blur(10px)`,
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Haki Power Explanation */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-haki-purple/10 to-ocean-blue/10 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto border border-haki-purple/20">
            <motion.div
              className="w-16 h-16 bg-haki-purple rounded-full flex items-center justify-center mx-auto mb-6 haki-glow"
              animate={{ 
                boxShadow: [
                  "0 0 20px #6A29FF",
                  "0 0 40px #6A29FF", 
                  "0 0 20px #6A29FF"
                ] 
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-2xl">⚡</span>
            </motion.div>
            <h3 className="font-manga text-2xl text-blue-800 mb-4">
              The Power of Development Haki
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Like the three types of Haki in One Piece, my development skills are categorized into different domains. 
              Each skill has been honed through real-world battles, and when combined, they create powerful applications 
              that can conquer any digital challenge. The glow you see represents the mastery level - the brighter the aura, 
              the stronger the skill!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}