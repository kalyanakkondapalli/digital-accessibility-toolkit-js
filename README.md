# Digital Accessibility Toolkit (DAT)

[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

Automated accessibility checker for websites using **Playwright + axe-core**. CLI, CI/CD, and dashboard support. Ensure WCAG 2.1 compliance easily.

## Quickstart

```bash
npm ci
node src/scanner.js https://example.com
```

## Docker

```bash
docker build -t dat_tool .
docker run -it dat_tool
```

## Tests
```bash
npm test
```

## JOSS Submission
JOSS-ready paper in `paper/paper.md` and bibliography `paper/paper.bib`.
