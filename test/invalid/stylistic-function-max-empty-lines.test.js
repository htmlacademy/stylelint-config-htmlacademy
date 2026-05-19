import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/function-max-empty-lines: no empty lines inside functions',
  code: `
.alpha {
  background: rgb(

    0 0 0);
}
`,
  expected: [
    {line: 3, rule: '@stylistic/function-max-empty-lines'},
  ],
});
