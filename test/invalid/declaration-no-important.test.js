import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'declaration-no-important: !important produces a warning',
  code: `
.foo {
  color: #000000 !important;
}
`,
  expected: [
    {line: 3, rule: 'declaration-no-important', severity: 'warning'},
  ],
});
