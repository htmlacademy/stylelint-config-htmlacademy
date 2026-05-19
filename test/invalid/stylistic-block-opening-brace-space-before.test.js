import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/block-opening-brace-space-before: space required before opening brace',
  code: `
.alpha{
  color: #000000;
}
`,
  expected: [
    {line: 2, rule: '@stylistic/block-opening-brace-space-before'},
  ],
});
