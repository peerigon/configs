/**
 * @typedef {{
 *   plugins?: unknown;
 *   jsPlugins?: unknown;
 *   overrides?: unknown;
 *   ignorePatterns?: unknown;
 *   rules?: Record<string, unknown>;
 *   env?: Record<string, unknown>;
 *   globals?: Record<string, unknown>;
 *   settings?: Record<string, unknown>;
 *   options?: Record<string, unknown>;
 *   categories?: Record<string, unknown>;
 *   [key: string]: unknown;
 * }} OxlintConfig
 */

/**
 * Shallow-merge Oxlint config objects for published presets.
 * Arrays (plugins, jsPlugins, overrides, ignorePatterns) are concatenated;
 * later objects win for scalar/object fields (rules, env, settings, options, categories).
 *
 * @param {...OxlintConfig} configs
 * @returns {OxlintConfig}
 */
export function mergeConfigs(...configs) {
  /** @type {OxlintConfig} */
  const out = {};

  const arrayKeys = new Set([
    "plugins",
    "jsPlugins",
    "overrides",
    "ignorePatterns",
  ]);
  const objectKeys = new Set([
    "rules",
    "env",
    "globals",
    "settings",
    "options",
    "categories",
  ]);

  for (const config of configs) {
    if (!config) continue;

    for (const [key, value] of Object.entries(config)) {
      if (value === undefined) continue;

      if (arrayKeys.has(key)) {
        const prev = /** @type {unknown[]} */ (out[key] ?? []);
        const next = Array.isArray(value) ? value : [value];
        out[key] = [...prev, ...next];
        continue;
      }

      if (objectKeys.has(key)) {
        const prev =
          out[key] && typeof out[key] === "object"
            ? /** @type {Record<string, unknown>} */ (out[key])
            : {};
        out[key] = {
          ...prev,
          .../** @type {Record<string, unknown>} */ (value),
        };
        continue;
      }

      out[key] = value;
    }
  }

  if (Array.isArray(out.plugins)) {
    out.plugins = [...new Set(/** @type {string[]} */ (out.plugins))];
  }

  if (Array.isArray(out.jsPlugins)) {
    const seen = new Set();
    out.jsPlugins = /** @type {unknown[]} */ (out.jsPlugins).filter(
      (plugin) => {
        const key =
          typeof plugin === "string" ? plugin : JSON.stringify(plugin);
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      },
    );
  }

  return out;
}
