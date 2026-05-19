import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'no-invalid-position-at-import-rule: @import must come before other rules',
  customSyntax: 'postcss-scss',
  code: `
.alpha {
  color: #000000;
}

@import "b.scss";
`,
  expected: [
    {line: 6, rule: 'no-invalid-position-at-import-rule'},
  ],
});
