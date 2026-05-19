import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/selector-pseudo-class-parentheses-space-inside: no spaces inside parens',
  code: `
.alpha:nth-child( 2n ) {
  color: #000000;
}
`,
  expected: [
    {line: 2, rule: '@stylistic/selector-pseudo-class-parentheses-space-inside'},
  ],
});
