"use client";

// ============================================================================
// THEME TOGGLE COMPONENT
// ============================================================================
// This component provides a toggle button for switching between light and dark themes
// It includes smooth animations and One Piece themed styling
// For more information, see: https://nextjs.org/docs/app/building-your-application/components

// ============================================================================
// IMPORTS
// ============================================================================
import { motion, AnimatePresence } from "framer-motion";           // Animation library for smooth transitions
import { Sun, Moon } from "lucide-react";        // Icons for light and dark modes
import { useTheme } from "@/components/providers/ThemeProvider";      // Theme context hook
import { cn } from "@/lib/utils";                // Utility function for conditional class names

// ============================================================================
// THEME TOGGLE COMPONENT
// ============================================================================
// Main toggle component with One Piece themed styling
interface ThemeToggleProps {
  className?: string;              // Optional additional CSS classes
  size?: "sm" | "md" | "lg";      // Size variant
  showLabel?: boolean;            // Whether to show text label
}

export default function ThemeToggle({ 
  className, 
  size = "md", 
  showLabel = false 
}: ThemeToggleProps) {
  // ============================================================================
  // THEME CONTEXT
  // ============================================================================
  const { theme, toggleTheme } = useTheme();

  // ============================================================================
  // SIZE CONFIGURATION
  // ============================================================================
  // Define size variants for the toggle button
  const sizeConfig = {
    sm: {
      button: "w-10 h-10",
      icon: "w-4 h-4",
      text: "text-sm",
    },
    md: {
      button: "w-12 h-12",
      icon: "w-5 h-5",
      text: "text-base",
    },
    lg: {
      button: "w-14 h-14",
      icon: "w-6 h-6",
      text: "text-lg",
    },
  };

  const config = sizeConfig[size];

  // ============================================================================
  // ANIMATION VARIANTS
  // ============================================================================
  // Define animation variants for smooth theme transitions
  const iconVariants = {
    light: { 
      rotate: 0, 
      scale: 1,
      opacity: 1,
    },
    dark: { 
      rotate: 180, 
      scale: 1,
      opacity: 1,
    },
  };

  const buttonVariants = {
    light: {
      backgroundColor: "#FFD700", // Treasure gold
      borderColor: "#D4AF37",
    },
    dark: {
      backgroundColor: "#1A1A2E", // Dark navy
      borderColor: "#4A90E2",
    },
  };

  // ============================================================================
  // RENDER
  // ============================================================================
  return (
    <motion.button
      onClick={toggleTheme}
      className={cn(
        // Base styles
        "relative flex items-center justify-center rounded-full border-2",
        "transition-all duration-300 ease-in-out",
        "hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2",
        "group overflow-hidden",
        
        // Size styles
        config.button,
        
        // Theme-specific styles
        theme === "light" 
          ? "bg-light-button-accent border-light-border-primary hover:bg-light-button-primary focus:ring-light-button-primary text-light-text-inverse" 
          : "bg-dark-button-secondary border-dark-border-secondary hover:bg-dark-button-primary focus:ring-dark-button-primary text-dark-text-primary",
        
        // Additional classes
        className
      )}
      variants={buttonVariants}
      animate={theme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {/* Background gradient overlay */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"
        style={{
          background: theme === "light" 
            ? "linear-gradient(45deg, #FF6B35, #FFD700)" 
            : "linear-gradient(45deg, #4A90E2, #8A2BE2)",
        }}
      />

      {/* Icon container */}
      <motion.div
        className="relative z-10 flex items-center justify-center"
        variants={iconVariants}
        animate={theme}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {/* Sun icon for light mode */}
        <motion.div
          className="absolute"
          initial={false}
          animate={{
            opacity: theme === "light" ? 1 : 0,
            scale: theme === "light" ? 1 : 0.8,
            rotate: theme === "light" ? 0 : 90,
          }}
          transition={{ duration: 0.3 }}
        >
          <Sun className={cn(config.icon, "text-orange-600")} />
        </motion.div>

        {/* Moon icon for dark mode */}
        <motion.div
          className="absolute"
          initial={false}
          animate={{
            opacity: theme === "dark" ? 1 : 0,
            scale: theme === "dark" ? 1 : 0.8,
            rotate: theme === "dark" ? 0 : -90,
          }}
          transition={{ duration: 0.3 }}
        >
          <Moon className={cn(config.icon, "text-blue-300")} />
        </motion.div>
      </motion.div>

      {/* Label (optional) */}
      {showLabel && (
        <motion.span
          className={cn(
            "ml-2 font-medium",
            config.text,
            theme === "light" ? "text-light-text-primary" : "text-dark-text-primary"
          )}
          initial={false}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{ duration: 0.3 }}
        >
          {theme === "light" ? "Dark" : "Light"}
        </motion.span>
      )}

      {/* Ripple effect on click */}
      <motion.div
        className="absolute inset-0 rounded-full bg-white/30"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 0, opacity: 0 }}
        whileTap={{
          scale: 1.5,
          opacity: [0, 0.3, 0],
          transition: { duration: 0.3 },
        }}
      />
    </motion.button>
  );
}

// ============================================================================
// THEME TOGGLE VARIANTS
// ============================================================================
// Additional theme toggle components for different use cases

/**
 * Compact theme toggle for navigation bars
 */
export function CompactThemeToggle({ className }: { className?: string }) {
  return <ThemeToggle size="sm" className={className} />;
}

/**
 * Large theme toggle for settings pages
 */
export function LargeThemeToggle({ className }: { className?: string }) {
  return <ThemeToggle size="lg" showLabel className={className} />;
}

/**
 * Theme toggle with text label
 */
export function LabeledThemeToggle({ className }: { className?: string }) {
  return <ThemeToggle size="md" showLabel className={className} />;
}
