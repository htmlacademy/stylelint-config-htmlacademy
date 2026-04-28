# Stylelint Config for HTML Academy Codeguide

[![npm version](https://img.shields.io/npm/v/stylelint-config-htmlacademy.svg)](https://www.npmjs.com/package/stylelint-config-htmlacademy)
[![test](https://github.com/htmlacademy/stylelint-config-htmlacademy/actions/workflows/test.yml/badge.svg)](https://github.com/htmlacademy/stylelint-config-htmlacademy/actions/workflows/test.yml)
[![license](https://img.shields.io/npm/l/stylelint-config-htmlacademy.svg)](https://github.com/htmlacademy/stylelint-config-htmlacademy/blob/main/LICENSE)

[Stylelint](https://stylelint.io) configuration for CSS, SCSS, LESS validation according to [HTML Academy Codeguide](https://codeguide.academy).

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
  extends: "stylelint-config-htmlacademy",
}
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

- **Property Order** — Logical grouping into seven groups (positioning, box model, typography, decoration, animation, interactivity), covering modern CSS: container queries, anchor positioning, view transitions, scroll API, logical properties, masks, modern typography
- **Modern CSS** — `rgb(255 0 0)` syntax (no `rgba` alias), no vendor prefixes, no `@import` in CSS
- **Code Quality** — No `!important`, max 2 nesting levels, max 2 compound selectors, no single-line blocks, kebab-case naming, no deprecated or unmatchable selectors
- **Preprocessors** — SCSS and LESS support with syntax-aware rule adjustments
- **Modular** — `stylelint.config.js` ESM entry point, property order list lives in a separate `properties-order.js` module

## Property Order

Properties are organized into groups:

```css
.element {
  /* 1. Custom Properties */
  --element-color: #333333;

  /* 2. Positioning */
  position: absolute;
  inset: 0;
  z-index: 100;

  /* 3. Box Model */
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  margin: 10px;
  padding: 10px;
  overflow: hidden;

  /* 4. Typography */
  font-family: "Arial", sans-serif;
  font-size: 13px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px;
  text-align: center;
  color: var(--element-color);

  /* 5. Decoration */
  background-color: #f5f5f5;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  opacity: 1;

  /* 6. Animation */
  transition: color 0.3s;

  /* 7. Interactivity */
  cursor: pointer;
  pointer-events: auto;
  user-select: none;
}
```

Run `stylelint --fix` to automatically reorder properties.

## Preprocessors

SCSS and LESS work out of the box. The syntax is automatically detected by file extension (`.scss`, `.less`). No additional configuration required.

## Extending

Override rules in your `stylelint.config.js`:

```js
export default {
  extends: "stylelint-config-htmlacademy",
  rules: {
    "selector-class-pattern": null,
  },
}
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
