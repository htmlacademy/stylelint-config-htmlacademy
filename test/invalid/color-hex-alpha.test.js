import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'color-hex-alpha: alpha-channel hex values are forbidden',
  code: `
.alpha {
  color: #00000080;
}

.beta {
  color: #000000;
}
`,
  expected: [
    {line: 3, rule: 'color-hex-alpha'},
  ],
});
