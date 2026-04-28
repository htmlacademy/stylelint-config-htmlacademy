import { testRule } from "../utils/testRule.js"

testRule({
  description: "property-no-vendor-prefix: -webkit-/-moz- prefixes are forbidden",
  code: `
.foo {
  -webkit-user-select: none;
  -moz-appearance: none;
  user-select: none;
}
`,
  expected: [
    { line: 3, rule: "property-no-vendor-prefix" },
    { line: 4, rule: "property-no-vendor-prefix" },
  ],
})
