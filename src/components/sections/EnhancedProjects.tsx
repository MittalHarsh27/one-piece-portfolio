"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import Badge from "@/components/ui/Badge";
import CleanButton from "@/components/ui/CleanButton";
import StrawHatIcon from "@/components/ui/StrawHatIcon";

// One Piece character associations for projects
// Each project is associated with a Straw Hat crew member based on its specialty
// Available crew members: Luffy, Zoro, Nami, Usopp, Sanji, Chopper, Robin, Franky, Brook

const PROJECTS = [
  {
    id: "ml-perception",
    title: "Autonomous Perception System",
    description: "Advanced ML pipeline for self-driving vehicle perception with real-time object detection and tracking.",
    longDescription: "Built a comprehensive perception system using computer vision and deep learning. Features include multi-object tracking, sensor fusion, and real-time inference on embedded hardware.",
    bounty: "₿150,000",
    technologies: ["Python", "PyTorch", "OpenCV", "ROS", "CUDA", "Docker"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    status: "completed" as const,
    character: "Luffy",
    characterQuote: "I'm gonna be the King of the Pirates!",
    impact: {
      users: "5+ vehicles deployed",
      performance: "30fps real-time processing",
      achievement: "Published at CVPR 2024"
    }
  },
  {
    id: "ecommerce",
    title: "Full-Stack E-Commerce Platform",
    description: "Complete e-commerce solution with payment processing, inventory management, and admin dashboard.",
    longDescription: "Developed a scalable e-commerce platform with React frontend and Node.js backend. Integrated Stripe payments, real-time inventory tracking, and comprehensive analytics dashboard.",
    bounty: "₿120,000",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Socket.io", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    status: "completed" as const,
    character: "Nami",
    characterQuote: "Money is the most important thing!",
    impact: {
      users: "1,000+ active users",
      performance: "99.9% uptime",
      achievement: "Featured on Product Hunt"
    }
  },
  {
    id: "robotics-vo",
    title: "Stereo Visual Odometry + IMU Fusion",
    description: "Robotics navigation system combining stereo vision and IMU for accurate trajectory estimation.",
    longDescription: "Implemented stereo triangulation with PnP and complementary fusion using IMU data. Built evaluation tooling for trajectory alignment and performance metrics.",
    bounty: "₿100,000",
    technologies: ["C++", "Python", "ROS", "GTSAM", "Eigen", "OpenCV"],
    githubUrl: "https://github.com/example",
    status: "completed" as const,
    character: "Franky",
    characterQuote: "A man's dream will never die!",
    impact: {
      performance: "<2% trajectory error",
      achievement: "Robotics Lab Best Project"
    }
  },
  {
    id: "ai-healthcare",
    title: "AI-Powered Healthcare Diagnostics",
    description: "Machine learning system for early disease detection from medical imaging.",
    longDescription: "Developed deep learning models for analyzing medical images. Achieved high accuracy in detecting various conditions while maintaining interpretability.",
    bounty: "₿130,000",
    technologies: ["Python", "TensorFlow", "FastAPI", "PostgreSQL", "Docker"],
    liveUrl: "https://example.com",
    status: "in-progress" as const,
    character: "Chopper",
    characterQuote: "I'm the doctor!",
    impact: {
      users: "3 hospitals testing",
      performance: "95% diagnostic accuracy"
    }
  },
  {
    id: "deepfake-detection",
    title: "Deepfake Detection with MDN-ViT",
    description: "Noise-aware ensemble model for robust face forgery detection in digital media.",
    longDescription: "Built a multi-network ensemble using Vision Transformers and noise analysis. Created reproducible training pipeline with comprehensive evaluation suite.",
    bounty: "₿110,000",
    technologies: ["Python", "PyTorch", "Transformers", "MLflow", "AWS"],
    githubUrl: "https://github.com/example",
    status: "completed" as const,
    character: "Robin",
    characterQuote: "I want to know the true history!",
    impact: {
      performance: "98.5% detection accuracy",
      achievement: "IEEE Paper Published"
    }
  },
  {
    id: "realtime-collab",
    title: "Real-Time Collaboration Platform",
    description: "WebSocket-based collaborative workspace with live editing and team communication.",
    longDescription: "Built a scalable real-time collaboration tool with operational transforms for conflict resolution. Features include live cursors, presence awareness, and team chat.",
    bounty: "₿90,000",
    technologies: ["Next.js", "WebSocket", "PostgreSQL", "Redis", "TypeScript"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    status: "in-progress" as const,
    character: "Brook",
    characterQuote: "Yohohoho! May I see your panties?",
    impact: {
      users: "500+ teams",
      performance: "<100ms latency"
    }
  }
];

const FILTER_OPTIONS = [
  { value: "all", label: "All Treasures" },
  { value: "completed", label: "Completed" },
  { value: "in-progress", label: "In Progress" },
];

export default function EnhancedProjects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState("all");

  const filteredProjects = PROJECTS.filter((project) => 
    filter === "all" || project.status === filter
  );

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative py-20 lg:py-32 bg-neutral-50 dark:bg-neutral-900 overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64">
          <Image
            src="/assets/images/one-piece-logos/ChatGPT Image Oct 25, 2025, 06_14_36 PM.png"
            alt=""
            fill
            className="object-contain"
            unoptimized
          />
        </div>
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
            <StrawHatIcon size="xl" className="text-treasure-gold" />
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-neutral-900 dark:text-neutral-100"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            My Treasure Collection
          </motion.h2>
          
          <motion.p
            className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Projects that showcase the adventures and treasures collected on my journey through technology. 
            Each one represents a unique challenge conquered!
          </motion.p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap gap-3 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {FILTER_OPTIONS.map((option) => (
            <CleanButton
              key={option.value}
              onClick={() => setFilter(option.value)}
              variant={filter === option.value ? "default" : "outline"}
              className={cn(
                filter === option.value && "bg-treasure-gold text-neutral-900 border-treasure-gold hover:bg-treasure-gold/90"
              )}
            >
              {option.label}
            </CleanButton>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div
                className={cn(
                  "group h-full",
                  "bg-white dark:bg-neutral-950 backdrop-blur-md",
                  "border border-neutral-200 dark:border-neutral-800",
                  "rounded-2xl overflow-hidden",
                  "shadow-lg hover:shadow-2xl",
                  "transition-all duration-300 hover:scale-[1.02]"
                )}
              >
                {/* Project Image/Header */}
                <div className="relative h-48 bg-gradient-to-br from-ocean-blue/20 to-treasure-gold/20 p-6 flex items-end">
                  {/* Bounty Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge variant="gold" className="text-base font-bold px-3 py-1.5">
                      {project.bounty}
                    </Badge>
                  </div>

                  {/* Character Badge */}
                  <div className="relative z-10">
                    <Badge variant="blue" className="backdrop-blur-sm">
                      <StrawHatIcon size="sm" className="mr-1" />
                      {project.character}&apos;s Project
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 leading-tight">
                        {project.title}
                      </h3>
                      <Star className="w-5 h-5 text-treasure-gold flex-shrink-0" />
                    </div>
                    
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 italic">
                      &ldquo;{project.characterQuote}&rdquo;
                    </p>
                  </div>

                  <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="default">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="default">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>

                  {/* Impact Stats */}
                  <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800 space-y-1">
                    {project.impact.users && (
                      <p className="text-xs text-neutral-600 dark:text-neutral-400">
                        👥 {project.impact.users}
                      </p>
                    )}
                    {project.impact.performance && (
                      <p className="text-xs text-neutral-600 dark:text-neutral-400">
                        ⚡ {project.impact.performance}
                      </p>
                    )}
                    {project.impact.achievement && (
                      <p className="text-xs text-neutral-600 dark:text-neutral-400">
                        🏆 {project.impact.achievement}
                      </p>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-ocean-blue dark:text-treasure-gold hover:underline"
                      >
                        View <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:underline"
                      >
                        Code <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  {/* Status Badge */}
                  <div className="pt-2">
                    <Badge 
                      variant={project.status === "completed" ? "gold" : "blue"}
                      className="text-xs"
                    >
                      {project.status === "completed" ? "✓ Completed" : "⚡ In Progress"}
                    </Badge>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Total Bounty */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-ocean-blue/10 to-treasure-gold/10 border border-neutral-200 dark:border-neutral-800 rounded-2xl backdrop-blur-sm">
            <StrawHatIcon size="md" className="text-treasure-gold" />
            <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300">
              <strong>Total Project Bounty:</strong> ₿800,000 - More adventures await!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

