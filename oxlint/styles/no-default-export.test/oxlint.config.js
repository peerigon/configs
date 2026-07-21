import { mergeConfigs } from "../../lib/merge-configs.js";
import { typescriptNodePreset } from "../../lib/presets.js";
import noDefaultExport from "../no-default-export.js";

export default mergeConfigs(typescriptNodePreset, noDefaultExport);
