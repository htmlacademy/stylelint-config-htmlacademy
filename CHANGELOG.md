# Change log

# 1.1.2
Обновили зависимости до последних версий:
- stylelint 14.13.0.

# 1.1.1
Обновили зависимости до последних версий:
- stylelint 14.12.0.

## 1.1.0
- Отсортировал список правил по [rules list](https://stylelint.io/user-guide/rules/list/)
- Значения текущих правил не поменялись, но некоторые дополнились новыми значениями. Одно правило может иметь несколько значений используя массив `[rule, rule2]`
- Добавили новые правила:

### [color-hex-alpha: never](https://stylelint.io/user-guide/rules/list/color-hex-alpha/)
Правило контролирует наличие четвёртого параметра у HEX для альфа канала.

Значение `never` запрещает использование `a { color: #ffffffaa; }`

Мотивация: из такой прозрачности `aa` не понятно сколько это в дробях. А при коммуникации мы используем человекопонятные “Прозрачность 50%”

### [custom-property-no-missing-var-function: true](https://stylelint.io/user-guide/rules/list/custom-property-no-missing-var-function/)
Правило запрещает использовать кастомные свойства без `var`

Хорошо: `color: var(--foo)`

Плохо: `color: --foo`

### [function-calc-no-unspaced-operator: true](https://stylelint.io/user-guide/rules/list/function-calc-no-unspaced-operator/)
Заставляет ставить пробел вокруг оператора в функции `calc()`

Хорошо:  `a { top: calc(1px + 2px); }`

Плохо: `a { top: calc(1px+2px); }`

### [length-zero-no-unit: ignoreFunctions: ["/^--/"]](https://stylelint.io/user-guide/rules/list/length-zero-no-unit/)
Запрещает указывать единицы измерения, кроме функций

Хорошо:  `a { top: 0 }, a { top: var(--foo, 0px); }`

Плохо: `a { top: 0px }`

Напоминалка: кастомным свойствам лучше указывать единицы измерения

### [value-keyword-case: [lower, { camelCaseSvgKeywords: true }]](https://stylelint.io/user-guide/rules/list/value-keyword-case/)
Правило разрешает писать значения только в нижнем регистре.

`'camelCaseSvgKeywords' : true` - разрешает писать SVG-конструкции `color: currentColor;`. В SVG принято писать в camelCase.

### [selector-not-notation: simple](https://stylelint.io/user-guide/rules/list/selector-not-notation/)
Следит за использованием селектора `:not`

Хорошо: `:not(a):not(div) {}`

Плохо: `:not(a, div) {}`

### [keyframe-block-no-duplicate-selectors : true](https://stylelint.io/user-guide/rules/list/keyframe-block-no-duplicate-selectors/)
Запрещает повторяющие селекторы в keyframe блоке

Хорошо: `@keyframes foo { 0% {} 100% {} }`

Плохо:  `@keyframes foo { 0% {} 0% {} }`

### [annotation-no-unknown: true](https://stylelint.io/user-guide/rules/list/annotation-no-unknown/)
Запрещает странные аннотации

Хорошо: `color: green !important;`

Плохо:    `color: green !imprtant;`

### [keyframe-selector-notation: percentage-unless-within-keyword-only-block](https://stylelint.io/user-guide/rules/list/keyframe-selector-notation/)
Заставляет писать однотипные точки в кейфреймах. Или только `0%` или только `from`

Хорошо: `@keyframes foo { 0% {} 100% {} }` `@keyframes foo { from {} to {} }`

Плохо: `@keyframes foo { from {} 100% {} }`

### [selector-max-universal: 2](https://stylelint.io/user-guide/rules/list/selector-max-universal/)
Запрещает использовать подряд универсальные селекторы

Хорошо: `.foo * {}` `* * {}`

Плохо: `* * * {}`

## 1.0.0
Перешли на мажорную версию stylelint 14+. Обновили зависимости

## 0.1.12
Обновили небезопасные зависимости

## 0.1.11
Убрали возможность указывать `0` в кастомных свойствах

```html
'length-zero-no-unit': [true, {
  'ignore': [
    "custom-properties"
  ]
}],
```

Из-за того, что `0`, это `<length>`, а не `<integer>` или `<number>` в `calc()` из-за этого могут быть проблемы. У `calc()` не всегда получается работать с разными типами и чаще всего не получается как раз с `<length>`. Поэтому лучше всё-таки указывать тип значения в кастомном свойстве.

**Плохо**
```html
:root {
  --size: 0;
}
```

**Хорошо**
```html
:root {
  --size: 0px;
}
```

## 0.1.10
Обновили уязвимые версии зависимости

## 0.1.9
Добавили возможность использовать многострочность в фунциях, при этом не ломая однострочные функции

```css
.element {
  background-image:
    linear-gradient(
      var(--special-opacity) 16px,
      var(--basic-yellow) 16px,
      var(--basic-yellow) 24px,
      var(--special-opacity) 24px
    );
}
```

для этого изменили:
- `function-comma-space-after` на `always-single-line`
- `function-parentheses-space-inside` на `never-single-line`

Спасибо @firefoxic

## 0.1.8
Обновили уязвимые версии зависимости

## 0.1.7
Починили работу с зависимостями проекта

## 0.1.6
Приводит правила к обновлённому кодгайду и критериям качества

- `no-duplicate-at-import-rules` - отключает дублированное использование `@import`
- `no-invalid-position-at-import-rule` - заставляет писать `@import` раньше всех остальных CSS-правил, кроме `@charset 'utf-8';`
- `color-no-invalid-hex` - ругается на невалидные хексы
- `color-no-hex` - разрешает писать хексы. Свойство отключено
- `color-named` - запрещает использовать имена цветов, вроде `red`, `black`, чтобы использовать хексы и `rgb`-цвета
- `number-max-precision` - ограничивает точность значений - `width: 3.33%` вместо `width: 3.33333%`

## 0.1.5
- Добавили тесты, чтобы правильнее следить за добавлением новых правил или изменением нынешних
- Добавили [stylelint-config-recommended](https://github.com/stylelint/stylelint-config-recommended#readme) как стартовый конфиг
- Почистили повторяющиеся свойств с `stylelint-config-recommended`
- Перевели `README` на русский
- Уточнили вложенность селекторов
- Запретили импортанты
- Добавили правило с указанием семейства шрифта

## 0.1.4
- Добавили в `"unit-whitelist"` `px`
- Добавили директиву each в перечень разрешенных 
- Добавили правило `function-calc-no-invalid`

## 0.1.3
- Убрали багнутое свойство `function-calc-no-invalid`

## 0.1.2
- Обновили правила для стайллинт до 9.10

## 0.1.0
- Немного прибрались в репозитории

## 0.0.3
- Немного прибрались в репозитории

## 0.0.2
- Добавили правила для сталлинта 7.9.0
