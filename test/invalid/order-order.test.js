import { testRule } from "../utils/testRule.js"

testRule({
  description: "order/order: declaration after nested rule is forbidden",
  customSyntax: "postcss-scss",
  code: `
.foo {
  --color: #000000;
  color: #000000;

  &:hover {
    color: #ffffff;
  }

  font-size: 14px;
}
`,
  expected: [
    { line: 10, rule: "order/order" },
  ],
})
