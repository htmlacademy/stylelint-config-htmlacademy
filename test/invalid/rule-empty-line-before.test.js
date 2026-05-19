import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'rule-empty-line-before: blank line required between rules',
  code: `
.alpha {
  color: #000000;
}
.beta {
  color: #ffffff;
}
`,
  expected: [
    {line: 5, rule: 'rule-empty-line-before'},
  ],
});
