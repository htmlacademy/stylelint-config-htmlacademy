import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'at-rule-no-unknown: unknown at-rule is flagged',
  code: `
@unknown-rule {
  .alpha {
    color: #000000;
  }
}
`,
  expected: [
    {line: 2, rule: 'at-rule-no-unknown'},
  ],
});
