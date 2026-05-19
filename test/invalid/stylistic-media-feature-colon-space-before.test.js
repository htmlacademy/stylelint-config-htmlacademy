import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/media-feature-colon-space-before: no space before colon',
  code: `
@media (orientation : portrait) {
  .alpha {
    color: #000000;
  }
}
`,
  expected: [
    {line: 2, rule: '@stylistic/media-feature-colon-space-before'},
  ],
});
