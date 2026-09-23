// Proves react-hooks rules apply to plain .ts files (no JSX), not just .tsx (see
// eslint/rules/react.js: hookFiles). @eslint-react's hook rules only cover jsx/tsx, so this
// custom hook relies on the eslint-plugin-react-hooks layer instead. If that layer stopped
// covering .ts files, these disable comments would become unused directives and fail the
// test (reportUnusedDisableDirectives + --max-warnings 0).

import { useEffect, useState } from "react";

export const useCustomHook = (id: string): number => {
  if (id) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useState(0);
  }

  const [count] = useState(0);

  useEffect(() => {
    console.log(count);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return count;
};
