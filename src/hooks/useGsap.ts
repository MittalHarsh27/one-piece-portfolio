"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function useGsap() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    return () => {
      // Optional: Cleanup if needed, though ScrollTrigger handles itself mostly
    };
  }, []);
}

