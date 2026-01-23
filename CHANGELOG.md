# Changelog

## 5.0.0 — ???

### Added

- `stylelint-order` plugin for CSS property ordering (7 groups: custom properties, positioning, box model, typography, decoration, animation, interactivity)
- `keyframes-name-pattern` rule — kebab-case for @keyframes names
- `at-rule-disallowed-list` — @import forbidden in CSS (allowed in SCSS/LESS)
- `color-function-notation: modern` — requires `rgb(255 0 0)` syntax

### Changed

- Updated `@stylistic/stylelint-plugin` to 5.0.1
- Added `stylelint-order` 7.0.1
- Added Stylelint v17 compatibility in peerDependencies
- `declaration-no-important` now warns instead of errors

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
