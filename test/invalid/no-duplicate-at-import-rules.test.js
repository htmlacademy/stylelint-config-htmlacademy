import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'no-duplicate-at-import-rules: duplicate @import (checked even though @import is otherwise forbidden)',
  customSyntax: 'postcss-scss',
  code: `
@import "a.scss";
@import "a.scss";
`,
  expected: [
    {line: 3, rule: 'no-duplicate-at-import-rules'},
  ],
});
