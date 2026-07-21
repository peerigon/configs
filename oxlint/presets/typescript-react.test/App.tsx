import { useEffect, useState } from "react";

export const App = (_props: { name: string; count: number }) => {
  for (let index = 0; index < 10; index++) {
    // oxlint-disable-next-line react/rules-of-hooks, react/react-compiler
    useEffect(() => {
      void index;
    }, []);
  }

  const [state, setState] = useState(0);

  useEffect(() => {
    // oxlint-disable-next-line react/react-compiler, react-you-might-not-need-an-effect/no-chain-state-updates
    setState(1);
  }, [state]);

  return (
    <>
      {/* oxlint-disable-next-line jsx-a11y/alt-text */}
      <img src="some-image.jpg" />
      {/* oxlint-disable-next-line react/jsx-curly-brace-presence */}
      {"Hello world"}
    </>
  );
};

// oxlint-disable-next-line react/only-export-components
export const doesntWorkWithHmr = () => {};

<App name="John" count={0} />;
