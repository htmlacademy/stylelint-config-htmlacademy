import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/value-list-comma-space-after: space required after comma in value lists',
  code: `
.alpha {
  font-family: "Arial",sans-serif;
}
`,
  expected: [
    {line: 3, rule: '@stylistic/value-list-comma-space-after'},
  ],
});
