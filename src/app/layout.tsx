// ============================================================================
// ROOT LAYOUT COMPONENT
// ============================================================================
// This is the root layout that wraps all pages in the Next.js app.
// It uses a clean, modern aesthetic without the One Piece theming.

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Navigation from "@/components/navigation/Navigation";

// Inter font - Clean, modern sans-serif
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Harsh Mittal | Creative Developer",
  description: "Portfolio of Harsh Mittal, a creative developer focused on building immersive digital experiences.",
  keywords: ["portfolio", "web developer", "creative developer", "React", "Next.js", "3D"],
  authors: [{ name: "Harsh Mittal" }],
  creator: "Harsh Mittal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased font-body bg-light-bg-primary dark:bg-dark-bg-primary text-light-text-primary dark:text-dark-text-primary transition-colors duration-300`}
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
