import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'selector-max-type: max 2 type selectors per chain',
  code: `
.content section article p {
  color: #000000;
}

.content article p {
  color: #000000;
}
`,
  expected: [
    {line: 2, rule: 'selector-max-type'},
  ],
});
