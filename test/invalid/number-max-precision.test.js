import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'number-max-precision: at most 2 digits after the decimal point',
  code: `
.alpha {
  width: 12.345px;
}

.beta {
  width: 12.34px;
}
`,
  expected: [
    {line: 3, rule: 'number-max-precision'},
  ],
});
