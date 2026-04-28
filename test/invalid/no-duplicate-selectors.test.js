import { testRule } from "../utils/testRule.js"

testRule({
  description: "no-duplicate-selectors: same selector twice is forbidden",
  code: `
.foo {
  color: #000000;
}

.foo {
  font-size: 14px;
}
`,
  expected: [
    { line: 6, rule: "no-duplicate-selectors" },
  ],
})
