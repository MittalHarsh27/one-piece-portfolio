"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import CleanButton from "@/components/ui/CleanButton";
import StrawHatIcon from "@/components/ui/StrawHatIcon";
import OnePieceQuotes from "@/components/ui/OnePieceQuotes";

const CONTACT_METHODS = [
  {
    id: "email",
    icon: Mail,
    label: "Email",
    value: "you@example.com",
    href: "mailto:you@example.com",
    description: "Best for detailed discussions",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "linkedin",
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/yourhandle",
    href: "https://www.linkedin.com/in/yourhandle",
    description: "Let's connect professionally",
    color: "from-blue-600 to-blue-800"
  },
  {
    id: "github",
    icon: Github,
    label: "GitHub",
    value: "github.com/yourusername",
    href: "https://github.com/yourusername",
    description: "Check out my code",
    color: "from-gray-700 to-gray-900"
  },
];

export default function EnhancedContact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative py-20 lg:py-32 bg-neutral-50 dark:bg-neutral-900 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96">
          <svg viewBox="0 0 200 200" className="w-full h-full text-treasure-gold">
            <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="2" />
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
            <StrawHatIcon size="xl" className="text-treasure-gold" />
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-neutral-900 dark:text-neutral-100"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Join the Crew
          </motion.h2>
          
          <motion.p
            className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Looking for a nakama (crewmate) for your next adventure? Let&apos;s set sail together! 
            The quickest way to reach me is via email or LinkedIn.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {CONTACT_METHODS.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={method.id}
                  href={method.href}
                  target={method.id !== "email" ? "_blank" : undefined}
                  rel={method.id !== "email" ? "noreferrer noopener" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className={cn(
                    "group block",
                    "bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md",
                    "border border-neutral-200 dark:border-neutral-800",
                    "rounded-2xl overflow-hidden",
                    "shadow-lg hover:shadow-2xl",
                    "transition-all duration-300 hover:scale-[1.02]",
                    "p-6"
                  )}
                >
                  <div className="flex items-start gap-4">
                    <div className={cn(
                      "flex-shrink-0 w-14 h-14 rounded-xl",
                      "bg-gradient-to-br",
                      method.color,
                      "flex items-center justify-center",
                      "group-hover:scale-110 transition-transform"
                    )}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                        {method.label}
                      </h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                        {method.description}
                      </p>
                      <p className="text-sm font-mono text-ocean-blue dark:text-treasure-gold">
                        {method.value}
                      </p>
                    </div>

                    <Send className="w-5 h-5 text-neutral-400 group-hover:text-treasure-gold group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.a>
              );
            })}

            {/* Location Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center gap-2 justify-center p-4 bg-white/50 dark:bg-neutral-950/50 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800 rounded-2xl"
            >
              <MapPin className="w-4 h-4 text-treasure-gold" />
              <span className="text-sm text-neutral-600 dark:text-neutral-400">
                Currently sailing from: <strong>Your Location</strong>
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column - Quote & Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-6"
          >
            {/* Inspirational Quote */}
            <div className="bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-lg p-8">
              <OnePieceQuotes showCharacter={true} />
            </div>

            {/* What I'm Looking For */}
            <div className="bg-gradient-to-br from-ocean-blue/10 to-treasure-gold/10 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-lg p-8 space-y-4">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
                <StrawHatIcon size="sm" className="text-treasure-gold" />
                What I&apos;m Looking For
              </h3>
              
              <ul className="space-y-2 text-neutral-700 dark:text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="text-treasure-gold mt-1">⚡</span>
                  <span>Full-time opportunities in ML, Robotics, or Perception</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-treasure-gold mt-1">🤝</span>
                  <span>Collaboration on open-source projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-treasure-gold mt-1">💬</span>
                  <span>Discussing tech, One Piece, or anything in between</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-treasure-gold mt-1">🚀</span>
                  <span>Building innovative solutions that make an impact</span>
                </li>
              </ul>
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center"
            >
              <CleanButton
                size="lg"
                onClick={() => window.location.href = "mailto:you@example.com"}
                className="w-full gap-2 bg-treasure-gold text-neutral-900 border-treasure-gold hover:bg-treasure-gold/90"
              >
                <Mail className="w-5 h-5" />
                Send Me a Message
              </CleanButton>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 rounded-2xl">
            <StrawHatIcon size="md" className="text-treasure-gold" />
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              <strong>Response Time:</strong> Usually within 24-48 hours. No auto-replies, just genuine conversation!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

