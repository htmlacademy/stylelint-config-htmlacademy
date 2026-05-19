import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'comment-whitespace-inside: whitespace required inside block comments',
  code: `
/*no whitespace*/
.alpha {
  color: #000000;
}

/* with whitespace */
.beta {
  color: #000000;
}
`,
  expected: [
    {line: 2, rule: 'comment-whitespace-inside'},
  ],
});
