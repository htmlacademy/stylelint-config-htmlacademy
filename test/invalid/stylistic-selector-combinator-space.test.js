import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/selector-combinator-space-*: spaces required around combinators',
  code: `
.alpha>.beta {
  color: #000000;
}

.gamma >.delta {
  color: #000000;
}
`,
  expected: [
    {line: 2, rule: '@stylistic/selector-combinator-space-before'},
    {line: 2, rule: '@stylistic/selector-combinator-space-after'},
    {line: 6, rule: '@stylistic/selector-combinator-space-after'},
  ],
});
