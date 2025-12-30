"use client";

import HeroSection from "./HeroSection";
import ExperienceSection from "./ExperienceSection";
import ProjectsSection from "./ProjectsSection";
import SkillsEducationSection from "./SkillsEducationSection";
import ContactSection from "./ContactSection";

export default function Overlay() {
    return (
        <div className="absolute top-0 left-0 w-full z-10 scroll-smooth">
            <HeroSection />
            <ExperienceSection />
            <ProjectsSection />
            <SkillsEducationSection />
            <ContactSection />
        </div>
    );
}
