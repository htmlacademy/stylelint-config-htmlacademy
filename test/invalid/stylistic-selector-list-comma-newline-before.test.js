import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/selector-list-comma-newline-before: no newline before comma in selector lists',
  code: `
.alpha
,
.beta {
  color: #000000;
}
`,
  expected: [
    {line: 3, rule: '@stylistic/selector-list-comma-newline-before'},
  ],
});
