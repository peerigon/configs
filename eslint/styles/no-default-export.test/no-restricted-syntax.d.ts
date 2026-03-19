/**
 * Fixture to verify no-restricted-syntax is disabled in d.ts files.
 * ExportDefaultDeclaration is restricted by no-default-export in app code,
 * but allowed in declaration files; this file must lint with 0 warnings.
 */
declare const value: string;
export default value;
