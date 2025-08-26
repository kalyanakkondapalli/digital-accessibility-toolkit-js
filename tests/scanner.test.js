import { runAccessibilityScan } from '../src/scanner.js';

test('example.com should have no critical accessibility violations', async () => {
  const results = await runAccessibilityScan('https://example.com');
  const criticalViolations = results.violations.filter(v => v.impact === 'critical');
  expect(criticalViolations.length).toBe(0);
});
