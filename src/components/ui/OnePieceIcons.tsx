"use client";

// ============================================================================
// ONE PIECE ICONS COMPONENT
// ============================================================================
// This component provides a centralized way to use One Piece themed SVG icons
// It includes all the custom icons we've created for the portfolio
// For more information, see: https://nextjs.org/docs/app/building-your-application/components

// ============================================================================
// IMPORTS
// ============================================================================
import React from 'react';
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
// ICON COMPONENT
// ============================================================================
// Main icon component that renders the appropriate SVG
export default function OnePieceIcon({ 
  type, 
  size = "md", 
  className, 
  animated = false,
  color = "accent"
}: OnePieceIconProps) {
  
  // ============================================================================
  // SIZE CONFIGURATION
  // ============================================================================
  const sizeConfig = {
    sm: "w-4 h-4",
    md: "w-6 h-6", 
    lg: "w-8 h-8",
    xl: "w-12 h-12",
  };

  // ============================================================================
  // COLOR CONFIGURATION
  // ============================================================================
  const colorClasses = {
    light: "text-light-text-primary",
    dark: "text-dark-text-primary", 
    accent: "text-straw-hat dark:text-treasure-gold",
  };

  // ============================================================================
  // ICON RENDERING
  // ============================================================================
  const renderIcon = () => {
    const iconProps = {
      className: cn(sizeConfig[size], colorClasses[color], className),
    };

    switch (type) {
      case "log-pose":
        return (
          <motion.svg
            {...iconProps}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            animate={animated ? { rotate: 360 } : {}}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <circle cx="16" cy="16" r="14" fill="currentColor" stroke="currentColor" strokeWidth="2"/>
            <circle cx="16" cy="16" r="10" fill="transparent" stroke="currentColor" strokeWidth="1"/>
            <line x1="16" y1="6" x2="16" y2="26" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <line x1="6" y1="16" x2="26" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="16" cy="16" r="2" fill="currentColor"/>
          </motion.svg>
        );

      case "straw-hat-jolly-roger":
        return (
          <motion.svg
            {...iconProps}
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            animate={animated ? { 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            } : {}}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <circle cx="32" cy="32" r="30" fill="currentColor" stroke="currentColor" strokeWidth="2"/>
            <ellipse cx="32" cy="28" rx="18" ry="12" fill="currentColor"/>
            <ellipse cx="32" cy="32" rx="20" ry="8" fill="currentColor"/>
            <ellipse cx="32" cy="30" rx="16" ry="6" fill="currentColor"/>
            <ellipse cx="20" cy="40" rx="8" ry="3" fill="currentColor" transform="rotate(-30 20 40)"/>
            <ellipse cx="20" cy="40" rx="3" ry="8" fill="currentColor" transform="rotate(-30 20 40)"/>
            <ellipse cx="44" cy="40" rx="8" ry="3" fill="currentColor" transform="rotate(30 44 40)"/>
            <ellipse cx="44" cy="40" rx="3" ry="8" fill="currentColor" transform="rotate(30 44 40)"/>
            <ellipse cx="32" cy="45" rx="12" ry="10" fill="currentColor"/>
            <ellipse cx="28" cy="42" rx="2" ry="2" fill="currentColor"/>
            <ellipse cx="36" cy="42" rx="2" ry="2" fill="currentColor"/>
            <path d="M28 48 Q32 52 36 48" stroke="currentColor" strokeWidth="2" fill="none"/>
          </motion.svg>
        );

      case "devil-fruit":
        return (
          <motion.svg
            {...iconProps}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            animate={animated ? { 
              filter: ["brightness(1)", "brightness(1.3)", "brightness(1)"],
              scale: [1, 1.1, 1]
            } : {}}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ellipse cx="24" cy="32" rx="16" ry="12" fill="currentColor" stroke="currentColor" strokeWidth="2"/>
            <ellipse cx="24" cy="20" rx="12" ry="8" fill="currentColor" stroke="currentColor" strokeWidth="1"/>
            <rect x="22" y="12" width="4" height="8" fill="currentColor" stroke="currentColor" strokeWidth="1"/>
            <ellipse cx="20" cy="10" rx="3" ry="6" fill="currentColor" transform="rotate(-30 20 10)"/>
            <ellipse cx="28" cy="10" rx="3" ry="6" fill="currentColor" transform="rotate(30 28 10)"/>
            <path d="M12 28 Q24 20 36 28 Q24 36 12 28" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.7"/>
            <circle cx="16" cy="24" r="1" fill="currentColor" opacity="0.8"/>
            <circle cx="32" cy="28" r="1" fill="currentColor" opacity="0.8"/>
            <circle cx="20" cy="36" r="1" fill="currentColor" opacity="0.8"/>
          </motion.svg>
        );

      case "treasure-chest":
        return (
          <motion.svg
            {...iconProps}
            viewBox="0 0 64 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            animate={animated ? { 
              y: [0, -2, 0],
              scale: [1, 1.02, 1]
            } : {}}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <rect x="8" y="20" width="48" height="24" fill="currentColor" stroke="currentColor" strokeWidth="2" rx="2"/>
            <path d="M8 20 Q32 8 56 20 L56 28 Q32 16 8 28 Z" fill="currentColor" stroke="currentColor" strokeWidth="2"/>
            <circle cx="32" cy="24" r="4" fill="currentColor" stroke="currentColor" strokeWidth="1"/>
            <circle cx="32" cy="24" r="2" fill="currentColor"/>
            <rect x="8" y="26" width="48" height="2" fill="currentColor"/>
            <rect x="8" y="34" width="48" height="2" fill="currentColor"/>
            <ellipse cx="32" cy="32" rx="20" ry="8" fill="currentColor" opacity="0.3"/>
            <circle cx="20" cy="16" r="1" fill="currentColor"/>
            <circle cx="44" cy="18" r="1" fill="currentColor"/>
            <circle cx="16" cy="32" r="1" fill="currentColor"/>
            <circle cx="48" cy="30" r="1" fill="currentColor"/>
          </motion.svg>
        );

      case "transponder-snail":
        return (
          <motion.svg
            {...iconProps}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            animate={animated ? { 
              scale: [1, 1.05, 1],
              rotate: [0, 2, -2, 0]
            } : {}}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <ellipse cx="24" cy="24" rx="16" ry="20" fill="currentColor" stroke="currentColor" strokeWidth="2"/>
            <path d="M24 4 Q32 8 28 16 Q24 20 20 16 Q16 12 20 8 Q24 4 24 4" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M20 8 Q28 12 24 20 Q20 24 16 20 Q12 16 16 12 Q20 8 20 8" stroke="currentColor" strokeWidth="1" fill="none"/>
            <ellipse cx="24" cy="32" rx="8" ry="12" fill="currentColor" stroke="currentColor" strokeWidth="1"/>
            <circle cx="20" cy="28" r="2" fill="currentColor"/>
            <circle cx="28" cy="28" r="2" fill="currentColor"/>
            <circle cx="21" cy="27" r="1" fill="currentColor"/>
            <circle cx="29" cy="27" r="1" fill="currentColor"/>
            <line x1="20" y1="28" x2="18" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <line x1="28" y1="28" x2="30" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="18" cy="24" r="1" fill="currentColor"/>
            <circle cx="30" cy="24" r="1" fill="currentColor"/>
            <path d="M22 36 Q24 38 26 36" stroke="currentColor" strokeWidth="1" fill="none"/>
          </motion.svg>
        );

      case "luffy-silhouette":
        return (
          <motion.svg
            {...iconProps}
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            animate={animated ? { 
              scale: [1, 1.02, 1],
              y: [0, -2, 0]
            } : {}}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Luffy's silhouette */}
            <circle cx="32" cy="20" r="8" fill="currentColor"/>
            <ellipse cx="32" cy="35" rx="12" ry="18" fill="currentColor"/>
            <ellipse cx="32" cy="50" rx="8" ry="6" fill="currentColor"/>
            <path d="M20 25 Q32 15 44 25" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M20 30 Q32 20 44 30" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M20 35 Q32 25 44 35" stroke="currentColor" strokeWidth="2" fill="none"/>
          </motion.svg>
        );

      default:
        return null;
    }
  };

  return renderIcon();
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
