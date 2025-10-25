"use client";

// ============================================================================
// THEME PROVIDER COMPONENT
// ============================================================================
// This component provides theme context for dark/light mode switching
// It manages theme state, localStorage persistence, and CSS class application
// For more information, see: https://nextjs.org/docs/app/building-your-application/rendering/client-components

// ============================================================================
// IMPORTS
// ============================================================================
import { createContext, useContext, useEffect, useState } from "react"; // React hooks for context and state

// ============================================================================
// THEME TYPES
// ============================================================================
// Define the theme types and context interface
export type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;                    // Current theme
  setTheme: (theme: Theme) => void; // Function to change theme
  toggleTheme: () => void;        // Function to toggle between themes
}

// ============================================================================
// THEME CONTEXT
// ============================================================================
// Create the theme context with default values
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// ============================================================================
// THEME PROVIDER COMPONENT
// ============================================================================
// Main provider component that wraps the app and manages theme state
interface ThemeProviderProps {
  children: React.ReactNode;       // Child components to wrap
  defaultTheme?: Theme;           // Optional default theme
}

export function ThemeProvider({ 
  children, 
  defaultTheme = "dark" 
}: ThemeProviderProps) {
  // ============================================================================
  // STATE MANAGEMENT
  // ============================================================================
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [mounted, setMounted] = useState(false);

  // ============================================================================
  // THEME PERSISTENCE
  // ============================================================================
  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("one-piece-theme") as Theme;
    if (savedTheme && (savedTheme === "light" || savedTheme === "dark")) {
      setThemeState(savedTheme);
    } else {
      // Check system preference if no saved theme
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setThemeState(prefersDark ? "dark" : "light");
    }
    setMounted(true);
  }, []);

  // ============================================================================
  // THEME APPLICATION
  // ============================================================================
  // Apply theme class to document and save to localStorage
  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    
    // Remove existing theme classes
    root.classList.remove("light", "dark");
    
    // Add current theme class
    root.classList.add(theme);
    
    // Save to localStorage
    localStorage.setItem("one-piece-theme", theme);
    
    // Update CSS custom properties for smooth transitions
    root.style.setProperty("--theme-transition", "all 0.3s ease-in-out");
  }, [theme, mounted]);

  // ============================================================================
  // THEME FUNCTIONS
  // ============================================================================
  // Function to set a specific theme
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setThemeState(prevTheme => prevTheme === "light" ? "dark" : "light");
  };

  // ============================================================================
  // CONTEXT VALUE
  // ============================================================================
  // Create the context value object
  const value: ThemeContextType = {
    theme,
    setTheme,
    toggleTheme,
  };

  // ============================================================================
  // RENDER
  // ============================================================================
  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return <div className="min-h-screen bg-light-bg-primary dark:bg-dark-bg-primary">{children}</div>;
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// ============================================================================
// THEME HOOK
// ============================================================================
// Custom hook to use theme context
export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    // Return default values instead of throwing error during SSR
    return {
      theme: "dark",
      setTheme: () => {},
      toggleTheme: () => {},
    };
  }
  
  return context;
}

// ============================================================================
// THEME UTILITIES
// ============================================================================
// Utility functions for theme-related operations

/**
 * Get the current theme from localStorage
 * @returns The saved theme or null if not found
 */
export function getStoredTheme(): Theme | null {
  if (typeof window === "undefined") return null;
  
  const stored = localStorage.getItem("one-piece-theme");
  return stored === "light" || stored === "dark" ? stored : null;
}

/**
 * Check if the system prefers dark mode
 * @returns True if system prefers dark mode
 */
export function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

/**
 * Get the appropriate theme based on stored preference or system preference
 * @returns The theme to use
 */
export function getInitialTheme(): Theme {
  const stored = getStoredTheme();
  return stored || getSystemTheme();
}
