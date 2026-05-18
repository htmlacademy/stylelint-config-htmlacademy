import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'media-feature-range-notation: context — prefix notation forbidden',
  code: `
@media (min-width: 768px) {
  .foo {
    color: #000000;
  }
}

@media (max-width: 1199px) {
  .bar {
    color: #000000;
  }
}
`,
  expected: [
    {line: 2, rule: 'media-feature-range-notation'},
    {line: 8, rule: 'media-feature-range-notation'},
  ],
});
