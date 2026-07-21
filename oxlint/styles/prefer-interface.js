/** Prefer `interface` over `type` for object shapes. */
export const preferInterface = {
  rules: {
    "typescript/consistent-type-definitions": ["warn", "interface"], // https://oxc.rs/docs/guide/usage/linter/rules/typescript/consistent-type-definitions
  },
};

export default preferInterface;
