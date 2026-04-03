import { test } from "jest";

// eslint-disable-next-line no-only-tests/no-only-tests
test.only("this is an empty test", () => {});

// require-yield is disabled in tests – generator without yield
function* testHelper() {
  return 42;
}
void testHelper;

// prefer-single-call is disabled in tests – multiple `classList.add()` calls are sometimes clearer than one merged call
function createStubElement() {
  return {
    classList: {
      add() {},
      remove() {},
    },
  };
}
const element = createStubElement();
element.classList.add("a");
element.classList.add("b");
void element;
