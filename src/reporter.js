export function printReport(results) {
  results.violations.forEach(v => {
    console.log(`Impact: ${v.impact}, Help: ${v.help}, Nodes: ${v.nodes.length}`);
  });
}
