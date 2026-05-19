import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/declaration-bang-space-before: space required before !important',
  code: `
.alpha {
  color: #000000!important;
}
`,
  expected: [
    {line: 3, rule: '@stylistic/declaration-bang-space-before'},
  ],
});
