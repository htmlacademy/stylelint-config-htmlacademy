import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'font-family-name-quotes: quotes required around non-keyword names',
  code: `
.alpha {
  font-family: Arial Black, sans-serif;
}
`,
  expected: [
    {line: 3, rule: 'font-family-name-quotes'},
  ],
});
