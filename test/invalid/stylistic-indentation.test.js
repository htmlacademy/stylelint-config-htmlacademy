import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/indentation: 2-space indentation required',
  code: `
.alpha {
    color: #000000;
}
`,
  expected: [
    {line: 3, rule: '@stylistic/indentation'},
  ],
});
