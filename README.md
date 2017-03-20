# stylelint-config-htmlacademy
> The standard shareable config for stylelint.

Use it as is or as a foundation for your own config.

## Installation

```bash
npm install stylelint-config-htmlacademy --save-dev
```

## Usage

If you've installed `stylelint-config-htmlacademy` locally within your project, just set your `stylelint` config to:

```json
{
  "extends": "stylelint-config-htmlacademy"
}
```

If you've globally installed `stylelint-config-htmlacademy` using the `-g` flag, then you'll need to use the absolute path to `stylelint-config-htmlacademy` in your config e.g.

```json
{
  "extends": "/absolute/path/to/stylelint-config-htmlacademy"
}
```

### Extending the config

Simply add a `"rules"` key to your config, then add your overrides and additions there.

For example, to change the `indentation` to tabs, turn off the `number-leading-zero` rule, change the `property-no-unknown` rule to use its `ignoreAtRules` option and add the `unit-whitelist` rule:

```json
{
  "extends": "stylelint-config-htmlacademy",
  "rules": {
    "indentation": "tab",
    "number-leading-zero": null,
    "property-no-unknown": [ true, {
      "ignoreProperties": [
        "composes"
      ]
    }],
    "unit-whitelist": ["em", "rem", "s"]
  }
}
```
