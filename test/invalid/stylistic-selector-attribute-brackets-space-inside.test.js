import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/selector-attribute-brackets-space-inside: no spaces inside brackets',
  code: `
input[ type="text" ] {
  color: #000000;
}
`,
  expected: [
    {line: 2, rule: '@stylistic/selector-attribute-brackets-space-inside'},
  ],
});
