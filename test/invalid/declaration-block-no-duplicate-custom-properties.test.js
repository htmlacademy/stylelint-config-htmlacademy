import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'declaration-block-no-duplicate-custom-properties: same custom property declared twice',
  code: `
:root {
  --color-primary: #ffffff;
  --color-primary: #000000;
}
`,
  expected: [
    {line: 4, rule: 'declaration-block-no-duplicate-custom-properties'},
  ],
});
