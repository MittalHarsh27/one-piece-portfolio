// ============================================================================
// NEXT.JS CONFIGURATION FILE
// ============================================================================
// This file configures Next.js build settings, optimizations, and custom behavior
// For more options, see: https://nextjs.org/docs/app/api-reference/next-config-js

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ============================================================================
  // BUILD AND PERFORMANCE OPTIONS
  // ============================================================================
  
  // Enable static export for GitHub Pages
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Set base path for GitHub Pages (if using custom domain, remove this)
  basePath: process.env.NODE_ENV === 'production' ? '/one-piece-portfolio' : '',
  
  // Disable trailing slash for cleaner URLs
  trailingSlash: false,
  
  // Example configurations you can add:
  // experimental: {
  //   // Enable experimental features
  //   turbo: {
  //     rules: {
  //       '*.svg': {
  //         loaders: ['@svgr/webpack'],
  //         as: '*.js',
  //       },
  //     },
  //   },
  // },
  
  // webpack: (config) => {
  //   // Custom webpack configuration
  //   return config;
  // },
};

export default nextConfig;
