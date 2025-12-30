"use client";

import { motion } from "framer-motion";
import { Section } from "../ui/Section";

const projects = [
    {
        title: "Automated Testing Framework",
        tech: "Python, PyTest, Selenium",
        description: "A scalable modular framework designed to handle over 5,000 regression tests daily with comprehensive reporting dashboards."
    },
    {
        title: "CI/CD Pipeline Optimization",
        tech: "Jenkins, Docker, Kubernetes",
        description: "Revamped legacy build pipelines to support containerized deployments, reducing build times from 45 minutes to 12 minutes."
    },
    {
        title: "Network Traffic Simulator",
        tech: "Go, Wireshark, Linux API",
        description: "Built a high-performance traffic generator to stress test network firewalls and load balancers under realistic conditions."
    },
    {
        title: "Log Analysis Tool",
        tech: "ELK Stack, Python",
        description: "Internal tool for aggregating and analyzing system logs in real-time to proactively detect anomalies in production environments."
    }
];

export default function ProjectsSection() {
    return (
        <Section id="projects" className="items-end text-right">
            <motion.h2
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="text-5xl md:text-6xl font-bold text-black pointer-events-auto mb-12"
            >
                Projects
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="bg-white/80 p-8 rounded-lg shadow-sm border border-gray-100/50 backdrop-blur-sm pointer-events-auto hover:shadow-md transition-shadow text-left"
                    >
                        <h3 className="text-2xl font-bold text-black mb-2">{project.title}</h3>
                        <p className="text-sm text-gray-500 mb-4 font-mono">{project.tech}</p>
                        <p className="text-gray-700">{project.description}</p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
