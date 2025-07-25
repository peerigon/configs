import { getMessage } from "./message.ts";
// Check if import attributes are detected and formatted correctly
import test from "./test.json" with { type: "json" };

// eslint-disable-next-line @typescript-eslint/naming-convention
const snake_case = 123;

// Should not complain about missing dot-notation here since
// we're using TS's noPropertyAccessFromIndexSignature
process.env["SOME_ENV_VAR"] = "test";

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

console.log(getMessage(), SomeClass, snake_case, test);

/* @ts-expect-error Inconsistent returns should be caught by TypeScript */
(() => {
  if (Math.random() > 0.5) {
    return true;
  }
})();

// @ts-expect-error enums are not supported in erasableSyntaxOnly
enum SomeEnum {}
