import { getMessage } from "./message.ts";
// Check if import attributes are detected and formatted correctly
import test from "./test.json" with { type: "json" };

// eslint-disable-next-line @typescript-eslint/naming-convention
const snake_case = 123;

// Should not complain about missing dot-notation here since
// we're using TS's noPropertyAccessFromIndexSignature
process.env["SOME_ENV_VAR"] = "test";

// Bracket notation on index type should not show dot-notation error
const indexObj: Record<string, string> = { foo: "bar" };
const _indexValue = indexObj["foo"];

class SomeClass {
  #someProp = true;
  private someEventHandler = () => {
    // Arrow functions as class properties should be ok...
  };

  someMethod(_unused: string) {
    // ...as well as regular functions.
    // See styles/prefer-arrow.js for an explanation.
    console.log(this.#someProp);
  }

  // Should be an error
  // eslint-disable-next-line @typescript-eslint/naming-convention
  snake_case() {}
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type SomeType = {
  // eslint-disable-next-line @typescript-eslint/method-signature-style
  someMethod(): void;
};

// Exported functions should carry an explicit return type as a contract for consumers
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const untypedExport = (value: string) => value;

// Internal (non-exported) functions are fine without an explicit return type
const inferredInternal = (value: string) => value;

console.log(getMessage(), SomeClass, snake_case, test, untypedExport, inferredInternal);

/* @ts-expect-error Inconsistent returns should be caught by TypeScript */
(() => {
  if (Math.random() > 0.5) {
    return true;
  }
})();

// @ts-expect-error enums are not supported in erasableSyntaxOnly
// eslint-disable-next-line @typescript-eslint/no-unused-vars
enum SomeEnum {}
