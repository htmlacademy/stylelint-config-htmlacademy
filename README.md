# stylelint-config-htmlacademy
> Это стандартный конфигурационный файл для stylelint от [HTML Academy](https://htmlacademy.ru/).

Используйте его как есть или как основу для вашей собственной конфигурации.

## Установка

```bash
npm install stylelint-config-htmlacademy --save-dev
```

## Использование

Если вы установили `stylelint-config-htmlacademy` локально в свой проект, то просто примените его в конфигурационном файле `stylelint` вашего проекта:

```json
{
  "extends": "stylelint-config-htmlacademy"
}
```

Если вы установили `stylelint-config-htmlacademy` глобально с помощью флага `-g`, тогда вам нужно использовать абсолютный путь `stylelint-config-htmlacademy` в вашем конфигурационном файле:

```json
{
  "extends": "/absolute/path/to/stylelint-config-htmlacademy"
}
```

### Расширение конфига

Просто добавьте ключ `"rules"` в ваш конфиг после `"extends": "stylelint-config-htmlacademy"`, а затем добавьте туда свои правила.

Например, если вы хотите изменить `indentation` на табы, отключить правило `number-leading-zero`, изменить правило `property-no-unknown`, чтобы использовать его опцию `ignoreAtRules` и добавить правило `unit-whitelist`, то  нужно:

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
    "unit-whitelist": ["em", "rem", "s", "px"]
  }
}
```
