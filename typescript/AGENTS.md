# TypeScript

- Keep base configs strict and modern.
- Loosening options like `skipLibCheck` are explicit trade-offs, never defaults.
- Keep base checking configs separate from the library build partials.
- The JSON files may contain comments; `tools/prepare-jsr-publish-assets.js` converts them to strict JSON in `dist/` because JSR rejects JSONC.
