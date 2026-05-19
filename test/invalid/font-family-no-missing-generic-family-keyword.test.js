import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'font-family-no-missing-generic-family-keyword: generic family is required',
  code: `
.alpha {
  font-family: "Arial";
}
`,
  expected: [
    {line: 3, rule: 'font-family-no-missing-generic-family-keyword'},
  ],
});
