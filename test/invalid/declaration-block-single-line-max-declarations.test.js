import { testRule } from "../utils/testRule.js"

testRule({
  description: "declaration-block-single-line-max-declarations: 0 forbids inline blocks",
  code: `
.foo { color: #000000; }

.bar { color: #000000; font-size: 14px; }
`,
  expected: [
    { line: 2, rule: "declaration-block-single-line-max-declarations" },
    { line: 4, rule: "declaration-block-single-line-max-declarations" },
  ],
})
