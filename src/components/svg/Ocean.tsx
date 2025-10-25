"use client";

// ============================================================================
// ANIMATED OCEAN SVG COMPONENT
// ============================================================================
// This component renders animated SVG ocean waves
// It replaces the 3D ocean with smooth SVG animations
// For more information, see: https://nextjs.org/docs/app/building-your-application/components

// ============================================================================
// IMPORTS
// ============================================================================
import { motion } from "framer-motion";           // Animation library for smooth transitions
import { cn } from "@/lib/utils";                // Utility function for conditional class names

// ============================================================================
// OCEAN SVG COMPONENT
// ============================================================================
// Main ocean component with wave animations
interface OceanProps {
  className?: string;              // Optional additional CSS classes
  animated?: boolean;             // Whether to enable animations
  depth?: "shallow" | "deep";     // Ocean depth for color variation
}

export default function Ocean({ 
  className, 
  animated = true, 
  depth = "deep" 
}: OceanProps) {
  const oceanColor = depth === "deep" ? "#0066CC" : "#4A90E2";
  const waveColor = depth === "deep" ? "#004499" : "#357ABD";

  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 400 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0"
      >
        {/* Base ocean */}
        <rect x="0" y="120" width="400" height="80" fill={oceanColor} opacity="0.8"/>
        
        {/* Wave layer 1 - Main waves */}
        <motion.path
          d="M0 140 Q100 120 200 140 T400 140 L400 200 L0 200 Z"
          fill={waveColor}
          opacity="0.9"
          animate={animated ? {
            d: [
              "M0 140 Q100 120 200 140 T400 140 L400 200 L0 200 Z",
              "M0 140 Q100 130 200 140 T400 140 L400 200 L0 200 Z",
              "M0 140 Q100 120 200 140 T400 140 L400 200 L0 200 Z"
            ]
          } : {}}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Wave layer 2 - Secondary waves */}
        <motion.path
          d="M0 150 Q80 135 160 150 T320 150 T400 150 L400 200 L0 200 Z"
          fill="#FFFFFF"
          opacity="0.3"
          animate={animated ? {
            d: [
              "M0 150 Q80 135 160 150 T320 150 T400 150 L400 200 L0 200 Z",
              "M0 150 Q80 140 160 150 T320 150 T400 150 L400 200 L0 200 Z",
              "M0 150 Q80 135 160 150 T320 150 T400 150 L400 200 L0 200 Z"
            ]
          } : {}}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        
        {/* Wave layer 3 - Foam */}
        <motion.path
          d="M0 160 Q60 145 120 160 T240 160 T360 160 T400 160 L400 200 L0 200 Z"
          fill="#FFFFFF"
          opacity="0.6"
          animate={animated ? {
            d: [
              "M0 160 Q60 145 120 160 T240 160 T360 160 T400 160 L400 200 L0 200 Z",
              "M0 160 Q60 150 120 160 T240 160 T360 160 T400 160 L400 200 L0 200 Z",
              "M0 160 Q60 145 120 160 T240 160 T360 160 T400 160 L400 200 L0 200 Z"
            ]
          } : {}}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        
        {/* Floating bubbles */}
        <motion.circle
          cx="50"
          cy="130"
          r="2"
          fill="#FFFFFF"
          opacity="0.7"
          animate={animated ? {
            y: [130, 110, 130],
            opacity: [0.7, 0.3, 0.7],
          } : {}}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0,
          }}
        />
        <motion.circle
          cx="150"
          cy="135"
          r="1.5"
          fill="#FFFFFF"
          opacity="0.6"
          animate={animated ? {
            y: [135, 115, 135],
            opacity: [0.6, 0.2, 0.6],
          } : {}}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8,
          }}
        />
        <motion.circle
          cx="250"
          cy="128"
          r="2.5"
          fill="#FFFFFF"
          opacity="0.8"
          animate={animated ? {
            y: [128, 108, 128],
            opacity: [0.8, 0.3, 0.8],
          } : {}}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
        <motion.circle
          cx="350"
          cy="132"
          r="1"
          fill="#FFFFFF"
          opacity="0.5"
          animate={animated ? {
            y: [132, 112, 132],
            opacity: [0.5, 0.2, 0.5],
          } : {}}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        
        {/* Sparkle effects */}
        <motion.circle
          cx="80"
          cy="120"
          r="1"
          fill="#FFD700"
          opacity="0.8"
          animate={animated ? {
            scale: [1, 1.5, 1],
            opacity: [0.8, 0.3, 0.8],
          } : {}}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
        />
        <motion.circle
          cx="200"
          cy="125"
          r="1"
          fill="#FFD700"
          opacity="0.6"
          animate={animated ? {
            scale: [1, 1.3, 1],
            opacity: [0.6, 0.2, 0.6],
          } : {}}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.2,
          }}
        />
        <motion.circle
          cx="320"
          cy="118"
          r="1"
          fill="#FFD700"
          opacity="0.7"
          animate={animated ? {
            scale: [1, 1.4, 1],
            opacity: [0.7, 0.2, 0.7],
          } : {}}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.1,
          }}
        />
      </svg>
    </div>
  );
}

// ============================================================================
// OCEAN VARIANTS
// ============================================================================
// Additional ocean components for different use cases

/**
 * Static ocean for backgrounds
 */
export function StaticOcean({ className }: { className?: string }) {
  return <Ocean className={className} animated={false} />;
}

/**
 * Shallow ocean for coastal scenes
 */
export function ShallowOcean({ className }: { className?: string }) {
  return <Ocean className={className} depth="shallow" />;
}

/**
 * Deep ocean for open sea scenes
 */
export function DeepOcean({ className }: { className?: string }) {
  return <Ocean className={className} depth="deep" />;
}
