"use client";

import { motion } from "framer-motion";
import { Section } from "../ui/Section";

export default function HeroSection() {
    return (
        <Section id="hero">
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-7xl md:text-8xl font-bold text-black pointer-events-auto"
            >
                Harsh Mittal
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-2xl md:text-3xl mt-4 text-gray-800 max-w-2xl pointer-events-auto font-medium"
            >
                System Test & Integration Engineer
            </motion.p>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-lg mt-6 text-gray-600 max-w-lg pointer-events-auto"
            >
                Ensuring reliability and scalability through automated testing and robust integration strategies.
            </motion.p>
        </Section>
    );
}
