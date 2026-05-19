import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/value-list-max-empty-lines: no empty lines inside value lists',
  code: `
.alpha {
  font-family:
    "Arial",

    sans-serif;
}
`,
  expected: [
    {line: 3, rule: '@stylistic/value-list-max-empty-lines'},
  ],
});
