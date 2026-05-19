import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'selector-attribute-quotes: quotes required around attribute selector values',
  code: `
input[type=text] {
  color: #000000;
}
`,
  expected: [
    {line: 2, rule: 'selector-attribute-quotes'},
  ],
});
