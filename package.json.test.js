import { readFile } from "node:fs/promises";
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

/** Main test function */
async function runTests() {
  console.log("Testing package.json exports...\n");
  console.log("=".repeat(70));

  // Read package.json to verify exports structure
  const packageJson = JSON.parse(
    await readFile(join(import.meta.dirname, "package.json"), "utf8"),
  );

  console.log("\n📦 Testing All Exports\n");

  // Test all exports from package.json
  const exports = packageJson.exports;
  const exportEntries = Object.entries(exports);

  // Group exports by category for better output
  const eslintPresets = exportEntries.filter(([key]) =>
    key.startsWith("./eslint/presets/"),
  );
  const eslintRules = exportEntries.filter(([key]) =>
    key.startsWith("./eslint/rules/"),
  );
  const eslintStyles = exportEntries.filter(([key]) =>
    key.startsWith("./eslint/styles/"),
  );
  const otherExports = exportEntries.filter(
    ([key]) => !key.startsWith("./eslint/") && !key.startsWith("./typescript"),
  );
  const typescriptExports = exportEntries.filter(([key]) =>
    key.startsWith("./typescript"),
  );

  if (eslintPresets.length > 0) {
    console.log("Testing ESLint Presets:");
    for (const [exportPath] of eslintPresets) {
      const name = exportPath.replace("./eslint/presets/", "");
      const importPath = `@peerigon/configs${exportPath.replace("./", "/")}`;
      await testExport(importPath, `  Preset "${name}"`);
    }
  }

  if (eslintRules.length > 0) {
    console.log("\nTesting ESLint Rules:");
    for (const [exportPath] of eslintRules) {
      const name = exportPath.replace("./eslint/rules/", "");
      const importPath = `@peerigon/configs${exportPath.replace("./", "/")}`;
      await testExport(importPath, `  Rule "${name}"`);
    }
  }

  if (eslintStyles.length > 0) {
    console.log("\nTesting ESLint Styles:");
    for (const [exportPath] of eslintStyles) {
      const name = exportPath.replace("./eslint/styles/", "");
      const importPath = `@peerigon/configs${exportPath.replace("./", "/")}`;
      await testExport(importPath, `  Style "${name}"`);
    }
  }

  if (otherExports.length > 0) {
    console.log("\nTesting Other Exports:");
    for (const [exportPath] of otherExports) {
      const name = exportPath.replace("./", "").replaceAll("/", " ");
      const importPath = `@peerigon/configs${exportPath.replace("./", "/")}`;
      await testExport(importPath, `  ${name}`);
    }
  }

  // Note: TypeScript .json exports require import assertions which aren't easily testable
  // in this way, but we verify they exist in package.json
  if (typescriptExports.length > 0) {
    console.log("\n📄 JSON Exports (verified in package.json):\n");
    for (const [exportPath, exportValue] of typescriptExports) {
      if (packageJson.exports[exportPath]) {
        console.log(`✅   ${exportPath}: ${exportValue}`);
        testResults.passed++;
      } else {
        console.log(`❌   ${exportPath}: Not found in package.json exports`);
        testResults.failed++;
      }
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
