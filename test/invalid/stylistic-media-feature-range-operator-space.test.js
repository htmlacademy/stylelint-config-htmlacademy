import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/media-feature-range-operator-space-*: spaces required around range operators',
  code: `
@media (width>=768px) {
  .alpha {
    color: #000000;
  }
}
`,
  expected: [
    {line: 2, rule: '@stylistic/media-feature-range-operator-space-before'},
    {line: 2, rule: '@stylistic/media-feature-range-operator-space-after'},
  ],
});
