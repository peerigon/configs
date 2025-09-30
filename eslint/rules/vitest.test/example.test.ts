// eslint-disable-next-line vitest/no-commented-out-tests
// test("commented out test", () => {
//   expect(true).toBe(true);
// });

beforeEach(() => {
  // setup
});

// eslint-disable-next-line vitest/no-duplicate-hooks
beforeEach(() => {
  // duplicate setup
});

// eslint-disable-next-line vitest/no-focused-tests
test.only("focused test", () => {
  expect(true).toBe(true);
});

test("conditional expect", () => {
  // eslint-disable-next-line no-constant-condition, @typescript-eslint/no-unnecessary-condition
  if (true) {
    // eslint-disable-next-line vitest/no-conditional-expect
    expect(true).toBe(true);
  }
});

test("interpolation in snapshot", () => {
  expect({ name: `test-${Date.now()}` }).toMatchSnapshot();
});

// eslint-disable-next-line vitest/prefer-each
for (const letter of ["a", "b", "c"]) {
  describe(letter, () => {
    // eslint-disable-next-line vitest/no-standalone-expect
    expect(letter).toBe("foo");
  });
}

test("prefer equality matcher", () => {
  // eslint-disable-next-line vitest/prefer-equality-matcher
  expect(1 + 1 === 2).toBe(true);
});

describe("hooks order violation", () => {
  afterEach(() => {
    // cleanup
  });

  // eslint-disable-next-line vitest/prefer-hooks-in-order
  beforeEach(() => {
    // setup
  });
});

describe("hooks not on top", () => {
  test("some test", () => {
    expect(true).toBe(true);
  });

  // eslint-disable-next-line vitest/prefer-hooks-on-top
  beforeEach(() => {
    // setup
  });
});

// This expect is not in a test context
expect(true).toBe(true);

test("with return statement", () => {
  expect(true).toBe(true);
  // eslint-disable-next-line vitest/no-test-return-statement
  return undefined;
});

// eslint-disable-next-line vitest/prefer-todo, vitest/expect-expect
test("foo");

describe("level 1", () => {
  describe("level 2", () => {
    describe("level 3", () => {
      describe("level 4", () => {
        // eslint-disable-next-line vitest/max-nested-describe
        describe("level 5", () => {
          it("does something", () => {
            expect(true).toBeTruthy();
          });
        });
      });
    });
  });
});
