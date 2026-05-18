import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'selector-max-id: 0 — id selectors are forbidden',
  code: `
#main {
  color: #000000;
}

.foo #bar {
  color: #000000;
}
`,
  expected: [
    {line: 2, rule: 'selector-max-id'},
    {line: 6, rule: 'selector-max-id'},
  ],
});
