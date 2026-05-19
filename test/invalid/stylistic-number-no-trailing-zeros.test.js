import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/number-no-trailing-zeros: trailing zeros are forbidden',
  code: `
.alpha {
  width: 1.50em;
}
`,
  expected: [
    {line: 3, rule: '@stylistic/number-no-trailing-zeros'},
  ],
});
