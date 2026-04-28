import { testRule } from "../utils/testRule.js"

testRule({
  description: "selector-not-notation: complex — chained :not() is forbidden",
  code: `
.button:not(.is-disabled):not(.is-loading) {
  color: #000000;
}
`,
  expected: [
    { line: 2, rule: "selector-not-notation" },
  ],
})
