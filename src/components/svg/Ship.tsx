"use client";

// ============================================================================
// ANIMATED SHIP SVG COMPONENT
// ============================================================================
// This component renders an animated SVG version of the Thousand Sunny
// It replaces the 3D ship with a high-quality SVG that's more recognizable
// For more information, see: https://nextjs.org/docs/app/building-your-application/components

// ============================================================================
// IMPORTS
// ============================================================================
import { motion } from "framer-motion";           // Animation library for smooth transitions
import { cn } from "@/lib/utils";                // Utility function for conditional class names

// ============================================================================
// SHIP SVG COMPONENT
// ============================================================================
// Main ship component with One Piece themed styling
interface ShipProps {
  className?: string;              // Optional additional CSS classes
  animated?: boolean;             // Whether to enable animations
}

export default function Ship({ className, animated = true }: ShipProps) {
  return (
    <motion.div
      className={cn("relative", className)}
      animate={animated ? {
        y: [0, -8, 0],
        rotate: [0, 1, -1, 0],
      } : {}}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg
        width="200"
        height="120"
        viewBox="0 0 200 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Ocean waves background */}
        <motion.path
          d="M0 100 Q50 90 100 100 T200 100 L200 120 L0 120 Z"
          fill="#0066CC"
          opacity="0.8"
          animate={animated ? {
            d: [
              "M0 100 Q50 90 100 100 T200 100 L200 120 L0 120 Z",
              "M0 100 Q50 95 100 100 T200 100 L200 120 L0 120 Z",
              "M0 100 Q50 90 100 100 T200 100 L200 120 L0 120 Z"
            ]
          } : {}}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Ship hull */}
        <ellipse cx="100" cy="85" rx="45" ry="15" fill="#8B4513" stroke="#654321" strokeWidth="2"/>
        
        {/* Hull bottom */}
        <ellipse cx="100" cy="95" rx="50" ry="8" fill="#654321"/>
        
        {/* Main deck */}
        <rect x="60" y="70" width="80" height="15" fill="#D4AF37" stroke="#B8860B" strokeWidth="1"/>
        
        {/* Main mast */}
        <rect x="98" y="30" width="4" height="45" fill="#654321"/>
        
        {/* Main sail */}
        <ellipse cx="100" cy="50" rx="25" ry="20" fill="#F5F5DC" stroke="#D4AF37" strokeWidth="2"/>
        
        {/* Straw Hat Jolly Roger on sail */}
        <circle cx="100" cy="45" r="8" fill="#000000"/>
        <ellipse cx="100" cy="42" rx="6" ry="4" fill="#D4AF37"/>
        <ellipse cx="100" cy="44" rx="5" ry="3" fill="#8B4513"/>
        
        {/* Crossbones on sail */}
        <line x1="92" y1="48" x2="108" y2="48" stroke="#FFFFFF" strokeWidth="2"/>
        <line x1="100" y1="40" x2="100" y2="56" stroke="#FFFFFF" strokeWidth="2"/>
        
        {/* Front mast */}
        <rect x="75" y="50" width="3" height="25" fill="#654321"/>
        
        {/* Front sail */}
        <ellipse cx="77" cy="60" rx="15" ry="12" fill="#F5F5DC" stroke="#D4AF37" strokeWidth="1"/>
        
        {/* Rear mast */}
        <rect x="125" y="55" width="3" height="20" fill="#654321"/>
        
        {/* Rear sail */}
        <ellipse cx="127" cy="63" rx="12" ry="10" fill="#F5F5DC" stroke="#D4AF37" strokeWidth="1"/>
        
        {/* Ship's figurehead - Lion */}
        <ellipse cx="55" cy="80" rx="8" ry="6" fill="#D4AF37" stroke="#B8860B" strokeWidth="1"/>
        <circle cx="52" cy="78" r="2" fill="#000000"/>
        <circle cx="58" cy="78" r="2" fill="#000000"/>
        <path d="M50 82 Q55 85 60 82" stroke="#000000" strokeWidth="1" fill="none"/>
        
        {/* Crow's nest */}
        <rect x="95" y="25" width="10" height="8" fill="#8B4513" stroke="#654321" strokeWidth="1"/>
        
        {/* Flag at the top */}
        <rect x="98" y="20" width="6" height="8" fill="#FFD700"/>
        <ellipse cx="101" cy="22" rx="2" ry="2" fill="#000000"/>
        
        {/* Ropes */}
        <line x1="100" y1="30" x2="77" y2="50" stroke="#8B4513" strokeWidth="1" opacity="0.7"/>
        <line x1="100" y1="30" x2="127" y2="55" stroke="#8B4513" strokeWidth="1" opacity="0.7"/>
        
        {/* Water splash effects */}
        <motion.circle
          cx="50"
          cy="100"
          r="3"
          fill="#FFFFFF"
          opacity="0.8"
          animate={animated ? {
            y: [0, -5, 0],
            opacity: [0.8, 0.3, 0.8],
          } : {}}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0,
          }}
        />
        <motion.circle
          cx="150"
          cy="100"
          r="2"
          fill="#FFFFFF"
          opacity="0.6"
          animate={animated ? {
            y: [0, -4, 0],
            opacity: [0.6, 0.2, 0.6],
          } : {}}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        <motion.circle
          cx="100"
          cy="105"
          r="2"
          fill="#FFFFFF"
          opacity="0.7"
          animate={animated ? {
            y: [0, -3, 0],
            opacity: [0.7, 0.2, 0.7],
          } : {}}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </svg>
    </motion.div>
  );
}

// ============================================================================
// SHIP VARIANTS
// ============================================================================
// Additional ship components for different use cases

/**
 * Static ship for backgrounds
 */
export function StaticShip({ className }: { className?: string }) {
  return <Ship className={className} animated={false} />;
}

/**
 * Large ship for hero sections
 */
export function LargeShip({ className }: { className?: string }) {
  return (
    <div className={cn("w-80 h-48", className)}>
      <Ship animated={true} />
    </div>
  );
}

/**
 * Small ship for decorative elements
 */
export function SmallShip({ className }: { className?: string }) {
  return (
    <div className={cn("w-32 h-20", className)}>
      <Ship animated={true} />
    </div>
  );
}
