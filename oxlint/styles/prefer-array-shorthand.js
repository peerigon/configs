/** Prefer `T[]` over `Array<T>`. */
export const preferArrayShorthand = {
  rules: {
    "typescript/array-type": [
      "warn",
      {
        default: "array",
      },
    ],
  },
};

export default preferArrayShorthand;
