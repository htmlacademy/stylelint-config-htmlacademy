import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/declaration-block-semicolon-{newline-before,space-after}: trailing semicolon must hug, single-line continuation requires space',
  customSyntax: 'postcss-scss',
  code: `
.alpha {
  color: #000000
  ;
}

.beta { color: #000000;background: #ffffff; }
`,
  expected: [
    {line: 4, rule: '@stylistic/declaration-block-semicolon-newline-before'},
    {line: 7, rule: '@stylistic/declaration-block-semicolon-space-after'},
  ],
});
