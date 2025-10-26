"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import OnePieceIcon from "@/components/ui/OnePieceIcons";

interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  iconType: "log-pose" | "straw-hat-jolly-roger" | "devil-fruit" | "treasure-chest" | "transponder-snail" | "luffy-silhouette";
  color: string;
  achievements?: string[];
  onePieceTheme?: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    id: "beginning",
    year: "2020",
    title: "Setting Sail from East Blue",
    description: "Started my journey into web development, learning the basics of HTML, CSS, and JavaScript.",
    iconType: "log-pose",
    color: "bg-straw-hat/20 dark:bg-treasure-gold/20",
    achievements: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    onePieceTheme: "East Blue"
  },
  {
    id: "first-project",
    year: "2021",
    title: "Navigating the Grand Line",
    description: "Built my first full-stack application and discovered the power of React and Node.js.",
    iconType: "straw-hat-jolly-roger",
    color: "bg-ocean-blue/20 dark:bg-ocean-blue/20",
    achievements: ["React", "Node.js", "Express", "MongoDB"],
    onePieceTheme: "Grand Line"
  },
  {
    id: "mastery",
    year: "2022",
    title: "Conquering the New World",
    description: "Mastered modern frameworks and became proficient in TypeScript, Next.js, and cloud technologies.",
    iconType: "devil-fruit",
    color: "bg-haki-purple/20 dark:bg-haki-purple/20",
    achievements: ["TypeScript", "Next.js", "AWS", "Docker"],
    onePieceTheme: "New World"
  },
  {
    id: "current",
    year: "2024",
    title: "Reaching Laugh Tale",
    description: "Leading development teams and building cutting-edge applications with advanced architectures.",
    iconType: "treasure-chest",
    color: "bg-treasure-gold/20 dark:bg-treasure-gold/20",
    achievements: ["Team Leadership", "Advanced Architecture", "DevOps", "AI Integration"],
    onePieceTheme: "Laugh Tale"
  }
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeEvent, setActiveEvent] = useState<string>("beginning");
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative min-h-screen bg-gradient-to-b from-light-bg-primary via-light-bg-secondary to-light-bg-primary dark:from-dark-bg-primary dark:via-dark-bg-secondary dark:to-dark-bg-primary py-20 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Character Image Background */}
        <motion.div
          className="absolute top-10 right-10 w-64 h-64 opacity-10"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/assets/images/one-piece-logos/Luffy-Smiling-Transparent-Background-2D.png"
            alt=""
            fill
            className="object-contain drop-shadow-2xl"
            unoptimized
          />
        </motion.div>
        
        {/* Floating icons */}
        <motion.div
          className="absolute bottom-20 left-20 w-32 h-32 opacity-15"
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
            src="/assets/images/one-piece-logos/Zoro-with-swords-transparent-background-smirk-2d.png"
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
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="font-manga text-5xl sm:text-6xl lg:text-7xl mb-6 text-light-text-primary dark:text-dark-text-primary"
            initial={{ scale: 0.8 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            My Journey
          </motion.h2>
          <motion.p
            className="text-xl sm:text-2xl text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            An adventure through code and creativity, from learning the basics to mastering the craft
          </motion.p>
        </motion.div>

        {/* Timeline Container */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.id}
                className={cn(
                  "relative group cursor-pointer",
                  "bg-light-bg-card dark:bg-dark-bg-card",
                  "rounded-2xl p-8 shadow-lg",
                  "transform transition-all duration-300",
                  "hover:scale-105 hover:shadow-2xl",
                  "border-4 border-transparent hover:border-treasure-gold dark:hover:border-straw-hat"
                )}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setActiveEvent(event.id)}
                onMouseEnter={() => setActiveEvent(event.id)}
              >
                {/* Year Badge */}
                <div className="absolute -top-4 -right-4 bg-treasure-gold dark:bg-straw-hat text-ocean-blue px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                  {event.year}
                </div>

                {/* Icon */}
                <div className="mb-4 flex justify-center">
                  <div className={cn(
                    "w-20 h-20 rounded-full flex items-center justify-center",
                    event.color,
                    "border-4 border-white dark:border-dark-bg-primary",
                    "shadow-xl",
                    activeEvent === event.id && "animate-pulse"
                  )}>
                    <OnePieceIcon
                      type={event.iconType}
                      size="lg"
                      animated={activeEvent === event.id}
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 text-light-text-primary dark:text-dark-text-primary">
                  {event.title}
                </h3>
                
                <p className="text-light-text-secondary dark:text-dark-text-secondary mb-4">
                  {event.description}
                </p>

                {/* Achievements */}
                {event.achievements && (
                  <div className="flex flex-wrap gap-2">
                    {event.achievements.map((achievement, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-straw-hat/20 dark:bg-treasure-gold/20 text-straw-hat dark:text-treasure-gold rounded-full text-sm font-semibold border border-straw-hat/30 dark:border-treasure-gold/30"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                )}

                {/* Location Badge */}
                {event.onePieceTheme && (
                  <div className="mt-4 pt-4 border-t border-light-border-primary dark:border-dark-border-primary">
                    <p className="text-sm font-medium text-ocean-blue dark:text-grand-line">
                      📍 {event.onePieceTheme}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Personal Statement */}
        <motion.div
          className="mt-20 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-straw-hat/10 via-treasure-gold/10 to-straw-hat/10 dark:from-treasure-gold/10 dark:via-straw-hat/10 dark:to-treasure-gold/10 rounded-3xl p-12 border-4 border-treasure-gold/30 dark:border-straw-hat/30">
            <h3 className="text-3xl font-bold mb-6 text-light-text-primary dark:text-dark-text-primary">
              The Adventure Continues
            </h3>
            <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
              Like every great pirate adventure, my journey in development is never-ending. 
              I&apos;m constantly learning new technologies, exploring new frameworks, and seeking 
              treasure in the form of elegant solutions to complex problems. 
              Join me on this epic journey through the world of code!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
