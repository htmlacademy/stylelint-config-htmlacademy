import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/no-eol-whitespace: trailing whitespace at end of line is forbidden',
  code: '\n.alpha {\n  color: #000000;   \n}\n',
  expected: [
    {line: 3, rule: '@stylistic/no-eol-whitespace'},
  ],
});
