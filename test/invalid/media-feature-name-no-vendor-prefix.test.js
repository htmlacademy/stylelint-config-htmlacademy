import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'media-feature-name-no-vendor-prefix: vendor-prefixed media features are forbidden',
  code: `
@media (-webkit-min-device-pixel-ratio: 2) {
  .alpha {
    color: #000000;
  }
}
`,
  expected: [
    {line: 2, rule: 'media-feature-name-no-vendor-prefix'},
  ],
});
