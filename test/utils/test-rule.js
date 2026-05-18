import {describe, it} from 'node:test';
import {strict as assert} from 'node:assert';
import {URL} from 'node:url';

import stylelint from 'stylelint';

/**
 * Run stylelint with the project config on the given CSS code and assert
 * that every expected warning is present (subset check).
 *
 * Each expected entry checks: rule name + 1-based line number. Optionally
 * severity and message regexp.
 *
 * @param {Object} options
 * @param {string} options.description
 * @param {string} options.code
 * @param {Array<{ line: number, rule: string, severity?: string, message?: RegExp }>} options.expected
 * @param {string} [options.customSyntax]
 */
export function testRule({description, code, expected, customSyntax}) {
  describe(description, () => {
    it('emits expected warnings', async () => {
      const {results} = await stylelint.lint({
        code,
        configFile: new URL('../../stylelint.config.js', import.meta.url).pathname,
        customSyntax,
      });

      const warnings = results[0].warnings.map((w) => ({
        line: w.line,
        rule: w.rule,
        severity: w.severity,
        text: w.text,
      }));

      const summary = warnings
        .map((w) => `  ${w.line}:${w.rule} — ${w.text}`)
        .join('\n');

      for (const expectation of expected) {
        const match = warnings.find(
          (w) =>
            w.rule === expectation.rule &&
            w.line === expectation.line &&
            (!expectation.severity || w.severity === expectation.severity) &&
            (!expectation.message || expectation.message.test(w.text)),
        );

        assert.ok(
          match,
          `Expected warning ${expectation.line}:${expectation.rule}${
            expectation.severity ? ` (severity ${expectation.severity})` : ''
          } not found.\nGot:\n${summary || '  (no warnings)'}`,
        );
      }
    });
  });
}
