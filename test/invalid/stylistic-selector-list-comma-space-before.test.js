import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/selector-list-comma-space-before: no space before comma',
  code: `
.alpha ,
.beta {
  color: #000000;
}
`,
  expected: [
    {line: 2, rule: '@stylistic/selector-list-comma-space-before'},
  ],
});
