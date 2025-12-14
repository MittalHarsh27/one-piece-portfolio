"use client";

import Hero from "@/components/sections/apple/Hero";
import StickyScroll from "@/components/sections/apple/StickyScroll";
import CardStack from "@/components/sections/apple/CardStack";
import useGsap from "@/hooks/useGsap";

export default function Home() {
  // Initialize GSAP globally
  useGsap();

  return (
    <div className="bg-light-bg-primary dark:bg-black min-h-screen">
      <Hero />
      <StickyScroll />
      <CardStack />
      
      {/* Simple Footer */}
      <footer className="py-12 text-center text-light-text-secondary dark:text-gray-500 border-t border-light-border-primary dark:border-white/10">
        <p>© {new Date().getFullYear()} Harsh Mittal. All rights reserved.</p>
      </footer>
    </div>
  );
}
