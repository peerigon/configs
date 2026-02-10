/**
 * @file Prepares build artifacts that are published to JSR.
 *
 *   It converts TypeScript config JSONC files in `typescript/*.json` into strict
 *   JSON in `dist/typescript/*.json`, because JSR rejects JSON entrypoints that
 *   contain comments. It also adds `@ts-self-types` pragmas to exported JS
 *   files so JSR can resolve their generated `.d.ts` files without falling back
 *   to slow JavaScript type inference.
 */
import { readdir, readFile, writeFile } from "node:fs/promises";
import { basename, join } from "node:path";
import typescript from "typescript";

const sourceDirectory = join(import.meta.dirname, "..", "typescript");
const targetDirectory = join(import.meta.dirname, "..", "dist", "typescript");
const jsrConfigPath = join(import.meta.dirname, "..", "jsr.json");

/**
 * @param {string} filename
 * @param {string} fileContent
 * @returns {string}
 */
function createStrictJsonFromJsonc(filename, fileContent) {
  const parseResult = typescript.parseConfigFileTextToJson(
    filename,
    fileContent,
  );

  if (parseResult.error || !parseResult.config) {
    throw new Error(`Failed to parse TypeScript config "${filename}".`);
  }

  return `${JSON.stringify(parseResult.config, undefined, 2)}\n`;
}

const sourceFilenames = await readdir(sourceDirectory);
const configFilenames = sourceFilenames.filter((filename) =>
  filename.endsWith(".json"),
);

await Promise.all(
  configFilenames.map(async (configFilename) => {
    const sourcePath = join(sourceDirectory, configFilename);
    const targetPath = join(targetDirectory, basename(configFilename));
    const sourceContent = await readFile(sourcePath, "utf8");
    const strictJson = createStrictJsonFromJsonc(configFilename, sourceContent);

    await writeFile(targetPath, strictJson, "utf8");
  }),
);

const jsrConfigContent = await readFile(jsrConfigPath, "utf8");
const jsrConfig = JSON.parse(jsrConfigContent);
const jsEntryPoints = Object.values(jsrConfig.exports).filter(
  (exportPath) => typeof exportPath === "string" && exportPath.endsWith(".js"),
);

// await Promise.all(
//   jsEntryPoints.map(async (jsEntryPoint) => {
//     const outputPath = join(import.meta.dirname, "..", jsEntryPoint);
//     const declarationFilename = basename(jsEntryPoint).replace(
//       /\.js$/,
//       ".d.ts",
//     );
//     const selfTypesPragma = `// @ts-self-types="./${declarationFilename}"`;
//     const sourceContent = await readFile(outputPath, "utf8");

//     if (sourceContent.startsWith(selfTypesPragma)) {
//       return;
//     }

//     await writeFile(outputPath, `${selfTypesPragma}\n${sourceContent}`, "utf8");
//   }),
// );
