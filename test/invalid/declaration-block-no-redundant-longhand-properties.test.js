import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'declaration-block-no-redundant-longhand-properties: collapse longhands into shorthand',
  code: `
.alpha {
  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
}

.beta {
  margin: 10px;
}
`,
  expected: [
    {line: 3, rule: 'declaration-block-no-redundant-longhand-properties'},
  ],
});
