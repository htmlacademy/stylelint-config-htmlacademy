import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'selector-pseudo-class-no-unknown: unknown pseudo-class is flagged',
  code: `
.alpha:unknown-state {
  color: #000000;
}
`,
  expected: [
    {line: 2, rule: 'selector-pseudo-class-no-unknown'},
  ],
});
