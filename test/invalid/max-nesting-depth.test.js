import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'max-nesting-depth: 2 — fourth level is forbidden',
  customSyntax: 'postcss-scss',
  code: `
.alpha {
  color: #000000;

  .beta {
    color: #000000;

    .gamma {
      color: #000000;

      .delta {
        color: #000000;
      }
    }
  }
}
`,
  expected: [
    {line: 11, rule: 'max-nesting-depth'},
  ],
});
