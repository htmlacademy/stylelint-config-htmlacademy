import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'property-no-unknown: unknown property is flagged',
  code: `
.alpha {
  colur: #000000;
}
`,
  expected: [
    {line: 3, rule: 'property-no-unknown'},
  ],
});
