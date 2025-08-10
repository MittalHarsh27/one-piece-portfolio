"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import WantedCard from "@/components/ui/WantedCard";
import { Filter, Search } from "lucide-react";
import { cn } from "@/lib/utils";

// Sample project data - replace with your actual projects
const projects = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Empire",
    description: "A full-stack e-commerce platform with real-time inventory management",
    longDescription: "Built a comprehensive e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, inventory management, and admin dashboard. Implemented real-time updates using WebSockets and optimized for mobile devices.",
    bounty: "₿50,000",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Socket.io", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    image: "/projects/ecommerce.jpg",
    status: "completed" as const,
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
    longDescription: "Developed a team collaboration tool inspired by agile methodologies. Features drag-and-drop boards, real-time updates, file attachments, and team chat. Built with Next.js and PostgreSQL for optimal performance and scalability.",
    bounty: "₿35,000",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "Socket.io", "TypeScript"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    image: "/projects/taskmanager.jpg",
    status: "completed" as const,
    impact: {
      users: "500+ teams using daily",
      performance: "40% faster than competitors",
      achievement: "Won hackathon first place"
    }
  },
  {
    id: "weather-app",
    title: "Grand Line Weather",
    description: "A beautiful weather app with 3D visualizations and forecasts",
    longDescription: "Created an immersive weather experience using Three.js for 3D visualizations. Integrates multiple weather APIs for accurate forecasts and includes interactive maps, severe weather alerts, and personalized recommendations.",
    bounty: "₿25,000",
    technologies: ["React", "Three.js", "D3.js", "Weather API", "PWA"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    image: "/projects/weather.jpg",
    status: "completed" as const,
    impact: {
      users: "10K+ downloads",
      performance: "4.8/5 app store rating",
      achievement: "Featured in tech blog"
    }
  },
  {
    id: "portfolio-generator",
    title: "Portfolio Forge",
    description: "An AI-powered portfolio generator for developers",
    longDescription: "Building an intelligent platform that generates personalized developer portfolios using AI. Features include GitHub integration, skill assessment, project analysis, and automatic content generation. Currently in development with beta testing underway.",
    bounty: "₿75,000",
    technologies: ["Next.js", "OpenAI API", "Python", "FastAPI", "Redis"],
    githubUrl: "https://github.com/example",
    image: "/projects/portfolio.jpg",
    status: "in-progress" as const,
    impact: {
      achievement: "Beta testing with 100+ developers"
    }
  },
  {
    id: "blockchain-voting",
    title: "Decentralized Democracy",
    description: "A blockchain-based voting system for transparent elections",
    longDescription: "Designing a secure, transparent voting platform using blockchain technology. Will feature voter verification, immutable ballot storage, real-time results, and comprehensive audit trails. Focused on accessibility and security.",
    bounty: "₿100,000",
    technologies: ["Solidity", "Web3.js", "React", "IPFS", "MetaMask"],
    image: "/projects/voting.jpg",
    status: "planned" as const,
    impact: {
      achievement: "Potential to revolutionize voting"
    }
  },
  {
    id: "ai-code-reviewer",
    title: "Code Sensei AI",
    description: "An AI assistant for code review and optimization",
    longDescription: "Developing an intelligent code review system that provides detailed feedback, suggests optimizations, and helps maintain code quality. Uses machine learning to understand coding patterns and best practices across multiple languages.",
    bounty: "₿60,000",
    technologies: ["Python", "TensorFlow", "FastAPI", "Docker", "GitHub API"],
    githubUrl: "https://github.com/example",
    image: "/projects/ai-reviewer.jpg",
    status: "in-progress" as const,
    impact: {
      achievement: "Improving code quality for 50+ developers"
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
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === "all" || project.status === filter;
    const matchesSearch = searchTerm === "" || 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesFilter && matchesSearch;
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative py-20 lg:py-32 bg-gradient-to-b from-ink-black to-gray-900 text-white overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32">
          <div className="w-full h-full border-2 border-straw-hat rounded-full animate-spin-slow" />
        </div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24">
                      <div className="w-full h-full border-2 border-blue-400 rounded-full animate-pulse" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="font-manga text-4xl sm:text-5xl lg:text-6xl text-blue-800 mb-6"
            animate={{ textShadow: ["0 0 10px #F0B90B", "0 0 20px #F0B90B", "0 0 10px #F0B90B"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Wanted Board
          </motion.h2>
                      <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Every great pirate crew has their bounties. Here are mine - projects that showcase 
            the treasures I&apos;ve collected on my journey through the digital seas.
          </p>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-12 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-straw-hat focus:border-transparent"
            />
          </div>

          {/* Filter buttons */}
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-white/60" />
            <div className="flex space-x-2">
              {filterOptions.map((option) => (
                <motion.button
                  key={option.value}
                  onClick={() => setFilter(option.value)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                    filter === option.value
                      ? "bg-straw-hat text-black"
                      : "bg-white/10 text-white hover:bg-white/20"
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {option.label}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <WantedCard project={project} index={index} />
            </motion.div>
          ))}
        </motion.div>

        {/* No results message */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-6xl mb-4">🏴‍☠️</div>
            <h3 className="font-manga text-2xl text-blue-800 mb-2">
              No Bounties Found
            </h3>
            <p className="text-white/60">
              No projects match your search criteria. Try adjusting your filters or search term.
            </p>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-ocean-blue to-haki-purple rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="font-manga text-2xl text-white mb-4">
              Ready to Set Sail Together?
            </h3>
            <p className="text-white/90 mb-6">
              These are just some of the adventures I&apos;ve completed. Let&apos;s create something amazing together!
            </p>
            <motion.button
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-straw-hat text-black px-8 py-3 rounded-lg font-bold hover:bg-straw-hat/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a New Adventure
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
