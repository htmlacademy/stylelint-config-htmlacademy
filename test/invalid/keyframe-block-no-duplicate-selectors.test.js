import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'keyframe-block-no-duplicate-selectors: same keyframe selector declared twice',
  code: `
@keyframes fade-in {
  0% {
    opacity: 0%;
  }

  0% {
    opacity: 100%;
  }
}
`,
  expected: [
    {line: 7, rule: 'keyframe-block-no-duplicate-selectors'},
  ],
});
