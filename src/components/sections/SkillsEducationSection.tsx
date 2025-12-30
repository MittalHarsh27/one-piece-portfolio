"use client";

import { motion } from "framer-motion";
import { Section } from "../ui/Section";

const skills = [
    "Python", "Java", "Selenium", "Appium",
    "Jenkins", "Docker", "Kubernetes", "GitLab CI",
    "Linux Administration", "Bash Scripting", "SQL", "REST APIs"
];

const education = [
    {
        degree: "B.S. Computer Engineering",
        school: "University of Technology",
        year: "2019"
    },
    {
        degree: "Certified Software Tester (CSTE)",
        school: "QAI Global Institute",
        year: "2020"
    }
];

export default function SkillsEducationSection() {
    return (
        <Section id="skills" className="items-center text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-6xl">

                {/* Skills Column */}
                <div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl font-bold text-black pointer-events-auto mb-8"
                    >
                        Technical Skills
                    </motion.h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {skills.map((skill, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium pointer-events-auto"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </div>

                {/* Education Column */}
                <div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl font-bold text-black pointer-events-auto mb-8"
                    >
                        Education
                    </motion.h2>
                    <div className="space-y-6">
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.3 + (index * 0.2) }}
                                className="pointer-events-auto"
                            >
                                <h3 className="text-xl font-bold text-black">{edu.degree}</h3>
                                <p className="text-gray-600">{edu.school}, {edu.year}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </Section>
    );
}
