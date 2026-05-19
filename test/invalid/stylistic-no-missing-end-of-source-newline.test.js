import {testRule} from '../utils/test-rule.js';

testRule({
  description: '@stylistic/no-missing-end-of-source-newline: file must end with newline',
  code: '\n.alpha {\n  color: #000000;\n}',
  expected: [
    {line: 4, rule: '@stylistic/no-missing-end-of-source-newline'},
  ],
});
