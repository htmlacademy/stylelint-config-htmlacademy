import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'selector-nested-pattern: nested selectors must reference parent via &',
  code: `
.alpha {
  color: #000000;

  .beta {
    color: #000000;
  }

  & .gamma {
    color: #000000;
  }

  &__delta {
    color: #000000;
  }

  .epsilon & {
    color: #000000;
  }
}
`,
  expected: [
    {line: 5, rule: 'selector-nested-pattern'},
  ],
});
