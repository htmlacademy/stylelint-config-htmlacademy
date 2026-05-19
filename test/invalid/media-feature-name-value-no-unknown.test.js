import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'media-feature-name-value-no-unknown: invalid value for known media feature',
  code: `
@media (orientation: square) {
  .alpha {
    color: #000000;
  }
}
`,
  expected: [
    {line: 2, rule: 'media-feature-name-value-no-unknown'},
  ],
});
