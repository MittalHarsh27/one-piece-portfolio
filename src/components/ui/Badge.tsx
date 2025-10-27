/**
 * Badge Component
 * Clean, minimal badge for tags and labels
 */

import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "gold" | "blue" | "red";
  className?: string;
}

export default function Badge({ 
  children, 
  variant = "default",
  className 
}: BadgeProps) {
  const variants = {
    default: "border-neutral-300 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/80",
    gold: "border-treasure-gold/30 bg-treasure-gold/10 text-treasure-gold dark:text-treasure-gold",
    blue: "border-ocean-blue/30 bg-ocean-blue/10 text-ocean-blue dark:text-ocean-blue",
    red: "border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400"
  };

  return (
    <span 
      className={cn(
        "inline-flex items-center rounded-full border backdrop-blur",
        "px-2.5 py-0.5 text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

