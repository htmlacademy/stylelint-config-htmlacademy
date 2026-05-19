import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'no-unknown-custom-properties: typo in var() reference is caught',
  code: `
:root {
  --color-primary: #000000;
}

.alpha {
  color: var(--color-primaryy);
}

.beta {
  color: var(--color-primary);
}
`,
  expected: [
    {line: 7, rule: 'no-unknown-custom-properties'},
  ],
});
