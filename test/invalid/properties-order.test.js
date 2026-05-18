import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'order/properties-order: positioning before box-model before typography',
  code: `
.foo {
  color: #000000;
  display: flex;
  position: absolute;
}
`,
  expected: [
    {line: 4, rule: 'order/properties-order'},
    {line: 5, rule: 'order/properties-order'},
  ],
});
