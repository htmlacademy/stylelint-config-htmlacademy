import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/block-closing-brace-empty-line-before: no empty line before closing brace',
  code: `
.alpha {
  color: #000000;

}
`,
  expected: [
    {line: 5, rule: '@stylistic/block-closing-brace-empty-line-before'},
  ],
});
