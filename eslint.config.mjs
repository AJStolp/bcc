import nextPlugin from "@next/eslint-plugin-next";
import eslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactPlugin from "eslint-plugin-react";

export default [
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx", "**/*.mjs"],
    plugins: {
      "@typescript-eslint": eslint,
      react: reactPlugin,
      "jsx-a11y": jsxA11y,
      "@next/next": nextPlugin,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    ignores: [
      "**/node_modules/**",
      "**/.next/**",
      "**/apps/nextjs/.contentlayer/**",
    ],
    rules: {
      "jsx-a11y/heading-has-content": "off",
      "@next/next/no-img-element": "off",
      "react/no-unknown-property": "error",
    },
  },
];
