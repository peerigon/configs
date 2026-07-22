import { readFile } from "node:fs/promises";

import { z } from "zod";

import { helper } from "./helper.js";

/**
 * Adds two numbers together
 *
 * @param a First number
 * @param b Second number
 */
export function add(a: number, b: number): number {
  return a + b;
}

export const schema = z.object({ id: z.string() });

export async function load(path: string): Promise<string> {
  return helper(await readFile(path, "utf8"));
}
