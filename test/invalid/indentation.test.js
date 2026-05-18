import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/indentation: 2 spaces',
  code: `.foo {
    color: #000000;
}
`,
  expected: [
    {line: 2, rule: '@stylistic/indentation'},
  ],
});
