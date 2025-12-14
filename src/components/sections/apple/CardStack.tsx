"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

// Register plugin
gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Project Alpha",
    category: "Finance",
    color: "#1d1d1f",
    description: "A high-performance trading platform.",
  },
  {
    title: "Project Beta",
    category: "E-commerce",
    color: "#2c2c2e",
    description: "Reimagining the online shopping experience.",
  },
  {
    title: "Project Gamma",
    category: "AI Tools",
    color: "#3a3a3c",
    description: "Generative AI for creative professionals.",
  },
  {
    title: "Project Delta",
    category: "Social",
    color: "#48484a",
    description: "Connecting communities globally.",
  }
];

export default function CardStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".project-card");
      
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: `+=${projects.length * 100}%`,
        pin: true,
        scrub: 1,
        // snap: 1 / (projects.length - 1), // Optional: snap to cards
      });

      cards.forEach((card: any, i) => {
        gsap.to(card, {
          scale: 1 - (projects.length - 1 - i) * 0.05,
          y: -(projects.length - 1 - i) * 20,
          opacity: i < projects.length - 1 ? 0.8 : 1, // Fade out cards behind
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          }
        });
      });
      
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-light-bg-secondary dark:bg-black py-20 overflow-hidden min-h-screen flex items-center justify-center">
      <div className="w-full max-w-5xl px-4 md:px-6 relative h-[60vh] flex items-center justify-center">
        
        {projects.map((project, index) => (
          <div 
            key={index}
            className="project-card absolute top-0 w-full md:w-[800px] h-[500px] rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col justify-between transition-transform duration-500 will-change-transform border border-white/10"
            style={{ 
              backgroundColor: project.color,
              zIndex: index,
              // Initial stacking transform, will be overridden by GSAP
              transform: `translateY(${index * 10}px) scale(${1 - index * 0.05})`
            }}
          >
            <div className="flex justify-between items-start">
               <div>
                  <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-4xl font-bold text-white mt-2">{project.title}</h3>
               </div>
               <button className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                  <ArrowUpRight className="w-6 h-6 text-white" />
               </button>
            </div>
            
            <div>
               <p className="text-xl text-gray-300 max-w-md">{project.description}</p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

