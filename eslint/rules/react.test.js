import assert from "node:assert/strict";

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

// The @eslint-react replacement rules must stay enabled so the coverage that used to come
// from eslint-plugin-react (and the rules the hooks conflict preset turns off) is
// preserved. Guard one representative rule against accidental removal.
const replacementConfigs = react.filter(
  (config) =>
    config.rules &&
    typeof config.rules === "object" &&
    config.rules["@eslint-react/dom-no-missing-button-type"] === "warn",
);

assert.equal(
  replacementConfigs.length,
  1,
  "react config should re-enable the @eslint-react replacement rules exactly once",
);

// eslint-plugin-react was removed entirely: no config should register the "react" plugin
// or reference any "react/*" rule key.
for (const config of react) {
  assert.equal(
    Object.hasOwn(config.plugins ?? {}, "react"),
    false,
    "react config should not register the eslint-plugin-react plugin",
  );

  if (config.rules && typeof config.rules === "object") {
    for (const ruleKey of Object.keys(config.rules)) {
      assert.equal(
        ruleKey.startsWith("react/"),
        false,
        `react config should not reference eslint-plugin-react rule "${ruleKey}"`,
      );
    }
  }
}
