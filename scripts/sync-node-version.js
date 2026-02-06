/* eslint-disable unicorn/no-process-exit */
/**
 * @file Syncs the Node version from package.json (@types/node) into existing
 *   version files: .nvmrc, .node-version, and the nodejs line in
 *   .tool-versions. Only updates files that already exist; does not create new
 *   ones.
 */
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { EOL } from "node:os";
import { join } from "node:path";

const pkgPath = join(process.cwd(), "package.json");
const root = process.cwd();

const pkg = JSON.parse(readFileSync(pkgPath, "utf8"));
const version =
  pkg.devDependencies?.["@types/node"] ?? pkg.dependencies?.["@types/node"];
if (!version) {
  process.exit(0);
}

const stripped = version.replace(/^[^0-9]+/, "");
const parts = stripped.split(".");
if (parts.length === 0 || !/^\d+$/.test(parts[0])) {
  process.exit(0);
}

const fullVersion = parts.slice(0, 3).join(".");

const nvmrcPath = join(root, ".nvmrc");
if (existsSync(nvmrcPath)) {
  writeFileSync(nvmrcPath, `v${fullVersion}${EOL}`);
}

const nodeVersionPath = join(root, ".node-version");
if (existsSync(nodeVersionPath)) {
  writeFileSync(nodeVersionPath, `${fullVersion}${EOL}`);
}

const toolVersionsPath = join(root, ".tool-versions");
if (existsSync(toolVersionsPath)) {
  const lines = readFileSync(toolVersionsPath, "utf8").split(/\r?\n/);
  const nodejsLine = `nodejs ${fullVersion}`;
  const hasNodejs = lines.some((line) => line.startsWith("nodejs "));
  const toolVersionsContent = hasNodejs
    ? lines.map((line) => (line.startsWith("nodejs ") ? nodejsLine : line))
    : [...lines, nodejsLine];
  writeFileSync(toolVersionsPath, toolVersionsContent.join(EOL) + EOL);
}
