import { testRule } from "../utils/testRule.js"

testRule({
  description: "color-hex-length: long — short hex is forbidden",
  code: `
.foo {
  color: #fff;
}

.bar {
  color: #000;
}
`,
  expected: [
    { line: 3, rule: "color-hex-length" },
    { line: 7, rule: "color-hex-length" },
  ],
})
