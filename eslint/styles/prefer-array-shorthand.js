/** @type {import("eslint").Linter.Config[]} */
export const preferArrayShorthand = [
  {
    rules: {
      "@typescript-eslint/array-type": [
        "warn",
        {
          default: "array",
        },
      ],
    },
  },
];

export default preferArrayShorthand;
