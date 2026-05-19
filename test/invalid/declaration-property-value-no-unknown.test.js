import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'declaration-property-value-no-unknown: unknown value for property',
  code: `
.alpha {
  display: blockx;
}
`,
  expected: [
    {line: 3, rule: 'declaration-property-value-no-unknown'},
  ],
});
