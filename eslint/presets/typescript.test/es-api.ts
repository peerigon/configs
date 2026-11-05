// Rules that suggest APIs outside the `es2025` lib of the TypeScript base config must stay off.
// Following them would produce type errors (see unicorn/prefer-array-from-async etc. in rules/javascript.js).

// unicorn/prefer-array-from-async would suggest Array.fromAsync() (ES2026)
export const collect = async (source: AsyncIterable<number>): Promise<Array<number>> => {
  const result: Array<number> = [];
  for await (const value of source) {
    result.push(value);
  }
  return result;
};

// unicorn/prefer-iterator-zip would suggest Iterator.zip()
export const pairs = (keys: Array<string>, values: Array<number>): Array<string> => {
  const result: Array<string> = [];
  for (let index = 0; index < Math.min(keys.length, values.length); index++) {
    result.push(`${keys[index]}=${values[index]}`);
  }
  return result;
};
