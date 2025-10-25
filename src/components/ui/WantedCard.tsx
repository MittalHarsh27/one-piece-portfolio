"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Eye, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import OnePieceIcon from "@/components/ui/OnePieceIcons";

interface Project {
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
  character?: string;
  characterIconType?: "log-pose" | "straw-hat-jolly-roger" | "devil-fruit" | "treasure-chest" | "transponder-snail" | "luffy-silhouette";
  impact: {
    users?: string;
    performance?: string;
    achievement?: string;
  };
}

interface WantedCardProps {
  project: Project;
  index: number;
}

export default function WantedCard({ project, index }: WantedCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const statusColors = {
    completed: "bg-light-success dark:bg-dark-success",
    "in-progress": "bg-light-warning dark:bg-dark-warning",
    planned: "bg-light-info dark:bg-dark-info"
  };

  const statusText = {
    completed: "CAPTURED",
    "in-progress": "PURSUING",
    planned: "WANTED"
  };

  return (
    <motion.div
      className="relative w-full max-w-sm mx-auto h-96 perspective-1000"
      initial={{ opacity: 0, y: 50, rotateY: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative w-full h-full cursor-pointer preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front of card - Wanted Poster */}
        <motion.div
          className={cn(
            "absolute inset-0 backface-hidden rounded-lg overflow-hidden",
            "bg-gradient-to-b from-light-bg-card to-light-bg-secondary dark:from-dark-bg-card dark:to-dark-bg-secondary border-4 border-straw-hat dark:border-treasure-gold",
            "shadow-lg transform-gpu"
          )}
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(255, 215, 0, 0.05) 0%, transparent 50%),
              linear-gradient(45deg, transparent 49%, rgba(255, 215, 0, 0.03) 50%, transparent 51%)
            `
          }}
        >
          {/* Wanted Header */}
          <div className="p-4 text-center border-b-2 border-straw-hat dark:border-treasure-gold">
            <motion.h3
              className="font-manga text-2xl text-pirate-red dark:text-pirate-red mb-1"
              animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              WANTED
            </motion.h3>
            <div className={cn("inline-block px-2 py-1 rounded text-xs text-white font-bold", statusColors[project.status])}>
              {statusText[project.status]}
            </div>
          </div>

          {/* Project Image */}
          <div className="relative h-40 bg-light-bg-secondary dark:bg-dark-bg-secondary border-2 border-straw-hat dark:border-treasure-gold mx-4 mt-4 rounded overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-ocean-blue to-marine-blue dark:from-grand-line dark:to-marine-blue text-white">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                  {project.characterIconType ? (
                    <OnePieceIcon 
                      type={project.characterIconType} 
                      size="lg" 
                      animated 
                      className="text-straw-hat dark:text-treasure-gold" 
                    />
                  ) : (
                    <span className="text-2xl">🏴‍☠️</span>
                  )}
                </div>
                <p className="text-sm font-bold">{project.title}</p>
                {project.character && (
                  <p className="text-xs text-white/80">{project.character}</p>
                )}
              </div>
            </div>
            
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-straw-hat dark:border-treasure-gold" />
            <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-straw-hat dark:border-treasure-gold" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-straw-hat dark:border-treasure-gold" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-straw-hat dark:border-treasure-gold" />
          </div>

          {/* Project Title */}
          <div className="p-4 text-center">
            <motion.h4
              className="font-manga text-xl text-light-text-primary dark:text-dark-text-primary mb-2"
              animate={isHovered ? { y: -2 } : { y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {project.title}
            </motion.h4>
            <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary leading-tight mb-3">
              {project.description}
            </p>
          </div>

          {/* Bounty */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-pirate-red dark:bg-pirate-red text-white text-center py-2 rounded font-bold">
              <span className="text-xs">BOUNTY: </span>
              <span className="font-manga text-lg">{project.bounty}</span>
            </div>
          </div>

          {/* Hover overlay */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="absolute inset-0 bg-black/10 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="bg-light-bg-card/90 dark:bg-dark-bg-card/90 backdrop-blur-sm rounded-lg p-4 text-center"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                >
                  <Eye className="w-6 h-6 mx-auto mb-2 text-ocean-blue dark:text-grand-line" />
                  <p className="text-sm font-medium text-light-text-primary dark:text-dark-text-primary">
                    Click to see details
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Back of card - Project Details */}
        <motion.div
          className={cn(
            "absolute inset-0 backface-hidden rounded-lg overflow-hidden",
            "bg-gradient-to-br from-ocean-blue to-marine-blue dark:from-grand-line dark:to-marine-blue text-white p-6",
            "shadow-lg transform-gpu"
          )}
          style={{ transform: "rotateY(180deg)" }}
        >
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className="text-center mb-4">
              <h4 className="font-manga text-xl mb-2">{project.title}</h4>
              <div className="w-12 h-0.5 bg-straw-hat dark:bg-treasure-gold mx-auto" />
            </div>

            {/* Description */}
            <div className="flex-1 overflow-y-auto">
              <p className="text-sm leading-relaxed mb-4 text-white/90">
                {project.longDescription}
              </p>

              {/* Technologies */}
              <div className="mb-4">
                <h5 className="font-semibold mb-2 text-straw-hat dark:text-treasure-gold">Tech Stack:</h5>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-white/20 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Impact Metrics */}
              {Object.keys(project.impact).length > 0 && (
                <div className="mb-4">
                  <h5 className="font-semibold mb-2 text-straw-hat dark:text-treasure-gold">Impact:</h5>
                  <div className="space-y-1 text-sm">
                    {project.impact.users && (
                      <div className="flex items-center space-x-2">
                        <Star className="w-3 h-3" />
                        <span>{project.impact.users}</span>
                      </div>
                    )}
                    {project.impact.performance && (
                      <div className="flex items-center space-x-2">
                        <Star className="w-3 h-3" />
                        <span>{project.impact.performance}</span>
                      </div>
                    )}
                    {project.impact.achievement && (
                      <div className="flex items-center space-x-2">
                        <Star className="w-3 h-3" />
                        <span>{project.impact.achievement}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-2 mt-4">
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-straw-hat dark:bg-treasure-gold text-black dark:text-black py-2 px-3 rounded font-medium text-sm text-center hover:bg-straw-hat/90 dark:hover:bg-treasure-gold/90 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-4 h-4 inline mr-1" />
                  Live
                </motion.a>
              )}
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-white/20 py-2 px-3 rounded font-medium text-sm text-center hover:bg-white/30 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="w-4 h-4 inline mr-1" />
                  Code
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        className="absolute -top-2 -right-2 w-6 h-6 bg-pirate-red dark:bg-pirate-red rounded-full flex items-center justify-center text-white text-xs font-bold z-10"
        animate={isHovered ? { scale: 1.2, rotate: 10 } : { scale: 1, rotate: 0 }}
        transition={{ duration: 0.3 }}
      >
        !
      </motion.div>
    </motion.div>
  );
}
