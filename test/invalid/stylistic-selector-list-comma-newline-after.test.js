import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/selector-list-comma-newline-after: newline required after comma',
  code: `
.alpha, .beta {
  color: #000000;
}
`,
  expected: [
    {line: 2, rule: '@stylistic/selector-list-comma-newline-after'},
  ],
});
