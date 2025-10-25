"use client";

// ============================================================================
// NAVIGATION COMPONENT
// ============================================================================
// This component provides the main navigation bar for the One Piece portfolio
// It includes desktop navigation, mobile menu, scroll progress, and active section tracking
// For more information, see: https://nextjs.org/docs/app/building-your-application/components

// ============================================================================
// IMPORTS
// ============================================================================
import { useState, useEffect } from "react";               // React hooks for state and side effects
import { motion, AnimatePresence } from "framer-motion";   // Animation library for smooth transitions
import { cn } from "@/lib/utils";                          // Utility function for conditional class names
import { Menu, X } from "lucide-react";                   // Icon components for navigation elements
import ThemeToggle from "@/components/ui/ThemeToggle";     // Theme toggle component
import OnePieceIcon from "@/components/ui/OnePieceIcons";  // One Piece themed icons

// ============================================================================
// NAVIGATION CONFIGURATION
// ============================================================================
// Define navigation items with One Piece themed names and their corresponding sections
const navigationItems = [
  { name: "Set Sail", href: "#hero" },                    // Hero section - main introduction
  { name: "Crewmate Log", href: "#about" },               // About section - personal story
  { name: "Wanted Board", href: "#projects" },            // Projects section - showcase work
  { name: "Dev Haki", href: "#skills" },                  // Skills section - technical abilities
  { name: "Transponder Snail", href: "#contact" },        // Contact section - get in touch
];

// ============================================================================
// NAVIGATION COMPONENT
// ============================================================================
// Main navigation component with responsive design and smooth animations
export default function Navigation() {
  // ============================================================================
  // STATE MANAGEMENT
  // ============================================================================
  const [isOpen, setIsOpen] = useState(false);             // Mobile menu open/close state
  const [scrolled, setScrolled] = useState(false);         // Track if user has scrolled
  const [activeSection, setActiveSection] = useState("hero"); // Currently active section

  // ============================================================================
  // SCROLL EVENT HANDLER
  // ============================================================================
  // Monitor scroll position to update navigation state and active section
  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled past 50px to trigger background change
      setScrolled(window.scrollY > 50);
      
      // Update active section based on current scroll position
      const sections = navigationItems.map(item => item.href.substring(1)); // Remove # from href
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);    // Find section element
        if (element) {
          const rect = element.getBoundingClientRect();     // Get element position
          return rect.top <= 100 && rect.bottom >= 100;    // Check if section is in viewport
        }
        return false;
      });
      
      // Update active section state if found
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
  }, []);

  // ============================================================================
  // SCROLL TO SECTION FUNCTION
  // ============================================================================
  // Smoothly scroll to the specified section and close mobile menu
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);           // Find target section
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });      // Smooth scroll to section
      setIsOpen(false);                                    // Close mobile menu
    }
  };

  // ============================================================================
  // COMPONENT RENDER
  // ============================================================================
  return (
    <>
      {/* ============================================================================
          MAIN NAVIGATION BAR
          ============================================================================ */}
      <motion.nav
        initial={{ y: -100 }}                              // Start above viewport
        animate={{ y: 0 }}                                 // Animate to final position
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300", // Fixed positioning and transitions
          scrolled 
            ? "bg-light-bg-card/90 dark:bg-dark-bg-card/90 backdrop-blur-md border-b border-light-border-primary dark:border-dark-border-primary shadow-lg" // Scrolled state with background
            : "bg-transparent"                             // Transparent when at top
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Container with responsive padding */}
          <div className="flex items-center justify-between h-16"> {/* Navigation content layout */}
            
            {/* ============================================================================
                LOGO SECTION
                ============================================================================ */}
            <motion.div
              whileHover={{ rotate: 360 }}                  // Rotate on hover
              transition={{ duration: 0.5 }}                // 0.5 second rotation
              className="flex items-center space-x-2"        // Logo layout
            >
              <OnePieceIcon type="log-pose" size="lg" animated className="text-ocean-blue dark:text-grand-line" /> {/* Log Pose icon */}
              <span className="font-manga text-xl text-light-text-primary dark:text-dark-text-primary"> {/* Log Pose text */}
                Log Pose
              </span>
            </motion.div>

            {/* ============================================================================
                DESKTOP NAVIGATION
                ============================================================================ */}
            <div className="hidden md:flex items-center space-x-8"> {/* Hidden on mobile, visible on desktop */}
              {navigationItems.map((item) => (              // Map through navigation items
                <button
                  key={item.name}                           // Unique key for React
                  onClick={() => scrollToSection(item.href)} // Scroll to section on click
                  className={cn(
                    "relative px-3 py-2 text-sm font-medium transition-colors duration-200", // Button styling
                    "hover:text-straw-hat dark:hover:text-treasure-gold focus:outline-none", // Hover and focus states
                    activeSection === item.href.substring(1)  // Active section styling
                      ? "text-straw-hat dark:text-treasure-gold" // Gold color for active section
                      : "text-light-text-secondary dark:text-dark-text-secondary" // Theme-aware text for inactive
                  )}
                >
                  {item.name}                               {/* Navigation item text */}
                  
                  {/* ============================================================================
                      ACTIVE SECTION INDICATOR
                      ============================================================================ */}
                  {activeSection === item.href.substring(1) && ( // Show indicator for active section
                    <motion.div
                      layoutId="activeSection"              // Shared layout ID for smooth transitions
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-straw-hat dark:bg-treasure-gold" // Gold underline
                      initial={false}                       // Don't animate initial render
                      transition={{ type: "spring", stiffness: 300, damping: 30 }} // Spring animation
                    />
                  )}
                </button>
              ))}
              
              {/* Theme Toggle */}
              <ThemeToggle size="sm" />
            </div>

            {/* ============================================================================
                MOBILE MENU BUTTON AND THEME TOGGLE
                ============================================================================ */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle size="sm" />
              <button
                onClick={() => setIsOpen(!isOpen)}            // Toggle mobile menu
                className="p-2 text-light-text-primary dark:text-dark-text-primary hover:text-straw-hat dark:hover:text-treasure-gold focus:outline-none" // Mobile-only button
                aria-label="Toggle navigation menu"           // Accessibility label
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />} {/* Toggle between menu and close icons */}
              </button>
            </div>
          </div>
        </div>

        {/* ============================================================================
            MOBILE NAVIGATION MENU
            ============================================================================ */}
        <AnimatePresence>                                   {/* Handle enter/exit animations */}
          {isOpen && (                                       // Only show when mobile menu is open
            <motion.div
              initial={{ opacity: 0, height: 0 }}          // Start: invisible and collapsed
              animate={{ opacity: 1, height: "auto" }}      // Animate: visible and expanded
              exit={{ opacity: 0, height: 0 }}              // Exit: invisible and collapsed
              className="md:hidden bg-light-bg-card/95 dark:bg-dark-bg-card/95 backdrop-blur-md border-t border-light-border-primary dark:border-dark-border-primary" // Mobile menu styling
            >
              <div className="px-4 py-4 space-y-2">         {/* Mobile menu content container */}
                {navigationItems.map((item, index) => (      // Map through navigation items with index
                  <motion.button
                    key={item.name}                         // Unique key for React
                    initial={{ opacity: 0, x: -20 }}        // Start: invisible and left
                    animate={{ opacity: 1, x: 0 }}          // Animate: visible and in position
                    transition={{ delay: index * 0.1 }}     // Staggered animation delay
                    onClick={() => scrollToSection(item.href)} // Scroll to section on click
                    className={cn(
                      "block w-full text-left px-4 py-3 text-base font-medium rounded-lg", // Mobile button styling
                      "transition-colors duration-200 hover:bg-straw-hat/10 dark:hover:bg-treasure-gold/10", // Hover effects
                      activeSection === item.href.substring(1)  // Active section styling
                        ? "text-straw-hat dark:text-treasure-gold bg-straw-hat/10 dark:bg-treasure-gold/10"    // Gold for active section
                        : "text-light-text-primary dark:text-dark-text-primary"                      // Theme-aware text for inactive sections
                    )}
                  >
                    {item.name}                             {/* Navigation item text */}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* ============================================================================
          SCROLL PROGRESS INDICATOR
          ============================================================================ */}
      {/* Thin progress bar at the top showing scroll position */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-straw-hat dark:bg-treasure-gold z-50 origin-left" // Progress bar styling
        style={{
          scaleX: typeof window !== "undefined"             // Check if running in browser
            ? window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) // Calculate progress
            : 0                                             // Default to 0 for SSR
        }}
      />
    </>
  );
}
