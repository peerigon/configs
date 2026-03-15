import assert from "node:assert/strict";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import { react } from "./react.js";

const reactHooksConfigs = react.filter(
  (config) =>
    config.rules &&
    typeof config.rules === "object" &&
    "react-hooks/rules-of-hooks" in config.rules,
);

assert.equal(
  reactHooksConfigs.length,
  1,
  "react config should include exactly one react-hooks recommended config entry",
);

assert.deepEqual(
  reactHooksConfigs[0]?.rules,
  reactHooksPlugin.configs.flat.recommended.rules,
  "react config should mirror eslint-plugin-react-hooks flat recommended rules",
);
