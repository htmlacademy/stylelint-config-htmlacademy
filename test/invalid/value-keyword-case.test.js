import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'value-keyword-case: lowercase required even for SVG-like keywords',
  code: `
.alpha {
  background: color-mix(in sRGB, red 50%, blue);
}

.beta {
  background: color-mix(in srgb, red 50%, blue);
}
`,
  expected: [
    {line: 3, rule: 'value-keyword-case'},
  ],
});
