import {testRule} from '../utils/test-rule.js';

testRule({
  description: 'custom-media-pattern: kebab-case required',
  code: `
@custom-media --bpMobile (width >= 480px);

@custom-media --bp_tablet (width >= 768px);

@custom-media --bp-desktop (width >= 1024px);
`,
  expected: [
    {line: 2, rule: 'custom-media-pattern'},
    {line: 4, rule: 'custom-media-pattern'},
  ],
});
