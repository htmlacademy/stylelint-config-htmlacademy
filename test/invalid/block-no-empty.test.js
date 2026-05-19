import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'block-no-empty: empty blocks are forbidden',
  code: `
.alpha {}

.beta {
  color: #000000;
}
`,
  expected: [
    {line: 2, rule: 'block-no-empty'},
  ],
});
