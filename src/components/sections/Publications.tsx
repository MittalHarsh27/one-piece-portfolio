"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Award, Star, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";
import StrawHatIcon from "@/components/ui/StrawHatIcon";
import Badge from "@/components/ui/Badge";

const ACHIEVEMENTS = [
  {
    id: "paper1",
    title: "Advanced Machine Learning Techniques for Real-World Applications",
    type: "Publication",
    venue: "International Conference on AI 2024",
    authors: "Harsh Mittal, et al.",
    description: "Research on implementing cutting-edge ML algorithms in production environments.",
    link: "#",
    icon: Award,
    bounty: "₿100,000"
  },
  {
    id: "hackathon1",
    title: "First Place - National Hackathon Championship",
    type: "Achievement",
    venue: "Tech Innovation Summit 2024",
    authors: "Team Captain",
    description: "Led team to victory by developing an AI-powered solution for healthcare diagnostics.",
    link: "#",
    icon: Trophy,
    bounty: "₿75,000"
  },
  {
    id: "cert1",
    title: "AWS Solutions Architect - Professional",
    type: "Certification",
    venue: "Amazon Web Services",
    authors: "Certified Professional",
    description: "Advanced cloud architecture and deployment strategies.",
    link: "#",
    icon: Star,
    bounty: "₿50,000"
  }
];

const ONE_PIECE_ACHIEVEMENTS = [
  "Like Luffy collecting crewmates, I collect knowledge and skills",
  "Every certification is a Road Poneglyph on my journey",
  "These achievements are my crew's bounty - earned through dedication"
];

export default function Publications() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="publications"
      ref={containerRef}
      className="relative py-20 lg:py-32 bg-white dark:bg-neutral-950 overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5 dark:opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64">
          <svg viewBox="0 0 200 200" className="w-full h-full text-treasure-gold">
            <circle cx="100" cy="100" r="80" fill="currentColor" />
            <text x="100" y="110" textAnchor="middle" className="text-4xl font-bold fill-white">
              ₿
            </text>
          </svg>
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
            <Trophy className="w-12 h-12 text-treasure-gold" />
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-neutral-900 dark:text-neutral-100"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Bounties & Achievements
          </motion.h2>
          
          <motion.p
            className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {ONE_PIECE_ACHIEVEMENTS[Math.floor(Math.random() * ONE_PIECE_ACHIEVEMENTS.length)]}
          </motion.p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="space-y-6">
          {ACHIEVEMENTS.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div
                  className={cn(
                    "relative group",
                    "bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md",
                    "border border-neutral-200 dark:border-neutral-800",
                    "rounded-2xl overflow-hidden",
                    "shadow-lg hover:shadow-2xl",
                    "transition-all duration-300 hover:scale-[1.02]",
                    "p-6 sm:p-8"
                  )}
                >
                  {/* Bounty Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge variant="gold" className="text-base font-bold px-4 py-2">
                      {achievement.bounty}
                    </Badge>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-treasure-gold/10 border-2 border-treasure-gold/30 flex items-center justify-center">
                        <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-treasure-gold" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-3">
                      <div>
                        <Badge variant="blue" className="mb-2">
                          {achievement.type}
                        </Badge>
                        <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 leading-tight">
                          {achievement.title}
                        </h3>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                          {achievement.authors} • {achievement.venue}
                        </p>
                      </div>

                      <p className="text-neutral-700 dark:text-neutral-300">
                        {achievement.description}
                      </p>

                      <div className="pt-2">
                        <a
                          href={achievement.link}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex items-center gap-2 text-sm font-medium text-ocean-blue dark:text-treasure-gold hover:underline"
                        >
                          View Details <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-ocean-blue/10 to-treasure-gold/10 border border-neutral-200 dark:border-neutral-800 rounded-2xl backdrop-blur-sm">
            <Trophy className="w-6 h-6 text-treasure-gold" />
            <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300">
              <strong>Total Bounty Earned:</strong> ₿225,000 - The journey continues!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

