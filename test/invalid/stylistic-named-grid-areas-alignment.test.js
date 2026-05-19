import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/named-grid-areas-alignment: grid area tokens must align',
  code: `
.alpha {
  grid-template-areas:
    "header header header"
    "main aside aside";
}
`,
  expected: [
    {line: 4, rule: '@stylistic/named-grid-areas-alignment'},
  ],
});
