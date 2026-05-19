import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'declaration-block-no-shorthand-property-overrides: longhand before shorthand',
  code: `
.alpha {
  padding-top: 10px;
  padding: 20px;
}
`,
  expected: [
    {line: 4, rule: 'declaration-block-no-shorthand-property-overrides'},
  ],
});
