import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'selector-pseudo-element-no-unknown: unknown pseudo-element is flagged',
  code: `
.alpha::unknown-part {
  color: #000000;
}
`,
  expected: [
    {line: 2, rule: 'selector-pseudo-element-no-unknown'},
  ],
});
