import fs from "node:fs";
import path from "node:path";
import { includeIgnoreFile } from "@eslint/compat";

const gitignorePath = path.resolve(process.cwd(), ".gitignore");
const gitignoreExists = fs.existsSync(gitignorePath);

/** @type {import("eslint").Linter.Config[]} */
export const base = [
  gitignoreExists ? includeIgnoreFile(gitignorePath) : {},
  {
    linterOptions: {
      reportUnusedDisableDirectives: "warn",
    },
  },
];

export default base;
