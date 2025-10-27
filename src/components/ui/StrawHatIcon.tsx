/**
 * Straw Hat Icon Component
 * A custom SVG icon representing Luffy's iconic straw hat
 */

interface StrawHatIconProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeMap = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
  xl: "w-12 h-12",
};

export default function StrawHatIcon({ 
  className = "", 
  size = "md" 
}: StrawHatIconProps) {
  return (
    <svg 
      viewBox="0 0 128 128" 
      className={`${sizeMap[size]} ${className}`} 
      aria-hidden="true"
      fill="currentColor"
    >
      <defs>
        <linearGradient id="rim" x1="0" x2="1">
          <stop offset="0%" stopOpacity="0.4" />
          <stop offset="100%" stopOpacity="1" />
        </linearGradient>
      </defs>
      {/* Hat rim shadow */}
      <ellipse 
        cx="64" 
        cy="88" 
        rx="44" 
        ry="10" 
        fill="url(#rim)" 
      />
      {/* Main hat body */}
      <ellipse 
        cx="64" 
        cy="64" 
        rx="42" 
        ry="20" 
        className="fill-neutral-300 dark:fill-neutral-700" 
      />
      {/* Red ribbon */}
      <rect 
        x="28" 
        y="58" 
        width="72" 
        height="8" 
        rx="4" 
        className="fill-red-500" 
      />
      {/* Hat crown */}
      <ellipse 
        cx="64" 
        cy="56" 
        rx="24" 
        ry="12" 
        className="fill-neutral-200 dark:fill-neutral-600" 
      />
    </svg>
  );
}

