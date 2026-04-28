import { testRule } from "../utils/testRule.js"

testRule({
  description: "selector-anb-no-unmatchable: nth-child(0) is forbidden",
  code: `
.foo:nth-child(0) {
  color: #000000;
}
`,
  expected: [
    { line: 2, rule: "selector-anb-no-unmatchable" },
  ],
})
