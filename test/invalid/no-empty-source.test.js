import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'no-empty-source: empty stylesheet is flagged',
  code: '   \n   \n',
  expected: [
    {line: 1, rule: 'no-empty-source'},
  ],
});
