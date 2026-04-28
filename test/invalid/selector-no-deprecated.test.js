import { testRule } from "../utils/testRule.js"

testRule({
  description: "selector-no-deprecated: deprecated selectors are forbidden",
  code: `
:-webkit-any(.a, .b) {
  color: #000000;
}

:-moz-any(.c, .d) {
  color: #000000;
}
`,
  expected: [
    { line: 2, rule: "selector-no-deprecated" },
    { line: 6, rule: "selector-no-deprecated" },
  ],
})
