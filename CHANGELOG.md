<!-- markdownlint-disable MD024 -->
# Changelog

Все заметные изменения в этом проекте будут задокументированы в этом файле.

Формат основан на [Keep a Changelog](https://keepachangelog.com/ru/1.1.0/), и этот проект придерживается [Semantic Versioning](https://semver.org/lang/ru/).

## [2.0.4] — 2023–08–02
Обновляет все зависимости и уточняет версию peerDependencies

## [2.0.3] — 2023–07–28
Починили поле `"exports": "./.stylelintrc",` в package.json

## [2.0.2] — 2023–07–25
Обновили peerDependencies

## [2.0.1] — 2023–07–20
Добавили `media-query-no-invalid`, которое [запрещает недопустимые медиа-запросы](https://stylelint.io/user-guide/rules/media-query-no-invalid/) и `media-feature-name-value-no-unknown`, которое [запрещает неизвестные значения для медиавыражений](https://stylelint.io/user-guide/rules/media-feature-name-value-no-unknown). 

## [2.0.0] — 2023–07–20

### Изменено

- Основной файл конфига конвертирован из js в json с переименованием его в стандартное имя конфига для stylelint — `.stylelintrc`. Теперь stylelint распознаёт его как свой конфиг и применяет прямо в этом проекте. Конфиг теперь можно взять и не изменяя использовать в другом месте даже без подключения его как зависимость. И, что наиболее важно, можно легко копировать из него строки и вставлять в свой, расширяемый этим, конфиг для переопределения правил.
- Правила отсортированы по алфавиту для более быстрого и удобного поиска. Именование правил уже само по себе группирует их так, чтобы было проще их найти.
- `package.json` реорганизован для большего удобства пользователей пакета.
- Команды линтинга теперь не нуждаются в уточнении синтаксиса, благодаря переопределениям (см. ниже).

### Добавлено

- Бэйджи в [README](./README.md) для наглядности состояния проекта.
- Файл с текстом [лицензии](./LICENSE.md).
- Переопределения (`overrides`) для кастомных синтаксисов `less` и `scss`. В эти переопределения:
  - для обоих синтаксисов добавлено отключение правила `declaration-property-value-no-unknown`, как и [советует документация Stylelint](https://stylelint.io/user-guide/rules/declaration-property-value-no-unknown/#:~:text=This%20rule%20is%20only%20appropriate%20for%20CSS.%20You%20should%20not%20turn%20it%20on%20for%20CSS%2Dlike%20languages%2C%20such%20as%20Sass%20or%20Less%2C%20as%20they%20have%20their%20own%20syntaxes.);
  - для `less` перенесено из общих правил разрешение кастомной функции `fade()`;
  - для `scss` перенесено из общих правил разрешение кастомных директив, в которые добавлены `@use`, `@forward`, `@if`, `@else` и `@for`.
- Плагин `stylelint-codeguide`, возвращающий поддержку [удаляемых из Stylelint](https://stylelint.io/migration-guide/to-15/#:~:text=We%27ve%20deprecated%2076%20of%20the%20rules%20that%20enforce%20stylistic%20conventions) 76 [стилистических правил](https://github.com/firefoxic/stylelint-codeguide/blob/main/docs/user-guide/rules.md#rules). Теперь добавив к ним префикс `codeguide/` можно продолжать использовать их в stylelint@16+.


- Правило [`function-linear-gradient-no-nonstandard-direction`](https://stylelint.io/user-guide/rules/function-linear-gradient-no-nonstandard-direction/) с требованием валидных и стандартных значения направления линейных градиентов: углы или `to` с названием одной или двух смежных сторон.

  ```css
  /* Хорошо */
  a { background: linear-gradient(45%, #ffffff, #000000); }
  a { background: linear-gradient(to top, #ffffff, #000000); }
  a { background: linear-gradient(to top left, #ffffff, #000000); }

  /* Плохо */
  a { background: linear-gradient(45, #ffffff, #000000); }
  a { background: linear-gradient(top, #ffffff, #000000); }
  a { background: linear-gradient(to top top, #ffffff, #000000); }
  a { background: linear-gradient(to top bottom, #ffffff, #000000); }
  ```

  - Правило [`declaration-colon-newline-after`](https://stylelint.io/user-guide/rules/list/declaration-colon-newline-after/) с требованием переноса строки после двоеточия в многострочных декларациях.

  ```css
  /* Хорошо */
  a {
    background: url("foo.png"), url("bar.png");
  }
  a {
    background:
      url("foo.png"),
      url("bar.png");
  }
  a {
    transform: translate(1px, 1px);
  }
  a {
    transform:
      translate(
        1px,
        1px
      );
  }

  /* Плохо */
  a {
    transform: translate(
      1px,
      1px
    );
  }
  a {
    background: url("foo.png"),
      url("bar.png");
  }
  ```

- Правило [`import-notation`](https://stylelint.io/user-guide/rules/import-notation/) с требованием указания пути простой строкой, а не функцией `url()`, потому что хоть в CSS и работают оба варианта, но Sass склеивает только варианты со строками, а с `url()` оставляет в коде.

  ```css
  /* Хорошо */
  @import "foo.css";

  /* Плохо */
  @import url("foo.css");
  ```

- Правило [`selector-max-compound-selectors`](https://stylelint.io/user-guide/rules/selector-max-compound-selectors/) с запретом уровня сложности составных селекторов выше 3. Сложносоставные селекторы — это те, что ошибочно называют селекторами потомка или вложенности. Ошибочно, потому что любые комбинаторы повышают уровень сложности составного селектора, включая `+` и `~`, которые «не увеличивают вложенность».

  ```css
  /* Хорошо */
  .foo div {}
  .foo > .bar {}
  .foo + .bar:not(a ~ b) {}

  /* Плохо */
  .foo .bar .baz {}
  .foo .bar + .baz {}
  .foo {
    .baz {
      & > .bar {}
    }
  }
  ```

### Исправлено

- Ограничение вложенности. Правило [`max-nesting-depth`](https://stylelint.io/user-guide/rules/list/max-nesting-depth/) ограничивает именно вложенности блоков кода (фигурных скобок) друг в друга (уберегая от «ад вложенности» вроде «ада колбэков» в JS), а не так называемые «вложенные селекторы», которые правильнее называть _сложносоставными селекторами_. Причём прежняя настройка ингнорирования директивы `@media` отключала линтинг этим правилом внутри вложенной `@media`, что позволяет делать там неограниченное количество уровней вложенности. Новая настройка игнорирует псевдоклассы всегда и директивы тогда, когда они не содержат собственные CSS-правила, а лишь оборачивают собой другие блоки кода. И при этом внутри проигнорированных псевдоклассов и директив продолжается подсчёт уровеней вложенности.

  ```css
  /* Хорошо */
  a {
    b {              /* 1 */
      i {            /* 2 */
        top: 0;
      }
    }
  }
  .foo {
    &--bar {         /* 1 */
      a {            /* 2 */
        top: 0;
      }
    }
  }
  a {
    &:hover {
      b {            /* 1 */
        i {          /* 2 */
          top: 0;
        }
      }
    }
  }
  a {
    @media print {
      b {            /* 1 */
        i {          /* 2 */
          top: 0;
        }
      }
    }
  }
  a {
    @media print {   /* 1 */
      left: 0;
      b {            /* 2 */
        top: 0;
      }
    }
  }

  /* Плохо */
  a {
    b {              /* 1 */
      i {            /* 2 */
        u {          /* 3 */
          top: 0;
        }
      }
    }
  }
  .foo {
    &--bar {         /* 1 */
      b {            /* 2 */
        i {          /* 3 */
          top: 0;
        }
      }
    }
  }
  a {
    &:hover {
      b {            /* 1 */
        i {          /* 2 */
          u {        /* 3 */
            top: 0;
          }
        }
      }
    }
  }
  a {
    @media print {   /* 1 */
      left: 0;
      b {            /* 2 */
        i {          /* 3 */
          top: 0;
        }
      }
    }
  }
  a {
    @media print {
      b {            /* 1 */
        i {          /* 2 */
          u {        /* 3 */
            top: 0;
          }
        }
      }
    }
  }
  ```

### Удалено

- Ненужные отключения некоторых правил.

### Обновлено

- Этот файл (на основе [Keep a Changelog](https://keepachangelog.com/ru/1.1.0/)) для удобства.

## [1.1.5] — 2023–06–11

### Удалено

- Зависимость `stylelint-config-recommended` (с сохранением его правил).

### Исправлено

- Возможность указывать размерность длины у `0` в функции `var()`.

  ```css
  /* Хорошо */
  a { top: 0; }
  a { --foo: 0px; }
  a { top: var(--bar, 0px); }

  /* Плохо */
  a { top: 0px; }
  ```

## [1.1.4] — 2022–12–06

### Добавлено

- Правило [`font-weight-notation`](https://stylelint.io/user-guide/rules/font-weight-notation/) с требованием для `font-weight` только числовых значений или относительных ключевых слов `bolder` и `lighter` ([спецификация](https://drafts.csswg.org/css-fonts/#font-weight-prop)).

  ```css
  /* Хорошо */
  a { font-weight: 400; }
  a { font: bolder 20px system-ui; }

  /* Плохо */
  a { font-weight: normal; }
  a { font: bold 20px system-ui; }
    ```

## [1.1.3] — 2022–11–29

### Обновлено

- `stylelint` до верисии `14.15.0`.

## [1.1.2] — 2022–10–02

### Обновлено

- `stylelint` до верисии `14.13.0`.

## [1.1.1] — 2022–09–20

### Обновлено

- `stylelint` до верисии `14.12.0`.

## [1.1.0] — 2022–09–02

### Изменено

- Список правил отсортирован по [rules list](https://stylelint.io/user-guide/rules/list/).
- Значения текущих правил не поменялись, но некоторые дополнились новыми значениями. Одно правило может иметь несколько значений используя массив `[rule, rule2]`.

### Добавлено

- Правило [`color-hex-alpha`](https://stylelint.io/user-guide/rules/list/color-hex-alpha/) с запретом использования четвёртого параметра у hex-цветов для альфа-канала, потому что из значения `ab` не понятно сколько это в дробях, а при коммуникации мы используем человекопонятные «Прозрачность 67.1%».

  ```css
  /* Хорошо */
  a { color: #ffffff; }
  a { color: rgb(255 255 255 / 67.1%); }

  /* Плохо */
  a { color: #ffffffab; }
    ```

- Правило [`custom-property-no-missing-var-function`](https://stylelint.io/user-guide/rules/list/custom-property-no-missing-var-function/) с запретом использовать кастомные свойства без `var`.

  ```css
  /* Хорошо */
  a { color: var(--foo); }

  /* Плохо */
  a { color: --foo; }
    ```

- Правило [`function-calc-no-unspaced-operator`](https://stylelint.io/user-guide/rules/list/function-calc-no-unspaced-operator/) с требованием пробелов вокруг операторов в `calc()`.

  ```css
  /* Хорошо */
  a { top: calc(1px + 2px); }

  /* Плохо */
  a { top: calc(1px+2px); }
  ```

- В правило [`length-zero-no-unit`](https://stylelint.io/user-guide/rules/list/length-zero-no-unit/) игнорирование функции `var()`. Напоминание: кастомным свойствам лучше указывать единицы измерения.

  ```css
  /* Хорошо */
  a { top: 0; }
  a { --foo: 0px; }
  a { top: var(--bar, 0px); }

  /* Плохо */
  a { top: 0px; }
  ```

- Правило [`alue-keyword-case`](https://stylelint.io/user-guide/rules/list/value-keyword-case/) с требованием camelCase для ключевых слов из SVG, и нижнего регистра для всех остальных.

  ```css
  /* Хорошо */
  a { display: block; }
  a { top: currentColor; }

  /* Плохо */
  a { display: Block; }
  a { top: currentcolor; }
  ```

- Правило [`selector-not-notation`](https://stylelint.io/user-guide/rules/list/selector-not-notation/) с запретом сложного синтаксиса псевдокласса `:not()`.

  ```css
  /* Хорошо */
  :not(a):not(div) {}

  /* Плохо */
  :not(a, div) {}
  ```

- Правило [`annotation-no-unknown`](https://stylelint.io/user-guide/rules/list/annotation-no-unknown/) с запретом неизвестных аннотаций.

  ```css
  /* Хорошо */
  a { color: green !important; }

  /* Плохо */
  a { color: green !imprtant; }
  ```

- Правило [`keyframe-block-no-duplicate-selectors`](https://stylelint.io/user-guide/rules/list/keyframe-block-no-duplicate-selectors/) с запретом повторяющихся селекторов в `@keyframe`.

  ```css
  /* Хорошо */
  @keyframes foo { 0% {} 100% {} }

  /* Плохо */
  @keyframes foo { 0% {} 0% {} }
  ```

- Правило [`keyframe-selector-notation`](https://stylelint.io/user-guide/rules/list/keyframe-selector-notation/) с требованием однотипных селекторов в `@keyframes`: или только проценты, или только ключевые слова.

  ```css
  /* Хорошо */
  @keyframes foo { 0% {} 100% {} }
  @keyframes foo { from {} to {} }

  /* Плохо */
  @keyframes foo { from {} 100% {} }
  ```

- Правило [`selector-max-universal`](https://stylelint.io/user-guide/rules/list/selector-max-universal/) с запретом использования более двух универсальных селекторов подряд.

  ```css
  /* Хорошо */
  .foo * {}
  * * {}

  /* Плохо */
  * * * {}
  ```

## [1.0.0] — 2022–08–23

### Обновлено

- `stylelint` до верисии `14.11.0`.
- `stylelint-config-recommended` до верисии `9.0.0`.

## [0.1.12] — 2021–12–07

### Обновлено

- Небезопасные зависимости.

## [0.1.11] — 2021–11–09

### Добавлено

- Возможность указывать единицы измерения длины у `0` в кастомных свойствах, чтобы при использовании этих кастомных свойств в `calc()` у операндов всегда была верная размерность.

  ```css
  /* Хорошо */
  a { top: 0; }
  a { --foo: 0px; }

  /* Плохо */
  a { top: 0px; }
  ```

## [0.1.10] — 2021–06–15

### Обновлено

- Зависимости.

## [0.1.9] — 2021–06–15

### Добавлено

- Возможность использовать многострочность в фунциях, при этом не ломая однострочные функции. Это позволяет достичь комбинация правил:
  - [`declaration-colon-space-after`](https://stylelint.io/user-guide/rules/list/declaration-colon-space-after/) с требованием пробела после двоеточия только для деклараций с однострочной функцией.
  - [`function-comma-space-before`](https://stylelint.io/user-guide/rules/list/function-comma-space-before/) c запретом пробелов перед запятой между аргументами любых функций,
  - [`function-comma-space-after`](https://stylelint.io/user-guide/rules/list/function-comma-space-after/) с требованием пробела после запятой между аргументами однострочных функций,
  - [`function-parentheses-space-inside`](https://stylelint.io/user-guide/rules/list/function-parentheses-space-inside/) с запретом пробельных символов внутри скобок только у однострочных функций.

  ```css
  /* Хорошо */
  a {
    transform: translate(1px, 1px);
  }
  a {
    transform:
      translate(
        1px,
        1px
      );
  }

  /* Плохо */
  a {
    transform: translate(1px,1px);
  }
  a {
    transform: translate( 1px, 1px );
  }
  a {
    transform:
      translate(1px, 1px);
  }
  a {
    transform: translate(
      1px, 1px
    );
  }
  ```

  Спасибо @firefoxic

## [0.1.8] — 2021–06–10

### Обновлено

- Зависимости.

## [0.1.7] — 2021–06–04

### Исправлено

- Работа с зависимостями.

## [0.1.6] — 2021–06–01

### Изменено

- Правило [`color-no-hex`](https://stylelint.io/user-guide/rules/list/color-no-hex/) отключено, что разрешает писать hex-цвета.

### Добавлено

- Правило [`no-invalid-position-at-import-rule`](https://stylelint.io/user-guide/rules/list/no-invalid-position-at-import-rule/) с требованием указывать `@import` раньше всех остальных директив, кроме `@charset "utf-8";`.

  ```css
  /* Хорошо */
  @charset "utf-8";
  @import "foo.scss";
  @import "bar.scss";

  /* Плохо */
  @import "foo.scss";
  @media all {};
  @import "bar.scss";
  ```

- Правило [`color-no-invalid-hex`](https://stylelint.io/user-guide/rules/list/color-no-invalid-hex/) с запретом невалидных hex-цветов.

  ```css
  /* Хорошо */
  a { color: #fff1a0; }
  a { color: #123450aa; }

  /* Плохо */
  a { color: #fff1az; }
  a { color: #12345aa; }
    ```

- Правило [`color-named`](https://stylelint.io/user-guide/rules/list/color-named/) с запретом именованных цветов.

  ```css
  /* Хорошо */
  a { color: #ff0000; }
  a { color: rgb(255 0 0); }
  a { color: hsl(0 100% 50%); }

  /* Плохо */
  a { color: red; }
    ```

- Правило [`number-max-precision`](https://stylelint.io/user-guide/rules/list/number-max-precision/) с запретом превышения точности значений выше `2`.

  ```css
  /* Хорошо */
  a { top: 0; }
  a { top: 0.1%; }
  a { top: 0.12%; }

  /* Плохо */
  a { top: 0.123%; }
  ```

## [0.1.5] — 2021–05–28

### Изменено

- [README](./README.md) переведён на русский.

### Добавлено

- Тесты, чтобы правильнее следить за добавлением новых правил или изменением нынешних.
- Стартовый конфиг [stylelint-config-recommended](https://github.com/stylelint/stylelint-config-recommended#readme).
- Правило [`declaration-no-important`](https://stylelint.io/user-guide/rules/list/declaration-no-important/) с запретом использования аннотации `!important`.

  ```css
  /* Хорошо */
  a { color: #000000; }

  /* Плохо */
  a { color: #000000 !important; }
  ```

- Правило [`keyframe-declaration-no-important`](https://stylelint.io/user-guide/rules/list/keyframe-declaration-no-important/) с запретом использования аннотации `!important` в `@keyframes`.

  ```css
  /* Хорошо */
  @keyframes foo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Плохо */
  @keyframes foo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1 !important;
    }
  }
  ```

- Правило [`max-nesting-depth`](https://stylelint.io/user-guide/rules/list/max-nesting-depth/) с запретом уровней вложенности больше `2` без учёта директивы `@media`.

  ```css
  /* Хорошо */
  a {
    b {             /* 1 */
      i {           /* 2 */
        top: 0;
      }
    }
  }
  .foo {
    &--bar {        /* 1 */
      a {           /* 2 */
        top: 0;
      }
    }
  }
  a {
    &:hover {       /* 1 */
      b {           /* 2 */
        top: 0;
      }
    }
  }
  a {
    @media print {
      b {           /* 1 */
        i {         /* 2 */
          top: 0;
        }
      }
    }
  }

  /* Плохо */
  a {
    b {             /* 1 */
      i {           /* 2 */
        u {         /* 3 */
          top: 0;
        }
      }
    }
  }
  a {
    @--my-at-rule { /* 1 */
      b {           /* 2 */
        i {         /* 3 */
          top: 0;
        }
      }
    }
  }
  a {
    &--foo {        /* 1 */
      b {           /* 2 */
        i {         /* 3 */
          top: 0;
        }
      }
    }
  }
  a {
    b {             /* 1 */
      &:hover {     /* 2 */
        i {         /* 3 */
          top: 0;
        }
      }
    }
  }
  ```

### Удалено

- Правила, повторяющие правила из `stylelint-config-recommended`.

## [0.1.4] — 2019–07–08

### Добавлено

- Директива `@each` в перечень разрешенных.
- Правило `function-calc-no-invalid`.

## [0.1.1] — 2018–01–15

### Добавлено

- Правило [`font-family-no-missing-generic-family-keyword`](https://stylelint.io/user-guide/rules/list/font-family-no-missing-generic-family-keyword/) с требованием указания общего семейства шрифта.

  ```css
  /* Хорошо */
  a { font-family: Arial, sans-serif; }
  a { font: 1em / 1.3 Times, serif, Apple Color Emoji; }
  a { font: inherit; }
  a { font-family: var(--font-family-common); }
  a { font-family: Helvetica, var(--font-family-common); }

  /* Плохо */
  a { font-family: Helvetica, Arial, Verdana, Tahoma; }
  a { font: 1em / 1.3 Times; }
  ```

- Правило [`no-duplicate-at-import-rules`](https://stylelint.io/user-guide/rules/list/no-duplicate-at-import-rules/) с запретом дублирования `@import`.

  ```css
  /* Хорошо */
  @import "foo.scss";
  @import "bar.scss";

  /* Плохо */
  @import "foo.scss";
  @import "bar.scss";
  @import "foo.scss";
  ```

## [0.1.0] — 2017–09–11

### Добавлено

- Правила для `stylelint` версии `7.9.0`.

[2.0.4]: https://github.com/htmlacademy/stylelint-config-htmlacademy/compare/v2.0.3...HEAD
[2.0.3]: https://github.com/htmlacademy/stylelint-config-htmlacademy/compare/v2.0.2...v2.0.3
[2.0.2]: https://github.com/htmlacademy/stylelint-config-htmlacademy/compare/v2.0.1...v2.0.2
[2.0.1]: https://github.com/htmlacademy/stylelint-config-htmlacademy/compare/v2.0.0...v2.0.1
[2.0.0]: https://github.com/htmlacademy/stylelint-config-htmlacademy/compare/v1.1.5...v2.0.0
[1.1.5]: https://github.com/htmlacademy/stylelint-config-htmlacademy/compare/v1.1.4...v1.1.5
[1.1.4]: https://github.com/htmlacademy/stylelint-config-htmlacademy/compare/v1.1.3...v1.1.4
[1.1.3]: https://github.com/htmlacademy/stylelint-config-htmlacademy/compare/v1.1.2...v1.1.3
[1.1.2]: https://github.com/htmlacademy/stylelint-config-htmlacademy/compare/v1.1.1...v1.1.2
[1.1.1]: https://github.com/htmlacademy/stylelint-config-htmlacademy/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/htmlacademy/stylelint-config-htmlacademy/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/htmlacademy/stylelint-config-htmlacademy/compare/0.1.12...v1.0.0
[0.1.12]: https://github.com/htmlacademy/stylelint-config-htmlacademy/compare/0.1.11...0.1.12
[0.1.11]: https://github.com/htmlacademy/stylelint-config-htmlacademy/compare/0.1.10...0.1.11
[0.1.10]: https://github.com/htmlacademy/stylelint-config-htmlacademy/compare/0.1.9...0.1.10
[0.1.9]: https://github.com/htmlacademy/stylelint-config-htmlacademy/compare/0.1.8...0.1.9
[0.1.8]: https://github.com/htmlacademy/stylelint-config-htmlacademy/compare/0.1.7...0.1.8
[0.1.7]: https://github.com/htmlacademy/stylelint-config-htmlacademy/compare/0.1.6...0.1.7
[0.1.6]: https://github.com/htmlacademy/stylelint-config-htmlacademy/compare/0.1.5...0.1.6
[0.1.5]: https://github.com/htmlacademy/stylelint-config-htmlacademy/compare/0.1.4...0.1.5
[0.1.4]: https://github.com/htmlacademy/stylelint-config-htmlacademy/compare/0.1.1...0.1.4
[0.1.1]: https://github.com/htmlacademy/stylelint-config-htmlacademy/compare/v0.1.0...0.1.1
[0.1.0]: https://github.com/htmlacademy/stylelint-config-htmlacademy/compare/19622108...v0.1.0
