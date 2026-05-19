import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'media-query-no-invalid: syntactically invalid media query is flagged',
  code: `
@media screen and {
  .alpha {
    color: #000000;
  }
}
`,
  expected: [
    {line: 2, rule: 'media-query-no-invalid'},
  ],
});
