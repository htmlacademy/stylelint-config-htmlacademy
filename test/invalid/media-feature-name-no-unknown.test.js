import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'media-feature-name-no-unknown: unknown media feature is flagged',
  code: `
@media (unknown-feature: 1024px) {
  .alpha {
    color: #000000;
  }
}
`,
  expected: [
    {line: 2, rule: 'media-feature-name-no-unknown'},
  ],
});
