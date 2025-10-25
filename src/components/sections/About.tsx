"use client";

/* ============================================================================
   ABOUT SECTION COMPONENT
   ============================================================================ */
/* This component displays your personal story and timeline in a One Piece theme */
/* It includes a timeline map, milestone events, and personal statement */

/* ============================================================================
   IMPORTS
   ============================================================================ */
import { motion, useScroll, useTransform } from "framer-motion";  /* Animation library */
import { useRef, useState } from "react";                         /* React hooks */
import { useInView } from "framer-motion";                        /* View detection */
import { cn } from "@/lib/utils";                                 /* Utility function for class names */
import OnePieceIcon from "@/components/ui/OnePieceIcons";         /* One Piece themed icons */

/* ============================================================================
   TIMELINE EVENT INTERFACE
   ============================================================================ */
/* Define the structure for each timeline event */
interface TimelineEvent {
  id: string;                    /* Unique identifier for each event */
  year: string;                  /* Year of the milestone */
  title: string;                 /* Title of the milestone (One Piece themed) */
  description: string;           /* Detailed description of what you learned/achieved */
  iconType: "log-pose" | "straw-hat-jolly-roger" | "devil-fruit" | "treasure-chest" | "transponder-snail" | "luffy-silhouette"; /* Icon type */
  color: string;                 /* Background color for the icon (use Tailwind classes) */
  achievements?: string[];        /* Array of skills/technologies learned */
  onePieceTheme?: string;        /* One Piece location/theme for this milestone */
}

/* ============================================================================
   TIMELINE DATA
   ============================================================================ */
/* This array contains all your timeline events */
/* EDIT: Customize each event with your own story, achievements, and One Piece themes */
const timelineEvents: TimelineEvent[] = [
  {
    id: "beginning",
    year: "2020",
    title: "Setting Sail from East Blue",
    description: "Started my journey into web development, learning the basics of HTML, CSS, and JavaScript. Like setting sail from the peaceful East Blue, everything was new and exciting.",
    iconType: "log-pose",
    color: "bg-light-button-secondary dark:bg-dark-button-secondary",
    achievements: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    onePieceTheme: "East Blue"
  },
  {
    id: "first-project",
    year: "2021",
    title: "Navigating the Grand Line",
    description: "Built my first full-stack application and discovered the challenges of modern web development. Each bug was like a sea monster to defeat!",
    iconType: "straw-hat-jolly-roger",
    color: "bg-light-success dark:bg-dark-success",
    achievements: ["React", "Node.js", "MongoDB", "API Development"],
    onePieceTheme: "Grand Line"
  },
  {
    id: "advanced-skills",
    year: "2022",
    title: "Mastering Haki Techniques",
    description: "Advanced to more complex technologies and frameworks, learning state management and advanced React patterns. Developing my Observation Haki for debugging!",
    iconType: "devil-fruit",
    color: "bg-haki-purple",
    achievements: ["TypeScript", "Redux", "Next.js", "Testing"],
    onePieceTheme: "New World"
  },
  {
    id: "current",
    year: "2023-2024",
    title: "Reaching for the One Piece",
    description: "Currently working on cutting-edge projects and exploring new technologies. The ultimate treasure of becoming a full-stack developer is within reach!",
    iconType: "treasure-chest",
    color: "bg-straw-hat dark:bg-treasure-gold",
    achievements: ["3D Graphics", "WebGL", "Performance", "Architecture"],
    onePieceTheme: "Laugh Tale"
  }
];

/* ============================================================================
   ABOUT SECTION COMPONENT
   ============================================================================ */
/* Main component that renders the about section */
export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeEvent, setActiveEvent] = useState<string>("beginning");
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-b from-light-bg-primary via-light-bg-secondary to-light-bg-primary dark:from-dark-bg-primary dark:via-dark-bg-secondary dark:to-dark-bg-primary py-20 overflow-hidden"
    >
      {/* Background ocean effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-blue/10 via-transparent to-ocean-blue/10 dark:from-ocean-blue/20 dark:via-transparent dark:to-ocean-blue/20" />
      
      {/* Floating bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-ocean-blue/30 dark:bg-grand-line/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="font-manga text-4xl sm:text-5xl lg:text-6xl text-straw-hat dark:text-treasure-gold mb-6"
            style={{ y }}
          >
            Crewmate Log
          </motion.h2>
          <p className="text-lg sm:text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto leading-relaxed">
            {/* EDIT: Customize this description to match your story */}
            Every great pirate has a story. Here&apos;s mine - a journey through the Grand Line of web development,
            collecting skills and treasures along the way.
          </p>
        </motion.div>

        {/* ============================================================================
            ENHANCED TIMELINE MAP
            ============================================================================
            This is the background map with the Grand Line and Red Line paths
            EDIT: Modify the SVG paths, colors, or add more map elements */}
        <div className="relative">
          {/* Improved Map background with One Piece elements */}
          <motion.div
            className="absolute inset-0 opacity-20"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 0.2 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <svg
              viewBox="0 0 800 400"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Grand Line path - the main journey line */}
              <path
                d="M50 350 Q200 250 400 300 T750 200"
                stroke="currentColor"
                strokeWidth="4"
                strokeDasharray="15,8"
                className="text-blue-400"
              />
              
              {/* Red Line - secondary path */}
              <path
                d="M100 320 Q300 280 500 320 T700 280"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="8,4"
                className="text-red-500"
              />
              
              {/* Island markers - these represent your timeline points */}
              <circle cx="50" cy="350" r="8" fill="currentColor" className="text-straw-hat" />
              <circle cx="200" cy="250" r="6" fill="currentColor" className="text-blue-400" />
              <circle cx="400" cy="300" r="6" fill="currentColor" className="text-purple-500" />
              <circle cx="600" cy="250" r="6" fill="currentColor" className="text-gold-500" />
              <circle cx="750" cy="200" r="8" fill="currentColor" className="text-straw-hat" />
            </svg>
          </motion.div>

          {/* ============================================================================
              TIMELINE EVENTS WITH ENHANCED CONNECTIONS
              ============================================================================
              This renders all your timeline events in a grid layout
              EDIT: Modify the grid layout, spacing, or add more events */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.id}
                className={cn(
                  "relative group cursor-pointer",
                  index % 2 === 0 ? "lg:justify-self-end" : "lg:justify-self-start"
                )}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                onMouseEnter={() => setActiveEvent(event.id)}
              >
                <div
                  className={cn(
                    "relative p-6 bg-light-bg-card/90 dark:bg-dark-bg-card/90 backdrop-blur-sm rounded-xl shadow-lg border-2 transition-all duration-300",
                    "hover:shadow-xl hover:scale-105 max-w-md",
                    activeEvent === event.id
                      ? "border-straw-hat dark:border-treasure-gold shadow-straw-hat/20 dark:shadow-treasure-gold/20"
                      : "border-light-border-secondary dark:border-dark-border-secondary hover:border-straw-hat dark:hover:border-treasure-gold"
                  )}
                >
                  {/* Event marker - the colored circle with icon */}
                  <div
                    className={cn(
                      "absolute -top-3 -left-3 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg",
                      event.color,
                      activeEvent === event.id && "animate-pulse"
                    )}
                  >
                    <OnePieceIcon 
                      type={event.iconType} 
                      size="lg" 
                      animated 
                      className="text-ocean-blue dark:text-grand-line" 
                    />
                  </div>

                  {/* Year badge - shows the year of the milestone */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-straw-hat/20 dark:bg-treasure-gold/20 text-straw-hat dark:text-treasure-gold rounded-full text-sm font-bold">
                      {event.year}
                    </span>
                  </div>

                  {/* One Piece Theme Badge - shows the One Piece location/theme */}
                  <div className="absolute top-4 left-16">
                    <span className="px-2 py-1 bg-ocean-blue/20 dark:bg-grand-line/20 text-ocean-blue dark:text-grand-line rounded-full text-xs font-medium">
                      {event.onePieceTheme}
                    </span>
                  </div>

                  {/* Content - the main text content of each timeline card */}
                  <div className="pt-4">
                    <h3 className="font-manga text-xl text-straw-hat dark:text-treasure-gold mb-3">
                      {event.title}
                    </h3>
                    <p className="text-light-text-secondary dark:text-dark-text-secondary mb-4 leading-relaxed">
                      {event.description}
                    </p>

                    {/* Achievements - the skills/technologies learned */}
                    {event.achievements && (
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm text-straw-hat dark:text-treasure-gold uppercase tracking-wide">
                          Key Skills Acquired:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {event.achievements.map((achievement, i) => (
                            <motion.span
                              key={i}
                              className="px-3 py-1 bg-straw-hat/20 dark:bg-treasure-gold/20 text-straw-hat dark:text-treasure-gold rounded-full text-xs font-medium"
                              initial={{ scale: 0 }}
                              animate={isInView ? { scale: 1 } : { scale: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.2 + i * 0.1 }}
                            >
                              {achievement}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Enhanced connecting lines for desktop - connects cards to the central timeline */}
                  <div className="hidden lg:block absolute top-1/2 -translate-y-1/2">
                    {index % 2 === 0 ? (
                      <div className="absolute -right-8 w-8 h-0.5 bg-gradient-to-r from-ocean-blue dark:from-grand-line to-straw-hat dark:to-treasure-gold" />
                    ) : (
                      <div className="absolute -left-8 w-8 h-0.5 bg-gradient-to-l from-ocean-blue dark:from-grand-line to-straw-hat dark:to-treasure-gold" />
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Central Timeline Connector - the main vertical line connecting all events */}
          <div className="hidden lg:block absolute top-1/2 left-1/2 w-1 h-full bg-gradient-to-b from-straw-hat dark:from-treasure-gold via-ocean-blue dark:via-grand-line to-straw-hat dark:to-treasure-gold transform -translate-x-1/2" />
        </div>

        {/* ============================================================================
            ENHANCED PERSONAL STATEMENT
            ============================================================================
            This is the inspirational quote at the bottom of the section
            EDIT: Change the text, styling, or add more elements */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-light-bg-card/90 dark:bg-dark-bg-card/90 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto border border-straw-hat/20 dark:border-treasure-gold/20 relative overflow-hidden">
            {/* Background pattern - subtle dot grid */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_#ffffff_1px,_transparent_1px)] dark:bg-[radial-gradient(circle_at_50%_50%,_#000000_1px,_transparent_1px)] bg-[length:20px_20px]" />
            </div>
            
            {/* Animated anchor icon */}
            <motion.div
              className="w-16 h-16 bg-straw-hat dark:bg-treasure-gold rounded-full flex items-center justify-center mx-auto mb-6 relative z-10"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <span className="text-2xl">⚓</span>
            </motion.div>
            
            {/* Personal statement title */}
            <h3 className="font-manga text-2xl text-straw-hat dark:text-treasure-gold mb-4 relative z-10">
              The Adventure Continues
            </h3>
            
            {/* Personal statement text */}
            <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary leading-relaxed relative z-10">
              {/* EDIT: Customize this entire paragraph to match your story and goals */}
              Like Luffy&apos;s quest to become the Pirate King, my journey in web development is driven by 
              curiosity, determination, and the desire to create something amazing. Every project is a new 
              island to explore, every challenge a new opponent to overcome, and every solution a treasure 
              to add to the crew&apos;s collection.
            </p>
            
            {/* Floating treasure chest - decorative element */}
            <motion.div
              className="absolute bottom-4 right-4 text-straw-hat/30 dark:text-treasure-gold/30"
              animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-3xl">💎</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
