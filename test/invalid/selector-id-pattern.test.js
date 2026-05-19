import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'selector-id-pattern: kebab-case required',
  code: `
#mainContent {
  color: #000000;
}

#main_content {
  color: #000000;
}

#main-content {
  color: #000000;
}
`,
  expected: [
    {line: 2, rule: 'selector-id-pattern'},
    {line: 6, rule: 'selector-id-pattern'},
  ],
});
