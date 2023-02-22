'use strict'

module.exports = {
  rules: {
    'block-no-empty': true, //+
    'comment-no-empty': true, //+
    'declaration-block-no-duplicate-custom-properties': true, //+
    'declaration-block-no-shorthand-property-overrides': true, //+
    'font-family-no-duplicate-names': true, //+
    'function-linear-gradient-no-nonstandard-direction': null, //+
    'media-feature-name-no-unknown': true, //+
    'named-grid-areas-no-invalid': true, //+
    'no-empty-source': true, //+
    'no-invalid-double-slash-comments': true, //+
    'no-irregular-whitespace': true, //+
    'property-no-unknown': true, //+
    'selector-pseudo-class-no-unknown': true, //+
    'selector-pseudo-element-no-unknown': true, //+
    'string-no-newline': true, //+
    'unit-no-unknown': true, //+

    'declaration-property-value-no-unknown': true, //+

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
  }
}
