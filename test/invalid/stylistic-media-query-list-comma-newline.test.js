import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/media-query-list-comma-newline-{before,after}: comma in multi-line list must hug previous query',
  code: `
@media (width >= 768px)
  , (width >= 1024px) {
  .alpha {
    color: #000000;
  }
}
`,
  expected: [
    {line: 3, rule: '@stylistic/media-query-list-comma-newline-before'},
    {line: 3, rule: '@stylistic/media-query-list-comma-newline-after'},
  ],
});
