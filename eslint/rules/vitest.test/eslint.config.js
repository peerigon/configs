import { typescriptPreset } from "../../presets/typescript.js";
import { vitest } from "../vitest.js";

export default [...typescriptPreset, ...vitest];
