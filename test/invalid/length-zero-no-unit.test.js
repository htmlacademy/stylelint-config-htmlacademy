import { testRule } from "../utils/testRule.js"

testRule({
  description: "length-zero-no-unit: 0 with units is forbidden",
  code: `
.foo {
  margin: 0px;
}

.bar {
  padding: 0em;
}
`,
  expected: [
    { line: 3, rule: "length-zero-no-unit" },
    { line: 7, rule: "length-zero-no-unit" },
  ],
})
