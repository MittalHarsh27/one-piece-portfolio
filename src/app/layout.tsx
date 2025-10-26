// ============================================================================
// ROOT LAYOUT COMPONENT
// ============================================================================
// This is the root layout that wraps all pages in the Next.js app
// It defines the HTML structure, fonts, metadata, and global providers
// For more information, see: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts

// ============================================================================
// IMPORTS
// ============================================================================
import type { Metadata } from "next";                    // Next.js metadata type for SEO
import { Inter, Bangers } from "next/font/google";       // Google Fonts for typography
import "./globals.css";                                   // Global CSS styles
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider"; // Smooth scrolling provider
import { ThemeProvider } from "@/components/providers/ThemeProvider"; // Theme provider for dark/light mode
import Navigation from "@/components/navigation/Navigation"; // Main navigation component

// ============================================================================
// FONT CONFIGURATION
// ============================================================================
// Configure Google Fonts with optimal loading and display settings

// Inter font - Clean, modern sans-serif for body text
const inter = Inter({
  variable: "--font-inter",                              // CSS variable name for the font
  subsets: ["latin"],                                    // Include Latin character set
  display: "swap",                                       // Optimize font loading performance
});

// Bangers font - Comic/manga style for One Piece aesthetic
const bangers = Bangers({
  variable: "--font-bangers",                            // CSS variable name for the font
  subsets: ["latin"],                                    // Include Latin character set
  weight: "400",                                         // Font weight (Bangers only has one weight)
  display: "swap",                                       // Optimize font loading performance
});

// ============================================================================
// METADATA CONFIGURATION
// ============================================================================
// SEO and social media metadata for the portfolio
// EDIT: Update these values with your personal information
export const metadata: Metadata = {
  // Basic page information
  title: "One Piece Portfolio | Set Sail for Adventure", // EDIT: Change to your preferred title
  description: "An interactive One Piece-themed portfolio showcasing web development skills with cinematic animations and 3D effects. Join the crew and explore the Grand Line of code!", // EDIT: Update description
  keywords: ["portfolio", "web developer", "One Piece", "React", "Next.js", "3D animations"], // EDIT: Add relevant keywords
  
  // Author information
  authors: [{ name: "Your Name" }],                      // EDIT: Replace with your actual name
  creator: "Your Name",                                  // EDIT: Replace with your actual name
  
  // Open Graph metadata for social media sharing
  openGraph: {
    title: "One Piece Portfolio | Set Sail for Adventure", // EDIT: Social media title
    description: "An interactive One Piece-themed portfolio showcasing web development skills", // EDIT: Social media description
    type: "website",                                     // Content type
    locale: "en_US",                                     // Language and region
  },
  
  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",                         // Twitter card type
    title: "One Piece Portfolio | Set Sail for Adventure", // EDIT: Twitter title
    description: "An interactive One Piece-themed portfolio showcasing web development skills", // EDIT: Twitter description
  },
  
  // Search engine optimization
  robots: {
    index: true,                                         // Allow search engines to index the page
    follow: true,                                        // Allow search engines to follow links
  },
};

// ============================================================================
// ROOT LAYOUT COMPONENT
// ============================================================================
// This component wraps all pages and provides the basic HTML structure
export default function RootLayout({
  children,                                              // Page content to be rendered
}: Readonly<{
  children: React.ReactNode;                             // TypeScript type for children
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${bangers.variable} antialiased font-body bg-light-bg-primary dark:bg-dark-bg-primary text-light-text-primary dark:text-dark-text-primary transition-colors duration-300`}
        suppressHydrationWarning={true}
      >
        <ThemeProvider>
          <SmoothScrollProvider>
            <Navigation />
            <main className="relative">
              {children}
            </main>
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
