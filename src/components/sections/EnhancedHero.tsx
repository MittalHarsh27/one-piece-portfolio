"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import CleanButton from "@/components/ui/CleanButton";
import Badge from "@/components/ui/Badge";
import SceneWrapper from "@/components/3d/SceneWrapper";
import StylizedOcean from "@/components/3d/StylizedOcean";
import FloatingImage from "@/components/3d/FloatingImage";

const ONE_PIECE_QUOTES = [
  "I don't want to conquer anything. I just think the guy with the most freedom in this entire ocean is the Pirate King!",
  "Power isn't determined by your size, but the size of your heart and dreams!",
  "If you don't take risks, you can't create a future!",
  "The world isn't perfect, but it's there for us trying the best it can. That's what makes it so beautiful."
];

const SOCIALS = [
  { 
    href: "https://github.com/yourusername", 
    label: "GitHub", 
    icon: Github 
  },
  { 
    href: "https://www.linkedin.com/in/yourhandle", 
    label: "LinkedIn", 
    icon: Linkedin 
  },
  { 
    href: "mailto:you@example.com", 
    label: "Email", 
    icon: Mail 
  },
];

export default function EnhancedHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const randomQuote = ONE_PIECE_QUOTES[Math.floor(Math.random() * ONE_PIECE_QUOTES.length)];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950"
    >
      {/* 3D Background */}
      <SceneWrapper className="absolute inset-0 z-0">
        {/* Ocean at the bottom */}
        <StylizedOcean />
        
        {/* Floating Elements replacing the previous 2D images */}
        <FloatingImage 
          imgSrc="/assets/images/one-piece-logos/Luffy-Transparent-Background-3D.png"
          position={[4, 2, -5]}
          scale={3}
          rotation={[0, -0.2, 0.1]}
          speed={0.8}
        />
        
        <FloatingImage 
          imgSrc="/assets/images/one-piece-logos/Ship-Transparent-Background-3D.png"
          position={[-4, -1, -4]}
          scale={3}
          rotation={[0, 0.2, -0.1]}
          speed={0.6}
          />
      </SceneWrapper>

      {/* Main Content */}
      {/* Added pointer-events-none to container and pointer-events-auto to interactive children so 3D background is clickable if needed */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pointer-events-none">
        <div className="grid lg:grid-cols-2 gap-12 items-center pointer-events-auto">
          {/* Left Column - Text Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Badge variant="gold" className="text-sm">
                  Welcome Aboard the Crew
                </Badge>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100"
              >
                Building reliable systems —
                <span className="block text-neutral-500 dark:text-neutral-400 text-3xl sm:text-4xl mt-3">
                  with a One Piece twist.
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl"
              >
                I&apos;m <strong>Harsh Mittal</strong>, a developer passionate about creating innovative solutions 
                and exploring new technologies. Like the Straw Hat crew, I believe in the power of teamwork, 
                creativity, and never giving up on your dreams.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                {SOCIALS.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a 
                      key={social.label} 
                      href={social.href} 
                      target="_blank" 
                      rel="noreferrer noopener"
                    >
                      <CleanButton variant="outline" className="gap-2">
                        <Icon className="w-4 h-4" />
                        {social.label}
                      </CleanButton>
                    </a>
                  );
                })}
                <CleanButton 
                  onClick={() => scrollToSection("projects")} 
                  className="gap-2"
                >
                  View Projects <ArrowRight className="w-4 h-4" />
                </CleanButton>
              </motion.div>

              {/* One Piece Quote */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="pt-6 border-t border-neutral-200 dark:border-neutral-800"
              >
                <blockquote className="italic text-sm text-neutral-500 dark:text-neutral-400">
                  &ldquo;{randomQuote}&rdquo;
                </blockquote>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-2xl bg-gradient-to-br from-ocean-blue/10 to-treasure-gold/10">
              <Image
                src="/assets/images/one-piece-logos/Luffy-Smiling-Transparent-Background-2D.png"
                alt="One Piece inspired illustration"
                fill
                className="object-cover"
                priority
                unoptimized
              />
            </div>
            
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-4 left-6 flex items-center gap-2 rounded-full bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md px-4 py-2 border border-neutral-200 dark:border-neutral-800 shadow-xl"
            >
              <span className="text-sm font-medium">Professional • Creative • Inspired</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
