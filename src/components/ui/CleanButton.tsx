/**
 * Clean Button Component
 * Professional button with smooth animations
 */

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CleanButtonProps {
  variant?: "default" | "outline";
  size?: "default" | "icon" | "lg";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function CleanButton({ 
  variant = "default",
  size = "default",
  children,
  className,
  onClick,
  type = "button",
  disabled = false,
}: CleanButtonProps) {
  const base = "inline-flex items-center justify-center rounded-2xl text-sm font-medium transition-all duration-300 border disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    default: "bg-neutral-900 text-white hover:bg-neutral-800 border-neutral-900 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 dark:border-white shadow-lg hover:shadow-xl",
    outline: "bg-transparent text-neutral-900 hover:bg-neutral-100 border-neutral-300 dark:text-neutral-100 dark:hover:bg-neutral-900 dark:border-neutral-700"
  };
  
  const sizes = {
    default: "h-10 px-4 py-2",
    icon: "h-10 w-10 p-0",
    lg: "h-12 px-6 py-3 text-base"
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(base, variants[variant], sizes[size], className)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}

