import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/function-comma-space-after: space required after comma',
  code: `
.alpha {
  background: rgb(0,0,0);
}
`,
  expected: [
    {line: 3, rule: '@stylistic/function-comma-space-after'},
  ],
});
