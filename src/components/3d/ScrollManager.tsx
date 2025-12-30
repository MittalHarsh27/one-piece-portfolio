"use client";

import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function ScrollManager() {
    const data = useScroll();
    const tl = useRef<gsap.core.Timeline | undefined>(undefined);

    useLayoutEffect(() => {
        tl.current = gsap.timeline();

        // Example animation: You can attach GSAP animations to the timeline here
        // tl.current.to(camera.position, { z: 5, duration: 1 }, 0);

        // Cleanup
        return () => {
            tl.current?.kill();
        };
    }, []);

    useFrame(() => {
        // Sync GSAP timeline with scroll position
        if (tl.current) {
            tl.current.seek(data.offset * tl.current.duration());
        }
    });

    return null;
}
