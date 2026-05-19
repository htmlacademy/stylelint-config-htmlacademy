import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/unit-case: lowercase units',
  code: `
.alpha {
  width: 100PX;
}
`,
  expected: [
    {line: 3, rule: '@stylistic/unit-case'},
  ],
});
