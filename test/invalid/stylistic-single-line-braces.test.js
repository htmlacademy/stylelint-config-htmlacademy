import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/block-{opening,closing}-brace-space-*: spaces required around single-line block braces',
  customSyntax: 'postcss-scss',
  code: `
.alpha {color: #000000;}
`,
  expected: [
    {line: 2, rule: '@stylistic/block-opening-brace-space-after'},
    {line: 2, rule: '@stylistic/block-closing-brace-space-before'},
  ],
});
