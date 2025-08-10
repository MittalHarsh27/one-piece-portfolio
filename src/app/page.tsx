// ============================================================================
// HOME PAGE COMPONENT
// ============================================================================
// This is the main page that renders all portfolio sections
// Each section is a separate component that can be customized independently
// For more information, see: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts

// ============================================================================
// SECTION COMPONENT IMPORTS
// ============================================================================
import Hero from "@/components/sections/Hero";             // Hero section with main introduction and 3D effects
import About from "@/components/sections/About";           // About section with timeline and personal story
import Projects from "@/components/sections/Projects";     // Projects section showcasing your work
import Skills from "@/components/sections/Skills";         // Skills section displaying your technical abilities
import Contact from "@/components/sections/Contact";       // Contact section for getting in touch

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
      
      <Hero />                                            {/* EDIT: Customize hero section with your intro */}
      <About />                                           {/* EDIT: Customize about section with your story */}
      <Projects />                                        {/* EDIT: Customize projects section with your work */}
      <Skills />                                          {/* EDIT: Customize skills section with your abilities */}
      <Contact />                                         {/* EDIT: Customize contact section with your info */}
      
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
