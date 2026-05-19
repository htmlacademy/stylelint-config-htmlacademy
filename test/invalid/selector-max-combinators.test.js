import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'selector-max-combinators: max 2 combinators per chain',
  code: `
.list > .item + .item ~ .item {
  color: #000000;
}

.list > .item + .item {
  color: #000000;
}
`,
  expected: [
    {line: 2, rule: 'selector-max-combinators'},
  ],
});
