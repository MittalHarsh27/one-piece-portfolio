// ============================================================================
// HOME PAGE COMPONENT
// ============================================================================
// This is the main page that renders all portfolio sections
// Each section is a separate component that can be customized independently
// For more information, see: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts

// ============================================================================
// SECTION COMPONENT IMPORTS
// ============================================================================
// You can choose between the original animated sections or the clean enhanced versions
// Original sections: Hero, About, Projects, Skills, Contact
// Enhanced sections: EnhancedHero, EnhancedAbout, EnhancedProjects, EnhancedSkills, Publications, EnhancedContact

import EnhancedHero from "@/components/sections/EnhancedHero";
import EnhancedAbout from "@/components/sections/EnhancedAbout";
import EnhancedProjects from "@/components/sections/EnhancedProjects";
import EnhancedSkills from "@/components/sections/EnhancedSkills";
import Publications from "@/components/sections/Publications";
import EnhancedContact from "@/components/sections/EnhancedContact";
import { OnePieceEasterEgg } from "@/components/ui/OnePieceQuotes";

// ============================================================================
// HOME PAGE COMPONENT
// ============================================================================
// This component renders the complete portfolio page
// EDIT: You can reorder sections, add new ones, or remove existing ones
export default function Home() {
  return (
    // ============================================================================
    // PAGE CONTAINER
    // ============================================================================
    <div className="min-h-screen">                        {/* Ensure minimum full viewport height */}
      
      {/* ============================================================================
          PORTFOLIO SECTIONS
          ============================================================================
          Each section represents a different part of your portfolio
          You can customize the order, add new sections, or modify existing ones */}
      
      <EnhancedHero />                                    {/* Clean hero with One Piece quotes */}
      <EnhancedAbout />                                   {/* About with journey timeline */}
      <EnhancedProjects />                                {/* Projects with Straw Hat crew theming */}
      <EnhancedSkills />                                  {/* Skills with Devil Fruit powers */}
      <Publications />                                    {/* Publications & achievements */}
      <EnhancedContact />                                 {/* Clean contact section */}
      
      {/* Hidden Easter Egg - Click the straw hat 5 times! */}
      <OnePieceEasterEgg />
      
      {/* ============================================================================
          ADDITIONAL SECTIONS
          ============================================================================
          You can add more sections here, such as:
          - <Testimonials />                              // Client or colleague testimonials
          - <Blog />                                      // Blog posts or articles
          - <Resume />                                    // Downloadable resume
          - <Services />                                  // Services you offer
          - <FAQ />                                       // Frequently asked questions */}
      
    </div>
  );
}
