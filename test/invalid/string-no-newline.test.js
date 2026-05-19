import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'string-no-newline: unescaped newline in string is forbidden',
  code: '\n.alpha {\n  content: "foo\nbar";\n}\n',
  expected: [
    {line: 3, rule: 'string-no-newline'},
  ],
});
