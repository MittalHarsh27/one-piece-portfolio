"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import OnePieceIcon from "@/components/ui/OnePieceIcons";

const projects: Array<{
  id: string;
  title: string;
  description: string;
  longDescription: string;
  bounty: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  status: "completed" | "in-progress" | "planned";
  character: string;
  characterIconType: "log-pose" | "straw-hat-jolly-roger" | "devil-fruit" | "treasure-chest" | "transponder-snail" | "luffy-silhouette";
  impact: {
    users?: string;
    performance?: string;
    achievement?: string;
  };
}> = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Empire",
    description: "A full-stack e-commerce platform with real-time inventory management",
    longDescription: "Built a comprehensive e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, inventory management, and admin dashboard.",
    bounty: "₿50,000",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Socket.io", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    image: "/projects/ecommerce.jpg",
    status: "completed" as const,
    character: "Nami",
    characterIconType: "treasure-chest",
    impact: {
      users: "1,000+ active users",
      performance: "99.9% uptime",
      achievement: "Featured on Product Hunt"
    }
  },
  {
    id: "task-manager",
    title: "Crew Task Manager",
    description: "A collaborative task management app with real-time synchronization",
    longDescription: "Developed a team collaboration tool inspired by agile methodologies. Features drag-and-drop boards, real-time updates, file attachments, and team chat.",
    bounty: "₿35,000",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "Socket.io", "TypeScript"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    image: "/projects/taskmanager.jpg",
    status: "completed" as const,
    character: "Robin",
    characterIconType: "transponder-snail",
    impact: {
      users: "500+ teams using daily",
      performance: "40% faster than competitors",
      achievement: "Won hackathon first place"
    }
  }
];

const filterOptions = [
  { value: "all", label: "All Projects" },
  { value: "completed", label: "Completed" },
  { value: "in-progress", label: "In Progress" },
  { value: "planned", label: "Planned" }
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === "all" || project.status === filter;
    return matchesFilter;
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative py-20 lg:py-32 bg-gradient-to-b from-light-bg-primary via-ocean-blue/10 to-light-bg-primary dark:from-dark-bg-primary dark:via-ocean-blue/20 dark:to-dark-bg-primary overflow-hidden"
    >
      {/* Background decorative elements with One Piece images */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-48 h-48 opacity-10"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/assets/images/one-piece-logos/ChatGPT Image Oct 25, 2025, 06_14_36 PM.png"
            alt=""
            fill
            className="object-contain"
            unoptimized
          />
        </motion.div>
        
        <motion.div
          className="absolute bottom-40 left-10 w-64 h-64 opacity-5"
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/assets/images/one-piece-logos/ChatGPT Image Oct 25, 2025, 06_16_21 PM.png"
            alt=""
            fill
            className="object-contain"
            unoptimized
          />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            My Treasures
          </motion.h2>
          <p className="text-xl sm:text-2xl text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto leading-relaxed">
            Projects that showcase the treasures I&apos;ve collected on my journey through the digital seas
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap gap-3 justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {filterOptions.map((option) => (
            <motion.button
              key={option.value}
              onClick={() => setFilter(option.value)}
              className={cn(
                "px-6 py-3 rounded-xl font-bold text-lg transition-all duration-300",
                filter === option.value
                  ? "bg-treasure-gold text-ocean-blue shadow-lg scale-105"
                  : "bg-light-bg-card dark:bg-dark-bg-card text-light-text-primary dark:text-dark-text-primary hover:scale-105 border-2 border-straw-hat/30 dark:border-treasure-gold/30"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {option.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={cn(
                "relative group cursor-pointer",
                "bg-light-bg-card dark:bg-dark-bg-card rounded-3xl overflow-hidden",
                "shadow-lg border-4 border-transparent",
                "hover:border-treasure-gold dark:hover:border-straw-hat",
                "transform transition-all duration-300 hover:scale-105"
              )}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setSelectedProject(project.id)}
              onMouseLeave={() => setSelectedProject(null)}
            >
              {/* Bounty Banner */}
              <div className="absolute top-4 right-4 z-20 bg-treasure-gold text-ocean-blue px-4 py-2 rounded-full font-bold text-lg shadow-xl">
                {project.bounty}
              </div>

              {/* Icon Badge */}
              <div className="absolute top-4 left-4 z-20 w-16 h-16 bg-ocean-blue/90 dark:bg-ocean-blue/90 rounded-full flex items-center justify-center border-4 border-white dark:border-dark-bg-primary">
                <OnePieceIcon
                  type={project.characterIconType}
                  size="lg"
                  animated={selectedProject === project.id}
                />
              </div>

              {/* Project Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-ocean-blue to-dark-bg-primary">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/50 text-6xl">📦</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-light-text-primary dark:text-dark-text-primary">
                  {project.title}
                </h3>
                
                <p className="text-light-text-secondary dark:text-dark-text-secondary mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-straw-hat/20 dark:bg-treasure-gold/20 text-straw-hat dark:text-treasure-gold rounded-full text-sm font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-ocean-blue text-white rounded-lg font-bold hover:bg-ocean-blue/80 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-dark-bg-primary dark:bg-light-bg-primary text-light-text-primary dark:text-dark-text-primary rounded-lg font-bold hover:opacity-80 transition-opacity border-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                </div>
              </div>

              {/* Status Badge */}
              <div className="absolute bottom-4 right-4">
                <span className={cn(
                  "px-3 py-1 rounded-full text-sm font-bold",
                  project.status === "completed" && "bg-green-500 text-white",
                  project.status === "in-progress" && "bg-yellow-500 text-white",
                  project.status === "planned" && "bg-blue-500 text-white"
                )}>
                  {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
