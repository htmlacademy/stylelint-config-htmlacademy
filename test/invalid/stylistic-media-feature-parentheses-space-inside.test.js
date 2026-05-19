import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/media-feature-parentheses-space-inside: no spaces inside media-feature parens',
  code: `
@media ( orientation: portrait ) {
  .alpha {
    color: #000000;
  }
}
`,
  expected: [
    {line: 2, rule: '@stylistic/media-feature-parentheses-space-inside'},
  ],
});
