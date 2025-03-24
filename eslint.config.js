import javascriptNodePreset from "./eslint/presets/javascript-node.js";
import tsconfig from "./tsconfig.json" with { type: "json" };

export default javascriptNodePreset.map((config) => ({
  ...config,
  ignores: [...(config.ignores ?? []), ...tsconfig.exclude],
}));
