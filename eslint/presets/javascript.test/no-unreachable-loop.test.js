/**
 * Fixture to verify no-unreachable-loop is disabled in test files.
 * In tests, unreachable loops (e.g. break on first iteration) are sometimes
 * used intentionally; this file must lint with 0 warnings.
 */
for (const _x of [1, 2, 3]) {
  break; // only first iteration – allowed in tests
}
