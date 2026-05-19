import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/number-leading-zero: leading zero required for fractions',
  code: `
.alpha {
  width: .5em;
}
`,
  expected: [
    {line: 3, rule: '@stylistic/number-leading-zero'},
  ],
});
