import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/selector-pseudo-element-case: lowercase pseudo-element names',
  code: `
.alpha::BEFORE {
  content: "";
}
`,
  expected: [
    {line: 2, rule: '@stylistic/selector-pseudo-element-case'},
  ],
});
