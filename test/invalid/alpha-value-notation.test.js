import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'alpha-value-notation: percentages required for opacity and alpha channels',
  code: `
.alpha {
  opacity: 0.5;
}

.beta {
  background: rgb(0 0 0 / 0.25);
}

.gamma {
  opacity: 50%;
  background: rgb(0 0 0 / 25%);
}
`,
  expected: [
    {line: 3, rule: 'alpha-value-notation'},
    {line: 7, rule: 'alpha-value-notation'},
  ],
});
