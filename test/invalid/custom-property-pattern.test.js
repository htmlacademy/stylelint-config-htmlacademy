import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'custom-property-pattern: kebab-case required',
  code: `
:root {
  --colorPrimary: #000000;
  --color_secondary: #ffffff;
  --color-tertiary: #888888;
}
`,
  expected: [
    {line: 3, rule: 'custom-property-pattern'},
    {line: 4, rule: 'custom-property-pattern'},
  ],
});
