import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'color-function-alias-notation: rgba/hsla aliases are forbidden',
  code: `
.foo {
  color: rgba(0 0 0 / 0.5);
}

.bar {
  color: hsla(120 50% 50% / 0.5);
}
`,
  expected: [
    {line: 3, rule: 'color-function-alias-notation'},
    {line: 7, rule: 'color-function-alias-notation'},
  ],
});
