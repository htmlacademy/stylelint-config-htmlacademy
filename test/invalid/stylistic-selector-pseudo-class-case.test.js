import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/selector-pseudo-class-case: lowercase pseudo-class names',
  code: `
.alpha:HOVER {
  color: #000000;
}
`,
  expected: [
    {line: 2, rule: '@stylistic/selector-pseudo-class-case'},
  ],
});
