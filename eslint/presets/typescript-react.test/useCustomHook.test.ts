// Proves the tests relaxation for exhaustive-deps also covers hook tests in plain .ts files
// (react-hooks/exhaustive-deps, not only @eslint-react/exhaustive-deps). The missing
// dependency below has no disable comment, so a still-active rule would fail the test
// (--max-warnings 0).

import { useEffect, useState } from "react";

export const useTestHook = (): number => {
  const [count] = useState(0);

  useEffect(() => {
    console.log(count);
  }, []);

  return count;
};
