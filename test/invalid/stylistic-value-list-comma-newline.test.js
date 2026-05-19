import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/value-list-comma-newline-{before,after}: comma in multi-line value list must hug previous value',
  code: `
.alpha {
  font-family: "Arial"
    , sans-serif;
}
`,
  expected: [
    {line: 4, rule: '@stylistic/value-list-comma-newline-before'},
    {line: 4, rule: '@stylistic/value-list-comma-newline-after'},
  ],
});
