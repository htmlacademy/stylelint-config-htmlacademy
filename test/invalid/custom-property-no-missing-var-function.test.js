import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'custom-property-no-missing-var-function: custom property referenced without var()',
  code: `
:root {
  --color-primary: #000000;
}

.alpha {
  color: --color-primary;
}
`,
  expected: [
    {line: 7, rule: 'custom-property-no-missing-var-function'},
  ],
});
