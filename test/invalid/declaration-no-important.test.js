import { testRule } from "../utils/testRule.js"

testRule({
  description: "declaration-no-important: !important produces a warning",
  code: `
.foo {
  color: #000000 !important;
}
`,
  expected: [
    { line: 3, rule: "declaration-no-important", severity: "warning" },
  ],
})
