# Stylelint Config for HTML Academy Codeguide

[![npm version](https://img.shields.io/npm/v/stylelint-config-htmlacademy.svg)](https://www.npmjs.com/package/stylelint-config-htmlacademy)
[![test](https://github.com/htmlacademy/stylelint-config-htmlacademy/actions/workflows/test.yml/badge.svg)](https://github.com/htmlacademy/stylelint-config-htmlacademy/actions/workflows/test.yml)
[![license](https://img.shields.io/npm/l/stylelint-config-htmlacademy.svg)](https://github.com/htmlacademy/stylelint-config-htmlacademy/blob/main/LICENSE)

[Stylelint](https://stylelint.io) configuration for CSS, SCSS and LESS validation according to [HTML Academy Codeguide](https://codeguide.academy).

## Requirements

- Node.js >= 24
- Stylelint >= 17

## Installation

```bash
npm install -D stylelint stylelint-config-htmlacademy
```

## Usage

Create `stylelint.config.js` in your project root:

```js
export default {
  extends: 'stylelint-config-htmlacademy',
};
```

Or add to your `package.json`:

```json
{
  "stylelint": {
    "extends": ["stylelint-config-htmlacademy"]
  }
}
```

## Key Features

- **Modern CSS** — modern color functions (`rgb(255 0 0)`, `oklch(60% 0.15 240)`), percentage lightness and alpha, modern media features (`width >= 768px`), no vendor prefixes, no `@import` in CSS.
- **BEM class names** — strict `block__element--modifier` pattern, kebab-case throughout, single `_` and chained modifiers rejected.
- **Property order** — seven semantic groups (positioning, box model, typography, decoration, animation, interactivity), covering ~430 modern properties: container queries, anchor positioning, view transitions, scroll API, logical properties, masks, modern typography. Auto-fixable.
- **Selector hygiene** — maximum 2 classes, 2 compound selectors, 2 combinators, 2 type selectors per chain; no ID selectors; no deprecated or invalid selectors; nested selectors must reference parent via `&`.
- **Naming patterns** — kebab-case for custom properties, custom media, IDs, animations.
- **Code quality** — no `!important` (warning), max 2 nesting levels, no single-line blocks, no duplicate properties.
- **Preprocessors** — SCSS and LESS work out of the box, syntax detected by file extension, preprocessor-specific syntax (`@include`, `@mixin`, `@use`, `fade()`) allowed.

## BEM Class Names

Class names must follow `block__element--modifier` BEM notation in lowercase:

```css
/* Valid */
.button {}
.site-header {}
.button__icon {}
.button__icon-text {}
.button--primary {}
.button__icon--small {}

/* Invalid */
.Button {}                 /* uppercase */
.button_icon {}            /* single underscore */
.button--mod--extra {}     /* chained modifiers */
```

## Alpha and Lightness Notation

Opacity, alpha channels and lightness in modern color functions must be expressed as percentages:

```css
/* Valid */
.element {
  opacity: 50%;
  color: rgb(0 0 0 / 25%);
  background: oklch(60% 0.15 240);
}

/* Invalid */
.element {
  opacity: 0.5;
  color: rgb(0 0 0 / 0.25);
  background: oklch(0.6 0.15 240);
}
```

Run `stylelint --fix` to convert existing decimal values automatically.

## Property Order

```css
.element {
  /* Custom properties */
  --element-color: #333333;

  /* Positioning */
  position: absolute;
  inset: 0;
  z-index: 100;

  /* Box model */
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  margin: 10px;
  padding: 10px;
  overflow: hidden;

  /* Typography */
  font-family: "Arial", sans-serif;
  font-size: 13px;
  font-weight: 700;
  line-height: 20px;
  text-align: center;
  color: var(--element-color);

  /* Decoration */
  background-color: #f5f5f5;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  opacity: 100%;

  /* Animation */
  transition: color 200ms;

  /* Interactivity */
  cursor: pointer;
  pointer-events: auto;
  user-select: none;
}
```

Run `stylelint --fix` to reorder properties automatically.

## Preprocessors

SCSS and LESS are detected by file extension (`.scss`, `.less`). Preprocessor-specific at-rules (`@include`, `@mixin`, `@use`, `@forward`, `@if`, `@for`, `@each`, `@content`) and functions (`fade()` in LESS) are allowed. `@import` is allowed in preprocessors but forbidden in plain CSS.

## Extending

Override rules in your `stylelint.config.js`:

```js
export default {
  extends: 'stylelint-config-htmlacademy',
  rules: {
    'selector-class-pattern': null,
    'max-nesting-depth': 3,
  },
};
```

## Editor Integration

Install the [Stylelint extension](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) for VS Code.

For auto-fix on save, add to `.vscode/settings.json`:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": "explicit"
  },
  "stylelint.validate": ["css", "scss", "less"]
}
```

## Links

- [HTML Academy](https://htmlacademy.ru)
- [HTML Academy Codeguide](https://codeguide.academy)
- [Codeguide Repository](https://github.com/htmlacademy/codeguide)
- [Stylelint Documentation](https://stylelint.io/user-guide/get-started/)
