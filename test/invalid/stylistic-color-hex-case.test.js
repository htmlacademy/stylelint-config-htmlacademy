import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/color-hex-case: lowercase hex digits',
  code: `
.alpha {
  color: #ABCDEF;
}
`,
  expected: [
    {line: 3, rule: '@stylistic/color-hex-case'},
  ],
});
