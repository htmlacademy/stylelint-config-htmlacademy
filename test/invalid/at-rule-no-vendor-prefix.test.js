import { testRule } from "../utils/testRule.js"

testRule({
  description: "at-rule-no-vendor-prefix: -webkit-keyframes forbidden",
  code: `
@-webkit-keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
`,
  expected: [
    { line: 2, rule: "at-rule-no-vendor-prefix" },
  ],
})
