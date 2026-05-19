import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/max-empty-lines: maximum 2 consecutive empty lines',
  code: `
.alpha {
  color: #000000;
}



.beta {
  color: #ffffff;
}
`,
  expected: [
    {line: 7, rule: '@stylistic/max-empty-lines'},
  ],
});
