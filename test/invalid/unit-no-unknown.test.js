import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'unit-no-unknown: unknown unit is flagged',
  code: `
.alpha {
  width: 10badunit;
}
`,
  expected: [
    {line: 3, rule: 'unit-no-unknown'},
  ],
});
