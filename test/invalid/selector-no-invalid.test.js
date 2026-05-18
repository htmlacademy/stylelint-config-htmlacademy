import { testRule } from "../utils/testRule.js"

testRule({
  description: "selector-no-invalid: syntactically invalid selectors are forbidden",
  code: `
[0foo] {
  color: #000000;
}

:nth-child(2n+) {
  color: #000000;
}
`,
  expected: [
    { line: 2, rule: "selector-no-invalid" },
    { line: 6, rule: "selector-no-invalid" },
  ],
})
