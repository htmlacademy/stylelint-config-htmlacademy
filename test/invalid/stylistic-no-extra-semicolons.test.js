import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/no-extra-semicolons: duplicate semicolons are forbidden',
  code: `
.alpha {
  color: #000000;;
}
`,
  expected: [
    {line: 3, rule: '@stylistic/no-extra-semicolons'},
  ],
});
