import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'font-weight-notation: numeric — keywords like bold are forbidden',
  code: `
.foo {
  font-weight: bold;
}

.bar {
  font-weight: normal;
}

.baz {
  font-weight: 700;
}
`,
  expected: [
    {line: 3, rule: 'font-weight-notation'},
    {line: 7, rule: 'font-weight-notation'},
  ],
});
