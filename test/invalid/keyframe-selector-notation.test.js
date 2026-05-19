import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'keyframe-selector-notation: keyword selectors must not mix with percentages',
  code: `
@keyframes fade-in {
  from {
    opacity: 0%;
  }

  50% {
    opacity: 50%;
  }

  to {
    opacity: 100%;
  }
}
`,
  expected: [
    {line: 3, rule: 'keyframe-selector-notation'},
  ],
});
