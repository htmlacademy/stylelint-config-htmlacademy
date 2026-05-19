import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'time-min-milliseconds: durations below 100ms are forbidden',
  code: `
.alpha {
  transition: opacity 50ms ease;
}

.beta {
  animation: fade 0.05s ease;
}

.gamma {
  transition: opacity 200ms ease;
}
`,
  expected: [
    {line: 3, rule: 'time-min-milliseconds'},
    {line: 7, rule: 'time-min-milliseconds'},
  ],
});
