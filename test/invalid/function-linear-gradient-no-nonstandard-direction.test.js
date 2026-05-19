import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'function-linear-gradient-no-nonstandard-direction: legacy direction keyword',
  code: `
.alpha {
  background: linear-gradient(top, #ffffff, #000000);
}
`,
  expected: [
    {line: 3, rule: 'function-linear-gradient-no-nonstandard-direction'},
  ],
});
