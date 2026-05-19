import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'selector-max-universal: at most 2 universal selectors per chain',
  code: `
* * * {
  color: #000000;
}

* * {
  color: #000000;
}
`,
  expected: [
    {line: 2, rule: 'selector-max-universal'},
  ],
});
