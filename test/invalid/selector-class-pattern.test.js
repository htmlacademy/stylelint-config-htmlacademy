import { testRule } from "../utils/testRule.js"

testRule({
  description: "selector-class-pattern: only kebab-case / snake_case",
  code: `
.UpperCase {
  color: #000000;
}

.camelCase {
  color: #000000;
}

.kebab-case {
  color: #000000;
}
`,
  expected: [
    { line: 2, rule: "selector-class-pattern" },
    { line: 6, rule: "selector-class-pattern" },
  ],
})
