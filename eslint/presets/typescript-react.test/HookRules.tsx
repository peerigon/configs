// Verifies the hook rule source-of-truth split in eslint/rules/react.js.
//
// Every violation below is caught by @eslint-react. For rules that both
// @eslint-react and eslint-plugin-react-hooks ship, we disable ONLY the
// @eslint-react rule: because the test runs with --max-warnings 0, a still-active
// react-hooks duplicate would add a second (undisabled) warning and fail the test.
// So a clean run proves the react-hooks duplicate is off and @eslint-react wins.

import { useMemo, useRef, useState } from "react";

let counter = 0;

// Overlap with react-hooks/set-state-in-effect's sibling react-hooks/set-state-in-render:
// only @eslint-react may report it.
export const SetStateInRender = () => {
  const [value, setValue] = useState(0);
  // eslint-disable-next-line @eslint-react/set-state-in-render
  setValue(1);
  return <p>{value}</p>;
};

// Overlap with react-hooks/use-memo: only @eslint-react may report it.
export const VoidUseMemo = () => {
  // eslint-disable-next-line @eslint-react/use-memo
  useMemo(() => {
    counter += 1;
  }, []);
  return <p>{counter}</p>;
};

// @eslint-react/refs re-enabled in react.js (the conflict preset turns off
// react-hooks/refs but @eslint-react's presets don't enable their own by default).
export const RefInRender = () => {
  const ref = useRef<number>(0);

  // eslint-disable-next-line @eslint-react/refs
  const current = ref.current;
  return <p>{current}</p>;
};

// @eslint-react/immutability re-enabled in react.js (same reasoning as refs).
export const MutateProps = (props: { items: Array<number> }) => {
  // eslint-disable-next-line @eslint-react/immutability
  props.items.push(1);
  return <p>{props.items.length}</p>;
};

// @eslint-react/globals re-enabled in react.js (same reasoning as refs).
export const MutateGlobal = () => {
  const [value] = useState(0);

  // eslint-disable-next-line @eslint-react/globals
  counter = value + 1;
  return <p>{counter}</p>;
};
