import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/declaration-colon-newline-after: newline required after colon in multi-line value',
  code: `
.alpha {
  font-family: "Arial",
    sans-serif;
}
`,
  expected: [
    {line: 3, rule: '@stylistic/declaration-colon-newline-after'},
  ],
});
