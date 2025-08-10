// ============================================================================
// UTILITY FUNCTIONS LIBRARY
// ============================================================================
// This file contains reusable utility functions for common operations
// These functions are used throughout the application for consistency and reusability

// ============================================================================
// IMPORTS
// ============================================================================
import { type ClassValue, clsx } from "clsx";             // Utility for constructing className strings
import { twMerge } from "tailwind-merge";                 // Utility for merging Tailwind classes without conflicts

// ============================================================================
// CLASS NAME UTILITIES
// ============================================================================
// Function to merge multiple class names and resolve Tailwind conflicts
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));                           // Combine clsx and twMerge for optimal class handling
}

// ============================================================================
// PERFORMANCE OPTIMIZATION UTILITIES
// ============================================================================

/**
 * Debounce function - delays execution until after a specified wait time
 * Useful for search inputs, scroll events, and other frequent user interactions
 * @param func - Function to debounce
 * @param wait - Wait time in milliseconds
 * @returns Debounced function
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,                                                // Original function to debounce
  wait: number                                            // Delay time in milliseconds
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;                            // Store timeout reference
  return (...args: Parameters<T>) => {                     // Return debounced function
    clearTimeout(timeout);                                 // Clear previous timeout
    timeout = setTimeout(() => func(...args), wait);       // Set new timeout
  };
}

/**
 * Throttle function - limits execution to once per specified time period
 * Useful for scroll events, resize events, and other continuous interactions
 * @param func - Function to throttle
 * @param limit - Time limit in milliseconds
 * @returns Throttled function
 */
export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,                                                // Original function to throttle
  limit: number                                           // Time limit in milliseconds
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;                                // Track if function is currently throttled
  return (...args: Parameters<T>) => {                     // Return throttled function
    if (!inThrottle) {                                    // Only execute if not throttled
      func(...args);                                       // Execute the function
      inThrottle = true;                                  // Set throttle flag
      setTimeout(() => (inThrottle = false), limit);       // Reset throttle flag after limit
    }
  };
}

// ============================================================================
// MATH UTILITIES
// ============================================================================

/**
 * Linear interpolation between two values
 * Useful for smooth transitions and animations
 * @param start - Starting value
 * @param end - Ending value
 * @param factor - Interpolation factor (0-1)
 * @returns Interpolated value
 */
export function lerp(start: number, end: number, factor: number): number {
  return start + (end - start) * factor;                  // Linear interpolation formula
}

/**
 * Clamp a value between minimum and maximum bounds
 * Useful for preventing values from going out of range
 * @param value - Value to clamp
 * @param min - Minimum allowed value
 * @param max - Maximum allowed value
 * @returns Clamped value
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);              // Clamp between min and max
}

/**
 * Map a value from one range to another
 * Useful for converting between different coordinate systems or scales
 * @param value - Input value
 * @param inMin - Input range minimum
 * @param inMax - Input range maximum
 * @param outMin - Output range minimum
 * @param outMax - Output range maximum
 * @returns Mapped value
 */
export function mapRange(
  value: number,                                           // Input value to map
  inMin: number,                                           // Input range start
  inMax: number,                                           // Input range end
  outMin: number,                                          // Output range start
  outMax: number                                           // Output range end
): number {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin; // Range mapping formula
}

// ============================================================================
// ANIMATION UTILITIES
// ============================================================================
// Predefined animation configurations for consistent motion across the app

/**
 * Spring animation configuration for natural, physics-based motion
 * Used with Framer Motion for realistic animations
 */
export const springConfig = {
  type: "spring" as const,                                // Animation type
  stiffness: 100,                                         // Spring stiffness (higher = faster)
  damping: 15,                                            // Spring damping (higher = less bouncy)
  mass: 1,                                                // Spring mass (affects momentum)
};

/**
 * Cubic easing function for smooth, natural motion
 * Used for transitions and animations that need to feel organic
 */
export const easeInOutCubic = [0.4, 0, 0.2, 1];          // Cubic bezier curve values

// ============================================================================
// ACCESSIBILITY HELPERS
// ============================================================================
// Functions to improve accessibility and user experience

/**
 * Check if user prefers reduced motion
 * Respects user's accessibility preferences
 * @returns True if user prefers reduced motion
 */
export function getReducedMotion(): boolean {
  if (typeof window === "undefined") return false;        // Server-side safety check
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches; // Check user preference
}

/**
 * Announce message to screen readers
 * Useful for dynamic content updates and notifications
 * @param message - Message to announce
 */
export function announceToScreenReader(message: string): void {
  // Create announcement element
  const announcement = document.createElement("div");
  announcement.setAttribute("aria-live", "polite");        // Announce changes politely
  announcement.setAttribute("aria-atomic", "true");        // Announce entire message
  announcement.style.position = "absolute";                // Position off-screen
  announcement.style.left = "-10000px";                    // Move far left
  announcement.style.width = "1px";                        // Minimal width
  announcement.style.height = "1px";                       // Minimal height
  announcement.style.overflow = "hidden";                  // Hide overflow
  announcement.textContent = message;                      // Set announcement text
  
  // Add to DOM and remove after announcement
  document.body.appendChild(announcement);                 // Add to page
  setTimeout(() => {                                       // Remove after 1 second
    document.body.removeChild(announcement);
  }, 1000);
}

// ============================================================================
// 3D UTILITIES
// ============================================================================
// Mathematical utilities for 3D graphics and animations

/**
 * Convert degrees to radians
 * Useful for 3D rotations and trigonometric calculations
 * @param degrees - Angle in degrees
 * @returns Angle in radians
 */
export function degToRad(degrees: number): number {
  return degrees * (Math.PI / 180);                       // Convert degrees to radians
}

/**
 * Convert radians to degrees
 * Useful for displaying angles in human-readable format
 * @param radians - Angle in radians
 * @returns Angle in degrees
 */
export function radToDeg(radians: number): number {
  return radians * (180 / Math.PI);                       // Convert radians to degrees
}
