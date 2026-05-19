import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'value-no-vendor-prefix: vendor-prefixed values are forbidden',
  code: `
.alpha {
  width: -webkit-fit-content;
}
`,
  expected: [
    {line: 3, rule: 'value-no-vendor-prefix'},
  ],
});
