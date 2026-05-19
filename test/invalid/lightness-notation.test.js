import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'lightness-notation: percentages required for oklch/oklab/lch/lab',
  code: `
.alpha {
  color: oklch(0.6 0.15 240);
}

.beta {
  color: lab(50 40 60);
}

.gamma {
  color: oklch(60% 0.15 240);
}
`,
  expected: [
    {line: 3, rule: 'lightness-notation'},
    {line: 7, rule: 'lightness-notation'},
  ],
});
