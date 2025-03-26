export const globPatterns = {
  javascript: ["**/*.{js,mjs,cjs}"],
  typescript: ["**/*.{ts,cts,mts}"],
  typescriptAmbient: ["**/*.d.ts"],
  jsx: ["**/*.jsx"],
  typescriptJsx: ["**/*.tsx"],
  tests: [
    "**/*.{test,spec,stories}.{js,mjs,cjs,ts,cts,mts,jsx,tsx}",
    "**/test{s,}/**/*.{js,mjs,cjs,ts,cts,mts,jsx,tsx}",
  ],
  configs: ["**/*.config.*", "**/.eslintrc.*", "**/.prettierrc.*"],
};
