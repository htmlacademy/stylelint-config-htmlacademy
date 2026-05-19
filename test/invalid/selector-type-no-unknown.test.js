import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'selector-type-no-unknown: unknown type selector is flagged',
  code: `
unknown-element {
  color: #000000;
}
`,
  expected: [
    {line: 2, rule: 'selector-type-no-unknown'},
  ],
});
