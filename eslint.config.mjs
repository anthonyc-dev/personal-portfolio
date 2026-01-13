import js from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import prettier from "eslint-config-prettier";

export default [
  // Ignore generated folders
  {
    ignores: ["node_modules", "dist", "build", ".next", "next-env.d.ts"],
  },

  // Base JS rules
  js.configs.recommended,

  // TypeScript rules (FLAT)
  ...tseslint.configs.recommended,

  // React rules (FLAT)
  react.configs.flat.recommended,
  reactHooks.configs.flat.recommended,

  // React settings and rules
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    settings: {
      react: {
        version: "19.2.0",
      },
    },
    rules: {
      // React rules
      "react/react-in-jsx-scope": "off", // React 17+
      "react/prop-types": "off", // Not needed for TypeScript projects
      "react/no-unescaped-entities": "warn", // Can be auto-fixed

      // React Hooks rules
      "react-hooks/set-state-in-effect": "warn", // Can't be auto-fixed, but less strict
      "react-hooks/exhaustive-deps": "warn", // Can't be auto-fixed, but less strict

      // TypeScript rules
      "@typescript-eslint/no-explicit-any": "warn", // Can't be auto-fixed, but less strict
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ], // Can be auto-fixed (removed)
      "@typescript-eslint/triple-slash-reference": "warn", // Can be auto-fixed
    },
  },

  // Disable formatting rules (Prettier owns formatting)
  prettier,
];
