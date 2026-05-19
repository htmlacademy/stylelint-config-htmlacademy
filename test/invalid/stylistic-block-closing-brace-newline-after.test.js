import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/block-closing-brace-newline-after: newline required after closing brace',
  code: `
.alpha {
  color: #000000;
}.beta {
  color: #ffffff;
}
`,
  expected: [
    {line: 4, rule: '@stylistic/block-closing-brace-newline-after'},
  ],
});
