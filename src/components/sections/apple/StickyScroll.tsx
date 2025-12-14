"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SceneWrapper from "@/components/3d/SceneWrapper";
import AbstractShape from "@/components/3d/AbstractShape";

// Ensure ScrollTrigger is registered
gsap.registerPlugin(ScrollTrigger);

const content = [
  {
    title: "Simplicity is the ultimate sophistication.",
    description: "I build interfaces that are intuitive, clean, and focused on the user. Every pixel serves a purpose.",
    mediaType: "3d", // Future-proof for video
  },
  {
    title: "Performance at the core.",
    description: "Animations should be buttery smooth. Interactions should be instant. I optimize for the best possible experience.",
    mediaType: "3d",
  },
  {
    title: "Scalable Architecture.",
    description: "Code that grows with your business. Maintainable, testable, and robust.",
    mediaType: "3d",
  }
];

export default function StickyScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the right side content while scrolling through text sections
      ScrollTrigger.create({
        trigger: triggerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: ".sticky-content",
        scrub: true,
      });

      // Animate text opacity based on scroll position
      const sections = gsap.utils.toArray(".text-section");
      sections.forEach((section: any) => {
        gsap.fromTo(section, 
          { opacity: 0.2 },
          {
            opacity: 1,
            scrollTrigger: {
              trigger: section,
              start: "top center",
              end: "bottom center",
              scrub: true,
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative bg-black text-white">
      <div ref={triggerRef} className="flex flex-col lg:flex-row max-w-7xl mx-auto">
        
        {/* Left Side: Scrolling Text */}
        <div className="w-full lg:w-1/2 py-20 px-6 z-10">
          {content.map((item, index) => (
            <div key={index} className="text-section min-h-screen flex flex-col justify-center">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                {item.title}
              </h2>
              <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-md">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Right Side: Sticky Visuals */}
        <div className="sticky-content hidden lg:flex w-1/2 h-screen sticky top-0 items-center justify-center bg-black">
          <div className="w-full h-full relative">
             <SceneWrapper className="absolute inset-0">
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} />
                <AbstractShape />
             </SceneWrapper>
             {/* Gradient fade at bottom for seamless integration */}
             <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  );
}

