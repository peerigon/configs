import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

/** Test all exports from package.json to ensure they're configured correctly */

const testResults = {
  passed: 0,
  failed: 0,
  errors: [],
};

/** Test a single export path */
async function testExport(exportPath, description) {
  try {
    await import(exportPath);
    console.log(`✅ ${description}: ${exportPath}`);
    testResults.passed++;
    return true;
  } catch (error) {
    console.error(`❌ ${description}: ${exportPath}`);
    console.error(`   Error: ${error.message}`);
    testResults.failed++;
    testResults.errors.push({ path: exportPath, error: error.message });
    return false;
  }
}

/** Get all .js files from a directory (excluding .d.ts files) */
async function getJsFiles(dirPath) {
  const files = await readdir(dirPath);
  return files
    .filter((file) => file.endsWith(".js"))
    .map((file) => file.replace(/\.js$/, ""));
}

/** Main test function */
async function runTests() {
  console.log("Testing package.json exports...\n");
  console.log("=".repeat(70));

  // Read package.json to verify exports structure
  const packageJson = JSON.parse(
    await readFile(join(import.meta.dirname, "package.json"), "utf8"),
  );

  console.log("\n📦 Wildcard Exports\n");

  // Test ESLint Presets (wildcard exports)
  console.log("Testing ESLint Presets:");
  const presets = await getJsFiles(
    join(import.meta.dirname, "dist/eslint/presets"),
  );
  for (const preset of presets) {
    await testExport(
      `@peerigon/configs/eslint/presets/${preset}`,
      `  Preset "${preset}"`,
    );
  }

  console.log("\nTesting ESLint Rules:");
  const rules = await getJsFiles(
    join(import.meta.dirname, "dist/eslint/rules"),
  );
  for (const rule of rules) {
    await testExport(
      `@peerigon/configs/eslint/rules/${rule}`,
      `  Rule "${rule}"`,
    );
  }

  console.log("\nTesting ESLint Styles:");
  const styles = await getJsFiles(
    join(import.meta.dirname, "dist/eslint/styles"),
  );
  for (const style of styles) {
    await testExport(
      `@peerigon/configs/eslint/styles/${style}`,
      `  Style "${style}"`,
    );
  }

  // Test explicit exports (non-wildcard)
  console.log("\n📋 Explicit Exports\n");

  const explicitExports = [
    { path: "@peerigon/configs/prettier", name: "Prettier" },
    { path: "@peerigon/configs/semantic-release", name: "Semantic Release" },
    {
      path: "@peerigon/configs/semantic-release/cross-publish",
      name: "Semantic Release Cross-Publish",
    },
  ];

  for (const { path, name } of explicitExports) {
    await testExport(path, `  ${name}`);
  }

  // Note: TypeScript .json exports require import assertions which aren't easily testable
  // in this way, but we verify they exist in package.json
  console.log("\n📄 JSON Exports (verified in package.json):\n");
  const jsonExports = [
    "./typescript",
    "./typescript/lib",
    "./typescript/js-lib",
  ];

  for (const jsonExport of jsonExports) {
    if (packageJson.exports[jsonExport]) {
      console.log(`✅   ${jsonExport}: ${packageJson.exports[jsonExport]}`);
      testResults.passed++;
    } else {
      console.log(`❌   ${jsonExport}: Not found in package.json exports`);
      testResults.failed++;
    }
  }

  // Test that subdirectories are NOT exported (security check)
  console.log("\n🔒 Security: Verifying Subdirectories Are NOT Exported\n");

  const shouldNotWork = [
    {
      path: "@peerigon/configs/eslint/presets/javascript.test/main",
      name: "Test directory",
    },
    {
      path: "@peerigon/configs/eslint/rules/vitest.test/example",
      name: "Test directory",
    },
    {
      path: "@peerigon/configs/eslint/styles/no-null.test/main",
      name: "Test directory",
    },
  ];

  for (const { path, name } of shouldNotWork) {
    try {
      await import(path);
      console.error(`❌   ${name} should NOT be exportable: ${path}`);
      testResults.failed++;
    } catch {
      console.log(`✅   ${name} correctly blocked: ${path}`);
      testResults.passed++;
    }
  }

  // Summary
  console.log("\n" + "=".repeat(70));
  console.log("\n📊 Test Summary\n");
  console.log(`   Total: ${testResults.passed + testResults.failed} tests`);
  console.log(`   ✅ Passed: ${testResults.passed}`);
  console.log(`   ❌ Failed: ${testResults.failed}`);

  if (testResults.failed > 0) {
    console.log("\n❌ Failed Tests:\n");
    for (const { path, error } of testResults.errors) {
      console.log(`   ${path}`);
      console.log(`   → ${error}`);
    }
    throw new Error("💥 Some exports are not configured correctly!");
  } else {
    console.log("\n✅ All exports are configured correctly!");
  }
}

// Run tests
runTests();
