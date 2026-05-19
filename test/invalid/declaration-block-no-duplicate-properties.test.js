import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'declaration-block-no-duplicate-properties: same property declared twice',
  code: `
.alpha {
  color: #000000;
  color: #000000;
}
`,
  expected: [
    {line: 3, rule: 'declaration-block-no-duplicate-properties'},
  ],
});
