"use client";

// ============================================================================
// ONE PIECE ICONS COMPONENT
// ============================================================================
// This component provides a centralized way to use One Piece themed PNG icons
// It uses custom PNG images for the best visual quality
// For more information, see: https://nextjs.org/docs/app/building-your-application/components

// ============================================================================
// IMPORTS
// ============================================================================
import React from 'react';
import Image from "next/image";                   // Next.js optimized image component
import { motion } from "framer-motion";           // Animation library for smooth transitions
import { cn } from "@/lib/utils";                // Utility function for conditional class names

// ============================================================================
// ICON TYPES
// ============================================================================
// Define available icon types
export type OnePieceIconType = 
  | "log-pose"
  | "straw-hat-jolly-roger"
  | "devil-fruit"
  | "treasure-chest"
  | "transponder-snail"
  | "luffy-silhouette";

interface OnePieceIconProps {
  type: OnePieceIconType;         // Icon type to render
  size?: "sm" | "md" | "lg" | "xl"; // Size variant
  className?: string;              // Optional additional CSS classes
  animated?: boolean;             // Whether to enable animations
  color?: "light" | "dark" | "accent"; // Color theme
}

// ============================================================================
// ICON MAPPING (SVG)
// ============================================================================
// Map icon types to their corresponding SVG icon paths
const iconImages: Record<OnePieceIconType, string> = {
  "log-pose": "/assets/icons/log-pose.svg",
  "straw-hat-jolly-roger": "/assets/icons/straw-hat-jolly-roger.svg",
  "devil-fruit": "/assets/icons/devil-fruit.svg",
  "treasure-chest": "/assets/icons/treasure-chest.svg",
  "transponder-snail": "/assets/icons/transponder-snail.svg",
  "luffy-silhouette": "/assets/images/one-piece-logos/Luffy-Smiling-Transparent-Background-2D.png",
};

// ============================================================================
// ICON COMPONENT
// ============================================================================
// Main icon component that renders the appropriate PNG image
export default function OnePieceIcon({ 
  type, 
  size = "md", 
  className, 
  animated = false
}: OnePieceIconProps) {
  
  // ============================================================================
  // SIZE CONFIGURATION
  // ============================================================================
  const sizeConfig = {
    sm: 16,      // 16px
    md: 24,      // 24px
    lg: 32,      // 32px
    xl: 48,      // 48px
  };

  const sizePx = sizeConfig[size];

  // ============================================================================
  // RENDER PNG ICON
  // ============================================================================
  return (
    <motion.div
      className={cn("inline-block relative", className)}
      animate={animated ? {
        scale: [1, 1.1, 1],
        rotate: type === "log-pose" ? [0, 360] : [0, 5, -5, 0],
      } : {}}
      transition={animated ? {
        duration: type === "log-pose" ? 8 : 3,
        repeat: Infinity,
        ease: type === "log-pose" ? "linear" : "easeInOut",
      } : {}}
      role="img"
      aria-label={`${type} icon`}
    >
      <Image
        src={iconImages[type]}
        alt={`${type} icon`}
        width={sizePx}
        height={sizePx}
        className="object-contain"
        unoptimized
      />
    </motion.div>
  );
}

// ============================================================================
// ICON VARIANTS
// ============================================================================
// Predefined icon components for common use cases

/**
 * Small animated icon
 */
export function SmallAnimatedIcon({ type, className }: { type: OnePieceIconType; className?: string }) {
  return <OnePieceIcon type={type} size="sm" animated className={className} />;
}

/**
 * Large static icon
 */
export function LargeStaticIcon({ type, className }: { type: OnePieceIconType; className?: string }) {
  return <OnePieceIcon type={type} size="lg" animated={false} className={className} />;
}

/**
 * Accent colored icon
 */
export function AccentIcon({ type, size = "md", className }: { type: OnePieceIconType; size?: "sm" | "md" | "lg" | "xl"; className?: string }) {
  return <OnePieceIcon type={type} size={size} color="accent" className={className} />;
}
