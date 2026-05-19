import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/selector-descendant-combinator-no-non-space: single space for descendant combinator',
  code: `
.alpha  .beta {
  color: #000000;
}
`,
  expected: [
    {line: 2, rule: '@stylistic/selector-descendant-combinator-no-non-space'},
  ],
});
