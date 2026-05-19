import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/property-case: lowercase property names',
  code: `
.alpha {
  COLOR: #000000;
}
`,
  expected: [
    {line: 3, rule: '@stylistic/property-case'},
  ],
});
