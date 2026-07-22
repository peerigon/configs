import { useEffect, useState } from "react";

import { Other } from "./Other.tsx";

export const App = (_props: { name: string; count: number }) => {
  for (let index = 0; index < 10; index++) {
    // eslint-disable-next-line @eslint-react/rules-of-hooks
    useEffect(() => {
      void index;

      // eslint-disable-next-line @eslint-react/exhaustive-deps
    }, []);
  }

  // eslint-disable-next-line @eslint-react/use-state
  const [state, updateState] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line @eslint-react/set-state-in-effect, react-you-might-not-need-an-effect/no-chain-state-updates
    updateState(1);
  }, [state]);

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y-x/alt-text */}
      <img src="some-image.jpg" />
      {/* eslint-disable-next-line react/jsx-curly-brace-presence */}
      {"Hello world"}
      {/* eslint-disable-next-line @eslint-react/no-leaked-conditional-rendering */}
      <>{_props.count && <view />}</>
      <Other />
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const doesntWorkWithHmr = () => {};

<App name="John" count={0} />;
