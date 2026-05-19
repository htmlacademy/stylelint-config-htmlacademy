import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/function-comma-newline-before: no newline before comma',
  code: `
.alpha {
  background: linear-gradient(to bottom, #000000
    , #ffffff);
}
`,
  expected: [
    {line: 4, rule: '@stylistic/function-comma-newline-before'},
  ],
});
