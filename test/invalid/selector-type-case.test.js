import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'selector-type-case: type selectors must be lowercase',
  code: `
IMG {
  display: block;
}
`,
  expected: [
    {line: 2, rule: 'selector-type-case'},
  ],
});
