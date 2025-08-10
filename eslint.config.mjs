// ============================================================================
// ESLINT CONFIGURATION FILE
// ============================================================================
// ESLint is a tool for identifying and fixing problems in JavaScript/TypeScript code
// This file configures ESLint with Next.js and TypeScript support
// For more information, see: https://eslint.org/

// ============================================================================
// IMPORTS
// ============================================================================
import { dirname } from "path";                    // Node.js path utilities
import { fileURLToPath } from "url";               // Convert URL to file path
import { FlatCompat } from "@eslint/eslintrc";     // Compatibility layer for old config format

// ============================================================================
// FILE PATH RESOLUTION
// ============================================================================
// Convert ES module URL to file path (required for ES modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ============================================================================
// COMPATIBILITY LAYER
// ============================================================================
// FlatCompat allows using the old ESLint configuration format with the new flat config
const compat = new FlatCompat({
  baseDirectory: __dirname,                        // Set base directory for relative paths
});

// ============================================================================
// ESLINT CONFIGURATION
// ============================================================================
const eslintConfig = [
  // Extend Next.js recommended rules and TypeScript support
  ...compat.extends(
    "next/core-web-vitals",                       // Next.js performance and accessibility rules
    "next/typescript"                             // Next.js TypeScript-specific rules
  ),
  
  // Add custom rules here if needed:
  // {
  //   rules: {
  //     "no-console": "warn",                     // Warn about console.log usage
  //     "prefer-const": "error",                  // Require const for variables that aren't reassigned
  //   },
  // },
];

export default eslintConfig;
