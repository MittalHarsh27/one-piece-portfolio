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
      // ONE PIECE THEMED COLOR PALETTE
      // ============================================================================
      // Custom colors inspired by One Piece characters and themes
      colors: {
        // Primary One Piece Colors
        'straw-hat': '#F0B90B',        // Luffy's signature straw hat gold color
        'ocean-blue': '#0E73B8',       // Deep ocean blue representing the Grand Line
        'ink-black': '#0C0C0C',        // Deep black for text and backgrounds
        'parchment': '#F6F1E4',        // Aged paper color for vintage feel
        'haki-purple': '#6A29FF',      // Purple representing Haki (spiritual energy)
        
        // Enhanced Contrast Colors
        'dark-gold': '#B89400',        // Darker version of straw-hat for better contrast
        'dark-ocean': '#0A5A8F',       // Darker ocean blue for depth
        'dark-purple': '#5A1FCC',      // Darker purple for emphasis
        'light-text': '#FFFFFF',       // Pure white for light text
        'medium-text': '#2D2D2D',      // Medium gray for secondary text
        'accent-red': '#DC2626',       // Red accent for warnings or highlights
        'accent-green': '#059669',     // Green accent for success states
        'accent-orange': '#EA580C',    // Orange accent for energy/action
        
        // ============================================================================
        // COLOR SCALE VARIATIONS
        // ============================================================================
        // Extended color scales for more design flexibility
        
        // Ocean Color Scale - Various shades of blue
        'ocean': {
          50: '#E6F3FA',               // Very light ocean blue
          100: '#CCE7F5',              // Light ocean blue
          200: '#99CFEB',              // Medium-light ocean blue
          300: '#66B7E1',              // Medium ocean blue
          400: '#339FD7',              // Medium-dark ocean blue
          500: '#0E73B8',              // Main ocean-blue color
          600: '#0A5A8F',              // Dark ocean blue
          700: '#08456E',              // Darker ocean blue
          800: '#052E4A',              // Very dark ocean blue
          900: '#021725',              // Almost black ocean blue
        },
        
        // Gold Color Scale - Various shades of gold
        'gold': {
          50: '#FEFBF0',               // Very light gold
          100: '#FDF7E1',              // Light gold
          200: '#FBEFC3',              // Medium-light gold
          300: '#F9E7A5',              // Medium gold
          400: '#F7DF87',              // Medium-dark gold
          500: '#F0B90B',              // Main straw-hat gold color
          600: '#B89400',              // Dark gold
          700: '#906F07',              // Darker gold
          800: '#604A05',              // Very dark gold
          900: '#302502',              // Almost black gold
        },
        
        // Purple Color Scale - Various shades of purple
        'purple': {
          50: '#F2EBFF',               // Very light purple
          100: '#E5D6FF',              // Light purple
          200: '#CBADFF',              // Medium-light purple
          300: '#B185FF',              // Medium purple
          400: '#975CFF',              // Medium-dark purple
          500: '#6A29FF',              // Main haki-purple color
          600: '#5A1FCC',              // Dark purple
          700: '#401999',              // Darker purple
          800: '#2A1066',              // Very dark purple
          900: '#150833',              // Almost black purple
        }
      },

      // ============================================================================
      // CUSTOM FONT FAMILIES
      // ============================================================================
      // Fonts that match the One Piece manga aesthetic
      fontFamily: {
        'manga': ['var(--font-bangers)', 'cursive'],     // Comic/manga style font for headings
        'body': ['var(--font-inter)', 'sans-serif'],    // Clean, readable font for body text
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
            boxShadow: '0 0 5px #6A29FF, 0 0 10px #6A29FF, 0 0 15px #6A29FF', // Subtle glow
            filter: 'brightness(1)',                        // Normal brightness
          },
          '100%': { 
            boxShadow: '0 0 10px #6A29FF, 0 0 20px #6A29FF, 0 0 30px #6A29FF', // Intense glow
            filter: 'brightness(1.2)',                      // Increased brightness
          },
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
  // PLUGINS
  // ============================================================================
  // Add Tailwind plugins here for additional functionality
  // Example: forms, typography, aspect-ratio, etc.
  plugins: [],
};

export default config;
