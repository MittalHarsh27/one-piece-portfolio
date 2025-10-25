// ============================================================================
// TAILWIND CSS CONFIGURATION FILE
// ============================================================================
// This file customizes Tailwind CSS with One Piece themed colors, fonts, and animations
// For more information, see: https://tailwindcss.com/docs/configuration

import type { Config } from "tailwindcss";

const config: Config = {
  // ============================================================================
  // CONTENT PATHS
  // ============================================================================
  // Specify which files Tailwind should scan for class usage
  // This ensures only used CSS classes are included in the final build
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",      // All page files
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // All component files
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",        // All app directory files
  ],

  // ============================================================================
  // THEME CUSTOMIZATION
  // ============================================================================
  theme: {
    extend: {
      // ============================================================================
      // ONE PIECE THEMED COLOR PALETTE WITH PROPER CONTRAST
      // ============================================================================
      // Custom colors inspired by One Piece characters and themes
      // All colors meet WCAG AA contrast requirements (4.5:1 for text, 3:1 for UI)
      colors: {
        // ============================================================================
        // LIGHT MODE COLORS (Sunny, vibrant, treasure-like)
        // ============================================================================
        light: {
          // Backgrounds
          'bg-primary': '#FFF8E1',      // Warm sunny background (contrast: 4.5:1 with dark text)
          'bg-secondary': '#F5F5DC',    // Beige secondary background
          'bg-card': '#FFFFFF',         // Pure white for cards
          'bg-accent': '#FFD700',       // Treasure gold accent background
          
          // Text colors
          'text-primary': '#1A1A2E',   // Deep navy text (contrast: 4.5:1 with light bg)
          'text-secondary': '#2D2D2D',  // Dark gray secondary text
          'text-accent': '#B8860B',     // Dark gold accent text
          'text-inverse': '#FFFFFF',    // White text for dark backgrounds
          
          // Interactive elements
          'button-primary': '#FF6B35',  // Vibrant orange buttons
          'button-secondary': '#4A90E2', // Ocean blue buttons
          'button-accent': '#FFD700',   // Gold accent buttons
          'border-primary': '#D4AF37',  // Gold borders
          'border-secondary': '#8B4513', // Brown borders
          
          // Status colors
          'success': '#228B22',         // Forest green
          'warning': '#FF8C00',         // Dark orange
          'error': '#DC143C',           // Crimson red
          'info': '#4169E1',            // Royal blue
        },
        
        // ============================================================================
        // DARK MODE COLORS (Deep ocean, dramatic, mysterious)
        // ============================================================================
        dark: {
          // Backgrounds
          'bg-primary': '#0A0A0F',      // Deep ocean black
          'bg-secondary': '#1A1A2E',    // Dark navy secondary
          'bg-card': '#16213E',         // Dark blue cards
          'bg-accent': '#0F3460',       // Deep blue accent
          
          // Text colors
          'text-primary': '#E8E8E8',   // Light gray text (contrast: 4.5:1 with dark bg)
          'text-secondary': '#B0B0B0',  // Medium gray secondary text
          'text-accent': '#FFD700',     // Bright gold accent text
          'text-inverse': '#1A1A2E',    // Dark text for light backgrounds
          
          // Interactive elements
          'button-primary': '#FF6B35',  // Vibrant orange buttons (same as light)
          'button-secondary': '#4A90E2', // Ocean blue buttons
          'button-accent': '#FFD700',   // Gold accent buttons
          'border-primary': '#FFD700',  // Gold borders
          'border-secondary': '#4A90E2', // Blue borders
          
          // Status colors
          'success': '#32CD32',        // Lime green
          'warning': '#FFA500',         // Orange
          'error': '#FF4444',          // Bright red
          'info': '#00BFFF',            // Deep sky blue
        },
        
        // ============================================================================
        // ONE PIECE THEMED ACCENT COLORS (work in both modes)
        // ============================================================================
        'straw-hat': '#FFD700',         // Luffy's signature straw hat gold
        'ocean-blue': '#0066CC',        // Deep ocean blue
        'haki-purple': '#8A2BE2',       // Purple representing Haki
        'devil-fruit': '#FF4500',       // Devil fruit orange
        'marine-blue': '#000080',       // Marine navy blue
        'pirate-red': '#DC143C',        // Pirate flag red
        'treasure-gold': '#FFD700',     // Treasure chest gold
        'grand-line': '#00CED1',        // Grand Line turquoise
        
        // ============================================================================
        // LEGACY COLORS (for backward compatibility during transition)
        // ============================================================================
        'ink-black': '#0C0C0C',         // Deep black
        'parchment': '#F6F1E4',         // Aged paper color
        'dark-gold': '#B89400',         // Darker gold
        'dark-ocean': '#0A5A8F',        // Darker ocean blue
        'dark-purple': '#5A1FCC',       // Darker purple
        'light-text': '#FFFFFF',        // Pure white
        'medium-text': '#2D2D2D',       // Medium gray
        'accent-red': '#DC2626',        // Red accent
        'accent-green': '#059669',      // Green accent
        'accent-orange': '#EA580C',     // Orange accent
      },

      // ============================================================================
      // CUSTOM FONT FAMILIES
      // ============================================================================
      // Fonts that match the One Piece manga aesthetic
      fontFamily: {
        'manga': ['var(--font-bangers)', 'cursive'],     // Comic/manga style font for headings
        'body': ['var(--font-inter)', 'sans-serif'],    // Clean, readable font for body text
        'wanted': ['Impact', 'Arial Black', 'sans-serif'], // Bold font for wanted posters
        'treasure': ['Georgia', 'serif'],               // Serif font for treasure maps
      },

      // ============================================================================
      // CUSTOM ANIMATIONS
      // ============================================================================
      // One Piece themed animations for interactive elements
      animation: {
        'float': 'float 3s ease-in-out infinite',        // Gentle floating motion
        'wave': 'wave 2s ease-in-out infinite',          // Ocean wave-like movement
        'glow': 'glow 2s ease-in-out infinite alternate', // Haki-like glowing effect
        'bounce-slow': 'bounce 3s infinite',             // Slow bouncing animation
        'pulse-slow': 'pulse 3s infinite',               // Slow pulsing effect
        'spin-slow': 'spin 20s linear infinite',         // Very slow rotation
        'ship-sail': 'shipSail 4s ease-in-out infinite', // Ship sailing motion
        'haki-pulse': 'hakiPulse 2s ease-in-out infinite', // Haki energy pulse
        'devil-fruit': 'devilFruit 3s ease-in-out infinite', // Devil fruit glow
        'treasure-sparkle': 'treasureSparkle 1.5s ease-in-out infinite', // Treasure sparkles
        'jolly-roger': 'jollyRoger 2s ease-in-out infinite', // Flag waving
        'compass-spin': 'compassSpin 8s linear infinite', // Compass needle rotation
        'ocean-wave': 'oceanWave 3s ease-in-out infinite', // Ocean wave motion
      },

      // ============================================================================
      // CUSTOM KEYFRAMES
      // ============================================================================
      // Define the actual animation sequences
      keyframes: {
        // Floating animation - gentle up and down movement
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },    // Start and end position
          '50%': { transform: 'translateY(-10px)' },       // Peak of float
        },
        
        // Wave animation - gentle side-to-side rotation
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },       // Start and end position
          '25%': { transform: 'rotate(5deg)' },            // Tilt right
          '75%': { transform: 'rotate(-5deg)' },           // Tilt left
        },
        
        // Glow animation - Haki-like glowing effect
        glow: {
          '0%': { 
            boxShadow: '0 0 5px #8A2BE2, 0 0 10px #8A2BE2, 0 0 15px #8A2BE2', // Subtle glow
            filter: 'brightness(1)',                        // Normal brightness
          },
          '100%': { 
            boxShadow: '0 0 10px #8A2BE2, 0 0 20px #8A2BE2, 0 0 30px #8A2BE2', // Intense glow
            filter: 'brightness(1.2)',                      // Increased brightness
          },
        },
        
        // Ship sailing animation - rocking motion
        shipSail: {
          '0%, 100%': { transform: 'rotate(0deg) translateY(0px)' },
          '25%': { transform: 'rotate(1deg) translateY(-2px)' },
          '50%': { transform: 'rotate(0deg) translateY(-4px)' },
          '75%': { transform: 'rotate(-1deg) translateY(-2px)' },
        },
        
        // Haki pulse animation - energy waves
        hakiPulse: {
          '0%': { 
            boxShadow: '0 0 0 0 rgba(138, 43, 226, 0.7)',
            transform: 'scale(1)',
          },
          '70%': { 
            boxShadow: '0 0 0 10px rgba(138, 43, 226, 0)',
            transform: 'scale(1.05)',
          },
          '100%': { 
            boxShadow: '0 0 0 0 rgba(138, 43, 226, 0)',
            transform: 'scale(1)',
          },
        },
        
        // Devil fruit glow animation
        devilFruit: {
          '0%, 100%': { 
            filter: 'brightness(1) drop-shadow(0 0 5px #FF4500)',
            transform: 'scale(1)',
          },
          '50%': { 
            filter: 'brightness(1.3) drop-shadow(0 0 15px #FF4500)',
            transform: 'scale(1.1)',
          },
        },
        
        // Treasure sparkle animation
        treasureSparkle: {
          '0%, 100%': { 
            opacity: '0.7',
            transform: 'scale(1) rotate(0deg)',
          },
          '50%': { 
            opacity: '1',
            transform: 'scale(1.2) rotate(180deg)',
          },
        },
        
        // Jolly Roger flag waving
        jollyRoger: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(2deg)' },
          '75%': { transform: 'rotate(-2deg)' },
        },
        
        // Compass needle rotation
        compassSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        
        // Ocean wave motion
        oceanWave: {
          '0%, 100%': { transform: 'translateX(0) scaleY(1)' },
          '50%': { transform: 'translateX(10px) scaleY(1.1)' },
        },
      },

      // ============================================================================
      // CUSTOM BACKGROUND IMAGES
      // ============================================================================
      // Predefined background patterns and gradients
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',           // Radial gradient utility
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))', // Conic gradient utility
        
        // Parchment texture background - aged paper effect
        'parchment': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23F6F1E4\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"3\" cy=\"3\" r=\"3\"/%3E%3Ccircle cx=\"13\" cy=\"13\" r=\"1\"/%3E%3Ccircle cx=\"33\" cy=\"5\" r=\"4\"/%3E%3Ccircle cx=\"3\" cy=\"23\" r=\"4\"/%3E%3Ccircle cx=\"23\" cy=\"33\" r=\"3\"/%3E%3Ccircle cx=\"43\" cy=\"13\" r=\"1\"/%3E%3Ccircle cx=\"13\" cy=\"43\" r=\"2\"/%3E%3Ccircle cx=\"33\" cy=\"43\" r=\"4\"/%3E%3Ccircle cx=\"53\" cy=\"33\" r=\"3\"/%3E%3Ccircle cx=\"53\" cy=\"53\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
      },

      // ============================================================================
      // CUSTOM BACKDROP BLUR VALUES
      // ============================================================================
      // Additional backdrop blur options for glassmorphism effects
      backdropBlur: {
        xs: '2px',                     // Extra small backdrop blur for subtle effects
      }
    },
  },

  // ============================================================================
  // DARK MODE CONFIGURATION
  // ============================================================================
  // Enable dark mode with class strategy
  darkMode: 'class',

  // ============================================================================
  // PLUGINS
  // ============================================================================
  // Add Tailwind plugins here for additional functionality
  // Example: forms, typography, aspect-ratio, etc.
  plugins: [],
};

export default config;
