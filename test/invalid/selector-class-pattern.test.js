import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'selector-class-pattern: strict BEM (block__element--modifier, kebab-case)',
  code: `
.UpperCase {
  color: #000000;
}

.camelCase {
  color: #000000;
}

.snake_case {
  color: #000000;
}

.block__element--mod--extra {
  color: #000000;
}

.block___element {
  color: #000000;
}

.block {
  color: #000000;
}

.block-name {
  color: #000000;
}

.block__element {
  color: #000000;
}

.block--modifier {
  color: #000000;
}

.block__element--modifier {
  color: #000000;
}
`,
  expected: [
    {line: 2, rule: 'selector-class-pattern'},
    {line: 6, rule: 'selector-class-pattern'},
    {line: 10, rule: 'selector-class-pattern'},
    {line: 14, rule: 'selector-class-pattern'},
    {line: 18, rule: 'selector-class-pattern'},
  ],
});
