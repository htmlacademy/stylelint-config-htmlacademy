import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/at-rule-name-case: lowercase at-rule names',
  code: `
@MEDIA (width >= 768px) {
  .alpha {
    color: #000000;
  }
}
`,
  expected: [
    {line: 2, rule: '@stylistic/at-rule-name-case'},
  ],
});
