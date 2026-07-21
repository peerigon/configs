import { mergeConfigs } from "../lib/merge-configs.js";
import {
  javascriptPlugins,
  typescriptPlugins,
  typescriptReactPlugins,
} from "../lib/plugins.js";
import base from "../rules/base.js";
import browser from "../rules/browser.js";
import javascript from "../rules/javascript.js";
import node from "../rules/node.js";
import react from "../rules/react.js";
import typescript from "../rules/typescript.js";

export const javascriptPreset = mergeConfigs(base, javascript, {
  plugins: javascriptPlugins,
});

export const javascriptBrowserPreset = mergeConfigs(base, javascript, browser, {
  plugins: javascriptPlugins,
});

export const javascriptNodePreset = mergeConfigs(base, javascript, node, {
  plugins: javascriptPlugins,
});

export const typescriptPreset = mergeConfigs(base, javascript, typescript, {
  plugins: typescriptPlugins,
  options: { typeAware: true },
});

export const typescriptNodePreset = mergeConfigs(
  base,
  javascript,
  typescript,
  node,
  {
    plugins: typescriptPlugins,
    options: { typeAware: true },
  },
);

export const typescriptReactPreset = mergeConfigs(
  base,
  javascript,
  typescript,
  react,
  browser,
  {
    plugins: typescriptReactPlugins,
    options: { typeAware: true },
  },
);

export default {
  javascriptPreset,
  javascriptBrowserPreset,
  javascriptNodePreset,
  typescriptPreset,
  typescriptNodePreset,
  typescriptReactPreset,
};
