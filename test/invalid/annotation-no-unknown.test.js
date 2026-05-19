import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'annotation-no-unknown: unknown post-value annotation is flagged',
  code: `
.alpha {
  color: #000000 !customannotation;
}
`,
  expected: [
    {line: 3, rule: 'annotation-no-unknown'},
  ],
});
