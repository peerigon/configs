/** TanStack Query via JS plugin (aliased to avoid scoped `/` naming issues). */
export const tanstackQuery = {
  jsPlugins: [
    {
      name: "tanstack-query",
      specifier: "@tanstack/eslint-plugin-query",
    },
  ],
  rules: {
    "tanstack-query/exhaustive-deps": "error",
    "tanstack-query/stable-query-client": "error",
    "tanstack-query/no-rest-destructuring": "warn",
    "tanstack-query/no-unstable-deps": "error",
  },
};

export default tanstackQuery;
