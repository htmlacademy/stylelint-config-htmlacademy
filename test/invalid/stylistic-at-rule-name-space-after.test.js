import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/at-rule-name-space-after: space required after at-rule name',
  code: `
@media(width >= 768px) {
  .alpha {
    color: #000000;
  }
}
`,
  expected: [
    {line: 2, rule: '@stylistic/at-rule-name-space-after'},
  ],
});
