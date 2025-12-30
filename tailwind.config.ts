// ============================================================================
// TAILWIND CSS CONFIGURATION FILE
// ============================================================================
// This file customizes Tailwind CSS with a clean, Apple-inspired aesthetic.
// It uses a sophisticated monochrome palette.

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light Mode
        light: {
          'bg-primary': '#FFFFFF',      // Pure white
          'bg-secondary': '#F5F5F7',    // Apple-style light gray
          'bg-card': '#FFFFFF',
          
          'text-primary': '#1D1D1F',    // Almost black
          'text-secondary': '#86868B',  // Apple gray text
          'text-accent': '#0066CC',     // Apple blue link color
          
          'border-primary': '#D2D2D7',
        },
        
        // Dark Mode
        dark: {
          'bg-primary': '#000000',      // Pure black
          'bg-secondary': '#161617',    // Very dark gray
          'bg-card': '#1C1C1E',
          
          'text-primary': '#F5F5F7',    // Off-white
          'text-secondary': '#86868B',  // Gray text
          'text-accent': '#2997FF',     // Bright blue link color
          
          'border-primary': '#424245',
        },
      },
      fontFamily: {
        'body': ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};

export default config;
