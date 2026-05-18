import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'selector-max-compound-selectors: max 2 compound selectors',
  code: `
.alpha .beta .gamma {
  color: #000000;
}

.alpha .beta {
  color: #000000;
}
`,
  expected: [
    {line: 2, rule: 'selector-max-compound-selectors'},
  ],
});
