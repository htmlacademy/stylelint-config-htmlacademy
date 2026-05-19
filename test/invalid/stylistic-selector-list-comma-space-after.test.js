import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/selector-list-comma-space-after: space required after comma in single-line selector list',
  customSyntax: 'postcss-scss',
  code: `
.alpha,.beta { color: #000000; }
`,
  expected: [
    {line: 2, rule: '@stylistic/selector-list-comma-space-after'},
  ],
});
