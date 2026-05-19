import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'named-grid-areas-no-invalid: grid template areas must form a rectangle',
  code: `
.alpha {
  grid-template-areas: "header header" "main";
}
`,
  expected: [
    {line: 3, rule: 'named-grid-areas-no-invalid'},
  ],
});
