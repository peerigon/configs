const objectValue = { id: 1 };

// no-base-to-string: object has only the default Object.prototype.toString,
// so this interpolates to "[object Object]" at runtime.
// eslint-disable-next-line @typescript-eslint/no-base-to-string
export const interpolated = `value: ${objectValue}`;

// restrict-plus-operands allows string + number, so this concatenation is fine
// and needs no disable directive.
export const withNumber = "count: " + 1;

// allowNumberAndString is narrow: only number is allowed, so other primitive
// operands are still caught (the disable directives only pass because the rule
// actually reports here, thanks to reportUnusedDisableDirectives).
// eslint-disable-next-line @typescript-eslint/restrict-plus-operands
export const withBoolean = "flag: " + true;
// eslint-disable-next-line @typescript-eslint/restrict-plus-operands
export const withNullish = "value: " + null;

// And a non-string/non-number addition (true would silently become 1) is caught too.
// eslint-disable-next-line @typescript-eslint/restrict-plus-operands
export const added = 1 + true;
