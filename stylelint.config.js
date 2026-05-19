import {propertiesOrder} from './properties-order.js';

export default {
  overrides: [
    {
      customSyntax: 'postcss-less',
      files: ['**/*.less'],
      rules: {
        'at-rule-disallowed-list': null,
        'declaration-property-value-no-unknown': null,
        'media-query-no-invalid': null,
        'selector-no-invalid': null,
        'function-no-unknown': [
          true,
          {
            ignoreFunctions: ['fade'],
          },
        ],
      },
    },
    {
      customSyntax: 'postcss-scss',
      files: ['**/*.scss'],
      rules: {
        'at-rule-disallowed-list': null,
        'declaration-property-value-no-unknown': null,
        'media-query-no-invalid': null,
        'selector-no-invalid': null,
        'at-rule-no-unknown': [
          true,
          {
            ignoreAtRules: [
              'content',
              'else',
              'for',
              'forward',
              'if',
              'include',
              'mixin',
              'each',
              'use',
            ],
          },
        ],
      },
    },
  ],
  plugins: ['@stylistic/stylelint-plugin', 'stylelint-order'],
  rules: {
    'no-descending-specificity': null,

    'declaration-block-no-duplicate-custom-properties': true,
    'declaration-block-no-duplicate-properties': true,
    'font-family-no-duplicate-names': [
      true,
      {
        ignoreFontFamilyNames: ['monospace'],
      },
    ],
    'keyframe-block-no-duplicate-selectors': true,
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,

    'block-no-empty': true,
    'comment-no-empty': true,
    'no-empty-source': true,

    'color-no-invalid-hex': true,
    'function-calc-no-unspaced-operator': true,
    'declaration-no-important': [
      true,
      {
        severity: 'warning',
      },
    ],
    'media-query-no-invalid': true,
    'named-grid-areas-no-invalid': true,
    'no-invalid-double-slash-comments': true,
    'no-invalid-position-at-import-rule': true,
    'string-no-newline': true,

    'no-irregular-whitespace': true,

    'custom-property-no-missing-var-function': true,
    'font-family-no-missing-generic-family-keyword': true,

    'function-linear-gradient-no-nonstandard-direction': true,

    'declaration-block-no-shorthand-property-overrides': true,

    'annotation-no-unknown': true,
    'at-rule-no-unknown': true,
    'declaration-property-value-no-unknown': true,
    'function-no-unknown': true,
    'media-feature-name-no-unknown': true,
    'media-feature-name-value-no-unknown': true,
    'no-unknown-custom-media': true,
    'no-unknown-custom-properties': true,
    'property-no-unknown': true,
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-element-no-unknown': true,
    'unit-no-unknown': true,
    'selector-type-no-unknown': true,

    'selector-anb-no-unmatchable': true,
    'selector-no-deprecated': true,
    'selector-no-invalid': true,

    'at-rule-disallowed-list': ['import'],
    'at-rule-no-vendor-prefix': true,

    'color-hex-alpha': 'never',
    'color-named': 'never',

    'keyframe-declaration-no-important': true,
    'keyframes-name-pattern': '^[a-z][a-z0-9]*(-[a-z0-9]+)*$',

    'length-zero-no-unit': [
      true,
      {
        ignore: ['custom-properties'],
        ignoreFunctions: ['var', '/^--/'],
      },
    ],

    'media-feature-name-no-vendor-prefix': true,

    'property-no-vendor-prefix': true,

    'value-no-vendor-prefix': true,

    'function-name-case': 'lower',
    'selector-type-case': 'lower',
    'value-keyword-case': 'lower',

    'at-rule-empty-line-before': [
      'always',
      {
        except: ['first-nested', 'blockless-after-blockless'],
        ignore: ['after-comment'],
      },
    ],
    'rule-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-comment'],
      },
    ],

    'declaration-block-single-line-max-declarations': 0,
    'max-nesting-depth': [
      2,
      {
        ignore: ['blockless-at-rules', 'pseudo-classes'],
      },
    ],
    'number-max-precision': 2,
    'time-min-milliseconds': 100,
    'selector-max-class': 2,
    'selector-max-combinators': 2,
    'selector-max-compound-selectors': 2,
    'selector-max-id': 0,
    'selector-max-type': 2,
    'selector-max-universal': 2,

    'alpha-value-notation': 'percentage',
    'color-function-alias-notation': 'without-alpha',
    'color-function-notation': 'modern',
    'color-hex-length': 'long',
    'lightness-notation': 'percentage',
    'font-weight-notation': [
      'numeric',
      {
        ignore: ['relative'],
      },
    ],
    'hue-degree-notation': null,
    'import-notation': 'string',
    'keyframe-selector-notation': 'percentage-unless-within-keyword-only-block',
    'media-feature-range-notation': 'context',
    'selector-not-notation': 'complex',
    'selector-pseudo-element-colon-notation': 'double',

    'custom-media-pattern': '^[a-z][a-z0-9-]*$',
    'custom-property-pattern': '^[a-z][a-z0-9-]*$',
    'selector-id-pattern': '^[a-z][a-z0-9-]*$',
    'selector-nested-pattern': '&',
    'selector-class-pattern': [
      '^[a-z][a-z0-9]*(-[a-z0-9]+)*(__[a-z][a-z0-9]*(-[a-z0-9]+)*)?(--[a-z][a-z0-9]*(-[a-z0-9]+)*)?$',
      {
        resolveNestedSelectors: true,
      },
    ],

    'font-family-name-quotes': 'always-unless-keyword',
    'function-url-quotes': 'always',
    'selector-attribute-quotes': 'always',

    'declaration-block-no-redundant-longhand-properties': true,
    'shorthand-property-no-redundant-values': true,

    'comment-whitespace-inside': 'always',

    '@stylistic/at-rule-name-case': 'lower',
    '@stylistic/at-rule-name-space-after': 'always',
    '@stylistic/at-rule-semicolon-newline-after': 'always',
    '@stylistic/block-closing-brace-empty-line-before': 'never',
    '@stylistic/block-closing-brace-newline-after': 'always',
    '@stylistic/block-closing-brace-newline-before': 'always',
    '@stylistic/block-closing-brace-space-after': 'always-single-line',
    '@stylistic/block-closing-brace-space-before': 'always-single-line',
    '@stylistic/block-opening-brace-newline-after': 'always',
    '@stylistic/block-opening-brace-space-after': 'always-single-line',
    '@stylistic/block-opening-brace-space-before': 'always',
    '@stylistic/color-hex-case': 'lower',
    '@stylistic/declaration-bang-space-after': 'never',
    '@stylistic/declaration-bang-space-before': 'always',
    '@stylistic/declaration-block-semicolon-newline-after': 'always',
    '@stylistic/declaration-block-semicolon-newline-before': 'never-multi-line',
    '@stylistic/declaration-block-semicolon-space-after': 'always-single-line',
    '@stylistic/declaration-block-semicolon-space-before': 'never',
    '@stylistic/declaration-block-trailing-semicolon': 'always',
    '@stylistic/declaration-colon-newline-after': 'always-multi-line',
    '@stylistic/declaration-colon-space-after': 'always-single-line',
    '@stylistic/declaration-colon-space-before': 'never',
    '@stylistic/function-comma-newline-after': 'always-multi-line',
    '@stylistic/function-comma-newline-before': 'never-multi-line',
    '@stylistic/function-comma-space-after': 'always-single-line',
    '@stylistic/function-comma-space-before': 'never',
    '@stylistic/function-max-empty-lines': 0,
    '@stylistic/function-parentheses-space-inside': 'never-single-line',
    '@stylistic/function-whitespace-after': 'always',
    '@stylistic/indentation': 2,
    '@stylistic/max-empty-lines': 2,
    '@stylistic/media-feature-colon-space-after': 'always',
    '@stylistic/media-feature-colon-space-before': 'never',
    '@stylistic/media-feature-name-case': 'lower',
    '@stylistic/media-feature-parentheses-space-inside': 'never',
    '@stylistic/media-feature-range-operator-space-after': 'always',
    '@stylistic/media-feature-range-operator-space-before': 'always',
    '@stylistic/media-query-list-comma-newline-after': 'always-multi-line',
    '@stylistic/media-query-list-comma-newline-before': 'never-multi-line',
    '@stylistic/media-query-list-comma-space-after': 'always-single-line',
    '@stylistic/media-query-list-comma-space-before': 'never-single-line',
    '@stylistic/no-eol-whitespace': true,
    '@stylistic/no-extra-semicolons': true,
    '@stylistic/no-missing-end-of-source-newline': true,
    '@stylistic/number-leading-zero': 'always',
    '@stylistic/number-no-trailing-zeros': true,
    '@stylistic/property-case': 'lower',
    '@stylistic/selector-attribute-brackets-space-inside': 'never',
    '@stylistic/selector-attribute-operator-space-after': 'never',
    '@stylistic/selector-attribute-operator-space-before': 'never',
    '@stylistic/selector-combinator-space-after': 'always',
    '@stylistic/selector-combinator-space-before': 'always',
    '@stylistic/selector-descendant-combinator-no-non-space': true,
    '@stylistic/selector-list-comma-newline-after': 'always',
    '@stylistic/selector-list-comma-newline-before': 'never-multi-line',
    '@stylistic/selector-list-comma-space-after': 'always-single-line',
    '@stylistic/selector-list-comma-space-before': 'never',
    '@stylistic/selector-max-empty-lines': 0,
    '@stylistic/selector-pseudo-class-case': 'lower',
    '@stylistic/selector-pseudo-class-parentheses-space-inside': 'never',
    '@stylistic/selector-pseudo-element-case': 'lower',
    '@stylistic/string-quotes': 'double',
    '@stylistic/unit-case': 'lower',
    '@stylistic/value-list-comma-newline-after': 'always-multi-line',
    '@stylistic/value-list-comma-newline-before': 'never-multi-line',
    '@stylistic/value-list-comma-space-after': 'always-single-line',
    '@stylistic/value-list-comma-space-before': 'never',
    '@stylistic/value-list-max-empty-lines': 0,
    '@stylistic/named-grid-areas-alignment': true,

    'order/order': ['custom-properties', 'declarations', 'rules'],
    'order/properties-order': [
      propertiesOrder,
      {
        unspecified: 'bottomAlphabetical',
      },
    ],
  },
};
