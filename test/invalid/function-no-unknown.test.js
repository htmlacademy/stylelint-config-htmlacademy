import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'function-no-unknown: unknown function is flagged',
  code: `
.alpha {
  width: unknown-func(10px);
}
`,
  expected: [
    {line: 3, rule: 'function-no-unknown'},
  ],
});
