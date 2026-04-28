import { testRule } from "../utils/testRule.js"

testRule({
  description: "no-unknown-custom-media: typo in @custom-media is caught",
  code: `
@custom-media --large (width >= 1024px);

@media (--larg) {
  .foo {
    color: #000000;
  }
}
`,
  expected: [
    { line: 4, rule: "no-unknown-custom-media" },
  ],
})
