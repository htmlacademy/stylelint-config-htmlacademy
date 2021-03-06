# Change log

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
