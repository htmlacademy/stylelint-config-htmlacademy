import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'keyframe-declaration-no-important: !important inside @keyframes is forbidden',
  code: `
@keyframes fade-in {
  0% {
    opacity: 0% !important;
  }

  100% {
    opacity: 100%;
  }
}
`,
  expected: [
    {line: 4, rule: 'keyframe-declaration-no-important'},
  ],
});
