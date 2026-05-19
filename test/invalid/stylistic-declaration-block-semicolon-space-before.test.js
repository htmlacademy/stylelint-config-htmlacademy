import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/declaration-block-semicolon-space-before: no space before semicolon',
  code: `
.alpha {
  color: #000000 ;
}
`,
  expected: [
    {line: 3, rule: '@stylistic/declaration-block-semicolon-space-before'},
  ],
});
