"use client";

import Experience from "@/components/3d/Experience";
import Overlay from "@/components/sections/Overlay";
import useGsap from "@/hooks/useGsap";

export default function Home() {
  // Initialize GSAP globally
  useGsap();

  return (
    <div className="relative w-full h-full">
      <Experience />
      <Overlay />
    </div>
  );
}
