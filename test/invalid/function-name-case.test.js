import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'function-name-case: function names must be lowercase',
  code: `
.alpha {
  width: CALC(100% - 10px);
}
`,
  expected: [
    {line: 3, rule: 'function-name-case'},
  ],
});
