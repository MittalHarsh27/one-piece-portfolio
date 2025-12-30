"use client";

import { motion } from "framer-motion";
import { Section } from "../ui/Section";

const experiences = [
    {
        role: "Senior System Integration Engineer",
        company: "TechCorp Global",
        period: "2023 - Present",
        description: "Leading system integration strategies for enterprise-scale distributed systems. Improved deployment reliability by 40% through automated pipeline validation."
    },
    {
        role: "System Test Engineer",
        company: "InnovateX Solutions",
        period: "2021 - 2023",
        description: "Developed comprehensive test suites for microservices architecture. Automated regression testing using Python and Selenium, reducing cycle time by 60%."
    },
    {
        role: "Junior QA Engineer",
        company: "SoftStart Inc.",
        period: "2019 - 2021",
        description: "Executed manual and automated test cases. Collaborated with developers to identify and resolve critical bugs before production release."
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
