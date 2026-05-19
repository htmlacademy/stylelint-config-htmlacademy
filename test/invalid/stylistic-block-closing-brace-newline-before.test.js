import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/block-closing-brace-newline-before: newline required before closing brace',
  code: `
.alpha {
  color: #000000;}
`,
  expected: [
    {line: 3, rule: '@stylistic/block-closing-brace-newline-before'},
  ],
});
