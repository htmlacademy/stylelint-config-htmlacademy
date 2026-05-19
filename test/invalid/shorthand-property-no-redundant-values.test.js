import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'shorthand-property-no-redundant-values: collapse identical sides',
  code: `
.alpha {
  margin: 10px 10px 10px 10px;
}

.beta {
  margin: 10px;
}
`,
  expected: [
    {line: 3, rule: 'shorthand-property-no-redundant-values'},
  ],
});
