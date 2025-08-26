import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';

export async function runAccessibilityScan(url) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const results = await new AxeBuilder({ page }).analyze();
  await browser.close();
  return results;
}

if (process.argv[1] === process.argv[1]) {
  const url = process.argv[2];
  if (!url) {
    console.error("Usage: node scanner.js <URL>");
    process.exit(1);
  }
  runAccessibilityScan(url).then(results => {
    console.log(JSON.stringify(results, null, 2));
  });
}
