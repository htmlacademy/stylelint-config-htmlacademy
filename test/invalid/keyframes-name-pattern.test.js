import { testRule } from "../utils/testRule.js"

testRule({
  description: "keyframes-name-pattern: kebab-case keyframes",
  code: `
@keyframes slideIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes slide-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
`,
  expected: [
    { line: 2, rule: "keyframes-name-pattern" },
  ],
})
