import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'function-url-quotes: quotes required around url() argument',
  code: `
.alpha {
  background-image: url(image.png);
}
`,
  expected: [
    {line: 3, rule: 'function-url-quotes'},
  ],
});
