'use strict'

module.exports = {
  extends: 'stylelint-config-recommended',
  rules: {
    'annotation-no-unknown': true,

    'color-no-invalid-hex' : true,

    'font-family-no-missing-generic-family-keyword' : true,

    'function-calc-no-unspaced-operator': true,
    'function-no-unknown': [true, {
      ignoreFunctions: [
        'fade', // less function
      ]
    }],

    'custom-property-no-missing-var-function': true,

    'keyframe-declaration-no-important' : true,

    'keyframe-block-no-duplicate-selectors' : true,

    'declaration-block-no-duplicate-properties': true,

    'selector-type-no-unknown': true,

    'at-rule-no-unknown': [true, {
      'ignoreAtRules': [
        'mixin',
        'define-mixin',
        'include',
        'content',
        'rules',
        'each'
      ]
    }],

    'no-descending-specificity' : null,
    'no-duplicate-at-import-rules' : true,
    'no-invalid-position-at-import-rule': true,

    'color-hex-alpha': 'never',
    'color-hex-length': 'long',
    'color-named' : 'never',
    'color-no-hex' : null,

    'length-zero-no-unit': [true, {
      'ignore': ['custom-properties'],
      'ignoreFunctions': ['/^--/'],
    }],

    'font-family-name-quotes': 'always-unless-keyword',
    'font-weight-notation': [
      "numeric",
      {
        'ignore': [
          "relative"
        ]
      }
    ],

    'function-url-quotes': 'always',

    'import-notation': null,

    'keyframe-selector-notation': 'percentage-unless-within-keyword-only-block',

    'number-max-precision' : 2,

    'value-no-vendor-prefix': true,

    'property-allowed-list': null,
    'property-disallowed-list': null,
    'property-no-vendor-prefix': true,

    'declaration-no-important' : true,
    'declaration-property-max-values': null,

    'selector-attribute-quotes': 'always',
    'selector-max-id': 0,
    'selector-max-universal': 2,
    'selector-not-notation': 'simple',
    'selector-pseudo-element-colon-notation': 'double',

    'rule-selector-property-disallowed-list': null,

    'media-feature-name-no-vendor-prefix': true,

    'at-rule-no-vendor-prefix': true,

    'max-nesting-depth' : [2, { 'ignoreAtRules': ['media'] }],

    'value-keyword-case': ['lower', { 'camelCaseSvgKeywords' : true }],

    'function-name-case': 'lower',

    'selector-type-case': 'lower',

    'rule-empty-line-before': ['always', {
      'except': ['first-nested'],
      'ignore': ['after-comment']
    }],

    'at-rule-empty-line-before': ['always', {
      'except': [
        'first-nested',
        'blockless-after-blockless'
      ],
      'ignore': ['after-comment']
    }],

    'color-hex-case': 'lower',

    'function-comma-newline-after': 'always-multi-line',
    'function-comma-newline-before': 'never-multi-line',
    'function-comma-space-after': 'always-single-line',
    'function-comma-space-before': 'never',
    'function-max-empty-lines': 0,
    'function-parentheses-space-inside': 'never-single-line',
    'function-whitespace-after': 'always',

    'number-leading-zero': 'always',
    'number-no-trailing-zeros': true,

    'string-quotes': 'double',

    'unit-case': 'lower',

    'value-list-comma-newline-after': 'always-multi-line',
    'value-list-comma-newline-before': 'never-multi-line',
    'value-list-comma-space-after': 'always-single-line',
    'value-list-comma-space-before': 'never',
    'value-list-max-empty-lines': 0,

    'property-case': 'lower',

    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',

    'declaration-block-semicolon-newline-after': 'always',
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    'declaration-block-semicolon-space-after': 'always-single-line',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-trailing-semicolon': 'always',

    'block-closing-brace-empty-line-before': 'never',
    'block-closing-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always',
    'block-closing-brace-space-after': 'always-single-line',
    'block-closing-brace-space-before': 'always-single-line',
    'block-opening-brace-newline-after': 'always',
    'block-opening-brace-space-after': 'always-single-line',
    'block-opening-brace-space-before': 'always',

    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'selector-descendant-combinator-no-non-space': true,
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-element-case': 'lower',
    'selector-max-empty-lines': 0,

    'selector-list-comma-newline-after': 'always',
    'selector-list-comma-newline-before': 'never-multi-line',
    'selector-list-comma-space-after': 'always-single-line',
    'selector-list-comma-space-before': 'never',

    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-case': 'lower',
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',

    'media-query-list-comma-newline-after': 'always-multi-line',
    'media-query-list-comma-newline-before': 'never-multi-line',
    'media-query-list-comma-space-after': 'always-single-line',
    'media-query-list-comma-space-before': 'never-single-line',

    'at-rule-name-case': 'lower',
    'at-rule-name-space-after': 'always',
    'at-rule-semicolon-newline-after': 'always',

    'indentation': 2,
    'max-empty-lines': 2,
    'no-eol-whitespace': true,
    'no-missing-end-of-source-newline': true,
  }
}
