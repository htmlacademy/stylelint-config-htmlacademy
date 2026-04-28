import { testRule } from "../utils/testRule.js"

testRule({
  description: "color-named: never — keywords like red are forbidden",
  code: `
.foo {
  color: red;
}

.bar {
  background-color: blue;
}
`,
  expected: [
    { line: 3, rule: "color-named" },
    { line: 7, rule: "color-named" },
  ],
})
