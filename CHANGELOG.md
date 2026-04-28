# Changelog

## 5.0.0 — ???

### Breaking

- Config file changed from `.stylelintrc` (JSON) to `stylelint.config.js` (ESM). `extends: "stylelint-config-htmlacademy"` keeps working through `package.json#exports`. Consumers reaching into the file path directly (e.g. `extends: "stylelint-config-htmlacademy/.stylelintrc"`) must switch to the package name.

### Added

- Stylelint v17 compatibility in `peerDependencies`.
- `stylelint-order` plugin with 7 semantic groups (custom properties, positioning, box-model, typography, decoration, animation, interactivity) covering ~430 modern CSS properties: container queries, anchor positioning, view transitions, full logical properties, `field-sizing`, `corner-shape`, scroll API, masks, modern typography. The list lives in a separate `properties-order.js` module.
- `order/order: [custom-properties, declarations, rules]` — declarations after nested rules are flagged.
- `selector-no-deprecated` — deprecated selectors like `:-webkit-any` are flagged.
- `selector-anb-no-unmatchable` — impossible selectors like `:nth-child(0)` are flagged.
- `no-unknown-custom-media` — typos in `@custom-media` references are flagged.
- `color-function-alias-notation: "without-alpha"` — only `rgb()`/`hsl()` allowed; `rgba`/`hsla` aliases are flagged.
- `declaration-block-single-line-max-declarations: 0` — single-line blocks are flagged.
- `selector-max-compound-selectors: 2` — selectors like `.a.b.c` are flagged.
- `media-feature-range-notation: "context"` — modern `(width >= 768px)` syntax required. Auto-fixable.
- `keyframes-name-pattern` — kebab-case for `@keyframes` names.
- `at-rule-disallowed-list: ["import"]` — `@import` forbidden in CSS (allowed in SCSS/LESS overrides).
- `color-function-notation: "modern"` — `rgb(255 0 0)` syntax required.
- `font-family-no-duplicate-names` now ignores the `monospace` keyword for the `"Courier New", monospace, monospace` font-stack pattern.
- `test/invalid/` suite via `node:test` + `stylelint.lint()`. `test/utils/testRule.js` helper does a subset match against expected warnings. ~25 fixtures cover all new rules and the most important existing ones.
- `npm test:valid` (positive fixtures) and `npm test:invalid` (negative fixtures) scripts; `npm test` runs both.

### Changed

- `declaration-no-important` now reports a warning instead of an error.
- `selector-not-notation` switched from `simple` to `complex` — Selectors Level 4 list `:not(.a, .b)` is preferred over chained `:not(.a):not(.b)`. Auto-fixable.
- `aspect-ratio` ordered after the full sizing block (`max-block-size`) instead of after `max-height`.
- `content` moved to the start of the `decoration` group — natural position for `::before`/`::after` content.

### Migration notes

- Most consumers (`extends: "stylelint-config-htmlacademy"`): no action required.
- Run `stylelint --fix` once: `media-feature-range-notation`, `selector-not-notation`, and the expanded `properties-order` are auto-fixable and will reformat existing CSS.
- The new error-level rules (`declaration-block-single-line-max-declarations: 0`, `selector-max-compound-selectors: 2`, `order/order`, `selector-no-deprecated`, `selector-anb-no-unmatchable`, `no-unknown-custom-media`, `color-function-alias-notation`) may surface previously tolerated patterns.

## 4.4.0 — 2025-10-02

- Updated Stylelint to 16.25.0, @stylistic plugin to 4.0.0

## 4.3.0 — 2025-10-01

- Updated Stylelint to 16.10.0, @stylistic plugin to 3.1.1

## 4.2.3 — 2024-05-28

- Updated Stylelint to 16.6.1

## 4.2.2 — 2024-05-24

- Updated Stylelint to 16.6.0

## 4.2.1 — 2024-05-02

- Updated Stylelint to 16.5.0, @stylistic plugin to 2.1.2

## 4.2.0 — 2024-04-02

- Added `declaration-block-no-redundant-longhand-properties` rule
- Added `no-unknown-custom-properties` rule

## 4.1.0 — 2024-02-19

- Added `named-grid-areas-alignment` rule for grid area alignment

## 4.0.5 — 2024-02-01

- Added `shorthand-property-no-redundant-values` rule

## 4.0.2 — 2024-01-16

- Added `comment-whitespace-inside` rule

## 4.0.1 — 2023-12-28

- Added `selector-class-pattern` for lowercase class names

## 4.0.0 — 2023-12-25

- Updated to Stylelint 16, migrated to `@stylistic/stylelint-plugin`

## 3.0.0 — 2023-12-12

- Updated to Stylelint 16, requires Node.js 18.12+

## 2.0.0 — 2023-07-20

### Changed

- Config format changed from `.js` to `.stylelintrc` (JSON)
- Rules sorted alphabetically

### Added

- SCSS/LESS overrides with custom syntax support
- `stylelint-codeguide` plugin for stylistic rules
- `function-linear-gradient-no-nonstandard-direction` rule
- `import-notation: string` rule
- `max-nesting-depth: 2` with pseudo-class ignore

## 1.1.0 — 2022-09-02

- Added `color-hex-alpha: never`, `selector-not-notation: simple`, `annotation-no-unknown`

## 1.0.0 — 2022-08-23

- Initial stable release with Stylelint 14
