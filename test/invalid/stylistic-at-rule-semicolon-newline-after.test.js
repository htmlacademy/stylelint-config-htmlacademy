import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/at-rule-semicolon-newline-after: newline required after at-rule semicolon',
  code: `
@custom-media --tablet (width >= 768px);@custom-media --desktop (width >= 1024px);
`,
  expected: [
    {line: 2, rule: '@stylistic/at-rule-semicolon-newline-after'},
  ],
});
