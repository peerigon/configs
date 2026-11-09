/**
 * Fixture to verify no-implicit-coercion rejects `!!value`. The disable directive must be used: an
 * unused one is reported, so this file fails the 0-warnings lint if the rule stops firing.
 */
const value = process.argv.length;

// eslint-disable-next-line no-implicit-coercion
export const doubleNegation = !!value;

export const explicit = Boolean(value);
