import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/media-query-list-comma-space-after: space required after comma',
  code: `
@media (width >= 768px),(width >= 1024px) {
  .alpha {
    color: #000000;
  }
}
`,
  expected: [
    {line: 2, rule: '@stylistic/media-query-list-comma-space-after'},
  ],
});
