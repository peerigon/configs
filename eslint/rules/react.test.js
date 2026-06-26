import assert from "node:assert/strict";
import reactPlugin2 from "@eslint-react/eslint-plugin";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import { react } from "./react.js";

const recommendedRules = reactHooksPlugin.configs.flat.recommended.rules;

// The eslint-plugin-react-hooks recommended config must still be applied as the base layer.
const recommendedConfigs = react.filter(
  (config) =>
    config.rules &&
    typeof config.rules === "object" &&
    config.rules["react-hooks/rules-of-hooks"] != null &&
    config.rules["react-hooks/rules-of-hooks"] !== "off",
);

assert.equal(
  recommendedConfigs.length,
  1,
  "react config should include exactly one eslint-plugin-react-hooks recommended config entry",
);

assert.deepEqual(
  recommendedConfigs[0]?.rules,
  recommendedRules,
  "react config should mirror eslint-plugin-react-hooks flat recommended rules",
);

// @eslint-react owns every eslint-plugin-react rule it provides: the conflict-disable
// preset must turn off the overlapping eslint-plugin-react rules so @eslint-react wins.
const conflictReactRules =
  reactPlugin2.configs["disable-conflict-eslint-plugin-react"].rules ?? {};

const conflictReactConfigs = react.filter(
  (config) =>
    config.rules &&
    typeof config.rules === "object" &&
    config.rules["react/no-children-prop"] === "off",
);

assert.equal(
  conflictReactConfigs.length,
  1,
  "react config should disable conflicting eslint-plugin-react rules exactly once",
);

assert.deepEqual(
  conflictReactConfigs[0]?.rules,
  conflictReactRules,
  "react config should let @eslint-react win by mirroring its disable-conflict-eslint-plugin-react preset",
);
