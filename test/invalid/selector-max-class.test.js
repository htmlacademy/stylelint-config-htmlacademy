import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'selector-max-class: max 2 class selectors per chain',
  code: `
.alpha.beta.gamma {
  color: #000000;
}

.alpha.beta {
  color: #000000;
}
`,
  expected: [
    {line: 2, rule: 'selector-max-class'},
  ],
});
