import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/declaration-block-semicolon-newline-after: newline required after semicolon',
  code: `
.alpha {
  color: #000000; background: #ffffff;
}
`,
  expected: [
    {line: 3, rule: '@stylistic/declaration-block-semicolon-newline-after'},
  ],
});
