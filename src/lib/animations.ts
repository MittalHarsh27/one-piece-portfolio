// ============================================================================
// ANIMATION VARIANTS LIBRARY
// ============================================================================
// This file contains predefined animation variants for Framer Motion
// These animations provide consistent motion across the One Piece portfolio
// For more information, see: https://www.framer.com/motion/

// ============================================================================
// IMPORTS
// ============================================================================
import { Variants } from "framer-motion";                 // Framer Motion animation variants type

// ============================================================================
// BASIC ANIMATION VARIANTS
// ============================================================================
// Common animations used throughout the application for consistent motion

/**
 * Fade in from bottom animation
 * Elements appear by fading in and sliding up from below
 */
export const fadeInUp: Variants = {
  hidden: {                                               // Initial state (hidden)
    opacity: 0,                                           // Fully transparent
    y: 50,                                                // 50px below final position
  },
  visible: {                                              // Final state (visible)
    opacity: 1,                                           // Fully opaque
    y: 0,                                                 // Final position
    transition: {                                          // Animation timing
      duration: 0.6,                                      // 0.6 seconds duration
      ease: "easeOut",                                    // Smooth deceleration
    },
  },
};

/**
 * Fade in from left animation
 * Elements appear by fading in and sliding in from the left
 */
export const fadeInLeft: Variants = {
  hidden: {                                               // Initial state (hidden)
    opacity: 0,                                           // Fully transparent
    x: -50,                                               // 50px to the left of final position
  },
  visible: {                                              // Final state (visible)
    opacity: 1,                                           // Fully opaque
    x: 0,                                                 // Final position
    transition: {                                          // Animation timing
      duration: 0.6,                                      // 0.6 seconds duration
      ease: "easeOut",                                    // Smooth deceleration
    },
  },
};

/**
 * Fade in from right animation
 * Elements appear by fading in and sliding in from the right
 */
export const fadeInRight: Variants = {
  hidden: {                                               // Initial state (hidden)
    opacity: 0,                                           // Fully transparent
    x: 50,                                                // 50px to the right of final position
  },
  visible: {                                              // Final state (visible)
    opacity: 1,                                           // Fully opaque
    x: 0,                                                 // Final position
    transition: {                                          // Animation timing
      duration: 0.6,                                      // 0.6 seconds duration
      ease: "easeOut",                                    // Smooth deceleration
    },
  },
};

/**
 * Scale in animation
 * Elements appear by scaling up from a smaller size
 */
export const scaleIn: Variants = {
  hidden: {                                               // Initial state (hidden)
    opacity: 0,                                           // Fully transparent
    scale: 0.8,                                           // 80% of final size
  },
  visible: {                                              // Final state (visible)
    opacity: 1,                                           // Fully opaque
    scale: 1,                                             // Full size
    transition: {                                          // Animation timing
      duration: 0.5,                                      // 0.5 seconds duration
      ease: "easeOut",                                    // Smooth deceleration
    },
  },
};

/**
 * Stagger container animation
 * Delays child animations to create a cascading effect
 */
export const staggerContainer: Variants = {
  hidden: {},                                             // No initial state needed
  visible: {                                              // When container becomes visible
    transition: {                                          // Animation timing
      staggerChildren: 0.1,                               // 0.1 second delay between children
    },
  },
};

// ============================================================================
// ONE PIECE THEMED ANIMATIONS
// ============================================================================
// Special animations inspired by One Piece themes and effects

/**
 * Haki glow animation
 * Creates a pulsing purple glow effect like One Piece Haki
 */
export const hakiGlow: Variants = {
  idle: {                                                 // Resting state
    filter: "drop-shadow(0 0 5px #6A29FF)",              // Subtle purple glow
  },
  active: {                                               // Active state
    filter: [                                              // Array of filter states for animation
      "drop-shadow(0 0 5px #6A29FF)",                    // Start: subtle glow
      "drop-shadow(0 0 15px #6A29FF)",                   // Peak: medium glow
      "drop-shadow(0 0 25px #6A29FF)",                   // Maximum: intense glow
      "drop-shadow(0 0 15px #6A29FF)",                   // Decline: medium glow
      "drop-shadow(0 0 5px #6A29FF)",                    // End: subtle glow
    ],
    transition: {                                          // Animation timing
      duration: 2,                                         // 2 seconds per cycle
      repeat: Infinity,                                    // Repeat infinitely
      ease: "easeInOut",                                  // Smooth acceleration/deceleration
    },
  },
};

/**
 * Wanted poster flip animation
 * Creates a 3D flip effect like turning over a wanted poster
 */
export const wantedPosterFlip: Variants = {
  front: {                                                // Front face visible
    rotateY: 0,                                           // No Y-axis rotation
  },
  back: {                                                 // Back face visible
    rotateY: 180,                                         // 180-degree Y-axis rotation
    transition: {                                          // Animation timing
      duration: 0.6,                                      // 0.6 seconds duration
      ease: "easeInOut",                                  // Smooth acceleration/deceleration
    },
  },
};

/**
 * Ship floating animation
 * Simulates a ship gently floating on ocean waves
 */
export const shipFloat: Variants = {
  floating: {                                             // Floating state
    y: [0, -10, 0],                                       // Vertical movement: up and down
    rotateZ: [0, 2, -2, 0],                              // Gentle side-to-side rocking
    transition: {                                          // Animation timing
      duration: 4,                                         // 4 seconds per cycle
      repeat: Infinity,                                    // Repeat infinitely
      ease: "easeInOut",                                  // Smooth acceleration/deceleration
    },
  },
};

// ============================================================================
// SCROLL-TRIGGERED ANIMATIONS
// ============================================================================
// Animations that respond to scroll position and viewport visibility

/**
 * Parallax Y animation
 * Creates vertical parallax effect based on scroll
 * @param offset - Vertical offset in pixels
 */
export const parallaxY = (offset: number = 50) => ({      // Default 50px offset
  y: `${offset}px`,                                       // Return Y transform value
});

/**
 * Scroll fade animation
 * Elements fade in when they come into view
 */
export const scrollFade = {
  initial: { opacity: 0, y: 50 },                        // Start: invisible and below
  whileInView: { opacity: 1, y: 0 },                     // In view: visible and in position
  viewport: { once: true, margin: "-100px" },             // Trigger once, 100px before viewport
  transition: { duration: 0.8 },                          // 0.8 seconds duration
};

// ============================================================================
// RESPONSIVE ANIMATION UTILITIES
// ============================================================================
// Functions to adjust animations based on screen size

/**
 * Get responsive animation based on screen size
 * @param mobile - Animation for mobile devices
 * @param desktop - Animation for desktop devices
 * @param breakpoint - Screen width breakpoint (default: 768px)
 * @returns Appropriate animation variant
 */
export const getResponsiveAnimation = (
  mobile: Record<string, unknown>,                        // Mobile animation variant
  desktop: Record<string, unknown>,                       // Desktop animation variant
  breakpoint: number = 768                                // Breakpoint in pixels
) => {
  if (typeof window !== "undefined" && window.innerWidth < breakpoint) {
    return mobile;                                         // Return mobile animation
  }
  return desktop;                                          // Return desktop animation
};

// ============================================================================
// SECTION-SPECIFIC ANIMATION PRESETS
// ============================================================================
// Predefined animations for each portfolio section

export const sectionAnimations = {
  // Hero section - dramatic entrance
  hero: {
    initial: { opacity: 0, scale: 0.9 },                 // Start: invisible and small
    animate: { opacity: 1, scale: 1 },                    // End: visible and full size
    transition: { duration: 1, delay: 0.2 },              // 1 second duration, 0.2s delay
  },
  
  // About section - slide up from below
  about: {
    initial: { opacity: 0, y: 100 },                      // Start: invisible and below
    whileInView: { opacity: 1, y: 0 },                    // In view: visible and in position
    viewport: { once: true },                              // Trigger only once
    transition: { duration: 0.8 },                         // 0.8 seconds duration
  },
  
  // Projects section - gentle slide up
  projects: {
    initial: { opacity: 0, y: 50 },                       // Start: invisible and slightly below
    whileInView: { opacity: 1, y: 0 },                    // In view: visible and in position
    viewport: { once: true, margin: "-50px" },             // Trigger 50px before viewport
    transition: { duration: 0.6 },                         // 0.6 seconds duration
  },
  
  // Skills section - scale in effect
  skills: {
    initial: { opacity: 0, scale: 0.8 },                  // Start: invisible and small
    whileInView: { opacity: 1, scale: 1 },                // In view: visible and full size
    viewport: { once: true },                              // Trigger only once
    transition: { duration: 0.5 },                         // 0.5 seconds duration
  },
  
  // Contact section - slide in from left
  contact: {
    initial: { opacity: 0, x: -50 },                      // Start: invisible and to the left
    whileInView: { opacity: 1, x: 0 },                    // In view: visible and in position
    viewport: { once: true },                              // Trigger only once
    transition: { duration: 0.7 },                         // 0.7 seconds duration
  },
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================
// Helper functions for creating dynamic animations

/**
 * Generate random delay for staggered animations
 * @param max - Maximum delay in seconds (default: 0.5s)
 * @returns Random delay value
 */
export const getRandomDelay = (max: number = 0.5) => Math.random() * max;

/**
 * Calculate staggered delay based on element index
 * @param index - Element index in sequence
 * @param baseDelay - Base delay between elements (default: 0.1s)
 * @returns Calculated delay value
 */
export const getStaggerDelay = (index: number, baseDelay: number = 0.1) =>
  index * baseDelay;

/**
 * Create spring transition configuration
 * @param stiffness - Spring stiffness (higher = faster, default: 100)
 * @param damping - Spring damping (higher = less bouncy, default: 15)
 * @returns Spring transition object
 */
export const createSpringTransition = (
  stiffness: number = 100,                                // Default stiffness value
  damping: number = 15                                    // Default damping value
) => ({
  type: "spring" as const,                                // Animation type
  stiffness,                                               // Spring stiffness
  damping,                                                 // Spring damping
});
