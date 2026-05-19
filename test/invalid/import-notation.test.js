import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'import-notation: string notation required (not url())',
  customSyntax: 'postcss-scss',
  code: `
@import url("a.scss");
`,
  expected: [
    {line: 2, rule: 'import-notation'},
  ],
});
