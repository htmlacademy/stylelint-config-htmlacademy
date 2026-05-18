import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/string-quotes: double quotes only',
  code: `
.foo {
  font-family: 'Inter', sans-serif;
}
`,
  expected: [
    {line: 3, rule: '@stylistic/string-quotes'},
  ],
});
