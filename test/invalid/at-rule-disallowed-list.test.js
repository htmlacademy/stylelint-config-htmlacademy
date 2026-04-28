import { testRule } from "../utils/testRule.js"

testRule({
  description: "at-rule-disallowed-list: @import is forbidden in CSS",
  code: `@import "foo.css";

.foo {
  color: #000000;
}
`,
  expected: [
    { line: 1, rule: "at-rule-disallowed-list" },
  ],
})
