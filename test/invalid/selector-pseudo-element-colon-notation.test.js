import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'selector-pseudo-element-colon-notation: double-colon notation required',
  code: `
.alpha:before {
  content: "";
}

.beta::before {
  content: "";
}
`,
  expected: [
    {line: 2, rule: 'selector-pseudo-element-colon-notation'},
  ],
});
