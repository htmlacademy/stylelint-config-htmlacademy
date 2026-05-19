import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/block-opening-brace-newline-after: newline required after opening brace',
  code: `
.alpha { color: #000000;
}
`,
  expected: [
    {line: 2, rule: '@stylistic/block-opening-brace-newline-after'},
  ],
});
