import { testRule } from "../utils/testRule.js"

testRule({
  description: "font-family-no-duplicate-names: monospace fallback is allowed",
  code: `
.real-duplicate {
  font-family: "Inter", "Inter", sans-serif;
}

.monospace-fallback-allowed {
  font-family: "Courier New", monospace, monospace;
}
`,
  expected: [
    { line: 3, rule: "font-family-no-duplicate-names" },
  ],
})
