import { testRule } from "../utils/testRule.js"

testRule({
  description: "color-function-notation: modern — legacy comma syntax forbidden",
  code: `
.foo {
  color: rgb(0, 0, 0);
}

.bar {
  color: hsl(120, 50%, 50%);
}
`,
  expected: [
    { line: 3, rule: "color-function-notation" },
    { line: 7, rule: "color-function-notation" },
  ],
})
