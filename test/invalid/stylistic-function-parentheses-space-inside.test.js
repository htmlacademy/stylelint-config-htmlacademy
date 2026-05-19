import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/function-parentheses-space-inside: no spaces inside single-line parens',
  code: `
.alpha {
  width: calc( 100% - 10px );
}
`,
  expected: [
    {line: 3, rule: '@stylistic/function-parentheses-space-inside'},
  ],
});
