/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "eslint-plugin-react" {
  const config: {
    rules: { [name: string]: any };
    languageOptions: { [name: string]: any };
  };

  const configs: {
    configs: {
      flat: {
        recommended: typeof config;
        ["jsx-runtime"]: typeof config;
      };
    };
  };

  export default configs;
}

declare module "eslint-plugin-prefer-arrow" {
  const config: {
    rules: { [name: string]: any };
  };

  export default config;
}

declare module "eslint-plugin-react-compiler" {
  const config: {
    rules: { [name: string]: any };
  };

  export default config;
}

declare module "eslint-plugin-react-hooks" {
  const config: {
    rules: { [name: string]: any };
  };

  export default config;
}

declare module "eslint-plugin-react-refresh" {
  const config: {
    rules: { [name: string]: any };
  };

  export default config;
}

declare module "eslint-plugin-no-only-tests" {
  const config: {
    rules: { [name: string]: any };
  };

  export default config;
}
