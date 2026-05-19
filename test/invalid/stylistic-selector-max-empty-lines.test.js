import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/selector-max-empty-lines: no empty lines inside selector list',
  code: `
.alpha,

.beta {
  color: #000000;
}
`,
  expected: [
    {line: 2, rule: '@stylistic/selector-max-empty-lines'},
  ],
});
