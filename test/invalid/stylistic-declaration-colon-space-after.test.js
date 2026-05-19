import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/declaration-colon-space-after: space required after colon',
  code: `
.alpha {
  color:#000000;
}
`,
  expected: [
    {line: 3, rule: '@stylistic/declaration-colon-space-after'},
  ],
});
