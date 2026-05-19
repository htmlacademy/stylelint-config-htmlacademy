import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'at-rule-empty-line-before: blank line required before at-rule',
  code: `
.alpha {
  color: #000000;
}
@media (width >= 768px) {
  .alpha {
    color: #ffffff;
  }
}
`,
  expected: [
    {line: 5, rule: 'at-rule-empty-line-before'},
  ],
});
