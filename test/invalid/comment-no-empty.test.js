import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'comment-no-empty: empty comments are forbidden',
  code: `
/**/
.alpha {
  color: #000000;
}
`,
  expected: [
    {line: 2, rule: 'comment-no-empty'},
  ],
});
