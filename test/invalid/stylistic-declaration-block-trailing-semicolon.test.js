import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/declaration-block-trailing-semicolon: trailing semicolon required',
  code: `
.alpha {
  color: #000000
}
`,
  expected: [
    {line: 3, rule: '@stylistic/declaration-block-trailing-semicolon'},
  ],
});
