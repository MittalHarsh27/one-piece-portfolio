"use client";

import { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

export const Section = ({ children, className = "", id = "" }: SectionProps) => (
    <section id={id} className={`min-h-screen flex flex-col justify-center p-10 ${className}`}>
        {children}
    </section>
);
