import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/block-closing-brace-space-after: space required after closing brace in selector lists',
  customSyntax: 'postcss-scss',
  code: `
.alpha { color: #000000; }.beta { color: #ffffff; }
`,
  expected: [
    {line: 2, rule: '@stylistic/block-closing-brace-space-after'},
  ],
});
