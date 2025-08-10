"use client";

/* ============================================================================
   SMOOTH SCROLL PROVIDER COMPONENT
   ============================================================================ */
/* This component provides smooth scrolling functionality using Lenis library */
/* It wraps the entire application to enable smooth, performant scrolling */
/* For more information, see: https://github.com/studio-freight/lenis */

/* ============================================================================
   IMPORTS
   ============================================================================ */
import { ReactLenis } from "lenis/react";                  /* Lenis smooth scrolling library for React */
import { ReactNode } from "react";                         /* React type for children components */

/* ============================================================================
   COMPONENT PROPS INTERFACE
   ============================================================================ */
/* Define the expected props for the SmoothScrollProvider */
interface SmoothScrollProviderProps {
  children: ReactNode;                                     /* Child components to wrap with smooth scrolling */
}

/* ============================================================================
   SMOOTH SCROLL PROVIDER COMPONENT
   ============================================================================ */
/* Main component that provides smooth scrolling functionality */
export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  return (
    <ReactLenis
      root                                                      /* Apply to root element */
      options={{
        /* ============================================================================
           SCROLLING BEHAVIOR CONFIGURATION
           ============================================================================ */
        
        lerp: 0.1,                                              /* Linear interpolation factor (0.1 = smooth, 1.0 = instant) */
        duration: 1.2,                                          /* Animation duration in seconds */
        
        /* ============================================================================
           ORIENTATION SETTINGS
           ============================================================================ */
        orientation: "vertical",                                /* Enable vertical scrolling */
        gestureOrientation: "vertical",                         /* Enable vertical gesture scrolling */
        
        /* ============================================================================
           WHEEL SCROLLING CONFIGURATION
           ============================================================================ */
        smoothWheel: true,                                      /* Enable smooth wheel scrolling */
        wheelMultiplier: 1,                                     /* Wheel scroll sensitivity multiplier */
        
        /* ============================================================================
           TOUCH SCROLLING CONFIGURATION
           ============================================================================ */
        touchMultiplier: 2,                                     /* Touch scroll sensitivity multiplier (higher = faster) */
        
        /* ============================================================================
           EASING FUNCTION
           ============================================================================ */
        /* Custom easing function for smooth deceleration */
        /* Uses exponential decay for natural feeling scroll stops */
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      }}
    >
      {children}                                                {/* Render child components with smooth scrolling */}
    </ReactLenis>
  );
}
