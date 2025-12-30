"use client";

import { motion } from "framer-motion";
import { Section } from "../ui/Section";

const experiences = [
    {
        role: "Diagnostics System Test and Integration Engineer",
        company: "Rivian Volkswagen Group Technologies",
        period: "2025 - Present",
        description: "Developing and maintaining the diagnostics testing framework (HIL/SIL) and system for the RV Tech vehicles."
    },
    {
        role: "Test Automation Engineering Intern - Range and Efficiency Testing",
        company: "Tesla Inc",
        period: "2024 - 2025",
        description: "Developing and maintaining the range and efficiency testing framework and system for the Rivian vehicles."
    }
    
];

export default function ExperienceSection() {
    return (
        <Section id="experience" className="items-start">
            <motion.h2
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="text-5xl md:text-6xl font-bold text-black pointer-events-auto mb-12"
            >
                Experience
            </motion.h2>

            <div className="w-full max-w-4xl space-y-12">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        className="pointer-events-auto border-l-2 border-gray-300 pl-8 relative"
                    >
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-black" />
                        <h3 className="text-2xl font-bold text-black">{exp.role}</h3>
                        <p className="text-lg text-gray-700 font-medium">{exp.company} | {exp.period}</p>
                        <p className="text-gray-600 mt-2 max-w-2xl">{exp.description}</p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
