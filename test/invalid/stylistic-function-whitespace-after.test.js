import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/function-whitespace-after: whitespace required after function call',
  code: `
.alpha {
  transform: translateX(10px)rotate(45deg);
}
`,
  expected: [
    {line: 3, rule: '@stylistic/function-whitespace-after'},
  ],
});
