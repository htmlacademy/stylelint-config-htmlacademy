import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/media-feature-name-case: lowercase media feature names',
  code: `
@media (ORIENTATION: portrait) {
  .alpha {
    color: #000000;
  }
}
`,
  expected: [
    {line: 2, rule: '@stylistic/media-feature-name-case'},
  ],
});
