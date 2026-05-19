import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/function-comma-newline-after: newline required after comma in multi-line function',
  code: `
.alpha {
  background: linear-gradient(to bottom, #000000,
    #ffffff);
}
`,
  expected: [
    {line: 3, rule: '@stylistic/function-comma-newline-after'},
  ],
});
