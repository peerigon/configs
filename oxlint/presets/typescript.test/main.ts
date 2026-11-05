export const getMessage = (): string => "hello";

// oxlint-disable-next-line typescript/explicit-module-boundary-types
export const untypedExport = (value: string) => value;

// Internal (non-exported) functions are fine without an explicit return type
const inferredInternal = (value: string) => value;

// oxlint-disable-next-line id-match
const snake_case = 123;

class SomeClass {
  #someProp = true;

  private someEventHandler = () => {
    // Arrow functions as class properties should be ok
  };

  someMethod(_unused: string) {
    console.log(this.#someProp);
  }

  // oxlint-disable-next-line id-match
  snake_case() {}
}

// oxlint-disable-next-line no-unused-vars
type SomeType = {
  // oxlint-disable-next-line typescript/method-signature-style
  someMethod(): void;
};

console.log(getMessage(), SomeClass, snake_case, untypedExport, inferredInternal);
