"use client";

import { motion } from "framer-motion";
import { Section } from "../ui/Section";

export default function ContactSection() {
    return (
        <Section id="contact" className="items-center text-center">
            <motion.h2
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="text-5xl md:text-6xl font-bold text-black pointer-events-auto"
            >
                Contact
            </motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-xl mt-6 text-gray-600 max-w-lg pointer-events-auto"
            >
                Interested in robust testing strategies or system integration? Let&apos;s connect.
            </motion.p>
            <motion.a
                href="mailto:hello@example.com"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-2xl mt-8 underline hover:text-blue-600 transition-colors pointer-events-auto cursor-pointer font-bold text-gray-900 block"
            >
                hello@example.com
            </motion.a>
        </Section>
    );
}
