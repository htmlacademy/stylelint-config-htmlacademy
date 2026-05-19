import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'color-no-invalid-hex: invalid hex values are flagged',
  code: `
.alpha {
  color: #zzz;
}

.beta {
  color: #00000;
}
`,
  expected: [
    {line: 3, rule: 'color-no-invalid-hex'},
    {line: 7, rule: 'color-no-invalid-hex'},
  ],
});
