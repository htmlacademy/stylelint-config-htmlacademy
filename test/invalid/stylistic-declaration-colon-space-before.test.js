import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/declaration-colon-space-before: no space before colon',
  code: `
.alpha {
  color : #000000;
}
`,
  expected: [
    {line: 3, rule: '@stylistic/declaration-colon-space-before'},
  ],
});
