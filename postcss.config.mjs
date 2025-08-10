// ============================================================================
// POSTCSS CONFIGURATION FILE
// ============================================================================
// PostCSS is a tool for transforming CSS with JavaScript plugins
// This file configures PostCSS to work with Tailwind CSS v4
// For more information, see: https://postcss.org/

const config = {
  // ============================================================================
  // PLUGINS CONFIGURATION
  // ============================================================================
  plugins: [
    "@tailwindcss/postcss",               // Tailwind CSS v4 PostCSS plugin
    // Add more PostCSS plugins here if needed:
    // "autoprefixer",                    // Automatically add vendor prefixes
    // "postcss-preset-env",             // Use modern CSS features
    // "cssnano",                        // Minify CSS for production
  ],
};

export default config;
