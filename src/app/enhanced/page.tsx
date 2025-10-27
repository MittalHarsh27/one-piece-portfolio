/**
 * Enhanced Portfolio Page
 * Clean, professional design with One Piece theming
 * Inspired by the onepiece-portfolio reference design
 */

import EnhancedHero from "@/components/sections/EnhancedHero";
import EnhancedAbout from "@/components/sections/EnhancedAbout";
import EnhancedProjects from "@/components/sections/EnhancedProjects";
import EnhancedSkills from "@/components/sections/EnhancedSkills";
import Publications from "@/components/sections/Publications";
import EnhancedContact from "@/components/sections/EnhancedContact";
import { OnePieceEasterEgg } from "@/components/ui/OnePieceQuotes";

export default function EnhancedPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      {/* Hero Section */}
      <EnhancedHero />

      {/* About Section */}
      <EnhancedAbout />

      {/* Projects Section */}
      <EnhancedProjects />

      {/* Skills Section */}
      <EnhancedSkills />

      {/* Publications/Achievements Section */}
      <Publications />

      {/* Contact Section */}
      <EnhancedContact />

      {/* Easter Egg - Hidden One Piece Reference */}
      <OnePieceEasterEgg />
    </div>
  );
}

