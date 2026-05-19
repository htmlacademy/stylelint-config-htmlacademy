import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/selector-attribute-operator-space-*: no spaces around attribute operator',
  code: `
input[type ="text"] {
  color: #000000;
}

input[type= "text"] {
  color: #000000;
}
`,
  expected: [
    {line: 2, rule: '@stylistic/selector-attribute-operator-space-before'},
    {line: 6, rule: '@stylistic/selector-attribute-operator-space-after'},
  ],
});
