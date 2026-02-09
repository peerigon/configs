import { readdir, readFile, writeFile } from "node:fs/promises";
import { basename, join } from "node:path";
import typescript from "typescript";

const sourceDirectory = join(import.meta.dirname);
const targetDirectory = join(import.meta.dirname, "..", "dist", "typescript");

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
