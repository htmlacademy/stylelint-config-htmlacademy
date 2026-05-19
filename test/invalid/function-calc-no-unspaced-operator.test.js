import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'function-calc-no-unspaced-operator: operators in calc() require spaces',
  code: `
.alpha {
  width: calc(100% - 10px);
}

.beta {
  width: calc(100%-10px);
}
`,
  expected: [
    {line: 7, rule: 'function-calc-no-unspaced-operator'},
  ],
});
